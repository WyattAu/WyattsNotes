---
id: chemical-kinetics
title: Chemical Kinetics
description:
  IB Chemistry — rate of reaction, rate equations, activation energy, and collision theory.
slug: chemical-kinetics
---

## Rate of Reaction

### Definition

The rate of a reaction is the change in concentration of a reactant or product per unit time.

$$
\text{Rate} = \frac{\Delta[\text{product}]}{\Delta t} = -\frac{\Delta[\text{reactant}]}{\Delta t}
$$

### Average Rate

$$
\text{Average rate} = \frac{[\text{A}]_2 - [\text{A}]_1}{t_2 - t_1}
$$

### Instantaneous Rate

The instantaneous rate is the gradient of the concentration-time graph at a specific point (the
tangent to the curve).

### Stoichiometric Relationship

For the reaction $a\text{A} + b\text{B} \to c\text{C} + d\text{D}$:

$$
\text{Rate} = -\frac{1}{a}\frac{d[\text{A}]}{dt} = -\frac{1}{b}\frac{d[\text{B}]}{dt} = \frac{1}{c}\frac{d[\text{C}]}{dt} = \frac{1}{d}\frac{d[\text{D}]}{dt}
$$

### Experimental Determination

Methods for measuring reaction rate:

| Method         | Measured Quantity          | Example                        |
| -------------- | -------------------------- | ------------------------------ |
| Gas collection | Volume of gas vs time      | CaCO$_3$ + HCl $\to$ CO$_2$    |
| Mass loss      | Mass vs time               | Gas-producing reactions        |
| Titration      | Concentration vs time      | Quenching samples at intervals |
| Colorimetry    | Absorbance vs time         | Coloured product formation     |
| Conductivity   | Conductance vs time        | Ions produced/consumed         |
| Clock reaction | Time for observable change | Iodine clock reaction          |

---

## Collision Theory

### Fundamental Idea

For a reaction to occur, reactant particles must:

1. **Collide** with sufficient energy (equal to or greater than the activation energy $E_a$).
2. Collide with the correct **orientation** (geometry).

### Activation Energy ($E_a$)

The minimum energy required for a successful collision. It is the energy barrier that must be
overcome for the reaction to proceed.

### Maxwell-Boltzmann Distribution

The Maxwell-Boltzmann distribution shows the distribution of molecular energies at a given
temperature:

- Most molecules have energies around the average.
- Few molecules have very low or very high energies.
- The curve is asymmetric (skewed to the right).
- The area under the curve represents the total number of molecules.

### Effect of Temperature

Increasing temperature:

- Shifts the Maxwell-Boltzmann curve to the right (higher average energy).
- Increases the proportion of molecules with energy $\ge E_a$.
- Increases the collision frequency.
- **Both effects** increase the rate, but the increase in the proportion of successful collisions is
  the dominant effect.

### Effect of Concentration/Pressure

Increasing concentration (for solutions) or pressure (for gases):

- Increases the number of particles per unit volume.
- Increases the collision frequency.
- Increases the rate of reaction.

### Effect of Surface Area

Increasing surface area (e.g., powder instead of a lump):

- More particles are exposed.
- More collisions per unit time.
- Increases the rate.

### Effect of Catalyst

A catalyst:

- Provides an alternative reaction pathway with a lower activation energy.
- Increases the rate of both forward and reverse reactions equally.
- Is NOT consumed in the reaction.
- Does NOT change the equilibrium position or $\Delta H$.

---

## Rate Equations

### Form of the Rate Equation

For a reaction between A and B:

$$
\text{Rate} = k[\text{A}]^m[\text{B}]^n
$$

where:

- $k$ is the **rate constant** (depends on temperature)
- $m$ is the **order of reaction with respect to A**
- $n$ is the **order of reaction with respect to B**
- $m + n$ is the **overall order of reaction**

### Orders of Reaction

