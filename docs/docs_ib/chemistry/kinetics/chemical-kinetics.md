---
title: Chemical Kinetics
description: IB Chemistry — rate of reaction, rate equations, activation energy, and
  collision theory.
slug: chemical-kinetics
---


## Rate of Reaction

### Definition

The rate of a reaction is the change in concentration of a reactant or product per unit time.

$$
\mathrm&lbrace;Rate&rbrace; = \frac&lbrace;\Delta[\mathrm&lbrace;product&rbrace;]&rbrace;&lbrace;\Delta t&rbrace; = -\frac&lbrace;\Delta[\mathrm&lbrace;reactant&rbrace;]&rbrace;&lbrace;\Delta t&rbrace;
$$

### Average Rate

$$
\mathrm&lbrace;Average rate&rbrace; = \frac&lbrace;[\mathrm&lbrace;A&rbrace;]_2 - [\mathrm&lbrace;A&rbrace;]_1&rbrace;&lbrace;t_2 - t_1&rbrace;
$$

### Instantaneous Rate

The instantaneous rate is the gradient of the concentration-time graph at a specific point (the
tangent to the curve).

### Stoichiometric Relationship

For the reaction $a\mathrm{A} + b\mathrm{B} \to c\mathrm{C} + d\mathrm{D}$:

$$
\mathrm&lbrace;Rate&rbrace; = -\frac&lbrace;1&rbrace;&lbrace;a&rbrace;\frac&lbrace;d[\mathrm&lbrace;A&rbrace;]&rbrace;&lbrace;dt&rbrace; = -\frac&lbrace;1&rbrace;&lbrace;b&rbrace;\frac&lbrace;d[\mathrm&lbrace;B&rbrace;]&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;1&rbrace;&lbrace;c&rbrace;\frac&lbrace;d[\mathrm&lbrace;C&rbrace;]&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;1&rbrace;&lbrace;d&rbrace;\frac&lbrace;d[\mathrm&lbrace;D&rbrace;]&rbrace;&lbrace;dt&rbrace;
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
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;A&rbrace;]^m[\mathrm&lbrace;B&rbrace;]^n
$$

where:

- $k$ is the **rate constant** (depends on temperature)
- $m$ is the **order of reaction with respect to A**
- $n$ is the **order of reaction with respect to B**
- $m + n$ is the **overall order of reaction**

### Orders of Reaction

| Order  | Effect on Rate                           | Concentration-Time Graph |
| ------ | ---------------------------------------- | ------------------------ |
| Zero   | Rate is independent of concentration     | Linear decrease          |
| First  | Rate is proportional to concentration    | Exponential decay        |
| Second | Rate is proportional to $[\mathrm{A}]^2$ | Steeper initial decline  |

### Units of the Rate Constant

For a rate equation $\mathrm{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n$:

$$
\mathrm&lbrace;Units of &rbrace; k = \frac&lbrace;\mathrm&lbrace;mol/(L&rbrace;\cdot\mathrm&lbrace;s)&rbrace;&rbrace;&lbrace;(\mathrm&lbrace;mol/L&rbrace;)^&lbrace;m+n&rbrace;&rbrace; = (\mathrm&lbrace;mol/L&rbrace;)^&lbrace;1-(m+n)&rbrace;\cdot\mathrm&lbrace;s&rbrace;^&lbrace;-1&rbrace;
$$

| Overall Order | Units of $k$            |
| ------------- | ----------------------- |
| 0             | mol/(L$\cdot$s)         |
| 1             | s$^{-1}$                |
| 2             | L/(mol$\cdot$s)         |
| 3             | L$^2$/(mol$^2$$\cdot$s) |

### Zero-Order Reactions

$$
\mathrm&lbrace;Rate&rbrace; = k \quad (\mathrm&lbrace;constant&rbrace;)
$$

$$
[\mathrm&lbrace;A&rbrace;] = [\mathrm&lbrace;A&rbrace;]_0 - kt
$$

The concentration decreases linearly with time.

### First-Order Reactions

$$
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;A&rbrace;]
$$

