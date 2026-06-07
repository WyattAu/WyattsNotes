---
title: Thermodynamic Response Functions
tags:
  - Physics
  - University
---

### 17.1 General Relations

Response functions measure how thermodynamic quantities change with state variables. The most
important are:

- Heat capacity: $C_X = T(\partial S/\partial T)_X$
- Compressibility: $\kappa_T = -\frac{1}{V}(\partial V/\partial P)_T$
- Thermal expansion: $\alpha = \frac{1}{V}(\partial V/\partial T)_P$

These satisfy the identity:

$$C_P - C_V = TV\frac{\alpha^2}{\kappa_T}$$

For an ideal gas ($\alpha = 1/T$, $\kappa_T = 1/P$):

$$C_P - C_V = TV \cdot \frac{1}{T^2} \cdot P = Nk_B$$

### 17.2 Maxwell Relations

From the exact differentials of thermodynamic potentials:

| Potential         | Differential                                             | Maxwell Relation |
| ----------------- | -------------------------------------------------------- | ---------------- |
| $dU = TdS - PdV$  | $(\partial T/\partial V)_S = -(\partial P/\partial S)_V$ |
| $dH = TdS + VdP$  | $(\partial T/\partial P)_S = (\partial V/\partial S)_P$  |
| $dF = -SdT - PdV$ | $(\partial S/\partial V)_T = (\partial P/\partial T)_V$  |
| $dG = -SdT + VdP$ | $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$ |

### 17.3 Jacobian Formalism

Thermodynamic derivatives can be systematically manipulated using the **Jacobian** notation:

$$\frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} (\partial x/\partial u)_v & (\partial x/\partial v)_u \\ (\partial y/\partial u)_v & (\partial y/\partial v)_u \end{vmatrix}$$

Properties:

- $(\partial x/\partial y)_z = \frac{\partial(x,z)}{\partial(y,z)}$
- Chain rule:
  $\frac{\partial(x,y)}{\partial(u,v)} = \frac{\partial(x,y)}{\partial(w,z)}\cdot\frac{\partial(w,z)}{\partial(u,v)}$
- Triple product:
  $(\partial x/\partial y)_z (\partial y/\partial z)_x (\partial z/\partial x)_y = -1$

<details>
<summary>Worked Example 17.1: $C_P/C_V$ Ratio from Thermodynamic Derivatives</summary>

Starting from $C_P - C_V = TV\alpha^2/\kappa_T$:

$$\frac{C_P}{C_V} = 1 + \frac{TV\alpha^2}{\kappa_T C_V}$$

For an ideal monatomic gas ($C_V = 3Nk_B/2$):

$$\frac{C_P}{C_V} = 1 + \frac{Nk_B}{3Nk_B/2} = 1 + \frac{2}{3} = \frac{5}{3}$$

For a diatomic gas at room temperature ($C_V = 5Nk_B/2$):

$$\frac{C_P}{C_V} = 1 + \frac{Nk_B}{5Nk_B/2} = 1 + \frac{2}{5} = \frac{7}{5} = 1.4$$

</details>

## Common Pitfalls

1. **Confusing ensembles**: The microcanonical ensemble describes isolated systems (fixed
   $E, N, V$), the canonical ensemble systems in thermal contact with a heat bath (fixed $T, N, V$),
   and the grand canonical ensemble systems exchanging both energy and particles (fixed
   $T, \mu, V$). They give the same results in the thermodynamic limit, but differ for small
   systems.

2. **Negative temperatures**: These occur only for systems with a bounded energy spectrum (e.g.,
   spin systems). A negative temperature is actually _hotter_ than any positive temperature
   ($T = -\infty$ is the hottest positive temperature, and $T = 0^-$ is the coldest). They are not
   applicable to systems like the ideal gas.

3. **BEC critical density**: The critical density for BEC in a box is
   $n_c = \zeta(3/2)(mk_BT/2\pi\hbar^2)^{3/2}$. This is extremely low ($\sim 10^{14}$ cm$^{-3}$ at 1
   $\mu$K for Rb), but BEC in real experiments requires much lower temperatures because of the need
   to reach quantum degeneracy in a finite trap.

