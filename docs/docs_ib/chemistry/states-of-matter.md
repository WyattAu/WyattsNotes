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
