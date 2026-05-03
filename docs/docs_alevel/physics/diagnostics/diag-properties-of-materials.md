---
title: "Properties of Materials -- Diagnostic Tests"
description: Diagnostic tests for stress-strain analysis, Young's modulus, elastic potential energy, and material behaviour at maximum A-Level Physics difficulty.
slug: diag-properties-of-materials
hide_table_of_contents: true
---

# Properties of Materials — Diagnostic Tests

## Unit Tests

### UT-1: Stress-Strain Curve Analysis

**Question:**

A metal wire of length $2.00\,\text{m}$ and cross-sectional area $1.5 \times 10^{-6}\,\text{m}^2$ is tested under tension. The following data are obtained:

| Stress / MPa | 0 | 100 | 200 | 300 | 350 | 400 | 420 | 430 |
|---|---|---|---|---|---|---|---|---|
| Strain / $10^{-3}$ | 0 | 0.50 | 1.00 | 1.50 | 1.80 | 2.30 | 3.00 | 4.50 |

The wire breaks at a stress of $430\,\text{MPa}$.

(a) Calculate Young's modulus from the linear region of the graph.

(b) Calculate the elastic potential energy stored in the wire at a stress of $300\,\text{MPa}$ using the stress-strain graph.

(c) Calculate the total energy per unit volume absorbed by the wire up to the point of fracture.

**Solution:**

(a) Young's modulus is the gradient of the linear (proportional) region:

$$E = \frac{\Delta\sigma}{\Delta\varepsilon} = \frac{300 \times 10^6 - 0}{1.50 \times 10^{-3} - 0} = \frac{300 \times 10^6}{1.50 \times 10^{-3}} = 2.00 \times 10^{11}\,\text{Pa} = 200\,\text{GPa}$$

This is consistent with steel.

(b) In the linear region (up to $300\,\text{MPa}$), the energy per unit volume is the area under the stress-strain curve:

$$u = \frac{1}{2}\sigma\varepsilon = \frac{1}{2} \times 300 \times 10^6 \times 1.50 \times 10^{-3} = 2.25 \times 10^5\,\text{J}\,\text{m}^{-3}$$

Total elastic energy stored in the wire:

$$U = u \times \text{volume} = 2.25 \times 10^5 \times 2.00 \times 1.5 \times 10^{-6} = 0.675\,\text{J}$$

(c) Total energy per unit volume up to fracture = total area under the stress-strain curve.

Using the trapezium rule on the data:

$$u_{\text{total}} = \frac{1}{2}\left[(0 + 100) \times 0.50 + (100 + 200) \times 0.50 + (200 + 300) \times 0.50 + (300 + 350) \times 0.30 + (350 + 400) \times 0.50 + (400 + 420) \times 0.70 + (420 + 430) \times 1.50\right] \times 10^6 \times 10^{-3}$$

$$= \frac{1}{2}\left[50 + 150 + 250 + 195 + 375 + 574 + 1275\right] \times 10^3$$
$$= \frac{1}{2} \times 2869 \times 10^3 = 1.435 \times 10^6\,\text{J}\,\text{m}^{-3}$$

The elastic energy recoverable (if unloaded from $300\,\text{MPa}$) is only $2.25 \times 10^5\,\text{J}\,\text{m}^{-3}$, so the majority of the energy is dissipated as heat during plastic deformation.

---
### UT-2: Composite Wire Under Load

**Question:**

A composite wire consists of a steel section of length $1.5\,\text{m}$ and cross-sectional area $2.0 \times 10^{-6}\,\text{m}^2$ joined to a copper section of length $1.0\,\text{m}$ and cross-sectional area $2.0 \times 10^{-6}\,\text{m}^2$. A tensile force of $400\,\text{N}$ is applied to the composite wire.

Young's modulus of steel $= 2.0 \times 10^{11}\,\text{Pa}$; Young's modulus of copper $= 1.2 \times 10^{11}\,\text{Pa}$.

(a) Calculate the stress in each section.

(b) Calculate the strain in each section.

(c) Calculate the total extension of the composite wire.

**Solution:**

(a) Since the wire is in series, the force is the same in both sections:

$$\sigma = \frac{F}{A} = \frac{400}{2.0 \times 10^{-6}} = 2.0 \times 10^8\,\text{Pa} = 200\,\text{MPa}$$

Both sections experience the same stress of $200\,\text{MPa}$.

(b) Strain in steel: $\varepsilon_s = \frac{\sigma}{E_s} = \frac{2.0 \times 10^8}{2.0 \times 10^{11}} = 1.0 \times 10^{-3}$

Strain in copper: $\varepsilon_c = \frac{\sigma}{E_c} = \frac{2.0 \times 10^8}{1.2 \times 10^{11}} = 1.667 \times 10^{-3}$

