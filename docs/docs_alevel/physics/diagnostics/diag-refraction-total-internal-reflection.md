---
title: Refraction and Total Internal Reflection -- Diagnostic Tests
description: Diagnostic tests for Snell's law, critical angle derivation, optical fibres, and refractive index measurements at maximum A-Level Physics difficulty.
slug: diag-refraction-total-internal-reflection
hide_table_of_contents: true
---

# Refraction and Total Internal Reflection — Diagnostic Tests

## Unit Tests

### UT-1: Critical Angle and Dispersion in a Prism

**Question:**

An equilateral glass prism ($n = 1.52$ for red light, $n = 1.55$ for violet light) is placed in air ($n = 1.00$).

(a) Calculate the critical angle for the glass-air interface for red light.

(b) Light enters one face of the prism at an angle of incidence of $40^\circ$. Calculate the angle of emergence for red light and state whether total internal reflection occurs at the second face.

(c) Calculate the angular dispersion (the angle between the emergent red and violet rays) for the same angle of incidence.

**Solution:**

(a) Critical angle: $\sin\theta_c = 1/n = 1/1.52 = 0.6579$

$$\theta_c = 41.1^\circ$$

(b) At the first face (angle of incidence $i_1 = 40^\circ$):

By Snell's law: $\sin i_1 = n \sin r_1$

$$\sin 40^\circ = 1.52 \sin r_1 \Rightarrow \sin r_1 = 0.6428/1.52 = 0.4229$$
$$r_1 = 25.03^\circ$$

Angle of incidence at the second face: $i_2 = 60^\circ - r_1 = 60 - 25.03 = 34.97^\circ$

Since $34.97^\circ \lt 41.1^\circ = \theta_c$, total internal reflection does **not** occur.

Angle of emergence: $n\sin i_2 = \sin e$

$$\sin e = 1.52 \times \sin 34.97^\circ = 1.52 \times 0.5730 = 0.8710$$
$$e = 60.6^\circ$$

(c) For violet light ($n = 1.55$):

$\sin r_1' = \sin 40^\circ/1.55 = 0.6428/1.55 = 0.4147$

$r_1' = 24.51^\circ$

$i_2' = 60 - 24.51 = 35.49^\circ$

$\sin e' = 1.55 \times \sin 35.49^\circ = 1.55 \times 0.5808 = 0.9002$

$e' = 64.2^\circ$

Angular dispersion $= e' - e = 64.2^\circ - 60.6^\circ = 3.6^\circ$

---
### UT-2: Optical Fibre — Step Index

**Question:**

A step-index optical fibre has a core of refractive index $n_1 = 1.50$ and cladding of refractive index $n_2 = 1.46$. The core diameter is $50\,\mu\text{m}$.

(a) Calculate the critical angle at the core-cladding boundary.

(b) Calculate the maximum acceptance angle (numerical aperture) for light entering the fibre.

(c) Calculate the maximum number of reflections per metre for a ray entering at the maximum acceptance angle.

**Solution:**

(a) $\sin\theta_c = n_2/n_1 = 1.46/1.50 = 0.9733$

$$\theta_c = 76.7^\circ$$

This is the angle measured from the normal to the core-cladding boundary. The angle with the fibre axis is $90^\circ - 76.7^\circ = 13.3^\circ$.

(b) For light entering the fibre end at angle $\theta_a$ from the axis:

Using Snell's law at the entry face and the critical angle condition:

$$n_0 \sin\theta_a = \sqrt{n_1^2 - n_2^2} = \sqrt{2.25 - 2.1316} = \sqrt{0.1184} = 0.3441$$

For air ($n_0 = 1$): $\theta_a = \sin^{-1}(0.3441) = 20.1^\circ$

Numerical aperture: $\text{NA} = \sqrt{n_1^2 - n_2^2} = 0.344$

(c) A ray entering at the maximum acceptance angle travels at the steepest angle to the axis inside the fibre.

Angle with the axis inside the fibre: $\alpha = 90^\circ - \theta_c = 13.3^\circ$

The ray travels along the fibre axis with horizontal speed $v\cos\alpha$ and bounces between the walls. The horizontal distance between bounces:

$$d_{\text{bounce}} = \frac{2r}{\tan\alpha} = \frac{50 \times 10^{-6}}{\tan 13.3^\circ} = \frac{50 \times 10^{-6}}{0.2363} = 2.12 \times 10^{-4}\,\text{m}$$

Number of reflections per metre: $N = 1/(2.12 \times 10^{-4}) = 4720\,\text{reflections}\,\text{m}^{-1}$

---
### UT-3: Refractive Index from Real and Apparent Depth

**Question:**

A student measures the apparent depth of a coin at the bottom of a pool of liquid. The real depth is $(40.0 \pm 0.5)\,\text{cm}$ and the apparent depth is $(28.5 \pm 0.5)\,\text{cm}$.

(a) Calculate the refractive index of the liquid and its uncertainty.

(b) The student then observes a mark on the bottom of a glass block of refractive index $1.52$ through the liquid. The glass block is $3.0\,\text{cm}$ thick. Calculate the apparent thickness of the glass block as viewed through the liquid.

(c) Explain why the apparent depth formula only applies for near-normal viewing angles.

**Solution:**

(a) $n = \text{real depth}/\text{apparent depth} = 40.0/28.5 = 1.404$

Uncertainty: $\frac{\Delta n}{n} = \frac{\Delta d_{\text{real}}}{d_{\text{real}}} + \frac{\Delta d_{\text{app}}}{d_{\text{app}}} = \frac{0.5}{40.0} + \frac{0.5}{28.5} = 0.0125 + 0.01754 = 0.0300$

$$\Delta n = 0.0300 \times 1.404 = 0.042$$

$$n = 1.40 \pm 0.04$$

(b) When viewing through multiple layers, the apparent depth is the sum of each layer's apparent depth:

Apparent depth of liquid above glass $= $ real depth of liquid $/$ refractive index of liquid.

Actually, for the glass block viewed through the liquid, light passes from glass ($n_g = 1.52$) through liquid ($n_l = 1.40$) to air ($n_a = 1.00$).

The apparent thickness of the glass block as viewed through the liquid:

For light going from glass to liquid: the apparent depth in the liquid is $d_g \times n_l/n_g = 3.0 \times 1.40/1.52 = 2.76\,\text{cm}$.

But the light then travels from liquid to air, so we must also account for the liquid layer:

Apparent depth of glass $= d_g \times n_{\text{air}}/n_g = 3.0 \times 1.00/1.52 = 1.97\,\text{cm}$.

Wait, this is the apparent depth when viewing through air. Since we are viewing through the liquid, the effective apparent depth is:

The apparent thickness of the glass as seen from above through the liquid $= d_g \times (n_{\text{air}}/n_g) \times (n_{\text{liquid}}/n_{\text{air}})$ -- no, this is wrong.

The correct approach: for near-normal incidence, the apparent depth of an object viewed through a medium of refractive index $n$ is $d/n$. When viewing through multiple media, each layer contributes its apparent depth.

For the glass block viewed through the liquid and then air:

Light goes: glass ($n_g = 1.52$, thickness $d_g = 3.0\,\text{cm}$) $\to$ liquid ($n_l = 1.40$) $\to$ air ($n = 1.0$).

Apparent thickness of glass through liquid to air $= d_g \times n_l/n_g = 3.0 \times 1.40/1.52 = 2.76\,\text{cm}$.

No, that is the apparent depth if the observer is in the liquid. The observer is in air. The correct formula for apparent depth through a layer of refractive index $n_1$ to an observer in medium $n_2$ is:

$d_{\text{apparent}} = d \times n_2/n_1$

But the glass is submerged in the liquid, and the observer is in air. The light travels: glass $\to$ liquid $\to$ air. For the glass layer alone, as perceived by an observer in air through the intervening liquid:

The apparent thickness of the glass is $d_g \times n_l/n_g = 3.0 \times 1.40/1.52 = 2.76\,\text{cm}$.

This is because the observer perceives the object through the last medium the light traverses. The liquid acts as the "viewing medium" for the glass. The light then enters air, which changes the apparent position further, but since the liquid is already between the glass and air, the effective apparent depth of the glass as seen from air through the liquid is:

$d_{\text{app}} = d_g \times n_{\text{air}}/n_g = 3.0/1.52 = 1.97\,\text{cm}$

