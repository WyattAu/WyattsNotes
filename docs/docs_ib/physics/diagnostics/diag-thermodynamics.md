---
title: Thermodynamics — Diagnostic Tests
description: Hardest IB Physics thermodynamics diagnostic tests covering ideal gas law limitations, first law sign conventions, isothermal vs adiabatic processes, and Carnot efficiency.
slug: diag-thermodynamics
hide_table_of_contents: true
---

# Thermodynamics — Diagnostic Tests

## Unit Tests

### UT-1: Ideal Gas Law vs Real Gas Behaviour

**Question:**

(a) Calculate the volume occupied by $2.0\,\text{mol}$ of an ideal gas at $T = 300\,\text{K}$ and $P = 100\,\text{atm}$. Compare this with the actual volume using the van der Waals equation with $a = 0.137\,\text{Pa}\,\text{m}^6\,\text{mol}^{-2}$ and $b = 3.87 \times 10^{-5}\,\text{m}^3\,\text{mol}^{-1}$ (values for nitrogen).

(b) Explain under what conditions a real gas behaves most like an ideal gas and why.

(c) A student claims that "at very low temperatures, the ideal gas law still applies because it is a fundamental law of nature." Refute this claim.

**Solution:**

(a) **Ideal gas:**

$$PV = nRT \Rightarrow V = \frac{nRT}{P} = \frac{2.0 \times 8.314 \times 300}{100 \times 1.013 \times 10^5}$$

$$V = \frac{4988.4}{1.013 \times 10^7} = 4.92 \times 10^{-4}\,\text{m}^3 = 0.492\,\text{L}$$

**Van der Waals equation:** $\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT$

This must be solved numerically. Substituting $P = 1.013 \times 10^7\,\text{Pa}$, $n = 2.0$, $T = 300\,\text{K}$:

$$\left(1.013 \times 10^7 + \frac{0.137 \times 4.0}{V^2}\right)(V - 7.74 \times 10^{-5}) = 4988.4$$

By iterative solution, $V \approx 4.60 \times 10^{-4}\,\text{m}^3 = 0.460\,\text{L}$.

The ideal gas overestimates the volume by about $7\%$ at $100\,\text{atm}$. The discrepancy arises because at high pressure, the volume of the molecules themselves ($nb$ term) is not negligible compared to the total volume, and the intermolecular attractions ($an^2/V^2$ term) reduce the effective pressure.

(b) A real gas behaves most like an ideal gas when:
- **Low pressure**: molecules are far apart, so intermolecular forces are negligible and molecular volume is insignificant
- **High temperature**: molecules have high kinetic energy, so intermolecular potential energy is negligible compared to kinetic energy

The ideal gas model assumes: (1) molecules are point masses with zero volume, (2) no intermolecular forces except during elastic collisions.

(c) The ideal gas law is **not** a fundamental law of nature -- it is a model that works well under specific conditions (low pressure, high temperature). At very low temperatures:
- Gases liquefy and solidify, which the ideal gas law cannot predict
- Intermolecular forces become dominant
- The gas may no longer exist as a gas phase

The ideal gas law is an approximation valid when intermolecular forces and molecular volume are negligible.

---

### UT-2: First Law Sign Convention Trap

**Question:**

A gas undergoes three processes:

Process A: The gas expands from $V_1 = 2.0 \times 10^{-3}\,\text{m}^3$ to $V_2 = 5.0 \times 10^{-3}\,\text{m}^3$ at constant pressure $P = 2.0 \times 10^5\,\text{Pa}$. During this process, $400\,\text{J}$ of heat is supplied to the gas.

Process B: The gas is compressed isothermally from $V_2$ back to $V_1$.

Process C: The gas is heated at constant volume from $V_1$ back to its original state.

(a) For process A, calculate the work done by the gas and the change in internal energy.

(b) For process B, calculate the work done on the gas and the heat exchanged.

(c) Calculate the net work done and net heat exchanged over the complete cycle A-B-C.

**Solution:**

(a) **Process A (isobaric expansion):**

Work done by the gas: $W = P\Delta V = 2.0 \times 10^5 \times (5.0 - 2.0) \times 10^{-3} = 2.0 \times 10^5 \times 3.0 \times 10^{-3} = 600\,\text{J}$

First law: $\Delta U = Q - W$ (using the convention where $W$ is work done **by** the gas)

$\Delta U = 400 - 600 = -200\,\text{J}$

The internal energy decreases by $200\,\text{J}$ even though heat is added. This is counterintuitive: the gas does more work than the heat supplied, so it must draw on its internal energy.

