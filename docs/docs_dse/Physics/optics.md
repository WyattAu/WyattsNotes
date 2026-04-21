---
title: Optics
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

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{10} - \frac{1}{15} = \frac{3 - 2}{30} = \frac{1}{30}$$

$$v = 30 \mathrm{ cm}$$

The image is real (positive $v$), at $30 \mathrm{ cm}$ in front of the mirror.

$$m = \frac{v}{u} = \frac{30}{15} = 2$$

The image is inverted and magnified by a factor of 2.

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

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.0 \times \sin 40^\circ = 1.5 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{\sin 40^\circ}{1.5} = \frac{0.6428}{1.5} = 0.4285$$

$$\theta_2 = 25.4^\circ$$

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

$$\sin\theta_c = \frac{n_{\mathrm{air}}}{n_{\mathrm{glass}}} = \frac{1.0}{1.5} = 0.667$$

$$\theta_c = 41.8^\circ$$

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

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{15} - \frac{1}{20} = \frac{4 - 3}{60} = \frac{1}{60}$$

$$v = 60 \mathrm{ cm}$$

The image is real, at $60 \mathrm{ cm}$ on the opposite side of the lens.

$$m = \frac{60}{20} = 3$$

The image is inverted and magnified 3 times.

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

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** An object is placed $25 \mathrm{ cm}$ in front of a concave mirror with radius of
curvature $20 \mathrm{ cm}$. Find the image position and magnification.

$$f = \frac{R}{2} = \frac{20}{2} = 10 \mathrm{ cm}$$

$$\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{1}{10} - \frac{1}{25} = \frac{5 - 2}{50} = \frac{3}{50}$$

$$v = 16.7 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{16.7}{25} = 0.667$$

Real, inverted, diminished image at $16.7 \mathrm{ cm}$ in front of the mirror.

**Question 2:** Light enters a glass block ($n = 1.52$) from air at an angle of $55^\circ$ to the
normal. Find the angle of refraction.

$$\sin\theta_2 = \frac{n_1}{n_2}\sin\theta_1 = \frac{1.0}{1.52}\sin 55^\circ = \frac{0.8192}{1.52} = 0.539$$

$$\theta_2 = 32.6^\circ$$

**Question 3:** Find the critical angle for a water-diamond interface. ($n_{\mathrm{water}} = 1.33$,
$n_{\mathrm{diamond}} = 2.42$)

Since $n_{\mathrm{diamond}} \gt n_{\mathrm{water}}$, TIR occurs when light travels from diamond to
water:

$$\sin\theta_c = \frac{n_{\mathrm{water}}}{n_{\mathrm{diamond}}} = \frac{1.33}{2.42} = 0.5496$$

$$\theta_c = 33.3^\circ$$

**Question 4:** An object $3 \mathrm{ cm}$ tall is placed $12 \mathrm{ cm}$ from a convex lens of
focal length $8 \mathrm{ cm}$. Find the image height and nature.

$$\frac{1}{v} = \frac{1}{8} - \frac{1}{12} = \frac{3 - 2}{24} = \frac{1}{24}$$

$$v = 24 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{24}{12} = 2$$

$$h_i = mh_o = 2 \times 3 = 6 \mathrm{ cm}$$

Real, inverted, magnified image of height $6 \mathrm{ cm}$ at $24 \mathrm{ cm}$ on the opposite
side.

**Question 5:** A diverging lens has a focal length of $15 \mathrm{ cm}$. An object is placed
$20 \mathrm{ cm}$ from the lens. Find the image position and magnification.

$$\frac{1}{v} = \frac{1}{-15} - \frac{1}{20} = \frac{-4 - 3}{60} = \frac{-7}{60}$$

$$v = -8.57 \mathrm{ cm}$$

The negative sign indicates a virtual image, $8.57 \mathrm{ cm}$ on the same side as the object.

$$m = \frac{-8.57}{20} = -0.429$$

The image is upright (positive height) and diminished.

</details>
