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

$$I = \frac{V}{R} = \frac{12}{4} = 3 \text{ A}$$

**Worked Example.** A lamp has a current of 0.5 A and a resistance of 60 $\Omega$. Find the
potential difference across it.

$$V = IR = 0.5 \times 60 = 30 \text{ V}$$

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
  $V_{\text{total}} = V_1 + V_2 + V_3 + \ldots$
- Total resistance is the sum of individual resistances:
  $R_{\text{total}} = R_1 + R_2 + R_3 + \ldots$
- If one component fails, the whole circuit breaks

### 2.2 Parallel Circuits

Components are connected in separate branches.

**Rules:**

- Total current is the sum of the currents in each branch:
  $I_{\text{total}} = I_1 + I_2 + I_3 + \ldots$
- Potential difference is the same across each branch: $V_1 = V_2 = V_3 = \ldots$
- $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots$
- If one branch fails, other branches continue to work

**Worked Example.** Two resistors of 6 $\Omega$ and 12 $\Omega$ are connected in parallel. Find the
total resistance.

$$\frac{1}{R_{\text{total}}} = \frac{1}{6} + \frac{1}{12} = \frac{2 + 1}{12} = \frac{3}{12} = \frac{1}{4}$$
$$R_{\text{total}} = 4 \text{ } \Omega$$

### 2.3 Why Parallel Resistance Is Always Less Than the Smallest Individual Resistance

Adding a parallel branch provides an additional path for current to flow. More paths means less
total opposition to current, so the total resistance decreases. In the extreme case, adding a
parallel branch with zero resistance (a short circuit) makes the total resistance zero, and all
current flows through the short.

### 2.4 Combined Series and Parallel

**Worked Example.** A 3 $\Omega$ resistor is in series with a parallel combination of 6 $\Omega$ and
12 $\Omega$ resistors. Find the total resistance.

Parallel combination: $R_p = 4 \text{ } \Omega$ (from above).

Total: $R_{\text{total}} = 3 + 4 = 7 \text{ } \Omega$.

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

$$P = IV \implies I = \frac{P}{V} = \frac{2400}{240} = 10 \text{ A}$$

**Worked Example.** A 12 $\Omega$ resistor has a current of 2 A flowing through it. Calculate the
power dissipated.

$$P = I^2R = 4 \times 12 = 48 \text{ W}$$

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

$$\text{Energy} = 2 \times 3 = 6 \text{ kWh}$$ $$\text{Cost} = 6 \times 15 = 90 \text{ pence}$$

### 4.5 Why the National Grid Uses High Voltages

Power dissipated in transmission cables is $P = I^2R$. For a given cable resistance $R$, the power
loss is proportional to $I^2$. Since $P_{\text{transmitted}} = VI$, increasing $V$ allows $I$ to
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

$$V_{\text{rms}} = \frac{V_{\text{peak}}}{\sqrt{2}}$$

For the UK mains: $V_{\text{peak}} = 230 \times \sqrt{2} \approx 325$ V. When we say the mains
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

$$I = \frac{\varepsilon}{R + r} = \frac{9}{4 + 0.5} = \frac{9}{4.5} = 2 \text{ A}$$

$$V = \varepsilon - Ir = 9 - 2 \times 0.5 = 8 \text{ V}$$

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

7. A thermistor has a resistance of 200 $\Omega$ at $20^{\circ}\text{C}$ and 50 $\Omega$ at
   $80^{\circ}\text{C}$. It is connected in series with a 100 $\Omega$ fixed resistor to a 12 V
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
