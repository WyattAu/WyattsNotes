---
title: Atomic Structure and Periodicity
date: 2026-04-07T00:00:00.000Z
tags:
  - Chemistry
  - IB
categories:
  - Chemistry
  - IB
slug: atomic-structure-and-periodicity
---

## 1. Atomic Structure

### Subatomic Particles

Atoms consist of three subatomic particles. Their properties define the behaviour of every element:

| Property        | Proton    | Neutron   | Electron         |
| --------------- | --------- | --------- | ---------------- |
| Symbol          | $p^+$     | $n^0$     | $e^-$            |
| Relative mass   | $1$       | $1$       | $\approx 1/1836$ |
| Actual mass (u) | $1.00728$ | $1.00867$ | $0.00055$        |
| Charge          | $+1$      | $0$       | $-1$             |
| Location        | Nucleus   | Nucleus   | Electron shells  |

**Definition.** The **atomic number** ($Z$) is the number of protons in the nucleus. It uniquely
identifies an element.

**Definition.** The **mass number** ($A$) is the total number of protons and neutrons in the
nucleus:

$$
A = Z + N
$$

where $N$ is the neutron number.

**Definition.** A **nuclide** is a specific atom characterised by its atomic number, mass number,
and energy state, denoted as $\prescript{A}{}{Z}\mathrm{X}$.

### Isotopes

**Definition.** **Isotopes** are atoms of the same element (same $Z$) with different numbers of
neutrons (different $A$).

Isotopes have identical chemical properties (same electron configuration) but different physical
properties (different mass, different nuclear stability).

| Element  | Isotope                | $Z$  | $A$  | $N$  | Natural Abundance   |
| -------- | ---------------------- | ---- | ---- | ---- | ------------------- |
| Hydrogen | $\mathrm{H}$ (protium)   | $1$  | $1$  | $0$  | $99.985\%$          |
| Hydrogen | $\mathrm{D}$ (deuterium) | $1$  | $2$  | $1$  | $0.015\%$           |
| Hydrogen | $\mathrm{T}$ (tritium)   | $1$  | $3$  | $2$  | Trace (radioactive) |
| Carbon   | $\mathrm{C}$-12          | $6$  | $12$ | $6$  | $98.89\%$           |
| Carbon   | $\mathrm{C}$-13          | $6$  | $13$ | $7$  | $1.11\%$            |
| Carbon   | $\mathrm{C}$-14          | $6$  | $14$ | $8$  | Trace (radioactive) |
| Chlorine | $\mathrm{Cl}$-35         | $17$ | $35$ | $18$ | $75.77\%$           |
| Chlorine | $\mathrm{Cl}$-37         | $17$ | $37$ | $20$ | $24.23\%$           |

### Relative Atomic Mass

**Definition.** The **relative atomic mass** ($A_r$) is the weighted average mass of an atom of an
element relative to $1/12$ the mass of a carbon-12 atom, taking into account the natural abundances
of all isotopes.

$$
A_r = \sum_{i} (\mathrm{isotope mass})_i \times (\mathrm{fractional abundance})_i
$$

:::info[Example — Chlorine]

Chlorine has two naturally occurring isotopes: $\mathrm{Cl}$-35 ($75.77\%$, mass
$\approx 34.97\mathrm{ u}$) and $\mathrm{Cl}$-37 ($24.23\%$, mass $\approx 36.97\mathrm{ u}$).

$$
A_r = (34.97 \times 0.7577) + (36.97 \times 0.2423) = 26.50 + 8.96 = 35.46
$$

:::

### The Nucleus

The nucleus is extremely small relative to the atom ($\approx 10^{-15}\mathrm{ m}$ diameter vs
$\approx 10^{-10}\mathrm{ m}$ for the atom). It contains over $99.9\%$ of the atom's mass. Nuclear
stability depends on the neutron-to-proton ratio:

- Light elements ($Z \lt 20$): stable when $N \approx Z$
- Heavier elements: stable when $N \gt Z$ (neutrons provide additional strong nuclear force to
  counteract electrostatic repulsion between protons)

---

## 2. Quantum Model of the Atom

### Evidence for Quantisation

The classical Rutherford-Bohr model failed to explain several observations:

1. Discrete emission line spectra (not continuous)
2. The stability of atoms (classically, orbiting electrons should radiate energy and spiral in)
3. The photoelectric effect

These required a quantum mechanical treatment where electron energy is quantised.

### Electron Shells and Subshells

Electrons occupy shells (principal energy levels) labelled $n = 1, 2, 3, \ldots$

Each shell contains subshells, designated by the azimuthal quantum number $l$:

| $n$ | Subshells ($l$ values) | Maximum electrons |
| --- | ---------------------- | ----------------- |
| $1$ | $1s$                   | $2$               |
| $2$ | $2s$, $2p$             | $8$               |
| $3$ | $3s$, $3p$, $3d$       | $18$              |
| $4$ | $4s$, $4p$, $4d$, $4f$ | $32$              |

The maximum number of electrons in shell $n$ is $2n^2$.

### Orbitals

**Definition.** An **orbital** is a region of space where there is a high probability ($\ge 90\%$)
of finding an electron. Each orbital holds a maximum of two electrons with opposite spins.

| Subshell | Number of orbitals | Max electrons | Orbital shape         |
| -------- | ------------------ | ------------- | --------------------- |
| $s$      | $1$                | $2$           | Spherical             |
| $p$      | $3$                | $6$           | Dumbbell              |
| $d$      | $5$                | $10$          | Cloverleaf            |
| $f$      | $7$                | $14$          | Complex (multi-lobed) |

### Quantum Numbers

Each electron in an atom is described by four quantum numbers:

| Quantum Number | Symbol | What it specifies            | Allowed values                        |
| -------------- | ------ | ---------------------------- | ------------------------------------- |
| Principal      | $n$    | Energy level (shell)         | $1, 2, 3, \ldots$                     |
| Azimuthal      | $l$    | Subshell shape               | $0, 1, 2, \ldots, n-1$                |
| Magnetic       | $m_l$  | Orbital orientation in space | $-l, -l+1, \ldots, 0, \ldots, l-1, l$ |
| Spin           | $m_s$  | Electron spin direction      | $+\frac{1}{2}$ or $-\frac{1}{2}$      |

The number of orbitals in a subshell is $2l + 1$.

:::info[Example — Quantum numbers for a $3p$ electron]

For the $3p$ subshell: $n = 3$, $l = 1$, $m_l = -1, 0, +1$, $m_s = \pm\frac{1}{2}$

This gives three $p$-orbitals ($p_x$, $p_y$, $p_z$), each holding two electrons, for a total of six
$3p$ electrons.

:::

### Electron Configuration Principles

Three rules govern how electrons fill orbitals:

1. **Aufbau principle**: Electrons fill orbitals starting from the lowest energy level upwards.
2. **Pauli exclusion principle**: No two electrons in the same atom can have identical sets of four
   quantum numbers. Each orbital holds a maximum of two electrons with opposite spins.
3. **Hund's rule**: Within a subshell, electrons occupy degenerate orbitals singly first, with
   parallel spins, before pairing up.

### Filling Order

The filling order follows the $(n + l)$ rule: orbitals with a lower $(n + l)$ value fill first. When
$(n + l)$ values are equal, the orbital with lower $n$ fills first.

