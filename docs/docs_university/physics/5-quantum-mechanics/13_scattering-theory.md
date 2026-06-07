---
title: Scattering Theory
tags:
  - Physics
  - University
---

### 12.1 Partial Wave Analysis

For a spherically symmetric potential $V(r)$The scattering amplitude can be expanded in partial
waves:

$$f(\theta) = \frac{1}{2ik}\sum_{l=0}^{\infty}(2l + 1)(e^{2i\delta_l} - 1)P_l(\cos\theta) = \frac{1}{k}\sum_{l=0}^{\infty}(2l + 1)e^{i\delta_l}\sin\delta_l\,P_l(\cos\theta)$$

Where $\delta_l$ is the phase shift for partial wave $l$.

**Optical theorem:**

$$\sigma_{\text{total} = \frac{4\pi}{k}\,\text{Im}\,f(0) = \frac{4\pi}{k^2}\sum_{l=0}^{\infty}(2l+1)\sin^2\delta_l}$$

**Partial wave unitarity bound:** $\sin^2\delta_l \leq 1$So the maximum contribution of partial wave
$l$ to the cross section is:

$$\sigma_l^{\max} = \frac{4\pi}{k^2}(2l + 1)$$

### 12.2 The Born Approximation

For a weak potential, the scattering amplitude to first order is:

$$f(\theta, \phi) \approx -\frac{m}{2\pi\hbar^2}\int e^{-i\mathbf{k}'\cdot\mathbf{r}'}V(\mathbf{r}')\,d^3r'$$

Where $\mathbf{k}'$ is the scattered wave vector and $\mathbf{q} = \mathbf{k}' - \mathbf{k}$ is the
momentum transfer.

For the Yukawa potential $V(r) = (V_0/r)e^{-\mu r}$:

$$f(\theta) = -\frac{2m V_0}{\hbar^2(\mu^2 + q^2)}, \quad q = 2k\sin(\theta/2)$$

Setting $\mu = 0$ (Coulomb potential), this reproduces the Rutherford scattering formula.

### 12.3 Resonance Scattering

When the scattering energy is near a quasi-bound state, the phase shift passes through $\pi/2$
(resonance):

$$\delta_l(E) \approx \delta_{\text{bg} + \arctan\!\left(\frac{\Gamma/2}{E_R - E}\right)}$$

Where $E_R$ is the resonance energy and $\Gamma$ is the width. The cross section has the
Breit--Wigner form:

$$\sigma_l(E) = \frac{4\pi}{k^2}(2l+1)\frac{(\Gamma/2)^2}{(E - E_R)^2 + (\Gamma/2)^2}$$

At resonance ($E = E_R$): $\sigma_l^{\max} = \frac{4\pi}{k^2}(2l+1)$ (unitarity limit).

<details>
<summary>Worked Example 12.1: Low-Energy Scattering and Scattering Length</summary>

For $s$-wave scattering ($l = 0$) at low energy ($ka \ll 1$), only the $l = 0$ phase shift
contributes:

$$\sigma \approx \frac{4\pi}{k^2}\sin^2\delta_0 \approx 4\pi a_s^2$$

Where the **scattering length** $a_s$ is defined by $k\cot\delta_0 \to -1/a_s$ as $k \to 0$.

For a hard sphere of radius $a$: $\delta_0 = -ka$ (exact), giving $a_s = a$ and $\sigma = 4\pi a^2$
(four times the geometric cross section $\pi a^2$ --- a purely quantum result).

For the $^3$He--$^4$He system: $a_s \approx 1.4$ nm (positive, indicating a repulsive effective
potential). For the neutron--proton system (triplet): $a_s \approx 5.4$ fm (positive, with a bound
state --- the deuteron). For singlet: $a_s \approx -23.7$ fm (negative, indicating a virtual state).

</details>

<details>
<summary>Worked Example 12.2: Born Approximation for a Gaussian Potential</summary>

Consider $V(r) = V_0\,e^{-r^2/(2a^2)}$.

$$f(\theta) = -\frac{m}{2\pi\hbar^2}\int e^{-i\mathbf{q}\cdot\mathbf{r}}V_0 e^{-r^2/(2a^2)}\,d^3r$$

$$= -\frac{m V_0}{2\pi\hbar^2}(2\pi a^2)^{3/2}e^{-q^2 a^2/2} = -\frac{m V_0}{\hbar^2}(2\pi)^{1/2}a^3\,e^{-2k^2a^2\sin^2(\theta/2)}$$

The total cross section:

$$\sigma = \int |f|^2\,d\Omega = 2\pi\int_0^\pi |f|^2\sin\theta\,d\theta$$

At low energy ($ka \ll 1$): $f \approx -\frac{mV_0}{\hbar^2}(2\pi)^{1/2}a^3$ (independent of
$\theta$), giving:

$$\sigma \approx 4\pi\left(\frac{mV_0}{\hbar^2}\right)^2 2\pi\,a^6 = \frac{8\pi^2 m^2 V_0^2 a^6}{\hbar^4}$$

The Born approximation is valid when $|V_0| \ll \hbar^2/(ma^2)$I.e., the potential is weak compared
to the kinetic energy associated with the length scale $a$.

</details>

## Common Pitfalls (Additional)

1. **Symmetrisation applies to the full wavefunction:** For fermions, the overall wavefunction
   (spatial $\otimes$ spin $\otimes$ any other degrees of freedom) must be antisymmetric. A
   symmetric spatial part requires an antisymmetric spin part (singlet), and vice versa. Do not
   apply (anti)symmetrisation to spatial and spin parts separately without ensuring the correct
   combined symmetry.

2. **The variational principle gives an upper bound:** $E_{\text{trial} \geq E_0}$ always. If you
   obtain a variational energy lower than the known exact ground state energy, you have made an
   error in the calculation (wrong normalisation, incorrect matrix element, or the trial function is
   not in the correct Hilbert space).

3. **Fermi's Golden Rule applies to transitions to a continuum:** For transitions to discrete
   states, use the Rabi formula instead. The density of states $\rho(E_f)$ is essential --- if it is
   zero, the transition rate is zero regardless of the matrix element.

4. **The Born approximation assumes a weak potential:** The condition is $m|V_0|a/\hbar^2 \ll 1$
   where $a$ is the range of the potential. For strong potentials (like the nuclear potential or
   hard spheres), the Born approximation gives qualitatively wrong results. Use partial wave
   analysis instead.

5. **Resonances require careful treatment:** Near a resonance, perturbation theory breaks down. The
   Breit--Wigner formula is non-perturbative in the width $\Gamma$. The scattering length can be
   much larger than the range of the potential near a resonance (the unitarity limit).

## Problems (Additional)

<details>
<summary>Problem 19: Exchange Energy in Lithium</summary>

Lithium ($Z = 3$) has the electron configuration $1s^2 2s^1$. Using the variational method with
$Z_{\text{eff}}$ for the $1s$ electrons:

(a) Calculate $Z_{\text{eff}}$ for the $1s$ electrons, treating the $2s$ electron as a perturbation.

(b) Calculate the ionisation energy (removing the $2s$ electron) and compare with the experimental
value of 5.39 eV.

(c) Explain why the $2s$ electron is effectively screened by $Z_{\text{eff} \approx 1.26}$.

**Solution:**

(a) For the $1s$ electrons, the effective charge is reduced from $Z = 3$ by screening from the other
$1s$ electron and partial penetration of the $2s$ electron. The $1s$ electrons screen each other
partially: using the helium result, $Z_{\text{eff}(1s) \approx Z - 5/16 = 3 - 0.3125 = 2.69}$.

(b) The $2s$ electron sees an effective nuclear charge of
$Z_{\text{eff}(2s) \approx 3 - 2 \times 0.85 = 1.3}$ (Slater's rules). The energy:

$$E_{2s} = -\frac{Z_{\text{eff}^2}{n^2}\times 13.6\ \text{eV} = -\frac{1.3^2}{4}\times 13.6 = -\frac{1.69}{4}\times 13.6 = -5.75\ \text{eV}}$$

The ionisation energy is $|E_{2s}| = 5.75$ eV, close to the experimental 5.39 eV. The discrepancy
reflects the crudeness of the Slater screening constants.

(c) The $2s$ electron has significant radial extent beyond the $1s$ core, so it sees a nearly bare
nuclear charge at small $r$ but is screened by both $1s$ electrons at large $r$. The effective
charge $Z_{\text{eff} \approx 1.26}$ (using Hartree--Fock) represents this average screening.

</details>

<details>
<summary>Problem 20: Partial Wave Analysis for Square Well</summary>

Consider scattering from the attractive square well $V(r) = -V_0$ for $r < a$ and $V(r) = 0$ for
$r > a$.

(a) Show that the $s$-wave phase shift satisfies:

$$\delta_0 = -ka + \arctan\!\left(\frac{k}{\kappa}\tan(\kappa a)\right)$$

Where $\kappa = \sqrt{2m(V_0 + E)}/\hbar$ and $k = \sqrt{2mE}/\hbar$.

(b) Show that a bound state exists at energy $E = -|E|$ when $\kappa_0 a = \pi/2$ where
$\kappa_0 = \sqrt{2m(V_0 - |E|)}/\hbar$.

(c) Show that the scattering length diverges as a new bound state appears.

**Solution:**

(a) Inside the well ($r < a$), the radial wavefunction for $l = 0$ is $u(r) = A\sin(\kappa r)$.
Outside ($r > a$), $u(r) = B\sin(kr + \delta_0)$.

Matching $u$ and $u'$ at $r = a$:

$$\kappa\cos(\kappa a) = k\cos(ka + \delta_0)/\sin(ka + \delta_0)\cdot k$$

Wait: $\kappa\cot(\kappa a) = k\cot(ka + \delta_0)$.

$$\cot(ka + \delta_0) = \frac{\kappa}{k}\cot(\kappa a)$$

$$ka + \delta_0 = \arccot\!\left(\frac{\kappa}{k}\cot(\kappa a)\right) = \arctan\!\left(\frac{k}{\kappa}\tan(\kappa a)\right)$$

$$\delta_0 = -ka + \arctan\!\left(\frac{k}{\kappa}\tan(\kappa a)\right)$$

(b) A bound state has $E < 0$So $k = i\kappa'$ where $\kappa' = \sqrt{2m|E|}/\hbar$. The bound state
condition is that the exterior solution decays exponentially: $u(r) = Be^{-\kappa' r}$. Matching:

$$\kappa\cot(\kappa a) = -\kappa'$$

As $|E| \to 0$: $\kappa' \to 0$So $\kappa\cot(\kappa a) \to 0$Giving $\kappa a = \pi/2$ (the
threshold for the first bound state).

(c) The scattering length $a_s = -\lim_{k \to 0}(\delta_0/k)$. As $\kappa a \to \pi/2$,
$\tan(\kappa a) \to \infty$So:

$$\delta_0 \approx -ka + \arctan(\infty) = -ka + \pi/2$$

$$a_s = -\frac{1}{k}\left(-ka + \frac{\pi}{2}\right) = a - \frac{\pi}{2k}$$

As $k \to 0$: $a_s \to \pm\infty$ (diverges), changing sign as the bound state appears.

</details>

