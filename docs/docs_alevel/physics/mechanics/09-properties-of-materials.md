---
title: Properties of Materials
description:
  "A-Level Physics notes on Properties of Materials: 1. Hooke's Law; Springs in Series and Parallel;
  2. Stress and Strain; 3. Young's Modulus."
date: 2026-04-02T00:00:00.000Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: properties-of-materials
sidebar_position: 9
---

## Properties of Materials

:::info Board Coverage AQA Paper 1 | Edexcel CP1 | OCR (A) Paper 1 | CIE P1 :::

The mechanical properties of materials — how they deform, stretch, compress, and break — are central
To engineering and physics. This topic sits within the "Mechanics & Materials" strand on every A
Level board.

## 1. Hooke's Law

When an elastic object such as a spring or wire is stretched, the extension is (up to a limit)
Proportional to the applied force.

$$\boxed{F = k\,\Delta x}$$

Where $F$ is the applied force, $k$ is the **spring constant** (N m$^{-1}$), and $\Delta x$ is the
Extension from the natural length.

**Definition.** The **spring constant** $k$ is the force per unit extension required to stretch an
Elastic object. A stiff spring has a large $k$; a soft spring has a small $k$.

**Definition.** The **limit of proportionality** is the point beyond which force is no longer
Proportional to extension — the straight-line region of the force-extension graph ends.

**Definition.** The **elastic limit** is the maximum force that can be applied such that the
Material returns to its original length when the force is removed. Beyond this point, the material
Undergoes **permanent (plastic) deformation**.

:::warning Warning For many materials (especially metals), the elastic limit lies slightly beyond
the limit of Proportionality. Between these two points the material still returns to its original
shape, but $F$ And $\Delta x$ are no longer linearly related. :::

### Springs in Series and Parallel

For two springs with spring constants $k_1$ and $k_2$:

**Series** (force is the same through both, extensions add):

$$\frac◆LB◆1◆RB◆◆LB◆k_{\mathrm{series}}◆RB◆ = \frac{1}{k_1} + \frac{1}{k_2}$$

**Parallel** (extension is the same for both, forces add):

$$k_{\mathrm{parallel}} = k_1 + k_2$$

<details>
<summary>Example</summary>
A spring of constant $200$ N m$^{-1}$ is joined in series with a spring of constant $300$ N
M$^{-1}$. A $10$ N weight is hung from the combination. Find the total extension.

**Answer.** $\frac{1}{k} = \frac{1}{200} + \frac{1}{300} = \frac{5}{600} = \frac{1}{120}$. So
$k = 120$ N m$^{-1}$.

Extension: $\Delta x = F/k = 10/120 = 0.0833$ m $= 8.3$ cm.

</details>

## 2. Stress and Strain

Force and extension depend on the size of the sample. To compare materials independently of sample
Geometry, we use **stress** and **strain**.

**Definition.** **Stress** $\sigma$ is the force per unit cross-sectional area:

$$\boxed{\sigma = \frac{F}{A}}$$

Units: pascals (Pa), where $1\;\mathrm{Pa} = 1\;\mathrm{N m}^{-2}$. Typical values range from
$\sim 10^6$ Pa for soft metals to $\sim 10^9$ Pa for steel.

**Definition.** **Strain** $\varepsilon$ is the extension per unit original length:

$$\boxed{\varepsilon = \frac◆LB◆\Delta L◆RB◆◆LB◆L◆RB◆}$$

Strain is dimensionless (a ratio). It is often expressed as a percentage.

**Definition.** **Breaking stress** is the stress at which a material fractures.

:::info Info (stretching) and compressive stress (squashing). **AQA** and **Edexcel** focus on
tensile Loading. **OCR (A)** may ask about compressive stress-strain behaviour of brittle materials
like Concrete. :::

## 3. Young's Modulus

**Definition.** The **Young's modulus** $E$ of a material is the ratio of tensile stress to tensile
Strain, within the limit of proportionality:

$$\boxed{E = \frac◆LB◆\sigma◆RB◆◆LB◆\varepsilon◆RB◆ = \frac◆LB◆F/A◆RB◆◆LB◆\Delta L/L◆RB◆ = \frac◆LB◆FL◆RB◆◆LB◆A\,\Delta L◆RB◆}$$

Young's modulus is a measure of **stiffness** — the resistance of a material to elastic deformation
Under tensile loading. It has units of Pa (same as stress, since strain is dimensionless).

### Typical Values

| Material     | Young's Modulus (GPa) | Type            |
| ------------ | --------------------- | --------------- |
| Rubber       | 0.01–0.1              | Polymer         |
| Polyethylene | 0.2–1.0               | Polymer         |
| Concrete     | 30                    | Ceramic         |
| Glass        | 70                    | Ceramic         |
| Aluminium    | 70                    | Metal           |
| Copper       | 130                   | Metal           |
| Steel        | 200                   | Metal           |
| Diamond      | 1200                  | Ceramic/Crystal |

:::warning Common Pitfall A high Young's modulus means the material is **stiff**, not necessarily
**strong**. Glass is stiffer than rubber ($E \approx 70$ GPa vs $0.01$ GPa) but rubber is
**tougher** (absorbs more energy before breaking) because it can undergo much larger strains.
Stiffness and strength are different properties. :::

### Measuring Young's Modulus

A standard experiment uses a wire clamped at one end with masses hung from the other:

1. Measure the wire's diameter with a micrometer (at several points, take an average) to find
   $A = \pi d^2/4$.
2. Measure the original length $L$ with a metre rule.
3. Add known masses $m$ and record the extension $\Delta L$ with a vernier scale or Searle's
   apparatus.
4. Plot a graph of force $F = mg$ against extension $\Delta L$.
5. The gradient is $k = F/\Delta L$. Then $E = kL/A = \frac◆LB◆FL◆RB◆◆LB◆A\,\Delta L◆RB◆$.

Alternatively, plot stress against strain — the gradient is $E$ directly.

<details>
<summary>Worked Example</summary>
A steel wire of diameter $0.50$ mm and length $2.0$ m extends by $1.2$ mm when a $50$ N force is
Applied. Calculate Young's modulus.

**Answer.** $A = \pi(0.50 \times 10^{-3}/2)^2 = 1.96 \times 10^{-7}$ m$^2$.

$\sigma = F/A = 50 / 1.96 \times 10^{-7} = 2.55 \times 10^8$ Pa.

$\varepsilon = \Delta L/L = 1.2 \times 10^{-3} / 2.0 = 6.0 \times 10^{-4}$.

$E = \sigma/\varepsilon = 2.55 \times 10^8 / 6.0 \times 10^{-4} = 4.25 \times 10^{11}$ Pa $= 425$
GPa.

(This is somewhat high for steel; typical values are 180–210 GPa — the discrepancy may indicate the
Wire has exceeded its limit of proportionality.)

</details>

### Proof of Young's Modulus from Hooke's Law

Starting from Hooke's law in its force-extension form:

$$F = k\,\Delta x$$

Multiply both sides by $L/(A\,\Delta x)$:

$$\frac◆LB◆FL◆RB◆◆LB◆A\,\Delta x◆RB◆ = \frac{kL}{A}$$

Define $\sigma = F/A$$\varepsilon = \Delta x/L$:

$$\frac◆LB◆\sigma◆RB◆◆LB◆\varepsilon◆RB◆ = \frac{kL}{A} = E$$

Since $k$$L$And $A$ are all constants for a given sample (within the proportional limit), $E$ is A
constant of the material — it does not depend on the dimensions of the sample. $\square$

## 4. Stress-Strain Graphs

The stress-strain graph is the most important tool for characterising the mechanical behaviour of a
Material.

### Regions of the Graph

1. **Linear (elastic) region** — from origin to limit of proportionality. Stress is proportional to
   strain; gradient $= E$.