$$
1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p \lt 7s \lt 5f \lt 6d \lt 7p
$$

### Writing Electron Configurations

**Full notation** — write every subshell explicitly:

$$
\mathrm{Fe}: 1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^6
$$

**Noble gas core notation** — replace the inner-shell electrons with the preceding noble gas symbol
in brackets:

$$
\mathrm{Fe}: [\mathrm{Ar}]\, 4s^2\, 3d^6
$$

:::warning

Always write subshells in order of increasing $n$ first, then $l$ (i.e., $4s^2\, 3d^6$, not
$3d^6\, 4s^2$). When writing configurations for ions, remove electrons from the highest $n$ value
first: $\mathrm{Fe}^{2+}$ is $[\mathrm{Ar}]\, 3d^6$, not $[\mathrm{Ar}]\, 4s^2\, 3d^4$.

:::

### Exceptions to the Aufbau Principle

Half-filled and fully-filled $d$-subshells are more stable due to symmetry and exchange energy. This
causes exceptions in chromium, copper, molybdenum, silver, and gold:

| Element     | Expected configuration                | Actual configuration                     | Reason                    |
| ----------- | ------------------------------------- | ---------------------------------------- | ------------------------- |
| $\mathrm{Cr}$ | $[\mathrm{Ar}]\, 4s^2\, 3d^4$           | $[\mathrm{Ar}]\, 4s^1\, 3d^5$              | Half-filled $d$-subshell  |
| $\mathrm{Cu}$ | $[\mathrm{Ar}]\, 4s^2\, 3d^9$           | $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$           | Fully-filled $d$-subshell |
| $\mathrm{Mo}$ | $[\mathrm{Kr}]\, 5s^2\, 4d^4$           | $[\mathrm{Kr}]\, 5s^1\, 4d^5$              | Half-filled $d$-subshell  |
| $\mathrm{Ag}$ | $[\mathrm{Kr}]\, 5s^2\, 4d^9$           | $[\mathrm{Kr}]\, 5s^1\, 4d^{10}$           | Fully-filled $d$-subshell |
| $\mathrm{Au}$ | $[\mathrm{Xe}]\, 6s^2\, 4f^{14}\, 5d^9$ | $[\mathrm{Xe}]\, 6s^1\, 4f^{14}\, 5d^{10}$ | Fully-filled $d$-subshell |

### Orbital Diagrams

Orbital diagrams represent electrons as arrows in boxes (one box per orbital). Up and down arrows
represent $m_s = +\frac{1}{2}$ and $m_s = -\frac{1}{2}$.

For nitrogen ($1s^2\, 2s^2\, 2p^3$):

$$
\begin{array}{c}
1s\quad \boxed{\uparrow\downarrow} \\
2s\quad \boxed{\uparrow\downarrow} \\
2p\quad \boxed{\uparrow}\quad\boxed{\uparrow}\quad\boxed{\uparrow}
\end{array}
$$

All three $2p$ electrons are unpaired with parallel spins, following Hund's rule.

---

## 3. The Periodic Table

### Structure

The periodic table arranges elements in order of increasing atomic number. The layout reflects the
electron configurations of the elements.

| Feature | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| Periods | Horizontal rows; number = principal quantum number $n$ of the valence shell |
| Groups  | Vertical columns; elements share similar valence electron configurations    |
| Blocks  | Regions corresponding to the subshell being filled                          |

### Block Structure

| Block | Subshell being filled       | Groups                | Examples                  |
| ----- | --------------------------- | --------------------- | ------------------------- |
| $s$   | $ns^1$ to $ns^2$            | $1$, $2$              | H, He, Li, Na, Mg, Ca     |
| $p$   | $np^1$ to $np^6$            | $13$--$18$            | B, C, N, O, F, Ne, Cl, Ar |
| $d$   | $(n-1)d^1$ to $(n-1)d^{10}$ | $3$--$12$             | Sc, Ti, Fe, Cu, Zn        |
| $f$   | $(n-2)f^1$ to $(n-2)f^{14}$ | Lanthanides/Actinides | Ce, Th, U                 |

### Group Numbering

The IB uses IUPAC group numbers $1$--$18$:

| IUPAC Group | Common Name           | Valence electrons                 |
| ----------- | --------------------- | --------------------------------- |
| $1$         | Alkali metals         | $ns^1$                            |
| $2$         | Alkaline earth metals | $ns^2$                            |
| $13$        | Boron group           | $ns^2\, np^1$                     |
| $14$        | Carbon group          | $ns^2\, np^2$                     |
| $15$        | Nitrogen group        | $ns^2\, np^3$                     |
| $16$        | Oxygen group          | $ns^2\, np^4$                     |
| $17$        | Halogens              | $ns^2\, np^5$                     |
| $18$        | Noble gases           | $ns^2\, np^6$ (except He: $1s^2$) |

---

## 4. Periodic Trends

### Effective Nuclear Charge

**Definition.** The **effective nuclear charge** ($Z_{\mathrm{eff}}$) is the net positive charge
experienced by an electron, after accounting for shielding by other electrons:

$$
Z_{\mathrm{eff}} = Z - S
$$

where $Z$ is the actual nuclear charge and $S$ is the shielding constant.

**Shielding** is the reduction in the attractive force between the nucleus and an electron due to
repulsion by other electrons. Inner-shell electrons shield outer-shell electrons far more
effectively than electrons in the same shell.

### Atomic Radius

| Trend                     | Explanation                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| Decreases across a period | $Z_{\mathrm{eff}}$ increases; electrons are pulled closer to the nucleus    |
| Increases down a group    | Additional electron shells increase the average distance from the nucleus |

**Definition.** **Atomic radius** is half the distance between the nuclei of two bonded atoms of the
same element.

For noble gases, atomic radius is taken as the van der Waals radius (half the distance between
nuclei of adjacent atoms in the solid or liquid), which is significantly larger than covalent radii.

### Ionic Radius

| Trend                                       | Explanation                                                          |
| ------------------------------------------- | -------------------------------------------------------------------- |
| Cations are smaller than their parent atoms | Fewer electron-electron repulsions; same $Z$ pulling fewer electrons |
| Anions are larger than their parent atoms   | Increased electron-electron repulsion with the same $Z$              |
| Ionic radius increases down a group         | Additional shells                                                    |
| Across a period, ions decrease in size      | Isoelectronic series: same number of electrons, increasing $Z$       |

:::info[Example — Isoelectronic series]

$\mathrm{O}^{2-} \gt \mathrm{F}^- \gt \mathrm{Na}^+ \gt \mathrm{Mg}^{2+} \gt \mathrm{Al}^{3+}$

All have the neon configuration ($1s^2\, 2s^2\, 2p^6$, $10$ electrons). The nuclear charge increases
from $Z = 8$ to $Z = 13$, so the radius decreases.

:::

### Ionization Energy

**Definition.** The **first ionization energy** ($IE_1$) is the minimum energy required to remove
one mole of electrons from one mole of gaseous atoms:

$$
\mathrm{X}(g) \to \mathrm{X}^+(g) + e^- \qquad \Delta H = IE_1
$$

| Trend                     | Explanation                                              |
| ------------------------- | -------------------------------------------------------- |
| Increases across a period | $Z_{\mathrm{eff}}$ increases; electrons held more tightly  |
| Decreases down a group    | Electrons are farther from the nucleus and more shielded |

**Deviations from the general trend across a period:**

