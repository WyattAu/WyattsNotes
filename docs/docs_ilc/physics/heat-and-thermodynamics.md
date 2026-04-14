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
laws of thermodynamics. These concepts are essential for both Higher and Ordinary Level.

## Temperature and Heat

### Temperature Scales (OL/HL)

| Scale             | Boiling point of water | Freezing point of water |
| ----------------- | ---------------------- | ----------------------- |
| Celsius ($°$C)    | $100$                  | $0$                     |
| Kelvin (K)        | $373.15$               | $273.15$                |
| Fahrenheit ($°$F) | $212$                  | $32$                    |

Conversion:

$$
T_K = T_{°\text{C}} + 273.15
$$

$$
T_{°\text{F}} = \frac{9}{5}T_{°\text{C}} + 32
$$

### Heat vs Temperature (OL/HL)

- **Temperature** is a measure of the average kinetic energy of particles.
- **Heat** is the transfer of energy due to a temperature difference.

## Specific Heat Capacity (OL/HL)

The specific heat capacity $c$ is the energy required to raise the temperature of 1 kg of a
substance by $1\text{ K}$ (or $1°$C).

$$
Q = mc\Delta T
$$

where $Q$ is the heat energy, $m$ is the mass, and $\Delta T$ is the temperature change.

| Substance | $c$ (J/kg K) |
| --------- | ------------ |
| Water     | 4180         |
| Ice       | 2100         |
| Copper    | 390          |
| Aluminium | 900          |
| Iron      | 450          |

**Example (OL):** How much energy is needed to raise the temperature of 2 kg of water from $20°$C to
$80°$C?

$$
Q = mc\Delta T = 2 \times 4180 \times 60 = 501600\text{ J} \approx 502\text{ kJ}
$$

### Calorimetry (HL)

In a calorimeter, the heat lost by a hot object equals the heat gained by the cold object (assuming
no heat loss to surroundings):

$$
m_h c_h |\Delta T_h| = m_c c_c |\Delta T_c|
$$

**Example (HL):** A 0.5 kg piece of copper at $200°$C is placed in 1 kg of water at $20°$C. Find the
final temperature.

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
122600 = 4375T \implies T \approx 28.0°\text{C}
$$

## Latent Heat (OL/HL)

### Specific Latent Heat of Fusion

The energy required to change 1 kg of a substance from solid to liquid at its melting point (no
temperature change):

$$
Q = mL_f
$$

### Specific Latent Heat of Vaporisation

The energy required to change 1 kg of a substance from liquid to gas at its boiling point:

$$
Q = mL_v
$$

| Substance | $L_f$ (J/kg)       | $L_v$ (J/kg)       |
| --------- | ------------------ | ------------------ |
| Water     | $3.34 \times 10^5$ | $2.26 \times 10^6$ |
| Ice       | $3.34 \times 10^5$ | --                 |
| Ethanol   | $1.05 \times 10^5$ | $8.55 \times 10^5$ |

**Example (OL):** How much energy is needed to convert 0.2 kg of ice at $0°$C to water at $0°$C?

$$
Q = mL_f = 0.2 \times 3.34 \times 10^5 = 66800\text{ J} = 66.8\text{ kJ}
$$

**Example (HL):** How much energy is needed to convert 100 g of ice at $-10°$C to steam at $100°$C?

1. Heat ice from $-10°$C to $0°$C: $Q_1 = 0.1 \times 2100 \times 10 = 2100\text{ J}$.
2. Melt ice at $0°$C: $Q_2 = 0.1 \times 3.34 \times 10^5 = 33400\text{ J}$.
3. Heat water from $0°$C to $100°$C: $Q_3 = 0.1 \times 4180 \times 100 = 41800\text{ J}$.
4. Vaporise water at $100°$C: $Q_4 = 0.1 \times 2.26 \times 10^6 = 226000\text{ J}$.

$$
Q_{\text{total}} = 2100 + 33400 + 41800 + 226000 = 303300\text{ J} \approx 303\text{ kJ}
$$

## Gas Laws

### Boyle's Law (OL/HL)

At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its
volume:

$$
pV = \text{constant} \implies p_1 V_1 = p_2 V_2
$$

### Charles's Law (OL/HL)

At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute
temperature:

$$
\frac{V}{T} = \text{constant} \implies \frac{V_1}{T_1} = \frac{V_2}{T_2}
$$

### Gay-Lussac's Law (OL/HL)

At constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute
temperature:

$$
\frac{p}{T} = \text{constant} \implies \frac{p_1}{T_1} = \frac{p_2}{T_2}
$$

### Combined Gas Law (HL)

$$
\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}
$$

**Example (HL):** A gas occupies $3\text{ m}^3$ at $2 \times 10^5\text{ Pa}$ and $300\text{ K}$.
Find its volume at $10^5\text{ Pa}$ and $400\text{ K}$.

$$
V_2 = \frac{p_1 V_1 T_2}{p_2 T_1} = \frac{2 \times 10^5 \times 3 \times 400}{10^5 \times 300} = 8\text{ m}^3
$$

## Ideal Gas Law (HL)

