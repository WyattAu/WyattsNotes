---
title: Current and Resistance
description:
  "A-Level Physics notes on Current and Resistance: 1. Electric Current; Current as Charge per Unit Time; Derivation of $I = nAev_d$."
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: current-and-resistance
---

## Current and Resistance

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<PhetSimulation simulationId="resistance-in-a-wire" title="Resistance in a Wire" />

Explore the simulation above to develop intuition for this topic.

## 1. Electric Current

**Definition.** Electric current is the rate of flow of charge:

$$\boxed{I = \frac{dQ}{dt}}$$

For constant current: $I = \frac{Q}{t}$. The SI unit is the ampere (A), where 1 A = 1 C s$^{-1}$.

**Conventional current** flows from positive to negative (historical convention). In metals, the
actual charge carriers are **electrons**, which flow from negative to positive.

### Current as Charge per Unit Time

If $N$ charge carriers, each with charge $q$, pass a point in time $t$:

$$I = \frac{Nq}{t}$$

### Derivation of $I = nAev_d$

Consider a conductor of cross-sectional area $A$ with $n$ free charge carriers per unit volume, each
carrying charge $q$ and moving with drift velocity $v_d$.

In time $\Delta t$, each carrier moves a distance $v_d \Delta t$. The volume swept is
$Av_d \Delta t$, containing $nAv_d \Delta t$ carriers. The total charge passing is:

$$\Delta Q = nAv_d \Delta t \cdot q$$

$$\boxed{I = \frac{\Delta Q}{\Delta t} = nAqv_d}$$

For metals, $q = e = 1.60 \times 10^{-19}$ C:

$$I = nAev_d$$

**Definition.** Drift velocity $v_d$ is the average net velocity of charge carriers in a conductor
in the direction of the applied electric field, resulting from the superposition of rapid random
thermal motion and a slow directional drift due to the field.

**Intuition.** The drift velocity is surprisingly small — typically $\sim 10^{-4}$ m s$^{-1}$ for
copper. This is because electrons undergo frequent collisions with the lattice ions, scattering
randomly. The net motion is a slow drift superimposed on rapid random thermal motion ($\sim 10^6$ m
s$^{-1}$).

<details>
<summary>Example: Drift Velocity in Copper</summary>
A copper wire of cross-sectional area $1.0 \times 10^{-6}$ m$^2$ carries a current of 2.0 A. The
number density of free electrons in copper is $8.5 \times 10^{28}$ m$^{-3}$. Calculate the drift
velocity.

**Answer.**
$v_d = \frac{I}{nAe} = \frac{2.0}{8.5 \times 10^{28} \times 1.0 \times 10^{-6} \times 1.60 \times 10^{-19}} = \frac{2.0}{1.36 \times 10^4} = 1.47 \times 10^{-4}$
m s$^{-1}$.

</details>

## 2. Potential Difference and Electromotive Force

**Definition.** Potential difference (p.d.) $V$ between two points in a circuit is the energy
transferred per unit charge when charge moves between those points: $V = W/Q$. The SI unit is the
volt (V), where 1 V = 1 J C$^{-1}$.

**Potential difference** (p.d.) $V$ between two points is the energy transferred per unit charge:

$$V = \frac{W}{Q}$$

**Definition.** Electromotive force (e.m.f.) $\mathcal{E}$ is the total energy transferred per unit
charge by a source when charge passes through it, including both energy delivered to the external
circuit and energy dissipated internally: $\mathcal{E} = W/Q$.

**Electromotive force** (e.m.f.) $\mathcal{E}$ is the energy transferred per unit charge when charge
passes through a source (e.g., a cell):

$$\mathcal{E} = \frac{W}{Q}$$

The distinction: p.d. refers to energy dissipated in a component; e.m.f. refers to energy gained
from a source.

## 3. Ohm's Law

**Definition.** Ohm's law states that the current through an ohmic conductor is directly
proportional to the potential difference across it, provided the physical conditions (especially
temperature) remain constant: $V = IR$.

**Ohm's Law.** The current through a metallic conductor is directly proportional to the potential
difference across it, provided the temperature remains constant:

$$V = IR$$

where $R$ is the **resistance**.

**Definition.** Resistance $R$ is a measure of the opposition to current flow in a conductor,
defined as the ratio of potential difference to current: $R = V/I$. The SI unit is the ohm
($\Omega$).

An **ohmic conductor** obeys Ohm's law — its $I$-$V$ graph is a straight line through the origin.

**Microscopic origin.** In a metal, conduction electrons accelerate in the electric field but
collide with lattice ions, losing energy. The average time between collisions is the **relaxation
time** $\tau$. The drift velocity is $v_d = \frac{eE\tau}{m_e}$, so $I \propto E \propto V$, giving
$V = IR$.

### Derivation of Ohm's Law from the Microscopic Model

1. In a conductor of length $L$ with p.d. $V$, the electric field is $E = V/L$.
2. A conduction electron of charge $e$ and mass $m_e$ experiences force $F = eE$.
3. Between collisions (mean relaxation time $\tau$), the electron accelerates to drift velocity:
   $v_d = a\tau = (eE/m_e)\tau$.
4. Current density: $J = nev_d = ne \cdot \frac{eE\tau}{m_e} = \frac{ne^2\tau}{m_e}E$.
5. Since $J \propto E$, the material is ohmic. Integrating:
   $I = JA = \frac{ne^2\tau A}{m_e} \cdot \frac{V}{L}$.
6. Rearranging: $V = \frac{mL}{ne^2\tau A} \cdot I = RI$.

$$\boxed{V = IR}$$

$\square$

## 4. Resistivity