| Deviation                    | Element pair | Explanation                                                                                |
| ---------------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| Drop from Group $2$ to $13$  | Be $\to$ B   | Be: $2s^2$ (stable filled subshell); B: $2p^1$ (easier to remove)                          |
| Drop from Group $15$ to $16$ | N $\to$ O    | N: $2p^3$ (half-filled, stable); O: $2p^4$ (paired electron in $2p$ experiences repulsion) |

### Successive Ionization Energies

Each subsequent ionization energy is larger than the previous one because the remaining electrons
experience less shielding from a shrinking electron cloud and are held by a constant $Z$:

$$
IE_1 \lt IE_2 \lt IE_3 \lt \cdots
$$

A large jump in successive ionization energies indicates the removal of an electron from a new inner
shell. This reveals the electron configuration.

:::info[Example — Aluminium]

For aluminium ($1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^1$):

- $IE_1 = 578\mathrm{ kJ/mol}$ (removes $3p$ electron)
- $IE_2 = 1817\mathrm{ kJ/mol}$ (removes $3s$ electron)
- $IE_3 = 2745\mathrm{ kJ/mol}$ (removes $3s$ electron)
- $IE_4 = 11577\mathrm{ kJ/mol}$ (removes $2p$ electron — large jump!)

The jump from $IE_3$ to $IE_4$ confirms that aluminium has three valence electrons.

:::

### Electron Affinity

**Definition.** **Electron affinity** ($EA$) is the enthalpy change when one mole of electrons is
added to one mole of gaseous atoms:

$$
\mathrm{X}(g) + e^- \to \mathrm{X}^-(g) \qquad \Delta H = EA
$$

A more negative $EA$ indicates a greater tendency to accept an electron.

| Trend                                           | Explanation                                                  |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Generally becomes more negative across a period | Increasing $Z_{\mathrm{eff}}$ attracts electrons more strongly |
| Generally becomes less negative down a group    | Increased distance and shielding reduce the nuclear pull     |

Noble gases have positive (endothermic) electron affinities because the added electron enters a new,
higher-energy subshell.

### Electronegativity

**Definition.** **Electronegativity** is the ability of an atom to attract the shared pair of
electrons in a covalent bond. The Pauling scale is the most common.

| Trend                     | Explanation                      |
| ------------------------- | -------------------------------- |
| Increases across a period | Increasing $Z_{\mathrm{eff}}$      |
| Decreases down a group    | Increased distance and shielding |

| Scale   | Most electronegative | Least electronegative |
| ------- | -------------------- | --------------------- |
| Pauling | F ($3.98$)           | Fr ($0.7$)            |

### Metallic and Non-Metallic Character

| Trend           | Metallic character | Non-metallic character |
| --------------- | ------------------ | ---------------------- |
| Across a period | Decreases          | Increases              |
| Down a group    | Increases          | Decreases              |

Metallic character correlates with low ionization energy, low electronegativity, and large atomic
radius. Non-metallic character correlates with high ionization energy, high electronegativity, and
small atomic radius.

### Summary Table of Periodic Trends

| Property               | Across a period (left to right) | Down a group (top to bottom) |
| ---------------------- | ------------------------------- | ---------------------------- |
| Atomic radius          | Decreases                       | Increases                    |
| Ionic radius           | Decreases (isoelectronic)       | Increases                    |
| Ionization energy      | Increases                       | Decreases                    |
| Electron affinity      | More negative                   | Less negative                |
| Electronegativity      | Increases                       | Decreases                    |
| Metallic character     | Decreases                       | Increases                    |
| Non-metallic character | Increases                       | Decreases                    |

---

## 5. Group 1: Alkali Metals

### Physical Properties

| Property      | Trend down the group                                 |
| ------------- | ---------------------------------------------------- |
| Melting point | Decreases (Cs is below room temp in some conditions) |
| Boiling point | Decreases                                            |
| Density       | Generally increases (Li, K anomalies)                |
| Atomic radius | Increases                                            |
| Softness      | Increases (softer metals)                            |

### Chemical Properties

All alkali metals have the outer electron configuration $ns^1$. The single valence electron is
easily lost, forming $\mathrm{M}^+$ ions.

#### Reaction with Water

$$
2\mathrm{M}(s) + 2\mathrm{H}_2\mathrm{O}(l) \to 2\mathrm{MOH}(aq) + \mathrm{H}_2(g)
$$

Reactivity increases down the group:

| Metal  | Observation                                        |
| ------ | -------------------------------------------------- |
| Li     | Steady fizzing; moves on surface                   |
| Na     | Rapid fizzing; melts into a ball; may ignite H$_2$ |
| K      | Ignites immediately with a lilac flame             |
| Rb, Cs | Explosive reaction; often thrown from the water    |

**Explanation of trend**: Ionization energy decreases down the group. The valence electron is
farther from the nucleus and more shielded, so less energy is required to remove it.

#### Oxides

Alkali metals burn in oxygen to form oxides:

| Metal  | Product with limited O$_2$        | Product with excess O$_2$          |
| ------ | --------------------------------- | ---------------------------------- |
| Li     | $\mathrm{Li}_2\mathrm{O}$ (oxide)     | $\mathrm{Li}_2\mathrm{O}$              |
| Na     | $\mathrm{Na}_2\mathrm{O}$ (oxide)     | $\mathrm{Na}_2\mathrm{O}_2$ (peroxide) |
| K      | $\mathrm{K}_2\mathrm{O}_2$ (peroxide) | $\mathrm{KO}_2$ (superoxide)         |
| Rb, Cs | Superoxides form readily          | Superoxides                        |

#### Hydroxides

All Group 1 hydroxides ($\mathrm{MOH}$) are strong bases and highly soluble in water:

$$
\mathrm{MOH}(s) \to \mathrm{M}^+(aq) + \mathrm{OH}^-(aq)
$$

Basicity increases down the group (solubility increases, so $[\mathrm{OH}^-]$ is higher).

### Flame Tests

Alkali metal ions produce characteristic flame colours due to electron transitions:

| Ion           | Flame colour                                     |
| ------------- | ------------------------------------------------ |
| $\mathrm{Li}^+$ | Crimson red                                      |
| $\mathrm{Na}^+$ | Yellow                                           |
| $\mathrm{K}^+$  | Lilac (viewed through cobalt glass to filter Na) |
| $\mathrm{Rb}^+$ | Red-violet                                       |
| $\mathrm{Cs}^+$ | Blue                                             |

### Uses

| Metal | Use                                                   |
| ----- | ----------------------------------------------------- |
| Li    | Batteries, psychiatric medication (lithium carbonate) |
| Na    | Street lamps (Na vapour), NaK coolant                 |
| K     | Fertilisers ($\mathrm{KNO}_3$), potash                  |

---

## 6. Group 17: Halogens

### Physical Properties

| Property      | Trend down the group                                           |
| ------------- | -------------------------------------------------------------- |
| Melting point | Increases                                                      |
| Boiling point | Increases                                                      |
| Atomic radius | Increases                                                      |
| State at RT   | F$_2$, Cl$_2$ (gas); Br$_2$ (liquid); I$_2$ (solid)            |
| Colour        | Pale yellow $\to$ yellow-green $\to$ red-brown $\to$ dark grey |
| Volatility    | Decreases                                                      |

The increase in melting and boiling points down the group is due to increasing London dispersion
forces as the number of electrons (and therefore polarizability) increases.

