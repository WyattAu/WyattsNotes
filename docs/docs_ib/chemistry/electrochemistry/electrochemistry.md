---
title: Electrochemistry
date: 2026-04-07T00:00:00.000Z
tags:
  - Chemistry
  - IB
categories:
  - Chemistry
  - IB
slug: electrochemistry
---

## 1. Redox Review (SL Topic 9)

### Oxidation and Reduction

**Definition.** A **redox reaction** is a reaction in which electrons are transferred between
species. Oxidation is the loss of electrons; reduction is the gain of electrons.

Mnemonic: **OIL RIG** -- Oxidation Is Loss, Reduction Is Gain.

**Definition.** An **oxidizing agent** is a species that causes oxidation in another species by
accepting electrons (it is itself reduced). A **reducing agent** is a species that causes reduction
in another species by donating electrons (it is itself oxidized).

### Oxidation States (Oxidation Numbers)

Rules for assigning oxidation states:

1. The oxidation state of an element in its standard state is zero (e.g., $\mathrm{O}_2$, $\mathrm{Fe}$,
   $\mathrm{Cl}_2$).
2. For a monatomic ion, the oxidation state equals the charge (e.g., $\mathrm{Na}^+$ is $+1$,
   $\mathrm{O}^{2-}$ is $-2$).
3. Oxygen is usually $-2$, except in peroxides ($-1$) and with fluorine ($+2$).
4. Hydrogen is usually $+1$, except in metal hydrides where it is $-1$.
5. The sum of oxidation states in a neutral compound is zero; in a polyatomic ion it equals the ion
   charge.
6. Fluorine is always $-1$ in compounds.
7. Group 1 metals are $+1$; Group 2 metals are $+2$ in compounds.

### Identifying Redox Reactions

A reaction is redox if there is a change in oxidation state of any element. To identify:

1. Assign oxidation states to all elements in reactants and products.
2. Identify which elements change oxidation state.
3. The element that increases in oxidation state is oxidized.
4. The element that decreases in oxidation state is reduced.

### Writing Half-Equations

Half-equations separate the oxidation and reduction processes. Steps:

1. Write the skeletal equation for the species involved.
2. Balance all atoms except $\mathrm{O}$ and $\mathrm{H}$.
3. Balance $\mathrm{O}$ by adding $\mathrm{H}_2\mathrm{O}$.
4. Balance $\mathrm{H}$ by adding $\mathrm{H}^+$.
5. Balance charge by adding electrons ($e^-$).

### Balancing Redox in Acidic Conditions

**Example:** Balance $\mathrm{MnO}_4^- + \mathrm{Fe}^{2+} \to \mathrm{Mn}^{2+} + \mathrm{Fe}^{3+}$ in acidic
solution.

Reduction half-reaction:

$$
\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}
$$

Oxidation half-reaction:

$$
\mathrm{Fe}^{2+} \to \mathrm{Fe}^{3+} + e^-
$$

Multiply the oxidation half-reaction by 5 to balance electrons:

$$
5\mathrm{Fe}^{2+} \to 5\mathrm{Fe}^{3+} + 5e^-
$$

Add both half-reactions:

$$
\mathrm{MnO}_4^- + 5\mathrm{Fe}^{2+} + 8\mathrm{H}^+ \to \mathrm{Mn}^{2+} + 5\mathrm{Fe}^{3+} + 4\mathrm{H}_2\mathrm{O}
$$

### Balancing Redox in Basic Conditions

Follow the same steps as acidic conditions, then add $\mathrm{OH}^-$ to both sides to neutralize
$\mathrm{H}^+$:

1. Balance as if in acidic conditions.
2. Add $\mathrm{OH}^-$ to both sides equal to the number of $\mathrm{H}^+$.
3. Combine $\mathrm{H}^+$ and $\mathrm{OH}^-$ to form $\mathrm{H}_2\mathrm{O}$.
4. Cancel any $\mathrm{H}_2\mathrm{O}$ that appears on both sides.

**Example:** Balance $\mathrm{CrO}_4^{2-} + \mathrm{SO}_3^{2-} \to \mathrm{Cr(OH)}_3 + \mathrm{SO}_4^{2-}$
in basic solution.

Step 1 -- Balance in acidic conditions:

$$
\mathrm{CrO}_4^{2-} + 4\mathrm{H}^+ + 3e^- \to \mathrm{Cr(OH)}_3 + \mathrm{H}_2\mathrm{O}
$$

$$
\mathrm{SO}_3^{2-} + \mathrm{H}_2\mathrm{O} \to \mathrm{SO}_4^{2-} + 2\mathrm{H}^+ + 2e^-
$$

Step 2 -- Multiply to balance electrons (LCM of 3 and 2 is 6):

$$
2\mathrm{CrO}_4^{2-} + 8\mathrm{H}^+ + 6e^- \to 2\mathrm{Cr(OH)}_3 + 2\mathrm{H}_2\mathrm{O}
$$

$$
3\mathrm{SO}_3^{2-} + 3\mathrm{H}_2\mathrm{O} \to 3\mathrm{SO}_4^{2-} + 6\mathrm{H}^+ + 6e^-
$$

Step 3 -- Add:

$$
2\mathrm{CrO}_4^{2-} + 3\mathrm{SO}_3^{2-} + 5\mathrm{H}_2\mathrm{O} \to 2\mathrm{Cr(OH)}_3 + 3\mathrm{SO}_4^{2-} + 4\mathrm{H}_2\mathrm{O}
$$

Simplify:

$$
2\mathrm{CrO}_4^{2-} + 3\mathrm{SO}_3^{2-} + \mathrm{H}_2\mathrm{O} \to 2\mathrm{Cr(OH)}_3 + 3\mathrm{SO}_4^{2-}
$$

:::info[IB Exam Tip]

When the question specifies acidic or basic conditions, you MUST show the balanced half-equations
separately before combining them. Showing working is essential for full marks.

:::

---

## 2. Standard Electrode Potentials

### The Standard Hydrogen Electrode (SHE)

**Definition.** The **standard hydrogen electrode** is the reference electrode against which all
other electrode potentials are measured. It consists of:

- A platinum electrode coated with platinum black (fine Pt particles for catalytic surface).
- Hydrogen gas at $100\mathrm{ kPa}$ bubbling over the electrode.
- A solution of $\mathrm{H}^+$(aq) at $1.0\mathrm{ mol/dm}^3$ ($298\mathrm{ K}$).
- Defined potential: $E^\circ = 0.00\mathrm{ V}$.

The half-reaction is:

$$
2\mathrm{H}^+(aq, 1\mathrm{ M}) + 2e^- \rightleftharpoons \mathrm{H}_2(g, 100\mathrm{ kPa}) \quad E^\circ = 0.00\mathrm{ V}
$$

### Standard Conditions

All standard electrode potentials ($E^\circ$) are measured under:

- Temperature: $298\mathrm{ K}$ ($25\degree\mathrm{C}$)
- Pressure: $100\mathrm{ kPa}$ for all gases
- Concentration: $1.0\mathrm{ mol/dm}^3$ for all aqueous species
- Solid elements in their standard states

### Standard Reduction Potentials Table

The electrochemical series ranks species by their tendency to be reduced. Some key values:

| Half-Reaction                                                                                 | $E^\circ$ (V) |
| --------------------------------------------------------------------------------------------- | ------------- |
| $\mathrm{F}_2 + 2e^- \rightleftharpoons 2\mathrm{F}^-$                                            | $+2.87$       |
| $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \rightleftharpoons \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$ | $+1.51$       |
| $\mathrm{Cl}_2 + 2e^- \rightleftharpoons 2\mathrm{Cl}^-$                                          | $+1.36$       |
| $\mathrm{Ag}^+ + e^- \rightleftharpoons \mathrm{Ag}$                                              | $+0.80$       |
| $\mathrm{Cu}^{2+} + 2e^- \rightleftharpoons \mathrm{Cu}$                                          | $+0.34$       |
| $2\mathrm{H}^+ + 2e^- \rightleftharpoons \mathrm{H}_2$                                            | $0.00$        |
| $\mathrm{Fe}^{2+} + 2e^- \rightleftharpoons \mathrm{Fe}$                                          | $-0.44$       |
| $\mathrm{Zn}^{2+} + 2e^- \rightleftharpoons \mathrm{Zn}$                                          | $-0.76$       |
| $\mathrm{Na}^+ + e^- \rightleftharpoons \mathrm{Na}$                                              | $-2.71$       |
| $\mathrm{Li}^+ + e^- \rightleftharpoons \mathrm{Li}$                                              | $-3.04$       |

**Definition.** A more positive $E^\circ$ value indicates a greater tendency for the species to be
reduced (stronger oxidizing agent). A more negative $E^\circ$ indicates a greater tendency for the
species to be oxidized (stronger reducing agent).

### Measuring Standard Electrode Potential

To measure the standard electrode potential of a half-cell, connect it to the SHE and measure the
cell potential using a high-resistance voltmeter (so negligible current flows).

- If the half-cell is the cathode (reduction occurs):
  $E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}} = E^\circ_{\mathrm{half-cell}} - 0.00$
- If the half-cell is the anode (oxidation occurs):
  $E^\circ_{\mathrm{cell}} = 0.00 - E^\circ_{\mathrm{half-cell}}$

### Predicting Spontaneity

For a redox reaction to be spontaneous under standard conditions:

$$
E^\circ_{\mathrm{cell}} \gt 0
$$

This means the reduction half-reaction (cathode) must have a more positive $E^\circ$ than the
oxidation half-reaction (anode).

**Definition.** A spontaneous redox reaction will occur when a species with a more positive
reduction potential is paired with a species with a more negative reduction potential.

:::warning[Common Mistake]

$E^\circ$ values are intensive properties. They are NOT multiplied by stoichiometric coefficients
when calculating $E^\circ_{\mathrm{cell}}$. Do not multiply $E^\circ$ values by the number of
electrons transferred.

:::

---

## 3. Electrochemical Cells (Galvanic/Voltaic Cells)

### Overview

**Definition.** A **galvanic (voltaic) cell** converts chemical energy from spontaneous redox
reactions into electrical energy. Electrons flow from the anode to the cathode through an external
circuit.

### Cell Components

| Component            | Function                                                                                                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Anode**            | Electrode where oxidation occurs. Electrons are released. Negative electrode in galvanic cells.                                                                        |
| **Cathode**          | Electrode where reduction occurs. Electrons are consumed. Positive electrode in galvanic cells.                                                                        |
| **Salt bridge**      | Completes the internal circuit by allowing ion migration. Maintains electrical neutrality. Contains an inert electrolyte (e.g., $\mathrm{KNO}_3$(aq), $\mathrm{KCl}$(aq)). |
| **External circuit** | Wire connecting the two electrodes through which electrons flow.                                                                                                       |
| **Voltmeter**        | Measures the potential difference between the two half-cells.                                                                                                          |

### Salt Bridge

The salt bridge prevents charge buildup in each half-cell. Without it, the cell would quickly stop
functioning as excess charge accumulates. The ions in the salt bridge migrate to neutralize charge:

- Anions ($\mathrm{NO}_3^-$, $\mathrm{Cl}^-$) migrate toward the anode (to balance $\mathrm{M}^{n+}$
  produced).
- Cations ($\mathrm{K}^+$) migrate toward the cathode (to balance the loss of $\mathrm{M}^{n+}$
  consumed).

**Definition.** The salt bridge must contain ions that do not react with the cell components.
$\mathrm{KNO}_3$ is commonly used because $\mathrm{K}^+$ and $\mathrm{NO}_3^-$ are spectator ions for most
systems.

### Cell Diagram Notation (SL)

The IUPAC convention for representing galvanic cells:

$$
\mathrm{Anode} \mid \mathrm{oxidized species} \mid \mathrm{reduced species} \parallel \mathrm{oxidized species} \mid \mathrm{reduced species} \mid \mathrm{Cathode}
$$

Conventions:

- The **anode** (oxidation) is written on the left.
- The **cathode** (reduction) is written on the right.
- A single vertical line $\mid$ represents a phase boundary.
- A double vertical line $\parallel$ represents the salt bridge.
- If there are multiple species in the same phase, they are separated by commas.
- Inert electrodes (e.g., $\mathrm{Pt}$, $\mathrm{C}$) are included when the half-cell does not involve
  a solid metal.

**Example:** $\mathrm{Zn}\mathrm{-Cu}$ Daniell cell:

$$
\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq) \parallel \mathrm{Cu}^{2+}(aq) \mid \mathrm{Cu}(s)
$$

**Example:** $\mathrm{Fe}^{2+}$/$\mathrm{Fe}^{3+}$ with $\mathrm{MnO}_4^-$/ $\mathrm{Mn}^{2+}$:

$$
\mathrm{Pt}(s) \mid \mathrm{Fe}^{2+}(aq),\mathrm{Fe}^{3+}(aq) \parallel \mathrm{MnO}_4^-(aq),\mathrm{H}^+(aq),\mathrm{Mn}^{2+}(aq) \mid \mathrm{Pt}(s)
$$

### Calculating EMF (SL)

The standard cell potential (electromotive force) is:

$$
E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}}
$$

Or equivalently:

$$
E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{reduction}} - E^\circ_{\mathrm{oxidation}}
$$

**Example:** Calculate $E^\circ_{\mathrm{cell}}$ for
$\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq) \parallel \mathrm{Cu}^{2+}(aq) \mid \mathrm{Cu}(s)$:

- Cathode (reduction): $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$, $E^\circ = +0.34\mathrm{ V}$
- Anode (oxidation): $\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^-$, $E^\circ = -0.76\mathrm{ V}$

$$
E^\circ_{\mathrm{cell}} = 0.34 - (-0.76) = +1.10\mathrm{ V}
$$

Since $E^\circ_{\mathrm{cell}} \gt 0$, the reaction is spontaneous.

### Anode/Cathode Sign Convention

In a galvanic cell:

| Feature               | Anode                 | Cathode                |
| --------------------- | --------------------- | ---------------------- |
| Process               | Oxidation             | Reduction              |
| Electron flow         | Electrons leave       | Electrons arrive       |
| Sign in galvanic cell | Negative ($-$)        | Positive ($+$)         |
| Ion migration         | Anions migrate toward | Cations migrate toward |

:::warning[Common Mistake]

Do not confuse the sign of the electrode in galvanic vs. electrolytic cells. In galvanic cells, the
anode is negative. In electrolytic cells, the anode is positive (connected to the positive terminal
of the external power supply).

:::

:::info[IB Exam Tip]

When asked to predict whether a reaction is spontaneous, always:

1. Identify the two relevant half-reactions from the data booklet.
2. Assign cathode (more positive $E^\circ$) and anode (more negative $E^\circ$).
3. Calculate $E^\circ_{\mathrm{cell}}$.
4. If $E^\circ_{\mathrm{cell}} \gt 0$, the reaction is spontaneous.

:::

---

## 4. Electrolytic Cells

### Overview

**Definition.** An **electrolytic cell** uses electrical energy from an external power supply to
drive a non-spontaneous redox reaction. The external source forces electrons to flow in the opposite
direction to what would occur spontaneously.

### Key Differences: Galvanic vs. Electrolytic

| Feature               | Galvanic Cell                               | Electrolytic Cell                               |
| --------------------- | ------------------------------------------- | ----------------------------------------------- |
| Energy conversion     | Chemical to electrical                      | Electrical to chemical                          |
| Spontaneity           | Spontaneous ($E^\circ_{\mathrm{cell}} \gt 0$) | Non-spontaneous ($E^\circ_{\mathrm{cell}} \lt 0$) |
| Anode sign            | Negative                                    | Positive                                        |
| Cathode sign          | Positive                                    | Negative                                        |
| External power supply | Not required                                | Required                                        |
| Salt bridge           | Yes                                         | Not required (single cell)                      |

### Electrolysis of Molten Compounds

When a molten ionic compound is electrolyzed, the cation is reduced at the cathode and the anion is
oxidized at the anode.

**Example:** Electrolysis of molten $\mathrm{NaCl}$:

- Cathode: $\mathrm{Na}^+ + e^- \to \mathrm{Na}(l)$
- Anode: $2\mathrm{Cl}^- \to \mathrm{Cl}_2(g) + 2e^-$
- Overall: $2\mathrm{NaCl}(l) \to 2\mathrm{Na}(l) + \mathrm{Cl}_2(g)$

**Example:** Electrolysis of molten $\mathrm{Al}_2\mathrm{O}_3$:

- Cathode: $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}(l)$
- Anode: $2\mathrm{O}^{2-} \to \mathrm{O}_2(g) + 4e^-$

### Electrolysis of Aqueous Solutions

In aqueous solutions, both the cation and $\mathrm{H}^+$ can be reduced at the cathode. Both the anion
and $\mathrm{H}_2\mathrm{O}$ can be oxidized at the anode. The species that is discharged depends on the
**relative ease of discharge** (electrode potential and overpotential).

#### Discharge at the Cathode (Reduction)

| Cation present                                                               | Species discharged                            | Reason                                                          |
| ---------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| Group 1 ($\mathrm{Li}^+$, $\mathrm{Na}^+$, $\mathrm{K}^+$)                         | $\mathrm{H}_2\mathrm{O}$ (producing $\mathrm{H}_2$) | These cations are very hard to reduce ($E^\circ$ very negative) |
| Group 2 ($\mathrm{Mg}^{2+}$, $\mathrm{Ca}^{2+}$)                                 | $\mathrm{H}_2\mathrm{O}$ (producing $\mathrm{H}_2$) | Still too hard to reduce in aqueous solution                    |
| Transition metals and below ($\mathrm{Cu}^{2+}$, $\mathrm{Ag}^+$, $\mathrm{Au}^+$) | Metal cation                                  | These are easier to reduce than water                           |

The reduction of water at the cathode:

$$
2\mathrm{H}_2\mathrm{O}(l) + 2e^- \to \mathrm{H}_2(g) + 2\mathrm{OH}^-(aq)
$$

#### Discharge at the Anode (Oxidation)

| Anion present                                           | Species discharged                                  | Reason                                              |
| ------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| Halides ($\mathrm{Cl}^-$, $\mathrm{Br}^-$, $\mathrm{I}^-$)    | Halide ion (except with concentrated $\mathrm{Cl}^-$) | Easier to oxidize than water (except $\mathrm{F}^-$)  |
| $\mathrm{SO}_4^{2-}$, $\mathrm{NO}_3^-$, $\mathrm{CO}_3^{2-}$ | $\mathrm{H}_2\mathrm{O}$ (producing $\mathrm{O}_2$)       | These anions are not discharged in aqueous solution |

The oxidation of water at the anode:

$$
4\mathrm{H}_2\mathrm{O}(l) \to \mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^-
$$

**Note on $\mathrm{Cl}^-$ discharge:** In dilute $\mathrm{NaCl}$ solution, water is oxidized
preferentially. In concentrated $\mathrm{NaCl}$ solution, $\mathrm{Cl}^-$ is discharged due to high
concentration and overpotential effects on $\mathrm{O}_2$ evolution.

### Preferential Discharge Summary

**Definition.** **Preferential discharge** is the rule that determines which ion is discharged at an
electrode when multiple species are present. It depends on:

1. The position in the electrochemical series (standard reduction potential).
2. The concentration of ions (higher concentration favours discharge).
3. The nature of the electrode (e.g., carbon vs. mercury).

:::info[IB Exam Tip]

For IB exams, use the simplified rules:

- At the cathode: if the metal is below aluminium in the reactivity series, the metal is deposited;
  otherwise, hydrogen gas is produced.
- At the anode: if halide ions are present (except fluoride), the halogen is produced; otherwise,
  oxygen gas from water oxidation is produced.

:::

---

## 5. Electroplating and Industrial Applications

### Electroplating

**Definition.** **Electroplating** is the process of depositing a thin layer of metal onto the
surface of another object (the cathode) by electrolysis.

The object to be plated is made the cathode. The anode is made of the plating metal. The electrolyte
contains ions of the plating metal.

**Example:** Electroplating silver onto a spoon:

- Cathode (spoon): $\mathrm{Ag}^+(aq) + e^- \to \mathrm{Ag}(s)$
- Anode (silver bar): $\mathrm{Ag}(s) \to \mathrm{Ag}^+(aq) + e^-$
- Electrolyte: $\mathrm{AgNO}_3$(aq) or $\mathrm{K}[\mathrm{Ag(CN)}_2]$(aq)

As silver deposits on the spoon, the silver anode dissolves to maintain the silver ion concentration
in solution.

### Factors Affecting Electroplating Quality

| Factor                  | Effect                                                                       |
| ----------------------- | ---------------------------------------------------------------------------- |
| Current density         | Too high causes rough, brittle deposits; too low causes slow, uneven plating |
| Temperature             | Higher temperature increases ion mobility but may cause uneven deposits      |
| Ion concentration       | Higher concentration generally improves deposit quality                      |
| Electrolyte composition | Adding complexing agents (e.g., cyanide) improves smoothness                 |
| Cathode preparation     | Surface must be clean and free of oxides                                     |

### Electrorefining of Copper

Copper is purified by electrolysis using impure copper as the anode and pure copper as the cathode:

- Anode (impure Cu): $\mathrm{Cu}(s) \to \mathrm{Cu}^{2+}(aq) + 2e^-$
- Cathode (pure Cu): $\mathrm{Cu}^{2+}(aq) + 2e^- \to \mathrm{Cu}(s)$
- Electrolyte: $\mathrm{CuSO}_4$(aq) with dilute $\mathrm{H}_2\mathrm{SO}_4$

Impurities settle as **anode sludge** beneath the anode. This sludge is economically significant
because it contains precious metals (Ag, Au, Pt).

### Aluminum Extraction -- Hall-Heroult Process (HL)

**Definition.** The **Hall-Heroult process** is the industrial method for extracting aluminum from
alumina ($\mathrm{Al}_2\mathrm{O}_3$) by electrolysis. Alumina is dissolved in molten cryolite
($\mathrm{Na}_3\mathrm{AlF}_6$) at approximately $950\degree\mathrm{C}$.

