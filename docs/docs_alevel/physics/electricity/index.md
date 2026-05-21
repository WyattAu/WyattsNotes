---
sidebar_label: Electricity
sidebar_position: 3
description:
  'Rigorous A-Level physics notes covering Electricity. Includes definitions, derivations, worked
  examples, and exam-style problems.'
---

# Electricity

Electricity is the study of electric charge, current, potential difference, and the behaviour of
components in electrical circuits. This section covers the fundamental principles of DC circuits,
resistance, and capacitance that form the basis of all electronic systems.

## Topics Covered

### Current and Resistance

- **Electric current** — rate of flow of charge: $I = \frac{\Delta Q}{\Delta t}$; conventional
  current vs. electron flow
- **Potential difference** — energy per unit charge: $V = \frac{W}{Q}$; the volt
- **Resistance** — $R = \frac{V}{I}$; Ohm's law (for ohmic conductors); $I$-$V$ characteristic
  curves
- **Resistivity** — $R = \frac{\rho L}{A}$; how material, length, and cross-sectional area affect
  resistance
- **Temperature dependence** — positive temperature coefficient in metals; negative temperature
  coefficient in thermistors (NTC)

### DC Circuits

- **Series circuits** — $I$ is constant, $V$ splits, $R_{\text{total}} = R_1 + R_2 + \cdots$
- **Parallel circuits** — $V$ is constant, $I$ splits,
  $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$
- **Kirchhoff's laws** — current law (conservation of charge at junctions) and voltage law
  (conservation of energy around loops)
- **Potential dividers** — $V_{\text{out}} = V_{\text{in}} \frac{R_2}{R_1 + R_2}$; sensors and
  variable resistors
- **Internal resistance** — $\varepsilon = V + Ir$; terminal p.d. vs. EMF; power delivery and
  maximum power transfer
- **Electrical power and energy** — $P = IV = I^2R = \frac{V^2}{R}$; $W = Pt$

### Capacitance

- **Definition** — $C = \frac{Q}{V}$; the farad; parallel plate capacitor
  $C = \frac{\varepsilon_0 A}{d}$
- **Energy stored** — $E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$
- **Charging and discharging** — exponential curves; $Q = Q_0 e^{-t/RC}$; time constant $\tau = RC$
- **Capacitors in series and parallel** — analogous to springs: series adds reciprocals, parallel
  adds directly

### Internal Resistance and EMF

The EMF ($\varepsilon$) of a cell is the energy provided per coulomb of charge when no current
flows. In practice, all cells have internal resistance $r$, so the terminal potential difference is
less than the EMF when current flows:

$$\varepsilon = V + Ir$$

Where $V$ is the terminal p.d., $I$ is the current, and $r$ is the internal resistance. To measure
$r$ experimentally, vary the external resistance and plot $V$ against $I$ — the gradient is $-r$ and
the $y$-intercept is $\varepsilon$.

### Resistivity and Superconductivity

Resistivity $\rho$ is a material property independent of dimensions: $R = \frac{\rho L}{A}$. For
metals, $\rho$ increases with temperature (more lattice vibrations scatter electrons).
Superconductors have $\rho = 0$ below a critical temperature $T_c$ — applications include loss-free
power transmission and strong electromagnets in MRI machines.

## Study Tips

1. **Draw circuit diagrams** — use standard symbols, label all currents and voltages, and indicate
   direction of conventional current.
2. **Apply Kirchhoff's laws systematically** — choose a loop, go around consistently, and set up
   equations. Solve simultaneously.
3. **Understand $I$-$V$ characteristics** — sketch and explain the curves for a resistor (linear),
   filament lamp (curved, resistance increases with temperature), and diode (threshold voltage).
4. **Practise internal resistance problems** — they combine circuit analysis with the concept of EMF
   and are frequently examined.
5. **For capacitor discharge** — always identify the time constant $\tau = RC$ first. After one time
   constant, the charge drops to $37\%$ of its initial value.

## How to Use These Notes

Follow the sidebar order. Each page provides definitions, derivations, worked examples with circuit
diagrams, and exam-style problems. Start with current and resistance, then DC circuits, then
capacitance.
