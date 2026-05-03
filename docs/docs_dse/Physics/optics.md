---
title: Optics
description: "DSE Physics optics notes covering reflection, refraction, total internal reflection, lenses, optical instruments, and the electromagnetic spectrum."
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

where $f$ is the focal length, $u$ is the object distance, and $v$ is the image distance. The
real-is-positive convention is used: distances are positive for real objects and images (in front of
the mirror) and negative for virtual ones (behind the mirror).

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

$\lvert m \rvert = 3$, so the image is magnified $3\times$. The negative sign (using this convention)
means upright.

Image height: $h_i = 3 \times 4 = 12 \mathrm{ cm}$, virtual and upright.

</details>

---

## Refraction

<PhetSimulation simulationId="bending-light" title="Bending Light" />

Explore the simulation above to develop intuition for this topic.

### Snell's Law

When light passes from one medium to another:

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

where $n$ is the refractive index and $\theta$ is the angle measured from the normal.

### Refractive Index

The refractive index of a medium is defined as:

$$n = \frac{\sin i}{\sin r} = \frac{c}{v}$$

where $c$ is the speed of light in vacuum and $v$ is the speed of light in the medium. Refractive
index is dimensionless and always $n \geqslant 1$ for transparent materials.

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

Speed in water: $v_w = \frac{c}{n_w} = \frac{3.0 \times 10^8}{1.33} = 2.26 \times 10^8 \mathrm{ m/s}$

Speed in glass: $v_g = \frac{c}{n_g} = \frac{3.0 \times 10^8}{1.52} = 1.97 \times 10^8 \mathrm{ m/s}$

</details>

---

## Total Internal Reflection

### Critical Angle

When light travels from a denser medium to a less dense medium, the angle of refraction exceeds the
angle of incidence. At the critical angle $\theta_c$, the refracted ray travels along the boundary:

$$\sin\theta_c = \frac{n_2}{n_1}$$

where $n_1 \gt n_2$. For angles of incidence greater than $\theta_c$, total internal reflection
occurs: all light is reflected back into the denser medium.

### Conditions for Total Internal Reflection

1. Light must travel from a denser medium to a less dense medium ($n_1 \gt n_2$).
2. The angle of incidence must exceed the critical angle ($\theta_i \gt \theta_c$).

### Applications

| Application          | Principle                                                                    |
| -------------------- | ---------------------------------------------------------------------------- |
| Optical fibres       | Light undergoes repeated TIR, guided along the fibre                         |
| Prismatic binoculars | TIR in prisms redirects light path                                           |
| Diamond brilliance   | Very high $n$ gives small $\theta_c \approx 24.4^\circ$, trapping most light |
| Mirages              | TIR in hot air layers near the ground                                        |

### Worked Example 3

Find the critical angle for a glass-air boundary where $n_{\mathrm{glass}} = 1.5$.

<details>
<summary>Solution</summary>

$$\sin\theta_c = \frac{n_{\mathrm{air}}}{n_{\mathrm{glass}}} = \frac{1.0}{1.5} = 0.667$$

$$\theta_c = 41.8^\circ$$

</details>

### Worked Example 3b

A glass fibre has core refractive index $1.50$ and cladding refractive index $1.45$. Light enters
the fibre at an angle of $20^\circ$ to the fibre axis. Does total internal reflection occur at the
core-cladding boundary?

<details>
<summary>Solution</summary>

The angle of incidence at the core-cladding boundary is measured from the normal to the boundary.
If the ray makes $20^\circ$ with the fibre axis, the angle with the normal to the core-cladding
boundary is:

$$\theta_i = 90^\circ - 20^\circ = 70^\circ$$

Critical angle:

$$\sin\theta_c = \frac{1.45}{1.50} = 0.967$$

$$\theta_c = 75.2^\circ$$

Since $\theta_i = 70^\circ \lt \theta_c = 75.2^\circ$, total internal reflection does **not** occur
for this ray at $20^\circ$ to the axis. The maximum acceptance angle from the axis would be
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

where $f$ is in metres and $P$ is in dioptres (D).

### Worked Example 4

An object is placed $20 \mathrm{ cm}$ from a convex lens of focal length $15 \mathrm{ cm}$. Find the
image position, nature, and magnification.

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{15} - \frac{1}{20} = \frac{4 - 3}{60} = \frac{1}{60}$$

$$v = 60 \mathrm{ cm}$$

The image is real, at $60 \mathrm{ cm}$ on the opposite side of the lens.

$$m = \frac{60}{20} = 3$$

