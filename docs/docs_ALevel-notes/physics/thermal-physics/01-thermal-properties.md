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

:::info Board Coverage
AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P2
:::

## 1. Temperature Scales

### The Kelvin Scale

The **kelvin** is the SI base unit of temperature. It is defined by fixing the Boltzmann constant $k_B = 1.381 \times 10^{-23}$ J K$^{-1}$.

**Absolute zero** is 0 K, the lowest possible temperature at which particles have minimum thermal energy.

**Conversion:** $T(\text{K}) = T(°\text{C}) + 273.15$

### Triple Point of Water

The triple point of water (where solid, liquid, and gas coexist in equilibrium) occurs at exactly 273.16 K (0.01°C). This was historically used to define the kelvin.

## 2. Specific Heat Capacity

**Definition.** The **specific heat capacity** $c$ of a substance is the energy required to raise the temperature of 1 kg of the substance by 1 K:

$$\boxed{Q = mc\Delta T}$$

SI unit: J kg$^{-1}$ K$^{-1}$.

### Specific Latent Heat

**Definition.** The **specific latent heat** $L$ is the energy per unit mass required to change the state of a substance at constant temperature:

$$\boxed{Q = mL}$$

- **Specific latent heat of fusion** $L_f$: solid to liquid
- **Specific latent heat of vaporisation** $L_v$: liquid to gas

**Intuition.** During a phase change, energy goes into breaking intermolecular bonds rather than increasing kinetic energy, so the temperature remains constant despite energy input. Vaporisation requires much more energy than fusion because gas molecules are completely separated.

:::warning Common Pitfall
Do not confuse specific heat capacity (which raises temperature) with latent heat (which changes state at constant temperature). In a heating curve, the flat sections are phase changes (latent heat), and the sloped sections are temperature changes (specific heat capacity).
:::

## 3. Ideal Gas Laws

### Boyle's Law

At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume:

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

A single particle moving with velocity component $v_x$ in the $x$-direction bounces off a wall. The change in momentum per collision is:

$$\Delta p = mv_x - (-mv_x) = 2mv_x$$

The time between successive collisions with the same wall is:

$$\Delta t = \frac{2L}{v_x}$$

The average force on the wall from this particle:

$$F = \frac{\Delta p}{\Delta t} = \frac{2mv_x}{2L/v_x} = \frac{mv_x^2}{L}$$

For $N$ particles, the total force on one wall:

$$F_{\text{total}} = \sum_{i=1}^{N} \frac{mv_{x,i}^2}{L} = \frac{m}{L}\sum_{i=1}^{N}v_{x,i}^2$$

The pressure on the wall:

$$p = \frac{F_{\text{total}}}{L^2} = \frac{m}{L^3}\sum_{i=1}^{N}v_{x,i}^2 = \frac{mN}{V}\langle v_x^2\rangle$$

where $\langle v_x^2\rangle = \frac{1}{N}\sum v_{x,i}^2$ is the mean square velocity in the $x$-direction.

By symmetry: $\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle = \frac{1}{3}\langle v^2\rangle$ (since $v^2 = v_x^2 + v_y^2 + v_z^2$ and the motion is isotropic).

$$p = \frac{mN}{V} \cdot \frac{1}{3}\langle v^2\rangle = \frac{1}{3}\frac{Nm\langle v^2\rangle}{V}$$

$$\boxed{pV = \frac{1}{3}Nm\langle v^2\rangle}$$

Since the average translational kinetic energy is $\langle E_k \rangle = \frac{1}{2}m\langle v^2\rangle$:

$$pV = \frac{2}{3}N\langle E_k\rangle$$

Comparing with $pV = Nk_BT$:

$$\frac{2}{3}N\langle E_k\rangle = Nk_BT$$

$$\boxed{\langle E_k\rangle = \frac{3}{2}k_BT}$$

This is a profound result: the average kinetic energy of a gas molecule depends **only on temperature**, not on the type of gas molecule.

## 5. Root Mean Square Speed

The **root mean square speed** is defined as:

$$\boxed{v_{\text{rms}} = \sqrt{\langle v^2\rangle}}$$

From $\langle E_k\rangle = \frac{1}{2}m\langle v^2\rangle = \frac{3}{2}k_BT$:

$$\frac{1}{2}mv_{\text{rms}}^2 = \frac{3}{2}k_BT$$

$$\boxed{v_{\text{rms}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M_r}}$$

where $M_r$ is the molar mass.

**Intuition.** Lighter molecules move faster at the same temperature. Hydrogen ($M_r = 2$) has an rms speed $\sim 4$ times that of oxygen ($M_r = 32$) at the same temperature (ratio $\propto 1/\sqrt{M_r}$).

<details>
<summary>Example: RMS Speed of Oxygen</summary>
<p>

Calculate the rms speed of oxygen molecules ($M_r = 0.032$ kg mol$^{-1}$) at 300 K.

**Answer.** $v_{\text{rms}} = \sqrt{\frac{3RT}{M_r}} = \sqrt{\frac{3 \times 8.31 \times 300}{0.032}} = \sqrt{233719} = 483$ m s$^{-1}$.

</p>
</details>

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Calculate the energy required to heat 2.0 kg of water from 20°C to 80°C. The specific heat capacity of water is 4200 J kg$^{-1}$ K$^{-1}$.

