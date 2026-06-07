---
title: Diffraction
slug: solid-state-physics-diffraction
tags:
  - Physics
  - University
---

### 3.1 Bragg's Law

X-ray diffraction from crystal planes produces constructive interference when:

$$2d\sin\theta = n\lambda$$

Where $d$ is the interplanar spacing, $\theta$ is the angle of incidence, and $n$ is the order.

**Derivation.** The path difference between waves scattered from adjacent planes is $2d\sin\theta$.
Constructive interference requires this to be an integer multiple of $\lambda$. $\blacksquare$

For the $n$-th order reflection from $(hkl)$ planes, one can equivalently define it as the
first-order Reflection from $(nh\ nk\ nl)$ planes with spacing $d/n$.

### 3.2 The Laue Condition

Diffraction occurs when the scattering vector equals a reciprocal lattice vector:

$$\Delta\mathbf{k} = \mathbf{k}' - \mathbf{k} = \mathbf{G}$$

This is equivalent to Bragg's law. Since $\lvert\mathbf{k}\rvert = \lvert\mathbf{k}'\rvert$ (elastic
Scattering), the Laue condition requires $\mathbf{k}$ to terminate on the **Ewald sphere** (a sphere
Of radius $k$ centred at the tip of $\mathbf{k}$).

**Equivalence with Bragg's law.** From
$\lvert\mathbf{k}\rvert = \lvert\mathbf{k} + \mathbf{G}\rvert$:

$$k^2 = \lvert\mathbf{k} + \mathbf{G}\rvert^2 = k^2 + G^2 + 2\mathbf{k}\cdot\mathbf{G}$$

$$\implies \mathbf{k}\cdot\mathbf{G} = -\frac{G^2}{2}$$

Since $G = 2\pi/d$ and $\lvert\mathbf{k}\cdot\hat{\mathbf{G}}\rvert = k\sin\theta$:

$$k\sin\theta = \frac{G}{2} = \frac{\pi}{d}$$

Using $k = 2\pi/\lambda$: $2d\sin\theta = \lambda$ (first order). $\blacksquare$

### 3.3 Structure Factor

The **structure factor** determines the intensity of diffraction from planes $(hkl)$:

$$S_{hkl} = \sum_j f_j e^{-i\mathbf{G}_{hkl}\cdot\mathbf{d}_j}$$

Where $f_j$ is the atomic form factor of atom $j$ at position $\mathbf{d}_j$ in the basis.

**Example: BCC.** Two atoms at $(0,0,0)$ and $(a/2, a/2, a/2)$ in the conventional cell:

$$S_{hkl} = f\left[1 + e^{-i\pi(h+k+l)}\right] = f\left[1 + (-1)^{h+k+l}\right]$$

Reflections are present only when $h + k + l$ is even. When $h + k + l$ is odd, $S_{hkl} = 0$
(systematic absence).

**Example: FCC.** Atoms at $(0,0,0)$, $(a/2,a/2,0)$, $(a/2,0,a/2)$, $(0,a/2,a/2)$:

$$S_{hkl} = f\left[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}\right]$$

Reflections present only when $h, k, l$ are all even or all odd.

### 3.4 Worked Examples: Structure Factor Calculations

<details>
<summary>Worked Example: Diamond Cubic Structure Factor</summary>

Diamond has an FCC lattice with a two-atom basis at $(0,0,0)$ and $(a/4, a/4, a/4)$. The FCC
Sublattice factor $S_{\mathrm{FCC}}$ is nonzero only when $h,k,l$ are all even or all odd.

The full structure factor is:

$$S_{hkl} = S_{\mathrm{FCC} \cdot \left[1 + e^{-i\frac{\pi}{2}(h+k+l)}\right]}$$

For allowed FCC reflections:

- $h + k + l = 4n$: $S = 4f(1 + 1) = 8f$. Intensity $\propto 64f^2$.
- $h + k + l = 4n + 2$: $S = 4f(1 + e^{-i\pi}) = 4f(1 - 1) = 0$. **Systematic absence.**
- $h + k + l = 2n + 1$ (odd): $S = 4f(1 \pm i)$. Intensity
  $\propto \lvert 4f(1 \pm i)\rvert^2 = 32f^2$.

The extra absence at $h + k + l = 4n + 2$ is the signature of the diamond structure, distinguishing
It from a simple FCC lattice.

</details>

<details>
<summary>Worked Example: HCP Structure Factor</summary>

HCP has a two-atom basis at $(0,0,0)$ and $(2/3, 1/3, 1/2)$ in fractional coordinates of the
Hexagonal lattice.

The structure factor is:

$$S_{hkl} = f\left[1 + e^{2\pi i(h/3 + k/3 + l/2)}\right] = f\left[1 + e^{2\pi i(2h+k)/3}\,e^{i\pi l}\right]$$

For $l$ even: $e^{i\pi l} = 1$So $S = f[1 + e^{2\pi i(2h+k)/3}]$. For $l$ odd: $e^{i\pi l} = -1$So
$S = f[1 - e^{2\pi i(2h+k)/3}]$.

When $2h + k = 3n$: $S = 2f$ (strong) for even $l$And $S = 0$ (absent) for odd $l$. When
$2h + k = 3n \pm 1$: both even and odd $l$ give reflections but with different intensities.

</details>

### 3.5 Systematic Absences

Systematic absences arise from lattice centring and glide planes/screw axes, and are summarised by
The structure factor:

| Structure | Condition for reflection                | Systematic absence         |
| --------- | --------------------------------------- | -------------------------- |
| SC        | All $(hkl)$                             | None                       |
| BCC       | $h + k + l$ even                        | $h + k + l$ odd            |
| FCC       | $h,k,l$ all even or all odd             | Mixed even/odd             |
| Diamond   | $h,k,l$ all even/odd, $h+k+l \neq 4n+2$ | $h+k+l = 4n+2$ (and mixed) |
| HCP       | $l$ even when $2h+k=3n$                 | $l$ odd when $2h+k=3n$     |

Systematic absences allow unambiguous identification of the Bravais lattice from a diffraction
pattern. The presence of a $(100)$ reflection rules out BCC; the presence of $(200)$ but absence of
$(110)$ Identifies FCC.

### 3.6 Powder Diffraction

In a **powder diffraction** experiment, a polycrystalline sample with randomly oriented crystallites
Is illuminated by a monochromatic X-ray beam. Each family of planes $(hkl)$ that satisfies Bragg's
Law produces a diffraction cone at angle $2\theta$ from the incident beam.

The **Bragg--Brentano geometry** uses a divergent beam and a focusing detector, recording intensity
As a function of $2\theta$. Each peak position gives $d_{hkl}$ via Bragg's law, and the peak
Intensity is proportional to $\lvert S_{hkl}\rvert^2$ times multiplicity and geometric factors.

**Scherrer equation.** For crystallites of size $L$The diffraction peaks are broadened. The Full
width at half maximum (FWHM) $\beta$ (in radians) relates to the crystallite size by:

$$L = \frac{K\lambda}{\beta\cos\theta}$$

Where $K \approx 0.89$ is the Scherrer constant. This provides a straightforward method for
Estimating nanocrystallite sizes from powder diffraction data.

:::caution Common Pitfall Do not confuse the Laue condition $\Delta\mathbf{k} = \mathbf{G}$ with
Bragg's law $2d\sin\theta = n\lambda$. These are equivalent formulations of the same physics. The
Laue condition is a vector equation in Reciprocal space, while Bragg's law is a scalar equation in
real space. Converting between them Requires careful geometry --- remember that $\theta$ in Bragg's
law is measured from the _plane_, Not from the normal.


:::
