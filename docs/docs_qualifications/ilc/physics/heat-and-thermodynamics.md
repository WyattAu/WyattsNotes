---
title: Heat and Thermodynamics
date: 2026-04-14
tags:
  - Physics
  - ILC
categories:
  - Physics
slug: heat-and-thermodynamics
---

# Heat and Thermodynamics

This topic covers temperature, heat transfer, specific heat capacity, latent heat, gas laws, and the
laws of thermodynamics. These concepts connect the microscopic behaviour of particles (kinetic
theory) to the macroscopic properties we can measure (pressure, volume, temperature), bridging
classical mechanics and statistical physics.

## Temperature and Heat

### Temperature Scales (OL/HL)

Temperature is a measure of the average kinetic energy of the particles in a substance. Three scales
are commonly used:

| Scale             | Boiling point of water | Freezing point of water | Absolute zero |
| ----------------- | ---------------------- | ----------------------- | ------------- |
| Celsius ($°$C)    | $100$                  | $0$                     | $-273.15$     |
| Kelvin (K)        | $373.15$               | $273.15$                | $0$           |
| Fahrenheit ($°$F) | $212$                  | $32$                    | $-459.67$     |

Conversion between Celsius and Kelvin:

$$
T_K = T_{°\mathrm{C}} + 273.15
$$

Conversion between Celsius and Fahrenheit:

$$
T_{°\mathrm{F}} = \frac{9}{5}T_{°\mathrm{C}} + 32
$$

### Why Kelvin Is the Natural Scale for Physics

The Kelvin scale is an absolute thermodynamic temperature scale. Zero kelvin (absolute zero) is the
lowest possible temperature, at which all classical thermal motion ceases. This is not just a
convention -- it follows from the ideal gas law extrapolation and the third law of thermodynamics.

All physical laws involving temperature (gas laws, kinetic theory, thermodynamic relations) require
temperature in kelvin. Using Celsius in the ideal gas law, for example, would give nonsensical
results because the zero point of the Celsius scale is arbitrary (the freezing point of water), not
fundamental.

### Heat vs Temperature (OL/HL)

- **Temperature** is a measure of the average kinetic energy of particles. It is an intensive
  property: it does not depend on the amount of material.
- **Heat** is the transfer of energy due to a temperature difference. It is an extensive property:
  it depends on the amount of material.

A bath of water at $50°$C and a cup of water at $50°$C have the same temperature, but the bath
contains far more thermal energy. Heat flows from the bath to a colder object faster than the cup
would, not because the bath is at a higher temperature, but because it has more energy to give.

### Thermal Equilibrium

When two objects at different temperatures are placed in contact, heat flows from the hotter to the
colder until they reach the same temperature. At this point they are in **thermal equilibrium**, and
no net heat transfer occurs. The zeroth law of thermodynamics formalises this: if A is in thermal
equilibrium with B, and B with C, then A is in thermal equilibrium with C.

## Specific Heat Capacity (OL/HL)

The specific heat capacity $c$ is the energy required to raise the temperature of 1 kg of a
substance by 1 K (or $1°$C -- the size of the degree is the same on both scales):

$$
Q = mc\Delta T
$$

where $Q$ is the heat energy transferred, $m$ is the mass, and $\Delta T$ is the temperature change.

The unit of $c$ is $\text{J/(kg K)}$ or $\text{J/(kg °C)}$ -- these are numerically identical
because a change of 1 K equals a change of 1 $°$C.

| Substance | $c$ (J/kg K) |
| --------- | ------------ |
| Water     | 4180         |
| Ice       | 2100         |
| Copper    | 390          |
| Aluminium | 900          |
| Iron      | 450          |
| Lead      | 128          |

Water has an unusually high specific heat capacity, which is why it is effective as a coolant and
why coastal climates are more moderate than inland climates (oceans absorb and release large amounts
of energy with relatively small temperature changes).

### Why Different Substances Have Different Specific Heat Capacities

Specific heat capacity depends on the number of degrees of freedom available to the particles. In a
monatomic ideal gas, energy is stored only as translational kinetic energy (3 degrees of freedom).
In water, energy can be stored in translational, rotational, and vibrational modes, as well as in
hydrogen bonds between molecules. More modes mean more energy is needed to raise the temperature.

