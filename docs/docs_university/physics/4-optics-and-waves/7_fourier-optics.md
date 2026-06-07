---
title: Fourier Optics
tags:
  - Physics
  - University
---

### 7.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer limit, the diffraction pattern is the **Fourier transform** of the aperture
function:

$$E(\theta_x, \theta_y) \propto \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

Where $t(x, y)$ is the transmission function of the aperture, and $k_x = k\sin\theta_x$
$k_y = k\sin\theta_y$.

A lens placed one focal length after the aperture produces the Fraunhofer pattern at its back focal
Plane, performing an optical Fourier transform.

### 7.2 The Convolution Theorem

If the aperture is a product $t(x, y) = t_1(x, y) \cdot t_2(x, y)$The diffraction pattern is the
Convolution of their individual transforms:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

Where $*$ denotes convolution. This explains, for example, why the double-slit pattern with finite
Slit width is the product of a sinc function (single slit) and a cosine-squared (double slit).

### 7.3 The Abbe Theory of Imaging

Abbe showed that a lens images by collecting the diffracted orders and recombining them. The
Resolution limit arises because high spatial frequencies (large diffraction angles) are lost if they
Fall outside the lens aperture.

The **minimum resolvable spatial frequency** is:

$$f_{\mathrm{max} = \frac{2\mathrm{NA}{\lambda}}}$$

Where $\mathrm{NA} = n\sin\theta_{\mathrm{max}}$ is the numerical aperture.

