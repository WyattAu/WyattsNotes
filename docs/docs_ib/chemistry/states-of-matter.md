---
title: States of Matter
description:
  IB Chemistry — kinetic molecular theory, ideal gas law, real gases, intermolecular forces, and
  phase diagrams.
slug: states-of-matter
---

## 1. Kinetic Molecular Theory

### Postulates

1. Matter consists of particles in continuous random motion.
2. The average kinetic energy of particles is proportional to the absolute temperature:
   $\bar{E}_k = \frac{3}{2}k_BT$.
3. Collisions between particles are perfectly elastic (total kinetic energy is conserved).
4. Particles exert no forces on each other except during collisions.
5. The volume of individual particles is negligible compared to the total volume of the gas.

### Consequences

- Gases are compressible (particles are far apart).
- Gases fill their containers (particles move freely).
- Gases have low density compared to liquids and solids.
- Mixtures of gases are always homogeneous.

### Maxwell-Boltzmann Distribution

At a given temperature, molecular speeds follow a distribution:

$$
f(v) = 4\pi \left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 \exp\!\left(-\frac{mv^2}{2k_BT}\right)
$$

Key features:

- The most probable speed ($v_p$) is the peak of the distribution.
- The mean speed is higher than $v_p$.
- As temperature increases, the distribution broadens and shifts to higher speeds.
- All molecules in the sample do **not** have the same speed.

### Effect of Temperature

Increasing temperature:

- Increases the average kinetic energy.
- Broadens the Maxwell-Boltzmann distribution.
- Shifts the peak to higher velocities.
- Increases the proportion of molecules with energy exceeding the activation energy.

---

## 2. Ideal Gas Law

### Derivation from Empirical Laws

| Law          | Relationship    | Condition held constant |
| ------------ | --------------- | ----------------------- |
| Boyle's      | $P \propto 1/V$ | $n$, $T$                |
| Charles's    | $V \propto T$   | $n$, $P$                |
| Gay-Lussac's | $P \propto T$   | $n$, $V$                |
| Avogadro's   | $V \propto n$   | $P$, $T$                |

Combining: $PV \propto nT$, giving the ideal gas equation:

$$
PV = nRT
$$

| Symbol | Meaning                | SI Unit                          |
| ------ | ---------------------- | -------------------------------- |
| $P$    | Pressure               | $\mathrm{Pa}$ ($\mathrm{N/m}^2$) |
| $V$    | Volume                 | $\mathrm{m}^3$                   |
| $n$    | Amount of substance    | $\mathrm{mol}$                   |
| $R$    | Universal gas constant | $8.314\mathrm{ J/(mol \cdot K)}$ |
| $T$    | Temperature            | $\mathrm{K}$                     |

### Molar Volume

At STP ($0\degree\mathrm{C}$, $100\mathrm{ kPa}$): $V_m = 22.7\mathrm{ L/mol}$

At RTP ($25\degree\mathrm{C}$, $100\mathrm{ kPa}$): $V_m = 24.8\mathrm{ L/mol}$

### Dalton's Law of Partial Pressures

$$
P_{\mathrm{total}} = P_1 + P_2 + P_3 + \cdots
$$

The partial pressure of component $i$:

$$
P_i = x_i \cdot P_{\mathrm{total}}
$$

where $x_i = \dfrac{n_i}{n_{\mathrm{total}}}$ is the mole fraction.

### Graham's Law of Effusion

$$
\frac{r_1}{r_2} = \sqrt{\frac{M_2}{M_1}}
$$

Lighter gases effuse faster. This is the basis for gas separation by diffusion and for detecting
leaks.

### Common Pitfalls

- Forgetting to convert temperature to Kelvin.
- Using the wrong value of $R$ (check units of $P$, $V$, $T$).
- Confusing STP definitions (the IB uses $100\mathrm{ kPa}$, not $1\mathrm{ atm}$).

---

## 3. Real Gases

### Deviations from Ideal Behaviour

Real gases deviate from ideal behaviour when:

- **Pressure is high**: molecules are close together, so their finite volume matters and
  intermolecular forces become significant.
- **Temperature is low**: molecules move slowly, so intermolecular forces have a greater effect.

### Van der Waals Equation

$$
\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT
$$

| Parameter | Meaning                                     |
| --------- | ------------------------------------------- |
| $a$       | Corrects for intermolecular attractions     |
| $b$       | Corrects for the finite volume of molecules |

