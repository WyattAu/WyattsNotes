---
title: Electricity
date: 2026-04-14
tags:
  - Physics
  - ILC
categories:
  - Physics
slug: electricity
---

# Electricity

This topic covers electric charge, current, potential difference, resistance, circuits, and
electromagnetic induction. Electricity is one of the core areas of the Leaving Certificate Physics
syllabus.

## Electric Charge and Current

### Electric Charge (OL/HL)

- Charge is measured in coulombs (C).
- The elementary charge $e = 1.6 \times 10^{-19}\text{ C}$.
- Like charges repel; unlike charges attract.

### Electric Current (OL/HL)

$$
I = \frac{Q}{t}
$$

where $I$ is current in amperes (A), $Q$ is charge in coulombs (C), and $t$ is time in seconds (s).

Current is the rate of flow of charge. Conventional current flows from positive to negative.

**Example (OL):** A charge of 60 C passes through a conductor in 2 minutes. Find the current.

$$
I = \frac{60}{120} = 0.5\text{ A}
$$

### Current in Terms of Electron Flow (HL)

$$
I = nAve
$$

where $n$ is the number density of free electrons, $A$ is the cross-sectional area, $v$ is the drift
velocity, and $e$ is the elementary charge.

**Example (HL):** A copper wire of cross-sectional area $2 \times 10^{-6}\text{ m}^2$ carries a
current of 5 A. If $n = 8.5 \times 10^{28}\text{ m}^{-3}$, find the drift velocity.

$$
v = \frac{I}{nAe} = \frac{5}{8.5 \times 10^{28} \times 2 \times 10^{-6} \times 1.6 \times 10^{-19}} \approx 1.84 \times 10^{-4}\text{ m/s}
$$

### Why Drift Velocity Is So Slow

Even a current of 1 A corresponds to about $6.25 \times 10^{18}$ electrons per second. The drift
velocity in a copper wire is typically less than 0.1 mm/s. The electric signal propagates at nearly
the speed of light, but the individual electrons move extraordinarily slowly. This is analogous to
people in a crowd: one person pushes, and the push propagates through the crowd quickly, but each
individual moves only a small step.

## Potential Difference and EMF

### Potential Difference (OL/HL)

$$
V = \frac{W}{Q}
$$

The potential difference (voltage) between two points is the energy transferred per unit charge.
Unit: volt (V).

### Electromotive Force (EMF) (OL/HL)

EMF is the energy supplied per unit charge by a source:

$$
\text{EMF} = \frac{W}{Q}
$$

### Internal Resistance (HL)

A real cell has internal resistance $r$. The terminal voltage is:

$$
V = \text{EMF} - Ir
$$

### Why Terminal PD Decreases with Current

The internal resistance dissipates energy as heat. As current increases, the internal voltage drop
($Ir$) increases, and the terminal PD decreases. If the battery is short-circuited ($R = 0$), all
the EMF is dropped across the internal resistance, and the terminal PD is zero. The current is
$I = \varepsilon / r$, which can be very large, potentially damaging the battery.

## Resistance and Ohm's Law

### Ohm's Law (OL/HL)

For a conductor at constant temperature:

$$
V = IR
$$

A conductor that obeys Ohm's law has a constant resistance and is called an **ohmic conductor**.

**Example (OL):** A 12 V battery is connected to a resistor of 6 ohms. Find the current.

$$
I = \frac{V}{R} = \frac{12}{6} = 2\text{ A}
$$

### Resistivity (OL/HL)

$$
R = \frac{\rho L}{A}
$$

where $\rho$ is the resistivity (ohm-metre), $L$ is the length, and $A$ is the cross-sectional area.

**Example (OL):** A copper wire of length 100 m and cross-sectional area
$1 \times 10^{-6}\text{ m}^2$ has resistivity $1.7 \times 10^{-8}\text{ ohm m}$. Find its
resistance.

$$
R = \frac{1.7 \times 10^{-8} \times 100}{1 \times 10^{-6}} = 1.7\text{ ohms}
$$

### Why Resistivity Is Temperature-Dependent for Metals

In a metal, the ions vibrate more vigorously at higher temperatures, scattering conduction electrons
more frequently. This increases resistivity. For semiconductors, resistivity _decreases_ with
temperature as more charge carriers are liberated.