The image is inverted and magnified 3 times.

</details>

### Worked Example 4b

Two thin lenses are placed in contact: a convex lens of focal length $10 \mathrm{ cm}$ and a
concave lens of focal length $15 \mathrm{ cm}$. An object is placed $30 \mathrm{ cm}$ from the
combination. Find the image position.

<details>
<summary>Solution</summary>

Combined power:

$$P = P_1 + P_2 = \frac{1}{0.10} + \frac{1}{-0.15} = 10 - 6.67 = 3.33 \mathrm{ D}$$

Combined focal length:

$$f = \frac{1}{P} = \frac{1}{3.33} = 0.300 \mathrm{ m} = 30.0 \mathrm{ cm}$$

Using the thin lens equation:

$$\frac{1}{v} = \frac{1}{30} - \frac{1}{30} = 0$$

This means the image is at infinity. An object placed at the focal point of the combination
produces parallel rays.

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

where $D = 25 \mathrm{ cm}$ is the least distance of distinct vision.

### Compound Microscope

Total magnification:

$$M = M_o \times M_e$$

where $M_o$ is the magnification of the objective lens and $M_e$ is the magnification of the
eyepiece.

### Astronomical Telescope

In normal adjustment (final image at infinity):

$$M = \frac{f_o}{f_e}$$

where $f_o$ is the focal length of the objective and $f_e$ is the focal length of the eyepiece.

---

## Dispersion

Dispersion is the splitting of white light into its constituent colours (spectrum) because different
wavelengths travel at different speeds in a medium, hence have different refractive indices.

For glass: $n_{\mathrm{violet}} \gt n_{\mathrm{red}}$, so violet light is refracted more than red
light.

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

*If you get this wrong, revise: Concave mirror image formation table and the mirror equation sign
convention.*

</details>
</details>

<details>
<summary>Problem 2: Snell's Law — Glass Block</summary>

Light enters a glass block ($n = 1.52$) from air at an angle of $55^\circ$ to the normal. Find the
angle of refraction.

<details>
<summary>Solution</summary>

$$\sin\theta_2 = \frac{n_1}{n_2}\sin\theta_1 = \frac{1.0}{1.52}\sin 55^\circ = \frac{0.8192}{1.52} = 0.539$$

$$\theta_2 = 32.6^\circ$$

*If you get this wrong, revise: Snell's law and refractive index definition.*

</details>
</details>

<details>
<summary>Problem 3: Critical Angle — Water-Diamond Interface</summary>

Find the critical angle for a water-diamond interface. ($n_{\mathrm{water}} = 1.33$,
$n_{\mathrm{diamond}} = 2.42$)

<details>
<summary>Solution</summary>

Since $n_{\mathrm{diamond}} \gt n_{\mathrm{water}}$, TIR occurs when light travels from diamond to
water:

$$\sin\theta_c = \frac{n_{\mathrm{water}}}{n_{\mathrm{diamond}}} = \frac{1.33}{2.42} = 0.5496$$

$$\theta_c = 33.3^\circ$$

*If you get this wrong, revise: Conditions for total internal reflection — the light must travel from
the denser to the less dense medium.*

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
side.

*If you get this wrong, revise: Thin lens equation and the convex lens image formation table.*

</details>
</details>

<details>
<summary>Problem 5: Diverging Lens — Virtual Image</summary>

A diverging lens has a focal length of $15 \mathrm{ cm}$. An object is placed $20 \mathrm{ cm}$
from the lens. Find the image position and magnification.

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{-15} - \frac{1}{20} = \frac{-4 - 3}{60} = \frac{-7}{60}$$

$$v = -8.57 \mathrm{ cm}$$

The negative sign indicates a virtual image, $8.57 \mathrm{ cm}$ on the same side as the object.

$$m = \frac{-8.57}{20} = -0.429$$

The image is upright (positive height) and diminished.

*If you get this wrong, revise: Sign convention for diverging lenses — $f$ is negative, and virtual
images have negative $v$.*

</details>
</details>

<details>
<summary>Problem 6: Concave Mirror — Virtual Image</summary>

An object $2 \mathrm{ cm}$ tall is placed $6 \mathrm{ cm}$ from a concave mirror of focal length
$10 \mathrm{ cm}$. Find the image position, height, and nature.

<details>
<summary>Solution</summary>

The object is inside $F$, so the image should be virtual, upright, and magnified.

$$\frac{1}{v} = \frac{1}{10} - \frac{1}{6} = \frac{3 - 5}{30} = \frac{-2}{30} = -\frac{1}{15}$$