Cryolite is used to:

- Lower the melting point of $\mathrm{Al}_2\mathrm{O}_3$ from $2050\degree\mathrm{C}$ to approximately
  $950\degree\mathrm{C}$.
- Increase the conductivity of the molten mixture.
- Reduce energy costs significantly.

Reactions:

- Cathode (carbon lining): $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}(l)$
- Anode (carbon): $2\mathrm{O}^{2-} + \mathrm{C}(s) \to \mathrm{CO}_2(g) + 4e^-$
- Overall: $2\mathrm{Al}_2\mathrm{O}_3(l) + 3\mathrm{C}(s) \to 4\mathrm{Al}(l) + 3\mathrm{CO}_2(g)$

The carbon anodes are consumed and must be replaced periodically.

### Chlor-Alkali Process (HL)

**Definition.** The **chlor-alkali process** is the electrolysis of concentrated aqueous sodium
chloride to produce chlorine gas, hydrogen gas, and sodium hydroxide.

Using a membrane cell:

- Cathode: $2\mathrm{H}_2\mathrm{O}(l) + 2e^- \to \mathrm{H}_2(g) + 2\mathrm{OH}^-(aq)$
- Anode: $2\mathrm{Cl}^-(aq) \to \mathrm{Cl}_2(g) + 2e^-$
- Overall:
  $2\mathrm{NaCl}(aq) + 2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{Cl}_2(g) + \mathrm{H}_2(g) + 2\mathrm{NaOH}(aq)$

The ion-exchange membrane allows $\mathrm{Na}^+$ to pass but prevents $\mathrm{OH}^-$ from reaching the
anode, which would react with $\mathrm{Cl}_2$ to form hypochlorite.

Comparison of chlor-alkali cell types:

| Feature              | Membrane Cell    | Diaphragm Cell | Mercury Cell        |
| -------------------- | ---------------- | -------------- | ------------------- |
| $\mathrm{NaOH}$ purity | High (up to 50%) | Lower (~11%)   | Very high (50%)     |
| Energy consumption   | Moderate         | Higher         | Highest             |
| Environmental impact | Low              | Moderate       | High (Hg pollution) |
| Current usage        | Primary method   | Declining      | Phased out          |

:::info[IB Exam Tip]

The membrane cell is the preferred method for the chlor-alkali process. Know the half-equations at
each electrode and the purpose of the membrane.

:::

---

## 6. Nernst Equation (HL)

### Derivation from Thermodynamics

The standard Gibbs free energy change relates to the cell potential by:

$$
\Delta G = -nFE_{\mathrm{cell}}
$$

Under non-standard conditions, the Gibbs free energy is given by:

$$
\Delta G = \Delta G^\circ + RT\ln Q
$$

Substituting $\Delta G = -nFE_{\mathrm{cell}}$ and $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$:

$$
-nFE_{\mathrm{cell}} = -nFE^\circ_{\mathrm{cell}} + RT\ln Q
$$

Dividing both sides by $-nF$:

$$
\boxed{E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{RT}{nF}\ln Q}
$$

This is the **Nernst equation**. At $298\mathrm{ K}$, substituting $R = 8.314\mathrm{ J/(mol K)}$,
$F = 96485\mathrm{ C/mol}$, and converting to $\log_{10}$:

$$
E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{0.0592}{n}\log_{10} Q
$$

where:

- $E_{\mathrm{cell}}$ = cell potential under non-standard conditions (V)
- $E^\circ_{\mathrm{cell}}$ = standard cell potential (V)
- $R$ = universal gas constant ($8.314\mathrm{ J/(mol K)}$)
- $T$ = temperature (K)
- $n$ = number of moles of electrons transferred
- $F$ = Faraday constant ($96485\mathrm{ C/mol}$)
- $Q$ = reaction quotient

### The Reaction Quotient $Q$

For the general reaction:

$$
a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}
$$

$$
Q = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}
$$

Solids and pure liquids are omitted from $Q$.

### Effect of Concentration on Cell Potential

From the Nernst equation, increasing the concentration of reactants (or decreasing products)
increases $E_{\mathrm{cell}}$, while decreasing reactant concentration (or increasing products)
decreases $E_{\mathrm{cell}}$.

**Example:** For the cell $\mathrm{Zn} \mid \mathrm{Zn}^{2+} \parallel \mathrm{Cu}^{2+} \mid \mathrm{Cu}$:

$$
Q = \frac{[\mathrm{Zn}^{2+}]}{[\mathrm{Cu}^{2+}]}
$$

If $[\mathrm{Cu}^{2+}]$ increases, $Q$ decreases, and $E_{\mathrm{cell}}$ increases (the reaction is
more spontaneous).

### Equilibrium Connection

At equilibrium, $\Delta G = 0$, so $E_{\mathrm{cell}} = 0$ and $Q = K$ (the equilibrium constant).
Substituting into the Nernst equation:

$$
0 = E^\circ_{\mathrm{cell}} - \frac{RT}{nF}\ln K
$$

$$
E^\circ_{\mathrm{cell}} = \frac{RT}{nF}\ln K = \frac{0.0592}{n}\log_{10} K \quad \mathrm{at } 298\mathrm{ K}
$$

**Definition.** At equilibrium, the cell potential is zero. The standard cell potential directly
determines the equilibrium constant.

:::info[IB Exam Tip]

A useful relationship: a larger positive $E^\circ_{\mathrm{cell}}$ means a larger equilibrium constant
$K$, meaning the reaction proceeds further to completion. For
$E^\circ_{\mathrm{cell}} \gt 0.3\mathrm{ V}$ (approximately), $K \gt 1$, and the reaction can be
considered to go essentially to completion.

:::

### Nernst Equation for Half-Cells

The Nernst equation can be applied to individual half-cells:

$$
E = E^\circ - \frac{0.0592}{n}\log_{10}\frac{[\mathrm{reduced form}]}{[\mathrm{oxidized form}]}
$$

**Example:** For $\mathrm{Fe}^{3+} + e^- \rightleftharpoons \mathrm{Fe}^{2+}$:

$$
E = E^\circ - \frac{0.0592}{1}\log_{10}\frac{[\mathrm{Fe}^{2+}]}{[\mathrm{Fe}^{3+}]}
$$

If $[\mathrm{Fe}^{2+}] \gt [\mathrm{Fe}^{3+}]$, then $E \lt E^\circ$ (less tendency to be reduced).

:::warning[Common Mistake]

When applying the Nernst equation to a half-cell, ensure the reduced form is in the numerator and
the oxidized form is in the denominator. Reversing this will give the wrong answer.

:::

---

## 7. Standard Free Energy and Electrochemistry (HL)

### $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$

**Definition.** The standard Gibbs free energy change of a redox reaction is related to the standard
cell potential by:

$$
\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}
$$

where:

- $\Delta G^\circ$ = standard Gibbs free energy change (J)
- $n$ = number of moles of electrons transferred in the balanced equation
- $F$ = Faraday constant ($96485\mathrm{ C/mol}$)
- $E^\circ_{\mathrm{cell}}$ = standard cell potential (V)

**Units check:** $n$ is dimensionless (mol of $e^-$), $F$ has units of $\mathrm{C/mol}$,
$E^\circ_{\mathrm{cell}}$ has units of $\mathrm{J/C}$ (since $\mathrm{V} = \mathrm{J/C}$). So:

$$
\Delta G^\circ = (\mathrm{mol})(\mathrm{C/mol})(\mathrm{J/C}) = \mathrm{J}
$$

**Example:** For $\mathrm{Zn} \mid \mathrm{Zn}^{2+} \parallel \mathrm{Cu}^{2+} \mid \mathrm{Cu}$ where
$n = 2$ and $E^\circ_{\mathrm{cell}} = 1.10\mathrm{ V}$:

$$
\Delta G^\circ = -2 \times 96485 \times 1.10 = -212\,267\mathrm{ J} = -212\mathrm{ kJ/mol}
$$

The negative value confirms the reaction is spontaneous.

### Relationship to Equilibrium Constant

Combining $\Delta G^\circ = -RT\ln K$ with $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$:

$$
-nFE^\circ_{\mathrm{cell}} = -RT\ln K
$$

$$
\boxed{E^\circ_{\mathrm{cell}} = \frac{RT}{nF}\ln K}
$$

At $298\mathrm{ K}$:

$$
E^\circ_{\mathrm{cell}} = \frac{0.0592}{n}\log_{10} K
$$

Rearranging:

$$
\log_{10} K = \frac{nE^\circ_{\mathrm{cell}}}{0.0592}
$$

**Example:** For the reaction
$\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$:

$$
\log_{10} K = \frac{2 \times 1.10}{0.0592} = 37.2
$$

$$
K = 10^{37.2} = 1.6 \times 10^{37}
$$

This extremely large $K$ confirms the reaction goes essentially to completion.

### Summary of Relationships

| Equation                                                       | What it Gives                                                           |
| -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$                    | Spontaneity ($\Delta G^\circ \lt 0$ when $E^\circ_{\mathrm{cell}} \gt 0$) |
| $E^\circ_{\mathrm{cell}} = \frac{RT}{nF}\ln K$                   | Equilibrium constant from cell potential                                |
| $E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{RT}{nF}\ln Q$ | Cell potential under non-standard conditions                            |
| $\Delta G = -nFE_{\mathrm{cell}}$                                | Gibbs free energy under non-standard conditions                         |

:::warning[Common Mistake]

When using $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$, ensure $n$ is the number of moles of
electrons for the **balanced overall equation**, not per half-reaction. If you write the equation as
$2\mathrm{Ag}^+ + \mathrm{Cu} \to 2\mathrm{Ag} + \mathrm{Cu}^{2+}$, then $n = 2$, not $n = 1$.

:::

---

## 8. Electrolysis Quantitative Problems (HL)

### Faraday's Laws

**Faraday's First Law.** The mass of substance deposited or liberated at an electrode during
electrolysis is directly proportional to the quantity of electricity passed.

$$
m = \frac{Q \cdot M}{n \cdot F}
$$

or equivalently:

$$
m = \frac{It \cdot M}{n \cdot F}
$$

where:

- $m$ = mass of substance deposited or liberated (g)
- $Q$ = total charge passed (C)
- $I$ = current (A)
- $t$ = time (s)
- $M$ = molar mass of the substance (g/mol)
- $n$ = number of electrons transferred per ion
- $F$ = Faraday constant ($96485\mathrm{ C/mol}$)

**Faraday's Second Law.** When the same quantity of electricity is passed through different
electrolytes, the masses of substances deposited are proportional to their equivalent masses
($M/n$).

### Key Constants

$$
F = 96485\mathrm{ C/mol} \approx 96500\mathrm{ C/mol}
$$

One mole of electrons carries a charge of one Faraday.

### Quantitative Examples

**Example 1:** Calculate the mass of copper deposited when a current of $2.50\mathrm{ A}$ is passed
through $\mathrm{CuSO}_4$(aq) for $45.0$ minutes.

$$
Q = It = 2.50 \times 45.0 \times 60 = 6750\mathrm{ C}
$$

$$
n_e = \frac{Q}{F} = \frac{6750}{96500} = 0.06995\mathrm{ mol of } e^-
$$

For $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$, $n = 2$:

$$
n(\mathrm{Cu}) = \frac{n_e}{2} = \frac{0.06995}{2} = 0.03498\mathrm{ mol}
$$

$$
m(\mathrm{Cu}) = 0.03498 \times 63.55 = 2.22\mathrm{ g}
$$

**Example 2:** What current is needed to deposit $5.00\mathrm{ g}$ of aluminum from
$\mathrm{Al}_2\mathrm{O}_3$ in $2.00$ hours?

$$
n(\mathrm{Al}) = \frac{5.00}{26.98} = 0.1853\mathrm{ mol}
$$

For $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}$, $n = 3$:

$$
n_e = 3 \times 0.1853 = 0.5559\mathrm{ mol of } e^-
$$

$$
Q = n_e \times F = 0.5559 \times 96500 = 53\,644\mathrm{ C}
$$

$$
I = \frac{Q}{t} = \frac{53\,644}{2.00 \times 3600} = 7.45\mathrm{ A}
$$

**Example 3:** What volume of $\mathrm{Cl}_2$ gas (at STP) is produced when a current of
$5.00\mathrm{ A}$ is passed through concentrated $\mathrm{NaCl}$ solution for $30.0$ minutes?

$$
Q = It = 5.00 \times 30.0 \times 60 = 9000\mathrm{ C}
$$

$$
n_e = \frac{9000}{96500} = 0.09326\mathrm{ mol of } e^-
$$

For $2\mathrm{Cl}^- \to \mathrm{Cl}_2 + 2e^-$, $n = 2$:

$$
n(\mathrm{Cl}_2) = \frac{0.09326}{2} = 0.04663\mathrm{ mol}
$$

$$
V(\mathrm{Cl}_2) = nRT/P = 0.04663 \times 22.7\mathrm{ dm}^3 = 1.06\mathrm{ dm}^3 \mathrm{ at STP}
$$

:::info[IB Exam Tip]

Always convert time to seconds before calculating charge. Always check whether the question gives
volume conditions (STP, RTP, or specific T and P). The IB data booklet uses
$22.7\mathrm{ dm}^3\mathrm{/mol}$ at STP ($273\mathrm{ K}$, $100\mathrm{ kPa}$) and
$24.0\mathrm{ dm}^3\mathrm{/mol}$ at RTP ($298\mathrm{ K}$, $100\mathrm{ kPa}$).

:::

### Current Efficiency

In practice, not all the current is used for the desired reaction. **Current efficiency** is defined
as:

$$
\mathrm{Current efficiency} = \frac{\mathrm{actual mass deposited}}{\mathrm{theoretical mass deposited}} \times 100\%
$$

Side reactions (e.g., water electrolysis) and impurities reduce current efficiency.

---

## 9. Fuel Cells (HL)

### Overview

**Definition.** A **fuel cell** is an electrochemical cell that converts the chemical energy of a
fuel (typically hydrogen) and an oxidant (typically oxygen) directly into electrical energy. Unlike
batteries, fuel cells consume reactants that must be continuously supplied.

### Hydrogen Fuel Cells (AFC)

In an alkaline fuel cell, the electrolyte is hot concentrated $\mathrm{KOH}$:

- Anode: $2\mathrm{H}_2(g) + 4\mathrm{OH}^-(aq) \to 4\mathrm{H}_2\mathrm{O}(l) + 4e^-$
- Cathode: $\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$
- Overall: $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$

### PEM Fuel Cells (Proton Exchange Membrane)