## Series and Parallel Circuits (OL/HL)

### Series Circuits

- Current is the same through all components: $I = I_1 = I_2 = \cdots$
- Total voltage equals the sum of individual voltages: $V = V_1 + V_2 + \cdots$
- Total resistance: $R = R_1 + R_2 + \cdots$

### Parallel Circuits

- Voltage is the same across all branches: $V = V_1 = V_2 = \cdots$
- Total current equals the sum of branch currents: $I = I_1 + I_2 + \cdots$
- Total resistance: $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$

**Example (OL):** Find the total resistance of a 4 ohm and a 6 ohm resistor in parallel.

$$
\frac{1}{R} = \frac{1}{4} + \frac{1}{6} = \frac{5}{12} \implies R = 2.4\text{ ohms}
$$

### Why Adding Parallel Branches Reduces Total Resistance

Each additional branch provides an extra path for current. More paths means less total opposition.
The total resistance is always less than the smallest individual resistance.

### Kirchhoff's Laws (HL)

**Junction rule:** The sum of currents entering a junction equals the sum leaving.

**Loop rule:** The sum of EMFs around any closed loop equals the sum of potential drops.

### Applying Kirchhoff's Laws Systematically

1. Label all currents and voltages.
2. Apply the junction rule at each junction.
3. Apply the loop rule to each independent loop.
4. Solve the resulting system of equations.

**Example (HL):** Find the current in each resistor for the following circuit: a 12 V battery in
series with a 2 ohm resistor, then a parallel combination of 6 ohm and 3 ohm resistors.

Parallel resistance:
$\frac{1}{R_p} = \frac{1}{6} + \frac{1}{3} = \frac{1}{2} \implies R_p = 2\text{ ohms}$.

Total resistance: $R = 2 + 2 = 4\text{ ohms}$.

Total current: $I = \frac{12}{4} = 3\text{ A}$.

Voltage across parallel combination: $V_p = 12 - 3 \times 2 = 6\text{ V}$.

Current through 6 ohm: $I_6 = \frac{6}{6} = 1\text{ A}$.

Current through 3 ohm: $I_3 = \frac{6}{3} = 2\text{ A}$.

## Power and Energy (OL/HL)

$$
P = IV = I^2R = \frac{V^2}{R}
$$

$$
E = Pt = VIt
$$

**Example (OL):** A 100 W light bulb is connected to a 230 V supply. Find the current and
resistance.

$$
I = \frac{P}{V} = \frac{100}{230} \approx 0.435\text{ A}
$$

$$
R = \frac{V}{I} = \frac{230}{0.435} \approx 529\text{ ohms}
$$

### Maximum Power Transfer (HL)

The maximum power is delivered to a load when the load resistance equals the internal resistance of
the source: $R = r$.

Proof: $P = \frac{\varepsilon^2 R}{(R+r)^2}$. Setting $\frac{dP}{dR} = 0$ gives $R = r$.

## Capacitors (HL)

### Capacitance

$$
C = \frac{Q}{V}
$$

Unit: farad (F).

### Energy Stored in a Capacitor

$$
E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}
$$

### Charging and Discharging

**Charging:** $Q = Q_0(1 - e^{-t/RC})$

**Discharging:** $Q = Q_0 e^{-t/RC}$

The time constant $\tau = RC$ is the time for the charge to reach $1 - e^{-1} \approx 63.2\%$ of its
final value during charging (or fall to $36.8\%$ during discharging).

**Example (HL):** A $100\text{ \mu F}$ capacitor is charged through a $50\text{ k\Omega}$ resistor.
Find the time constant and the time for the capacitor to reach 95% of full charge.

$$
\tau = RC = 50000 \times 100 \times 10^{-6} = 5\text{ s}
$$

$Q = 0.95 Q_0 \implies 1 - e^{-t/5} = 0.95 \implies e^{-t/5} = 0.05 \implies \frac{t}{5} = -\ln 0.05 \approx 3.0 \implies t \approx 15\text{ s}$.

## AC Circuits (HL)

### Alternating Current

$$
V = V_0 \sin(\omega t)
$$

where $V_0$ is the peak voltage and $\omega = 2\pi f$.

### RMS Values

