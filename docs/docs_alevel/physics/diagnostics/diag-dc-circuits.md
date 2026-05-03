---
title: DC Circuits -- Diagnostic Tests
description: Diagnostic tests for Kirchhoff's laws, internal resistance, potential dividers, and Thevenin equivalent circuits at maximum A-Level Physics difficulty.
slug: diag-dc-circuits
hide_table_of_contents: true
---

# DC Circuits — Diagnostic Tests

## Unit Tests

### UT-1: Internal Resistance and Maximum Power Transfer

**Question:**

A battery has EMF $\varepsilon = 12.0\,\text{V}$ and internal resistance $r = 2.0\,\Omega$. It is connected to a variable external resistance $R$.

(a) Derive an expression for the power delivered to $R$ and find the value of $R$ that maximises this power.

(b) Calculate the maximum power delivered to $R$ and the efficiency at this operating point.

(c) Calculate the power delivered to $R$ and the efficiency when $R = 10\,\Omega$.

**Solution:**

(a) Current: $I = \varepsilon/(R + r)$

Power to $R$: $P = I^2R = \frac{\varepsilon^2 R}{(R + r)^2}$

To maximise: $\frac{dP}{dR} = \frac{\varepsilon^2(R + r)^2 - \varepsilon^2 R \times 2(R + r)}{(R + r)^4} = 0$

$$\varepsilon^2(R + r)[(R + r) - 2R] = 0$$
$$R + r - 2R = 0 \Rightarrow R = r = 2.0\,\Omega$$

Maximum power transfer occurs when the load resistance equals the internal resistance.

(b) At $R = r = 2.0\,\Omega$:

$$I = 12.0/4.0 = 3.0\,\text{A}$$
$$P_{\max} = I^2R = 9.0 \times 2.0 = 18.0\,\text{W}$$

Efficiency $= P_R/P_{\text{total}} = I^2R/(I^2(R + r)) = R/(R + r) = 2.0/4.0 = 50\%$

Half the power is dissipated in the internal resistance.

(c) At $R = 10\,\Omega$:

$$I = 12.0/12.0 = 1.0\,\text{A}$$
$$P = 1.0 \times 10 = 10.0\,\text{W}$$

Efficiency $= 10.0/12.0 = 83.3\%$

Higher efficiency but lower power than the matched condition. This is the fundamental trade-off in power transfer.

---
### UT-2: Potential Divider with Load

**Question:**

A potential divider consists of two resistors $R_1 = 10\,\text{k}\Omega$ and $R_2 = 20\,\text{k}\Omega$ in series across a $15.0\,\text{V}$ supply with negligible internal resistance. The output is taken across $R_2$.

(a) Calculate the output voltage with no load connected.

(b) A load resistor $R_L = 10\,\text{k}\Omega$ is connected across $R_2$. Calculate the new output voltage.

(c) What value of $R_L$ would reduce the output voltage to $50\%$ of the unloaded value? Comment on your answer.

**Solution:**

(a) Unloaded: $V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2} = 15.0 \times \frac{20}{30} = 10.0\,\text{V}$

(b) With load, $R_2$ and $R_L$ are in parallel:

$$R_{\text{parallel}} = \frac{R_2 R_L}{R_2 + R_L} = \frac{20 \times 10}{30} = 6.667\,\text{k}\Omega$$

$$V_{\text{out}} = 15.0 \times \frac{6.667}{10 + 6.667} = 15.0 \times \frac{6.667}{16.667} = 6.00\,\text{V}$$

The output voltage drops from $10.0\,\text{V}$ to $6.0\,\text{V}$ -- a $40\%$ reduction. This "loading effect" occurs because the load draws current, changing the effective resistance of the divider.

(c) We need $V_{\text{out}} = 5.0\,\text{V}$ (50% of $10.0\,\text{V}$):

$$5.0 = 15.0 \times \frac{R_2 R_L/(R_2 + R_L)}{R_1 + R_2 R_L/(R_2 + R_L)}$$
$$5.0 = 15.0 \times \frac{20 R_L/(20 + R_L)}{10 + 20 R_L/(20 + R_L)}$$

$$\frac{1}{3} = \frac{20 R_L}{10(20 + R_L) + 20 R_L} = \frac{20 R_L}{200 + 10 R_L + 20 R_L} = \frac{20 R_L}{200 + 30 R_L}$$