4. **Mean-field overestimates $T_c$**: The mean-field approximation $T_c^{\text{MF} = zJ/k_B}$
   systematically overestimates the true critical temperature because it neglects fluctuations. The
   error is largest in low dimensions (where fluctuations are strongest) and vanishes above the
   upper critical dimension ($d = 4$ for short-range Ising).

5. **Classical vs. Quantum .../4-statistics-and-probability/2_statistics**: At temperatures much
   higher than the degeneracy temperature $T_F$ (fermions) or $T_c$ (bosons), both Fermi--Dirac and
   Bose--Einstein distributions reduce to the Maxwell--Boltzmann distribution. The quantum
   corrections are of order $n\lambda_{\text{dB}^3}$ where
   $\lambda_{\text{dB} = h/\sqrt{2\pi mk_BT}}$ is the thermal de Broglie wavelength.

## Problems

<details>
<summary>Problem 1: Entropy of Mixing</summary>

Consider two ideal gases A and B, initially separated by a partition in a container of volume $V$.
Gas A has $N_A$ particles in volume $V_A$; gas B has $N_B$ particles in volume $V_B$With
$V_A + V_B = V$. The partition is removed and the gases mix isothermally at temperature $T$.

(a) Show that the entropy of mixing is:

$$\Delta S_{\text{mix} = -Nk_B\left[x\ln x + (1-x)\ln(1-x)\right] - Nk_B\left[y\ln y + (1-y)\ln(1-y)\right]}$$

Where $x = N_A/N$, $y = V_A/V$.

(b) Evaluate $\Delta S_{\text{mix}}$ for $N_A = N_B = N_0$, $V_A = V_B = V/2$ and show
$\Delta S_{\text{mix} = 2N_0k_B\ln 2}$.

(c) **Gibbs paradox**: If gases A and B are identical, the actual entropy change is zero. Explain
how the factor of $1/N!$ in the partition function resolves this paradox.

**Solution:**

(a) For ideal gas A initially in $V_A$ and finally in $V$:

$$\Delta S_A = N_Ak_B\ln\frac{V}{V_A} = N_Ak_B\ln\frac{1}{y} = -Nk_B x\ln y$$

Similarly $\Delta S_B = -Nk_B(1-x)\ln(1-y)$. The total:

$$\Delta S = -Nk_B[x\ln y + (1-x)\ln(1-y)]$$

Note: The more general form includes contributions from the number of particles.

(b) With $x = 1/2$, $y = 1/2$:

$$\Delta S = -2N_0k_B\left(\frac{1}{2}\ln\frac{1}{2}\right) = -2N_0k_B\left(-\frac{1}{2}\ln 2\right) = 2N_0k_B\ln 2$$

(c) The Sackur--Tetrode equation includes $-Nk_B\ln N + Nk_B = -k_B\ln N!$Which accounts for the
indistinguishability of particles. For identical gases, the "before" and "after" states are the same
(same $N$, $V$, $E$), so $\Delta S = 0$. Without the $1/N!$ factor, we would get the same non-zero
result for mixing identical gases — Gibbs' paradox.

</details>

<details>
<summary>Problem 2: Ising Model Phase Diagram</summary>

Consider the mean-field Ising model on a square lattice ($z = 4$).

(a) Find the magnetization $m$ as a function of reduced temperature $t = T/T_c^{\text{MF}}$ in zero
field.

(b) Find the susceptibility $\chi$ on both sides of $T_c$.

(c) Calculate the specific heat jump at $T_c$.

**Solution:**

(a) The self-consistency equation is $m = \tanh(4\beta Jm) = \tanh(m/t)$ since
$T_c^{\text{MF} = 4J/k_B}$.

For $t < 1$: $m$ satisfies $m = \tanh(m/t)$. For small $m/t$:

$$m \approx \frac{m}{t} - \frac{1}{3}\left(\frac{m}{t}\right)^3 \implies m = \sqrt{3(1-t)}\, t \approx \sqrt{3}\,(1-t)^{1/2} \text{ near}  T_c$$

(b) From the Landau analysis: $\chi \propto |T - T_c|^{-1}$I.e., $\gamma = 1$.

