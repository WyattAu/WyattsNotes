---
title: Current and Resistance
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: current-and-resistance
---

## Current and Resistance

:::info Board Coverage
AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::

## 1. Electric Current

**Definition.** Electric current is the rate of flow of charge:

$$\boxed{I = \frac{dQ}{dt}}$$

For constant current: $I = \frac{Q}{t}$. The SI unit is the ampere (A), where 1 A = 1 C s$^{-1}$.

**Conventional current** flows from positive to negative (historical convention). In metals, the actual charge carriers are **electrons**, which flow from negative to positive.

### Current as Charge per Unit Time

If $N$ charge carriers, each with charge $q$, pass a point in time $t$:

$$I = \frac{Nq}{t}$$

### Derivation of $I = nAev_d$

Consider a conductor of cross-sectional area $A$ with $n$ free charge carriers per unit volume, each carrying charge $q$ and moving with drift velocity $v_d$.

In time $\Delta t$, each carrier moves a distance $v_d \Delta t$. The volume swept is $Av_d \Delta t$, containing $nAv_d \Delta t$ carriers. The total charge passing is:

$$\Delta Q = nAv_d \Delta t \cdot q$$

$$\boxed{I = \frac{\Delta Q}{\Delta t} = nAqv_d}$$

For metals, $q = e = 1.60 \times 10^{-19}$ C:

$$I = nAev_d$$

**Intuition.** The drift velocity is surprisingly small — typically $\sim 10^{-4}$ m s$^{-1}$ for copper. This is because electrons undergo frequent collisions with the lattice ions, scattering randomly. The net motion is a slow drift superimposed on rapid random thermal motion ($\sim 10^6$ m s$^{-1}$).

<details>
<summary>Example: Drift Velocity in Copper</summary>
<p>

A copper wire of cross-sectional area $1.0 \times 10^{-6}$ m$^2$ carries a current of 2.0 A. The number density of free electrons in copper is $8.5 \times 10^{28}$ m$^{-3}$. Calculate the drift velocity.

**Answer.** $v_d = \frac{I}{nAe} = \frac{2.0}{8.5 \times 10^{28} \times 1.0 \times 10^{-6} \times 1.60 \times 10^{-19}} = \frac{2.0}{1.36 \times 10^4} = 1.47 \times 10^{-4}$ m s$^{-1}$.

</p>
</details>

## 2. Potential Difference and Electromotive Force

**Potential difference** (p.d.) $V$ between two points is the energy transferred per unit charge:

$$V = \frac{W}{Q}$$

**Electromotive force** (e.m.f.) $\mathcal{E}$ is the energy transferred per unit charge when charge passes through a source (e.g., a cell):

$$\mathcal{E} = \frac{W}{Q}$$

The distinction: p.d. refers to energy dissipated in a component; e.m.f. refers to energy gained from a source.

## 3. Ohm's Law

**Ohm's Law.** The current through a metallic conductor is directly proportional to the potential difference across it, provided the temperature remains constant:

$$V = IR$$

where $R$ is the **resistance**.

An **ohmic conductor** obeys Ohm's law — its $I$-$V$ graph is a straight line through the origin.

**Microscopic origin.** In a metal, conduction electrons accelerate in the electric field but collide with lattice ions, losing energy. The average time between collisions is the **relaxation time** $\tau$. The drift velocity is $v_d = \frac{eE\tau}{m_e}$, so $I \propto E \propto V$, giving $V = IR$.

## 4. Resistivity

The resistance of a uniform conductor depends on its geometry and material:

$$\boxed{R = \frac{\rho L}{A}}$$

where $\rho$ is the **resistivity** (a property of the material, not the geometry), $L$ is the length, and $A$ is the cross-sectional area.

**Derivation.** Consider a conductor of length $L$, cross-sectional area $A$, with electric field $E = V/L$.

$$I = nAev_d = nAe \cdot \frac{eE\tau}{m_e} = \frac{ne^2\tau}{m_e} \cdot AE = \frac{ne^2\tau}{m_e} \cdot A \cdot \frac{V}{L}$$

$$R = \frac{V}{I} = \frac{mL}{ne^2\tau A}$$

Comparing with $R = \rho L/A$:

$$\boxed{\rho = \frac{m}{ne^2\tau}}$$

This shows that resistivity depends on the material's charge carrier density $n$ and relaxation time $\tau$, but not on its geometry.

**Intuition.** Longer conductors have more resistance (more collisions). Thicker conductors have less resistance (more parallel paths). A higher resistivity means the material is intrinsically more resistant to current flow.

| Material   | Resistivity ($\Omega$ m) |
| ---------- | ------------------------ |
| Copper     | $1.7 \times 10^{-8}$     |
| Aluminium  | $2.7 \times 10^{-8}$     |
| Constantan | $4.9 \times 10^{-7}$     |
| Nichrome   | $1.1 \times 10^{-6}$     |
| Silicon    | $6.4 \times 10^{2}$      |
| Glass      | $\sim 10^{12}$           |

:::warning Common Pitfall
Resistivity is a property of the material. Resistance is a property of a particular component. A long thin copper wire has high resistance but copper still has low resistivity.
:::

## 5. I-V Characteristics

### Metallic Conductor (Ohmic)

Straight line through origin. Resistance is constant. Temperature rises with current, slightly increasing resistance (positive temperature coefficient).

### Filament Lamp

Current increases rapidly at low p.d., then curves over. At higher currents, the filament heats up, increasing the lattice ion vibrations and hence the resistance. The $I$-$V$ graph is a curve that flattens at high $V$.

### Semiconductor Diode

- **Forward bias**: very little current until the threshold voltage ($\sim 0.6$ V for silicon) is reached, then current rises sharply.
- **Reverse bias**: almost zero current until breakdown voltage.

### Thermistor (NTC)

Negative temperature coefficient. As temperature increases, resistance decreases (more charge carriers are released from the lattice).

## 6. Electrical Energy and Power

**Energy transferred** when charge $Q$ moves through p.d. $V$:

$$W = QV = VIt$$

**Power** (rate of energy transfer):

$$P = IV$$

Using $V = IR$:

$$P = I^2R = \frac{V^2}{R}$$

**Derivation of $P = I^2R$.** Substituting $V = IR$ into $P = IV$:

$$P = I \cdot IR = I^2R$$

**Derivation of $P = V^2/R$.** Substituting $I = V/R$ into $P = IV$:

$$P = \frac{V}{R} \cdot V = \frac{V^2}{R}$$

**Choosing the right formula:**

| Known quantities | Formula to use |
| ---------------- | -------------- |
| $I$ and $V$      | $P = IV$       |
| $I$ and $R$      | $P = I^2R$     |
| $V$ and $R$      | $P = V^2/R$    |

**Energy:**

$$E = Pt = VIt = I^2Rt = \frac{V^2t}{R}$$

The SI unit of energy is the joule (J). For domestic billing, the kilowatt-hour (kWh) is used:

$$1 \text{ kWh} = 1000 \text{ W} \times 3600 \text{ s} = 3.6 \times 10^6 \text{ J}$$

:::tip Exam Technique
When calculating energy for resistors in series, use $P = I^2R$ (same current). For resistors in parallel, use $P = V^2/R$ (same voltage).
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A copper wire has length 2.0 m, cross-sectional area $1.5 \times 10^{-6}$ m$^2$, and resistivity $1.7 \times 10^{-8}$ $\Omega$ m. Calculate its resistance.

**Answer.** $R = \frac{\rho L}{A} = \frac{1.7 \times 10^{-8} \times 2.0}{1.5 \times 10^{-6}} = \frac{3.4 \times 10^{-8}}{1.5 \times 10^{-6}} = 0.0227$ $\Omega = 0.023$ $\Omega$.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A wire carries a current of 3.0 A. How much charge flows past a point in 2 minutes?

**Answer.** $Q = It = 3.0 \times 120 = 360$ C.

