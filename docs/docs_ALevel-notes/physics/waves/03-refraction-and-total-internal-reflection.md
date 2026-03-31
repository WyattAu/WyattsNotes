---
title: Refraction and Total Internal Reflection
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: refraction-and-total-internal-reflection
---

## Refraction and Total Internal Reflection

:::info Board Coverage
AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::

## 1. Refractive Index

**Definition.** The **refractive index** $n$ of a medium is the ratio of the speed of light in vacuum to the speed of light in the medium:

$$\boxed{n = \frac{c}{v}}$$

Since $v < c$ for all material media, $n > 1$. The refractive index is a dimensionless quantity.

| Material | Refractive Index |
| -------- | ---------------- |
| Air      | 1.00             |
| Water    | 1.33             |
| Glass    | 1.50             |
| Diamond  | 2.42             |

**Intuition.** Light slows down in a denser medium because the electromagnetic wave interacts with the electrons in the material. The denser the material (more electrons per unit volume), the slower the light, and the higher the refractive index.

## 2. Snell's Law

**Snell's Law.** At the boundary between two media with refractive indices $n_1$ and $n_2$:

$$\boxed{n_1 \sin\theta_1 = n_2 \sin\theta_2}$$

where $\theta_1$ is the angle of incidence and $\theta_2$ is the angle of refraction, both measured from the normal.

### Derivation from Wave Theory (Huygens' Construction)

Consider a plane wavefront $AB$ arriving at the boundary between two media. Let the wave travel at speed $v_1$ in medium 1 and $v_2$ in medium 2.

By the time point $B$ on the wavefront reaches the boundary at $B'$, point $A$ has already entered medium 2 and travelled a distance $v_2 t$ as a secondary wavelet, where $t = BB'/v_1$.

The new wavefront is the tangent from $B'$ to the wavelet centred at $A$. The geometry gives:

$$\frac{\sin\theta_1}{\sin\theta_2} = \frac{BB'/AB'}{v_2 t / AB'} = \frac{BB'}{v_2 t} = \frac{v_1 t}{v_2 t} = \frac{v_1}{v_2}$$

Since $n = c/v$:

$$\frac{\sin\theta_1}{\sin\theta_2} = \frac{n_2}{n_1} \implies n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$\square$

### Derivation from Fermat's Principle

**Fermat's Principle** states that light travels between two points along the path that takes the **least time**.

Consider a ray travelling from point $P$ in medium 1 to point $Q$ in medium 2, crossing the boundary. Let the boundary be the $x$-axis, with $P$ at $(0, h_1)$ and $Q$ at $(d, -h_2)$. The ray hits the boundary at $(x, 0)$.

The total travel time is:

$$t = \frac{\sqrt{x^2 + h_1^2}}{v_1} + \frac{\sqrt{(d-x)^2 + h_2^2}}{v_2}$$

For the minimum time, $dt/dx = 0$:

$$\frac{x}{v_1\sqrt{x^2 + h_1^2}} - \frac{d-x}{v_2\sqrt{(d-x)^2 + h_2^2}} = 0$$

Noting that $\sin\theta_1 = x/\sqrt{x^2 + h_1^2}$ and $\sin\theta_2 = (d-x)/\sqrt{(d-x)^2 + h_2^2}$:

$$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$$

$$\frac{n_1 \sin\theta_1}{c} = \frac{n_2 \sin\theta_2}{c} \implies n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$\square$

**Intuition.** When light enters a denser medium ($n_2 > n_1$), it bends **towards** the normal ($\theta_2 < \theta_1$). This is because one side of the wavefront slows down before the other, causing the wavefront to pivot towards the normal.

## 3. Total Internal Reflection

### Condition for Total Internal Reflection

Total internal reflection (TIR) occurs when:

1. Light travels from a **denser** to a **less dense** medium ($n_1 > n_2$)
2. The angle of incidence exceeds the **critical angle** $\theta_c$

### Derivation of the Critical Angle

At the critical angle, the refracted ray travels along the boundary ($\theta_2 = 90°$):

$$n_1 \sin\theta_c = n_2 \sin 90° = n_2$$

$$\boxed{\sin\theta_c = \frac{n_2}{n_1}}$$

For light going from a medium of refractive index $n$ into air ($n_2 \approx 1$):

$$\boxed{\sin\theta_c = \frac{1}{n}}$$

**Derivation of why TIR only occurs from denser to less dense.** Snell's law gives $\sin\theta_2 = \frac{n_1}{n_2}\sin\theta_1$. If $n_1 > n_2$, then $\frac{n_1}{n_2} > 1$ and $\sin\theta_2$ can exceed 1 for sufficiently large $\theta_1$, which is impossible — so the light is entirely reflected. If $n_1 < n_2$, then $\frac{n_1}{n_2} < 1$ and $\sin\theta_2 < \sin\theta_1 \leq 1$ for all $\theta_1$, so refraction always occurs.

:::warning Common Pitfall
TIR can only occur when light travels from a denser medium to a less dense medium. Light going from air into glass can never undergo TIR, no matter how large the angle of incidence.
:::

<details>
<summary>Example: Critical Angle of Glass</summary>
<p>

The refractive index of glass is 1.50. Calculate the critical angle for glass-air boundary.

**Answer.** $\sin\theta_c = 1/1.50 = 0.667$. $\theta_c = \arcsin(0.667) = 41.8°$.

</p>
</details>

## 4. Optical Fibres

Optical fibres use total internal reflection to guide light along a curved path.

### Structure

An optical fibre consists of:

- **Core**: denser medium (higher $n$), typically glass or plastic
- **Cladding**: less dense medium (lower $n$), surrounding the core