Explicitly: $\chi^{-1} = k_B T(1 - t^{-1}\text{sech}^2(m/t))$. Near $T_c$: $\chi \sim 1/(T - T_c)$.

(c) The specific heat jump is:

$$\Delta C = \frac{3Nk_B}{2} = 1.5\, Nk_B$$

(derived from the mean-field free energy $f = \frac{1}{2}k_BT_c m^2 + \frac{1}{4}k_BT_c m^4$ near
$T_c$.)

</details>

<details>
<summary>Problem 3: Photon Gas and Blackbody Radiation</summary>

Photons are massless bosons with zero chemical potential ($\mu = 0$).

(a) Show that the Planck distribution for the photon number in mode $\omega$ is
$\langle n_\omega \rangle = 1/(e^{\beta\hbar\omega} - 1)$.

(b) Derive the Stefan--Boltzmann law for the total energy density: $u = aT^4$ where
$a = \pi^2k_B^4/(15\hbar^3 c^3)$.

(c) The cosmic microwave background has $T = 2.725$ K. Calculate the photon energy density and
number density.

**Solution:**

(a) For bosons with $\mu = 0$: $\langle n \rangle = 1/(e^{\beta\epsilon} - 1)$. With
$\epsilon = \hbar\omega$: $\langle n_\omega \rangle = 1/(e^{\beta\hbar\omega} - 1)$.

(b) Density of photon states in 3D: $g(\omega) = V\omega^2/(\pi^2 c^3)$ (2 polarizations).

$$u = \frac{1}{V}\int_0^\infty \hbar\omega\,\langle n_\omega \rangle\, g(\omega)\, d\omega = \frac{\hbar}{\pi^2 c^3}\int_0^\infty \frac{\omega^3}{e^{\beta\hbar\omega} - 1}\, d\omega$$

With $x = \beta\hbar\omega$:

$$u = \frac{(k_BT)^4}{\pi^2\hbar^3 c^3}\int_0^\infty \frac{x^3}{e^x - 1}\, dx = \frac{(k_BT)^4}{\pi^2\hbar^3 c^3}\cdot\frac{\pi^4}{15} = \frac{\pi^2 k_B^4}{15\hbar^3 c^3}\, T^4$$

(c) $u = aT^4$ with $a = 7.566 \times 10^{-16}$ J$\cdot$m$^{-3}$, $\cdot$K$^{-4}$:

$$u = 7.566 \times 10^{-16} \times (2.725)^4 = 7.566 \times 10^{-16} \times 55.15 = 4.17 \times 10^{-14} \text{ J/m}^3$$

Number density:

$$n_\gamma = \frac{2\zeta(3)}{\pi^2}\left(\frac{k_BT}{\hbar c}\right)^3 = \frac{2 \times 1.202}{\pi^2}\left(\frac{1.38 \times 10^{-23} \times 2.725}{1.055 \times 10^{-34} \times 3 \times 10^8}\right)^3$$

$$= 0.244 \times (1.193 \times 10^3)^3 \approx 0.244 \times 1.698 \times 10^9 \approx 4.14 \times 10^8 \text{ m}^{-3}$$

</details>

<details>
<summary>Problem 4: Chemical Equilibrium</summary>

For the dissociation reaction $\text{H_2} \rightleftharpoons 2\text{H}$The equilibrium constant is:

$$K(T) = \frac{n_H^2}{n_{H_2}} = \left(\frac{m_H k_B T}{2\pi\hbar^2}\right)^{3/2}\frac{(j_H + 1)^2}{2j_{H_2} + 1}\frac{1}{Z_{\text{rot}Z_{\text{vib}}e^{-D/(k_BT)}}}$$

Where $D = 4.52$ eV is the dissociation energy, $j_H = 1/2$, $j_{H_2} = 1$.

(a) At $T = 3000$ K, estimate the fraction of hydrogen that is dissociated.

(b) How does the degree of dissociation change with temperature and pressure?

**Solution:**

(a) At $T = 3000$ K, $k_BT = 0.259$ eV, so $D/(k_BT) = 17.5$Giving
$e^{-17.5} \approx 2.5 \times 10^{-8}$.