- The $a$ term increases the effective pressure (attractions reduce the pressure exerted on the
  walls).
- The $b$ term reduces the effective volume (molecules occupy space).

### Comparing Gases

| Gas             | $a$ ($\mathrm{L}^2\cdot\mathrm{atm/mol}^2$) | $b$ ($\mathrm{L/mol}$) | Behaviour           |
| --------------- | ------------------------------------------- | ---------------------- | ------------------- |
| He              | $0.034$                                     | $0.024$                | Closest to ideal    |
| $\mathrm{N}_2$  | $1.39$                                      | $0.039$                | Moderate deviations |
| $\mathrm{CO}_2$ | $3.59$                                      | $0.043$                | Largest deviations  |

Gases with larger $a$ values (stronger intermolecular forces) and larger $b$ values (larger
molecules) deviate more from ideal behaviour.

### Compressibility Factor

$$
Z = \frac{PV}{nRT}
$$

- $Z = 1$: ideal gas
- $Z \lt 1$: intermolecular attractions dominate (low $T$, moderate $P$)
- $Z \gt 1$: molecular volume dominates (high $P$)

---

## 4. Intermolecular Forces

### Types and Relative Strengths

| Force                | Strength | Present in                        |
| -------------------- | -------- | --------------------------------- |
| Covalent/ionic bonds | Strong   | Within molecules/ionic lattices   |
| Ion-dipole           | Moderate | Ion + polar molecule              |
| Hydrogen bonding     | Moderate | H bonded to N, O, or F            |
| Dipole-dipole        | Weak     | Polar molecules                   |
| London dispersion    | Weakest  | All molecules (temporary dipoles) |

### London Dispersion Forces

**Definition.** London dispersion forces arise from instantaneous dipoles created by the uneven
distribution of electrons. These induce dipoles in neighbouring molecules.

Factors affecting strength:

1. **Number of electrons**: more electrons = larger electron cloud = greater polarizability =
   stronger dispersion forces.
2. **Molecular shape**: larger surface area of contact = stronger forces. Linear molecules have
   stronger dispersion forces than branched isomers.

| Comparison                            | Stronger LDF    | Reason                                     |
| ------------------------------------- | --------------- | ------------------------------------------ |
| $\mathrm{F}_2$ vs $\mathrm{Cl}_2$     | $\mathrm{Cl}_2$ | More electrons                             |
| $\mathrm{C}_5\mathrm{H}_{12}$ isomers | n-pentane       | Greater surface area than branched isomers |

### Dipole-Dipole Forces

Polar molecules have permanent dipoles. The positive end of one molecule attracts the negative end
of another:

$$
\mathrm{HCl}\cdots\mathrm{HCl}
$$

### Hydrogen Bonding

**Definition.** A **hydrogen bond** is a strong dipole-dipole attraction between a hydrogen atom
covalently bonded to a highly electronegative atom (N, O, or F) and a lone pair on another
electronegative atom.

Requirements:

1. Hydrogen bonded directly to N, O, or F.
2. A lone pair available on the acceptor atom.

#### Effects of Hydrogen Bonding

| Property               | Effect                               | Example                                                                                                      |
| ---------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Boiling point          | Much higher than expected            | $\mathrm{H}_2\mathrm{O}$ (bp $100\degree\mathrm{C}$) vs $\mathrm{H}_2\mathrm{S}$ (bp $-60\degree\mathrm{C}$) |
| Viscosity              | Higher                               | Glycerol, $\mathrm{H}_2\mathrm{O}$                                                                           |
| Surface tension        | Higher                               | Water has high surface tension                                                                               |
| Solubility             | Enhances solubility of polar species | Glucose dissolves in water                                                                                   |
| Density anomaly        | Ice less dense than liquid water     | Open hydrogen-bonded structure of ice                                                                        |
| Biological specificity | DNA base pairing, protein folding    | Complementary H-bond donors/acceptors                                                                        |

#### Anomalous Properties of Water

Water's maximum density is at $4\degree\mathrm{C}$, not $0\degree\mathrm{C}$. In ice, each water
molecule forms four hydrogen bonds in a tetrahedral arrangement, creating an open lattice with lower
density than liquid water.

---

## 5. Phase Diagrams

### Features

A phase diagram shows the conditions of temperature and pressure at which each phase of a substance
is stable.

Key features:

- **Triple point**: the unique temperature and pressure at which all three phases coexist in
  equilibrium.
- **Critical point**: the highest temperature and pressure at which a liquid can exist. Above $T_c$,
  the distinction between liquid and gas disappears (supercritical fluid).
