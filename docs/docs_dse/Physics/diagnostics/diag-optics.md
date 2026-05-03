---
title: Optics — Diagnostic Tests
description: "Hardest DSE optics questions: thin lens sign conventions, real vs virtual images, total internal reflection, compound lens systems, and optical instruments."
slug: diag-optics
hide_table_of_contents: true
---

# Optics — Diagnostic Tests

## Unit Tests

### UT-1: Compound Lens System with Sign Convention

**Question:**

A converging lens of focal length $10$ cm and a diverging lens of focal length $15$ cm are placed $30$ cm apart on the same principal axis. An object is placed $20$ cm to the left of the converging lens. Find the position, nature, and magnification of the final image.

**Solution:**

**Sign convention:** Distances are measured from the lens. Real is positive for images (right of lens), and real objects are positive (left of lens).

**Lens 1 (converging, $f_1 = +10$ cm):**

$$\frac{1}{v_1} = \frac{1}{f_1} - \frac{1}{u_1} = \frac{1}{10} - \frac{1}{20} = \frac{2 - 1}{20} = \frac{1}{20}$$

$$v_1 = 20 \text{ cm} \text{ (real image, right of lens 1)}$$

This image acts as the object for lens 2. Distance from lens 2:

$$u_2 = 30 - 20 = 10 \text{ cm} \text{ (real object for lens 2)}$$

**Lens 2 (diverging, $f_2 = -15$ cm):**

$$\frac{1}{v_2} = \frac{1}{f_2} - \frac{1}{u_2} = \frac{1}{-15} - \frac{1}{10} = \frac{-2 - 3}{30} = \frac{-5}{30} = \frac{-1}{6}$$

$$v_2 = -6 \text{ cm} \text{ (virtual image, 6 cm to the left of lens 2)}$$

**Position:** $6$ cm to the left of the diverging lens (i.e., $24$ cm to the right of the converging lens).

**Magnification:**

$$m_1 = -\frac{v_1}{u_1} = -\frac{20}{20} = -1$$

$$m_2 = -\frac{v_2}{u_2} = -\frac{-6}{10} = 0.6$$

$$m_{\text{total}} = m_1 \times m_2 = -1 \times 0.6 = -0.6$$

The final image is virtual, upright (since $m = -0.6$ in the real-is-positive convention means inverted... let me re-check), and diminished to $0.6$ times the object size.

**Re-checking sign convention:** In the "real is positive" convention, negative magnification means inverted. So $m = -0.6$ means the image is inverted and diminished.

**Key misconception:** Students often forget that the image from the first lens becomes the object for the second lens, and must correctly calculate $u_2$ accounting for the lens separation.

---

### UT-2: Total Internal Reflection in a Prism

**Question:**

A ray of light enters a $45°$-$90°$-$45°$ glass prism ($n = 1.5$) through the longest face (hypotenuse) at an angle of incidence of $30°$. Trace the path of the ray through the prism and determine whether total internal reflection occurs at any surface. If not, find the angle of emergence.

**Solution:**

**Step 1: Refraction at the hypotenuse (entry):**

Using Snell's law at the hypotenuse:

$$n_{\text{air}} \sin 30° = n_{\text{glass}} \sin r_1$$

$$1 \times 0.5 = 1.5 \times \sin r_1$$

$$\sin r_1 = \frac{0.5}{1.5} = 0.3333$$

$$r_1 = 19.47°$$

**Step 2: Ray travels to the first short face:**

The ray makes an angle of $r_1 = 19.47°$ with the normal to the hypotenuse. We need the angle of incidence on the short face.

In the $45°$-$90°$-$45°$ prism, the normal to the hypotenuse is at $45°$ to each short face. The angle between the refracted ray and the normal to the short face:

$$\theta_i = 90° - 45° - r_1 = 45° - 19.47° = 25.53°$$

**Step 3: Check for total internal reflection at the short face:**

Critical angle: $\sin\theta_c = \frac{1}{n} = \frac{1}{1.5} = 0.6667$

$$\theta_c = 41.81°$$

Since $25.53° \lt 41.81°$, **total internal reflection does NOT occur** at this face.

**Step 4: Refraction at the short face (exit):**

$$n_{\text{glass}} \sin 25.53° = n_{\text{air}} \sin\theta_e$$

$$1.5 \times 0.4312 = 1 \times \sin\theta_e$$

$$\sin\theta_e = 0.6468$$

$$\theta_e = 40.34°$$

The ray emerges from the first short face at an angle of $40.34°$ to the normal.

