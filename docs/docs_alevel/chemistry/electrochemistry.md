---
title: Electrochemistry
description:
  "A-Level Chemistry notes on Electrochemistry: Redox Reactions; Oxidation States (Oxidation Numbers); Half-Equations for thorough revision and examination prep."
date: 2026-04-21T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: electrochemistry
sidebar_position: 13
---

# Electrochemistry

## Redox Reactions

### Oxidation States (Oxidation Numbers)

The oxidation state is a formalism that assigns a charge to an atom in a compound based on electronegativity. The rules for assigning oxidation states:

1. The oxidation state of an uncombined element is zero.
2. The sum of oxidation states in a neutral compound is zero; in a polyatomic ion, it equals the ion charge.
3. Group 1 metals: $+1$. Group 2 metals: $+2$. Al: $+3$.
4. Hydrogen is $+1$ (except in metal hydrides, where it is $-1$).
5. Oxygen is $-2$ (except in peroxides, where it is $-1$, and in $\mathrm{OF}_2$, where it is $+2$).
6. Fluorine is always $-1$ in compounds.
7. Halogens are typically $-1$, except when bonded to more electronegative elements or in polyatomic ions.

**Worked Example.** Determine the oxidation state of $\mathrm{Cr}$ in $\mathrm{K}_2\mathrm{Cr}_2\mathrm{O}_7$.

$$
2(+1) + 2x + 7(-2) = 0
$$

$$
2 + 2x - 14 = 0
$$

$$
2x = 12 \implies x = +6
$$

### Half-Equations

Redox reactions are split into two half-equations:

- **Oxidation:** loss of electrons (increase in oxidation state).
- **Reduction:** gain of electrons (decrease in oxidation state).

The mnemonic **OIL RIG**: Oxidation Is Loss, Reduction Is Gain.

### Balancing Half-Equations (in Acidic Conditions)

1. Balance all atoms except $\mathrm{O}$ and $\mathrm{H}$.
2. Balance $\mathrm{O}$ by adding $\mathrm{H}_2\mathrm{O}$.
3. Balance $\mathrm{H}$ by adding $\mathrm{H}^+$.
4. Balance charge by adding electrons ($e^-$).

**Example.** Balance $\mathrm{MnO}_4^- \to \mathrm{Mn}^{2+}$ in acidic solution.

1. $\mathrm{Mn}$ already balanced.
2. Add $\mathrm{H}_2\mathrm{O}$: $\mathrm{MnO}_4^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$.
3. Add $\mathrm{H}^+$: $\mathrm{MnO}_4^- + 8\mathrm{H}^+ \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$.
4. Balance charge: LHS = $-1 + 8 = +7$; RHS = $+2$. Add $5e^-$ to LHS: $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$.

### Combining Half-Equations

Multiply each half-equation by an appropriate factor so that the electrons cancel, then add.

**Example.** Combine the above with $\mathrm{Fe}^{2+} \to \mathrm{Fe}^{3+} + e^-$:

$$
\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}
$$

$$
5\mathrm{Fe}^{2+} \to 5\mathrm{Fe}^{3+} + 5e^-
$$

$$
\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5\mathrm{Fe}^{2+} \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O} + 5\mathrm{Fe}^{3+}
$$

## Standard Electrode Potentials ($E^\circ$)

### Definition

The **standard electrode potential** $E^\circ$ is the potential difference (voltage) of a half-cell relative to the standard hydrogen electrode under standard conditions ($298\,\mathrm{K}$, $100\,\mathrm{kPa}$, $1\,\mathrm{mol/dm}^3$ solutions).

### The Standard Hydrogen Electrode (SHE)

The SHE is the reference electrode:

$$
2\mathrm{H}^+(aq, 1\,\mathrm{mol/dm}^3) + 2e^- \rightleftharpoons \mathrm{H}_2(g, 100\,\mathrm{kPa})
$$

By definition, $E^\circ(\mathrm{H}^+/\mathrm{H}_2) = 0.00\,\mathrm{V}$.

### Measuring Standard Electrode Potentials

To measure the $E^\circ$ of a half-cell, it is connected to the SHE, and the cell EMF is measured. A salt bridge (typically $\mathrm{KNO}_3$ solution) maintains electrical neutrality.

### The Electrochemical Series