$$v = -15 \mathrm{ cm}$$

Negative $v$ confirms a virtual image behind the mirror.

$$m = \frac{v}{u} = \frac{-15}{6} = -2.5$$

$\lvert m \rvert = 2.5$, image is magnified and upright.

$$h_i = 2.5 \times 2 = 5 \mathrm{ cm}$$

*If you get this wrong, revise: Concave mirror cases when the object is inside $F$ and the sign
convention for virtual images.*

</details>
</details>

<details>
<summary>Problem 7: Refraction — Water to Air</summary>

A light ray travels from water ($n = 1.33$) to air at an angle of incidence of $40^\circ$. Does total
internal reflection occur? If not, find the angle of refraction.

<details>
<summary>Solution</summary>

Critical angle for water-air:

$$\sin\theta_c = \frac{1.0}{1.33} = 0.752$$

$$\theta_c = 48.8^\circ$$

Since $\theta_i = 40^\circ \lt \theta_c = 48.8^\circ$, TIR does **not** occur.

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.33 \times \sin 40^\circ = 1.0 \times \sin\theta_2$$

$$\sin\theta_2 = 1.33 \times 0.6428 = 0.855$$

$$\theta_2 = 58.7^\circ$$

The refracted ray bends away from the normal (as expected going from denser to less dense).

*If you get this wrong, revise: Conditions for total internal reflection and Snell's law for light
going from denser to less dense media.*

</details>
</details>

<details>
<summary>Problem 8: Convex Lens — Object at 2F</summary>

An object is placed $30 \mathrm{ cm}$ from a convex lens of focal length $15 \mathrm{ cm}$. Find
the image position and magnification. What special case is this?

<details>
<summary>Solution</summary>

$$\frac{1}{v} = \frac{1}{15} - \frac{1}{30} = \frac{2 - 1}{30} = \frac{1}{30}$$

$$v = 30 \mathrm{ cm}$$

$$m = \frac{30}{30} = 1$$

The image is real, inverted, and the **same size** as the object. This is the special case where the
object is at $2F$ — the image forms at $2F'$ on the other side.

*If you get this wrong, revise: Convex lens image formation table — the case where the object is at
$2F$.*

</details>
</details>

<details>
<summary>Problem 9: Lens Power</summary>

A person has myopia with a far point of $50 \mathrm{ cm}$. What power of diverging lens is needed
to correct their vision?

<details>
<summary>Solution</summary>

The lens must form a virtual image of a distant object (at infinity) at the person's far point
($50 \mathrm{ cm}$):

$$u = \infty, \quad v = -50 \mathrm{ cm} = -0.50 \mathrm{ m}$$

$$\frac{1}{f} = \frac{1}{v} - \frac{1}{u} = \frac{1}{-0.50} - 0 = -2.0 \mathrm{ D}$$

A diverging lens of power $-2.0 \mathrm{ D}$ (focal length $-50 \mathrm{ cm}$) is needed.

*If you get this wrong, revise: Defects of vision and the sign convention for corrective lenses.*

</details>
</details>

<details>
<summary>Problem 10: Compound Microscope</summary>

A compound microscope has an objective lens of focal length $0.5 \mathrm{ cm}$ and an eyepiece of
focal length $2.0 \mathrm{ cm}$. The object is placed $0.6 \mathrm{ cm}$ from the objective. The
image formed by the objective is $15 \mathrm{ cm}$ from the eyepiece. Find the total magnification.

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

*If you get this wrong, revise: Compound microscope magnification formula and two-lens systems.*

</details>
</details>

<details>
<summary>Problem 11: Astronomical Telescope</summary>

An astronomical telescope has an objective lens of focal length $80 \mathrm{ cm}$ and an eyepiece of
focal length $4 \mathrm{ cm}$. Find the magnification in normal adjustment and the length of the
telescope.

<details>
<summary>Solution</summary>

In normal adjustment (final image at infinity):

$$M = \frac{f_o}{f_e} = \frac{80}{4} = 20$$

The length of the telescope is the sum of the focal lengths:

$$L = f_o + f_e = 80 + 4 = 84 \mathrm{ cm}$$

*If you get this wrong, revise: Astronomical telescope in normal adjustment and the meaning of tube
length.*

</details>
</details>

<details>
<summary>Problem 12: Plane Mirror — Multiple Reflections</summary>

Two plane mirrors are placed at $60^\circ$ to each other. A light ray strikes one mirror at an angle
of incidence of $40^\circ$. How many reflections does the ray undergo before exiting the mirror
system?

