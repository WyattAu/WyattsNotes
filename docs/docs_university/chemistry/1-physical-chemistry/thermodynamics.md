---
title: Thermodynamics
slug: physical-chemistry-thermodynamics
description: 'University Chemistry Thermodynamics notes covering key definitions, core concepts, worked examples, and practice questions for practical revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
---

## 1. The Laws of Thermodynamics

### 1.1 The Zeroth and First Laws

1. **Zeroth Law:** If $A$ is in thermal equilibrium with $B$, and $B$ with $C$, then $A$ is in
   thermal equilibrium with $C$. This establishes temperature as a transitive property and justifies
   the use of thermometers.

2. **First Law:** Energy is conserved. For a closed system:

   $$dU = \delta q + \delta w$$

   where $U$ is internal energy, $q$ is heat, and $w$ is work. The notation $\delta$ indicates
   inexact differentials: $q$ and $w$ are path-dependent, but $U$ is a state function.

### 1.2 Work of Expansion

For a reversible expansion of an ideal gas against an external pressure:

$$\delta w_{\text{rev}} = -P\,dV$$

$$w_{\text{rev}} = -\int_{V_i}^{V_f} P\,dV = -nRT\ln\frac{V_f}{V_i}$$

### 1.3 Enthalpy

**Definition 1 (Enthalpy):** The enthalpy $H$ is defined as:

$$H = U + PV$$

For a process at constant pressure:

$$dH = dU + P\,dV + V\,dP = \delta q_p + V\,dP \implies \Delta H = q_p$$

The molar heat capacities relate to enthalpy and internal energy:

$$C_p = \left(\frac{\partial H}{\partial T}\right)_P, \quad C_V = \left(\frac{\partial U}{\partial T}\right)_V$$

For an ideal gas: $C_p - C_V = nR$.

## 2. The Second and Third Laws

### 2.1 The Second Law

**Theorem 1 (Clausius Inequality):** For any cyclic process:

$$\oint \frac{\delta q}{T} \leq 0$$

Equality holds only for reversible processes. This implies the existence of a state function $S$
(entropy) such that:

$$dS \geq \frac{\delta q}{T}$$

For a spontaneous (irreversible) process in an isolated system: $dS > 0$.

### 2.2 Entropy Changes

For a reversible process at temperature $T$:

$$\Delta S = \int_{T_1}^{T_2} \frac{C}{T}\,dT$$

**Entropy of phase transition:** At the transition temperature $T_{\text{trs}}$:

$$\Delta_{\text{trs}}S = \frac{\Delta_{\text{trs}}H}{T_{\text{trs}}}$$

**Example 1:** Calculate $\Delta S$ when 2 mol of ice melts at 273 K ($\Delta_{\text{fus}}H = 6.01$ kJ/mol).

$$\Delta S = \frac{n\,\Delta_{\text{fus}}H}{T} = \frac{2 \times 6010}{273} = 44.0 \text{ J/K}$$

$\blacksquare$

### 2.3 Statistical Interpretation of Entropy

**Theorem 2 (Boltzmann Entropy):**

$$S = k_B \ln W$$

where $W$ is the number of microstates and $k_B = 1.381 \times 10^{-23}$ J/K is Boltzmann's constant.

For $N$ distinguishable particles with $n_i$ in each energy level $\varepsilon_i$:

$$W = \frac{N!}{n_1!\,n_2!\,\cdots}$$

The entropy of mixing two ideal gases:

$$\Delta_{\text{mix}}S = -nR\left(x_A \ln x_A + x_B \ln x_B\right)$$

### 2.4 The Third Law

**Theorem 3 (Third Law of Thermodynamics):** The entropy of a perfect crystal at absolute zero is zero:

$$\lim_{T \to 0} S = 0$$

This provides a reference point for absolute entropies (standard molar entropies $S^\circ$).

## 3. Gibbs Free Energy and Chemical Potential