$$
V_{\text{rms}} = \frac{V_0}{\sqrt{2}}
$$

$$
I_{\text{rms}} = \frac{I_0}{\sqrt{2}}
$$

The mains supply in Ireland is $230\text{ V}_{\text{rms}}$ at $50\text{ Hz}$.

### Power in AC Circuits

$$
P_{\text{avg}} = V_{\text{rms}} I_{\text{rms}} \cos\phi
$$

For purely resistive circuits: $\phi = 0$, so $P = V_{\text{rms}} I_{\text{rms}}$.

### Reactance and Impedance (HL)

**Capacitive reactance:**

$$
X_C = \frac{1}{2\pi f C}
$$

**Inductive reactance:**

$$
X_L = 2\pi f L
$$

**Impedance of a series RLC circuit:**

$$
Z = \sqrt{R^2 + (X_L - X_C)^2}
$$

**Resonance** occurs when $X_L = X_C$:

$$
f_0 = \frac{1}{2\pi\sqrt{LC}}
$$

At resonance, impedance is minimum ($Z = R$) and current is maximum.

**Example (HL):** An RLC circuit has $R = 100\text{ ohms}$, $L = 0.5\text{ H}$,
$C = 20\text{ \mu F}$. Find the resonant frequency and the impedance at resonance.

$$
f_0 = \frac{1}{2\pi\sqrt{0.5 \times 20 \times 10^{-6}}} = \frac{1}{2\pi\sqrt{10^{-5}}} = \frac{1}{2\pi \times 3.162 \times 10^{-3}} \approx 50.3\text{ Hz}
$$

At resonance: $Z = R = 100\text{ ohms}$.

## Electromagnetic Induction (HL)

### Faraday's Law

The induced EMF is equal to the negative rate of change of magnetic flux:

$$
\text{EMF} = -\frac{d\Phi}{dt}
$$

where $\Phi = BA\cos\theta$ is the magnetic flux.

### Lenz's Law

The direction of the induced current opposes the change in flux that produced it.

### Transformers

For an ideal transformer with $N_p$ primary turns and $N_s$ secondary turns:

$$
\frac{V_s}{V_p} = \frac{N_s}{N_p}
$$

$$
V_p I_p = V_s I_s \quad \text{(energy conservation)}
$$

## Common Pitfalls

1. **Internal resistance** -- terminal voltage is less than EMF when current flows.
2. **Series vs parallel** -- current is the same in series; voltage is the same in parallel.
3. **Capacitors** in series add like parallel resistors, and vice versa.
4. **RMS vs peak** -- always use RMS values for power calculations with AC.
5. **Lenz's law** -- the minus sign in Faraday's law represents this opposition.
6. **Kirchhoff's laws** -- apply the junction rule at every junction and the loop rule to every
   loop.

## Practice Questions

### Ordinary Level

1. A 9 V battery is connected to a 3 ohm resistor. Find the current and power.
2. A 4 ohm and a 12 ohm resistor are connected in parallel. Find the total resistance.
3. A kettle rated at 2000 W is used for 5 minutes. Find the energy transferred in joules.
4. Explain Ohm's law and state when it does not apply.

### Higher Level

1. A cell of EMF 6 V and internal resistance 0.5 ohms is connected to an external circuit of 11.5
   ohms. Find the current and terminal voltage.
2. A $47\text{ \mu F}$ capacitor is charged to 12 V and then discharged through a
   $100\text{ k\Omega}$ resistor. Find the time constant and the charge after 10 s.
3. An AC circuit has $V = 230\text{ V}_{\text{rms}}$ at $50\text{ Hz}$ connected to a
   $100\text{ ohm}$ resistor in series with a $0.1\text{ H}$ inductor. Find the impedance and the
   current.
4. A transformer has 500 primary turns and 50 secondary turns. The primary voltage is
   $230\text{ V}_{\text{rms}}$. Find the secondary voltage. If the secondary current is 10 A, find
   the primary current.

5. Two capacitors of $22\text{ \mu F}$ and $47\text{ \mu F}$ are connected in series across a
   $12\text{ V}$ supply. Find the total capacitance and the charge on each capacitor.