| Order  | Effect on Rate                         | Concentration-Time Graph |
| ------ | -------------------------------------- | ------------------------ |
| Zero   | Rate is independent of concentration   | Linear decrease          |
| First  | Rate is proportional to concentration  | Exponential decay        |
| Second | Rate is proportional to $[\text{A}]^2$ | Steeper initial decline  |

### Units of the Rate Constant

For a rate equation $\text{Rate} = k[\text{A}]^m[\text{B}]^n$:

$$
\text{Units of } k = \frac{\text{mol/(L}\cdot\text{s)}}{(\text{mol/L})^{m+n}} = (\text{mol/L})^{1-(m+n)}\cdot\text{s}^{-1}
$$

| Overall Order | Units of $k$            |
| ------------- | ----------------------- |
| 0             | mol/(L$\cdot$s)         |
| 1             | s$^{-1}$                |
| 2             | L/(mol$\cdot$s)         |
| 3             | L$^2$/(mol$^2$$\cdot$s) |

### Zero-Order Reactions

$$
\text{Rate} = k \quad (\text{constant})
$$

$$
[\text{A}] = [\text{A}]_0 - kt
$$

The concentration decreases linearly with time.

### First-Order Reactions

$$
\text{Rate} = k[\text{A}]
$$

$$
[\text{A}] = [\text{A}]_0 e^{-kt}
$$

$$
\ln[\text{A}] = \ln[\text{A}]_0 - kt
$$

A plot of $\ln[\text{A}]$ vs $t$ gives a straight line with gradient $= -k$.

### Half-Life of First-Order Reactions

The half-life $t_{1/2}$ is independent of initial concentration:

$$
t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}
$$

### Second-Order Reactions

$$
\text{Rate} = k[\text{A}]^2
$$

$$
\frac{1}{[\text{A}]} = \frac{1}{[\text{A}]_0} + kt
$$

A plot of $\dfrac{1}{[\text{A}]}$ vs $t$ gives a straight line with gradient $= k$.

---

## Determining the Order of Reaction

### Initial Rates Method

1. Conduct experiments with different initial concentrations.
2. Measure the initial rate for each experiment.
3. Compare how the rate changes when one concentration changes while others are held constant.

:::info[Example]

For the reaction A + B $\to$ products, the following data was obtained:

| Experiment | [A] (mol/L) | [B] (mol/L) | Initial Rate (mol/L/s) |
| ---------- | ----------- | ----------- | ---------------------- |
| 1          | 0.10        | 0.10        | 0.020                  |
| 2          | 0.20        | 0.10        | 0.040                  |
| 3          | 0.10        | 0.20        | 0.080                  |

**Order with respect to A**: Doubling [A] (1 $\to$ 2) doubles the rate. Order $= 1$.

**Order with respect to B**: Doubling [B] (1 $\to$ 3) quadruples the rate. Order $= 2$.

Rate equation: $\text{Rate} = k[\text{A}][\text{B}]^2$

Overall order $= 3$.

**Rate constant**: From experiment 1: $0.020 = k(0.10)(0.10)^2 = k(0.001)$.

$$
k = 20\text{ L}^2/(\text{mol}^2\cdot\text{s})
$$

:::

### Graphical Method

| Plot                   | Straight Line Indicates |
| ---------------------- | ----------------------- |
| $[\text{A}]$ vs $t$    | Zero order              |
| $\ln[\text{A}]$ vs $t$ | First order             |
| $1/[\text{A}]$ vs $t$  | Second order            |

### Continuous Monitoring Method

Monitor the concentration of a reactant or product throughout the reaction and plot concentration vs
time. The shape of the curve indicates the order.

---

## The Arrhenius Equation

### Equation

$$
k = A e^{-E_a/RT}
$$

where:

- $k$ = rate constant
- $A$ = pre-exponential factor (frequency factor)
- $E_a$ = activation energy (J/mol)
- $R$ = gas constant $= 8.314\text{ J/(mol}\cdot\text{K)}$
- $T$ = temperature (K)

