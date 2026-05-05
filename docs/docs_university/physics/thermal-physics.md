---
title: Thermal Physics
description:
  "University-level notes on Thermal Physics: 1. The Laws of Thermodynamics; 1.1 Zeroth Law and Temperature; 1.2 First Law; 1.3 Second Law and Entropy; 1.4 Third Law."
date: 2026-04-26T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: thermal-physics
---

## 1. The Laws of Thermodynamics

### 1.1 Zeroth Law and Temperature

**Zeroth Law:** If system $A$ is in thermal equilibrium with system $B$, and $B$ is in thermal equilibrium with system $C$, then $A$ is in thermal equilibrium with $C$.

This establishes **temperature** as a transitive equivalence relation: two systems are in thermal equilibrium if and only if they have the same temperature.

**Definition.** **Temperature** is the quantity that is equal for all systems in mutual thermal equilibrium. The **ideal gas scale** defines temperature via

$$PV = Nk_BT$$

where $k_B = 1.381 \times 10^{-23}$ J/K is Boltzmann's constant.

### 1.2 First Law

**First Law:** The change in internal energy of a system equals the heat added minus the work done by the system:

$$dU = \delta Q - \delta W$$

For a reversible process: $\delta W = P\,dV$ (PV work), giving

$$dU = \delta Q - P\,dV$$

**Proposition 1.1.** For an adiabatic process ($\delta Q = 0$): $dU = -P\,dV$. For an isochoric process ($dV = 0$): $dU = \delta Q$.

**Definition.** The **heat capacity at constant volume** and **heat capacity at constant pressure** are:

$$C_V = \left(\frac{\partial U}{\partial T}\right)_V, \qquad C_P = \left(\frac{\partial H}{\partial T}\right)_P$$

where $H = U + PV$ is the enthalpy.

**Proposition 1.2.** For an ideal gas: $C_P - C_V = Nk_B$.

*Proof.* $H = U + PV = U + Nk_BT$. Therefore $C_P = (\partial H/\partial T)_P = (\partial U/\partial T)_P + Nk_B = C_V + Nk_B$ (since $U$ depends only on $T$ for an ideal gas). $\blacksquare$

### 1.3 Second Law and Entropy

**Second Law (Clausius statement):** Heat cannot spontaneously flow from a colder body to a hotter body.

**Second Law (Kelvin-Planck statement):** No process can convert heat entirely into work in a cyclic manner without other effects.

These are equivalent: each implies the other.

**Definition.** The **entropy** change for a reversible process is

$$dS = \frac{\delta Q_{\mathrm{rev}}}{T}$$

**Theorem 1.3 (Clausius Inequality).** For any cyclic process:

$$\oint \frac{\delta Q}{T} \leq 0$$

with equality for reversible processes.

*Proof.* Consider a system undergoing a cycle interacting with $n$ heat reservoirs at temperatures $T_1, \ldots, T_n$, exchanging heat $Q_i$ with reservoir $i$. The Clausius inequality follows from the impossibility of a perpetual motion machine of the second kind: a cycle that absorbs heat from a single reservoir and does work would violate the Kelvin-Planck statement. The detailed proof uses auxiliary Carnot engines operating between pairs of reservoirs. $\blacksquare$

**Corollary 1.4 (Principle of Increasing Entropy).** For an isolated system, $dS \geq 0$, with equality for reversible processes.

### 1.4 Third Law

**Third Law (Nernst):** As $T \to 0^+$, the entropy of a perfect crystal approaches a constant (which can be taken as zero):

$$\lim_{T \to 0} S(T) = 0$$

**Consequences:**

1. It is impossible to reach absolute zero in a finite number of steps.
2. The heat capacities $C_V$ and $C_P$ approach zero as $T \to 0$.

### 1.5 Thermodynamic Potentials

| Potential | Natural Variables | Differential | Name |
|---|---|---|---|
| $U$ | $S, V$ | $dU = TdS - PdV$ | Internal Energy |
| $H = U + PV$ | $S, P$ | $dH = TdS + VdP$ | Enthalpy |
| $F = U - TS$ | $T, V$ | $dF = -SdT - PdV$ | Helmholtz Free Energy |
| $G = H - TS$ | $T, P$ | $dG = -SdT + VdP$ | Gibbs Free Energy |

**Theorem 1.5.** At equilibrium for a system in contact with a heat bath at temperature $T$: $F$ is minimised at constant $T, V$; $G$ is minimised at constant $T, P$.

