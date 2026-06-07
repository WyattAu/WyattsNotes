---
title: The Grand Canonical Ensemble
tags:
  - Physics
  - University
---

### 3.1 Definition and Motivation

In many physical situations, a system exchanges both energy and particles with a reservoir. The
**grand canonical ensemble** describes such open systems. The macroscopic variables are the chemical
potential $\mu$The volume $V$And the temperature $T$.

**Definition.** The **grand partition function** is

$$\Xi = \sum_{N=0}^{\infty} \sum_{i} e^{-\beta(E_{i}^{(N)} - \mu N)}$$

Where the outer sum is over all possible particle numbers $N$ and the inner sum is over all states
with $N$ particles.

The probability that the system is in state $i$ with $N$ particles is

$$P_{i,N} = \frac{e^{-\beta(E_{i}^{(N)} - \mu N)}}{\Xi}$$

### 3.2 Thermodynamic Relations

**Theorem 3.1.** The grand potential $\Phi_G = -k_BT \ln \Xi$ satisfies

$$\Phi_G = F - \mu N = -PV$$

_Proof._ For a classical ideal gas, $\Xi = \sum_{N=0}^{\infty} e^{\beta \mu N} Z_N$ where
$Z_N = z^N/N!$ is the canonical partition function. Therefore:

$$\Xi = \sum_{N=0}^{\infty} \frac{(z e^{\beta \mu})^N}{N!} = \exp(z e^{\beta \mu})$$

$$\Phi_G = -k_BT \ln \Xi = -k_BT \cdot z e^{\beta \mu} = -PV$$

The last equality follows from the ideal gas law $PV = Nk_BT$ with $N = z e^{\beta \mu}$. More
generally, $\Phi_G = -PV$ holds for all systems. $\blacksquare$

**Key relations from $\ln \Xi$:**

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}, \quad \langle E \rangle = -\frac{\partial \ln \Xi}{\partial \beta}\bigg|_{\mu,V} + \frac{\mu}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}$$

$$S = k_B\left(\ln \Xi + \beta \langle E \rangle - \beta \mu \langle N \rangle\right)$$

### 3.3 Number Fluctuations

**Theorem 3.2.** The particle number fluctuations in the grand canonical ensemble satisfy

$$\langle N^2 \rangle - \langle N \rangle^2 = k_BT \left(\frac{\partial \langle N \rangle}{\partial \mu}\right)_{T,V}$$

_Proof._
$\langle N^2 \rangle - \langle N \rangle^2 = \frac{1}{\beta^2}\frac{\partial^2 \ln \Xi}{\partial \mu^2} = \frac{1}{\beta}\frac{\partial}{\partial \mu}\left(\frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\right) = \frac{1}{\beta}\frac{\partial \langle N \rangle}{\partial \mu}$.
$\blacksquare$

For an ideal gas, $\langle N \rangle = z e^{\beta \mu}$So
$\partial \langle N \rangle / \partial \mu = \beta \langle N \rangle$Giving relative fluctuations:

$$\frac{\langle N^2 \rangle - \langle N \rangle^2}{\langle N \rangle^2} = \frac{1}{\langle N \rangle}$$

This is Poisson .../4-statistics-and-probability/2_statistics: fluctuations scale as
$1/\sqrt{N}$Negligible for macroscopic systems.

### 3.4 Worked Example: Ideal Gas in the Grand Canonical Ensemble

**Problem.** Compute $\Xi$, $\langle N \rangle$And $\langle E \rangle$ for a classical ideal gas in
the grand canonical ensemble.

<details>
<summary>Solution</summary>

The single-particle partition function is $z = V/\lambda_{\mathrm{th}^3}$ where
$\lambda_{\mathrm{th} = h/\sqrt{2\pi m k_BT}}$. The canonical partition function for $N$
indistinguishable particles is $Z_N = z^N/N!$. The grand partition function:

$$\Xi = \sum_{N=0}^{\infty} \frac{z^N}{N!} e^{\beta \mu N} = \sum_{N=0}^{\infty} \frac{(ze^{\beta \mu})^N}{N!} = e^{ze^{\beta \mu}}$$

$$\ln \Xi = ze^{\beta \mu} = \frac{V}{\lambda_{\mathrm{th}^3} e^{\beta \mu}}$$

Average particle number:

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu} = \frac{V}{\lambda_{\mathrm{th}^3} e^{\beta \mu}}$$

Solving for the chemical potential: $\mu = k_BT \ln(\langle N \rangle \lambda_{\mathrm{th}^3 / V)}$.

Average energy (using
$\langle E \rangle = -\partial \ln \Xi / \partial \beta + \mu \langle N \rangle / (k_BT)$):

$$\langle E \rangle = \frac{3}{2}\langle N \rangle k_BT$$

This recovers the equipartition result. $\blacksquare$

</details>

---

