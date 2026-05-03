---
title: Waves and Optics — Diagnostic Tests
description: "Hardest DSE waves-optics questions: diffraction conditions, interference path differences, polarization, EM spectrum, and Young's double slit analysis."
slug: diag-waves-optics
hide_table_of_contents: true
---

# Waves and Optics — Diagnostic Tests

## Unit Tests

### UT-1: Young's Double Slit with Non-Axial Source

**Question:**

In Young's double slit experiment, slits $S_1$ and $S_2$ are separated by $0.5$ mm and the screen is $1.5$ m away. Monochromatic light of wavelength $550$ nm is used. The source is not on the axis but is displaced $0.2$ mm perpendicular to the axis (toward $S_1$). Find the position of the central maximum on the screen and the fringe spacing.

**Solution:**

**Central maximum displacement:**

When the source is displaced toward $S_1$ by $0.2$ mm, the central maximum (zero path difference) shifts away from $S_1$ on the screen. The displacement $y$ of the central maximum is:

$$y = \frac{D}{d} \times \Delta s$$

where $\Delta s = 0.2$ mm is the source displacement:

$$y = \frac{1500}{0.5} \times 0.2 = 3000 \times 0.2 = 600 \text{ mm} = 60 \text{ cm}$$

Wait -- let me recalculate more carefully. The source displacement is $0.2$ mm $= 2 \times 10^{-4}$ m.

$$y = \frac{D}{d} \times \Delta s = \frac{1.5}{0.5 \times 10^{-3}} \times 2 \times 10^{-4} = \frac{1.5 \times 2 \times 10^{-4}}{5 \times 10^{-4}} = 0.6 \text{ m} = 60 \text{ cm}$$

**Fringe spacing:**

$$\Delta y = \frac{\lambda D}{d} = \frac{550 \times 10^{-9} \times 1.5}{0.5 \times 10^{-3}} = \frac{8.25 \times 10^{-7}}{5 \times 10^{-4}} = 1.65 \times 10^{-3} \text{ m} = 1.65 \text{ mm}$$

**Result:** The central maximum is displaced $60$ cm from the axis (toward the side opposite $S_1$), and the fringe spacing is $1.65$ mm. The entire interference pattern shifts by $60$ cm but the fringe spacing remains unchanged.

**Key insight:** An off-axis source shifts the entire fringe pattern but does NOT change the fringe spacing. The fringe spacing depends only on $\lambda$, $D$, and $d$.

---

### UT-2: Diffraction Grating with Multiple Orders Overlapping

**Question:**

A diffraction grating has $500$ lines per mm. White light is incident normally on the grating. Find (a) the angles of the first two orders for red light ($\lambda = 700$ nm) and violet light ($\lambda = 400$ nm), (b) the highest order visible for each colour, and (c) at what order the red and violet spectra begin to overlap.

**Solution:**

Grating spacing: $d = \frac{1}{500} \text{ mm} = 2 \times 10^{-6}$ m

**(a) Angles for first two orders:**

Grating equation: $d \sin\theta = n\lambda$

*Red ($\lambda = 700$ nm):*
- $n = 1$: $\sin\theta = \frac{700 \times 10^{-9}}{2 \times 10^{-6}} = 0.35$, $\theta = 20.49°$
- $n = 2$: $\sin\theta = 0.70$, $\theta = 44.43°$

*Violet ($\lambda = 400$ nm):*
- $n = 1$: $\sin\theta = \frac{400 \times 10^{-9}}{2 \times 10^{-6}} = 0.20$, $\theta = 11.54°$
- $n = 2$: $\sin\theta = 0.40$, $\theta = 23.58°$

**(b) Highest visible order:**

Maximum when $\sin\theta = 1$: $n_{\max} = \frac{d}{\lambda}$

- Red: $n_{\max} = \frac{2 \times 10^{-6}}{700 \times 10^{-9}} = 2.86$, so $n = 2$
- Violet: $n_{\max} = \frac{2 \times 10^{-6}}{400 \times 10^{-9}} = 5.00$, so $n = 5$

**(c) Overlap condition:**

Overlap occurs when the $(n+1)$th order of violet coincides with the $n$th order of red:

$$(n+1)\lambda_v = n\lambda_r$$

$$(n+1)(400) = n(700)$$

$$400n + 400 = 700n$$

$$300n = 400$$

$$n = \frac{4}{3}$$

Since $n$ must be an integer, the first overlap occurs between $n = 2$ (red) and $n = 3$ (violet):

