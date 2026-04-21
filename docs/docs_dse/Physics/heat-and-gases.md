---
title: Heat and Gases
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: heat-and-gases
---

## Temperature and Thermometers

### Temperature Scales

Temperature is a scalar quantity that measures the average kinetic energy of the particles in a
substance. Three temperature scales are in common use:

| Scale      | Symbol | Unit             | Absolute Zero | Key Reference Points                                              |
| ---------- | ------ | ---------------- | ------------- | ----------------------------------------------------------------- |
| Celsius    | $T_C$  | $^\circ\mathrm{C}$ | $-273.15$     | $0^\circ\mathrm{C}$ (ice point), $100^\circ\mathrm{C}$ (steam point)  |
| Kelvin     | $T$    | K                | $0$           | Same interval as Celsius, shifted by $273.15$                     |
| Fahrenheit | $T_F$  | $^\circ\mathrm{F}$ | $-459.67$     | $32^\circ\mathrm{F}$ (ice point), $212^\circ\mathrm{F}$ (steam point) |

The **Kelvin** is the SI unit of temperature and is defined by fixing the Boltzmann constant
$k_B = 1.380649 \times 10^{-23}$ J/K.

### Conversion Formulae

Celsius to Kelvin and vice versa:

$$T = T_C + 273.15$$

$$T_C = T - 273.15$$

Fahrenheit conversions:

$$T_F = \frac{9}{5}T_C + 32$$

$$T_C = \frac{5}{9}(T_F - 32)$$

Kelvin to Fahrenheit:

$$T_F = \frac{9}{5}(T - 273.15) + 32$$

### Worked Example 1

Convert $37^\circ\mathrm{C}$ (normal human body temperature) to Kelvin and Fahrenheit.

$$T = 37 + 273.15 = 310.15 \mathrm{ K}$$

$$T_F = \frac{9}{5}(37) + 32 = 66.6 + 32 = 98.6^\circ\mathrm{F}$$

### Thermometric Properties

A thermometer works by exploiting a **thermometric property** -- a physical property that varies
continuously with temperature. Common thermometric properties include:

| Thermometer Type       | Thermometric Property                                       | Range                             |
| ---------------------- | ----------------------------------------------------------- | --------------------------------- |
| Liquid-in-glass        | Length of liquid column (thermal expansion)                 | $-39$ to $350^\circ\mathrm{C}$ (Hg) |
| Gas thermometer        | Pressure at constant volume, or volume at constant pressure | $-270$ to $1500^\circ\mathrm{C}$    |
| Thermocouple           | EMF between two junctions at different temperatures         | $-200$ to $1500^\circ\mathrm{C}$    |
| Resistance thermometer | Electrical resistance of a metal (e.g., platinum)           | $-200$ to $850^\circ\mathrm{C}$     |

### Calibration of a Thermometer

To calibrate an arbitrary thermometer, two fixed points are needed:

1. **Lower fixed point** (ice point): temperature of pure melting ice at standard pressure
   ($0^\circ\mathrm{C}$)
2. **Upper fixed point** (steam point): temperature of pure boiling water at standard pressure
   ($100^\circ\mathrm{C}$)

If $X_0$ is the thermometric property at $0^\circ\mathrm{C}$ and $X_{100}$ at $100^\circ\mathrm{C}$,
then the temperature corresponding to a property value $X$ is:

$$\theta = \frac{X - X_0}{X_{100} - X_0} \times 100^\circ\mathrm{C}$$

This formula assumes the thermometric property varies **linearly** with temperature, which is an
approximation. Different thermometers will agree exactly at the two fixed points but may differ at
intermediate temperatures because their properties do not have the same functional dependence on
temperature.

### Absolute Temperature Scale

The **ideal gas scale** defines temperature in terms of the pressure of an ideal gas at constant
volume. As pressure approaches zero (low-density limit), all real gases behave ideally, so this
scale is independent of the particular gas used.

The absolute zero of temperature ($0$ K) is the theoretical temperature at which all thermal motion
ceases. On the Celsius scale this corresponds to $-273.15^\circ\mathrm{C}$.

---

## Internal Energy and Heat

### Internal Energy

The **internal energy** $U$ of a substance is the total kinetic energy (translational, rotational,
vibrational) and potential energy (intermolecular forces) of all its particles.

For an **ideal gas**, there are no intermolecular forces, so the internal energy is entirely
kinetic:

$$U = \frac{3}{2}Nk_BT = \frac{3}{2}nRT$$

where $N$ is the number of molecules, $n$ is the number of moles, $k_B$ is Boltzmann's constant, and
$R$ is the molar gas constant.

### Heat

**Heat** $Q$ is the energy transferred between two systems (or between a system and its
surroundings) due to a temperature difference. Heat flows spontaneously from a body at higher
temperature to one at lower temperature.

Key distinction: **Temperature** is a state variable (depends only on the state of the system);
**heat** is a process variable (depends on the path taken between states).

| Concept         | Symbol | Unit | Nature           |
| --------------- | ------ | ---- | ---------------- |
| Internal energy | $U$    | J    | State function   |
| Heat            | $Q$    | J    | Process variable |
| Temperature     | $T$    | K    | State function   |

---

## Specific Heat Capacity

### Definition

The **specific heat capacity** $c$ of a substance is the amount of heat required to raise the
temperature of $1$ kg of the substance by $1$ K (or $1^\circ\mathrm{C}$, since the intervals are
identical).

$$c = \frac{Q}{m\Delta T}$$

where:

- $Q$ = heat energy supplied (J)
- $m$ = mass (kg)
- $\Delta T$ = temperature change (K or $^\circ\mathrm{C}$)

The SI unit is $\mathrm{J kg}^{-1}\mathrm{ K}^{-1}$.

The **molar heat capacity** $C$ is the heat required per mole per kelvin:

$$C = Mc$$

where $M$ is the molar mass.

### Common Specific Heat Capacities

| Substance        | Specific Heat Capacity ($\mathrm{J kg}^{-1}\mathrm{ K}^{-1}$) |
| ---------------- | --------------------------------------------------------- |
| Water            | $4186$                                                    |
| Ice              | $2100$                                                    |
| Aluminium        | $900$                                                     |
| Copper           | $385$                                                     |
| Iron             | $449$                                                     |
| Lead             | $128$                                                     |
| Glass            | $840$                                                     |
| Air (const. $p$) | $1005$                                                    |

Water has an exceptionally high specific heat capacity, which is why it is used as a coolant and why
coastal climates are more moderate than inland climates.

### Heat Capacity of an Object

The **heat capacity** $C_{\mathrm{obj}}$ of a body is the heat required to raise its temperature by
$1$ K:

$$C_{\mathrm{obj}} = mc$$

### Derivation from the First Law

When heat $Q$ is supplied to a body at constant volume (no work done):

$$Q = \Delta U = mc\Delta T$$

This is valid for solids and liquids where thermal expansion work is negligible. For gases, the
specific heat capacity depends on whether the process is at constant volume or constant pressure.

### Worked Example 2

A $2.0$ kg copper block at $100^\circ\mathrm{C}$ is placed in $0.5$ kg of water at $20^\circ\mathrm{C}$.
Find the final temperature, assuming no heat loss to the surroundings.

Heat lost by copper $=$ heat gained by water:

$$m_c c_c (T_c - T_f) = m_w c_w (T_f - T_w)$$

$$2.0 \times 385 \times (100 - T_f) = 0.5 \times 4186 \times (T_f - 20)$$

$$770(100 - T_f) = 2093(T_f - 20)$$

$$77000 - 770T_f = 2093T_f - 41860$$

$$77000 + 41860 = 2093T_f + 770T_f$$

