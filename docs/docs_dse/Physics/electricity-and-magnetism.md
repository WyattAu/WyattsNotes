---
title: Electricity and Magnetism
date: 2026-04-07T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: electricity-and-magnetism
---

## Electric Charge and Fields

### Electric Charge

Electric charge is a fundamental property of matter. There are two types of charge: positive and
negative. Like charges repel and unlike charges attract.

The SI unit of charge is the **coulomb** (C). The smallest unit of free charge is the **elementary
charge**:

$$e = 1.6 \times 10^{-19} \mathrm{ C}$$

A proton carries charge $+e$ and an electron carries charge $-e$. The charge on any object is an
integer multiple of $e$ (quantisation of charge):

$$Q = ne$$

Where $n$ is an integer.

### Conductors, Insulators, and Semiconductors

| Material Type | Description                                             | Examples                        |
| ------------- | ------------------------------------------------------- | ------------------------------- |
| Conductor     | Charges move freely; low resistivity                    | Copper, aluminium, gold, silver |
| Insulator     | Charges are tightly bound; very high resistivity        | Rubber, glass, plastic, wood    |
| Semiconductor | Intermediate properties; conductivity can be controlled | Silicon, germanium              |

### Methods of Charging

**Charging by friction:** When two different materials are rubbed together, electrons transfer from
one to the other. The material that gains electrons becomes negatively charged; the one that loses
electrons becomes positively charged.

**Charging by contact:** A charged object touches a neutral object, transferring charge directly.
Both objects end up with the same sign of charge.

**Charging by induction:** A charged object is brought near (but does not touch) a neutral
conductor. The conductor is earthed while the charged object is nearby, then the earth connection is
removed. The conductor is left with a charge opposite to that of the inducing object.

:::info
In induction, the total charge of the isolated conductor remains zero during the process.
The earth connection allows charge to flow, so when the earth is disconnected, the conductor retains
a net charge.
:::

### Coulomb's Law

The electrostatic force between two point charges is directly proportional to the product of the
charges and inversely proportional to the square of the distance between them:

$$F = \frac{kQ_1 Q_2}{r^2}$$

Where:

- $F$ = electrostatic force (N)
- $Q_1$, $Q_2$ = magnitudes of the charges (C)
- $r$ = distance between the charges (m)
- $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9 \mathrm{ N m}^2\mathrm{/C}^2$ (Coulomb's constant)
- $\varepsilon_0 = 8.85 \times 10^{-12} \mathrm{ F/m}$ (permittivity of free space)

In vector form (for the force on $Q_2$ due to $Q_1$):

$$\vec{F}_{12} = \frac{kQ_1 Q_2}{r^2} \hat{r}_{12}$$

Where $\hat{r}_{12}$ is the unit vector pointing from $Q_1$ to $Q_2$. A negative value of $F$
indicates attraction; a positive value indicates repulsion.

### Electric Field

An **electric field** is a region of space where a charged particle experiences an electrostatic
force. The electric field strength is defined as the force per unit positive charge:

$$E = \frac{F}{q}$$

Where $E$ is measured in newtons per coulomb (N/C) or volts per metre (V/m).

**Electric field of a point charge:**

$$E = \frac{kQ}{r^2} = \frac{Q}{4\pi\varepsilon_0 r^2}$$

The field points **away** from a positive charge and **towards** a negative charge.

### Electric Field Lines

Electric field lines are a visual representation of the electric field:

- Field lines start on positive charges and end on negative charges
- The density of field lines indicates the strength of the field
- Field lines never cross
- Field lines are perpendicular to the surface of a conductor at equilibrium

**Field line patterns:**

| Configuration              | Field Line Pattern                               |
| -------------------------- | ------------------------------------------------ |
| Single positive charge     | Radial lines pointing outward                    |
| Single negative charge     | Radial lines pointing inward                     |
| Two equal positive charges | Lines repel, zero field point between them       |
| Parallel plates            | Uniform field between plates (fringing at edges) |

### Uniform Electric Field Between Parallel Plates

When a potential difference $V$ is applied across two parallel plates separated by distance $d$, a
uniform electric field is produced between the plates:

$$E = \frac{V}{d}$$

This is only valid for the region between the plates (away from the edges).

### Work Done in an Electric Field

When a charge $q$ moves through a potential difference $V$, the work done is:

$$W = qV = qEd$$

Where $E$ is the uniform field strength and $d$ is the distance moved in the direction of the field.

If the charge moves against the field, work is done **on** the charge (it gains electric potential
energy). If it moves with the field, work is done **by** the charge (it loses electric potential
energy).

### Relationship Between E, V, and d

For a uniform field:

$$E = \frac{V}{d} \quad \Longrightarrow \quad V = Ed$$

The electric field points from high potential to low potential. A positive charge accelerates in the
direction of the field (from high to low potential), while a negative charge accelerates opposite to
the field.

### Worked Example 1

Two point charges $Q_1 = 3 \times 10^{-6} \mathrm{ C}$ and $Q_2 = -5 \times 10^{-6} \mathrm{ C}$ are
separated by $0.2 \mathrm{ m}$. Find the electrostatic force between them.

$$F = \frac{kQ_1 Q_2}{r^2} = \frac{(8.99 \times 10^9)(3 \times 10^{-6})(5 \times 10^{-6})}{(0.2)^2}$$

$$F = \frac{8.99 \times 10^9 \times 15 \times 10^{-12}}{0.04} = \frac{0.1349}{0.04} = 3.37 \mathrm{ N}$$

The negative sign of $Q_2$ means the force is attractive.

### Worked Example 2

A uniform electric field of strength $5000 \mathrm{ V/m}$ exists between two parallel plates separated
by $4 \mathrm{ cm}$. Find the potential difference and the force on an electron placed between the
plates.

$$V = Ed = 5000 \times 0.04 = 200 \mathrm{ V}$$

$$F = qE = (1.6 \times 10^{-19})(5000) = 8.0 \times 10^{-16} \mathrm{ N}$$

---

## Current Electricity

### Electric Current

Electric current is the rate of flow of electric charge:

$$I = \frac{dQ}{dt}$$

Where $I$ is measured in amperes (A). One ampere is one coulomb per second.

**Conventional current** flows from positive to negative (the direction positive charges would
move). **Electron flow** is in the opposite direction, from negative to positive.

For a steady current: $I = \frac{Q}{t}$

The charge carried by $n$ electrons: $Q = ne$

### Ammeter and Voltmeter

| Instrument | Connection  | Ideal Resistance | Purpose                       |
| ---------- | ----------- | ---------------- | ----------------------------- |
| Ammeter    | In series   | Zero             | Measures current              |
| Voltmeter  | In parallel | Infinite         | Measures potential difference |

A real ammeter has very low resistance so it does not significantly affect the current in the
circuit. A real voltmeter has very high resistance so it draws negligible current from the circuit.

### Potential Difference

The potential difference (voltage) between two points is the energy transferred per unit charge as
charge moves between those points:

$$V = \frac{W}{Q} = \frac{E}{Q}$$

Where $V$ is measured in volts (V). One volt is one joule per coulomb.

### Resistance and Ohm's Law

**Resistance** is a measure of opposition to current flow:

$$R = \frac{V}{I}$$

Where $R$ is measured in ohms ($\Omega$).

**Ohm's Law** states that for a metallic conductor at constant temperature, the current through it
is directly proportional to the potential difference across it:

$$V = IR$$

A component that obeys Ohm's law is called **ohmic**. Its I-V graph is a straight line through the
origin.

### Resistivity

The resistance of a uniform conductor depends on its dimensions and the material:

$$R = \frac{\rho L}{A}$$

Where:

- $R$ = resistance ($\Omega$)
- $\rho$ = resistivity ($\Omega \mathrm{ m}$)
- $L$ = length of conductor (m)
- $A$ = cross-sectional area (m$^2$)

**Common resistivities at $20^\circ\mathrm{C}$:**

| Material  | Resistivity ($\Omega \mathrm{ m}$) |
| --------- | -------------------------------- |
| Silver    | $1.59 \times 10^{-8}$            |
| Copper    | $1.68 \times 10^{-8}$            |
| Gold      | $2.44 \times 10^{-8}$            |
| Aluminium | $2.65 \times 10^{-8}$            |
| Iron      | $9.71 \times 10^{-8}$            |
| Nichrome  | $1.10 \times 10^{-6}$            |
| Glass     | $\sim 10^{10} - 10^{14}$         |
| Rubber    | $\sim 10^{13} - 10^{16}$         |

### Factors Affecting Resistance

- **Length:** Resistance is directly proportional to length ($R \propto L$)
- **Cross-sectional area:** Resistance is inversely proportional to area ($R \propto 1/A$)
- **Temperature:** For metals, resistance increases with temperature. For semiconductors, resistance
  decreases with temperature
- **Material:** Determined by the resistivity $\rho$

### Thermistor

A thermistor is a temperature-dependent resistor.

**NTC (Negative Temperature Coefficient) thermistor:** Resistance decreases as temperature
increases. The I-V characteristic is non-linear and shows that at higher currents (which heat the
thermistor), the resistance drops.

**PTC (Positive Temperature Coefficient) thermistor:** Resistance increases as temperature
increases.

:::info
NTC thermistors are commonly used in temperature sensing circuits. As the temperature rises,
the resistance falls, causing more current to flow, which can be measured or used to trigger a
circuit.
:::

### Light-Dependent Resistor (LDR)

An LDR is a component whose resistance decreases with increasing light intensity.

- In darkness: resistance is very high ($\sim \mathrm{M}\Omega$)
- In bright light: resistance is low ($\sim \mathrm{k}\Omega$)

LDRs are used in light-sensitive switches, automatic street lights, and camera exposure meters.

### I-V Characteristics

**Ohmic conductor (e.g., a fixed resistor at constant temperature):**

- I-V graph is a straight line through the origin
- Resistance is constant at all voltages

**Filament lamp:**

- I-V graph is a curve that flattens at higher currents
- Resistance increases with temperature (as current increases, the filament heats up)
- The graph is steeper at low voltages and shallower at high voltages

**Semiconductor diode:**

- Allows current to flow easily in one direction (forward bias) but blocks current in the opposite
  direction (reverse bias)
- In forward bias: current increases rapidly above a threshold voltage ($\sim 0.7 \mathrm{ V}$ for
  silicon)
- In reverse bias: almost no current flows until breakdown voltage is reached

### Worked Example 3

A copper wire has a length of $10 \mathrm{ m}$, a diameter of $0.5 \mathrm{ mm}$, and a resistivity of
$1.68 \times 10^{-8} \Omega \mathrm{ m}$. Find its resistance.

$$A = \pi r^2 = \pi \left(\frac{0.5 \times 10^{-3}}{2}\right)^2 = \pi (2.5 \times 10^{-4})^2 = \pi \times 6.25 \times 10^{-8} = 1.963 \times 10^{-7} \mathrm{ m}^2$$

$$R = \frac{\rho L}{A} = \frac{(1.68 \times 10^{-8})(10)}{1.963 \times 10^{-7}} = \frac{1.68 \times 10^{-7}}{1.963 \times 10^{-7}} = 0.856 \Omega$$

---

## Series and Parallel Circuits

### Series Circuits

In a series circuit, components are connected end to end along a single path.

- **Current:** The same current flows through all components: $I = I_1 = I_2 = I_3 = \cdots$
- **Voltage:** The total voltage equals the sum of the individual voltages:
  $V = V_1 + V_2 + V_3 + \cdots$
- **Resistance:** The total resistance equals the sum of the individual resistances:
  $R_{\mathrm{total}} = R_1 + R_2 + R_3 + \cdots$

### Parallel Circuits

In a parallel circuit, components are connected across the same two points, providing multiple paths
for current.

- **Voltage:** The same voltage is across all branches: $V = V_1 = V_2 = V_3 = \cdots$
- **Current:** The total current equals the sum of the branch currents:
  $I = I_1 + I_2 + I_3 + \cdots$
- **Resistance:** The reciprocal of the total resistance equals the sum of the reciprocals of
  individual resistances:

$$\frac{1}{R_{\mathrm{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots$$

For two resistors in parallel:

$$R_{\mathrm{total}} = \frac{R_1 R_2}{R_1 + R_2}$$

:::info
In a parallel circuit, the total resistance is always less than the smallest individual
resistance. Adding more parallel branches always decreases the total resistance.
:::

### Combined Series and Parallel Circuits

For circuits with both series and parallel combinations, simplify step by step:

1. Identify parallel groups and find their equivalent resistance
2. Add series resistances
3. Repeat until the circuit is reduced to a single equivalent resistance

### Potential Divider

A potential divider (voltage divider) consists of two or more resistors in series across a supply
voltage. It produces a fraction of the input voltage.

For two resistors $R_1$ and $R_2$ in series across input voltage $V_{\mathrm{in}}$:

$$V_{\mathrm{out}} = V_{\mathrm{in}} \times \frac{R_2}{R_1 + R_2}$$

The output voltage is taken across $R_2$ (the lower resistor in the divider).

**Loaded potential divider:** When a load resistance $R_L$ is connected across $R_2$, the effective
resistance of the lower branch changes. The loaded output voltage is:

$$V_{\mathrm{out}} = V_{\mathrm{in}} \times \frac{R_2 \parallel R_L}{R_1 + (R_2 \parallel R_L)}$$

Where $R_2 \parallel R_L = \frac{R_2 R_L}{R_2 + R_L}$.

The load reduces the output voltage (the divider is "loaded down"). For the output voltage to remain
stable, $R_L$ should be much larger than $R_2$.

### Potentiometer

A potentiometer is a variable resistor with three terminals that acts as an adjustable potential
divider. A sliding contact moves along a resistive track, allowing continuous adjustment of the
output voltage from $0$ to $V_{\mathrm{in}}$.

### Internal Resistance of Real Sources

A real power source (battery, cell) has an internal resistance $r$. The EMF ($\varepsilon$) of the
source is the total energy supplied per unit charge. The terminal PD ($V$) is the voltage measured
across the terminals when current flows.

$$V = \varepsilon - Ir$$

Where:

- $V$ = terminal potential difference (V)
- $\varepsilon$ = electromotive force (V)
- $I$ = current (A)
- $r$ = internal resistance ($\Omega$)
- $Ir$ = "lost volts" (voltage lost across the internal resistance)

The maximum terminal PD occurs when no current flows (open circuit): $V = \varepsilon$.

The terminal PD decreases as the current increases.

### Measuring EMF and Internal Resistance

**Method 1: Open-circuit and closed-circuit measurements**

1. Measure the terminal PD with no load (open circuit): $V_{\mathrm{open}} = \varepsilon$
2. Measure the terminal PD with a known load resistance $R$: $V = \varepsilon - Ir$
3. Since $I = V/R$, solve for $r$:
   $r = \frac{\varepsilon - V}{V} \times R = R\left(\frac{\varepsilon}{V} - 1\right)$

**Method 2: Graphical method**

Measure the terminal PD for several different load resistances and plot $V$ against $I$:

$$V = \varepsilon - Ir$$

This is a straight line with:

- $y$-intercept = $\varepsilon$
- Gradient = $-r$
- $x$-intercept = $\varepsilon / r$ (short-circuit current)

### Worked Example 4

A battery has an EMF of $12 \mathrm{ V}$ and internal resistance of $0.5 \Omega$. It is connected to
an external resistance of $5.5 \Omega$. Find the current, terminal PD, and power dissipated in the
external resistance.

$$I = \frac{\varepsilon}{R + r} = \frac{12}{5.5 + 0.5} = \frac{12}{6} = 2.0 \mathrm{ A}$$

$$V = \varepsilon - Ir = 12 - 2.0 \times 0.5 = 12 - 1.0 = 11.0 \mathrm{ V}$$

$$P = I^2 R = (2.0)^2 \times 5.5 = 4 \times 5.5 = 22.0 \mathrm{ W}$$

### Worked Example 5

A potential divider consists of $R_1 = 4 \mathrm{ k}\Omega$ and $R_2 = 6 \mathrm{ k}\Omega$ connected
across a $12 \mathrm{ V}$ supply. Find the output voltage across $R_2$. A load resistance of
$10 \mathrm{ k}\Omega$ is then connected across $R_2$. Find the new output voltage.

**Unloaded:**

$$V_{\mathrm{out}} = 12 \times \frac{6}{4 + 6} = 12 \times \frac{6}{10} = 7.2 \mathrm{ V}$$

**Loaded:**

$$R_2 \parallel R_L = \frac{6 \times 10}{6 + 10} = \frac{60}{16} = 3.75 \mathrm{ k}\Omega$$

$$V_{\mathrm{out}} = 12 \times \frac{3.75}{4 + 3.75} = 12 \times \frac{3.75}{7.75} = 12 \times 0.4839 = 5.81 \mathrm{ V}$$

---

## Electrical Energy and Power

### Electrical Power

Power is the rate of energy transfer:

$$P = IV$$

Using Ohm's law ($V = IR$), this can be rewritten as:

$$P = I^2 R = \frac{V^2}{R}$$

Where $P$ is measured in watts (W).

| Formula     | Use When                         |
| ----------- | -------------------------------- |
| $P = IV$    | Current and voltage are known    |
| $P = I^2 R$ | Current and resistance are known |
| $P = V^2/R$ | Voltage and resistance are known |

### Electrical Energy

Energy transferred is power multiplied by time:

$$E = Pt = VIt = I^2 Rt = \frac{V^2}{R} t$$

Where $E$ is measured in joules (J).

### The Kilowatt-Hour

The kilowatt-hour (kWh) is a practical unit of electrical energy used for billing:

$$1 \mathrm{ kWh} = 1000 \mathrm{ W} \times 3600 \mathrm{ s} = 3.6 \times 10^6 \mathrm{ J} = 3.6 \mathrm{ MJ}$$

**Electricity cost calculation:**

$$\mathrm{Cost} = \mathrm{Energy (kWh)} \times \mathrm{Rate (\$/kWh)}$$

### Efficiency

Efficiency is the ratio of useful energy (or power) output to total energy (or power) input:

$$\mathrm{Efficiency} = \frac{\mathrm{Useful output}}{\mathrm{Total input}} \times 100\%$$

For electrical devices:

$$\mathrm{Efficiency} = \frac{P_{\mathrm{out}}}{P_{\mathrm{in}}} \times 100\% = \frac{V_{\mathrm{out}} I_{\mathrm{out}}}{V_{\mathrm{in}} I_{\mathrm{in}}} \times 100\%$$

### Worked Example 6

A $2 \mathrm{ kW}$ electric heater is used for $3$ hours per day. If the electricity rate is $\$0.90$
per kWh, find the daily cost and the total energy consumed in one month (30 days).

Daily energy: $E = Pt = 2 \times 3 = 6 \mathrm{ kWh}$

Daily cost: $\mathrm{Cost} = 6 \times 0.90 = \$5.40$

Monthly energy: $6 \times 30 = 180 \mathrm{ kWh}$

Monthly cost: $180 \times 0.90 = \$162$

---

## Magnetic Fields

### Magnetic Field Around a Current-Carrying Wire

A long straight wire carrying current $I$ produces a concentric circular magnetic field. The
magnitude of the magnetic flux density at distance $r$ from the wire is:

$$B = \frac{\mu_0 I}{2\pi r}$$

Where:

- $B$ = magnetic flux density (T, tesla)
- $\mu_0 = 4\pi \times 10^{-7} \mathrm{ T m/A}$ (permeability of free space)
- $I$ = current (A)
- $r$ = perpendicular distance from the wire (m)

The direction of the field is given by the **right-hand grip rule**: if the thumb points in the
direction of conventional current, the fingers curl in the direction of the magnetic field.

### Magnetic Field Inside a Solenoid

A solenoid is a long coil of wire. When current flows, it produces a nearly uniform magnetic field
inside and a weak field outside. The magnetic flux density inside an ideal solenoid is:

$$B = \mu_0 n I$$

Where $n$ is the number of turns per unit length ($n = N/L$, where $N$ is total turns and $L$ is the
length of the solenoid).

The field inside the solenoid is uniform and parallel to the axis. Outside, the field is weak and
diverges at the ends.

### Force on a Current-Carrying Wire in a Magnetic Field

A wire of length $L$ carrying current $I$ in a magnetic field of flux density $B$ experiences a
force:

$$F = BIL \sin\theta$$

Where $\theta$ is the angle between the direction of the current and the direction of the magnetic
field.

- When $\theta = 90^\circ$ (wire perpendicular to field): $F = BIL$ (maximum force)
- When $\theta = 0^\circ$ (wire parallel to field): $F = 0$ (no force)

The direction of the force is given by **Fleming's Left-Hand Rule**:

- First finger: direction of the magnetic field ($B$)
- Second finger: direction of conventional current ($I$)
- Thumb: direction of the force ($F$)

### Force Between Parallel Current-Carrying Wires

Two parallel wires carrying currents $I_1$ and $I_2$ separated by distance $d$ exert forces on each
other. The force per unit length is:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

- If the currents flow in the **same** direction, the wires **attract** each other
- If the currents flow in **opposite** directions, the wires **repel** each other

### Worked Example 7

A wire carrying a current of $5 \mathrm{ A}$ is placed in a magnetic field of flux density
$0.3 \mathrm{ T}$. The wire is $0.4 \mathrm{ m}$ long and makes an angle of $30^\circ$ with the field.
Find the force on the wire.

$$F = BIL \sin\theta = 0.3 \times 5 \times 0.4 \times \sin 30^\circ$$

$$F = 0.6 \times 0.5 = 0.30 \mathrm{ N}$$

### Worked Example 8

Two long parallel wires separated by $0.1 \mathrm{ m}$ carry currents of $10 \mathrm{ A}$ and
$15 \mathrm{ A}$ in the same direction. Find the force per unit length between them.

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(10)(15)}{2\pi \times 0.1}$$

$$\frac{F}{L} = \frac{4\pi \times 10^{-7} \times 150}{0.2\pi} = \frac{6 \times 10^{-5}}{0.2} = 3.0 \times 10^{-4} \mathrm{ N/m}$$

Since the currents are in the same direction, the force is attractive.

---

## Electromagnetic Induction

### Magnetic Flux

Magnetic flux through a surface is defined as:

$$\Phi = BA \cos\theta$$

Where:

- $\Phi$ = magnetic flux (Wb, weber)
- $B$ = magnetic flux density (T)
- $A$ = area of the surface (m$^2$)
- $\theta$ = angle between the magnetic field and the normal to the surface

When $\theta = 0^\circ$ (field perpendicular to surface): $\Phi = BA$ (maximum flux)

When $\theta = 90^\circ$ (field parallel to surface): $\Phi = 0$ (no flux)

### Faraday's Law of Electromagnetic Induction

The magnitude of the induced EMF is equal to the rate of change of magnetic flux linkage:

$$\varepsilon = -\frac{d\Phi}{dt}$$

For a coil with $N$ turns:

$$\varepsilon = -N\frac{d\Phi}{dt}$$

The negative sign indicates the direction of the induced EMF (see Lenz's Law).

An EMF can be induced by:

1. Changing the magnetic field strength $B$
2. Changing the area $A$ of the coil (e.g., moving a wire into or out of a field)
3. Changing the angle $\theta$ between the field and the coil (e.g., rotating a coil)
4. Moving a magnet towards or away from a coil

### Lenz's Law

The direction of the induced EMF is such that it opposes the change producing it.

This is a consequence of conservation of energy. The induced current creates a magnetic field that
opposes the change in flux that produced it.

:::info
To determine the direction of the induced current using Lenz's Law:

1. Identify whether the flux through the coil is increasing or decreasing
2. If flux is increasing, the induced current creates a field to oppose the increase (opposing the
   external field)
3. If flux is decreasing, the induced current creates a field to oppose the decrease (reinforcing
the external field)
:::

### AC Generator

An AC generator converts mechanical energy into electrical energy using electromagnetic induction. A
coil is rotated at constant angular velocity in a uniform magnetic field.

The induced EMF is:

$$\varepsilon = \varepsilon_0 \sin(\omega t) = NAB\omega \sin(\omega t)$$

Where:

- $\varepsilon_0 = NAB\omega$ is the peak EMF
- $\omega = 2\pi f$ is the angular frequency
- $N$ = number of turns
- $A$ = area of the coil
- $B$ = magnetic flux density
- $f$ = frequency of rotation

The output is sinusoidal, alternating between $+\varepsilon_0$ and $-\varepsilon_0$.

### Transformers

A transformer changes the voltage of an AC supply. It consists of a primary coil and a secondary
coil wound around a soft iron core.

**Transformer equation:**

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

Where:

- $V_p$, $V_s$ = primary and secondary voltages
- $N_p$, $N_s$ = number of turns on primary and secondary coils

If $N_s \gt N_p$: step-up transformer ($V_s \gt V_p$)

If $N_s \lt N_p$: step-down transformer ($V_s \lt V_p$)

**Conservation of energy (ideal transformer):**

$$V_p I_p = V_s I_s$$

$$\frac{I_s}{I_p} = \frac{N_p}{N_s}$$

A step-up transformer increases voltage but decreases current, and vice versa.

**Efficiency of transformers:**

$$\mathrm{Efficiency} = \frac{V_s I_s}{V_p I_p} \times 100\%$$

Real transformers have losses due to:

- Copper losses (resistive heating in the windings)
- Eddy current losses (induced currents in the iron core)
- Hysteresis losses (repeated magnetisation and demagnetisation of the core)
- Flux leakage (not all magnetic flux links both coils)

:::tip
Transformers only work with AC. A changing current in the primary is needed to produce a
changing magnetic flux, which induces an EMF in the secondary. DC produces a steady field and no
induced EMF.
:::

### Worked Example 9

A transformer has 200 turns on the primary coil and 1000 turns on the secondary coil. The primary
voltage is $220 \mathrm{ V}$ and the primary current is $5 \mathrm{ A}$. Find the secondary voltage,
secondary current, and power.

$$V_s = V_p \times \frac{N_s}{N_p} = 220 \times \frac{1000}{200} = 220 \times 5 = 1100 \mathrm{ V}$$

$$I_s = I_p \times \frac{N_p}{N_s} = 5 \times \frac{200}{1000} = 5 \times 0.2 = 1.0 \mathrm{ A}$$

$$P = V_p I_p = 220 \times 5 = 1100 \mathrm{ W}$$

(Checking: $V_s I_s = 1100 \times 1.0 = 1100 \mathrm{ W}$, which confirms conservation of energy.)

---

## AC Circuits

### AC Voltage and Current

In an AC circuit, the voltage and current vary sinusoidally with time:

$$V = V_0 \sin(\omega t) = V_0 \sin(2\pi ft)$$

$$I = I_0 \sin(\omega t) = I_0 \sin(2\pi ft)$$

Where:

- $V_0$, $I_0$ = peak (maximum) values
- $f$ = frequency (Hz)
- $\omega = 2\pi f$ = angular frequency (rad/s)
- $T = 1/f$ = period (s)

### Root Mean Square (RMS) Values

The RMS value of an AC quantity is the equivalent DC value that would produce the same heating
effect in a resistor.

For a sinusoidal waveform:

$$V_{\mathrm{rms}} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0$$

$$I_{\mathrm{rms}} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0$$

Power in an AC circuit:

$$P = V_{\mathrm{rms}} I_{\mathrm{rms}} = \frac{V_0 I_0}{2}$$

### Mains Electricity

In Hong Kong (DSE context), mains electricity is supplied as:

- **Voltage:** $220 \mathrm{ V}$ (RMS)
- **Frequency:** $50 \mathrm{ Hz}$

The peak voltage is:

$$V_0 = 220\sqrt{2} = 311 \mathrm{ V}$$

The period is:

$$T = \frac{1}{f} = \frac{1}{50} = 0.02 \mathrm{ s} = 20 \mathrm{ ms}$$

---

## Worked Examples (Comprehensive)

### Worked Example 10: Coulomb's Law

Three point charges are placed along a straight line: $Q_1 = +2 \times 10^{-6} \mathrm{ C}$ at the
origin, $Q_2 = -3 \times 10^{-6} \mathrm{ C}$ at $x = 0.1 \mathrm{ m}$, and
$Q_3 = +4 \times 10^{-6} \mathrm{ C}$ at $x = 0.3 \mathrm{ m}$. Find the net force on $Q_2$.

Force on $Q_2$ due to $Q_1$ (attractive, towards $Q_1$, i.e., in the $-x$ direction):

$$F_{12} = \frac{k|Q_1||Q_2|}{r_{12}^2} = \frac{(8.99 \times 10^9)(2 \times 10^{-6})(3 \times 10^{-6})}{(0.1)^2}$$

$$F_{12} = \frac{8.99 \times 10^9 \times 6 \times 10^{-12}}{0.01} = \frac{0.05394}{0.01} = 5.394 \mathrm{ N} \quad (\mathrm{towards } -x)$$

Force on $Q_2$ due to $Q_3$ (attractive, towards $Q_3$, i.e., in the $+x$ direction):

$$F_{32} = \frac{k|Q_3||Q_2|}{r_{32}^2} = \frac{(8.99 \times 10^9)(4 \times 10^{-6})(3 \times 10^{-6})}{(0.2)^2}$$

$$F_{32} = \frac{8.99 \times 10^9 \times 12 \times 10^{-12}}{0.04} = \frac{0.10788}{0.04} = 2.697 \mathrm{ N} \quad (\mathrm{towards } +x)$$

Net force on $Q_2$:

$$F_{\mathrm{net}} = F_{32} - F_{12} = 2.697 - 5.394 = -2.697 \mathrm{ N}$$

The net force is $2.697 \mathrm{ N}$ in the $-x$ direction (towards $Q_1$).

### Worked Example 11: Series and Parallel Circuit

Find the total resistance, total current, and the current through each resistor in the following
circuit: A $12 \mathrm{ V}$ battery (internal resistance $1 \Omega$) is connected to a $6 \Omega$
resistor in series with a parallel combination of $4 \Omega$ and $12 \Omega$.

**Step 1:** Equivalent resistance of the parallel combination:

$$\frac{1}{R_p} = \frac{1}{4} + \frac{1}{12} = \frac{3 + 1}{12} = \frac{4}{12} = \frac{1}{3}$$

$$R_p = 3 \Omega$$

**Step 2:** Total resistance of the circuit:

$$R_{\mathrm{total}} = r + R_1 + R_p = 1 + 6 + 3 = 10 \Omega$$

**Step 3:** Total current from the battery:

$$I = \frac{\varepsilon}{R_{\mathrm{total}}} = \frac{12}{10} = 1.2 \mathrm{ A}$$

**Step 4:** Current through each parallel branch:

Voltage across the parallel combination:

$$V_p = \varepsilon - I(r + R_1) = 12 - 1.2(1 + 6) = 12 - 8.4 = 3.6 \mathrm{ V}$$

Current through $4 \Omega$: $I_1 = \frac{V_p}{4} = \frac{3.6}{4} = 0.9 \mathrm{ A}$

Current through $12 \Omega$: $I_2 = \frac{V_p}{12} = \frac{3.6}{12} = 0.3 \mathrm{ A}$

(Checking: $0.9 + 0.3 = 1.2 \mathrm{ A}$, which equals the total current.)

### Worked Example 12: Power and Cost

An electric kettle rated at $2000 \mathrm{ W}$, $220 \mathrm{ V}$ is used to boil $1.5 \mathrm{ kg}$ of
water from $25^\circ\mathrm{C}$ to $100^\circ\mathrm{C}$. Given the specific heat capacity of water is
$4200 \mathrm{ J/(kg }^\circ\mathrm{C)}$ and the electricity rate is $\$0.90$ per kWh, find: (a) the
time taken, (b) the cost, (c) the efficiency if $15\%$ of energy is lost to the surroundings.

**(a) Energy needed:**

$$E = mc\Delta T = 1.5 \times 4200 \times (100 - 25) = 1.5 \times 4200 \times 75 = 472500 \mathrm{ J}$$

Time (assuming no losses):
$t = \frac{E}{P} = \frac{472500}{2000} = 236.25 \mathrm{ s} = 3.94 \mathrm{ min}$

**(b) Cost:**

$$E_{\mathrm{kWh}} = \frac{472500}{3.6 \times 10^6} = 0.13125 \mathrm{ kWh}$$

$$\mathrm{Cost} = 0.13125 \times 0.90 = \$0.118$$

**(c) With $15\%$ loss:**

$$\mathrm{Efficiency} = 100 - 15 = 85\%$$

Actual energy supplied: $E_{\mathrm{actual}} = \frac{472500}{0.85} = 555882 \mathrm{ J}$

Actual time: $t = \frac{555882}{2000} = 277.9 \mathrm{ s} = 4.63 \mathrm{ min}$

Actual cost:
$\mathrm{Cost} = \frac{555882}{3.6 \times 10^6} \times 0.90 = 0.1544 \times 0.90 = \$0.139$

### Worked Example 13: EMF and Internal Resistance

A battery of unknown EMF $\varepsilon$ and internal resistance $r$ is connected to a variable
resistor. When the resistance is $5 \Omega$, the current is $1.8 \mathrm{ A}$. When the resistance is
$10 \Omega$, the current is $1.0 \mathrm{ A}$. Find $\varepsilon$ and $r$.

Setting up two equations:

$$\varepsilon = I_1(R_1 + r) = 1.8(5 + r) \quad \cdots (1)$$

$$\varepsilon = I_2(R_2 + r) = 1.0(10 + r) \quad \cdots (2)$$

Equating:

$$1.8(5 + r) = 1.0(10 + r)$$

$$9 + 1.8r = 10 + r$$

$$0.8r = 1$$

$$r = 1.25 \Omega$$

Substituting into equation (2):

$$\varepsilon = 1.0(10 + 1.25) = 11.25 \mathrm{ V}$$

---

## Summary Table

| Topic                     | Key Formula                                      | Key Concept                            |
| ------------------------- | ------------------------------------------------ | -------------------------------------- |
| Coulomb's Law             | $F = kQ_1 Q_2/r^2$                               | Inverse square law for electric forces |
| Electric field            | $E = F/q = kQ/r^2$                               | Force per unit charge                  |
| Uniform field             | $E = V/d$                                        | Parallel plates                        |
| Ohm's Law                 | $V = IR$                                         | Linear I-V for ohmic conductors        |
| Resistivity               | $R = \rho L/A$                                   | Material and geometry dependence       |
| Series resistance         | $R = R_1 + R_2 + \cdots$                         | Same current                           |
| Parallel resistance       | $1/R = 1/R_1 + 1/R_2 + \cdots$                   | Same voltage                           |
| Potential divider         | $V_{\mathrm{out}} = V_{\mathrm{in}} R_2/(R_1 + R_2)$ | Voltage fraction                       |
| Internal resistance       | $V = \varepsilon - Ir$                           | Lost volts                             |
| Power                     | $P = IV = I^2 R = V^2/R$                         | Rate of energy transfer                |
| Magnetic field (wire)     | $B = \mu_0 I/(2\pi r)$                           | Right-hand grip rule                   |
| Magnetic field (solenoid) | $B = \mu_0 n I$                                  | Uniform field inside                   |
| Force on wire             | $F = BIL \sin\theta$                             | Fleming's Left-Hand Rule               |
| Faraday's Law             | $\varepsilon = -N d\Phi/dt$                      | Changing flux induces EMF              |
| Transformer               | $V_s/V_p = N_s/N_p$                              | AC only, energy conservation           |
| AC RMS                    | $V_{\mathrm{rms}} = V_0/\sqrt{2}$                  | Equivalent DC heating effect           |

---

## Exam Tips

- Always distinguish between EMF (total energy per unit charge) and terminal PD (energy per unit
  charge delivered to the external circuit).
- In circuit problems, start by finding the total resistance, then the total current, then work out
  individual voltages and currents.
- When using Coulomb's Law, use the magnitudes of the charges and determine the direction of the
  force separately.
- For electromagnetic induction problems, clearly identify what is changing (flux, area, angle) and
  apply Faraday's Law accordingly.
- Remember that transformers only work with AC; always check whether the source is AC or DC.
- In potential divider problems with a load, first find the parallel combination before applying the
  divider formula.
- When drawing magnetic field lines, remember: lines go from N to S outside a magnet, and from S to
  N inside.
- For Lenz's Law, always state that the induced current opposes the **change** in flux, not the flux
  itself.

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** Two small charged spheres, each carrying a charge of $+4 \times 10^{-8} \mathrm{ C}$,
are separated by $0.05 \mathrm{ m}$ in a vacuum. Calculate the electrostatic force between them.

$$F = \frac{kQ_1 Q_2}{r^2} = \frac{(8.99 \times 10^9)(4 \times 10^{-8})^2}{(0.05)^2}$$

$$F = \frac{8.99 \times 10^9 \times 16 \times 10^{-16}}{0.0025} = \frac{1.4384 \times 10^{-5}}{0.0025} = 5.75 \times 10^{-3} \mathrm{ N}$$

The force is repulsive since both charges are positive.

**Question 2:** A $2000 \mathrm{ W}$ heater, a $100 \mathrm{ W}$ lamp, and a $500 \mathrm{ W}$ fan are
connected in parallel across a $220 \mathrm{ V}$ mains supply. Find the total current drawn and the
total cost of running them for 5 hours at $\$0.90$ per kWh.

Total power: $P = 2000 + 100 + 500 = 2600 \mathrm{ W} = 2.6 \mathrm{ kW}$

Total current: $I = \frac{P}{V} = \frac{2600}{220} = 11.82 \mathrm{ A}$

Energy consumed: $E = Pt = 2.6 \times 5 = 13 \mathrm{ kWh}$

Total cost: $\mathrm{Cost} = 13 \times 0.90 = \$11.70$

**Question 3:** In a potential divider circuit, $R_1 = 10 \mathrm{ k}\Omega$ and
$R_2 = 20 \mathrm{ k}\Omega$ are connected in series across a $9 \mathrm{ V}$ battery. A voltmeter of
resistance $50 \mathrm{ k}\Omega$ is connected across $R_2$. Find the reading on the voltmeter.

The voltmeter acts as a load across $R_2$:

$$R_2 \parallel R_V = \frac{20 \times 50}{20 + 50} = \frac{1000}{70} = 14.29 \mathrm{ k}\Omega$$

$$V_{\mathrm{out}} = 9 \times \frac{14.29}{10 + 14.29} = 9 \times \frac{14.29}{24.29} = 9 \times 0.5884 = 5.30 \mathrm{ V}$$

**Question 4:** A cell of EMF $6 \mathrm{ V}$ and internal resistance $0.8 \Omega$ is connected to an
external circuit consisting of a $4.2 \Omega$ resistor in series with a parallel combination of two
$6 \Omega$ resistors. Find the current from the cell and the terminal PD.

Equivalent resistance of the parallel combination:

$$R_p = \frac{6 \times 6}{6 + 6} = \frac{36}{12} = 3 \Omega$$

Total external resistance: $R = 4.2 + 3 = 7.2 \Omega$

Total circuit resistance: $R_{\mathrm{total}} = 7.2 + 0.8 = 8.0 \Omega$

Current: $I = \frac{\varepsilon}{R_{\mathrm{total}}} = \frac{6}{8.0} = 0.75 \mathrm{ A}$

Terminal PD: $V = \varepsilon - Ir = 6 - 0.75 \times 0.8 = 6 - 0.6 = 5.4 \mathrm{ V}$

**Question 5:** A rectangular coil of 100 turns, each of area $0.02 \mathrm{ m}^2$, is rotated at
$50 \mathrm{ rev/s}$ in a uniform magnetic field of flux density $0.5 \mathrm{ T}$. The axis of rotation
is perpendicular to the field. Find the peak EMF and the EMF when the plane of the coil makes an
angle of $60^\circ$ with the field.

Angular frequency: $\omega = 2\pi f = 2\pi \times 50 = 100\pi \mathrm{ rad/s}$

Peak EMF:
$\varepsilon_0 = NAB\omega = 100 \times 0.02 \times 0.5 \times 100\pi = 100\pi = 314 \mathrm{ V}$

When the plane of the coil makes $60^\circ$ with the field, the angle between the normal to the coil
and the field is $30^\circ$. The EMF is:

$$\varepsilon = \varepsilon_0 \sin(\omega t)$$

At this instant, the flux is $\Phi = BA\cos 30^\circ = BA\sin 60^\circ$. The EMF is maximum when
$\cos\theta = 0$, i.e., $\theta = 90^\circ$. Since the coil plane makes $60^\circ$ with the field,
the angle between the normal and the field is $30^\circ$, so:

$$\varepsilon = \varepsilon_0 \sin 30^\circ = 314 \times 0.5 = 157 \mathrm{ V}$$

**Question 6:** A step-down transformer with 2000 primary turns and 100 secondary turns is used to
reduce the mains voltage of $220 \mathrm{ V}$ RMS to supply a device. If the device draws a current of
$10 \mathrm{ A}$ and the transformer is $90\%$ efficient, find the secondary voltage, the primary
current, and the power loss.

Secondary voltage: $V_s = 220 \times \frac{100}{2000} = 220 \times 0.05 = 11 \mathrm{ V}$

Output power: $P_{\mathrm{out}} = V_s I_s = 11 \times 10 = 110 \mathrm{ W}$

Input power: $P_{\mathrm{in}} = \frac{P_{\mathrm{out}}}{0.90} = \frac{110}{0.90} = 122.2 \mathrm{ W}$

Primary current: $I_p = \frac{P_{\mathrm{in}}}{V_p} = \frac{122.2}{220} = 0.556 \mathrm{ A}$

Power loss: $P_{\mathrm{loss}} = P_{\mathrm{in}} - P_{\mathrm{out}} = 122.2 - 110 = 12.2 \mathrm{ W}$

**Question 7:** An electron is accelerated from rest through a potential difference of
$5000 \mathrm{ V}$ between two parallel plates separated by $2 \mathrm{ cm}$. Find the electric field
strength, the force on the electron, and the velocity of the electron as it reaches the positive
plate.

Electric field: $E = \frac{V}{d} = \frac{5000}{0.02} = 2.5 \times 10^5 \mathrm{ V/m}$

Force on electron:
$F = eE = 1.6 \times 10^{-19} \times 2.5 \times 10^5 = 4.0 \times 10^{-14} \mathrm{ N}$

Using energy conservation: $eV = \frac{1}{2}m_e v^2$

$$v = \sqrt{\frac{2eV}{m_e}} = \sqrt{\frac{2 \times 1.6 \times 10^{-19} \times 5000}{9.11 \times 10^{-31}}}$$

$$v = \sqrt{\frac{1.6 \times 10^{-15}}{9.11 \times 10^{-31}}} = \sqrt{1.756 \times 10^{15}} = 4.19 \times 10^7 \mathrm{ m/s}$$

**Question 8:** A straight wire of length $0.5 \mathrm{ m}$ carries a current of $8 \mathrm{ A}$ and
lies perpendicular to a uniform magnetic field of flux density $0.4 \mathrm{ T}$. Calculate the force
on the wire. If the wire is rotated so that it makes an angle of $45^\circ$ with the field, what is
the new force?

Force when perpendicular ($\theta = 90^\circ$):

$$F = BIL \sin 90^\circ = 0.4 \times 8 \times 0.5 \times 1 = 1.6 \mathrm{ N}$$

Force when at $45^\circ$:

$$F = BIL \sin 45^\circ = 0.4 \times 8 \times 0.5 \times 0.7071 = 1.131 \mathrm{ N}$$

**Question 9:** A cell is connected to a variable resistor $R$. A voltmeter across the cell reads
$1.5 \mathrm{ V}$ when $R = 8 \Omega$ and $1.2 \mathrm{ V}$ when $R = 4 \Omega$. Find the EMF and
internal resistance of the cell.

When $R = 8 \Omega$: $I_1 = \frac{V_1}{R_1} = \frac{1.5}{8} = 0.1875 \mathrm{ A}$

$$\varepsilon = V_1 + I_1 r = 1.5 + 0.1875r \quad \cdots (1)$$

When $R = 4 \Omega$: $I_2 = \frac{V_2}{R_2} = \frac{1.2}{4} = 0.3 \mathrm{ A}$

$$\varepsilon = V_2 + I_2 r = 1.2 + 0.3r \quad \cdots (2)$$

Equating (1) and (2):

$$1.5 + 0.1875r = 1.2 + 0.3r$$

$$0.3 = 0.1125r$$

$$r = \frac{0.3}{0.1125} = 2.67 \Omega$$

$$\varepsilon = 1.2 + 0.3 \times 2.67 = 1.2 + 0.8 = 2.0 \mathrm{ V}$$

**Question 10:** A solenoid of length $0.3 \mathrm{ m}$ has 600 turns and carries a current of
$4 \mathrm{ A}$. A straight wire running parallel to the axis of the solenoid at a distance of
$0.02 \mathrm{ m}$ from it carries a current of $5 \mathrm{ A}$ in the same direction. Find the magnetic
flux density inside the solenoid and the force per unit length on the wire.

Magnetic flux density inside the solenoid:

$$n = \frac{N}{L} = \frac{600}{0.3} = 2000 \mathrm{ turns/m}$$

$$B = \mu_0 n I = (4\pi \times 10^{-7})(2000)(4) = 4\pi \times 10^{-7} \times 8000 = 0.01005 \mathrm{ T}$$

The wire runs parallel to the axis of the solenoid, so the current in the wire is parallel to the
magnetic field inside the solenoid. Since the angle between the current and the field is $0^\circ$:

$$F = BIL \sin 0^\circ = 0$$

The force per unit length on the wire is zero.

</details>