Check: $2 \times 700 = 1400$ nm, $3 \times 400 = 1200$ nm. These don't exactly coincide, but the spectra overlap because $2 \times 700 \lt 3 \times 400$ is not satisfied... Let me recalculate.

Actually: $3 \times 400 = 1200 \lt 1400 = 2 \times 700$. This means the 3rd order violet is at a smaller angle than the 2nd order red, so they DO overlap from the 2nd order of red and 3rd order of violet onward.

More precisely, overlap begins when the upper end of one order meets the lower end of the next. The 2nd order of red ends at $44.43°$ and the 3rd order of violet begins at:

$$\sin\theta = \frac{3 \times 400 \times 10^{-9}}{2 \times 10^{-6}} = 0.60, \quad \theta = 36.87°$$

Since $36.87° \lt 44.43°$, the 3rd-order violet spectrum overlaps with the 2nd-order red spectrum.

---

### UT-3: Polarization by Reflection (Brewster's Angle)

**Question:**

Light is incident from air ($n = 1$) onto a glass surface ($n = 1.5$). (a) Calculate Brewster's angle. (b) If unpolarized light is incident at Brewster's angle, describe the polarization state of the reflected and refracted rays. (c) A second glass surface is placed parallel to the first. Explain what happens to the reflected and refracted beams after both surfaces.

**Solution:**

**(a) Brewster's angle:**

At Brewster's angle, the reflected and refracted rays are perpendicular:

$$\theta_B + \theta_r = 90°$$

Using Snell's law: $\sin\theta_B = n \sin(90° - \theta_B) = n \cos\theta_B$

$$\tan\theta_B = n = 1.5$$

$$\theta_B = \tan^{-1}(1.5) = 56.31°$$

**(b) Polarization states:**

- **Reflected ray:** Completely linearly polarized with the electric field perpendicular to the plane of incidence (s-polarized). This is because the p-polarized component (in the plane of incidence) is fully transmitted at Brewster's angle.
- **Refracted ray:** Partially polarized. It contains all of the p-polarized component and most of the s-polarized component. The refracted ray is NOT completely polarized.

**(c) Two parallel glass surfaces (Brewster window):**