**Key insight:** Total internal reflection requires the angle of incidence to exceed the critical angle. Many students assume TIR occurs automatically in prisms without checking the actual angle of incidence at each surface.

---

### UT-3: Microscope Resolution and Magnification

**Question:**

A compound microscope has an objective lens of focal length $0.5$ cm and an eyepiece lens of focal length $2.5$ cm. The distance between the two lenses is $16$ cm. An object is placed $0.6$ cm from the objective. Find (a) the position of the intermediate image, (b) the position of the final image, (c) the total angular magnification, and (d) whether the final image is upright or inverted relative to the object.

**Solution:**

**Sign convention:** Real is positive.

**(a) Intermediate image (objective lens):**

$$\frac{1}{v_1} = \frac{1}{f_1} - \frac{1}{u_1} = \frac{1}{0.5} - \frac{1}{0.6} = \frac{6 - 5}{3} = \frac{1}{3}$$

$$v_1 = 3 \text{ cm} \text{ (real image)}$$

**(b) Final image (eyepiece lens):**

Object distance for eyepiece:

$$u_2 = 16 - 3 = 13 \text{ cm}$$

$$\frac{1}{v_2} = \frac{1}{f_2} - \frac{1}{u_2} = \frac{1}{2.5} - \frac{1}{13} = \frac{13 - 2.5}{32.5} = \frac{10.5}{32.5} = \frac{21}{65}$$

$$v_2 = \frac{65}{21} = 3.10 \text{ cm} \text{ (real image, to the right of eyepiece)}$$

**(c) Total magnification:**

$$m_1 = -\frac{v_1}{u_1} = -\frac{3}{0.6} = -5$$

$$m_2 = -\frac{v_2}{u_2} = -\frac{3.10}{13} = -0.238$$

$$m_{\text{total}} = m_1 \times m_2 = (-5)(-0.238) = 1.19$$

For angular magnification of a microscope (when the final image is at the near point, $D = 25$ cm):

$$M_{\text{angular}} = m_1 \times M_{\text{eyepiece}}$$

where $M_{\text{eyepiece}} = 1 + \frac{D}{f_2} = 1 + \frac{25}{2.5} = 11$

$$M_{\text{angular}} = 5 \times 11 = 55$$

**(d) Image orientation:**

$m_{\text{total}} = +1.19$ means the image is **upright** relative to the object. However, in a standard compound microscope, the image is typically inverted. The positive sign here arises because both individual magnifications are negative (both produce inverted images), and two inversions give an upright result. This is unusual for a microscope and occurs because the final image happens to be real rather than virtual at infinity.

---

## Integration Tests

### IT-1: Lens-Mirror Combination (with Waves and Optics)

**Question:**

A converging lens of focal length $15$ cm has a plane mirror placed $20$ cm behind it. An object is placed $10$ cm in front of the lens. Find the position and nature of the final image.

**Solution:**

**Step 1: Image formed by the lens alone:**

$$\frac{1}{v_1} = \frac{1}{f} - \frac{1}{u_1} = \frac{1}{15} - \frac{1}{10} = \frac{2 - 3}{30} = \frac{-1}{30}$$

$$v_1 = -30 \text{ cm} \text{ (virtual image, 30 cm to the left of the lens)}$$

Wait -- this virtual image is on the same side as the object. The light rays diverge after passing through the lens and would not reach the mirror. Let me reconsider.

Actually, in this configuration, the light first passes through the lens, then reflects off the mirror, then passes through the lens again.

**Step 1: Light passes through lens (object at 10 cm from lens):**

$$v_1 = -30 \text{ cm}$$

This means the lens alone would form a virtual image 30 cm to the left. But the rays actually continue to the right (they are diverging after the lens) and hit the mirror.

**Step 2: Reflection from the mirror:**

The diverging rays from the lens hit the mirror 20 cm behind the lens. For the mirror, the "object" is the virtual image of the lens at 30 cm to the left of the lens, which is $30 + 20 = 50$ cm to the left of the mirror. This is a virtual object for the mirror.

For a plane mirror, image distance $=$ object distance (on the other side):

$$v_{\text{mirror}} = -50 \text{ cm} \text{ (50 cm to the left of the mirror, i.e., 30 cm to the left of the lens)}$$

**Step 3: Light passes through the lens again:**

The image from the mirror (30 cm to the left of the lens) acts as a virtual object for the lens on the second pass. So $u_2 = -30$ cm (virtual object on the left).

$$\frac{1}{v_2} = \frac{1}{f} - \frac{1}{u_2} = \frac{1}{15} - \frac{1}{-30} = \frac{1}{15} + \frac{1}{30} = \frac{3}{30} = \frac{1}{10}$$

