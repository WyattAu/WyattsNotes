---
title: Optics
description:
  'DSE Physics optics notes covering reflection, refraction, total internal reflection, lenses,
  optical instruments, and the electromagnetic spectrum.'
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: dse-physics-optics
---

## Reflection

### Laws of Reflection

1. The incident ray, reflected ray, and normal all lie in the same plane.
2. The angle of incidence equals the angle of reflection: $\theta_i = \theta_r$.

### Image Formation by Plane Mirrors

| Property    | Value                            |
| ----------- | -------------------------------- |
| Size        | Same as object                   |
| Orientation | Laterally inverted               |
| Nature      | Virtual, upright                 |
| Distance    | Image distance = object distance |

### Image Formation by Curved Mirrors

#### Concave (Converging) Mirror

**Mirror equation:**

$$\frac{1}{f} = \frac{1}{u} + \frac{1}{v}$$

Where $f$ is the focal length, $u$ is the object distance, and $v$ is the image distance. The
Real-is-positive convention is used: distances are positive for real objects and images (in front of
The mirror) and negative for virtual ones (behind the mirror).

**Magnification:**

$$m = \frac{v}{u} = \frac{h_i}{h_o}$$

| Object Position     | Image Position      | Image Nature                |
| ------------------- | ------------------- | --------------------------- |
| Beyond $C$          | Between $C$ and $F$ | Real, inverted, diminished  |
| At $C$              | At $C$              | Real, inverted, same size   |
| Between $C$ and $F$ | Beyond $C$          | Real, inverted, magnified   |
| At $F$              | At infinity         | No image (parallel rays)    |
| Inside $F$          | Behind mirror       | Virtual, upright, magnified |

### Worked Example 1

An object is placed $15 \mathrm{ cm}$ in front of a concave mirror of focal length
$10 \mathrm{ cm}$. Find the image position and magnification.

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{10} - \frac{1}{15} = \frac{3 - 2}{30} = \frac{1}{30}$$

$$v = 30 \mathrm{ cm}$$

The image is real (positive $v$), at $30 \mathrm{ cm}$ in front of the mirror.

$$m = \frac{v}{u} = \frac{30}{15} = 2$$

The image is inverted and magnified by a factor of 2.

</details>

### Worked Example 1b

An object $4 \mathrm{ cm}$ tall is placed $8 \mathrm{ cm}$ from a concave mirror with focal length
$12 \mathrm{ cm}$. Describe the image.

<details>
<summary>Solution</summary>

The object is inside the focal length ($u \lt f$), so expect a virtual, upright, magnified image.

$$\frac{1}{v} = \frac{1}{12} - \frac{1}{8} = \frac{2 - 3}{24} = -\frac{1}{24}$$

$$v = -24 \mathrm{ cm}$$

Negative $v$ confirms a virtual image, $24 \mathrm{ cm}$ behind the mirror.

$$m = \frac{v}{u} = \frac{-24}{8} = -3$$

$\lvert m \rvert = 3$So the image is magnified $3\times$. The negative sign (using this convention)
Means upright.

Image height: $h_i = 3 \times 4 = 12 \mathrm{ cm}$Virtual and upright.

</details>

---

## Refraction

<PhetSimulation simulationId="bending-light" title="Bending Light" />

Explore the simulation above to develop intuition for this topic.

### Snell's Law

When light passes from one medium to another:

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

Where $n$ is the refractive index and $\theta$ is the angle measured from the normal.

### Refractive Index

The refractive index of a medium is defined as:

$$n = \frac{\sin i}{\sin r} = \frac{c}{v}$$

Where $c$ is the speed of light in vacuum and $v$ is the speed of light in the medium. Refractive
Index is dimensionless and always $n \geqslant 1$ for transparent materials.

### Worked Example 2

Light travels from air ($n = 1.0$) into glass ($n = 1.5$) at an angle of incidence of $40^\circ$.
Find the angle of refraction.

<details>
<summary>Solution</summary>

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.0 \times \sin 40^\circ = 1.5 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{\sin 40^\circ}{1.5} = \frac{0.6428}{1.5} = 0.4285$$

$$\theta_2 = 25.4^\circ$$

</details>

### Worked Example 2b

A light ray travels from water ($n = 1.33$) into glass ($n = 1.52$) at an angle of incidence of
$35^\circ$. Find the angle of refraction and the speed of light in each medium.

<details>
<summary>Solution</summary>

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.33 \times \sin 35^\circ = 1.52 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{1.33 \times 0.5736}{1.52} = \frac{0.7629}{1.52} = 0.502$$

$$\theta_2 = 30.1^\circ$$

Speed in water:
$v_w = \frac{c}{n_w} = \frac{3.0 \times 10^8}{1.33} = 2.26 \times 10^8 \mathrm{ m/s}$

Speed in glass:
$v_g = \frac{c}{n_g} = \frac{3.0 \times 10^8}{1.52} = 1.97 \times 10^8 \mathrm{ m/s}$

</details>

---

## Total Internal Reflection

### Critical Angle

When light travels from a denser medium to a less dense medium, the angle of refraction exceeds the
Angle of incidence. At the critical angle $\theta_c$The refracted ray travels along the boundary:

$$\sin\theta_c = \frac{n_2}{n_1}$$

Where $n_1 \gt n_2$. For angles of incidence greater than $\theta_c$Total internal reflection
Occurs: all light is reflected back into the denser medium.

### Conditions for Total Internal Reflection

1. Light must travel from a denser medium to a less dense medium ($n_1 \gt n_2$).
2. The angle of incidence must exceed the critical angle ($\theta_i \gt \theta_c$).

### Applications

| Application          | Principle                                                                  |
| -------------------- | -------------------------------------------------------------------------- |
| Optical fibres       | Light undergoes repeated TIR, guided along the fibre                       |
| Prismatic binoculars | TIR in prisms redirects light path                                         |
| Diamond brilliance   | Very high $n$ gives small $\theta_c \approx 24.4^\circ$Trapping most light |
| Mirages              | TIR in hot air layers near the ground                                      |

