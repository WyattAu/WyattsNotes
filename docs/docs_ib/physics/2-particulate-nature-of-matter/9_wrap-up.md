---
slug: wrap
date: 2024-01-01T00:00:00Z
categories:
  - ib
  - ib-physics
---
## Fluid Mechanics and Pressure

Pressure is defined as force per unit area:

$$P = \frac{F}{A}$$

The SI unit is the pascal (Pa), where $1 \mathrm{ Pa} = 1 \mathrm{ N m}^{-2}$.

**Hydrostatic pressure** in a fluid column of density $\rho$ at depth $h$ is:

$$P = P_0 + \rho g h$$

Where $P_0$ is the pressure at the surface (often atmospheric pressure,
$P_{\mathrm{atm}} \approx 1.01 \times 10^5$ Pa).

**Pascal's principle:** A change in pressure applied to an enclosed fluid is transmitted
Undiminished to every portion of the fluid and the walls of the container. This is the basis of
Hydraulic systems:

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

### Worked Example: Hydraulic Lift

A hydraulic lift has a small piston of area $0.010 \mathrm{ m}^2$ and a large piston of area
$0.50 \mathrm{ m}^2$. A force of $200$ N is applied to the small piston.

- **Pressure transmitted:** $P = \frac{200}{0.010} = 2.0 \times 10^4$ Pa
- **Force on large piston:** $F_2 = P \times A_2 = (2.0 \times 10^4)(0.50) = 1.0 \times 10^4$ N
- **Mechanical advantage:** $\frac{F_2}{F_1} = \frac{1.0 \times 10^4}{200} = 50$

The trade-off is that the small piston must move 50 times farther than the large piston (energy
Conservation).

> **Exam Tip:** When asked about hydraulic systems, always mention that energy is conserved:
> $F_1 d_1 = F_2 d_2$So a large force multiplication comes at the cost of a large distance on the
> input side.

---

## Archimedes' Principle

**Archimedes' principle:** An object wholly or partially immersed in a fluid experiences an upward
Buoyant force equal to the weight of the fluid displaced.

$$F_b = \rho_{\mathrm{fluid}} \cdot V_{\mathrm{submerged}} \cdot g$$

An object floats when $F_b = mg$I.e., when:

$$\rho_{\mathrm{fluid}} \cdot V_{\mathrm{submerged}} \cdot g = \rho_{\mathrm{object}} \cdot V_{\mathrm{object}} \cdot g$$

This simplifies to the **fraction submerged**:

$$\mathrm{Fraction submerged} = \frac{\rho_{\mathrm{object}}}{\rho_{\mathrm{fluid}}}$$

### Worked Example: Floating Block

A wooden block of density $600 \mathrm{ kg m}^{-3}$ and volume $0.0050 \mathrm{ m}^3$ floats in
Water ($\rho = 1000 \mathrm{ kg m}^{-3}$).

- **Fraction submerged:** $\frac{600}{1000} = 0.60$ (60% underwater)
- **Volume submerged:** $0.60 \times 0.0050 = 0.0030 \mathrm{ m}^3$
- **Buoyant force:** $F_b = (1000)(0.0030)(9.8) = 29.4$ N
- **Weight of block:** $mg = (600)(0.0050)(9.8) = 29.4$ N (confirms equilibrium)

> **Exam Tip:** A common IB question asks whether an object will float or sink. Compare the average
> density of the object to the density of the fluid. If
> $\rho_{\mathrm{object}} \lt \rho_{\mathrm{fluid}}$It floats.

---

## Bernoulli's Equation

For an **ideal fluid** (incompressible, non-viscous, steady flow), Bernoulli's equation states that
Along a streamline:

$$P + \frac{1}{2}\rho v^2 + \rho g h = \mathrm{constant}$$

This is a statement of **conservation of energy** per unit volume of fluid:

- $P$ — pressure energy per unit volume
- $\frac{1}{2}\rho v^2$ — kinetic energy per unit volume
- $\rho g h$ — gravitational potential energy per unit volume

**Key consequence — the Venturi effect:** Where the fluid speed increases, the pressure decreases.
For a horizontal pipe ($h = \mathrm{const.}$):

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

Combined with the **continuity equation** (conservation of mass for incompressible flow):

$$A_1 v_1 = A_2 v_2$$

### Worked Example: Pipe Flow

