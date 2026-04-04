---
title: Thermodynamics
date: 2025-04-28T21:30:19.653Z
tags:
  - physics
---

## Ideal Gas Law

The ideal gas law states the relationship of ideal gas qualities:

$$
\begin{aligned}
    PV = nRT = n N_A k_B T = N k_B T
\end{aligned}
$$

where: $P$: Pressure $V$: Volume $T$: Temperature $n$: Number of moles $N$: Number of particles $R$:
Gas constant, where $R = N_A \cdot k_B$ $N_A$: Avogadro constant $k_B$: Boltzmann constant

## Average Translational Kinetic Energy

Kinetic theory states the average pressure ($P$) of an ideal gas is:

$$
\begin{aligned}
    P = \frac{N}{3V} m\bar{v}^2\\
    P\frac{3V}{2N} = \frac{1}{2}m\bar{v}^2\\
    \left(\frac{N k_B T}{V}\right)\frac{3V}{2N} = \frac{1}{2}m\bar{v}^2\\
    \bar{E_k} = \frac{3}{2}k_B T
\end{aligned}
$$

## First Law of Thermodynamics

The first law of thermodynamics states the law of conservation of energy where the change of
internal energy ($\Delta U$) is the heat transfer ($Q$) to the system subtract the work done ($W$)
from the process:

$$
\begin{aligned}
    \Delta U = Q - W
\end{aligned}
$$

## Second Law of Thermodynamics

The second law of thermodynamics states in any energy transform, the total entropy of an isolated
system can never decrease over time.

## Internal energy

The internal energy ($U$) is the accumulation of potential energy and kinetic energy. Therefore the
change of internal energy is directly effected by the change of average translational kinetic energy
($\bar{E_k}$) by the change of temperature ($\Delta T$):

$$
\begin{aligned}
    \Delta U = N \Delta \bar{E_k} = \frac{3}{2}Nk_B\Delta T = \frac{3}{2} nR\Delta T
\end{aligned}
$$

## Thermodynamic Processes

### Adiabatic Process

Adiabatic process is a thermodynamic process where there is no heat transfer ($Q=0$) between the
system and surroundings:

$$
\begin{aligned}
    \Delta U = -W
\end{aligned}
$$

Where for monatomic ideal gas, adiabatic process satisfy the condition:

$$
\begin{aligned}
    \Delta PV^{\frac{5}{3}} = 0
\end{aligned}
$$

### Isothermal Process

Isothermal process is a thermodynamic process that occurs at constant temperature ($\Delta T = 0$),
normally occurs when heat transfer cause a change in volume that the average kinetic energy of
particles does not increase:

$$
\begin{aligned}
    \Delta \left(\frac{PV}{nR}\right) = 0
\end{aligned}
$$

### Isovolumetric Process

Isovolumetric process is a thermodynamic process that occurs at constant volume ($\Delta V = 0$),
since work done rely on the change of volume ($ W = P \Delta V$ = 0), heat transfer ($Q$) direct
result in the change of internal energy:

$$
\begin{aligned}
    \Delta U = Q - W = Q \\
    \Delta \left(\frac{P}{nRT}\right) = 0
\end{aligned}
$$

### Isobaric Process

Isobaric Process is a thermodynamic process that occurs at constant pressure ($\Delta P = 0$):

$$
\begin{aligned}
    \Delta \left(\frac{V}{nRT}\right) = 0
\end{aligned}
$$

---

## Gas Laws (Empirical)

Before the ideal gas law was derived from kinetic theory, several empirical relationships were
discovered experimentally. Each describes how two gas variables relate while a third is held
constant.

### Boyle's Law ($T$ = constant)

At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its
volume:

$$
PV = \text{constant} \quad \text{or} \quad P_1 V_1 = P_2 V_2
$$

**Microscopic explanation:** At constant temperature, the average kinetic energy of molecules is
constant. If volume decreases, molecules collide with the walls more frequently, increasing
pressure.

### Charles's Law ($P$ = constant)

At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute
temperature:

$$
V \propto T \quad \text{or} \quad \frac{V_1}{T_1} = \frac{V_2}{T_2}
$$

**Microscopic explanation:** Increasing temperature increases the average speed of molecules. To
maintain constant pressure (constant force per unit area on the walls), the volume must increase so
that molecules travel further between collisions.

### Gay-Lussac's Law ($V$ = constant)

At constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute
temperature:

$$
P \propto T \quad \text{or} \quad \frac{P_1}{T_1} = \frac{P_2}{T_2}
$$

**Microscopic explanation:** At constant volume, increasing temperature increases molecular speed.
Molecules collide with the walls more frequently and with greater force, increasing pressure.

### Combining the Gas Laws

When none of the variables are held constant:

$$
\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}
$$

This follows directly from the ideal gas law since $\frac{PV}{T} = nR = \text{constant}$ for a fixed
amount of gas.

---

## Kinetic Theory of Gases