### Chemical Properties

All halogens have the outer electron configuration $ns^2\, np^5$. They gain one electron to form
$\mathrm{X}^-$ ions, achieving a noble gas configuration.

#### Reactivity Trend

Reactivity **decreases** down the group. This is because atomic radius increases and
$Z_{\mathrm{eff}}$ on the incoming electron decreases, so electron affinity becomes less favourable.

$$
\mathrm{F}_2 \gt \mathrm{Cl}_2 \gt \mathrm{Br}_2 \gt \mathrm{I}_2
$$

#### Displacement Reactions

A more reactive halogen displaces a less reactive halogen from its halide solution:

$$
\mathrm{Cl}_2(aq) + 2\mathrm{KBr}(aq) \to 2\mathrm{KCl}(aq) + \mathrm{Br}_2(aq)
$$

$$
\mathrm{Br}_2(aq) + 2\mathrm{KI}(aq) \to 2\mathrm{KBr}(aq) + \mathrm{I}_2(aq)
$$

$$
\mathrm{Cl}_2(aq) + 2\mathrm{KI}(aq) \to 2\mathrm{KCl}(aq) + \mathrm{I}_2(aq)
$$

But: $\mathrm{Br}_2$ cannot displace $\mathrm{Cl}^-$ and $\mathrm{I}_2$ cannot displace $\mathrm{Br}^-$ or
$\mathrm{Cl}^-$.

#### Reaction with Alkali Metals

$$
2\mathrm{M}(s) + \mathrm{X}_2(g) \to 2\mathrm{MX}(s)
$$

These are vigorous, exothermic reactions forming ionic halides.

#### Halide Ion Tests

| Halide        | Reagent                              | Observation                                                    |
| ------------- | ------------------------------------ | -------------------------------------------------------------- |
| $\mathrm{Cl}^-$ | $\mathrm{AgNO}_3$(aq) + dilute HNO$_3$ | White precipitate ($\mathrm{AgCl}$), soluble in dilute NH$_3$    |
| $\mathrm{Br}^-$ | $\mathrm{AgNO}_3$(aq) + dilute HNO$_3$ | Cream precipitate ($\mathrm{AgBr}$), partially soluble in NH$_3$ |
| $\mathrm{I}^-$  | $\mathrm{AgNO}_3$(aq) + dilute HNO$_3$ | Yellow precipitate ($\mathrm{AgI}$), insoluble in NH$_3$         |

Dilute HNO$_3$ is added first to remove any carbonate or hydroxide ions that would also form
precipitates with $\mathrm{Ag}^+$.

#### Uses

| Halogen       | Use                                                  |
| ------------- | ---------------------------------------------------- |
| $\mathrm{F}_2$  | Fluoridation of water, Teflon (PTFE) production      |
| $\mathrm{Cl}_2$ | Water purification, PVC, bleach ($\mathrm{NaClO}$)     |
| $\mathrm{Br}_2$ | Flame retardants, brominated compounds, photography  |
| $\mathrm{I}_2$  | Antiseptics, iodised salt, thyroid hormone synthesis |

#### Interhalogens

**Definition.** **Interhalogens** are compounds formed between two different halogen atoms. The more
electronegative halogen is the negative end of the molecule.

General formula: $\mathrm{XX}'_n$ where $n = 1, 3, 5, 7$ (depending on the size of the central
halogen).

| Example        | Type        | Structure              |
| -------------- | ----------- | ---------------------- |
| $\mathrm{ClF}$   | Diatomic    | Linear                 |
| $\mathrm{BrF}_3$ | Triatomic   | T-shaped               |
| $\mathrm{IF}_5$  | Pentaatomic | Square pyramidal       |
| $\mathrm{IF}_7$  | Heptaatomic | Pentagonal bipyramidal |

Interhalogens are generally more reactive than the parent halogens because the bonds are polar.

---

## 7. Group 18: Noble Gases

### Properties

Noble gases have complete valence shells ($ns^2\, np^6$, except He which is $1s^2$), making them
chemically inert under standard conditions. They exist as monatomic gases.

| Element | Configuration               | Boiling point (K) | First IE (kJ/mol) |
| ------- | --------------------------- | ----------------- | ----------------- |
| He      | $1s^2$                      | $4.2$             | $2372$            |
| Ne      | $[\mathrm{He}]\, 2s^2\, 2p^6$ | $27.1$            | $2081$            |
| Ar      | $[\mathrm{Ne}]\, 3s^2\, 3p^6$ | $87.3$            | $1521$            |
| Kr      | $[\mathrm{Ar}]\, 4s^2\, 4p^6$ | $119.8$           | $1351$            |
| Xe      | $[\mathrm{Kr}]\, 5s^2\, 5p^6$ | $165.0$           | $1170$            |
| Rn      | $[\mathrm{Xe}]\, 6s^2\, 6p^6$ | $211.0$           | $1037$            |

### Boiling Point Trend

Boiling points increase down the group because the number of electrons increases, leading to
stronger London dispersion forces between atoms. The only intermolecular force in noble gases is
London dispersion.

### Reactivity

Under extreme conditions, the heavier noble gases can form compounds:

- **Xenon** forms $\mathrm{XeF}_2$, $\mathrm{XeF}_4$, $\mathrm{XeF}_6$, $\mathrm{XeO}_3$, $\mathrm{XeO}_4$
- **Krypton** forms $\mathrm{KrF}_2$ (extremely reactive)
- **Argon** forms very unstable compounds under extreme conditions

Xenon compounds exist because its ionization energy is low enough that highly electronegative
fluorine and oxygen can remove or share electrons.

### Uses

| Noble Gas | Use                                                                   |
| --------- | --------------------------------------------------------------------- |
| He        | Balloons, cryogenics, helium-neon lasers, deep-sea diving gas mix     |
| Ne        | Neon signs (orange-red glow)                                          |
| Ar        | Inert atmosphere for welding, light bulbs                             |
| Kr        | High-performance lighting, photography flash lamps                    |
| Xe        | Xenon lamps (used in IMAX projectors, car headlights), ion propulsion |

---

## 8. Transition Metals (HL)

### Definition

**Definition.** A **transition metal** is an element that has a partially filled $d$-subshell in
either its atom or any of its common oxidation states.

This definition excludes scandium ($\mathrm{Sc}^{3+}$: $[\mathrm{Ar}]$) and zinc ($\mathrm{Zn}^{2+}$:
$[\mathrm{Ar}]\, 3d^{10}$) as transition metals in their common oxidation states, though they are in
the $d$-block.

### Physical Properties

| Property                | Typical behaviour of transition metals            |
| ----------------------- | ------------------------------------------------- |
| Melting/boiling points  | High (strong metallic bonding from $d$-electrons) |
| Density                 | High                                              |
| Hardness                | Hard                                              |
| Electrical conductivity | Good conductors                                   |
| Malleability            | Malleable and ductile                             |

### Variable Oxidation States

Transition metals can lose different numbers of $d$-electrons to form ions with different charges.
This is because the $3d$ and $4s$ energy levels are close in energy.

| Element | Common oxidation states |
| ------- | ----------------------- |
| Ti      | $+2, +3, +4$            |
| V       | $+2, +3, +4, +5$        |
| Cr      | $+2, +3, +6$            |
| Mn      | $+2, +3, +4, +6, +7$    |
| Fe      | $+2, +3$                |
| Co      | $+2, +3$                |
| Cu      | $+1, +2$                |