### Logarithmic Form

$$
\ln k = \ln A - \frac{E_a}{RT}
$$

### Graphical Determination of $E_a$

A plot of $\ln k$ vs $\dfrac{1}{T}$ gives a straight line:

- Gradient $= -\dfrac{E_a}{R}$
- $y$-intercept $= \ln A$

### Two-Point Form

$$
\ln\!\left(\frac{k_2}{k_1}\right) = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)
$$

:::info[Example]

The rate constant for a reaction is $3.2 \times 10^{-3}\text{ s}^{-1}$ at $300\text{ K}$ and
$1.5 \times 10^{-2}\text{ s}^{-1}$ at $350\text{ K}$. Find the activation energy.

$$
\ln\!\left(\frac{1.5 \times 10^{-2}}{3.2 \times 10^{-3}}\right) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{350}\right)
$$

$$
\ln(4.688) = \frac{E_a}{8.314}(0.000476)
$$

$$
1.545 = \frac{E_a}{8.314}(0.000476)
$$

$$
E_a = \frac{1.545 \times 8.314}{0.000476} = 26965\text{ J/mol} = 27.0\text{ kJ/mol}
$$

:::

### Temperature Rule of Thumb

As an approximation, the rate of many reactions roughly doubles for every $10\degree\text{C}$
increase in temperature (for reactions with typical activation energies near room temperature).

---

## Reaction Mechanisms

### Elementary Steps

A reaction mechanism is a sequence of elementary steps that together give the overall reaction.

### Molecularity

The molecularity of an elementary step is the number of molecules/ions that collide:

| Molecularity | Description             | Rate Law                                               |
| ------------ | ----------------------- | ------------------------------------------------------ |
| Unimolecular | One molecule reacts     | Rate $= k[\text{A}]$ (first order)                     |
| Bimolecular  | Two molecules collide   | Rate $= k[\text{A}][\text{B}]$ (second order)          |
| Termolecular | Three molecules collide | Rate $= k[\text{A}][\text{B}][\text{C}]$ (third order) |

### Rate-Determining Step

The **slowest step** in the mechanism determines the overall rate of reaction. The rate equation is
determined by the rate-determining step.

### Steady-State Approximation

Intermediates (species produced and consumed in the mechanism) do not appear in the rate equation
for the overall reaction.

:::info[Example]

The overall reaction is $2\text{NO}_2 + \text{F}_2 \to 2\text{NO}_2\text{F}$.

Proposed mechanism:

1. $\text{NO}_2 + \text{F}_2 \to \text{NO}_2\text{F} + \text{F}$ (slow)
2. $\text{NO}_2 + \text{F} \to \text{NO}_2\text{F}$ (fast)

The rate-determining step is step 1 (bimolecular):

$$
\text{Rate} = k[\text{NO}_2][\text{F}_2]
$$

The overall order is 2 (first order in NO$_2$, first order in F$_2$).

:::

---

## Catalysts

### Types of Catalysts

| Type          | Description                     | Examples                                                          |
| ------------- | ------------------------------- | ----------------------------------------------------------------- |
| Homogeneous   | Same phase as reactants         | Acid catalysis, transition metal ions in solution                 |
| Heterogeneous | Different phase from reactants  | Solid catalysts (Fe in Haber process, Pt in catalytic converters) |
| Enzymes       | Biological catalysts (proteins) | Amylase, catalase, DNA polymerase                                 |

### How Catalysts Work

Catalysts provide an alternative pathway with lower activation energy:

- More molecules have sufficient energy to react.
- The rate of successful collisions increases.
- The catalyst is regenerated at the end.

### Enzyme Catalysis

- Highly specific (lock-and-key or induced-fit model).
- Work optimally at specific temperature and pH.
- Can be denatured by extreme conditions.
- Have an active site where the substrate binds.

### Activation Energy Profile Diagrams

