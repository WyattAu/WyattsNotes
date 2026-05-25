---
title: Thermal Physics
description:
  'University-level notes on Thermal Physics: 1. The Laws of Thermodynamics; 1.1 Zeroth Law and
  Temperature; 1.2 First Law; 1.3 Second Law and Entropy; 1.4 Third L'
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

**Zeroth Law:** If system $A$ is in thermal equilibrium with system $B$And $B$ is in thermal
equilibrium with system $C$Then $A$ is in thermal equilibrium with $C$.

This establishes **temperature** as a transitive equivalence relation: two systems are in thermal
equilibrium if and only if they have the same temperature.

**Definition.** **Temperature** is the quantity that is equal for all systems in mutual thermal
equilibrium. The **ideal gas scale** defines temperature via

$$PV = Nk_BT$$

Where $k_B = 1.381 \times 10^◆LB◆-23◆RB◆$ J/K is Boltzmann's constant.

### 1.2 First Law

**First Law:** The change in internal energy of a system equals the heat added minus the work done
by the system:

$$dU = \delta Q - \delta W$$

For a reversible process: $\delta W = P\,dV$ (PV work), giving

$$dU = \delta Q - P\,dV$$

**Proposition 1.1.** For an adiabatic process ($\delta Q = 0$): $dU = -P\,dV$. For an isochoric
process ($dV = 0$): $dU = \delta Q$.

**Definition.** The **heat capacity at constant volume** and **heat capacity at constant pressure**
are:

$$C_V = \left(\frac◆LB◆\partial U◆RB◆◆LB◆\partial T◆RB◆\right)_V, \qquad C_P = \left(\frac◆LB◆\partial H◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

Where $H = U + PV$ is the enthalpy.

**Proposition 1.2.** For an ideal gas: $C_P - C_V = Nk_B$.

_Proof._ $H = U + PV = U + Nk_BT$. Therefore
$C_P = (\partial H/\partial T)_P = (\partial U/\partial T)_P + Nk_B = C_V + Nk_B$ (since $U$ depends
only on $T$ for an ideal gas). $\blacksquare$

### 1.3 Second Law and Entropy

**Second Law (Clausius statement):** Heat cannot spontaneously flow from a colder body to a hotter
body.

**Second Law (Kelvin-Planck statement):** No process can convert heat entirely into work in a cyclic
manner without other effects.

These are equivalent: each implies the other.

**Definition.** The **entropy** change for a reversible process is

$$dS = \frac◆LB◆\delta Q_◆LB◆\mathrm◆LB◆rev◆RB◆◆RB◆◆LB◆T◆RB◆$$

**Theorem 1.3 (Clausius Inequality).** For any cyclic process:

$$\oint \frac◆LB◆\delta Q◆RB◆◆LB◆T◆RB◆ \leq 0$$

With equality for reversible processes.

_Proof._ Consider a system undergoing a cycle interacting with $n$ heat reservoirs at temperatures
$T_1, \ldots, T_n$Exchanging heat $Q_i$ with reservoir $i$. The Clausius inequality follows from the
impossibility of a perpetual motion machine of the second kind: a cycle that absorbs heat from a
single reservoir and does work would violate the Kelvin-Planck statement. The detailed
.../1-number-and-algebra/3_proof-and-logic uses auxiliary Carnot engines operating between pairs of
reservoirs. $\blacksquare$

**Corollary 1.4 (Principle of Increasing Entropy).** For an isolated system, $dS \geq 0$With
equality for reversible processes.

### 1.4 Third Law

**Third Law (Nernst):** As $T \to 0^+$The entropy of a perfect crystal approaches a constant (which
can be taken as zero):

$$\lim_◆LB◆T \to 0◆RB◆ S(T) = 0$$

**Consequences:**

1. It is impossible to reach absolute zero in a finite number of steps.
2. The heat capacities $C_V$ and $C_P$ approach zero as $T \to 0$.

### 1.5 Thermodynamic Potentials

| Potential    | Natural Variables | Differential      | Name                  |
| ------------ | ----------------- | ----------------- | --------------------- |
| $U$          | $S, V$            | $dU = TdS - PdV$  | Internal Energy       |
| $H = U + PV$ | $S, P$            | $dH = TdS + VdP$  | Enthalpy              |
| $F = U - TS$ | $T, V$            | $dF = -SdT - PdV$ | Helmholtz Free Energy |
| $G = H - TS$ | $T, P$            | $dG = -SdT + VdP$ | Gibbs Free Energy     |

**Theorem 1.5.** At equilibrium for a system in contact with a heat bath at temperature $T$: $F$ is
minimised at constant $T, V$; $G$ is minimised at constant $T, P$.

_Proof._ For constant $T, V$: $dF = dU - TdS = \delta Q - PdV - TdS$. At equilibrium
$dS \geq \delta Q/T$ (Clausius inequality), so $dF \leq 0$. Hence $F$ decreases and is minimised at
equilibrium. The argument for $G$ is analogous. $\blacksquare$

### 1.6 Maxwell Relations

From the exactness of $dU = TdS - PdV$ (and similarly for $dH$$dF$$dG$), the equality of mixed
partial derivatives gives four **Maxwell relations**:

1. $\left(\frac◆LB◆\partial T◆RB◆◆LB◆\partial V◆RB◆\right)_S = -\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial S◆RB◆\right)_V$
2. $\left(\frac◆LB◆\partial T◆RB◆◆LB◆\partial P◆RB◆\right)_S = \left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial S◆RB◆\right)_P$
3. $\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_T = \left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V$
4. $\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_T = -\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P$

<details>
<summary>Worked Example: Deriving $(\partial U/\partial V)_T$ for an Ideal Gas</summary>

_Solution._ We use the thermodynamic identity $dU = TdS - PdV$. Dividing by $dV$ at constant $T$:

$$\left(\frac◆LB◆\partial U◆RB◆◆LB◆\partial V◆RB◆\right)_T = T\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_T - P$$

By the third Maxwell relation: $(\partial S/\partial V)_T = (\partial P/\partial T)_V$. For an ideal
gas, $P = Nk_BT/V$So $(\partial P/\partial T)_V = Nk_B/V$.

Therefore:

$$\left(\frac◆LB◆\partial U◆RB◆◆LB◆\partial V◆RB◆\right)_T = T \cdot \frac◆LB◆Nk_B◆RB◆◆LB◆V◆RB◆ - \frac◆LB◆Nk_BT◆RB◆◆LB◆V◆RB◆ = 0$$

This confirms that the internal energy of an ideal gas depends only on temperature. $\blacksquare$

</details>

### 1.7 Common Pitfalls

- **$\delta Q$ and $\delta W$ are not exact differentials.** Unlike $dU$The heat and work are
  path-dependent. Only $\delta Q_◆LB◆\mathrm◆LB◆rev◆RB◆/T = dS$ is exact.
- **The second law prohibits certain processes but does not explain _why_ they occur.** Statistical
  mechanics provides the microscopic explanation: entropy measures the number of microstates, and
  the system evolves toward the macrostate with the most microstates.
- **Free energy minima determine equilibrium, not energy minima.** At constant temperature, the
  system minimises $F$ (or $G$), not $U$.

---

## 2. Statistical Mechanics

### 2.1 Microstates and Macrostates

A **microstate** is a complete specification of the state of a system (positions and momenta of all
particles). A **macrostate** is specified by macroscopic variables (energy, volume, particle
number).

The **fundamental postulate of statistical mechanics** states that for an isolated system in
equilibrium, every accessible microstate is equally probable.

**Definition.** The **multiplicity** $\Omega(E, V, N)$ is the number of microstates consistent with
the macrostate $(E, V, N)$. The **statistical entropy** is

$$S = k_B \ln \Omega$$

**Proposition 2.1.** This definition of entropy agrees with the thermodynamic entropy:
$\Delta S = k_B \ln(\Omega_f / \Omega_i)$.

### 2.2 The Boltzmann Distribution

**Theorem 2.1 (Canonical Ensemble).** For a system in thermal equilibrium with a heat bath at
temperature $T$The probability of the system being in microstate $i$ with energy $E_i$ is

$$P_i = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆ e^◆LB◆-E_i / (k_B T)◆RB◆$$

Where the **partition function** is

$$Z = \sum_◆LB◆i◆RB◆ e^◆LB◆-E_i / (k_B T)◆RB◆$$

_Proof._ Consider the combined system (system + reservoir) with total energy $E_◆LB◆\mathrm◆LB◆tot◆RB◆$. The
probability of the system being in state $i$ is proportional to the number of reservoir microstates
compatible with it, which is $\Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_i)$. Using $S_R = k_B \ln \Omega_R$:

$$P_i \propto \Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_i) = \exp\left(\frac◆LB◆S_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_i)◆RB◆◆LB◆k_B◆RB◆\right)$$

Expanding $S_R$ around $E_◆LB◆\mathrm◆LB◆tot◆RB◆$:
$S_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_i) \approx S_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆) - E_i \left(\frac◆LB◆\partial S_R◆RB◆◆LB◆\partial E◆RB◆\right) = S_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆) - \frac◆LB◆E_i◆RB◆◆LB◆T◆RB◆$

Since $(\partial S_R / \partial E) = 1/T$. Therefore $P_i \propto e^◆LB◆-E_i / (k_BT)◆RB◆$And normalising
gives the result. $\blacksquare$

### 2.3 Thermodynamic Quantities from the Partition Function

**Theorem 2.2.** The partition function determines all thermodynamic quantities:

$$\langle E \rangle = -\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial \beta◆RB◆, \quad F = -k_B T \ln Z, \quad S = \frac◆LB◆\langle E \rangle - F◆RB◆◆LB◆T◆RB◆$$

Where $\beta = 1/(k_BT)$.

_Proof._
$\langle E \rangle = \sum_i E_i P_i = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\sum_i E_i e^◆LB◆-\beta E_i◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\frac◆LB◆\partial Z◆RB◆◆LB◆\partial \beta◆RB◆ = -\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial \beta◆RB◆$.

$F = -k_BT \ln Z$ follows from $F = U - TS = \langle E \rangle - TS$ and the identification
$Z = e^◆LB◆-\beta F◆RB◆$. $\blacksquare$

### 2.4 Ideal Gas

**Theorem 2.3 (Partition Function of an Ideal Gas).** For $N$ indistinguishable particles in a 3D
box of volume $V$:

$$Z_N = \frac◆LB◆1◆RB◆◆LB◆N!◆RB◆\left(\frac◆LB◆V◆RB◆◆LB◆\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3◆RB◆\right)^N, \quad \lambda_◆LB◆\mathrm◆LB◆th◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆\sqrt◆LB◆2\pi m k_B T◆RB◆◆RB◆$$

Where $\lambda_◆LB◆\mathrm◆LB◆th◆RB◆$ is the **thermal de Broglie wavelength**.

_Proof._ The single-particle energy levels in a 3D box of side $L$ ($V = L^3$) are:

$$\varepsilon_◆LB◆n_x, n_y, n_z◆RB◆ = \frac◆LB◆h^2◆RB◆◆LB◆8mL^2◆RB◆(n_x^2 + n_y^2 + n_z^2)$$

The single-particle partition function is:

$$z = \sum_◆LB◆n_x, n_y, n_z = 0◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-\beta h^2(n_x^2 + n_y^2 + n_z^2)/(8mL^2)◆RB◆ \approx \left(\int_0^◆LB◆\infty◆RB◆ e^◆LB◆-\beta h^2 n^2/(8mL^2)◆RB◆ dn\right)^3 = \left(\frac◆LB◆L◆RB◆◆LB◆h◆RB◆\sqrt◆LB◆\frac◆LB◆2\pi m◆RB◆◆LB◆\beta◆RB◆◆RB◆\right)^3 = \frac◆LB◆V◆RB◆◆LB◆\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3◆RB◆$$

For $N$ indistinguishable particles (correct Boltzmann counting): $Z_N = z^N / N!$. $\blacksquare$

**Corollary 2.4.** From $Z_N$We recover the ideal gas law:

$$F = -k_BT \ln Z_N = -k_BT\left[N\ln\left(\frac◆LB◆V◆RB◆◆LB◆\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3◆RB◆\right) - \ln N!\right]$$

$$P = -\left(\frac◆LB◆\partial F◆RB◆◆LB◆\partial V◆RB◆\right)_T = \frac◆LB◆Nk_BT◆RB◆◆LB◆V◆RB◆$$

Giving $PV = Nk_BT$.

### 2.5 The Equipartition Theorem

**Theorem 2.5 (Equipartition).** For a classical system in thermal equilibrium, each quadratic
degree of freedom in the Hamiltonian contributes $\frac◆LB◆1◆RB◆◆LB◆2◆RB◆k_BT$ to the average energy.

_Proof._ Consider a single degree of freedom with Hamiltonian $H = ap^2$ (or $bq^2$). The average
energy is:

$$\langle ap^2 \rangle = \frac◆LB◆\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ ap^2 e^◆LB◆-\beta ap^2◆RB◆\, dp◆RB◆◆LB◆\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-\beta ap^2◆RB◆\, dp◆RB◆ = -\frac◆LB◆\partial◆RB◆◆LB◆\partial \beta◆RB◆\ln\left(\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-\beta ap^2◆RB◆\, dp\right) = -\frac◆LB◆\partial◆RB◆◆LB◆\partial \beta◆RB◆\ln\left(\sqrt◆LB◆\frac◆LB◆\pi◆RB◆◆LB◆a\beta◆RB◆◆RB◆\right) = \frac◆LB◆1◆RB◆◆LB◆2\beta◆RB◆ = \frac◆LB◆k_BT◆RB◆◆LB◆2◆RB◆$$

The same calculation for $bq^2$ gives another $k_BT/2$. $\blacksquare$

**Application.** A monatomic ideal gas has 3 translational degrees of freedom:
$U = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_BT$ and $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B$. A diatomic gas also has 2 rotational degrees of
freedom: $U = \frac◆LB◆5◆RB◆◆LB◆2◆RB◆Nk_BT$ and $C_V = \frac◆LB◆5◆RB◆◆LB◆2◆RB◆Nk_B$ (at temperatures where vibration is
frozen out).

### 2.6 Quantum Statistical Distributions

**Fermi--Dirac Statistics** (for fermions, particles with half-integer spin):

$$\langle n_i \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆(E_i - \mu)/(k_BT)◆RB◆ + 1◆RB◆$$

Where $\mu$ is the **chemical potential**.

**Bose--Einstein Statistics** (for bosons, particles with integer spin):

$$\langle n_i \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆(E_i - \mu)/(k_BT)◆RB◆ - 1◆RB◆$$

**Maxwell--Boltzmann Statistics** (classical limit, $\mu$ very negative):

$$\langle n_i \rangle = e^◆LB◆-(E_i - \mu)/(k_BT)◆RB◆$$

The classical limit applies when the thermal de Broglie wavelength is much smaller than the
inter-particle spacing: $\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3 \ll V/N$.

### 2.7 The Fermi Gas

**Definition.** The **Fermi energy** $\varepsilon_F$ is the chemical potential at $T = 0$:

$$\varepsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\left(3\pi^2 n\right)^◆LB◆2/3◆RB◆$$

Where $n = N/V$ is the particle number density.

**Proposition 2.6.** At $T = 0$All states with $E \leq \varepsilon_F$ are occupied and all states
with $E > \varepsilon_F$ are empty. The ground-state energy of a 3D Fermi gas is:

$$U_0 = \frac◆LB◆3◆RB◆◆LB◆5◆RB◆N\varepsilon_F$$