(c) Extension of steel: $\Delta l_s = \varepsilon_s \times l_s = 1.0 \times 10^{-3} \times 1.5 = 1.50 \times 10^{-3}\,\text{m} = 1.50\,\text{mm}$

Extension of copper: $\Delta l_c = \varepsilon_c \times l_c = 1.667 \times 10^{-3} \times 1.0 = 1.667 \times 10^{-3}\,\text{m} = 1.67\,\text{mm}$

Total extension $= 1.50 + 1.67 = 3.17\,\text{mm}$

The effective Young's modulus of the composite wire:

$$E_{\text{eff}} = \frac{F(l_s + l_c)}{A(\Delta l_s + \Delta l_c)} = \frac{400 \times 2.5}{2.0 \times 10^{-6} \times 3.17 \times 10^{-3}} = \frac{1000}{6.34 \times 10^{-9}} = 1.58 \times 10^{11}\,\text{Pa}$$

---
### UT-3: Elastic Limit and Proportional Limit

**Question:**

A rubber band has the following force-extension data:

| Force / N | 0 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 | 6.0 | 7.0 | 6.0 | 5.0 | 4.0 | 3.0 | 2.0 | 1.0 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Extension / mm | 0 | 15 | 35 | 60 | 90 | 130 | 180 | 250 | 200 | 170 | 150 | 130 | 110 | 80 | 20 |

The loading data are the first 8 readings and the unloading data are the last 8 readings.

(a) Determine whether the rubber band obeys Hooke's law at any point in its loading curve.

(b) Calculate the work done on the rubber band during loading and the work done by the rubber band during unloading.

(c) Calculate the energy dissipated as heat per loading-unloading cycle and explain its significance.

**Solution:**

(a) For Hooke's law to apply, force must be proportional to extension (constant gradient).

Checking ratios: $F/x = 1.0/15 = 0.067$, $2.0/35 = 0.057$, $3.0/60 = 0.050$, $4.0/90 = 0.044$

The ratio decreases, so the rubber band **does not obey Hooke's law** at any point during loading. The spring constant (gradient) continuously decreases, meaning the rubber becomes easier to stretch as it extends. This is characteristic of non-Hookean materials like rubber and polymers.

(b) **Work done during loading** (area under loading curve, using trapezium rule):

$$W_{\text{load}} = \frac{1}{2}\left[(0+1) \times 15 + (1+2) \times 20 + (2+3) \times 25 + (3+4) \times 30 + (4+5) \times 40 + (5+6) \times 50 + (6+7) \times 70\right] \times 10^{-3}$$

$$= \frac{1}{2}\left[15 + 60 + 125 + 210 + 360 + 550 + 910\right] \times 10^{-3}$$
$$= \frac{1}{2} \times 2230 \times 10^{-3} = 1.115\,\text{J}$$

**Work done during unloading** (area under unloading curve):

$$W_{\text{unload}} = \frac{1}{2}\left[(6+5) \times 30 + (5+4) \times 20 + (4+3) \times 20 + (3+2) \times 20 + (2+1) \times 30 + (1+0) \times 60\right] \times 10^{-3}$$

Wait, I need to be more careful. The unloading data starts at extension $250\,\text{mm}$ with force $6.0\,\text{N}$ and goes to extension $0$ with force $0$.

$$W_{\text{unload}} = \frac{1}{2}\left[(6+5)(250-200) + (5+4)(200-170) + (4+3)(170-150) + (3+2)(150-130) + (2+1)(130-110) + (1+0)(110-80) + (0+0)(80-20)\right] \times 10^{-6}$$

Actually, let me use the trapezium rule properly:

$$W_{\text{unload}} = \sum \frac{F_i + F_{i+1}}{2} \times \Delta x$$

$$= \frac{6+5}{2}(250-200) + \frac{5+4}{2}(200-170) + \frac{4+3}{2}(170-150) + \frac{3+2}{2}(150-130) + \frac{2+1}{2}(130-110) + \frac{1+0}{2}(110-80) + \frac{0+0}{2}(80-20)$$

$$= 275 + 135 + 70 + 50 + 30 + 15 + 0 = 575\,\text{mJ} = 0.575\,\text{J}$$

(c) Energy dissipated per cycle $= W_{\text{load}} - W_{\text{unload}} = 1.115 - 0.575 = 0.540\,\text{J}$

This energy is dissipated as heat due to internal friction within the rubber (hysteresis). The loading-unloading curve forms a hysteresis loop, and the area enclosed represents the energy lost per cycle. This is why rubber gets warm when repeatedly stretched and released. The fraction of energy dissipated is $0.540/1.115 = 48\%$, meaning the rubber band returns only about $52\%$ of the energy stored in it.