$$
pV = nRT
$$

where $n$ is the number of moles and $R = 8.314\text{ J/(mol K)}$ is the universal gas constant.

**Example (HL):** Find the volume occupied by 2 mol of gas at $300\text{ K}$ and
$1.01 \times 10^5\text{ Pa}$.

$$
V = \frac{nRT}{p} = \frac{2 \times 8.314 \times 300}{1.01 \times 10^5} \approx 0.0494\text{ m}^3 = 49.4\text{ L}
$$

## Kinetic Theory of Gases (HL)

### Assumptions

1. A gas consists of many small particles moving in random directions.
2. Particle volume is negligible compared to the container volume.
3. Collisions between particles and walls are perfectly elastic.
4. There are no intermolecular forces (except during collisions).
5. The duration of collisions is negligible.

### Pressure from Kinetic Theory

$$
p = \frac{1}{3}\frac{N}{V}m\overline{c^2}
$$

where $\overline{c^2}$ is the mean square speed.

### Root Mean Square Speed

$$
c_{\text{rms}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3k_BT}{m}}
$$

where $M$ is the molar mass and $k_B = 1.38 \times 10^{-23}\text{ J/K}$ is Boltzmann's constant.

**Example (HL):** Find the RMS speed of nitrogen molecules ($M = 0.028\text{ kg/mol}$) at
$300\text{ K}$.

$$
c_{\text{rms}} = \sqrt{\frac{3 \times 8.314 \times 300}{0.028}} = \sqrt{267000} \approx 517\text{ m/s}
$$

## Laws of Thermodynamics (HL)

### First Law

$$
\Delta U = Q - W
$$

where $\Delta U$ is the change in internal energy, $Q$ is the heat added to the system, and $W$ is
the work done by the system.

For an isothermal process ($\Delta T = 0$): $\Delta U = 0$, so $Q = W$.

For an isochoric process ($\Delta V = 0$): $W = 0$, so $\Delta U = Q$.

### Second Law

Heat cannot spontaneously flow from a colder body to a hotter body. No heat engine can be 100%
efficient.

### Carnot Efficiency

$$
\eta = 1 - \frac{T_C}{T_H}
$$

where $T_H$ is the hot reservoir temperature and $T_C$ is the cold reservoir temperature (both in
Kelvin).

**Example (HL):** A heat engine operates between $600\text{ K}$ and $300\text{ K}$. Find the maximum
possible efficiency.

$$
\eta = 1 - \frac{300}{600} = 0.50 = 50\%
$$

### Entropy (HL)

Entropy is a measure of disorder. The second law can be stated as: the total entropy of an isolated
system never decreases.

$$
\Delta S = \frac{Q}{T}
$$

for a reversible process at temperature $T$.

## Heat Transfer

### Conduction (OL/HL)

Transfer of heat through a material without bulk motion.

$$
\frac{dQ}{dt} = -kA\frac{dT}{dx}
$$

where $k$ is the thermal conductivity.

### Convection (OL/HL)

Transfer of heat by the bulk movement of fluid.

### Radiation (OL/HL)

Transfer of heat by electromagnetic waves. All bodies emit radiation. A perfect black body absorbs
all radiation incident upon it.

### Stefan-Boltzmann Law (HL)

The power radiated by a black body:

$$
P = \sigma A T^4
$$

where $\sigma = 5.67 \times 10^{-8}\text{ W m}^{-2}\text{ K}^{-4}$ is the Stefan-Boltzmann constant.

### Wien's Displacement Law (HL)

$$
\lambda_{\max} T = 2.898 \times 10^{-3}\text{ m K}
$$

## Common Pitfalls

1. **Kelvin vs Celsius** -- always use Kelvin for gas law calculations.
2. **Latent heat** -- temperature does not change during a phase transition.
3. **Calorimetry** -- heat lost = heat gained; ensure all terms have the correct sign.
4. **First law of thermodynamics** -- $W$ is work done _by_ the system; work done _on_ the system is
   negative $W$.
5. **Ideal gas law** -- ensure the gas constant $R$ matches the units used.
6. **Carnot efficiency** -- temperatures must be in Kelvin.

## Practice Questions

### Ordinary Level

1. How much energy is needed to heat 5 kg of water from $15°$C to $85°$C?
2. How much energy is needed to melt 0.5 kg of ice at $0°$C?
3. A gas at $1.5 \times 10^5\text{ Pa}$ occupies $4\text{ m}^3$. If the volume is compressed to
   $2\text{ m}^3$ at constant temperature, find the new pressure.
4. Describe the three methods of heat transfer with an example of each.

### Higher Level

1. Calculate the total energy to convert 200 g of ice at $-20°$C to steam at $120°$C.
2. Using the ideal gas law, find the pressure of 3 mol of gas in a 10 L container at $350\text{ K}$.
3. Find the RMS speed of oxygen molecules ($M = 0.032\text{ kg/mol}$) at $27°$C.
4. A heat engine operates between $500°$C and $50°$C. Find the maximum Carnot efficiency. If the
   engine absorbs $2000\text{ J}$ from the hot reservoir per cycle, how much work is done per cycle?