For solids, the Dulong-Petit law gives a rough estimate: $c \approx \frac{3R}{M}$, where $M$ is the
molar mass. This predicts about $25\text{ J/(mol K)}$ for many solids at room temperature.

### Water's High Specific Heat Capacity

Water has $c = 4180\text{ J/(kg K)}$, which is exceptionally high. This is because:

- Water molecules have three translational, three rotational, and vibrational degrees of freedom.
- Hydrogen bonding between molecules absorbs additional energy as the bonds stretch and deform.
- This high value has significant consequences for climate, biology, and engineering.

**Example (OL):** How much energy is needed to raise the temperature of 2 kg of water from $20°$C to
$80°$C?

$$
Q = mc\Delta T = 2 \times 4180 \times 60 = 501600\text{ J} \approx 502\text{ kJ}
$$

### Calorimetry (HL)

In a calorimeter, the principle of conservation of energy requires that the heat lost by a hot
object equals the heat gained by the cold object (assuming no heat loss to surroundings):

$$
m_h c_h |\Delta T_h| = m_c c_c |\Delta T_c|
$$

In practice, the calorimeter itself (the container) also absorbs heat, and this should be included:

$$
m_h c_h (T_h - T_f) = m_c c_c (T_f - T_c) + m_{\mathrm{cal}} c_{\mathrm{cal}} (T_f - T_c)
$$

where $T_f$ is the final equilibrium temperature.