6. An AC circuit has $R = 200\text{ ohms}$, $L = 0.2\text{ H}$, $C = 50\text{ \mu F}$ at
   $f = 100\text{ Hz}$. Calculate $X_L$, $X_C$, $Z$, the phase angle, and the power dissipated.

7. A battery of EMF $12\text{ V}$ and internal resistance $1.0\text{ }\Omega$ is connected to an
   external circuit of resistance $5\text{ }\Omega$. Calculate the power dissipated in the external
   circuit and the power dissipated in the internal resistance.

8. A step-up transformer converts $230\text{ V}$ to $11,500\text{ V}$ with 98% efficiency. Find the
   turns ratio and the primary current when the secondary current is $2\text{ A}$.

## 9. Worked Example: Complex RC Circuit Analysis (HL)

A $100\mu\text{F}$ capacitor is charged through a $33\text{ k}\Omega$ resistor from a $9\text{ V}$
supply.

**(a) Time constant:** $\tau = RC = 33000 \times 100 \times 10^{-6} = 3.3\text{ s}$

**(b) Voltage after $1\text{ s}$:**
$V = 9(1 - e^{-1/3.3}) = 9(1 - 0.741) = 9 \times 0.259 = 2.33\text{ V}$

**(c) Current after $1\text{ s}$:**
$I = I_0 e^{-t/\tau} = \frac{9}{33000} \times e^{-1/3.3} = 2.727 \times 10^{-4} \times 0.741 = 2.02 \times 10^{-4}\text{ A} = 0.202\text{ mA}$

**(d) Time to reach $95\text{ V}$ across the capacitor:** Already $9\text{ V}$, so $95\text{ V}$ is
impossible. Assuming $8.55\text{ V}$ (95% of $9\text{ V}$):

$$0.95 = 1 - e^{-t/3.3} \implies e^{-t/3.3} = 0.05 \implies t = -3.3 \times\ln(0.05) = -3.3 \times (-2.996) = 9.89\text{ s}$$

## 10. Worked Example: RLC Circuit Analysis (HL)

An RLC series circuit has $R = 200\text{ }\Omega$, $L = 0.5\text{ H}$, $C = 20\text{ }\mu\text{F}$
at $f = 100\text{ Hz}$.

**Inductive reactance:** $X_L = 2\pi fL = 2\pi \times 100 \times 0.5 = 314.2\text{ }\Omega$

**Capacitive reactance:**
$X_C = \frac{1}{2\pi fC} = \frac{1}{2\pi \times 100 \times 20 \times 10^{-6}} = \frac{1}{0.01257} = 79.6\text{ }\Omega$

**Impedance:**
$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{200^2 + (314.2 - 79.6)^2} = \sqrt{40000 + 55030} = \sqrt{95030} = 308.3\text{ }\Omega$

**Phase angle:**
$\phi = \arctan\left(\frac{X_L - X_C}{R}\right) = \arctan\left(\frac{234.6}{200}\right) = \arctan(1.173) = 49.5^{\circ}$

The current lags the voltage by $49.5^{\circ}$.

**Current:** $I = \frac{V}{Z} = \frac{230}{308.3} = 0.746\text{ A}$

**Power dissipated:** $P = I^2 R = 0.746^2 \times 200 = 111.3\text{ W}$

## 11. Worked Example: Electromagnetic Induction (HL)

A coil of 200 turns and area $0.04\text{ m}^2$ is in a magnetic field of flux density
$0.5\text{ T}$. The field is reduced to zero uniformly in $0.05\text{ s}$.

$$\Delta\Phi = BA = 0.5 \times 0.04 = 0.02\text{ Wb}$$

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 200 \times \frac{0.02}{0.05} = 200 \times 0.4 = 80\text{ V}$$

By Lenz's law, the induced EMF opposes the change in flux, so it acts to try to maintain the
original field.

## 12. Worked Example: Transformer Efficiency (HL)

A step-up transformer has 500 primary turns and 5000 secondary turns. The primary voltage is
$230\text{ V}_{\text{rms}}$ and the secondary current is $5\text{ A}$ at $95\text{ }\Omega$ load.

**Secondary voltage:** $V_s = 230 \times \frac{5000}{500} = 2300\text{ V}$

**Ideal secondary current:** $I_s = \frac{V_p}{V_s} \times I_p$ (for ideal). Since efficiency is
$95\text{ }\%$:

$$I_s \times V_s = 0.95 \times I_p \times V_p$$

$$I_p = \frac{I_s \times V_s}{0.95 \times V_p} = \frac{5 \times 2300}{0.95 \times 230} = \frac{11500}{218.5} = 52.6\text{ A}$$

**Power input:** $P_p = V_p I_p = 230 \times 52.6 = 12098\text{ W} \approx 12.1\text{ kW}$

**Power output:** $P_s = V_s I_s = 2300 \times 5 = 11500\text{ W} = 11.5\text{ kW}$

**Efficiency check:** $\frac{11500}{12098} = 0.950 = 95\text{ }\%$. Correct.

## 13. Capacitors in Series and Parallel: Extended Analysis (HL)

### Worked Example

Three capacitors $C_1 = 22\mu\text{F}$, $C_2 = 47\mu\text{F}$, and $C_3 = 10\mu\text{F}$ are
connected in series across a $12\text{ V}$ supply.

**Total capacitance:**

$$\frac{1}{C_{\text{total}}} = \frac{1}{22} + \frac{1}{47} + \frac{1}{10} = 0.0455 + 0.0213 + 0.1000 = 0.1668$$

$$C_{\text{total}} = \frac{1}{0.1668} = 5.996\mu\text{F} \approx 6.0\mu\text{F}$$

**Charge (same on each):**
$Q = C_{\text{total}}V = 5.996 \times 10^{-6} \times 12 = 7.195 \times 10^{-5}\text{ C}$

**Voltage across each:**

$V_1 = \frac{Q}{C_1} = \frac{71.95}{22} = 3.27\text{ V}$

$V_2 = \frac{Q}{C_2} = \frac{71.95}{47} = 1.53\text{ V}$

$V_3 = \frac{Q}{C_3} = \frac{71.95}{10} = 7.20\text{ V}$

Check: $3.27 + 1.53 + 7.20 = 12.0\text{ V}$. Correct.

**Energy stored:**
$E = \frac{1}{2}C_{\text{total}}V^2 = \frac{1}{2} \times 5.996 \times 10^{-6} \times 144 = 4.32 \times 10^{-4}\text{ J}$

## 14. Kirchhoff's Laws: Worked Example (HL)

A circuit has a $12\text{ V}$ battery (internal resistance $1\text{ }\Omega$), a $6\text{ }\Omega$
resistor in series, and a parallel combination of $8\text{ }\Omega$ and $12\text{ }\Omega$
resistors.

**Parallel resistance:** $\frac{1}{R_p} = \frac{1}{8} + \frac{1}{12} = \frac{5}{24}$, so
$R_p = 4.8\text{ }\Omega$

**Total external resistance:** $R = 6 + 4.8 = 10.8\text{ }\Omega$

**Total resistance including internal:** $R_{\text{total}} = 10.8 + 1 = 11.8\text{ }\Omega$

**Total current:** $I = \frac{12}{11.8} = 1.017\text{ A}$

**Terminal PD:** $V = 12 - 1.017 \times 1 = 10.98\text{ V}$

**Current through $8\text{ }\Omega$:** $I_8 = \frac{10.98}{8} = 1.37\text{ A}$

**Current through $12\text{ }\Omega$:** $I_{12} = \frac{10.98}{12} = 0.915\text{ A}$

Check: $1.37 + 0.915 = 2.285\text{ A}$. But the total current through the parallel combination
should equal the current through the $6\text{ }\Omega$ resistor, which is $I = 1.017\text{ A}$.

Wait -- the current through the $6\text{ }\Omega$ resistor equals the total current from the
battery:

$V_6 = 12 - 1.017 \times 1 - 1.017 \times 6 = 12 - 1.017 - 6.102 = 4.881\text{ V}$

$I_6 = \frac{4.881}{6} = 0.814\text{ A}$

$I_8 = \frac{4.881}{8} = 0.610\text{ A}$

$I_{12} = \frac{4.881}{12} = 0.407\text{ A}$

Check: $0.814 + 0.610 + 0.407 = 1.831\text{ A}$. But this should equal the total current
$1.017\text{ A}$.