**Definition.** Resistivity $\rho$ is an intrinsic property of a material that quantifies how
strongly it resists electric current flow, defined by $R = \rho L / A$. The SI unit is the ohm-metre
($\Omega$ m).

The resistance of a uniform conductor depends on its geometry and material:

$$\boxed{R = \frac{\rho L}{A}}$$

where $\rho$ is the **resistivity** (a property of the material, not the geometry), $L$ is the
length, and $A$ is the cross-sectional area.

### Derivation of the Resistivity Formula

**Derivation.** Consider a conductor of length $L$, cross-sectional area $A$, with electric field
$E = V/L$.

$$I = nAev_d = nAe \cdot \frac{eE\tau}{m_e} = \frac{ne^2\tau}{m_e} \cdot AE = \frac{ne^2\tau}{m_e} \cdot A \cdot \frac{V}{L}$$

$$R = \frac{V}{I} = \frac{mL}{ne^2\tau A}$$

Comparing with $R = \rho L/A$:

$$\boxed{\rho = \frac{m}{ne^2\tau}}$$

$\square$

This shows that resistivity depends on the material's charge carrier density $n$ and relaxation time
$\tau$, but not on its geometry.

**Intuition.** Longer conductors have more resistance (more collisions). Thicker conductors have
less resistance (more parallel paths). A higher resistivity means the material is intrinsically more
resistant to current flow.

| Material   | Resistivity ($\Omega$ m) |
| ---------- | ------------------------ |
| Copper     | $1.7 \times 10^{-8}$     |
| Aluminium  | $2.7 \times 10^{-8}$     |
| Constantan | $4.9 \times 10^{-7}$     |
| Nichrome   | $1.1 \times 10^{-6}$     |
| Silicon    | $6.4 \times 10^{2}$      |
| Glass      | $\sim 10^{12}$           |

:::warning Common Pitfall Resistivity is a property of the material. Resistance is a property of a
particular component. A long thin copper wire has high resistance but copper still has low
resistivity.
:::

## 5. I-V Characteristics

### Metallic Conductor (Ohmic)

Straight line through origin. Resistance is constant. Temperature rises with current, slightly
increasing resistance (positive temperature coefficient).

### Filament Lamp

Current increases rapidly at low p.d., then curves over. At higher currents, the filament heats up,
increasing the lattice ion vibrations and hence the resistance. The $I$-$V$ graph is a curve that
flattens at high $V$.

### Semiconductor Diode

- **Forward bias**: very little current until the threshold voltage ($\sim 0.6$ V for silicon) is
  reached, then current rises sharply.
- **Reverse bias**: almost zero current until breakdown voltage.

### Thermistor (NTC)

Negative temperature coefficient. As temperature increases, resistance decreases (more charge
carriers are released from the lattice).

## 6. Electrical Energy and Power

**Energy transferred** when charge $Q$ moves through p.d. $V$:

$$W = QV = VIt$$

**Power** (rate of energy transfer):

$$P = IV$$

Using $V = IR$:

$$P = I^2R = \frac{V^2}{R}$$

**Derivation of $P = I^2R$.** Substituting $V = IR$ into $P = IV$:

$$P = I \cdot IR = I^2R$$

**Derivation of $P = V^2/R$.** Substituting $I = V/R$ into $P = IV$:

$$P = \frac{V}{R} \cdot V = \frac{V^2}{R}$$

**Choosing the right formula:**

| Known quantities | Formula to use |
| ---------------- | -------------- |
| $I$ and $V$      | $P = IV$       |
| $I$ and $R$      | $P = I^2R$     |
| $V$ and $R$      | $P = V^2/R$    |

**Energy:**

$$E = Pt = VIt = I^2Rt = \frac{V^2t}{R}$$

The SI unit of energy is the joule (J). For domestic billing, the kilowatt-hour (kWh) is used:

$$1 \mathrm{ kWh} = 1000 \mathrm{ W} \times 3600 \mathrm{ s} = 3.6 \times 10^6 \mathrm{ J}$$

:::tip Exam Technique When calculating energy for resistors in series, use $P = I^2R$ (same
current). For resistors in parallel, use $P = V^2/R$ (same voltage).
:::

## 7. Temperature Dependence of Resistance

### Microscopic Derivation: Why Metallic Resistance Increases with Temperature

From Section 4, the resistivity of a metal is:

$$\rho = \frac{m_e}{ne^2\tau}$$

In a metal, the number density of free electrons $n$ is essentially fixed (every atom contributes
roughly one conduction electron, and the total number of atoms does not change with temperature).
The electron mass $m_e$ and charge $e$ are constants. Therefore, the only temperature-dependent
quantity is the relaxation time $\tau$.

**Proof that $\tau$ decreases with temperature.** At temperature $T$, the lattice ions vibrate with
mean square amplitude $\langle u^2 \rangle \propto T$ (from the equipartition theorem:
$\frac{1}{2}k\langle u^2 \rangle = \frac{1}{2}k_BT$ per degree of freedom). The probability that an
electron scatters off a lattice ion is proportional to the amplitude of the ion's displacement from
its equilibrium position. Therefore the scattering rate $1/\tau$ is proportional to $T$, and the
relaxation time decreases:

$$\tau \propto \frac{1}{T}$$

Consequently:

$$\rho = \frac{m_e}{ne^2\tau} \propto T$$

$$\boxed{R(T) = R_0\left[1 + \alpha(T - T_0)\right]}$$

where $R_0$ is the resistance at reference temperature $T_0$ and $\alpha$ is the **temperature
coefficient of resistance**. For copper, $\alpha \approx 3.9 \times 10^{-3}$
$^\circ\mathrm{C}^{-1}$; for tungsten, $\alpha \approx 4.5 \times 10^{-3}$ $^\circ\mathrm{C}^{-1}$.

