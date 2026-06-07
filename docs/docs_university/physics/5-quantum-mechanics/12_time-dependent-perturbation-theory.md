---
title: Time-Dependent Perturbation Theory
tags:
  - Physics
  - University
---

### 11.1 Fermi's Golden Rule

For a time-dependent perturbation $\hat{V}(t) = \hat{V}\,e^{-i\omega t}$ applied to an initial state
$|i\rangle$The transition rate to a continuum of final states $|f\rangle$ is:

$$\Gamma_{i \to f} = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f)$$

Where $\rho(E_f)$ is the density of final states at energy $E_f = E_i + \hbar\omega$.

**Derivation.** Using first-order time-dependent perturbation theory, the transition amplitude to
state $|f\rangle$ is:

$$c_f(t) = -\frac{i}{\hbar}\int_0^t \langle f|\hat{V}|i\rangle\,e^{i\omega_{fi}t'}\, dt'$$

For a sinusoidal perturbation at frequency $\omega$:

$$|c_f|^2 = \frac{|\langle f|\hat{V}|i\rangle|^2}{\hbar^2}\frac{\sin^2[(\omega_{fi} - \omega)t/2]}{(\omega_{fi} - \omega)^2/4}$$

In the long-time limit, $\sin^2(xt)/x^2 \to 2\pi t\,\delta(x)$Giving:

$$\frac{|c_f|^2}{t} = \frac{2\pi}{\hbar^2}|\langle f|\hat{V}|i\rangle|^2\,\delta(E_f - E_i - \hbar\omega)$$

Summing over all final states with density $\rho(E_f)$:

$$\Gamma = \int \frac{d|c_f|^2}{dt}\,\rho(E_f)\,dE_f = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f) \quad \blacksquare$$

### 11.2 Selection Rules for Electric Dipole Transitions

The electric dipole matrix element:

$$\langle f|\hat{\mathbf{d}}|i\rangle = -e\langle f|\mathbf{r}|i\rangle$$

For hydrogen-like atoms, the selection rules are:

- $\Delta l = \pm 1$ (parity change required)
- $\Delta m = 0, \pm 1$ (for $z$, $x \pm iy$ polarisation respectively)
- $\Delta n$ unrestricted

The transition rate for $2p \to 1s$ in hydrogen:

$$A_{2p \to 1s} = \frac{\omega^3}{3\pi\varepsilon_0\hbar c^3}|\langle 1s|e\mathbf{r}|2p\rangle|^2$$

With $|\langle 1s|z|2p, m=0\rangle| = \frac{2^7\sqrt{2}}{3^5}a_0$This gives
$A_{2p \to 1s} \approx 6.3 \times 10^8$ s$^{-1}$Corresponding to a lifetime $\tau \approx 1.6$ ns.

### 11.3 Spontaneous Emission and Einstein Coefficients

The **Einstein $A$ coefficient** (spontaneous emission rate) is related to the $B$ coefficient
(stimulated emission/absorption):

$$A_{21} = \frac{\hbar\omega^3}{\pi^2 c^3}B_{21}$$

This relation, derived by Einstein in 1917 using thermodynamic arguments (detailed balance in a
blackbody radiation field), was one of the first indications that spontaneous emission requires
quantum electrodynamics.

<details>
<summary>Worked Example 11.1: Selection Rules for Hydrogen</summary>

Consider the transition $3d \to 1s$ in hydrogen. Is this an allowed E1 transition?

The matrix element involves the integral
$\langle n'l'm'|\mathbf{r}|nlm\rangle = \langle 1,0,0|r_q|3,2,m\rangle$ where $r_q$ is a spherical
tensor component.

By the Wigner--Eckart theorem and parity selection rules:

- $\Delta l = 0 - 2 = -2 \neq \pm 1$: **forbidden for E1**

The $3d \to 1s$ transition can proceed via:

- **E2 (electric quadrupole):** $\Delta l = 0, \pm 2$Rate $\sim \alpha(kR)^2$ times slower than E1
- **M1 (magnetic dipole):** requires $\Delta l = 0$Not applicable here
- **Two-photon decay:** $3d \to 2p \to 1s$ (two successive E1 transitions)

The $3d \to 2p$ transition ($\Delta l = -1$) is E1-allowed and dominates, with
$A_{3d \to 2p} \sim 6.4 \times 10^7$ s$^{-1}$.

</details>