$$
[\mathrm&lbrace;A&rbrace;] = [\mathrm&lbrace;A&rbrace;]_0 e^&lbrace;-kt&rbrace;
$$

$$
\ln[\mathrm&lbrace;A&rbrace;] = \ln[\mathrm&lbrace;A&rbrace;]_0 - kt
$$

A plot of $\ln[\mathrm{A}]$ vs $t$ gives a straight line with gradient $= -k$.

### Half-Life of First-Order Reactions

The half-life $t_{1/2}$ is independent of initial concentration:

$$
t_&lbrace;1/2&rbrace; = \frac&lbrace;\ln 2&rbrace;&lbrace;k&rbrace; = \frac&lbrace;0.693&rbrace;&lbrace;k&rbrace;
$$

### Second-Order Reactions

$$
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;A&rbrace;]^2
$$

$$
\frac&lbrace;1&rbrace;&lbrace;[\mathrm&lbrace;A&rbrace;]&rbrace; = \frac&lbrace;1&rbrace;&lbrace;[\mathrm&lbrace;A&rbrace;]_0&rbrace; + kt
$$

A plot of $\dfrac{1}{[\mathrm{A}]}$ vs $t$ gives a straight line with gradient $= k$.

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

Rate equation: $\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]^2$

Overall order $= 3$.

**Rate constant**: From experiment 1: $0.020 = k(0.10)(0.10)^2 = k(0.001)$.

$$
k = 20\mathrm&lbrace; L&rbrace;^2/(\mathrm&lbrace;mol&rbrace;^2\cdot\mathrm&lbrace;s&rbrace;)
$$

:::

### Graphical Method

| Plot                     | Straight Line Indicates |
| ------------------------ | ----------------------- |
| $[\mathrm{A}]$ vs $t$    | Zero order              |
| $\ln[\mathrm{A}]$ vs $t$ | First order             |
| $1/[\mathrm{A}]$ vs $t$  | Second order            |

### Continuous Monitoring Method

Monitor the concentration of a reactant or product throughout the reaction and plot concentration vs
time. The shape of the curve indicates the order.

---

## The Arrhenius Equation

### Equation

$$
k = A e^&lbrace;-E_a/RT&rbrace;
$$

where:

- $k$ = rate constant
- $A$ = pre-exponential factor (frequency factor)
- $E_a$ = activation energy (J/mol)
- $R$ = gas constant $= 8.314\mathrm{ J/(mol}\cdot\mathrm{K)}$
- $T$ = temperature (K)

### Logarithmic Form

$$
\ln k = \ln A - \frac&lbrace;E_a&rbrace;&lbrace;RT&rbrace;
$$

### Graphical Determination of $E_a$

A plot of $\ln k$ vs $\dfrac{1}{T}$ gives a straight line:

- Gradient $= -\dfrac{E_a}{R}$
- $y$-intercept $= \ln A$

### Two-Point Form

$$
\ln\!\left(\frac&lbrace;k_2&rbrace;&lbrace;k_1&rbrace;\right) = -\frac&lbrace;E_a&rbrace;&lbrace;R&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;T_2&rbrace; - \frac&lbrace;1&rbrace;&lbrace;T_1&rbrace;\right) = \frac&lbrace;E_a&rbrace;&lbrace;R&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;T_1&rbrace; - \frac&lbrace;1&rbrace;&lbrace;T_2&rbrace;\right)
$$

:::info[Example]

The rate constant for a reaction is $3.2 \times 10^{-3}\mathrm{ s}^{-1}$ at $300\mathrm{ K}$ and
$1.5 \times 10^{-2}\mathrm{ s}^{-1}$ at $350\mathrm{ K}$. Find the activation energy.

$$
\ln\!\left(\frac&lbrace;1.5 \times 10^&lbrace;-2&rbrace;&rbrace;&lbrace;3.2 \times 10^&lbrace;-3&rbrace;&rbrace;\right) = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;300&rbrace; - \frac&lbrace;1&rbrace;&lbrace;350&rbrace;\right)
$$