There is an error -- the terminal PD across the parallel combination should use the current through
the $6\text{ }\Omega$ resistor, not the total current. Let me recalculate:

$V_p = 1.017 \times 4.8 = 4.882\text{ V}$

$I_8 = \frac{4.882}{8} = 0.610\text{ A}$, $I_{12} = \frac{4.882}{12} = 0.407\text{ A}$

Check: $0.610 + 0.407 = 1.017\text{ A}$. Correct.

## 15. Summary Table: Key Electricity Formulas

| Topic               | Formula                        | Level | Notes                      |
| ------------------- | ------------------------------ | ----- | -------------------------- |
| Current             | $I = Q/t$                      | OL/HL | Rate of charge flow        |
| Ohm's law           | $V = IR$                       | OL/HL | Ohmic conductors only      |
| Resistivity         | $R = \rho L/A$                 | OL/HL | Material property          |
| Internal resistance | $V = \varepsilon - Ir$         | HL    | Terminal PD                |
| Power               | $P = IV = I^2R$                | OL/HL | Three equivalent forms     |
| Capacitance         | $C = Q/V$                      | HL    | Unit: farad                |
| Capacitor energy    | $E = \frac{1}{2}CV^2$          | HL    | Three equivalent forms     |
| RC time constant    | $\tau = RC$                    | HL    | 63.2% charge in one $\tau$ |
| Reactance           | $X_C = 1/(2\pi fC)$            | HL    | Decreases with frequency   |
| Reactance           | $X_L = 2\pi fL$                | HL    | Increases with frequency   |
| Impedance           | $Z = \sqrt{R^2 + (X_L-X_C)^2}$ | HL    | For RLC circuits           |
| Resonance           | $f_0 = 1/(2\pi\sqrt{LC})$      | HL    | $Z$ is minimum             |
| Faraday's law       | $\varepsilon = -d\Phi/dt$      | HL    | Lenz's law for direction   |
| Transformer         | $V_s/V_p = N_s/N_p$            | HL    | AC only                    |

## 16. Practice Questions (Additional)

### Higher Level (Additional)

11. A battery of EMF $9\text{ V}$ and internal resistance $1.5\text{ }\Omega$ is connected to a
    $4\text{ }\Omega$ resistor and a $12\text{ }\Omega$ resistor in parallel. Calculate the current
    through each resistor and the power dissipated in the $4\text{ }\Omega$ resistor.

12. A $47\mu\text{F}$ capacitor is charged to $20\text{ V}$ and then discharged through a
    $68\text{ k}\Omega$ resistor. Calculate (a) the time constant, (b) the voltage after
    $5\text{ s}$, (c) the energy stored initially, and (d) the energy remaining after $5\text{ s}$.

13. An AC circuit has $R = 150\text{ }\Omega$, $L = 0.3\text{ H}$, $C = 30\text{ }\mu\text{F}$ at
    $f = 200\text{ Hz}$. Calculate $X_L$, $X_C$, $Z$, the phase angle, the current, and the power
    dissipated.

14. A transformer with 1000 primary turns and 50 secondary turns is connected to a
    $230\text{ V}_{\text{rms}}$ mains supply. If the secondary delivers $10\text{ A}$ to a
    $100\text{ }\Omega$ load at $92\text{ }\%$ efficiency, calculate the primary current and the
    power wasted in the transformer.

15. Explain the difference between a capacitor and an inductor in an AC circuit. Include a
    description of how the impedance of each changes with frequency.

16. A potential divider circuit consists of a $20\text{ k}\Omega$ resistor and an NTC thermistor in
    series with a $12\text{ V}$ supply. The thermistor has resistance $15\text{ k}\Omega$ at
    $20^{\circ}\text{C}$ and $3\text{ k}\Omega$ at $80^{\circ}\text{C}$. Calculate the output
    voltage at each temperature and explain how this circuit could be used as a temperature sensor.

17. Two capacitors of $33\mu\text{F}$ and $100\mu\text{F}$ are connected in series and then in
    parallel with a $6\text{ V}$ supply. For each configuration, find the total capacitance, the
    charge stored energy, and the PD across each capacitor.

18. Describe Faraday's law of electromagnetic induction. Explain Lenz's law and why it is a
    consequence of conservation of energy. Include a description of one experimental demonstration.