| Half-equation | $E^\circ$ (V) |
|---|---|
| $\mathrm{F}_2 + 2e^- \rightleftharpoons 2\mathrm{F}^-$ | $+2.87$ |
| $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \rightleftharpoons \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$ | $+1.51$ |
| $\mathrm{Cl}_2 + 2e^- \rightleftharpoons 2\mathrm{Cl}^-$ | $+1.36$ |
| $\mathrm{Ag}^+ + e^- \rightleftharpoons \mathrm{Ag}$ | $+0.80$ |
| $\mathrm{Cu}^{2+} + 2e^- \rightleftharpoons \mathrm{Cu}$ | $+0.34$ |
| $2\mathrm{H}^+ + 2e^- \rightleftharpoons \mathrm{H}_2$ | $0.00$ |
| $\mathrm{Fe}^{2+} + 2e^- \rightleftharpoons \mathrm{Fe}$ | $-0.44$ |
| $\mathrm{Zn}^{2+} + 2e^- \rightleftharpoons \mathrm{Zn}$ | $-0.76$ |
| $\mathrm{Na}^+ + e^- \rightleftharpoons \mathrm{Na}$ | $-2.71$ |
| $\mathrm{Li}^+ + e^- \rightleftharpoons \mathrm{Li}$ | $-3.04$ |

**Key observations:**
- More positive $E^\circ$: species is a stronger oxidising agent (more readily reduced).
- More negative $E^\circ$: species is a stronger reducing agent (more readily oxidised).
- A species can oxidise any species below it in the series (with more negative $E^\circ$).

## Cell EMF (Electromotive Force)

For an electrochemical cell consisting of two half-cells:

$$
E^\circ_\mathrm{cell} = E^\circ_\mathrm{reduction} - E^\circ_\mathrm{oxidation}
$$

Or equivalently:

$$
E^\circ_\mathrm{cell} = E^\circ_\mathrm{cathode} - E^\circ_\mathrm{anode}
$$

where the cathode is the electrode where reduction occurs and the anode is where oxidation occurs.

**Worked Example.** Calculate the standard cell EMF for a $\mathrm{Zn}/\mathrm{Cu}$ cell.

$$
\mathrm{Zn}^{2+} + 2e^- \rightleftharpoons \mathrm{Zn} \quad E^\circ = -0.76\,\mathrm{V}
$$

$$
\mathrm{Cu}^{2+} + 2e^- \rightleftharpoons \mathrm{Cu} \quad E^\circ = +0.34\,\mathrm{V}
$$

$\mathrm{Zn}$ is oxidised (anode), $\mathrm{Cu}^{2+}$ is reduced (cathode).

$$
E^\circ_\mathrm{cell} = 0.34 - (-0.76) = +1.10\,\mathrm{V}
$$

### Feasibility of Reactions

A redox reaction is thermodynamically feasible if $E^\circ_\mathrm{cell} \gt 0$. This is equivalent to $\Delta G^\circ \lt 0$:

$$
\Delta G^\circ = -nFE^\circ_\mathrm{cell}
$$

where $n$ is the number of moles of electrons transferred and $F$ is the Faraday constant ($96485\,\mathrm{C/mol}$).

**Caveats:**
- $E^\circ_\mathrm{cell} \gt 0$ indicates thermodynamic feasibility, not necessarily a fast reaction (kinetic barriers may exist).
- Non-standard conditions (concentrations other than $1\,\mathrm{mol/dm}^3$) change the actual cell EMF via the Nernst equation (beyond A-Level but useful to note).

## Conventional Cell Representation

Cells are written as:

$$
\mathrm{Anode (oxidation)} \parallel \mathrm{Cathode (reduction)}
$$

Example: $\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq) \parallel \mathrm{Cu}^{2+}(aq) \mid \mathrm{Cu}(s)$

The single vertical line represents a phase boundary. The double vertical line represents the salt bridge. The anode (oxidation) is written on the left; the cathode (reduction) on the right.

## Fuel Cells

A fuel cell converts the chemical energy of a fuel (typically $\mathrm{H}_2$) directly into electrical energy, continuously supplied from an external source.

### Hydrogen-Oxygen Fuel Cell

**Alkaline conditions:**

Anode (oxidation): $2\mathrm{H}_2 + 4\mathrm{OH}^- \to 4\mathrm{H}_2\mathrm{O} + 4e^-$

Cathode (reduction): $\mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^- \to 4\mathrm{OH}^-$

Overall: $2\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}$

**Acidic conditions:**