- **Normal melting point**: the temperature at which solid and liquid are in equilibrium at
  $1\mathrm{ atm}$.
- **Normal boiling point**: the temperature at which liquid and gas are in equilibrium at
  $1\mathrm{ atm}$.

### Phase Boundaries

| Boundary      | Process          | Condition                           |
| ------------- | ---------------- | ----------------------------------- |
| Solid--liquid | Melting/freezing | Equilibrium curve                   |
| Liquid--gas   | Vaporisation     | Vapour pressure = external pressure |
| Solid--gas    | Sublimation      | Direct transition                   |

### Water's Phase Diagram

The solid--liquid boundary for water has a **negative slope** (unlike most substances). This is
because ice is less dense than liquid water, so increasing pressure favours the denser liquid phase
and **lowers** the melting point.

### $\mathrm{CO}_2$ Phase Diagram

The triple point of $\mathrm{CO}_2$ is at $-57\degree\mathrm{C}$ and $5.1\mathrm{ atm}$. At
$1\mathrm{ atm}$, $\mathrm{CO}_2$ sublimates directly from solid to gas — hence the name "dry ice."

---

## 6. States of Matter: Condensed Phases

### Liquids

- Particles are close together but can move past one another.
- Have a fixed volume but no fixed shape.
- Evaporation occurs when molecules at the surface have sufficient kinetic energy to escape.
- Boiling occurs when the vapour pressure equals the external pressure.

### Solids

| Property      | Ionic Solids            | Molecular Solids | Covalent Network       | Metallic Solids                       |
| ------------- | ----------------------- | ---------------- | ---------------------- | ------------------------------------- |
| Particles     | Ions                    | Molecules        | Atoms                  | Metal cations + delocalised electrons |
| Bonding       | Electrostatic           | Intermolecular   | Covalent               | Metallic                              |
| Melting point | High                    | Low              | Very high              | Variable                              |
| Conductivity  | Conduct when molten     | Insulators       | Insulators (except Si) | Good conductors                       |
| Solubility    | Often in polar solvents | Varies           | Insoluble              | Insoluble                             |

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Explain why the boiling point of propan-1-ol ($97\degree\mathrm{C}$) is much higher than that of
butane ($-1\degree\mathrm{C}$), even though butane has a larger molar mass.

**Solution:**

Propan-1-ol can form hydrogen bonds between the O--H group and lone pairs on neighbouring molecules.
Hydrogen bonds are much stronger than the London dispersion forces that are the only intermolecular
forces in butane. Despite butane having more electrons (stronger dispersion forces), the hydrogen
bonding in propan-1-ol dominates and requires more energy to overcome.

</details>

<details>
<summary>Problem 2</summary>

A gas occupies $5.00\mathrm{ L}$ at $2.00\mathrm{ atm}$ and $300\mathrm{ K}$. Calculate the volume
at $5.00\mathrm{ atm}$ and $400\mathrm{ K}$.

**Solution:**

Using the combined gas law:

$$
\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}
$$

$$
V_2 = \frac{P_1 V_1 T_2}{P_2 T_1} = \frac{2.00 \times 5.00 \times 400}{5.00 \times 300} = \frac{4000}{1500} = 2.67\mathrm{ L}
$$

</details>

<details>
<summary>Problem 3</summary>

Explain why $\mathrm{NH}_3$ has a higher boiling point ($-33\degree\mathrm{C}$) than $\mathrm{PH}_3$
($-88\degree\mathrm{C}$), but the boiling point of $\mathrm{H}_2\mathrm{O}$ ($100\degree\mathrm{C}$)
is higher than that of $\mathrm{NH}_3$ despite both having hydrogen bonding.

**Solution:**

$\mathrm{NH}_3$ vs $\mathrm{PH}_3$: $\mathrm{NH}_3$ forms hydrogen bonds (H bonded to N), which are
much stronger than the dipole-dipole and dispersion forces in $\mathrm{PH}_3$ (P is not
electronegative enough for H-bonding).

$\mathrm{H}_2\mathrm{O}$ vs $\mathrm{NH}_3$: Each water molecule can form up to **two** hydrogen
bonds (two O--H donors and two lone pair acceptors), whereas each $\mathrm{NH}_3$ molecule can form
only **one** hydrogen bond (one N--H donor, but the lone pair on N is partly delocalised).
Additionally, water forms a more extensive three-dimensional hydrogen-bond network.