*Proof.* For constant $T, V$: $dF = dU - TdS = \delta Q - PdV - TdS$. At equilibrium $dS \geq \delta Q/T$ (Clausius inequality), so $dF \leq 0$. Hence $F$ decreases and is minimised at equilibrium. The argument for $G$ is analogous. $\blacksquare$

### 1.6 Maxwell Relations

From the exactness of $dU = TdS - PdV$ (and similarly for $dH$, $dF$, $dG$), the equality of mixed partial derivatives gives four **Maxwell relations**:

1. $\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V$
2. $\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$
3. $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$
4. $\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$

<details>
<summary>Worked Example: Deriving $(\partial U/\partial V)_T$ for an Ideal Gas</summary>

*Solution.* We use the thermodynamic identity $dU = TdS - PdV$. Dividing by $dV$ at constant $T$:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial S}{\partial V}\right)_T - P$$

By the third Maxwell relation: $(\partial S/\partial V)_T = (\partial P/\partial T)_V$. For an ideal gas, $P = Nk_BT/V$, so $(\partial P/\partial T)_V = Nk_B/V$.

Therefore:

$$\left(\frac{\partial U}{\partial V}\right)_T = T \cdot \frac{Nk_B}{V} - \frac{Nk_BT}{V} = 0$$

This confirms that the internal energy of an ideal gas depends only on temperature. $\blacksquare$

</details>

### 1.7 Common Pitfalls

- **$\delta Q$ and $\delta W$ are not exact differentials.** Unlike $dU$, the heat and work are path-dependent. Only $\delta Q_{\mathrm{rev}}/T = dS$ is exact.
- **The second law prohibits certain processes but does not explain *why* they occur.** Statistical mechanics provides the microscopic explanation: entropy measures the number of microstates, and the system evolves toward the macrostate with the most microstates.
- **Free energy minima determine equilibrium, not energy minima.** At constant temperature, the system minimises $F$ (or $G$), not $U$.

---

## 2. Statistical Mechanics

### 2.1 Microstates and Macrostates

A **microstate** is a complete specification of the state of a system (positions and momenta of all particles). A **macrostate** is specified by macroscopic variables (energy, volume, particle number).

The **fundamental postulate of statistical mechanics** states that for an isolated system in equilibrium, every accessible microstate is equally probable.

**Definition.** The **multiplicity** $\Omega(E, V, N)$ is the number of microstates consistent with the macrostate $(E, V, N)$. The **statistical entropy** is

$$S = k_B \ln \Omega$$

**Proposition 2.1.** This definition of entropy agrees with the thermodynamic entropy: $\Delta S = k_B \ln(\Omega_f / \Omega_i)$.

### 2.2 The Boltzmann Distribution

**Theorem 2.1 (Canonical Ensemble).** For a system in thermal equilibrium with a heat bath at temperature $T$, the probability of the system being in microstate $i$ with energy $E_i$ is

$$P_i = \frac{1}{Z} e^{-E_i / (k_B T)}$$

where the **partition function** is

$$Z = \sum_{i} e^{-E_i / (k_B T)}$$

*Proof.* Consider the combined system (system + reservoir) with total energy $E_{\mathrm{tot}}$. The probability of the system being in state $i$ is proportional to the number of reservoir microstates compatible with it, which is $\Omega_R(E_{\mathrm{tot}} - E_i)$. Using $S_R = k_B \ln \Omega_R$:

$$P_i \propto \Omega_R(E_{\mathrm{tot}} - E_i) = \exp\left(\frac{S_R(E_{\mathrm{tot}} - E_i)}{k_B}\right)$$

Expanding $S_R$ around $E_{\mathrm{tot}}$: $S_R(E_{\mathrm{tot}} - E_i) \approx S_R(E_{\mathrm{tot}}) - E_i \left(\frac{\partial S_R}{\partial E}\right) = S_R(E_{\mathrm{tot}}) - \frac{E_i}{T}$

since $(\partial S_R / \partial E) = 1/T$. Therefore $P_i \propto e^{-E_i / (k_BT)}$, and normalising gives the result. $\blacksquare$

### 2.3 Thermodynamic Quantities from the Partition Function

**Theorem 2.2.** The partition function determines all thermodynamic quantities:

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}, \quad F = -k_B T \ln Z, \quad S = \frac{\langle E \rangle - F}{T}$$

where $\beta = 1/(k_BT)$.