### 3.1 Gibbs and Helmholtz Free Energy

**Definition 2 (Helmholtz Free Energy):**

$$A = U - TS$$

$$dA = -S\,dT - P\,dV$$

**Definition 3 (Gibbs Free Energy):**

$$G = H - TS = U + PV - TS$$

$$dG = -S\,dT + V\,dP$$

At constant $T$ and $P$: $\Delta G = w_{\text{non-PV}}$, so the Gibbs free energy change equals the
maximum non-expansion work.

### 3.2 Spontaneity Criteria

| Condition                     | Criterion       |
| ----------------------------- | ---------------- |
| Constant $T$, $V$ (closed)    | $dA < 0$         |
| Constant $T$, $P$ (closed)    | $dG < 0$         |
| Isolated system               | $dS > 0$         |

### 3.3 Fundamental Equations

The four fundamental equations of thermodynamics (for closed systems of constant composition):

$$dU = T\,dS - P\,dV$$
$$dH = T\,dS + V\,dP$$
$$dA = -S\,dT - P\,dV$$
$$dG = -S\,dT + V\,dP$$

### 3.4 Chemical Potential

**Definition 4 (Chemical Potential):** For an open system with $k$ components:

$$dG = -S\,dT + V\,dP + \sum_{i=1}^{k} \mu_i\,dn_i$$

where $\mu_i = \left(\frac{\partial G}{\partial n_i}\right)_{T,P,n_{j\neq i}}$ is the chemical potential
of component $i$.

For an ideal gas: $\mu = \mu^\circ + RT\ln\frac{P}{P^\circ}$.

## 4. Maxwell Relations

### 4.1 Derivation from Exact Differentials

**Theorem 4 (Maxwell Relations):** Since $U$, $H$, $A$, $G$ are state functions, their mixed second
partial derivatives are equal:

$$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V$$
$$\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$$
$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$$
$$\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$$

### 4.2 Applications

Using the Maxwell relation $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$:

For an ideal gas: $\left(\frac{\partial P}{\partial T}\right)_V = \frac{nR}{V}$, so:

$$\Delta S = \int_{V_1}^{V_2} \frac{nR}{V}\,dV = nR\ln\frac{V_2}{V_1}$$

## 5. Gibbs-Helmholtz Equation

### 5.1 Temperature Dependence of $G$

**Theorem 5 (Gibbs-Helmholtz Equation):**

$$\left[\frac{\partial(G/T)}{\partial T}\right]_P = -\frac{H}{T^2}$$

Equivalently:

$$\frac{\Delta G_2}{T_2} - \frac{\Delta G_1}{T_1} = -\Delta H\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

(approximate form when $\Delta H$ is constant over the temperature range).

## 6. The Clausius-Clapeyron Equation

### 6.1 Derivation

At phase equilibrium between two phases $\alpha$ and $\beta$:

$$\mu_\alpha(T, P) = \mu_\beta(T, P)$$

Differentiating along the coexistence curve:

$$d\mu_\alpha = d\mu_\beta \implies -S_\alpha\,dT + V_\alpha\,dP = -S_\beta\,dT + V_\beta\,dP$$

$$\frac{dP}{dT} = \frac{\Delta_{\text{trs}}S}{\Delta_{\text{trs}}V} = \frac{\Delta_{\text{trs}}H}{T\,\Delta_{\text{trs}}V}$$

### 6.2 The Integrated Form

For liquid-vapor equilibrium, assuming $\Delta_{\text{vap}}H$ is constant and $V_g \gg V_l$:

$$\ln\frac{P_2}{P_1} = -\frac{\Delta_{\text{vap}}H}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

**Example 2:** The normal boiling point of benzene is 353 K with $\Delta_{\text{vap}}H = 30.8$ kJ/mol.
Find the vapor pressure at 298 K.

$$\ln\frac{P}{1.013 \times 10^5} = -\frac{30800}{8.314}\left(\frac{1}{298} - \frac{1}{353}\right) = -1.93$$

