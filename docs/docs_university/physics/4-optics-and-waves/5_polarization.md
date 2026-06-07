---
title: Polarization
tags:
  - Physics
  - University
---

### 5.1 States of Polarization

For a plane wave propagating in the $z$-direction:

$$\mathbf{E} = E_{0x}\cos(kz - \omega t)\,\hat{\mathbf{x}} + E_{0y}\cos(kz - \omega t + \delta)\,\hat{\mathbf{y}}$$

- **Linear polarization:** $\delta = 0$ or $\delta = \pi$. The E-field oscillates along a fixed
  line.
- **Circular polarization:** $E_{0x} = E_{0y}$ and $\delta = \pm\pi/2$. Right-handed
  ($\delta = -\pi/2$) or left-handed ($\delta = +\pi/2$).
- **Elliptical polarization:** General case. The tip of $\mathbf{E}$ traces an ellipse.

### 5.2 Malus's Law

When linearly polarised light of intensity $I_0$ passes through a polariser at angle $\theta$ to the
Polarisation direction:

$$I = I_0 \cos^2\theta$$

**Proof.** The component of $\mathbf{E}$ along the polariser axis is $E\cos\theta$. Since
$I \propto E^2$: $I = I_0 \cos^2\theta$. $\blacksquare$

<details>
<summary>Worked Example: Three polarisers in series</summary>

**Problem.** Unpolarised light of intensity $I_0$ passes through three ideal linear polarisers. The
First has its transmission axis vertical. The second is at $45°$ to the vertical. The third is
Horizontal. What fraction of $I_0$ is transmitted?

**Solution.** After the first polariser: $I_1 = I_0/2$ (vertical polarisation).

After the second: $I_2 = I_1\cos^2 45° = (I_0/2)(1/2) = I_0/4$ (polarised at 45°).

After the third: $I_3 = I_2\cos^2 45° = (I_0/4)(1/2) = I_0/8$ (horizontal polarisation).

Answer: $I_0/8 = 12.5\%$. Note that inserting the middle polariser **increases** the transmitted
Intensity compared with just the crossed first and third polarisers (which would transmit zero).

</details>

### 5.3 Birefringence and Wave Plates

Birefringent crystals (e.g., calcite) have two refractive indices: $n_o$ (ordinary ray) and $n_e$
(extraordinary ray). The two rays have orthogonal polarisations and different phase velocities.

A **wave plate** of thickness $t$ introduces a relative phase shift between the two polarisation
Components:

$$\Delta\phi = \frac{2\pi}{\lambda}(n_o - n_e)\,t$$

**Quarter-wave plate (QWP):** $\Delta\phi = \pi/2$So $t_{\mathrm{QWP} = \lambda/(4|n_o - n_e|)}$.
Converts linear polarisation at $45°$ to the fast/slow axes into circular polarisation, and vice
Versa.

**Half-wave plate (HWP):** $\Delta\phi = \pi$So $t_{\mathrm{HWP} = \lambda/(2|n_o - n_e|)}$. Rotates
the plane of linear polarisation by $2\theta$Where $\theta$ is the angle between the Input
polarisation and the fast axis.

:::caution Common Pitfall A quarter-wave plate only produces circular polarisation when the input
linear polarisation is at Exactly $45°$ to the fast and slow axes. For other input angles, the
output is elliptically Polarised. A half-wave plate rotates linear polarisation by $2\theta$Not
$\theta$.
:::

<details>
<summary>Worked Example: Quarter-wave plate design and application</summary>

**Problem.** (a) Design a quarter-wave plate for $\lambda = 589$ nm using calcite ($n_o = 1.658$,
$n_e = 1.486$). (b) If linearly polarised light at $30°$ to the fast axis Enters this QWP, describe
the output polarisation.

**Solution.**

(a) Minimum thickness:
$t = \lambda/(4|n_o - n_e|) = 589 \times 10^{-9}/(4 \times 0.172) = 8.56 \times 10^{-7}$ m $= 856$
nm.

(b) The components along the fast and slow axes are: $E_f = E_0\cos 30° = 0.866\,E_0$ and
$E_s = E_0\sin 30° = 0.500\,E_0$. After the QWP, these have a $\pi/2$ phase difference but unequal
amplitudes ($0.866 \neq 0.500$), So the output is **elliptically polarised** (not circular).

</details>

### 5.4 Optical Activity

Certain materials (sugars, quartz) rotate the plane of linearly polarised light. The specific
Rotation is:

$$[\alpha] = \frac{\theta}{c \cdot l}$$

Where $\theta$ is the rotation angle, $c$ is the concentration, and $l$ is the path length.

Optical activity arises from the helical structure of molecules, which gives different refractive
Indices for left- and right-circularly polarised light (circular birefringence). If $n_L$ and $n_R$
Are the refractive indices for left and right circular polarisation:

$$\theta = \frac{\pi l}{\lambda}(n_L - n_R)$$

Optical activity is **reciprocal**: if the beam is reflected back through the medium, the rotation
Is cancelled.

### 5.5 Brewster's Angle