(b) **Process B (isothermal compression):**

For an isothermal process, $\Delta U = 0$ (ideal gas, $T$ constant).

$Q = W$ (all heat input equals work output, or vice versa)

Work done on the gas (compression):

$$W_{\text{on}} = nRT\ln\frac{V_2}{V_1} = P_2V_2\ln\frac{V_2}{V_1}$$

We need $P_2$ at the start of process B. From process A, the final state has $V_2 = 5.0 \times 10^{-3}\,\text{m}^3$ and $P = 2.0 \times 10^5\,\text{Pa}$. We need the temperature:

$T = PV/(nR)$. From the ideal gas law, $nR = P_1V_1/T_1$. But we need to know the initial temperature.

Alternatively, for an ideal gas with $\Delta U = -200\,\text{J}$ and $\Delta T$ corresponding:

$\Delta U = nC_v\Delta T = -200\,\text{J}$

We don't have enough information for a numerical answer without $n$ or $C_v$. Let's use $PV = nRT$ at the start of process B:

$T_B = P_B V_B/(nR) = 2.0 \times 10^5 \times 5.0 \times 10^{-3}/(nR)$

The work done on the gas during isothermal compression:

$$W_{\text{on}} = nRT_B\ln(V_2/V_1) = P_BV_B\ln(5.0/2.0) = 2.0 \times 10^5 \times 5.0 \times 10^{-3} \times \ln(2.5)$$

$$= 1000 \times 0.916 = 916\,\text{J}$$

Since $\Delta U = 0$: $Q = W = 916\,\text{J}$ of heat must be **removed** from the gas (negative $Q$ in the first law convention).

(c) **Process C (isochoric heating):**

$W = 0$ (no volume change)

$\Delta U = Q$ (all heat goes to internal energy)

For the complete cycle: $\Delta U_{\text{total}} = 0$ (internal energy is a state function).

$Q_{\text{net}} = W_{\text{net}}$

$Q_{\text{net}} = 400 + (-916) + Q_C$

$W_{\text{net}} = 600 + (-916) + 0 = -316\,\text{J}$

So $Q_C = W_{\text{net}} - 400 + 916 = -316 + 516 = 200\,\text{J}$

Check: $Q_{\text{net}} = 400 - 916 + 200 = -316\,\text{J} = W_{\text{net}}$. Confirmed.

---

### UT-3: Carnot Efficiency and Entropy

**Question:**

A Carnot engine operates between a hot reservoir at $T_H = 600\,\text{K}$ and a cold reservoir at $T_C = 300\,\text{K}$. In each cycle, it absorbs $Q_H = 1200\,\text{J}$ from the hot reservoir.

(a) Calculate the efficiency, work output per cycle, and heat rejected to the cold reservoir.

(b) Calculate the entropy change of the universe per cycle.

(c) A student claims that a heat engine can be $100\%$ efficient if the cold reservoir is at absolute zero. Discuss whether this is theoretically possible and practically achievable.

**Solution:**

(a) Carnot efficiency: $\eta = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\%$

Work per cycle: $W = \eta Q_H = 0.50 \times 1200 = 600\,\text{J}$

Heat rejected: $Q_C = Q_H - W = 1200 - 600 = 600\,\text{J}$

(b) Entropy change of the hot reservoir: $\Delta S_H = -Q_H/T_H = -1200/600 = -2.0\,\text{J}\,\text{K}^{-1}$

Entropy change of the cold reservoir: $\Delta S_C = Q_C/T_C = 600/300 = +2.0\,\text{J}\,\text{K}^{-1}$

Total entropy change of the universe: $\Delta S_{\text{univ}} = -2.0 + 2.0 = 0$

This is zero, as expected for a reversible (Carnot) cycle. A real engine would have $\Delta S_{\text{univ}} \gt 0$.

(c) Theoretically, as $T_C \to 0$: $\eta = 1 - T_C/T_H \to 1 = 100\%$. The third law of thermodynamics states that absolute zero cannot be reached by any finite number of processes, so $T_C = 0\,\text{K}$ is unattainable. Practically, even if it were approachable, no process can be perfectly reversible, so $100\%$ efficiency is impossible.

However, the **theoretical** limit of efficiency does approach $100\%$ as $T_C \to 0$, which is why reaching very low temperatures requires increasingly sophisticated and energy-intensive cooling methods.

## Integration Tests

### IT-1: Adiabatic Expansion with Work Calculation (with Energy)

**Question:**

$3.0\,\text{mol}$ of a monatomic ideal gas ($\gamma = 5/3$) initially at $T_1 = 400\,\text{K}$ and $P_1 = 4.0 \times 10^5\,\text{Pa}$ expands adiabatically until its volume doubles.