$$P = 1.013 \times 10^5 \times e^{-1.93} = 1.47 \times 10^4 \text{ Pa} \approx 14.7 \text{ kPa}$$

$\blacksquare$

## 7. Phase Diagrams and Phase Equilibria

### 7.1 Phase Rule

**Theorem 6 (Gibbs Phase Rule):** For a system with $C$ components and $P$ phases at equilibrium:

$$F = C - P + 2$$

where $F$ is the number of degrees of freedom (intensive variables that can be independently varied).

For a single-component system ($C = 1$): $F = 3 - P$. At a triple point ($P = 3$), $F = 0$.

### 7.2 Phase Diagrams of One-Component Systems

- **Triple point:** All three phases coexist; $F = 0$.
- **Critical point:** Termination of the liquid-vapor coexistence curve; above this point the fluid is
  supercritical.
- **Slope of solid-liquid boundary:** Positive for most substances (liquid is denser); negative for water
  (ice is less dense).

### 7.3 Two-Component Systems

For binary mixtures, common diagrams include:
- **Temperature-composition diagrams** for liquid-vapor equilibrium (distillation).
- **Eutectic diagrams** for solid-liquid equilibrium.
- **Lever rule:** Determines the mass fractions of phases in a two-phase region.

**Definition 5 (Lever Rule):** For a two-phase region with phases $\alpha$ and $\beta$ at overall
composition $x$:

$$\frac{n_\alpha}{n_\beta} = \frac{x_\beta - x}{x - x_\alpha}$$

## 8. Chemical Equilibrium

### 8.1 Equilibrium Constant

At equilibrium, $\Delta_r G = 0$, giving:

$$\Delta_r G^\circ = -RT\ln K$$

For the reaction $aA + bB \rightleftharpoons cC + dD$:

$$K = \frac{a_C^c\,a_D^d}{a_A^a\,a_B^b}$$

where $a_i$ are activities. For ideal gases: $a_i = P_i/P^\circ$, so:

$$K_p = \frac{(P_C/P^\circ)^c\,(P_D/P^\circ)^d}{(P_A/P^\circ)^a\,(P_B/P^\circ)^b}$$

### 8.2 van't Hoff Equation