| Feature                | Uncatalysed   | Catalysed    |
| ---------------------- | ------------- | ------------ |
| $E_a$                  | Higher        | Lower        |
| $\Delta H$             | Same          | Same         |
| Transition state       | Higher energy | Lower energy |
| Reactants and products | Same energy   | Same energy  |

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

For the rate equation $\text{Rate} = k[\text{A}]^2[\text{B}]$, what are the units of $k$ when
concentrations are in mol/L and time in seconds?

$$
\text{Units of } k = \frac{\text{mol/(L}\cdot\text{s)}}{(\text{mol/L})^2 \times (\text{mol/L})} = \frac{\text{mol/(L}\cdot\text{s)}}{\text{mol}^3/\text{L}^3} = \text{L}^2/(\text{mol}^2\cdot\text{s})
$$

### Question 2 (Paper 2 style)

The following data was obtained for the reaction A + B $\to$ C:

| Experiment | [A] (mol/L) | [B] (mol/L) | Rate (mol/L/s)       |
| ---------- | ----------- | ----------- | -------------------- |
| 1          | 0.20        | 0.10        | $4.0 \times 10^{-3}$ |
| 2          | 0.40        | 0.10        | $8.0 \times 10^{-3}$ |
| 3          | 0.20        | 0.20        | $4.0 \times 10^{-3}$ |

**(a)** Deduce the order with respect to A and B.

Order in A: doubling [A] doubles rate $\implies$ first order.

Order in B: doubling [B] has no effect on rate $\implies$ zero order.

**(b)** Write the rate equation.

$$
\text{Rate} = k[\text{A}]
$$

**(c)** Calculate the rate constant.

$$
k = \frac{4.0 \times 10^{-3}}{0.20} = 0.020\text{ s}^{-1}
$$

**(d)** Explain why changing [B] does not affect the rate.

B may be involved in a fast step after the rate-determining step, or B does not appear in the
rate-determining step of the mechanism.

### Question 3 (Paper 2 style)

The rate constant of a reaction at $300\text{ K}$ is $5.0 \times 10^{-4}\text{ s}^{-1}$ and at
$350\text{ K}$ is $4.0 \times 10^{-3}\text{ s}^{-1}$.

**(a)** Calculate the activation energy.

$$
\ln\!\left(\frac{4.0 \times 10^{-3}}{5.0 \times 10^{-4}}\right) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{350}\right)
$$

$$
\ln(8) = \frac{E_a}{8.314}(0.000476)
$$

$$
2.079 = \frac{E_a}{8.314}(0.000476)
$$

$$
E_a = \frac{2.079 \times 8.314}{0.000476} = 36300\text{ J/mol} = 36.3\text{ kJ/mol}
$$

**(b)** Calculate the rate constant at $400\text{ K}$.

$$
\ln\!\left(\frac{k_{400}}{5.0 \times 10^{-4}}\right) = \frac{36300}{8.314}\left(\frac{1}{300} - \frac{1}{400}\right)
$$

$$
= 4367 \times 0.000833 = 3.638
$$

$$
\frac{k_{400}}{5.0 \times 10^{-4}} = e^{3.638} = 38.0
$$

$$
k_{400} = 1.90 \times 10^{-2}\text{ s}^{-1}
$$

### Question 4 (Paper 1 style)

Which statement about catalysts is correct?

A. They increase the activation energy. B. They are consumed in the reaction. C. They provide an
alternative reaction pathway with lower activation energy. D. They change the equilibrium constant.

**Answer: C.**

---

## Summary

| Concept                | Key Formula                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| Rate equation          | $\text{Rate} = k[\text{A}]^m[\text{B}]^n$                                     |
| Arrhenius equation     | $k = Ae^{-E_a/RT}$                                                            |
| Arrhenius (log form)   | $\ln k = \ln A - \dfrac{E_a}{RT}$                                             |
| Two-point Arrhenius    | $\ln(k_2/k_1) = \dfrac{E_a}{R}\!\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$ |
| First-order half-life  | $t_{1/2} = \dfrac{0.693}{k}$                                                  |
| First-order integrated | $\ln[\text{A}] = \ln[\text{A}]_0 - kt$                                        |

