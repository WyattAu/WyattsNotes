---
title: Wrap Up
date: 2025-11-03T16:19:14.697Z
tags:
  - physics
categories:
  - physics
slug: wrap
---

<details>
<summary><strong>B.1 Thermal Energy Transfers, B.2 Greenhouse Effect & B.3 Gas Laws</strong></summary>
<p>

1. **Question:** A 0.50 kg block of ice is initially at -15°C. It is placed on a large, dark-colored metal plate (emissivity 0.90) of area 0.20 m² that is in direct sunlight. The intensity of the solar radiation incident on the plate is 800 W/m², and the plate reflects 10% of this radiation. The plate loses energy only through radiation.
a) Calculate the steady-state temperature of the metal plate before the ice is placed on it.
b) Calculate the total thermal energy required to turn the -15°C ice into water at 20°C.
c) Assuming the plate remains at the temperature calculated in (a), and heat is transferred to the ice block perfectly via conduction, how long will this process take?
(Data: Specific heat of ice = 2100 J kg⁻¹K⁻¹, Specific heat of water = 4200 J kg⁻¹K⁻¹, Specific latent heat of fusion of ice = 3.3x10⁵ J kg⁻¹)
<details>
<summary>Answer</summary>
<p>

- **Strategy:** (a) Use energy balance (power in = power out) for the plate. (b) A three-stage heat calculation. (c) Use the concept of power to find time.
- **a) Plate Temperature:**
  - The plate reflects 10%, so it absorbs 90%. Power absorbed: $P_{\text{in}} = (\text{Intensity}) \times (\text{Area}) \times (\text{Absorptivity}) = 800 \times 0.20 \times 0.90 = 144$ W.
  - Power radiated (out): $P_{\text{out}} = e \sigma A T^4$, where $e=0.90$.
  - In equilibrium, $P_{\text{in}} = P_{\text{out}} \implies 144 = (0.90)(5.67\times 10^{-8})(0.20)T^4$.
  - $T^4 = \frac{144}{1.02\times 10^{-8}} = 1.41 \times 10^{10}$ K⁴ $\implies T = 344.6$ K (or 71.6°C).
- **b) Total Energy for Ice/Water:**
  - 1. Heat ice from -15°C to 0°C: $Q_1 = mc_{\text{ice}}\Delta T = (0.50)(2100)(15) = 15,750$ J.
  - 2. Melt ice at 0°C: $Q_2 = mL_f = (0.50)(3.3\times 10^5) = 165,000$ J.
  - 3. Heat water from 0°C to 20°C: $Q_3 = mc_{\text{water}}\Delta T = (0.50)(4200)(20) = 42,000$ J.
  - Total Energy: $Q_{\text{total}} = Q_1 + Q_2 + Q_3 = 15750 + 165000 + 42000 = 222,750$ J.
- **c) Time to Transfer Energy:**
  - The net power available from the plate is the power it absorbs from the sun, which is 144 W. We assume all this power is conducted into the ice.
  - Power is the rate of energy transfer: $P = \frac{Q}{t} \implies t = \frac{Q_{\text{total}}}{P}$.
  - $t = \frac{222750 \text{ J}}{144 \text{ W}} = 1547$ s (or about 25.8 minutes).
  </p>
  <p>
  <b>If you get this wrong, you should focus on:</b> Applying the energy balance principle for radiation, breaking down a phase change problem into its distinct heating and melting stages, and understanding the relationship between power and energy transfer over time ($P=E/t$).
  </p>
  </details>

2. **Question:** A sealed vertical cylinder with a frictionless piston contains 0.10 moles of a monatomic ideal gas. The piston has a mass of 5.0 kg and an area of 0.010 m². The system is in a room at 293 K and atmospheric pressure is $1.01 \times 10^5$ Pa.
a) Calculate the initial volume of the gas.
b) The gas is slowly heated, causing it to expand isobarically until its volume doubles. Calculate the work done by the gas and the amount of heat supplied.
<details>
<summary>Answer</summary>
<p>

- **Strategy:** First determine the pressure inside the cylinder by considering the equilibrium of the piston. Use the Ideal Gas Law for the initial volume. Apply thermodynamics for an isobaric process for part (b).
- **a) Initial Volume:**
  - The piston is in equilibrium. The pressure from the gas ($P_{\text{gas}}$) must support the piston's weight and the atmospheric pressure ($P_{\text{atm}}$).
  - $P_{\text{gas}} A = P_{\text{atm}} A + mg$.
  - $P_{\text{gas}} = P_{\text{atm}} + \frac{mg}{A} = (1.01 \times 10^5) + \frac{(5.0)(9.8)}{0.010} = 1.01 \times 10^5 + 4900 = 1.059 \times 10^5$ Pa.
  - Now use the Ideal Gas Law: $V_1 = \frac{nRT_1}{P_{\text{gas}}} = \frac{(0.10)(8.31)(293)}{1.059 \times 10^5} = 0.00230 \text{ m}^3$.
