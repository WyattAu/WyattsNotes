---
title: Electricity
date: 2026-04-14
tags:
  - Physics
  - GCSE
categories:
  - Physics
slug: electricity
---

## Electricity

:::info
Board Coverage AQA Paper 1 & 2 | Edexcel Paper 1 & 2 | OCR A Gateway P4 | WJEC P4
:::

## 1. Electrical Circuits

### 1.1 Circuit Symbols

| Symbol                                 | Component            |
| -------------------------------------- | -------------------- |
| Long thin line, short thick line       | Cell                 |
| Two pairs of lines                     | Battery              |
| Single horizontal line                 | Wire                 |
| Vertical line across wire              | Switch (open/closed) |
| Zigzag                                 | Resistor             |
| Rectangle                              | Variable resistor    |
| Circle with X                          | Lamp                 |
| Circle with A                          | Ammeter              |
| Circle with V                          | Voltmeter            |
| Two parallel lines (different lengths) | Capacitor            |
| Circle with M                          | Motor                |
| Three horizontal lines (decreasing)    | Thermistor           |
| Circle with arrow (diode)              | Diode                |
| Circle with arrow and bar              | LED                  |

### 1.2 Current, Potential Difference, and Resistance

**Current ($I$)** is the rate of flow of charge. It is measured in amperes (amps, A).

$$I = \frac{Q}{t}$$

where $Q$ is charge in coulombs (C) and $t$ is time in seconds (s).

**Potential difference ($V$)** is the energy transferred per unit charge. It is measured in volts
(V).

$$V = \frac{W}{Q}$$

where $W$ is energy transferred in joules (J).

**Resistance ($R$)** is a measure of how much a component opposes the flow of current. It is
measured in ohms ($\Omega$).

### 1.3 What Current Actually Is

In a metal wire, current is the flow of free (delocalised) electrons. The number of electrons
passing a point per second is enormous: even a current of 1 A corresponds to about
$6.25 \times
10^{18}$ electrons per second. The drift velocity of these electrons is surprisingly
slow -- typically about 0.1 mm/s in a copper wire carrying 1 A. The signal (the electric field that
drives the electrons) propagates at nearly the speed of light, which is why a light turns on
essentially instantly when you flip the switch, even though the individual electrons move slowly.

### 1.4 Ohm's Law

**Ohm's law:** For a conductor at constant temperature, the current is directly proportional to the
potential difference.

$$V = IR$$

**Worked Example.** A 12 V battery is connected to a resistor of 4 $\Omega$. Calculate the current.

$$I = \frac{V}{R} = \frac{12}{4} = 3 \mathrm{ A}$$

**Worked Example.** A lamp has a current of 0.5 A and a resistance of 60 $\Omega$. Find the
potential difference across it.

$$V = IR = 0.5 \times 60 = 30 \mathrm{ V}$$

### 1.5 Why Ohm's Law Is Not a Universal Law

Ohm's law applies only to ohmic conductors (typically metals at constant temperature). Many
components do not obey Ohm's law: a filament lamp has increasing resistance with current (because
the filament heats up), a diode only conducts in one direction, and a thermistor changes resistance
with temperature. The term "law" is historical; it is better thought of as a property of certain
materials under certain conditions.

## 2. Series and Parallel Circuits

### 2.1 Series Circuits

Components are connected one after another in a single loop.

**Rules:**

- Current is the same through all components: $I_1 = I_2 = I_3 = \ldots$
- Total potential difference is the sum of the p.d. across each component:
  $V_{\mathrm{total}} = V_1 + V_2 + V_3 + \ldots$
- Total resistance is the sum of individual resistances:
  $R_{\mathrm{total}} = R_1 + R_2 + R_3 + \ldots$
- If one component fails, the whole circuit breaks

### 2.2 Parallel Circuits

Components are connected in separate branches.

**Rules:**

- Total current is the sum of the currents in each branch:
  $I_{\mathrm{total}} = I_1 + I_2 + I_3 + \ldots$
