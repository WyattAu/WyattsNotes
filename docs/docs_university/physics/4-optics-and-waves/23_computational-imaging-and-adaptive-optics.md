---
title: Computational Imaging and Adaptive Optics
tags:
  - Physics
  - University
---

### 19.1 Compressed Sensing

**Compressed sensing** (Candes, Tao, Donoho, 2006) shows that signals that are **sparse** in some
basis can be reconstructed from far fewer measurements than Nyquist sampling requires:

$$\hat{\mathbf{x}} = \arg\min_{\mathbf{x}} \|\mathbf{x}\|_1 \quad \text{subject} to  \mathbf{y} = \Phi\mathbf{x}$$

Where $\Phi$ is the measurement matrix and $|\cdot|_1$ is the $L^1$ norm promoting sparsity.

### 19.2 Adaptive Optics

**Atmospheric turbulence** causes phase distortions in astronomical images. **Adaptive optics (AO)**
corrects these in real time using a deformable mirror. The Strehl ratio:

$$S = \exp\left[-\left(\frac{2\pi}{\lambda}\right)^2\langle\Delta\phi^2\rangle\right]$$

For diffraction-limited imaging ($S > 0.8$): $\Delta\phi_{\text{rms} < \lambda/14}$. On an 8 m
telescope at visible wavelengths, the deformable mirror must update at $>500$ Hz to track the
Greenwood frequency $f_G \sim 100$ Hz.

## Worked Examples

### Example 1: Thin film interference

**Problem.** A soap film ($n = 1.33$) of thickness $300 \mathrm{ nm}$ is illuminated by white light.
Which wavelength is constructively reflected?

**Solution.** Phase change at the front surface (air to soap); no phase change at the back (soap to
air). Constructive: $2nd = (m + \frac{1}{2})\lambda$.
$2(1.33)(300 \times 10^{-9}) = (m + 1/2)\lambda$. For $m = 0$:
$\lambda = 4 \times 1.33 \times 300 = 1596 \mathrm{ nm}$ (infrared). $m = 1$:
$\lambda = 1596/3 = 532 \mathrm{ nm}$ (green, visible).

$\blacksquare$

### Example 2: Diffraction grating resolution

**Problem.** A grating has $N = 5000$ lines illuminated. Find the resolving power in the second
order.

**Solution.** $R = mN = 2 \times 5000 = 10\,000$. The minimum wavelength difference resolvable:
$\Delta\lambda = \lambda/R$.

$\blacksquare$

## Common Pitfalls

- **Confusing group and phase velocity.** Phase velocity $v_p = \omega/k$; group velocity
  $v_g = d\omega/dk$. **Fix:** In a dispersive medium $v_p \neq v_g$; the group velocity is the
  speed at which the envelope (energy) travels.
- **Wrong interference condition.** Constructive: path difference $= n\lambda$. Destructive: path
  difference $= (n + 1/2)\lambda$. **Fix:** For thin films, also account for the phase change on
  reflection ($\pi$ phase shift from denser medium).
- **Confusing Fraunhofer and Fresnel diffraction.** Fraunhofer: far-field (parallel rays, simpler
  math). Fresnel: near-field. **Fix:** Fraunhofer: $a \sin\theta = n\lambda$. Fresnel: requires
  Fresnel integrals or numerical methods.

## Summary

- Phase velocity: $v_p = \omega/k$. Group velocity: $v_g = d\omega/dk$; energy/information travels
  at $v_g$.
- Interference: thin films, Michelson interferometer, Fabry-Pérot etalon.
- Diffraction: single slit, double slit, diffraction grating; Rayleigh criterion for resolution.
- Polarisation: Brewster's angle, Malus’s law ($I = I_0 \cos^2 \theta$).

## Cross-References

| Topic                   | Site       | Link                                                                                                                   |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| [Refraction and Optics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/waves/03-refraction-and-total-internal-reflection) |
| [Refraction and Optics] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/2-waves/2_waves-and-optics)                                            |
| [Refraction and Optics] | University | [View](https://university.wyattau.com/docs/physics/4-optics-and-waves/1_optics-and-wave-physics)                       |