Water flows through a pipe that narrows from cross-sectional area $A_1 = 0.050 \mathrm{ m}^2$ to
$A_2 = 0.020 \mathrm{ m}^2$. The water speed in the wider section is $2.0 \mathrm{ m s}^{-1}$ and
The pressure there is $1.5 \times 10^5$ Pa.

- **Speed in narrow section:**
  $v_2 = \frac{A_1 v_1}{A_2} = \frac{(0.050)(2.0)}{0.020} = 5.0 \mathrm{ m s}^{-1}$
- **Pressure in narrow section (horizontal):**
  $$P_2 = P_1 + \frac{1}{2}\rho(v_1^2 - v_2^2) = 1.5 \times 10^5 + \frac{1}{2}(1000)(4.0 - 25.0)$$
  $$P_2 = 1.5 \times 10^5 - 10500 = 1.395 \times 10^5 \mathrm{ Pa}$$

The pressure **drops** where the fluid speeds up — this is the Venturi effect.

> **Exam Tip:** Bernoulli's equation explains lift on an aeroplane wing (airfoil), the operation of
> a spray bottle, and why a roof can blow off in high winds. Be ready to apply it conceptually as
> well as mathematically.

---

## Ideal Gas Behaviour

### Kinetic Theory of Gases

The ideal gas model makes the following assumptions:

1. Gas consists of many small particles in rapid, random motion
2. Collisions between particles and with walls are perfectly elastic
3. The volume of individual particles is negligible compared to the container volume
4. Intermolecular forces are negligible (except during collisions)
5. The duration of collisions is negligible compared to time between collisions

### Macroscopic Gas Laws

| Law              | Relationship            | Constant Quantity |
| :--------------- | :---------------------- | :---------------- |
| Boyle's Law      | $P \propto \frac{1}{V}$ | $T$, $n$          |
| Charles's Law    | $V \propto T$           | $P$, $n$          |
| Gay-Lussac's Law | $P \propto T$           | $V$, $n$          |

All of these are unified in the **ideal gas equation**:

$$PV = nRT$$

Where $R = 8.31 \mathrm{ J mol}^{-1}\mathrm{K}^{-1}$ is the universal gas constant and $T$ is the
Absolute temperature in Kelvin.

### Microscopic Basis: Pressure from Molecular Collisions

From kinetic theory, the pressure of an ideal gas arises from molecular collisions with the
Container walls:

$$P = \frac{1}{3}\frac{N}{V} m \langle c^2 \rangle$$

Where $N$ is the number of molecules, $m$ is the mass of one molecule, and $\langle c^2 \rangle$ is
The mean square speed.

Combining with $PV = Nk_BT$ (where $k_B = \frac{R}{N_A}$ is Boltzmann's constant):

$$\frac{1}{2}m\langle c^2 \rangle = \frac{3}{2}k_BT$$

The **root-mean-square speed** is:

$$c_{\mathrm{rms}} = \sqrt{\langle c^2 \rangle} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}$$

Where $M$ is the molar mass (kg mol$^{-1}$).

### Worked Example: RMS Speed

Calculate the rms speed of nitrogen molecules ($M = 0.028 \mathrm{ kg mol}^{-1}$) at $300$ K.

$$c_{\mathrm{rms}} = \sqrt{\frac{3(8.31)(300)}{0.028}} = \sqrt{\frac{7479}{0.028}} = \sqrt{267107} \approx 517 \mathrm{ m s}^{-1}$$

> **Exam Tip:** When converting between $c_{\mathrm{rms}}$ forms, remember that $m$ is the mass of a
> **single molecule** ($m = M/N_A$) while $M$ is the **molar mass**. Mixing these up is a very
> common error.

### Real Gases vs Ideal Gases

Real gases deviate from ideal behaviour at **high pressure** and **low temperature** because:

- Molecules have finite volume (significant at high $P$)
- Intermolecular forces become significant (significant at low $T$)

The **van der Waals equation** corrects for these:

$$\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT$$

Where $a$ accounts for intermolecular attraction and $b$ accounts for molecular volume.

---

## Phase Changes

### Heating Curve

When a substance is heated, its temperature does not always increase. A typical heating curve shows
Five regions:

1. **Solid heating:** $Q = mc_s \Delta T$ (temperature rises)
2. **Melting (fusion):** $Q = mL_f$ (temperature stays constant at $T_f$)
3. **Liquid heating:** $Q = mc_l \Delta T$ (temperature rises)
4. **Boiling (vaporisation):** $Q = mL_v$ (temperature stays constant at $T_b$)
5. **Gas heating:** $Q = mc_g \Delta T$ (temperature rises)