</details>

<details>
<summary>Problem 4</summary>

Using the van der Waals equation, calculate the pressure exerted by $1.00\mathrm{ mol}$ of
$\mathrm{CO}_2$ in a $5.00\mathrm{ L}$ container at $300\mathrm{ K}$. Compare with the ideal gas
prediction. For $\mathrm{CO}_2$: $a = 3.59\mathrm{ L}^2\cdot\mathrm{atm/mol}^2$,
$b = 0.043\mathrm{ L/mol}$.

**Solution:**

Ideal gas law:

$$
P_{\mathrm{ideal}} = \frac{nRT}{V} = \frac{1.00 \times 0.0821 \times 300}{5.00} = \frac{24.63}{5.00} = 4.93\mathrm{ atm}
$$

Van der Waals:

$$
\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT
$$

$$
\left(P + \frac{3.59 \times 1}{25.0}\right)(5.00 - 0.043) = 24.63
$$

$$
(P + 0.1436)(4.957) = 24.63
$$

$$
P + 0.1436 = \frac{24.63}{4.957} = 4.970
$$

$$
P = 4.970 - 0.1436 = 4.83\mathrm{ atm}
$$

The van der Waals pressure ($4.83\mathrm{ atm}$) is lower than the ideal gas pressure
($4.93\mathrm{ atm}$) because intermolecular attractions reduce the effective pressure.

</details>

---

## Worked Examples

**Worked Example: Ideal Gas Law with Unit Consistency**

A sample of nitrogen gas occupies $250.0\mathrm{ mL}$ at $25\degree\mathrm{C}$ and $98.5\mathrm{ kPa}$. Calculate the number of moles of nitrogen.

<details>
<summary>Solution</summary>

Convert all quantities to SI units:

- $V = 250.0\mathrm{ mL} = 0.2500\mathrm{ L} = 2.500 \times 10^{-4}\mathrm{ m}^3$
- $T = 25\degree\mathrm{C} = 298\mathrm{ K}$
- $P = 98.5\mathrm{ kPa} = 98\,500\mathrm{ Pa}$

Using $R = 8.314\mathrm{ J/(mol \cdot K)}$ (SI units):

$$
n = \frac{PV}{RT} = \frac{98\,500 \times 2.500 \times 10^{-4}}{8.314 \times 298} = \frac{24.63}{2477.6} = 0.00994\mathrm{ mol}
$$

Alternatively, using $R = 8.314 \times 10^{-2}\mathrm{ L \cdot kPa/(mol \cdot K)}$ and keeping $V$ in litres and $P$ in kPa:

$$
n = \frac{98.5 \times 0.2500}{8.314 \times 10^{-2} \times 298} = \frac{24.63}{247.8} = 0.00994\mathrm{ mol}
$$

Both approaches give $n = 0.00994\mathrm{ mol}$ (approximately $0.01\mathrm{ mol}$).

</details>

**Worked Example: Graham's Law of Effusion**

A sample of an unknown gas effuses through a small opening at a rate that is $0.387$ times the rate of effusion of $\mathrm{O}_2$ under identical conditions. Determine the molar mass of the unknown gas and identify it.

<details>
<summary>Solution</summary>

Graham's law:

$$
\frac{r_{\mathrm{unknown}}}{r_{\mathrm{O}_2}} = \sqrt{\frac{M_{\mathrm{O}_2}}{M_{\mathrm{unknown}}}}
$$

Given $r_{\mathrm{unknown}}/r_{\mathrm{O}_2} = 0.387$ and $M_{\mathrm{O}_2} = 32.0\mathrm{ g/mol}$:

$$
0.387 = \sqrt{\frac{32.0}{M_{\mathrm{unknown}}}}
$$

$$
0.387^2 = \frac{32.0}{M_{\mathrm{unknown}}}
$$

$$
0.1498 = \frac{32.0}{M_{\mathrm{unknown}}}
$$

$$
M_{\mathrm{unknown}} = \frac{32.0}{0.1498} = 213.5\mathrm{ g/mol}
$$

The molar mass is approximately $214\mathrm{ g/mol}$. This is close to that of mercury vapour ($\mathrm{Hg}$, $A_r = 200.6$) or radon ($\mathrm{Rn}$, $A_r = 222$). Given typical IB problem contexts, this is most consistent with radon gas.

</details>

**Worked Example: Dalton's Law of Partial Pressures**