The kinetic theory of gases provides a microscopic explanation for macroscopic gas behaviour. It is
based on several assumptions:

1. A gas consists of a large number of small particles (molecules or atoms) in continuous, random
   motion.
2. The volume of individual particles is negligible compared to the total volume of the gas.
3. Intermolecular forces are negligible except during collisions.
4. All collisions are perfectly elastic (kinetic energy is conserved).
5. The duration of collisions is negligible compared to the time between collisions.

### Derivation of Pressure from Kinetic Theory

Consider $N$ molecules in a cubic container of side length $L$ and volume $V = L^3$. A single
molecule of mass $m$ moving with velocity $v_x$ in the $x$-direction bounces off a wall. The change
in momentum per collision is $\Delta p = 2mv_x$.

The time between collisions with the same wall is $\Delta t = 2L / v_x$.

The average force exerted by one molecule on one wall:

$$
F = \frac{\Delta p}{\Delta t} = \frac{2mv_x}{2L/v_x} = \frac{mv_x^2}{L}
$$

Summing over all $N$ molecules:

$$
F_{\text{total}} = \frac{m}{L} \sum_{i=1}^{N} v_{x,i}^2 = \frac{m N \langle v_x^2 \rangle}{L}
$$

Since the motion is random,
$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{1}{3}\langle v^2 \rangle$.

The pressure on one wall:

$$
P = \frac{F}{A} = \frac{m N \langle v_x^2 \rangle}{L \cdot L^2} = \frac{m N \cdot \frac{1}{3}\langle v^2 \rangle}{V}
$$

$$
P = \frac{1}{3} \frac{N m \langle v^2 \rangle}{V} = \frac{1}{3} \rho \langle v^2 \rangle
$$

where $\rho = Nm/V$ is the density.

### Root-Mean-Square Speed

The root-mean-square (rms) speed is defined as:

$$
v_{\text{rms}} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3k_B T}{m}} = \sqrt{\frac{3RT}{M}}
$$

where $M$ is the molar mass. Note that $v_{\text{rms}}$ is **not** the average speed, but it is a
useful measure of the typical molecular speed.

---

## Specific Heat Capacity

The specific heat capacity ($c$) of a substance is the amount of energy required to raise the
temperature of 1 kg of the substance by 1 K (or 1°C):

$$
Q = mc\Delta T
$$

where:

- $Q$ is the heat energy transferred (J)
- $m$ is the mass (kg)
- $c$ is the specific heat capacity (J kg⁻¹ K⁻¹)
- $\Delta T$ is the temperature change (K)

**Common specific heat capacities:**

| Substance | $c$ (J kg⁻¹ K⁻¹) |
| :-------- | :--------------- |
| Water     | 4186             |
| Ice       | 2090             |
| Aluminium | 900              |
| Copper    | 385              |
| Iron      | 449              |

**Exam tip:** Water has an unusually high specific heat capacity. This is why coastal regions have
more moderate climates than inland regions — water heats and cools slowly compared to land.

### Worked Example: Specific Heat

**Question:** 200 g of water at $20°$C is heated until its temperature reaches $80°$C. How much
energy is required? ($c_{\text{water}} = 4186$ J kg⁻¹ K⁻¹)

**Solution:**

$$
Q = mc\Delta T = (0.200)(4186)(80 - 20) = (0.200)(4186)(60) = 50232 \text{ J} \approx 50.2 \text{ kJ}
$$

---

## Latent Heat

Latent heat is the energy absorbed or released by a substance during a **phase change** at constant
temperature.

### Specific Latent Heat of Fusion ($L_f$)

The energy required to change 1 kg of a substance from solid to liquid at its melting point (or
released when freezing):

$$
Q = mL_f
$$

### Specific Latent Heat of Vaporisation ($L_v$)

The energy required to change 1 kg of a substance from liquid to gas at its boiling point (or
released when condensing):

$$
Q = mL_v
$$

| Substance | $L_f$ (J kg⁻¹)     | $L_v$ (J kg⁻¹)     |
| :-------- | :----------------- | :----------------- |
| Water     | $3.34 \times 10^5$ | $2.26 \times 10^6$ |
| Ethanol   | $1.05 \times 10^5$ | $8.54 \times 10^5$ |
| Copper    | $2.05 \times 10^5$ | $4.73 \times 10^6$ |

**Key concept:** During a phase change, temperature remains constant because all energy goes into
breaking or forming intermolecular bonds, not increasing kinetic energy.

### Worked Example: Heating Curve

**Question:** How much total energy is required to convert 500 g of ice at $-20°$C to steam at
$120°$C? Use: $c_{\text{ice}} = 2090$ J kg⁻¹ K⁻¹, $c_{\text{water}} = 4186$ J kg⁻¹ K⁻¹,
$c_{\text{steam}} = 2010$ J kg⁻¹ K⁻¹, $L_f = 3.34 \times 10^5$ J kg⁻¹, $L_v = 2.26 \times 10^6$ J
kg⁻¹.