<b>If you get this wrong, revise:</b> [Electric Current](#1-electric-current)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Calculate the drift velocity of electrons in a silver wire of diameter 1.0 mm carrying a current of 5.0 A. The number density of free electrons in silver is $5.9 \times 10^{28}$ m$^{-3}$.

**Answer.** $A = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$.

$v_d = \frac{I}{nAe} = \frac{5.0}{5.9 \times 10^{28} \times 7.85 \times 10^{-7} \times 1.60 \times 10^{-19}} = \frac{5.0}{7.42 \times 10^3} = 6.74 \times 10^{-4}$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Derivation of $I = nAev_d$](#derivation-of-i-naev_d)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A 12 V battery delivers a current of 2.5 A to a resistor. Calculate: (a) the resistance, (b) the power dissipated, (c) the energy transferred in 10 minutes.

**Answer.** (a) $R = V/I = 12/2.5 = 4.8$ $\Omega$.

(b) $P = IV = 2.5 \times 12 = 30$ W.

(c) $E = Pt = 30 \times 600 = 18{,}000$ J = 18 kJ.

<b>If you get this wrong, revise:</b> [Electrical Energy and Power](#6-electrical-energy-and-power)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A nichrome wire has resistance 8.0 $\Omega$ at $20°$C. The wire is stretched to twice its original length. What is its new resistance? (Assume the volume remains constant.)

**Answer.** If $L \to 2L$ and volume $AL = \text{const}$, then $A \to A/2$.

$R' = \frac{\rho(2L)}{A/2} = \frac{4\rho L}{A} = 4R = 32$ $\Omega$.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

A 2.5 kW heater operates on a 230 V mains supply. Calculate the current it draws and its resistance.

**Answer.** $P = IV$, so $I = P/V = 2500/230 = 10.9$ A.

$R = V/I = 230/10.9 = 21.2$ $\Omega$.

<b>If you get this wrong, revise:</b> [Electrical Energy and Power](#6-electrical-energy-and-power)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Explain why the resistance of a filament lamp increases as the current through it increases.

**Answer.** As the current increases, more energy is dissipated per second ($P = I^2R$), heating the filament. The increased temperature causes the metal lattice ions to vibrate more vigorously, increasing the frequency of collisions between the conduction electrons and the lattice. This reduces the mean relaxation time $\tau$, and since $\rho = m/(ne^2\tau)$, the resistivity increases. Since $R = \rho L/A$, the resistance increases.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity) and [I-V Characteristics](#5-i-v-characteristics)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A student measures the resistance of a wire at different lengths. The results are: 10 cm → 0.50 $\Omega$, 20 cm → 1.05 $\Omega$, 30 cm → 1.45 $\Omega$, 40 cm → 2.00 $\Omega$. Plotting $R$ against $L$ gives a gradient of 5.0 $\Omega$ m$^{-1}$. If the wire diameter is 0.40 mm, calculate the resistivity.

**Answer.** $A = \pi(0.20 \times 10^{-3})^2 = 1.26 \times 10^{-7}$ m$^2$. From $R = \rho L/A$: gradient $= \rho/A = 5.0$. $\rho = 5.0 \times 1.26 \times 10^{-7} = 6.3 \times 10^{-7}$ $\Omega$ m.

<b>If you get this wrong, revise:</b> [Resistivity](#4-resistivity)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

Two resistors of 6 $\Omega$ and 3 $\Omega$ are connected in series across a 9 V battery. Calculate the current and the power dissipated in each resistor.

**Answer.** Total resistance $R_{\text{total}} = 6 + 3 = 9$ $\Omega$. Current $I = V/R = 9/9 = 1.0$ A.

Power in 6 $\Omega$: $P = I^2R = 1^2 \times 6 = 6$ W.

Power in 3 $\Omega$: $P = 1^2 \times 3 = 3$ W.

<b>If you get this wrong, revise:</b> [Electrical Energy and Power](#6-electrical-energy-and-power)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A thermistor has resistance 2000 $\Omega$ at $20°$C and 400 $\Omega$ at $80°$C. It is connected in series with a 500 $\Omega$ fixed resistor and a 6.0 V battery. Calculate the p.d. across the thermistor at each temperature.

**Answer.** At $20°$C: $R_{\text{total}} = 2000 + 500 = 2500$ $\Omega$. $V_T = \frac{2000}{2500} \times 6.0 = 4.80$ V.

At $80°$C: $R_{\text{total}} = 400 + 500 = 900$ $\Omega$. $V_T = \frac{400}{900} \times 6.0 = 2.67$ V.

<b>If you get this wrong, revise:</b> [I-V Characteristics](#5-i-v-characteristics)

</p>
</details>