**Trend**: The maximum oxidation state increases across the period to manganese ($+7$) then
decreases. Higher oxidation states become more stable with oxygen (oxoanions) than with water.

### Complex Formation

**Definition.** A **complex ion** consists of a central metal ion surrounded by ligands coordinated
via coordinate (dative covalent) bonds.

$$
[\mathrm{Cu}(\mathrm{H}_2\mathrm{O})_6]^{2+}, \quad [\mathrm{Ag}(\mathrm{NH}_3)_2]^+, \quad [\mathrm{Fe}(\mathrm{CN})_6]^{4-}
$$

### Ligands

**Definition.** A **ligand** is a molecule or ion that can donate a lone pair of electrons to a
central metal ion to form a coordinate bond.

| Type of ligand | Examples                                                          | Denticity | Bonds donated |
| -------------- | ----------------------------------------------------------------- | --------- | ------------- |
| Monodentate    | $\mathrm{H}_2\mathrm{O}$, $\mathrm{NH}_3$, $\mathrm{Cl}^-$, $\mathrm{CN}^-$ | $1$       | $1$           |
| Bidentate      | Ethylenediamine (en), oxalate ($\mathrm{C}_2\mathrm{O}_4^{2-}$)       | $2$       | $2$           |
| Hexadentate    | EDTA ($\mathrm{EDTA}^{4-}$)                                         | $6$       | $6$           |

### Coordination Number

**Definition.** The **coordination number** is the total number of coordinate bonds from ligands to
the central metal ion.

| Coordination number | Geometry      | Example                                                            |
| ------------------- | ------------- | ------------------------------------------------------------------ |
| $4$                 | Tetrahedral   | $[\mathrm{CoCl}_4]^{2-}$                                             |
| $4$                 | Square planar | $[\mathrm{Cu(NH}_3)_4]^{2+}$ (sometimes), $[\mathrm{Ni(CN)}_4]^{2-}$   |
| $6$                 | Octahedral    | $[\mathrm{Cu}(\mathrm{H}_2\mathrm{O})_6]^{2+}$, $[\mathrm{Fe(CN)}_6]^{4-}$ |

### Colour of Transition Metal Complexes

Transition metal complexes are coloured because of $d$-$d$ electron transitions:

1. In an isolated atom/ion, all five $d$-orbitals are degenerate (same energy).
2. In a complex, ligands split the $d$-orbitals into groups of different energies ($d$-orbital
   splitting).
3. When white light passes through the complex, photons with energy matching the $\Delta E$ between
   split $d$-levels are absorbed.
4. The remaining light is transmitted, giving the complex its complementary colour.

$$
\Delta E = hf = \frac{hc}{\lambda}
$$

**Spectrochemical series** (increasing $\Delta$):

$$
\mathrm{I}^- \lt \mathrm{Br}^- \lt \mathrm{Cl}^- \lt \mathrm{F}^- \lt \mathrm{H}_2\mathrm{O} \lt \mathrm{NH}_3 \lt \mathrm{en} \lt \mathrm{CN}^- \lt \mathrm{CO}
$$

Ligands that produce larger splitting are called **strong-field ligands**; those producing smaller
splitting are **weak-field ligands**.

| Complex ion                                             | Colour observed | Colour absorbed |
| ------------------------------------------------------- | --------------- | --------------- |
| $[\mathrm{Cu}(\mathrm{H}_2\mathrm{O})_6]^{2+}$                | Blue            | Orange/red      |
| $[\mathrm{Cu}(\mathrm{NH}_3)_4(\mathrm{H}_2\mathrm{O})_2]^{2+}$ | Deep blue       | Yellow/orange   |
| $[\mathrm{Co}(\mathrm{H}_2\mathrm{O})_6]^{2+}$                | Pink            | Green           |
| $[\mathrm{CoCl}_4]^{2-}$                                  | Blue            | Yellow/orange   |

:::warning

A substance is colourless if either: (a) it has no $d$-electrons (e.g., $\mathrm{Sc}^{3+}$,
$[\mathrm{Ti}(\mathrm{H}_2\mathrm{O})_6]^{4+}$ has $d^0$), or (b) it has a full $d$-subshell (e.g.,
$\mathrm{Zn}^{2+}$, $[\mathrm{Cu}(\mathrm{NH}_3)_4]^+$ has $d^{10}$). In both cases, there are no $d$-$d$
transitions possible.

:::

### Catalytic Properties

Transition metals are effective catalysts because they can adopt variable oxidation states and form
intermediate complexes, providing alternative reaction pathways with lower activation energies.

**Heterogeneous catalysis** (catalyst in a different phase):

| Catalyst   | Reaction                                                                     |
| ---------- | ---------------------------------------------------------------------------- |
| Fe         | Haber process: $\mathrm{N}_2 + 3\mathrm{H}_2 \rightleftharpoons 2\mathrm{NH}_3$    |
| V$_2$O$_5$ | Contact process: $2\mathrm{SO}_2 + \mathrm{O}_2 \to 2\mathrm{SO}_3$                |
| Ni         | Hydrogenation of alkenes                                                     |
| Pt/Pd      | Catalytic converters (oxidation of CO and hydrocarbons, reduction of NO$_x$) |

**Homogeneous catalysis** (catalyst in the same phase):

| Catalyst                        | Reaction                                           |
| ------------------------------- | -------------------------------------------------- |
| $\mathrm{Fe}^{2+}/\mathrm{Fe}^{3+}$ | Fenton's reagent (oxidation of organic pollutants) |
| $\mathrm{Mn}^{2+}$                | Decomposition of $\mathrm{H}_2\mathrm{O}_2$            |

### Magnetic Properties

Transition metals and their complexes can be **paramagnetic** (attracted to a magnetic field) or
**diamagnetic** (weakly repelled).

| Property     | Condition                      | Example                                             |
| ------------ | ------------------------------ | --------------------------------------------------- |
| Paramagnetic | Unpaired $d$-electrons present | $[\mathrm{Fe}(\mathrm{H}_2\mathrm{O})_6]^{3+}$ ($d^5$)    |
| Diamagnetic  | All $d$-electrons paired       | $[\mathrm{Zn}(\mathrm{H}_2\mathrm{O})_6]^{2+}$ ($d^{10}$) |

The number of unpaired electrons determines the magnetic moment (measured in Bohr magnetons,
$\mu_B$):

$$
\mu \approx \sqrt{n(n + 2)}\ \mu_B
$$

where $n$ is the number of unpaired electrons.

---

## 9. Spectral Evidence for Atomic Structure

### Emission Spectra

When atoms absorb energy (e.g., from heat or electricity), electrons are excited to higher energy
levels. When they fall back to lower levels, they emit photons with energies corresponding to the
energy differences:

$$
\Delta E = E_{\mathrm{higher}} - E_{\mathrm{lower}} = h\nu = \frac{hc}{\lambda}
$$

where:

- $h = 6.626 \times 10^{-34}\mathrm{ J}\cdot\mathrm{s}$ (Planck's constant)
- $c = 3.00 \times 10^8\mathrm{ m/s}$ (speed of light)
- $\lambda$ = wavelength of emitted light
- $\nu$ = frequency

Each element produces a unique **line emission spectrum** — a series of discrete lines at specific
wavelengths. This is the basis of flame tests and spectroscopic analysis.

### Absorption Spectra

When white light passes through a cool gas, the gas absorbs photons at wavelengths corresponding to
the energy differences between its electron levels. The transmitted light shows dark lines at these
wavelengths on a continuous spectrum.

### Hydrogen Spectral Series

The hydrogen emission spectrum shows several series, each corresponding to transitions to a specific
lower energy level:

| Series   | Final $n$ | Spectral region | Wavelength range       |
| -------- | --------- | --------------- | ---------------------- |
| Lyman    | $1$       | Ultraviolet     | $< 400\mathrm{ nm}$      |
| Balmer   | $2$       | Visible         | $400$--$700\mathrm{ nm}$ |
| Paschen  | $3$       | Infrared        | $> 700\mathrm{ nm}$      |
| Brackett | $4$       | Infrared        | $> 700\mathrm{ nm}$      |

The energy levels of hydrogen are given by:

$$
E_n = -\frac{13.6\mathrm{ eV}}{n^2} = -\frac{2.18 \times 10^{-18}\mathrm{ J}}{n^2}
$$

For the Balmer series (transitions to $n = 2$), the first four lines correspond to:

| Transition | $\lambda$ (nm) | Colour |
| ---------- | -------------- | ------ |
| $3 \to 2$  | $656$          | Red    |
| $4 \to 2$  | $486$          | Cyan   |
| $5 \to 2$  | $434$          | Blue   |
| $6 \to 2$  | $410$          | Violet |

### Convergence

Lines in each series converge at the series limit (the ionization energy). As $n$ increases, the
energy levels get closer together and transitions approach a continuum:

$$
E_{\infty} = 0\mathrm{ J} \quad (\mathrm{ionization threshold})
$$

### Significance

The existence of discrete spectral lines is direct evidence that electron energy is quantised. The
classical model predicted a continuous spectrum, which is never observed for individual atoms.

---

## 10. Mass Spectrometry

### Principle

Mass spectrometry measures the mass-to-charge ratio ($m/z$) of ions. The general process:

1. **Ionization**: Atoms or molecules are ionized (typically by electron impact — high-energy
   electrons knock an electron off the sample, forming positive ions).
2. **Acceleration**: Ions are accelerated by an electric field. All ions receive the same kinetic
   energy: $$ \frac{1}{2}mv^2 = zV $$
   where $V$ is the accelerating voltage and $z$ is the charge
   on the ion.
3. **Deflection**: Ions pass through a magnetic field and are deflected. Lighter ions (or more
   highly charged ions) are deflected more: $$ r = \frac{\sqrt{2mV}}{zB} $$
   where $r$ is the
   radius of curvature and $B$ is the magnetic field strength.
4. **Detection**: A detector records the abundance of ions at each $m/z$ value, producing a mass
   spectrum.

### Interpreting Mass Spectra

A mass spectrum plots **relative abundance** (y-axis) against **$m/z$** (x-axis).

#### Isotopic Abundance

For a single element, the mass spectrum shows peaks at each isotope's mass, with heights
proportional to natural abundance.

:::info[Example — Boron]

Boron has two isotopes: $\mathrm{B}$-10 ($19.9\%$) and $\mathrm{B}$-11 ($80.1\%$).

The mass spectrum shows peaks at $m/z = 10$ and $m/z = 11$ with relative heights in the ratio
$19.9 : 80.1$, approximately $1 : 4$.

$$
A_r = (10 \times 0.199) + (11 \times 0.801) = 1.99 + 8.81 = 10.81
$$

:::

#### Molecular Ion

The **molecular ion peak** ($\mathrm{M}^+$) corresponds to the intact molecule with one electron
removed. Its $m/z$ value gives the molecular mass.

$$
\mathrm{CH}_4 + e^- \to \mathrm{CH}_4^{+\bullet} + 2e^-
$$

The molecular ion peak for $\mathrm{CH}_4$ appears at $m/z = 16$.

#### Fragmentation

After ionization, the molecular ion often breaks apart into smaller fragments. The fragmentation
pattern is characteristic of the molecule and can be used to identify it.

| Fragment $m/z$ | Likely species                                       | Common origin                           |
| -------------- | ---------------------------------------------------- | --------------------------------------- |
| $15$           | $\mathrm{CH}_3^+$                                      | Loss of H from $\mathrm{CH}_4^{+\bullet}$ |
| $29$           | $\mathrm{C}_2\mathrm{H}_5^+$ or $\mathrm{CHO}^+$           | Ethanol, aldehydes                      |
| $43$           | $\mathrm{C}_3\mathrm{H}_7^+$ or $\mathrm{CH}_3\mathrm{CO}^+$ | Ketones, propanol                       |
| $77$           | $\mathrm{C}_6\mathrm{H}_5^+$                             | Benzene ring                            |

### Determining Molecular Formula from Isotope Peaks

For molecules containing chlorine or bromine, the isotope patterns are distinctive:

| Element | Isotopes                       | Approximate ratio |
| ------- | ------------------------------ | ----------------- |
| Cl      | $\mathrm{Cl}$-35, $\mathrm{Cl}$-37 | $3 : 1$           |
| Br      | $\mathrm{Br}$-79, $\mathrm{Br}$-81 | $1 : 1$           |

A molecule with one chlorine atom shows an $\mathrm{M}$ and $\mathrm{M}+2$ peak in a $3:1$ ratio. A
molecule with one bromine atom shows an $\mathrm{M}$ and $\mathrm{M}+2$ peak in a $1:1$ ratio.

:::info[Example — Chlorobenzene]

Chlorobenzene ($\mathrm{C}_6\mathrm{H}_5\mathrm{Cl}$) shows:

- $\mathrm{M}^+$ at $m/z = 112$ ($\mathrm{C}_6\mathrm{H}_5{}^{35}\mathrm{Cl}$)
- $\mathrm{M}+2$ at $m/z = 114$ ($\mathrm{C}_6\mathrm{H}_5{}^{37}\mathrm{Cl}$)
- Ratio of peak heights: approximately $3:1$

:::

### High-Resolution Mass Spectrometry

High-resolution MS can determine exact masses to several decimal places, distinguishing between
molecules with the same nominal mass but different molecular formulas:

| Species                        | Exact mass (u) |
| ------------------------------ | -------------- |
| $\mathrm{C}_2\mathrm{H}_4\mathrm{O}$ | $44.0262$      |
| $\mathrm{CO}_2$                  | $43.9898$      |
| $\mathrm{N}_2\mathrm{O}$           | $44.0011$      |

---

## 11. HL Extensions

### Slater's Rules for Effective Nuclear Charge

Slater's rules provide a systematic way to estimate the shielding constant $S$ for an electron in a
many-electron atom.

#### Rules

1. Write the electron configuration in groups:
   $(1s)(2s, 2p)(3s, 3p)(3d)(4s, 4p)(4d)(4f)(5s, 5p) \ldots$

2. Electrons in groups to the **right** of the electron of interest contribute $0$ to $S$.

3. Other electrons in the **same group** contribute:
   - For $ns$ or $np$ electrons: each other electron contributes $0.35$ (except $1s$, where the
     other electron contributes $0.30$)
   - For $nd$ or $nf$ electrons: each other electron contributes $0.35$

4. Electrons in the **$n-1$ shell** contribute:
   - $0.85$ each (for $s$ and $p$ electrons in the $n$ shell)
   - $1.00$ each (for $d$ and $f$ electrons in the $n$ shell)

5. Electrons in shells **$n-2$ or lower** contribute $1.00$ each.

:::info[Example — $Z_{\mathrm{eff}}$ for a $3p$ electron in chlorine ($Z = 17$)]

Configuration: $(1s)^2(2s, 2p)^8(3s, 3p)^7$

For a $3p$ electron:

- Same $(3s, 3p)$ group: $6$ other electrons $\times 0.35 = 2.10$
- $n - 1$ shell $(2s, 2p)^8$: $8 \times 0.85 = 6.80$
- $n - 2$ shell $(1s)^2$: $2 \times 1.00 = 2.00$

$$ S = 2.10 + 6.80 + 2.00 = 10.90 $$

$$ Z\_{\mathrm{eff}} = 17 - 10.90 = 6.10 $$

:::

:::info[Example — $Z_{\mathrm{eff}}$ for a $3d$ electron in scandium ($Z = 21$)]

Configuration: $(1s)^2(2s, 2p)^8(3s, 3p)^8(3d)^1(4s)^2$

For the $3d$ electron:

- Same $(3d)$ group: $0$ other electrons $\times 0.35 = 0$
- $n - 1$ shell: $(3s, 3p)^8$ each contributes $1.00$ (for $d$ electrons, the rule is different) =
  $8 \times 1.00 = 8.00$
- Shells $n - 2$ and lower: $(2s, 2p)^8(1s)^2$ = $10 \times 1.00 = 10.00$

$$ S = 0 + 8.00 + 10.00 = 18.00 $$

$$ Z\_{\mathrm{eff}} = 21 - 18.00 = 3.00 $$

The low $Z_{\mathrm{eff}}$ on the $3d$ electron explains why the $4s$ orbital fills before $3d$ — the
$4s$ electron experiences a higher effective nuclear charge.

:::

### Successive Ionization Energy Graphs and Electron Configuration

Plotting $\log(IE)$ against ionization number reveals jumps that correspond to the removal of
electrons from inner shells.

For aluminium ($Z = 13$):

$$
\underbrace{IE_1, IE_2, IE_3}_{\mathrm{valence } 3s^2\, 3p^1} \ll IE_4, IE_5, \ldots, IE_{11} \ll IE_{12}, IE_{13}
$$

| Ionization number | Electron removed | Approximate IE (kJ/mol) | Shell           |
| ----------------- | ---------------- | ----------------------- | --------------- |
| $1$               | $3p^1$           | $578$                   | $n = 3$         |
| $2$               | $3s^1$           | $1817$                  | $n = 3$         |
| $3$               | $3s^1$           | $2745$                  | $n = 3$         |
| $4$               | $2p^1$           | $11577$                 | $n = 2$ (jump!) |
| $\ldots$          |                  |                         |                 |
| $11$              | $2s^1$           | $6521$                  | $n = 2$         |
| $12$              | $1s^1$           | $18560$                 | $n = 1$ (jump!) |
| $13$              | $1s^1$           | $21600$                 | $n = 1$         |

The jumps reveal:

- $3$ valence electrons ($n = 3$)
- $8$ electrons in $n = 2$
- $2$ electrons in $n = 1$

### Energy Level Transitions and Spectral Lines

#### Energy-Wavelength Calculations

The Rydberg equation for hydrogen gives the wavelength of any spectral line:

$$
\frac{1}{\lambda} = R_H \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)
$$