$$
\ln(4.688) = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;(0.000476)
$$

$$
1.545 = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;(0.000476)
$$

$$
E_a = \frac&lbrace;1.545 \times 8.314&rbrace;&lbrace;0.000476&rbrace; = 26965\mathrm&lbrace; J/mol&rbrace; = 27.0\mathrm&lbrace; kJ/mol&rbrace;
$$

:::

### Temperature Rule of Thumb

As an approximation, the rate of many reactions roughly doubles for every $10\degree\mathrm{C}$
increase in temperature (for reactions with typical activation energies near room temperature).

---

## Reaction Mechanisms

### Elementary Steps

A reaction mechanism is a sequence of elementary steps that together give the overall reaction.

### Molecularity

The molecularity of an elementary step is the number of molecules/ions that collide:

| Molecularity | Description             | Rate Law                                                     |
| ------------ | ----------------------- | ------------------------------------------------------------ |
| Unimolecular | One molecule reacts     | Rate $= k[\mathrm{A}]$ (first order)                         |
| Bimolecular  | Two molecules collide   | Rate $= k[\mathrm{A}][\mathrm{B}]$ (second order)            |
| Termolecular | Three molecules collide | Rate $= k[\mathrm{A}][\mathrm{B}][\mathrm{C}]$ (third order) |

### Rate-Determining Step

The **slowest step** in the mechanism determines the overall rate of reaction. The rate equation is
determined by the rate-determining step.

### Steady-State Approximation

Intermediates (species produced and consumed in the mechanism) do not appear in the rate equation
for the overall reaction.

:::info[Example]

The overall reaction is $2\mathrm{NO}_2 + \mathrm{F}_2 \to 2\mathrm{NO}_2\mathrm{F}$.

Proposed mechanism:

1. $\mathrm{NO}_2 + \mathrm{F}_2 \to \mathrm{NO}_2\mathrm{F} + \mathrm{F}$ (slow)
2. $\mathrm{NO}_2 + \mathrm{F} \to \mathrm{NO}_2\mathrm{F}$ (fast)

The rate-determining step is step 1 (bimolecular):

$$
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;NO&rbrace;_2][\mathrm&lbrace;F&rbrace;_2]
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

For the rate equation $\mathrm{Rate} = k[\mathrm{A}]^2[\mathrm{B}]$, what are the units of $k$ when
concentrations are in mol/L and time in seconds?

$$
\mathrm&lbrace;Units of &rbrace; k = \frac&lbrace;\mathrm&lbrace;mol/(L&rbrace;\cdot\mathrm&lbrace;s)&rbrace;&rbrace;&lbrace;(\mathrm&lbrace;mol/L&rbrace;)^2 \times (\mathrm&lbrace;mol/L&rbrace;)&rbrace; = \frac&lbrace;\mathrm&lbrace;mol/(L&rbrace;\cdot\mathrm&lbrace;s)&rbrace;&rbrace;&lbrace;\mathrm&lbrace;mol&rbrace;^3/\mathrm&lbrace;L&rbrace;^3&rbrace; = \mathrm&lbrace;L&rbrace;^2/(\mathrm&lbrace;mol&rbrace;^2\cdot\mathrm&lbrace;s&rbrace;)
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
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;A&rbrace;]
$$

**(c)** Calculate the rate constant.

$$
k = \frac&lbrace;4.0 \times 10^&lbrace;-3&rbrace;&rbrace;&lbrace;0.20&rbrace; = 0.020\mathrm&lbrace; s&rbrace;^&lbrace;-1&rbrace;
$$

**(d)** Explain why changing [B] does not affect the rate.

B may be involved in a fast step after the rate-determining step, or B does not appear in the
rate-determining step of the mechanism.

### Question 3 (Paper 2 style)

The rate constant of a reaction at $300\mathrm{ K}$ is $5.0 \times 10^{-4}\mathrm{ s}^{-1}$ and at
$350\mathrm{ K}$ is $4.0 \times 10^{-3}\mathrm{ s}^{-1}$.