2. **Elastic region (non-linear)** — between limit of proportionality and elastic limit. The
   material still returns to its original shape, but stress and strain are no longer proportional.
3. **Plastic region** — beyond the elastic limit. Permanent deformation occurs. The material does
   not fully recover on unloading.
4. **Yield point** — the stress at which plastic deformation begins (well-defined in mild steel;
   gradual in copper).
5. **Ultimate tensile strength (UTS)** — the maximum stress the material can withstand.
6. **Breaking point (fracture)** — the stress at which the material breaks.

### Ductile Materials (e.g., Steel, Copper)

A ductile material undergoes significant **plastic deformation** before fracture. The stress-strain
Curve shows:

- A clear linear region followed by a yield point
- A long plastic region where the material "necks" (cross-section reduces locally)
- Fracture occurs after considerable elongation (strain > 10% for many metals)

**Definition.** **Ductile behaviour** is the ability of a material to undergo large plastic
Deformation before fracture.

### Brittle Materials (e.g., Glass, Ceramics)

A brittle material fractures with little or no plastic deformation. The stress-strain curve shows:

- A linear region right up to fracture
- No yield point, no plastic region
- Fracture at relatively low strain ( < 1%)

**Definition.** **Brittle fracture** is the sudden failure of a material with little or no plastic
Deformation. It occurs when cracks propagate rapidly through the material.

### Polymeric Materials (e.g., Rubber, Polyethylene)

Polymers show a wide range of behaviours:

- **Rubber**: very large elastic strains (up to 500%), low Young's modulus, returns to original
  shape. The stress-strain curve is non-linear (S-shaped).
- **Polyethylene**: initial elastic region followed by yielding and plastic deformation. Can undergo
  cold drawing (necking and drawing of the neck along the sample).
- **Thermoplastic polymers**: soften when heated, can be remoulded. Show viscoelastic behaviour
  (time-dependent response).

:::info Info And requires interpretation of force-extension graphs. **Edexcel** asks for
quantitative analysis of Stress-strain graphs including calculating the area under the graph
(energy). **CIE** may ask you to Sketch stress-strain curves for different material types and
identify specific points. **OCR (A)** Links material properties to engineering applications. :::

## 5. Elastic Potential Energy

**Definition.** **Elastic potential energy** (or elastic strain energy) is the energy stored in a
Deformed elastic body.

### Energy in a Spring

From Hooke's law, the force varies linearly from $0$ to $F$ as the spring extends from $0$ to
$\Delta x$. The energy stored equals the area under the force-extension graph:

$$\boxed{E_e = \frac{1}{2}F\,\Delta x = \frac{1}{2}k\,\Delta x^2}$$

### Proof of Energy Stored in a Wire

Consider a wire of original length $L$ and cross-sectional area $A$. When stretched by an increment
$d(\Delta L)$The work done is:

$$dW = F\,d(\Delta L)$$

Since $F = \sigma A$ and $\sigma = E\varepsilon = E\,\Delta L/L$:

$$dW = \sigma A\,d(\Delta L) = E\varepsilon A \cdot L\,d\varepsilon = EAL\,\varepsilon\,d\varepsilon$$

Integrating from $\varepsilon = 0$ to $\varepsilon = \varepsilon_{\max}$:

$$E_e = \int_0^{\varepsilon_{\max}} EAL\,\varepsilon\,d\varepsilon = EAL\left[\frac◆LB◆\varepsilon^2◆RB◆◆LB◆2◆RB◆\right]_0^{\varepsilon_{\max}} = \frac{1}{2}EAL\,\varepsilon_{\max}^2$$

Since $E\varepsilon = \sigma$ and $AL = V$ (volume of the wire):

$$\boxed{E_e = \frac{1}{2}\,\frac◆LB◆\sigma^2◆RB◆◆LB◆E◆RB◆\,V}$$

Alternatively, using $\varepsilon = \sigma/E$:

$$E_e = \frac{1}{2}\,E\,V\,\varepsilon^2 = \frac{1}{2}\,\sigma\,\varepsilon\,V$$

$\square$

:::warning Warning (Hookean)\*\* region. If the material has been loaded beyond the limit of
proportionality, the energy Stored is the area under the actual (non-linear) force-extension curve,
which must be found by Integration or by counting squares. :::

## 6. Material Properties Comparison

### Metals

| Property        | Steel               | Copper             | Aluminium            |
| --------------- | ------------------- | ------------------ | -------------------- |
| $E$ (GPa)       | 200                 | 130                | 70                   |
| UTS (MPa)       | 400–2000            | 200–400            | 100–600              |
| Ductility       | High                | Very high          | High                 |
| Density (kg/m³) | 7800                | 8900               | 2700                 |
| Behaviour       | Ductile, strong     | Ductile, malleable | Ductile, lightweight |
| Applications    | Construction, tools | Wiring, plumbing   | Aircraft, packaging  |

Metals are ductile because their crystalline structure allows dislocations (defects in the crystal
Lattice) to move under stress. This is the basis of plastic deformation in metals.

### Polymers

| Property     | Polyethylene (HDPE)     | Rubber                    |
| ------------ | ----------------------- | ------------------------- |
| $E$ (GPa)    | 0.2–1.0                 | 0.01–0.1                  |
| UTS (MPa)    | 20–40                   | 10–30                     |
| Max strain   | ~100% (breaks)          | ~500% (elastic)           |
| Behaviour    | Thermoplastic, stiffens | Elastomer, highly elastic |
| Applications | Bottles, pipes          | Tyres, elastic bands      |

Polymers consist of long-chain molecules. In rubber, the chains are tangled and uncoiled when
Stretched — this is why it can undergo large elastic strains. In thermoplastics like polyethylene,
The chains can slide past each other, leading to plastic deformation.

### Ceramics

| Property                   | Glass           | Concrete               |
| -------------------------- | --------------- | ---------------------- |
| $E$ (GPa)                  | 70              | 30                     |
| Compressive strength (MPa) | 1000            | 30–50                  |
| Tensile strength (MPa)     | 30–90           | 3–5                    |
| Behaviour                  | Brittle         | Brittle (in tension)   |
| Applications               | Windows, optics | Buildings, foundations |

Ceramics are **strong in compression but weak in tension**. This is because their ionic/covalent
Bonding is very strong but cracks propagate under tensile stress. Concrete is Reinforced with steel
bars (rebar) to compensate for its low tensile strength.

### Composites

**Definition.** A **composite material** combines two or more constituent materials with
Significantly different physical or chemical properties to create a material with characteristics
Superior to either component alone.

Examples:

- **Fibreglass**: glass fibres embedded in a polymer matrix — combines the strength of glass with
  the toughness of polymers.
- **Carbon fibre reinforced polymer (CFRP)**: carbon fibres in epoxy resin — extremely high
  strength-to-weight ratio, used in aircraft and Formula 1.
- **Reinforced concrete**: steel bars in concrete — steel provides tensile strength; concrete
  provides compressive strength and protects steel from corrosion.
- **Wood**: a natural composite of cellulose fibres (strong in tension) in a lignin matrix (provides
  rigidity).

## 7. Key Definitions Summary

| Term                          | Definition                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Young's modulus**           | The ratio of tensile stress to tensile strain within the limit of proportionality: $E = \sigma/\varepsilon$ |
| **Ultimate tensile strength** | The maximum stress a material can withstand before fracture (necking begins)                                |
| **Yield stress**              | The stress at which a material begins to deform plastically                                                 |
| **Brittle fracture**          | Sudden failure with little or no plastic deformation                                                        |
| **Ductile behaviour**         | The ability to undergo large plastic deformation before fracture                                            |
| **Elastic deformation**       | Deformation from which the material fully recovers when the load is removed                                 |
| **Plastic deformation**       | Permanent deformation that remains after the load is removed                                                |
| **Stiffness**                 | Resistance to elastic deformation; measured by Young's modulus                                              |
| **Toughness**                 | The energy absorbed before fracture; area under the full stress-strain curve                                |
| **Hardness**                  | Resistance to surface indentation or scratching                                                             |