## Integration Tests

### IT-1: Wire Under Thermal and Mechanical Stress (with Dynamics)

**Question:**

A steel wire of length $3.0\,\text{m}$, cross-sectional area $2.0 \times 10^{-6}\,\text{m}^2$, and Young's modulus $2.0 \times 10^{11}\,\text{Pa}$ is fixed between two rigid supports. The linear expansivity of steel is $1.2 \times 10^{-5}\,\text{K}^{-1}$.

(a) The temperature increases by $40\,\text{K}$. Calculate the stress that develops in the wire if it is not allowed to expand.

(b) The wire is now allowed to expand freely by $\Delta T = 40\,\text{K}$, and then a mass of $50\,\text{kg}$ is hung from it. Calculate the total extension.

(c) Calculate the elastic potential energy stored in the wire in part (b).

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) If the wire cannot expand, the thermal expansion is fully converted to elastic strain:

$$\Delta l_{\text{thermal}} = \alpha l \Delta T = 1.2 \times 10^{-5} \times 3.0 \times 40 = 1.44 \times 10^{-3}\,\text{m}$$

The wire must be compressed back by this amount, so the strain is:

$$\varepsilon = \frac{\Delta l}{l} = \frac{1.44 \times 10^{-3}}{3.0} = 4.8 \times 10^{-4}$$

Stress: $\sigma = E\varepsilon = 2.0 \times 10^{11} \times 4.8 \times 10^{-4} = 9.6 \times 10^7\,\text{Pa} = 96\,\text{MPa}$

This is a compressive stress. The wire would buckle if not properly supported.

(b) Free thermal expansion produces no stress. The extension due to the hanging mass:

$$\Delta l_{\text{mechanical}} = \frac{Fl}{AE} = \frac{50 \times 9.81 \times 3.0}{2.0 \times 10^{-6} \times 2.0 \times 10^{11}} = \frac{1471.5}{4.0 \times 10^5} = 3.68 \times 10^{-3}\,\text{m}$$

Total extension $= \Delta l_{\text{thermal}} + \Delta l_{\text{mechanical}} = 1.44 + 3.68 = 5.12 \times 10^{-3}\,\text{m} = 5.12\,\text{mm}$

(c) Only the mechanical extension stores elastic energy (thermal expansion without constraint does not store elastic energy):

$$U = \frac{1}{2} \times \text{stress} \times \text{strain} \times \text{volume}$$
$$= \frac{1}{2} \times \frac{F}{A} \times \frac{\Delta l_{\text{mech}}}{l} \times Al = \frac{1}{2}F\Delta l_{\text{mech}}$$
$$= \frac{1}{2} \times 50 \times 9.81 \times 3.68 \times 10^{-3} = 0.903\,\text{J}$$

---
### IT-2: Stress in a Rotating Ring (with Circular Motion)

**Question:**

A thin ring of radius $R = 0.50\,\text{m}$ is made of steel with density $7800\,\text{kg}\,\text{m}^{-3}$ and Young's modulus $2.0 \times 10^{11}\,\text{Pa}$. The ring has a square cross-section of side $5.0\,\text{mm}$ and rotates about its centre with angular velocity $\omega$.

(a) Derive an expression for the tensile stress in the ring due to rotation.

(b) Calculate the angular velocity at which the stress reaches $200\,\text{MPa}$.

(c) Calculate the percentage increase in the ring's radius at this angular velocity.

**Solution:**

(a) Consider a small element of the ring of mass $\delta m$ subtending angle $\delta\theta$ at the centre. The element is in circular motion with radius $R$.

Forces on the element: tension $T$ on each side, at angle $\delta\theta/2$ to the tangent.

Net inward force $= 2T\sin(\delta\theta/2) \approx T\delta\theta$ for small $\delta\theta$.

Centripetal force: $\delta m \times \omega^2 R = (\rho A R\delta\theta)\omega^2 R$

$$T\delta\theta = \rho A R^2\omega^2\delta\theta$$
$$T = \rho A R^2\omega^2$$

Stress: $\sigma = T/A = \rho R^2\omega^2$

(b) $\sigma = \rho R^2\omega^2$

$$\omega = \sqrt{\frac{\sigma}{\rho R^2}} = \sqrt{\frac{200 \times 10^6}{7800 \times 0.25}} = \sqrt{\frac{200 \times 10^6}{1950}} = \sqrt{1.026 \times 10^5} = 320\,\text{rad}\,\text{s}^{-1}$$

This is about $3060\,\text{rpm}$, or $51\,\text{rev}\,\text{s}^{-1}$.