$$200 + 30 R_L = 60 R_L$$
$$200 = 30 R_L$$
$$R_L = 6.67\,\text{k}\Omega$$

When the load resistance equals the parallel combination resistance, the output drops to half. This demonstrates why potential dividers should have $R_L \gg R_2$ to avoid loading effects.

---
### UT-3: Kirchhoff's Laws with Multiple Sources

**Question:**

Two cells with EMFs $\varepsilon_1 = 10.0\,\text{V}$ (internal resistance $r_1 = 1.0\,\Omega$) and $\varepsilon_2 = 6.0\,\text{V}$ (internal resistance $r_2 = 2.0\,\Omega$) are connected in parallel across a resistor $R = 5.0\,\Omega$. The positive terminals are connected together.

(a) Calculate the current through each cell and through $R$.

(b) Calculate the terminal potential difference across each cell.

(c) Calculate the power delivered by each cell and the power dissipated in $R$. Verify conservation of energy.

**Solution:**

(a) Let $I_1$ flow from $\varepsilon_1$ (out of positive terminal), $I_2$ flow from $\varepsilon_2$, and $I_R$ flow through $R$ (downward). Apply Kirchhoff's current law at the top junction:

$$I_1 + I_2 = I_R$$

Apply Kirchhoff's voltage law to the left loop ($\varepsilon_1$, $r_1$, $R$):

$$\varepsilon_1 - I_1 r_1 - I_R R = 0 \Rightarrow 10.0 - I_1 - 5I_R = 0 \quad (1)$$

Apply Kirchhoff's voltage law to the right loop ($\varepsilon_2$, $r_2$, $R$):

$$\varepsilon_2 - I_2 r_2 - I_R R = 0 \Rightarrow 6.0 - 2I_2 - 5I_R = 0 \quad (2)$$

From (2): $I_2 = (6.0 - 5I_R)/2 = 3.0 - 2.5I_R$

From (1): $I_1 = 10.0 - 5I_R$

Substituting into KCL: $(10.0 - 5I_R) + (3.0 - 2.5I_R) = I_R$

$$13.0 - 7.5I_R = I_R$$
$$13.0 = 8.5I_R$$
$$I_R = 1.529\,\text{A}$$

$$I_1 = 10.0 - 5(1.529) = 10.0 - 7.647 = 2.353\,\text{A}$$
$$I_2 = 3.0 - 2.5(1.529) = 3.0 - 3.824 = -0.824\,\text{A}$$

The negative sign for $I_2$ means $\varepsilon_2$ is being **charged** by $\varepsilon_1$. Current flows into the positive terminal of $\varepsilon_2$.

(b) Terminal p.d. across $\varepsilon_1$: $V_1 = \varepsilon_1 - I_1 r_1 = 10.0 - 2.353 = 7.647\,\text{V}$

Terminal p.d. across $\varepsilon_2$: $V_2 = \varepsilon_2 - I_2 r_2 = 6.0 - (-0.824)(2.0) = 6.0 + 1.647 = 7.647\,\text{V}$

Both terminal p.d.s are equal, as expected since they are connected in parallel.

(c) Power from $\varepsilon_1$: $P_1 = \varepsilon_1 I_1 = 10.0 \times 2.353 = 23.53\,\text{W}$

Power absorbed by $\varepsilon_2$: $P_2 = \varepsilon_2 I_2 = 6.0 \times 0.824 = 4.94\,\text{W}$ (charging)

Power dissipated in $R$: $P_R = I_R^2 R = (1.529)^2 \times 5.0 = 11.69\,\text{W}$

Power dissipated in $r_1$: $I_1^2 r_1 = (2.353)^2 \times 1.0 = 5.54\,\text{W}$

Power dissipated in $r_2$: $I_2^2 r_2 = (0.824)^2 \times 2.0 = 1.36\,\text{W}$

Conservation check: $P_1 = P_R + P_{r1} + P_{r2} + P_2$ (absorbed by $\varepsilon_2$)

$23.53 = 11.69 + 5.54 + 1.36 + 4.94 = 23.53$. Conserved.

## Integration Tests

### IT-1: Charging a Battery from a Solar Panel (with Capacitance)

**Question:**