## 8. Loading, Unloading, and Hysteresis

When a material is loaded and then unloaded within the elastic region, the loading and unloading
Curves coincide — all stored energy is recovered.

When a material is loaded beyond the elastic limit and then unloaded:

- The unloading curve is parallel to the original linear region (gradient $= E$)
- The material does not return to its original length — there is a **permanent extension**
- The area between the loading and unloading curves represents the **energy dissipated** (converted
  to heat due to internal friction)

**Hysteresis** is the lag between the loading and unloading curves. It is particularly important for
Rubber and viscoelastic materials. In a rubber band, the energy dissipated per cycle is the area of
The hysteresis loop — this is why a stretched rubber band feels warm when released.

## 9. Fatigue and Creep

**Fatigue** is the progressive and localised structural damage that occurs when a material is
Subjected to cyclic loading. Even stresses well below the yield stress can cause failure after
Millions of cycles. This is critical in aircraft wings, bridges, and engine components.

**Creep** is the slow, time-dependent deformation of a material under a constant load, especially at
Elevated temperatures. It is important in power station components, turbine blades, and lead
Roofing.

:::info Info **AQA** focuses more on the core stress-strain behaviour. **CIE** may include these in
Application-style questions about engineering materials. :::

## Problems

<details>
<summary>Problem 1</summary>
A spring of spring constant $250$ N m$^{-1}$ is stretched by $4.0$ cm. Calculate: (a) the force
Applied, (b) the elastic potential energy stored.

**Answer.** (a) $F = k\Delta x = 250 \times 0.040 = 10$ N.

(b) $E_e = \frac{1}{2}k\Delta x^2 = \frac{1}{2} \times 250 \times (0.040)^2 = 0.20$ J.

