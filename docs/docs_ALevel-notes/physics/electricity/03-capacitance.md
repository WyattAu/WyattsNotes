---
title: Capacitance
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: capacitance
---

## Capacitance

:::info Board Coverage
AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::

## 1. Capacitance

**Definition.** The **capacitance** $C$ of a conductor is the charge stored per unit potential difference:

$$\boxed{C = \frac{Q}{V}}$$

SI unit: farad (F), where 1 F = 1 C V$^{-1}$.

In practice, capacitances range from picofarads (pF) to millifarads (mF).

**Intuition.** A capacitor is a device that stores charge. When a p.d. is applied across two parallel conducting plates, one plate gains $+Q$ and the other gains $-Q$. The larger the plates and the closer they are, the more charge can be stored for a given p.d. — hence the larger the capacitance.

## 2. Parallel Plate Capacitor

### Derivation of $C = \varepsilon_0 A/d$

Consider two parallel plates of area $A$ separated by distance $d$, with a vacuum between them. A charge $+Q$ is placed on one plate and $-Q$ on the other.

The electric field between the plates is uniform:

$$E = \frac{Q}{\varepsilon_0 A}$$

(This comes from Gauss's law: $\oint \mathbf{E} \cdot d\mathbf{A} = Q_{\text{enclosed}}/\varepsilon_0$, applied to a Gaussian surface enclosing one plate.)

The p.d. between the plates is:

$$V = Ed = \frac{Qd}{\varepsilon_0 A}$$

Therefore:

$$\boxed{C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d}}$$

With a dielectric material of relative permittivity $\varepsilon_r$ between the plates:

$$\boxed{C = \frac{\varepsilon_0 \varepsilon_r A}{d}}$$

**Intuition.** Larger plate area allows more charge to be stored. Smaller separation increases the electric field (and hence the p.d.) for a given charge, but since $C = Q/V$ and $V$ increases more slowly than $Q$ with decreasing $d$, the net effect is that $C$ increases. A dielectric material polarises in the field, partially cancelling it and allowing more charge to be stored.

## 3. Energy Stored in a Capacitor

### Derivation of $E = \frac{1}{2}CV^2$ from $dE = V\,dQ$

As charge builds up on the capacitor, the p.d. increases. The work done to transfer a small charge $dQ$ at p.d. $V$ is:

$$dE = V\,dQ$$

Since $V = Q/C$:

$$E = \int_0^Q V\,dQ = \int_0^Q \frac{Q}{C}\,dQ = \frac{1}{C}\left[\frac{Q^2}{2}\right]_0^Q = \frac{Q^2}{2C}$$

Using $Q = CV$:

$$E = \frac{Q^2}{2C} = \frac{(CV)^2}{2C} = \boxed{\frac{1}{2}CV^2}$$

Alternative forms using $Q = CV$ and $V = Q/C$:

$$E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$

**Graphical interpretation.** The energy stored equals the area under the $V$-$Q$ graph (a straight line through the origin). This area is a triangle of base $Q$ and height $V$: $E = \frac{1}{2}QV$.

### Energy Density

For a parallel plate capacitor, the energy per unit volume between the plates:

$$u = \frac{E}{\text{volume}} = \frac{\frac{1}{2}CV^2}{Ad} = \frac{\frac{1}{2}\frac{\varepsilon_0 A}{d} \cdot V^2}{Ad} = \frac{\varepsilon_0 V^2}{2d^2} = \frac{1}{2}\varepsilon_0 E_{\text{field}}^2$$

## 4. Capacitors in Series and Parallel

### Parallel Combination

$$C_{\text{total}} = C_1 + C_2 + \cdots + C_n$$

**Proof.** All capacitors have the same p.d. $V$. Total charge: $Q = Q_1 + Q_2 + \cdots = C_1 V + C_2 V + \cdots = (C_1 + C_2 + \cdots)V$. Since $Q = C_{\text{total}} V$: $C_{\text{total}} = C_1 + C_2 + \cdots$ $\square$

### Series Combination