**Example (HL):** A 0.5 kg piece of copper at $200°$C is placed in 1 kg of water at $20°$C. Find the
final temperature. (Ignore the calorimeter's heat capacity.)

$$
0.5 \times 390 \times (200 - T) = 1 \times 4180 \times (T - 20)
$$

$$
195(200 - T) = 4180(T - 20)
$$

$$
39000 - 195T = 4180T - 83600
$$

$$
122600 = 4375T \implies T \approx 28.0°\mathrm{C}
$$

Note that the temperature change of the copper ($172°$C) is much larger than that of the water
($8°$C), even though the energy transferred is the same. This reflects the much lower specific heat
capacity of copper.

### Method of Mixtures

The method of mixtures is a standard experimental technique for determining specific heat capacity.
A known mass of a substance at a known temperature is mixed with a known mass of water at a
different temperature. By measuring the final equilibrium temperature, the unknown specific heat
capacity can be calculated.

**Example (HL):** A $0.2\text{ kg}$ metal block is heated to $150°$C and placed in $0.5\text{ kg}$
of water at $15°$C$. The final temperature is $20°$C. Find the specific heat capacity of the metal.
(Ignore calorimeter heat capacity.)

$$
0.2 \times c \times (150 - 20) = 0.5 \times 4180 \times (20 - 15)
$$

$$
0.2 \times c \times 130 = 0.5 \times 4180 \times 5
$$

$$
26c = 10450 \implies c = 402\text{ J/(kg K)}
$$

This value is close to that of aluminium.

## Latent Heat (OL/HL)

When a substance changes phase (solid to liquid, or liquid to gas), energy is transferred without
any change in temperature. This energy is called **latent heat** (from the Latin "latent" meaning
"hidden").

### Why Temperature Does Not Change During Phase Transitions

During melting or boiling, the energy supplied does not increase the average kinetic energy of the
particles (which would raise the temperature). Instead, it increases the potential energy by
overcoming the intermolecular forces that hold the particles in their current arrangement. In
melting, bonds between molecules in the solid lattice are broken; in vaporisation, molecules are
completely separated from each other.

### Specific Latent Heat of Fusion

The specific latent heat of fusion $L_f$ is the energy required to change 1 kg of a substance from
solid to liquid at its melting point:

$$
Q = mL_f
$$

### Specific Latent Heat of Vaporisation

The specific latent heat of vaporisation $L_v$ is the energy required to change 1 kg of a substance
from liquid to gas at its boiling point:

$$
Q = mL_v
$$

| Substance | $L_f$ (kJ/kg) | $L_v$ (kJ/kg) |
| --------- | ------------- | ------------- |
| Water     | $334$         | $2260$        |
| Ice       | $334$         | --            |
| Ethanol   | $105$         | $855$         |
| Copper    | $205$         | $4730$        |
| Lead      | $23$          | $870$         |

Note that $L_v$ is generally much larger than $L_f$ because completely separating molecules
(boiling) requires overcoming all intermolecular forces, whereas melting only needs to disrupt the
ordered lattice while keeping molecules close together.

**Example (OL):** How much energy is needed to convert 0.2 kg of ice at $0°$C to water at $0°$C?

$$
Q = mL_f = 0.2 \times 3.34 \times 10^5 = 66800\text{ J} = 66.8\text{ kJ}
$$

### Multi-Stage Heating Problems (HL)

When heating a substance through multiple phases, the total energy is the sum of the energy for each
stage:

1. Heating the solid to its melting point: $Q_1 = mc_{\text{solid}}\Delta T_1$
2. Melting at the melting point: $Q_2 = mL_f$
3. Heating the liquid to its boiling point: $Q_3 = mc_{\text{liquid}}\Delta T_2$
4. Vaporising at the boiling point: $Q_4 = mL_v$
5. Heating the gas (if applicable): $Q_5 = mc_{\mathrm{gas}}\Delta T_3$

$$
Q_{\text{total}} = Q_1 + Q_2 + Q_3 + Q_4 + Q_5
$$

**Example (HL):** How much energy is needed to convert 100 g of ice at $-10°$C to steam at $100°$C?

1. Heat ice from $-10°$C to $0°$C: $Q_1 = 0.1 \times 2100 \times 10 = 2100\text{ J}$.
2. Melt ice at $0°$C: $Q_2 = 0.1 \times 3.34 \times 10^5 = 33400\text{ J}$.
3. Heat water from $0°$C to $100°$C: $Q_3 = 0.1 \times 4180 \times 100 = 41800\text{ J}$.
4. Vaporise water at $100°$C: $Q_4 = 0.1 \times 2.26 \times 10^6 = 226000\text{ J}$.

$$
Q_{\text{total}} = 2100 + 33400 + 41800 + 226000 = 303300\text{ J} \approx 303\text{ kJ}
$$

Notice that the latent heat of vaporisation ($226\text{ kJ}$) dominates the total energy. This is
why steam burns are so much more dangerous than water burns at the same temperature: steam at
$100°$C contains an additional $2260\text{ kJ/kg}$ of energy compared to water at $100°$C, and this
energy is released when the steam condenses on the skin.

## Gas Laws

The gas laws describe the macroscopic behaviour of gases. They were established experimentally and
can be derived from kinetic theory.

### Boyle's Law (OL/HL)

At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its
volume:

$$
pV = \text{constant} \implies p_1 V_1 = p_2 V_2
$$

**Microscopic explanation:** At constant temperature, the average speed of the molecules is
constant. Compressing the gas into a smaller volume increases the number of molecular collisions per
unit area per unit time on the walls, increasing the pressure.

A $pV$ graph at constant temperature is a hyperbola. Plotting $p$ versus $1/V$ yields a straight
line through the origin.

### Charles's Law (OL/HL)

At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute
temperature:

$$
\frac{V}{T} = \text{constant} \implies \frac{V_1}{T_1} = \frac{V_2}{T_2}
$$

**Microscopic explanation:** At constant pressure, increasing the temperature increases the average
speed of the molecules. To maintain the same pressure (same force per unit area on the walls), the
gas must expand so that fewer molecules hit each unit area per unit time.

Extrapolating Charles's law to $V = 0$ gives $T = 0\text{ K}$ (absolute zero). This is how absolute
zero was first estimated experimentally.

### Gay-Lussac's Law (OL/HL)

At constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute
temperature:

$$
\frac{p}{T} = \text{constant} \implies \frac{p_1}{T_1} = \frac{p_2}{T_2}
$$

**Microscopic explanation:** At constant volume, increasing the temperature increases the average
speed of the molecules. Faster molecules hit the walls harder and more frequently, increasing the
pressure.

### Combined Gas Law (HL)

Combining Boyle's, Charles's, and Gay-Lussac's laws:

$$
\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}
$$

This reduces to each individual law when the appropriate variable is held constant.

**Example (HL):** A gas occupies $3\text{ m}^3$ at $2 \times 10^5\text{ Pa}$ and $300\text{ K}$.
Find its volume at $10^5\text{ Pa}$ and $400\text{ K}$.

$$
V_2 = \frac{p_1 V_1 T_2}{p_2 T_1} = \frac{2 \times 10^5 \times 3 \times 400}{10^5 \times 300} = 8\text{ m}^3
$$