19. A coil of 150 turns, area $0.05\text{ m}^2$, resistance $5\text{ }\Omega$, is in a magnetic
    field of flux density $0.6\text{ T}$. The field is reversed in $0.02\text{ s}$. Calculate the
    average EMF induced.

20. Explain why the national grid uses step-up and step-down transformers. Include a quantitative
    comparison of power losses at $11\text{ kV}$ and $400\text{ kV}$ for a cable of resistance
    $5\text{ }\Omega$ transmitting $500\text{ MW}$.

## Extended Worked Examples

### Example 21: AC Circuit with Purely Resistive, Inductive, and Capacitive Loads

Compare the behaviour of a $100 \Omega$ resistor, a $0.5 \text{ H}$ inductor, and a $10 \mu\text{F}$
capacitor when connected individually to a $230 \text{ V}$, $50 \text{ Hz}$ AC supply.

**Resistor:**

$$I_R = \frac{V}{R} = \frac{230}{100} = 2.3 \text{ A}$$

Phase angle: $0°$ (current and voltage in phase)

$$P_R = VI = 230 \times 2.3 = 529 \text{ W}$$

**Inductor:**

$$X_L = 2\pi f L = 2\pi \times 50 \times 0.5 = 157.1 \Omega$$

$$I_L = \frac{V}{X_L} = \frac{230}{157.1} = 1.464 \text{ A}$$

Phase angle: $90°$ (current lags voltage)

$$P_L = 0 \text{ W}$$ (pure inductor dissipates no power)

**Capacitor:**

$$X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi \times 50 \times 10 \times 10^{-6}} = \frac{1}{3.142 \times 10^{-3}} = 318.3 \Omega$$

$$I_C = \frac{V}{X_C} = \frac{230}{318.3} = 0.723 \text{ A}$$

Phase angle: $-90°$ (current leads voltage)

$$P_C = 0 \text{ W}$$ (pure capacitor dissipates no power)

:::info
Only resistors dissipate power in AC circuits. Inductors and capacitors store and release
energy each cycle but have zero average power dissipation. The power factor $\cos\phi$ accounts for
this: a purely resistive load has $\cos\phi = 1$, while purely reactive loads have $\cos\phi = 0$.
:::

### Example 22: Measuring Unknown Resistance with a Wheatstone Bridge

A Wheatstone bridge has $P = 100 \Omega$, $Q = 200 \Omega$, $R = 150 \Omega$, and $S$ is unknown.
The galvanometer shows zero deflection. Calculate $S$. If the battery EMF is $6 \text{ V}$,
calculate the current through each resistor.

**Step 1: Balance condition**

$$\frac{P}{Q} = \frac{R}{S} \implies \frac{100}{200} = \frac{150}{S} \implies S = 300 \Omega$$

**Step 2: Currents (no current through galvanometer at balance)**

Branch 1 ($P$ and $Q$ in series): $R_1 = 300 \Omega$, $I_1 = 6/300 = 0.020 \text{ A}$

Branch 2 ($R$ and $S$ in series): $R_2 = 450 \Omega$, $I_2 = 6/450 = 0.0133 \text{ A}$

Total current from battery: $I = I_1 + I_2 = 0.020 + 0.0133 = 0.0333 \text{ A} = 33.3 \text{ mA}$

**Step 3: Power in each resistor**

$$P_P = I_1^2 \times P = 0.0004 \times 100 = 0.04 \text{ W}$$

$$P_Q = I_1^2 \times Q = 0.0004 \times 200 = 0.08 \text{ W}$$

$$P_R = I_2^2 \times R = 0.000177 \times 150 = 0.0266 \text{ W}$$

$$P_S = I_2^2 \times S = 0.000177 \times 300 = 0.0531 \text{ W}$$

Total power:
$P_{\text{total}} = 0.04 + 0.08 + 0.0266 + 0.0531 = 0.1997 \text{ W} \approx 0.2 \text{ W}$

Check: $P = VI = 6 \times 0.0333 = 0.1998 \text{ W}$. Confirmed.

### Example 23: Capacitor Charging Through a Resistor