**(a)** Calculate the activation energy.

$$
\ln\!\left(\frac&lbrace;4.0 \times 10^&lbrace;-3&rbrace;&rbrace;&lbrace;5.0 \times 10^&lbrace;-4&rbrace;&rbrace;\right) = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;300&rbrace; - \frac&lbrace;1&rbrace;&lbrace;350&rbrace;\right)
$$

$$
\ln(8) = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;(0.000476)
$$

$$
2.079 = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;(0.000476)
$$

$$
E_a = \frac&lbrace;2.079 \times 8.314&rbrace;&lbrace;0.000476&rbrace; = 36300\mathrm&lbrace; J/mol&rbrace; = 36.3\mathrm&lbrace; kJ/mol&rbrace;
$$

**(b)** Calculate the rate constant at $400\mathrm{ K}$.

$$
\ln\!\left(\frac&lbrace;k_&lbrace;400&rbrace;&rbrace;&lbrace;5.0 \times 10^&lbrace;-4&rbrace;&rbrace;\right) = \frac&lbrace;36300&rbrace;&lbrace;8.314&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;300&rbrace; - \frac&lbrace;1&rbrace;&lbrace;400&rbrace;\right)
$$

$$
= 4367 \times 0.000833 = 3.638
$$

$$
\frac&lbrace;k_&lbrace;400&rbrace;&rbrace;&lbrace;5.0 \times 10^&lbrace;-4&rbrace;&rbrace; = e^&lbrace;3.638&rbrace; = 38.0
$$