## Ideal Gas Law (HL)

The ideal gas law combines the gas laws with Avogadro's law (equal volumes of gases at the same
temperature and pressure contain equal numbers of molecules):

$$
pV = nRT
$$

where $n$ is the number of moles and $R = 8.314\text{ J/(mol K)}$ is the universal gas constant.

### The Ideal Gas Approximation

An ideal gas is a theoretical gas in which:

- The molecules occupy negligible volume compared to the container.
- There are no intermolecular forces between molecules.
- All collisions are perfectly elastic.

Real gases approximate ideal behaviour at low pressures and high temperatures, when the molecules
are far apart and moving fast. At high pressures and low temperatures, deviations occur due to
intermolecular forces and the finite size of molecules.

### Alternative Forms

Using $n = N/N_A$ where $N$ is the number of molecules and
$N_A = 6.022 \times 10^{23}\text{ mol}^{-1}$ is Avogadro's number:

$$
pV = Nk_BT
$$

where $k_B = R/N_A = 1.38 \times 10^{-23}\text{ J/K}$ is Boltzmann's constant.

The molar form using the molar volume $V_m = V/n$:

$$
pV_m = RT
$$

At STP (standard temperature and pressure: $273.15\text{ K}$, $1.013 \times 10^5\text{ Pa}$), one
mole of ideal gas occupies $22.4\text{ L}$.

**Example (HL):** Find the volume occupied by 2 mol of gas at $300\text{ K}$ and
$1.01 \times 10^5\text{ Pa}$.

$$
V = \frac{nRT}{p} = \frac{2 \times 8.314 \times 300}{1.01 \times 10^5} \approx 0.0494\text{ m}^3 = 49.4\text{ L}
$$

**Example (HL):** A gas cylinder of volume $0.05\text{ m}^3$ contains oxygen at a pressure of
$2 \times 10^6\text{ Pa}$ and temperature $300\text{ K}$. Find the mass of oxygen
($M_{\mathrm{O}_2} = 0.032\text{ kg/mol}$).

$$
n = \frac{pV}{RT} = \frac{2 \times 10^6 \times 0.05}{8.314 \times 300} = \frac{100000}{2494.2} = 40.1\text{ mol}
$$

$$
m = nM = 40.1 \times 0.032 = 1.28\text{ kg}
$$

## Kinetic Theory of Gases (HL)

### Assumptions of the Kinetic Theory

1. A gas consists of a very large number of small particles (molecules or atoms) in continuous
   random motion.
2. The volume of the particles is negligible compared to the volume of the container.
3. Collisions between particles and between particles and walls are perfectly elastic (kinetic
   energy is conserved).
4. There are no intermolecular forces of attraction or repulsion between particles, except during
   collisions.
5. The duration of collisions is negligible compared to the time between collisions.
6. Gravity has no effect on molecular motion.

### Deriving Pressure from Kinetic Theory

Consider a gas in a cubical container of side $L$. A molecule of mass $m$ moving with velocity
$\mathbf{v} = (v_x, v_y, v_z)$ bounces elastically off a wall perpendicular to the x-axis.

The change in momentum per collision with this wall is:

$$
\Delta p = mv_x - (-mv_x) = 2mv_x
$$

The time between successive collisions with the same wall is $\Delta t = 2L/v_x$.

The force exerted on the wall by this molecule:

$$
F = \frac{\Delta p}{\Delta t} = \frac{2mv_x}{2L/v_x} = \frac{mv_x^2}{L}
$$

Pressure on the wall (area $A = L^2$):

$$
p = \frac{F}{A} = \frac{mv_x^2}{L^3} = \frac{mv_x^2}{V}
$$

For $N$ molecules, summing over all molecules:

$$
p = \frac{m}{V}\overline{v_x^2}
$$

where $\overline{v_x^2}$ is the mean square x-velocity. By symmetry,
$\overline{v_x^2} = \overline{v_y^2} = \overline{v_z^2}$, and:

$$
\overline{v^2} = \overline{v_x^2} + \overline{v_y^2} + \overline{v_z^2} = 3\overline{v_x^2}
$$

Therefore:

$$
p = \frac{1}{3}\frac{Nm}{V}\overline{v^2}
$$

This is the fundamental equation of kinetic theory.