- **b) Work and Heat for Isobaric Expansion:**
  - The process is isobaric, so the pressure remains $P_{\text{gas}} = 1.059 \times 10^5$ Pa. The volume doubles, so $V_2 = 2V_1 = 0.00460$ m³.
  - **Work Done:** $W = P \Delta V = (1.059 \times 10^5)(V_2 - V_1) = (1.059 \times 10^5)(0.00230) = 243.6$ J.
  - **Heat Supplied:** For an isobaric process, $Q = \Delta U + W$. - The temperature also doubles: $T_2 = 2T_1 = 586$ K. - $\Delta U = \frac{3}{2}nR\Delta T = \frac{3}{2}(0.10)(8.31)(586 - 293) = 365.3$ J. - $Q = 365.3 + 243.6 = 608.9$ J.
  </p>
  <p>
  <b>If you get this wrong, you should focus on:</b> Calculating pressure in a system with a piston, correctly applying the Ideal Gas Law, and using the First Law of Thermodynamics for a specific process (isobaric), remembering to calculate both the change in internal energy and the work done.
  </p>
  </details>

3. **Question (HL Only):** A Carnot engine operates between a hot reservoir at 600 K and a cold reservoir at 300 K. In one cycle, it absorbs 2000 J of heat from the hot reservoir. The work output from this Carnot engine is used to drive a Carnot refrigerator operating between the same two reservoirs.
a) What is the efficiency of the Carnot engine and how much work does it produce per cycle?
b) What is the coefficient of performance (COP) of the Carnot refrigerator?
c) How much heat can the refrigerator remove from the cold reservoir in one cycle, using the work produced by the engine?
<details>
<summary>Answer</summary>
<p>

- **Strategy:** Calculate efficiency and work for the engine. Calculate the COP for the refrigerator. Use the definition of COP and the work input to find the heat removed.
- **a) Engine Efficiency and Work:**
  - Efficiency of a Carnot engine: $\eta = 1 - \frac{T_c}{T_h} = 1 - \frac{300}{600} = 0.50$ (or 50%).
  - Efficiency is also defined as $\eta = \frac{W}{Q_h}$.
  - Work produced per cycle: $W = \eta \cdot Q_h = 0.50 \times 2000 \text{ J} = 1000 \text{ J}$.
- **b) Refrigerator Coefficient of Performance:**
  - For a refrigerator, the goal is to remove heat $Q_c$ from the cold reservoir.
  - COP (cooling) is defined as $COP = \frac{Q_c}{W}$.
  - For an ideal (Carnot) refrigerator, $COP_{\text{Carnot}} = \frac{T_c}{T_h - T_c} = \frac{300}{600 - 300} = 1.0$.
- **c) Heat Removed by Refrigerator:**
  - The refrigerator is driven by the 1000 J of work from the engine, so $W = 1000$ J.
  - Using the COP definition: $Q_c = COP \cdot W = 1.0 \times 1000 \text{ J} = 1000 \text{ J}$.
  - The refrigerator can remove 1000 J of heat from the cold reservoir per cycle.
  </p>
  <p>
  <b>If you get this wrong, you should focus on:</b> The distinction between a heat engine and a refrigerator, the correct formulas for Carnot efficiency and Carnot COP, and how the work output of an engine serves as the work input for another device.
  </p>
  </details>

4. **Question (HL Only):** 1.0 mole of a monatomic ideal gas is initially at state A (300 K, $1.0 \times 10^5$ Pa). It is adiabatically compressed to half its original volume, reaching state B. It is then cooled at constant volume back to its original temperature, reaching state C.
a) Calculate the temperature and pressure at state B.
b) Calculate the change in entropy of the gas during the process B -> C.
<details>
<summary>Answer</summary>
<p>

- **Strategy:** Use the adiabatic relation ($PV^\gamma = \text{const.}$) to find the state variables at B. For the entropy change, use the formula $\Delta S = \int \frac{dQ}{T}$ for the constant volume process.
- **a) State B (after adiabatic compression):**
  - For a monatomic ideal gas, the adiabatic index $\gamma = 5/3$.
  - Initial volume $V_A = \frac{nRT_A}{P_A} = \frac{1.0(8.31)(300)}{1.0 \times 10^5} = 0.0249$ m³.
  - Final volume $V_B = V_A/2 = 0.01245$ m³.
  - **Pressure at B:** Use $P_A V_A^\gamma = P_B V_B^\gamma$.
    - $P_B = P_A \left(\frac{V_A}{V_B}\right)^\gamma = (1.0 \times 10^5) (2)^{5/3} = 3.17 \times 10^5$ Pa.
  - **Temperature at B:** Use the ideal gas law: $T_B = \frac{P_B V_B}{nR}$.
    - $T_B = \frac{(3.17 \times 10^5)(0.01245)}{(1.0)(8.31)} = 475$ K.
    - Alternatively, use $T_A V_A^{\gamma-1} = T_B V_B^{\gamma-1} \implies T_B = T_A (V_A/V_B)^{\gamma-1} = 300(2)^{2/3} = 476$ K. (Slight difference due to rounding). Let's use 476 K.
