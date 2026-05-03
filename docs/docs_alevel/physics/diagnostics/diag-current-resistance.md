---
title: Current and Resistance -- Diagnostic Tests
description: Diagnostic tests for Ohm's law, I-V characteristics of non-ohmic components, resistivity, and superconductivity at maximum A-Level Physics difficulty.
slug: diag-current-resistance
hide_table_of_contents: true
---

# Current and Resistance — Diagnostic Tests

## Unit Tests

### UT-1: I-V Characteristics of a Filament Lamp

**Question:**

A filament lamp is connected to a variable power supply. The following I-V data are recorded:

| $V\,/\,\text{V}$ | 0 | 1.0 | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 | 12.0 |
|---|---|---|---|---|---|---|---|---|
| $I\,/\,\text{mA}$ | 0 | 80 | 120 | 180 | 230 | 270 | 300 | 330 |

(a) Sketch the I-V characteristic and explain why the lamp is non-ohmic.

(b) Calculate the resistance of the lamp at $V = 2.0\,\text{V}$ and at $V = 12.0\,\text{V}$.

(c) Calculate the power dissipated at $V = 12.0\,\text{V}$ and explain why the resistance increases with voltage.

**Solution:**

(a) The I-V graph curves away from both axes (current increases more slowly as voltage increases). This is because the filament is a metal (tungsten) whose resistance increases with temperature. As current flows, the filament heats up, increasing its resistance. V=IR applies at every instant (Ohm's law is a property of the conductor at a specific operating point), but the resistance is not constant -- it depends on the applied voltage (through the resulting temperature).

The graph is not a straight line through the origin, so the lamp is non-ohmic.

(b) At $V = 2.0\,\text{V}$: $R = V/I = 2.0/(120 \times 10^{-3}) = 16.7\,\Omega$

At $V = 12.0\,\text{V}$: $R = 12.0/(330 \times 10^{-3}) = 36.4\,\Omega$

The resistance more than doubles between $2\,\text{V}$ and $12\,\text{V}$.

(c) $P = VI = 12.0 \times 330 \times 10^{-3} = 3.96\,\text{W}$

The resistance increases because the filament temperature increases with power dissipation ($P = I^2R$). For a metal, resistivity increases approximately linearly with temperature above the Debye temperature: $\rho(T) = \rho_0[1 + \alpha(T - T_0)]$, where $\alpha \approx 0.0045\,\text{K}^{-1}$ for tungsten. At $12\,\text{V}$, the filament temperature is around $2800\,\text{K}$, much higher than room temperature.

---
### UT-2: Resistivity and Temperature Dependence

**Question:**

A copper wire has resistance $R_1 = 5.00\,\Omega$ at $T_1 = 20^\circ\text{C}$ and $R_2 = 5.80\,\Omega$ at $T_2 = 100^\circ\text{C}$. The wire has length $10.0\,\text{m}$ and cross-sectional area $1.0 \times 10^{-6}\,\text{m}^2$.

(a) Calculate the temperature coefficient of resistance $\alpha$ for copper.

(b) Calculate the resistivity of copper at $20^\circ\text{C}$.

(c) At what temperature would the resistance be $6.50\,\Omega$?

**Solution:**

(a) $R_2 = R_1[1 + \alpha(T_2 - T_1)]$

$$5.80 = 5.00[1 + \alpha(80)]$$
$$1 + 80\alpha = 1.160$$
$$80\alpha = 0.160$$
$$\alpha = 0.00200\,\text{K}^{-1}$$

The accepted value is approximately $0.00393\,\text{K}^{-1}$, but we use the data given.

(b) $\rho = RA/l = 5.00 \times 1.0 \times 10^{-6}/10.0 = 5.00 \times 10^{-7}\,\Omega\,\text{m}$

The accepted value is $1.68 \times 10^{-8}\,\Omega\,\text{m}$, so this copper has a much higher resistivity than pure copper, suggesting impurities or an alloy.

(c) $R_3 = R_1[1 + \alpha(T_3 - T_1)]$

$$6.50 = 5.00[1 + 0.00200(T_3 - 20)]$$
$$1 + 0.00200(T_3 - 20) = 1.300$$
$$0.00200(T_3 - 20) = 0.300$$
$$T_3 = 170^\circ\text{C}$$

---
### UT-3: Semiconductor Diode I-V Characteristic

**Question:**

A semiconductor diode has the I-V characteristic approximated by the Shockley diode equation:

$$I = I_0\left(e^{eV/(nkT)} - 1\right)$$

where $I_0 = 5.0 \times 10^{-9}\,\text{A}$, $n = 1.5$ (ideality factor), $e = 1.60 \times 10^{-19}\,\text{C}$, $k = 1.38 \times 10^{-23}\,\text{J}\,\text{K}^{-1}$, and $T = 300\,\text{K}$.

(a) Calculate the current when $V = 0.60\,\text{V}$ is applied in the forward direction.

(b) Calculate the dynamic resistance (gradient of I-V curve) at $V = 0.60\,\text{V}$.

(c) Calculate the voltage at which the diode conducts $10\,\text{mA}$ in the forward direction.

**Solution:**

(a) Thermal voltage: $V_T = kT/e = 1.38 \times 10^{-23} \times 300/1.60 \times 10^{-19} = 0.02588\,\text{V}$

Exponent: $eV/(nkT) = 0.60/(1.5 \times 0.02588) = 0.60/0.03881 = 15.46$

$$I = 5.0 \times 10^{-9}(e^{15.46} - 1) = 5.0 \times 10^{-9}(5.265 \times 10^6 - 1) \approx 5.0 \times 10^{-9} \times 5.265 \times 10^6 = 0.0263\,\text{A} = 26.3\,\text{mA}$$

(b) Dynamic resistance: $r_d = \frac{dV}{dI} = \frac{nkT}{e(I + I_0)} \approx \frac{nkT}{eI}$ (since $I \gg I_0$)

$$r_d = \frac{1.5 \times 0.02588}{0.0263} = \frac{0.03881}{0.0263} = 1.48\,\Omega$$

(c) At $I = 10\,\text{mA} = 0.010\,\text{A}$:

$$0.010 = 5.0 \times 10^{-9}(e^{V/(nV_T)} - 1)$$
$$e^{V/(nV_T)} - 1 = 2.0 \times 10^6$$
$$e^{V/(nV_T)} = 2.0 \times 10^6$$
$$\frac{V}{nV_T} = \ln(2.0 \times 10^6) = 14.51$$
$$V = 14.51 \times 1.5 \times 0.02588 = 0.563\,\text{V}$$

## Integration Tests

### IT-1: Wheatstone Bridge with Non-Ohmic Component (with DC Circuits)

**Question:**

A Wheatstone bridge circuit has the following arrangement: $R_1 = 100\,\Omega$ (top left), $R_2 = 200\,\Omega$ (top right), $R_3 = 150\,\Omega$ (bottom left), and a filament lamp $L$ (bottom right). The supply EMF is $12.0\,\text{V}$ with negligible internal resistance. A galvanometer of resistance $50\,\Omega$ is connected between the midpoints.

The lamp has resistance $100\,\Omega$ at the operating point in the balanced condition.

(a) Calculate the current through each resistor when the bridge is balanced.

(b) If $R_1$ increases to $110\,\Omega$, calculate the current through the galvanometer.

(c) Explain how the Wheatstone bridge principle fails when non-ohmic components are used.

**Solution:**

(a) At balance: $R_1/R_2 = R_3/R_L$

$100/200 = 150/R_L \Rightarrow R_L = 300\,\Omega$

But we are told $R_L = 100\,\Omega$ at the operating point, and $R_1/R_2 = 100/200 = 0.5$, while $R_3/R_L = 150/100 = 1.5$. Since $0.5 \ne 1.5$, the bridge is **not balanced**.

For the bridge to be balanced with $R_L = 100\,\Omega$: $R_1/R_2 = R_3/R_L = 150/100 = 1.5$, so $R_1 = 1.5 \times 200 = 300\,\Omega$.

Since the bridge is not balanced, the galvanometer will carry current. This is actually the point of the question -- the bridge is deliberately unbalanced.

The total circuit needs to be solved using Kirchhoff's laws. The potential at the top junction is $12\,\text{V}$, at the bottom is $0\,\text{V}$.

Left branch: $R_1$ and $R_3$ in series, midpoint at $V_{\text{mid,left}} = 12 \times 150/(100 + 150) = 12 \times 0.6 = 7.2\,\text{V}$

Right branch: $R_2$ and $R_L$ in series, midpoint at $V_{\text{mid,right}} = 12 \times 100/(200 + 100) = 12 \times 1/3 = 4.0\,\text{V}$

Potential difference across galvanometer: $7.2 - 4.0 = 3.2\,\text{V}$

Current through galvanometer: $I_g = 3.2/50 = 0.064\,\text{A} = 64\,\text{mA}$

This is approximate because the galvanometer current changes the voltage distribution. A full solution would require solving the full circuit.

(b) With $R_1 = 110\,\Omega$:

Left midpoint: $V_L = 12 \times 150/(110 + 150) = 12 \times 150/260 = 6.923\,\text{V}$

Right midpoint: $V_R = 4.0\,\text{V}$ (unchanged since right branch unchanged)

Galvanometer current (approximate): $I_g = (6.923 - 4.0)/50 = 2.923/50 = 0.0585\,\text{A} = 58.5\,\text{mA}$

(c) The Wheatstone bridge principle requires a specific resistance ratio for balance: $R_1/R_2 = R_3/R_4$. For a non-ohmic component like a filament lamp, the resistance depends on the current flowing through it. This means the balance condition can only be satisfied at one specific operating point. If the supply voltage changes, the lamp resistance changes, and the bridge falls out of balance. This makes the Wheatstone bridge unsuitable for measuring non-ohmic components without additional circuitry to control the operating point.

---
### IT-2: Resistivity Experiment Error Analysis (with Quantities and Units)

**Question:**

A student determines the resistivity of a material using a wire of length $l$, diameter $d$, and measuring the resistance $R$ with a digital multimeter. They use $\rho = \pi d^2 R/(4l)$.

Their measurements are: $l = (1.000 \pm 0.001)\,\text{m}$, $d = (0.500 \pm 0.005)\,\text{mm}$, $R = (8.50 \pm 0.05)\,\Omega$.

(a) Calculate the resistivity and its percentage uncertainty.

(b) The student notices that the resistance measurement was made with the wire at $25^\circ\text{C}$, but the specification gives the resistivity at $20^\circ\text{C}$. If $\alpha = 0.004\,\text{K}^{-1}$, calculate the corrected resistivity at $20^\circ\text{C}$.

(c) The student then uses a micrometer screw gauge (resolution $0.01\,\text{mm}$) to re-measure the diameter, obtaining $d = (0.498 \pm 0.003)\,\text{mm}$. Recalculate the percentage uncertainty and comment on the improvement.

**Solution:**

(a) $d = 0.500\,\text{mm} = 5.00 \times 10^{-4}\,\text{m}$

$$\rho = \frac{\pi d^2 R}{4l} = \frac{\pi \times (5.00 \times 10^{-4})^2 \times 8.50}{4 \times 1.000} = \frac{\pi \times 2.500 \times 10^{-7} \times 8.50}{4} = \frac{6.685 \times 10^{-6}}{4} = 1.671 \times 10^{-6}\,\Omega\,\text{m}$$

Percentage uncertainty:

$$\frac{\Delta\rho}{\rho} = 2\frac{\Delta d}{d} + \frac{\Delta R}{R} + \frac{\Delta l}{l} = 2 \times \frac{0.005}{0.500} + \frac{0.05}{8.50} + \frac{0.001}{1.000}$$
$$= 2 \times 0.010 + 0.00588 + 0.001 = 0.02688 = 2.69\%$$

$$\rho = (1.67 \pm 0.04) \times 10^{-6}\,\Omega\,\text{m}$$

The dominant uncertainty is from the diameter measurement (which enters as $d^2$).

(b) The resistance at $20^\circ\text{C}$: $R_{20} = R_{25}/[1 + \alpha(25 - 20)] = 8.50/[1 + 0.004 \times 5] = 8.50/1.020 = 8.333\,\Omega$

$$\rho_{20} = \frac{\pi \times 2.500 \times 10^{-7} \times 8.333}{4} = 1.636 \times 10^{-6}\,\Omega\,\text{m}$$

(c) New diameter: $d = 0.498\,\text{mm}$, $\Delta d = 0.003\,\text{mm}$

$$\rho' = \frac{\pi \times (4.98 \times 10^{-4})^2 \times 8.50}{4 \times 1.000} = \frac{\pi \times 2.480 \times 10^{-7} \times 8.50}{4} = 1.657 \times 10^{-6}\,\Omega\,\text{m}$$

$$\frac{\Delta\rho'}{\rho'} = 2 \times \frac{0.003}{0.498} + 0.00588 + 0.001 = 0.01205 + 0.00588 + 0.001 = 0.01893 = 1.89\%$$

The percentage uncertainty improved from $2.69\%$ to $1.89\%$. The micrometer reduced the fractional uncertainty in diameter from $1.0\%$ to $0.60\%$, and since diameter enters as $d^2$, this contributed $2 \times 0.40\% = 0.80\%$ improvement.

---
### IT-3: Power Dissipation in a Transmission Line (with Work-Energy)

**Question:**

A power station generates $500\,\text{kW}$ of power at $10\,\text{kV}$. It is transmitted through cables of total resistance $4.0\,\Omega$ to a town $5\,\text{km}$ away.

(a) Calculate the power loss in the transmission cables.

(b) Calculate the efficiency of transmission.

(c) The power is stepped up to $100\,\text{kV}$ using a transformer before transmission. Calculate the new power loss and efficiency.

**Solution:**

(a) Current at $10\,\text{kV}$: $I = P/V = 500000/10000 = 50\,\text{A}$

Power loss in cables: $P_{\text{loss}} = I^2R = 50^2 \times 4.0 = 10000\,\text{W} = 10\,\text{kW}$

(b) Efficiency $= P_{\text{useful}}/P_{\text{total}} \times 100 = (500 - 10)/500 \times 100 = 98.0\%$

(c) At $100\,\text{kV}$: $I = 500000/100000 = 5.0\,\text{A}$

New power loss: $P_{\text{loss}} = 5.0^2 \times 4.0 = 100\,\text{W} = 0.10\,\text{kW}$

New efficiency $= (500 - 0.10)/500 \times 100 = 99.98\%$

The power loss is reduced by a factor of $(10/100)^2 = 1/100$ when the voltage is increased by a factor of 10. This demonstrates why high-voltage transmission is essential for efficient power distribution: power loss scales as $I^2R$, and $I = P/V$, so $P_{\text{loss}} = P^2R/V^2$.