:::tip[Exam Strategy]

For rate equation questions, always use the initial rates method systematically. For Arrhenius
calculations, ensure temperature is in Kelvin and $E_a$ is in J/mol. For mechanism questions, the
rate equation is determined by the slow step — check if intermediates need to be substituted using
equilibrium approximations.

:::

---

## Chemical Kinetics: Extended

### Concentration-Time Graphs for Different Orders

| Order  | [A] vs t Graph                 | ln[A] vs t Graph | 1/[A] vs t Graph |
| ------ | ------------------------------ | ---------------- | ---------------- |
| Zero   | Straight line (negative slope) | Curve            | Curve            |
| First  | Exponential decay              | Straight line    | Curve            |
| Second | Steeper initial decline        | Curve            | Straight line    |

### Integrated Rate Laws Summary

| Order  | Rate Equation          | Integrated Form                                        | Half-Life                  |
| ------ | ---------------------- | ------------------------------------------------------ | -------------------------- |
| Zero   | Rate $= k$             | $[\text{A}] = [\text{A}]_0 - kt$                       | $\dfrac{[\text{A}]_0}{2k}$ |
| First  | Rate $= k[\text{A}]$   | $\ln[\text{A}] = \ln[\text{A}]_0 - kt$                 | $\dfrac{\ln 2}{k}$         |
| Second | Rate $= k[\text{A}]^2$ | $\dfrac{1}{[\text{A}]} = \dfrac{1}{[\text{A}]_0} + kt$ | $\dfrac{1}{k[\text{A}]_0}$ |

:::info[Example]

For a first-order reaction with $k = 0.025\text{ min}^{-1}$ and $[\text{A}]_0 = 0.50\text{ M}$:

(a) Find the concentration after $30\text{ minutes}$.

$$
\ln[\text{A}] = \ln(0.50) - 0.025(30) = -0.693 - 0.750 = -1.443
$$

$$
[\text{A}] = e^{-1.443} = 0.236\text{ M}
$$

(b) Find the time for the concentration to reach $0.10\text{ M}$.

$$
\ln(0.10) = \ln(0.50) - 0.025t
$$

$$
-2.303 = -0.693 - 0.025t
$$

$$
0.025t = 1.610 \implies t = 64.4\text{ min}
$$

(c) Find the half-life.

$$
t_{1/2} = \frac{0.693}{0.025} = 27.7\text{ min}
$$

:::

### Experimental Techniques for Rate Determination

| Technique    | Measurement                       | Suitable Reactions       |
| ------------ | --------------------------------- | ------------------------ |
| Gas syringe  | Volume of gas vs time             | Gas-producing reactions  |
| Mass loss    | Mass vs time                      | Gas-producing reactions  |
| Titration    | Concentration vs time (quenching) | Acid-base, redox         |
| Colorimetry  | Absorbance vs time                | Coloured species         |
| Conductivity | Conductance vs time               | Ions produced/consumed   |
| Pressure     | Pressure vs time                  | Gas-phase reactions      |
| Clock method | Time for visible change           | Iodine clock, persulfate |

### The Iodine Clock Reaction

The iodine clock is a classic kinetics experiment:

$$
\text{S}_2\text{O}_8^{2-} + 2\text{I}^- \to 2\text{SO}_4^{2-} + \text{I}_2
$$

A fixed amount of thiosulfate (S$_2$O$_3^{2-}$) is added. It reacts with the I$_2$ produced:

$$
2\text{S}_2\text{O}_3^{2-} + \text{I}_2 \to \text{S}_4\text{O}_6^{2-} + 2\text{I}^-
$$

When all the thiosulfate is consumed, I$_2$ accumulates and reacts with starch to give a blue-black
colour. The time for the colour change is measured.