<b>If you get this wrong, revise:</b> [Hooke's Law](#1-hookes-law) and
[Elastic Potential Energy](#5-elastic-potential-energy)

</details>

<details>
<summary>Problem 2</summary>
A copper wire of diameter $1.0$ mm and length $3.0$ m supports a load of $80$ N. Calculate the
Stress and the strain, given that Young's modulus for copper is $1.3 \times 10^{11}$ Pa.

**Answer.** $A = \pi(0.50 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$.

$\sigma = F/A = 80 / 7.85 \times 10^{-7} = 1.02 \times 10^8$ Pa $= 102$ MPa.

$\varepsilon = \sigma/E = 1.02 \times 10^8 / 1.3 \times 10^{11} = 7.8 \times 10^{-4}$.

Extension: $\Delta L = \varepsilon L = 7.8 \times 10^{-4} \times 3.0 = 2.3 \times 10^{-3}$ m $= 2.3$
Mm.

<b>If you get this wrong, revise:</b> [Stress and Strain](#2-stress-and-strain) and
[Young's Modulus](#3-youngs-modulus)

</details>

<details>
<summary>Problem 3</summary>
Two identical springs each of spring constant $150$ N m$^{-1}$ are connected in parallel and support
A $12$ kg mass. Find the total extension.

**Answer.** $k_{\mathrm{parallel}} = 150 + 150 = 300$ N m$^{-1}$.

$F = mg = 12 \times 9.81 = 117.7$ N.

$\Delta x = F/k = 117.7/300 = 0.392$ m $= 39.2$ cm.

<b>If you get this wrong, revise:</b>
[Springs in Series and Parallel](#springs-in-series-and-parallel)

</details>

<details>
<summary>Problem 4</summary>
A steel wire and a rubber cord have the same dimensions and are subjected to the same tensile force.
The Young's modulus of steel is $2.0 \times 10^{11}$ Pa and of rubber is $5.0 \times 10^6$ Pa.
Calculate the ratio of their extensions.

**Answer.** For the same $F$$L$And $A$: $\Delta L = FL/(AE)$So $\Delta L \propto 1/E$.

Ratio:
$\frac◆LB◆\Delta L_{\mathrm{rubber}}◆RB◆◆LB◆\Delta L_{\mathrm{steel}}◆RB◆ = \frac◆LB◆E_{\mathrm{steel}}◆RB◆◆LB◆E_{\mathrm{rubber}}◆RB◆ = \frac◆LB◆2.0 \times 10^{11}◆RB◆◆LB◆5.0 \times 10^6◆RB◆ = 4.0 \times 10^4$.

The rubber cord extends $40,000$ times more than the steel wire under the same load.

<b>If you get this wrong, revise:</b> [Young's Modulus](#3-youngs-modulus)

</details>

<details>
<summary>Problem 5</summary>
A material has a Young's modulus of $5.0$ GPa and a breaking stress of $50$ MPa. Calculate the
Breaking strain.

**Answer.** $\varepsilon = \sigma/E = 50 \times 10^6 / 5.0 \times 10^9 = 0.010 = 1.0\%$.

<b>If you get this wrong, revise:</b> [Young's Modulus](#3-youngs-modulus)

</details>

<details>
<summary>Problem 6</summary>
A force-extension graph for a metal wire is linear up to an extension of $0.80$ mm with a gradient
Of $2.5 \times 10^5$ N m$^{-1}$. Beyond this point the wire yields and breaks at an extension of
$4.0$ mm under a force of $300$ N. (a) Calculate the energy stored up to the limit of
Proportionality. (b) Estimate the total energy stored up to fracture.

**Answer.** (a)
$E_e = \frac{1}{2}F\,\Delta x = \frac{1}{2} \times (2.5 \times 10^5 \times 0.80 \times 10^{-3}) \times (0.80 \times 10^{-3}) = \frac{1}{2} \times 200 \times 0.80 \times 10^{-3} = 0.080$
J.

(b) The total energy is the area under the full force-extension curve up to fracture. Approximating
As a triangle from the origin to the breaking point:
$E_{\mathrm{total}} \approx \frac{1}{2} \times 300 \times 4.0 \times 10^{-3} = 0.60$ J. (A better
Estimate would account for the non-linear region, but this is a reasonable approximation.)

<b>If you get this wrong, revise:</b> [Elastic Potential Energy](#5-elastic-potential-energy)

</details>

<details>
<summary>Problem 7</summary>
Explain why concrete is reinforced with steel bars. Refer to the stress-strain behaviour of each
Material.

**Answer.** Concrete is strong in compression but weak in tension (UTS $\approx 3$–$5$ MPa in
Tension). Steel is strong in both tension and compression (UTS $\approx 400$–$2000$ MPa) and is
Ductile. In reinforced concrete, the steel bars carry the tensile loads while the concrete carries
The compressive loads. The steel's ductility also means the composite structure deforms gradually
Rather than failing suddenly, giving warning before collapse.

<b>If you get this wrong, revise:</b>
[Material Properties Comparison](#6-material-properties-comparison)

</details>

<details>
<summary>Problem 8</summary>
A steel wire of length $2.5$ m and diameter $0.80$ mm is stretched by $3.0$ mm. Calculate the
Elastic potential energy stored. ($E_{\mathrm{steel}} = 2.0 \times 10^{11}$ Pa)

**Answer.** $A = \pi(0.40 \times 10^{-3})^2 = 5.03 \times 10^{-7}$ m$^2$.
$V = AL = 5.03 \times 10^{-7} \times 2.5 = 1.26 \times 10^{-6}$ m$^3$.

$\varepsilon = 3.0 \times 10^{-3}/2.5 = 1.2 \times 10^{-3}$.
$\sigma = E\varepsilon = 2.0 \times 10^{11} \times 1.2 \times 10^{-3} = 2.4 \times 10^8$ Pa.

$E_e = \frac{1}{2}\sigma\varepsilon V = \frac{1}{2} \times 2.4 \times 10^8 \times 1.2 \times 10^{-3} \times 1.26 \times 10^{-6} = 1.81 \times 10^{-4}$
J.

<b>If you get this wrong, revise:</b>
[Proof of Energy Stored in a Wire](#proof-of-energy-stored-in-a-wire)

</details>

<details>
<summary>Problem 9</summary>
Sketch the stress-strain graph for: (a) a brittle material, (b) a ductile material. Label the key
Features on each graph.

**Answer.** (a) Brittle: straight line from origin to fracture point (at low strain, < 1%). Label:
Linear region, breaking point. No plastic region, no yield point.

(b) Ductile: straight line from origin (linear region), then yield point, then curve rises to a peak
(UTS), then declines as necking occurs, finally fracture at high strain (10–40%). Label: limit of
Proportionality, elastic limit, yield point, UTS, necking, fracture.

<b>If you get this wrong, revise:</b> [Stress-Strain Graphs](#4-stress-strain-graphs)

</details>

<details>
<summary>Problem 10</summary>
A student measures Young's modulus for a wire and obtains a value 30% higher than the accepted
Value. Give three possible sources of error, and state whether each would make the result too high
Or too low.

**Answer.**

1. **Measuring the diameter too small** — if the micrometer reads low, $A = \pi d^2/4$ is too small,
   so $E = FL/(A\,\Delta L)$ is too high. (Makes result too high.)

2. **Not accounting for the initial sag or kinks in the wire** — some of the measured extension is
   taken up by straightening the wire rather than elastic stretching, so $\Delta L$ is overestimated
   and $E$ is too low. (Makes result too low.)

3. **Heating of the wire** — if the wire heats up during the experiment (due to repeated loading or
   ambient temperature change), the wire expands, increasing $\Delta L$ and reducing $E$. (Makes
   result too low.)

<b>If you get this wrong, revise:</b> [Measuring Young's Modulus](#measuring-youngs-modulus)

</details>

:::

:::

:::

:::

:::

:::

---

:::tip Tip Ready to test your understanding of **Properties of Materials**? The
[diagnostic test](/docs/alevel/physics/diagnostics/diag-properties-of-materials) contains the
hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Properties
of Materials with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

:::danger Danger

- **Confusing stress, strain, and Young's modulus:** Stress is force per unit AREA (Pa = N/m
  squared), not force per unit length. Strain is the ratio of extension to ORIGINAL length
  (dimensionless), not extension alone. Young's modulus is stress divided by strain (Pa), and
  describes stiffness, not strength.

- **Using the wrong area in stress calculations:** Stress = F/A where A is the cross-sectional area
  perpendicular to the force. For a wire under tension, use the cross-sectional area of the wire
  (pi \* r squared), NOT the surface area. For a cube under compression, use the area of the face
  the force acts on.

- **Assuming the elastic limit equals the yield point:** The elastic limit is the point beyond which
  the material will not return to its original shape when the force is removed. The yield point is
  where it begins to deform plastically. For many materials, these are approximately the same, but
  for some (like mild steel), there is a small difference.

- **Confusing ultimate tensile strength with breaking stress:** Ultimate tensile strength is the
  MAXIMUM stress the material can withstand (the peak of the stress-strain curve). Breaking stress
  is where the material actually fractures (which may be lower if the material necks). They are not
  always the same.

:::

## Common Pitfalls

1. Confusing displacement with distance, or velocity with speed, particularly in graphs and
   calculations.

2. Confusing scalar and vector quantities — always check whether direction matters for the quantity
   in question.

3. Forgetting to include units in final answers, especially when working with derived units like
   $\text{N}\,\text{kg}^{-1}\,\text{m}^2$.

4. Misidentifying the system boundary when applying conservation laws — define what is included
   before writing equations.