### Worked Example 3

Find the critical angle for a glass-air boundary where $n_{\mathrm{glass}} = 1.5$.

<details>
<summary>Solution</summary>

$$\sin\theta_c = \frac{n_{\mathrm{air}}}{n_{\mathrm{glass}}} = \frac{1.0}{1.5} = 0.667$$

$$\theta_c = 41.8^\circ$$

</details>

### Worked Example 3b

A glass fibre has core refractive index $1.50$ and cladding refractive index $1.45$. Light enters
The fibre at an angle of $20^\circ$ to the fibre axis. Does total internal reflection occur at the
Core-cladding boundary?

<details>
<summary>Solution</summary>

The angle of incidence at the core-cladding boundary is measured from the normal to the boundary. If
the ray makes $20^\circ$ with the fibre axis, the angle with the normal to the core-cladding
Boundary is:

$$\theta_i = 90^\circ - 20^\circ = 70^\circ$$

Critical angle:

$$\sin\theta_c = \frac{1.45}{1.50} = 0.967$$

$$\theta_c = 75.2^\circ$$

Since $\theta_i = 70^\circ \lt \theta_c = 75.2^\circ$Total internal reflection does **not** occur
For this ray at $20^\circ$ to the axis. The maximum acceptance angle from the axis would be
$90^\circ - 75.2^\circ = 14.8^\circ$.

</details>

---

## Lenses

### Thin Lens Equation

$$\frac{1}{f} = \frac{1}{u} + \frac{1}{v}$$

**Sign convention (real-is-positive):**

- $f$ is positive for converging (convex) lenses and negative for diverging (concave) lenses
- $u$ is positive for real objects
- $v$ is positive for real images, negative for virtual images

### Magnification

$$m = \frac{v}{u} = \frac{h_i}{h_o}$$

A positive $m$ indicates an upright image; a negative $m$ indicates an inverted image.

### Convex (Converging) Lens

| Object Position      | Image Position         | Image Nature                |
| -------------------- | ---------------------- | --------------------------- |
| Beyond $2F$          | Between $F'$ and $2F'$ | Real, inverted, diminished  |
| At $2F$              | At $2F'$               | Real, inverted, same size   |
| Between $F$ and $2F$ | Beyond $2F'$           | Real, inverted, magnified   |
| At $F$               | At infinity            | No image                    |
| Inside $F$           | Same side as object    | Virtual, upright, magnified |

### Power of a Lens

$$P = \frac{1}{f}$$

Where $f$ is in metres and $P$ is in dioptres (D).

### Worked Example 4

An object is placed $20 \mathrm{ cm}$ from a convex lens of focal length $15 \mathrm{ cm}$. Find the
Image position, nature, and magnification.

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{15} - \frac{1}{20} = \frac{4 - 3}{60} = \frac{1}{60}$$

$$v = 60 \mathrm{ cm}$$

The image is real, at $60 \mathrm{ cm}$ on the opposite side of the lens.

$$m = \frac{60}{20} = 3$$

The image is inverted and magnified 3 times.

</details>

### Worked Example 4b

Two thin lenses are placed in contact: a convex lens of focal length $10 \mathrm{ cm}$ and a Concave
lens of focal length $15 \mathrm{ cm}$. An object is placed $30 \mathrm{ cm}$ from the Combination.
Find the image position.

<details>
<summary>Solution</summary>

Combined power:

$$P = P_1 + P_2 = \frac{1}{0.10} + \frac{1}{-0.15} = 10 - 6.67 = 3.33 \mathrm{ D}$$

Combined focal length:

$$f = \frac{1}{P} = \frac{1}{3.33} = 0.300 \mathrm{ m} = 30.0 \mathrm{ cm}$$

Using the thin lens equation:

$$\frac{1}{v} = \frac{1}{30} - \frac{1}{30} = 0$$

This means the image is at infinity. An object placed at the focal point of the combination Produces
parallel rays.

</details>

---

## Optical Instruments

### The Eye

The eye acts as a converging lens system. The cornea and lens together form an image on the retina.

| Defect                   | Cause                           | Correction      |
| ------------------------ | ------------------------------- | --------------- |
| Myopia (short-sighted)   | Image forms in front of retina  | Diverging lens  |
| Hyperopia (long-sighted) | Image forms behind retina       | Converging lens |
| Presbyopia               | Lens loses flexibility with age | Bifocal lenses  |

### Angular Magnification of a Magnifying Glass

For a magnifying glass used with the image at infinity (relaxed eye):

$$M = \frac{D}{f}$$

Where $D = 25 \mathrm{ cm}$ is the least distance of distinct vision.

### Compound Microscope

Total magnification:

$$M = M_o \times M_e$$

Where $M_o$ is the magnification of the objective lens and $M_e$ is the magnification of the
Eyepiece.

### Astronomical Telescope

In normal adjustment (final image at infinity):

$$M = \frac{f_o}{f_e}$$

Where $f_o$ is the focal length of the objective and $f_e$ is the focal length of the eyepiece.

---

## Dispersion

Dispersion is the splitting of white light into its constituent colours (spectrum) because different
Wavelengths travel at different speeds in a medium, hence have different refractive indices.

For glass: $n_{\mathrm{violet}} \gt n_{\mathrm{red}}$So violet light is refracted more than red
Light.

---

## Common Pitfalls

- Forgetting that the mirror equation and lens equation use different sign conventions. Be
  consistent.
- Confusing real and virtual images. Real images can be projected onto a screen; virtual images
  cannot.
- Applying Snell's law incorrectly when light goes from a denser to a less dense medium. Always
  check which medium is which.
- For total internal reflection, forgetting both conditions: denser to less dense AND angle exceeds
  critical angle.
- In lens problems, forgetting that $f$ is positive for convex lenses and negative for concave
  lenses.

---

## Summary Table