This is a linear approximation valid over moderate temperature ranges. The full relationship is not
perfectly linear, but for A-level purposes the linear model suffices.

### NTC Thermistors: Why Resistance Decreases with Temperature

A **negative temperature coefficient (NTC) thermistor** is a semiconductor device whose resistance
decreases as temperature increases. This is the opposite of what happens in metals.

**Physical mechanism.** In a semiconductor, not all electrons are free to conduct. Electrons must be
promoted from the valence band across the band gap $E_g$ into the conduction band. The number of
charge carriers is strongly temperature-dependent:

$$n(T) \propto T^{3/2} \exp\left(-\frac{E_g}{2k_BT}\right)$$

As $T$ increases, the exponential factor dominates and the carrier density increases dramatically.
Since $\rho = m/(ne^2\tau)$ and $n$ grows exponentially, the resistivity drops. This overwhelms any
decrease in $\tau$ due to increased lattice vibrations.

For a typical NTC thermistor, the resistance approximately follows:

$$R = R_0 \exp\left(\frac{B}{T} - \frac{B}{T_0}\right)$$

where $B$ is a material constant (typically 3000--5000 K).

<details>
<summary>Example: Resistance of Copper at Elevated Temperature</summary>

A copper wire has resistance 10.0 $\Omega$ at 20$^\circ\mathrm{C}$. Calculate its resistance at
80$^\circ\mathrm{C}$. ($\alpha = 3.9 \times 10^{-3}$ $^\circ\mathrm{C}^{-1}$.)

**Answer.**

$R = R_0[1 + \alpha(T - T_0)] = 10.0 \times [1 + 3.9 \times 10^{-3} \times (80 - 20)]$

$= 10.0 \times [1 + 0.234] = 10.0 \times 1.234 = 12.3$ $\Omega$.

The resistance increased by 23.4%. This is why components can overheat in circuits --- increased
resistance leads to more power dissipation ($P = I^2R$), which raises the temperature further, a
positive feedback loop.