**Answer.** $Q = mc\Delta T = 2.0 \times 4200 \times 60 = 504{,}000$ J $= 504$ kJ.

<b>If you get this wrong, revise:</b> [Specific Heat Capacity](#2-specific-heat-capacity)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A 0.50 kg block of ice at 0°C is heated until it completely melts. The specific latent heat of fusion of water is $3.34 \times 10^5$ J kg$^{-1}$. Calculate the energy required.

**Answer.** $Q = mL_f = 0.50 \times 3.34 \times 10^5 = 1.67 \times 10^5$ J $= 167$ kJ.

<b>If you get this wrong, revise:</b> [Specific Latent Heat](#specific-latent-heat)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A gas occupies 0.020 m$^3$ at a pressure of $1.5 \times 10^5$ Pa and temperature 300 K. Calculate the number of moles.

**Answer.** $n = \frac{pV}{RT} = \frac{1.5 \times 10^5 \times 0.020}{8.31 \times 300} = \frac{3000}{2493} = 1.20$ mol.

<b>If you get this wrong, revise:</b> [The Ideal Gas Equation](#the-ideal-gas-equation)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Calculate the rms speed of nitrogen molecules ($M_r = 0.028$ kg mol$^{-1}$) at 250 K.

**Answer.** $v_{\text{rms}} = \sqrt{\frac{3 \times 8.31 \times 250}{0.028}} = \sqrt{\frac{6232.5}{0.028}} = \sqrt{222{,}589} = 472$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A gas cylinder of volume 0.050 m$^3$ contains oxygen at 200 kPa and 280 K. If the temperature rises to 350 K and the volume increases to 0.060 m$^3$, what is the new pressure?

**Answer.** Using $p_1V_1/T_1 = p_2V_2/T_2$: $p_2 = \frac{p_1V_1T_2}{V_2T_1} = \frac{200{,}000 \times 0.050 \times 350}{0.060 \times 280} = \frac{3{,}500{,}000}{16.8} = 208{,}333$ Pa $\approx 208$ kPa.

<b>If you get this wrong, revise:</b> [Ideal Gas Laws](#3-ideal-gas-laws)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Derive the expression for the average kinetic energy of a gas molecule: $\langle E_k\rangle = \frac{3}{2}k_BT$.

**Answer.** Starting from $pV = \frac{1}{3}Nm\langle v^2\rangle$ (kinetic theory derivation), and using $pV = Nk_BT$ (ideal gas law):

$\frac{1}{3}Nm\langle v^2\rangle = Nk_BT$.

$\frac{1}{2}m\langle v^2\rangle = \frac{3}{2}k_BT$.

Since $\langle E_k\rangle = \frac{1}{2}m\langle v^2\rangle$: $\langle E_k\rangle = \frac{3}{2}k_BT$.

<b>If you get this wrong, revise:</b> [Derivation of $pV = Nk_BT$ from Kinetic Theory](#4-derivation-of-pv-nk_bt-from-kinetic-theory)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A 200 W heater is used to heat 0.80 kg of oil. The oil temperature rises from 20°C to 80°C in 8.0 minutes. Calculate the specific heat capacity of the oil.

**Answer.** $Q = Pt = 200 \times 480 = 96{,}000$ J. $c = Q/(m\Delta T) = 96{,}000/(0.80 \times 60) = 2000$ J kg$^{-1}$ K$^{-1}$.

<b>If you get this wrong, revise:</b> [Specific Heat Capacity](#2-specific-heat-capacity)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

Explain why the rms speed of hydrogen molecules is greater than that of oxygen molecules at the same temperature.

**Answer.** $v_{\text{rms}} = \sqrt{3k_BT/m}$. At the same temperature, $k_BT$ is the same. Since hydrogen has a smaller molecular mass ($m_H \ll m_O$), the rms speed is greater. Specifically, $v_{\text{rms}}(H_2)/v_{\text{rms}}(O_2) = \sqrt{m_O/m_H} = \sqrt{32/2} = 4$.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

250 g of water at 90°C is poured into a 150 g copper calorimeter at 20°C. The final temperature is 75°C. Calculate the specific heat capacity of copper. ($c_{\text{water}} = 4200$ J kg$^{-1}$ K$^{-1}$.)

**Answer.** Energy lost by water = energy gained by copper calorimeter:

$m_w c_w (T_w - T_f) = m_c c_c (T_f - T_c)$

$0.250 \times 4200 \times 15 = 0.150 \times c_c \times 55$

$15{,}750 = 8.25\,c_c$. $c_c = 1909$ J kg$^{-1}$ K$^{-1}$.

<b>If you get this wrong, revise:</b> [Specific Heat Capacity](#2-specific-heat-capacity)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A sealed container holds gas at 300 K. The container is heated until the rms speed of the molecules doubles. What is the new temperature?

**Answer.** $v_{\text{rms}} \propto \sqrt{T}$. If $v_{\text{rms}}$ doubles: $2 = \sqrt{T_2/T_1}$. $T_2/T_1 = 4$. $T_2 = 4 \times 300 = 1200$ K.

<b>If you get this wrong, revise:</b> [Root Mean Square Speed](#5-root-mean-square-speed)

</p>
</details>