(a) Calculate the final temperature and pressure.

(b) Calculate the work done by the gas.

(c) If the same gas were to expand isothermally from the same initial state to double its volume, calculate the work done and compare with part (b).

**Solution:**

(a) Initial volume: $V_1 = nRT_1/P_1 = 3.0 \times 8.314 \times 400/(4.0 \times 10^5) = 9976.8/4.0 \times 10^5 = 2.494 \times 10^{-2}\,\text{m}^3$

Final volume: $V_2 = 2V_1 = 4.989 \times 10^{-2}\,\text{m}^3$

Adiabatic relation: $T_1V_1^{\gamma - 1} = T_2V_2^{\gamma - 1}$

$$T_2 = T_1\left(\frac{V_1}{V_2}\right)^{\gamma - 1} = 400 \times \left(\frac{1}{2}\right)^{2/3} = 400 \times 0.6300 = 252\,\text{K}$$

Adiabatic relation: $P_1V_1^\gamma = P_2V_2^\gamma$

$$P_2 = P_1\left(\frac{V_1}{V_2}\right)^\gamma = 4.0 \times 10^5 \times \left(\frac{1}{2}\right)^{5/3} = 4.0 \times 10^5 \times 0.3150 = 1.26 \times 10^5\,\text{Pa}$$

(b) For an adiabatic process, $Q = 0$, so $W = -\Delta U$:

$$\Delta U = nC_v(T_2 - T_1) = 3.0 \times \frac{3}{2}R \times (252 - 400)$$

$$= 3.0 \times 12.471 \times (-148) = -5537\,\text{J}$$

Work done by gas: $W = -\Delta U = 5537\,\text{J}$

(c) Isothermal expansion to double volume:

$$W = nRT_1\ln\frac{V_2}{V_1} = 3.0 \times 8.314 \times 400 \times \ln 2$$

$$= 9976.8 \times 0.6931 = 6915\,\text{J}$$

The isothermal work ($6915\,\text{J}$) is greater than the adiabatic work ($5537\,\text{J}$). This is because in the adiabatic case, the gas cools as it expands, reducing the pressure and therefore the work output. In the isothermal case, heat flows in to maintain the temperature, keeping the pressure higher and allowing more work.

---

### IT-2: Thermodynamic Cycle Analysis (with Energy)

**Question:**

A gas undergoes a cycle consisting of three processes:
- 1 to 2: Isobaric expansion at $P = 3.0 \times 10^5\,\text{Pa}$, $V$ increases from $1.0 \times 10^{-3}\,\text{m}^3$ to $3.0 \times 10^{-3}\,\text{m}^3$
- 2 to 3: Isochoric cooling, $P$ decreases to $1.0 \times 10^5\,\text{Pa}$
- 3 to 1: Isothermal compression back to state 1

(a) Calculate the work done, heat exchanged, and change in internal energy for each process.

(b) Calculate the efficiency of the cycle.

(c) Calculate the maximum possible efficiency for an engine operating between the maximum and minimum temperatures of this cycle.

**Solution:**

(a) **Process 1 to 2 (isobaric expansion):**

$W_{12} = P\Delta V = 3.0 \times 10^5 \times (3.0 - 1.0) \times 10^{-3} = 600\,\text{J}$

Temperature at state 1: $T_1 = P_1V_1/(nR) = 3.0 \times 10^5 \times 1.0 \times 10^{-3}/(nR) = 300/(nR)$

Temperature at state 2: $T_2 = P_2V_2/(nR) = 3.0 \times 10^5 \times 3.0 \times 10^{-3}/(nR) = 900/(nR)$

Since $T_2 = 3T_1$, and $\Delta U = nC_v(T_2 - T_1)$:

Without knowing $n$ or the gas type, let $nR = 300/T_1$, so $nR = 300/T_1$. Let $T_1$ be the reference. We can work in ratios.

$\Delta U_{12} = nC_v(T_2 - T_1) = nC_v \times 2T_1$

$Q_{12} = nC_p(T_2 - T_1) = nC_p \times 2T_1$

For a monatomic ideal gas: $C_v = 3R/2$, $C_p = 5R/2$.

$nR = P_1V_1/T_1 = 300/T_1$, so $n = 300/(RT_1)$.

Let us use specific values. Let $T_1 = 100\,\text{K}$ (choosing for convenience, the ratios will be the same).

Then $nR = 3.0$, $n = 3.0/8.314 = 0.361\,\text{mol}$.