A solar panel produces an EMF of $18.0\,\text{V}$ and has internal resistance $2.0\,\Omega$. It is used to charge a rechargeable battery of EMF $12.0\,\text{V}$ and internal resistance $1.0\,\Omega$. A capacitor of capacitance $1000\,\mu\text{F}$ is connected in parallel with the battery to smooth the charging current.

(a) Calculate the initial charging current.

(b) Calculate the power delivered by the solar panel and the power absorbed by the battery at the start of charging.

(c) The capacitor is initially uncharged. Calculate the time constant for the charging of the capacitor and the energy stored in the capacitor when fully charged.

**Solution:**

(a) Initial current (capacitor uncharged, so it acts as a short circuit initially -- but in parallel with the battery, the capacitor voltage is clamped to the battery terminal voltage):

Actually, the capacitor in parallel with the battery means the capacitor charges to the battery terminal voltage. The steady-state current is determined by the series circuit of solar panel, internal resistances, and battery.

Initial current (capacitor acts as short circuit): effectively, the capacitor provides an alternative path. In the initial instant, the capacitor has zero charge and zero voltage, so it draws maximum current. However, since the battery is in parallel, the circuit is more complex.

In practice, the capacitor charges to the terminal voltage of the battery. The charging circuit current (through the solar panel):

$$I = \frac{\varepsilon_{\text{panel}} - V_{\text{battery terminal}}}{r_{\text{panel}}}$$

In steady state (capacitor fully charged):

$$V_{\text{terminal}} = \varepsilon_{\text{battery}} + I \times r_{\text{battery}}$$

$$I = \frac{18.0 - (12.0 + I)}{2.0}$$
$$2I = 6.0 - I$$
$$3I = 6.0 \Rightarrow I = 2.0\,\text{A}$$

This is the steady-state charging current. Initially, the capacitor draws additional current, but the steady-state battery charging current is $2.0\,\text{A}$.

(b) Power from panel: $P_{\text{panel}} = \varepsilon_{\text{panel}} \times I = 18.0 \times 2.0 = 36.0\,\text{W}$

Power to battery: $P_{\text{battery}} = \varepsilon_{\text{battery}} \times I = 12.0 \times 2.0 = 24.0\,\text{W}$

Power dissipated in internal resistances: $P_{\text{loss}} = I^2(r_1 + r_2) = 4.0 \times 3.0 = 12.0\,\text{W}$

Check: $36.0 = 24.0 + 12.0$. Consistent.

(c) The capacitor charges through the internal resistance of the battery: $\tau = R_{\text{battery}} \times C = 1.0 \times 1000 \times 10^{-6} = 1.0 \times 10^{-3}\,\text{s} = 1.0\,\text{ms}$

The capacitor charges to the battery terminal voltage: $V_C = 12.0 + 2.0 \times 1.0 = 14.0\,\text{V}$

Energy stored: $E = \frac{1}{2}CV^2 = 0.5 \times 10^{-3} \times 196 = 0.098\,\text{J}$

---
### IT-2: Thevenin Equivalent Circuit Analysis (with Current and Resistance)

**Question:**

A circuit consists of a $24\,\text{V}$ supply (internal resistance $1\,\Omega$) in series with $R_1 = 5\,\Omega$, which is then connected to a parallel combination of $R_2 = 10\,\Omega$ and $R_3 = 15\,\Omega$.

(a) Find the Thevenin equivalent circuit across $R_3$.

(b) Using the Thevenin equivalent, calculate the current through $R_3$.

(c) $R_3$ is replaced by a variable resistor. Calculate the range of values of $R_3$ for which the current through it exceeds $0.8\,\text{A}$.

**Solution:**

(a) Remove $R_3$ and find the open-circuit voltage across the terminals:

The current through $R_1$ and $R_2$ in series (with $R_3$ removed):

$$I = \frac{24}{1 + 5 + 10} = \frac{24}{16} = 1.5\,\text{A}$$

Open-circuit voltage: $V_{\text{OC}} = 24 - 1.5(1 + 5) = 24 - 9 = 15\,\text{V}$

Or: $V_{\text{OC}} = I \times R_2 = 1.5 \times 10 = 15\,\text{V}$. Consistent.

Internal resistance (replace the $24\,\text{V}$ source with a short circuit):

