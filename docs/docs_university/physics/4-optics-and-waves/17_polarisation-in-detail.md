---
title: Polarisation in Detail
tags:
  - Physics
  - University
---

### 13.1 Jones Calculus

The **Jones vector** represents the polarisation state of a monochromatic plane wave:

$$\mathbf{E} = \begin{pmatrix} E_x \\ E_y \end{pmatrix} = \begin{pmatrix} A_x\,e^{i\delta_x} \\ A_y\,e^{i\delta_y} \end{pmatrix}$$

Optical elements are represented by $2 \times 2$ matrices:

- **Linear polariser** at angle $\theta$:
  $\mathbf{P}(\theta) = \begin{pmatrix}\cos^2\theta & \sin\theta\cos\theta \\ \sin\theta\cos\theta & \sin^2\theta\end{pmatrix}$

- **Quarter-wave plate** (fast axis horizontal, retardation $\pi/2$):
  $\mathbf{Q} = \begin{pmatrix}1 & 0 \\ 0 & e^{i\pi/2}\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & i\end{pmatrix}$

- **Half-wave plate** (retardation $\pi$):
  $\mathbf{H} = \begin{pmatrix}1 & 0 \\ 0 & e^{i\pi}\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$

**Theorem 13.1.** The output of a sequence of optical elements is the product of their Jones
matrices applied to the input Jones vector:

$$\mathbf{E}_{\mathrm{out} = \mathbf{M}_n \cdots \mathbf{M}_2\,\mathbf{M}_1\,\mathbf{E}_{\mathrm{in}}}$$

### 13.2 Stokes Parameters

For partially polarised light, the **Stokes parameters** are:

$$S_0 = |E_x|^2 + |E_y|^2, \quad S_1 = |E_x|^2 - |E_y|^2, \quad S_2 = 2\,\mathrm{Re}(E_x E_y^*), \quad S_3 = 2\,\mathrm{Im}(E_x E_y^*)$$

The **degree of polarisation** is

$$P = \frac{\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$$

For fully polarised light: $P = 1$. For unpolarised light: $S_1 = S_2 = S_3 = 0$.

### 13.3 Worked Example: Polarisation by Multiple Reflections

**Problem.** Unpolarised light is incident on a stack of $N$ glass plates at the Brewster angle.
Find the degree of polarisation of the transmitted light.

<details>
<summary>Solution</summary>

At the Brewster angle $\theta_B$The reflected light for the $p$-polarisation has zero amplitude
($r_p = 0$). The $s$-polarisation is partially reflected with reflectance
$R_s = ((n_1\cos\theta_i - n_2\cos\theta_t)/(n_1\cos\theta_i + n_2\cos\theta_t))^2$.

For one interface, the transmitted $p$-intensity is $T_p = 1$ and the transmitted $s$-intensity is
$T_s = 1 - R_s$. After $N$ interfaces:

$$I_p^{(N)} = I_0/2, \quad I_s^{(N)} = (I_0/2)(1 - R_s)^N$$

The degree of polarisation:

$$P = \frac{I_p^{(N)} - I_s^{(N)}}{I_p^{(N)} + I_s^{(N)}} = \frac{1 - (1 - R_s)^N}{1 + (1 - R_s)^N}$$

For $N \to \infty$: $P \to 1$. This is the principle behind "pile-of-plates" polarisers. For glass
($n = 1.5$) at $\theta_B \approx 56.3°$:
$R_s \approx ((1.5 \times 0.555 - \cos\theta_t)/(1.5 \times 0.555 + \cos\theta_t))^2$.

For five plates: $P = (1 - (1 - R_s)^5)/(1 + (1 - R_s)^5) \approx 50\%$.

$\blacksquare$

</details>

---