$T_2 = 300\,\text{K}$, $T_3 = P_3V_3/(nR) = 1.0 \times 10^5 \times 3.0 \times 10^{-3}/3.0 = 100\,\text{K} = T_1$.

$\Delta U_{12} = 0.361 \times 1.5 \times 8.314 \times (300 - 100) = 0.361 \times 12.471 \times 200 = 900\,\text{J}$

$Q_{12} = W_{12} + \Delta U_{12} = 600 + 900 = 1500\,\text{J}$

**Process 2 to 3 (isochoric cooling):**

$W_{23} = 0$

$\Delta U_{23} = 0.361 \times 12.471 \times (100 - 300) = -900\,\text{J}$

$Q_{23} = -900\,\text{J}$

**Process 3 to 1 (isothermal compression):**

$\Delta U_{31} = 0$ (isothermal)

$W_{31} = nRT_3\ln(V_1/V_3) = 3.0 \times \ln(1/3) = 3.0 \times (-1.099) = -3.30\,\text{J}$

Wait, $nRT_3 = P_3V_3 = 1.0 \times 10^5 \times 3.0 \times 10^{-3} = 300\,\text{J}$.

$W_{31} = 300 \times \ln(1/3) = 300 \times (-1.099) = -330\,\text{J}$

$Q_{31} = W_{31} = -330\,\text{J}$

(b) Net work: $W_{\text{net}} = 600 + 0 - 330 = 270\,\text{J}$

Heat input (positive $Q$): $Q_{\text{in}} = 1500\,\text{J}$

Efficiency: $\eta = W_{\text{net}}/Q_{\text{in}} = 270/1500 = 0.18 = 18\%$

(c) Maximum temperature: $T_{\max} = T_2 = 300\,\text{K}$

Minimum temperature: $T_{\min} = T_1 = T_3 = 100\,\text{K}$

Carnot efficiency: $\eta_{\text{Carnot}} = 1 - T_{\min}/T_{\max} = 1 - 100/300 = 2/3 = 67\%$

The actual cycle efficiency ($18\%$) is much lower than the Carnot limit ($67\%$), as expected for a real cycle with irreversible processes.

---

### IT-3: Gas Laws Combined with Kinetic Theory (with Dynamics)

**Question:**

A sealed container of volume $V = 0.010\,\text{m}^3$ contains $n = 0.40\,\text{mol}$ of an ideal monatomic gas at temperature $T = 350\,\text{K}$.

(a) Calculate the pressure using the ideal gas law.

(b) Using kinetic theory, calculate the root-mean-square speed of the gas molecules and the average translational kinetic energy per molecule.

(c) The container is heated to $T' = 700\,\text{K}$. Calculate the new pressure and the change in the total internal energy. The mass of one gas molecule (argon) is $m = 6.63 \times 10^{-26}\,\text{kg}$.

**Solution:**

(a) $P = nRT/V = 0.40 \times 8.314 \times 350/0.010 = 1164\,\text{Pa}$

(b) RMS speed: $v_{\text{rms}} = \sqrt{\frac{3RT}{M}}$ where $M = m \times N_A = 6.63 \times 10^{-26} \times 6.022 \times 10^{23} = 0.0399\,\text{kg}\,\text{mol}^{-1}$

$$v_{\text{rms}} = \sqrt{\frac{3 \times 8.314 \times 350}{0.0399}} = \sqrt{\frac{8729.7}{0.0399}} = \sqrt{218793} = 468\,\text{m}\,\text{s}^{-1}$$

Average KE per molecule: $\langle E_k \rangle = \frac{3}{2}k_BT = \frac{3}{2} \times 1.381 \times 10^{-23} \times 350 = 7.25 \times 10^{-21}\,\text{J}$

(c) New pressure: $P' = nRT'/V = 0.40 \times 8.314 \times 700/0.010 = 2328\,\text{Pa}$

This is double the original pressure (since $T$ doubled at constant $V$), confirming $P \propto T$ at constant $V$.

Change in internal energy: $\Delta U = nC_v\Delta T = 0.40 \times \frac{3}{2} \times 8.314 \times (700 - 350)$

$$= 0.40 \times 12.471 \times 350 = 1746\,\text{J}$$

New RMS speed: $v_{\text{rms}}' = \sqrt{\frac{3 \times 8.314 \times 700}{0.0399}} = \sqrt{437586} = 661\,\text{m}\,\text{s}^{-1}$

Ratio: $v_{\text{rms}}'/v_{\text{rms}} = \sqrt{2} \approx 1.414$. Doubling the temperature increases the RMS speed by a factor of $\sqrt{2}$.
