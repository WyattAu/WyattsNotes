---
title: Fourier Optics
tags:
  - Physics
  - University
---

### 15.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer (far-field) limit, the diffraction pattern of an aperture with transmission
function $t(x, y)$ is the Fourier transform:

$$U(x', y') = \frac{e^{ikz}}{i\lambda z}\,e^{ik(x'^2 + y'^2)/(2z)}\iint t(x, y)\,e^{-ik(xx' + yy')/z}\,dx\,dy$$

Where $(x', y')$ are coordinates in the observation plane at distance $z$ from the aperture.

Defining spatial frequencies $f_x = x'/(\lambda z)$, $f_y = y'/(\lambda z)$:

$$U(f_x, f_y) \propto \mathcal{F}\{t(x,y)\}(f_x, f_y)$$

This correspondence between diffraction and Fourier transforms is the foundation of Fourier optics
and has profound implications for image processing and optical information processing.

### 15.2 The Abbe Theory of the Microscope

Ernst Abbe (1873) showed that a microscope forms an image by taking two Fourier transforms: the
objective lens performs the first Fourier transform (creating the diffraction pattern at its back
focal plane), and the eyepiece (or tube lens) performs the inverse transform.

**Resolution limit:** The finest spatial frequency that can pass through the objective is:

$$f_{\max} = \frac{\text{NA}{\lambda}}$$

Where $\text{NA} = n\sin\theta$ is the numerical aperture. The minimum resolvable distance (Abbe
limit):

$$d_{\min} = \frac{\lambda}{2\,\text{NA}}$$

For green light ($\lambda = 550$ nm) and NA = 1.4 (oil immersion): $d_{\min} \approx 196$ nm.

### 15.3 Spatial Filtering

Since the back focal plane of a lens contains the spatial frequency spectrum of the input, placing a
mask (spatial filter) in this plane modifies the image:

- **Low-pass filter:** Blocks high spatial frequencies $\to$ smooths the image, removes fine detail
- **High-pass filter:** Blocks low frequencies $\to$ enhances edges, removes uniform background
- **Phase contrast microscopy:** (Zernike, 1942) Adds a $\pi/2$ phase shift to the undiffracted (DC)
  component, converting phase variations into intensity variations. This makes transparent
  biological specimens visible without staining.

<details>
<summary>Worked Example 15.1: Diffraction from a Grating</summary>

A diffraction grating with $N$ slits of width $a$ and spacing $d$ has transmission function:

$$t(x) = \sum_{n=0}^{N-1}\text{rect}\!\left(\frac{x - nd}{a}\right)$$

The Fraunhofer pattern is:

$$I(\theta) = I_0\left(\frac{\sin\alpha}{\alpha}\right)^2\left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

Where $\alpha = \pi a\sin\theta/\lambda$ (single-slit envelope) and
$\beta = \pi d\sin\theta/\lambda$ (multi-slit interference).

For $N = 5$, $d = 3a$:

- Principal maxima at $\beta = m\pi$: $\sin\theta = m\lambda/d$
- Between principal maxima: $N - 2 = 3$ secondary maxima
- Width of principal maximum: $\Delta\theta = \lambda/(Nd\cos\theta)$
- Missing orders: when $m$ is a multiple of $d/a = 3$ (i.e., 3rd, 6th, ... Orders are suppressed by
  the single-slit zero)

The resolving power: $R = mN = m \times 5$.

</details>

