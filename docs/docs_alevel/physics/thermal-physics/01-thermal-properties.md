---
title: Thermal Properties
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: thermal-properties
---

## Thermal Properties

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P2 :::

## 1. Temperature Scales

### The Kelvin Scale

The **kelvin** is the SI base unit of temperature. It is defined by fixing the Boltzmann constant
$k_B = 1.381 \times 10^{-23}$ J K$^{-1}$.

**Absolute zero** is 0 K, the lowest possible temperature at which particles have minimum thermal
energy.

**Conversion:** $T(\text{K}) = T(°\text{C}) + 273.15$

### Triple Point of Water

The triple point of water (where solid, liquid, and gas coexist in equilibrium) occurs at exactly
273.16 K (0.01°C). This was historically used to define the kelvin.

### Brownian Motion as Evidence for the Particle Model

**Brownian motion** is the random, jittery movement of microscopic particles suspended in a fluid.
Robert Brown observed this for pollen grains in water (1827). Einstein provided the quantitative
explanation in 1905.

The random motion arises because the suspended particle is bombarded unevenly by fluid molecules. At
any instant, more molecules strike one side than the other, producing a net force that changes
direction unpredictably. The molecules themselves are far too small to see, but their collective
effect on a larger particle is visible.

**Random walk argument.** After $N$ collisions, each producing a displacement $\delta$ in a random
direction, the net displacement scales as $\sqrt{N}\,\delta$ (not $N\delta$), because steps in
different directions partially cancel. Since the collision rate is proportional to time $t$, the
mean displacement grows as:

$$\boxed{\langle x^2\rangle^{1/2} \propto \sqrt{t}}$$

This is a hallmark signature of Brownian motion and provided the first direct evidence for the
existence of atoms and molecules.

:::info Board Coverage AQA: Brownian motion is required practical observation. Edexcel: Explanation
in terms of molecular bombardment. OCR (A): Historical context and Einstein's analysis. CIE:
Qualitative and quantitative treatment. :::

## 2. Specific Heat Capacity

**Definition.** The **specific heat capacity** $c$ of a substance is the energy required to raise
the temperature of 1 kg of the substance by 1 K:

$$\boxed{Q = mc\Delta T}$$

SI unit: J kg$^{-1}$ K$^{-1}$.

### Specific Latent Heat

**Definition.** The **specific latent heat** $L$ is the energy per unit mass required to change the
state of a substance at constant temperature:

$$\boxed{Q = mL}$$

- **Specific latent heat of fusion** $L_f$: solid to liquid
- **Specific latent heat of vaporisation** $L_v$: liquid to gas

**Intuition.** During a phase change, energy goes into breaking intermolecular bonds rather than
increasing kinetic energy, so the temperature remains constant despite energy input. Vaporisation
requires much more energy than fusion because gas molecules are completely separated.

:::warning Common Pitfall Do not confuse specific heat capacity (which raises temperature) with
latent heat (which changes state at constant temperature). In a heating curve, the flat sections are
phase changes (latent heat), and the sloped sections are temperature changes (specific heat
capacity). :::

### Internal Energy

**Definition.** The **internal energy** $U$ of a system is the sum of the kinetic and potential
energies of all its constituent particles, excluding macroscopic kinetic and potential energy.

For an **ideal gas**, there are no intermolecular forces, so all internal energy is kinetic:

$$U = N\langle E_k\rangle = \frac{3}{2}Nk_BT = \frac{3}{2}nRT$$

For a **real substance**, internal energy has both kinetic (vibrational, rotational, translational)
and potential (intermolecular bond) components. When a solid melts, potential energy increases
(bonds break) while kinetic energy (temperature) stays constant.

**Key distinction.** Internal energy depends only on the state of the system (state function), not
on how it arrived at that state. Temperature and volume determine $U$ for a given mass of substance.

### Molar Heat Capacities

The **molar heat capacity at constant volume** $C_v$ and **at constant pressure** $C_p$ are related
by:

$$\boxed{C_p - C_v = R}$$

**Proof.** For $n$ moles at constant pressure, the first law gives:

$$\Delta U = Q + W = nC_p\Delta T - p\Delta V$$

Since $p\Delta V = nR\Delta T$ (ideal gas) and $\Delta U = nC_v\Delta T$:

$$nC_v\Delta T = nC_p\Delta T - nR\Delta T$$

$$C_p - C_v = R$$

