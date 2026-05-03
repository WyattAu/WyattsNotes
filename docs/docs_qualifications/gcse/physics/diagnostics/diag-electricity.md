---
title: Electricity -- Diagnostic Tests
description: "GCSE Physics diagnostic tests for electricity: current, voltage, resistance, series and parallel circuits, Ohm's law, power."
slug: diag-electricity
hide_table_of_contents: true
---

# Electricity — Diagnostic Tests

## Unit Tests

### UT-1: Current, Voltage, and Resistance
**Question:** (a) Define current, voltage, and resistance. (b) A circuit has a 12 V battery connected to a resistor of 4 $\Omega$. Calculate the current. (c) A bulb has a resistance of 10 $\Omega$ when operating at 6 V. Calculate the current and the power. (d) Explain the difference between AC and DC, giving an example of each.

**Solution:**

(a) **Current:** The rate of flow of electric charge, measured in amperes (A). $I = Q/t$.
**Voltage (potential difference):** The energy transferred per unit charge between two points, measured in volts (V). $V = E/Q$.
**Resistance:** A measure of how much a component opposes the flow of current, measured in ohms ($\Omega$). $R = V/I$.

(b) $I = V/R = 12/4 = 3$ A.

(c) $I = V/R = 6/10 = 0.6$ A. $P = VI = 6 \times 0.6 = 3.6$ W.

(d) **DC (Direct Current):** Current flows in one direction only. Example: batteries, solar cells.
**AC (Alternating Current):** Current reverses direction periodically (50 Hz in the UK, meaning 50 complete cycles per second). Example: mains electricity supply.

### UT-2: Series and Parallel Circuits
**Question:** Two resistors, 6 $\Omega$ and 4 $\Omega$, are connected in series with a 10 V battery. (a) Calculate the total resistance, current, and voltage across each resistor. (b) If the same resistors are connected in parallel with the same battery, calculate the total resistance, current through each resistor, and total current. (c) Explain why household appliances are connected in parallel rather than series. (d) Calculate the total power dissipated in both configurations.

**Solution:**

(a) **Series:** $R_{\text{total}} = 6 + 4 = 10$ $\Omega$. $I = 10/10 = 1$ A.
$V_1 = IR_1 = 1 \times 6 = 6$ V. $V_2 = IR_2 = 1 \times 4 = 4$ V. ($V_1 + V_2 = 10$ V $\checkmark$)

(b) **Parallel:** $\frac{1}{R_{\text{total}}} = \frac{1}{6} + \frac{1}{4} = \frac{5}{12}$. $R_{\text{total}} = 2.4$ $\Omega$.
$I_1 = 10/6 = 1.67$ A. $I_2 = 10/4 = 2.5$ A. $I_{\text{total}} = 1.67 + 2.5 = 4.17$ A.

(c) In parallel, each appliance receives the full supply voltage (e.g., 230 V) independently. If one appliance fails (e.g., a light bulb blows), the others continue to work. In series, the voltage is shared between appliances, so each receives less than the full supply. If one fails, the circuit is broken and all appliances stop working. Additionally, in parallel, each appliance can be switched on/off independently.

(d) **Series:** $P = VI = 10 \times 1 = 10$ W.
**Parallel:** $P = VI_{\text{total}} = 10 \times 4.17 = 41.7$ W. (Or: $P = V^2/R = 100/2.4 = 41.7$ W.)

### UT-3: Electrical Power and Energy
**Question:** (a) Derive the three formulas for electrical power: $P = VI$, $P = I^2R$, and $P = V^2/R$. (b) A heater rated at 2000 W is used for 3 hours per day for 30 days. Calculate the total energy in kWh and the cost at 28p per kWh. (c) A 12 V car battery has a capacity of 50 Ah. Calculate the total energy stored and how long it can power a 60 W light bulb.

**Solution:**

(a) $P = VI$ (from definition: power $=$ energy/time, voltage $=$ energy/charge, current $=$ charge/time, so $VI = \text{energy/time} = P$).
$P = I^2R$: substitute $V = IR$ into $P = VI$: $P = I \times IR = I^2R$.
$P = V^2/R$: substitute $I = V/R$ into $P = VI$: $P = V \times V/R = V^2/R$.

(b) Energy per day $= 2 \times 3 = 6$ kWh. Total energy $= 6 \times 30 = 180$ kWh. Cost $= 180 \times 0.28 = \pounds 50.40$.

(c) Total charge $= 50 \times 3600 = 180{,}000$ C. Energy $= V \times Q = 12 \times 180{,}000 = 2{,}160{,}000$ J $= 0.6$ kWh.

Time for 60 W bulb $= 2{,}160{,}000 / 60 = 36{,}000$ s $= 10$ hours.

---

## Integration Tests

### IT-1: Circuit Analysis with Multiple Components (with Energy)
**Question:** A circuit contains a 12 V battery, a 4 $\Omega$ resistor, a 6 $\Omega$ resistor in series, and a 12 $\Omega$ resistor in parallel with the 6 $\Omega$ resistor. (a) Calculate the total resistance of the parallel combination. (b) Calculate the total circuit resistance and current. (c) Calculate the power dissipated in each resistor. (d) Calculate the total energy transferred in 5 minutes.