*Proof.* $\langle E \rangle = \sum_i E_i P_i = \frac{1}{Z}\sum_i E_i e^{-\beta E_i} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta} = -\frac{\partial \ln Z}{\partial \beta}$.

$F = -k_BT \ln Z$ follows from $F = U - TS = \langle E \rangle - TS$ and the identification $Z = e^{-\beta F}$. $\blacksquare$

### 2.4 Ideal Gas

**Theorem 2.3 (Partition Function of an Ideal Gas).** For $N$ indistinguishable particles in a 3D box of volume $V$:

$$Z_N = \frac{1}{N!}\left(\frac{V}{\lambda_{\mathrm{th}}^3}\right)^N, \quad \lambda_{\mathrm{th}} = \frac{h}{\sqrt{2\pi m k_B T}}$$

where $\lambda_{\mathrm{th}}$ is the **thermal de Broglie wavelength**.

*Proof.* The single-particle energy levels in a 3D box of side $L$ ($V = L^3$) are:

$$\varepsilon_{n_x, n_y, n_z} = \frac{h^2}{8mL^2}(n_x^2 + n_y^2 + n_z^2)$$

The single-particle partition function is:

$$z = \sum_{n_x, n_y, n_z = 0}^{\infty} e^{-\beta h^2(n_x^2 + n_y^2 + n_z^2)/(8mL^2)} \approx \left(\int_0^{\infty} e^{-\beta h^2 n^2/(8mL^2)} dn\right)^3 = \left(\frac{L}{h}\sqrt{\frac{2\pi m}{\beta}}\right)^3 = \frac{V}{\lambda_{\mathrm{th}}^3}$$

For $N$ indistinguishable particles (correct Boltzmann counting): $Z_N = z^N / N!$. $\blacksquare$

**Corollary 2.4.** From $Z_N$, we recover the ideal gas law:

$$F = -k_BT \ln Z_N = -k_BT\left[N\ln\left(\frac{V}{\lambda_{\mathrm{th}}^3}\right) - \ln N!\right]$$

$$P = -\left(\frac{\partial F}{\partial V}\right)_T = \frac{Nk_BT}{V}$$

giving $PV = Nk_BT$.

### 2.5 The Equipartition Theorem

**Theorem 2.5 (Equipartition).** For a classical system in thermal equilibrium, each quadratic degree of freedom in the Hamiltonian contributes $\frac{1}{2}k_BT$ to the average energy.

*Proof.* Consider a single degree of freedom with Hamiltonian $H = ap^2$ (or $bq^2$). The average energy is:

$$\langle ap^2 \rangle = \frac{\int_{-\infty}^{\infty} ap^2 e^{-\beta ap^2}\, dp}{\int_{-\infty}^{\infty} e^{-\beta ap^2}\, dp} = -\frac{\partial}{\partial \beta}\ln\left(\int_{-\infty}^{\infty} e^{-\beta ap^2}\, dp\right) = -\frac{\partial}{\partial \beta}\ln\left(\sqrt{\frac{\pi}{a\beta}}\right) = \frac{1}{2\beta} = \frac{k_BT}{2}$$

The same calculation for $bq^2$ gives another $k_BT/2$. $\blacksquare$

**Application.** A monatomic ideal gas has 3 translational degrees of freedom: $U = \frac{3}{2}Nk_BT$ and $C_V = \frac{3}{2}Nk_B$. A diatomic gas also has 2 rotational degrees of freedom: $U = \frac{5}{2}Nk_BT$ and $C_V = \frac{5}{2}Nk_B$ (at temperatures where vibration is frozen out).

### 2.6 Quantum Statistical Distributions

**Fermi--Dirac Statistics** (for fermions, particles with half-integer spin):

$$\langle n_i \rangle = \frac{1}{e^{(E_i - \mu)/(k_BT)} + 1}$$

where $\mu$ is the **chemical potential**.

**Bose--Einstein Statistics** (for bosons, particles with integer spin):

$$\langle n_i \rangle = \frac{1}{e^{(E_i - \mu)/(k_BT)} - 1}$$

**Maxwell--Boltzmann Statistics** (classical limit, $\mu$ very negative):

$$\langle n_i \rangle = e^{-(E_i - \mu)/(k_BT)}$$

The classical limit applies when the thermal de Broglie wavelength is much smaller than the inter-particle spacing: $\lambda_{\mathrm{th}}^3 \ll V/N$.