### Effect of Surface Area: Quantitative

For a reaction on a solid surface, the rate is proportional to the surface area:

$$
\text{Rate} \propto \text{surface area}
$$

Cutting a cube into 8 smaller cubes doubles the surface area, doubling the rate.

---

## Enzyme Kinetics

### Michaelis-Menten Kinetics

For enzyme-catalysed reactions:

$$
v = \frac{V_{\max}[S]}{K_M + [S]}
$$

where:

- $v$ = reaction rate
- $V_{\max}$ = maximum rate (at saturation)
- $[S]$ = substrate concentration
- $K_M$ = Michaelis constant (substrate concentration at half $V_{\max}$)

### Key Features

- At low $[S]$: rate is approximately proportional to $[S]$ (first order).
- At high $[S]$: rate approaches $V_{\max}$ (zero order with respect to $[S]$).
- $K_M$ is a measure of the enzyme's affinity for the substrate (lower $K_M$ = higher affinity).

### Factors Affecting Enzyme Activity

| Factor                  | Effect                                                                       |
| ----------------------- | ---------------------------------------------------------------------------- |
| Temperature             | Optimum temperature; denaturation above                                      |
| pH                      | Optimum pH; denaturation at extremes                                         |
| Substrate concentration | Increases rate until $V_{\max}$                                              |
| Enzyme concentration    | Increases $V_{\max}$                                                         |
| Inhibitors              | Competitive: increases apparent $K_M$; Non-competitive: decreases $V_{\max}$ |

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

The decomposition of hydrogen peroxide is first order with respect to H$_2$O$_2$:

$$
2\text{H}_2\text{O}_2 \to 2\text{H}_2\text{O} + \text{O}_2
$$

The rate constant is $3.0 \times 10^{-3}\text{ min}^{-1}$ at $25\degree\text{C}$.

**(a)** If the initial concentration is $0.50\text{ M}$, how long does it take for the concentration
to drop to $0.10\text{ M}$?

$$
\ln(0.10) = \ln(0.50) - 3.0 \times 10^{-3} \times t
$$

$$
-2.303 = -0.693 - 0.003t
$$

$$
0.003t = 1.610 \implies t = 537\text{ min}
$$

**(b)** What is the half-life?

$$
t_{1/2} = \frac{0.693}{3.0 \times 10^{-3}} = 231\text{ min}
$$

**(c)** After how many half-lives will the concentration be $0.10\text{ M}$?

$$
0.10 = 0.50 \times \left(\frac{1}{2}\right)^n \implies \left(\frac{1}{2}\right)^n = 0.2
$$

$$
n = \frac{\ln 0.2}{\ln 0.5} = \frac{-1.609}{-0.693} = 2.32 \text{ half-lives}
$$

### Question 6 (Paper 1 style)

For a reaction with rate equation Rate $= k[\text{A}]^2[\text{B}]^0$, which statement is correct?

A. Doubling [A] doubles the rate. B. Doubling [A] quadruples the rate. C. Doubling [B] quadruples
the rate. D. The reaction is first order overall.

**Answer: B.** The rate depends on $[\text{A}]^2$, so doubling [A] increases the rate by a factor of
$2^2 = 4$. The reaction is second order overall.

### Question 7 (Paper 2 style)

The following data was collected for the reaction A + 2B $\to$ C + D:

| Experiment | [A] (M) | [B] (M) | Initial Rate (M/s)   |
| ---------- | ------- | ------- | -------------------- |
| 1          | 0.10    | 0.10    | $2.0 \times 10^{-4}$ |
| 2          | 0.20    | 0.10    | $8.0 \times 10^{-4}$ |
| 3          | 0.10    | 0.20    | $2.0 \times 10^{-4}$ |
| 4          | 0.20    | 0.20    | $8.0 \times 10^{-4}$ |

**(a)** Determine the order with respect to A and B.