where $R_H = 1.097 \times 10^7\mathrm{ m}^{-1}$ is the Rydberg constant, $n_i$ is the initial energy
level, and $n_f$ is the final energy level ($n_i \gt n_f$ for emission).

:::info[Example — Wavelength of the first Balmer line]

For the transition $n = 3 \to n = 2$:

$$
\frac{1}{\lambda} = 1.097 \times 10^7 \left(\frac{1}{4} - \frac{1}{9}\right) = 1.097 \times 10^7 \times 0.1389 = 1.524 \times 10^6\mathrm{ m}^{-1}
$$

$$
\lambda = \frac{1}{1.524 \times 10^6} = 6.56 \times 10^{-7}\mathrm{ m} = 656\mathrm{ nm}
$$

This corresponds to the red line in the Balmer series (H$\alpha$).

:::

#### Energy of a Photon

$$
E = h\nu = \frac{hc}{\lambda}
$$

For the $n = 3 \to n = 2$ transition:

$$
E = \frac{(6.626 \times 10^{-34})(3.00 \times 10^8)}{6.56 \times 10^{-7}} = 3.03 \times 10^{-19}\mathrm{ J}
$$

Converting to electron-volts:

$$
E = \frac{3.03 \times 10^{-19}}{1.602 \times 10^{-19}} = 1.89\mathrm{ eV}
$$

#### Number of Spectral Lines

The number of possible spectral lines from energy level $n$ down to the ground state is:

$$
N = \frac{n(n - 1)}{2}
$$

For $n = 4$: $N = 6$ spectral lines.

---

## 12. Exam Practice

### Question 1 (SL — 4 marks)

(a) Define the term **relative atomic mass**. (2 marks)

(b) Naturally occurring boron consists of two isotopes, $\mathrm{B}$-10 and $\mathrm{B}$-11. The
relative atomic mass of boron is $10.81$. Calculate the percentage abundance of $\mathrm{B}$-10. (2
marks)

**Markscheme:**

(a) The weighted mean mass of an atom of an element relative to $1/12$ the mass of an atom of
carbon-12, based on the abundance of isotopes in a naturally occurring sample. (2 marks)

(b) Let $x$ = fractional abundance of $\mathrm{B}$-10, so $(1 - x)$ = fractional abundance of
$\mathrm{B}$-11.

$$
10.81 = 10x + 11(1 - x)
$$

$$
10.81 = 10x + 11 - 11x
$$

$$
10.81 = 11 - x
$$

$$
x = 0.19
$$

Percentage abundance of $\mathrm{B}$-10 = $19\%$. (1 mark for setup, 1 mark for answer)

---

### Question 2 (SL — 3 marks)

Explain why the first ionization energy of sodium is lower than that of magnesium, but the first
ionization energy of magnesium is lower than that of aluminium.

**Markscheme:**

Na ($1s^2\, 2s^2\, 2p^6\, 3s^1$) to Mg ($1s^2\, 2s^2\, 2p^6\, 3s^2$): $Z_{\mathrm{eff}}$ increases
across the period, so the $3s$ electrons in Mg are held more tightly. (1 mark)

Mg ($3s^2$) to Al ($3s^2\, 3p^1$): the electron removed from Al is a $3p$ electron, which is at a
higher energy level than the $3s$ electrons of Mg and is partially shielded by the $3s$ electrons.
(1 mark)

Also: Mg has a stable filled $3s$ subshell configuration. (1 mark)

---

### Question 3 (SL — 4 marks)

(a) State the electron configuration of $\mathrm{Fe}^{2+}$ using noble gas notation. (1 mark)

(b) Describe the trend in atomic radius across Period 3 and explain this trend in terms of effective
nuclear charge. (3 marks)

**Markscheme:**

(a) $[\mathrm{Ar}]\, 3d^6$ (1 mark; note: electrons are removed from $4s$ before $3d$)

(b) Atomic radius decreases from Na to Ar. (1 mark)