### Connection to the Ideal Gas Law

Comparing $pV = \frac{1}{3}Nm\overline{v^2}$ with $pV = Nk_BT$:

$$
\frac{1}{3}Nm\overline{v^2} = Nk_BT
$$

$$
\frac{1}{2}m\overline{v^2} = \frac{3}{2}k_BT
$$

This is a crucial result: the average translational kinetic energy of a gas molecule is proportional
to the absolute temperature and depends only on temperature. It provides the microscopic definition
of temperature.

### Root Mean Square Speed

The root mean square (RMS) speed is defined as:

$$
c_{\mathrm{rms}} = \sqrt{\overline{v^2}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}
$$

where $M$ is the molar mass (kg/mol).

Note: $c_{\mathrm{rms}}$ is not the same as the average speed or the most probable speed. The Maxwell
distribution gives:

- Most probable speed: $v_p = \sqrt{\frac{2k_BT}{m}}$
- Average speed: $\bar{v} = \sqrt{\frac{8k_BT}{\pi m}}$
- RMS speed: $c_{\mathrm{rms}} = \sqrt{\frac{3k_BT}{m}}$

The relationship is $v_p \lt \bar{v} \lt c_{\mathrm{rms}}$.

**Example (HL):** Find the RMS speed of nitrogen molecules ($M = 0.028\text{ kg/mol}$) at
$300\text{ K}$.

$$
c_{\mathrm{rms}} = \sqrt{\frac{3 \times 8.314 \times 300}{0.028}} = \sqrt{267000} \approx 517\text{ m/s}
$$

**Example (HL):** Compare the RMS speeds of hydrogen ($M = 0.002\text{ kg/mol}$) and oxygen
($M = 0.032\text{ kg/mol}$) at the same temperature.

$$
\frac{c_{\mathrm{rms}}(\mathrm{H}_2)}{c_{\mathrm{rms}}(\mathrm{O}_2)} = \sqrt{\frac{M_{\mathrm{O}_2}}{M_{\mathrm{H}_2}}} = \sqrt{\frac{0.032}{0.002}} = \sqrt{16} = 4
$$

Hydrogen molecules move four times faster than oxygen molecules at the same temperature. This is why
hydrogen escapes from the Earth's atmosphere much more readily than oxygen (a process called
atmospheric escape).

### Internal Energy of an Ideal Gas

For a monatomic ideal gas (e.g., helium, neon, argon), the internal energy consists solely of
translational kinetic energy:

$$
U = \frac{3}{2}Nk_BT = \frac{3}{2}nRT
$$

For a diatomic ideal gas (e.g., $\mathrm{N}_2$, $\mathrm{O}_2$), rotational kinetic energy adds two more
degrees of freedom:

$$
U = \frac{5}{2}nRT
$$

This distinction is important when calculating the molar specific heat capacities.

## Laws of Thermodynamics (HL)

### First Law

The first law of thermodynamics is a statement of energy conservation for thermodynamic systems:

$$
\Delta U = Q - W
$$

where:

- $\Delta U$ is the change in internal energy of the system.
- $Q$ is the heat added to the system (positive if heat flows in).
- $W$ is the work done by the system (positive if the system expands).

**Sign convention:** Heat added to the system is positive. Work done by the system is positive. Work
done on the system is negative $W$ (or equivalently, $-W$ is done on the system).

### Thermodynamic Processes

**Isothermal process** ($\Delta T = 0$): The temperature remains constant.

$$
\Delta U = 0 \implies Q = W
$$

All heat added to the system is converted to work, and vice versa. For an ideal gas,
$pV = \text{constant}$, and the work done is:

$$
W = nRT\ln\left(\frac{V_2}{V_1}\right)
$$

**Isochoric (isovolumetric) process** ($\Delta V = 0$): The volume remains constant.

$$
W = 0 \implies \Delta U = Q
$$

All heat added goes into increasing the internal energy. No work is done because the gas does not
expand.

**Isobaric process** ($\Delta p = 0$): The pressure remains constant.

$$
W = p\Delta V
$$

The work done equals the pressure times the change in volume.

**Adiabatic process** ($Q = 0$): No heat is exchanged with the surroundings.

$$
\Delta U = -W
$$

Work done by the system comes entirely from its internal energy, so the temperature decreases during
expansion and increases during compression. For an ideal gas:

$$
pV^\gamma = \text{constant}
$$

where $\gamma = C_p/C_v$ is the ratio of specific heat capacities ($5/3$ for monatomic, $7/5$ for
diatomic gases).

### Work Done by a Gas

The work done by a gas during expansion or compression is the area under the $pV$ curve:

$$
W = \int_{V_1}^{V_2} p \, dV
$$

For an isobaric process, this simplifies to $W = p(V_2 - V_1)$. For an isothermal process of an
ideal gas, $W = nRT\ln(V_2/V_1)$.

### Cyclic Processes and the First Law

In a cyclic process, the system returns to its initial state, so $\Delta U = 0$. Therefore:

$$
Q_{\mathrm{net}} = W_{\mathrm{net}}
$$

The net work done by the system equals the net heat absorbed. On a $pV$ diagram, the net work equals
the area enclosed by the cycle.

### Second Law

The second law of thermodynamics has several equivalent formulations:

1. **Clausius statement:** Heat cannot spontaneously flow from a colder body to a hotter body
   without external work being done.
2. **Kelvin-Planck statement:** No heat engine operating in a cycle can convert all the absorbed
   heat into work. Some heat must be rejected to a cold reservoir.
3. **Entropy statement:** The total entropy of an isolated system never decreases.

The second law explains why perpetual motion machines of the second kind (100% efficient heat
engines) are impossible, even though they do not violate the first law.

### Carnot Cycle and Efficiency

The Carnot cycle is the most efficient possible heat engine operating between two temperatures. It
consists of four reversible processes:

1. Isothermal expansion at $T_H$ (absorbing heat $Q_H$ from the hot reservoir).
2. Adiabatic expansion (temperature drops from $T_H$ to $T_C$).
3. Isothermal compression at $T_C$ (rejecting heat $Q_C$ to the cold reservoir).
4. Adiabatic compression (temperature rises from $T_C$ to $T_H$).

The Carnot efficiency:

$$
\eta = 1 - \frac{T_C}{T_H} = 1 - \frac{Q_C}{Q_H}
$$

where $T_H$ is the hot reservoir temperature and $T_C$ is the cold reservoir temperature (both in
Kelvin).

No real engine can exceed this efficiency. The Carnot efficiency depends only on the temperatures of
the two reservoirs, not on the working substance.

**Example (HL):** A heat engine operates between $600\text{ K}$ and $300\text{ K}$. Find the maximum
possible efficiency.

$$
\eta = 1 - \frac{300}{600} = 0.50 = 50\%
$$

**Example (HL):** A steam turbine receives steam at $500°$C and exhausts to a condenser at $30°$C.
Find the maximum Carnot efficiency and the minimum heat rejected per cycle if the turbine absorbs
$5000\text{ kJ}$ per cycle.

$$
T_H = 773\text{ K}, \quad T_C = 303\text{ K}
$$

$$
\eta = 1 - \frac{303}{773} = 0.608 = 60.8\%
$$

$$
W = \eta Q_H = 0.608 \times 5000 = 3040\text{ kJ}
$$

$$
Q_C = Q_H - W = 5000 - 3040 = 1960\text{ kJ}
$$

### Entropy (HL)

Entropy $S$ is a thermodynamic state function that quantifies the degree of disorder or the number
of microscopic configurations (microstates) corresponding to a given macroscopic state.

For a reversible process at temperature $T$, the entropy change is:

$$
\Delta S = \frac{Q}{T}
$$

For a system undergoing a reversible process, $\Delta S_{\text{system}} = Q/T$ and
$\Delta S_{\text{surroundings}} = -Q/T$, so $\Delta S_{\text{total}} = 0$.

For an irreversible process (all real processes), $\Delta S_{\text{total}} \gt 0$.

### Why Heat Flows from Hot to Cold

Consider two blocks of equal mass and specific heat at temperatures $T_H$ and $T_C$ ($T_H \gt T_C$).
A small amount of heat $Q$ flows from hot to cold:

$$
\Delta S = \frac{-Q}{T_H} + \frac{Q}{T_C} = Q\left(\frac{1}{T_C} - \frac{1}{T_H}\right)
$$

Since $T_C \lt T_H$, we have $1/T_C \gt 1/T_H$, so $\Delta S \gt 0$. The reverse (heat flowing from
cold to hot) would give $\Delta S \lt 0$, violating the second law. This is why heat spontaneously
flows only from hot to cold.