_Proof._ $U_0 = \int_0^◆LB◆\varepsilon_F◆RB◆ E \cdot g(E)\, dE$ where
$g(E) = \frac◆LB◆V◆RB◆◆LB◆2\pi^2◆RB◆\left(\frac◆LB◆2m◆RB◆◆LB◆\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆\sqrt◆LB◆E◆RB◆$ is the density of states.
Evaluating:
$U_0 = \frac◆LB◆V◆RB◆◆LB◆2\pi^2◆RB◆\left(\frac◆LB◆2m◆RB◆◆LB◆\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆ \cdot \frac◆LB◆2◆RB◆◆LB◆5◆RB◆\varepsilon_F^◆LB◆5/2◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆5◆RB◆N\varepsilon_F$.
$\blacksquare$

### 2.8 Blackbody Radiation

**Planck's Law** gives the spectral energy density of blackbody radiation:

$$u(\nu, T) = \frac◆LB◆8\pi h \nu^3◆RB◆◆LB◆c^3◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆h\nu/(k_BT)◆RB◆ - 1◆RB◆$$

**Stefan--Boltzmann Law:** The total radiated power per unit area:

$$j = \sigma T^4, \quad \sigma = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆60 \hbar^3 c^2◆RB◆$$

**Wien's Displacement Law:** The peak frequency satisfies $\nu_◆LB◆\mathrm◆LB◆max◆RB◆ / T = \mathrm◆LB◆const$.

### 2.9 Worked Examples

**Problem.** Calculate the Fermi energy and Fermi temperature for copper. Given: electron density
$n \approx 8.5 \times 10^◆LB◆28◆RB◆\,\mathrm◆LB◆m^◆LB◆-3◆RB◆$$m_e = 9.109 \times 10^◆LB◆-31◆RB◆$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆(3\pi^2 n)^◆LB◆2/3◆RB◆$$

$$= \frac◆LB◆(1.055 \times 10^◆LB◆-34◆RB◆)^2◆RB◆◆LB◆2 \times 9.109 \times 10^◆LB◆-31◆RB◆◆RB◆ \times (3\pi^2 \times 8.5 \times 10^◆LB◆28◆RB◆)^◆LB◆2/3◆RB◆$$

$(3\pi^2 \times 8.5 \times 10^◆LB◆28◆RB◆)^◆LB◆1/3◆RB◆ = (2.52 \times 10^◆LB◆30◆RB◆)^◆LB◆1/3◆RB◆ \approx 1.36 \times 10^◆LB◆10◆RB◆$

$(3\pi^2 n)^◆LB◆2/3◆RB◆ = (1.36 \times 10^◆LB◆10◆RB◆)^2 = 1.85 \times 10^◆LB◆20◆RB◆$

$\varepsilon_F = \frac◆LB◆1.113 \times 10^◆LB◆-68◆RB◆◆RB◆◆LB◆1.822 \times 10^◆LB◆-30◆RB◆◆RB◆ \times 1.85 \times 10^◆LB◆20◆RB◆ \approx 1.13 \times 10^◆LB◆-18◆RB◆\,\mathrm◆LB◆J \approx 7.0\,\mathrm◆LB◆eV$

$T_F = \varepsilon_F / k_B = 1.13 \times 10^◆LB◆-18◆RB◆ / 1.381 \times 10^◆LB◆-23◆RB◆ \approx 81800\,\mathrm◆LB◆K$

The Fermi temperature is much larger than room temperature, confirming that copper electrons are in
the degenerate regime. $\blacksquare$

</details>

<details>
<summary>Worked Example: Entropy of Mixing</summary>

_Solution._ Two ideal gases of $N$ particles each, initially separated by a partition, are allowed
to mix. Calculate the entropy change.

Before mixing: the total entropy is
$2 \times Nk_B\left[\ln\left(\frac◆LB◆V◆RB◆◆LB◆N\lambda^3◆RB◆\right) + \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right]$ (for a monatomic
gas).

After mixing: each gas occupies volume $2V$So the total entropy is:

$$S_f = 2 \times Nk_B\left[\ln\left(\frac◆LB◆2V◆RB◆◆LB◆N\lambda^3◆RB◆\right) + \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right]$$

$$\Delta S_◆LB◆\mathrm◆LB◆mix◆RB◆ = S_f - S_i = 2Nk_B\ln\left(\frac◆LB◆2V◆RB◆◆LB◆N\lambda^3◆RB◆\right) - 2Nk_B\ln\left(\frac◆LB◆V◆RB◆◆LB◆N\lambda^3◆RB◆\right) = 2Nk_B\ln 2$$

For 1 mole of each gas: $\Delta S_◆LB◆\mathrm◆LB◆mix◆RB◆ = 2R\ln 2 \approx 11.5\,\mathrm◆LB◆J/K$.

**Gibbs paradox.** If the two gases are identical, the entropy of mixing is zero (no physical
change). The resolution is that identical particles are indistinguishable, and the correct counting
already accounts for this via the $1/N!$ factor in the partition function. $\blacksquare$

</details>

### 2.10 Common Pitfalls

- **The classical limit does not always apply.** When $\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3 \gtrsim V/N$Quantum
  .../4-statistics-and-probability/2_statistics (Fermi-Dirac or Bose-Einstein) must be used. This is
  critical for electrons in metals and for helium-4 at low temperatures.
- **The Boltzmann distribution applies to systems in contact with a heat bath, not isolated
  systems.** For isolated systems, use the microcanonical ensemble (all accessible microstates
  equally probable).
- **The partition function must account for indistinguishability.** The $1/N!$ factor in $Z_N$ is
  essential for obtaining the correct entropy (otherwise the entropy is not extensive and the Gibbs
  paradox arises).

---

## 3. The Grand Canonical Ensemble

### 3.1 Definition and Motivation

In many physical situations, a system exchanges both energy and particles with a reservoir. The
**grand canonical ensemble** describes such open systems. The macroscopic variables are the chemical
potential $\mu$The volume $V$And the temperature $T$.

**Definition.** The **grand partition function** is

$$\Xi = \sum_◆LB◆N=0◆RB◆^◆LB◆\infty◆RB◆ \sum_◆LB◆i◆RB◆ e^◆LB◆-\beta(E_◆LB◆i◆RB◆^◆LB◆(N)◆RB◆ - \mu N)◆RB◆$$

Where the outer sum is over all possible particle numbers $N$ and the inner sum is over all states
with $N$ particles.

The probability that the system is in state $i$ with $N$ particles is

$$P_◆LB◆i,N◆RB◆ = \frac◆LB◆e^◆LB◆-\beta(E_◆LB◆i◆RB◆^◆LB◆(N)◆RB◆ - \mu N)◆RB◆◆RB◆◆LB◆\Xi◆RB◆$$

### 3.2 Thermodynamic Relations

**Theorem 3.1.** The grand potential $\Phi_G = -k_BT \ln \Xi$ satisfies

$$\Phi_G = F - \mu N = -PV$$

_Proof._ For a classical ideal gas, $\Xi = \sum_◆LB◆N=0◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆\beta \mu N◆RB◆ Z_N$ where
$Z_N = z^N/N!$ is the canonical partition function. Therefore:

$$\Xi = \sum_◆LB◆N=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(z e^◆LB◆\beta \mu◆RB◆)^N◆RB◆◆LB◆N!◆RB◆ = \exp(z e^◆LB◆\beta \mu◆RB◆)$$

$$\Phi_G = -k_BT \ln \Xi = -k_BT \cdot z e^◆LB◆\beta \mu◆RB◆ = -PV$$

The last equality follows from the ideal gas law $PV = Nk_BT$ with $N = z e^◆LB◆\beta \mu◆RB◆$. More
generally, $\Phi_G = -PV$ holds for all systems. $\blacksquare$

**Key relations from $\ln \Xi$:**

$$\langle N \rangle = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial \mu◆RB◆\bigg|_◆LB◆T,V◆RB◆, \quad \langle E \rangle = -\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial \beta◆RB◆\bigg|_◆LB◆\mu,V◆RB◆ + \frac◆LB◆\mu◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial \mu◆RB◆\bigg|_◆LB◆T,V◆RB◆$$

$$S = k_B\left(\ln \Xi + \beta \langle E \rangle - \beta \mu \langle N \rangle\right)$$

### 3.3 Number Fluctuations

**Theorem 3.2.** The particle number fluctuations in the grand canonical ensemble satisfy

$$\langle N^2 \rangle - \langle N \rangle^2 = k_BT \left(\frac◆LB◆\partial \langle N \rangle◆RB◆◆LB◆\partial \mu◆RB◆\right)_◆LB◆T,V◆RB◆$$

_Proof._
$\langle N^2 \rangle - \langle N \rangle^2 = \frac◆LB◆1◆RB◆◆LB◆\beta^2◆RB◆\frac◆LB◆\partial^2 \ln \Xi◆RB◆◆LB◆\partial \mu^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial◆RB◆◆LB◆\partial \mu◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial \mu◆RB◆\right) = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \langle N \rangle◆RB◆◆LB◆\partial \mu◆RB◆$.
$\blacksquare$

For an ideal gas, $\langle N \rangle = z e^◆LB◆\beta \mu◆RB◆$So
$\partial \langle N \rangle / \partial \mu = \beta \langle N \rangle$Giving relative fluctuations:

$$\frac◆LB◆\langle N^2 \rangle - \langle N \rangle^2◆RB◆◆LB◆\langle N \rangle^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\langle N \rangle◆RB◆$$

This is Poisson .../4-statistics-and-probability/2_statistics: fluctuations scale as
$1/\sqrt◆LB◆N◆RB◆$Negligible for macroscopic systems.

### 3.4 Worked Example: Ideal Gas in the Grand Canonical Ensemble

**Problem.** Compute $\Xi$$\langle N \rangle$And $\langle E \rangle$ for a classical ideal gas in
the grand canonical ensemble.

<details>
<summary>Solution</summary>

The single-particle partition function is $z = V/\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3$ where
$\lambda_◆LB◆\mathrm◆LB◆th◆RB◆ = h/\sqrt◆LB◆2\pi m k_BT◆RB◆$. The canonical partition function for $N$
indistinguishable particles is $Z_N = z^N/N!$. The grand partition function:

$$\Xi = \sum_◆LB◆N=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^N◆RB◆◆LB◆N!◆RB◆ e^◆LB◆\beta \mu N◆RB◆ = \sum_◆LB◆N=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(ze^◆LB◆\beta \mu◆RB◆)^N◆RB◆◆LB◆N!◆RB◆ = e^◆LB◆ze^◆LB◆\beta \mu◆RB◆◆RB◆$$

$$\ln \Xi = ze^◆LB◆\beta \mu◆RB◆ = \frac◆LB◆V◆RB◆◆LB◆\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3◆RB◆ e^◆LB◆\beta \mu◆RB◆$$

Average particle number:

$$\langle N \rangle = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial \mu◆RB◆ = \frac◆LB◆V◆RB◆◆LB◆\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3◆RB◆ e^◆LB◆\beta \mu◆RB◆$$

Solving for the chemical potential: $\mu = k_BT \ln(\langle N \rangle \lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3 / V)$.

Average energy (using
$\langle E \rangle = -\partial \ln \Xi / \partial \beta + \mu \langle N \rangle / (k_BT)$):

$$\langle E \rangle = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆\langle N \rangle k_BT$$

This recovers the equipartition result. $\blacksquare$

</details>

---

## 4. Fermi Gas at Finite Temperature

### 4.1 Sommerfeld Expansion

At finite temperature, the Fermi-Dirac distribution "smears out" the step function at
$\varepsilon_F$. The Sommerfeld expansion provides an asymptotic series for integrals of the form

$$I = \int_0^\infty \frac◆LB◆f(\varepsilon)◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆\, d\varepsilon$$

When $k_BT \ll \varepsilon_F$ (the degenerate limit).

**Theorem 4.1 (Sommerfeld Expansion).** To leading order in $T/T_F$:

$$I = \int_0^\mu f(\varepsilon)\, d\varepsilon + \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆(k_BT)^2 f'(\mu) + \mathcal◆LB◆O◆RB◆(T^4)$$

_Proof (sketch)._ Write $f(\varepsilon) = f(\mu) + f'(\mu)(\varepsilon - \mu) + \cdots$ and use the
exact results:

$$\int_0^\infty \frac◆LB◆d\varepsilon◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆ = \mu + \mathcal◆LB◆O◆RB◆(T^4)$$

$$\int_0^\infty \frac◆LB◆(\varepsilon - \mu)\, d\varepsilon◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆ = \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆(k_BT)^2$$

$$\int_0^\infty \frac◆LB◆(\varepsilon - \mu)^2\, d\varepsilon◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆ = \mathcal◆LB◆O◆RB◆(T^4)$$

Combining these with the Taylor expansion of $f(\varepsilon)$ gives the result. The key integral
identities follow from the substitution $x = \beta(\varepsilon - \mu)$ and the fact that the
integrand is an odd function of $x$ to leading order. $\blacksquare$

### 4.2 Chemical Potential at Finite Temperature

Applying the Sommerfeld expansion to the number equation
$N = \int_0^\infty g(\varepsilon) f_◆LB◆\mathrm◆LB◆FD◆RB◆(\varepsilon)\, d\varepsilon$ with
$g(\varepsilon) = C\sqrt◆LB◆\varepsilon◆RB◆$:

$$N = \frac◆LB◆2◆RB◆◆LB◆3◆RB◆C\mu^◆LB◆3/2◆RB◆ + \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆(k_BT)^2 \cdot \frac◆LB◆C◆RB◆◆LB◆2\sqrt◆LB◆\mu◆RB◆◆RB◆ + \mathcal◆LB◆O◆RB◆(T^4)$$

At $T = 0$: $N = \frac◆LB◆2◆RB◆◆LB◆3◆RB◆C\varepsilon_F^◆LB◆3/2◆RB◆$. Expanding $\mu = \varepsilon_F + \delta\mu$ and
keeping terms to $\mathcal◆LB◆O◆RB◆(T^2)$:

$$\mu(T) \approx \varepsilon_F\left[1 - \frac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆\left(\frac◆LB◆k_BT◆RB◆◆LB◆\varepsilon_F◆RB◆\right)^2\right]$$

The chemical potential decreases slightly with temperature.

### 4.3 Heat Capacity of the Electron Gas

Applying the Sommerfeld expansion to the energy:

$$U = \int_0^\infty \varepsilon\, g(\varepsilon)\, f_◆LB◆\mathrm◆LB◆FD◆RB◆(\varepsilon)\, d\varepsilon = \frac◆LB◆2◆RB◆◆LB◆5◆RB◆C\mu^◆LB◆5/2◆RB◆ + \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆(k_BT)^2 \cdot \frac◆LB◆3◆RB◆◆LB◆2◆RB◆C\mu^◆LB◆1/2◆RB◆ + \cdots$$

Substituting $\mu \approx \varepsilon_F$:

$$U \approx \frac◆LB◆3◆RB◆◆LB◆5◆RB◆N\varepsilon_F\left[1 + \frac◆LB◆5\pi^2◆RB◆◆LB◆12◆RB◆\left(\frac◆LB◆k_BT◆RB◆◆LB◆\varepsilon_F◆RB◆\right)^2\right]$$

$$C_V = \frac◆LB◆\partial U◆RB◆◆LB◆\partial T◆RB◆ = Nk_B \cdot \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆k_BT◆RB◆◆LB◆\varepsilon_F◆RB◆ = Nk_B \cdot \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆T◆RB◆◆LB◆T_F◆RB◆$$

**Physical insight.** At room temperature ($T \approx 300$ K), $T/T_F \approx 0.006$ for copper, so
$C_V \approx 0.03 Nk_B$Which is negligible compared to the lattice contribution $\approx 3Nk_B$.
This explains why the Dulong-Petit law works for metals despite the presence of conduction
electrons.

### 4.4 Worked Example: Electronic Heat Capacity of Copper

**Problem.** Calculate the electronic contribution to $C_V$ for copper at $T = 300$ K. Compare with
the lattice contribution. Given: $\varepsilon_F = 7.0$ eV, Debye temperature $\Theta_D = 343$ K.

<details>
<summary>Solution</summary>

Electronic contribution:

$$C_V^◆LB◆\mathrm◆LB◆el◆RB◆ = Nk_B \cdot \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆T◆RB◆◆LB◆T_F◆RB◆ = Nk_B \cdot \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆300◆RB◆◆LB◆81000◆RB◆ \approx 0.018\, Nk_B$$

Lattice contribution (from the Debye model at $T \gg \Theta_D$):

$$C_V^◆LB◆\mathrm◆LB◆lat◆RB◆ \approx 3Nk_B$$

The ratio is:

$$\frac◆LB◆C_V^◆LB◆\mathrm◆LB◆el◆RB◆◆RB◆◆LB◆C_V^◆LB◆\mathrm◆LB◆lat◆RB◆◆RB◆ \approx \frac◆LB◆0.018◆RB◆◆LB◆3◆RB◆ \approx 0.006$$

The electronic heat capacity is only about $0.6\%$ of the lattice contribution at room temperature.
At very low temperatures ($T \ll \Theta_D$), the lattice contribution falls as $T^3$ while the
electronic contribution falls as $T$So the electronic term eventually dominates below a few kelvin.

$\blacksquare$

</details>

---

## 5. Bose-Einstein Condensation

### 5.1 Ideal Bose Gas

For bosons, the average occupation of a single-particle state of energy $\varepsilon$ is

$$\langle n_\varepsilon \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ - 1◆RB◆$$

The chemical potential must satisfy $\mu \leq \varepsilon_0$ (the lowest single-particle energy) to
prevent negative occupation numbers.

### 5.2 Density of States and Critical Temperature

For a 3D free Bose gas with $\varepsilon = \hbar^2 k^2 / (2m)$The density of states is
$g(\varepsilon) = (V/4\pi^2)(2m/\hbar^2)^◆LB◆3/2◆RB◆\sqrt◆LB◆\varepsilon◆RB◆$. The number of particles in
excited states ($\varepsilon > 0$) is

$$N_◆LB◆\mathrm◆LB◆ex◆RB◆ = \int_0^\infty \frac◆LB◆g(\varepsilon)\, d\varepsilon◆RB◆◆LB◆e^◆LB◆\beta \varepsilon◆RB◆ - 1◆RB◆ = V\left(\frac◆LB◆mk_BT◆RB◆◆LB◆2\pi\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆\,\zeta\!\left(\frac◆LB◆3◆RB◆◆LB◆2◆RB◆\right)$$

Where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function.

**Theorem 5.1 (BEC critical temperature).** The maximum number of particles that can be accommodated
in excited states is achieved at $\mu = 0$. When $N$ exceeds this maximum, the excess condenses into
the ground state. The critical temperature is

$$T_c = \frac◆LB◆2\pi\hbar^2◆RB◆◆LB◆mk_B◆RB◆\left(\frac◆LB◆n◆RB◆◆LB◆\zeta(3/2)◆RB◆\right)^◆LB◆2/3◆RB◆$$

Where $n = N/V$.

_Proof._ Setting $N = N_◆LB◆\mathrm◆LB◆ex◆RB◆^◆LB◆\max◆RB◆$ at $\mu = 0$ and solving for $T$:

$$n = \left(\frac◆LB◆mk_B T_c◆RB◆◆LB◆2\pi\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆\,\zeta\!\left(\frac◆LB◆3◆RB◆◆LB◆2◆RB◆\right)$$

$$T_c = \frac◆LB◆2\pi\hbar^2◆RB◆◆LB◆mk_B◆RB◆\left(\frac◆LB◆n◆RB◆◆LB◆\zeta(3/2)◆RB◆\right)^◆LB◆2/3◆RB◆ \qquad \blacksquare$$

### 5.3 Condensate Fraction

Below $T_c$$\mu \approx 0$ and the condensate fraction is

$$\frac◆LB◆N_0◆RB◆◆LB◆N◆RB◆ = 1 - \left(\frac◆LB◆T◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆3/2◆RB◆$$

This follows from $N_0 = N - N_◆LB◆\mathrm◆LB◆ex◆RB◆$ with $\mu = 0$:

$$N_◆LB◆\mathrm◆LB◆ex◆RB◆ = N\left(\frac◆LB◆T◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆3/2◆RB◆$$

### 5.4 Thermodynamic Properties below $T_c$

The energy below $T_c$:

$$U = \int_0^\infty \frac◆LB◆\varepsilon\, g(\varepsilon)\, d\varepsilon◆RB◆◆LB◆e^◆LB◆\beta\varepsilon◆RB◆ - 1◆RB◆ = V\left(\frac◆LB◆mk_BT◆RB◆◆LB◆2\pi\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆\,(k_BT)\,\frac◆LB◆3◆RB◆◆LB◆2◆RB◆\,\zeta\!\left(\frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right) \cdot \Gamma\!\left(\frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right)$$

$$= \frac◆LB◆3◆RB◆◆LB◆2◆RB◆\,Nk_BT_c\,\zeta\!\left(\frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right)\Big/\zeta\!\left(\frac◆LB◆3◆RB◆◆LB◆2◆RB◆\right)\,\left(\frac◆LB◆T◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆5/2◆RB◆$$

The heat capacity:

$$C_V = \frac◆LB◆15◆RB◆◆LB◆4◆RB◆\,Nk_B\,\zeta\!\left(\frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right)\Big/\zeta\!\left(\frac◆LB◆3◆RB◆◆LB◆2◆RB◆\right)\,\left(\frac◆LB◆T◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆3/2◆RB◆ \propto T^◆LB◆3/2◆RB◆$$

This contrasts with the constant $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B$ above $T_c$ (equipartition). There is a
cusp (discontinuity in the derivative) at $T_c$Characteristic of a phase transition.

### 5.5 Worked Example: BEC in Rubidium-87

**Problem.** Estimate $T_c$ for a gas of $N = 10^4$ rubidium-87 atoms confined in a harmonic trap
with frequency $\omega_◆LB◆\mathrm◆LB◆ho◆RB◆ = 2\pi \times 100$ Hz.

<details>
<summary>Solution</summary>

For a harmonic trap, the effective density of states is
$g(\varepsilon) = \varepsilon^2/(2\hbar^3\omega_◆LB◆\mathrm◆LB◆ho◆RB◆^3)$. The critical temperature in a
harmonic trap is:

$$k_BT_c = \hbar\omega_◆LB◆\mathrm◆LB◆ho◆RB◆\left(\frac◆LB◆N◆RB◆◆LB◆\zeta(3)◆RB◆\right)^◆LB◆1/3◆RB◆$$

$$k_BT_c = (1.055 \times 10^◆LB◆-34◆RB◆)(2\pi \times 100)\left(\frac◆LB◆10^4◆RB◆◆LB◆1.202◆RB◆\right)^◆LB◆1/3◆RB◆$$

$$= (6.63 \times 10^◆LB◆-32◆RB◆)(20.1) = 1.33 \times 10^◆LB◆-30◆RB◆\,\mathrm◆LB◆J$$

$$T_c = \frac◆LB◆1.33 \times 10^◆LB◆-30◆RB◆◆RB◆◆LB◆1.381 \times 10^◆LB◆-23◆RB◆◆RB◆ \approx 9.6 \times 10^◆LB◆-8◆RB◆\,\mathrm◆LB◆K \approx 96\,\mathrm◆LB◆nK$$

This is consistent with the 1995 BEC experiments by Cornell and Wieman (JILA) and Ketterle (MIT),
who achieved BEC at temperatures of a few hundred nanokelvin. $\blacksquare$

</details>

---

## 6. The Ising Model

### 6.1 Definition

The **Ising model** is the simplest model of a phase transition. On a lattice of $N$ sites, each
site $i$ has a spin variable $s_i \in \{+1, -1\}$. The Hamiltonian is

$$H = -J\sum_◆LB◆\langle i,j\rangle◆RB◆ s_i s_j - h\sum_i s_i$$

Where $J$ is the coupling constant, $\langle i,j\rangle$ denotes nearest-neighbour pairs, and $h$ is
an external magnetic field.

- $J > 0$: **ferromagnetic** (spins prefer to align).
- $J < 0$: **antiferromagnetic** (spins prefer to anti-align).

### 6.2 Exact Solution in One Dimension

**Theorem 6.1.** The 1D Ising model with $h = 0$ has no phase transition at any finite temperature.

_Proof (Transfer matrix method)._ Consider a chain of $N$ spins with periodic boundary conditions
($s_◆LB◆N+1◆RB◆ = s_1$). The partition function is:

$$Z = \sum_◆LB◆\{s_i\}◆RB◆ \prod_◆LB◆i=1◆RB◆^◆LB◆N◆RB◆ e^◆LB◆\beta J s_i s_◆LB◆i+1◆RB◆◆RB◆$$

Define the **transfer matrix** $\mathbf◆LB◆T◆RB◆$ with elements
$T_◆LB◆s_i, s_◆LB◆i+1◆RB◆◆RB◆ = e^◆LB◆\beta J s_i s_◆LB◆i+1◆RB◆◆RB◆$:

$$\mathbf◆LB◆T◆RB◆ = \begin◆LB◆pmatrix◆RB◆ e^◆LB◆\beta J◆RB◆ & e^◆LB◆-\beta J◆RB◆ \\ e^◆LB◆-\beta J◆RB◆ & e^◆LB◆\beta J◆RB◆ \end◆LB◆pmatrix◆RB◆$$

The partition function is $Z = \mathrm◆LB◆Tr(\mathbf◆LB◆T◆RB◆^N) = \lambda_+^N + \lambda_-^N$ where
$\lambda_\pm$ are the eigenvalues of $\mathbf◆LB◆T◆RB◆$:

$$\lambda_\pm = e^◆LB◆\beta J◆RB◆ \pm e^◆LB◆-\beta J◆RB◆$$

In the thermodynamic limit ($N \to \infty$), $Z \approx \lambda_+^N$ and the free energy per spin
is:

$$f = -k_BT \ln(e^◆LB◆\beta J◆RB◆ + e^◆LB◆-\beta J◆RB◆) = -k_BT \ln(2\cosh\beta J)$$

The magnetisation $m = -\partial f/\partial h|_◆LB◆h=0◆RB◆ = 0$ for all $T > 0$Confirming no spontaneous
magnetisation and hence no phase transition. $\blacksquare$

### 6.3 Mean Field Theory

**Theorem 6.2 (Mean field approximation).** In mean field theory, each spin feels an effective field
due to its neighbours. Replacing $s_j$ by its average $\langle s_j \rangle = m$ in the Hamiltonian:

$$H_◆LB◆\mathrm◆LB◆MF◆RB◆ = -Jz\, m\sum_i s_i - h\sum_i s_i$$

Where $z$ is the coordination number (number of nearest neighbours). Each spin behaves as if in an
effective field $h_◆LB◆\mathrm◆LB◆eff◆RB◆ = h + Jz\,m$.

The self-consistency equation (mean field equation) is:

$$m = \tanh\!\left(\frac◆LB◆\beta(h + Jz\,m)◆RB◆◆LB◆k_B◆RB◆\right) = \tanh\!\left(\frac◆LB◆h + Jz\,m◆RB◆◆LB◆k_BT◆RB◆\right)$$

For $h = 0$: $m = \tanh(Jz\,m / k_BT)$.

**Critical temperature.** Expanding $\tanh x \approx x - x^3/3$ for small $x$:

$$m = \frac◆LB◆Jz\,m◆RB◆◆LB◆k_BT◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\left(\frac◆LB◆Jz\,m◆RB◆◆LB◆k_BT◆RB◆\right)^3$$

For $m \neq 0$Dividing by $m$:

$$1 = \frac◆LB◆Jz◆RB◆◆LB◆k_BT_c◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\left(\frac◆LB◆Jz◆RB◆◆LB◆k_BT_c◆RB◆\right)^3$$

At $T = T_c$: $T_c = Jz/k_B$.

### 6.4 Critical Exponents

Near the critical point, thermodynamic quantities follow power laws:

$$m \sim (T_c - T)^◆LB◆1/\beta◆RB◆, \quad \chi \sim |T - T_c|^◆LB◆-\gamma◆RB◆, \quad C \sim |T - T_c|^◆LB◆-\alpha◆RB◆$$

Mean field theory predicts:

$$\beta = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆, \quad \gamma = 1, \quad \alpha = 0\ \text◆LB◆(jump discontinuity)$$

These are the **classical** critical exponents. They are independent of the spatial dimension $d$
and the lattice structure --- a deficiency of mean field theory. Exact results and renormalisation
group calculations give dimension-dependent exponents that agree with experiment.

| Exponent | Mean Field | 2D Ising | 3D Ising |
| -------- | ---------- | -------- | -------- |
| $\alpha$ | 0 (jump)   | 0 (log)  | 0.110    |
| $\beta$  | 1/2        | 1/8      | 0.326    |
| $\gamma$ | 1          | 7/4      | 1.237    |

### 6.5 Worked Example: Mean Field Theory for the 2D Square Lattice

**Problem.** For the 2D Ising model on a square lattice ($z = 4$), find $T_c$ in mean field theory
and compare with the exact result $k_BT_c / J = 2/\ln(1 + \sqrt◆LB◆2◆RB◆) \approx 2.269$.

<details>
<summary>Solution</summary>

Mean field: $T_c^◆LB◆\mathrm◆LB◆MF◆RB◆ = Jz/k_B = 4J/k_B$So $k_BT_c^◆LB◆\mathrm◆LB◆MF◆RB◆/J = 4$.

Exact (Onsager, 1944): $k_BT_c^◆LB◆\mathrm◆LB◆exact◆RB◆/J = 2/\ln(1 + \sqrt◆LB◆2◆RB◆) \approx 2.269$.

The mean field result overestimates $T_c$ by a factor of $4/2.269 \approx 1.76$. This is because
mean field theory overestimates the tendency toward ordering by neglecting thermal fluctuations. The
error is larger in lower dimensions where fluctuations are more important.

$\blacksquare$

</details>

### 6.6 Worked Example: Susceptibility above $T_c$

**Problem.** Calculate the magnetic susceptibility $\chi = \partial m/\partial h|_◆LB◆h=0◆RB◆$ above $T_c$
in mean field theory.

<details>
<summary>Solution</summary>

For small $h$ and $T > T_c$Expand $m = \tanh(\beta(h + Jz\,m))$ to first order in $h$ and $m$:

$$m \approx \beta(h + Jz\,m) = \frac◆LB◆h◆RB◆◆LB◆k_BT◆RB◆ + \frac◆LB◆Jz◆RB◆◆LB◆k_BT◆RB◆m$$

Solving for $m$:

$$m = \frac◆LB◆h/k_BT◆RB◆◆LB◆1 - Jz/(k_BT)◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆k_B(T - T_c)◆RB◆$$

$$\chi = \frac◆LB◆\partial m◆RB◆◆LB◆\partial h◆RB◆\bigg|_◆LB◆h=0◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆k_B(T - T_c)◆RB◆ \propto (T - T_c)^◆LB◆-1◆RB◆$$

This gives the mean field critical exponent $\gamma = 1$. $\blacksquare$

</details>

---

## 7. Classical Limit and the Maxwell-Boltzmann Distribution

### 7.1 Derivation from Quantum Statistics

In the classical (dilute) limit, both Fermi-Dirac and Bose-Einstein distributions reduce to the
Maxwell-Boltzmann distribution. The condition for the classical limit is

$$e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ \gg 1$$

For all relevant energies. This is equivalent to $n\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3 \ll 1$ (the thermal de
Broglie wavelength is much smaller than the inter-particle spacing).

**Theorem 7.1.** In the classical limit:

$$f_◆LB◆\mathrm◆LB◆FD◆RB◆(\varepsilon) \approx f_◆LB◆\mathrm◆LB◆BE◆RB◆(\varepsilon) \approx f_◆LB◆\mathrm◆LB◆MB◆RB◆(\varepsilon) = e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆$$

_Proof._ When $e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ \gg 1$The $+1$ or $-1$ in the denominator is negligible:

$$\frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ \pm 1◆RB◆ \approx \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆◆RB◆ = e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆$$

$\blacksquare$

### 7.2 Maxwell-Boltzmann Speed Distribution

For a classical ideal gas, the probability distribution of molecular speeds is

$$f(v)\,dv = 4\pi\left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_BT◆RB◆\right)^◆LB◆3/2◆RB◆ v^2 e^◆LB◆-mv^2/(2k_BT)◆RB◆\,dv$$

**Characteristic speeds:**

- Most probable: $v_p = \sqrt◆LB◆2k_BT/m◆RB◆$
- Mean: $\langle v \rangle = \sqrt◆LB◆8k_BT/(\pi m)◆RB◆$
- RMS: $v_◆LB◆\mathrm◆LB◆rms◆RB◆ = \sqrt◆LB◆3k_BT/m◆RB◆$

The ordering is $v_p < \langle v \rangle < v_◆LB◆\mathrm◆LB◆rms◆RB◆$.

### 7.3 Worked Example: Effusion

**Problem.** A gas of molecular mass $m$ at temperature $T$ effuses through a small hole. Find the
distribution of speeds of the effusing molecules and the mean kinetic energy per effusing molecule.

<details>
<summary>Solution</summary>

The effusion rate for molecules with speed between $v$ and $v + dv$ is proportional to
$v \cdot f(v)\,dv$ (faster molecules hit the hole more frequently). The effusion distribution is:

$$f_◆LB◆\mathrm◆LB◆eff◆RB◆(v)\,dv \propto v \cdot v^2 e^◆LB◆-mv^2/(2k_BT)◆RB◆\,dv = v^3 e^◆LB◆-mv^2/(2k_BT)◆RB◆\,dv$$

Normalising:

$$f_◆LB◆\mathrm◆LB◆eff◆RB◆(v) = \frac◆LB◆1◆RB◆◆LB◆2(k_BT/m)^2◆RB◆\,v^3\,e^◆LB◆-mv^2/(2k_BT)◆RB◆$$

The mean kinetic energy:

$$\langle \varepsilon \rangle_◆LB◆\mathrm◆LB◆eff◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\langle v^2 \rangle_◆LB◆\mathrm◆LB◆eff◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m \cdot \frac◆LB◆\int_0^\infty v^5 e^◆LB◆-mv^2/(2k_BT)◆RB◆\,dv◆RB◆◆LB◆\int_0^\infty v^3 e^◆LB◆-mv^2/(2k_BT)◆RB◆\,dv◆RB◆$$

Using $\int_0^\infty v^n e^◆LB◆-av^2◆RB◆\,dv = \frac◆LB◆1◆RB◆◆LB◆2a^◆LB◆(n+1)/2◆RB◆◆RB◆\Gamma\!\left(\frac◆LB◆n+1◆RB◆◆LB◆2◆RB◆\right)$:

$$\langle v^2 \rangle_◆LB◆\mathrm◆LB◆eff◆RB◆ = \frac◆LB◆\Gamma(3)/(2a^3)◆RB◆◆LB◆\Gamma(2)/(2a^2)◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆a◆RB◆ = \frac◆LB◆4k_BT◆RB◆◆LB◆m◆RB◆$$

$$\langle \varepsilon \rangle_◆LB◆\mathrm◆LB◆eff◆RB◆ = 2k_BT$$

This is $4/3$ times the bulk average $\frac◆LB◆3◆RB◆◆LB◆2◆RB◆k_BT$ --- effusing molecules are "hotter" because
faster molecules escape preferentially. $\blacksquare$

</details>

---

## 8. Common Pitfalls

- **Confusing the microcanonical, canonical, and grand canonical ensembles.** The microcanonical
  ensemble describes an isolated system with fixed $E, V, N$. The canonical ensemble describes a
  system in contact with a heat bath at fixed $T, V, N$. The grand canonical ensemble describes a
  system exchanging both energy and particles, at fixed $\mu, V, T$.

- **Forgetting the $1/N!$ for indistinguishable particles.** Without this factor, entropy is not
  extensive and the Gibbs paradox arises. This is essential for all quantum statistical mechanics.

- **Applying the equipartition theorem to quantum systems.** At temperatures below the
  characteristic energy spacing ($k_BT \ll \Delta E$), the relevant degrees of freedom are "frozen
  out" and do not contribute to $C_V$.

- **Assuming the classical limit always applies.** Electrons in metals are degenerate ($T \ll T_F$)
  and must be treated with Fermi-Dirac .../4-statistics-and-probability/2*statistics. Helium-4 at
  low temperatures exhibits Bose-Einstein condensation and superfluidity. The classical limit
  $n\lambda*◆LB◆\mathrm◆LB◆th◆RB◆^3 \ll 1$ is violated in these cases.

- **Confusing $\mu = 0$ for bosons with $\mu$ for fermions.** For bosons, $\mu \leq \varepsilon_0$
  and $\mu \to 0$ at BEC. For fermions, $\mu \approx \varepsilon_F$ at low temperatures and can be
  much larger than $\varepsilon_0$.

- **Using mean field critical exponents in 2D.** Mean field theory gives $\beta = 1/2$ everywhere,
  but the exact 2D Ising result is $\beta = 1/8$. Mean field theory is qualitatively wrong in low
  dimensions.

---

## 9. Problem Set

### Problem 1

Calculate the Fermi energy and Fermi temperature for sodium. Given: electron density
$n \approx 2.65 \times 10^◆LB◆28◆RB◆\,\mathrm◆LB◆m^◆LB◆-3◆RB◆$$m_e = 9.109 \times 10^◆LB◆-31◆RB◆$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆(3\pi^2 n)^◆LB◆2/3◆RB◆$$

$$= \frac◆LB◆(1.055 \times 10^◆LB◆-34◆RB◆)^2◆RB◆◆LB◆2 \times 9.109 \times 10^◆LB◆-31◆RB◆◆RB◆(3\pi^2 \times 2.65 \times 10^◆LB◆28◆RB◆)^◆LB◆2/3◆RB◆$$

$(3\pi^2 \times 2.65 \times 10^◆LB◆28◆RB◆)^◆LB◆1/3◆RB◆ = (7.85 \times 10^◆LB◆29◆RB◆)^◆LB◆1/3◆RB◆ \approx 9.23 \times 10^9$

$(3\pi^2 n)^◆LB◆2/3◆RB◆ = (9.23 \times 10^9)^2 = 8.52 \times 10^◆LB◆19◆RB◆$

$\varepsilon_F = \frac◆LB◆1.113 \times 10^◆LB◆-68◆RB◆◆RB◆◆LB◆1.822 \times 10^◆LB◆-30◆RB◆◆RB◆ \times 8.52 \times 10^◆LB◆19◆RB◆ \approx 5.20 \times 10^◆LB◆-19◆RB◆\,\mathrm◆LB◆J \approx 3.25\,\mathrm◆LB◆eV$

$T_F = \varepsilon_F/k_B = 5.20 \times 10^◆LB◆-19◆RB◆/1.381 \times 10^◆LB◆-23◆RB◆ \approx 37700\,\mathrm◆LB◆K$

</details>

### Problem 2

A 3D Bose gas of $N$ particles of mass $m$ is confined to volume $V$. Show that the heat capacity at
constant volume has a discontinuity at $T = T_c$ and find the jump.

<details>
<summary>Solution</summary>

Above $T_c$ (classical regime): $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B$.

Below $T_c$: $C_V = \frac◆LB◆15◆RB◆◆LB◆4◆RB◆Nk_B\,\zeta(5/2)/\zeta(3/2) \cdot (T/T_c)^◆LB◆3/2◆RB◆$.

At $T = T_c^-$:

$$C_V(T_c^-) = \frac◆LB◆15◆RB◆◆LB◆4◆RB◆Nk_B \cdot \frac◆LB◆\zeta(5/2)◆RB◆◆LB◆\zeta(3/2)◆RB◆$$

$\zeta(5/2) \approx 1.341$$\zeta(3/2) \approx 2.612$:

$$C_V(T_c^-) = \frac◆LB◆15◆RB◆◆LB◆4◆RB◆ \times \frac◆LB◆1.341◆RB◆◆LB◆2.612◆RB◆\,Nk_B \approx 1.926\,Nk_B$$

At $T = T_c^+$: $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B = 1.5\,Nk_B$.

The jump is $\Delta C_V = C_V(T_c^-) - C_V(T_c^+) \approx 0.426\,Nk_B$.

</details>

### Problem 3

Derive the virial expansion for a non-ideal gas in terms of the second virial coefficient
$B_2(T)$And show that $B_2(T)$ can be expressed in terms of the two-particle interaction potential
$V(r)$.

<details>
<summary>Solution</summary>

The pressure of a real gas is expanded as
$PV/(Nk_BT) = 1 + B_2(T)\,(N/V) + B_3(T)\,(N/V)^2 + \cdots$.

For a classical gas with pairwise interaction $V(r_◆LB◆12◆RB◆)$:

$$B_2(T) = -\frac◆LB◆1◆RB◆◆LB◆2V◆RB◆\int d^3\mathbf◆LB◆r◆RB◆_1\,d^3\mathbf◆LB◆r◆RB◆_2\,\left[e^◆LB◆-\beta V(r_◆LB◆12◆RB◆)◆RB◆ - 1\right]$$

$$= -2\pi \int_0^\infty \left[e^◆LB◆-\beta V(r)◆RB◆ - 1\right] r^2\, dr$$

For a hard-sphere gas ($V(r) = \infty$ for $r < d$$V(r) = 0$ for $r > d$):

$$B_2 = -2\pi\int_0^d (-1)\,r^2\,dr = \frac◆LB◆2\pi d^3◆RB◆◆LB◆3◆RB◆ = \frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆\left(\frac◆LB◆d◆RB◆◆LB◆2◆RB◆\right)^3 \cdot 8 = 4v_0$$

Where $v_0 = \pi d^3/6$ is the volume of one sphere. The van der Waals excluded volume parameter is
$b = 4Nv_0 = N B_2$.

</details>

### Problem 4

Show that the classical limit of the Fermi-Dirac distribution reproduces the Maxwell-Boltzmann
distribution, and derive the condition for the classical limit in terms of the density of states.

<details>
<summary>Solution</summary>

The Fermi-Dirac distribution is:

$$f_◆LB◆\mathrm◆LB◆FD◆RB◆(\varepsilon) = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆$$

The total number of particles is:

$$N = \int_0^\infty \frac◆LB◆g(\varepsilon)◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆\, d\varepsilon$$

In the classical limit $e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ \gg 1$The $+1$ is negligible:

$$N \approx \int_0^\infty g(\varepsilon)\, e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆\, d\varepsilon = e^◆LB◆\beta\mu◆RB◆ \int_0^\infty g(\varepsilon)\, e^◆LB◆-\beta\varepsilon◆RB◆\, d\varepsilon$$

$$e^◆LB◆\beta\mu◆RB◆ = \frac◆LB◆N◆RB◆◆LB◆\int_0^\infty g(\varepsilon)\, e^◆LB◆-\beta\varepsilon◆RB◆\, d\varepsilon◆RB◆ = \frac◆LB◆N\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3◆RB◆◆LB◆V◆RB◆$$

The classical limit requires $e^◆LB◆\beta\mu◆RB◆ \ll 1$I.e., $N\lambda_◆LB◆\mathrm◆LB◆th◆RB◆^3/V \ll 1$Or
equivalently, the average inter-particle spacing $(V/N)^◆LB◆1/3◆RB◆$ must be much larger than
$\lambda_◆LB◆\mathrm◆LB◆th◆RB◆$.

</details>

### Problem 5

Compute the partition function for a single quantum harmonic oscillator and verify that the average
energy is $\langle E \rangle = \hbar\omega(n_B + 1/2)$ where $n_B = 1/(e^◆LB◆\beta\hbar\omega◆RB◆ - 1)$.

<details>
<summary>Solution</summary>

$$Z_◆LB◆\mathrm◆LB◆HO◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-\beta\hbar\omega(n+1/2)◆RB◆ = e^◆LB◆-\beta\hbar\omega/2◆RB◆\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆\left(e^◆LB◆-\beta\hbar\omega◆RB◆\right)^n = \frac◆LB◆e^◆LB◆-\beta\hbar\omega/2◆RB◆◆RB◆◆LB◆1 - e^◆LB◆-\beta\hbar\omega◆RB◆◆RB◆$$

$$\langle E \rangle = -\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial \beta◆RB◆ = \frac◆LB◆\hbar\omega◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆\hbar\omega\,e^◆LB◆-\beta\hbar\omega◆RB◆◆RB◆◆LB◆1 - e^◆LB◆-\beta\hbar\omega◆RB◆◆RB◆ = \frac◆LB◆\hbar\omega◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆\hbar\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆ = \hbar\omega\left(\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + n_B\right)$$

At high $T$ ($\beta \to 0$): $\langle E \rangle \to k_BT$ (equipartition). At low $T$:
$\langle E \rangle \to \hbar\omega/2$ (zero-point energy).

</details>

## 10. Phase Transitions

A **phase transition** is a discontinuity in a thermodynamic quantity or its derivative as a
function of a state variable. Phase transitions are classified by Ehrenfest according to which
derivative of the Gibbs free energy is discontinuous.

### 10.1 Classification of Phase Transitions

| Order              | Definition                                                                       | Example                        |
| ------------------ | -------------------------------------------------------------------------------- | ------------------------------ |
| First order        | $G$ continuous; $\partial G/\partial T$ or $\partial G/\partial P$ discontinuous | Boiling of water               |
| Second order       | First derivatives continuous; second derivatives discontinuous                   | Superconducting transition     |
| Lambda ($\lambda$) | Divergent second derivatives                                                     | Helium-4 superfluid transition |

For a first-order transition at temperature $T_c$The **latent heat** is:

$$L = T_c \Delta S = T_c \left(S_◆LB◆\text◆LB◆phase 2◆RB◆ - S_◆LB◆\text◆LB◆phase 1◆RB◆\right)$$

The **Clausius--Clapeyron equation** governs the slope of the coexistence curve:

$$\frac◆LB◆dP◆RB◆◆LB◆dT◆RB◆ = \frac◆LB◆L◆RB◆◆LB◆T_c \Delta v◆RB◆$$

Where $\Delta v = v_2 - v_1$ is the change in specific volume.

### 10.2 Van der Waals Equation and Critical Phenomena

The van der Waals equation of state modifies the ideal gas law to account for intermolecular forces:

$$\left(P + \frac◆LB◆a◆RB◆◆LB◆v^2◆RB◆\right)(v - b) = k_B T$$

Where $a$ accounts for attractive interactions and $b$ for the finite molecular volume. The critical
point $(T_c, P_c, v_c)$ satisfies:

$$\frac◆LB◆\partial P◆RB◆◆LB◆\partial v◆RB◆\bigg|_◆LB◆T_c◆RB◆ = 0, \qquad \frac◆LB◆\partial^2 P◆RB◆◆LB◆\partial v^2◆RB◆\bigg|_◆LB◆T_c◆RB◆ = 0$$

Solving gives:

$$T_c = \frac◆LB◆8a◆RB◆◆LB◆27bk_B◆RB◆, \qquad P_c = \frac◆LB◆a◆RB◆◆LB◆27b^2◆RB◆, \qquad v_c = 3b$$

Near the critical point, define the **reduced variables**
$\tilde◆LB◆T◆RB◆ = T/T_c$$\tilde◆LB◆P◆RB◆ = P/P_c$$\tilde◆LB◆v◆RB◆ = v/v_c$ to obtain the universal form:

$$\left(\tilde◆LB◆P◆RB◆ + \frac◆LB◆3◆RB◆◆LB◆\tilde◆LB◆v◆RB◆^2◆RB◆\right)(3\tilde◆LB◆v◆RB◆ - 1) = 8\tilde◆LB◆T◆RB◆$$

The **order parameter** $\phi = (v_◆LB◆\text◆LB◆gas◆RB◆ - v_◆LB◆\text◆LB◆liquid◆RB◆)/(v_c)$ vanishes as:

$$\phi \propto (T_c - T)^◆LB◆\beta◆RB◆$$

Where $\beta = 1/2$ is the **mean-field critical exponent** (van der Waals prediction).

### 10.3 Critical Exponents

Near a second-order phase transition, thermodynamic quantities follow power laws characterized by
**critical exponents**:

| Exponent | Definition                           | Mean-field | 2D Ising | 3D Ising (numerical) |
| -------- | ------------------------------------ | ---------- | -------- | -------------------- |
| $\alpha$ | $C \propto \|t\|^◆LB◆-\alpha◆RB◆$          | 0 (jump)   | 0 (log)  |
| $\beta$  | $\phi \propto (-t)^\beta$            | $1/2$      | $1/8$    | $\approx 0.326$      |
| $\gamma$ | $\chi \propto \|t\|^◆LB◆-\gamma◆RB◆$       | $1$        | $7/4$    |
| $\delta$ | $\phi \propto h^◆LB◆1/\delta◆RB◆$ at $t=0$ | $3$        | $15$     | $\approx 4.789$      |

Where $t = (T - T_c)/T_c$ is the reduced temperature and $h$ is the conjugate field.

<details>
<summary>Worked Example 10.1: Clausius--Clapeyron for Water</summary>

For the water--steam transition at 1 atm, $T_c = 373.15$ K, $L = 2260$ kJ/kg,
$v_◆LB◆\text◆LB◆steam◆RB◆ = 1.673$ m$^3$/kg, $v_◆LB◆\text◆LB◆water◆RB◆ = 1.043 \times 10^◆LB◆-3◆RB◆$ m$^3$/kg.

$$\frac◆LB◆dP◆RB◆◆LB◆dT◆RB◆ = \frac◆LB◆L◆RB◆◆LB◆T \Delta v◆RB◆ = \frac◆LB◆2.26 \times 10^6◆RB◆◆LB◆373.15 \times 1.673◆RB◆ = \frac◆LB◆2.26 \times 10^6◆RB◆◆LB◆624.3◆RB◆ \approx 3620 \text◆LB◆ Pa/K \approx 0.0357 \text◆LB◆ atm/K$$

This means increasing the boiling temperature by 1 K requires increasing the pressure by about 0.036
atm.

</details>

<details>
<summary>Worked Example 10.2: Critical Parameters of CO$_2$</summary>

For CO$_2$$a = 0.364$ Pa$\cdot$M$^6$/mol$^2$$b = 4.27 \times 10^◆LB◆-5◆RB◆$ m$^3$/mol. Using the critical
point formulas:

$$T_c = \frac◆LB◆8a◆RB◆◆LB◆27Rb◆RB◆ = \frac◆LB◆8 \times 0.364◆RB◆◆LB◆27 \times 8.314 \times 4.27 \times 10^◆LB◆-5◆RB◆◆RB◆ = \frac◆LB◆2.912◆RB◆◆LB◆9.585 \times 10^◆LB◆-3◆RB◆◆RB◆ \approx 303.7 \text◆LB◆ K$$

$$P_c = \frac◆LB◆a◆RB◆◆LB◆27b^2◆RB◆ = \frac◆LB◆0.364◆RB◆◆LB◆27 \times (4.27 \times 10^◆LB◆-5◆RB◆)^2◆RB◆ = \frac◆LB◆0.364◆RB◆◆LB◆4.923 \times 10^◆LB◆-8◆RB◆◆RB◆ \approx 7.40 \times 10^6 \text◆LB◆ Pa = 74.0 \text◆LB◆ atm$$

The experimental values are $T_c = 304.3$ K and $P_c = 73.8$ atm, showing good agreement.

</details>

## 11. Landau Theory of Phase Transitions

Landau theory provides a phenomenological framework for continuous (second-order) phase transitions
by expanding the free energy in powers of an **order parameter** $\phi$.

### 11.1 Landau Free Energy

The Landau free energy density (in the absence of external fields) is:

$$f(\phi, T) = f_0(T) + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆a(T)\phi^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆b\phi^4 + \frac◆LB◆1◆RB◆◆LB◆6◆RB◆c\phi^6 + \cdots$$

**Assumptions:**

- $f$ is analytic in $\phi$ near the transition
- Symmetry $\phi \to -\phi$ (e.g., Ising systems) eliminates odd powers
- $b > 0$ for stability
- $a(T) = a_0(T - T_c)$ changes sign at $T_c$

With an external field $h$ conjugate to $\phi$Add $-h\phi$:

$$f(\phi, T) = f_0 + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆a(T)\phi^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆b\phi^4 - h\phi$$

The equilibrium order parameter minimizes $f$:

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial \phi◆RB◆ = a\phi + b\phi^3 - h = 0$$

### 11.2 Zero-Field Solutions

For $h = 0$:

- **$T > T_c$** ($a > 0$): minimum at $\phi = 0$ (disordered phase)
- **$T < T_c$** ($a < 0$): minima at $\phi = \pm\sqrt◆LB◆-a/b◆RB◆ = \pm\sqrt◆LB◆a_0(T_c - T)/b◆RB◆$

The order parameter grows as:

$$\phi = \begin◆LB◆cases◆RB◆ 0 & T > T_c \\ \pm\sqrt◆LB◆a_0(T_c - T)/b◆RB◆ & T < T_c \end◆LB◆cases◆RB◆$$

This yields the mean-field critical exponent $\beta = 1/2$.

### 11.3 Susceptibility

The **susceptibility** $\chi = \partial\phi/\partial h|_◆LB◆h=0◆RB◆$ is obtained by expanding
$\phi(h) = \phi_0 + \chi h + \cdots$:

$$a\phi + b\phi^3 - h = 0 \implies (a + 3b\phi_0^2)\chi = 1$$

- **$T > T_c$**: $\phi_0 = 0$So $\chi = 1/a = 1/[a_0(T - T_c)]$Giving $\gamma = 1$.
- **$T < T_c$**: $\phi_0^2 = -a/b$So $\chi = 1/(-2a) = 1/[2a_0(T_c - T)]$Giving $\gamma' = 1$.

### 11.4 Specific Heat

The free energy at equilibrium is:

$$f_◆LB◆\text◆LB◆eq◆RB◆ = \begin◆LB◆cases◆RB◆ f_0 & T > T_c \\ f_0 - a^2/(4b) & T < T_c \end◆LB◆cases◆RB◆$$

The specific heat discontinuity is:

$$C_◆LB◆T_c^-◆RB◆ - C_◆LB◆T_c^+◆RB◆ = -T_c \frac◆LB◆\partial^2◆RB◆◆LB◆\partial T^2◆RB◆\left(\frac◆LB◆-a^2◆RB◆◆LB◆4b◆RB◆\right)\bigg|_◆LB◆T_c◆RB◆ = \frac◆LB◆T_c a_0^2◆RB◆◆LB◆2b◆RB◆$$

This is a finite jump ($\alpha = 0$ in mean-field theory).

<details>
<summary>Worked Example 11.1: Landau Free Energy Minimum</summary>

Consider $f = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(T - 100)\phi^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\phi^4$ (in arbitrary units where
$a_0 = b = 1$).

At $T = 50$ ($a = -50$): $f = -25\phi^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\phi^4$.

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial \phi◆RB◆ = -50\phi + \phi^3 = 0 \implies \phi = 0 \text◆LB◆ (max) or  \phi = \pm\sqrt◆LB◆50◆RB◆ = \pm 7.07 \text◆LB◆ (min)$$

$$f_◆LB◆\text◆LB◆min◆RB◆ = -25(50) + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆(2500) = -1250 + 625 = -625$$

At $T = 150$ ($a = 50$): $f = 25\phi^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\phi^4$.

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial \phi◆RB◆ = 50\phi + \phi^3 = 0 \implies \phi = 0 \text◆LB◆ (min)$$

$$f_◆LB◆\text◆LB◆min◆RB◆ = 0$$

The free energy drops by 625 units when going below $T_c = 100$Driving the transition.

</details>

<details>
<summary>Worked Example 11.2: First-Order Transition in Landau Theory</summary>

When $b < 0$ (which can happen in systems with first-order transitions), we must include the
$\phi^6$ term with $c > 0$:

$$f = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆a(T)\phi^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆b\phi^4 + \frac◆LB◆1◆RB◆◆LB◆6◆RB◆c\phi^6$$

The equilibrium condition $\partial f/\partial \phi = 0$ gives:

$$\phi(a + b\phi^2 + c\phi^4) = 0$$

The quartic factor has solutions when:

$$\phi^2 = \frac◆LB◆-b \pm \sqrt◆LB◆b^2 - 4ac◆RB◆◆RB◆◆LB◆2c◆RB◆$$

This requires $b^2 > 4ac$Which occurs when $T$ is below some temperature $T^* > T_c$. Between $T_c$
and $T^*$The system undergoes a **first-order** transition because the order parameter jumps
discontinuously from zero to a finite value.

</details>

## 12. Ising Model and Mean-Field Theory

### 12.1 The Ising Model

The Ising model is the simplest model of interacting spins on a lattice. Each site $i$ has a spin
variable $\sigma_i \in \{-1, +1\}$.

$$\mathcal◆LB◆H◆RB◆ = -J\sum_◆LB◆\langle i,j \rangle◆RB◆\sigma_i\sigma_j - h\sum_i \sigma_i$$

Where $J > 0$ is the ferromagnetic coupling, $\langle i,j \rangle$ denotes nearest-neighbor pairs,
and $h$ is the external magnetic field.

**Partition function** (in 1D with periodic boundary conditions, $N$ spins):

$$Z = \sum_◆LB◆\{\sigma\}◆RB◆ \exp\!\left(\beta J \sum_i \sigma_i \sigma_◆LB◆i+1◆RB◆ + \beta h \sum_i \sigma_i\right)$$

This can be evaluated using the **transfer matrix** method. Define:

$$\mathbf◆LB◆T◆RB◆ = \begin◆LB◆pmatrix◆RB◆ e^◆LB◆\beta J + \beta h◆RB◆ & e^◆LB◆-\beta J◆RB◆ \\ e^◆LB◆-\beta J◆RB◆ & e^◆LB◆\beta J - \beta h◆RB◆ \end◆LB◆pmatrix◆RB◆$$

Then $Z = \text◆LB◆Tr(\mathbf◆LB◆T◆RB◆^N) = \lambda_+^N + \lambda_-^N$ where $\lambda_\pm$ are the
eigenvalues of $\mathbf◆LB◆T◆RB◆$.

In the thermodynamic limit ($N \to \infty$), $Z = \lambda_+^N$ where:

$$\lambda_+ = e^◆LB◆\beta J◆RB◆\cosh(\beta h) + \sqrt◆LB◆e^◆LB◆2\beta J◆RB◆\sinh^2(\beta h) + e^◆LB◆-2\beta J◆RB◆◆RB◆$$

**Key result:** The 1D Ising model has **no** phase transition at $T > 0$. The magnetization
$m = \langle\sigma\rangle \to 0$ as $h \to 0$ for all finite $T$.

### 12.2 Mean-Field Approximation

The mean-field (Weiss) approximation replaces each neighboring spin by its thermal average:

$$\sigma_i\sigma_j \approx \sigma_i\langle\sigma_j\rangle + \langle\sigma_i\rangle\sigma_j - \langle\sigma_i\rangle\langle\sigma_j\rangle$$

The effective Hamiltonian becomes:

$$\mathcal◆LB◆H◆RB◆_◆LB◆\text◆LB◆MF◆RB◆ = -\sum_i \left(zJm + h\right)\sigma_i + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆N zJ m^2$$

Where $z$ is the coordination number and $m = \langle\sigma\rangle$.

Each spin is independent, so:

$$m = \tanh\!\left[\beta(zJm + h)\right]$$

This is a **self-consistency equation** for $m$. For $h = 0$:

$$m = \tanh(\beta zJm)$$

Expanding for small $m$: $m \approx \beta zJ m - \frac◆LB◆1◆RB◆◆LB◆3◆RB◆(\beta zJ)^3 m^3$. Nonzero $m$ exists
when:

$$\beta zJ > 1 \implies T_c^◆LB◆\text◆LB◆MF◆RB◆ = \frac◆LB◆zJ◆RB◆◆LB◆k_B◆RB◆$$

### 12.3 Exact Solution: 2D Ising Model (Onsager, 1944)

Onsager's exact solution for the square lattice gives:

$$T_c = \frac◆LB◆2J◆RB◆◆LB◆k_B \ln(1 + \sqrt◆LB◆2◆RB◆)◆RB◆ \approx \frac◆LB◆2.269J◆RB◆◆LB◆k_B◆RB◆$$

The spontaneous magnetization below $T_c$:

$$m = \left[1 - \sinh^◆LB◆-4◆RB◆(2\beta_c J)\right]^◆LB◆1/8◆RB◆, \quad T < T_c$$

The specific heat diverges logarithmically at $T_c$:

$$C \sim -A\ln|T - T_c|$$

<details>
<summary>Worked Example 12.1: Mean-Field $T_c$ for Different Lattices</summary>

For $J = 1$ (in units of $k_B$):

| Lattice      | $z$ | $T_c^◆LB◆\text◆LB◆MF◆RB◆$ |
| ------------ | --- | ---------------- |
| Linear chain | 2   | 2                |
| Square       | 4   | 4                |
| Simple cubic | 6   | 6                |
| BCC          | 8   | 8                |
| FCC          | 12  | 12               |

Compare with the exact $T_c$: 1D has no transition, 2D square has
$T_c \approx 2.269$3D (numerical) $T_c \approx 4.51$. Mean-field overestimates $T_c$ in all cases,
with the error decreasing as $z$ (dimensionality) increases.

</details>

<details>
<summary>Worked Example 12.2: 1D Ising Free Energy</summary>

For the 1D Ising model with $h = 0$The transfer matrix eigenvalues are:

$$\lambda_\pm = e^◆LB◆\beta J◆RB◆ \pm e^◆LB◆-\beta J◆RB◆$$

The free energy per spin in the thermodynamic limit:

$$f = -k_B T \ln\lambda_+ = -k_B T \ln\!\left(2\cosh\frac◆LB◆J◆RB◆◆LB◆k_B T◆RB◆\right)$$

The internal energy per spin:

$$u = -\frac◆LB◆\partial \ln\lambda_+◆RB◆◆LB◆\partial \beta◆RB◆ = -J\tanh\frac◆LB◆J◆RB◆◆LB◆k_B T◆RB◆$$

The specific heat:

$$c = \frac◆LB◆\partial u◆RB◆◆LB◆\partial T◆RB◆ = \frac◆LB◆J^2◆RB◆◆LB◆k_B T^2◆RB◆\text◆LB◆sech^2\!\left(\frac◆LB◆J◆RB◆◆LB◆k_B T◆RB◆\right)$$

This is a smooth function with no singularity — confirming no phase transition in 1D.

</details>

## 13. Fluctuation-Dissipation Theorem

### 13.1 Linear Response Theory

The **fluctuation-dissipation theorem** (FDT) connects the response of a system to a small
perturbation with the spontaneous fluctuations of the system at equilibrium.

Consider a Hamiltonian $\mathcal◆LB◆H◆RB◆_0$ perturbed by a time-dependent field:

$$\mathcal◆LB◆H◆RB◆(t) = \mathcal◆LB◆H◆RB◆_0 - f(t)A$$

Where $A$ is an observable conjugate to the field $f(t)$. The change in $\langle A(t) \rangle$ to
first order in $f$ is:

$$\langle A(t) \rangle - \langle A \rangle_0 = \int_◆LB◆-\infty◆RB◆^◆LB◆t◆RB◆ \chi_◆LB◆AA◆RB◆(t - t')\, f(t')\, dt'$$

Where the **response function** is:

$$\chi_◆LB◆AA◆RB◆(t) = \frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\theta(t)\langle[A(t), A(0)]\rangle_0$$

### 13.2 Classical FDT

In the classical limit, the FDT takes a simpler form. The dynamic susceptibility
$\chi(\omega) = \chi'(\omega) + i\chi''(\omega)$ relates to the power spectrum $S(\omega)$ of
fluctuations:

$$S(\omega) = \frac◆LB◆2k_B T◆RB◆◆LB◆\omega◆RB◆\,\chi''(\omega)$$

For a harmonic oscillator with damping $\gamma$ and natural frequency $\omega_0$:

$$\chi''(\omega) = \frac◆LB◆\gamma\omega◆RB◆◆LB◆(\omega_0^2 - \omega^2)^2 + \gamma^2\omega^2◆RB◆$$

The fluctuation spectrum is Lorentzian, peaked at $\omega_0$.

### 13.3 Johnson--Nyquist Noise

The FDT predicts **thermal (Johnson--Nyquist) noise** in a resistor:

$$\langle V^2 \rangle = 4k_B T R \Delta f$$

Where $R$ is the resistance and $\Delta f$ is the bandwidth. This noise is fundamental — it arises
from thermal fluctuations of charge carriers and cannot be eliminated.

<details>
<summary>Worked Example 13.1: Johnson--Nyquist Noise Calculation</summary>

A $10$ k$\Omega$ resistor at room temperature ($T = 300$ K) measured with bandwidth $\Delta f = 1$
MHz:

$$\langle V^2 \rangle = 4 \times 1.38 \times 10^◆LB◆-23◆RB◆ \times 300 \times 10^4 \times 10^6$$

$$= 4 \times 1.38 \times 10^◆LB◆-23◆RB◆ \times 3 \times 10^◆LB◆12◆RB◆$$

$$= 1.66 \times 10^◆LB◆-10◆RB◆ \text◆LB◆ V^2$$

$$V_◆LB◆\text◆LB◆rms◆RB◆ = \sqrt◆LB◆1.66 \times 10^◆LB◆-10◆RB◆◆RB◆ \approx 1.29 \times 10^◆LB◆-5◆RB◆ \text◆LB◆ V = 12.9 \text◆LB◆  \mu\text◆LB◆V$$

This sets a fundamental limit on the sensitivity of electrical measurements.

</details>

<details>
<summary>Worked Example 13.2: Brownian Motion and Einstein Relation</summary>

The Einstein relation is a special case of the FDT for Brownian motion. The diffusion constant $D$
relates to the mobility $\mu$:

$$D = \mu k_B T$$

For a spherical particle of radius $r$ in a fluid with viscosity $\eta$:

$$\mu = \frac◆LB◆1◆RB◆◆LB◆6\pi\eta r◆RB◆ \quad \text◆LB◆(Stokes drag)$$

So $D = k_B T/(6\pi\eta r)$.

For a $1$ $\mu$M diameter sphere in water ($\eta = 10^◆LB◆-3◆RB◆$ Pa$\cdot$S) at $T = 300$ K:

$$D = \frac◆LB◆1.38 \times 10^◆LB◆-23◆RB◆ \times 300◆RB◆◆LB◆6\pi \times 10^◆LB◆-3◆RB◆ \times 0.5 \times 10^◆LB◆-6◆RB◆◆RB◆ = \frac◆LB◆4.14 \times 10^◆LB◆-21◆RB◆◆RB◆◆LB◆9.42 \times 10^◆LB◆-9◆RB◆◆RB◆ \approx 4.39 \times 10^◆LB◆-13◆RB◆ \text◆LB◆ m^2/\text◆LB◆s$$

The mean squared displacement in time $t$ is $\langle x^2 \rangle = 2Dt$. In 1 second:
$\sqrt◆LB◆\langle x^2 \rangle◆RB◆ \approx 0.94$ $\mu$M.

</details>

## 14. Microcanonical Ensemble

The **microcanonical ensemble** describes an isolated system with fixed total energy $E$Particle
number $N$And volume $V$.

### 14.1 Density of States

The number of microstates with energy between $E$ and $E + \delta E$ is:

$$\Omega(E, V, N) = \int_◆LB◆E < \mathcal◆LB◆H◆RB◆ < E + \delta E◆RB◆ \frac◆LB◆d^◆LB◆3N◆RB◆q\, d^◆LB◆3N◆RB◆p◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆$$

The **entropy** (Boltzmann entropy):

$$S(E, V, N) = k_B \ln \Omega(E, V, N)$$

The **temperature** is defined via:

$$\frac◆LB◆1◆RB◆◆LB◆T◆RB◆ = \frac◆LB◆\partial S◆RB◆◆LB◆\partial E◆RB◆$$

### 14.2 The Ideal Gas in the Microcanonical Ensemble

For $N$ non-interacting particles in volume $V$ with total energy $E$:

$$\Omega = \frac◆LB◆V^N◆RB◆◆LB◆N!◆RB◆\frac◆LB◆(2\pi m E)^◆LB◆3N/2◆RB◆◆RB◆◆LB◆E\, \Gamma(3N/2)\, h^◆LB◆3N◆RB◆◆RB◆ \cdot \frac◆LB◆\delta E◆RB◆◆LB◆E◆RB◆$$

Using Stirling's approximation and the large-argument expansion of the Gamma function:

$$S = Nk_B\left[\ln\!\left(\frac◆LB◆V◆RB◆◆LB◆N◆RB◆\right) + \frac◆LB◆3◆RB◆◆LB◆2◆RB◆\ln\!\left(\frac◆LB◆4\pi m E◆RB◆◆LB◆3Nh^2◆RB◆\right) + \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right]$$

This is the **Sackur--Tetrode equation**, identical to the canonical ensemble result (as expected by
ensemble equivalence).

From $1/T = \partial S/\partial E$:

$$E = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B T$$

Reproducing the equipartition theorem.

### 14.3 Classical Virial Theorem

For a system with Hamiltonian
$\mathcal◆LB◆H◆RB◆ = \sum_i p_i^2/(2m_i) + U(\mathbf◆LB◆r◆RB◆_1, \ldots, \mathbf◆LB◆r◆RB◆_N)$:

$$\left\langle \sum_i \mathbf◆LB◆p◆RB◆_i \cdot \frac◆LB◆\partial \mathcal◆LB◆H◆RB◆◆RB◆◆LB◆\partial \mathbf◆LB◆p◆RB◆_i◆RB◆ \right\rangle = 3Nk_B T$$

$$\left\langle \sum_i \mathbf◆LB◆r◆RB◆_i \cdot \frac◆LB◆\partial \mathcal◆LB◆H◆RB◆◆RB◆◆LB◆\partial \mathbf◆LB◆r◆RB◆_i◆RB◆ \right\rangle = -3Nk_B T$$

For a power-law potential $U \propto r^n$This gives:

$$\langle K \rangle = \frac◆LB◆n◆RB◆◆LB◆2◆RB◆\langle U \rangle$$

(For the harmonic oscillator, $n = 2$: $\langle K \rangle = \langle U \rangle$.)

<details>
<summary>Worked Example 14.1: Density of States for $N$ Harmonic Oscillators</summary>

For $N$ independent harmonic oscillators with frequency $\omega$Total energy $E$:

$$\Omega(E) = \frac◆LB◆E^◆LB◆N-1◆RB◆◆RB◆◆LB◆(N-1)!\,(\hbar\omega)^N◆RB◆$$

Proof: The number of ways to distribute $E/(\hbar\omega)$ energy quanta among $N$ oscillators is the
stars-and-bars problem:

$$\Omega = \binom◆LB◆n + N - 1◆RB◆◆LB◆N - 1◆RB◆ = \frac◆LB◆(n+N-1)!◆RB◆◆LB◆n!(N-1)!◆RB◆$$

Where $n = E/(\hbar\omega)$. For large $n$ using Stirling's approximation:

$$S = k_B\left[(n+N)\ln(n+N) - n\ln n - N\ln N\right]$$

$$\frac◆LB◆1◆RB◆◆LB◆T◆RB◆ = \frac◆LB◆\partial S◆RB◆◆LB◆\partial E◆RB◆ = \frac◆LB◆k_B◆RB◆◆LB◆\hbar\omega◆RB◆\left[\ln(n+N) - \ln n\right] = \frac◆LB◆k_B◆RB◆◆LB◆\hbar\omega◆RB◆\ln\!\left(1 + \frac◆LB◆N◆RB◆◆LB◆n◆RB◆\right)$$

At high $T$ ($n \gg N$): $E \approx Nk_B T$ (equipartition, each oscillator has energy $k_B T$).

</details>

## 15. Quantum Statistics in Detail

### 15.1 Fermi--Dirac and Bose--Einstein Distributions

For non-interacting quantum particles:

$$\langle n_i \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\epsilon_i - \mu)◆RB◆ \pm 1◆RB◆$$

Where $+$ is for fermions (Fermi--Dirac) and $-$ for bosons (Bose--Einstein).

**Fermions** (half-integer spin): Pauli exclusion limits $\langle n_i \rangle \leq 1$.

**Bosons** (integer spin): No restriction on occupation number; $\langle n_i \rangle$ can diverge
when $\epsilon_i = \mu$.

### 15.2 The Fermi Gas

For a 3D gas of $N$ non-interacting fermions in volume $V$:

$$N = \sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\hbar^2 k^2/2m - \mu)◆RB◆ + 1◆RB◆ \xrightarrow◆LB◆\text◆LB◆continuum◆RB◆ \frac◆LB◆V◆RB◆◆LB◆(2\pi)^3◆RB◆\int d^3k\, f(\epsilon_k)$$

The **Fermi energy** at $T = 0$:

$$\epsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆(3\pi^2 n)^◆LB◆2/3◆RB◆$$

Where $n = N/V$ is the number density. The **Fermi temperature** is $T_F = \epsilon_F/k_B$.

At low temperature ($T \ll T_F$), the Sommerfeld expansion gives:

$$E = \frac◆LB◆3◆RB◆◆LB◆5◆RB◆N\epsilon_F\left[1 + \frac◆LB◆5\pi^2◆RB◆◆LB◆12◆RB◆\left(\frac◆LB◆T◆RB◆◆LB◆T_F◆RB◆\right)^2 + \cdots\right]$$

$$C_V = Nk_B\frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆T◆RB◆◆LB◆T_F◆RB◆ + \cdots$$

The linear specific heat is a hallmark of degenerate Fermi systems.

### 15.3 The Bose Gas and Bose--Einstein Condensation

For bosons, the chemical potential must satisfy $\mu \leq \epsilon_0$ (ground state energy). When
$\mu \to \epsilon_0$A macroscopic fraction of particles condenses into the ground state.

The **critical temperature** for BEC in 3D:

$$T_c = \frac◆LB◆2\pi\hbar^2◆RB◆◆LB◆mk_B◆RB◆\left(\frac◆LB◆n◆RB◆◆LB◆\zeta(3/2)◆RB◆\right)^◆LB◆2/3◆RB◆$$

Where $\zeta(3/2) \approx 2.612$.

Below $T_c$The condensate fraction is:

$$\frac◆LB◆N_0◆RB◆◆LB◆N◆RB◆ = 1 - \left(\frac◆LB◆T◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆3/2◆RB◆$$

<details>
<summary>Worked Example 15.1: Fermi Energy of Copper</summary>

Copper has one conduction electron per atom, atomic mass $63.5$ g/mol, density $8.96$ g/cm$^3$.

$$n = \frac◆LB◆8.96 \times 10^3 \text◆LB◆ kg/m^3◆RB◆◆LB◆63.5 \times 10^◆LB◆-3◆RB◆ \text◆LB◆ kg/mol◆RB◆ \times N_A = 1.41 \times 10^◆LB◆29◆RB◆ \text◆LB◆ m^◆LB◆-3◆RB◆ \times 6.022 \times 10^◆LB◆23◆RB◆ = 8.49 \times 10^◆LB◆28◆RB◆ \text◆LB◆ m^◆LB◆-3◆RB◆$$

$$\epsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆(3\pi^2 \times 8.49 \times 10^◆LB◆28◆RB◆)^◆LB◆2/3◆RB◆$$

$$= \frac◆LB◆(1.055 \times 10^◆LB◆-34◆RB◆)^2◆RB◆◆LB◆2 \times 9.109 \times 10^◆LB◆-31◆RB◆◆RB◆ \times (2.52 \times 10^◆LB◆30◆RB◆)^◆LB◆2/3◆RB◆$$

$$= \frac◆LB◆1.113 \times 10^◆LB◆-68◆RB◆◆RB◆◆LB◆1.822 \times 10^◆LB◆-30◆RB◆◆RB◆ \times 1.846 \times 10^◆LB◆20◆RB◆$$

$$= 6.11 \times 10^◆LB◆-39◆RB◆ \times 1.846 \times 10^◆LB◆20◆RB◆ = 1.13 \times 10^◆LB◆-18◆RB◆ \text◆LB◆ J$$

$$T_F = \frac◆LB◆1.13 \times 10^◆LB◆-18◆RB◆◆RB◆◆LB◆1.38 \times 10^◆LB◆-23◆RB◆◆RB◆ \approx 81\,900 \text◆LB◆ K$$

This is enormously higher than room temperature, confirming that conduction electrons in metals form
a highly degenerate Fermi gas.

</details>

<details>
<summary>Worked Example 15.2: BEC in a Trap</summary>

For $N = 10^6$ rubidium-87 atoms in a harmonic trap with frequency $\bar◆LB◆\omega◆RB◆/(2\pi) = 100$ Hz:

In a harmonic trap, the density of states is
$g(\epsilon) = \epsilon^2/(2\hbar^3\bar◆LB◆\omega◆RB◆^3)$Giving:

$$T_c = \frac◆LB◆\hbar\bar◆LB◆\omega◆RB◆◆RB◆◆LB◆k_B◆RB◆\left(\frac◆LB◆6N◆RB◆◆LB◆\pi^2\zeta(3)◆RB◆\right)^◆LB◆1/3◆RB◆$$

$$= \frac◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 2\pi \times 100◆RB◆◆LB◆1.38 \times 10^◆LB◆-23◆RB◆◆RB◆\left(\frac◆LB◆6 \times 10^6◆RB◆◆LB◆\pi^2 \times 1.202◆RB◆\right)^◆LB◆1/3◆RB◆$$

$$= \frac◆LB◆6.63 \times 10^◆LB◆-32◆RB◆◆RB◆◆LB◆1.38 \times 10^◆LB◆-23◆RB◆◆RB◆ \times (5.07 \times 10^5)^◆LB◆1/3◆RB◆$$

$$= 4.81 \times 10^◆LB◆-9◆RB◆ \times 79.7 \approx 383 \text◆LB◆ nK$$

This is consistent with the 1995 Cornell--Wieman BEC experiment.

</details>

## 16. The Debye Model of Solids

### 16.1 From Einstein to Debye

The **Einstein model** treats all atoms as independent quantum oscillators with the same frequency
$\omega_E$:

$$C_V = 3Nk_B\left(\frac◆LB◆\theta_E◆RB◆◆LB◆T◆RB◆\right)^2 \frac◆LB◆e^◆LB◆\theta_E/T◆RB◆◆RB◆◆LB◆(e^◆LB◆\theta_E/T◆RB◆ - 1)^2◆RB◆$$

Where $\theta_E = \hbar\omega_E/k_B$. This correctly predicts $C_V \to 0$ as $T \to 0$But gives
$C_V \propto e^◆LB◆-\theta_E/T◆RB◆$ at low $T$Whereas experiments show $C_V \propto T^3$.

The **Debye model** treats the lattice vibrations as a continuum of phonon modes with a cutoff
frequency $\omega_D$:

$$g(\omega) = \frac◆LB◆3V\omega^2◆RB◆◆LB◆2\pi^2 v_s^3◆RB◆ \quad \text◆LB◆for  0 \leq \omega \leq \omega_D$$

Where $v_s$ is the average sound speed. The cutoff is determined by the total number of modes:

$$\int_0^◆LB◆\omega_D◆RB◆ g(\omega)\,d\omega = 3N \implies \omega_D = v_s(6\pi^2 N/V)^◆LB◆1/3◆RB◆$$

### 16.2 Debye Specific Heat

The internal energy:

$$E = \int_0^◆LB◆\omega_D◆RB◆ \frac◆LB◆\hbar\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆\, g(\omega)\, d\omega = \frac◆LB◆3V\hbar◆RB◆◆LB◆2\pi^2 v_s^3◆RB◆\int_0^◆LB◆\omega_D◆RB◆ \frac◆LB◆\omega^3◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆\, d\omega$$

With $x = \hbar\omega/k_BT$ and $\theta_D = \hbar\omega_D/k_B$ (Debye temperature):

$$E = 9Nk_BT\left(\frac◆LB◆T◆RB◆◆LB◆\theta_D◆RB◆\right)^3 \int_0^◆LB◆\theta_D/T◆RB◆ \frac◆LB◆x^3◆RB◆◆LB◆e^x - 1◆RB◆\, dx$$

The specific heat:

$$C_V = 9Nk_B\left(\frac◆LB◆T◆RB◆◆LB◆\theta_D◆RB◆\right)^3 \int_0^◆LB◆\theta_D/T◆RB◆ \frac◆LB◆x^4 e^x◆RB◆◆LB◆(e^x - 1)^2◆RB◆\, dx$$

**Low-temperature limit** ($T \ll \theta_D$):

$$C_V = \frac◆LB◆12\pi^4◆RB◆◆LB◆5◆RB◆Nk_B\left(\frac◆LB◆T◆RB◆◆LB◆\theta_D◆RB◆\right)^3 \propto T^3$$

**High-temperature limit** ($T \gg \theta_D$): $C_V \to 3Nk_B$ (Dulong--Petit).

<details>
<summary>Worked Example 16.1: Debye Temperature of Aluminum</summary>

Aluminum has $M = 27$ g/mol, $\rho = 2.70$ g/cm$^3$$v_s \approx 6420$ m/s.

$$n = \frac◆LB◆\rho N_A◆RB◆◆LB◆M◆RB◆ = \frac◆LB◆2.70 \times 10^3 \times 6.022 \times 10^◆LB◆23◆RB◆◆RB◆◆LB◆27 \times 10^◆LB◆-3◆RB◆◆RB◆ = 6.02 \times 10^◆LB◆28◆RB◆ \text◆LB◆ m^◆LB◆-3◆RB◆$$

$$\omega_D = v_s(6\pi^2 n)^◆LB◆1/3◆RB◆ = 6420 \times (6\pi^2 \times 6.02 \times 10^◆LB◆28◆RB◆)^◆LB◆1/3◆RB◆$$

$$= 6420 \times (3.56 \times 10^◆LB◆30◆RB◆)^◆LB◆1/3◆RB◆ = 6420 \times 1.526 \times 10^◆LB◆10◆RB◆ = 9.80 \times 10^◆LB◆13◆RB◆ \text◆LB◆ rad/s$$

$$\theta_D = \frac◆LB◆\hbar\omega_D◆RB◆◆LB◆k_B◆RB◆ = \frac◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 9.80 \times 10^◆LB◆13◆RB◆◆RB◆◆LB◆1.38 \times 10^◆LB◆-23◆RB◆◆RB◆ \approx 748 \text◆LB◆ K$$

The experimental value is $\theta_D \approx 428$ K. The discrepancy arises from the oversimplified
single sound-speed approximation.

</details>

## 17. Thermodynamic Response Functions

### 17.1 General Relations

Response functions measure how thermodynamic quantities change with state variables. The most
important are:

- Heat capacity: $C_X = T(\partial S/\partial T)_X$
- Compressibility: $\kappa_T = -\frac◆LB◆1◆RB◆◆LB◆V◆RB◆(\partial V/\partial P)_T$
- Thermal expansion: $\alpha = \frac◆LB◆1◆RB◆◆LB◆V◆RB◆(\partial V/\partial T)_P$

These satisfy the identity:

$$C_P - C_V = TV\frac◆LB◆\alpha^2◆RB◆◆LB◆\kappa_T◆RB◆$$

For an ideal gas ($\alpha = 1/T$$\kappa_T = 1/P$):

$$C_P - C_V = TV \cdot \frac◆LB◆1◆RB◆◆LB◆T^2◆RB◆ \cdot P = Nk_B$$

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

$$\frac◆LB◆\partial(x, y)◆RB◆◆LB◆\partial(u, v)◆RB◆ = \begin◆LB◆vmatrix◆RB◆ (\partial x/\partial u)_v & (\partial x/\partial v)_u \\ (\partial y/\partial u)_v & (\partial y/\partial v)_u \end◆LB◆vmatrix◆RB◆$$

Properties:

- $(\partial x/\partial y)_z = \frac◆LB◆\partial(x,z)◆RB◆◆LB◆\partial(y,z)◆RB◆$
- Chain rule:
  $\frac◆LB◆\partial(x,y)◆RB◆◆LB◆\partial(u,v)◆RB◆ = \frac◆LB◆\partial(x,y)◆RB◆◆LB◆\partial(w,z)◆RB◆\cdot\frac◆LB◆\partial(w,z)◆RB◆◆LB◆\partial(u,v)◆RB◆$
- Triple product:
  $(\partial x/\partial y)_z (\partial y/\partial z)_x (\partial z/\partial x)_y = -1$

<details>
<summary>Worked Example 17.1: $C_P/C_V$ Ratio from Thermodynamic Derivatives</summary>

Starting from $C_P - C_V = TV\alpha^2/\kappa_T$:

$$\frac◆LB◆C_P◆RB◆◆LB◆C_V◆RB◆ = 1 + \frac◆LB◆TV\alpha^2◆RB◆◆LB◆\kappa_T C_V◆RB◆$$

For an ideal monatomic gas ($C_V = 3Nk_B/2$):

$$\frac◆LB◆C_P◆RB◆◆LB◆C_V◆RB◆ = 1 + \frac◆LB◆Nk_B◆RB◆◆LB◆3Nk_B/2◆RB◆ = 1 + \frac◆LB◆2◆RB◆◆LB◆3◆RB◆ = \frac◆LB◆5◆RB◆◆LB◆3◆RB◆$$

For a diatomic gas at room temperature ($C_V = 5Nk_B/2$):

$$\frac◆LB◆C_P◆RB◆◆LB◆C_V◆RB◆ = 1 + \frac◆LB◆Nk_B◆RB◆◆LB◆5Nk_B/2◆RB◆ = 1 + \frac◆LB◆2◆RB◆◆LB◆5◆RB◆ = \frac◆LB◆7◆RB◆◆LB◆5◆RB◆ = 1.4$$

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
   $n_c = \zeta(3/2)(mk_BT/2\pi\hbar^2)^◆LB◆3/2◆RB◆$. This is extremely low ($\sim 10^◆LB◆14◆RB◆$ cm$^◆LB◆-3◆RB◆$ at 1
   $\mu$K for Rb), but BEC in real experiments requires much lower temperatures because of the need
   to reach quantum degeneracy in a finite trap.

4. **Mean-field overestimates $T_c$**: The mean-field approximation $T_c^◆LB◆\text◆LB◆MF◆RB◆ = zJ/k_B$
   systematically overestimates the true critical temperature because it neglects fluctuations. The
   error is largest in low dimensions (where fluctuations are strongest) and vanishes above the
   upper critical dimension ($d = 4$ for short-range Ising).

5. **Classical vs. Quantum .../4-statistics-and-probability/2_statistics**: At temperatures much
   higher than the degeneracy temperature $T_F$ (fermions) or $T_c$ (bosons), both Fermi--Dirac and
   Bose--Einstein distributions reduce to the Maxwell--Boltzmann distribution. The quantum
   corrections are of order $n\lambda_◆LB◆\text◆LB◆dB◆RB◆^3$ where $\lambda_◆LB◆\text◆LB◆dB◆RB◆ = h/\sqrt◆LB◆2\pi mk_BT◆RB◆$
   is the thermal de Broglie wavelength.

## Problems

<details>
<summary>Problem 1: Entropy of Mixing</summary>

Consider two ideal gases A and B, initially separated by a partition in a container of volume $V$.
Gas A has $N_A$ particles in volume $V_A$; gas B has $N_B$ particles in volume $V_B$With
$V_A + V_B = V$. The partition is removed and the gases mix isothermally at temperature $T$.

(a) Show that the entropy of mixing is:

$$\Delta S_◆LB◆\text◆LB◆mix◆RB◆ = -Nk_B\left[x\ln x + (1-x)\ln(1-x)\right] - Nk_B\left[y\ln y + (1-y)\ln(1-y)\right]$$

Where $x = N_A/N$$y = V_A/V$.

(b) Evaluate $\Delta S_◆LB◆\text◆LB◆mix◆RB◆$ for $N_A = N_B = N_0$$V_A = V_B = V/2$ and show
$\Delta S_◆LB◆\text◆LB◆mix◆RB◆ = 2N_0k_B\ln 2$.

(c) **Gibbs paradox**: If gases A and B are identical, the actual entropy change is zero. Explain
how the factor of $1/N!$ in the partition function resolves this paradox.

**Solution:**

(a) For ideal gas A initially in $V_A$ and finally in $V$:

$$\Delta S_A = N_Ak_B\ln\frac◆LB◆V◆RB◆◆LB◆V_A◆RB◆ = N_Ak_B\ln\frac◆LB◆1◆RB◆◆LB◆y◆RB◆ = -Nk_B x\ln y$$

Similarly $\Delta S_B = -Nk_B(1-x)\ln(1-y)$. The total:

$$\Delta S = -Nk_B[x\ln y + (1-x)\ln(1-y)]$$

Note: The more general form includes contributions from the number of particles.

(b) With $x = 1/2$$y = 1/2$:

$$\Delta S = -2N_0k_B\left(\frac◆LB◆1◆RB◆◆LB◆2◆RB◆\ln\frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right) = -2N_0k_B\left(-\frac◆LB◆1◆RB◆◆LB◆2◆RB◆\ln 2\right) = 2N_0k_B\ln 2$$

(c) The Sackur--Tetrode equation includes $-Nk_B\ln N + Nk_B = -k_B\ln N!$Which accounts for the
indistinguishability of particles. For identical gases, the "before" and "after" states are the same
(same $N$$V$$E$), so $\Delta S = 0$. Without the $1/N!$ factor, we would get the same non-zero
result for mixing identical gases — Gibbs' paradox.

</details>

<details>
<summary>Problem 2: Ising Model Phase Diagram</summary>

Consider the mean-field Ising model on a square lattice ($z = 4$).

(a) Find the magnetization $m$ as a function of reduced temperature $t = T/T_c^◆LB◆\text◆LB◆MF◆RB◆$ in zero
field.

(b) Find the susceptibility $\chi$ on both sides of $T_c$.

(c) Calculate the specific heat jump at $T_c$.

**Solution:**

(a) The self-consistency equation is $m = \tanh(4\beta Jm) = \tanh(m/t)$ since
$T_c^◆LB◆\text◆LB◆MF◆RB◆ = 4J/k_B$.

For $t < 1$: $m$ satisfies $m = \tanh(m/t)$. For small $m/t$:

$$m \approx \frac◆LB◆m◆RB◆◆LB◆t◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\left(\frac◆LB◆m◆RB◆◆LB◆t◆RB◆\right)^3 \implies m = \sqrt◆LB◆3(1-t)◆RB◆\, t \approx \sqrt◆LB◆3◆RB◆\,(1-t)^◆LB◆1/2◆RB◆ \text◆LB◆ near  T_c$$

(b) From the Landau analysis: $\chi \propto |T - T_c|^◆LB◆-1◆RB◆$I.e., $\gamma = 1$.

Explicitly: $\chi^◆LB◆-1◆RB◆ = k_B T(1 - t^◆LB◆-1◆RB◆\text◆LB◆sech^2(m/t))$. Near $T_c$: $\chi \sim 1/(T - T_c)$.

(c) The specific heat jump is:

$$\Delta C = \frac◆LB◆3Nk_B◆RB◆◆LB◆2◆RB◆ = 1.5\, Nk_B$$

(derived from the mean-field free energy $f = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆k_BT_c m^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆k_BT_c m^4$ near
$T_c$.)

</details>

<details>
<summary>Problem 3: Photon Gas and Blackbody Radiation</summary>

Photons are massless bosons with zero chemical potential ($\mu = 0$).

(a) Show that the Planck distribution for the photon number in mode $\omega$ is
$\langle n_\omega \rangle = 1/(e^◆LB◆\beta\hbar\omega◆RB◆ - 1)$.

(b) Derive the Stefan--Boltzmann law for the total energy density: $u = aT^4$ where
$a = \pi^2k_B^4/(15\hbar^3 c^3)$.

(c) The cosmic microwave background has $T = 2.725$ K. Calculate the photon energy density and
number density.

**Solution:**

(a) For bosons with $\mu = 0$: $\langle n \rangle = 1/(e^◆LB◆\beta\epsilon◆RB◆ - 1)$. With
$\epsilon = \hbar\omega$: $\langle n_\omega \rangle = 1/(e^◆LB◆\beta\hbar\omega◆RB◆ - 1)$.

(b) Density of photon states in 3D: $g(\omega) = V\omega^2/(\pi^2 c^3)$ (2 polarizations).

$$u = \frac◆LB◆1◆RB◆◆LB◆V◆RB◆\int_0^\infty \hbar\omega\,\langle n_\omega \rangle\, g(\omega)\, d\omega = \frac◆LB◆\hbar◆RB◆◆LB◆\pi^2 c^3◆RB◆\int_0^\infty \frac◆LB◆\omega^3◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆\, d\omega$$

With $x = \beta\hbar\omega$:

$$u = \frac◆LB◆(k_BT)^4◆RB◆◆LB◆\pi^2\hbar^3 c^3◆RB◆\int_0^\infty \frac◆LB◆x^3◆RB◆◆LB◆e^x - 1◆RB◆\, dx = \frac◆LB◆(k_BT)^4◆RB◆◆LB◆\pi^2\hbar^3 c^3◆RB◆\cdot\frac◆LB◆\pi^4◆RB◆◆LB◆15◆RB◆ = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆15\hbar^3 c^3◆RB◆\, T^4$$

(c) $u = aT^4$ with $a = 7.566 \times 10^◆LB◆-16◆RB◆$ J$\cdot$m$^◆LB◆-3◆RB◆$$\cdot$K$^◆LB◆-4◆RB◆$:

$$u = 7.566 \times 10^◆LB◆-16◆RB◆ \times (2.725)^4 = 7.566 \times 10^◆LB◆-16◆RB◆ \times 55.15 = 4.17 \times 10^◆LB◆-14◆RB◆ \text◆LB◆ J/m^3$$

Number density:

$$n_\gamma = \frac◆LB◆2\zeta(3)◆RB◆◆LB◆\pi^2◆RB◆\left(\frac◆LB◆k_BT◆RB◆◆LB◆\hbar c◆RB◆\right)^3 = \frac◆LB◆2 \times 1.202◆RB◆◆LB◆\pi^2◆RB◆\left(\frac◆LB◆1.38 \times 10^◆LB◆-23◆RB◆ \times 2.725◆RB◆◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 3 \times 10^8◆RB◆\right)^3$$

$$= 0.244 \times (1.193 \times 10^3)^3 \approx 0.244 \times 1.698 \times 10^9 \approx 4.14 \times 10^8 \text◆LB◆ m^◆LB◆-3◆RB◆$$

</details>

<details>
<summary>Problem 4: Chemical Equilibrium</summary>

For the dissociation reaction $\text◆LB◆H_2 \rightleftharpoons 2\text◆LB◆H$The equilibrium constant is:

$$K(T) = \frac◆LB◆n_H^2◆RB◆◆LB◆n_◆LB◆H_2◆RB◆◆RB◆ = \left(\frac◆LB◆m_H k_B T◆RB◆◆LB◆2\pi\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆\frac◆LB◆(j_H + 1)^2◆RB◆◆LB◆2j_◆LB◆H_2◆RB◆ + 1◆RB◆\frac◆LB◆1◆RB◆◆LB◆Z_◆LB◆\text◆LB◆rot◆RB◆Z_◆LB◆\text◆LB◆vib◆RB◆◆RB◆e^◆LB◆-D/(k_BT)◆RB◆$$

Where $D = 4.52$ eV is the dissociation energy, $j_H = 1/2$$j_◆LB◆H_2◆RB◆ = 1$.

(a) At $T = 3000$ K, estimate the fraction of hydrogen that is dissociated.

(b) How does the degree of dissociation change with temperature and pressure?

**Solution:**

(a) At $T = 3000$ K, $k_BT = 0.259$ eV, so $D/(k_BT) = 17.5$Giving
$e^◆LB◆-17.5◆RB◆ \approx 2.5 \times 10^◆LB◆-8◆RB◆$.

The translational factor:
$(m_H k_B T / 2\pi\hbar^2)^◆LB◆3/2◆RB◆ \approx (2.5 \times 10^◆LB◆30◆RB◆)^◆LB◆3/2◆RB◆ \times (3000)^◆LB◆3/2◆RB◆ \approx 10^◆LB◆35◆RB◆$
m$^◆LB◆-3◆RB◆$.

With rotational and vibrational partition functions at this temperature, $K \sim 10^◆LB◆27◆RB◆$ m$^◆LB◆-3◆RB◆$
(very rough estimate).

For a gas at $P = 1$ atm, $n_◆LB◆\text◆LB◆total◆RB◆ = P/(k_BT) \approx 2.4 \times 10^◆LB◆25◆RB◆$ m$^◆LB◆-3◆RB◆$. Setting
$n_◆LB◆H_2◆RB◆ \approx n_◆LB◆\text◆LB◆total◆RB◆/2$:

$$n_H = \sqrt◆LB◆K \cdot n_◆LB◆H_2◆RB◆◆RB◆ \sim \sqrt◆LB◆10^◆LB◆27◆RB◆ \times 10^◆LB◆25◆RB◆◆RB◆ \sim 10^◆LB◆26◆RB◆$$

This suggests nearly complete dissociation at 3000 K and 1 atm (consistent with the known behavior
of hydrogen at these temperatures).

(b) Increasing temperature exponentially increases dissociation (via $e^◆LB◆-D/(k_BT)◆RB◆$). Increasing
pressure (at fixed $T$) _decreases_ dissociation because the reaction produces 2 moles from 1 mole
($\Delta n > 0$), so Le Chatelier's principle shifts equilibrium toward H$_2$.

</details>

<details>
<summary>Problem 5: Grand Canonical Ensemble</summary>

Consider a system in the grand canonical ensemble with chemical potential $\mu$Temperature $T$And
volume $V$.

(a) Derive the relation between the average particle number fluctuations and the isothermal
compressibility:

$$\frac◆LB◆\langle N^2 \rangle - \langle N \rangle^2◆RB◆◆LB◆\langle N \rangle◆RB◆ = n k_B T \kappa_T$$

Where $n = N/V$.

(b) Evaluate this for an ideal gas and show $\langle(\Delta N)^2\rangle = \langle N \rangle$.

(c) For a Fermi gas at $T = 0$Show $\langle(\Delta N)^2\rangle = 0$ and explain physically.

**Solution:**

(a) In the grand canonical ensemble:

$$\langle N \rangle = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \mathcal◆LB◆Z◆RB◆◆RB◆◆LB◆\partial \mu◆RB◆$$

$$\langle(\Delta N)^2\rangle = \langle N^2 \rangle - \langle N \rangle^2 = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \langle N \rangle◆RB◆◆LB◆\partial \mu◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial◆RB◆◆LB◆\partial\mu◆RB◆\left(\frac◆LB◆PV◆RB◆◆LB◆k_BT◆RB◆\right) = V\frac◆LB◆\partial P◆RB◆◆LB◆\partial \mu◆RB◆$$

Using $d\mu = -s\,dT + v\,dP$ at constant $T$: $(\partial\mu/\partial P)_T = v = 1/n$.

$$\langle(\Delta N)^2\rangle = \frac◆LB◆V◆RB◆◆LB◆(\partial\mu/\partial P)_T◆RB◆ = nV = \langle N \rangle \cdot nk_B T \kappa_T$$

Wait, more carefully:

$$\langle(\Delta N)^2\rangle = k_BT \frac◆LB◆\partial \langle N \rangle◆RB◆◆LB◆\partial \mu◆RB◆ = k_BT V \frac◆LB◆\partial n◆RB◆◆LB◆\partial \mu◆RB◆ = k_BT V \frac◆LB◆\partial n◆RB◆◆LB◆\partial P◆RB◆\frac◆LB◆\partial P◆RB◆◆LB◆\partial \mu◆RB◆$$

Since $(\partial P/\partial \mu)_T = n$ (from $dG = -SdT + VdP + \mu dN$Or $P = nk_BT$ for ideal
gas):

$$\frac◆LB◆\langle(\Delta N)^2\rangle◆RB◆◆LB◆\langle N \rangle◆RB◆ = k_BT \frac◆LB◆\partial n◆RB◆◆LB◆\partial P◆RB◆ = nk_B T\kappa_T$$

Where $\kappa_T = -\frac◆LB◆1◆RB◆◆LB◆V◆RB◆(\partial V/\partial P)_T = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆(\partial n/\partial P)_T$.

(b) For ideal gas: $\kappa_T = 1/P = 1/(nk_BT)$So:

$$\frac◆LB◆\langle(\Delta N)^2\rangle◆RB◆◆LB◆\langle N \rangle◆RB◆ = nk_BT \cdot \frac◆LB◆1◆RB◆◆LB◆nk_BT◆RB◆ = 1 \implies \langle(\Delta N)^2\rangle = \langle N \rangle$$

This is the standard Poisson .../4-statistics-and-probability/2_statistics result for
non-interacting particles.

(c) At $T = 0$The Fermi gas is in its ground state with exactly $N$ particles filling all states up
to $\epsilon_F$. There are no particle number fluctuations: $\langle(\Delta N)^2\rangle = 0$.
Physically, this is because adding or removing a particle costs a finite energy $\epsilon_F$So the
chemical potential is infinitely sharp.

</details>

## 18. Quantum Statistical Mechanics: Advanced Topics

### 18.1 Density Matrix and Ensemble Averages

The **density matrix** (or density operator) provides the most general description of a quantum
system, encompassing both pure and mixed states:

$$\hat◆LB◆\rho◆RB◆ = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|$$

Where $p_i$ is the probability of being in state $|\psi_i\rangle$.

**Properties:**

- $\text◆LB◆Tr(\hat◆LB◆\rho◆RB◆) = 1$ (normalisation)
- $\hat◆LB◆\rho◆RB◆^\dagger = \hat◆LB◆\rho◆RB◆$ (hermiticity)
- $\hat◆LB◆\rho◆RB◆^2 = \hat◆LB◆\rho◆RB◆$ if and only if the state is pure
- $\text◆LB◆Tr(\hat◆LB◆\rho◆RB◆^2) \leq 1$ with equality for pure states

**Ensemble averages:** $\langle \hat◆LB◆A◆RB◆ \rangle = \text◆LB◆Tr(\hat◆LB◆\rho◆RB◆\hat◆LB◆A◆RB◆)$.

**Canonical ensemble:** $\hat◆LB◆\rho◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\exp(-\beta\hat◆LB◆H◆RB◆)$ where
$Z = \text◆LB◆Tr[\exp(-\beta\hat◆LB◆H◆RB◆)]$.

**Von Neumann entropy:** $S = -k_B\text◆LB◆Tr(\hat◆LB◆\rho◆RB◆\ln\hat◆LB◆\rho◆RB◆)$.

For a pure state: $S = 0$. For a thermal state: $S > 0$ (maximum for the maximally mixed state).

### 18.2 Quantum Ideal Gases: General Treatment

For a system of non-interacting quantum particles, the grand canonical partition function is:

$$\ln\mathcal◆LB◆Z◆RB◆ = \pm\sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆\ln(1 \mp e^◆LB◆-\beta(\epsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ - \mu)◆RB◆)$$

Where $+$ is for fermions and $-$ for bosons.

The thermodynamic quantities follow from:

$$N = \sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆\frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\epsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ - \mu)◆RB◆ \pm 1◆RB◆, \quad E = \sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆\frac◆LB◆\epsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆◆RB◆◆LB◆e^◆LB◆\beta(\epsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ - \mu)◆RB◆ \pm 1◆RB◆$$

$$\Omega = -PV = \mp k_BT\sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆\ln(1 \mp e^◆LB◆-\beta(\epsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ - \mu)◆RB◆)$$

In the continuum limit:

$$\Omega = \mp k_BT\int_0^\infty g(\epsilon)\ln(1 \mp e^◆LB◆-\beta(\epsilon - \mu)◆RB◆)\,d\epsilon$$

### 18.3 Ideal Bose Gas Below $T_c$

Below the Bose--Einstein condensation temperature, the chemical potential is pinned at
$\mu = \epsilon_0$ (the ground state energy, taken as zero). The integral for $N$ splits into
condensate and excited fractions:

$$N = N_0 + N_◆LB◆\text◆LB◆ex◆RB◆ = N_0 + \int_0^\infty \frac◆LB◆g(\epsilon)◆RB◆◆LB◆e^◆LB◆\beta\epsilon◆RB◆ - 1◆RB◆\,d\epsilon$$

For a 3D gas: $g(\epsilon) = (2m)^◆LB◆3/2◆RB◆V/(4\pi^2\hbar^3)\sqrt◆LB◆\epsilon◆RB◆$.

The excited fraction: $N_◆LB◆\text◆LB◆ex◆RB◆/N = (T/T_c)^◆LB◆3/2◆RB◆$.

**Condensate fraction:** $N_0/N = 1 - (T/T_c)^◆LB◆3/2◆RB◆$.

**Low-$T$ properties of the condensate:**

- Ground state energy: $E_0 = 0$ (no kinetic energy)
- Heat capacity: $C_V \propto T^3$ (from excited states only)
- The condensate does not contribute to $C_V$ (all particles in the ground state have fixed energy)

### 18.4 Landau Levels and Quantum Oscillations

In a magnetic field $\mathbf◆LB◆B◆RB◆ = B\hat◆LB◆z◆RB◆$The energy levels of a free electron gas become quantised
into **Landau levels**:

$$\epsilon_n = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\hbar\omega_c + \frac◆LB◆\hbar^2 k_z^2◆RB◆◆LB◆2m_e◆RB◆, \quad \omega_c = \frac◆LB◆eB◆RB◆◆LB◆m_e◆RB◆$$

The density of states becomes a series of peaks (van Hove singularities) at each Landau level:

$$g(\epsilon) = \frac◆LB◆eB◆RB◆◆LB◆2\pi^2\hbar◆RB◆\sum_n \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆\epsilon - (n + 1/2)\hbar\omega_c◆RB◆◆RB◆$$

**Shubnikov--de Haas oscillations:** As $B$ is varied, Landau levels pass through the Fermi energy,
causing oscillations in the resistivity with period:

$$\Delta\!\left(\frac◆LB◆1◆RB◆◆LB◆B◆RB◆\right) = \frac◆LB◆2\pi e◆RB◆◆LB◆\hbar A_◆LB◆\text◆LB◆ext◆RB◆◆RB◆$$

Where $A_◆LB◆\text◆LB◆ext◆RB◆$ is the extremal cross-sectional area of the Fermi surface perpendicular to
$\mathbf◆LB◆B◆RB◆$.

**de Haas--van Alphen oscillations:** Similar oscillations in the magnetisation (and hence the
susceptibility). These provide the most precise tool for mapping Fermi surface geometry.

<details>
<summary>Worked Example 18.1: Density Matrix of a Two-Level System</summary>

Consider a spin-1/2 particle in a magnetic field $B\hat◆LB◆z◆RB◆$ at temperature $T$.

The Hamiltonian: $\hat◆LB◆H◆RB◆ = -\gamma B\hbar\hat◆LB◆S◆RB◆_z$ with eigenstates $|\uparrow\rangle$ (energy
$-\gamma\hbar B/2$) and $|\downarrow\rangle$ (energy $+\gamma\hbar B/2$).

The density matrix:

$$\hat◆LB◆\rho◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\begin◆LB◆pmatrix◆RB◆ e^◆LB◆\beta\gamma\hbar B/2◆RB◆ & 0 \\ 0 & e^◆LB◆-\beta\gamma\hbar B/2◆RB◆ \end◆LB◆pmatrix◆RB◆ = \begin◆LB◆pmatrix◆RB◆ p_\uparrow & 0 \\ 0 & p_\downarrow \end◆LB◆pmatrix◆RB◆$$

Where $p_\uparrow = e^◆LB◆\beta\gamma\hbar B/2◆RB◆/(2\cosh(\beta\gamma\hbar B/2))$.

At high $T$: $p_\uparrow \approx p_\downarrow \approx 1/2$ (maximally mixed, $S = k_B\ln 2$).

At low $T$ ($\gamma\hbar B \gg k_BT$): $p_\uparrow \to 1$$p_\downarrow \to 0$ (nearly pure,
$S \to 0$).

The magnetisation:
$\langle S_z \rangle = \text◆LB◆Tr(\hat◆LB◆\rho◆RB◆\hat◆LB◆S◆RB◆_z) = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆(p_\uparrow - p_\downarrow) = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆\tanh\!\left(\frac◆LB◆\gamma\hbar B◆RB◆◆LB◆2k_BT◆RB◆\right)$.

The entropy: $S = -k_B[p_\uparrow\ln p_\uparrow + p_\downarrow\ln p_\downarrow]$.

At $T = 0$: $S = 0$ (ground state, pure). At $T = \infty$: $S = k_B\ln 2$ (maximally mixed).

</details>

<details>
<summary>Worked Example 18.2: Blackbody Radiation in $d$ Dimensions</summary>

The photon density of states in $d$ dimensions scales as $g(\omega) \propto \omega^◆LB◆d-1◆RB◆$.

The energy density:

$$u_d = \int_0^\infty \frac◆LB◆\hbar\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆\,g(\omega)\,d\omega \propto T^◆LB◆d+1◆RB◆$$

The Stefan--Boltzmann law in $d$ dimensions: $u_d \propto T^◆LB◆d+1◆RB◆$.

For $d = 1$: $u \propto T^2$. For $d = 2$: $u \propto T^3$. For $d = 3$: $u \propto T^4$ (the
standard result).

The Wien displacement law also changes: $\lambda_◆LB◆\max◆RB◆ T \propto d$ (the peak wavelength scales
linearly with dimension).

In $d = 1$ (nanotubes): the blackbody spectrum peaks at lower temperatures and has a steeper
low-frequency rise. In $d = 2$ (graphene): the specific heat per area is
$C/A = (2\pi^2 k_B^4)/(15\hbar^3 c^2)\,T^3 \propto T^3$ (Debye $T^3$ in 2D).

</details>

## 19. Irreversible Thermodynamics and Fluctuations

### 19.1 Fluctuation-Dissipation in the Time Domain

The classical fluctuation-dissipation theorem relates the autocorrelation function of a fluctuating
variable to the linear response function:

$$\chi(t) = \frac◆LB◆1◆RB◆◆LB◆k_BT◆RB◆\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆\langle A(t)A(0)\rangle$$

For example, the velocity autocorrelation function of a Brownian particle:

$$\langle v(t)v(0)\rangle = \frac◆LB◆k_BT◆RB◆◆LB◆m◆RB◆e^◆LB◆-t/\tau◆RB◆$$

Gives the mobility $\mu = e\tau/m$ (Einstein relation).

### 19.2 Johnson--Nyquist Noise Spectrum

The voltage noise spectrum across a resistor $R$ at temperature $T$:

$$S_V(f) = 4k_BTR$$

This is **white noise** (frequency-independent up to $f \sim k_BT/h$).

The voltage fluctuation in bandwidth $\Delta f$:

$$\langle V^2 \rangle = 4k_BTR\,\Delta f$$

### 19.3 Jarzynski Equality

The **Jarzynski equality** (1997) connects non-equilibrium work to equilibrium free energy
differences:

$$\langle e^◆LB◆-\beta W◆RB◆\rangle = e^◆LB◆-\beta\Delta F◆RB◆$$

Where the average is over many realisations of a process that drives the system from equilibrium
state $A$ to equilibrium state $B$ in time $\tau$.

**Consequences:**

- By Jensen's inequality: $\langle W \rangle \geq \Delta F$ (the average work is never less than the
  free energy change).
- For quasi-static processes: $\langle W \rangle = \Delta F$ and the distribution of $W$ is a delta
  function.
- For fast (far-from-equilibrium) processes: $\langle W \rangle > \Delta F$But the exponential
  average still equals $e^◆LB◆-\beta\Delta F◆RB◆$.

This remarkable result has been verified experimentally in single-molecule pulling experiments (RNA,
DNA hairpins) using optical tweezers.

### 19.4 Crooks Fluctuation Theorem

The **Crooks theorem** (1999) relates the work distributions for forward and reverse processes:

$$\frac◆LB◆P_F(W)◆RB◆◆LB◆P_R(-W)◆RB◆ = e^◆LB◆\beta(W - \Delta F)◆RB◆$$

Where $P_F(W)$ is the probability distribution of work for the forward process and $P_R(W)$ for the
reverse process.

This implies the Jarzynski equality as a special case:

$$\int P_F(W)\,e^◆LB◆-\beta W◆RB◆\,dW = \int P_R(-W)\,e^◆LB◆-\beta\Delta F◆RB◆\,dW = e^◆LB◆-\beta\Delta F◆RB◆$$

<details>
<summary>Worked Example 19.1: Jarzynski Equality for a Two-Level System</summary>

Consider a two-level system with $\epsilon_1 = 0$ and $\epsilon_2 = \epsilon$Initially in
equilibrium at inverse temperature $\beta$.

The free energy: $F = -k_BT\ln Z = -k_BT\ln(1 + e^◆LB◆-\beta\epsilon◆RB◆)$.

Now the energy gap is suddenly changed from $\epsilon$ to $\epsilon'$. The work done is:

$$W = \begin◆LB◆cases◆RB◆ 0 & \text◆LB◆with prob.  p_1 = 1/Z \\ \epsilon' - \epsilon & \text◆LB◆with prob.  p_2 = e^◆LB◆-\beta\epsilon◆RB◆/Z \end◆LB◆cases◆RB◆$$

The Jarzynski average:

$$\langle e^◆LB◆-\beta W◆RB◆\rangle = p_1 \cdot e^0 + p_2 \cdot e^◆LB◆-\beta(\epsilon' - \epsilon)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆ + \frac◆LB◆e^◆LB◆-\beta\epsilon'◆RB◆◆RB◆◆LB◆Z◆RB◆ = \frac◆LB◆1 + e^◆LB◆-\beta\epsilon'◆RB◆◆RB◆◆LB◆Z◆RB◆$$

The new free energy: $F' = -k_BT\ln(1 + e^◆LB◆-\beta\epsilon'◆RB◆)$.

$$e^◆LB◆-\beta\Delta F◆RB◆ = e^◆LB◆-\beta(F' - F)◆RB◆ = e^◆LB◆-\beta F'◆RB◆e^◆LB◆\beta F◆RB◆ = (1 + e^◆LB◆-\beta\epsilon'◆RB◆)\frac◆LB◆1◆RB◆◆LB◆Z◆RB◆ = \langle e^◆LB◆-\beta W◆RB◆\rangle \quad \checkmark$$

The Jarzynski equality is verified exactly for this two-level system, even though the process is far
from equilibrium (sudden quench).

</details>

## 20. Thermodynamics of Information Processing

### 20.1 Landauer Bound in Practice

The minimum energy dissipation per irreversible bit operation depends on the physical
implementation:

- **CMOS transistor** (2000s-era): $\sim 10^4\,k_BT$ per switch (vastly above the Landauer limit)
- **Modern CMOS** (7 nm node): $\sim 10^2$--$10^3\,k_BT$ per switch
- **Adiabatic / reversible logic proposals**: $\sim 1$--$10\,k_BT$ per operation (approaching the
  limit)

The gap between theory ($k_BT\ln 2 \approx 0.018$ eV at 300 K) and practice ($\sim 1$--$10$ fJ per
switch) spans 5--6 orders of magnitude. Closing this gap requires fundamentally different computing
paradigms.

### 20.2 Bennett's Clock and Reversible Computing

Bennett (1982) showed that a computer can be made logically reversible at every step if it never
erases information. Such a computer dissipates energy only during the initialisation of bits and
during optional output, not during computation.

A logically reversible computation can be embedded in a thermodynamically reversible process by
driving the system slowly enough that it remains near equilibrium at all times. The energy cost is
then:

$$E = \int_0^\tau \frac◆LB◆\partial F◆RB◆◆LB◆\partial \lambda(t)◆RB◆\,\dot◆LB◆\lambda◆RB◆(t)\,dt$$

For a quasi-static process: $E \to \Delta F$ (minimum possible).

**Fredkin and Toffoli gates** are examples of logically reversible logic gates. Any computation can
be made reversible by saving all intermediate results and running the computation in reverse to
restore the input tape.

## Worked Examples

### Example 1: Carnot efficiency

**Problem.** A Carnot engine operates between $500 \mathrm◆LB◆ K◆RB◆$ and $300 \mathrm◆LB◆ K◆RB◆$. Find the
maximum efficiency.

**Solution.** $\eta = 1 - T_C/T_H = 1 - 300/500 = 1 - 0.6 = 0.4 = 40\%$.

$\blacksquare$

### Example 2: Entropy change

**Problem.** Find the entropy change when $2 \mathrm◆LB◆ mol◆RB◆$ of ice at $0°\mathrm◆LB◆C◆RB◆$ melts
($\Delta H_◆LB◆\text◆LB◆fus◆RB◆◆RB◆ = 6.01 \mathrm◆LB◆ kJ/mol◆RB◆$).

**Solution.**
$\Delta S = \frac◆LB◆Q◆RB◆◆LB◆T◆RB◆ = \frac◆LB◆n \Delta H_◆LB◆\text◆LB◆fus◆RB◆◆RB◆◆RB◆◆LB◆T◆RB◆ = \frac◆LB◆2 \times 6010◆RB◆◆LB◆273◆RB◆ = 44.0 \mathrm◆LB◆ J/K◆RB◆$.

$\blacksquare$

## Summary

- First law: $\Delta U = Q - W$; conservation of energy.
- Second law: $\Delta S_◆LB◆\text◆LB◆universe◆RB◆◆RB◆ \geq 0$; entropy of an isolated system never decreases.
- Carnot efficiency: $\eta = 1 - T_C/T_H$ (maximum possible for given temperatures).
- Statistical mechanics: $S = k_B \ln \Omega$; Boltzmann distribution:
  $p_i \propto e^◆LB◆-E_i/(k_BT)◆RB◆$.

## Cross-References

| Topic             | Site       | Link                                                                                                       |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Thermal Physics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/thermal-physics/01-thermal-properties) |
| [Thermal Physics] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/2-particulate-nature-of-matter/1_thermodynamics)             |
| [Thermal Physics] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/4-thermal-physics/1_heat-and-gases)                        |
| [Thermal Physics] | University | [View](https://university.wyattau.com/docs/physics/2-thermal-physics/1_thermal-physics)                    |