| Topic            | Key Formula                         | Key Concept                              |
| ---------------- | ----------------------------------- | ---------------------------------------- |
| Reflection       | $\theta_i = \theta_r$               | Angle of incidence = angle of reflection |
| Mirror equation  | $1/f = 1/u + 1/v$                   | Image formation by mirrors               |
| Snell's Law      | $n_1\sin\theta_1 = n_2\sin\theta_2$ | Refraction at a boundary                 |
| Refractive index | $n = c/v$                           | Speed ratio                              |
| Critical angle   | $\sin\theta_c = n_2/n_1$            | TIR threshold                            |
| Lens equation    | $1/f = 1/u + 1/v$                   | Image formation by lenses                |
| Lens power       | $P = 1/f$                           | Dioptres                                 |
| Magnifying glass | $M = D/f$                           | Angular magnification                    |

---

## Problem Set

<details>
<summary>Problem 1: Concave Mirror — Object Beyond C</summary>

An object is placed $25 \mathrm{ cm}$ in front of a concave mirror with radius of curvature
$20 \mathrm{ cm}$. Find the image position and magnification.

<details>
<summary>Solution</summary>

$$f = \frac{R}{2} = \frac{20}{2} = 10 \mathrm{ cm}$$

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{10} - \frac{1}{25} = \frac{5 - 2}{50} = \frac{3}{50}$$

$$v = 16.7 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{16.7}{25} = 0.667$$

Real, inverted, diminished image at $16.7 \mathrm{ cm}$ in front of the mirror.

_If you get this wrong, revise: Concave mirror image formation table and the mirror equation sign
Convention._

</details>
</details>

<details>
<summary>Problem 2: Snell's Law — Glass Block</summary>

Light enters a glass block ($n = 1.52$) from air at an angle of $55^\circ$ to the normal. Find the
Angle of refraction.

<details>
<summary>Solution</summary>

$$\sin\theta_2 = \frac{n_1}{n_2}\sin\theta_1 = \frac{1.0}{1.52}\sin 55^\circ = \frac{0.8192}{1.52} = 0.539$$

$$\theta_2 = 32.6^\circ$$

_If you get this wrong, revise: Snell's law and refractive index definition._

</details>
</details>

<details>
<summary>Problem 3: Critical Angle — Water-Diamond Interface</summary>

Find the critical angle for a water-diamond interface. ($n_{\mathrm{water}} = 1.33$
$n_{\mathrm{diamond}} = 2.42$)

<details>
<summary>Solution</summary>

Since $n_{\mathrm{diamond}} \gt n_{\mathrm{water}}$TIR occurs when light travels from diamond to
Water:

$$\sin\theta_c = \frac{n_{\mathrm{water}}}{n_{\mathrm{diamond}}} = \frac{1.33}{2.42} = 0.5496$$

$$\theta_c = 33.3^\circ$$

_If you get this wrong, revise: Conditions for total internal reflection — the light must travel
from The denser to the less dense medium._

</details>
</details>

<details>
<summary>Problem 4: Convex Lens — Real Image</summary>

An object $3 \mathrm{ cm}$ tall is placed $12 \mathrm{ cm}$ from a convex lens of focal length
$8 \mathrm{ cm}$. Find the image height and nature.

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{8} - \frac{1}{12} = \frac{3 - 2}{24} = \frac{1}{24}$$

$$v = 24 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{24}{12} = 2$$

$$h_i = mh_o = 2 \times 3 = 6 \mathrm{ cm}$$

Real, inverted, magnified image of height $6 \mathrm{ cm}$ at $24 \mathrm{ cm}$ on the opposite
Side.

_If you get this wrong, revise: Thin lens equation and the convex lens image formation table._

</details>
</details>

<details>
<summary>Problem 5: Diverging Lens — Virtual Image</summary>

A diverging lens has a focal length of $15 \mathrm{ cm}$. An object is placed $20 \mathrm{ cm}$ From
the lens. Find the image position and magnification.

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{-15} - \frac{1}{20} = \frac{-4 - 3}{60} = \frac{-7}{60}$$

$$v = -8.57 \mathrm{ cm}$$

The negative sign indicates a virtual image, $8.57 \mathrm{ cm}$ on the same side as the object.

$$m = \frac{-8.57}{20} = -0.429$$

The image is upright (positive height) and diminished.

_If you get this wrong, revise: Sign convention for diverging lenses — $f$ is negative, and virtual
Images have negative $v$._

</details>
</details>

<details>
<summary>Problem 6: Concave Mirror — Virtual Image</summary>

An object $2 \mathrm{ cm}$ tall is placed $6 \mathrm{ cm}$ from a concave mirror of focal length
$10 \mathrm{ cm}$. Find the image position, height, and nature.

<details>
<summary>Solution</summary>

The object is inside $F$So the image should be virtual, upright, and magnified.

$$\frac{1}{v} = \frac{1}{10} - \frac{1}{6} = \frac{3 - 5}{30} = \frac{-2}{30} = -\frac{1}{15}$$

$$v = -15 \mathrm{ cm}$$

Negative $v$ confirms a virtual image behind the mirror.

$$m = \frac{v}{u} = \frac{-15}{6} = -2.5$$

$\lvert m \rvert = 2.5$Image is magnified and upright.

$$h_i = 2.5 \times 2 = 5 \mathrm{ cm}$$

_If you get this wrong, revise: Concave mirror cases when the object is inside $F$ and the sign
Convention for virtual images._

</details>
</details>

<details>
<summary>Problem 7: Refraction — Water to Air</summary>

A light ray travels from water ($n = 1.33$) to air at an angle of incidence of $40^\circ$. Does
total Internal reflection occur? If not, find the angle of refraction.

<details>
<summary>Solution</summary>

Critical angle for water-air:

$$\sin\theta_c = \frac{1.0}{1.33} = 0.752$$

$$\theta_c = 48.8^\circ$$

Since $\theta_i = 40^\circ \lt \theta_c = 48.8^\circ$TIR does **not** occur.

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.33 \times \sin 40^\circ = 1.0 \times \sin\theta_2$$

$$\sin\theta_2 = 1.33 \times 0.6428 = 0.855$$

$$\theta_2 = 58.7^\circ$$