At the **Brewster angle** $\theta_B$The reflected beam for p-polarised light vanishes ($r_p = 0$):

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$ requires $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t} \implies \cot\theta_i = \cot\theta_t \implies \theta_i = \theta_t'$$

Where $\theta_t' = 90° - \theta_t$. This gives $\theta_i + \theta_t = 90°$So:

$$\tan\theta_i = \frac{n_2}{n_1} \quad \blacksquare$$

At Brewster's angle, the reflected beam is purely s-polarised, and the reflected and refracted beams
Are perpendicular ($\theta_B + \theta_t = 90°$). This principle is used in Brewster windows and
Polarisation by reflection.

For an air-glass interface ($n_1 = 1$, $n_2 = 1.5$): $\theta_B = \arctan(1.5) = 56.3°$.

<details>
<summary>Worked Example: Brewster's angle and reflected intensity</summary>

**Problem.** Unpolarised light is incident on a glass surface ($n = 1.50$) at Brewster's angle. What
fraction of the incident intensity is reflected, and what is the polarisation state of the Reflected
light?

**Solution.** $\theta_B = \arctan(1.50) = 56.3°$.

The reflected light is purely s-polarised. The reflectance for s-polarisation at $\theta_B$:
$\theta_t = 90° - 56.3° = 33.7°$.
$r_s = \frac{n_1\cos\theta_B - n_2\cos\theta_t}{n_1\cos\theta_B + n_2\cos\theta_t} = \frac{\cos 56.3° - 1.50\cos 33.7°}{\cos 56.3° + 1.50\cos 33.7°} = \frac{0.555 - 1.50 \times 0.832}{0.555 + 1.50 \times 0.832} = \frac{0.555 - 1.248}{0.555 + 1.248} = \frac{-0.693}{1.803} = -0.384$

$R_s = (-0.384)^2 = 0.148$.

The incident unpolarised light has equal s and p components ($I_s = I_p = I_0/2$). Only the s
Component is reflected:
$I_{\mathrm{reflected} = R_s \times I_0/2 = 0.148 \times I_0/2 = 0.074\,I_0}$.

The reflected light is 100% s-polarised with intensity $0.074\,I_0$ (about 7.4% of the incident).

</details>

### 5.6 Faraday Rotation

In a magneto-optical material with a magnetic field $\mathbf{B}$ applied along the propagation
Direction, the plane of polarisation rotates by:

$$\theta_F = V B l$$

Where $V$ is the **Verdet constant** (rad/(T$\cdot$M)), $B$ is the magnetic field strength, and $l$
is the path length through the material.

**Mechanism.** The magnetic field induces circular birefringence: left and right circular
polarisations Experience different refractive indices ($n_L \neq n_R$). Unlike natural optical
activity, Faraday Rotation is **non-reciprocal**: if the beam is reflected back through the medium,
the rotation Doubles rather than cancelling.

**Applications.** Optical isolators (one-way light valves), optical circulators, and magneto-optical
Sensors. An optical isolator consists of a polariser, a Faraday rotator set to rotate by $45°$And An
analyser at $45°$ to the polariser. Forward-propagating light is transmitted; backward light Is
rotated by another $45°$ (total $90°$) and blocked by the analyser.

<details>
<summary>Worked Example: Faraday rotation in flint glass</summary>

**Problem.** A Faraday rotator uses heavy flint glass with Verdet constant $V = 32$ rad/(T$\cdot$M).
(a) What magnetic field over a 10 cm length produces a $45°$ rotation? (b) If linearly polarised
Light makes a round trip through the rotator, what is the total rotation?

**Solution.**

(a) $\theta_F = VBl \implies B = \theta_F/(Vl) = (\pi/4)/(32 \times 0.10) = 0.785/3.2 = 0.245$ T.

(b) Because Faraday rotation is non-reciprocal, the return trip adds another $45°$: Total rotation
$= 90°$. The polarisation is rotated by $90°$ after the round trip, which is the Basis of optical
isolation.

</details>

### 5.7 Polarization by Scattering

When light is scattered by particles much smaller than the wavelength (Rayleigh scattering), the
Scattered light is partially polarised. Light scattered at $90°$ to the incident direction is
**completely linearly polarised** in the plane perpendicular to the scattering plane.

**Proof.** Consider an incident unpolarised beam propagating along $\hat{\mathbf{z}}$. The
$\mathbf{E}$-field oscillates in the $xy$-plane. An observer along $\hat{\mathbf{x}}$ (scattering
Angle $90°$) receives radiation from the accelerating electrons. The dipole radiation pattern of an
Oscillator along $\hat{\mathbf{y}}$ has zero intensity along $\hat{\mathbf{y}}$ but maximum along
$\hat{\mathbf{x}}$. The oscillator along $\hat{\mathbf{x}}$ radiates zero along its own axis. Thus
The observer along $\hat{\mathbf{x}}$ sees only the $y$-component: the scattered light is Polarised
along $\hat{\mathbf{y}}$. $\blacksquare$

This explains why the sky is polarised at $90°$ from the sun and why polarising sunglasses reduce
Glare from horizontal surfaces (Brewster's angle reflection from road/water).