$$
k_&lbrace;400&rbrace; = 1.90 \times 10^&lbrace;-2&rbrace;\mathrm&lbrace; s&rbrace;^&lbrace;-1&rbrace;
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
| Rate equation          | $\mathrm{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n$                               |
| Arrhenius equation     | $k = Ae^{-E_a/RT}$                                                            |
| Arrhenius (log form)   | $\ln k = \ln A - \dfrac{E_a}{RT}$                                             |
| Two-point Arrhenius    | $\ln(k_2/k_1) = \dfrac{E_a}{R}\!\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$ |
| First-order half-life  | $t_{1/2} = \dfrac{0.693}{k}$                                                  |
| First-order integrated | $\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt$                                    |

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

| Order  | Rate Equation            | Integrated Form                                            | Half-Life                    |
| ------ | ------------------------ | ---------------------------------------------------------- | ---------------------------- |
| Zero   | Rate $= k$               | $[\mathrm{A}] = [\mathrm{A}]_0 - kt$                       | $\dfrac{[\mathrm{A}]_0}{2k}$ |
| First  | Rate $= k[\mathrm{A}]$   | $\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt$                 | $\dfrac{\ln 2}{k}$           |
| Second | Rate $= k[\mathrm{A}]^2$ | $\dfrac{1}{[\mathrm{A}]} = \dfrac{1}{[\mathrm{A}]_0} + kt$ | $\dfrac{1}{k[\mathrm{A}]_0}$ |

:::info[Example]

For a first-order reaction with $k = 0.025\mathrm{ min}^{-1}$ and
$[\mathrm{A}]_0 = 0.50\mathrm{ M}$:

(a) Find the concentration after $30\mathrm{ minutes}$.

$$
\ln[\mathrm&lbrace;A&rbrace;] = \ln(0.50) - 0.025(30) = -0.693 - 0.750 = -1.443
$$

$$
[\mathrm&lbrace;A&rbrace;] = e^&lbrace;-1.443&rbrace; = 0.236\mathrm&lbrace; M&rbrace;
$$

(b) Find the time for the concentration to reach $0.10\mathrm{ M}$.

$$
\ln(0.10) = \ln(0.50) - 0.025t
$$

$$
-2.303 = -0.693 - 0.025t
$$

$$
0.025t = 1.610 \implies t = 64.4\mathrm&lbrace; min&rbrace;
$$

(c) Find the half-life.

$$
t_&lbrace;1/2&rbrace; = \frac&lbrace;0.693&rbrace;&lbrace;0.025&rbrace; = 27.7\mathrm&lbrace; min&rbrace;
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
\mathrm&lbrace;S&rbrace;_2\mathrm&lbrace;O&rbrace;_8^&lbrace;2-&rbrace; + 2\mathrm&lbrace;I&rbrace;^- \to 2\mathrm&lbrace;SO&rbrace;_4^&lbrace;2-&rbrace; + \mathrm&lbrace;I&rbrace;_2
$$

A fixed amount of thiosulfate (S$_2$O$_3^{2-}$) is added. It reacts with the I$_2$ produced:

$$
2\mathrm&lbrace;S&rbrace;_2\mathrm&lbrace;O&rbrace;_3^&lbrace;2-&rbrace; + \mathrm&lbrace;I&rbrace;_2 \to \mathrm&lbrace;S&rbrace;_4\mathrm&lbrace;O&rbrace;_6^&lbrace;2-&rbrace; + 2\mathrm&lbrace;I&rbrace;^-
$$

When all the thiosulfate is consumed, I$_2$ accumulates and reacts with starch to give a blue-black
colour. The time for the colour change is measured.

### Effect of Surface Area: Quantitative

For a reaction on a solid surface, the rate is proportional to the surface area:

$$
\mathrm&lbrace;Rate&rbrace; \propto \mathrm&lbrace;surface area&rbrace;
$$

Cutting a cube into 8 smaller cubes doubles the surface area, doubling the rate.

---

## Enzyme Kinetics

### Michaelis-Menten Kinetics

For enzyme-catalysed reactions:

$$
v = \frac&lbrace;V_&lbrace;\max&rbrace;[S]&rbrace;&lbrace;K_M + [S]&rbrace;
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
2\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace;_2 \to 2\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; + \mathrm&lbrace;O&rbrace;_2
$$

The rate constant is $3.0 \times 10^{-3}\mathrm{ min}^{-1}$ at $25\degree\mathrm{C}$.

**(a)** If the initial concentration is $0.50\mathrm{ M}$, how long does it take for the
concentration to drop to $0.10\mathrm{ M}$?

$$
\ln(0.10) = \ln(0.50) - 3.0 \times 10^&lbrace;-3&rbrace; \times t
$$

$$
-2.303 = -0.693 - 0.003t
$$

$$
0.003t = 1.610 \implies t = 537\mathrm&lbrace; min&rbrace;
$$

**(b)** What is the half-life?

$$
t_&lbrace;1/2&rbrace; = \frac&lbrace;0.693&rbrace;&lbrace;3.0 \times 10^&lbrace;-3&rbrace;&rbrace; = 231\mathrm&lbrace; min&rbrace;
$$

**(c)** After how many half-lives will the concentration be $0.10\mathrm{ M}$?

$$
0.10 = 0.50 \times \left(\frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right)^n \implies \left(\frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right)^n = 0.2
$$

$$
n = \frac&lbrace;\ln 0.2&rbrace;&lbrace;\ln 0.5&rbrace; = \frac&lbrace;-1.609&rbrace;&lbrace;-0.693&rbrace; = 2.32 \mathrm&lbrace; half-lives&rbrace;
$$

### Question 6 (Paper 1 style)

For a reaction with rate equation Rate $= k[\mathrm{A}]^2[\mathrm{B}]^0$, which statement is
correct?

A. Doubling [A] doubles the rate. B. Doubling [A] quadruples the rate. C. Doubling [B] quadruples
the rate. D. The reaction is first order overall.

**Answer: B.** The rate depends on $[\mathrm{A}]^2$, so doubling [A] increases the rate by a factor
of $2^2 = 4$. The reaction is second order overall.

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
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;A&rbrace;]^2
$$

**(c)** Calculate the rate constant $k$.

$$
k = \frac&lbrace;2.0 \times 10^&lbrace;-4&rbrace;&rbrace;&lbrace;(0.10)^2&rbrace; = \frac&lbrace;2.0 \times 10^&lbrace;-4&rbrace;&rbrace;&lbrace;0.01&rbrace; = 0.020\mathrm&lbrace; L/(mol&rbrace;\cdot\mathrm&lbrace;s)&rbrace;
$$