The refracted ray from the first surface hits the second surface at the same angle (Brewster's angle, by geometry of parallel surfaces). At the second surface, the p-polarized component is again fully transmitted (no reflection), while the remaining s-polarized component is partially reflected.

After multiple parallel surfaces (a Brewster stack), the transmitted beam becomes increasingly p-polarized while the reflected beams are all s-polarized. This is the principle behind Brewster windows used in laser cavities.

**Key misconception:** Students often think both the reflected and refracted rays are fully polarized at Brewster's angle. Only the reflected ray is fully polarized; the refracted ray is only partially polarized.

---

## Integration Tests

### IT-1: Single Slit Diffraction and Double Slit Combined (with Waves and Sound)

**Question:**

A double slit experiment uses slits of width $0.04$ mm separated by $0.2$ mm (centre to centre). Light of wavelength $500$ nm is used. The screen is $2$ m away. Find (a) the angular width of the central diffraction maximum, (b) the number of bright fringes visible within the central diffraction envelope, and (c) the positions of missing orders.

**Solution:**

**(a) Angular width of central diffraction maximum:**

For single slit diffraction, the first minimum occurs at:

$$a \sin\theta = \lambda$$

$$\sin\theta = \frac{\lambda}{a} = \frac{500 \times 10^{-9}}{0.04 \times 10^{-3}} = 0.0125$$

$$\theta = 0.0125 \text{ rad}$$

Angular width of central maximum $= 2\theta = 0.0250$ rad $= 1.43°$.

**(b) Number of bright fringes within central diffraction envelope:**

The double slit fringe spacing: $\Delta\theta = \frac{\lambda}{d} = \frac{500 \times 10^{-9}}{0.2 \times 10^{-3}} = 0.00250$ rad.

Number of fringes from centre to first diffraction minimum:

$$\frac{0.0125}{0.00250} = 5$$

So there are 5 bright fringes on each side of the central maximum, plus the central maximum itself $= 11$ bright fringes in total within the central envelope.

**(c) Missing orders:**

Missing orders occur when a double slit maximum coincides with a single slit minimum:

$$\frac{d}{a} = \frac{0.2}{0.04} = 5$$

So every 5th order is missing: the 5th, 10th, 15th, ... orders are absent.

Verification: At the 5th double slit maximum: $d \sin\theta = 5\lambda$, which gives $a \sin\theta = a \times \frac{5\lambda}{d} = 5\lambda \times \frac{a}{d} = 5\lambda \times \frac{1}{5} = \lambda$, which is exactly the condition for the first single slit minimum.

**Key insight:** In a real double slit, the slits have finite width, producing a diffraction envelope that modulates the interference pattern. The ratio $d/a$ determines which interference orders are suppressed.

---

### IT-2: Thin Film Interference with Phase Changes (with Optics)

**Question:**

A soap film ($n = 1.33$) of thickness $300$ nm is illuminated by white light incident normally from air. (a) For what wavelengths in the visible spectrum ($400$--$700$ nm) will the reflected light show constructive interference? (b) What colour will the film appear by reflection? (c) What colour will it appear by transmission?

**Solution:**

**(a) Reflected light -- constructive interference:**

At the first surface (air to soap), light reflects from a denser medium: phase change of $\pi$ ($\lambda/2$ path difference).

At the second surface (soap to air), light reflects from a less dense medium: no phase change.

For constructive interference in reflected light, the total path difference must satisfy:

$$2nt = \left(m + \frac{1}{2}\right)\lambda \quad (m = 0, 1, 2, \ldots)$$

$$\lambda = \frac{2nt}{m + 1/2} = \frac{2 \times 1.33 \times 300}{m + 0.5} = \frac{798}{m + 0.5}$$

- $m = 0$: $\lambda = \frac{798}{0.5} = 1596$ nm (infrared, not visible)
- $m = 1$: $\lambda = \frac{798}{1.5} = 532$ nm (green, visible)
- $m = 2$: $\lambda = \frac{798}{2.5} = 319.2$ nm (ultraviolet, not visible)

The only visible wavelength is $532$ nm (green).

**(b) Colour by reflection:**

Green ($532$ nm). The film appears green by reflection.

**(c) Colour by transmission:**

For transmitted light, constructive interference occurs when reflected light has destructive interference:

$$2nt = m\lambda$$

$$\lambda = \frac{2nt}{m} = \frac{798}{m}$$

- $m = 1$: $\lambda = 798$ nm (not visible)
- $m = 2$: $\lambda = 399$ nm (violet, just visible)

So the transmitted light is primarily violet/blue. The transmitted and reflected colours are complementary.

**Key misconception:** Students often forget about the phase change on reflection. Whether a phase change occurs depends on whether light reflects from a denser or less dense medium. This determines whether constructive or destructive interference conditions have the $+1/2$ term.

---

### IT-3: Electromagnetic Spectrum Application (with Nuclear Physics)

**Question:**

A medical X-ray tube operates at a potential difference of $50$ kV. The shortest wavelength X-ray produced is used for imaging. (a) Calculate the shortest wavelength of X-rays produced. (b) If the X-rays pass through a crystal with atomic spacing $0.28$ nm, calculate the first-order diffraction angle. (c) Explain why a minimum wavelength exists even though the tube produces a continuous spectrum of X-rays.

**Solution:**

**(a) Shortest wavelength (Duane-Hunt limit):**

The shortest wavelength corresponds to the maximum photon energy, which occurs when ALL the kinetic energy of an electron is converted to a single photon:

$$eV = \frac{hc}{\lambda_{\min}}$$

$$\lambda_{\min} = \frac{hc}{eV} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{1.6 \times 10^{-19} \times 50000}$$

$$\lambda_{\min} = \frac{1.989 \times 10^{-25}}{8 \times 10^{-15}} = 2.486 \times 10^{-11} \text{ m} = 0.0249 \text{ nm}$$

**(b) First-order diffraction angle (Bragg's law):**

$$2d \sin\theta = n\lambda$$

$$2(0.28 \times 10^{-9}) \sin\theta = 1 \times 2.486 \times 10^{-11}$$

$$\sin\theta = \frac{2.486 \times 10^{-11}}{5.6 \times 10^{-10}} = 0.04439$$

$$\theta = 2.54°$$

**(c) Explanation of minimum wavelength:**

X-rays are produced when electrons decelerate upon hitting the target (Bremsstrahlung radiation). Each electron can lose any fraction of its kinetic energy, producing photons of various energies. The maximum photon energy (minimum wavelength) corresponds to the rare event where an electron loses ALL its kinetic energy in a single collision. This gives the Duane-Hunt limit. Photons with energy exceeding $eV$ cannot be produced because no single electron has more energy than $eV$.

**Key insight:** The minimum wavelength depends only on the accelerating voltage, not on the target material. The characteristic X-ray lines (from inner-shell electron transitions) are superimposed on this continuous spectrum.