### 2.7 The Fermi Gas

**Definition.** The **Fermi energy** $\varepsilon_F$ is the chemical potential at $T = 0$:

$$\varepsilon_F = \frac{\hbar^2}{2m}\left(3\pi^2 n\right)^{2/3}$$

where $n = N/V$ is the particle number density.

**Proposition 2.6.** At $T = 0$, all states with $E \leq \varepsilon_F$ are occupied and all states with $E > \varepsilon_F$ are empty. The ground-state energy of a 3D Fermi gas is:

$$U_0 = \frac{3}{5}N\varepsilon_F$$

*Proof.* $U_0 = \int_0^{\varepsilon_F} E \cdot g(E)\, dE$ where $g(E) = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt{E}$ is the density of states. Evaluating: $U_0 = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} \cdot \frac{2}{5}\varepsilon_F^{5/2} = \frac{3}{5}N\varepsilon_F$. $\blacksquare$

### 2.8 Blackbody Radiation

**Planck's Law** gives the spectral energy density of blackbody radiation:

$$u(\nu, T) = \frac{8\pi h \nu^3}{c^3} \cdot \frac{1}{e^{h\nu/(k_BT)} - 1}$$

**Stefan--Boltzmann Law:** The total radiated power per unit area:

$$j = \sigma T^4, \quad \sigma = \frac{\pi^2 k_B^4}{60 \hbar^3 c^2}$$

**Wien's Displacement Law:** The peak frequency satisfies $\nu_{\mathrm{max}} / T = \mathrm{const}$.

### 2.9 Worked Examples

**Problem.** Calculate the Fermi energy and Fermi temperature for copper. Given: electron density $n \approx 8.5 \times 10^{28}\,\mathrm{m}^{-3}$, $m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}} \times (3\pi^2 \times 8.5 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 8.5 \times 10^{28})^{1/3} = (2.52 \times 10^{30})^{1/3} \approx 1.36 \times 10^{10}$

$(3\pi^2 n)^{2/3} = (1.36 \times 10^{10})^2 = 1.85 \times 10^{20}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 1.85 \times 10^{20} \approx 1.13 \times 10^{-18}\,\mathrm{J} \approx 7.0\,\mathrm{eV}$

$T_F = \varepsilon_F / k_B = 1.13 \times 10^{-18} / 1.381 \times 10^{-23} \approx 81800\,\mathrm{K}$

The Fermi temperature is much larger than room temperature, confirming that copper electrons are in the degenerate regime. $\blacksquare$

</details>

<details>
<summary>Worked Example: Entropy of Mixing</summary>

*Solution.* Two ideal gases of $N$ particles each, initially separated by a partition, are allowed to mix. Calculate the entropy change.

Before mixing: the total entropy is $2 \times Nk_B\left[\ln\left(\frac{V}{N\lambda^3}\right) + \frac{5}{2}\right]$ (for a monatomic gas).

After mixing: each gas occupies volume $2V$, so the total entropy is:

$$S_f = 2 \times Nk_B\left[\ln\left(\frac{2V}{N\lambda^3}\right) + \frac{5}{2}\right]$$

$$\Delta S_{\mathrm{mix}} = S_f - S_i = 2Nk_B\ln\left(\frac{2V}{N\lambda^3}\right) - 2Nk_B\ln\left(\frac{V}{N\lambda^3}\right) = 2Nk_B\ln 2$$

For 1 mole of each gas: $\Delta S_{\mathrm{mix}} = 2R\ln 2 \approx 11.5\,\mathrm{J/K}$.

**Gibbs paradox.** If the two gases are identical, the entropy of mixing is zero (no physical change). The resolution is that identical particles are indistinguishable, and the correct counting already accounts for this via the $1/N!$ factor in the partition function. $\blacksquare$

</details>

### 2.10 Common Pitfalls

- **The classical limit does not always apply.** When $\lambda_{\mathrm{th}}^3 \gtrsim V/N$, quantum statistics (Fermi-Dirac or Bose-Einstein) must be used. This is critical for electrons in metals and for helium-4 at low temperatures.
- **The Boltzmann distribution applies to systems in contact with a heat bath, not isolated systems.** For isolated systems, use the microcanonical ensemble (all accessible microstates equally probable).
- **The partition function must account for indistinguishability.** The $1/N!$ factor in $Z_N$ is essential for obtaining the correct entropy (otherwise the entropy is not extensive and the Gibbs paradox arises).