Across a period, the nuclear charge ($Z$) increases by one proton per element, but the additional
electrons enter the same shell and provide only partial shielding. (1 mark)

Therefore $Z_{\mathrm{eff}}$ increases across the period, pulling the electron cloud closer to the
nucleus and decreasing the atomic radius. (1 mark)

---

### Question 4 (SL — 3 marks)

A sample of chlorine gas is analysed by mass spectrometry. Describe and explain the appearance of
the mass spectrum.

**Markscheme:**

Two peaks are observed at $m/z = 35$ and $m/z = 37$. (1 mark)

The heights of the peaks are in the approximate ratio $3:1$, reflecting the natural abundances of
$\mathrm{Cl}$-35 ($75.77\%$) and $\mathrm{Cl}$-37 ($24.23\%$). (1 mark)

The sample is diatomic ($\mathrm{Cl}_2$), so additional peaks appear at $m/z = 70$
($^{35}\mathrm{Cl}$--$^{35}\mathrm{Cl}$), $m/z = 72$ ($^{35}\mathrm{Cl}$--$^{37}\mathrm{Cl}$), and
$m/z = 74$ ($^{37}\mathrm{Cl}$--$^{37}\mathrm{Cl}$) in the ratio $9:6:1$. (1 mark)

---

### Question 5 (HL — 5 marks)

(a) State the four quantum numbers for each of the valence electrons in a ground-state oxygen atom.
(3 marks)

(b) Explain why the fourth ionization energy of beryllium is much larger than the third. (2 marks)

**Markscheme:**

(a) Oxygen: $1s^2\, 2s^2\, 2p^4$. The six valence electrons (in $n = 2$):

$2s$ electrons: $(2, 0, 0, +\frac{1}{2})$ and $(2, 0, 0, -\frac{1}{2})$

$2p$ electrons: $(2, 1, -1, +\frac{1}{2})$, $(2, 1, 0, +\frac{1}{2})$, $(2, 1, +1, +\frac{1}{2})$,
$(2, 1, -1, -\frac{1}{2})$ (1 mark for $n, l, m_l$; 1 mark for $m_s$ showing Hund's rule with first
three $2p$ electrons having parallel spins; 1 mark for the fourth being paired)

(b) Beryllium: $1s^2\, 2s^2$. $IE_1$, $IE_2$, $IE_3$ remove the two $2s$ electrons and one $1s$
electron. $IE_4$ removes the remaining $1s$ electron. (1 mark)

The $1s$ electron is much closer to the nucleus and experiences far less shielding, so it requires
much more energy to remove. This is an inner shell electron. (1 mark)

---

### Question 6 (HL — 6 marks)

(a) Explain what is meant by the term **ligand** and give one example of a bidentate ligand. (2
marks)

(b) The complex $[\mathrm{Co}(\mathrm{NH}_3)_6]^{3+}$ is yellow but
$[\mathrm{Co}(\mathrm{H}_2\mathrm{O})_6]^{3+}$ is blue. Explain this difference. (2 marks)

(c) Explain why transition metals often show catalytic activity, using the Haber process as an
example. (2 marks)

**Markscheme:**

(a) A ligand is a molecule or ion that can donate a lone pair of electrons to a central metal ion
via a coordinate bond. (1 mark) Example of bidentate ligand: ethylenediamine (en) or oxalate ion
($\mathrm{C}_2\mathrm{O}_4^{2-}$). (1 mark)

(b) $\mathrm{NH}_3$ is a stronger-field ligand than $\mathrm{H}_2\mathrm{O}$ on the spectrochemical
series, so it causes greater $d$-orbital splitting ($\Delta$) in $[\mathrm{Co}(\mathrm{NH}_3)_6]^{3+}$.
(1 mark) A larger $\Delta$ means higher-energy photons are absorbed, so the complementary colour
transmitted is different (yellow vs blue). (1 mark)

(c) Transition metals have variable oxidation states, allowing them to form intermediate compounds
with reactants. This provides an alternative reaction pathway with a lower activation energy. (1
mark) In the Haber process, iron catalyses the reaction by adsorbing $\mathrm{N}_2$ and $\mathrm{H}_2$
onto its surface, weakening the $\mathrm{N}\equiv\mathrm{N}$ triple bond and facilitating the formation
of $\mathrm{NH}_3$. (1 mark)

---

### Question 7 (HL — 4 marks)

The successive ionization energies of an element X are shown below (in kJ/mol):

$IE_1 = 577$, $IE_2 = 1816$, $IE_3 = 2744$, $IE_4 = 11577$, $IE_5 = 14842$, $IE_6 = 18376$

(a) Identify element X and explain your reasoning. (2 marks)

(b) Write the electron configuration of X$^{2+}$. (1 mark)

(c) Explain why $IE_4$ is significantly larger than $IE_3$. (1 mark)

**Markscheme:**

(a) The element is aluminium. (1 mark) There is a large jump between $IE_3$ and $IE_4$, indicating
that the first three electrons are removed from the valence shell and the fourth electron is from an
inner shell. This is consistent with Group 13, and aluminium is the element in Period 3, Group 13.
(1 mark)

(b) $[\mathrm{Ne}]\, 3s^1$ (1 mark; removing two electrons from the $3s^2\, 3p^1$ configuration)

(c) $IE_4$ removes an electron from the $n = 2$ shell, which is closer to the nucleus and
experiences much less shielding. The effective nuclear charge on inner-shell electrons is much
higher. (1 mark)

---

### Question 8 (HL — 4 marks)

Calculate the wavelength of radiation emitted when an electron in a hydrogen atom transitions from
$n = 5$ to $n = 2$. Identify the spectral series and the region of the electromagnetic spectrum.

**Markscheme:**

$$
\frac{1}{\lambda} = R_H \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right) = 1.097 \times 10^7 \left(\frac{1}{4} - \frac{1}{25}\right)
$$

$$
= 1.097 \times 10^7 \times \frac{21}{100} = 2.304 \times 10^6\mathrm{ m}^{-1}
$$

$$
\lambda = \frac{1}{2.304 \times 10^6} = 4.34 \times 10^{-7}\mathrm{ m} = 434\mathrm{ nm}
$$

(2 marks for correct substitution and calculation)

This is part of the Balmer series (transitions to $n = 2$) and falls in the visible region of the
electromagnetic spectrum (blue-violet). (2 marks)

---

:::info[IB Exam Tip]

When answering "explain" questions about periodic trends, always reference **effective nuclear
charge** and **shielding**. The marking scheme expects these terms. A two-mark explanation requires
the trend statement AND the reasoning.

:::

:::warning[Common Mistake]

When writing electron configurations for transition metal ions, always remove electrons from the
$ns$ orbital first (highest principal quantum number), NOT from the $(n-1)d$ orbital. So
$\mathrm{Fe}^{3+}$ is $[\mathrm{Ar}]\, 3d^5$, not $[\mathrm{Ar}]\, 4s^2\, 3d^3$.

:::

:::warning[Common Mistake]

Do not confuse atomic radius trends with ionic radius trends. When comparing ionic radii within an
isoelectronic series, the ion with the largest nuclear charge has the smallest radius. For example,
$\mathrm{Na}^+$ is smaller than $\mathrm{F}^-$ even though $\mathrm{Na}$ has a larger atomic radius than
$\mathrm{F}$.

:::
