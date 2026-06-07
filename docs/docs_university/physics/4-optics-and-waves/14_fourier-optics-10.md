---
title: Fourier Optics
tags:
  - Physics
  - University
---

### 10.1 Fraunhofer Diffraction as a Fourier Transform

The Fraunhofer diffraction pattern of an aperture with transmittance function $t(x, y)$ illuminated
by a plane wave is proportional to the 2D Fourier transform of the aperture function:

$$E(u, v) \propto \iint t(x,y)\, e^{-2\pi i(ux + vy)}\, dx\, dy = \mathcal{F}\{t(x,y)\}(u, v)$$

Where $u = \sin\theta_x/\lambda$ and $v = \sin\theta_y/\lambda$ are the spatial frequencies.

**Theorem 10.1.** The intensity in the Fraunhofer diffraction pattern is

$$I(u,v) = I_0\,|\tilde{t}(u,v)|^2$$

Where $\tilde{t}(u,v) = \mathcal{F}\{t(x,y)\}(u,v)$ is the Fourier transform of the aperture
function.

_Proof._ The Huygens-Fresnel principle in the far field gives:

$$E(x',y') = \frac{e^{ikr}}{i\lambda r}\iint t(x,y)\, e^{-ik(xx' + yy')/r}\, dx\, dy$$

In the far field, $r \approx D$ and the phase factor $e^{-ik(xx' + yy')/r}$ is exactly the kernel of
the Fourier transform. $\blacksquare$

### 10.2 Convolution Theorem for Diffraction

**Theorem 10.2 (Convolution theorem).** If an aperture function is the convolution
$t = t_1 * t_2$The diffraction pattern is the product of the individual diffraction patterns:

$$\mathcal{F}\{t_1 * t_2\} = \mathcal{F}\{t_1\} \cdot \mathcal{F}\{t_2\}$$

**Corollary.** If an aperture is the product $t = t_1 \cdot t_2$The diffraction pattern is the
convolution of the individual patterns:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

### 10.3 Worked Example: Diffraction Grating via Fourier Transform

**Problem.** Use the Fourier transform to derive the intensity pattern of a grating with $N$ slits
of width $a$ and spacing $d$.

<details>
<summary>Solution</summary>

The transmittance of a single slit centred at $x = 0$ is
$t_{\mathrm{slit}(x) = \mathrm{rect}(x/a)}$. The full grating is $N$ slits:

$$t(x) = \sum_{n=0}^{N-1} t_{\mathrm{slit}(x - nd) = t_{\mathrm{slit}(x) * \sum_{n=0}^{N-1} \delta(x - nd)}}$$

The Fourier transform is:

$$\tilde{t}(u) = \mathcal{F}\{t_{\mathrm{slit}\} \cdot \mathcal{F}\left\{\sum_{n=0}^{N-1}\delta(x - nd)\right\}}$$

$$= a\,\mathrm{sinc}(\pi a u) \cdot \sum_{n=0}^{N-1} e^{-2\pi i n d u} = a\,\mathrm{sinc}(\pi a u) \cdot \frac{\sin(N\pi d u)}{\sin(\pi d u)}$$

The intensity is:

$$I(u) = I_0\,a^2\,\mathrm{sinc}^2(\pi a u)\,\frac{\sin^2(N\pi d u)}{\sin^2(\pi d u)}$$

The first factor is the single-slit envelope; the second is the $N$-slit interference pattern.
Principal maxima occur at $du = m$ (integer $m$), giving the grating equation
$d\sin\theta = m\lambda$.

$\blacksquare$

</details>

### 10.4 Worked Example: Circular Aperture and the Airy Pattern

**Problem.** Compute the Fraunhofer diffraction pattern of a circular aperture of radius $a$.

<details>
<summary>Solution</summary>

The aperture function is $t(r) = 1$ for $r \leq a$ and $t(r) = 0$ for $r > a$. By circular symmetry,
the Fourier transform in polar coordinates is:

$$\tilde{t}(q) = 2\pi\int_0^a J_0(2\pi q r)\, r\, dr$$

Where $J_0$ is the Bessel function of the first kind and $q = \sin\theta/\lambda$ is the radial
spatial frequency. Using the identity:

$$\int_0^a J_0(2\pi q r)\, r\, dr = \frac{a}{2\pi q}J_1(2\pi q a)$$

$$\tilde{t}(q) = \pi a^2 \cdot \frac{2J_1(\alpha)}{\alpha}$$

Where $\alpha = 2\pi a q = 2\pi a\sin\theta/\lambda$. The intensity is:

$$I(\theta) = I_0\left(\frac{2J_1(\alpha)}{\alpha}\right)^2$$

This is the **Airy pattern**. The first zero occurs at $\alpha = 3.832$Giving the angular radius of
the first dark ring:

$$\sin\theta_1 = 1.22\,\frac{\lambda}{d}$$

Where $d = 2a$ is the diameter.

$\blacksquare$

</details>

---