**Definition.** A **PEM fuel cell** uses a solid polymer membrane (typically Nafion) as the
electrolyte. Protons ($\mathrm{H}^+$) pass through the membrane while electrons flow through the
external circuit.

- Anode: $\mathrm{H}_2(g) \to 2\mathrm{H}^+(aq) + 2e^-$
- Cathode: $\frac{1}{2}\mathrm{O}_2(g) + 2\mathrm{H}^+(aq) + 2e^- \to \mathrm{H}_2\mathrm{O}(l)$
- Overall: $\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$

The PEM allows only $\mathrm{H}^+$ ions to pass. Both electrodes contain a platinum catalyst.

### Comparison of Fuel Cell Types

| Feature        | Alkaline Fuel Cell (AFC)         | PEM Fuel Cell                  |
| -------------- | -------------------------------- | ------------------------------ |
| Electrolyte    | Concentrated $\mathrm{KOH}$        | Solid polymer membrane         |
| Operating temp | $100\mathrm{-}250\degree\mathrm{C}$  | $50\mathrm{-}100\degree\mathrm{C}$ |
| Mobile ion     | $\mathrm{OH}^-$                    | $\mathrm{H}^+$                   |
| Catalyst       | Platinum or nickel               | Platinum                       |
| Efficiency     | ~60%                             | ~40-50%                        |
| Applications   | Space missions (Apollo, Shuttle) | Vehicles, portable power       |

### Thermodynamic Efficiency

The theoretical maximum efficiency of a fuel cell is:

$$
\mathrm{Efficiency} = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\%
$$

For the hydrogen fuel cell:

$$
\Delta G^\circ = -237\mathrm{ kJ/mol}, \quad \Delta H^\circ = -286\mathrm{ kJ/mol}
$$

$$
\mathrm{Maximum efficiency} = \frac{237}{286} \times 100\% = 83\%
$$

Actual operating efficiencies are lower due to activation overpotential, ohmic losses, and mass
transport limitations, typically $40\mathrm{-}60\%$.

### Advantages and Disadvantages of Fuel Cells

| Advantages                                                     | Disadvantages                                    |
| -------------------------------------------------------------- | ------------------------------------------------ |
| High efficiency compared to combustion engines                 | Hydrogen storage and transport challenges        |
| No direct greenhouse gas emissions (only $\mathrm{H}_2\mathrm{O}$) | Hydrogen production often relies on fossil fuels |
| Quiet operation                                                | Platinum catalysts are expensive                 |
| Continuous operation with fuel supply                          | Limited infrastructure for hydrogen refuelling   |
| Scalable design                                                | Water management in PEM cells                    |

:::info[IB Exam Tip]

When comparing fuel cells to combustion engines, emphasize that fuel cells are more efficient
because they are not limited by the Carnot cycle. Also, note that the overall reaction is the same
as combustion of hydrogen, but the energy conversion pathway is different.

:::

---

## 10. Corrosion

### Rusting Mechanism

**Definition.** **Corrosion** is the deterioration of a metal by an electrochemical reaction with
its environment. The rusting of iron is the most common form of corrosion.

Rusting requires:

1. Iron (or steel) in contact with both water and oxygen.
2. An electrolyte (water with dissolved ions accelerates the process).

#### Mechanism

Rusting is an electrochemical process involving two half-reactions:

**Anode region** (oxidation of iron):

$$
\mathrm{Fe}(s) \to \mathrm{Fe}^{2+}(aq) + 2e^-
$$

**Cathode region** (reduction of oxygen):

$$
\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)
$$

The $\mathrm{Fe}^{2+}$ ions then react with $\mathrm{OH}^-$ and oxygen to form rust:

$$
4\mathrm{Fe}^{2+}(aq) + \mathrm{O}_2(g) + 4\mathrm{OH}^-(aq) + 2\mathrm{H}_2\mathrm{O}(l) \to 4\mathrm{Fe(OH)}_3(s)
$$

$\mathrm{Fe(OH)}_3$ dehydrates to form $\mathrm{Fe}_2\mathrm{O}_3 \cdot n\mathrm{H}_2\mathrm{O}$ (rust), which
is a flaky, porous solid that does not protect the underlying metal.

### Factors Affecting Corrosion Rate

| Factor                          | Effect on Corrosion                                              |
| ------------------------------- | ---------------------------------------------------------------- |
| Presence of water and oxygen    | Both required for rusting                                        |
| Dissolved salts (electrolytes)  | Accelerate corrosion by improving conductivity                   |
| Acids (low pH)                  | Accelerate corrosion (more $\mathrm{H}^+$ available for reduction) |
| Temperature                     | Higher temperature generally accelerates corrosion               |
| Contact with less active metals | Iron acts as anode and corrodes faster                           |
| Contact with more active metals | Iron acts as cathode and is protected (galvanic protection)      |
| Stress in metal                 | Stressed regions are more anodic and corrode faster              |

### Prevention Methods

#### 1. Barrier Coatings

Paint, oil, grease, plastic, or enamel coatings prevent contact between the iron surface and
water/oxygen. This is effective only as long as the coating remains intact. If scratched, rusting
occurs at the defect.

#### 2. Galvanizing

**Definition.** **Galvanizing** is the process of coating iron or steel with a layer of zinc. Zinc
serves two purposes:

1. **Barrier protection:** Zinc coating prevents water and oxygen from reaching the iron.
2. **Sacrificial protection:** If the coating is scratched, zinc acts as the anode (more reactive
   than iron, $E^\circ = -0.76\mathrm{ V}$ vs. $E^\circ = -0.44\mathrm{ V}$) and is preferentially
   oxidized, protecting the iron.

$$
\mathrm{Zn}(s) \to \mathrm{Zn}^{2+}(aq) + 2e^- \quad (\mathrm{zinc oxidized, iron protected})
$$

#### 3. Sacrificial Anodes (Cathodic Protection)

**Definition.** **Sacrificial anodes** are blocks of a more reactive metal (usually zinc, magnesium,
or aluminum) attached to the iron structure. The more reactive metal acts as the anode and corrodes
instead of the iron.

Applications: ship hulls, underground pipelines, water heaters, offshore oil platforms.

#### 4. Alloying

Stainless steel contains chromium (minimum 10.5%) which forms a thin, adherent layer of
chromium(III) oxide ($\mathrm{Cr}_2\mathrm{O}_3$) on the surface. This oxide layer is self-healing and
prevents further corrosion.

#### 5. Cathodic Protection (Impressed Current)

An external DC power supply forces the iron to be the cathode. Electrons are pumped onto the iron
surface, preventing its oxidation. Used for large structures like pipelines and storage tanks.

### Comparison of Protection Methods

| Method                     | Mechanism             | Advantages                     | Limitations                                  |
| -------------------------- | --------------------- | ------------------------------ | -------------------------------------------- |
| Barrier coating            | Physical barrier      | Simple, inexpensive            | Fails if scratched                           |
| Galvanizing                | Barrier + sacrificial | Self-healing, long-lasting     | Limited to zinc-coated items                 |
| Sacrificial anodes         | Galvanic protection   | Replaceable, effective         | Anodes must be periodically replaced         |
| Alloying (stainless steel) | Passive oxide layer   | Very durable                   | Expensive, not suitable for all applications |
| Impressed current          | Forced cathode        | Effective for large structures | Requires continuous power supply             |

:::info[IB Exam Tip]

