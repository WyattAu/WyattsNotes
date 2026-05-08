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

---

## 3. The Grand Canonical Ensemble

### 3.1 Definition and Motivation

In many physical situations, a system exchanges both energy and particles with a reservoir. The **grand canonical ensemble** describes such open systems. The macroscopic variables are the chemical potential $\mu$, the volume $V$, and the temperature $T$.

**Definition.** The **grand partition function** is

$$\Xi = \sum_{N=0}^{\infty} \sum_{i} e^{-\beta(E_{i}^{(N)} - \mu N)}$$

where the outer sum is over all possible particle numbers $N$ and the inner sum is over all states with $N$ particles.

The probability that the system is in state $i$ with $N$ particles is

$$P_{i,N} = \frac{e^{-\beta(E_{i}^{(N)} - \mu N)}}{\Xi}$$

### 3.2 Thermodynamic Relations

**Theorem 3.1.** The grand potential $\Phi_G = -k_BT \ln \Xi$ satisfies

$$\Phi_G = F - \mu N = -PV$$

*Proof.* For a classical ideal gas, $\Xi = \sum_{N=0}^{\infty} e^{\beta \mu N} Z_N$ where $Z_N = z^N/N!$ is the canonical partition function. Therefore:

$$\Xi = \sum_{N=0}^{\infty} \frac{(z e^{\beta \mu})^N}{N!} = \exp(z e^{\beta \mu})$$

$$\Phi_G = -k_BT \ln \Xi = -k_BT \cdot z e^{\beta \mu} = -PV$$

The last equality follows from the ideal gas law $PV = Nk_BT$ with $N = z e^{\beta \mu}$. More generally, $\Phi_G = -PV$ holds for all systems. $\blacksquare$

**Key relations from $\ln \Xi$:**

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}, \quad \langle E \rangle = -\frac{\partial \ln \Xi}{\partial \beta}\bigg|_{\mu,V} + \frac{\mu}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}$$

$$S = k_B\left(\ln \Xi + \beta \langle E \rangle - \beta \mu \langle N \rangle\right)$$

### 3.3 Number Fluctuations

**Theorem 3.2.** The particle number fluctuations in the grand canonical ensemble satisfy

$$\langle N^2 \rangle - \langle N \rangle^2 = k_BT \left(\frac{\partial \langle N \rangle}{\partial \mu}\right)_{T,V}$$

*Proof.* $\langle N^2 \rangle - \langle N \rangle^2 = \frac{1}{\beta^2}\frac{\partial^2 \ln \Xi}{\partial \mu^2} = \frac{1}{\beta}\frac{\partial}{\partial \mu}\left(\frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\right) = \frac{1}{\beta}\frac{\partial \langle N \rangle}{\partial \mu}$. $\blacksquare$

For an ideal gas, $\langle N \rangle = z e^{\beta \mu}$, so $\partial \langle N \rangle / \partial \mu = \beta \langle N \rangle$, giving relative fluctuations:

$$\frac{\langle N^2 \rangle - \langle N \rangle^2}{\langle N \rangle^2} = \frac{1}{\langle N \rangle}$$

This is Poisson statistics: fluctuations scale as $1/\sqrt{N}$, negligible for macroscopic systems.

### 3.4 Worked Example: Ideal Gas in the Grand Canonical Ensemble

**Problem.** Compute $\Xi$, $\langle N \rangle$, and $\langle E \rangle$ for a classical ideal gas in the grand canonical ensemble.

<details>
<summary>Solution</summary>

The single-particle partition function is $z = V/\lambda_{\mathrm{th}}^3$ where $\lambda_{\mathrm{th}} = h/\sqrt{2\pi m k_BT}$. The canonical partition function for $N$ indistinguishable particles is $Z_N = z^N/N!$. The grand partition function:

$$\Xi = \sum_{N=0}^{\infty} \frac{z^N}{N!} e^{\beta \mu N} = \sum_{N=0}^{\infty} \frac{(ze^{\beta \mu})^N}{N!} = e^{ze^{\beta \mu}}$$

$$\ln \Xi = ze^{\beta \mu} = \frac{V}{\lambda_{\mathrm{th}}^3} e^{\beta \mu}$$

Average particle number:

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu} = \frac{V}{\lambda_{\mathrm{th}}^3} e^{\beta \mu}$$