$\square$

**Intuition.** At constant pressure, some heat goes into expansion work ($p\Delta V$), so more heat
is needed per degree of temperature rise. At constant volume, all heat goes into internal energy.
Hence $C_p > C_v$.

## 3. Ideal Gas Laws

### Boyle's Law

At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its
volume:

$$pV = \text{constant} \quad (T \text{ constant})$$

### Charles's Law

At constant pressure, the volume is directly proportional to the absolute temperature:

$$V = \text{constant} \times T \quad (p \text{ constant})$$

### The Ideal Gas Equation

Combining the gas laws:

$$\boxed{pV = nRT}$$

where $n$ is the number of moles and $R = 8.31$ J mol$^{-1}$ K$^{-1}$ is the molar gas constant.

Alternatively, using $Nk_B T$ where $N$ is the number of molecules:

$$\boxed{pV = Nk_BT}$$

since $nR = Nk_B$ (Avogadro's number $N_A \times k_B = R$).

## 4. Derivation of $pV = Nk_BT$ from Kinetic Theory

### Assumptions of the Kinetic Theory

1. The gas consists of $N$ identical point particles of mass $m$.
2. The particles move in random directions with a distribution of speeds.
3. All collisions are elastic (kinetic energy is conserved).
4. The volume of the particles is negligible compared to the container volume.
5. Intermolecular forces are negligible except during collisions.
6. Collisions with the walls are instantaneous.

### Derivation

Consider $N$ particles in a cuboidal container of side $L$ and volume $V = L^3$.

A single particle moving with velocity component $v_x$ in the $x$-direction bounces off a wall. The
change in momentum per collision is:

$$\Delta p = mv_x - (-mv_x) = 2mv_x$$

The time between successive collisions with the same wall is:

$$\Delta t = \frac{2L}{v_x}$$

The average force on the wall from this particle:

$$F = \frac{\Delta p}{\Delta t} = \frac{2mv_x}{2L/v_x} = \frac{mv_x^2}{L}$$

For $N$ particles, the total force on one wall:

$$F_{\text{total}} = \sum_{i=1}^{N} \frac{mv_{x,i}^2}{L} = \frac{m}{L}\sum_{i=1}^{N}v_{x,i}^2$$

The pressure on the wall:

$$p = \frac{F_{\text{total}}}{L^2} = \frac{m}{L^3}\sum_{i=1}^{N}v_{x,i}^2 = \frac{mN}{V}\langle v_x^2\rangle$$

where $\langle v_x^2\rangle = \frac{1}{N}\sum v_{x,i}^2$ is the mean square velocity in the
$x$-direction.

By symmetry:
$\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle = \frac{1}{3}\langle v^2\rangle$
(since $v^2 = v_x^2 + v_y^2 + v_z^2$ and the motion is isotropic).

$$p = \frac{mN}{V} \cdot \frac{1}{3}\langle v^2\rangle = \frac{1}{3}\frac{Nm\langle v^2\rangle}{V}$$

$$\boxed{pV = \frac{1}{3}Nm\langle v^2\rangle}$$

Since the average translational kinetic energy is
$\langle E_k \rangle = \frac{1}{2}m\langle v^2\rangle$:

$$pV = \frac{2}{3}N\langle E_k\rangle$$

Comparing with $pV = Nk_BT$:

$$\frac{2}{3}N\langle E_k\rangle = Nk_BT$$

$$\boxed{\langle E_k\rangle = \frac{3}{2}k_BT}$$

This is a profound result: the average kinetic energy of a gas molecule depends **only on
temperature**, not on the type of gas molecule.

## 5. Root Mean Square Speed

The **root mean square speed** is defined as:

$$\boxed{v_{\text{rms}} = \sqrt{\langle v^2\rangle}}$$

From $\langle E_k\rangle = \frac{1}{2}m\langle v^2\rangle = \frac{3}{2}k_BT$:

$$\frac{1}{2}mv_{\text{rms}}^2 = \frac{3}{2}k_BT$$

$$\boxed{v_{\text{rms}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M_r}}$$

where $M_r$ is the molar mass.

**Intuition.** Lighter molecules move faster at the same temperature. Hydrogen ($M_r = 2$) has an
rms speed $\sim 4$ times that of oxygen ($M_r = 32$) at the same temperature (ratio
$\propto 1/\sqrt{M_r}$).

<details>
<summary>Example: RMS Speed of Oxygen</summary>
Calculate the rms speed of oxygen molecules ($M_r = 0.032$ kg mol$^{-1}$) at 300 K.

**Answer.**
$v_{\text{rms}} = \sqrt{\frac{3RT}{M_r}} = \sqrt{\frac{3 \times 8.31 \times 300}{0.032}} = \sqrt{233719} = 483$
m s$^{-1}$.

</details>

## 6. Equipartition Theorem

The **equipartition theorem** states that each quadratic degree of freedom in a system at thermal
equilibrium has an average energy of $\frac{1}{2}k_BT$ per particle.

**Degrees of freedom** for common gas molecules:

| Molecule type               | Translational | Rotational | Total DOF | $C_v$ (per mole) | $\gamma = C_p/C_v$ |
| --------------------------- | ------------- | ---------- | --------- | ---------------- | ------------------ |
| Monatomic (He, Ne, Ar)      | 3             | 0          | 3         | $\frac{3}{2}R$   | $5/3 \approx 1.67$ |
| Diatomic (N$_2$, O$_2$)     | 3             | 2          | 5         | $\frac{5}{2}R$   | $7/5 = 1.40$       |
| Polyatomic (CO$_2$, CH$_4$) | 3             | 3          | 6         | $3R$             | $4/3 \approx 1.33$ |

**Proof that $\gamma = C_p/C_v = (f+2)/f$.** For $f$ degrees of freedom:

1. Internal energy per mole: $U = \frac{f}{2}N_Ak_BT = \frac{f}{2}RT$
2. At constant volume: $C_v = \frac{dU}{dT}\Big|_V = \frac{f}{2}R$
3. From $C_p - C_v = R$: $C_p = \frac{f}{2}R + R = \frac{f+2}{2}R$
4. Therefore: $\gamma = \frac{C_p}{C_v} = \frac{f+2}{f}$

For monatomic ($f=3$): $\gamma = 5/3$. For diatomic ($f=5$): $\gamma = 7/5$.

$\square$

**Intuition.** Rotational DOF for a monatomic gas are frozen out because a point particle has no
moment of inertia. For a diatomic molecule, rotation about the bond axis does not count (moment of
inertia is negligible), leaving only 2 rotational DOF.

:::warning Common Pitfall At A-Level, vibrational DOF are not considered (they are significant only
at high temperatures). The equipartition theorem applies to each fully-excited quadratic DOF. At
room temperature, diatomic molecules have 5 active DOF (3 translational + 2 rotational), not 6. :::

## 7. Maxwell-Boltzmann Speed Distribution

The molecules in a gas do not all move at the same speed. The **Maxwell-Boltzmann distribution**
describes the probability density of molecular speeds at temperature $T$:

$$f(v) = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 \exp\!\left(-\frac{mv^2}{2k_BT}\right)$$

The distribution is characterised by three speeds, all proportional to $\sqrt{k_BT/m}$ but with
different numerical prefactors:

$$v_p = \sqrt{\frac{2k_BT}{m}} \qquad \langle v \rangle = \sqrt{\frac{8k_BT}{\pi m}} \qquad v_{\text{rms}} = \sqrt{\frac{3k_BT}{m}}$$

**Ordering:** $v_p < \langle v \rangle < v_{\text{rms}}$

**Intuition.** The distribution is not symmetric -- it has a long tail towards high speeds. The most
probable speed $v_p$ sits at the peak, but the tail of fast molecules pulls the mean and rms above
the peak. Numerically: $v_p : \langle v \rangle : v_{\text{rms}} = 1 : 1.128 : 1.225$.

As temperature increases, the distribution broadens and the peak shifts right (faster molecules),
but the area under the curve stays normalised to 1 (total probability). As mass increases, the
distribution narrows and shifts left (heavier molecules move more slowly at the same temperature).

:::info Board Coverage AQA: Qualitative understanding of the distribution shape. Edexcel: Comparison
of speeds at different temperatures. OCR (A): Ratio of speeds for different gases. CIE: Quantitative
use of all three speed measures. :::

<details>
<summary>Example: Speed Ratio for Different Gases</summary>

Compare the rms speeds of helium ($M_r = 4$) and carbon dioxide ($M_r = 44$) at 300 K.

**Answer.**
$\frac{v_{\text{rms}}(\text{He})}{v_{\text{rms}}(\text{CO}_2)} = \sqrt{\frac{M_r(\text{CO}_2)}{M_r(\text{He})}} = \sqrt{\frac{44}{4}} = \sqrt{11} \approx 3.32$.

Helium molecules move about 3.3 times faster than CO$_2$ molecules at the same temperature. This is
why helium escapes from the atmosphere faster than heavier gases (atmospheric escape).

</details>

## 8. Mean Free Path

The **mean free path** $\lambda$ is the average distance a molecule travels between successive
collisions:

$$\boxed{\lambda = \frac{1}{\sqrt{2}\,\pi d^2 n}}$$

where $d$ is the molecular diameter and $n = N/V$ is the number density.

**Derivation sketch.** Consider one molecule of diameter $d$ moving through stationary target
molecules of number density $n$. The moving molecule sweeps out a cylinder of cross-sectional area
$\pi d^2$ per unit time. It collides with any target molecule whose centre lies within this
cylinder. The collision frequency is $f = n\pi d^2 v_{\text{rel}}$ where $v_{\text{rel}}$ is the
mean relative speed. For a thermal distribution, $v_{\text{rel}} = \sqrt{2}\,\langle v\rangle$
(factor from relative velocity of two Maxwellian distributions), giving:

$$\lambda = \frac{\langle v\rangle}{f} = \frac{\langle v\rangle}{\sqrt{2}\,\pi d^2 n \langle v\rangle} = \frac{1}{\sqrt{2}\,\pi d^2 n}$$

$\square$

**Intuition.** The mean free path decreases with increasing density (more molecules to collide with)
and increases with decreasing molecular size. At atmospheric pressure and room temperature,
$\lambda$ for air is approximately 68 nm -- about 200 molecular diameters.

The **collision frequency** is $Z = \langle v\rangle / \lambda$:

$$\boxed{Z = \sqrt{2}\,\pi d^2 n \langle v\rangle}$$

At STP, an air molecule undergoes roughly $7 \times 10^9$ collisions per second.

## Problem Set

<details>
<summary>Problem 1</summary>
Calculate the energy required to heat 2.0 kg of water from 20°C to 80°C. The specific heat capacity of water is 4200 J kg$^{-1}$ K$^{-1}$.

**Answer.** $Q = mc\Delta T = 2.0 \times 4200 \times 60 = 504{,}000$ J $= 504$ kJ.

<b>If you get this wrong, revise:</b> [Specific Heat Capacity](#2-specific-heat-capacity)

</details>

<details>
<summary>Problem 2</summary>
A 0.50 kg block of ice at 0°C is heated until it completely melts. The specific latent heat of fusion of water is $3.34 \times 10^5$ J kg$^{-1}$. Calculate the energy required.

**Answer.** $Q = mL_f = 0.50 \times 3.34 \times 10^5 = 1.67 \times 10^5$ J $= 167$ kJ.

<b>If you get this wrong, revise:</b> [Specific Latent Heat](#specific-latent-heat)

</details>

<details>
<summary>Problem 3</summary>
A gas occupies 0.020 m$^3$ at a pressure of $1.5 \times 10^5$ Pa and temperature 300 K. Calculate the number of moles.

**Answer.**
$n = \frac{pV}{RT} = \frac{1.5 \times 10^5 \times 0.020}{8.31 \times 300} = \frac{3000}{2493} = 1.20$
mol.

<b>If you get this wrong, revise:</b> [The Ideal Gas Equation](#the-ideal-gas-equation)

</details>

<details>
<summary>Problem 4</summary>
Calculate the rms speed of nitrogen molecules ($M_r = 0.028$ kg mol$^{-1}$) at 250 K.

**Answer.**
$v_{\text{rms}} = \sqrt{\frac{3 \times 8.31 \times 250}{0.028}} = \sqrt{\frac{6232.5}{0.028}} = \sqrt{222{,}589} = 472$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</details>

<details>
<summary>Problem 5</summary>
A gas cylinder of volume 0.050 m$^3$ contains oxygen at 200 kPa and 280 K. If the temperature rises to 350 K and the volume increases to 0.060 m$^3$, what is the new pressure?

**Answer.** Using $p_1V_1/T_1 = p_2V_2/T_2$:
$p_2 = \frac{p_1V_1T_2}{V_2T_1} = \frac{200{,}000 \times 0.050 \times 350}{0.060 \times 280} = \frac{3{,}500{,}000}{16.8} = 208{,}333$
Pa $\approx 208$ kPa.

<b>If you get this wrong, revise:</b> [Ideal Gas Laws](#3-ideal-gas-laws)

</details>

<details>
<summary>Problem 6</summary>
Derive the expression for the average kinetic energy of a gas molecule: $\langle E_k\rangle = \frac{3}{2}k_BT$.

**Answer.** Starting from $pV = \frac{1}{3}Nm\langle v^2\rangle$ (kinetic theory derivation), and
using $pV = Nk_BT$ (ideal gas law):

$\frac{1}{3}Nm\langle v^2\rangle = Nk_BT$.

$\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}k_BT$.

Since $\langle E_k\rangle = \frac{1}{2}m\langle v^2\rangle$: $\langle E_k\rangle = \frac{3}{2}k_BT$.

<b>If you get this wrong, revise:</b>
[Derivation of $pV = Nk_BT$ from Kinetic Theory](#4-derivation-of-pv-nk_bt-from-kinetic-theory)

</details>

<details>
<summary>Problem 7</summary>
A 200 W heater is used to heat 0.80 kg of oil. The oil temperature rises from 20°C to 80°C in 8.0 minutes. Calculate the specific heat capacity of the oil.

**Answer.** $Q = Pt = 200 \times 480 = 96{,}000$ J.
$c = Q/(m\Delta T) = 96{,}000/(0.80 \times 60) = 2000$ J kg$^{-1}$ K$^{-1}$.

<b>If you get this wrong, revise:</b> [Specific Heat Capacity](#2-specific-heat-capacity)

</details>

<details>
<summary>Problem 8</summary>
Explain why the rms speed of hydrogen molecules is greater than that of oxygen molecules at the same temperature.

**Answer.** $v_{\text{rms}} = \sqrt{3k_BT/m}$. At the same temperature, $k_BT$ is the same. Since
hydrogen has a smaller molecular mass ($m_H \ll m_O$), the rms speed is greater. Specifically,
$v_{\text{rms}}(H_2)/v_{\text{rms}}(O_2) = \sqrt{m_O/m_H} = \sqrt{32/2} = 4$.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</details>

<details>
<summary>Problem 9</summary>
250 g of water at 90°C is poured into a 150 g copper calorimeter at 20°C. The final temperature is 75°C. Calculate the specific heat capacity of copper. ($c_{\text{water}} = 4200$ J kg$^{-1}$ K$^{-1}$.)

**Answer.** Energy lost by water = energy gained by copper calorimeter:

$m_w c_w (T_w - T_f) = m_c c_c (T_f - T_c)$

$0.250 \times 4200 \times 15 = 0.150 \times c_c \times 55$

$15{,}750 = 8.25\,c_c$. $c_c = 1909$ J kg$^{-1}$ K$^{-1}$.

<b>If you get this wrong, revise:</b> [Specific Heat Capacity](#2-specific-heat-capacity)

</details>

<details>
<summary>Problem 10</summary>
A sealed container holds gas at 300 K. The container is heated until the rms speed of the molecules doubles. What is the new temperature?

**Answer.** $v_{\text{rms}} \propto \sqrt{T}$. If $v_{\text{rms}}$ doubles: $2 = \sqrt{T_2/T_1}$.
$T_2/T_1 = 4$. $T_2 = 4 \times 300 = 1200$ K.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</details>

<details>
<summary>Problem 11</summary>

Calculate the ratio $v_p : \langle v \rangle : v_{\text{rms}}$ for an ideal gas, showing that
$v_p < \langle v \rangle < v_{\text{rms}}$.

**Answer.** All three speeds are of the form $c\sqrt{k_BT/m}$ with different constants:

$v_p = \sqrt{2} \approx 1.414$, $\langle v \rangle = \sqrt{8/\pi} \approx 1.596$,
$v_{\text{rms}} = \sqrt{3} \approx 1.732$.

The ratios are $v_p : \langle v \rangle : v_{\text{rms}} = 1 : 1.128 : 1.225$. The ordering holds
because the Maxwell-Boltzmann distribution has a long tail: the most probable speed sits at the
peak, but the asymmetric tail pulls the mean and rms progressively higher.

<b>If you get this wrong, revise:</b>
[Maxwell-Boltzmann Speed Distribution](#7-maxwell-boltzmann-speed-distribution)

</details>

<details>
<summary>Problem 12</summary>

A container holds helium at 400 K and nitrogen at 400 K. Calculate the ratio of their rms speeds.
($M_r(\text{He}) = 4$, $M_r(\text{N}_2) = 28$.)

**Answer.**
$\frac{v_{\text{rms}}(\text{He})}{v_{\text{rms}}(\text{N}_2)} = \sqrt{\frac{M_r(\text{N}_2)}{M_r(\text{He})}} = \sqrt{\frac{28}{4}} = \sqrt{7} \approx 2.65$.

At the same temperature, lighter helium molecules move 2.65 times faster than nitrogen molecules.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</details>

<details>
<summary>Problem 13</summary>

Explain, in terms of the kinetic theory, why the pressure of a fixed mass of gas in a rigid
container increases when the temperature is raised.

**Answer.** In a rigid container, volume is constant so the number density $n = N/V$ is fixed. When
temperature increases, the average kinetic energy $\frac{3}{2}k_BT$ increases, so molecules move
faster (on average). Faster molecules collide with the walls more frequently and with greater
momentum change per collision ($\Delta p = 2mv_x$ increases). Since pressure $p = F/A$ and force is
the rate of momentum transfer, both the collision rate and the impulse per collision increase, so
pressure increases. From the ideal gas law: at constant $V$, $p \propto T$.

<b>If you get this wrong, revise:</b>
[Derivation of $pV = Nk_BT$ from Kinetic Theory](#4-derivation-of-pv-nk_bt-from-kinetic-theory)

</details>

<details>
<summary>Problem 14</summary>

Calculate the mean free path of oxygen molecules (diameter $d = 3.6 \times 10^{-10}$ m) at STP
($p = 1.01 \times 10^5$ Pa, $T = 273$ K).

**Answer.** Number density:
$n = \frac{p}{k_BT} = \frac{1.01 \times 10^5}{1.381 \times 10^{-23} \times 273} = 2.68 \times 10^{25}$
m$^{-3}$.

$\lambda = \frac{1}{\sqrt{2}\,\pi d^2 n} = \frac{1}{1.414 \times 3.14 \times (3.6 \times 10^{-10})^2 \times 2.68 \times 10^{25}} = \frac{1}{1.23 \times 10^{7}} = 8.1 \times 10^{-8}$
m $= 81$ nm.

<b>If you get this wrong, revise:</b> [Mean Free Path](#8-mean-free-path)

</details>

<details>
<summary>Problem 15</summary>

For a diatomic ideal gas at 350 K, calculate: (a) the average translational kinetic energy per
molecule, (b) the total internal energy per molecule, (c) the total internal energy of 2.0 mol.

**Answer.** (a) Translational KE per molecule:
$\langle E_k\rangle = \frac{3}{2}k_BT = \frac{3}{2} \times 1.381 \times 10^{-23} \times 350 = 7.25 \times 10^{-21}$
J.

(b) Total internal energy per molecule (5 DOF):
$U_{\text{per molecule}} = \frac{5}{2}k_BT = \frac{5}{2} \times 1.381 \times 10^{-23} \times 350 = 1.21 \times 10^{-20}$
J.

(c) Total for 2.0 mol:
$U = n \times \frac{5}{2}RT = 2.0 \times \frac{5}{2} \times 8.31 \times 350 = 14{,}543$ J
$\approx 14.5$ kJ.

<b>If you get this wrong, revise:</b> [Equipartition Theorem](#6-equipartition-theorem)

</details>

<details>
<summary>Problem 16</summary>

A gas at 300 K is compressed adiabatically to half its original volume. If $\gamma = 1.4$, estimate
the final temperature.

**Answer.** For an adiabatic process: $TV^{\gamma-1} = \text{const}$.

$T_1 V_1^{\gamma - 1} = T_2 V_2^{\gamma - 1}$.

$T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma - 1} = 300 \times 2^{0.4} = 300 \times 1.320 = 396$
K.

The temperature rises because compression work is converted entirely to internal energy (no heat
escape in an adiabatic process).

<b>If you get this wrong, revise:</b> [Equipartition Theorem](#6-equipartition-theorem)

</details>

<details>
<summary>Problem 17</summary>

10 g of ice at $-10$°C is heated until it becomes steam at 110°C at 1 atm pressure. Calculate the
total energy required. Data: $c_{\text{ice}} = 2100$ J kg$^{-1}$ K$^{-1}$, $c_{\text{water}} = 4200$
J kg$^{-1}$ K$^{-1}$, $c_{\text{steam}} = 2010$ J kg$^{-1}$ K$^{-1}$, $L_f = 3.34 \times 10^5$ J
kg$^{-1}$, $L_v = 2.26 \times 10^6$ J kg$^{-1}$.

**Answer.** Break into 5 stages:

1. Ice $-10$°C to 0°C: $Q_1 = 0.010 \times 2100 \times 10 = 210$ J
2. Melting at 0°C: $Q_2 = 0.010 \times 3.34 \times 10^5 = 3340$ J
3. Water 0°C to 100°C: $Q_3 = 0.010 \times 4200 \times 100 = 4200$ J
4. Boiling at 100°C: $Q_4 = 0.010 \times 2.26 \times 10^6 = 22{,}600$ J
5. Steam 100°C to 110°C: $Q_5 = 0.010 \times 2010 \times 10 = 201$ J

$Q_{\text{total}} = 210 + 3340 + 4200 + 22{,}600 + 201 = 30{,}551$ J $\approx 30.6$ kJ.

Note that vaporisation ($Q_4$) dominates -- it requires about 7 times more energy than heating water
through the same temperature range ($Q_3$).

<b>If you get this wrong, revise:</b> [Specific Latent Heat](#specific-latent-heat)

</details>

<details>
<summary>Problem 18</summary>

Explain why the temperature of a gas does not change during an isothermal expansion, even though the
gas does work on its surroundings.

**Answer.** During isothermal expansion, the gas does work on the surroundings
($W_{\text{by}} > 0$). By the first law: $\Delta U = Q + W_{\text{on}} = Q - W_{\text{by}}$. For the
internal energy to remain constant ($\Delta U = 0$, since $U$ depends only on $T$ for an ideal gas),
we need $Q = W_{\text{by}}$. Heat must flow into the gas from the surroundings at exactly the rate
at which the gas does work. The expansion is carried out slowly enough (quasi-statically) that
thermal equilibrium is maintained throughout. If the expansion were adiabatic instead, the gas would
cool.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</details>

<details>
<summary>Problem 19</summary>

Estimate the collision frequency for an oxygen molecule at STP. Take $d = 3.6 \times 10^{-10}$ m,
$n = 2.68 \times 10^{25}$ m$^{-3}$, and $\langle v \rangle = 445$ m s$^{-1}$.

**Answer.**
$Z = \sqrt{2}\,\pi d^2 n \langle v\rangle = 1.414 \times 3.14 \times (3.6 \times 10^{-10})^2 \times 2.68 \times 10^{25} \times 445 \approx 6.9 \times 10^9$
s$^{-1}$.

Each molecule undergoes roughly 7 billion collisions per second. The mean free path is
$\lambda = \langle v \rangle / Z = 445 / (6.9 \times 10^9) \approx 6.4 \times 10^{-8}$ m $= 64$ nm.

<b>If you get this wrong, revise:</b> [Mean Free Path](#8-mean-free-path)

</details>

<details>
<summary>Problem 20</summary>

A mixture of helium and argon is at thermal equilibrium at 500 K. Show that the average
translational kinetic energy per molecule is the same for both gases, and calculate the ratio of
their rms speeds.

**Answer.** From the kinetic theory result $\langle E_k\rangle = \frac{3}{2}k_BT$, the average
translational kinetic energy depends only on temperature. Since both gases are at the same $T$:

$\langle E_k\rangle(\text{He}) = \langle E_k\rangle(\text{Ar}) = \frac{3}{2} \times 1.381 \times 10^{-23} \times 500 = 1.036 \times 10^{-20}$
J.

Rms speed ratio:
$\frac{v_{\text{rms}}(\text{He})}{v_{\text{rms}}(\text{Ar})} = \sqrt{\frac{M_r(\text{Ar})}{M_r(\text{He})}} = \sqrt{\frac{40}{4}} = \sqrt{10} \approx 3.16$.

Helium atoms move $\sqrt{10}$ times faster than argon atoms, despite having the same average kinetic
energy. This is because kinetic energy depends on $mv^2$, so lighter atoms must move faster to have
the same energy.

<b>If you get this wrong, revise:</b>
[Derivation of $pV = Nk_BT$ from Kinetic Theory](#4-derivation-of-pv-nk_bt-from-kinetic-theory)

</details>