$$118860 = 2863T_f$$

$$T_f = 41.5^\circ\mathrm{C}$$

### Worked Example 3

An electric heater rated at $2000$ W heats $3.0$ kg of water from $25^\circ\mathrm{C}$ to
$75^\circ\mathrm{C}$. How long does it take, assuming $80\%$ of the energy is absorbed by the water?

Energy required by the water:

$$Q = mc\Delta T = 3.0 \times 4186 \times (75 - 25) = 627900 \mathrm{ J}$$

Energy supplied by the heater:

$$E = Pt = 2000 \times t$$

With $80\%$ efficiency:

$$0.80 \times 2000 \times t = 627900$$

$$t = \frac{627900}{1600} = 392.4 \mathrm{ s} = 6.5 \mathrm{ minutes}$$

### Method of Mixtures Experiment

**Aim:** To determine the specific heat capacity of a solid (e.g., a metal block).

**Procedure:**

1. Measure the mass $m_s$ of the solid.
2. Heat the solid in a water bath to a known temperature $T_s$ (e.g., by boiling water so
   $T_s \approx 100^\circ\mathrm{C}$).
3. Quickly transfer the solid to an insulated calorimeter containing water of mass $m_w$ at
   temperature $T_w$.
4. Stir and record the maximum temperature $T_f$.
5. Apply the principle of calorimetry (heat lost $=$ heat gained):

$$m_s c_s (T_s - T_f) = (m_w c_w + C_{\mathrm{cal}})(T_f - T_w)$$

where $C_{\mathrm{cal}}$ is the heat capacity of the calorimeter.

**Sources of error:**

- Heat loss to the surroundings during transfer (minimise by working quickly)
- Heat absorbed by the thermometer and stirrer
- Incomplete thermal equilibrium
- Evaporation of water

---

## Latent Heat

### Definition

**Latent heat** is the energy absorbed or released by a substance during a **phase change** at
constant temperature. The word "latent" means hidden, because this heat does not produce a
temperature change.

| Quantity                             | Symbol | Unit               | Definition                                             |
| ------------------------------------ | ------ | ------------------ | ------------------------------------------------------ |
| Specific latent heat of fusion       | $l_f$  | $\mathrm{J kg}^{-1}$ | Heat to melt $1$ kg of solid at its melting point      |
| Specific latent heat of vaporization | $l_v$  | $\mathrm{J kg}^{-1}$ | Heat to vaporise $1$ kg of liquid at its boiling point |

The heat involved in a phase change of mass $m$:

$$Q = ml$$

where $l$ is the appropriate specific latent heat.

### Common Latent Heats

| Substance | $l_f$ ($\mathrm{kJ kg}^{-1}$) | $l_v$ ($\mathrm{kJ kg}^{-1}$) | Melting Point ($^\circ\mathrm{C}$) | Boiling Point ($^\circ\mathrm{C}$) |
| --------- | --------------------------- | --------------------------- | -------------------------------- | -------------------------------- |
| Water     | $334$                       | $2260$                      | $0$                              | $100$                            |
| Ethanol   | $109$                       | $846$                       | $-114$                           | $78$                             |
| Aluminium | $397$                       | $10500$                     | $660$                            | $2519$                           |
| Copper    | $205$                       | $4730$                      | $1085$                           | $2562$                           |
| Lead      | $23$                        | $871$                       | $327$                            | $1749$                           |

Note that $l_v \gg l_f$ for all substances. Vaporisation requires breaking most intermolecular bonds
(particles gain enough energy to escape the liquid), whereas fusion only requires weakening them
enough to allow the regular solid structure to break down.

### Heating Curve

A heating curve plots temperature against time as a substance is heated at a constant rate:

1. **Solid phase**: temperature rises steadily (slope depends on $c_{\mathrm{solid}}$).
2. **Melting**: temperature remains constant at the melting point while latent heat of fusion is
   absorbed.
3. **Liquid phase**: temperature rises steadily (slope depends on $c_{\mathrm{liquid}}$).
4. **Boiling**: temperature remains constant at the boiling point while latent heat of vaporisation
   is absorbed.
5. **Gas phase**: temperature rises steadily (slope depends on $c_{\mathrm{gas}}$).

The flat regions on the heating curve correspond to phase transitions where all the supplied heat
goes into changing the molecular arrangement rather than increasing kinetic energy.

### Cooling Curve

A cooling curve is the reverse: as a substance cools, the temperature drops, plateaus at the
condensation point, drops again, plateaus at the freezing point, and then drops in the solid phase.

**Supercooling** can occur: the liquid may cool below its freezing point before crystallisation
begins. When crystallisation starts, the released latent heat causes the temperature to jump back up
to the freezing point.

### Why Does Temperature Remain Constant During Phase Change?

During melting or boiling, the supplied heat energy is used to overcome the intermolecular forces
rather than increase the average kinetic energy of the particles. Since temperature is a measure of
average kinetic energy, the temperature remains constant while the potential energy of the system
increases.

### Worked Example 4

How much energy is required to convert $500$ g of ice at $-20^\circ\mathrm{C}$ to steam at
$110^\circ\mathrm{C}$?

The calculation proceeds in five stages:

**Stage 1:** Heat ice from $-20^\circ\mathrm{C}$ to $0^\circ\mathrm{C}$:

$$Q_1 = mc\Delta T = 0.5 \times 2100 \times 20 = 21000 \mathrm{ J}$$

**Stage 2:** Melt ice at $0^\circ\mathrm{C}$:

$$Q_2 = ml_f = 0.5 \times 334000 = 167000 \mathrm{ J}$$

**Stage 3:** Heat water from $0^\circ\mathrm{C}$ to $100^\circ\mathrm{C}$:

$$Q_3 = mc\Delta T = 0.5 \times 4186 \times 100 = 209300 \mathrm{ J}$$

**Stage 4:** Vaporise water at $100^\circ\mathrm{C}$:

$$Q_4 = ml_v = 0.5 \times 2260000 = 1130000 \mathrm{ J}$$

**Stage 5:** Heat steam from $100^\circ\mathrm{C}$ to $110^\circ\mathrm{C}$
($c_{\mathrm{steam}} \approx 2010$ $\mathrm{J kg}^{-1}\mathrm{K}^{-1}$):

$$Q_5 = mc\Delta T = 0.5 \times 2010 \times 10 = 10050 \mathrm{ J}$$

**Total energy:**

$$Q_{\mathrm{total}} = 21000 + 167000 + 209300 + 1130000 + 10050 = 1537350 \mathrm{ J} \approx 1.54 \mathrm{ MJ}$$

### Worked Example 5

$200$ g of ice at $0^\circ\mathrm{C}$ is added to $400$ g of water at $50^\circ\mathrm{C}$ in an
insulated container. Find the final temperature and state of the mixture.

First, check whether all the ice can melt. The heat available from the water cooling to
$0^\circ\mathrm{C}$:

$$Q_{\mathrm{available}} = m_w c_w \Delta T = 0.4 \times 4186 \times 50 = 83720 \mathrm{ J}$$

Heat required to melt all the ice:

$$Q_{\mathrm{melt}} = m_i l_f = 0.2 \times 334000 = 66800 \mathrm{ J}$$

Since $Q_{\mathrm{available}} \gt Q_{\mathrm{melt}}$, all the ice melts and the mixture warms above
$0^\circ\mathrm{C}$.

Remaining heat after melting:

$$Q_{\mathrm{remaining}} = 83720 - 66800 = 16920 \mathrm{ J}$$

This heat warms the total mass of water ($0.2 + 0.4 = 0.6$ kg):