- Potential difference is the same across each branch: $V_1 = V_2 = V_3 = \ldots$
- $\frac{1}{R_{\mathrm{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots$
- If one branch fails, other branches continue to work

**Worked Example.** Two resistors of 6 $\Omega$ and 12 $\Omega$ are connected in parallel. Find the
total resistance.

$$\frac{1}{R_{\mathrm{total}}} = \frac{1}{6} + \frac{1}{12} = \frac{2 + 1}{12} = \frac{3}{12} = \frac{1}{4}$$
$$R_{\mathrm{total}} = 4 \mathrm{ } \Omega$$

### 2.3 Why Parallel Resistance Is Always Less Than the Smallest Individual Resistance

Adding a parallel branch provides an additional path for current to flow. More paths means less
total opposition to current, so the total resistance decreases. In the extreme case, adding a
parallel branch with zero resistance (a short circuit) makes the total resistance zero, and all
current flows through the short.

### 2.4 Combined Series and Parallel

**Worked Example.** A 3 $\Omega$ resistor is in series with a parallel combination of 6 $\Omega$ and
12 $\Omega$ resistors. Find the total resistance.

Parallel combination: $R_p = 4 \mathrm{ } \Omega$ (from above).

Total: $R_{\mathrm{total}} = 3 + 4 = 7 \mathrm{ } \Omega$.

### 2.5 Why Adding Resistors in Series Increases Total Resistance

Each additional series resistor adds more opposition to the flow of current. The electrons must pass
through every resistor in turn, so the total resistance is the sum of all individual resistances.
This is analogous to adding length to a pipe: a longer pipe offers more resistance to fluid flow.

## 3. Circuit Components

### 3.1 I-V Characteristics

**Ohmic conductor (e.g. a wire at constant temperature):** The I-V graph is a straight line through
the origin. Current is directly proportional to p.d.

**Filament lamp:** The I-V graph is a curve. As current increases, the filament heats up, increasing
resistance. This is a non-ohmic component.

**Diode:** Current flows in one direction only. In the forward direction, current is zero until the
threshold p.d. (about 0.6 V for a silicon diode) is reached.

### 3.2 Why the Filament Lamp Curve Bends

As current flows through the filament, the power dissipated ($P = I^2R$) heats the filament. The
resistance of a metal increases with temperature (because the ions vibrate more vigorously and
scatter the conduction electrons more frequently). So as the current increases, the temperature
rises, the resistance rises, and the graph of $I$ against $V$ curves away from the straight line. At
higher voltages, the same increase in voltage produces a smaller increase in current than at lower
voltages.

### 3.3 Thermistors and LDRs

**Thermistor (NTC):** Resistance decreases as temperature increases.

$$R \propto \frac{1}{T}$$

**Applications:** Thermostats, temperature sensors, engine temperature monitors.

**Light Dependent Resistor (LDR):** Resistance decreases as light intensity increases.

**Applications:** Automatic night lights, burglar alarms, light meters.

### 3.4 Why LDRs and Thermistors Are Useful

These components convert a non-electrical quantity (light intensity, temperature) into an electrical
quantity (resistance). This allows a circuit to respond to changes in the environment. A potential
divider containing an LDR, for example, produces an output voltage that varies with light level,
which can be used to switch a light on automatically at dusk.

### 3.5 Required Practical: I-V Characteristics

**Method:**

1. Set up the circuit with the component, ammeter (in series), and voltmeter (in parallel).
2. Use a variable resistor to change the p.d.
3. Record pairs of p.d. and current values.
4. Plot a graph of current (y-axis) against p.d. (x-axis).
5. Repeat for different components.

## 4. Electrical Energy and Power

### 4.1 Energy Transferred

$$W = VIt = QV = I^2Rt = \frac{V^2}{R}t$$

### 4.2 Power

$$P = IV = I^2R = \frac{V^2}{R}$$

**Worked Example.** A 240 V kettle has a power rating of 2.4 kW. Calculate the current it draws.

$$P = IV \implies I = \frac{P}{V} = \frac{2400}{240} = 10 \mathrm{ A}$$

**Worked Example.** A 12 $\Omega$ resistor has a current of 2 A flowing through it. Calculate the
power dissipated.

$$P = I^2R = 4 \times 12 = 48 \mathrm{ W}$$

### 4.3 Why $P = I^2R$ and $P = V^2/R$ Give the Same Answer

Starting from $P = IV$ and substituting $V = IR$ gives $P = I(IR) = I^2R$. Substituting $I = V/R$
gives $P = (V/R)V = V^2/R$. These are not different formulas; they are the same formula expressed in
terms of different pairs of variables. Use $P = I^2R$ when you know the current and resistance; use
$P = V^2/R$ when you know the voltage and resistance; use $P = IV$ when you know the current and
voltage.

### 4.4 Domestic Electricity

In the UK, mains electricity is supplied at approximately 230 V (AC, 50 Hz).

**The national grid** is a network of cables and transformers that distributes electricity from
power stations to consumers.

- **Step-up transformers** increase the voltage at power stations (reducing current, which reduces
  energy losses in cables)
- **Step-down transformers** decrease the voltage for safe domestic use

**Power rating:** Every electrical appliance has a power rating (in watts or kilowatts) that tells
you the rate at which it transfers energy.

**Worked Example.** A 2 kW heater is used for 3 hours. Calculate the energy transferred and the cost
at 15 p per kWh.

$$\mathrm{Energy} = 2 \times 3 = 6 \mathrm{ kWh}$$ $$\mathrm{Cost} = 6 \times 15 = 90 \mathrm{ pence}$$

### 4.5 Why the National Grid Uses High Voltages

Power dissipated in transmission cables is $P = I^2R$. For a given cable resistance $R$, the power
loss is proportional to $I^2$. Since $P_{\mathrm{transmitted}} = VI$, increasing $V$ allows $I$ to
decrease for the same transmitted power. If the voltage is doubled, the current is halved, and the
power loss is reduced to one-quarter. This is the entire reason for the national grid's
step-up/step-down transformer system.

**Worked Example.** A power station transmits 500 kW through cables of resistance 2 $\Omega$.

At 10,000 V: $I = 500000/10000 = 50$ A. Power loss = $50^2 \times 2 = 5000$ W.

At 250,000 V: $I = 500000/250000 = 2$ A. Power loss = $2^2 \times 2 = 8$ W.

The higher voltage reduces losses by a factor of 625.

## 5. Mains Electricity and Safety

### 5.1 AC and DC

**Direct current (DC):** Current flows in one direction only. Supplied by batteries and cells.

**Alternating current (AC):** Current changes direction periodically. The UK mains supply is AC with
a frequency of 50 Hz and a peak voltage of about 325 V (giving an RMS voltage of approximately 230
V).

### 5.2 RMS Voltage and Peak Voltage

The root-mean-square (RMS) voltage of an AC supply is the DC voltage that would deliver the same
average power to a resistor.

$$V_{\mathrm{rms}} = \frac{V_{\mathrm{peak}}}{\sqrt{2}}$$

For the UK mains: $V_{\mathrm{peak}} = 230 \times \sqrt{2} \approx 325$ V. When we say the mains
voltage is 230 V, we mean the RMS voltage. The peak voltage (the maximum instantaneous voltage) is
325 V. This matters for insulation ratings: insulation must withstand the peak voltage, not the RMS
voltage.

### 5.3 Cables and Plugs

A standard UK three-pin plug has:

- **Live wire (brown):** Carries the alternating potential difference from the supply
- **Neutral wire (blue):** Completes the circuit at 0 V
- **Earth wire (green and yellow):** Safety wire that carries current to earth if a fault occurs

### 5.4 Why the Earth Wire Is a Safety Feature

If a metal-cased appliance develops a fault (for example, a live wire touches the metal casing), the
earth wire provides a low-resistance path to earth. A large current flows, which blows the fuse or
trips the circuit breaker, disconnecting the appliance before anyone touches the live casing.
Without the earth wire, the casing would remain live, and touching it could be fatal.

### 5.5 Fuses and Circuit Breakers

**Fuse:** A thin wire that melts and breaks the circuit if the current exceeds a certain value.
Always choose a fuse with a rating slightly higher than the normal operating current.

**Circuit breaker:** An electromagnetic switch that trips when the current is too high. Can be
reset, unlike a fuse.

**Residual Current Device (RCD):** Compares the current in the live and neutral wires. If they
differ (current is leaking to earth, perhaps through a person), the RCD trips in milliseconds, far
faster than a fuse. Required in modern installations for circuits supplying sockets that may be used
outdoors.

### 5.6 Electrical Hazards

| Hazard         | Cause                               | Prevention                                      |
| -------------- | ----------------------------------- | ----------------------------------------------- |
| Electric shock | Contact with live wire              | Insulation, earthing, double insulation         |
| Fire           | Overheating due to too much current | Fuses, circuit breakers, correct wire thickness |
| Electrocution  | Wet conditions + electricity        | Keep appliances away from water                 |

## 6. Static Electricity

### 6.1 Electric Charge

When certain materials are rubbed together, electrons are transferred from one material to the
other:

- The material that **gains** electrons becomes **negatively charged**
- The material that **loses** electrons becomes **positively charged**

Only electrons move; protons remain fixed in the nucleus.

### 6.2 Electric Fields

A **charged object** creates an **electric field** around it. This field exerts a force on other
charged objects:

- Like charges repel
- Unlike charges attract

**Electric field lines:**

- Point away from positive charges
- Point towards negative charges
- Never cross
- Closer lines = stronger field

### 6.3 Sparks and Lightning

When the electric field between two charged objects is strong enough, electrons jump across the gap,
creating a **spark**. Lightning is a large-scale example of this phenomenon.

**Worked Example.** Explain how a photocopier uses static electricity.

The drum inside the photocopier is given a charge. Light is shone onto the document, and the
reflected light discharges specific areas of the drum. Toner (charged powder) sticks only to the
discharged areas. The toner is then transferred to paper and heated to fix it in place.

### 6.4 Electrostatic Precipitators

Industrial electrostatic precipitators remove particulate matter from exhaust gases. The gas passes
through a grid of wires maintained at a high voltage. The wires ionise the air, charging the dust
particles. The charged particles are then attracted to oppositely charged plates, where they collect
and can be removed. This is how power stations reduce particulate pollution.

## 7. Internal Resistance (Higher Tier)

### 7.1 Concept

A real battery has **internal resistance** $r$, which causes energy to be dissipated inside the
battery itself when current flows. The terminal p.d. is less than the EMF:

$$V = \varepsilon - Ir$$

where $\varepsilon$ is the EMF (the total energy per unit charge supplied by the battery).

### 7.2 Why Internal Resistance Matters

As the current drawn from a battery increases, the voltage lost across the internal resistance
($Ir$) increases, and the terminal voltage decreases. A car battery has very low internal resistance
(about 0.01 $\Omega$) so it can deliver the large current needed to start the engine without the
voltage dropping too much. A school power supply has higher internal resistance to limit the maximum
current and protect the components.

**Worked Example.** A battery of EMF 9 V and internal resistance 0.5 $\Omega$ is connected to a 4
$\Omega$ resistor. Find the current and terminal voltage.

$$I = \frac{\varepsilon}{R + r} = \frac{9}{4 + 0.5} = \frac{9}{4.5} = 2 \mathrm{ A}$$

$$V = \varepsilon - Ir = 9 - 2 \times 0.5 = 8 \mathrm{ V}$$

## Common Pitfalls

- **Confusing series and parallel circuit rules.** Current adds in parallel; resistance adds in
  series.
- **Placing ammeters in parallel or voltmeters in series.** Ammeters must be in series (low
  resistance); voltmeters must be in parallel (high resistance).
- **Forgetting that $P = I^2R$ and $P = V^2/R$ only apply to resistive components.**
- **Using the wrong fuse rating.** The fuse should be slightly above the normal operating current,
  not much higher.
- **Confusing the live and neutral wires.** The live wire is at the supply voltage; the neutral wire
  is at approximately 0 V.
- **Forgetting to convert units** (kW to W, hours to seconds) in energy calculations.
- **Assuming the total resistance in parallel is the sum of individual resistances.** It is the
  reciprocal of the sum of reciprocals.
- **Confusing EMF and terminal p.d.** EMF is the total energy per unit charge supplied; terminal
  p.d. is what is available to the external circuit (EMF minus internal losses).
- **Measuring current with a voltmeter or voltage with an ammeter.** Ammeters measure current and
  are placed in series; voltmeters measure potential difference and are placed in parallel.

## Practice Questions

1. A circuit has a 9 V battery connected to two resistors of 3 $\Omega$ and 6 $\Omega$ in series.
   Calculate the total resistance, the current, and the p.d. across each resistor.

2. Three resistors of 4 $\Omega$, 6 $\Omega$, and 12 $\Omega$ are connected in parallel to a 12 V
   supply. Calculate the current through each resistor and the total current.

3. A 60 W bulb is connected to the 230 V mains. Calculate the current it draws and suggest an
   appropriate fuse rating.

4. Explain why a filament lamp is a non-ohmic conductor, referring to its I-V characteristic.

5. An electric heater has a power rating of 1.5 kW. Calculate the energy transferred when it is used
   for 45 minutes, giving your answer in kWh and in joules.

6. Describe the function of each of the three wires in a UK mains plug.

7. A thermistor has a resistance of 200 $\Omega$ at $20^{\circ}\mathrm{C}$ and 50 $\Omega$ at
   $80^{\circ}\mathrm{C}$. It is connected in series with a 100 $\Omega$ fixed resistor to a 12 V
   supply. Calculate the current at each temperature.

8. Explain why the national grid uses high voltages for transmission.

9. Calculate the cost of running a 200 W television for 6 hours per day for 30 days, at a rate of 20
   p per kWh.

10. Describe how static electricity is used in a spray paint gun, explaining the role of electric
    fields.

11. A battery of EMF 12 V and internal resistance 1.5 $\Omega$ is connected to an external circuit.
    The terminal p.d. is 10.5 V. Calculate the current and the external resistance.

12. A 3 $\Omega$ resistor and a 6 $\Omega$ resistor are connected in parallel, and this combination
    is connected in series with a 2 $\Omega$ resistor to a 12 V supply. Calculate the current
    through each resistor and the power dissipated in each.

13. Explain the difference between a fuse and a circuit breaker. State one advantage of each.

14. A hairdryer rated at 2000 W is connected to the 230 V mains. Calculate the current it draws.
    Explain why it is important not to use an extension lead rated for 5 A with this appliance.

15. Two identical resistors of resistance $R$ are connected first in series and then in parallel to
    the same battery. Show that the ratio of the power dissipated in the parallel arrangement to the
    power dissipated in the series arrangement is 4:1.

## 8. Worked Example: Combined Series-Parallel Circuit with Power

A $12 \mathrm{ V}$ battery (internal resistance $0.5 \mathrm{ }\Omega$) is connected to a
$3 \mathrm{ }\Omega$ resistor in series with a parallel combination of $6 \mathrm{ }\Omega$ and
$12 \mathrm{ }\Omega$ resistors.

**Step 1:** Find the parallel resistance.

$$\frac{1}{R_p} = \frac{1}{6} + \frac{1}{12} = \frac{3}{12} = \frac{1}{4} \implies R_p = 4 \mathrm{ }\Omega$$

**Step 2:** Total resistance (including internal resistance).

$$R_{\mathrm{total}} = R_{\mathrm{internal}} + R_{\mathrm{series}} + R_p = 0.5 + 3 + 4 = 7.5 \mathrm{ }\Omega$$

**Step 3:** Total current.

$$I = \frac{\varepsilon}{R_{\mathrm{total}}} = \frac{12}{7.5} = 1.6 \mathrm{ A}$$

**Step 4:** Terminal PD.

$$V = \varepsilon - Ir = 12 - 1.6 \times 0.5 = 11.2 \mathrm{ V}$$

**Step 5:** Current through each parallel resistor.

$$I_6 = \frac{V_p}{6} = \frac{11.2 - 1.6 \times 3}{6} = \frac{6.4}{6} = 1.067 \mathrm{ A}$$

$$I_{12} = \frac{V_p}{12} = \frac{6.4}{12} = 0.533 \mathrm{ A}$$

Check: $1.067 + 0.533 = 1.6 \mathrm{ A}$. Correct.

**Step 6:** Power dissipated in each resistor.

$$P_3 = I^2 R_3 = 1.6^2 \times 3 = 7.68 \mathrm{ W}$$

$$P_6 = I_6^2 \times 6 = 1.067^2 \times 6 = 6.83 \mathrm{ W}$$

$$P_{12} = I_{12}^2 \times 12 = 0.533^2 \times 12 = 3.41 \mathrm{ W}$$

## 9. Worked Example: Potential Divider with a Thermistor

A potential divider circuit consists of a $10 \mathrm{ k}\Omega$ fixed resistor and an NTC thermistor
in series with a $12 \mathrm{ V}$ supply. At $20^{\circ}\mathrm{C}$, the thermistor resistance is
$10 \mathrm{ k}\Omega$. At $80^{\circ}\mathrm{C}$, the thermistor resistance is $1 \mathrm{ k}\Omega$. The
output voltage is taken across the thermistor.

**At $20^{\circ}\mathrm{C}$:**

$$V_{\mathrm{out}} = 12 \times \frac{10000}{10000 + 10000} = 12 \times \frac{1}{2} = 6 \mathrm{ V}$$

**At $80^{\circ}\mathrm{C}$:**

$$V_{\mathrm{out}} = 12 \times \frac{1000}{10000 + 1000} = 12 \times \frac{1}{11} = 1.09 \mathrm{ V}$$

As temperature increases, the thermistor resistance decreases, and the output voltage decreases.
This circuit could be used to trigger a heater when the temperature drops (the output voltage rises
when it is cold).

## 10. Why Current Is the Same Everywhere in a Series Circuit

Charge is conserved: charge cannot accumulate at any point in a circuit. If the current were
different at different points in a series circuit, charge would build up at the junction where the
current changes, which is impossible in a steady-state DC circuit. This is analogous to water
flowing through a single pipe: the same amount of water passes through every cross-section per
second. The same argument, applied to junctions in parallel circuits, gives Kirchhoff's first law:
the total current entering a junction equals the total current leaving it.

## 11. Derivation: Power Formulas from Ohm's Law

Starting from $P = IV$:

- Substitute $V = IR$: $P = I \times IR = I^2 R$
- Substitute $I = V/R$: $P = \frac{V}{R} \times V = \frac{V^2}{R}$

These are all equivalent expressions. Use $P = IV$ when you know both current and voltage. Use
$P = I^2R$ when you know current and resistance (useful for finding power dissipated in a specific
resistor in a circuit). Use $P = V^2/R$ when you know voltage and resistance.

## 12. Why the National Grid Uses High Voltages: Quantitative Analysis

Consider transmitting power $P$ through cables of total resistance $R$.

At voltage $V$, the current is $I = P/V$, and the power lost in the cables is:

$$P_{\mathrm{loss}} = I^2 R = \frac{P^2 R}{V^2}$$

This shows that power loss is inversely proportional to $V^2$. If the transmission voltage is
increased by a factor of 10, the power loss decreases by a factor of 100. If a power station
generates $500 \mathrm{ MW}$ and the cable resistance is $5 \mathrm{ }\Omega$:

- At $25 \mathrm{ kV}$: $I = 20000 \mathrm{ A}$,
  $P_{\mathrm{loss}} = 20000^2 \times 5 = 2 \times 10^9 \mathrm{ W}$ = 2000 MW (four times the generated
  power -- absurd)
- At $400 \mathrm{ kV}$: $I = 1250 \mathrm{ A}$,
  $P_{\mathrm{loss}} = 1250^2 \times 5 = 7.8 \times 10^6 \mathrm{ W}$ = 7.8 MW (1.6% of generated power
  -- feasible)

## 13. Worked Example: Cost of Electrical Appliances

A household has the following daily usage:

- Fridge: 150 W for 24 hours
- TV: 120 W for 5 hours
- Washing machine: 2000 W for 1 hour
- Lights (5 bulbs): 60 W each for 6 hours
- Kettle: 2000 W for 0.3 hours

Calculate the daily energy consumption and the monthly cost at 20 p/kWh.

$$E_{\mathrm{fridge}} = 0.15 \times 24 = 3.6 \mathrm{ kWh}$$
$$E_{\mathrm{TV}} = 0.12 \times 5 = 0.6 \mathrm{ kWh}$$
$$E_{\mathrm{washing}} = 2.0 \times 1 = 2.0 \mathrm{ kWh}$$
$$E_{\mathrm{lights}} = 5 \times 0.06 \times 6 = 1.8 \mathrm{ kWh}$$
$$E_{\mathrm{kettle}} = 2.0 \times 0.3 = 0.6 \mathrm{ kWh}$$

$$E_{\mathrm{total}} = 3.6 + 0.6 + 2.0 + 1.8 + 0.6 = 8.6 \mathrm{ kWh per day}$$

Monthly cost (30 days): $8.6 \times 30 \times 20 = 5160 \mathrm{ pence} = \pounds 51.60$

The fridge is the largest consumer despite its low power rating, because it runs continuously. This
illustrates the importance of considering both power and usage time.

## 14. Worked Example: I-V Characteristic of a Filament Lamp

A filament lamp is connected to a variable power supply. The following measurements are recorded:

| PD (V) | Current (A) | Resistance ($\Omega$) |
| ------ | ----------- | --------------------- |
| 2.0    | 0.20        | 10.0                  |
| 4.0    | 0.35        | 11.4                  |
| 6.0    | 0.45        | 13.3                  |
| 8.0    | 0.52        | 15.4                  |
| 10.0   | 0.57        | 17.5                  |
| 12.0   | 0.60        | 20.0                  |

The resistance increases from 10 $\Omega$ at 2 V to 20 $\Omega$ at 12 V. This confirms that the
filament lamp is non-ohmic: the resistance is not constant. The I-V graph curves away from the
straight line because the filament heats up as the current increases.

## 15. Summary Table: Series vs Parallel Circuits

| Property               | Series                                  | Parallel                                      |
| ---------------------- | --------------------------------------- | --------------------------------------------- |
| Current                | Same through all components             | Splits at junctions; adds up                  |
| Voltage                | Splits across components; adds up       | Same across all branches                      |
| Resistance             | $R_{\mathrm{total}} = R_1 + R_2 + \cdots$ | $1/R_{\mathrm{total}} = 1/R_1 + 1/R_2 + \cdots$ |
| If one component fails | Whole circuit breaks                    | Other branches continue working               |
| Adding more resistors  | Increases $R_{\mathrm{total}}$            | Decreases $R_{\mathrm{total}}$                  |
| Example                | Old Christmas tree lights               | Household wiring                              |

## 16. Safety Features Summary

| Feature           | How It Works                      | What It Protects                            |
| ----------------- | --------------------------------- | ------------------------------------------- |
| Fuse              | Thin wire melts at a set current  | Prevents fire from overheating              |
| Circuit breaker   | Electromagnetic switch trips      | Prevents fire; reusable                     |
| Earth wire        | Low-resistance path to ground     | Prevents electric shock from faulty casing  |
| Double insulation | Plastic casing, no earth needed   | Prevents shock from internal faults         |
| RCD               | Compares live and neutral current | Detects current leakage to earth; very fast |
| Insulation        | Non-conductive coating on wires   | Prevents contact with live conductors       |

## 17. Practice Questions (Additional)

16. A circuit contains a $9 \mathrm{ V}$ battery, a $100 \mathrm{ }\Omega$ resistor in series with a
    parallel combination of $200 \mathrm{ }\Omega$ and $300 \mathrm{ }\Omega$ resistors. Calculate the
    current through each resistor and the power dissipated in the $200 \mathrm{ }\Omega$ resistor.

17. A student connects an ammeter in parallel with a resistor. Explain why this is dangerous and
    what will happen.

18. A $6 \mathrm{ V}$ battery with internal resistance $0.3 \mathrm{ }\Omega$ is connected to an
    external circuit. The terminal PD is $5.4 \mathrm{ V}$. Calculate the current and the external
    resistance.

19. Design a potential divider circuit using a $9 \mathrm{ V}$ battery and two resistors that produces
    an output voltage of $3 \mathrm{ V}$. Specify the values of both resistors.

20. Explain the difference between a thermistor and an LDR. Describe a sensing circuit for each and
    explain how the output voltage changes as the sensed quantity changes.

21. A hairdryer rated at $1800 \mathrm{ W}$ is connected to the $230 \mathrm{ V}$ mains. Calculate the
    current it draws. If the mains cable has a resistance of $0.5 \mathrm{ }\Omega$, calculate the
    power lost in the cable and the voltage reaching the hairdryer.

22. Three identical resistors, each of resistance $R$, are connected to a battery. Calculate the
    total resistance when they are connected (a) all in series, (b) all in parallel, and (c) two in
    parallel with the third in series.

23. Explain why the resistance of a filament lamp increases with temperature, while the resistance
    of a thermistor (NTC) decreases with temperature.

24. A mobile phone charger has an output of $5 \mathrm{ V}$ and $2 \mathrm{ A}$. If the phone battery
    has a capacity of $3000 \mathrm{ mAh}$, how long does it take to charge from empty? Calculate the
    energy transferred to the battery during a full charge.

25. A circuit contains a variable resistor, a fixed resistor of $470 \mathrm{ }\Omega$, and an LED in
    series with a $9 \mathrm{ V}$ battery. The LED requires a minimum current of $10 \mathrm{ mA}$ to
    light and has a forward voltage drop of $2 \mathrm{ V}$. Calculate the range of resistance values
    for the variable resistor that keeps the LED lit without exceeding a maximum current of
    $20 \mathrm{ mA}$.

## Extended Worked Examples

### Example 26: Energy and Cost of Household Appliances

A household uses the following appliances daily: a $2 \mathrm{ kW}$ heater for 4 hours, six
$10 \mathrm{ W}$ LED lights for 6 hours, a $200 \mathrm{ W}$ TV for 3 hours, and a $3 \mathrm{ kW}$ kettle
for $0.5 \mathrm{ hours}$. Electricity costs $28 \mathrm{p}$ per kWh. Calculate the daily and monthly
(30-day) cost.

**Step 1: Energy used by each appliance**

- Heater: $E = Pt = 2 \times 4 = 8 \mathrm{ kWh}$
- Lights: $E = 0.01 \times 6 \times 6 = 0.36 \mathrm{ kWh}$
- TV: $E = 0.2 \times 3 = 0.6 \mathrm{ kWh}$
- Kettle: $E = 3 \times 0.5 = 1.5 \mathrm{ kWh}$

**Step 2: Total daily energy**

$$E_{\mathrm{total}} = 8 + 0.36 + 0.6 + 1.5 = 10.46 \mathrm{ kWh}$$

**Step 3: Daily and monthly cost**

$$\mathrm{Daily cost} = 10.46 \times 28 = 292.9 \mathrm{ p} = \pounds 2.93$$

$$\mathrm{Monthly cost} = 292.9 \times 30 = 8787 \mathrm{ p} = \pounds 87.87$$

:::info
The heater accounts for $8/10.46 = 76.5\%$ of the total energy cost. This is typical:
heating appliances dominate household electricity bills. Switching to a more efficient heater or
improving insulation can significantly reduce costs.
:::

### Example 27: Parallel Circuit with Multiple Branches

Three resistors of $100 \Omega$, $200 \Omega$, and $300 \Omega$ are connected in parallel across a
$12 \mathrm{ V}$ battery. Calculate the current through each resistor, the total current, and the
total resistance.

**Step 1: Current through each resistor (Ohm's law)**

$$I_1 = \frac{V}{R_1} = \frac{12}{100} = 0.120 \mathrm{ A} = 120 \mathrm{ mA}$$

$$I_2 = \frac{V}{R_2} = \frac{12}{200} = 0.060 \mathrm{ A} = 60 \mathrm{ mA}$$

$$I_3 = \frac{V}{R_3} = \frac{12}{300} = 0.040 \mathrm{ A} = 40 \mathrm{ mA}$$

**Step 2: Total current**

$$I_{\mathrm{total}} = I_1 + I_2 + I_3 = 120 + 60 + 40 = 220 \mathrm{ mA}$$

**Step 3: Total resistance**

$$R_{\mathrm{total}} = \frac{V}{I_{\mathrm{total}}} = \frac{12}{0.220} = 54.5 \Omega$$

**Check using the reciprocal formula:**

$$\frac{1}{R} = \frac{1}{100} + \frac{1}{200} + \frac{1}{300} = 0.01 + 0.005 + 0.00333 = 0.01833$$

$$R = \frac{1}{0.01833} = 54.5 \Omega$$

Confirmed.

### Example 28: Internal Resistance and Maximum Current

A battery has EMF $9 \mathrm{ V}$ and internal resistance $1.5 \Omega$. What is the maximum current
that can be drawn, and what is the terminal PD at this current?

**Step 1: Maximum current (short circuit)**

$$I_{\max} = \frac{\mathcal{E}}{r} = \frac{9}{1.5} = 6 \mathrm{ A}$$

This occurs when the external resistance is zero (short circuit).

**Step 2: Terminal PD at maximum current**

$$V = \mathcal{E} - Ir = 9 - 6 \times 1.5 = 9 - 9 = 0 \mathrm{ V}$$

All the EMF is "lost" across the internal resistance. The battery delivers maximum current but zero
useful voltage to the external circuit.

**Step 3: Power dissipated in the battery**

$$P_{\mathrm{internal}} = I^2 r = 36 \times 1.5 = 54 \mathrm{ W}$$

This energy is converted to heat inside the battery, which can cause it to overheat or even explode.

:::warning
A short circuit is extremely dangerous. The battery delivers its maximum current, and all
the energy is dissipated as heat inside the battery. Never short-circuit a battery.
:::

## Common Pitfalls Extended

### Pitfall 6: Adding Currents in Series Circuits

In a series circuit, the current is the _same_ through every component. Do not add currents in
series. Only add currents when they meet at a junction (Kirchhoff's first law).

### Pitfall 7: Forgetting to Subtract the LED/Component Voltage

When calculating the required series resistor for an LED, the resistor voltage is the supply voltage
_minus_ the LED forward voltage: $V_R = V_{\mathrm{supply}} - V_{\mathrm{LED}}$. Using just the supply
voltage gives an incorrectly high resistance and the LED will not light.

### Pitfall 8: Confusing AC and DC in Power Calculations

For DC: $P = IV = I^2R = V^2/R$ using the steady values. For AC: the same formulas apply but using
_RMS_ values. The peak power is twice the average power for a sinusoidal AC supply:
$P_{\mathrm{peak}} = 2P_{\mathrm{avg}}$.

## Additional Practice Problems

26. A $12 \mathrm{ V}$ car battery has internal resistance $0.05 \Omega$. The starter motor draws
    $200 \mathrm{ A}$. Calculate (a) the terminal PD, (b) the power delivered to the starter, and (c)
    the power wasted in the battery.

27. Three identical resistors each of $R$ are connected to a battery. Calculate the total resistance
    for all possible arrangements and rank them from largest to smallest.

28. An electric shower has a power rating of $8.5 \mathrm{ kW}$ and operates at $230 \mathrm{ V}$.
    Calculate the current it draws and explain why it requires a dedicated high-current circuit.

29. A student sets up a circuit with a thermistor and a fixed resistor in series with a
    $6 \mathrm{ V}$ battery. The thermistor has resistance $2000 \Omega$ at $20°\mathrm{C}$ and
    $500 \Omega$ at $60°\mathrm{C}$. Calculate the voltage across the thermistor at each temperature.

30. Explain the difference between conventional current and electron flow. Why do we still use
    conventional current in circuit diagrams?
