---
title: Coherence Theory
tags:
  - Physics
  - University
---

### 16.1 Temporal Coherence

**Temporal coherence** describes the correlation of a wave with itself at different times. The
**coherence time** $\tau_c$ is the time over which the phase relationship is maintained.

For a quasi-monochromatic source with bandwidth $\Delta\omega$:

$$\tau_c \sim \frac{2\pi}{\Delta\omega} = \frac{1}{\Delta\nu}$$

The **coherence length**: $l_c = c\tau_c = \lambda^2/\Delta\lambda$.

| Source           | $\Delta\lambda$   | $l_c$            |
| ---------------- | ----------------- | ---------------- |
| White light      | $\sim 300$ nm     | $\sim 1.5\,\mu$M |
| Na D line        | $\sim 0.6$ nm     | $\sim 0.5$ mm    |
| He-Ne laser      | $\sim 0.002$ nm   | $\sim 20$ cm     |
| Stabilised laser | $\sim 10^{-6}$ nm | $\sim 400$ km    |

### 16.2 Spatial Coherence

**Spatial coherence** describes the correlation of a wave at different points in space at the same
time. The **van Cittert--Zernike theorem** states that the spatial coherence of light from an
extended incoherent source is given by the Fourier transform of the source intensity distribution:

$$\gamma(\Delta x) = \frac{\iint I(\xi, \eta)\,e^{-ik(\xi\Delta x)/(R)}\,d\xi\,d\eta}{\iint I(\xi, \eta)\,d\xi\,d\eta}$$

Where $I(\xi, \eta)$ is the source intensity distribution and $R$ is the distance to the source.

**Michelson stellar interferometer:** Uses two separated apertures to measure the spatial coherence
of starlight, from which the angular diameter of the star can be determined. The first fringe
visibility minimum occurs at:

$$d = \frac{0.61\lambda}{\alpha}$$

Where $\alpha$ is the angular diameter and $d$ is the aperture separation.

### 16.3 Degree of Coherence

The **complex degree of coherence** $\gamma_{12}(\tau)$ between fields at points 1 and 2 with time
delay $\tau$:

$$\gamma_{12}(\tau) = \frac{\langle E_1^*(t)E_2(t+\tau)\rangle}{\sqrt{\langle|E_1|^2\rangle\langle|E_2|^2\rangle}}$$

This satisfies $0 \leq |\gamma_{12}| \leq 1$. The **visibility** of interference fringes is:

$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = |\gamma_{12}|$$

<details>
<summary>Worked Example 16.1: Double-Slit with Extended Source</summary>

A double-slit experiment uses an extended source of width $w$ at distance $D$ from the slits (slit
separation $d$).

By the van Cittert--Zernike theorem, the spatial coherence at the slits is:

$$|\gamma| = \left|\frac{\sin(\pi wd/(\lambda D))}{\pi wd/(\lambda D)}\right|$$

The fringe visibility vanishes when $\pi wd/(\lambda D) = \pi$I.e., $d = \lambda D/w$.

For a candle flame ($w \approx 1$ mm) at $D = 1$ m with $\lambda = 550$ nm:

$$d_{\text{max} = \frac{550 \times 10^{-9} \times 1}{10^{-3}} = 5.5 \times 10^{-4}\,\text{m} = 0.55\,\text{mm}}$$

Beyond this slit separation, the fringes wash out. For a star ($w \sim 10^8$ km, $D \sim 10^{14}$
km):

$$d_{\text{max} = \frac{550 \times 10^{-9} \times 10^{17}}{10^{11}} = 550\,\text{m}}$$

This is the basis of the Michelson stellar interferometer: by measuring $d_{\text{max}}$The stellar
diameter is determined.

</details>