$$Q_{\mathrm{remaining}} = m_{\mathrm{total}} c_w \Delta T$$

$$16920 = 0.6 \times 4186 \times T_f$$

$$T_f = \frac{16920}{2511.6} = 6.7^\circ\mathrm{C}$$

The final mixture is all liquid water at $6.7^\circ\mathrm{C}$.

### Determining Specific Latent Heat by Electrical Method

**Aim:** To determine the specific latent heat of fusion of ice (or vaporisation of water) using an
electrical heater.

**Procedure for latent heat of fusion:**

1. Place crushed ice in a funnel with a heating coil immersed in it.
2. Allow the ice to start melting and collect the water that drips through for a few minutes before
   starting the timer (to ensure the ice is already at $0^\circ\mathrm{C}$).
3. Turn on the heater of known power $P$ for a measured time $t$.
4. Collect the meltwater produced during this time and measure its mass $m$.
5. The specific latent heat of fusion is:

$$l_f = \frac{Pt}{m}$$

**Precautions:**

- Use crushed ice to ensure good thermal contact.
- Stir continuously for uniform temperature.
- Account for heat from the surroundings (the heater must also supply the heat that would normally
  come from the room to melt ice).
- The correct formula accounting for background melting is:

$$l_f = \frac{Pt}{m - m_0}$$

where $m_0$ is the mass of water collected with the heater off over the same time interval.

---

## Heat Transfer

### Overview

Heat can be transferred by three mechanisms: **conduction**, **convection**, and **radiation**. In
most practical situations, more than one mechanism operates simultaneously.

| Mechanism  | Medium Required             | Dominant In              | Physical Basis                            |
| ---------- | --------------------------- | ------------------------ | ----------------------------------------- |
| Conduction | Solid (or stationary fluid) | Metals                   | Molecular collisions / electron transport |
| Convection | Fluid (liquid or gas)       | Fluids                   | Bulk motion of fluid                      |
| Radiation  | None (vacuum)               | All, especially high $T$ | Electromagnetic waves                     |

### Conduction

#### Mechanism

In **conduction**, heat is transferred through a material by the vibration and collision of
particles, without bulk motion of the material. In metals, free electrons also contribute
significantly to heat transfer.

In a non-metal: particles at the hot end vibrate more vigorously and pass energy to neighbours via
intermolecular forces. This process is relatively slow.

In a metal: in addition to lattice vibrations, the sea of free electrons can move freely and carry
kinetic energy rapidly from the hot end to the cold end. This is why metals are generally much
better thermal conductors than non-metals.

#### Fourier's Law of Heat Conduction

The rate of heat flow through a material is proportional to the temperature gradient and the
cross-sectional area:

$$\frac{dQ}{dt} = -kA\frac{dT}{dx}$$

where:

- $k$ = thermal conductivity ($\mathrm{W m}^{-1}\mathrm{ K}^{-1}$)
- $A$ = cross-sectional area ($\mathrm{m}^2$)
- $\frac{dT}{dx}$ = temperature gradient ($\mathrm{K m}^{-1}$)

The negative sign indicates that heat flows from high to low temperature.

For a uniform slab of thickness $d$ with faces at temperatures $T_1$ (hot) and $T_2$ (cold):

$$\frac{Q}{t} = kA\frac{T_1 - T_2}{d}$$

#### Thermal Conductivities

| Material             | $k$ ($\mathrm{W m}^{-1}\mathrm{ K}^{-1}$) |
| -------------------- | ------------------------------------- |
| Copper               | $385$                                 |
| Aluminium            | $205$                                 |
| Steel                | $50$                                  |
| Glass                | $0.8$                                 |
| Water                | $0.6$                                 |
| Brick                | $0.6$-$0.8$                           |
| Wood                 | $0.1$-$0.2$                           |
| Air                  | $0.025$                               |
| Expanded polystyrene | $0.03$-$0.04$                         |

#### U-Value (Overall Heat Transfer Coefficient)

The **U-value** combines the thermal conductivities of all layers in a composite structure (wall,
insulation, etc.) into a single figure:

$$U = \frac{Q}{A \cdot t \cdot \Delta T}$$

Unit: $\mathrm{W m}^{-2}\mathrm{ K}^{-1}$.

For a composite wall with layers of thickness $d_1, d_2, \ldots$ and thermal conductivities
$k_1, k_2, \ldots$ (neglecting surface air films):

$$\frac{1}{U} = \frac{d_1}{k_1} + \frac{d_2}{k_2} + \cdots = \sum_i \frac{d_i}{k_i}$$

The quantity $d_i / k_i$ is called the **thermal resistance** $R_i$ of layer $i$:

$$R_i = \frac{d_i}{k_i}$$

$$\frac{1}{U} = \sum_i R_i$$

A lower U-value indicates better insulation.

### Convection

#### Mechanism

**Convection** is the transfer of heat by the bulk movement of a fluid. When a fluid is heated, it
expands and becomes less dense. The warmer, less dense fluid rises and is replaced by cooler, denser
fluid, creating a **convection current**.

There are two types:

- **Natural convection**: driven by buoyancy forces due to density differences from temperature
  differences.
- **Forced convection**: driven by an external agent (fan, pump, wind).

#### Examples

- Sea breezes: land heats faster than water during the day; air over land rises, cooler air from the
  sea flows in to replace it.
- Radiators heat a room primarily by convection (despite the name).
- Atmospheric circulation: differential solar heating drives large-scale convection cells.

#### Factors Affecting the Rate of Convection

- Temperature difference between the surface and the fluid
- Surface area
- Nature of the fluid (viscosity, thermal expansion coefficient)
- Whether convection is natural or forced

### Radiation

#### Mechanism

**Thermal radiation** is electromagnetic radiation emitted by all objects with temperature above
absolute zero. It does not require a medium and can travel through vacuum.

All objects emit and absorb thermal radiation simultaneously. The net rate of radiative heat
transfer depends on the temperature difference between the body and its surroundings.

#### Stefan-Boltzmann Law

The total power radiated by a black body is:

$$P = \sigma A T^4$$

where:

- $\sigma = 5.67 \times 10^{-8}$ $\mathrm{W m}^{-2}\mathrm{ K}^{-4}$ (Stefan-Boltzmann constant)
- $A$ = surface area ($\mathrm{m}^2$)
- $T$ = absolute temperature (K)

For a body that is not a perfect black body, we introduce the **emissivity** $e$ ($0 \le e \le 1$):

$$P = e\sigma A T^4$$

A perfect black body has $e = 1$. A perfect reflector has $e = 0$. Most dull, dark surfaces have
$e \approx 0.8$ to $0.95$; polished, light surfaces have $e \approx 0.1$ to $0.3$.

#### Net Radiative Power Transfer

For a body at temperature $T_1$ in surroundings at temperature $T_2$ (where $T_1 \gt T_2$):

$$P_{\mathrm{net}} = e\sigma A(T_1^4 - T_2^4)$$

#### Black Body Radiation

A **black body** is an idealised physical body that absorbs all incident electromagnetic radiation,
regardless of frequency or angle of incidence. It is also a perfect emitter.

Key features of the black body radiation spectrum:

- The spectrum is continuous and depends only on temperature.
- The total radiated power is proportional to $T^4$ (Stefan-Boltzmann law).
- The wavelength at which the radiation is most intense is inversely proportional to $T$ (Wien's
  displacement law):

$$\lambda_{\mathrm{max}} T = b$$

