---
title: 'Plasma Physics: Brief Overview'
tags:
  - Physics
  - University
---

### 13.1 Debye Shielding in Plasmas

A plasma screens electric fields over the **Debye length**:

$$\lambda_D = \sqrt{\frac{\varepsilon_0 k_B T}{n_e e^2}}$$

For $n_e = 10^{18}$ m$^{-3}$, $T = 10^4$ K: $\lambda_D = 7.4 \times 10^{-5}$ m $= 74\,\mu$M.

The plasma frequency:

$$\omega_p = \sqrt{\frac{n_e e^2}{m_e \varepsilon_0}}$$

For $n_e = 10^{18}$ m$^{-3}$: $\omega_p = 5.64 \times 10^{10}$ rad/s, $f_p = 8.98$ GHz. EM waves
with $\omega < \omega_p$ cannot propagate (evanescent).

### 13.2 Plasma Oscillations

Small displacements of the electron cloud create restoring forces, leading to **Langmuir waves**:

$$\omega_{\text{Langmuir} = \omega_p\left(1 + \frac{3k_BT}{2m_e}\frac{k^2}{\omega_p^2}\right)^{-1/2}}$$

At long wavelengths ($k \to 0$): $\omega \to \omega_p$ (undamped). With ion motion: the ion-acoustic
wave has $\omega^2 = k^2 c_s^2/(1 + k^2\lambda_D^2)$ where $c_s = \sqrt{k_BT/m_i}$.

## Worked Examples

### Example 1: Gauss's law

**Problem.** A uniformly charged sphere of radius $R$ has total charge $Q$. Find $E$ inside and
outside.

**Solution.** Outside ($r > R$):
$\oint E \cdot dA = Q/\varepsilon_0 \implies E \cdot 4\pi r^2 = Q/\varepsilon_0 \implies E = \frac{Q}{4\pi\varepsilon_0 r^2}$.
Inside ($r < R$): enclosed charge $= Q(r/R)^3$. $E = \frac{Qr}{4\pi\varepsilon_0 R^3}$.

$\blacksquare$

### Example 2: Poynting vector

**Problem.** An EM wave has $E_0 = 100 \mathrm{ V/m}$ in vacuum. Find the average Poynting vector
magnitude.

**Solution.**
${\langle S \rangle = \frac{E_0^2}{2\mu_0 c} = \frac{100^2}{2 \times 4\pi \times 10^{-7} \times 3 \times 10^8} = \frac{10000}{754} \approx 13.3 \mathrm{ W/m}^2}$.

$\blacksquare$

## Common Pitfalls

- **Confusing Gauss's law applications.** Gauss’s law is most useful for systems with high symmetry
  (spherical, cylindrical, planar). **Fix:** Choose a Gaussian surface matching the symmetry; the
  flux through the surface equals the enclosed charge divided by $\varepsilon_0$.
- **Wrong Maxwell equation sign.** Faraday's law has a negative sign:
  $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$. **Fix:** The minus sign reflects
  Lenz's law — the induced EMF opposes the change in flux.
- **Confusing $\vec{D}$ and $\vec{E}$, $\vec{H}$ and $\vec{B}$.**
  $\vec{D} = \varepsilon_0\vec{E} + \vec{P}$; $\vec{H} = \vec{B}/\mu_0 - \vec{M}$. **Fix:** In
  vacuum: $\vec{D} = \varepsilon_0\vec{E}$, $\vec{H} = \vec{B}/\mu_0$.

## Summary

- Maxwell's equations: Gauss’s law, Gauss's law for magnetism, Faraday’s law, Ampère-Maxwell law.
- Gauss's law: $\oint \vec{E} \cdot d\vec{A} = Q_{\text{enc}}/\varepsilon_0$.
- EM waves: $E_0 = cB_0$; $c = 1/\sqrt{\mu_0\varepsilon_0}$; Poynting vector
  $\vec{S} = \vec{E} \times \vec{H}/\mu_0$.
- Boundary conditions: tangential $E$ and normal $B$ are continuous across interfaces.

## Cross-References

| Topic              | Site       | Link                                                                                                          |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| [Electromagnetism] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/fields/03-electromagnetism-unification)   |
| [Electromagnetism] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/4-fields/4_induction)                                           |
| [Electromagnetism] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/3-electricity-and-magnetism/3_magnetism-and-electromagnetism) |
| [Electromagnetism] | University | [View](https://university.wyattau.com/docs/physics/3-electromagnetism/1_electromagnetism)                     |