A $47 \mu\text{F}$ capacitor is charged through a $100 \text{ k}\Omega$ resistor from a
$12 \text{ V}$ supply. Calculate (a) the time constant, (b) the voltage after $5 \text{ s}$, (c) the
current after $5 \text{ s}$, and (d) the time to reach $95\%$ of the supply voltage.

**Step 1: Time constant**

$$\tau = RC = 100 \times 10^3 \times 47 \times 10^{-6} = 4.7 \text{ s}$$

**Step 2: Voltage after $5 \text{ s}$**

$$V(t) = V_0(1 - e^{-t/\tau}) = 12(1 - e^{-5/4.7}) = 12(1 - e^{-1.064})$$

$$= 12(1 - 0.3452) = 12 \times 0.6548 = 7.86 \text{ V}$$

**Step 3: Current after $5 \text{ s}$**

$$I(t) = I_0 e^{-t/\tau} = \frac{V_0}{R} e^{-t/\tau} = \frac{12}{100000} \times e^{-1.064}$$

$$= 0.00012 \times 0.3452 = 4.14 \times 10^{-5} \text{ A} = 41.4 \mu\text{A}$$

**Step 4: Time to reach 95% of supply voltage**

$$0.95 = 1 - e^{-t/\tau} \implies e^{-t/\tau} = 0.05$$

$$t = -\tau \ln(0.05) = -4.7 \times (-2.996) = 14.1 \text{ s}$$

This is approximately $3\tau$ ($3 \times 4.7 = 14.1 \text{ s}$).

:::info
Useful rules of thumb for RC circuits:

- After $1\tau$: charged to $63.2\%$ of final value
- After $2\tau$: charged to $86.5\%$
- After $3\tau$: charged to $95.0\%$
- After $5\tau$: charged to $99.3\%$ (effectively fully charged)
:::

## Common Pitfalls Extended

### Pitfall 6: Confusing Peak and RMS Values in AC Circuits

For a sinusoidal AC supply:

- Peak voltage: $V_0$
- RMS voltage: $V_{\text{rms}} = V_0/\sqrt{2}$
- Peak-to-peak voltage: $2V_0$

Mains electricity in Ireland is $230 \text{ V}$ RMS, which corresponds to a peak voltage of
$230\sqrt{2} = 325 \text{ V}$. Using the wrong value in calculations is a very common error.

### Pitfall 7: Incorrectly Applying Kirchhoff's Laws to AC Circuits

Kirchhoff's laws apply to AC circuits, but voltages and currents must be added as _phasors_ (taking
account of phase differences), not as simple algebraic sums. In a series RLC circuit:
$V_{\text{total}} \ne V_R + V_L + V_C$; instead, $V_{\text{total}}^2 = V_R^2 + (V_L - V_C)^2$.

### Pitfall 8: Forgetting That Capacitors Block DC

In a DC circuit at steady state, a fully charged capacitor draws no current and acts as an open
circuit. All the supply voltage appears across the capacitor. In an AC circuit, the capacitor
continuously charges and discharges, allowing AC current to flow. This is why capacitors are used to
block DC while passing AC signals.

## Additional Practice Problems

21. A coil of inductance $0.2 \text{ H}$ and resistance $10 \Omega$ is connected to a $12 \text{ V}$
    DC supply. Calculate (a) the initial rate of change of current, (b) the final steady-state
    current, and (c) the time constant of the circuit.

22. A $6 \text{ V}$ battery with internal resistance $0.5 \Omega$ is connected to two parallel
    resistors of $4 \Omega$ and $12 \Omega$. Calculate the current through each resistor, the
    terminal PD, and the power delivered to each resistor.

23. An AC generator produces an EMF given by $\varepsilon = 170\sin(314t)$ V. Calculate (a) the peak
    voltage, (b) the RMS voltage, (c) the frequency, and (d) the peak voltage across a $50 \Omega$
    resistor connected to the generator.

24. A capacitor of $22 \mu\text{F}$ is charged to $50 \text{ V}$ and then connected across an
    uncharged $47 \mu\text{F}$ capacitor. Calculate (a) the common final voltage, (b) the charge on
    each capacitor, and (c) the energy lost in the process.

25. Describe an experiment to determine the relationship between the current through a filament lamp
    and the potential difference across it. Include a circuit diagram description and explain how
    you would use the results to show that the lamp is a non-ohmic conductor.