**Solution:** Break the process into five stages:

1. Heat ice from $-20°$C to $0°$C:

   $$
   Q_1 = mc\Delta T = (0.500)(2090)(20) = 20900 \text{ J}
   $$

2. Melt ice at $0°$C:

   $$
   Q_2 = mL_f = (0.500)(3.34 \times 10^5) = 167000 \text{ J}
   $$

3. Heat water from $0°$C to $100°$C:

   $$
   Q_3 = mc\Delta T = (0.500)(4186)(100) = 209300 \text{ J}
   $$

4. Vaporise water at $100°$C:

   $$
   Q_4 = mL_v = (0.500)(2.26 \times 10^6) = 1130000 \text{ J}
   $$

5. Heat steam from $100°$C to $120°$C:
   $$
   Q_5 = mc\Delta T = (0.500)(2010)(20) = 20100 \text{ J}
   $$

$$
Q_{\text{total}} = Q_1 + Q_2 + Q_3 + Q_4 + Q_5 = 20900 + 167000 + 209300 + 1130000 + 20100 = 1547300 \text{ J} \approx 1.55 \text{ MJ}
$$

---

## Entropy (HL)

Entropy ($S$) is a thermodynamic quantity that measures the degree of disorder or randomness in a
system.

### Macroscopic Definition

$$
\Delta S = \frac{Q}{T}
$$

where $Q$ is the heat transferred reversibly and $T$ is the absolute temperature (K).

- Entropy increases when heat is added to a system ($Q \gt 0 \Rightarrow \Delta S \gt 0$).
- Entropy decreases when heat is removed ($Q \lt 0 \Rightarrow \Delta S \lt 0$).
- For an adiabatic process ($Q = 0$), $\Delta S = 0$ (isentropic).

### Microscopic Definition

$$
S = k_B \ln \Omega
$$

where $\Omega$ (omega) is the number of microstates corresponding to a given macrostate. A
microstate is a specific arrangement of particles; a macrostate is defined by macroscopic properties
(P, V, T).

- More microstates = higher entropy = greater disorder.
- The second law states that isolated systems tend toward the macrostate with the most microstates.

### The Second Law of Thermodynamics

The total entropy of an isolated system never decreases:

$$
\Delta S_{\text{total}} \geq 0
$$

This means:

- In irreversible processes, total entropy increases.
- In reversible processes, total entropy stays constant.
- Entropy can decrease locally (e.g. a refrigerator) but the total entropy of the system and its
  surroundings must increase.

### Entropy and Heat Engines

For a heat engine operating between a hot reservoir at $T_h$ and a cold reservoir at $T_c$:

$$
\Delta S_{\text{total}} = -\frac{Q_h}{T_h} + \frac{Q_c}{T_c} \geq 0
$$

This leads to the Carnot efficiency limit:

$$
\eta_{\text{Carnot}} = 1 - \frac{T_c}{T_h}
$$

No real engine can exceed this efficiency.

---

## PV Diagrams and Work

### Work Done by a Gas

The work done by a gas during expansion or compression is the area under the PV curve:

$$
W = \int P \, dV
$$

For a constant pressure process: $W = P\Delta V$.

**Interpreting PV diagrams:**

- The **area under the curve** = work done by the gas.
- **Clockwise cycles** on a PV diagram represent heat engines (net work output).
- **Anti-clockwise cycles** represent refrigerators (net work input).

### Worked Example: First Law Calculation

**Question:** A monatomic ideal gas expands isobarically from $V_1 = 2.0 \times 10^{-3}$ m³ to
$V_2 = 5.0 \times 10^{-3}$ m³ at a pressure of $P = 2.0 \times 10^5$ Pa. During the expansion, 1500
J of heat is added to the gas. Find the change in internal energy.

**Solution:**

Work done by the gas:

$$
W = P\Delta V = (2.0 \times 10^5)(5.0 \times 10^{-3} - 2.0 \times 10^{-3}) = (2.0 \times 10^5)(3.0 \times 10^{-3}) = 600 \text{ J}
$$

Using the first law:

$$
\Delta U = Q - W = 1500 - 600 = 900 \text{ J}
$$

The internal energy increased by 900 J.

---

## Exam Tips for Thermodynamics

1. **Always use absolute temperature (Kelvin).** Gas law calculations will be wrong if you use
   Celsius.
2. **Identify the process type first.** Is it adiabatic, isothermal, isovolumetric, or isobaric?
   This tells you which quantities are constant.
3. **Sign conventions matter.** In the IB convention, $W$ is work done **by** the gas. Positive $W$
   means the gas expands; negative $W$ means it is compressed.
4. **Break heating problems into stages.** When a substance changes temperature AND phase, calculate
   each stage separately and add the energies.
5. **The second law explains why some processes are irreversible.** Heat flowing from cold to hot
   without external work violates the second law.