$$R_{\text{Th}} = 1 + 5 \parallel 10 = 1 + \frac{5 \times 10}{5 + 10} = 1 + 3.33 = 4.33\,\Omega$$

Wait, with the supply shorted, $R_1$ is in series with $r$, and $R_2$ is in parallel with that combination? No. With $R_3$ removed and the supply shorted:

$r = 1\,\Omega$ and $R_1 = 5\,\Omega$ are in series $= 6\,\Omega$. This is in parallel with $R_2 = 10\,\Omega$.

$$R_{\text{Th}} = \frac{6 \times 10}{6 + 10} = \frac{60}{16} = 3.75\,\Omega$$

Thevenin equivalent: $V_{\text{Th}} = 15\,\text{V}$, $R_{\text{Th}} = 3.75\,\Omega$.

(b) Current through $R_3$:

$$I_3 = \frac{V_{\text{Th}}}{R_{\text{Th}} + R_3} = \frac{15}{3.75 + 15} = \frac{15}{18.75} = 0.800\,\text{A}$$

(c) We need $I_3 \gt 0.8\,\text{A}$:

$$\frac{15}{3.75 + R_3} \gt 0.8$$
$$15 \gt 0.8(3.75 + R_3)$$
$$18.75 \gt 3.0 + 0.8 R_3$$
$$0.8 R_3 \lt 15.75$$
$$R_3 \lt 19.7\,\Omega$$

For any $R_3 \lt 19.7\,\Omega$, the current exceeds $0.8\,\text{A}$. Since the original $R_3 = 15\,\Omega$ gives exactly $0.8\,\text{A}$, this is the boundary.

---
### IT-3: Non-Ideal Ammeter and Voltmeter Effects (with Quantities and Units)

**Question:**

A circuit contains a resistor $R = 47\,\Omega$ connected to a $9.0\,\text{V}$ supply. A student uses a non-ideal ammeter (resistance $R_A = 0.50\,\Omega$) and a non-ideal voltmeter (resistance $R_V = 5000\,\Omega$) to measure the current through and voltage across $R$.

(a) Calculate the current and voltage across $R$ if both meters are ideal.

(b) Calculate the measured current when the ammeter is placed in series with $R$.

(c) Calculate the measured voltage when the voltmeter is placed in parallel with $R$. By what percentage does each measurement differ from the ideal value?

**Solution:**

(a) Ideal: $I = V/R = 9.0/47 = 0.1915\,\text{A}$; $V_R = 9.0\,\text{V}$ (across $R$ alone).

(b) With ammeter in series: total resistance $= R + R_A = 47.5\,\Omega$

$$I_{\text{measured}} = 9.0/47.5 = 0.1895\,\text{A}$$

Percentage error: $\frac{0.1915 - 0.1895}{0.1915} \times 100 = 1.04\%$

The ammeter under-reads by about $1\%$ because it adds its own resistance to the circuit.

(c) With voltmeter in parallel: $R \parallel R_V = \frac{47 \times 5000}{47 + 5000} = \frac{235000}{5047} = 46.56\,\Omega$

The voltmeter draws current, reducing the voltage across $R$. If the supply has negligible internal resistance:

$$V_{\text{across } R \parallel R_V} = 9.0\,\text{V}$$ (since no other resistance in circuit)

Wait, with just the supply and $R \parallel R_V$:

$$I_{\text{total}} = 9.0/46.56 = 0.1933\,\text{A}$$

Voltage across the parallel combination $= 9.0\,\text{V}$.

But the voltmeter reads $9.0\,\text{V}$, which is the terminal voltage. The voltage across $R$ alone (without the voltmeter loading it) would be $9.0\,\text{V}$ too (since it's the only component). So in this case, the loading effect doesn't change the reading because there's no other resistance in the circuit.

However, if the supply has internal resistance $r = 5\,\Omega$:

Without voltmeter: $V_R = 9.0 \times 47/(5 + 47) = 9.0 \times 47/52 = 8.134\,\text{V}$

With voltmeter: total load $= 46.56\,\Omega$

$$V_{\text{measured}} = 9.0 \times 46.56/(5 + 46.56) = 9.0 \times 46.56/51.56 = 8.127\,\text{V}$$

Percentage error: $(8.134 - 8.127)/8.134 \times 100 = 0.086\%$

The voltmeter has negligible effect because $R_V \gg R$.