The refracted ray bends away from the normal (as expected going from denser to less dense).

_If you get this wrong, revise: Conditions for total internal reflection and Snell's law for light
Going from denser to less dense media._

</details>
</details>

<details>
<summary>Problem 8: Convex Lens — Object at 2F</summary>

An object is placed $30 \mathrm{ cm}$ from a convex lens of focal length $15 \mathrm{ cm}$. Find The
image position and magnification. What special case is this?

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{15} - \frac{1}{30} = \frac{2 - 1}{30} = \frac{1}{30}$$

$$v = 30 \mathrm{ cm}$$

$$m = \frac{30}{30} = 1$$

The image is real, inverted, and the **same size** as the object. This is the special case where the
Object is at $2F$ — the image forms at $2F'$ on the other side.

_If you get this wrong, revise: Convex lens image formation table — the case where the object is at
$2F$._

</details>
</details>

<details>
<summary>Problem 9: Lens Power</summary>

A person has myopia with a far point of $50 \mathrm{ cm}$. What power of diverging lens is needed To
correct their vision?

<details>
<summary>Solution</summary>

The lens must form a virtual image of a distant object (at infinity) at the person's far point
($50 \mathrm{ cm}$):

$$u = \infty, \quad v = -50 \mathrm{ cm} = -0.50 \mathrm{ m}$$

$$\frac{1}{f} = \frac{1}{v} - \frac{1}{u} = \frac{1}{-0.50} - 0 = -2.0 \mathrm{ D}$$

A diverging lens of power $-2.0 \mathrm{ D}$ (focal length $-50 \mathrm{ cm}$) is needed.

_If you get this wrong, revise: Defects of vision and the sign convention for corrective lenses._

</details>
</details>

<details>
<summary>Problem 10: Compound Microscope</summary>

A compound microscope has an objective lens of focal length $0.5 \mathrm{ cm}$ and an eyepiece of
Focal length $2.0 \mathrm{ cm}$. The object is placed $0.6 \mathrm{ cm}$ from the objective. The
Image formed by the objective is $15 \mathrm{ cm}$ from the eyepiece. Find the total magnification.

<details>
<summary>Solution</summary>

**Objective lens:**

$$\frac{1}{v_o} = \frac{1}{0.5} - \frac{1}{0.6} = \frac{6 - 5}{3} = \frac{1}{3}$$

$$v_o = 3.0 \mathrm{ cm}$$

$$M_o = \frac{v_o}{u_o} = \frac{3.0}{0.6} = 5$$

**Eyepiece:**

The intermediate image acts as the object for the eyepiece:

$$u_e = 15 \mathrm{ cm}$$

$$\frac{1}{v_e} = \frac{1}{2.0} - \frac{1}{15} = \frac{15 - 2}{30} = \frac{13}{30}$$

$$v_e = 2.31 \mathrm{ cm}$$

$$M_e = \frac{v_e}{u_e} = \frac{2.31}{15} = 0.154$$

**Total magnification:**

$$M = M_o \times M_e = 5 \times 0.154 = 0.77$$

_If you get this wrong, revise: Compound microscope magnification formula and two-lens systems._

</details>
</details>

<details>
<summary>Problem 11: Astronomical Telescope</summary>

An astronomical telescope has an objective lens of focal length $80 \mathrm{ cm}$ and an eyepiece of
Focal length $4 \mathrm{ cm}$. Find the magnification in normal adjustment and the length of the
Telescope.

<details>
<summary>Solution</summary>

In normal adjustment (final image at infinity):

$$M = \frac{f_o}{f_e} = \frac{80}{4} = 20$$

The length of the telescope is the sum of the focal lengths:

$$L = f_o + f_e = 80 + 4 = 84 \mathrm{ cm}$$

_If you get this wrong, revise: Astronomical telescope in normal adjustment and the meaning of tube
Length._

</details>
</details>

<details>
<summary>Problem 12: Plane Mirror — Multiple Reflections</summary>

Two plane mirrors are placed at $60^\circ$ to each other. A light ray strikes one mirror at an angle
Of incidence of $40^\circ$. How many reflections does the ray undergo before exiting the mirror
System?

<details>
<summary>Solution</summary>

The angle between the mirrors is $\alpha = 60^\circ$. The number of reflections $n$ is determined
by:

$$n = \left\lfloor \frac{180^\circ}{\alpha} \right\rfloor = \left\lfloor \frac{180}{60} \right\rfloor = 3$$

A ray trapped between two mirrors at $60^\circ$ undergoes at most $3$ reflections before exiting.
(Whether exactly 3 depends on the exact entry angle, but the maximum is 3.)

Alternatively, after each reflection the angle of incidence on the next mirror decreases by
$60^\circ$. Starting at $40^\circ$: second reflection at $20^\circ$Third reflection at $0^\circ$
(along the Normal) — after that the ray retraces its path and exits.

_If you get this wrong, revise: Law of reflection and how the angle of incidence changes at
successive Mirror surfaces._

</details>
</details>

<details>
<summary>Problem 13: Apparent Depth</summary>

A coin is at the bottom of a pool of water ($n = 1.33$) that is $2.0 \mathrm{ m}$ deep. How deep
does The coin appear to be when viewed from directly above?

<details>
<summary>Solution</summary>

The apparent depth formula (for near-normal viewing):

$$\mathrm{Apparent\ depth} = \frac{\mathrm{Real\ depth}}{n} = \frac{2.0}{1.33} = 1.50 \mathrm{ m}$$

The coin appears at $1.50 \mathrm{ m}$ below the surface, which is shallower than its actual
Position.

_If you get this wrong, revise: Refraction and the relationship between real depth and apparent
Depth._

</details>
</details>

<details>
<summary>Problem 14: Optical Fibre — Maximum Acceptance Angle</summary>

An optical fibre has a core refractive index of $1.62$ and cladding refractive index of $1.52$. Find
The maximum acceptance angle (from the fibre axis) for light to undergo total internal reflection.

<details>
<summary>Solution</summary>