Light enters the fibre and undergoes repeated TIR at the core-cladding boundary, propagating along the fibre with minimal loss.

### Acceptance Angle and Numerical Aperture

Light entering the fibre at too large an angle will not satisfy the TIR condition at the core-cladding boundary.

For light entering from air into a fibre with core index $n_1$ and cladding index $n_2$:

At the core-cladding boundary, TIR requires: $\sin\theta_2 \geq \sin\theta_c = n_2/n_1$ (where $\theta_2$ is measured from the normal to the core-cladding boundary).

At the air-core boundary (Snell's law): $\sin\theta_{\max} = n_1\cos\theta_c = n_1\sqrt{1 - \sin^2\theta_c} = n_1\sqrt{1 - (n_2/n_1)^2} = \sqrt{n_1^2 - n_2^2}$.

The **numerical aperture** is:

$$\text{NA} = \sqrt{n_1^2 - n_2^2}$$

### Signal Degradation

Two main effects degrade the signal in optical fibres:

1. **Absorption**: some light energy is absorbed by the fibre material, reducing signal intensity.
2. **Dispersion**: different wavelengths travel at slightly different speeds, causing pulse broadening.
   - **Material dispersion**: the refractive index depends on wavelength.
   - **Modal dispersion**: rays entering at different angles travel different path lengths (in multimode fibres).

:::tip Exam Technique
When asked about advantages of optical fibres over copper cables, mention: higher bandwidth, no electromagnetic interference, lighter weight, no electrical sparking risk, lower signal loss over long distances.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Light travels from air ($n = 1.00$) into water ($n = 1.33$) at an angle of incidence of $40°$. Calculate the angle of refraction.

**Answer.** $1.00 \times \sin 40° = 1.33 \times \sin\theta_2$. $\sin\theta_2 = \sin 40° / 1.33 = 0.6428 / 1.33 = 0.483$. $\theta_2 = \arcsin(0.483) = 28.9°$.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A glass block has refractive index 1.52. Calculate the critical angle for a glass-air boundary.

**Answer.** $\sin\theta_c = 1/1.52 = 0.658$. $\theta_c = 41.1°$.

<b>If you get this wrong, revise:</b> [Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Light is incident on a glass-air boundary at $50°$. The refractive index of the glass is 1.50. Determine whether total internal reflection occurs.

**Answer.** $\theta_c = \arcsin(1/1.50) = 41.8°$. Since $50° > 41.8°$, total internal reflection occurs.

<b>If you get this wrong, revise:</b> [Condition for Total Internal Reflection](#condition-for-total-internal-reflection)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A ray of light travels from glass ($n = 1.60$) into water ($n = 1.33$). Calculate the critical angle.

**Answer.** $\sin\theta_c = n_2/n_1 = 1.33/1.60 = 0.831$. $\theta_c = \arcsin(0.831) = 56.2°$.

<b>If you get this wrong, revise:</b> [Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

An optical fibre has a core of refractive index 1.50 and cladding of refractive index 1.45. Calculate the critical angle at the core-cladding boundary and the numerical aperture.

**Answer.** $\theta_c = \arcsin(1.45/1.50) = \arcsin(0.9667) = 75.2°$.

$\text{NA} = \sqrt{1.50^2 - 1.45^2} = \sqrt{2.25 - 2.1025} = \sqrt{0.1475} = 0.384$.

<b>If you get this wrong, revise:</b> [Acceptance Angle and Numerical Aperture](#acceptance-angle-and-numerical-aperture)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Explain why a diamond ($n = 2.42$) sparkles more than glass ($n = 1.50$).

**Answer.** The critical angle of diamond is $\theta_c = \arcsin(1/2.42) = 24.4°$, much smaller than glass ($41.8°$). Light entering a diamond is much more likely to strike internal surfaces at angles exceeding the critical angle, causing repeated TIR. This traps light inside the diamond for longer and directs it back towards the observer, creating the sparkle effect. Additionally, diamond has high dispersion, separating white light into colours.

<b>If you get this wrong, revise:</b> [Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A light ray enters a rectangular glass block ($n = 1.50$) at an angle of $30°$ to the normal. The block is surrounded by air. The ray strikes the opposite face. Calculate the angle of incidence at the opposite face and determine whether TIR occurs.

**Answer.** At entry: $1.00 \times \sin 30° = 1.50 \times \sin\theta_2$. $\sin\theta_2 = 0.5/1.50 = 0.333$. $\theta_2 = 19.5°$.

For a rectangular block with parallel faces, the angle of incidence at the opposite face equals the angle of refraction at the first face: $\theta_{\text{opposite}} = 19.5°$.

Since $19.5° < \theta_c = 41.8°$, TIR does not occur. The ray emerges from the block.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law) and [Condition for Total Internal Reflection](#condition-for-total-internal-reflection)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A prism has an apex angle of $60°$ and refractive index 1.50. A ray enters one face at $45°$ to the normal. Trace the ray through the prism, finding the angle of incidence at the second face and the angle of emergence.

**Answer.** At the first face: $\sin\theta_2 = \sin 45° / 1.50 = 0.707 / 1.50 = 0.471$. $\theta_2 = 28.1°$.

The angle of incidence at the second face: $\theta_3 = 60° - 28.1° = 31.9°$.

Since $31.9° < 41.8°$ (the critical angle), the ray emerges. At the second face: $1.50 \times \sin 31.9° = 1.00 \times \sin\theta_4$. $\sin\theta_4 = 1.50 \times 0.529 = 0.793$. $\theta_4 = 52.5°$.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law) and [Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>