Anode: $2\mathrm{H}_2 \to 4\mathrm{H}^+ + 4e^-$

Cathode: $\mathrm{O}_2 + 4\mathrm{H}^+ + 4e^- \to 2\mathrm{H}_2\mathrm{O}$

Overall: $2\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}$

**Advantages:** Higher efficiency than combustion; no pollution (only water as product); quiet operation.

**Disadvantages:** Hydrogen storage and transport challenges; expensive catalysts (platinum); limited infrastructure.

### Batteries

**Lead-acid battery:**

Anode: $\mathrm{Pb}(s) + \mathrm{SO}_4^{2-}(aq) \to \mathrm{PbSO}_4(s) + 2e^-$

Cathode: $\mathrm{PbO}_2(s) + \mathrm{SO}_4^{2-}(aq) + 4\mathrm{H}^+(aq) + 2e^- \to \mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$

Overall: $\mathrm{Pb} + \mathrm{PbO}_2 + 2\mathrm{H}_2\mathrm{SO}_4 \to 2\mathrm{PbSO}_4 + 2\mathrm{H}_2\mathrm{O}$

EMF $\approx 2\,\mathrm{V}$ per cell; six cells in series give $12\,\mathrm{V}$ car battery.

**Lithium-ion battery:**

Anode (oxidation): $\mathrm{LiCoO}_2 \to \mathrm{Li}_{1-x}\mathrm{CoO}_2 + x\mathrm{Li}^+ + xe^-$

Cathode (reduction): $\mathrm{C}_6 + x\mathrm{Li}^+ + xe^- \to \mathrm{Li}_x\mathrm{C}_6$

Lithium ions migrate between electrodes through an electrolyte. EMF $\approx 3.7\,\mathrm{V}$.

## Electrolysis

### Principles

Electrolysis uses electrical energy to drive a non-spontaneous redox reaction. The electrolyte is an ionic compound, molten or in solution, that conducts electricity through the movement of ions.

- **Anode (+):** oxidation occurs; anions are attracted.
- **Cathode (-):** reduction occurs; cations are attracted.

### Products at Electrodes (Aqueous Solutions)

In aqueous solutions, both the cation and $\mathrm{H}^+$ (from water) can be reduced at the cathode, and both the anion and $\mathrm{OH}^-$ (from water) can be oxidised at the anion. The species that is more easily reduced/oxidised (higher/lower $E^\circ$) is preferentially discharged.

**At the cathode (reduction):**

If the metal is below hydrogen in the reactivity series (e.g. $\mathrm{Cu}$, $\mathrm{Ag}$, $\mathrm{Au}$), the metal is deposited. If the metal is more reactive (e.g. $\mathrm{Na}$, $\mathrm{K}$, $\mathrm{Mg}$), hydrogen is evolved:

$$
2\mathrm{H}_2\mathrm{O}(l) + 2e^- \to \mathrm{H}_2(g) + 2\mathrm{OH}^-(aq)
$$

**At the anode (oxidation):**

If the anion is a halide ($\mathrm{Cl}^-$, $\mathrm{Br}^-$, $\mathrm{I}^-$), the halogen is produced. For all other anions (including $\mathrm{SO}_4^{2-}$, $\mathrm{NO}_3^-$), oxygen is evolved from water:

$$
4\mathrm{OH}^-(aq) \to \mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^-
$$

or equivalently:

$$
2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^-
$$

### Faraday's Laws

**First Law:** The mass of substance deposited or liberated at an electrode is directly proportional to the quantity of electricity passed.

$$
m = \frac{Q \cdot M}{n \cdot F}
$$

**Second Law:** When the same quantity of electricity is passed through different electrolytes, the masses of substances deposited are proportional to their equivalent masses ($M/n$, where $n$ is the number of electrons transferred per ion).

$$
Q = I \times t
$$

where $Q$ is charge in Coulombs, $I$ is current in Amperes, and $t$ is time in seconds.

$F = 96485\,\mathrm{C/mol}$ (Faraday constant) -- the charge carried by one mole of electrons.

**Worked Example.** Calculate the mass of copper deposited when a current of $2.50\,\mathrm{A}$ is passed through $\mathrm{CuSO}_4$ solution for $30.0$ minutes.

$$
Q = 2.50 \times 30.0 \times 60 = 4500\,\mathrm{C}
$$

$$
n(e^-) = \frac{4500}{96485} = 0.0466\,\mathrm{mol}
$$