When explaining why zinc protects iron in galvanizing, reference the electrochemical series: zinc
has a more negative $E^\circ$ than iron, so zinc is preferentially oxidized. This is the same
principle as sacrificial anodes.

:::

---

## 11. HL-Only Extensions

### Concentration Cells

**Definition.** A **concentration cell** is an electrochemical cell where both half-cells contain
the same species but at different concentrations. The cell potential arises solely from the
concentration difference.

**Example:**
$\mathrm{Cu}(s) \mid \mathrm{Cu}^{2+}(0.10\mathrm{ M}) \parallel \mathrm{Cu}^{2+}(1.0\mathrm{ M}) \mid \mathrm{Cu}(s)$

Since $E^\circ_{\mathrm{cell}} = 0$ (same half-reaction), the potential comes from the Nernst
equation:

$$
E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{0.0592}{n}\log_{10}\frac{[\mathrm{Cu}^{2+}]_{\mathrm{anode}}}{[\mathrm{Cu}^{2+}]_{\mathrm{cathode}}}
$$

$$
E_{\mathrm{cell}} = 0 - \frac{0.0592}{2}\log_{10}\frac{0.10}{1.0} = -\frac{0.0592}{2} \times (-1) = +0.0296\mathrm{ V}
$$

The half-cell with the lower concentration undergoes oxidation (anode), and the half-cell with the
higher concentration undergoes reduction (cathode). The cell operates until the concentrations
equalize.

### Lead-Acid Batteries

**Definition.** A **lead-acid battery** is a rechargeable battery commonly used in automobiles. It
consists of lead dioxide ($\mathrm{PbO}_2$) as the cathode, lead ($\mathrm{Pb}$) as the anode, and
sulfuric acid ($\mathrm{H}_2\mathrm{SO}_4$) as the electrolyte.

**Discharging:**

- Anode (oxidation): $\mathrm{Pb}(s) + \mathrm{SO}_4^{2-}(aq) \to \mathrm{PbSO}_4(s) + 2e^-$
- Cathode (reduction):
  $\mathrm{PbO}_2(s) + \mathrm{SO}_4^{2-}(aq) + 4\mathrm{H}^+(aq) + 2e^- \to \mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$
- Overall:
  $\mathrm{Pb}(s) + \mathrm{PbO}_2(s) + 2\mathrm{H}_2\mathrm{SO}_4(aq) \to 2\mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$

**Charging (reverse reaction):**

$$
2\mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{Pb}(s) + \mathrm{PbO}_2(s) + 2\mathrm{H}_2\mathrm{SO}_4(aq)
$$

The state of charge can be determined by measuring the density of the electrolyte. As the battery
discharges, $\mathrm{H}_2\mathrm{SO}_4$ is consumed and $\mathrm{H}_2\mathrm{O}$ is produced, decreasing the
electrolyte density.

| Parameter                             | Fully Charged  | Discharged     |
| ------------------------------------- | -------------- | -------------- |
| Electrolyte density                   | ~1.28 g/cm$^3$ | ~1.10 g/cm$^3$ |
| Cell voltage                          | ~2.1 V         | ~1.8 V         |
| $\mathrm{H}_2\mathrm{SO}_4$ concentration | High           | Low            |

### Lithium-Ion Batteries

**Definition.** A **lithium-ion battery** is a rechargeable battery where lithium ions move between
the anode and cathode during charging and discharging. The electrodes are intercalation materials --
lithium ions are inserted into and extracted from layered crystal structures.

**Discharging:**

- Anode (oxidation): $\mathrm{LiC}_6(s) \to \mathrm{C}_6(s) + \mathrm{Li}^+ + e^-$
- Cathode (reduction): $\mathrm{CoO}_2(s) + \mathrm{Li}^+ + e^- \to \mathrm{LiCoO}_2(s)$
- Overall: $\mathrm{LiC}_6(s) + \mathrm{CoO}_2(s) \to \mathrm{C}_6(s) + \mathrm{LiCoO}_2(s)$

**Charging:** The reverse of the above reactions.

Key features:

- The electrolyte is a non-aqueous lithium salt (e.g., $\mathrm{LiPF}_6$ in organic solvent) -- water
  cannot be used because lithium reacts violently with it.
- Typical cell voltage: ~3.7 V (much higher than lead-acid).
- High energy density: suitable for portable electronics and electric vehicles.
- Memory effect is negligible.
- Degradation occurs over time due to electrolyte decomposition and electrode material degradation.

| Feature             | Lead-Acid      | Lithium-Ion          |
| ------------------- | -------------- | -------------------- |
| Cell voltage        | 2.0 V          | 3.7 V                |
| Energy density      | 30-40 Wh/kg    | 150-250 Wh/kg        |
| Cycle life          | 200-300 cycles | 500-1000+ cycles     |
| Self-discharge rate | ~5% per month  | ~1-3% per month      |
| Toxicity            | Lead is toxic  | Less toxic materials |
| Cost                | Lower          | Higher               |
| Weight              | Heavy          | Lightweight          |

:::info[IB Exam Tip]

Know the half-reactions for the lead-acid battery. The key insight is that during discharge, both
electrodes are converted to $\mathrm{PbSO}_4$, and during charging, the reaction is reversed. This
reversibility is what makes the battery rechargeable.

:::

---

## 12. Exam Practice

### Question 1 (SL, 4 marks)

Consider the following standard reduction potentials:

| Half-Reaction                                        | $E^\circ$ (V) |
| ---------------------------------------------------- | ------------- |
| $\mathrm{Mg}^{2+} + 2e^- \rightleftharpoons \mathrm{Mg}$ | $-2.37$       |
| $\mathrm{Ag}^+ + e^- \rightleftharpoons \mathrm{Ag}$     | $+0.80$       |

**(a)** Write the cell diagram notation for a galvanic cell constructed from these two half-cells.
(1 mark)

**(b)** Calculate the standard cell potential. (1 mark)

**(c)** Identify the oxidizing agent and the reducing agent. (2 marks)

#### Markscheme

**(a)** $\mathrm{Mg}(s) \mid \mathrm{Mg}^{2+}(aq) \parallel \mathrm{Ag}^+(aq) \mid \mathrm{Ag}(s)$

The anode (oxidation) is $\mathrm{Mg}$ (more negative $E^\circ$), placed on the left. The cathode
(reduction) is $\mathrm{Ag}$ (more positive $E^\circ$), placed on the right. Accept any reasonable
state symbols.

**(b)**
$E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}} = 0.80 - (-2.37) = +3.17\mathrm{ V}$

**(c)** The oxidizing agent is $\mathrm{Ag}^+$ (it is reduced, gaining electrons). The reducing agent
is $\mathrm{Mg}$ (it is oxidized, losing electrons).

---

### Question 2 (SL, 5 marks)

An aqueous solution of copper(II) sulfate is electrolyzed using inert graphite electrodes.

**(a)** Write the half-equation for the reaction at the cathode. (1 mark)

**(b)** Write the half-equation for the reaction at the anode. (1 mark)

**(c)** State the observation at each electrode. (2 marks)

**(d)** Calculate the volume of gas produced at the anode when a current of $0.500\mathrm{ A}$ is
passed for $30.0$ minutes at RTP. (3 marks)

#### Markscheme

**(a)** $\mathrm{Cu}^{2+}(aq) + 2e^- \to \mathrm{Cu}(s)$

Copper is below aluminium in the reactivity series, so $\mathrm{Cu}^{2+}$ is preferentially discharged
over $\mathrm{H}_2\mathrm{O}$.