### Third Law of Thermodynamics

The third law states that the entropy of a perfect crystal approaches zero as the temperature
approaches absolute zero:

$$
\lim_{T \to 0} S = 0
$$

It is impossible to reach absolute zero in a finite number of steps. Each step of a cooling process
becomes less efficient as the temperature decreases.

## Heat Transfer

Heat can be transferred by three mechanisms: conduction, convection, and radiation.

### Conduction (OL/HL)

Conduction is the transfer of heat through a material without bulk motion of the material. It occurs
through molecular vibrations (in all materials) and free electron drift (in metals, which is why
metals are generally good conductors).

Fourier's law of heat conduction:

$$
\frac{dQ}{dt} = -kA\frac{dT}{dx}
$$

where $k$ is the thermal conductivity (W/(m K)), $A$ is the cross-sectional area, and $dT/dx$ is the
temperature gradient. The negative sign indicates heat flows from hot to cold.

For a uniform slab of thickness $d$ with temperatures $T_1$ (hot face) and $T_2$ (cold face):

$$
\frac{dQ}{dt} = \frac{kA(T_1 - T_2)}{d}
$$

| Material              | $k$ (W/(m K)) |
| --------------------- | ------------- |
| Copper                | 401           |
| Aluminium             | 237           |
| Iron                  | 80            |
| Glass                 | 0.8           |
| Water                 | 0.6           |
| Air                   | 0.026         |
| Fibreglass insulation | 0.04          |

**Example (HL):** A copper wall of thickness $5\text{ mm}$ and area $2\text{ m}^2$ has one face at
$100°$C and the other at $20°$C. Find the rate of heat conduction.

$$
\frac{dQ}{dt} = \frac{401 \times 2 \times (100 - 20)}{0.005} = \frac{64160}{0.005} = 1.28 \times 10^7\text{ W}
$$

### Convection (OL/HL)

Convection is the transfer of heat by the bulk movement of fluid (liquid or gas). It involves
conduction at the boundary followed by fluid motion carrying the heated fluid away.

- **Natural convection** occurs due to density differences caused by temperature gradients (hot
  fluid rises, cold fluid sinks).
- **Forced convection** uses a pump or fan to move the fluid.

### Radiation (OL/HL)

All bodies with temperature above absolute zero emit electromagnetic radiation. A **black body** is
a theoretical object that absorbs all radiation incident upon it and emits the maximum possible
radiation at each wavelength.

### Stefan-Boltzmann Law (HL)

The total power radiated by a black body:

$$
P = \sigma A T^4
$$

where $\sigma = 5.67 \times 10^{-8}\text{ W m}^{-2}\text{ K}^{-4}$ is the Stefan-Boltzmann constant,
$A$ is the surface area, and $T$ is the absolute temperature in kelvin.

The power radiated is proportional to $T^4$, which means small temperature increases at high
temperatures produce enormous increases in radiated power. This is why stars are so luminous.

For a real body (not a perfect black body), the emissivity $\varepsilon$ (between 0 and 1) accounts
for the deviation from ideal behaviour:

$$
P = \varepsilon \sigma A T^4
$$

**Example (HL):** A spherical black body of radius $5\text{ cm}$ is at $500\text{ K}$. Find the
power radiated.

$$
A = 4\pi r^2 = 4\pi(0.05)^2 = 0.0314\text{ m}^2
$$

$$
P = 5.67 \times 10^{-8} \times 0.0314 \times (500)^4 = 5.67 \times 10^{-8} \times 0.0314 \times 6.25 \times 10^{10} = 111\text{ W}
$$

### Wien's Displacement Law (HL)

The wavelength at which a black body emits maximum radiation is inversely proportional to its
absolute temperature:

$$
\lambda_{\max} T = 2.898 \times 10^{-3}\text{ m K}
$$

This explains why hotter objects glow bluer and cooler objects glow redder. The Sun (surface
temperature $\approx 5800\text{ K}$) has its peak emission at:

$$
\lambda_{\max} = \frac{2.898 \times 10^{-3}}{5800} = 5.0 \times 10^{-7}\text{ m} = 500\text{ nm}
$$

This is in the visible (green-yellow) region, consistent with the Sun appearing white-yellow.