Comparing 1 and 2: doubling [A] (4x rate increase) $\implies$ order in A $= 2$.

Comparing 1 and 3: doubling [B] (no change in rate) $\implies$ order in B $= 0$.

**(b)** Write the rate equation.

$$
\text{Rate} = k[\text{A}]^2
$$

**(c)** Calculate the rate constant $k$.

$$
k = \frac{2.0 \times 10^{-4}}{(0.10)^2} = \frac{2.0 \times 10^{-4}}{0.01} = 0.020\text{ L/(mol}\cdot\text{s)}
$$

**(d)** Propose a two-step mechanism consistent with this rate equation.

Step 1 (slow): A + A $\to$ E (rate-determining step)

Step 2 (fast): E + 2B $\to$ C + D

The rate-determining step involves 2 molecules of A (bimolecular), consistent with Rate
$= k[\text{A}]^2$.

---

## Chemical Kinetics: Extended Topics

### Determining Order from Concentration-Time Data

When given concentration-time data (not initial rates), use graphical methods:

1. Plot $[\text{A}]$ vs $t$: if linear, zero order.
2. Plot $\ln[\text{A}]$ vs $t$: if linear, first order. Gradient $= -k$.
3. Plot $1/[\text{A}]$ vs $t$: if linear, second order. Gradient $= k$.

:::info[Example]

The concentration of a reactant was measured over time:

| Time (min) | 0    | 10   | 20   | 30    | 40     |
| ---------- | ---- | ---- | ---- | ----- | ------ |
| [A] (M)    | 1.00 | 0.50 | 0.25 | 0.125 | 0.0625 |

Plotting $\ln[\text{A}]$ vs $t$:

| Time (min)      | 0   | 10       | 20       | 30       | 40       |
| --------------- | --- | -------- | -------- | -------- | -------- |
| $\ln[\text{A}]$ | 0   | $-0.693$ | $-1.386$ | $-2.079$ | $-2.773$ |

The $\ln[\text{A}]$ vs $t$ plot is linear with gradient $\approx -0.0693$, confirming first order
with $k = 0.0693\text{ min}^{-1}$.

Alternatively, note that $[\text{A}]$ halves every 10 minutes: $t_{1/2} = 10\text{ min}$.

$$
k = \frac{0.693}{10} = 0.0693\text{ min}^{-1}
$$

:::

### Effect of a Change in Temperature on the Rate Constant

The Arrhenius equation shows that increasing temperature always increases the rate constant (and
therefore the rate), regardless of whether the reaction is exothermic or endothermic.

### Temperature Coefficient ($Q_{10}$)

The temperature coefficient $Q_{10}$ is the factor by which the rate increases for a
$10\degree\text{C}$ temperature rise:

$$
Q_{10} = \frac{k_{T+10}}{k_T}
$$

For many reactions, $Q_{10} \approx 2$--$3$.

### Reaction Profiles and Energy Barriers

A reaction profile (energy diagram) shows:

- Reactants at the start.
- Products at the end.
- A peak representing the transition state.
- The activation energy $E_a$ is the difference between reactants and the peak.
- $\Delta H$ is the difference between products and reactants.

### Catalysts and Activation Energy

A catalyst provides an alternative pathway with a lower $E_a$:

- The reactant energy and product energy are unchanged.
- $\Delta H$ is unchanged.
- Both forward and reverse activation energies are lowered by the same amount.
- $K$ is unchanged (equilibrium position unaffected).
- The reaction reaches equilibrium faster.

### Heterogeneous Catalysts in Industry

| Catalyst   | Process               | Reaction                                     |
| ---------- | --------------------- | -------------------------------------------- |
| Iron       | Haber process         | N$_2$ + 3H$_2$ $\rightleftharpoons$ 2NH$_3$  |
| V$_2$O$_5$ | Contact process       | 2SO$_2$ + O$_2$ $\rightleftharpoons$ 2SO$_3$ |
| Pt/Rh      | Ostwald process       | 4NH$_3$ + 5O$_2$ $\to$ 4NO + 6H$_2$O         |
| Ni         | Hydrogenation         | Alkene $\to$ alkane                          |
| ZrO$_2$    | Ziegler-Natta process | Polymerisation of alkenes                    |