**(b)** $2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^-$

The sulfate ion is not discharged; water is oxidized instead.

**(c)** Cathode: orange/brown solid (copper metal) deposits on the electrode. Anode: colourless gas
bubbles (oxygen) are evolved.

**(d)** $Q = It = 0.500 \times 30.0 \times 60 = 900\mathrm{ C}$

$n_e = 900 / 96500 = 0.00933\mathrm{ mol of } e^-$

$n(\mathrm{O}_2) = 0.00933 / 4 = 0.00233\mathrm{ mol}$

$V(\mathrm{O}_2) = 0.00233 \times 24.0 = 0.0560\mathrm{ dm}^3$

---

### Question 3 (HL, 6 marks)

A galvanic cell is constructed as follows:

$$
\mathrm{Ni}(s) \mid \mathrm{Ni}^{2+}(0.010\mathrm{ M}) \parallel \mathrm{Ag}^+(1.0\mathrm{ M}) \mid \mathrm{Ag}(s)
$$

Given: $E^\circ(\mathrm{Ni}^{2+}/\mathrm{Ni}) = -0.25\mathrm{ V}$,
$E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\mathrm{ V}$

**(a)** Calculate $E^\circ_{\mathrm{cell}}$. (1 mark)

**(b)** Calculate the cell potential under the given non-standard conditions at $298\mathrm{ K}$. (3
marks)

**(c)** Calculate $\Delta G^\circ$ for the cell reaction. (2 marks)

#### Markscheme

**(a)** $E^\circ_{\mathrm{cell}} = 0.80 - (-0.25) = +1.05\mathrm{ V}$

**(b)** Overall reaction: $\mathrm{Ni}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Ni}^{2+}(aq) + 2\mathrm{Ag}(s)$,
$n = 2$

$$
Q = \frac{[\mathrm{Ni}^{2+}]}{[\mathrm{Ag}^+]^2} = \frac{0.010}{(1.0)^2} = 0.010
$$

$$
E_{\mathrm{cell}} = 1.05 - \frac{0.0592}{2}\log_{10}(0.010) = 1.05 - \frac{0.0592}{2} \times (-2) = 1.05 + 0.0592 = 1.109\mathrm{ V}
$$

**(c)**
$\Delta G^\circ = -nFE^\circ_{\mathrm{cell}} = -2 \times 96500 \times 1.05 = -202\,650\mathrm{ J} = -203\mathrm{ kJ/mol}$

---

### Question 4 (HL, 4 marks)

**Balance the following redox equation in acidic solution:**

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + \mathrm{H}^+ + \mathrm{I}^- \to \mathrm{Cr}^{3+} + \mathrm{I}_2 + \mathrm{H}_2\mathrm{O}
$$

#### Markscheme

Reduction half-reaction:

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 6e^- \to 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O}
$$

Oxidation half-reaction:

$$
2\mathrm{I}^- \to \mathrm{I}_2 + 2e^-
$$

Multiply oxidation by 3:

$$
6\mathrm{I}^- \to 3\mathrm{I}_2 + 6e^-
$$

Add both half-reactions:

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 6\mathrm{I}^- \to 2\mathrm{Cr}^{3+} + 3\mathrm{I}_2 + 7\mathrm{H}_2\mathrm{O}
$$

---

### Question 5 (HL, 5 marks)

A hydrogen-oxygen fuel cell operates at $298\mathrm{ K}$. The overall reaction is:

$$
\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)
$$

$\Delta H^\circ = -286\mathrm{ kJ/mol}$, $\Delta G^\circ = -237\mathrm{ kJ/mol}$

**(a)** Calculate the standard cell potential. (2 marks)

**(b)** Calculate the maximum theoretical efficiency of the fuel cell. (1 mark)

**(c)** Explain why the actual efficiency is lower than the theoretical maximum. (2 marks)

#### Markscheme

**(a)** $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$

From the half-reactions, $n = 2$ (for the equation $\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}$
with $n = 4$, but per mole of $\mathrm{H}_2$ as written, $n = 2$).

$E^\circ_{\mathrm{cell}} = \frac{-\Delta G^\circ}{nF} = \frac{237\,000}{2 \times 96500} = +1.23\mathrm{ V}$

**(b)**
$\mathrm{Efficiency} = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\% = \frac{237}{286} \times 100\% = 82.9\%$

**(c)** Actual efficiency is lower due to:

- Activation overpotential (energy required to initiate reactions at the electrode surface).
- Ohmic losses (resistance of the electrolyte and electrodes).
- Mass transport limitations (slow diffusion of reactants to the electrodes).
- Heat losses to the surroundings.

---

### Question 6 (SL/HL, 4 marks)

A piece of iron piping is connected to a block of magnesium using a conducting wire. Both are buried
in moist soil.

**(a)** Identify which metal acts as the anode and which acts as the cathode. (1 mark)

**(b)** Write the half-equation for the reaction at the anode. (1 mark)

**(c)** Explain why this arrangement protects the iron from corrosion. (2 marks)

#### Markscheme

**(a)** Magnesium is the anode; iron is the cathode. Magnesium has a more negative $E^\circ$
($-2.37\mathrm{ V}$) compared to iron ($-0.44\mathrm{ V}$).

**(b)** $\mathrm{Mg}(s) \to \mathrm{Mg}^{2+}(aq) + 2e^-$

**(c)** Since magnesium is more reactive than iron, it is preferentially oxidized (corrodes instead
of iron). Electrons flow from magnesium to iron, making the iron surface electron-rich and
preventing the oxidation of iron. This is called sacrificial (cathodic) protection. The magnesium
block must be replaced periodically as it is consumed.

---

### Question 7 (HL, 4 marks)

The standard cell potential for the reaction
$\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$ is $+1.10\mathrm{ V}$.

**(a)** Calculate the equilibrium constant $K$ at $298\mathrm{ K}$. (3 marks)

**(b)** Comment on the feasibility of the reverse reaction under standard conditions. (1 mark)

#### Markscheme

**(a)** $\log_{10} K = \frac{nE^\circ_{\mathrm{cell}}}{0.0592} = \frac{2 \times 1.10}{0.0592} = 37.16$

$K = 10^{37.16} = 1.4 \times 10^{37}$

**(b)** Since $K$ is extremely large, the forward reaction is essentially irreversible under
standard conditions. The reverse reaction is not feasible
($K_{\mathrm{reverse}} = 1/K = 7.1 \times 10^{-38}$), meaning the equilibrium lies overwhelmingly
toward the products.

---

## Summary of Key Equations

| Equation                                                                    | Application                              |
| --------------------------------------------------------------------------- | ---------------------------------------- |
| $E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}}$ | Calculating standard cell potential      |
| $E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{0.0592}{n}\log_{10} Q$     | Nernst equation at $298\mathrm{ K}$        |
| $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$                                 | Free energy from cell potential          |
| $E^\circ_{\mathrm{cell}} = \frac{0.0592}{n}\log_{10} K$                       | Equilibrium constant from cell potential |
| $m = \frac{ItM}{nF}$                                                        | Faraday's law (mass deposited)           |
| $\mathrm{Efficiency} = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\%$    | Fuel cell theoretical efficiency         |
| $E^\circ_{\mathrm{cell}} = \frac{\Delta G^\circ}{-nF} = \frac{RT}{nF}\ln K$   | Thermodynamic relationships              |