### Net Radiation Power

When a body at temperature $T$ is surrounded by an environment at temperature $T_0$, the net power
radiated is:

$$
P_{\mathrm{net}} = \varepsilon \sigma A (T^4 - T_0^4)
$$

This explains why bodies cool down (lose more radiation than they absorb) when hotter than their
surroundings, and heat up when colder.

## Common Pitfalls

1. **Kelvin vs Celsius** -- always use Kelvin for gas law calculations and for any equation
   involving $T$ in a ratio (e.g., Carnot efficiency). The size of the degree is the same, but the
   zero point differs.
2. **Latent heat** -- temperature does not change during a phase transition. Energy goes into
   changing the phase, not raising the temperature.
3. **Calorimetry** -- heat lost = heat gained. Ensure all terms have the correct sign and that the
   calorimeter's heat capacity is included if significant.
4. **First law of thermodynamics** -- $W$ is work done _by_ the system. Work done _on_ the system is
   negative $W$. Be consistent with sign conventions.
5. **Ideal gas law** -- ensure the gas constant $R$ matches the units used.
   $R = 8.314\text{ J/(mol K)}$ when $p$ is in Pa, $V$ in $\mathrm{m}^3$, $T$ in K, and $n$ in mol.
6. **Carnot efficiency** -- temperatures must be in Kelvin. The formula $\eta = 1 - T_C/T_H$ gives
   the maximum possible efficiency; real engines are less efficient.
7. **pV diagrams** -- work done by the gas equals the area under the curve. For a cycle, net work
   equals the area enclosed.
8. **RMS speed vs average speed** -- they are different. RMS speed is $\sqrt{3k_BT/m}$; average
   speed is $\sqrt{8k_BT/(\pi m)}$.

## Practice Questions

### Ordinary Level

1. How much energy is needed to heat 5 kg of water from $15°$C to $85°$C?
2. How much energy is needed to melt 0.5 kg of ice at $0°$C?
3. A gas at $1.5 \times 10^5\text{ Pa}$ occupies $4\text{ m}^3$. If the volume is compressed to
   $2\text{ m}^3$ at constant temperature, find the new pressure.
4. Describe the three methods of heat transfer with an example of each.
5. Explain the difference between heat and temperature.
6. Convert $-40°$C to Kelvin and Fahrenheit. (Note: $-40°$C equals $-40°$F.)

### Higher Level

1. Calculate the total energy to convert 200 g of ice at $-20°$C to steam at $120°$C. Assume the
   specific heat capacity of steam is $2010\text{ J/(kg K)}$.
2. Using the ideal gas law, find the pressure of 3 mol of gas in a 10 L container at $350\text{ K}$.
3. Find the RMS speed of oxygen molecules ($M = 0.032\text{ kg/mol}$) at $27°$C.
4. A heat engine operates between $500°$C and $50°$C. Find the maximum Carnot efficiency. If the
   engine absorbs $2000\text{ J}$ from the hot reservoir per cycle, how much work is done per cycle
   and how much heat is rejected?
5. A $150\text{ g}$ block of an unknown metal at $250°$C is dropped into $300\text{ g}$ of water at
   $20°$C$ in a calorimeter of heat capacity $50\text{ J/K}$. The final temperature is $30°$C. Find
   the specific heat capacity of the metal.
6. An ideal gas undergoes isothermal expansion from $2 \times 10^5\text{ Pa}$, $0.01\text{ m}^3$ to
   $1 \times 10^5\text{ Pa}$. Find the final volume and the work done by the gas.
7. A black body of surface area $0.1\text{ m}^2$ is at a temperature of $1500\text{ K}$. Find the
   power radiated and the wavelength of peak emission.
8. Two moles of a monatomic ideal gas are heated at constant pressure from $300\text{ K}$ to
   $500\text{ K}$. Calculate the change in internal energy, the heat added, and the work done.
9. A heat pump operates between an outdoor temperature of $5°$C and an indoor temperature of $22°$C.
   Find the maximum coefficient of performance (COP). If the heat pump delivers $5\text{ kW}$ of
   heat to the building, what is the minimum power input required?
10. Derive the expression for the pressure of an ideal gas from kinetic theory, clearly stating your
    assumptions. Show how this leads to $pV = \frac{1}{3}Nm\overline{v^2}$.