The translational factor:
$(m_H k_B T / 2\pi\hbar^2)^{3/2} \approx (2.5 \times 10^{30})^{3/2} \times (3000)^{3/2} \approx 10^{35}$
m$^{-3}$.

With rotational and vibrational partition functions at this temperature, $K \sim 10^{27}$ m$^{-3}$
(very rough estimate).

For a gas at $P = 1$ atm, $n_{\text{total} = P/(k_BT) \approx 2.4 \times 10^{25}}$ m$^{-3}$. Setting
$n_{H_2} \approx n_{\text{total}/2}$:

$$n_H = \sqrt{K \cdot n_{H_2}} \sim \sqrt{10^{27} \times 10^{25}} \sim 10^{26}$$

This suggests nearly complete dissociation at 3000 K and 1 atm (consistent with the known behavior
of hydrogen at these temperatures).

(b) Increasing temperature exponentially increases dissociation (via $e^{-D/(k_BT)}$). Increasing
pressure (at fixed $T$) _decreases_ dissociation because the reaction produces 2 moles from 1 mole
($\Delta n > 0$), so Le Chatelier's principle shifts equilibrium toward H$_2$.

</details>

<details>
<summary>Problem 5: Grand Canonical Ensemble</summary>

Consider a system in the grand canonical ensemble with chemical potential $\mu$Temperature $T$And
volume $V$.

(a) Derive the relation between the average particle number fluctuations and the isothermal
compressibility:

$$\frac{\langle N^2 \rangle - \langle N \rangle^2}{\langle N \rangle} = n k_B T \kappa_T$$

Where $n = N/V$.

(b) Evaluate this for an ideal gas and show $\langle(\Delta N)^2\rangle = \langle N \rangle$.

(c) For a Fermi gas at $T = 0$Show $\langle(\Delta N)^2\rangle = 0$ and explain physically.

**Solution:**

(a) In the grand canonical ensemble:

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \mathcal{Z}}{\partial \mu}$$

$$\langle(\Delta N)^2\rangle = \langle N^2 \rangle - \langle N \rangle^2 = \frac{1}{\beta}\frac{\partial \langle N \rangle}{\partial \mu} = \frac{1}{\beta}\frac{\partial}{\partial\mu}\left(\frac{PV}{k_BT}\right) = V\frac{\partial P}{\partial \mu}$$

Using $d\mu = -s\,dT + v\,dP$ at constant $T$: $(\partial\mu/\partial P)_T = v = 1/n$.

$$\langle(\Delta N)^2\rangle = \frac{V}{(\partial\mu/\partial P)_T} = nV = \langle N \rangle \cdot nk_B T \kappa_T$$

Wait, more carefully:

$$\langle(\Delta N)^2\rangle = k_BT \frac{\partial \langle N \rangle}{\partial \mu} = k_BT V \frac{\partial n}{\partial \mu} = k_BT V \frac{\partial n}{\partial P}\frac{\partial P}{\partial \mu}$$

Since $(\partial P/\partial \mu)_T = n$ (from $dG = -SdT + VdP + \mu dN$Or $P = nk_BT$ for ideal
gas):

$$\frac{\langle(\Delta N)^2\rangle}{\langle N \rangle} = k_BT \frac{\partial n}{\partial P} = nk_B T\kappa_T$$

Where $\kappa_T = -\frac{1}{V}(\partial V/\partial P)_T = \frac{1}{n}(\partial n/\partial P)_T$.

(b) For ideal gas: $\kappa_T = 1/P = 1/(nk_BT)$So:

$$\frac{\langle(\Delta N)^2\rangle}{\langle N \rangle} = nk_BT \cdot \frac{1}{nk_BT} = 1 \implies \langle(\Delta N)^2\rangle = \langle N \rangle$$

This is the standard Poisson .../4-statistics-and-probability/2_statistics result for
non-interacting particles.

(c) At $T = 0$The Fermi gas is in its ground state with exactly $N$ particles filling all states up
to $\epsilon_F$. There are no particle number fluctuations: $\langle(\Delta N)^2\rangle = 0$.
Physically, this is because adding or removing a particle costs a finite energy $\epsilon_F$So the
chemical potential is infinitely sharp.

</details>