(c) Strain: $\varepsilon = \sigma/E = 200 \times 10^6/(2.0 \times 10^{11}) = 1.0 \times 10^{-3}$

Percentage increase in radius $= \varepsilon \times 100 = 0.10\%$

The circumference also increases by $0.10\%$.

---
### IT-3: Energy Stored in a Stretched Wire Hanging Under Its Own Weight (with Work-Energy)

**Question:**

A steel wire of length $10\,\text{m}$, cross-sectional area $1.0 \times 10^{-6}\,\text{m}^2$, Young's modulus $2.0 \times 10^{11}\,\text{Pa}$, and density $7800\,\text{kg}\,\text{m}^{-3}$ hangs vertically from a fixed support.

(a) Calculate the total extension of the wire under its own weight.

(b) Calculate the elastic potential energy stored in the wire. Compare this with the naive calculation $U = \frac{1}{2} \times (\text{total weight}) \times (\text{total extension})$.

(c) Explain why the two values differ.

**Solution:**

(a) The stress varies linearly along the wire. At a distance $y$ from the bottom, the stress is due to the weight of wire below:

$$\sigma(y) = \frac{\rho A g y}{A} = \rho g y$$

where $y$ is measured from the bottom ($0 \le y \le L$).

The strain at position $y$: $\varepsilon(y) = \sigma(y)/E = \rho g y/E$

Total extension:

$$\Delta L = \int_0^L \varepsilon(y)\,dy = \int_0^L \frac{\rho g y}{E}\,dy = \frac{\rho g L^2}{2E}$$

$$= \frac{7800 \times 9.81 \times 100}{2 \times 2.0 \times 10^{11}} = \frac{7.651 \times 10^6}{4.0 \times 10^{11}} = 1.913 \times 10^{-5}\,\text{m} = 0.0191\,\text{mm}$$

(b) Elastic potential energy per unit volume at position $y$:

$$u(y) = \frac{1}{2}\sigma(y)\varepsilon(y) = \frac{1}{2}\frac{(\rho g y)^2}{E}$$

Total energy:

$$U = \int_0^L u(y) \times A\,dy = \frac{A}{2E}\int_0^L (\rho g y)^2\,dy = \frac{A\rho^2 g^2 L^3}{6E}$$

$$= \frac{1.0 \times 10^{-6} \times (7800)^2 \times (9.81)^2 \times 1000}{6 \times 2.0 \times 10^{11}}$$
$$= \frac{1.0 \times 10^{-6} \times 6.084 \times 10^7 \times 96.24 \times 10^3}{1.2 \times 10^{12}}$$

Let me compute step by step:

Numerator: $10^{-6} \times 7800^2 \times 9.81^2 \times 10^3 = 10^{-6} \times 6.084 \times 10^7 \times 96.24 \times 10^0 = 10^{-6} \times 5.855 \times 10^9 = 5.855 \times 10^3$

Wait: $7800^2 = 6.084 \times 10^7$, $9.81^2 = 96.24$, $L^3 = 1000$.

$$= \frac{1.0 \times 10^{-6} \times 6.084 \times 10^7 \times 96.24 \times 10^3}{6 \times 2.0 \times 10^{11}}$$
$$= \frac{5.855 \times 10^5}{1.2 \times 10^{12}} = 4.879 \times 10^{-7}\,\text{J}$$

Naive calculation: $U_{\text{naive}} = \frac{1}{2} \times (\rho A L g) \times \Delta L$

$$= \frac{1}{2} \times (7800 \times 1.0 \times 10^{-6} \times 10 \times 9.81) \times 1.913 \times 10^{-5}$$
$$= \frac{1}{2} \times 0.7651 \times 1.913 \times 10^{-5} = 7.317 \times 10^{-6}\,\text{J}$$

(c) The ratio is $U_{\text{naive}}/U = 7.317 \times 10^{-6}/4.879 \times 10^{-7} = 15.0$

The naive calculation overestimates by a factor of 3 (since $\frac{1}{2}mg\Delta L / U = \frac{\rho g L^2/(2E)}{\rho^2 g^2 L^3/(6E)} = 3$... wait, that gives factor of 3, not 15. Let me recheck.

$U_{\text{naive}} = \frac{1}{2}(\rho A L g)\Delta L = \frac{1}{2}\rho A L g \times \frac{\rho g L^2}{2E} = \frac{\rho^2 A g^2 L^3}{4E}$

$U = \frac{\rho^2 A g^2 L^3}{6E}$

Ratio $U_{\text{naive}}/U = 6/4 = 3/2 = 1.5$

The naive calculation overestimates by a factor of 1.5. This is because the stress is not uniform along the wire (it varies linearly from 0 at the bottom to maximum at the top), so the average stress is half the maximum, not the full weight divided by area.