where $b = 2.898 \times 10^{-3}$ $\mathrm{m K}$ (Wien's constant).

- As temperature increases, the peak wavelength shifts to shorter wavelengths (higher frequencies).
  This explains why objects glow red, then orange, then yellow, then white as they get hotter.

#### Wien's Displacement Law: Worked Example

The Sun has a surface temperature of approximately $5778$ K. At what wavelength does its radiation
peak?

$$\lambda_{\mathrm{max}} = \frac{b}{T} = \frac{2.898 \times 10^{-3}}{5778} = 5.01 \times 10^{-7} \mathrm{ m} = 501 \mathrm{ nm}$$

This is in the green-blue region of the visible spectrum, consistent with the Sun appearing
yellowish-white (the combined effect of all wavelengths, modified by atmospheric scattering).

#### Newton's Law of Cooling

When the temperature difference is not too large, the rate of heat loss from a body to its
surroundings is approximately proportional to the temperature difference:

$$\frac{dQ}{dt} \propto (T_{\mathrm{body}} - T_{\mathrm{surr}})$$

Or, for a body of heat capacity $C$:

$$C\frac{dT}{dt} = -hA(T - T_s)$$

where $h$ is the heat transfer coefficient. This gives exponential decay of the temperature
difference:

$$T(t) = T_s + (T_0 - T_s)e^{-t/\tau}$$

where $\tau = C / (hA)$ is the time constant.

:::info
Newton's law of cooling is an approximation valid for small temperature differences and when
radiation is not the dominant mechanism. At large temperature differences, the $T^4$ dependence of
radiation becomes significant and the cooling is faster than predicted by Newton's law.
:::

---

## Gas Laws



<PhetSimulation simulationId="gas-properties" title="Gas Properties" />

Explore the simulation above to develop intuition for this topic.

### Basic Definitions

| Quantity            | Symbol | Unit                   | Definition                |
| ------------------- | ------ | ---------------------- | ------------------------- |
| Pressure            | $p$    | Pa ($\mathrm{N m}^{-2}$) | Force per unit area       |
| Volume              | $V$    | $\mathrm{m}^3$           | Space occupied by the gas |
| Temperature         | $T$    | K                      | Absolute temperature      |
| Amount of substance | $n$    | mol                    | Number of moles           |
| Molar mass          | $M$    | $\mathrm{kg mol}^{-1}$   | Mass per mole             |

### Standard Temperature and Pressure (STP)

| Standard          | Temperature                    | Pressure                |
| ----------------- | ------------------------------ | ----------------------- |
| STP (IUPAC, 1982) | $273.15$ K ($0^\circ\mathrm{C}$) | $100$ kPa ($1$ bar)     |
| STP (traditional) | $273.15$ K ($0^\circ\mathrm{C}$) | $101.325$ kPa ($1$ atm) |

**Molar volume at STP (IUPAC):** $V_m = 22.7$ L/mol **Molar volume at traditional STP:**
$V_m = 22.4$ L/mol

### Boyle's Law

**Statement:** For a fixed mass of gas at constant temperature, the pressure is inversely
proportional to the volume.

$$p \propto \frac{1}{V} \quad (\mathrm{at constant } T, n)$$

$$p_1 V_1 = p_2 V_2$$

**Graphical representations:**

- $p$ vs $1/V$: straight line through origin (proportionality)
- $p$ vs $V$: rectangular hyperbola (at constant $T$, different curves for different $T$)
- $pV$ vs $p$: horizontal line (at constant $T$)

### Charles's Law

**Statement:** For a fixed mass of gas at constant pressure, the volume is directly proportional to
the absolute temperature.

$$V \propto T \quad (\mathrm{at constant } p, n)$$

$$\frac{V_1}{T_1} = \frac{V_2}{T_2}$$

**Critical point:** Temperature must be in Kelvin. If Celsius is used, the graph of $V$ vs $T_C$ is
a straight line that extrapolates to $V = 0$ at $T_C = -273.15^\circ\mathrm{C}$.

### Gay-Lussac's Law (Pressure-Temperature Law)

**Statement:** For a fixed mass of gas at constant volume, the pressure is directly proportional to
the absolute temperature.

$$p \propto T \quad (\mathrm{at constant } V, n)$$

$$\frac{p_1}{T_1} = \frac{p_2}{T_2}$$

This is the principle behind the constant-volume gas thermometer and the pressure cooker (the
pressure increases as temperature increases at constant volume).

### General Gas Law

Combining Boyle's Law and Charles's Law:

$$\frac{pV}{T} = \mathrm{constant} \quad (\mathrm{for fixed } n)$$

$$\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$$

### Ideal Gas Equation

The **ideal gas equation** unifies all gas laws:

$$pV = nRT$$

where $R = 8.314$ $\mathrm{J mol}^{-1}\mathrm{ K}^{-1}$ is the universal molar gas constant.

Alternative forms:

In terms of the number of molecules $N = nN_A$ (where $N_A = 6.022 \times 10^{23}$ $\mathrm{mol}^{-1}$
is Avogadro's number):

$$pV = Nk_BT$$

where $k_B = R / N_A = 1.381 \times 10^{-23}$ $\mathrm{J K}^{-1}$ is Boltzmann's constant.

In terms of mass and density:

$$pV = \frac{m}{M}RT$$

$$p = \frac{\rho RT}{M}$$

where $\rho = m/V$ is the density.

### Worked Example 6

A gas occupies $5.0 \times 10^{-3}$ $\mathrm{m}^3$ at $2.0 \times 10^5$ Pa and $300$ K. It is
compressed to $2.0 \times 10^{-3}$ $\mathrm{m}^3$ and the pressure increases to $5.0 \times 10^5$ Pa.
Find the new temperature.

$$\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$$

$$T_2 = \frac{p_2 V_2 T_1}{p_1 V_1} = \frac{(5.0 \times 10^5)(2.0 \times 10^{-3})(300)}{(2.0 \times 10^5)(5.0 \times 10^{-3})}$$

$$T_2 = \frac{3000}{1000} = 300 \mathrm{ K}$$

### Worked Example 7

Find the number of moles of gas in a $2.0$ L container at $25^\circ\mathrm{C}$ and $1.01 \times 10^5$
Pa.

$$n = \frac{pV}{RT} = \frac{(1.01 \times 10^5)(2.0 \times 10^{-3})}{(8.314)(298.15)}$$

$$n = \frac{202}{2478.9} = 0.0815 \mathrm{ mol}$$

### Experimental Verification of Gas Laws

**Boyle's Law experiment:** A column of air is trapped in a closed tube by a column of oil or
mercury. The pressure is varied by changing the height of the oil reservoir, and the volume of the
trapped air is measured. A graph of $p$ vs $1/V$ yields a straight line through the origin.

**Charles's Law experiment:** A capillary tube containing a drop of mercury trapping a column of air
is heated in a water bath. The length of the air column (proportional to volume) is measured at
various temperatures. A graph of $V$ vs $T$ (in Kelvin) yields a straight line through the origin.

---

## Ideal Gas Assumptions and Deviations

### Assumptions of the Ideal Gas Model

The ideal gas equation is derived under the following assumptions:

1. **Point particles**: Gas molecules occupy negligible volume compared to the container.
2. **No intermolecular forces**: Molecules do not exert forces on each other except during
   collisions.
3. **Elastic collisions**: Collisions between molecules and between molecules and walls are
   perfectly elastic (kinetic energy is conserved).
4. **Random motion**: Molecules move in random directions with a distribution of speeds.
5. **Large number of molecules**: Statistical treatment is valid.
6. **Short duration of collisions**: The time of a collision is negligible compared to the time
   between collisions.

### When Do Real Gases Deviate from Ideal Behaviour?

Real gases deviate from ideal behaviour at:

- **High pressures**: molecules are forced close together, so their volume becomes significant
  compared to the container volume.
- **Low temperatures**: molecules move slowly enough that intermolecular attractive forces become
  significant (this is why gases liquefy at low temperatures).
- **High densities**: same as high pressure -- molecules are close together.

Under these conditions, the $pV = nRT$ equation gives inaccurate results. The **van der Waals
equation** provides a better model:

$$\left(p + \frac{an^2}{V^2}\right)(V - nb) = nRT$$

where:

- $a$ accounts for intermolecular attractive forces (reduces effective pressure)
- $b$ accounts for the finite volume of molecules (reduces effective volume)

### Compressibility Factor

The **compressibility factor** $Z$ measures deviation from ideal behaviour:

$$Z = \frac{pV}{nRT}$$

- $Z = 1$: ideal gas
- $Z \lt 1$: attractive forces dominate (typical at moderate pressures and low temperatures)
- $Z \gt 1$: repulsive forces / molecular volume dominate (typical at very high pressures)

---

## Kinetic Theory of Gases

### Molecular Model

The kinetic theory of gases explains the macroscopic properties of gases (pressure, temperature) in
terms of the microscopic behaviour of molecules.

### Pressure of an Ideal Gas -- Derivation

Consider $N$ molecules in a cubic container of side $L$. A single molecule of mass $m$ moving with
velocity $\mathbf{v} = (v_x, v_y, v_z)$ collides elastically with a wall perpendicular to the
$x$-axis.

**Change in momentum per collision:**

$$\Delta p_x = mv_x - (-mv_x) = 2mv_x$$

**Time between successive collisions with the same wall:**

$$\Delta t = \frac{2L}{v_x}$$

**Force exerted by this molecule on the wall:**

$$F_x = \frac{\Delta p_x}{\Delta t} = \frac{2mv_x}{2L/v_x} = \frac{mv_x^2}{L}$$

**Total force from all $N$ molecules:**

$$F_{\mathrm{total}} = \sum_{i=1}^{N} \frac{mv_{x,i}^2}{L} = \frac{m}{L}\sum_{i=1}^{N} v_{x,i}^2$$

**Pressure on the wall:**

$$p = \frac{F_{\mathrm{total}}}{L^2} = \frac{m}{L^3}\sum_{i=1}^{N} v_{x,i}^2 = \frac{mN}{V}\langle v_x^2 \rangle$$

where $\langle v_x^2 \rangle = \frac{1}{N}\sum_{i=1}^{N} v_{x,i}^2$ is the mean square velocity in
the $x$-direction.

By symmetry, $\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle$, and:

$$\langle v^2 \rangle = \langle v_x^2 \rangle + \langle v_y^2 \rangle + \langle v_z^2 \rangle = 3\langle v_x^2 \rangle$$

Therefore:

$$p = \frac{mN}{V} \cdot \frac{\langle v^2 \rangle}{3}$$

$$pV = \frac{1}{3}Nm\langle v^2 \rangle$$

This is the **fundamental equation of kinetic theory**.

### Connection to Temperature

Comparing with the ideal gas equation $pV = Nk_BT$:

$$\frac{1}{3}Nm\langle v^2 \rangle = Nk_BT$$

$$\frac{1}{2}m\langle v^2 \rangle = \frac{3}{2}k_BT$$

The quantity $\frac{1}{2}m\langle v^2 \rangle$ is the **mean translational kinetic energy** of a
molecule:

$$\langle E_k \rangle = \frac{3}{2}k_BT$$

This is a central result: temperature is a direct measure of the average translational kinetic
energy of molecules.

### Root Mean Square Speed

The **root mean square (rms) speed** is defined as:

$$v_{\mathrm{rms}} = \sqrt{\langle v^2 \rangle}$$

From the kinetic theory:

$$v_{\mathrm{rms}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}$$

where $M$ is the molar mass ($M = N_A m$).

### Worked Example 8

Find the rms speed of nitrogen molecules ($M = 28.0$ $\mathrm{g/mol} = 0.0280$ $\mathrm{kg/mol}$) at
room temperature ($300$ K).

$$v_{\mathrm{rms}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3 \times 8.314 \times 300}{0.0280}}$$

$$v_{\mathrm{rms}} = \sqrt{\frac{7482.6}{0.0280}} = \sqrt{267235.7} = 517 \mathrm{ m/s}$$

### Maxwell-Boltzmann Speed Distribution

At a given temperature, gas molecules do not all travel at the same speed. The speeds follow the
**Maxwell-Boltzmann distribution**:

$$f(v) = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 \exp\left(-\frac{mv^2}{2k_BT}\right)$$

Key features of the distribution:

- The curve is asymmetric, skewed towards higher speeds (long tail).
- There are three characteristic speeds:
  - **Most probable speed** $v_p$: speed at the peak of the distribution

    $$v_p = \sqrt{\frac{2k_BT}{m}} = \sqrt{\frac{2RT}{M}}$$

  - **Mean speed** $\langle v \rangle$:

    $$\langle v \rangle = \sqrt{\frac{8k_BT}{\pi m}} = \sqrt{\frac{8RT}{\pi M}}$$

  - **Root mean square speed** $v_{\mathrm{rms}}$:

    $$v_{\mathrm{rms}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}$$

- The relationship: $v_p : \langle v \rangle : v_{\mathrm{rms}} = 1 : 1.128 : 1.225$
- As temperature increases, the distribution broadens and shifts to higher speeds.
- As molar mass increases (heavier molecules), the distribution shifts to lower speeds.

### Equipartition of Energy

The **equipartition theorem** states that each degree of freedom that appears quadratically in the
energy contributes $\frac{1}{2}k_BT$ to the average energy per molecule (or $\frac{1}{2}RT$ per
mole).

For a monatomic ideal gas (3 translational degrees of freedom):

$$U = \frac{3}{2}nRT, \quad C_V = \frac{3}{2}R, \quad C_p = \frac{5}{2}R$$

For a diatomic ideal gas at moderate temperatures (3 translational + 2 rotational degrees of
freedom):

$$U = \frac{5}{2}nRT, \quad C_V = \frac{5}{2}R, \quad C_p = \frac{7}{2}R$$

The ratio of specific heats:

$$\gamma = \frac{C_p}{C_V}$$

- Monatomic: $\gamma = 5/3 = 1.667$
- Diatomic: $\gamma = 7/5 = 1.400$

### Molar Heat Capacities of Gases

| Type      | $C_V$ ($\mathrm{J mol}^{-1}\mathrm{ K}^{-1}$) | $C_p$ ($\mathrm{J mol}^{-1}\mathrm{ K}^{-1}$) | $\gamma = C_p/C_V$ |
| --------- | ----------------------------------------- | ----------------------------------------- | ------------------ |
| Monatomic | $12.5$                                    | $20.8$                                    | $1.67$             |
| Diatomic  | $20.8$                                    | $29.1$                                    | $1.40$             |

---

## Work Done by an Expanding Gas

### Definition

When a gas expands against an external pressure, it does work. For a small expansion $dV$ against
pressure $p$:

$$dW = p\,dV$$

For a finite expansion from volume $V_1$ to $V_2$ at constant pressure:

$$W = p(V_2 - V_1) = p\Delta V$$

### First Law of Thermodynamics

$$\Delta U = Q - W$$

where:

- $\Delta U$ = change in internal energy (J)
- $Q$ = heat supplied to the system (J)
- $W$ = work done **by** the system (J)

Sign convention: $Q \gt 0$ when heat is absorbed by the system; $W \gt 0$ when the system does work
on the surroundings.

### Special Cases

| Process                | Condition      | Work Done                                | Heat Supplied      | Internal Energy Change |
| ---------------------- | -------------- | ---------------------------------------- | ------------------ | ---------------------- |
| Isothermal             | $\Delta T = 0$ | $W = nRT\ln(V_2/V_1)$                    | $Q = W$            | $\Delta U = 0$         |
| Isochoric (const. $V$) | $\Delta V = 0$ | $W = 0$                                  | $Q = nC_V\Delta T$ | $\Delta U = Q$         |
| Isobaric (const. $p$)  | $\Delta p = 0$ | $W = p\Delta V$                          | $Q = nC_p\Delta T$ | $\Delta U = Q - W$     |
| Adiabatic              | $Q = 0$        | $W = \frac{p_1V_1 - p_2V_2}{\gamma - 1}$ | $Q = 0$            | $\Delta U = -W$        |

For an adiabatic process:

$$pV^\gamma = \mathrm{constant}$$

$$TV^{\gamma - 1} = \mathrm{constant}$$

### Worked Example 9

$2.0$ moles of an ideal monatomic gas expand isothermally at $300$ K from $5.0$ L to $15.0$ L. Find
the work done and the heat absorbed.

$$W = nRT\ln\left(\frac{V_2}{V_1}\right) = 2.0 \times 8.314 \times 300 \times \ln\left(\frac{15.0}{5.0}\right)$$

$$W = 4988.4 \times \ln(3) = 4988.4 \times 1.099 = 5482 \mathrm{ J}$$

Since the process is isothermal, $\Delta U = 0$, so $Q = W = 5482$ J.

---

## Evaporation and Boiling

### Evaporation

**Evaporation** is the process by which molecules escape from the surface of a liquid at
temperatures below the boiling point. It occurs because molecules near the surface have a
distribution of kinetic energies, and the most energetic ones can overcome the intermolecular forces
and escape.

Key features:

- Evaporation occurs **only at the surface** (unlike boiling, which occurs throughout the liquid).
- Evaporation causes **cooling** of the remaining liquid (the most energetic molecules leave,
  lowering the average kinetic energy).
- The rate of evaporation depends on:
  - Temperature (higher temperature = faster evaporation)
  - Surface area (larger area = faster evaporation)
  - Air flow over the surface (removes vapour molecules, maintaining concentration gradient)
  - Vapour pressure of the liquid

### Boiling

**Boiling** occurs when the **saturated vapour pressure** of the liquid equals the external
atmospheric pressure. At this point, bubbles can form within the liquid (not just at the surface)
and rise to the top.

- The boiling point of a liquid depends on the external pressure.
- At higher altitudes (lower atmospheric pressure), water boils at a temperature below
  $100^\circ\mathrm{C}$.
- In a pressure cooker, the high pressure raises the boiling point, allowing food to cook faster.

### Distinction Between Evaporation and Boiling

| Feature     | Evaporation                         | Boiling                            |
| ----------- | ----------------------------------- | ---------------------------------- |
| Location    | Surface only                        | Throughout the liquid              |
| Temperature | Any temperature below boiling point | At a specific temperature          |
| Bubbles     | No                                  | Yes                                |
| Rate        | Generally slow                      | Can be rapid                       |
| Condition   | Always occurring                    | Requires SVP $=$ external pressure |

---

## Common Pitfalls

### Mistake 1: Confusing Heat and Temperature

Heat and temperature are fundamentally different quantities. A large mass of water at
$50^\circ\mathrm{C}$ contains more thermal energy than a small mass of water at $90^\circ\mathrm{C}$.
Temperature measures the _average_ kinetic energy per particle; heat is the total energy transferred
due to a temperature difference.

### Mistake 2: Using Celsius in Gas Law Calculations

All gas law calculations require temperature in **Kelvin**. Using Celsius will produce incorrect
results. For example, doubling the Celsius temperature from $20^\circ\mathrm{C}$ to $40^\circ\mathrm{C}$
is NOT a doubling of the absolute temperature ($293$ K to $313$ K).

### Mistake 3: Forgetting to Account for the Calorimeter

In method of mixtures experiments, the calorimeter itself absorbs heat. Ignoring the calorimeter's
heat capacity $C_{\mathrm{cal}}$ leads to an overestimate of the specific heat capacity of the sample.
The correct energy balance is:

$$m_s c_s (T_s - T_f) = (m_w c_w + C_{\mathrm{cal}})(T_f - T_w)$$

### Mistake 4: Assuming All Ice Melts (or All Water Freezes)

When mixing ice and water, always check whether the available heat is sufficient to melt all the ice
before assuming the final state is all liquid. If not, the final temperature is $0^\circ\mathrm{C}$
and the system is a mixture of ice and water.

### Mistake 5: Wrong Sign Convention in the First Law

The first law of thermodynamics is $\Delta U = Q - W$. Here $W$ is work done _by_ the system. If the
problem gives work done _on_ the system, you must negate it. Be consistent with the sign convention
throughout.

### Mistake 6: Confusing the Three Characteristic Speeds

The most probable speed, mean speed, and rms speed are different. For Maxwell-Boltzmann
distributions:

$$v_p = \sqrt{\frac{2RT}{M}}, \quad \langle v \rangle = \sqrt{\frac{8RT}{\pi M}}, \quad v_{\mathrm{rms}} = \sqrt{\frac{3RT}{M}}$$

The relationship is $v_p \lt \langle v \rangle \lt v_{\mathrm{rms}}$. In DSE problems, pay attention
to which speed the question asks for.

### Mistake 7: Applying Boyle's Law When Temperature Changes

Boyle's Law ($p_1 V_1 = p_2 V_2$) is only valid when temperature is constant. If the problem
involves a temperature change, you must use the general gas law:

$$\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$$

### Mistake 8: Units in Thermal Conductivity Problems

When using Fourier's law, ensure all quantities are in SI units: $k$ in
$\mathrm{W m}^{-1}\mathrm{ K}^{-1}$, $A$ in $\mathrm{m}^2$, $d$ in $\mathrm{m}$, $\Delta T$ in K. A common
error is using centimetres for thickness without converting to metres.

### Mistake 9: Mixing Up Specific Heat Capacity and Heat Capacity

Specific heat capacity $c$ is per unit mass ($\mathrm{J kg}^{-1}\mathrm{ K}^{-1}$). Heat capacity $C$ is
for the entire object ($\mathrm{J K}^{-1}$). They are related by $C = mc$. Using one in place of the
other is a frequent error.

### Mistake 10: Incorrect U-Value Calculation

For a composite wall, thermal resistances add in series (not conductances). The correct formula is:

$$\frac{1}{U} = \frac{d_1}{k_1} + \frac{d_2}{k_2} + \cdots$$

Do not add the U-values of individual layers directly.

---

## Practice Problems

<details>
<summary>Question 1: Temperature Conversion</summary>

The surface temperature of the Sun is approximately $5778$ K. Express this in Celsius and
Fahrenheit.

$$T_C = 5778 - 273.15 = 5504.85^\circ\mathrm{C}$$

$$T_F = \frac{9}{5}(5504.85) + 32 = 9908.73 + 32 = 9940.73^\circ\mathrm{F}$$

</details>

<details>
<summary>Question 2: Specific Heat Capacity Mixing</summary>

A $0.3$ kg aluminium block at $200^\circ\mathrm{C}$ is dropped into $1.0$ kg of oil at
$25^\circ\mathrm{C}$ contained in a copper calorimeter of mass $0.2$ kg at $25^\circ\mathrm{C}$. The
specific heat capacity of oil is $2100$ $\mathrm{J kg}^{-1}\mathrm{ K}^{-1}$. Find the final
temperature. (Specific heat capacity of aluminium $= 900$ $\mathrm{J kg}^{-1}\mathrm{ K}^{-1}$, copper
$= 385$ $\mathrm{J kg}^{-1}\mathrm{ K}^{-1}$.)

Heat lost by aluminium $=$ heat gained by oil $+$ heat gained by calorimeter:

$$m_a c_a (T_a - T_f) = m_o c_o (T_f - T_o) + m_c c_c (T_f - T_o)$$

$$0.3 \times 900 \times (200 - T_f) = 1.0 \times 2100 \times (T_f - 25) + 0.2 \times 385 \times (T_f - 25)$$

$$270(200 - T_f) = 2100(T_f - 25) + 77(T_f - 25)$$

$$54000 - 270T_f = 2177T_f - 54425$$

$$54000 + 54425 = 2177T_f + 270T_f$$

$$108425 = 2447T_f$$

$$T_f = 44.3^\circ\mathrm{C}$$

</details>

<details>
<summary>Question 3: Latent Heat with Phase Change</summary>

$100$ g of steam at $100^\circ\mathrm{C}$ is passed into $500$ g of water at $20^\circ\mathrm{C}$. Find
the final temperature and state.

**Step 1:** Check if all steam condenses.

Heat released if all steam condenses and cools to $0^\circ\mathrm{C}$:

$$Q_{\mathrm{max}} = m_s l_v + m_s c_w (100 - 0) = 0.1 \times 2260000 + 0.1 \times 4186 \times 100$$

$$Q_{\mathrm{max}} = 226000 + 41860 = 267860 \mathrm{ J}$$

Heat required to warm water from $20^\circ\mathrm{C}$ to $100^\circ\mathrm{C}$:

$$Q_{\mathrm{warm}} = m_w c_w (100 - 20) = 0.5 \times 4186 \times 80 = 167440 \mathrm{ J}$$

Since $Q_{\mathrm{max}} \gt Q_{\mathrm{warm}}$, all the steam condenses and the final temperature is
above $20^\circ\mathrm{C}$ but we need to check if it reaches $100^\circ\mathrm{C}$.

Actually, $Q_{\mathrm{warm}} = 167440$ J is less than the latent heat of condensation alone ($226000$
J), so only part of the steam condenses. The final temperature is $100^\circ\mathrm{C}$.

Let $m$ be the mass of steam that condenses:

$$m \times l_v = 167440$$

$$m = \frac{167440}{2260000} = 0.0741 \mathrm{ kg} = 74.1 \mathrm{ g}$$

The final mixture is $174.1$ g of water and $25.9$ g of steam at $100^\circ\mathrm{C}$.

</details>

<details>
<summary>Question 4: Thermal Conductivity</summary>

A glass window of area $1.5$ $\mathrm{m}^2$ and thickness $5.0$ mm has an indoor surface temperature
of $20^\circ\mathrm{C}$ and an outdoor surface temperature of $5^\circ\mathrm{C}$. Find the rate of heat
loss through the window. (Thermal conductivity of glass $= 0.8$ $\mathrm{W m}^{-1}\mathrm{ K}^{-1}$.)

$$\frac{Q}{t} = kA\frac{T_1 - T_2}{d} = 0.8 \times 1.5 \times \frac{20 - 5}{0.005}$$

$$\frac{Q}{t} = 1.2 \times \frac{15}{0.005} = 1.2 \times 3000 = 3600 \mathrm{ W}$$

</details>

<details>
<summary>Question 5: U-Value of Composite Wall</summary>

A wall consists of a $10$ cm brick layer ($k = 0.6$ $\mathrm{W m}^{-1}\mathrm{ K}^{-1}$) and a $5$ cm
layer of insulation ($k = 0.04$ $\mathrm{W m}^{-1}\mathrm{ K}^{-1}$). Find the U-value.

$$R_{\mathrm{brick}} = \frac{d_1}{k_1} = \frac{0.10}{0.6} = 0.1667 \mathrm{ m}^2\mathrm{ K/W}$$

$$R_{\mathrm{insulation}} = \frac{d_2}{k_2} = \frac{0.05}{0.04} = 1.25 \mathrm{ m}^2\mathrm{ K/W}$$

$$\frac{1}{U} = 0.1667 + 1.25 = 1.4167 \mathrm{ m}^2\mathrm{ K/W}$$

$$U = \frac{1}{1.4167} = 0.706 \mathrm{ W m}^{-2}\mathrm{ K}^{-1}$$

</details>

<details>
<summary>Question 6: Stefan-Boltzmann Law</summary>

A spherical black body of radius $5.0$ cm is maintained at $500$ K. Find the power radiated.

$$P = \sigma A T^4 = \sigma \times 4\pi r^2 \times T^4$$

$$P = 5.67 \times 10^{-8} \times 4\pi(0.05)^2 \times (500)^4$$

$$P = 5.67 \times 10^{-8} \times 0.03142 \times 6.25 \times 10^{10}$$

$$P = 5.67 \times 10^{-8} \times 1.963 \times 10^9 = 111.3 \mathrm{ W}$$

</details>

<details>
<summary>Question 7: Gas Law Combined</summary>

A gas cylinder contains $10$ L of oxygen at $20^\circ\mathrm{C}$ and $1.5 \times 10^6$ Pa. If the
temperature rises to $80^\circ\mathrm{C}$ and the pressure valve releases gas to maintain
$1.5 \times 10^6$ Pa, what volume of gas (measured at $20^\circ\mathrm{C}$ and $1.01 \times 10^5$ Pa)
escapes?

The gas that remains in the cylinder at $80^\circ\mathrm{C}$ and $1.5 \times 10^6$ Pa occupies $10$ L.

Moles remaining:

$$n_r = \frac{pV}{RT} = \frac{1.5 \times 10^6 \times 0.010}{8.314 \times 353.15} = \frac{15000}{2936.7} = 5.108 \mathrm{ mol}$$

Initial moles:

$$n_i = \frac{1.5 \times 10^6 \times 0.010}{8.314 \times 293.15} = \frac{15000}{2437.5} = 6.154 \mathrm{ mol}$$

Moles escaped:

$$\Delta n = 6.154 - 5.108 = 1.046 \mathrm{ mol}$$

Volume at STP conditions ($20^\circ\mathrm{C}$, $1.01 \times 10^5$ Pa):

$$V = \frac{nRT}{p} = \frac{1.046 \times 8.314 \times 293.15}{1.01 \times 10^5} = \frac{2548.5}{101000} = 0.0252 \mathrm{ m}^3 = 25.2 \mathrm{ L}$$

</details>

<details>
<summary>Question 8: RMS Speed Comparison</summary>

Compare the rms speeds of hydrogen ($M = 2.0$ $\mathrm{g/mol}$) and oxygen ($M = 32.0$ $\mathrm{g/mol}$)
at the same temperature.

$$\frac{v_{\mathrm{rms,H}_2}}{v_{\mathrm{rms,O}_2}} = \sqrt{\frac{M_{\mathrm{O}_2}}{M_{\mathrm{H}_2}}} = \sqrt{\frac{32.0}{2.0}} = \sqrt{16} = 4$$

Hydrogen molecules move four times faster than oxygen molecules at the same temperature. This is
consistent with the observation that lighter gases diffuse more rapidly (Graham's law).

</details>

<details>
<summary>Question 9: First Law of Thermodynamics</summary>

$1.0$ mol of an ideal monatomic gas at $300$ K expands isobarically from $10$ L to $20$ L. Find the
work done, the change in internal energy, and the heat supplied.

**Work done:**

$$W = p\Delta V$$

First, find $p$:

$$p = \frac{nRT}{V_1} = \frac{1.0 \times 8.314 \times 300}{0.010} = 249420 \mathrm{ Pa}$$

$$W = 249420 \times (0.020 - 0.010) = 2494.2 \mathrm{ J}$$

**Change in internal energy** (for a monatomic ideal gas, $C_V = \frac{3}{2}R$):

Find the final temperature:

$$\frac{V_1}{T_1} = \frac{V_2}{T_2} \implies T_2 = \frac{V_2 T_1}{V_1} = \frac{20 \times 300}{10} = 600 \mathrm{ K}$$

$$\Delta U = nC_V\Delta T = 1.0 \times \frac{3}{2} \times 8.314 \times (600 - 300) = 12.471 \times 300 = 3741.3 \mathrm{ J}$$

**Heat supplied:**

$$Q = \Delta U + W = 3741.3 + 2494.2 = 6235.5 \mathrm{ J}$$

Alternatively, using $C_p = \frac{5}{2}R$:

$$Q = nC_p\Delta T = 1.0 \times \frac{5}{2} \times 8.314 \times 300 = 6235.5 \mathrm{ J}$$

</details>

<details>
<summary>Question 10: Adiabatic Expansion</summary>

$2.0$ mol of a diatomic ideal gas ($\gamma = 1.4$) expands adiabatically from $V_1 = 5.0$ L at
$p_1 = 4.0 \times 10^5$ Pa to $V_2 = 10.0$ L. Find the final pressure and temperature.

**Final pressure:**

$$p_1 V_1^\gamma = p_2 V_2^\gamma$$

$$p_2 = p_1\left(\frac{V_1}{V_2}\right)^\gamma = 4.0 \times 10^5 \times \left(\frac{5.0}{10.0}\right)^{1.4}$$

$$p_2 = 4.0 \times 10^5 \times (0.5)^{1.4} = 4.0 \times 10^5 \times 0.3789 = 1.516 \times 10^5 \mathrm{ Pa}$$

**Initial temperature:**

$$T_1 = \frac{p_1 V_1}{nR} = \frac{4.0 \times 10^5 \times 0.0050}{2.0 \times 8.314} = \frac{2000}{16.628} = 120.3 \mathrm{ K}$$

**Final temperature:**

$$T_2 = \frac{p_2 V_2}{nR} = \frac{1.516 \times 10^5 \times 0.010}{2.0 \times 8.314} = \frac{1516}{16.628} = 91.1 \mathrm{ K}$$

The temperature drops because the gas does work on its surroundings without any heat input.

</details>

<details>
<summary>Question 11: Newton's Law of Cooling</summary>

A body cools from $80^\circ\mathrm{C}$ to $60^\circ\mathrm{C}$ in $5$ minutes in a room at
$20^\circ\mathrm{C}$. How long will it take to cool from $60^\circ\mathrm{C}$ to $40^\circ\mathrm{C}$?

Using Newton's law of cooling:

$$T(t) = T_s + (T_0 - T_s)e^{-t/\tau}$$

For the first interval ($80^\circ\mathrm{C}$ to $60^\circ\mathrm{C}$ in $300$ s):

$$60 = 20 + (80 - 20)e^{-300/\tau}$$

$$40 = 60e^{-300/\tau}$$

$$e^{-300/\tau} = \frac{2}{3}$$

$$\frac{-300}{\tau} = \ln\left(\frac{2}{3}\right)$$

$$\tau = \frac{-300}{\ln(2/3)} = \frac{-300}{-0.4055} = 739.8 \mathrm{ s}$$

For the second interval ($60^\circ\mathrm{C}$ to $40^\circ\mathrm{C}$):

$$40 = 20 + (60 - 20)e^{-t/\tau}$$

$$20 = 40e^{-t/\tau}$$

$$e^{-t/\tau} = \frac{1}{2}$$

$$\frac{-t}{739.8} = \ln\left(\frac{1}{2}\right) = -0.693$$

$$t = 739.8 \times 0.693 = 512.7 \mathrm{ s} \approx 8.5 \mathrm{ minutes}$$

</details>

<details>
<summary>Question 12: Wien's Displacement Law</summary>

A star has a surface temperature of $3500$ K. (a) At what wavelength does it radiate most intensely?
(b) In what region of the electromagnetic spectrum is this?

$$\lambda_{\mathrm{max}} = \frac{b}{T} = \frac{2.898 \times 10^{-3}}{3500} = 8.28 \times 10^{-7} \mathrm{ m} = 828 \mathrm{ nm}$$

This is in the **near-infrared** region (visible light extends from approximately $380$ nm to $750$
nm). Such stars appear reddish to the eye because the tail of the distribution extends into the red
part of the visible spectrum.

</details>

<details>
<summary>Question 13: Mean Free Path (Extension)</summary>

Oxygen molecules at STP have a molecular diameter of $3.6 \times 10^{-10}$ m. Estimate the mean free
path.

The mean free path is:

$$\lambda = \frac{1}{\sqrt{2}\pi d^2 n}$$

where $n$ is the number density. At STP, $n = \frac{p}{k_BT}$:

$$n = \frac{1.01 \times 10^5}{1.381 \times 10^{-23} \times 273.15} = 2.68 \times 10^{25} \mathrm{ m}^{-3}$$

$$\lambda = \frac{1}{\sqrt{2}\pi(3.6 \times 10^{-10})^2 \times 2.68 \times 10^{25}}$$

$$\lambda = \frac{1}{1.414 \times 3.14159 \times 1.296 \times 10^{-19} \times 2.68 \times 10^{25}}$$

$$\lambda = \frac{1}{1.537 \times 10^{7}} = 6.51 \times 10^{-8} \mathrm{ m} = 65.1 \mathrm{ nm}$$

</details>

<details>
<summary>Question 14: Density of a Gas</summary>

Find the density of nitrogen gas ($M = 28.0$ $\mathrm{g/mol}$) at $25^\circ\mathrm{C}$ and
$1.01 \times 10^5$ Pa.

$$\rho = \frac{pM}{RT} = \frac{(1.01 \times 10^5)(0.0280)}{(8.314)(298.15)}$$

$$\rho = \frac{2828}{2478.9} = 1.141 \mathrm{ kg/m}^3$$

</details>

<details>
<summary>Question 15: Complete Energy Balance with Phase Change</summary>

A $500$ W heater is used to heat $0.5$ kg of ice at $-10^\circ\mathrm{C}$ in an insulated container.
How long does it take to convert all the ice to steam at $100^\circ\mathrm{C}$? Assume $100\%$
efficiency.

**Stage 1:** Heat ice from $-10^\circ\mathrm{C}$ to $0^\circ\mathrm{C}$:

$$Q_1 = 0.5 \times 2100 \times 10 = 10500 \mathrm{ J}$$

**Stage 2:** Melt ice at $0^\circ\mathrm{C}$:

$$Q_2 = 0.5 \times 334000 = 167000 \mathrm{ J}$$

**Stage 3:** Heat water from $0^\circ\mathrm{C}$ to $100^\circ\mathrm{C}$:

$$Q_3 = 0.5 \times 4186 \times 100 = 209300 \mathrm{ J}$$

**Stage 4:** Vaporise water at $100^\circ\mathrm{C}$:

$$Q_4 = 0.5 \times 2260000 = 1130000 \mathrm{ J}$$

**Total energy:**

$$Q_{\mathrm{total}} = 10500 + 167000 + 209300 + 1130000 = 1516800 \mathrm{ J}$$

**Time:**

$$t = \frac{Q_{\mathrm{total}}}{P} = \frac{1516800}{500} = 3033.6 \mathrm{ s} = 50.6 \mathrm{ minutes}$$

</details>