**(d)** Propose a two-step mechanism consistent with this rate equation.

Step 1 (slow): A + A $\to$ E (rate-determining step)

Step 2 (fast): E + 2B $\to$ C + D

The rate-determining step involves 2 molecules of A (bimolecular), consistent with Rate
$= k[\mathrm{A}]^2$.

---

## Chemical Kinetics: Extended Topics

### Determining Order from Concentration-Time Data

When given concentration-time data (not initial rates), use graphical methods:

1. Plot $[\mathrm{A}]$ vs $t$: if linear, zero order.
2. Plot $\ln[\mathrm{A}]$ vs $t$: if linear, first order. Gradient $= -k$.
3. Plot $1/[\mathrm{A}]$ vs $t$: if linear, second order. Gradient $= k$.

:::info[Example]

The concentration of a reactant was measured over time:

| Time (min) | 0    | 10   | 20   | 30    | 40     |
| ---------- | ---- | ---- | ---- | ----- | ------ |
| [A] (M)    | 1.00 | 0.50 | 0.25 | 0.125 | 0.0625 |

Plotting $\ln[\mathrm{A}]$ vs $t$:

| Time (min)        | 0   | 10       | 20       | 30       | 40       |
| ----------------- | --- | -------- | -------- | -------- | -------- |
| $\ln[\mathrm{A}]$ | 0   | $-0.693$ | $-1.386$ | $-2.079$ | $-2.773$ |

The $\ln[\mathrm{A}]$ vs $t$ plot is linear with gradient $\approx -0.0693$, confirming first order
with $k = 0.0693\mathrm{ min}^{-1}$.

Alternatively, note that $[\mathrm{A}]$ halves every 10 minutes: $t_{1/2} = 10\mathrm{ min}$.

$$
k = \frac&lbrace;0.693&rbrace;&lbrace;10&rbrace; = 0.0693\mathrm&lbrace; min&rbrace;^&lbrace;-1&rbrace;
$$

:::

### Effect of a Change in Temperature on the Rate Constant

The Arrhenius equation shows that increasing temperature always increases the rate constant (and
therefore the rate), regardless of whether the reaction is exothermic or endothermic.

### Temperature Coefficient ($Q_{10}$)

The temperature coefficient $Q_{10}$ is the factor by which the rate increases for a
$10\degree\mathrm{C}$ temperature rise:

$$
Q_&lbrace;10&rbrace; = \frac&lbrace;k_&lbrace;T+10&rbrace;&rbrace;&lbrace;k_T&rbrace;
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
2\mathrm&lbrace;HI&rbrace; \to \mathrm&lbrace;H&rbrace;_2 + \mathrm&lbrace;I&rbrace;_2
$$

is $2.4 \times 10^{-21}\mathrm{ L/(mol}\cdot\mathrm{s)}$ at $300\mathrm{ K}$ and
$1.2 \times 10^{-16}\mathrm{ L/(mol}\cdot\mathrm{s)}$ at $500\mathrm{ K}$.

**(a)** Calculate the activation energy.

$$
\ln\!\left(\frac&lbrace;1.2 \times 10^&lbrace;-16&rbrace;&rbrace;&lbrace;2.4 \times 10^&lbrace;-21&rbrace;&rbrace;\right) = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;300&rbrace; - \frac&lbrace;1&rbrace;&lbrace;500&rbrace;\right)
$$

$$
\ln(5.0 \times 10^4) = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;(0.001333)
$$

$$
10.82 = \frac&lbrace;E_a&rbrace;&lbrace;8.314&rbrace;(0.001333)
$$

$$
E_a = \frac&lbrace;10.82 \times 8.314&rbrace;&lbrace;0.001333&rbrace; = 67500\mathrm&lbrace; J/mol&rbrace; = 67.5\mathrm&lbrace; kJ/mol&rbrace;
$$