$$\frac{1}{C_{\text{total}}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots + \frac{1}{C_n}$$

**Proof.** All capacitors store the same charge $Q$. Total p.d.: $V = V_1 + V_2 + \cdots = Q/C_1 + Q/C_2 + \cdots = Q(1/C_1 + 1/C_2 + \cdots)$. Since $V = Q/C_{\text{total}}$: $1/C_{\text{total}} = 1/C_1 + 1/C_2 + \cdots$ $\square$

:::warning Common Pitfall
Note the "mirror" relationship with resistors: capacitors in parallel add (like resistors in series), and capacitors in series add reciprocally (like resistors in parallel).
:::

## 5. RC Circuits: Charging

Consider a capacitor $C$ charged through a resistor $R$ from a supply of e.m.f. $\mathcal{E}$.

### Derivation of $Q = Q_0(1 - e^{-t/RC})$

By Kirchhoff's second law at any instant:

$$\mathcal{E} = V_R + V_C = IR + \frac{Q}{C}$$

Since $I = dQ/dt$:

$$\mathcal{E} = R\frac{dQ}{dt} + \frac{Q}{C}$$

Rearranging:

$$\frac{dQ}{dt} = \frac{\mathcal{E}}{R} - \frac{Q}{RC}$$

Let $Q_0 = C\mathcal{E}$ (the maximum charge when fully charged):

$$\frac{dQ}{dt} = \frac{Q_0 - Q}{RC}$$

Separating variables and integrating:

$$\int_0^Q \frac{dQ}{Q_0 - Q} = \int_0^t \frac{dt}{RC}$$

$$\left[-\ln(Q_0 - Q)\right]_0^Q = \frac{t}{RC}$$

$$-\ln(Q_0 - Q) + \ln Q_0 = \frac{t}{RC}$$

$$\ln\left(\frac{Q_0}{Q_0 - Q}\right) = \frac{t}{RC}$$

$$\frac{Q_0}{Q_0 - Q} = e^{t/RC}$$

$$\boxed{Q = Q_0\left(1 - e^{-t/RC}\right)}$$

The current is:

$$I = \frac{dQ}{dt} = \frac{Q_0}{RC}e^{-t/RC} = \frac{\mathcal{E}}{R}e^{-t/RC} = I_0 e^{-t/RC}$$

The p.d. across the capacitor is:

$$V_C = \frac{Q}{C} = \mathcal{E}\left(1 - e^{-t/RC}\right)$$

## 6. RC Circuits: Discharging

When a charged capacitor discharges through a resistor:

$$\mathcal{E} = 0 \implies 0 = IR + \frac{Q}{C}$$

$$R\frac{dQ}{dt} = -\frac{Q}{C}$$

$$\frac{dQ}{dt} = -\frac{Q}{RC}$$

Separating and integrating:

$$\int_{Q_0}^Q \frac{dQ}{Q} = -\int_0^t \frac{dt}{RC}$$

$$\ln Q - \ln Q_0 = -\frac{t}{RC}$$

$$\boxed{Q = Q_0 e^{-t/RC}}$$

$$I = \frac{dQ}{dt} = -\frac{Q_0}{RC}e^{-t/RC} = -I_0 e^{-t/RC}$$

$$V_C = \frac{Q}{C} = V_0 e^{-t/RC}$$

## 7. The Time Constant

**Definition.** The **time constant** $\tau = RC$ has units of seconds and characterises the rate of charging/discharging.

### Proof that 63.2% of charge is stored in one time constant

At $t = \tau = RC$:

$$\frac{Q}{Q_0} = 1 - e^{-1} = 1 - \frac{1}{e} = 1 - 0.368 = 0.632$$

So **63.2%** of the maximum charge is stored.

For discharging: $\frac{Q}{Q_0} = e^{-1} = 0.368$, so **36.8%** remains (63.2% is lost).

**Other useful values:**

| Time    | Charged | Discharged remaining |
| ------- | ------- | -------------------- |
| $1\tau$ | 63.2%   | 36.8%                |
| $2\tau$ | 86.5%   | 13.5%                |
| $3\tau$ | 95.0%   | 5.0%                 |
| $5\tau$ | 99.3%   | 0.7%                 |

**Intuition.** The time constant is the "characteristic time" of the circuit. A large resistance limits the charging current, and a large capacitance requires more charge — both increase the time needed. After $5\tau$, the capacitor is effectively fully charged or discharged.

:::tip Exam Technique
When asked to find the time constant from a graph: for charging, find the time at which the curve reaches 63.2% of its final value. For discharging, find the time at which the curve drops to 36.8% of its initial value. Alternatively, find the time at which the tangent at $t = 0$ intersects the final value line.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A 100 $\mu$F capacitor is charged to 12 V. Calculate the stored energy.

**Answer.** $E = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 144 = 7.2 \times 10^{-3}$ J $= 7.2$ mJ.

<b>If you get this wrong, revise:</b> [Energy Stored in a Capacitor](#3-energy-stored-in-a-capacitor)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A parallel plate capacitor has plates of area $0.020$ m$^2$ separated by $0.50$ mm in vacuum. Calculate its capacitance.

**Answer.** $C = \frac{\varepsilon_0 A}{d} = \frac{8.85 \times 10^{-12} \times 0.020}{0.50 \times 10^{-3}} = \frac{1.77 \times 10^{-13}}{5.0 \times 10^{-4}} = 3.54 \times 10^{-10}$ F $= 354$ pF.

<b>If you get this wrong, revise:</b> [Parallel Plate Capacitor](#2-parallel-plate-capacitor)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A $470\,\mu$F capacitor is charged through a $100\,\text{k}\Omega$ resistor from a 6.0 V supply. Calculate: (a) the time constant, (b) the charge after 20 s, (c) the current after 20 s.

**Answer.** (a) $\tau = RC = 100 \times 10^3 \times 470 \times 10^{-6} = 47.0$ s.

(b) $Q_0 = CV = 470 \times 10^{-6} \times 6.0 = 2.82 \times 10^{-3}$ C. $Q = Q_0(1 - e^{-t/\tau}) = 2.82 \times 10^{-3}(1 - e^{-20/47}) = 2.82 \times 10^{-3}(1 - 0.654) = 2.82 \times 10^{-3} \times 0.346 = 9.76 \times 10^{-4}$ C.

(c) $I = I_0 e^{-t/\tau} = \frac{6.0}{100 \times 10^3} e^{-20/47} = 6.0 \times 10^{-5} \times 0.654 = 3.92 \times 10^{-5}$ A $= 39.2\,\mu$A.

<b>If you get this wrong, revise:</b> [RC Circuits: Charging](#5-rc-circuits-charging)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A $220\,\mu$F capacitor charged to 10 V discharges through a $50\,\text{k}\Omega$ resistor. Calculate: (a) the time constant, (b) the p.d. across the capacitor after 15 s, (c) the time for the p.d. to fall to 3.0 V.

**Answer.** (a) $\tau = 50 \times 10^3 \times 220 \times 10^{-6} = 11.0$ s.

(b) $V = V_0 e^{-t/\tau} = 10 \times e^{-15/11} = 10 \times e^{-1.364} = 10 \times 0.256 = 2.56$ V.

(c) $3.0 = 10 e^{-t/11}$. $e^{-t/11} = 0.3$. $-t/11 = \ln 0.3 = -1.204$. $t = 11 \times 1.204 = 13.2$ s.

<b>If you get this wrong, revise:</b> [RC Circuits: Discharging](#6-rc-circuits-discharging)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

Two capacitors, $C_1 = 10\,\mu$F and $C_2 = 20\,\mu$F, are connected (a) in parallel and (b) in series. Calculate the equivalent capacitance in each case.

**Answer.** (a) $C_{\text{parallel}} = 10 + 20 = 30\,\mu$F.

(b) $\frac{1}{C_{\text{series}}} = \frac{1}{10} + \frac{1}{20} = \frac{3}{20}$. $C_{\text{series}} = 6.67\,\mu$F.

<b>If you get this wrong, revise:</b> [Capacitors in Series and Parallel](#4-capacitors-in-series-and-parallel)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

A capacitor is charged to 50 V and then discharged through a $200\,\text{k}\Omega$ resistor. After 30 s, the p.d. is 18 V. Calculate the capacitance.

**Answer.** $V = V_0 e^{-t/RC}$. $18 = 50 e^{-30/(200000 \times C)}$. $0.36 = e^{-30/(200000C)}$. $\ln 0.36 = -30/(200000C)$. $-1.022 = -30/(200000C)$. $C = 30/(200000 \times 1.022) = 1.47 \times 10^{-4}$ F $= 147\,\mu$F.

<b>If you get this wrong, revise:</b> [RC Circuits: Discharging](#6-rc-circuits-discharging)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Prove that the energy stored in a capacitor is $E = \frac{1}{2}QV$ by considering the area under the $V$-$Q$ graph.

**Answer.** The $V$-$Q$ graph for a capacitor is a straight line through the origin: $V = Q/C$. The energy stored equals the work done in charging, which is the area under this graph from $Q = 0$ to $Q = Q_0$. This area is a triangle with base $Q_0$ and height $V_0 = Q_0/C$:

$E = \frac{1}{2} \times Q_0 \times V_0 = \frac{1}{2}QV$.

<b>If you get this wrong, revise:</b> [Energy Stored in a Capacitor](#3-energy-stored-in-a-capacitor)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A parallel plate capacitor with plate area $0.010$ m$^2$ and separation $0.20$ mm is filled with a dielectric of $\varepsilon_r = 5.0$. Calculate the capacitance and the energy stored when charged to 200 V.

**Answer.** $C = \frac{\varepsilon_0 \varepsilon_r A}{d} = \frac{8.85 \times 10^{-12} \times 5.0 \times 0.010}{0.20 \times 10^{-3}} = \frac{4.425 \times 10^{-13}}{2.0 \times 10^{-4}} = 2.21 \times 10^{-9}$ F $= 2.21$ nF.

$E = \frac{1}{2}CV^2 = \frac{1}{2} \times 2.21 \times 10^{-9} \times 40000 = 4.42 \times 10^{-5}$ J $= 44.2\,\mu$J.

<b>If you get this wrong, revise:</b> [Parallel Plate Capacitor](#2-parallel-plate-capacitor)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

An uncharged $100\,\mu$F capacitor in series with a $500\,\text{k}\Omega$ resistor is connected to a 20 V supply. How long does it take for the capacitor to charge to 15 V?

**Answer.** $15 = 20(1 - e^{-t/\tau})$. $0.75 = 1 - e^{-t/\tau}$. $e^{-t/\tau} = 0.25$. $-t/\tau = \ln 0.25 = -1.386$. $\tau = RC = 500 \times 10^3 \times 100 \times 10^{-6} = 50$ s. $t = 1.386 \times 50 = 69.3$ s.

<b>If you get this wrong, revise:</b> [RC Circuits: Charging](#5-rc-circuits-charging)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A $47\,\mu$F capacitor charged to 24 V discharges through a $33\,\text{k}\Omega$ resistor. Calculate: (a) the initial energy stored, (b) the time constant, (c) the energy remaining after one time constant.

**Answer.** (a) $E_0 = \frac{1}{2}CV^2 = \frac{1}{2} \times 47 \times 10^{-6} \times 576 = 1.354 \times 10^{-2}$ J $= 13.5$ mJ.

(b) $\tau = 33 \times 10^3 \times 47 \times 10^{-6} = 1.551$ s.

(c) After $t = \tau$: $V = 24e^{-1} = 8.83$ V. $E = \frac{1}{2} \times 47 \times 10^{-6} \times 77.9 = 1.83 \times 10^{-3}$ J $= 1.83$ mJ.

Alternatively: $E = \frac{1}{2}CV^2 = \frac{1}{2}C(V_0 e^{-1})^2 = E_0 e^{-2} = 13.5 \times 0.135 = 1.83$ mJ.

<b>If you get this wrong, revise:</b> [The Time Constant](#7-the-time-constant)

</p>
</details>
