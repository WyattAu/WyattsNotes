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

### Kirchhoff's Laws (HL)

**Junction rule:** The sum of currents entering a junction equals the sum leaving.

**Loop rule:** The sum of EMFs around any closed loop equals the sum of potential drops.

**Example (HL):** Find the current in each resistor for the following circuit: a 12 V battery in
series with a 2 ohm resistor, then a parallel combination of 6 ohm and 3 ohm resistors.

Parallel resistance:
$\frac{1}{R_p} = \frac{1}{6} + \frac{1}{3} = \frac{1}{2} \implies R_p = 2\text{ ohms}$.

Total resistance: $R = 2 + 2 = 4\text{ ohms}$.

Total current: $I = \frac{12}{4} = 3\text{ A}$.

Current through 2 ohm (series): $I = 3\text{ A}$.

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

An AC voltage can be expressed as:

$$
V = V_0 \sin(\omega t)
$$

where $V_0$ is the peak voltage and $\omega = 2\pi f$.

### RMS Values

The root-mean-square (RMS) voltage and current for a sinusoidal AC:

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

where $\phi$ is the phase angle between voltage and current.

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