**Theorem 7 (van't Hoff Equation):** The temperature dependence of the equilibrium constant:

$$\frac{d\ln K}{dT} = \frac{\Delta_r H^\circ}{RT^2}$$

Integrated form (assuming $\Delta_r H^\circ$ is constant):

$$\ln\frac{K_2}{K_1} = -\frac{\Delta_r H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

### 8.3 Le Chatelier's Principle

**Definition 6 (Le Chatelier's Principle):** If a system at equilibrium is subjected to a disturbance,
the system shifts to partially counteract the change.

- Increasing $T$ favors the endothermic direction.
- Increasing $P$ favors the direction with fewer moles of gas.
- Adding a reactant shifts equilibrium toward products.

## 9. Thermochemistry

### 9.1 Hess's Law

**Theorem 8 (Hess's Law):** The enthalpy change for a reaction is independent of the pathway; it equals
the sum of enthalpy changes for any series of steps into which the reaction can be divided.

$$\Delta_r H = \sum \Delta_f H^\circ(\text{products}) - \sum \Delta_f H^\circ(\text{reactants})$$

### 9.2 Standard Enthalpies

- **Standard enthalpy of formation:** $\Delta_f H^\circ$ — enthalpy change when 1 mol of compound forms
  from its elements in their standard states.
- **Standard enthalpy of combustion:** $\Delta_c H^\circ$ — enthalpy change for complete combustion of
  1 mol of substance.
- **Bond enthalpies:** Average energy required to break a bond in the gas phase.

### 9.3 Kirchhoff's Law

**Theorem 9 (Kirchhoff's Law):** Temperature dependence of reaction enthalpy:

$$\frac{d\Delta_r H^\circ}{dT} = \Delta_r C_p^\circ$$

## 10. Partial Molar Quantities and Mixing

### 10.1 Partial Molar Quantities

**Definition 7 (Partial Molar Volume):** The partial molar volume of component $i$:

$$V_i = \left(\frac{\partial V}{\partial n_i}\right)_{T,P,n_{j\neq i}}$$

The total volume of a mixture:

$$V = \sum_i n_i V_i$$

### 10.2 Gibbs-Duhem Equation

**Theorem 10 (Gibbs-Duhem Equation):** At constant $T$ and $P$:

$$\sum_i n_i\,d\mu_i = 0$$

For a binary mixture: $n_A\,d\mu_A + n_B\,d\mu_B = 0$.

### 10.3 Chemical Potential of Real Solutions

For a real solution, the chemical potential is:

$$\mu_i = \mu_i^\circ + RT\ln a_i = \mu_i^\circ + RT\ln(\gamma_i\,x_i)$$

where $\gamma_i$ is the activity coefficient and $x_i$ is the mole fraction. For ideal solutions
($\gamma_i = 1$):

$$\mu_i = \mu_i^\circ + RT\ln x_i$$

## 11. Carnot Cycle for Chemical Systems

### 11.1 Efficiency

**Theorem 11 (Carnot Efficiency):** A heat engine operating between hot reservoir $T_h$ and cold
reservoir $T_c$:

$$\eta = 1 - \frac{T_c}{T_h}$$

This is the maximum possible efficiency for any engine operating between these temperatures.

### 11.2 Refrigerators and Heat Pumps

- **Coefficient of Performance (refrigerator):** $\text{COP}_{\text{ref}} = \frac{T_c}{T_h - T_c}$
- **Coefficient of Performance (heat pump):** $\text{COP}_{\text{hp}} = \frac{T_h}{T_h - T_c}$

## 12. Thermodynamic Properties of Ideal Gases

### 12.1 Joule-Thomson Effect

For a real gas undergoing throttling (isenthalpic expansion):

$$\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H = \frac{1}{C_p}\left[\frac{2a}{RT} - b\right]$$

For an ideal gas: $\mu_{JT} = 0$ (no temperature change on throttling).

### 12.2 Adiabatic Processes

For a reversible adiabatic process with an ideal gas ($\gamma = C_p/C_V$):

$$TV^{\gamma-1} = \text{const}, \quad PV^\gamma = \text{const}$$

Work done:

$$w = \frac{nR(T_2 - T_1)}{\gamma - 1}$$

## 13. Fugacity and Activity

### 13.1 Fugacity

**Definition 8 (Fugacity):** For a real gas:

$$\mu = \mu^\circ + RT\ln\left(\frac{f}{P^\circ}\right)$$

where $f = \phi P$ and $\phi$ is the fugacity coefficient. As $P \to 0$, $f \to P$ and $\phi \to 1$.

### 13.2 Activity

For condensed phases:

$$a_i = \frac{f_i}{f_i^\circ} \approx \gamma_i\,x_i$$

The equilibrium constant in terms of activities:

$$K = \prod_i a_i^{\nu_i}$$

## Common Pitfalls

1. **Confusing heat ($q$) and temperature ($T$).** Heat is energy in transit due to a temperature
   difference; temperature is a state property. **Fix:** $q$ is path-dependent; $T$ is a state function.
   Use $dU = \delta q + \delta w$, not $dU = T\,dS + \ldots$ for irreversible processes.
2. **Using $\Delta G < 0$ as the sole spontaneity criterion.** This only applies at constant $T$ and $P$.
   **Fix:** Use $dA < 0$ at constant $T$, $V$, or $dS > 0$ for isolated systems.
3. **Ignoring the standard state.** $\Delta G^\circ$ and $K$ are related, but $\Delta G = \Delta G^\circ + RT\ln Q$,
   where $Q$ is the reaction quotient. **Fix:** Only at equilibrium does $\Delta G = 0$ and $Q = K$.
4. **Assuming $\Delta H$ and $\Delta S$ are temperature-independent.** This is an approximation valid
   only over small temperature ranges. **Fix:** Use Kirchhoff's law or integrate $C_p$ data when
   precision is needed.
5. **Confusing intensive and extensive properties.** $G$ is extensive; $\mu = G/n$ is intensive. **Fix:**
   Always use molar quantities when comparing substances with different amounts.
6. **Wrong sign in the Clausius-Clapeyron equation.** The negative sign appears because $\ln(P)$
   decreases as $1/T$ increases for exothermic vaporization. **Fix:** Write it as
   $\ln(P_2/P_1) = -(\Delta H/R)(1/T_2 - 1/T_1)$ and check units.
7. **Applying the ideal gas law to phase equilibrium without correction.** The integrated
   Clausius-Clapeyron equation assumes $V_g \gg V_l$ and ideal gas behavior. **Fix:** Use fugacity
   corrections for high-pressure systems.

## Summary

- **First Law:** $dU = \delta q + \delta w$; energy conservation.
- **Second Law:** $dS \geq \delta q/T$; entropy always increases in isolated systems.
- **Third Law:** $S \to 0$ as $T \to 0$ for a perfect crystal.
- **Gibbs free energy:** $\Delta G = \Delta H - T\Delta S$; spontaneity criterion at constant $T$, $P$.
- **Chemical potential:** $\mu_i = (\partial G/\partial n_i)_{T,P}$; drives mass transfer and chemical
  equilibrium.
- **Maxwell relations:** Connect measurable quantities derived from exact differentials of state
  functions.
- **Phase rule:** $F = C - P + 2$; determines degrees of freedom at equilibrium.
- **Clausius-Clapeyron:** $\ln(P_2/P_1) = -(\Delta H/R)(1/T_2 - 1/T_1)$; describes vapor pressure vs
  temperature.
- **Equilibrium:** $\Delta_r G^\circ = -RT\ln K$; van't Hoff equation for temperature dependence.

## Worked Examples

### Example 1: Clausius-Clapeyron Calculation
**Problem:** The boiling point of water is 100 degrees C at 1 atm. The enthalpy of vaporization is 40.7 kJ/mol. Calculate the boiling point at 0.8 atm.
**Solution:** ln(P2/P1) = -(Delta H_vap/R)(1/T2 - 1/T1). ln(0.8/1.0) = -(40700/8.314)(1/T2 - 1/373). -0.2231 = -4893(1/T2 - 0.00268). 1/T2 = 0.00268 + 0.2231/4893 = 0.00268 + 4.56e-5 = 0.002726. T2 = 366.8 K = 93.7 degrees C.

### Example 2: Calculating Gibbs Free Energy of Reaction
**Problem:** For the reaction N2(g) + 3H2(g) -> 2NH3(g), Delta H = -92.4 kJ/mol, Delta S = -198.8 J K^-1 mol^-1. At 298 K, determine if the reaction is spontaneous.
**Solution:** Delta G = Delta H - T Delta S = -92,400 - 298(-198.8) = -92,400 + 59,200 = -33,200 J/mol = -33.2 kJ/mol. Delta G < 0, so the reaction is spontaneous at 298 K. At what T does it become non-spontaneous? Delta G = 0 when T = Delta H/Delta S = 92,400/198.8 = 464.8 K.

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Chemical Kinetics        | WyattsNotes | [View](/docs/university/chemistry/chemical-kinetics)                  |
| Quantum Chemistry        | WyattsNotes | [View](/docs/university/chemistry/quantum-chemistry)                  |
| Statistical Mechanics    | WyattsNotes | [View](/docs/university/chemistry/statistical-mechanics)               |
| Thermodynamics — MIT 5.60| MIT OCW     | [View](https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/) |