**Solution:**

(a) Parallel combination of 6 $\Omega$ and 12 $\Omega$: $\frac{1}{R_p} = \frac{1}{6} + \frac{1}{12} = \frac{3}{12} = \frac{1}{4}$. $R_p = 4$ $\Omega$.

(b) Total $R = 4 + R_p = 4 + 4 = 8$ $\Omega$. $I = 12/8 = 1.5$ A.

(c) Voltage across parallel combination $= 12 - 1.5 \times 4 = 12 - 6 = 6$ V.
Current through 6 $\Omega$: $6/6 = 1$ A. Current through 12 $\Omega$: $6/12 = 0.5$ A. ($1 + 0.5 = 1.5$ A $\checkmark$)

Power in 4 $\Omega$: $I^2R = 1.5^2 \times 4 = 9$ W.
Power in 6 $\Omega$: $V^2/R = 36/6 = 6$ W.
Power in 12 $\Omega$: $V^2/R = 36/12 = 3$ W.
Total power $= 9 + 6 + 3 = 18$ W.

(d) Energy $= P \times t = 18 \times 300 = 5400$ J.

### IT-2: Domestic Electricity and Safety (with Energy)
**Question:** A kitchen has the following appliances connected to a ring circuit with a 30 A fuse: kettle (2.2 kW), oven (3.5 kW), microwave (0.8 kW), toaster (0.9 kW), and fridge (0.15 kW). (a) Calculate the current drawn by each appliance at 230 V. (b) Can all appliances be switched on simultaneously? Justify. (c) Explain why a fuse or circuit breaker is necessary. (d) Calculate the cost of running the kettle for 10 minutes per day for a year at 28p/kWh.

**Solution:**

(a) $I = P/V$.
Kettle: $2200/230 = 9.57$ A. Oven: $3500/230 = 15.22$ A. Microwave: $800/230 = 3.48$ A. Toaster: $900/230 = 3.91$ A. Fridge: $150/230 = 0.65$ A.

(b) Total current $= 9.57 + 15.22 + 3.48 + 3.91 + 0.65 = 32.83$ A.

This exceeds the 30 A fuse rating, so **no** -- not all appliances can be on simultaneously. The fuse would blow (or circuit breaker trip). In practice, the oven and kettle should not be on the same ring circuit, or a higher-rated circuit is needed.

(c) A fuse or circuit breaker protects the wiring from overheating. If too much current flows (due to a fault or overloading), the wire's resistance causes excessive heating ($P = I^2R$), which can melt insulation and cause a fire. The fuse melts (or the breaker trips) at a specific current, breaking the circuit before the wire is damaged.

(d) Energy per day $= 2.2 \times 10/60 = 0.367$ kWh. Energy per year $= 0.367 \times 365 = 133.9$ kWh. Cost $= 133.9 \times 0.28 = \pounds 37.49$.

### IT-3: Resistance and Temperature (with Particles)
**Question:** (a) Explain how the resistance of a metal wire changes with temperature, referring to the behaviour of electrons and ions. (b) Explain how the resistance of a thermistor (NTC type) changes with temperature. (c) A thermistor is used in a potential divider circuit with a 10 k$\Omega$ fixed resistor and a 9 V supply. At $25^\circ\text{C}$, the thermistor resistance is 10 k$\Omega$. Calculate the output voltage across the thermistor. (d) At $100^\circ\text{C}$, the thermistor resistance drops to 1 k$\Omega$. Calculate the new output voltage and explain how this enables temperature sensing.

**Solution:**

(a) In a metal, as temperature increases, the metal ions vibrate more vigorously. This increases the frequency of collisions between the conduction electrons and the ions, impeding electron flow. Therefore, the resistance of a metal wire **increases** with temperature.

(b) An NTC (Negative Temperature Coefficient) thermistor is made from semiconductor material. As temperature increases, more electrons are released from their atoms into the conduction band, increasing the number of charge carriers. This outweighs the increased ion vibration, so resistance **decreases** with temperature.

(c) At $25^\circ\text{C}$: $R_{\text{thermistor}} = R_{\text{fixed}} = 10$ k$\Omega$. The voltage divides equally. $V_{\text{out}} = 9 \times \frac{10}{10 + 10} = 4.5$ V.

(d) At $100^\circ\text{C}$: $R_{\text{thermistor}} = 1$ k$\Omega$. $V_{\text{out}} = 9 \times \frac{1}{1 + 10} = 9 \times \frac{1}{11} = 0.818$ V.

The output voltage drops from 4.5 V to 0.82 V as temperature rises from $25^\circ\text{C}$ to $100^\circ\text{C}$. This changing voltage can be measured by a microcontroller or voltmeter, and a calibration curve can convert the voltage reading to a temperature. The larger the change in voltage, the more sensitive and accurate the temperature sensor.