A mixture of $2.00\mathrm{ g}$ of $\mathrm{H}_2$ and $14.0\mathrm{ g}$ of $\mathrm{N}_2$ is confined in a $10.0\mathrm{ L}$ vessel at $27\degree\mathrm{C}$. Calculate the partial pressure of each gas and the total pressure.

<details>
<summary>Solution</summary>

$$
n(\mathrm{H}_2) = \frac{2.00}{2.02} = 0.990\mathrm{ mol}
$$

$$
n(\mathrm{N}_2) = \frac{14.0}{28.0} = 0.500\mathrm{ mol}
$$

$$
n_{\mathrm{total}} = 0.990 + 0.500 = 1.490\mathrm{ mol}
$$

$$
T = 27\degree\mathrm{C} = 300\mathrm{ K}
$$

Using the ideal gas law for the total mixture ($R = 8.314 \times 10^{-2}\mathrm{ L \cdot kPa/(mol \cdot K)}$):

$$
P_{\mathrm{total}} = \frac{n_{\mathrm{total}}RT}{V} = \frac{1.490 \times 8.314 \times 10^{-2} \times 300}{10.0} = \frac{371.6}{10.0} = 371.6\mathrm{ kPa}
$$

Mole fractions:

$$
x_{\mathrm{H}_2} = \frac{0.990}{1.490} = 0.664
$$

$$
x_{\mathrm{N}_2} = \frac{0.500}{1.490} = 0.336
$$

Partial pressures:

$$
P_{\mathrm{H}_2} = 0.664 \times 371.6 = 247\mathrm{ kPa}
$$

$$
P_{\mathrm{N}_2} = 0.336 \times 371.6 = 125\mathrm{ kPa}
$$

Check: $247 + 125 = 372\mathrm{ kPa}$ (rounding difference from $371.6\mathrm{ kPa}$).

</details>

**Worked Example: Interpreting a Phase Diagram**

On the phase diagram of water, describe what happens when solid ice at $-10\degree\mathrm{C}$ is subjected to increasing pressure at constant temperature. Explain why this behaviour differs from that of most substances.

<details>
<summary>Solution</summary>

On the phase diagram of water, starting at $-10\degree\mathrm{C}$ (solid phase) and increasing pressure at constant temperature, you move horizontally to the right. You cross the **solid--liquid boundary**, meaning the ice **melts** into liquid water.

This is unusual because the solid--liquid boundary on water's phase diagram has a **negative slope**. For nearly all other substances, increasing pressure at constant temperature in the solid region does not cross the melting curve — instead, the solid remains solid or the melting point increases.

The negative slope for water arises because ice is **less dense** than liquid water. Increasing pressure favours the phase with the smaller volume (higher density), which is liquid water. Le Chatelier's principle predicts that the system shifts toward the denser phase when pressure increases.

</details>

**Worked Example: Boiling Point Comparison Using IMF Analysis**

Explain the boiling point trend: $\mathrm{CH}_4$ ($-162\degree\mathrm{C}$) $\lt$ $\mathrm{SiH}_4$ ($-112\degree\mathrm{C}$) $\lt$ $\mathrm{GeH}_4$ ($-88\degree\mathrm{C}$).

<details>
<summary>Solution</summary>

All three molecules are tetrahedral and non-polar, so the only intermolecular forces present are London dispersion forces (LDFs). LDF strength depends on the number of electrons and the polarizability of the electron cloud.

Going down Group 14: $\mathrm{C}$ (6 electrons) $\to$ $\mathrm{Si}$ (14 electrons) $\to$ $\mathrm{Ge}$ (32 electrons). The increasing number of electrons produces larger, more polarizable electron clouds, which generate stronger instantaneous dipoles and thus stronger LDFs.

Since boiling requires overcoming intermolecular forces, stronger LDFs mean a higher boiling point. The trend is entirely consistent with increasing LDF strength down the group.

</details>

---

## Common Pitfalls

- **Using Celsius instead of Kelvin in gas calculations:** The ideal gas law requires absolute temperature. A gas at $27\degree\mathrm{C}$ has $T = 300\mathrm{ K}$, not $27$. Forgetting this conversion typically produces answers that are off by a factor of $\approx 10$.

- **Choosing the wrong value of $R$:** $R = 8.314\mathrm{ J/(mol \cdot K)}$ requires SI units ($\mathrm{Pa}$, $\mathrm{m}^3$). $R = 0.0821\mathrm{ L \cdot atm/(mol \cdot K)}$ requires pressure in atm and volume in litres. Mixing unit systems (e.g., kPa with $0.0821$) yields incorrect results.

