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

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

## 1. Refractive Index

**Definition.** The **refractive index** $n$ of a medium is the ratio of the speed of light in
vacuum to the speed of light in the medium:

$$\boxed{n = \frac{c}{v}}$$

Since $v < c$ for all material media, $n > 1$. The refractive index is a dimensionless quantity.

| Material | Refractive Index |
| -------- | ---------------- |
| Air      | 1.00             |
| Water    | 1.33             |
| Glass    | 1.50             |
| Diamond  | 2.42             |

**Intuition.** Light slows down in a denser medium because the electromagnetic wave interacts with
the electrons in the material. The denser the material (more electrons per unit volume), the slower
the light, and the higher the refractive index.

### Dispersion and the Refractive Index

The refractive index of a material is not constant — it depends on the wavelength of light. Shorter
wavelengths (blue/violet) are refracted more than longer wavelengths (red). This is because shorter
wavelengths interact more strongly with the electrons in the material.

For glass, a typical empirical relationship (Cauchy's equation) is:

$$n(\lambda) = A + \frac{B}{\lambda^2}$$

where $A$ and $B$ are constants specific to the material and $\lambda$ is the wavelength in vacuum.
This wavelength dependence is what causes white light to separate into a spectrum when passing
through a prism.

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

**Application: Diamond Cutting.** Diamond has an exceptionally high refractive index ($n = 2.42$)
and large dispersion. Jewellers cut diamonds with many angled facets so that light entering the top
of the diamond strikes the internal facets at angles well above the critical angle
($\theta_c = 24.4°$). The light is trapped inside by repeated TIR and eventually exits through the
top, directing brightness back towards the viewer. The large dispersion also splits white light into
a rainbow of colours, creating the characteristic "fire" of a diamond. A well-cut diamond has a
specific facet geometry (typically 57 facets in a round brilliant cut) optimised so that light
entering through the crown always hits pavilion facets at angles exceeding the critical angle.

## 2. Snell's Law

**Snell's Law.** At the boundary between two media with refractive indices $n_1$ and $n_2$:

$$\boxed{n_1 \sin\theta_1 = n_2 \sin\theta_2}$$

where $\theta_1$ is the angle of incidence and $\theta_2$ is the angle of refraction, both measured
from the normal.

### Derivation from Wave Theory (Huygens' Construction)

Consider a plane wavefront $AB$ arriving at the boundary between two media. Let the wave travel at
speed $v_1$ in medium 1 and $v_2$ in medium 2.

By the time point $B$ on the wavefront reaches the boundary at $B'$, point $A$ has already entered
medium 2 and travelled a distance $v_2 t$ as a secondary wavelet, where $t = BB'/v_1$.

The new wavefront is the tangent from $B'$ to the wavelet centred at $A$. The geometry gives:

$$\frac{\sin\theta_1}{\sin\theta_2} = \frac{BB'/AB'}{v_2 t / AB'} = \frac{BB'}{v_2 t} = \frac{v_1 t}{v_2 t} = \frac{v_1}{v_2}$$

Since $n = c/v$:

$$\frac{\sin\theta_1}{\sin\theta_2} = \frac{n_2}{n_1} \implies n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$\square$

### Derivation from Fermat's Principle

**Fermat's Principle** states that light travels between two points along the path that takes the
**least time**.

Consider a ray travelling from point $P$ in medium 1 to point $Q$ in medium 2, crossing the
boundary. Let the boundary be the $x$-axis, with $P$ at $(0, h_1)$ and $Q$ at $(d, -h_2)$. The ray
hits the boundary at $(x, 0)$.

The total travel time is:

$$t = \frac{\sqrt{x^2 + h_1^2}}{v_1} + \frac{\sqrt{(d-x)^2 + h_2^2}}{v_2}$$

For the minimum time, $dt/dx = 0$:

$$\frac{x}{v_1\sqrt{x^2 + h_1^2}} - \frac{d-x}{v_2\sqrt{(d-x)^2 + h_2^2}} = 0$$

Noting that $\sin\theta_1 = x/\sqrt{x^2 + h_1^2}$ and $\sin\theta_2 = (d-x)/\sqrt{(d-x)^2 + h_2^2}$:

$$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$$

$$\frac{n_1 \sin\theta_1}{c} = \frac{n_2 \sin\theta_2}{c} \implies n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$\square$

**Intuition.** When light enters a denser medium ($n_2 > n_1$), it bends **towards** the normal
($\theta_2 < \theta_1$). This is because one side of the wavefront slows down before the other,
causing the wavefront to pivot towards the normal.

### Worked Example: Light through a Glass Slab

A ray of light enters a glass slab ($n = 1.50$) from air at $\theta_1 = 40°$. The slab has parallel
faces.

**Step 1: At the first surface (air to glass).** $1.00 \times \sin 40° = 1.50 \times \sin\theta_2$.
$\theta_2 = \arcsin(0.643/1.50) = 25.4°$.

**Step 2: At the second surface (glass to air).** The ray hits the second surface at
$\theta_3 = 25.4°$ (equal to $\theta_2$ because the faces are parallel).
$1.50 \times \sin 25.4° = 1.00 \times \sin\theta_4$. $\theta_4 = 40°$.

**Result.** The emergent ray is parallel to the incident ray but laterally displaced. This lateral
displacement $d$ depends on the thickness $t$ of the slab:

$$d = t \cdot \sin\theta_1 \left(1 - \frac{\cos\theta_1}{\sqrt{n^2 - \sin^2\theta_1}}\right)$$

:::info Board Coverage AQA Paper 2 (required practical on refraction) | Edexcel CP2 | OCR (A) Paper
2 (core practical) | CIE P2 :::

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

**Derivation of why TIR only occurs from denser to less dense.** Snell's law gives
$\sin\theta_2 = \frac{n_1}{n_2}\sin\theta_1$. If $n_1 > n_2$, then $\frac{n_1}{n_2} > 1$ and
$\sin\theta_2$ can exceed 1 for sufficiently large $\theta_1$, which is impossible — so the light is
entirely reflected. If $n_1 < n_2$, then $\frac{n_1}{n_2} < 1$ and
$\sin\theta_2 < \sin\theta_1 \leq 1$ for all $\theta_1$, so refraction always occurs.

:::warning Common Pitfall TIR can only occur when light travels from a denser medium to a less dense
medium. Light going from air into glass can never undergo TIR, no matter how large the angle of
incidence. :::

<details>
<summary>Example: Critical Angle of Glass</summary>
<p>

The refractive index of glass is 1.50. Calculate the critical angle for glass-air boundary.

**Answer.** $\sin\theta_c = 1/1.50 = 0.667$. $\theta_c = \arcsin(0.667) = 41.8°$.

</p>
</details>

### Real-World Example: Mirages

On a hot day, the ground heats the air immediately above it. Hot air is less dense and has a
slightly lower refractive index than cooler air above. This creates a gradual decrease in refractive
index with height, forming a continuous gradient rather than a sharp boundary.

Light from the sky heading downward towards the ground encounters this gradient. The gradual bending
(continuous refraction) can cause the light to curve upwards, eventually undergoing TIR-like
behaviour when the angle relative to the horizontal exceeds the critical angle for the hot-to-cool
air transition. An observer sees this light as if it came from the ground, interpreting it as a pool
of water (a "mirage").

This is not true TIR (which requires a sharp boundary), but the principle is the same: light curves
away from regions of higher refractive index and can be totally reflected if the gradient is steep
enough.

### Evanescent Wave

When light is incident at a boundary at exactly the critical angle, the transmitted wave travels
along the boundary. For angles just beyond the critical angle, an **evanescent wave** penetrates a
short distance into the second medium. This wave carries no energy away from the boundary and decays
exponentially:

$$E = E_0 \, e^{-z/\delta}$$

where $\delta$ is the penetration depth and $z$ is the distance into the second medium. The
evanescent wave is exploited in technologies such as:

- **Frustrated total internal reflection**: placing another surface close to the boundary allows the
  evanescent wave to "tunnel" across the gap, converting TIR back into transmission.
- **Optical fibre sensors**: chemicals or biological molecules near the fibre surface can interact
  with the evanescent wave, changing the propagation and allowing detection.

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

## 4. Optical Fibres

Optical fibres use total internal reflection to guide light along a curved path.

### Structure

An optical fibre consists of:

- **Core**: denser medium (higher $n$), typically glass or plastic
- **Cladding**: less dense medium (lower $n$), surrounding the core

Light enters the fibre and undergoes repeated TIR at the core-cladding boundary, propagating along
the fibre with minimal loss.

### Acceptance Angle and Numerical Aperture

Light entering the fibre at too large an angle will not satisfy the TIR condition at the
core-cladding boundary.

For light entering from air into a fibre with core index $n_1$ and cladding index $n_2$:

At the core-cladding boundary, TIR requires: $\sin\theta_2 \geq \sin\theta_c = n_2/n_1$ (where
$\theta_2$ is measured from the normal to the core-cladding boundary).

At the air-core boundary (Snell's law):
$\sin\theta_{\max} = n_1\cos\theta_c = n_1\sqrt{1 - \sin^2\theta_c} = n_1\sqrt{1 - (n_2/n_1)^2} = \sqrt{n_1^2 - n_2^2}$.

The **numerical aperture** is:

$$\text{NA} = \sqrt{n_1^2 - n_2^2}$$

### Signal Degradation

Two main effects degrade the signal in optical fibres:

1. **Absorption**: some light energy is absorbed by the fibre material, reducing signal intensity.
2. **Dispersion**: different wavelengths travel at slightly different speeds, causing pulse
   broadening.
   - **Material dispersion**: the refractive index depends on wavelength.
   - **Modal dispersion**: rays entering at different angles travel different path lengths (in
     multimode fibres).

:::tip Exam Technique When asked about advantages of optical fibres over copper cables, mention:
higher bandwidth, no electromagnetic interference, lighter weight, no electrical sparking risk,
lower signal loss over long distances. :::

### Types of Optical Fibre

**Step-index multimode fibre.** The core has a uniform refractive index $n_1$ and the cladding has a
lower uniform index $n_2$. Light rays travel in zigzag paths, reflecting off the core-cladding
boundary. Rays entering at different angles take different path lengths, causing **modal
dispersion** — different rays arrive at different times, broadening the signal pulse. Step-index
fibres are suitable for short-distance communication (e.g., within buildings or vehicles).

**Graded-index fibre.** The refractive index of the core decreases gradually from the centre axis to
the cladding. Light rays follow curved (approximately sinusoidal) paths rather than sharp zigzags.
Rays that travel further from the axis pass through regions of lower refractive index, where they
travel faster. This compensates for the longer path length, significantly reducing modal dispersion.
Graded-index fibres are used for medium-distance links (e.g., LANs, cable television).

**Single-mode fibre.** The core is extremely narrow (typically 8 to 10 micrometres), so only one
mode (the axial ray) can propagate. This eliminates modal dispersion entirely. Single-mode fibres
are used for long-distance telecommunications (e.g., undersea cables spanning thousands of
kilometres).

| Fibre Type             | Core Diameter       | Dispersion               | Typical Use            |
| ---------------------- | ------------------- | ------------------------ | ---------------------- |
| Step-index multimode   | 50-200 micrometres  | High (modal)             | Short distance         |
| Graded-index multimode | 50-62.5 micrometres | Moderate                 | LANs, CCTV             |
| Single-mode            | 8-10 micrometres    | Very low (material only) | Long-distance telecoms |

### Applications of TIR and Optical Fibres

**Endoscopy.** Medical endoscopes use bundles of optical fibres (coherent and incoherent bundles) to
view inside the body. A **coherent bundle** has the fibres arranged in the same spatial pattern at
both ends, so an image is faithfully transmitted. An **incoherent bundle** carries illumination
light from an external source to the internal area. The surgeon views the image through an eyepiece
or on a screen. TIR ensures light stays within each individual fibre without leaking into
neighbouring fibres, maintaining image quality.

**Periscopes.** Submarine periscopes and some military periscopes use prisms rather than mirrors. A
right-angled triangular prism arranged so that light enters perpendicular to the hypotenuse face
hits the two shorter faces at 45°. Since glass typically has a critical angle of about 42°, the 45°
angle exceeds the critical angle, producing TIR. Prism periscopes are preferred over mirror
periscopes because TIR gives 100% reflection (no absorption by a metallic coating), and the
reflective surface is protected inside the glass, making it resistant to scratches and tarnishing.

:::info Board Coverage AQA Paper 2 (optical fibres in required practical) | Edexcel CP6 (medical
physics applications) | OCR (A) Paper 2 (quantum and waves) | CIE P2 :::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Light travels from air ($n = 1.00$) into water ($n = 1.33$) at an angle of incidence of $40°$.
Calculate the angle of refraction.

**Answer.** $1.00 \times \sin 40° = 1.33 \times \sin\theta_2$.
$\sin\theta_2 = \sin 40° / 1.33 = 0.6428 / 1.33 = 0.483$. $\theta_2 = \arcsin(0.483) = 28.9°$.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A glass block has refractive index 1.52. Calculate the critical angle for a glass-air boundary.

**Answer.** $\sin\theta_c = 1/1.52 = 0.658$. $\theta_c = 41.1°$.

<b>If you get this wrong, revise:</b>
[Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Light is incident on a glass-air boundary at $50°$. The refractive index of the glass is 1.50.
Determine whether total internal reflection occurs.

**Answer.** $\theta_c = \arcsin(1/1.50) = 41.8°$. Since $50° > 41.8°$, total internal reflection
occurs.

<b>If you get this wrong, revise:</b>
[Condition for Total Internal Reflection](#condition-for-total-internal-reflection)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A ray of light travels from glass ($n = 1.60$) into water ($n = 1.33$). Calculate the critical
angle.

**Answer.** $\sin\theta_c = n_2/n_1 = 1.33/1.60 = 0.831$. $\theta_c = \arcsin(0.831) = 56.2°$.

<b>If you get this wrong, revise:</b>
[Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

An optical fibre has a core of refractive index 1.50 and cladding of refractive index 1.45.
Calculate the critical angle at the core-cladding boundary and the numerical aperture.

**Answer.** $\theta_c = \arcsin(1.45/1.50) = \arcsin(0.9667) = 75.2°$.

$\text{NA} = \sqrt{1.50^2 - 1.45^2} = \sqrt{2.25 - 2.1025} = \sqrt{0.1475} = 0.384$.

<b>If you get this wrong, revise:</b>
[Acceptance Angle and Numerical Aperture](#acceptance-angle-and-numerical-aperture)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Explain why a diamond ($n = 2.42$) sparkles more than glass ($n = 1.50$).

**Answer.** The critical angle of diamond is $\theta_c = \arcsin(1/2.42) = 24.4°$, much smaller than
glass ($41.8°$). Light entering a diamond is much more likely to strike internal surfaces at angles
exceeding the critical angle, causing repeated TIR. This traps light inside the diamond for longer
and directs it back towards the observer, creating the sparkle effect. Additionally, diamond has
high dispersion, separating white light into colours.

<b>If you get this wrong, revise:</b>
[Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A light ray enters a rectangular glass block ($n = 1.50$) at an angle of $30°$ to the normal. The
block is surrounded by air. The ray strikes the opposite face. Calculate the angle of incidence at
the opposite face and determine whether TIR occurs.

**Answer.** At entry: $1.00 \times \sin 30° = 1.50 \times \sin\theta_2$.
$\sin\theta_2 = 0.5/1.50 = 0.333$. $\theta_2 = 19.5°$.

For a rectangular block with parallel faces, the angle of incidence at the opposite face equals the
angle of refraction at the first face: $\theta_{\text{opposite}} = 19.5°$.

Since $19.5° < \theta_c = 41.8°$, TIR does not occur. The ray emerges from the block.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law) and
[Condition for Total Internal Reflection](#condition-for-total-internal-reflection)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A prism has an apex angle of $60°$ and refractive index 1.50. A ray enters one face at $45°$ to the
normal. Trace the ray through the prism, finding the angle of incidence at the second face and the
angle of emergence.

**Answer.** At the first face: $\sin\theta_2 = \sin 45° / 1.50 = 0.707 / 1.50 = 0.471$.
$\theta_2 = 28.1°$.

The angle of incidence at the second face: $\theta_3 = 60° - 28.1° = 31.9°$.

Since $31.9° < 41.8°$ (the critical angle), the ray emerges. At the second face:
$1.50 \times \sin 31.9° = 1.00 \times \sin\theta_4$. $\sin\theta_4 = 1.50 \times 0.529 = 0.793$.
$\theta_4 = 52.5°$.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law) and
[Derivation of the Critical Angle](#derivation-of-the-critical-angle)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

An optical fibre has a core of refractive index 1.62 and cladding of refractive index 1.52. (a)
Calculate the critical angle at the core-cladding boundary. (b) Calculate the maximum angle of
incidence (acceptance angle) for light entering the fibre from air. (c) A pulse of light enters the
fibre at the acceptance angle. Calculate the path length per metre of fibre length for this ray, and
hence the additional distance compared to the axial ray.

**Answer.** (a) $\theta_c = \arcsin(1.52/1.62) = \arcsin(0.938) = 69.6°$.

(b) At the air-core boundary, the refracted angle inside the core is
$\theta_r = 90° - 69.6° = 20.4°$. Using Snell's law:
$\sin\theta_{\max} = 1.62 \times \sin 20.4° = 1.62 \times 0.349 = 0.565$.
$\theta_{\max} = \arcsin(0.565) = 34.4°$.

(c) For each zigzag segment, the ray travels a distance $\Delta s$ while advancing $\Delta z$ along
the fibre axis. $\Delta z = \Delta s \cos(20.4°)$, so
$\Delta s = \Delta z / \cos(20.4°) = 1.0 / 0.937 = 1.067$ m per metre of fibre. The additional
distance is $1.067 - 1.0 = 0.067$ m, or 6.7% longer. This demonstrates modal dispersion: rays at
larger angles travel further and arrive later.

<b>If you get this wrong, revise:</b> [Optical Fibres](#4-optical-fibres) and
[Acceptance Angle and Numerical Aperture](#acceptance-angle-and-numerical-aperture)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A 45°-90°-45° glass prism ($n = 1.50$) is used as a reflector. Light enters through one of the short
faces perpendicular to the face, hits the hypotenuse, and exits through the other short face. Show
that TIR occurs at the hypotenuse and determine the angle of the emergent ray.

**Answer.** The ray enters perpendicular to the short face, so it passes through undeviated and
strikes the hypotenuse at $45°$ to the normal of that face.

Since $\theta_c = \arcsin(1/1.50) = 41.8°$ and $45° > 41.8°$, TIR occurs at the hypotenuse.

The reflected ray exits through the other short face perpendicular to it (by symmetry of the 45°
reflection). The emergent ray is therefore perpendicular to the short face, i.e., the prism acts as
a perfect retroreflector for this geometry. The deviation is $90°$.

This is why such prisms are used in binoculars and periscopes — they give 100% reflection with no
metallic coating needed.

<b>If you get this wrong, revise:</b>
[Condition for Total Internal Reflection](#condition-for-total-internal-reflection)

</p>
</details>

<details>
<summary>Problem 11</summary>
<p>

Light travels from water ($n = 1.33$) into a glass block ($n = 1.50$). (a) Calculate the critical
angle for a water-glass boundary (if it exists). (b) A ray in the glass strikes the glass-water
boundary at $55°$ to the normal. Determine what happens.

**Answer.** (a) For TIR to be possible, light must travel from denser to less dense. Since
$n_{\text{glass}} = 1.50 > n_{\text{water}} = 1.33$, TIR is possible for light going from glass to
water. $\theta_c = \arcsin(1.33/1.50) = \arcsin(0.887) = 62.5°$.

(b) Since $55° < 62.5°$, the angle of incidence is below the critical angle. Refraction occurs.
Using Snell's law: $1.50 \times \sin 55° = 1.33 \times \sin\theta_2$.
$\sin\theta_2 = 1.50 \times 0.819 / 1.33 = 1.229 / 1.33 = 0.924$.
$\theta_2 = \arcsin(0.924) = 67.5°$. The ray refracts into the water, bending away from the normal.

<b>If you get this wrong, revise:</b>
[Derivation of the Critical Angle](#derivation-of-the-critical-angle) and
[Snell's Law](#2-snells-law)

</p>
</details>

<details>
<summary>Problem 12</summary>
<p>

A swimming pool appears shallower than it actually is. A pool of true depth 2.0 m is viewed from
above. (a) Calculate the apparent depth when viewed from directly above. (b) Calculate the apparent
depth when viewed at an angle of $30°$ to the vertical (from the normal). Take
$n_{\text{water}} = 1.33$.

**Answer.** (a) For near-normal viewing, the apparent depth is given by:
$d_{\text{apparent}} = d_{\text{real}} / n = 2.0 / 1.33 = 1.50$ m.

(b) At an angle of $30°$ to the vertical, a ray from the bottom of the pool refracts at the surface.
Using Snell's law: $1.33 \times \sin\theta_1 = 1.00 \times \sin\theta_2$, where $\theta_1$ is the
angle in water from the normal. The apparent position is found by tracing the refracted ray back.
For a pool of depth $d$ and viewing angle $\theta_2$:

$d_{\text{apparent}} = d \cdot \frac{\cos\theta_2}{\cos\theta_1}$

where $\theta_1 = \arcsin(\sin 30° / 1.33) = \arcsin(0.376) = 22.1°$.

$d_{\text{apparent}} = 2.0 \times \frac{\cos 30°}{\cos 22.1°} = 2.0 \times \frac{0.866}{0.927} = 2.0 \times 0.934 = 1.87$
m.

Note that the pool appears deeper when viewed at an angle than when viewed from directly above.

<b>If you get this wrong, revise:</b> [Snell's Law](#2-snells-law)

</p>
</details>

<details>
<summary>Problem 13</summary>
<p>

In a graded-index optical fibre, the refractive index varies as
$n(r) = n_1\sqrt{1 - 2\Delta(r/a)^2}$ for $r \lt a$ (inside the core), where $n_1 = 1.48$ is the
index on the axis, $a = 25$ micrometres is the core radius, and $\Delta = 0.01$. (a) Calculate the
refractive index at the core-cladding boundary ($r = a$). (b) Explain qualitatively why graded-index
fibres reduce modal dispersion compared to step-index fibres.

**Answer.** (a) At $r = a$:
$n(a) = 1.48\sqrt{1 - 2(0.01)(1)^2} = 1.48\sqrt{1 - 0.02} = 1.48\sqrt{0.98} = 1.48 \times 0.990 = 1.465$.

(b) In a step-index fibre, rays at steep angles travel a significantly longer path than axial rays,
arriving later and causing pulse broadening. In a graded-index fibre, rays that travel further from
the axis pass through regions of lower refractive index and therefore travel faster. This speed
increase partially compensates for the longer path length, so all rays arrive at approximately the
same time. The result is much less modal dispersion and therefore higher bandwidth for the same
fibre length.

<b>If you get this wrong, revise:</b> [Types of Optical Fibre](#types-of-optical-fibre) and
[Signal Degradation](#signal-degradation)

</p>
</details>