<details>
<summary>Solution</summary>

The angle between the mirrors is $\alpha = 60^\circ$. The number of reflections $n$ is determined by:

$$n = \left\lfloor \frac{180^\circ}{\alpha} \right\rfloor = \left\lfloor \frac{180}{60} \right\rfloor = 3$$

A ray trapped between two mirrors at $60^\circ$ undergoes at most $3$ reflections before exiting.
(Whether exactly 3 depends on the exact entry angle, but the maximum is 3.)

Alternatively, after each reflection the angle of incidence on the next mirror decreases by $60^\circ$.
Starting at $40^\circ$: second reflection at $20^\circ$, third reflection at $0^\circ$ (along the
normal) — after that the ray retraces its path and exits.

*If you get this wrong, revise: Law of reflection and how the angle of incidence changes at successive
mirror surfaces.*

</details>
</details>

<details>
<summary>Problem 13: Apparent Depth</summary>

A coin is at the bottom of a pool of water ($n = 1.33$) that is $2.0 \mathrm{ m}$ deep. How deep does
the coin appear to be when viewed from directly above?

<details>
<summary>Solution</summary>

The apparent depth formula (for near-normal viewing):

$$\mathrm{Apparent\ depth} = \frac{\mathrm{Real\ depth}}{n} = \frac{2.0}{1.33} = 1.50 \mathrm{ m}$$

The coin appears at $1.50 \mathrm{ m}$ below the surface, which is shallower than its actual
position.

*If you get this wrong, revise: Refraction and the relationship between real depth and apparent
depth.*

</details>
</details>

<details>
<summary>Problem 14: Optical Fibre — Maximum Acceptance Angle</summary>

An optical fibre has a core refractive index of $1.62$ and cladding refractive index of $1.52$. Find
the maximum acceptance angle (from the fibre axis) for light to undergo total internal reflection.

<details>
<summary>Solution</summary>

Critical angle at the core-cladding boundary:

$$\sin\theta_c = \frac{n_{\mathrm{cladding}}}{n_{\mathrm{core}}} = \frac{1.52}{1.62} = 0.9383$$

$$\theta_c = 69.7^\circ$$

The maximum angle with the normal at the boundary is $69.7^\circ$, which corresponds to a maximum
angle with the fibre axis of:

$$\theta_{\mathrm{max}} = 90^\circ - 69.7^\circ = 20.3^\circ$$

Light entering at angles less than $20.3^\circ$ to the axis will undergo total internal reflection.

*If you get this wrong, revise: Optical fibres, critical angle, and the relationship between the
angle to the axis and the angle to the normal.*

</details>
</details>

<details>
<summary>Problem 15: Dispersion — Prism</summary>

White light enters a glass prism ($n_{\mathrm{red}} = 1.51$, $n_{\mathrm{violet}} = 1.53$) at an
angle of incidence of $45^\circ$. The prism has an apex angle of $60^\circ$. Explain why the violet
light is deviated more than the red light and calculate the angle of refraction for each colour at
the first surface.

<details>
<summary>Solution</summary>

Since $n_{\mathrm{violet}} \gt n_{\mathrm{red}}$, violet light travels slower in the glass and is
refracted more at each surface.

**For red light:**

$$\sin\theta_{r,\mathrm{red}} = \frac{\sin 45^\circ}{1.51} = \frac{0.7071}{1.51} = 0.4683$$

$$\theta_{r,\mathrm{red}} = 27.9^\circ$$

**For violet light:**

$$\sin\theta_{r,\mathrm{violet}} = \frac{\sin 45^\circ}{1.53} = \frac{0.7071}{1.53} = 0.4622$$

$$\theta_{r,\mathrm{violet}} = 27.5^\circ$$

The violet ray is refracted through a smaller angle at the first surface ($27.5^\circ$ vs
$27.9^\circ$), meaning it bends more towards the normal. At the second surface, violet light also
bends more away from the normal, resulting in greater total deviation.

*If you get this wrong, revise: Dispersion, Snell's law applied at each prism surface, and how
refractive index varies with wavelength.*

For the A-Level treatment of this topic, see [Refraction and Total Internal Reflection](https://alevel.wyattau.com/docs/physics/waves/refraction-and-total-internal-reflection).

---

:::tip Diagnostic Test
Ready to test your understanding of **Optics**? The [diagnostic test](/Physics/diagnostics/diag-optics) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Optics with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/Physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::

</details>
</details>