---

## Additional IB Exam-Style Questions

### Question 8 (Paper 2 style)

The rate constant for the decomposition of hydrogen iodide:

$$
2\text{HI} \to \text{H}_2 + \text{I}_2
$$

is $2.4 \times 10^{-21}\text{ L/(mol}\cdot\text{s)}$ at $300\text{ K}$ and
$1.2 \times 10^{-16}\text{ L/(mol}\cdot\text{s)}$ at $500\text{ K}$.

**(a)** Calculate the activation energy.

$$
\ln\!\left(\frac{1.2 \times 10^{-16}}{2.4 \times 10^{-21}}\right) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{500}\right)
$$

$$
\ln(5.0 \times 10^4) = \frac{E_a}{8.314}(0.001333)
$$

$$
10.82 = \frac{E_a}{8.314}(0.001333)
$$

$$
E_a = \frac{10.82 \times 8.314}{0.001333} = 67500\text{ J/mol} = 67.5\text{ kJ/mol}
$$

**(b)** Calculate the rate constant at $400\text{ K}$.

$$
\ln\!\left(\frac{k_{400}}{2.4 \times 10^{-21}}\right) = \frac{67500}{8.314}\left(\frac{1}{300} - \frac{1}{400}\right)
$$

$$
= 8119 \times 0.000833 = 6.763
$$

$$
\frac{k_{400}}{2.4 \times 10^{-21}} = e^{6.763} = 864
$$

$$
k_{400} = 864 \times 2.4 \times 10^{-21} = 2.07 \times 10^{-18}\text{ L/(mol}\cdot\text{s)}
$$

### Question 9 (Paper 1 style)

For a zero-order reaction, which graph gives a straight line with a negative gradient?

A. $[\text{A}]$ vs $t$ B. $\ln[\text{A}]$ vs $t$ C. $1/[\text{A}]$ vs $t$ D. Rate vs $[\text{A}]$

**Answer: A.** For a zero-order reaction, $[\text{A}] = [\text{A}]_0 - kt$, which is a straight line
with gradient $-k$.

### Question 10 (Paper 2 style)

In an experiment to determine the order of reaction with respect to iodide ions, the following
initial rate data was obtained:

| [I$^-$] (M) | [S$_2$O$_8^{2-}$] (M) | Initial Rate (M/s)   |
| ----------- | --------------------- | -------------------- |
| 0.10        | 0.10                  | $1.0 \times 10^{-5}$ |
| 0.20        | 0.10                  | $2.0 \times 10^{-5}$ |
| 0.10        | 0.20                  | $2.0 \times 10^{-5}$ |

**(a)** Determine the rate equation.

Doubling [I$^-$] doubles rate: first order in I$^-$.

Doubling [S$_2$O$_8^{2-}$] doubles rate: first order in S$_2$O$_8^{2-}$.

$$
\text{Rate} = k[\text{I}^-][\text{S}_2\text{O}_8^{2-}]
$$

**(b)** Calculate $k$.

$$
k = \frac{1.0 \times 10^{-5}}{0.10 \times 0.10} = 1.0 \times 10^{-3}\text{ L/(mol}\cdot\text{s)}
$$

**(c)** Propose a mechanism.

Step 1 (slow, rate-determining):
$\text{I}^- + \text{S}_2\text{O}_8^{2-} \to \text{IS}_2\text{O}_8^{3-}$

Step 2 (fast): $\text{IS}_2\text{O}_8^{3-} + \text{I}^- \to \text{I}_2 + 2\text{SO}_4^{2-}$

The slow step involves one molecule of each reactant, matching the rate equation.