Critical angle at the core-cladding boundary:

$$\sin\theta_c = \frac{n_{\mathrm{cladding}}}{n_{\mathrm{core}}} = \frac{1.52}{1.62} = 0.9383$$

$$\theta_c = 69.7^\circ$$

The maximum angle with the normal at the boundary is $69.7^\circ$Which corresponds to a maximum
Angle with the fibre axis of:

$$\theta_{\mathrm{max}} = 90^\circ - 69.7^\circ = 20.3^\circ$$

Light entering at angles less than $20.3^\circ$ to the axis will undergo total internal reflection.

_If you get this wrong, revise: Optical fibres, critical angle, and the relationship between the
Angle to the axis and the angle to the normal._

</details>
</details>

<details>
<summary>Problem 15: Dispersion — Prism</summary>

White light enters a glass prism ($n_{\mathrm{red}} = 1.51$$n_{\mathrm{violet}} = 1.53$) at an Angle
of incidence of $45^\circ$. The prism has an apex angle of $60^\circ$. Explain why the violet Light
is deviated more than the red light and calculate the angle of refraction for each colour at The
first surface.

<details>
<summary>Solution</summary>

Since $n_{\mathrm{violet}} \gt n_{\mathrm{red}}$Violet light travels slower in the glass and is
Refracted more at each surface.

**For red light:**

$$\sin\theta_{r,\mathrm{red}} = \frac{\sin 45^\circ}{1.51} = \frac{0.7071}{1.51} = 0.4683$$

$$\theta_{r,\mathrm{red}} = 27.9^\circ$$

**For violet light:**

$$\sin\theta_{r,\mathrm{violet}} = \frac{\sin 45^\circ}{1.53} = \frac{0.7071}{1.53} = 0.4622$$

$$\theta_{r,\mathrm{violet}} = 27.5^\circ$$

The violet ray is refracted through a smaller angle at the first surface ($27.5^\circ$ vs
$27.9^\circ$), meaning it bends more towards the normal. At the second surface, violet light also
Bends more away from the normal, resulting in greater total deviation.

_If you get this wrong, revise: Dispersion, Snell's law applied at each prism surface, and how
Refractive index varies with wavelength._