$$v_2 = 10 \text{ cm} \text{ (real image, 10 cm to the right of the lens)}$$

But the mirror is 20 cm to the right of the lens, so the image would be formed between the lens and the mirror.

**Final image:** Real, 10 cm to the right of the lens (between the lens and the mirror), and 10 cm to the left of the mirror.

**Key insight:** In lens-mirror combinations, light may pass through the lens twice. Each pass must be treated separately, and the image from one optical element becomes the object for the next.

---

### IT-2: Fibre Optic Critical Angle and Acceptance Angle (with Waves and Optics)

**Question:**

An optical fibre has a core of refractive index $1.50$ and a cladding of refractive index $1.45$. Find (a) the critical angle for the core-cladding boundary, (b) the maximum acceptance angle (numerical aperture), and (c) the minimum radius of curvature the fibre can bend without light escaping, given the light enters along the axis.

**Solution:**

**(a) Critical angle at core-cladding boundary:**

$$\sin\theta_c = \frac{n_{\text{cladding}}}{n_{\text{core}}} = \frac{1.45}{1.50} = 0.9667$$

$$\theta_c = 75.16°$$

**(b) Maximum acceptance angle (numerical aperture):**

$$\sin\theta_a = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2} = \sqrt{1.50^2 - 1.45^2} = \sqrt{2.25 - 2.1025} = \sqrt{0.1475} = 0.3841$$

$$\theta_a = 22.59°$$

$$\text{NA} = \sqrt{n_{\text{core}}^2 - n_{\text{cladding}}^2} = 0.384$$

**(c) Minimum radius of curvature:**

For light travelling along the axis of a bent fibre, the condition for TIR at the outer edge of the core requires that the angle of incidence at the core-cladding boundary exceeds $\theta_c$.

For a fibre bent with radius $R$, the critical condition for axial light is:

$$\cos\left(\frac{d}{R}\right) \geq \cos\theta_c$$

where $d$ is the core diameter. For light at the axis, the most demanding condition is at the outer edge. Approximating for small $d/R$:

$$\frac{d}{R} \leq \frac{\pi}{2} - \theta_c = 90° - 75.16° = 14.84° = 0.2591 \text{ rad}$$

Without a specified core diameter, if we assume the light ray travels at the critical angle in the straight section:

$$R_{\min} = \frac{d}{0.2591}$$

For a typical core diameter of $d = 50 \text{ }\mu\text{m}$:

$$R_{\min} = \frac{50 \times 10^{-6}}{0.2591} = 1.93 \times 10^{-4} \text{ m} = 0.193 \text{ mm}$$

**Key insight:** The numerical aperture determines the light-gathering ability of the fibre. A larger NA means more light can be accepted but at the cost of increased modal dispersion.

---

### IT-3: Refractive Index from Apparent Depth and Dispersion (with Waves and Optics)

**Question:**

A glass block of refractive index $1.52$ has a small air bubble trapped $3$ cm below the top surface. When viewed from directly above in air, the bubble appears to be at a depth of $1.97$ cm. Monochromatic light of wavelength $600$ nm (in vacuum) enters the glass block. Find (a) the verification of the apparent depth formula, (b) the wavelength of light inside the glass, and (c) the speed of light in the glass.

**Solution:**

**(a) Apparent depth verification:**

$$\text{Apparent depth} = \frac{\text{Real depth}}{n} = \frac{3}{1.52} = 1.974 \text{ cm} \approx 1.97 \text{ cm}$$

This confirms the observed apparent depth. The formula works because rays refract away from the normal when exiting the glass, making the bubble appear closer to the surface.

**(b) Wavelength inside the glass:**

Frequency remains constant when light enters a medium:

$$f = \frac{c}{\lambda_0} = \frac{3 \times 10^8}{600 \times 10^{-9}} = 5 \times 10^{14} \text{ Hz}$$

$$\lambda_{\text{glass}} = \frac{v}{f} = \frac{c/n}{f} = \frac{\lambda_0}{n} = \frac{600}{1.52} = 394.7 \text{ nm}$$

**(c) Speed of light in glass:**

$$v = \frac{c}{n} = \frac{3 \times 10^8}{1.52} = 1.974 \times 10^8 \text{ m s}^{-1}$$

**Key misconception:** Many students confuse the change in wavelength with a change in frequency. Frequency NEVER changes when light enters a different medium -- only the wavelength and speed change. The colour we perceive is determined by frequency (or equivalently, vacuum wavelength), not the wavelength inside the medium.