**(b)** Calculate the rate constant at $400\mathrm{ K}$.

$$
\ln\!\left(\frac&lbrace;k_&lbrace;400&rbrace;&rbrace;&lbrace;2.4 \times 10^&lbrace;-21&rbrace;&rbrace;\right) = \frac&lbrace;67500&rbrace;&lbrace;8.314&rbrace;\left(\frac&lbrace;1&rbrace;&lbrace;300&rbrace; - \frac&lbrace;1&rbrace;&lbrace;400&rbrace;\right)
$$

$$
= 8119 \times 0.000833 = 6.763
$$

$$
\frac&lbrace;k_&lbrace;400&rbrace;&rbrace;&lbrace;2.4 \times 10^&lbrace;-21&rbrace;&rbrace; = e^&lbrace;6.763&rbrace; = 864
$$

$$
k_&lbrace;400&rbrace; = 864 \times 2.4 \times 10^&lbrace;-21&rbrace; = 2.07 \times 10^&lbrace;-18&rbrace;\mathrm&lbrace; L/(mol&rbrace;\cdot\mathrm&lbrace;s)&rbrace;
$$

### Question 9 (Paper 1 style)

For a zero-order reaction, which graph gives a straight line with a negative gradient?

A. $[\mathrm{A}]$ vs $t$ B. $\ln[\mathrm{A}]$ vs $t$ C. $1/[\mathrm{A}]$ vs $t$ D. Rate vs
$[\mathrm{A}]$

**Answer: A.** For a zero-order reaction, $[\mathrm{A}] = [\mathrm{A}]_0 - kt$, which is a straight
line with gradient $-k$.

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
\mathrm&lbrace;Rate&rbrace; = k[\mathrm&lbrace;I&rbrace;^-][\mathrm&lbrace;S&rbrace;_2\mathrm&lbrace;O&rbrace;_8^&lbrace;2-&rbrace;]
$$

**(b)** Calculate $k$.

$$
k = \frac&lbrace;1.0 \times 10^&lbrace;-5&rbrace;&rbrace;&lbrace;0.10 \times 0.10&rbrace; = 1.0 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; L/(mol&rbrace;\cdot\mathrm&lbrace;s)&rbrace;
$$

**(c)** Propose a mechanism.

Step 1 (slow, rate-determining):
$\mathrm{I}^- + \mathrm{S}_2\mathrm{O}_8^{2-} \to \mathrm{IS}_2\mathrm{O}_8^{3-}$

Step 2 (fast):
$\mathrm{IS}_2\mathrm{O}_8^{3-} + \mathrm{I}^- \to \mathrm{I}_2 + 2\mathrm{SO}_4^{2-}$

The slow step involves one molecule of each reactant, matching the rate equation.

## Practice Problems

<details>
<summary>Question 1: Determining Rate Equation from Initial Rates</summary>

For the reaction $\mathrm{A} + 2\mathrm{B} \to \mathrm{C}$, the following data was obtained:

| Experiment | $[\mathrm{A}]$ (mol/L) | $[\mathrm{B}]$ (mol/L) | Initial Rate (mol/L/s) |
| ---------- | ---------------------- | ---------------------- | ---------------------- |
| 1          | $0.10$                 | $0.10$                 | $1.2 \times 10^{-3}$   |
| 2          | $0.20$                 | $0.10$                 | $2.4 \times 10^{-3}$   |
| 3          | $0.10$                 | $0.20$                 | $4.8 \times 10^{-3}$   |

(a) Determine the rate equation.

(b) Calculate the rate constant $k$.

(c) What are the units of $k$?

</details>

<details>
<summary>Answer</summary>

(a) Comparing experiments 1 and 2: doubling $[\mathrm{A}]$ doubles the rate, so order in
$\mathrm{A} = 1$.

Comparing experiments 1 and 3: doubling $[\mathrm{B}]$ quadruples the rate, so order in
$\mathrm{B} = 2$.

$$\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]^2$$

(b) From experiment 1:

$$1.2 \times 10^{-3} = k(0.10)(0.10)^2 = k(0.001)$$

$$k = \frac{1.2 \times 10^{-3}}{0.001} = 1.2\mathrm{ L}^2/(\mathrm{mol}^2 \cdot \mathrm{s})$$

(c) Units of $k$: $\mathrm{L}^2/(\mathrm{mol}^2 \cdot \mathrm{s})$

</details>

<details>
<summary>Question 2: Activation Energy from Arrhenius Equation</summary>

The rate constant for a first-order reaction is $4.0 \times 10^{-3}\mathrm{ s}^{-1}$ at
$300\mathrm{ K}$ and $2.5 \times 10^{-2}\mathrm{ s}^{-1}$ at $350\mathrm{ K}$. Calculate the
activation energy.

</details>

<details>
<summary>Answer</summary>

$$\ln\!\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\ln\!\left(\frac{2.5 \times 10^{-2}}{4.0 \times 10^{-3}}\right) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{350}\right)$$

$$\ln(6.25) = \frac{E_a}{8.314}(0.000476)$$

$$1.833 = \frac{E_a}{8.314}(0.000476)$$

$$E_a = \frac{1.833 \times 8.314}{0.000476} = 32000\mathrm{ J/mol} = 32.0\mathrm{ kJ/mol}$$

</details>

<details>
<summary>Question 3: First-Order Kinetics and Half-Life</summary>

A first-order reaction has a rate constant of $0.050\mathrm{ min}^{-1}$.

(a) Calculate the half-life.

(b) If the initial concentration is $0.80\mathrm{ M}$, what is the concentration after
$20\mathrm{ minutes}$?

</details>

<details>
<summary>Answer</summary>

(a) $$t_{1/2} = \frac{0.693}{k} = \frac{0.693}{0.050} = 13.9\mathrm{ min}$$

(b) $$\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt = \ln(0.80) - 0.050 \times 20$$

$$\ln[\mathrm{A}] = -0.223 - 1.000 = -1.223$$

$$[\mathrm{A}] = e^{-1.223} = 0.294\mathrm{ M}$$

</details>

<details>
<summary>Question 4: Reaction Mechanism Analysis</summary>

The overall reaction $2\mathrm{NO}_2(g) + \mathrm{F}_2(g) \to 2\mathrm{NO}_2\mathrm{F}(g)$ has the
proposed mechanism:

Step 1 (slow): $\mathrm{NO}_2 + \mathrm{F}_2 \to \mathrm{NO}_2\mathrm{F} + \mathrm{F}$

Step 2 (fast): $\mathrm{NO}_2 + \mathrm{F} \to \mathrm{NO}_2\mathrm{F}$

(a) Identify the rate-determining step.

(b) Write the rate equation for the overall reaction.

(c) Identify any intermediates.

</details>

<details>
<summary>Answer</summary>

(a) Step 1 is the rate-determining step (slowest step).

(b) The rate equation is determined by the slow step:

$$\mathrm{Rate} = k[\mathrm{NO}_2][\mathrm{F}_2]$$

(c) The intermediate is the fluorine atom ($\mathrm{F}$), which is produced in step 1 and consumed
in step 2. It does not appear in the overall reaction or the rate equation.

</details>

<details>
<summary>Question 5: Effect of Temperature on Rate</summary>

A reaction at $300\mathrm{ K}$ has a rate constant of $2.0 \times 10^{-3}\mathrm{ s}^{-1}$. The
activation energy is $50.0\mathrm{ kJ/mol}$. Calculate the rate constant at $320\mathrm{ K}$.

</details>

<details>
<summary>Answer</summary>

$$\ln\!\left(\frac{k_{320}}{k_{300}}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$= \frac{50000}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right) = 6014 \times 0.000208 = 1.251$$

$$\frac{k_{320}}{2.0 \times 10^{-3}} = e^{1.251} = 3.494$$

$$k_{320} = 3.494 \times 2.0 \times 10^{-3} = 6.99 \times 10^{-3}\mathrm{ s}^{-1}$$

</details>