Wait -- the apparent depth formula depends on the medium the observer is in. The observer is in air. The light from the glass passes through the liquid then air. The effective refractive index transition is glass $\to$ liquid $\to$ air.

For a thin glass layer submerged in liquid, viewed from air:

The apparent depth (compared to the real position) is determined by the total optical path. For a single layer of glass of thickness $d_g$ in liquid of thickness $d_l$ above it:

Total optical path $= n_g d_g + n_l d_l$

Apparent depth $= (n_g d_g + n_l d_l)/n_{\text{air}} = n_g d_g + n_l d_l$

For just the glass contribution to apparent depth $= n_g d_g$ (since $n_{\text{air}} = 1$).

So the apparent thickness of the glass alone $= n_g d_g = 1.52 \times 3.0 = 4.56\,\text{cm}$?? No, that can't be right -- objects appear closer, not further.

The correct formula: apparent depth $= $ real depth $/ n$ (for viewing from air into a medium). The apparent depth of the glass block $= 3.0/1.52 = 1.97\,\text{cm}$ as seen through air. The liquid doesn't change this because the observer is in air, and the apparent depth formula uses the refractive index of the object medium relative to the observer's medium.

Actually, for viewing through the liquid, the glass appears at: $d_{\text{app}} = d_g/n_g = 1.97\,\text{cm}$ from the bottom surface of the liquid. But the observer also sees the liquid layer shortened. The total apparent depth of glass bottom from the liquid surface $= d_g/n_g + d_l/n_l$.

The apparent thickness of the glass alone (as measured from within the liquid) $= d_g/n_g = 3.0/1.52 = 1.97\,\text{cm}$.

(c) The apparent depth formula $d_{\text{app}} = d/n$ is derived using the small-angle (paraxial) approximation. At larger angles, Snell's law gives a curved relationship between real and apparent position, and the simple ratio no longer holds. The apparent depth depends on the viewing angle, and the image position varies with angle -- a phenomenon known as aberration. Additionally, at large angles, the formula breaks down because it assumes all rays from a point converge to a single image point, which is only true for paraxial rays.

## Integration Tests

### IT-1: Refraction at a Curved Interface (with Wave Properties)

**Question:**

A glass sphere of radius $R = 10\,\text{cm}$ and refractive index $n = 1.50$ is in air. A narrow beam of light enters the sphere parallel to a diameter, at a distance $h = 6.0\,\text{cm}$ from the diameter.

(a) Calculate the angle of refraction at the first surface.

(b) Calculate the angle of incidence at the second (inner) surface and determine whether the ray undergoes total internal reflection.

(c) If not, calculate the angle of emergence and the total deviation of the ray.

**Solution:**

(a) The angle of incidence at the first surface:

$$\sin i_1 = h/R = 6.0/10 = 0.60 \Rightarrow i_1 = 36.9^\circ$$

By Snell's law: $\sin i_1 = n\sin r_1$

$$\sin r_1 = 0.60/1.50 = 0.40 \Rightarrow r_1 = 23.6^\circ$$

(b) The ray travels inside the sphere and hits the far surface. The geometry gives:

The angle of incidence at the second surface $i_2 = r_1 = 23.6^\circ$ (by the isosceles triangle formed by the two radii).

Critical angle: $\theta_c = \sin^{-1}(1/1.50) = 41.1^\circ$

Since $i_2 = 23.6^\circ \lt \theta_c$, TIR does **not** occur.

(c) At the second surface: $n\sin i_2 = \sin e_2$

$$\sin e_2 = 1.50 \times \sin 23.6^\circ = 1.50 \times 0.400 = 0.600$$
$$e_2 = 36.9^\circ$$

The ray emerges parallel to the original direction (as expected for a sphere). The total deviation is:

$$\delta = (i_1 - r_1) + (e_2 - i_2) = (36.9 - 23.6) + (36.9 - 23.6) = 26.6^\circ$$

For TIR to occur: $r_1 \ge \theta_c = 41.1^\circ$, which requires $i_1$ such that $\sin i_1 \ge 1.50 \times \sin 41.1^\circ = 1.50 \times 0.657 = 0.986$, i.e. $i_1 \ge 80.4^\circ$ or $h \ge 9.86\,\text{cm}$. Only rays very close to the edge undergo TIR.

