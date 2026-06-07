---
title: Waveguides and Cavities
tags:
  - Physics
  - University
---

### 9.1 Rectangular Waveguides

A rectangular waveguide with dimensions $a$ (width) and $b$ (height) supports electromagnetic waves
propagating in the $z$-direction. Two families of modes exist: **TE** (transverse electric,
$E_z = 0$) and **TM** (transverse magnetic, $B_z = 0$).

**TE$_{mn}$ modes.** The longitudinal field is
$B_z = B_0\cos(m\pi x/a)\cos(n\pi y/b)\,e^{i(kz-\omega t)}$.

The transverse fields are determined from $B_z$ via:

$$E_x = \frac{i\omega}{k_c^2}\frac{\partial B_z}{\partial y}, \quad E_y = -\frac{i\omega}{k_c^2}\frac{\partial B_z}{\partial x}$$

$$B_x = \frac{-ik}{k_c^2}\frac{\partial B_z}{\partial x}, \quad B_y = \frac{-ik}{k_c^2}\frac{\partial B_z}{\partial y}$$

Where $k_c^2 = (m\pi/a)^2 + (n\pi/b)^2$ is the cutoff wavenumber.

**Cutoff frequency:** Waves propagate only when $\omega > \omega_{c,mn}$ where:

$$f_{c,mn} = \frac{c}{2}\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

The dominant (lowest frequency) mode is TE$_{10}$ with $f_{c,10} = c/(2a)$ (for $a > b$).

**Dispersion relation:**

$$k = \sqrt{\frac{\omega^2}{c^2} - k_c^2}, \quad v_{\text{phase} = \frac{\omega}{k} = \frac{c}{\sqrt{1 - (\omega_c/\omega)^2}} > c}$$

$$v_{\text{group} = \frac{d\omega}{dk} = c\sqrt{1 - \left(\frac{\omega_c}{\omega}\right)^2} < c}$$

The product $v_p \cdot v_g = c^2$.

### 9.2 Waveguide Impedance and Power Flow

The wave impedance for TE modes:

$$Z_{\text{TE} = \frac{E_x}{H_y} = \frac{\omega\mu_0}{k} = \frac{Z_0}{\sqrt{1 - (f_c/f)^2}}}$$

Where $Z_0 = \sqrt{\mu_0/\varepsilon_0} \approx 377\,\Omega$ is the impedance of free space.

The time-averaged power carried by TE$_{10}$ mode:

$$\langle P \rangle = \frac{ab}{4}E_0^2\frac{\beta}{\omega\mu_0} = \frac{ab}{4Z_{\text{TE}}E_0^2}$$

Where $\beta = k$ is the propagation constant and $E_0$ is the peak electric field.

### 9.3 Resonant Cavities

A rectangular cavity of dimensions $a \times b \times d$ supports standing waves at resonant
frequencies:

$$f_{mnp} = \frac{c}{2}\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2 + \left(\frac{p}{d}\right)^2}$$

Where $m, n, p$ are non-negative integers (not all zero). For TM modes, $p \geq 1$; for TE modes,
$m$ and $n$ cannot both be zero.

**Quality factor:**

$$Q = \frac{\omega \times \text{energy} stored}{\text{power} dissipated} = \frac{2\pi \times \text{energy} stored}{\text{energy} lost per cycle}$$

For a cavity with conducting walls of conductivity $\sigma$:

$$Q \approx \frac{V}{S\,\delta} \cdot \frac{3}{2}$$

Where $V$ is the cavity volume, $S$ is the surface area, and $\delta$ is the skin depth.

<details>
<summary>Worked Example 9.1: X-Band Waveguide</summary>

Standard X-band waveguide (WR-90) has $a = 22.86$ mm, $b = 10.16$ mm.

(a) Cutoff frequency of TE$_{10}$ mode:

$$f_{c,10} = \frac{c}{2a} = \frac{3 \times 10^8}{2 \times 22.86 \times 10^{-3}} = \frac{3 \times 10^8}{4.572 \times 10^{-2}} = 6.56\ \text{GHz}$$

(b) At $f = 10$ GHz (within X-band), is TE$_{10}$ the only propagating mode?

Cutoff of TE$_{01}$: $f_{c,01} = c/(2b) = 3 \times 10^8/(2 \times 10.16 \times 10^{-3}) = 14.76$
GHz.

Cutoff of TE$_{20}$: $f_{c,20} = c/a = 13.12$ GHz.

Since $6.56 < 10 < 13.12$ GHz, only TE$_{10}$ propagates. This single-mode operation is essential
for low-loss, distortion-free signal transmission.

(c) Guide wavelength at 10 GHz:

$$\lambda_g = \frac{\lambda}{\sqrt{1 - (f_c/f)^2}} = \frac{30\ \text{mm}{\sqrt{1 - (6.56/10)^2}} = \frac{30}{\sqrt{1 - 0.430}} = \frac{30}{0.755} = 39.7\ \text{mm}}$$

(d) Phase and group velocities:

$$v_p = \frac{c}{\sqrt{1 - (f_c/f)^2}} = \frac{3 \times 10^8}{0.755} = 3.97 \times 10^8\ \text{m}/s = 1.32\,c$$

$$v_g = c\sqrt{1 - (f_c/f)^2} = 3 \times 10^8 \times 0.755 = 2.27 \times 10^8\ \text{m}/s = 0.756\,c$$

Check: $v_p \times v_g = 1.32c \times 0.756c = c^2$. $\checkmark$

</details>