$$
\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}
$$

$$
n(\mathrm{Cu}) = \frac{0.0466}{2} = 0.0233\,\mathrm{mol}
$$

$$
m(\mathrm{Cu}) = 0.0233 \times 63.5 = 1.48\,\mathrm{g}
$$

Alternatively, using the formula directly:

$$
m = \frac{Q \cdot M}{n \cdot F} = \frac{4500 \times 63.5}{2 \times 96485} = \frac{285750}{192970} = 1.48\,\mathrm{g}
$$

## Corrosion and Its Prevention

### Rusting of Iron

Rusting is an electrochemical process requiring both water and oxygen:

**Anode (oxidation):** $\mathrm{Fe}(s) \to \mathrm{Fe}^{2+}(aq) + 2e^-$

**Cathode (reduction):** $\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$

The $\mathrm{Fe}^{2+}$ is further oxidised and reacts with $\mathrm{OH}^-$ to form hydrated iron(III) oxide (rust).

### Prevention Methods

| Method | Principle |
|---|---|
| Painting / oiling | Physical barrier to water and oxygen |
| Galvanising (zinc coating) | Zinc acts as a sacrificial anode (more reactive than iron); even if scratched, zinc corrodes preferentially |
| Tin plating | Physical barrier; if scratched, tin accelerates rusting (tin is less reactive than iron) |
| Sacrificial protection | Attaching blocks of a more reactive metal (e.g. $\mathrm{Mg}$, $\mathrm{Zn}$) to the iron structure |
| Alloying (stainless steel) | Chromium forms a protective oxide layer |

## Common Pitfalls

1. **Incorrect sign in the cell EMF formula.** $E^\circ_\mathrm{cell} = E^\circ_\mathrm{cathode} - E^\circ_\mathrm{anode}$. Subtracting in the wrong order gives a negative value.

2. **Confusing oxidation and reduction at the electrodes.** In electrolysis, the anode is positive (oxidation), cathode is negative (reduction). In a galvanic cell, the anode is negative (oxidation), cathode is positive (reduction). The signs are reversed.

3. **Forgetting to halve the Faraday calculation for divalent ions.** For $\mathrm{Cu}^{2+}$, two moles of electrons deposit one mole of copper.

4. **Incorrect half-equations for aqueous electrolysis.** Students often write the anion oxidation instead of water oxidation when the anion is not a halide.

5. **Stating that a reaction "will occur" based only on $E^\circ_\mathrm{cell} \gt 0$.** Thermodynamic feasibility does not guarantee kinetic viability. The reaction may be too slow to observe.

## Practice Problems

<details>
<summary>Problem 1</summary>

Use standard electrode potentials to determine whether $\mathrm{Br}_2$ can oxidise $\mathrm{Fe}^{2+}$ to $\mathrm{Fe}^{3+}$.

Given: $\mathrm{Br}_2 + 2e^- \rightleftharpoons 2\mathrm{Br}^-$ ($E^\circ = +1.07\,\mathrm{V}$), $\mathrm{Fe}^{3+} + e^- \rightleftharpoons \mathrm{Fe}^{2+}$ ($E^\circ = +0.77\,\mathrm{V}$).

**Solution:**

$\mathrm{Br}_2$ would be reduced (cathode), $\mathrm{Fe}^{2+}$ would be oxidised (anode).

$$
E^\circ_\mathrm{cell} = 1.07 - 0.77 = +0.30\,\mathrm{V}
$$

Since $E^\circ_\mathrm{cell} \gt 0$, the reaction is thermodynamically feasible.

</details>

<details>
<summary>Problem 2</summary>

How long must a current of $5.00\,\mathrm{A}$ pass through molten $\mathrm{Al}_2\mathrm{O}_3$ to produce $10.0\,\mathrm{g}$ of aluminium?

**Solution:**

$$
\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}
$$

$$
n(\mathrm{Al}) = \frac{10.0}{27.0} = 0.370\,\mathrm{mol}
$$

$$
n(e^-) = 3 \times 0.370 = 1.111\,\mathrm{mol}
$$

$$
Q = 1.111 \times 96485 = 107,200\,\mathrm{C}
$$

$$
t = \frac{Q}{I} = \frac{107200}{5.00} = 21440\,\mathrm{s} = 357\,\mathrm{minutes} = 5.96\,\mathrm{hours}
$$

</details>