- **Confusing STP definitions:** The IB uses STP as $0\degree\mathrm{C}$ and $100\mathrm{ kPa}$, giving $V_m = 22.7\mathrm{ L/mol}$. Many textbooks use the older IUPAC definition ($1\mathrm{ atm} = 101.3\mathrm{ kPa}$, $V_m = 22.4\mathrm{ L/mol}$). Using the wrong molar volume introduces a $\approx 1.3\%$ error.

- **Claiming hydrogen bonding without checking all criteria:** A molecule must have H bonded directly to N, O, or F. $\mathrm{CH}_4$, $\mathrm{HCl}$, and $\mathrm{PH}_3$ do **not** exhibit hydrogen bonding. $\mathrm{H}$ bonded to C is never sufficient, regardless of molecular polarity.

- **Misapplying Graham's law to mixtures:** Graham's law compares rates of effusion for two pure gases. It does not directly give the composition of a gas mixture after partial effusion (the lighter component enriches preferentially, changing the composition over time).

- **Ignoring molecular shape when comparing LDFs:** $n$-pentane and neopentane (2,2-dimethylpropane) have the same molar mass and number of electrons, but $n$-pentane (linear) has a higher boiling point ($36\degree\mathrm{C}$) than neopentane (spherical, $9.5\degree\mathrm{C}$) because the linear shape allows greater surface-area contact and stronger LDFs.

---

## Exam-Style Problems

1. **[Medium]** A sealed container holds $0.200\mathrm{ mol}$ of $\mathrm{CO}_2$ at $50.0\degree\mathrm{C}$ and a pressure of $250\mathrm{ kPa}$. Calculate the volume of the container in litres.

2. **[Medium]** Explain why $\mathrm{HF}$ has a lower boiling point ($19.5\degree\mathrm{C}$) than $\mathrm{H}_2\mathrm{O}$ ($100\degree\mathrm{C}$), even though fluorine is more electronegative than oxygen.

3. **[Hard]** Using the van der Waals equation, calculate the pressure of $2.00\mathrm{ mol}$ of $\mathrm{NH}_3$ in a $5.00\mathrm{ L}$ container at $400\mathrm{ K}$. Given $a = 4.17\mathrm{ L}^2 \cdot \mathrm{atm/mol}^2$ and $b = 0.037\mathrm{ L/mol}$. Compare with the ideal gas prediction and explain the direction of the deviation.

4. **[Hard]** A gas mixture contains $\mathrm{He}$, $\mathrm{Ne}$, and $\mathrm{Ar}$ with mole fractions $0.40$, $0.35$, and $0.25$ respectively. The total pressure is $120\mathrm{ kPa}$. Calculate the partial pressure of each component and the total mass of gas in a $10.0\mathrm{ L}$ container at $300\mathrm{ K}$.

5. **[Medium]** On a phase diagram, label the triple point, critical point, and all phase boundaries. Explain why the critical point represents the temperature above which a gas cannot be liquefied by pressure alone.

6. **[Hard]** Explain why $\mathrm{CCl}_4$ (molar mass $154\mathrm{ g/mol}$) is a liquid at room temperature (bp $76.7\degree\mathrm{C}$) while $\mathrm{Ar}$ (molar mass $40\mathrm{ g/mol}$) is a gas (bp $-186\degree\mathrm{C}$), even though both are non-polar and only experience London dispersion forces.

7. **[Medium]** A sample of gas effuses through an apparatus in $42\mathrm{ s}$. An equal number of moles of an unknown gas effuses through the same apparatus in $78\mathrm{ s}$. If the first gas is $\mathrm{CO}_2$, calculate the molar mass of the unknown gas.

8. **[Hard]** At high pressures, real gases can have $Z \gt 1$. Explain the molecular-level origin of this deviation. Under what conditions of temperature and molecular identity would you expect this deviation to be most significant?

---

## If You Get These Wrong, Revise:

- **Atomic structure and electron configuration** → Review [./atomic-theory](./atomic-theory)
- **Bonding and intermolecular forces in depth** → Review [./chemical-bonding-advanced](./chemical-bonding-advanced)
- **Thermodynamics (energy changes in state transitions)** → Review [./thermodynamics](./thermodynamics)
- **Stoichiometry and the mole concept** → Review [./stoichiometry](./stoichiometry)
- **Periodic trends affecting physical properties** → Review [./periodicity](./periodicity)