- **b) Entropy Change (B -> C):**
  - Process B -> C is isochoric (constant volume). The temperature changes from $T_B = 476$ K to $T_C = T_A = 300$ K.
  - For a constant volume process, $dQ = dU = nC_V dT = \frac{3}{2}nR dT$.
  - The change in entropy is $\Delta S = \int_{T_B}^{T_C} \frac{dQ}{T} = \int_{T_B}^{T_C} \frac{nC_V dT}{T} = nC_V \ln\left(\frac{T_C}{T_B}\right)$.
  - $\Delta S = \frac{3}{2}nR \ln\left(\frac{T_C}{T_B}\right) = \frac{3}{2}(1.0)(8.31) \ln\left(\frac{300}{476}\right)$.
  - $\Delta S = 12.465 \times (-0.462) = -5.76$ J K⁻¹.
  - The entropy decreases, as expected, since heat is being removed from the system.
  </p>
  <p>
  <b>If you get this wrong, you should focus on:</b> The specific gas law relations for an adiabatic process ($PV^\gamma=\text{const.}$, $TV^{\gamma-1}=\text{const.}$). Also, the formula for calculating entropy change during a process with a changing temperature, which requires integration or the logarithmic form.
  </p>
  </details>

5. **Question:** A circuit is constructed with a 12.0 V battery with an internal resistance of 0.50 Ω. It is connected to a 2.0 Ω resistor in series with a parallel combination of a 3.0 Ω resistor and a 6.0 Ω resistor.
a) Calculate the total equivalent resistance of the external circuit.
b) Calculate the total current flowing from the battery.
c) What is the terminal potential difference of the battery when this circuit is connected?
d) What is the power dissipated in the 3.0 Ω resistor?
<details>
<summary>Answer</summary>
<p>

- **Strategy:** Systematically reduce the circuit to find total resistance. Use Ohm's Law including internal resistance. Work backwards to find current and power in a specific branch.
- **a) Equivalent Resistance:**
  - First, find the equivalent resistance of the parallel part ($R_p$):
    - $\frac{1}{R_p} = \frac{1}{3.0} + \frac{1}{6.0} = \frac{2+1}{6.0} = \frac{3.0}{6.0} = 0.5 \implies R_p = 2.0 \Omega$.
  - Now, add the series resistor: $R_{\text{external}} = 2.0 \Omega + R_p = 2.0 + 2.0 = 4.0 \Omega$.
- **b) Total Current:**
  - The total resistance of the entire circuit is $R_{\text{total}} = R_{\text{external}} + r = 4.0 + 0.50 = 4.5 \Omega$.
  - Use Ohm's Law for the whole circuit: $I_{\text{total}} = \frac{\varepsilon}{R_{\text{total}}} = \frac{12.0 \text{ V}}{4.5 \Omega} = 2.67$ A.
- **c) Terminal Potential Difference:**
  - The terminal PD is the voltage across the external circuit: $V_{\text{terminal}} = I_{\text{total}} R_{\text{external}} = (2.67 \text{ A})(4.0 \Omega) = 10.67$ V.
  - Alternatively, it's the EMF minus the "lost volts": $V_{\text{terminal}} = \varepsilon - I_{\text{total}} r = 12.0 - (2.67)(0.50) = 12.0 - 1.335 = 10.67$ V.
- **d) Power in 3.0 Ω Resistor:**
  - First, find the voltage across the parallel combination ($V_p$). This is the total current times the parallel equivalent resistance.
    - $V_p = I_{\text{total}} R_p = (2.67 \text{ A})(2.0 \Omega) = 5.34$ V.
  - This voltage is the same across both the 3.0 Ω and 6.0 Ω resistors.
  - Now, find the power dissipated in the 3.0 Ω resistor using $P = \frac{V^2}{R}$. - $P_{3\Omega} = \frac{(5.34 \text{ V})^2}{3.0 \Omega} = 9.5$ W.
  </p>
  <p>
  <b>If you get this wrong, you should focus on:</b> The rules for combining series and parallel resistors, the concept of internal resistance and terminal PD, and using the potential divider rule (or working backwards through the circuit) to find voltage/current for a specific component.
  </p>
  </details>

</p>
</details>