<b>If you get this wrong, revise:</b>
[Temperature Dependence of Resistance](#7-temperature-dependence-of-resistance)

</details>

:::warning Common Pitfall Do not confuse the behaviour of metals and semiconductors. Metals have a
_positive_ temperature coefficient ($R$ increases with $T$). Semiconductors (thermistors) have a
_negative_ temperature coefficient ($R$ decreases with $T$). The physical mechanism is entirely
different: in metals, $\tau$ changes; in semiconductors, $n$ changes.
:::

## 8. Superconductivity

**Definition.** A **superconductor** is a material that exhibits zero electrical resistance below a
critical temperature $T_c$.

### Key Properties

When a material enters the superconducting state (by being cooled below $T_c$), three remarkable
properties emerge:

1. **Zero DC resistance.** A current induced in a superconducting loop persists indefinitely with no
   decay. This has been experimentally verified: currents have been observed to flow for years with
   no measurable decrease.

2. **Meissner effect.** A superconductor expels all magnetic flux from its interior. If a
   superconductor is cooled below $T_c$ in an external magnetic field, the field lines are pushed
   out. This is not a consequence of zero resistance --- it is a distinct thermodynamic property.
   The magnetic field penetrates only a thin surface layer of depth $\lambda$ (the London
   penetration depth, typically 20--200 nm).

3. **Critical parameters.** Superconductivity is destroyed if any of three critical values are
   exceeded:
   - **Critical temperature** $T_c$: above this, normal resistivity returns.
   - **Critical magnetic field** $B_c$: above this field, superconductivity is destroyed.
   - **Critical current density** $J_c$: above this current density, the magnetic field generated by
     the current itself destroys superconductivity.

These three parameters are related. In the simplest model (Type I),
$B_c(T) \approx B_c(0)\left[1 - (T/T_c)^2\right]$.

### Type I vs Type II Superconductors

**Type I** superconductors (e.g., lead, mercury, aluminium) exhibit a sharp transition: below $B_c$
they are fully superconducting, above $B_c$ they revert to normal. Their critical fields are low
(typically $\lt{}$ 0.1 T).

**Type II** superconductors (e.g., niobium-titanium, YBCO) have two critical fields $B_{c1}$ and
$B_{c2}$:

- Below $B_{c1}$: full Meissner effect (Meissner state).
- Between $B_{c1}$ and $B_{c2}$: **mixed state** (vortex state) where magnetic flux penetrates in
  quantised vortices. The material still carries supercurrent but with some flux penetration.
- Above $B_{c2}$: normal state.

Type II superconductors typically have much higher $B_{c2}$ values (tens of tesla), making them
practically useful.

### BCS Theory (Conceptual Overview)

The **Bardeen-Cooper-Schrieffer (BCS) theory** (1957) explains superconductivity as follows:

At low temperatures, electrons with opposite momenta and spins form **Cooper pairs** via an indirect
attraction mediated by lattice vibrations (**phonons**). An electron distorts the positive ion
lattice as it passes; this distortion attracts a second electron. The net effect is an attractive
interaction between two electrons, despite their Coulomb repulsion.

Cooper pairs are bosons (integer spin) and can all occupy the same quantum ground state --- a
**Bose-Einstein condensate**. The Cooper pairs move coherently through the lattice without
scattering (there is no individual state to scatter into, since the ground state is already full).
This is the origin of zero resistance.

The energy gap $\Delta$ (the minimum energy to break a Cooper pair) is typically
$10^{-3}$--$10^{-2}$ eV, which is why thermal energy at $T_c$ (where $k_BT_c \approx \Delta$)
destroys superconductivity.

### Applications

- **MRI scanners**: superconducting coils generate the strong, uniform magnetic fields (1.5--7 T)
  required for imaging.
- **Particle accelerators**: the LHC uses superconducting magnets to steer proton beams at 7 TeV.
- **Maglev trains**: superconducting magnets provide levitation via the Meissner effect.
- **SQUIDs** (Superconducting Quantum Interference Devices): extremely sensitive magnetometers
  capable of detecting fields as small as $10^{-15}$ T.
- **Power transmission**: lossless power lines (currently limited by the cost of cooling).

## 9. Semiconductors

### Intrinsic Semiconductors

Pure silicon and germanium are **intrinsic semiconductors**. At absolute zero, their valence band is
completely full and their conduction band is completely empty --- they are insulators. As
temperature increases, thermal energy promotes some electrons across the **band gap** $E_g$ into the
conduction band, leaving behind **holes** in the valence band. Both electrons and holes act as
charge carriers.

For silicon, $E_g = 1.1$ eV. For germanium, $E_g = 0.67$ eV.

**Derivation of carrier concentration.** The intrinsic carrier concentration is given by:

$$\boxed{n_i = C \cdot T^{3/2} \exp\left(-\frac{E_g}{2k_BT}\right)}$$

where $C$ is a material constant and $k_B = 1.38 \times 10^{-23}$ J K$^{-1}$ is the Boltzmann
constant. The factor of 2 in the denominator arises because creating one electron-hole pair requires
energy $E_g$, so each carrier's average energy cost is $E_g/2$.

At room temperature (300 K), silicon has $n_i \approx 1.5 \times 10^{16}$ m$^{-3}$, compared with
copper's $n \approx 8.5 \times 10^{28}$ m$^{-3}$ --- a difference of 12 orders of magnitude.

### Extrinsic Semiconductors: Doping

The carrier concentration of an intrinsic semiconductor is far too low for practical electronics.
**Doping** introduces impurity atoms that dramatically increase carrier concentration.

**n-type semiconductor.** A group V element (e.g., phosphorus) is substituted for a silicon atom.
Phosphorus has 5 valence electrons; four bond with neighbouring silicon atoms, and the fifth is
weakly bound (ionisation energy $\approx 0.05$ eV, far less than the band gap). At room temperature,
virtually all donor atoms are ionised, contributing free electrons. The majority carriers are
electrons.

**p-type semiconductor.** A group III element (e.g., boron) is substituted for a silicon atom. Boron
has 3 valence electrons; it accepts an electron from a neighbouring silicon atom to complete its
bonds, creating a hole. At room temperature, virtually all acceptor atoms are ionised, contributing
holes. The majority carriers are holes.

Typical doping concentrations are $10^{21}$--$10^{23}$ m$^{-3}$, compared with $n_i \approx 10^{16}$
m$^{-3}$ for intrinsic silicon. Doping increases conductivity by 5--7 orders of magnitude.

**Charge neutrality.** In n-type material: $n = N_D + p \approx N_D$ (since $n \gg p$). In p-type
material: $p = N_A + n \approx N_A$ (since $p \gg n$). Here $N_D$ is the donor concentration and
$N_A$ is the acceptor concentration.

### The Hall Effect

When a current-carrying conductor is placed in a magnetic field, a transverse voltage is developed
perpendicular to both the current and the field. This is the **Hall effect**.

**Derivation.** Consider a slab of thickness $d$ carrying current $I$ in the $x$-direction, with
magnetic field $B$ in the $z$-direction. Charge carriers of charge $q$ and drift velocity $v_d$
experience a magnetic force:

$$F_B = qv_dB$$

This deflects carriers to one face, building up charge until the electric field $E_H$ creates a
force that balances the magnetic force:

$$qE_H = qv_dB$$

$$E_H = v_dB$$

The Hall voltage across the thickness $d$ is:

$$V_H = E_H \cdot d = v_dBd$$

Substituting $v_d = I/(nqA) = I/(nq \cdot wd)$ where $w$ is the width:

$$\boxed{V_H = \frac{BI}{nqd}}$$

**Determining carrier type.** The sign of $V_H$ reveals the sign of the charge carriers. In n-type
material, $V_H$ is negative on one face (electrons accumulate). In p-type material, $V_H$ is
positive on that same face (holes accumulate).

**Determining carrier density.** Rearranging:

$$n = \frac{BI}{qV_Hd}$$

Measurement of $V_H$, $B$, $I$, and $d$ gives $n$ directly.

<details>
<summary>Example: Hall Voltage Calculation</summary>

A copper strip of thickness 0.50 mm carries a current of 10 A in a magnetic field of 1.5 T
perpendicular to the strip. Calculate the Hall voltage. (Take $n = 8.5 \times 10^{28}$ m$^{-3}$.)

**Answer.**

$V_H = \frac{BI}{nqd} = \frac{1.5 \times 10}{8.5 \times 10^{28} \times 1.60 \times 10^{-19} \times 0.50 \times 10^{-3}}$

$= \frac{15}{8.5 \times 10^{28} \times 8.0 \times 10^{-23}} = \frac{15}{6.8 \times 10^{6}} = 2.2 \times 10^{-6}$
V $= 2.2$ $\mu$V.

Note the very small Hall voltage in metals, due to the enormous carrier density. In semiconductors,
where $n$ is much smaller, $V_H$ is much larger and easier to measure.

<b>If you get this wrong, revise:</b> [The Hall Effect](#the-hall-effect)

</details>

:::warning Common Pitfall In the Hall effect formula $V_H = BI/(nqd)$, $d$ is the thickness in the
direction of the magnetic field, not the width of the conductor perpendicular to the current. Sketch
the geometry carefully.
:::

:::tip Exam Technique When asked to determine whether a semiconductor is n-type or p-type using the
Hall effect, focus on the _sign_ of the Hall voltage. Electrons (negative charge) deflect to one
side, holes (positive charge) deflect to the opposite side.
:::

## 10. Power Transmission

### Why AC is Used for Long-Distance Transmission

The fundamental reason AC is used for power transmission is that **transformers** allow voltage to
be stepped up at the generating station and stepped down near the consumer. This is only possible
with AC (or with complex DC-DC conversion technology, which was not available historically and is
still more expensive).

### Derivation of Transmission Losses

Consider transmitting power $P$ over a distance $L$ through cables of resistance $R$ at voltage $V$.

The current in the transmission line is:

$$I = \frac{P}{V}$$

The power dissipated as heat in the cables is:

$$P_{\mathrm{loss}} = I^2R = \left(\frac{P}{V}\right)^2 R$$

**Proof that doubling the voltage quarters the loss.** If $V \to 2V$:

$$P_{\mathrm{loss}}' = \left(\frac{P}{2V}\right)^2 R = \frac{1}{4} \cdot \frac{P^2}{V^2}R = \frac{P_{\mathrm{loss}}}{4}$$

$\square$

This is the central result: power loss scales as $1/V^2$. This is why the National Grid transmits at
very high voltages (typically 275 kV or 400 kV in the UK).

### The National Grid

The National Grid (or equivalent in other countries) is the network of cables and transformers that
distributes electricity from power stations to consumers:

1. **Step-up transformer** at the power station: generator output (typically 15--25 kV) is stepped
   up to 275 or 400 kV for transmission.
2. **High-voltage transmission lines**: carry power at high voltage to minimise $I^2R$ losses.
3. **Step-down transformers**: near towns, voltage is reduced in stages (e.g., 132 kV $\to$ 33 kV
   $\to$ 11 kV $\to$ 230 V) for distribution to consumers.

<details>
<summary>Example: Comparing Transmission Losses at Different Voltages</summary>

Transmit 100 MW of power over 50 km of aluminium cable (resistivity $2.7 \times 10^{-8}$ $\Omega$ m,
cross-sectional area $5.0 \times 10^{-4}$ m$^2$). Compare losses at 10 kV and 400 kV.

**Answer.**

Resistance of the cable (there and back):

$R = \frac{\rho \times 2L}{A} = \frac{2.7 \times 10^{-8} \times 2 \times 50{,}000}{5.0 \times 10^{-4}} = \frac{2.7 \times 10^{-3}}{5.0 \times 10^{-4}} = 5.4$
$\Omega$.

At 10 kV: $I = P/V = 100 \times 10^6 / (10 \times 10^3) = 10{,}000$ A.

$P_{\mathrm{loss}} = I^2R = (10{,}000)^2 \times 5.4 = 5.4 \times 10^8$ W $= 540$ MW.

This exceeds the total power being transmitted! Clearly 10 kV is impractical.

At 400 kV: $I = 100 \times 10^6 / (400 \times 10^3) = 250$ A.

$P_{\mathrm{loss}} = (250)^2 \times 5.4 = 3.375 \times 10^5$ W $= 338$ kW.

Percentage loss $= 338{,}000 / 100{,}000{,}000 = 0.34\%$.

Stepping up from 10 kV to 400 kV reduced losses from 540% (impossible!) to 0.34%. This demonstrates
why high-voltage transmission is essential.

<b>If you get this wrong, revise:</b> [Power Transmission](#10-power-transmission)

</details>

:::tip Exam Technique When calculating transmission losses, remember to include both the outward and
return cables (total length $= 2L$). Also remember that the voltage in $P = IV$ is the transmission
voltage, not the voltage drop across the line resistance.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
A copper wire has length 2.0 m, cross-sectional area $1.5 \times 10^{-6}$ m$^2$, and resistivity
$1.7 \times 10^{-8}$ $\Omega$ m. Calculate its resistance.

**Answer.**
$R = \frac{\rho L}{A} = \frac{1.7 \times 10^{-8} \times 2.0}{1.5 \times 10^{-6}} = \frac{3.4 \times 10^{-8}}{1.5 \times 10^{-6}} = 0.0227$
$\Omega = 0.023$ $\Omega$.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity)

</details>

<details>
<summary>Problem 2</summary>
A wire carries a current of 3.0 A. How much charge flows past a point in 2 minutes?

**Answer.** $Q = It = 3.0 \times 120 = 360$ C.

<b>If you get this wrong, revise:</b> [Electric Current](#1-electric-current)

</details>

<details>
<summary>Problem 3</summary>
Calculate the drift velocity of electrons in a silver wire of diameter 1.0 mm carrying a current of
5.0 A. The number density of free electrons in silver is $5.9 \times 10^{28}$ m$^{-3}$.

**Answer.** $A = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$.

$v_d = \frac{I}{nAe} = \frac{5.0}{5.9 \times 10^{28} \times 7.85 \times 10^{-7} \times 1.60 \times 10^{-19}} = \frac{5.0}{7.42 \times 10^3} = 6.74 \times 10^{-4}$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Derivation of $I = nAev_d$](#derivation-of-i--naev_d)

</details>

<details>
<summary>Problem 4</summary>
A 12 V battery delivers a current of 2.5 A to a resistor. Calculate: (a) the resistance, (b) the
power dissipated, (c) the energy transferred in 10 minutes.

**Answer.** (a) $R = V/I = 12/2.5 = 4.8$ $\Omega$.

(b) $P = IV = 2.5 \times 12 = 30$ W.

(c) $E = Pt = 30 \times 600 = 18{,}000$ J = 18 kJ.

<b>If you get this wrong, revise:</b> [Electrical Energy and Power](#6-electrical-energy-and-power)

</details>

<details>
<summary>Problem 5</summary>
A nichrome wire has resistance 8.0 $\Omega$ at $20^\circ\mathrm{C}$. The wire is stretched to twice its original
length. What is its new resistance? (Assume the volume remains constant.)

**Answer.** If $L \to 2L$ and volume $AL = \mathrm{const}$, then $A \to A/2$.

$R' = \frac{\rho(2L)}{A/2} = \frac{4\rho L}{A} = 4R = 32$ $\Omega$.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity)

</details>

<details>
<summary>Problem 6</summary>
A 2.5 kW heater operates on a 230 V mains supply. Calculate the current it draws and its resistance.

**Answer.** $P = IV$, so $I = P/V = 2500/230 = 10.9$ A.

$R = V/I = 230/10.9 = 21.2$ $\Omega$.

<b>If you get this wrong, revise:</b> [Electrical Energy and Power](#6-electrical-energy-and-power)

</details>

<details>
<summary>Problem 7</summary>
Explain why the resistance of a filament lamp increases as the current through it increases.

**Answer.** As the current increases, more energy is dissipated per second ($P = I^2R$), heating the
filament. The increased temperature causes the metal lattice ions to vibrate more vigorously,
increasing the frequency of collisions between the conduction electrons and the lattice. This
reduces the mean relaxation time $\tau$, and since $\rho = m/(ne^2\tau)$, the resistivity increases.
Since $R = \rho L/A$, the resistance increases.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity) and
[I-V Characteristics](#5-i-v-characteristics)

</details>

<details>
<summary>Problem 8</summary>
A student measures the resistance of a wire at different lengths. The results are: 10 cm → 0.50
$\Omega$, 20 cm → 1.05 $\Omega$, 30 cm → 1.45 $\Omega$, 40 cm → 2.00 $\Omega$. Plotting $R$ against
$L$ gives a gradient of 5.0 $\Omega$ m$^{-1}$. If the wire diameter is 0.40 mm, calculate the
resistivity.

**Answer.** $A = \pi(0.20 \times 10^{-3})^2 = 1.26 \times 10^{-7}$ m$^2$. From $R = \rho L/A$:
gradient $= \rho/A = 5.0$. $\rho = 5.0 \times 1.26 \times 10^{-7} = 6.3 \times 10^{-7}$ $\Omega$ m.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity)

</details>

<details>
<summary>Problem 9</summary>
Two resistors of 6 $\Omega$ and 3 $\Omega$ are connected in series across a 9 V battery. Calculate
the current and the power dissipated in each resistor.

**Answer.** Total resistance $R_{\mathrm{total}} = 6 + 3 = 9$ $\Omega$. Current
$I = V/R = 9/9 = 1.0$ A.

Power in 6 $\Omega$: $P = I^2R = 1^2 \times 6 = 6$ W.

Power in 3 $\Omega$: $P = 1^2 \times 3 = 3$ W.

<b>If you get this wrong, revise:</b> [Electrical Energy and Power](#6-electrical-energy-and-power)

</details>

<details>
<summary>Problem 10</summary>
A thermistor has resistance 2000 $\Omega$ at $20^\circ\mathrm{C}$ and 400 $\Omega$ at $80^\circ\mathrm{C}$. It is connected in
series with a 500 $\Omega$ fixed resistor and a 6.0 V battery. Calculate the p.d. across the
thermistor at each temperature.

**Answer.** At $20^\circ\mathrm{C}$: $R_{\mathrm{total}} = 2000 + 500 = 2500$ $\Omega$.
$V_T = \frac{2000}{2500} \times 6.0 = 4.80$ V.

At $80^\circ\mathrm{C}$: $R_{\mathrm{total}} = 400 + 500 = 900$ $\Omega$.
$V_T = \frac{400}{900} \times 6.0 = 2.67$ V.

<b>If you get this wrong, revise:</b> [I-V Characteristics](#5-i-v-characteristics)

</details>

<details>
<summary>Problem 11</summary>

A copper wire has resistance 5.00 $\Omega$ at 20$^\circ\mathrm{C}$. The temperature coefficient of
resistance for copper is $\alpha = 3.9 \times 10^{-3}$ $^\circ\mathrm{C}^{-1}$. Calculate: (a) the
resistance at 100$^\circ\mathrm{C}$, (b) the temperature at which the resistance doubles, (c) the
resistance at $-40^\circ\mathrm{C}$.

**Answer.** (a)
$R = 5.00 \times [1 + 3.9 \times 10^{-3} \times (100 - 20)] = 5.00 \times [1 + 0.312] = 5.00 \times 1.312 = 6.56$
$\Omega$.

(b) $2R_0 = R_0[1 + \alpha(T - T_0)]$, so $2 = 1 + \alpha(T - 20)$, giving $\alpha(T - 20) = 1$, so
$T - 20 = 1/(3.9 \times 10^{-3}) = 256$, so $T = 276^\circ$C.

(c)
$R = 5.00 \times [1 + 3.9 \times 10^{-3} \times (-40 - 20)] = 5.00 \times [1 - 0.234] = 5.00 \times 0.766 = 3.83$
$\Omega$.

<b>If you get this wrong, revise:</b>
[Temperature Dependence of Resistance](#7-temperature-dependence-of-resistance)

</details>

<details>
<summary>Problem 12</summary>

A semiconductor sample has thickness $d = 1.0$ mm and width $w = 5.0$ mm. A current of 15 mA flows
through it. When a magnetic field of 0.80 T is applied perpendicular to the flat face, a Hall
voltage of 12 mV is measured across the width. (a) Calculate the carrier density. (b) Determine
whether the material is n-type or p-type if the Hall voltage is positive on the face closest to the
north pole of the magnet (conventional current flows left to right, magnetic field points into the
page).

**Answer.** (a)
$n = \frac{BI}{qV_Hd} = \frac{0.80 \times 15 \times 10^{-3}}{1.60 \times 10^{-19} \times 12 \times 10^{-3} \times 1.0 \times 10^{-3}}$

$= \frac{0.012}{1.60 \times 10^{-19} \times 1.2 \times 10^{-5}} = \frac{0.012}{1.92 \times 10^{-24}} = 6.25 \times 10^{21}$
m$^{-3}$.

(b) By the right-hand rule (or Fleming's left-hand rule), positive carriers moving left-to-right in
a field into the page experience an upward force. Since $V_H$ is positive on the top face, the
carriers accumulating there are positive --- the material is **p-type**.

<b>If you get this wrong, revise:</b> [The Hall Effect](#the-hall-effect)

</details>

<details>
<summary>Problem 13</summary>

A power station generates 500 MW and transmits it over 80 km of cable with total resistance 4.0
$\Omega$. Calculate the power loss and efficiency when transmitting at: (a) 25 kV, (b) 132 kV, (c)
400 kV.

**Answer.** (a) $I = 500 \times 10^6 / (25 \times 10^3) = 20{,}000$ A.
$P_{\mathrm{loss}} = (20{,}000)^2 \times 4.0 = 1.6 \times 10^9$ W $= 1600$ MW. Efficiency
$= 500/(500 + 1600) = 23.8\%$.

(b) $I = 500 \times 10^6 / (132 \times 10^3) = 3788$ A.
$P_{\mathrm{loss}} = (3788)^2 \times 4.0 = 5.74 \times 10^7$ W $= 57.4$ MW. Efficiency
$= 500/557.4 = 89.7\%$.

(c) $I = 500 \times 10^6 / (400 \times 10^3) = 1250$ A.
$P_{\mathrm{loss}} = (1250)^2 \times 4.0 = 6.25 \times 10^6$ W $= 6.25$ MW. Efficiency
$= 500/506.25 = 98.8\%$.

<b>If you get this wrong, revise:</b> [Power Transmission](#10-power-transmission)

</details>

<details>
<summary>Problem 14</summary>

A Type I superconducting lead wire has a critical field of $B_c = 0.080$ T at $T = 0$ K and a
critical temperature of $T_c = 7.2$ K. The wire has radius 1.0 mm. Calculate the maximum current the
wire can carry at (a) 0 K, (b) 4.0 K. Use the approximation $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.

**Answer.** The critical field at the surface of the wire due to current $I$ in a wire of radius $r$
is $B = \mu_0 I / (2\pi r)$. Superconductivity is destroyed when this field reaches $B_c(T)$.

(a) At $T = 0$: $B_c(0) = 0.080$ T.
$I_{\max} = \frac{2\pi r B_c}{\mu_0} = \frac{2\pi \times 1.0 \times 10^{-3} \times 0.080}{4\pi \times 10^{-7}} = \frac{5.03 \times 10^{-4}}{1.257 \times 10^{-6}} = 400$
A.

(b) At $T = 4.0$ K:
$B_c(4.0) = 0.080 \times [1 - (4.0/7.2)^2] = 0.080 \times [1 - 0.309] = 0.080 \times 0.691 = 0.0553$
T.

$I_{\max} = \frac{2\pi \times 1.0 \times 10^{-3} \times 0.0553}{4\pi \times 10^{-7}} = 277$ A.

<b>If you get this wrong, revise:</b> [Superconductivity](#8-superconductivity)

</details>

<details>
<summary>Problem 15</summary>

Silicon has a band gap of 1.1 eV and an intrinsic carrier concentration of
$n_i = 1.5 \times 10^{16}$ m$^{-3}$ at 300 K. (a) Estimate $n_i$ at 350 K. (b) A sample of silicon
is doped with phosphorus at a concentration of $N_D = 5.0 \times 10^{21}$ m$^{-3}$. Calculate the
ratio of conductivities: $\sigma_{\mathrm{doped}} / \sigma_{\mathrm{intrinsic}}$ at 300 K. (Assume
mobility is the same for both.)

**Answer.** (a)
$\frac{n_i(350)}{n_i(300)} = \left(\frac{350}{300}\right)^{3/2} \exp\left[-\frac{E_g}{2k_B}\left(\frac{1}{350} - \frac{1}{300}\right)\right]$.

$\frac{E_g}{2k_B} = \frac{1.1 \times 1.60 \times 10^{-19}}{2 \times 1.38 \times 10^{-23}} = \frac{1.76 \times 10^{-19}}{2.76 \times 10^{-23}} = 6377$
K.

$\frac{1}{350} - \frac{1}{300} = 0.002857 - 0.003333 = -4.76 \times 10^{-4}$ K$^{-1}$.

$n_i(350) = 1.5 \times 10^{16} \times (1.167)^{3/2} \times \exp(6377 \times 4.76 \times 10^{-4})$

$= 1.5 \times 10^{16} \times 1.260 \times \exp(3.035) = 1.5 \times 10^{16} \times 1.260 \times 20.8 = 3.93 \times 10^{17}$
m$^{-3}$.

(b) Since $\sigma = nq\mu$ and mobility $\mu$ is the same:
$\sigma_{\mathrm{doped}}/\sigma_{\mathrm{intrinsic}} = N_D/n_i = 5.0 \times 10^{21} / 1.5 \times 10^{16} = 3.3 \times 10^{5}$.

Doping increased conductivity by over 5 orders of magnitude.

<b>If you get this wrong, revise:</b> [Semiconductors](#9-semiconductors)

</details>

<details>
<summary>Problem 16</summary>

A copper wire of length 1.00 m and diameter 0.50 mm has resistance $R_0$ at $20^\circ\mathrm{C}$. It
is uniformly stretched to 1.50 times its original length. (a) Calculate the ratio $R'/R_0$ of the
new resistance to the original resistance. (b) If the original resistance was 0.087 $\Omega$, what
is the new resistance? (c) The wire is now at a temperature of $60^\circ\mathrm{C}$. What is its
resistance? ($\alpha = 3.9 \times 10^{-3}$ $^\circ\mathrm{C}^{-1}$.)

**Answer.** (a) Volume conservation: $A_0 L_0 = A' L'$, so $A' = A_0 L_0/L' = A_0/1.50$.

$R'/R_0 = (\rho L'/A') / (\rho L_0/A_0) = (L'/L_0) \times (A_0/A') = 1.50 \times 1.50 = 2.25$.

(b) $R' = 2.25 \times 0.087 = 0.196$ $\Omega$.

(c)
$R'' = R'[1 + \alpha(60 - 20)] = 0.196 \times [1 + 3.9 \times 10^{-3} \times 40] = 0.196 \times 1.156 = 0.227$
$\Omega$.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity) and
[Temperature Dependence of Resistance](#7-temperature-dependence-of-resistance)

</details>

<details>
<summary>Problem 17</summary>

An NTC thermistor with $B = 3900$ K has resistance $R_0 = 5000$ $\Omega$ at $T_0 = 298$ K
(25$^\circ\mathrm{C}$). It is connected in a potential divider circuit with a $10{,}000$ $\Omega$
fixed resistor and a 9.0 V supply. (a) Calculate the thermistor resistance at $50^\circ\mathrm{C}$
(323 K). (b) Calculate the output voltage across the thermistor at $25^\circ\mathrm{C}$ and at
$50^\circ\mathrm{C}$. (c) Calculate the output voltage across the fixed resistor at each
temperature.

**Answer.** (a) $R = R_0 \exp[B(1/T - 1/T_0)] = 5000 \times \exp[3900 \times (1/323 - 1/298)]$

$= 5000 \times \exp[3900 \times (3.096 \times 10^{-3} - 3.356 \times 10^{-3})]$

$= 5000 \times \exp[3900 \times (-2.60 \times 10^{-4})]$

$= 5000 \times \exp(-1.014) = 5000 \times 0.363 = 1813$ $\Omega$.

(b) At $25^\circ\mathrm{C}$: $R_{\mathrm{total}} = 5000 + 10{,}000 = 15{,}000$ $\Omega$.
$V_T = \frac{5000}{15{,}000} \times 9.0 = 3.00$ V.

At $50^\circ\mathrm{C}$: $R_{\mathrm{total}} = 1813 + 10{,}000 = 11{,}813$ $\Omega$.
$V_T = \frac{1813}{11{,}813} \times 9.0 = 1.38$ V.

(c) At $25^\circ\mathrm{C}$: $V_R = 9.0 - 3.00 = 6.00$ V. (Or
$V_R = \frac{10{,}000}{15{,}000} \times 9.0 = 6.00$ V.)

At $50^\circ\mathrm{C}$: $V_R = 9.0 - 1.38 = 7.62$ V. (Or
$V_R = \frac{10{,}000}{11{,}813} \times 9.0 = 7.62$ V.)

<b>If you get this wrong, revise:</b>
[Temperature Dependence of Resistance](#7-temperature-dependence-of-resistance)

</details>

<details>
<summary>Problem 18</summary>

A battery with e.m.f. $\mathcal{E} = 12.0$ V and internal resistance $r_0 = 0.50$ $\Omega$ at
$20^\circ\mathrm{C}$ is connected to an external load of $R_L = 5.0$ $\Omega$. The internal
resistance has a positive temperature coefficient of $\alpha_r = 4.0 \times 10^{-3}$
$^\circ\mathrm{C}^{-1}$. (a) Calculate the current and power delivered to the load at
$20^\circ\mathrm{C}$. (b) If the battery warms up to $60^\circ\mathrm{C}$ during operation,
calculate the new current and power delivered to the load. (c) Calculate the power dissipated within
the battery at each temperature.

**Answer.** (a) At $20^\circ\mathrm{C}$: $r = 0.50$ $\Omega$. Total resistance $= 0.50 + 5.0 = 5.50$
$\Omega$.

$I = \mathcal{E}/R_{\mathrm{total}} = 12.0/5.50 = 2.18$ A.
$P_L = I^2 R_L = (2.18)^2 \times 5.0 = 23.8$ W.

(b) At $60^\circ\mathrm{C}$:
$r = 0.50 \times [1 + 4.0 \times 10^{-3} \times (60 - 20)] = 0.50 \times 1.16 = 0.580$ $\Omega$.

Total resistance $= 0.580 + 5.0 = 5.580$ $\Omega$. $I = 12.0/5.580 = 2.151$ A.

$P_L = (2.151)^2 \times 5.0 = 23.1$ W.

(c) At $20^\circ\mathrm{C}$: $P_{\mathrm{int}} = I^2 r = (2.18)^2 \times 0.50 = 2.38$ W.

At $60^\circ\mathrm{C}$: $P_{\mathrm{int}} = (2.151)^2 \times 0.580 = 2.68$ W.

Note: even though the internal resistance only increased by 16%, the internal power dissipation
increased by 12.6%, while the useful power to the load decreased. This illustrates why battery
heating is a serious engineering concern.

<b>If you get this wrong, revise:</b>
[Temperature Dependence of Resistance](#7-temperature-dependence-of-resistance) and
[Electrical Energy and Power](#6-electrical-energy-and-power)

</details>