Solving for the chemical potential: $\mu = k_BT \ln(\langle N \rangle \lambda_{\mathrm{th}}^3 / V)$.

Average energy (using $\langle E \rangle = -\partial \ln \Xi / \partial \beta + \mu \langle N \rangle / (k_BT)$):

$$\langle E \rangle = \frac{3}{2}\langle N \rangle k_BT$$

This recovers the equipartition result. $\blacksquare$

</details>

---

## 4. Fermi Gas at Finite Temperature

### 4.1 Sommerfeld Expansion

At finite temperature, the Fermi-Dirac distribution "smears out" the step function at $\varepsilon_F$. The Sommerfeld expansion provides an asymptotic series for integrals of the form

$$I = \int_0^\infty \frac{f(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

when $k_BT \ll \varepsilon_F$ (the degenerate limit).

**Theorem 4.1 (Sommerfeld Expansion).** To leading order in $T/T_F$:

$$I = \int_0^\mu f(\varepsilon)\, d\varepsilon + \frac{\pi^2}{6}(k_BT)^2 f'(\mu) + \mathcal{O}(T^4)$$

*Proof (sketch).* Write $f(\varepsilon) = f(\mu) + f'(\mu)(\varepsilon - \mu) + \cdots$ and use the exact results:

$$\int_0^\infty \frac{d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mu + \mathcal{O}(T^4)$$

$$\int_0^\infty \frac{(\varepsilon - \mu)\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \frac{\pi^2}{6}(k_BT)^2$$

$$\int_0^\infty \frac{(\varepsilon - \mu)^2\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mathcal{O}(T^4)$$

Combining these with the Taylor expansion of $f(\varepsilon)$ gives the result. The key integral identities follow from the substitution $x = \beta(\varepsilon - \mu)$ and the fact that the integrand is an odd function of $x$ to leading order. $\blacksquare$

### 4.2 Chemical Potential at Finite Temperature

Applying the Sommerfeld expansion to the number equation $N = \int_0^\infty g(\varepsilon) f_{\mathrm{FD}}(\varepsilon)\, d\varepsilon$ with $g(\varepsilon) = C\sqrt{\varepsilon}$:

$$N = \frac{2}{3}C\mu^{3/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{C}{2\sqrt{\mu}} + \mathcal{O}(T^4)$$

At $T = 0$: $N = \frac{2}{3}C\varepsilon_F^{3/2}$. Expanding $\mu = \varepsilon_F + \delta\mu$ and keeping terms to $\mathcal{O}(T^2)$:

$$\mu(T) \approx \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

The chemical potential decreases slightly with temperature.

### 4.3 Heat Capacity of the Electron Gas

Applying the Sommerfeld expansion to the energy:

$$U = \int_0^\infty \varepsilon\, g(\varepsilon)\, f_{\mathrm{FD}}(\varepsilon)\, d\varepsilon = \frac{2}{5}C\mu^{5/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{3}{2}C\mu^{1/2} + \cdots$$

Substituting $\mu \approx \varepsilon_F$:

$$U \approx \frac{3}{5}N\varepsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

$$C_V = \frac{\partial U}{\partial T} = Nk_B \cdot \frac{\pi^2}{2}\frac{k_BT}{\varepsilon_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F}$$

**Physical insight.** At room temperature ($T \approx 300$ K), $T/T_F \approx 0.006$ for copper, so $C_V \approx 0.03 Nk_B$, which is negligible compared to the lattice contribution $\approx 3Nk_B$. This explains why the Dulong-Petit law works for metals despite the presence of conduction electrons.

### 4.4 Worked Example: Electronic Heat Capacity of Copper

**Problem.** Calculate the electronic contribution to $C_V$ for copper at $T = 300$ K. Compare with the lattice contribution. Given: $\varepsilon_F = 7.0$ eV, Debye temperature $\Theta_D = 343$ K.

<details>
<summary>Solution</summary>

Electronic contribution:

$$C_V^{\mathrm{el}} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{300}{81000} \approx 0.018\, Nk_B$$

Lattice contribution (from the Debye model at $T \gg \Theta_D$):

$$C_V^{\mathrm{lat}} \approx 3Nk_B$$

The ratio is:

$$\frac{C_V^{\mathrm{el}}}{C_V^{\mathrm{lat}}} \approx \frac{0.018}{3} \approx 0.006$$

The electronic heat capacity is only about $0.6\%$ of the lattice contribution at room temperature. At very low temperatures ($T \ll \Theta_D$), the lattice contribution falls as $T^3$ while the electronic contribution falls as $T$, so the electronic term eventually dominates below a few kelvin.

$\blacksquare$

</details>

---

## 5. Bose-Einstein Condensation

### 5.1 Ideal Bose Gas

For bosons, the average occupation of a single-particle state of energy $\varepsilon$ is

$$\langle n_\varepsilon \rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1}$$

The chemical potential must satisfy $\mu \leq \varepsilon_0$ (the lowest single-particle energy) to prevent negative occupation numbers.

### 5.2 Density of States and Critical Temperature

For a 3D free Bose gas with $\varepsilon = \hbar^2 k^2 / (2m)$, the density of states is $g(\varepsilon) = (V/4\pi^2)(2m/\hbar^2)^{3/2}\sqrt{\varepsilon}$. The number of particles in excited states ($\varepsilon > 0$) is

$$N_{\mathrm{ex}} = \int_0^\infty \frac{g(\varepsilon)\, d\varepsilon}{e^{\beta \varepsilon} - 1} = V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\,\zeta\!\left(\frac{3}{2}\right)$$

where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function.

**Theorem 5.1 (BEC critical temperature).** The maximum number of particles that can be accommodated in excited states is achieved at $\mu = 0$. When $N$ exceeds this maximum, the excess condenses into the ground state. The critical temperature is

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

where $n = N/V$.

*Proof.* Setting $N = N_{\mathrm{ex}}^{\max}$ at $\mu = 0$ and solving for $T$:

$$n = \left(\frac{mk_B T_c}{2\pi\hbar^2}\right)^{3/2}\,\zeta\!\left(\frac{3}{2}\right)$$

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3} \qquad \blacksquare$$

### 5.3 Condensate Fraction

Below $T_c$, $\mu \approx 0$ and the condensate fraction is

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

This follows from $N_0 = N - N_{\mathrm{ex}}$ with $\mu = 0$:

$$N_{\mathrm{ex}} = N\left(\frac{T}{T_c}\right)^{3/2}$$

### 5.4 Thermodynamic Properties below $T_c$

The energy below $T_c$:

$$U = \int_0^\infty \frac{\varepsilon\, g(\varepsilon)\, d\varepsilon}{e^{\beta\varepsilon} - 1} = V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\,(k_BT)\,\frac{3}{2}\,\zeta\!\left(\frac{5}{2}\right) \cdot \Gamma\!\left(\frac{5}{2}\right)$$

$$= \frac{3}{2}\,Nk_BT_c\,\zeta\!\left(\frac{5}{2}\right)\Big/\zeta\!\left(\frac{3}{2}\right)\,\left(\frac{T}{T_c}\right)^{5/2}$$

The heat capacity:

$$C_V = \frac{15}{4}\,Nk_B\,\zeta\!\left(\frac{5}{2}\right)\Big/\zeta\!\left(\frac{3}{2}\right)\,\left(\frac{T}{T_c}\right)^{3/2} \propto T^{3/2}$$

This contrasts with the constant $C_V = \frac{3}{2}Nk_B$ above $T_c$ (equipartition). There is a cusp (discontinuity in the derivative) at $T_c$, characteristic of a phase transition.

### 5.5 Worked Example: BEC in Rubidium-87

**Problem.** Estimate $T_c$ for a gas of $N = 10^4$ rubidium-87 atoms confined in a harmonic trap with frequency $\omega_{\mathrm{ho}} = 2\pi \times 100$ Hz.

<details>
<summary>Solution</summary>

For a harmonic trap, the effective density of states is $g(\varepsilon) = \varepsilon^2/(2\hbar^3\omega_{\mathrm{ho}}^3)$. The critical temperature in a harmonic trap is:

$$k_BT_c = \hbar\omega_{\mathrm{ho}}\left(\frac{N}{\zeta(3)}\right)^{1/3}$$

$$k_BT_c = (1.055 \times 10^{-34})(2\pi \times 100)\left(\frac{10^4}{1.202}\right)^{1/3}$$

$$= (6.63 \times 10^{-32})(20.1) = 1.33 \times 10^{-30}\,\mathrm{J}$$

$$T_c = \frac{1.33 \times 10^{-30}}{1.381 \times 10^{-23}} \approx 9.6 \times 10^{-8}\,\mathrm{K} \approx 96\,\mathrm{nK}$$

This is consistent with the 1995 BEC experiments by Cornell and Wieman (JILA) and Ketterle (MIT), who achieved BEC at temperatures of a few hundred nanokelvin. $\blacksquare$

</details>

---

## 6. The Ising Model

### 6.1 Definition

The **Ising model** is the simplest model of a phase transition. On a lattice of $N$ sites, each site $i$ has a spin variable $s_i \in \{+1, -1\}$. The Hamiltonian is

$$H = -J\sum_{\langle i,j\rangle} s_i s_j - h\sum_i s_i$$

where $J$ is the coupling constant, $\langle i,j\rangle$ denotes nearest-neighbour pairs, and $h$ is an external magnetic field.

- $J > 0$: **ferromagnetic** (spins prefer to align).
- $J < 0$: **antiferromagnetic** (spins prefer to anti-align).

### 6.2 Exact Solution in One Dimension

**Theorem 6.1.** The 1D Ising model with $h = 0$ has no phase transition at any finite temperature.

*Proof (Transfer matrix method).* Consider a chain of $N$ spins with periodic boundary conditions ($s_{N+1} = s_1$). The partition function is:

$$Z = \sum_{\{s_i\}} \prod_{i=1}^{N} e^{\beta J s_i s_{i+1}}$$

Define the **transfer matrix** $\mathbf{T}$ with elements $T_{s_i, s_{i+1}} = e^{\beta J s_i s_{i+1}}$:

$$\mathbf{T} = \begin{pmatrix} e^{\beta J} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J} \end{pmatrix}$$

The partition function is $Z = \mathrm{Tr}(\mathbf{T}^N) = \lambda_+^N + \lambda_-^N$ where $\lambda_\pm$ are the eigenvalues of $\mathbf{T}$:

$$\lambda_\pm = e^{\beta J} \pm e^{-\beta J}$$

In the thermodynamic limit ($N \to \infty$), $Z \approx \lambda_+^N$ and the free energy per spin is:

$$f = -k_BT \ln(e^{\beta J} + e^{-\beta J}) = -k_BT \ln(2\cosh\beta J)$$

The magnetisation $m = -\partial f/\partial h|_{h=0} = 0$ for all $T > 0$, confirming no spontaneous magnetisation and hence no phase transition. $\blacksquare$

### 6.3 Mean Field Theory

**Theorem 6.2 (Mean field approximation).** In mean field theory, each spin feels an effective field due to its neighbours. Replacing $s_j$ by its average $\langle s_j \rangle = m$ in the Hamiltonian:

$$H_{\mathrm{MF}} = -Jz\, m\sum_i s_i - h\sum_i s_i$$

where $z$ is the coordination number (number of nearest neighbours). Each spin behaves as if in an effective field $h_{\mathrm{eff}} = h + Jz\,m$.

The self-consistency equation (mean field equation) is:

$$m = \tanh\!\left(\frac{\beta(h + Jz\,m)}{k_B}\right) = \tanh\!\left(\frac{h + Jz\,m}{k_BT}\right)$$

For $h = 0$: $m = \tanh(Jz\,m / k_BT)$.

**Critical temperature.** Expanding $\tanh x \approx x - x^3/3$ for small $x$:

$$m = \frac{Jz\,m}{k_BT} - \frac{1}{3}\left(\frac{Jz\,m}{k_BT}\right)^3$$

For $m \neq 0$, dividing by $m$:

$$1 = \frac{Jz}{k_BT_c} - \frac{1}{3}\left(\frac{Jz}{k_BT_c}\right)^3$$

At $T = T_c$: $T_c = Jz/k_B$.

### 6.4 Critical Exponents

Near the critical point, thermodynamic quantities follow power laws:

$$m \sim (T_c - T)^{1/\beta}, \quad \chi \sim |T - T_c|^{-\gamma}, \quad C \sim |T - T_c|^{-\alpha}$$

Mean field theory predicts:

$$\beta = \frac{1}{2}, \quad \gamma = 1, \quad \alpha = 0\ \text{(jump discontinuity)}$$

These are the **classical** critical exponents. They are independent of the spatial dimension $d$ and the lattice structure --- a deficiency of mean field theory. Exact results and renormalisation group calculations give dimension-dependent exponents that agree with experiment.

| Exponent | Mean Field | 2D Ising | 3D Ising |
|---|---|---|---|
| $\alpha$ | 0 (jump) | 0 (log) | 0.110 |
| $\beta$ | 1/2 | 1/8 | 0.326 |
| $\gamma$ | 1 | 7/4 | 1.237 |

### 6.5 Worked Example: Mean Field Theory for the 2D Square Lattice

**Problem.** For the 2D Ising model on a square lattice ($z = 4$), find $T_c$ in mean field theory and compare with the exact result $k_BT_c / J = 2/\ln(1 + \sqrt{2}) \approx 2.269$.

<details>
<summary>Solution</summary>

Mean field: $T_c^{\mathrm{MF}} = Jz/k_B = 4J/k_B$, so $k_BT_c^{\mathrm{MF}}/J = 4$.

Exact (Onsager, 1944): $k_BT_c^{\mathrm{exact}}/J = 2/\ln(1 + \sqrt{2}) \approx 2.269$.

The mean field result overestimates $T_c$ by a factor of $4/2.269 \approx 1.76$. This is because mean field theory overestimates the tendency toward ordering by neglecting thermal fluctuations. The error is larger in lower dimensions where fluctuations are more important.

$\blacksquare$

</details>

### 6.6 Worked Example: Susceptibility above $T_c$

**Problem.** Calculate the magnetic susceptibility $\chi = \partial m/\partial h|_{h=0}$ above $T_c$ in mean field theory.

<details>
<summary>Solution</summary>

For small $h$ and $T > T_c$, expand $m = \tanh(\beta(h + Jz\,m))$ to first order in $h$ and $m$:

$$m \approx \beta(h + Jz\,m) = \frac{h}{k_BT} + \frac{Jz}{k_BT}m$$

Solving for $m$:

$$m = \frac{h/k_BT}{1 - Jz/(k_BT)} = \frac{h}{k_B(T - T_c)}$$

$$\chi = \frac{\partial m}{\partial h}\bigg|_{h=0} = \frac{1}{k_B(T - T_c)} \propto (T - T_c)^{-1}$$

This gives the mean field critical exponent $\gamma = 1$. $\blacksquare$

</details>

---

## 7. Classical Limit and the Maxwell-Boltzmann Distribution

### 7.1 Derivation from Quantum Statistics

In the classical (dilute) limit, both Fermi-Dirac and Bose-Einstein distributions reduce to the Maxwell-Boltzmann distribution. The condition for the classical limit is

$$e^{\beta(\varepsilon - \mu)} \gg 1$$

for all relevant energies. This is equivalent to $n\lambda_{\mathrm{th}}^3 \ll 1$ (the thermal de Broglie wavelength is much smaller than the inter-particle spacing).

**Theorem 7.1.** In the classical limit:

$$f_{\mathrm{FD}}(\varepsilon) \approx f_{\mathrm{BE}}(\varepsilon) \approx f_{\mathrm{MB}}(\varepsilon) = e^{-\beta(\varepsilon - \mu)}$$

*Proof.* When $e^{\beta(\varepsilon - \mu)} \gg 1$, the $+1$ or $-1$ in the denominator is negligible:

$$\frac{1}{e^{\beta(\varepsilon - \mu)} \pm 1} \approx \frac{1}{e^{\beta(\varepsilon - \mu)}} = e^{-\beta(\varepsilon - \mu)}$$

$\blacksquare$

### 7.2 Maxwell-Boltzmann Speed Distribution

For a classical ideal gas, the probability distribution of molecular speeds is

$$f(v)\,dv = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 e^{-mv^2/(2k_BT)}\,dv$$

**Characteristic speeds:**

- Most probable: $v_p = \sqrt{2k_BT/m}$
- Mean: $\langle v \rangle = \sqrt{8k_BT/(\pi m)}$
- RMS: $v_{\mathrm{rms}} = \sqrt{3k_BT/m}$

The ordering is $v_p < \langle v \rangle < v_{\mathrm{rms}}$.

### 7.3 Worked Example: Effusion

**Problem.** A gas of molecular mass $m$ at temperature $T$ effuses through a small hole. Find the distribution of speeds of the effusing molecules and the mean kinetic energy per effusing molecule.

<details>
<summary>Solution</summary>

The effusion rate for molecules with speed between $v$ and $v + dv$ is proportional to $v \cdot f(v)\,dv$ (faster molecules hit the hole more frequently). The effusion distribution is:

$$f_{\mathrm{eff}}(v)\,dv \propto v \cdot v^2 e^{-mv^2/(2k_BT)}\,dv = v^3 e^{-mv^2/(2k_BT)}\,dv$$

Normalising:

$$f_{\mathrm{eff}}(v) = \frac{1}{2(k_BT/m)^2}\,v^3\,e^{-mv^2/(2k_BT)}$$

The mean kinetic energy:

$$\langle \varepsilon \rangle_{\mathrm{eff}} = \frac{1}{2}m\langle v^2 \rangle_{\mathrm{eff}} = \frac{1}{2}m \cdot \frac{\int_0^\infty v^5 e^{-mv^2/(2k_BT)}\,dv}{\int_0^\infty v^3 e^{-mv^2/(2k_BT)}\,dv}$$

Using $\int_0^\infty v^n e^{-av^2}\,dv = \frac{1}{2a^{(n+1)/2}}\Gamma\!\left(\frac{n+1}{2}\right)$:

$$\langle v^2 \rangle_{\mathrm{eff}} = \frac{\Gamma(3)/(2a^3)}{\Gamma(2)/(2a^2)} = \frac{2}{a} = \frac{4k_BT}{m}$$

$$\langle \varepsilon \rangle_{\mathrm{eff}} = 2k_BT$$

This is $4/3$ times the bulk average $\frac{3}{2}k_BT$ --- effusing molecules are "hotter" because faster molecules escape preferentially. $\blacksquare$

</details>

---

## 8. Common Pitfalls

- **Confusing the microcanonical, canonical, and grand canonical ensembles.** The microcanonical ensemble describes an isolated system with fixed $E, V, N$. The canonical ensemble describes a system in contact with a heat bath at fixed $T, V, N$. The grand canonical ensemble describes a system exchanging both energy and particles, at fixed $\mu, V, T$.

- **Forgetting the $1/N!$ for indistinguishable particles.** Without this factor, entropy is not extensive and the Gibbs paradox arises. This is essential for all quantum statistical mechanics.

- **Applying the equipartition theorem to quantum systems.** At temperatures below the characteristic energy spacing ($k_BT \ll \Delta E$), the relevant degrees of freedom are "frozen out" and do not contribute to $C_V$.

- **Assuming the classical limit always applies.** Electrons in metals are degenerate ($T \ll T_F$) and must be treated with Fermi-Dirac statistics. Helium-4 at low temperatures exhibits Bose-Einstein condensation and superfluidity. The classical limit $n\lambda_{\mathrm{th}}^3 \ll 1$ is violated in these cases.

- **Confusing $\mu = 0$ for bosons with $\mu$ for fermions.** For bosons, $\mu \leq \varepsilon_0$ and $\mu \to 0$ at BEC. For fermions, $\mu \approx \varepsilon_F$ at low temperatures and can be much larger than $\varepsilon_0$.

- **Using mean field critical exponents in 2D.** Mean field theory gives $\beta = 1/2$ everywhere, but the exact 2D Ising result is $\beta = 1/8$. Mean field theory is qualitatively wrong in low dimensions.

---

## 9. Problem Set

### Problem 1

Calculate the Fermi energy and Fermi temperature for sodium. Given: electron density $n \approx 2.65 \times 10^{28}\,\mathrm{m}^{-3}$, $m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}}(3\pi^2 \times 2.65 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} \approx 9.23 \times 10^9$

$(3\pi^2 n)^{2/3} = (9.23 \times 10^9)^2 = 8.52 \times 10^{19}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 8.52 \times 10^{19} \approx 5.20 \times 10^{-19}\,\mathrm{J} \approx 3.25\,\mathrm{eV}$

$T_F = \varepsilon_F/k_B = 5.20 \times 10^{-19}/1.381 \times 10^{-23} \approx 37700\,\mathrm{K}$

</details>

### Problem 2

A 3D Bose gas of $N$ particles of mass $m$ is confined to volume $V$. Show that the heat capacity at constant volume has a discontinuity at $T = T_c$ and find the jump.

<details>
<summary>Solution</summary>

Above $T_c$ (classical regime): $C_V = \frac{3}{2}Nk_B$.

Below $T_c$: $C_V = \frac{15}{4}Nk_B\,\zeta(5/2)/\zeta(3/2) \cdot (T/T_c)^{3/2}$.

At $T = T_c^-$:

$$C_V(T_c^-) = \frac{15}{4}Nk_B \cdot \frac{\zeta(5/2)}{\zeta(3/2)}$$

$\zeta(5/2) \approx 1.341$, $\zeta(3/2) \approx 2.612$:

$$C_V(T_c^-) = \frac{15}{4} \times \frac{1.341}{2.612}\,Nk_B \approx 1.926\,Nk_B$$

At $T = T_c^+$: $C_V = \frac{3}{2}Nk_B = 1.5\,Nk_B$.

The jump is $\Delta C_V = C_V(T_c^-) - C_V(T_c^+) \approx 0.426\,Nk_B$.

</details>

### Problem 3

Derive the virial expansion for a non-ideal gas in terms of the second virial coefficient $B_2(T)$, and show that $B_2(T)$ can be expressed in terms of the two-particle interaction potential $V(r)$.

<details>
<summary>Solution</summary>

The pressure of a real gas is expanded as $PV/(Nk_BT) = 1 + B_2(T)\,(N/V) + B_3(T)\,(N/V)^2 + \cdots$.

For a classical gas with pairwise interaction $V(r_{12})$:

$$B_2(T) = -\frac{1}{2V}\int d^3\mathbf{r}_1\,d^3\mathbf{r}_2\,\left[e^{-\beta V(r_{12})} - 1\right]$$

$$= -2\pi \int_0^\infty \left[e^{-\beta V(r)} - 1\right] r^2\, dr$$

For a hard-sphere gas ($V(r) = \infty$ for $r < d$, $V(r) = 0$ for $r > d$):

$$B_2 = -2\pi\int_0^d (-1)\,r^2\,dr = \frac{2\pi d^3}{3} = \frac{2\pi}{3}\left(\frac{d}{2}\right)^3 \cdot 8 = 4v_0$$

where $v_0 = \pi d^3/6$ is the volume of one sphere. The van der Waals excluded volume parameter is $b = 4Nv_0 = N B_2$.

</details>

### Problem 4

Show that the classical limit of the Fermi-Dirac distribution reproduces the Maxwell-Boltzmann distribution, and derive the condition for the classical limit in terms of the density of states.

<details>
<summary>Solution</summary>

The Fermi-Dirac distribution is:

$$f_{\mathrm{FD}}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1}$$

The total number of particles is:

$$N = \int_0^\infty \frac{g(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

In the classical limit $e^{\beta(\varepsilon - \mu)} \gg 1$, the $+1$ is negligible:

$$N \approx \int_0^\infty g(\varepsilon)\, e^{-\beta(\varepsilon - \mu)}\, d\varepsilon = e^{\beta\mu} \int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon$$

$$e^{\beta\mu} = \frac{N}{\int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon} = \frac{N\lambda_{\mathrm{th}}^3}{V}$$

The classical limit requires $e^{\beta\mu} \ll 1$, i.e., $N\lambda_{\mathrm{th}}^3/V \ll 1$, or equivalently, the average inter-particle spacing $(V/N)^{1/3}$ must be much larger than $\lambda_{\mathrm{th}}$.

</details>

### Problem 5

Compute the partition function for a single quantum harmonic oscillator and verify that the average energy is $\langle E \rangle = \hbar\omega(n_B + 1/2)$ where $n_B = 1/(e^{\beta\hbar\omega} - 1)$.

<details>
<summary>Solution</summary>

$$Z_{\mathrm{HO}} = \sum_{n=0}^{\infty} e^{-\beta\hbar\omega(n+1/2)} = e^{-\beta\hbar\omega/2}\sum_{n=0}^{\infty}\left(e^{-\beta\hbar\omega}\right)^n = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}$$

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\hbar\omega}{2} + \frac{\hbar\omega\,e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}} = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1} = \hbar\omega\left(\frac{1}{2} + n_B\right)$$

At high $T$ ($\beta \to 0$): $\langle E \rangle \to k_BT$ (equipartition). At low $T$: $\langle E \rangle \to \hbar\omega/2$ (zero-point energy).

</details>