---
### IT-2: Optical Fibre Signal Attenuation (with DC Circuits)

**Question:**

An optical fibre of length $5.0\,\text{km}$ has an attenuation of $0.30\,\text{dB}\,\text{km}^{-1}$. A laser source couples $5.0\,\text{mW}$ of optical power into the fibre.

(a) Calculate the power at the output end of the fibre.

(b) The fibre has a numerical aperture of 0.22 and core diameter $62.5\,\mu\text{m}$. Calculate the maximum acceptance angle and the solid angle of acceptance.

(c) If the fibre is bent to a radius of curvature of $5.0\,\text{cm}$, estimate whether significant power loss occurs due to bending.

**Solution:**

(a) Total attenuation: $A = 0.30 \times 5.0 = 1.5\,\text{dB}$

$$A = 10\log_{10}(P_{\text{in}}/P_{\text{out}})$$
$$1.5 = 10\log_{10}(5.0/P_{\text{out}})$$
$$\log_{10}(5.0/P_{\text{out}}) = 0.15$$
$$5.0/P_{\text{out}} = 10^{0.15} = 1.413$$
$$P_{\text{out}} = 5.0/1.413 = 3.54\,\text{mW}$$

(b) Maximum acceptance angle: $\theta_a = \sin^{-1}(\text{NA}) = \sin^{-1}(0.22) = 12.7^\circ$

Solid angle of acceptance (approximate): $\Omega \approx \pi\theta_a^2 = \pi(0.22)^2 = 0.152\,\text{sr}$ (for small angles, where $\theta$ is in radians: $\theta_a = 0.22\,\text{rad}$)

(c) Bending loss becomes significant when the bend radius approaches a critical value. For a step-index fibre:

$$R_{\text{critical}} \approx \frac{3n_1^2\lambda}{4\pi(n_1^2 - n_2^2)^{3/2}}$$

Without the wavelength, we can estimate: for typical telecom fibres, bend losses become significant below $R \approx 10$--$30\,\text{mm}$ for single-mode fibres. For multimode fibres with larger cores, the critical radius is smaller.

At $R = 5.0\,\text{cm} = 50\,\text{mm}$, a multimode fibre of $62.5\,\mu\text{m}$ core diameter would experience minimal bending loss. However, tight bends at $5\,\text{mm}$ radius would cause significant loss.

The key point is that bending changes the angle of incidence at the core-cladding boundary. Some rays that previously satisfied the TIR condition no longer do, and they leak into the cladding. This is macrobending loss.

---
### IT-3: Prism as a Reflecting Element (with Superposition)

**Question:**

A right-angled isosceles glass prism ($n = 1.55$) is used as a reflector, with light entering one of the short faces and hitting the hypotenuse.

(a) Calculate the critical angle for the glass-air interface.

(b) Show that total internal reflection occurs at the hypotenuse when light enters the short face at normal incidence.

(c) Calculate the maximum angle of incidence on the short face for which TIR still occurs at the hypotenuse.

**Solution:**

(a) $\sin\theta_c = 1/n = 1/1.55 = 0.6452$

$$\theta_c = 40.2^\circ$$

(b) At normal incidence on the short face, the light enters undeviated ($r_1 = 0$). It hits the hypotenuse at $45^\circ$ angle of incidence.

Since $45^\circ \gt 40.2^\circ = \theta_c$, TIR occurs. The ray is reflected through $90^\circ$.

(c) Let the angle of incidence on the short face be $i$.

By Snell's law: $\sin i = n\sin r$, where $r$ is the angle of refraction.

The ray hits the hypotenuse at angle $i_2 = 45^\circ - r$.

For TIR: $i_2 \ge \theta_c = 40.2^\circ$

$$45^\circ - r \ge 40.2^\circ$$
$$r \le 4.8^\circ$$

$$\sin i = n\sin r \le 1.55 \times \sin 4.8^\circ = 1.55 \times 0.0837 = 0.1297$$
$$i \le 7.5^\circ$$

The maximum angle of incidence for TIR at the hypotenuse is $7.5^\circ$. Beyond this, some light is transmitted through the hypotenuse and the prism no longer acts as a perfect reflector. This limits the acceptance angle of prismatic reflectors.