For the A-Level treatment of this topic, see
[Refraction and Total Internal Reflection](https://alevel.wyattau.com/docs/physics/waves/refraction-and-total-internal-reflection).

---

:::tip Tip Ready to test your understanding of **Optics**? The
[diagnostic test](/docs/dse/Physics/diagnostics/diag-optics) contains the hardest questions within
the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Optics with
other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

---

## Derivations

### Derivation: Critical Angle for Total Internal Reflection

Total internal reflection occurs when light travelling from a denser medium (refractive index $n_1$)
To a less dense medium ($n_2$) strikes the boundary at an angle greater than the critical angle. At
the critical angle $\theta_c$The refracted ray travels along the boundary ($\theta_r = 90^\circ$):

$$n_1 \sin\theta_c = n_2 \sin 90^\circ = n_2$$

$$\sin\theta_c = \frac{n_2}{n_1}$$

For light going from glass ($n_1 = 1.5$) to air ($n_2 = 1.0$):

$$\sin\theta_c = \frac{1.0}{1.5} = 0.667 \implies \theta_c = 41.8^\circ$$

Total internal reflection only occurs when light travels from a denser to a less dense medium
($n_1 > n_2$), because otherwise $\sin\theta_c > 1$ which is impossible.

### Derivation: Thin Lens Equation

For a thin converging lens, consider a ray from the top of an object at distance $u$ from the Lens,
passing through the lens and forming an image at distance $v$. By similar triangles formed With the
principal axis and the focal point:

From the object side: $\frac{h_o}{u} = \frac{h_i}{v}$ (magnification triangles)

From the focal point triangles:

$$\frac{h_o}{u - f} = \frac{h_i}{f} \quad \text{and} \quad \frac{h_o}{f} = \frac{h_i}{v - f}$$

From the second pair: $\frac{h_o}{f} = \frac{h_i}{v - f}$

Combining with the magnification $m = h_i/h_o = v/u$:

$$\frac{1}{f} = \frac{h_o}{h_i \cdot f} = \frac{1}{(v - f)} \cdot \frac{v}{u}$$

After simplification:

$$\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$$

This is the thin lens equation. The sign convention used in DSE is the **real-is-positive**
Convention: real objects have $u > 0$Real images have $v > 0$And converging lenses have $f > 0$.

### Derivation: Minimum Deviation by a Prism

A ray passes through a prism of refractive index $n$ and apex angle $A$. At minimum deviation
$D_m$The ray passes symmetrically through the prism:

$$\theta_1 = \theta_2 = \frac{A + D_m}{2}$$

The angle of incidence at each face equals the angle of emergence. At the first face, by Snell's
Law:

$$n = \frac{\sin\theta_1}{\sin r_1}$$

At minimum deviation, the ray inside the prism is parallel to the base, so $r_1 = r_2 = A/2$:

$$n = \frac{\sin\left(\frac{A + D_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}$$

This is the prism formula. Rearranging allows determination of $n$ by measuring $A$ and $D_m$.

---

## Experimental Methods

### Determining the Refractive Index of a Glass Block

**Apparatus:** A rectangular glass block, four pins, a protractor, a ruler, and a sheet of paper.

**Procedure:**

1. Place the glass block on the paper and trace its outline.
2. Draw a normal at the point of entry. Insert pins P1 and P2 to define the incident ray.
3. Looking through the block from the other side, insert pins P3 and P4 so they appear in line with
   the images of P1 and P2.
4. Remove the block and draw the refracted ray through P3 and P4.
5. Measure the angle of incidence $\theta_i$ and angle of refraction $\theta_r$.
6. Repeat for several angles and plot $\sin\theta_i$ (y-axis) versus $\sin\theta_r$ (x-axis).
7. The gradient equals the refractive index $n$.

**Sources of error:**

- Difficulty aligning the pins precisely (parallax error).
- The glass block may not be perfectly rectangular.
- The faces of the block may not be perfectly parallel.

### Measuring the Focal Length of a Converging Lens

**Method 1: Distant object method** Focus the image of a distant object (e.g., a window or lamp
outside the laboratory) on a screen. The image distance approximately equals the focal length $f$.

**Method 2: Lens formula method**

1. Place a illuminated object (e.g., a lit wire mesh) at a measured distance $u$ from the lens.
2. Move the screen until a sharp image is formed. Record the image distance $v$.
3. Repeat for different values of $u$.
4. Plot $1/v$ (y-axis) versus $1/u$ (x-axis). The intercepts on both axes give $1/f$.
5. Alternatively, plot $uv$ (y-axis) versus $(u + v)$ (x-axis). The gradient equals $f$.

**Method 3: Magnification method** Since $m = v/u$ and
$\frac{1}{f} = \frac{1}{u} + \frac{1}{v} = \frac{m + 1}{v}$:

Plot $m$ (y-axis) versus $v$ (x-axis). The gradient equals $1/f$.

### Determining the Critical Angle and Refractive Index of a Semi-Circular Block

**Apparatus:** A semi-circular glass block, a ray box, and a protractor.

**Procedure:**

1. Place the semi-circular block on paper with the flat face along a marked line.
2. Direct a ray of light towards the centre of the flat face.
3. Vary the angle of incidence until the refracted ray just disappears (the reflected ray suddenly
   becomes much brighter).
4. This is the critical angle $\theta_c$. Measure it with a protractor.
5. Calculate: $n = 1/\sin\theta_c$.

**Key point:** The ray is directed at the **centre** of the flat face so that it strikes the Curved
surface at normal incidence (no refraction at the curved surface). Only refraction at The flat face
matters.

---

## Data Analysis and Uncertainty

### Uncertainty in Refractive Index Measurements

When determining $n$ from $\sin\theta_i = n\sin\theta_r$:

If plotting $\sin\theta_i$ versus $\sin\theta_r$The gradient gives $n$. The uncertainty in the
Gradient is found from the line of best fit and worst-fit lines.

**Example:** A student measures $\theta_i = (40 \pm 1)^\circ$ and $\theta_r = (25 \pm 1)^\circ$.

$$n = \frac{\sin 40^\circ}{\sin 25^\circ} = \frac{0.6428}{0.4226} = 1.521$$

$$\frac{\Delta n}{n} = \sqrt{\left(\frac{\cos\theta_i \cdot \Delta\theta_i}{\sin\theta_i}\right)^2 + \left(\frac{\cos\theta_r \cdot \Delta\theta_r}{\sin\theta_r}\right)^2}$$

Converting $\Delta\theta = 1^\circ = 0.0175 \mathrm{ rad}$:

$$\frac{\Delta n}{n} = \sqrt{\left(\frac{0.766 \times 0.0175}{0.6428}\right)^2 + \left(\frac{0.906 \times 0.0175}{0.4226}\right)^2} = \sqrt{(0.0208)^2 + (0.0376)^2} = \sqrt{0.000433 + 0.001414} = \sqrt{0.001847} = 0.0430 = 4.3\%$$

$$\Delta n = 0.043 \times 1.521 = 0.065$$

$$n = (1.52 \pm 0.07)$$

---

## Additional Worked Examples

### Worked Example 11

A glass fibre (core refractive index $1.50$Cladding refractive index $1.45$) is used for Total
internal reflection.

(a) Calculate the critical angle at the core-cladding boundary.

(b) Light enters the fibre end at an angle of $20^\circ$ to the axis. Show whether the light
Undergoes total internal reflection inside the fibre.

<details>
<summary>Solution</summary>

(a) $\sin\theta_c = \frac{n_{\mathrm{cladding}}}{n_{\mathrm{core}}} = \frac{1.45}{1.50} = 0.967$

$$\theta_c = \sin^{-1}(0.967) = 75.2^\circ$$

(b) The light enters the fibre and refracts. At the core-cladding boundary, the angle of Incidence
(measured from the normal to the boundary) is $90^\circ - 20^\circ = 70^\circ$.

Since $70^\circ < \theta_c = 75.2^\circ$The light does **not** undergo total internal Reflection.
The maximum entry angle for total internal reflection is found from:

$$n_{\mathrm{air}}\sin\theta_{\max} = n_{\mathrm{core}}\sin(90^\circ - \theta_c) = 1.50 \times \sin 14.8^\circ = 1.50 \times 0.256 = 0.383$$

$$\theta_{\max} = \sin^{-1}(0.383) = 22.5^\circ$$

An entry angle of $20^\circ$ is less than $22.5^\circ$So the light does undergo TIR. (Note: The
angle of incidence at the boundary is $90^\circ - \theta_{\mathrm{refracted}}$ inside the Fibre, not
$90^\circ - 20^\circ$. A full calculation using Snell's law at the entry face is Needed.)

</details>

### Worked Example 12

An object of height $3.0 \mathrm{ cm}$ is placed $20 \mathrm{ cm}$ from a converging lens of Focal
length $15 \mathrm{ cm}$. Find the image position, height, and nature (real/virtual,
Upright/inverted, magnified/diminished).

<details>
<summary>Solution</summary>

Using the thin lens equation: $\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$

$$\frac{1}{15} = \frac{1}{v} + \frac{1}{20}$$

$$\frac{1}{v} = \frac{1}{15} - \frac{1}{20} = \frac{4 - 3}{60} = \frac{1}{60}$$

$$v = 60 \mathrm{ cm}$$

Magnification: $m = \frac{v}{u} = \frac{60}{20} = 3.0$

Image height: $h_i = m \times h_o = 3.0 \times 3.0 = 9.0 \mathrm{ cm}$

The image is **real** ($v > 0$), **inverted** ($m > 0$ with real-is-positive convention), and
**magnified** ($|m| > 1$). It forms $60 \mathrm{ cm}$ on the opposite side of the lens.

</details>

### Worked Example 13

Light of wavelength $590 \mathrm{ nm}$ is incident normally on a diffraction grating with
$400 \mathrm{ lines/mm}$. Calculate the angles of the first two orders and the maximum number Of
orders visible.

<details>
<summary>Solution</summary>

$$d = \frac{1}{400 \times 10^3} = 2.50 \times 10^{-6} \mathrm{ m}$$

First order ($n = 1$):

$$\sin\theta_1 = \frac{\lambda}{d} = \frac{590 \times 10^{-9}}{2.50 \times 10^{-6}} = 0.236$$

$$\theta_1 = \sin^{-1}(0.236) = 13.6^\circ$$

Second order ($n = 2$):

$$\sin\theta_2 = \frac{2\lambda}{d} = 0.472$$

$$\theta_2 = \sin^{-1}(0.472) = 28.2^\circ$$

Maximum order:
$n_{\max} = \frac{d}{\lambda} = \frac{2.50 \times 10^{-6}}{590 \times 10^{-9}} = 4.24$

Maximum number of orders = **4** (since $n$ must be an integer and $\sin\theta \leq 1$).

</details>

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A student investigates refraction using a rectangular glass block. She measures the angle of
Incidence and angle of refraction for several rays.

| Angle of incidence $\theta_i$ ($^\circ$) | Angle of refraction $\theta_r$ ($^\circ$) |
| ---------------------------------------- | ----------------------------------------- |
| 15                                       | 10                                        |
| 30                                       | 19                                        |
| 45                                       | 28                                        |
| 60                                       | 35                                        |
| 75                                       | 40                                        |

(a) Plot a graph of $\sin\theta_i$ against $\sin\theta_r$ and determine the refractive index of The
glass.

(b) Calculate the critical angle for the glass-air boundary.

(c) The student estimates the angular uncertainty as $\pm 1^\circ$. Calculate the uncertainty in The
refractive index.

(d) Explain why total internal reflection cannot occur when light travels from air into glass.

<details>
<summary>Solution</summary>

(a)

| $\sin\theta_i$ | $\sin\theta_r$ |
| -------------- | -------------- |
| 0.259          | 0.174          |
| 0.500          | 0.326          |
| 0.707          | 0.469          |
| 0.866          | 0.574          |
| 0.966          | 0.643          |

Gradient of line of best fit
$= \frac{\Delta\sin\theta_i}{\Delta\sin\theta_r} \approx \frac{0.966 - 0.259}{0.643 - 0.174} = \frac{0.707}{0.469} = 1.51$

The refractive index $n = 1.51$.

(b) $\sin\theta_c = \frac{1}{n} = \frac{1}{1.51} = 0.662$

$$\theta_c = \sin^{-1}(0.662) = 41.5^\circ$$

(c) The uncertainty in $n$ from the graph is estimated from the worst-fit lines. For a single Data
point at $\theta_i = 45^\circ$$\theta_r = 28^\circ$:

$\Delta\theta = 1^\circ = 0.0175 \mathrm{ rad}$

$\sin(45 \pm 1) = 0.707 \pm 0.012$$\sin(28 \pm 1) = 0.469 \pm 0.015$

The percentage uncertainty in $n$ from the gradient depends on the spread of the worst-fit lines.
Approximately: $\frac{\Delta n}{n} \approx 3\%$ to $5\%$Giving $\Delta n \approx 0.05$ to $0.08$.

(d) Total internal reflection requires light to travel from a denser medium ($n_1$) to a less Dense
medium ($n_2$), so that $\sin\theta_c = n_2/n_1 < 1$. When light travels from air ($n = 1.0$) to
glass ($n = 1.51$), the equivalent critical angle would have
$\sin\theta_c = 1.51/1.0 = 1.51 > 1$Which is impossible. Therefore TIR cannot occur.

</details>

### Question 2 (DSE Structured)

A compound microscope consists of an objective lens of focal length $0.5 \mathrm{ cm}$ and an
Eyepiece lens of focal length $2.5 \mathrm{ cm}$. The two lenses are separated by $15 \mathrm{ cm}$.
An object is placed $0.6 \mathrm{ cm}$ from the objective lens.

(a) Calculate the position of the image formed by the objective lens.

(b) Calculate the position of the final image formed by the eyepiece.

(c) Calculate the total magnification of the microscope.

(d) State two differences between a compound microscope and an astronomical telescope.

<details>
<summary>Solution</summary>

(a) Objective lens: $u_1 = 0.6 \mathrm{ cm}$$f_1 = 0.5 \mathrm{ cm}$

$$\frac{1}{v_1} = \frac{1}{f_1} - \frac{1}{u_1} = \frac{1}{0.5} - \frac{1}{0.6} = 2.0 - 1.667 = 0.333$$

$$v_1 = 3.0 \mathrm{ cm}$$

The objective forms a real, inverted, magnified image $3.0 \mathrm{ cm}$ from the objective.

(b) This image acts as the object for the eyepiece. The distance from the eyepiece is:

$$u_2 = 15 - 3.0 = 12.0 \mathrm{ cm}$$

$$\frac{1}{v_2} = \frac{1}{f_2} - \frac{1}{u_2} = \frac{1}{2.5} - \frac{1}{12.0} = 0.400 - 0.0833 = 0.317$$

$$v_2 = 3.16 \mathrm{ cm}$$

The final image is real, formed $3.16 \mathrm{ cm}$ from the eyepiece on the opposite side.

(c) Magnification of objective: $m_1 = \frac{v_1}{u_1} = \frac{3.0}{0.6} = 5.0$

Magnification of eyepiece: $m_2 = \frac{v_2}{u_2} = \frac{3.16}{12.0} = 0.263$

Total magnification: $M = m_1 \times m_2 = 5.0 \times 0.263 = 1.3$

(Note: In a normal microscope, the final image is virtual at the near point. The calculation Above
gives a real image because the object is not at the standard position. The Eyepiece is used as a
magnifying glass with the intermediate image at its focal point.)

(d) Two differences:

1. A microscope is used to view nearby objects; a telescope is used to view distant objects.
2. In a microscope, the objective forms a real, magnified image; in a telescope, the objective forms
   a real, diminished image at its focal point.

</details>

### Question 3 (DSE Structured)

A ray of white light strikes one face of an equilateral glass prism ($60^\circ$) at an angle of
Incidence of $45^\circ$. The refractive index of the glass for red light is $1.514$ and for Violet
light is $1.532$.

(a) Calculate the angle of refraction at the first face for red light.

(b) Calculate the angle of incidence at the second face for red light.

(c) Calculate the angle of emergence for red light.

(d) Calculate the angle of deviation for red light.

(e) Calculate the angular dispersion between red and violet light.

<details>
<summary>Solution</summary>

(a) At the first face: $n\sin\theta_r = \sin\theta_i$

$$1.514\sin\theta_r = \sin 45^\circ = 0.7071$$

$$\sin\theta_r = \frac{0.7071}{1.514} = 0.467$$

$$\theta_r = 27.8^\circ$$

(b) The angle of incidence at the second face:

$$\theta_{i2} = A - \theta_r = 60^\circ - 27.8^\circ = 32.2^\circ$$

(c) At the second face: $n\sin\theta_{i2} = \sin\theta_{e}$

$$\sin\theta_e = 1.514 \times \sin 32.2^\circ = 1.514 \times 0.533 = 0.807$$

$$\theta_e = 53.8^\circ$$

(d) Deviation: $D = \theta_i + \theta_e - A = 45^\circ + 53.8^\circ - 60^\circ = 38.8^\circ$

(e) For violet light:

$$\sin\theta_{r,\mathrm{violet}} = \frac{\sin 45^\circ}{1.532} = \frac{0.7071}{1.532} = 0.462$$

$$\theta_{r,\mathrm{violet}} = 27.5^\circ$$

$$\theta_{i2,\mathrm{violet}} = 60^\circ - 27.5^\circ = 32.5^\circ$$

$$\sin\theta_{e,\mathrm{violet}} = 1.532 \times \sin 32.5^\circ = 1.532 \times 0.537 = 0.823$$

$$\theta_{e,\mathrm{violet}} = 55.4^\circ$$

$$D_{\mathrm{violet}} = 45^\circ + 55.4^\circ - 60^\circ = 40.4^\circ$$

Angular dispersion: $\Delta D = 40.4^\circ - 38.8^\circ = 1.6^\circ$

</details>

### Question 4 (DSE Structured)

(a) Explain what is meant by the term "wavefront".

(b) State Huygens' principle.

(c) Use Huygens' principle to explain why a wave spreads out when passing through a narrow gap.

(d) A plane wave of wavelength $0.5 \mathrm{ m}$ passes through a gap of width $1.0 \mathrm{ m}$.
Describe the diffraction pattern observed and explain how it differs if the gap width is Reduced to
$0.3 \mathrm{ m}$.

<details>
<summary>Solution</summary>

(a) A wavefront is a surface (or line in 2D) on which all points are in phase. For a plane wave,
Wavefronts are parallel lines or planes. For a circular wave, wavefronts are concentric circles.

(b) Huygens' principle states that every point on a wavefront acts as a source of secondary
Wavelets. These wavelets spread out at the wave speed. The new wavefront at a later time is The
envelope (tangent surface) of all these secondary wavelets.

(c) When a plane wave passes through a narrow gap, each point within the gap acts as a source Of
secondary wavelets (by Huygens' principle). These wavelets spread out in all directions Beyond the
gap. The new wavefront is no longer plane but curved, causing the wave to spread Out (diffract). The
narrower the gap relative to the wavelength, the more the wave spreads out, Because fewer secondary
sources contribute and their curved wavelets dominate.

(d) With a gap of $1.0 \mathrm{ m}$ ($d/\lambda = 2$), moderate diffraction occurs. The wave Spreads
out somewhat beyond the gap, but there is still a relatively well-defined beam Direction with some
spreading at the edges.

With a gap of $0.3 \mathrm{ m}$ ($d/\lambda = 0.6$Gap is smaller than the wavelength), very
Significant diffraction occurs. The wave spreads out into a wide semicircular pattern beyond The
gap, similar to a point source. The wavefront is almost completely circular.

</details>

### Question 5 (DSE Structured)

(a) Explain the difference between a real image and a virtual image.

(b) An object is placed $8.0 \mathrm{ cm}$ from a diverging lens of focal length $12 \mathrm{ cm}$.
Find the image position, magnification, and nature.

(c) A converging lens forms an image of an object on a screen placed $50 \mathrm{ cm}$ from the
Lens. The image is three times the size of the object. Find the focal length of the lens and The
object distance.

<details>
<summary>Solution</summary>

(a) A **real image** is formed where light rays actually converge. It can be projected onto a Screen
and is always inverted. A **virtual image** is formed where light rays only appear to Diverge from;
the rays do not actually pass through the image position. It cannot be projected Onto a screen and
is always upright.

(b) For a diverging lens, $f = -12 \mathrm{ cm}$ (using real-is-positive convention).

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{-12} - \frac{1}{8} = -\frac{1}{12} - \frac{1}{8} = \frac{-2 - 3}{24} = -\frac{5}{24}$$

$$v = -4.8 \mathrm{ cm}$$

The negative sign indicates a virtual image, $4.8 \mathrm{ cm}$ from the lens on the same Side as
the object.

$$m = \frac{v}{u} = \frac{-4.8}{8} = -0.60$$

The image is **virtual**, **upright**, and **diminished** (60% of the object height).

(c) The image is real (on a screen), so $v = +50 \mathrm{ cm}$.

Since $m = 3$ and the image is real (inverted): $|m| = v/u = 3$So
$u = v/3 = 50/3 = 16.7 \mathrm{ cm}$.

$$\frac{1}{f} = \frac{1}{v} + \frac{1}{u} = \frac{1}{50} + \frac{1}{16.7} = 0.0200 + 0.0599 = 0.0799$$

$$f = 12.5 \mathrm{ cm}$$

</details>

</details>

</details>
