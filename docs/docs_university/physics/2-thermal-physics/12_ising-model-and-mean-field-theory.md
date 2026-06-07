---
title: Ising Model and Mean-Field Theory
tags:
  - Physics
  - University
---

### 12.1 The Ising Model

The Ising model is the simplest model of interacting spins on a lattice. Each site $i$ has a spin
variable $\sigma_i \in \{-1, +1\}$.

$$\mathcal{H} = -J\sum_{\langle i,j \rangle}\sigma_i\sigma_j - h\sum_i \sigma_i$$

Where $J > 0$ is the ferromagnetic coupling, $\langle i,j \rangle$ denotes nearest-neighbor pairs,
and $h$ is the external magnetic field.

**Partition function** (in 1D with periodic boundary conditions, $N$ spins):

$$Z = \sum_{\{\sigma\}} \exp\!\left(\beta J \sum_i \sigma_i \sigma_{i+1} + \beta h \sum_i \sigma_i\right)$$

This can be evaluated using the **transfer matrix** method. Define:

$$\mathbf{T} = \begin{pmatrix} e^{\beta J + \beta h} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J - \beta h} \end{pmatrix}$$

Then $Z = \text{Tr}(\mathbf{T}^N) = \lambda_+^N + \lambda_-^N$ where $\lambda_\pm$ are the
eigenvalues of $\mathbf{T}$.

In the thermodynamic limit ($N \to \infty$), $Z = \lambda_+^N$ where:

$$\lambda_+ = e^{\beta J}\cosh(\beta h) + \sqrt{e^{2\beta J}\sinh^2(\beta h) + e^{-2\beta J}}$$

**Key result:** The 1D Ising model has **no** phase transition at $T > 0$. The magnetization
$m = \langle\sigma\rangle \to 0$ as $h \to 0$ for all finite $T$.

### 12.2 Mean-Field Approximation

The mean-field (Weiss) approximation replaces each neighboring spin by its thermal average:

$$\sigma_i\sigma_j \approx \sigma_i\langle\sigma_j\rangle + \langle\sigma_i\rangle\sigma_j - \langle\sigma_i\rangle\langle\sigma_j\rangle$$

The effective Hamiltonian becomes:

$$\mathcal{H}_{\text{MF} = -\sum_i \left(zJm + h\right)\sigma_i + \frac{1}{2}N zJ m^2}$$

Where $z$ is the coordination number and $m = \langle\sigma\rangle$.

Each spin is independent, so:

$$m = \tanh\!\left[\beta(zJm + h)\right]$$

This is a **self-consistency equation** for $m$. For $h = 0$:

$$m = \tanh(\beta zJm)$$

Expanding for small $m$: $m \approx \beta zJ m - \frac{1}{3}(\beta zJ)^3 m^3$. Nonzero $m$ exists
when:

$$\beta zJ > 1 \implies T_c^{\text{MF} = \frac{zJ}{k_B}}$$

### 12.3 Exact Solution: 2D Ising Model (Onsager, 1944)

Onsager's exact solution for the square lattice gives:

$$T_c = \frac{2J}{k_B \ln(1 + \sqrt{2})} \approx \frac{2.269J}{k_B}$$

The spontaneous magnetization below $T_c$:

$$m = \left[1 - \sinh^{-4}(2\beta_c J)\right]^{1/8}, \quad T < T_c$$

The specific heat diverges logarithmically at $T_c$:

$$C \sim -A\ln|T - T_c|$$

<details>
<summary>Worked Example 12.1: Mean-Field $T_c$ for Different Lattices</summary>

For $J = 1$ (in units of $k_B$):

| Lattice      | $z$ | $T_c^{\text{MF}}$ |
| ------------ | --- | ----------------- |
| Linear chain | 2   | 2                 |
| Square       | 4   | 4                 |
| Simple cubic | 6   | 6                 |
| BCC          | 8   | 8                 |
| FCC          | 12  | 12                |

Compare with the exact $T_c$: 1D has no transition, 2D square has
$T_c \approx 2.269$3D (numerical) $T_c \approx 4.51$. Mean-field overestimates $T_c$ in all cases,
with the error decreasing as $z$ (dimensionality) increases.

</details>

<details>
<summary>Worked Example 12.2: 1D Ising Free Energy</summary>

For the 1D Ising model with $h = 0$The transfer matrix eigenvalues are:

$$\lambda_\pm = e^{\beta J} \pm e^{-\beta J}$$

The free energy per spin in the thermodynamic limit:

$$f = -k_B T \ln\lambda_+ = -k_B T \ln\!\left(2\cosh\frac{J}{k_B T}\right)$$

The internal energy per spin:

$$u = -\frac{\partial \ln\lambda_+}{\partial \beta} = -J\tanh\frac{J}{k_B T}$$

The specific heat:

$$c = \frac{\partial u}{\partial T} = \frac{J^2}{k_B T^2}\text{sech}^2\!\left(\frac{J}{k_B T}\right)$$

This is a smooth function with no singularity — confirming no phase transition in 1D.

</details>