During phase changes, energy goes into **breaking or forming intermolecular bonds**, not increasing
Kinetic energy.

### Key Definitions

| Quantity                             | Symbol | Definition                   | Unit                 |
| :----------------------------------- | :----- | :--------------------------- | :------------------- |
| Specific heat capacity               | $c$    | Energy to raise 1 kg by 1 K  | J kg$^{-1}$ K$^{-1}$ |
| Specific latent heat of fusion       | $L_f$  | Energy to melt 1 kg at $T_f$ | J kg$^{-1}$          |
| Specific latent heat of vaporisation | $L_v$  | Energy to boil 1 kg at $T_b$ | J kg$^{-1}$          |

### Evaporation vs Boiling

| Property      | Evaporation                      | Boiling                       |
| :------------ | :------------------------------- | :---------------------------- |
| Temperature   | Occurs at any temperature        | Occurs at a specific $T_b$    |
| Location      | Surface only                     | Throughout the liquid         |
| Bubbles       | No                               | Yes                           |
| Energy source | From the liquid itself (cooling) | External heat source required |

### Pressure and Boiling Point

Boiling occurs when the **saturated vapour pressure** equals the external (atmospheric) pressure.
Therefore:

- Higher external pressure produces a higher boiling point (e.g., pressure cooker)
- Lower external pressure produces a lower boiling point (e.g., water boils at ~70 degrees C on
  Mount Everest)

### Worked Example: Phase Change Energy

Calculate the total energy required to convert $2.0$ kg of ice at $-20$ degrees C to steam at $120$
Degrees C. (Data: $c_{\mathrm{ice}} = 2100$ J kg$^{-1}$ K$^{-1}$, $c_{\mathrm{water}} = 4200$ J
Kg$^{-1}$ K$^{-1}$$c_{\mathrm{steam}} = 2000$ J kg$^{-1}$ K$^{-1}$$L_f = 3.34 \times 10^5$ J
Kg$^{-1}$$L_v = 2.26 \times 10^6$ J kg$^{-1}$)

| Stage                           | Calculation               | Energy (J)                |
| :------------------------------ | :------------------------ | :------------------------ |
| Ice: $-20$ to $0$ degrees C     | $(2.0)(2100)(20)$         | 84,000                    |
| Melting at $0$ degrees C        | $(2.0)(3.34 \times 10^5)$ | 668,000                   |
| Water: $0$ to $100$ degrees C   | $(2.0)(4200)(100)$        | 840,000                   |
| Boiling at $100$ degrees C      | $(2.0)(2.26 \times 10^6)$ | 4,520,000                 |
| Steam: $100$ to $120$ degrees C | $(2.0)(2000)(20)$         | 80,000                    |
| **Total**                       |                           | **6,192,000 J (6.19 MJ)** |

> **Exam Tip:** IB examiners frequently ask multi-stage heating problems. Always identify each
> stage, write the formula, and compute separately before summing. Forgetting the phase change
> stages (where $\Delta T = 0$ but $Q \neq 0$) is the most common mistake.

---

## Quick Reference: Key Formulas

| Formula                                                | Application                     |
| :----------------------------------------------------- | :------------------------------ |
| $P = \frac{F}{A}$                                      | Pressure definition             |
| $P = P_0 + \rho g h$                                   | Hydrostatic pressure            |
| $F_b = \rho_f V_{\mathrm{sub}} g$                      | Buoyant force (Archimedes)      |
| $P + \frac{1}{2}\rho v^2 + \rho g h = \mathrm{const.}$ | Bernoulli's equation            |
| $A_1 v_1 = A_2 v_2$                                    | Continuity equation             |
| $PV = nRT$                                             | Ideal gas law                   |
| $c_{\mathrm{rms}} = \sqrt{\frac{3RT}{M}}$              | RMS molecular speed             |
| $Q = mc\Delta T$                                       | Specific heat (no phase change) |
| $Q = mL$                                               | Latent heat (phase change)      |

</details>

## Common Pitfalls

1. Using the wrong equation from the data sheet — take time to read the full equation, including
   conditions and variable definitions.

2. Incorrectly applying $\vec{F} = m\vec{a}$ when forces are not collinear — resolve into components
   first.

3. Confusing scalar and vector quantities — always check whether direction matters for the quantity
   in question.

4. Rounding intermediate answers too early, which compounds errors in multi-step calculations.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
