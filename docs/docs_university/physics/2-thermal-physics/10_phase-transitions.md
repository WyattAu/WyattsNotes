---
title: Phase Transitions
tags:
  - Physics
  - University
---

A **phase transition** is a discontinuity in a thermodynamic quantity or its derivative as a
function of a state variable. Phase transitions are classified by Ehrenfest according to which
derivative of the Gibbs free energy is discontinuous.

### 10.1 Classification of Phase Transitions

| Order              | Definition                                                                       | Example                        |
| ------------------ | -------------------------------------------------------------------------------- | ------------------------------ |
| First order        | $G$ continuous; $\partial G/\partial T$ or $\partial G/\partial P$ discontinuous | Boiling of water               |
| Second order       | First derivatives continuous; second derivatives discontinuous                   | Superconducting transition     |
| Lambda ($\lambda$) | Divergent second derivatives                                                     | Helium-4 superfluid transition |

For a first-order transition at temperature $T_c$The **latent heat** is:

$$L = T_c \Delta S = T_c \left(S_{\text{phase} 2} - S_{\text{phase} 1}\right)$$

The **Clausius--Clapeyron equation** governs the slope of the coexistence curve:

$$\frac{dP}{dT} = \frac{L}{T_c \Delta v}$$

Where $\Delta v = v_2 - v_1$ is the change in specific volume.

### 10.2 Van der Waals Equation and Critical Phenomena

The van der Waals equation of state modifies the ideal gas law to account for intermolecular forces:

$$\left(P + \frac{a}{v^2}\right)(v - b) = k_B T$$

Where $a$ accounts for attractive interactions and $b$ for the finite molecular volume. The critical
point $(T_c, P_c, v_c)$ satisfies:

$$\frac{\partial P}{\partial v}\bigg|_{T_c} = 0, \qquad \frac{\partial^2 P}{\partial v^2}\bigg|_{T_c} = 0$$

Solving gives:

$$T_c = \frac{8a}{27bk_B}, \qquad P_c = \frac{a}{27b^2}, \qquad v_c = 3b$$

Near the critical point, define the **reduced variables** $\tilde{T} = T/T_c$, $\tilde{P} = P/P_c$,
$\tilde{v} = v/v_c$ to obtain the universal form:

$$\left(\tilde{P} + \frac{3}{\tilde{v}^2}\right)(3\tilde{v} - 1) = 8\tilde{T}$$

The **order parameter** $\phi = (v_{\text{gas} - v_{\text{liquid})/(v_c)}}$ vanishes as:

$$\phi \propto (T_c - T)^{\beta}$$

Where $\beta = 1/2$ is the **mean-field critical exponent** (van der Waals prediction).

### 10.3 Critical Exponents

Near a second-order phase transition, thermodynamic quantities follow power laws characterized by
**critical exponents**:

| Exponent | Definition                           | Mean-field | 2D Ising | 3D Ising (numerical) |
| -------- | ------------------------------------ | ---------- | -------- | -------------------- |
| $\alpha$ | $C \propto \|t\|^{-\alpha}$          | 0 (jump)   | 0 (log)  |
| $\beta$  | $\phi \propto (-t)^\beta$            | $1/2$      | $1/8$    | $\approx 0.326$      |
| $\gamma$ | $\chi \propto \|t\|^{-\gamma}$       | $1$        | $7/4$    |
| $\delta$ | $\phi \propto h^{1/\delta}$ at $t=0$ | $3$        | $15$     | $\approx 4.789$      |

Where $t = (T - T_c)/T_c$ is the reduced temperature and $h$ is the conjugate field.

<details>
<summary>Worked Example 10.1: Clausius--Clapeyron for Water</summary>

For the water--steam transition at 1 atm, $T_c = 373.15$ K, $L = 2260$ kJ/kg,
$v_{\text{steam} = 1.673}$ m$^3$/kg, $v_{\text{water} = 1.043 \times 10^{-3}}$ m$^3$/kg.

$$\frac{dP}{dT} = \frac{L}{T \Delta v} = \frac{2.26 \times 10^6}{373.15 \times 1.673} = \frac{2.26 \times 10^6}{624.3} \approx 3620 \text{ Pa/K} \approx 0.0357 \text{ atm/K}$$

This means increasing the boiling temperature by 1 K requires increasing the pressure by about 0.036
atm.

</details>

<details>
<summary>Worked Example 10.2: Critical Parameters of CO$_2$</summary>

For CO$_2$, $a = 0.364$ Pa$\cdot$M$^6$/mol$^2$, $b = 4.27 \times 10^{-5}$ m$^3$/mol. Using the
critical point formulas:

$$T_c = \frac{8a}{27Rb} = \frac{8 \times 0.364}{27 \times 8.314 \times 4.27 \times 10^{-5}} = \frac{2.912}{9.585 \times 10^{-3}} \approx 303.7 \text{ K}$$

$$P_c = \frac{a}{27b^2} = \frac{0.364}{27 \times (4.27 \times 10^{-5})^2} = \frac{0.364}{4.923 \times 10^{-8}} \approx 7.40 \times 10^6 \text{ Pa} = 74.0 \text{ atm}$$

The experimental values are $T_c = 304.3$ K and $P_c = 73.8$ atm, showing good agreement.

</details>

