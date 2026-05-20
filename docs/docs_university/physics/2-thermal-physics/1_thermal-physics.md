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

Where $k_B = 1.381 \times 10^{-23}$ J/K is Boltzmann's constant.

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

$$C_V = \left(\frac{\partial U}{\partial T}\right)_V, \qquad C_P = \left(\frac{\partial H}{\partial T}\right)_P$$

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

$$dS = \frac{\delta Q_{\mathrm{rev}}{T}$$

**Theorem 1.3 (Clausius Inequality).** For any cyclic process:

$$\oint \frac{\delta Q}{T} \leq 0$$

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

$$\lim_{T \to 0} S(T) = 0$$

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

1. $\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V$
2. $\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$
3. $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$
4. $\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$

<details>
<summary>Worked Example: Deriving $(\partial U/\partial V)_T$ for an Ideal Gas</summary>

_Solution._ We use the thermodynamic identity $dU = TdS - PdV$. Dividing by $dV$ at constant $T$:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial S}{\partial V}\right)_T - P$$

By the third Maxwell relation: $(\partial S/\partial V)_T = (\partial P/\partial T)_V$. For an ideal
gas, $P = Nk_BT/V$So $(\partial P/\partial T)_V = Nk_B/V$.

Therefore:

$$\left(\frac{\partial U}{\partial V}\right)_T = T \cdot \frac{Nk_B}{V} - \frac{Nk_BT}{V} = 0$$

This confirms that the internal energy of an ideal gas depends only on temperature. $\blacksquare$

</details>

### 1.7 Common Pitfalls

- **$\delta Q$ and $\delta W$ are not exact differentials.** Unlike $dU$The heat and work are
  path-dependent. Only $\delta Q_{\mathrm{rev}/T = dS$ is exact.
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

$$P_i = \frac{1}{Z} e^{-E_i / (k_B T)}$$

Where the **partition function** is

$$Z = \sum_{i} e^{-E_i / (k_B T)}$$

_Proof._ Consider the combined system (system + reservoir) with total energy $E_{\mathrm{tot}$. The
probability of the system being in state $i$ is proportional to the number of reservoir microstates
compatible with it, which is $\Omega_R(E_{\mathrm{tot} - E_i)$. Using $S_R = k_B \ln \Omega_R$:

$$P_i \propto \Omega_R(E_{\mathrm{tot} - E_i) = \exp\left(\frac{S_R(E_{\mathrm{tot} - E_i)}{k_B}\right)$$

Expanding $S_R$ around $E_{\mathrm{tot}$:
$S_R(E_{\mathrm{tot} - E_i) \approx S_R(E_{\mathrm{tot}) - E_i \left(\frac{\partial S_R}{\partial E}\right) = S_R(E_{\mathrm{tot}) - \frac{E_i}{T}$

Since $(\partial S_R / \partial E) = 1/T$. Therefore $P_i \propto e^{-E_i / (k_BT)}$And normalising
gives the result. $\blacksquare$

### 2.3 Thermodynamic Quantities from the Partition Function

**Theorem 2.2.** The partition function determines all thermodynamic quantities:

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}, \quad F = -k_B T \ln Z, \quad S = \frac{\langle E \rangle - F}{T}$$

Where $\beta = 1/(k_BT)$.

_Proof._
$\langle E \rangle = \sum_i E_i P_i = \frac{1}{Z}\sum_i E_i e^{-\beta E_i} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta} = -\frac{\partial \ln Z}{\partial \beta}$.

$F = -k_BT \ln Z$ follows from $F = U - TS = \langle E \rangle - TS$ and the identification
$Z = e^{-\beta F}$. $\blacksquare$

### 2.4 Ideal Gas

**Theorem 2.3 (Partition Function of an Ideal Gas).** For $N$ indistinguishable particles in a 3D
box of volume $V$:

$$Z_N = \frac{1}{N!}\left(\frac{V}{\lambda_{\mathrm{th}^3}\right)^N, \quad \lambda_{\mathrm{th} = \frac{h}{\sqrt{2\pi m k_B T}}$$

Where $\lambda_{\mathrm{th}$ is the **thermal de Broglie wavelength**.

_Proof._ The single-particle energy levels in a 3D box of side $L$ ($V = L^3$) are:

$$\varepsilon_{n_x, n_y, n_z} = \frac{h^2}{8mL^2}(n_x^2 + n_y^2 + n_z^2)$$

The single-particle partition function is:

$$z = \sum_{n_x, n_y, n_z = 0}^{\infty} e^{-\beta h^2(n_x^2 + n_y^2 + n_z^2)/(8mL^2)} \approx \left(\int_0^{\infty} e^{-\beta h^2 n^2/(8mL^2)} dn\right)^3 = \left(\frac{L}{h}\sqrt{\frac{2\pi m}{\beta}}\right)^3 = \frac{V}{\lambda_{\mathrm{th}^3}$$

For $N$ indistinguishable particles (correct Boltzmann counting): $Z_N = z^N / N!$. $\blacksquare$

**Corollary 2.4.** From $Z_N$We recover the ideal gas law:

$$F = -k_BT \ln Z_N = -k_BT\left[N\ln\left(\frac{V}{\lambda_{\mathrm{th}^3}\right) - \ln N!\right]$$

$$P = -\left(\frac{\partial F}{\partial V}\right)_T = \frac{Nk_BT}{V}$$

Giving $PV = Nk_BT$.

### 2.5 The Equipartition Theorem

**Theorem 2.5 (Equipartition).** For a classical system in thermal equilibrium, each quadratic
degree of freedom in the Hamiltonian contributes $\frac{1}{2}k_BT$ to the average energy.

_Proof._ Consider a single degree of freedom with Hamiltonian $H = ap^2$ (or $bq^2$). The average
energy is:

$$\langle ap^2 \rangle = \frac{\int_{-\infty}^{\infty} ap^2 e^{-\beta ap^2}\, dp}{\int_{-\infty}^{\infty} e^{-\beta ap^2}\, dp} = -\frac{\partial}{\partial \beta}\ln\left(\int_{-\infty}^{\infty} e^{-\beta ap^2}\, dp\right) = -\frac{\partial}{\partial \beta}\ln\left(\sqrt{\frac{\pi}{a\beta}}\right) = \frac{1}{2\beta} = \frac{k_BT}{2}$$

The same calculation for $bq^2$ gives another $k_BT/2$. $\blacksquare$

**Application.** A monatomic ideal gas has 3 translational degrees of freedom:
$U = \frac{3}{2}Nk_BT$ and $C_V = \frac{3}{2}Nk_B$. A diatomic gas also has 2 rotational degrees of
freedom: $U = \frac{5}{2}Nk_BT$ and $C_V = \frac{5}{2}Nk_B$ (at temperatures where vibration is
frozen out).

### 2.6 Quantum Statistical Distributions

**Fermi--Dirac Statistics** (for fermions, particles with half-integer spin):

$$\langle n_i \rangle = \frac{1}{e^{(E_i - \mu)/(k_BT)} + 1}$$

Where $\mu$ is the **chemical potential**.

**Bose--Einstein Statistics** (for bosons, particles with integer spin):

$$\langle n_i \rangle = \frac{1}{e^{(E_i - \mu)/(k_BT)} - 1}$$

**Maxwell--Boltzmann Statistics** (classical limit, $\mu$ very negative):

$$\langle n_i \rangle = e^{-(E_i - \mu)/(k_BT)}$$

The classical limit applies when the thermal de Broglie wavelength is much smaller than the
inter-particle spacing: $\lambda_{\mathrm{th}^3 \ll V/N$.

### 2.7 The Fermi Gas

**Definition.** The **Fermi energy** $\varepsilon_F$ is the chemical potential at $T = 0$:

$$\varepsilon_F = \frac{\hbar^2}{2m}\left(3\pi^2 n\right)^{2/3}$$

Where $n = N/V$ is the particle number density.

**Proposition 2.6.** At $T = 0$All states with $E \leq \varepsilon_F$ are occupied and all states
with $E > \varepsilon_F$ are empty. The ground-state energy of a 3D Fermi gas is:

$$U_0 = \frac{3}{5}N\varepsilon_F$$

_Proof._ $U_0 = \int_0^{\varepsilon_F} E \cdot g(E)\, dE$ where
$g(E) = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt{E}$ is the density of states.
Evaluating:
$U_0 = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} \cdot \frac{2}{5}\varepsilon_F^{5/2} = \frac{3}{5}N\varepsilon_F$.
$\blacksquare$

### 2.8 Blackbody Radiation

**Planck's Law** gives the spectral energy density of blackbody radiation:

$$u(\nu, T) = \frac{8\pi h \nu^3}{c^3} \cdot \frac{1}{e^{h\nu/(k_BT)} - 1}$$

**Stefan--Boltzmann Law:** The total radiated power per unit area:

$$j = \sigma T^4, \quad \sigma = \frac{\pi^2 k_B^4}{60 \hbar^3 c^2}$$

**Wien's Displacement Law:** The peak frequency satisfies $\nu_{\mathrm{max} / T = \mathrm{const$.

### 2.9 Worked Examples

**Problem.** Calculate the Fermi energy and Fermi temperature for copper. Given: electron density
$n \approx 8.5 \times 10^{28}\,\mathrm{m^{-3}$$m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}} \times (3\pi^2 \times 8.5 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 8.5 \times 10^{28})^{1/3} = (2.52 \times 10^{30})^{1/3} \approx 1.36 \times 10^{10}$

$(3\pi^2 n)^{2/3} = (1.36 \times 10^{10})^2 = 1.85 \times 10^{20}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 1.85 \times 10^{20} \approx 1.13 \times 10^{-18}\,\mathrm{J \approx 7.0\,\mathrm{eV$

$T_F = \varepsilon_F / k_B = 1.13 \times 10^{-18} / 1.381 \times 10^{-23} \approx 81800\,\mathrm{K$

The Fermi temperature is much larger than room temperature, confirming that copper electrons are in
the degenerate regime. $\blacksquare$

</details>

<details>
<summary>Worked Example: Entropy of Mixing</summary>

_Solution._ Two ideal gases of $N$ particles each, initially separated by a partition, are allowed
to mix. Calculate the entropy change.

Before mixing: the total entropy is
$2 \times Nk_B\left[\ln\left(\frac{V}{N\lambda^3}\right) + \frac{5}{2}\right]$ (for a monatomic
gas).

After mixing: each gas occupies volume $2V$So the total entropy is:

$$S_f = 2 \times Nk_B\left[\ln\left(\frac{2V}{N\lambda^3}\right) + \frac{5}{2}\right]$$

$$\Delta S_{\mathrm{mix} = S_f - S_i = 2Nk_B\ln\left(\frac{2V}{N\lambda^3}\right) - 2Nk_B\ln\left(\frac{V}{N\lambda^3}\right) = 2Nk_B\ln 2$$

For 1 mole of each gas: $\Delta S_{\mathrm{mix} = 2R\ln 2 \approx 11.5\,\mathrm{J/K$.

**Gibbs paradox.** If the two gases are identical, the entropy of mixing is zero (no physical
change). The resolution is that identical particles are indistinguishable, and the correct counting
already accounts for this via the $1/N!$ factor in the partition function. $\blacksquare$

</details>

### 2.10 Common Pitfalls

- **The classical limit does not always apply.** When $\lambda_{\mathrm{th}^3 \gtrsim V/N$Quantum
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

**Problem.** Compute $\Xi$$\langle N \rangle$And $\langle E \rangle$ for a classical ideal gas in
the grand canonical ensemble.

<details>
<summary>Solution</summary>

The single-particle partition function is $z = V/\lambda_{\mathrm{th}^3$ where
$\lambda_{\mathrm{th} = h/\sqrt{2\pi m k_BT}$. The canonical partition function for $N$
indistinguishable particles is $Z_N = z^N/N!$. The grand partition function:

$$\Xi = \sum_{N=0}^{\infty} \frac{z^N}{N!} e^{\beta \mu N} = \sum_{N=0}^{\infty} \frac{(ze^{\beta \mu})^N}{N!} = e^{ze^{\beta \mu}}$$

$$\ln \Xi = ze^{\beta \mu} = \frac{V}{\lambda_{\mathrm{th}^3} e^{\beta \mu}$$

Average particle number:

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu} = \frac{V}{\lambda_{\mathrm{th}^3} e^{\beta \mu}$$

Solving for the chemical potential: $\mu = k_BT \ln(\langle N \rangle \lambda_{\mathrm{th}^3 / V)$.

Average energy (using
$\langle E \rangle = -\partial \ln \Xi / \partial \beta + \mu \langle N \rangle / (k_BT)$):

$$\langle E \rangle = \frac{3}{2}\langle N \rangle k_BT$$

This recovers the equipartition result. $\blacksquare$

</details>

---

## 4. Fermi Gas at Finite Temperature

### 4.1 Sommerfeld Expansion

At finite temperature, the Fermi-Dirac distribution "smears out" the step function at
$\varepsilon_F$. The Sommerfeld expansion provides an asymptotic series for integrals of the form

$$I = \int_0^\infty \frac{f(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

When $k_BT \ll \varepsilon_F$ (the degenerate limit).

**Theorem 4.1 (Sommerfeld Expansion).** To leading order in $T/T_F$:

$$I = \int_0^\mu f(\varepsilon)\, d\varepsilon + \frac{\pi^2}{6}(k_BT)^2 f'(\mu) + \mathcal{O}(T^4)$$

_Proof (sketch)._ Write $f(\varepsilon) = f(\mu) + f'(\mu)(\varepsilon - \mu) + \cdots$ and use the
exact results:

$$\int_0^\infty \frac{d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mu + \mathcal{O}(T^4)$$

$$\int_0^\infty \frac{(\varepsilon - \mu)\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \frac{\pi^2}{6}(k_BT)^2$$

$$\int_0^\infty \frac{(\varepsilon - \mu)^2\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mathcal{O}(T^4)$$

Combining these with the Taylor expansion of $f(\varepsilon)$ gives the result. The key integral
identities follow from the substitution $x = \beta(\varepsilon - \mu)$ and the fact that the
integrand is an odd function of $x$ to leading order. $\blacksquare$

### 4.2 Chemical Potential at Finite Temperature

Applying the Sommerfeld expansion to the number equation
$N = \int_0^\infty g(\varepsilon) f_{\mathrm{FD}(\varepsilon)\, d\varepsilon$ with
$g(\varepsilon) = C\sqrt{\varepsilon}$:

$$N = \frac{2}{3}C\mu^{3/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{C}{2\sqrt{\mu}} + \mathcal{O}(T^4)$$

At $T = 0$: $N = \frac{2}{3}C\varepsilon_F^{3/2}$. Expanding $\mu = \varepsilon_F + \delta\mu$ and
keeping terms to $\mathcal{O}(T^2)$:

$$\mu(T) \approx \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

The chemical potential decreases slightly with temperature.

### 4.3 Heat Capacity of the Electron Gas

Applying the Sommerfeld expansion to the energy:

$$U = \int_0^\infty \varepsilon\, g(\varepsilon)\, f_{\mathrm{FD}(\varepsilon)\, d\varepsilon = \frac{2}{5}C\mu^{5/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{3}{2}C\mu^{1/2} + \cdots$$

Substituting $\mu \approx \varepsilon_F$:

$$U \approx \frac{3}{5}N\varepsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

$$C_V = \frac{\partial U}{\partial T} = Nk_B \cdot \frac{\pi^2}{2}\frac{k_BT}{\varepsilon_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F}$$

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

$$C_V^{\mathrm{el} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{300}{81000} \approx 0.018\, Nk_B$$

Lattice contribution (from the Debye model at $T \gg \Theta_D$):

$$C_V^{\mathrm{lat} \approx 3Nk_B$$

The ratio is:

$$\frac{C_V^{\mathrm{el}}{C_V^{\mathrm{lat}} \approx \frac{0.018}{3} \approx 0.006$$

The electronic heat capacity is only about $0.6\%$ of the lattice contribution at room temperature.
At very low temperatures ($T \ll \Theta_D$), the lattice contribution falls as $T^3$ while the
electronic contribution falls as $T$So the electronic term eventually dominates below a few kelvin.

$\blacksquare$

</details>

---

## 5. Bose-Einstein Condensation

### 5.1 Ideal Bose Gas

For bosons, the average occupation of a single-particle state of energy $\varepsilon$ is

$$\langle n_\varepsilon \rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1}$$

The chemical potential must satisfy $\mu \leq \varepsilon_0$ (the lowest single-particle energy) to
prevent negative occupation numbers.

### 5.2 Density of States and Critical Temperature

For a 3D free Bose gas with $\varepsilon = \hbar^2 k^2 / (2m)$The density of states is
$g(\varepsilon) = (V/4\pi^2)(2m/\hbar^2)^{3/2}\sqrt{\varepsilon}$. The number of particles in
excited states ($\varepsilon > 0$) is

$$N_{\mathrm{ex} = \int_0^\infty \frac{g(\varepsilon)\, d\varepsilon}{e^{\beta \varepsilon} - 1} = V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\,\zeta\!\left(\frac{3}{2}\right)$$

Where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function.

**Theorem 5.1 (BEC critical temperature).** The maximum number of particles that can be accommodated
in excited states is achieved at $\mu = 0$. When $N$ exceeds this maximum, the excess condenses into
the ground state. The critical temperature is

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

Where $n = N/V$.

_Proof._ Setting $N = N_{\mathrm{ex}^{\max}$ at $\mu = 0$ and solving for $T$:

$$n = \left(\frac{mk_B T_c}{2\pi\hbar^2}\right)^{3/2}\,\zeta\!\left(\frac{3}{2}\right)$$

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3} \qquad \blacksquare$$

### 5.3 Condensate Fraction

Below $T_c$$\mu \approx 0$ and the condensate fraction is

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

This follows from $N_0 = N - N_{\mathrm{ex}$ with $\mu = 0$:

$$N_{\mathrm{ex} = N\left(\frac{T}{T_c}\right)^{3/2}$$

### 5.4 Thermodynamic Properties below $T_c$

The energy below $T_c$:

$$U = \int_0^\infty \frac{\varepsilon\, g(\varepsilon)\, d\varepsilon}{e^{\beta\varepsilon} - 1} = V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\,(k_BT)\,\frac{3}{2}\,\zeta\!\left(\frac{5}{2}\right) \cdot \Gamma\!\left(\frac{5}{2}\right)$$

$$= \frac{3}{2}\,Nk_BT_c\,\zeta\!\left(\frac{5}{2}\right)\Big/\zeta\!\left(\frac{3}{2}\right)\,\left(\frac{T}{T_c}\right)^{5/2}$$

The heat capacity:

$$C_V = \frac{15}{4}\,Nk_B\,\zeta\!\left(\frac{5}{2}\right)\Big/\zeta\!\left(\frac{3}{2}\right)\,\left(\frac{T}{T_c}\right)^{3/2} \propto T^{3/2}$$

This contrasts with the constant $C_V = \frac{3}{2}Nk_B$ above $T_c$ (equipartition). There is a
cusp (discontinuity in the derivative) at $T_c$Characteristic of a phase transition.

### 5.5 Worked Example: BEC in Rubidium-87

**Problem.** Estimate $T_c$ for a gas of $N = 10^4$ rubidium-87 atoms confined in a harmonic trap
with frequency $\omega_{\mathrm{ho} = 2\pi \times 100$ Hz.

<details>
<summary>Solution</summary>

For a harmonic trap, the effective density of states is
$g(\varepsilon) = \varepsilon^2/(2\hbar^3\omega_{\mathrm{ho}^3)$. The critical temperature in a
harmonic trap is:

$$k_BT_c = \hbar\omega_{\mathrm{ho}\left(\frac{N}{\zeta(3)}\right)^{1/3}$$

$$k_BT_c = (1.055 \times 10^{-34})(2\pi \times 100)\left(\frac{10^4}{1.202}\right)^{1/3}$$

$$= (6.63 \times 10^{-32})(20.1) = 1.33 \times 10^{-30}\,\mathrm{J$$

$$T_c = \frac{1.33 \times 10^{-30}}{1.381 \times 10^{-23}} \approx 9.6 \times 10^{-8}\,\mathrm{K \approx 96\,\mathrm{nK$$

This is consistent with the 1995 BEC experiments by Cornell and Wieman (JILA) and Ketterle (MIT),
who achieved BEC at temperatures of a few hundred nanokelvin. $\blacksquare$

</details>

---

## 6. The Ising Model

### 6.1 Definition

The **Ising model** is the simplest model of a phase transition. On a lattice of $N$ sites, each
site $i$ has a spin variable $s_i \in \{+1, -1\}$. The Hamiltonian is

$$H = -J\sum_{\langle i,j\rangle} s_i s_j - h\sum_i s_i$$

Where $J$ is the coupling constant, $\langle i,j\rangle$ denotes nearest-neighbour pairs, and $h$ is
an external magnetic field.

- $J > 0$: **ferromagnetic** (spins prefer to align).
- $J < 0$: **antiferromagnetic** (spins prefer to anti-align).

### 6.2 Exact Solution in One Dimension

**Theorem 6.1.** The 1D Ising model with $h = 0$ has no phase transition at any finite temperature.

_Proof (Transfer matrix method)._ Consider a chain of $N$ spins with periodic boundary conditions
($s_{N+1} = s_1$). The partition function is:

$$Z = \sum_{\{s_i\}} \prod_{i=1}^{N} e^{\beta J s_i s_{i+1}}$$

Define the **transfer matrix** $\mathbf{T}$ with elements
$T_{s_i, s_{i+1}} = e^{\beta J s_i s_{i+1}}$:

$$\mathbf{T} = \begin{pmatrix} e^{\beta J} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J} \end{pmatrix}$$

The partition function is $Z = \mathrm{Tr(\mathbf{T}^N) = \lambda_+^N + \lambda_-^N$ where
$\lambda_\pm$ are the eigenvalues of $\mathbf{T}$:

$$\lambda_\pm = e^{\beta J} \pm e^{-\beta J}$$

In the thermodynamic limit ($N \to \infty$), $Z \approx \lambda_+^N$ and the free energy per spin
is:

$$f = -k_BT \ln(e^{\beta J} + e^{-\beta J}) = -k_BT \ln(2\cosh\beta J)$$

The magnetisation $m = -\partial f/\partial h|_{h=0} = 0$ for all $T > 0$Confirming no spontaneous
magnetisation and hence no phase transition. $\blacksquare$

### 6.3 Mean Field Theory

**Theorem 6.2 (Mean field approximation).** In mean field theory, each spin feels an effective field
due to its neighbours. Replacing $s_j$ by its average $\langle s_j \rangle = m$ in the Hamiltonian:

$$H_{\mathrm{MF} = -Jz\, m\sum_i s_i - h\sum_i s_i$$

Where $z$ is the coordination number (number of nearest neighbours). Each spin behaves as if in an
effective field $h_{\mathrm{eff} = h + Jz\,m$.

The self-consistency equation (mean field equation) is:

$$m = \tanh\!\left(\frac{\beta(h + Jz\,m)}{k_B}\right) = \tanh\!\left(\frac{h + Jz\,m}{k_BT}\right)$$

For $h = 0$: $m = \tanh(Jz\,m / k_BT)$.

**Critical temperature.** Expanding $\tanh x \approx x - x^3/3$ for small $x$:

$$m = \frac{Jz\,m}{k_BT} - \frac{1}{3}\left(\frac{Jz\,m}{k_BT}\right)^3$$

For $m \neq 0$Dividing by $m$:

$$1 = \frac{Jz}{k_BT_c} - \frac{1}{3}\left(\frac{Jz}{k_BT_c}\right)^3$$

At $T = T_c$: $T_c = Jz/k_B$.

### 6.4 Critical Exponents

Near the critical point, thermodynamic quantities follow power laws:

$$m \sim (T_c - T)^{1/\beta}, \quad \chi \sim |T - T_c|^{-\gamma}, \quad C \sim |T - T_c|^{-\alpha}$$

Mean field theory predicts:

$$\beta = \frac{1}{2}, \quad \gamma = 1, \quad \alpha = 0\ \text{(jump discontinuity)$$

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
and compare with the exact result $k_BT_c / J = 2/\ln(1 + \sqrt{2}) \approx 2.269$.

<details>
<summary>Solution</summary>

Mean field: $T_c^{\mathrm{MF} = Jz/k_B = 4J/k_B$So $k_BT_c^{\mathrm{MF}/J = 4$.

Exact (Onsager, 1944): $k_BT_c^{\mathrm{exact}/J = 2/\ln(1 + \sqrt{2}) \approx 2.269$.

The mean field result overestimates $T_c$ by a factor of $4/2.269 \approx 1.76$. This is because
mean field theory overestimates the tendency toward ordering by neglecting thermal fluctuations. The
error is larger in lower dimensions where fluctuations are more important.

$\blacksquare$

</details>

### 6.6 Worked Example: Susceptibility above $T_c$

**Problem.** Calculate the magnetic susceptibility $\chi = \partial m/\partial h|_{h=0}$ above $T_c$
in mean field theory.

<details>
<summary>Solution</summary>

For small $h$ and $T > T_c$Expand $m = \tanh(\beta(h + Jz\,m))$ to first order in $h$ and $m$:

$$m \approx \beta(h + Jz\,m) = \frac{h}{k_BT} + \frac{Jz}{k_BT}m$$

Solving for $m$:

$$m = \frac{h/k_BT}{1 - Jz/(k_BT)} = \frac{h}{k_B(T - T_c)}$$

$$\chi = \frac{\partial m}{\partial h}\bigg|_{h=0} = \frac{1}{k_B(T - T_c)} \propto (T - T_c)^{-1}$$

This gives the mean field critical exponent $\gamma = 1$. $\blacksquare$

</details>

---

## 7. Classical Limit and the Maxwell-Boltzmann Distribution

### 7.1 Derivation from Quantum Statistics

In the classical (dilute) limit, both Fermi-Dirac and Bose-Einstein distributions reduce to the
Maxwell-Boltzmann distribution. The condition for the classical limit is

$$e^{\beta(\varepsilon - \mu)} \gg 1$$

For all relevant energies. This is equivalent to $n\lambda_{\mathrm{th}^3 \ll 1$ (the thermal de
Broglie wavelength is much smaller than the inter-particle spacing).

**Theorem 7.1.** In the classical limit:

$$f_{\mathrm{FD}(\varepsilon) \approx f_{\mathrm{BE}(\varepsilon) \approx f_{\mathrm{MB}(\varepsilon) = e^{-\beta(\varepsilon - \mu)}$$

_Proof._ When $e^{\beta(\varepsilon - \mu)} \gg 1$The $+1$ or $-1$ in the denominator is negligible:

$$\frac{1}{e^{\beta(\varepsilon - \mu)} \pm 1} \approx \frac{1}{e^{\beta(\varepsilon - \mu)}} = e^{-\beta(\varepsilon - \mu)}$$

$\blacksquare$

### 7.2 Maxwell-Boltzmann Speed Distribution

For a classical ideal gas, the probability distribution of molecular speeds is

$$f(v)\,dv = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 e^{-mv^2/(2k_BT)}\,dv$$

**Characteristic speeds:**

- Most probable: $v_p = \sqrt{2k_BT/m}$
- Mean: $\langle v \rangle = \sqrt{8k_BT/(\pi m)}$
- RMS: $v_{\mathrm{rms} = \sqrt{3k_BT/m}$

The ordering is $v_p < \langle v \rangle < v_{\mathrm{rms}$.

### 7.3 Worked Example: Effusion

**Problem.** A gas of molecular mass $m$ at temperature $T$ effuses through a small hole. Find the
distribution of speeds of the effusing molecules and the mean kinetic energy per effusing molecule.

<details>
<summary>Solution</summary>

The effusion rate for molecules with speed between $v$ and $v + dv$ is proportional to
$v \cdot f(v)\,dv$ (faster molecules hit the hole more frequently). The effusion distribution is:

$$f_{\mathrm{eff}(v)\,dv \propto v \cdot v^2 e^{-mv^2/(2k_BT)}\,dv = v^3 e^{-mv^2/(2k_BT)}\,dv$$

Normalising:

$$f_{\mathrm{eff}(v) = \frac{1}{2(k_BT/m)^2}\,v^3\,e^{-mv^2/(2k_BT)}$$

The mean kinetic energy:

$$\langle \varepsilon \rangle_{\mathrm{eff} = \frac{1}{2}m\langle v^2 \rangle_{\mathrm{eff} = \frac{1}{2}m \cdot \frac{\int_0^\infty v^5 e^{-mv^2/(2k_BT)}\,dv}{\int_0^\infty v^3 e^{-mv^2/(2k_BT)}\,dv}$$

Using $\int_0^\infty v^n e^{-av^2}\,dv = \frac{1}{2a^{(n+1)/2}}\Gamma\!\left(\frac{n+1}{2}\right)$:

$$\langle v^2 \rangle_{\mathrm{eff} = \frac{\Gamma(3)/(2a^3)}{\Gamma(2)/(2a^2)} = \frac{2}{a} = \frac{4k_BT}{m}$$

$$\langle \varepsilon \rangle_{\mathrm{eff} = 2k_BT$$

This is $4/3$ times the bulk average $\frac{3}{2}k_BT$ --- effusing molecules are "hotter" because
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
  $n\lambda*{\mathrm{th}^3 \ll 1$ is violated in these cases.

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
$n \approx 2.65 \times 10^{28}\,\mathrm{m^{-3}$$m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}}(3\pi^2 \times 2.65 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} \approx 9.23 \times 10^9$

$(3\pi^2 n)^{2/3} = (9.23 \times 10^9)^2 = 8.52 \times 10^{19}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 8.52 \times 10^{19} \approx 5.20 \times 10^{-19}\,\mathrm{J \approx 3.25\,\mathrm{eV$

$T_F = \varepsilon_F/k_B = 5.20 \times 10^{-19}/1.381 \times 10^{-23} \approx 37700\,\mathrm{K$

</details>

### Problem 2

A 3D Bose gas of $N$ particles of mass $m$ is confined to volume $V$. Show that the heat capacity at
constant volume has a discontinuity at $T = T_c$ and find the jump.

<details>
<summary>Solution</summary>

Above $T_c$ (classical regime): $C_V = \frac{3}{2}Nk_B$.

Below $T_c$: $C_V = \frac{15}{4}Nk_B\,\zeta(5/2)/\zeta(3/2) \cdot (T/T_c)^{3/2}$.

At $T = T_c^-$:

$$C_V(T_c^-) = \frac{15}{4}Nk_B \cdot \frac{\zeta(5/2)}{\zeta(3/2)}$$

$\zeta(5/2) \approx 1.341$$\zeta(3/2) \approx 2.612$:

$$C_V(T_c^-) = \frac{15}{4} \times \frac{1.341}{2.612}\,Nk_B \approx 1.926\,Nk_B$$

At $T = T_c^+$: $C_V = \frac{3}{2}Nk_B = 1.5\,Nk_B$.

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

For a classical gas with pairwise interaction $V(r_{12})$:

$$B_2(T) = -\frac{1}{2V}\int d^3\mathbf{r}_1\,d^3\mathbf{r}_2\,\left[e^{-\beta V(r_{12})} - 1\right]$$

$$= -2\pi \int_0^\infty \left[e^{-\beta V(r)} - 1\right] r^2\, dr$$

For a hard-sphere gas ($V(r) = \infty$ for $r < d$$V(r) = 0$ for $r > d$):

$$B_2 = -2\pi\int_0^d (-1)\,r^2\,dr = \frac{2\pi d^3}{3} = \frac{2\pi}{3}\left(\frac{d}{2}\right)^3 \cdot 8 = 4v_0$$

Where $v_0 = \pi d^3/6$ is the volume of one sphere. The van der Waals excluded volume parameter is
$b = 4Nv_0 = N B_2$.

</details>

### Problem 4

Show that the classical limit of the Fermi-Dirac distribution reproduces the Maxwell-Boltzmann
distribution, and derive the condition for the classical limit in terms of the density of states.

<details>
<summary>Solution</summary>

The Fermi-Dirac distribution is:

$$f_{\mathrm{FD}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1}$$

The total number of particles is:

$$N = \int_0^\infty \frac{g(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

In the classical limit $e^{\beta(\varepsilon - \mu)} \gg 1$The $+1$ is negligible:

$$N \approx \int_0^\infty g(\varepsilon)\, e^{-\beta(\varepsilon - \mu)}\, d\varepsilon = e^{\beta\mu} \int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon$$

$$e^{\beta\mu} = \frac{N}{\int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon} = \frac{N\lambda_{\mathrm{th}^3}{V}$$

The classical limit requires $e^{\beta\mu} \ll 1$I.e., $N\lambda_{\mathrm{th}^3/V \ll 1$Or
equivalently, the average inter-particle spacing $(V/N)^{1/3}$ must be much larger than
$\lambda_{\mathrm{th}$.

</details>

### Problem 5

Compute the partition function for a single quantum harmonic oscillator and verify that the average
energy is $\langle E \rangle = \hbar\omega(n_B + 1/2)$ where $n_B = 1/(e^{\beta\hbar\omega} - 1)$.

<details>
<summary>Solution</summary>

$$Z_{\mathrm{HO} = \sum_{n=0}^{\infty} e^{-\beta\hbar\omega(n+1/2)} = e^{-\beta\hbar\omega/2}\sum_{n=0}^{\infty}\left(e^{-\beta\hbar\omega}\right)^n = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}$$

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\hbar\omega}{2} + \frac{\hbar\omega\,e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}} = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1} = \hbar\omega\left(\frac{1}{2} + n_B\right)$$

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

$$L = T_c \Delta S = T_c \left(S_{\text{phase 2} - S_{\text{phase 1}\right)$$

The **Clausius--Clapeyron equation** governs the slope of the coexistence curve:

$$\frac{dP}{dT} = \frac{L}{T_c \Delta v}$$

Where $\Delta v = v_2 - v_1$ is the change in specific volume.

### 10.2 Van der Waals Equation and Critical Phenomena

The van der Waals equation of state modifies the ideal gas law to account for intermolecular forces:

$$\left(P + \frac{a}{v^2}\right)(v - b) = k_B T$$

Where $a$ accounts for attractive interactions and $b$ for the finite molecular volume. The critical
point $(T_c, P_c, v_c)$ satisfies:

$$\frac{\partial P}{\partial v}\bigg|_{T_c} = 0, \qquad \frac{\partial^2 P}{\partial v^2}\bigg|_{T_c} = 0$$

Solving gives:

$$T_c = \frac{8a}{27bk_B}, \qquad P_c = \frac{a}{27b^2}, \qquad v_c = 3b$$

Near the critical point, define the **reduced variables**
$\tilde{T} = T/T_c$$\tilde{P} = P/P_c$$\tilde{v} = v/v_c$ to obtain the universal form:

$$\left(\tilde{P} + \frac{3}{\tilde{v}^2}\right)(3\tilde{v} - 1) = 8\tilde{T}$$

The **order parameter** $\phi = (v_{\text{gas} - v_{\text{liquid})/(v_c)$ vanishes as:

$$\phi \propto (T_c - T)^{\beta}$$

Where $\beta = 1/2$ is the **mean-field critical exponent** (van der Waals prediction).

### 10.3 Critical Exponents

Near a second-order phase transition, thermodynamic quantities follow power laws characterized by
**critical exponents**:

| Exponent | Definition                           | Mean-field | 2D Ising | 3D Ising (numerical) |
| -------- | ------------------------------------ | ---------- | -------- | -------------------- |
| $\alpha$ | $C \propto \|t\|^{-\alpha}$          | 0 (jump)   | 0 (log)  |
| $\beta$  | $\phi \propto (-t)^\beta$            | $1/2$      | $1/8$    | $\approx 0.326$      |
| $\gamma$ | $\chi \propto \|t\|^{-\gamma}$       | $1$        | $7/4$    |
| $\delta$ | $\phi \propto h^{1/\delta}$ at $t=0$ | $3$        | $15$     | $\approx 4.789$      |

Where $t = (T - T_c)/T_c$ is the reduced temperature and $h$ is the conjugate field.

<details>
<summary>Worked Example 10.1: Clausius--Clapeyron for Water</summary>

For the water--steam transition at 1 atm, $T_c = 373.15$ K, $L = 2260$ kJ/kg,
$v_{\text{steam} = 1.673$ m$^3$/kg, $v_{\text{water} = 1.043 \times 10^{-3}$ m$^3$/kg.

$$\frac{dP}{dT} = \frac{L}{T \Delta v} = \frac{2.26 \times 10^6}{373.15 \times 1.673} = \frac{2.26 \times 10^6}{624.3} \approx 3620 \text{ Pa/K \approx 0.0357 \text{ atm/K$$

This means increasing the boiling temperature by 1 K requires increasing the pressure by about 0.036
atm.

</details>

<details>
<summary>Worked Example 10.2: Critical Parameters of CO$_2$</summary>

For CO$_2$$a = 0.364$ Pa$\cdot$M$^6$/mol$^2$$b = 4.27 \times 10^{-5}$ m$^3$/mol. Using the critical
point formulas:

$$T_c = \frac{8a}{27Rb} = \frac{8 \times 0.364}{27 \times 8.314 \times 4.27 \times 10^{-5}} = \frac{2.912}{9.585 \times 10^{-3}} \approx 303.7 \text{ K$$

$$P_c = \frac{a}{27b^2} = \frac{0.364}{27 \times (4.27 \times 10^{-5})^2} = \frac{0.364}{4.923 \times 10^{-8}} \approx 7.40 \times 10^6 \text{ Pa = 74.0 \text{ atm$$

The experimental values are $T_c = 304.3$ K and $P_c = 73.8$ atm, showing good agreement.

</details>

## 11. Landau Theory of Phase Transitions

Landau theory provides a phenomenological framework for continuous (second-order) phase transitions
by expanding the free energy in powers of an **order parameter** $\phi$.

### 11.1 Landau Free Energy

The Landau free energy density (in the absence of external fields) is:

$$f(\phi, T) = f_0(T) + \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6 + \cdots$$

**Assumptions:**

- $f$ is analytic in $\phi$ near the transition
- Symmetry $\phi \to -\phi$ (e.g., Ising systems) eliminates odd powers
- $b > 0$ for stability
- $a(T) = a_0(T - T_c)$ changes sign at $T_c$

With an external field $h$ conjugate to $\phi$Add $-h\phi$:

$$f(\phi, T) = f_0 + \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 - h\phi$$

The equilibrium order parameter minimizes $f$:

$$\frac{\partial f}{\partial \phi} = a\phi + b\phi^3 - h = 0$$

### 11.2 Zero-Field Solutions

For $h = 0$:

- **$T > T_c$** ($a > 0$): minimum at $\phi = 0$ (disordered phase)
- **$T < T_c$** ($a < 0$): minima at $\phi = \pm\sqrt{-a/b} = \pm\sqrt{a_0(T_c - T)/b}$

The order parameter grows as:

$$\phi = \begin{cases} 0 & T > T_c \\ \pm\sqrt{a_0(T_c - T)/b} & T < T_c \end{cases}$$

This yields the mean-field critical exponent $\beta = 1/2$.

### 11.3 Susceptibility

The **susceptibility** $\chi = \partial\phi/\partial h|_{h=0}$ is obtained by expanding
$\phi(h) = \phi_0 + \chi h + \cdots$:

$$a\phi + b\phi^3 - h = 0 \implies (a + 3b\phi_0^2)\chi = 1$$

- **$T > T_c$**: $\phi_0 = 0$So $\chi = 1/a = 1/[a_0(T - T_c)]$Giving $\gamma = 1$.
- **$T < T_c$**: $\phi_0^2 = -a/b$So $\chi = 1/(-2a) = 1/[2a_0(T_c - T)]$Giving $\gamma' = 1$.

### 11.4 Specific Heat

The free energy at equilibrium is:

$$f_{\text{eq} = \begin{cases} f_0 & T > T_c \\ f_0 - a^2/(4b) & T < T_c \end{cases}$$

The specific heat discontinuity is:

$$C_{T_c^-} - C_{T_c^+} = -T_c \frac{\partial^2}{\partial T^2}\left(\frac{-a^2}{4b}\right)\bigg|_{T_c} = \frac{T_c a_0^2}{2b}$$

This is a finite jump ($\alpha = 0$ in mean-field theory).

<details>
<summary>Worked Example 11.1: Landau Free Energy Minimum</summary>

Consider $f = \frac{1}{2}(T - 100)\phi^2 + \frac{1}{4}\phi^4$ (in arbitrary units where
$a_0 = b = 1$).

At $T = 50$ ($a = -50$): $f = -25\phi^2 + \frac{1}{4}\phi^4$.

$$\frac{\partial f}{\partial \phi} = -50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (max) or  \phi = \pm\sqrt{50} = \pm 7.07 \text{ (min)$$

$$f_{\text{min} = -25(50) + \frac{1}{4}(2500) = -1250 + 625 = -625$$

At $T = 150$ ($a = 50$): $f = 25\phi^2 + \frac{1}{4}\phi^4$.

$$\frac{\partial f}{\partial \phi} = 50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (min)$$

$$f_{\text{min} = 0$$

The free energy drops by 625 units when going below $T_c = 100$Driving the transition.

</details>

<details>
<summary>Worked Example 11.2: First-Order Transition in Landau Theory</summary>

When $b < 0$ (which can happen in systems with first-order transitions), we must include the
$\phi^6$ term with $c > 0$:

$$f = \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6$$

The equilibrium condition $\partial f/\partial \phi = 0$ gives:

$$\phi(a + b\phi^2 + c\phi^4) = 0$$

The quartic factor has solutions when:

$$\phi^2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2c}$$

This requires $b^2 > 4ac$Which occurs when $T$ is below some temperature $T^* > T_c$. Between $T_c$
and $T^*$The system undergoes a **first-order** transition because the order parameter jumps
discontinuously from zero to a finite value.

</details>

## 12. Ising Model and Mean-Field Theory

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

Then $Z = \text{Tr(\mathbf{T}^N) = \lambda_+^N + \lambda_-^N$ where $\lambda_\pm$ are the
eigenvalues of $\mathbf{T}$.

In the thermodynamic limit ($N \to \infty$), $Z = \lambda_+^N$ where:

$$\lambda_+ = e^{\beta J}\cosh(\beta h) + \sqrt{e^{2\beta J}\sinh^2(\beta h) + e^{-2\beta J}}$$

**Key result:** The 1D Ising model has **no** phase transition at $T > 0$. The magnetization
$m = \langle\sigma\rangle \to 0$ as $h \to 0$ for all finite $T$.

### 12.2 Mean-Field Approximation

The mean-field (Weiss) approximation replaces each neighboring spin by its thermal average:

$$\sigma_i\sigma_j \approx \sigma_i\langle\sigma_j\rangle + \langle\sigma_i\rangle\sigma_j - \langle\sigma_i\rangle\langle\sigma_j\rangle$$

The effective Hamiltonian becomes:

$$\mathcal{H}_{\text{MF} = -\sum_i \left(zJm + h\right)\sigma_i + \frac{1}{2}N zJ m^2$$

Where $z$ is the coordination number and $m = \langle\sigma\rangle$.

Each spin is independent, so:

$$m = \tanh\!\left[\beta(zJm + h)\right]$$

This is a **self-consistency equation** for $m$. For $h = 0$:

$$m = \tanh(\beta zJm)$$

Expanding for small $m$: $m \approx \beta zJ m - \frac{1}{3}(\beta zJ)^3 m^3$. Nonzero $m$ exists
when:

$$\beta zJ > 1 \implies T_c^{\text{MF} = \frac{zJ}{k_B}$$

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

| Lattice      | $z$ | $T_c^{\text{MF}$ |
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

$$\lambda_\pm = e^{\beta J} \pm e^{-\beta J}$$

The free energy per spin in the thermodynamic limit:

$$f = -k_B T \ln\lambda_+ = -k_B T \ln\!\left(2\cosh\frac{J}{k_B T}\right)$$

The internal energy per spin:

$$u = -\frac{\partial \ln\lambda_+}{\partial \beta} = -J\tanh\frac{J}{k_B T}$$

The specific heat:

$$c = \frac{\partial u}{\partial T} = \frac{J^2}{k_B T^2}\text{sech^2\!\left(\frac{J}{k_B T}\right)$$

This is a smooth function with no singularity — confirming no phase transition in 1D.

</details>

## 13. Fluctuation-Dissipation Theorem

### 13.1 Linear Response Theory

The **fluctuation-dissipation theorem** (FDT) connects the response of a system to a small
perturbation with the spontaneous fluctuations of the system at equilibrium.

Consider a Hamiltonian $\mathcal{H}_0$ perturbed by a time-dependent field:

$$\mathcal{H}(t) = \mathcal{H}_0 - f(t)A$$

Where $A$ is an observable conjugate to the field $f(t)$. The change in $\langle A(t) \rangle$ to
first order in $f$ is:

$$\langle A(t) \rangle - \langle A \rangle_0 = \int_{-\infty}^{t} \chi_{AA}(t - t')\, f(t')\, dt'$$

Where the **response function** is:

$$\chi_{AA}(t) = \frac{i}{\hbar}\theta(t)\langle[A(t), A(0)]\rangle_0$$

### 13.2 Classical FDT

In the classical limit, the FDT takes a simpler form. The dynamic susceptibility
$\chi(\omega) = \chi'(\omega) + i\chi''(\omega)$ relates to the power spectrum $S(\omega)$ of
fluctuations:

$$S(\omega) = \frac{2k_B T}{\omega}\,\chi''(\omega)$$

For a harmonic oscillator with damping $\gamma$ and natural frequency $\omega_0$:

$$\chi''(\omega) = \frac{\gamma\omega}{(\omega_0^2 - \omega^2)^2 + \gamma^2\omega^2}$$

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

$$\langle V^2 \rangle = 4 \times 1.38 \times 10^{-23} \times 300 \times 10^4 \times 10^6$$

$$= 4 \times 1.38 \times 10^{-23} \times 3 \times 10^{12}$$

$$= 1.66 \times 10^{-10} \text{ V^2$$

$$V_{\text{rms} = \sqrt{1.66 \times 10^{-10}} \approx 1.29 \times 10^{-5} \text{ V = 12.9 \text{  \mu\text{V$$

This sets a fundamental limit on the sensitivity of electrical measurements.

</details>

<details>
<summary>Worked Example 13.2: Brownian Motion and Einstein Relation</summary>

The Einstein relation is a special case of the FDT for Brownian motion. The diffusion constant $D$
relates to the mobility $\mu$:

$$D = \mu k_B T$$

For a spherical particle of radius $r$ in a fluid with viscosity $\eta$:

$$\mu = \frac{1}{6\pi\eta r} \quad \text{(Stokes drag)$$

So $D = k_B T/(6\pi\eta r)$.

For a $1$ $\mu$M diameter sphere in water ($\eta = 10^{-3}$ Pa$\cdot$S) at $T = 300$ K:

$$D = \frac{1.38 \times 10^{-23} \times 300}{6\pi \times 10^{-3} \times 0.5 \times 10^{-6}} = \frac{4.14 \times 10^{-21}}{9.42 \times 10^{-9}} \approx 4.39 \times 10^{-13} \text{ m^2/\text{s$$

The mean squared displacement in time $t$ is $\langle x^2 \rangle = 2Dt$. In 1 second:
$\sqrt{\langle x^2 \rangle} \approx 0.94$ $\mu$M.

</details>

## 14. Microcanonical Ensemble

The **microcanonical ensemble** describes an isolated system with fixed total energy $E$Particle
number $N$And volume $V$.

### 14.1 Density of States

The number of microstates with energy between $E$ and $E + \delta E$ is:

$$\Omega(E, V, N) = \int_{E < \mathcal{H} < E + \delta E} \frac{d^{3N}q\, d^{3N}p}{N!h^{3N}}$$

The **entropy** (Boltzmann entropy):

$$S(E, V, N) = k_B \ln \Omega(E, V, N)$$

The **temperature** is defined via:

$$\frac{1}{T} = \frac{\partial S}{\partial E}$$

### 14.2 The Ideal Gas in the Microcanonical Ensemble

For $N$ non-interacting particles in volume $V$ with total energy $E$:

$$\Omega = \frac{V^N}{N!}\frac{(2\pi m E)^{3N/2}}{E\, \Gamma(3N/2)\, h^{3N}} \cdot \frac{\delta E}{E}$$

Using Stirling's approximation and the large-argument expansion of the Gamma function:

$$S = Nk_B\left[\ln\!\left(\frac{V}{N}\right) + \frac{3}{2}\ln\!\left(\frac{4\pi m E}{3Nh^2}\right) + \frac{5}{2}\right]$$

This is the **Sackur--Tetrode equation**, identical to the canonical ensemble result (as expected by
ensemble equivalence).

From $1/T = \partial S/\partial E$:

$$E = \frac{3}{2}Nk_B T$$

Reproducing the equipartition theorem.

### 14.3 Classical Virial Theorem

For a system with Hamiltonian
$\mathcal{H} = \sum_i p_i^2/(2m_i) + U(\mathbf{r}_1, \ldots, \mathbf{r}_N)$:

$$\left\langle \sum_i \mathbf{p}_i \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{p}_i} \right\rangle = 3Nk_B T$$

$$\left\langle \sum_i \mathbf{r}_i \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{r}_i} \right\rangle = -3Nk_B T$$

For a power-law potential $U \propto r^n$This gives:

$$\langle K \rangle = \frac{n}{2}\langle U \rangle$$

(For the harmonic oscillator, $n = 2$: $\langle K \rangle = \langle U \rangle$.)

<details>
<summary>Worked Example 14.1: Density of States for $N$ Harmonic Oscillators</summary>

For $N$ independent harmonic oscillators with frequency $\omega$Total energy $E$:

$$\Omega(E) = \frac{E^{N-1}}{(N-1)!\,(\hbar\omega)^N}$$

Proof: The number of ways to distribute $E/(\hbar\omega)$ energy quanta among $N$ oscillators is the
stars-and-bars problem:

$$\Omega = \binom{n + N - 1}{N - 1} = \frac{(n+N-1)!}{n!(N-1)!}$$

Where $n = E/(\hbar\omega)$. For large $n$ using Stirling's approximation:

$$S = k_B\left[(n+N)\ln(n+N) - n\ln n - N\ln N\right]$$

$$\frac{1}{T} = \frac{\partial S}{\partial E} = \frac{k_B}{\hbar\omega}\left[\ln(n+N) - \ln n\right] = \frac{k_B}{\hbar\omega}\ln\!\left(1 + \frac{N}{n}\right)$$

At high $T$ ($n \gg N$): $E \approx Nk_B T$ (equipartition, each oscillator has energy $k_B T$).

</details>

## 15. Quantum Statistics in Detail

### 15.1 Fermi--Dirac and Bose--Einstein Distributions

For non-interacting quantum particles:

$$\langle n_i \rangle = \frac{1}{e^{\beta(\epsilon_i - \mu)} \pm 1}$$

Where $+$ is for fermions (Fermi--Dirac) and $-$ for bosons (Bose--Einstein).

**Fermions** (half-integer spin): Pauli exclusion limits $\langle n_i \rangle \leq 1$.

**Bosons** (integer spin): No restriction on occupation number; $\langle n_i \rangle$ can diverge
when $\epsilon_i = \mu$.

### 15.2 The Fermi Gas

For a 3D gas of $N$ non-interacting fermions in volume $V$:

$$N = \sum_{\mathbf{k}} \frac{1}{e^{\beta(\hbar^2 k^2/2m - \mu)} + 1} \xrightarrow{\text{continuum} \frac{V}{(2\pi)^3}\int d^3k\, f(\epsilon_k)$$

The **Fermi energy** at $T = 0$:

$$\epsilon_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$$

Where $n = N/V$ is the number density. The **Fermi temperature** is $T_F = \epsilon_F/k_B$.

At low temperature ($T \ll T_F$), the Sommerfeld expansion gives:

$$E = \frac{3}{5}N\epsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{T}{T_F}\right)^2 + \cdots\right]$$

$$C_V = Nk_B\frac{\pi^2}{2}\frac{T}{T_F} + \cdots$$

The linear specific heat is a hallmark of degenerate Fermi systems.

### 15.3 The Bose Gas and Bose--Einstein Condensation

For bosons, the chemical potential must satisfy $\mu \leq \epsilon_0$ (ground state energy). When
$\mu \to \epsilon_0$A macroscopic fraction of particles condenses into the ground state.

The **critical temperature** for BEC in 3D:

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

Where $\zeta(3/2) \approx 2.612$.

Below $T_c$The condensate fraction is:

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

<details>
<summary>Worked Example 15.1: Fermi Energy of Copper</summary>

Copper has one conduction electron per atom, atomic mass $63.5$ g/mol, density $8.96$ g/cm$^3$.

$$n = \frac{8.96 \times 10^3 \text{ kg/m^3}{63.5 \times 10^{-3} \text{ kg/mol} \times N_A = 1.41 \times 10^{29} \text{ m^{-3} \times 6.022 \times 10^{23} = 8.49 \times 10^{28} \text{ m^{-3}$$

$$\epsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 \times 8.49 \times 10^{28})^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}} \times (2.52 \times 10^{30})^{2/3}$$

$$= \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 1.846 \times 10^{20}$$

$$= 6.11 \times 10^{-39} \times 1.846 \times 10^{20} = 1.13 \times 10^{-18} \text{ J$$

$$T_F = \frac{1.13 \times 10^{-18}}{1.38 \times 10^{-23}} \approx 81\,900 \text{ K$$

This is enormously higher than room temperature, confirming that conduction electrons in metals form
a highly degenerate Fermi gas.

</details>

<details>
<summary>Worked Example 15.2: BEC in a Trap</summary>

For $N = 10^6$ rubidium-87 atoms in a harmonic trap with frequency $\bar{\omega}/(2\pi) = 100$ Hz:

In a harmonic trap, the density of states is
$g(\epsilon) = \epsilon^2/(2\hbar^3\bar{\omega}^3)$Giving:

$$T_c = \frac{\hbar\bar{\omega}}{k_B}\left(\frac{6N}{\pi^2\zeta(3)}\right)^{1/3}$$

$$= \frac{1.055 \times 10^{-34} \times 2\pi \times 100}{1.38 \times 10^{-23}}\left(\frac{6 \times 10^6}{\pi^2 \times 1.202}\right)^{1/3}$$

$$= \frac{6.63 \times 10^{-32}}{1.38 \times 10^{-23}} \times (5.07 \times 10^5)^{1/3}$$

$$= 4.81 \times 10^{-9} \times 79.7 \approx 383 \text{ nK$$

This is consistent with the 1995 Cornell--Wieman BEC experiment.

</details>

## 16. The Debye Model of Solids

### 16.1 From Einstein to Debye

The **Einstein model** treats all atoms as independent quantum oscillators with the same frequency
$\omega_E$:

$$C_V = 3Nk_B\left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$$

Where $\theta_E = \hbar\omega_E/k_B$. This correctly predicts $C_V \to 0$ as $T \to 0$But gives
$C_V \propto e^{-\theta_E/T}$ at low $T$Whereas experiments show $C_V \propto T^3$.

The **Debye model** treats the lattice vibrations as a continuum of phonon modes with a cutoff
frequency $\omega_D$:

$$g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3} \quad \text{for  0 \leq \omega \leq \omega_D$$

Where $v_s$ is the average sound speed. The cutoff is determined by the total number of modes:

$$\int_0^{\omega_D} g(\omega)\,d\omega = 3N \implies \omega_D = v_s(6\pi^2 N/V)^{1/3}$$

### 16.2 Debye Specific Heat

The internal energy:

$$E = \int_0^{\omega_D} \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}\, g(\omega)\, d\omega = \frac{3V\hbar}{2\pi^2 v_s^3}\int_0^{\omega_D} \frac{\omega^3}{e^{\beta\hbar\omega} - 1}\, d\omega$$

With $x = \hbar\omega/k_BT$ and $\theta_D = \hbar\omega_D/k_B$ (Debye temperature):

$$E = 9Nk_BT\left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^3}{e^x - 1}\, dx$$

The specific heat:

$$C_V = 9Nk_B\left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\, dx$$

**Low-temperature limit** ($T \ll \theta_D$):

$$C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\theta_D}\right)^3 \propto T^3$$

**High-temperature limit** ($T \gg \theta_D$): $C_V \to 3Nk_B$ (Dulong--Petit).

<details>
<summary>Worked Example 16.1: Debye Temperature of Aluminum</summary>

Aluminum has $M = 27$ g/mol, $\rho = 2.70$ g/cm$^3$$v_s \approx 6420$ m/s.

$$n = \frac{\rho N_A}{M} = \frac{2.70 \times 10^3 \times 6.022 \times 10^{23}}{27 \times 10^{-3}} = 6.02 \times 10^{28} \text{ m^{-3}$$

$$\omega_D = v_s(6\pi^2 n)^{1/3} = 6420 \times (6\pi^2 \times 6.02 \times 10^{28})^{1/3}$$

$$= 6420 \times (3.56 \times 10^{30})^{1/3} = 6420 \times 1.526 \times 10^{10} = 9.80 \times 10^{13} \text{ rad/s$$

$$\theta_D = \frac{\hbar\omega_D}{k_B} = \frac{1.055 \times 10^{-34} \times 9.80 \times 10^{13}}{1.38 \times 10^{-23}} \approx 748 \text{ K$$

The experimental value is $\theta_D \approx 428$ K. The discrepancy arises from the oversimplified
single sound-speed approximation.

</details>

## 17. Thermodynamic Response Functions

### 17.1 General Relations

Response functions measure how thermodynamic quantities change with state variables. The most
important are:

- Heat capacity: $C_X = T(\partial S/\partial T)_X$
- Compressibility: $\kappa_T = -\frac{1}{V}(\partial V/\partial P)_T$
- Thermal expansion: $\alpha = \frac{1}{V}(\partial V/\partial T)_P$

These satisfy the identity:

$$C_P - C_V = TV\frac{\alpha^2}{\kappa_T}$$

For an ideal gas ($\alpha = 1/T$$\kappa_T = 1/P$):

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

4. **Mean-field overestimates $T_c$**: The mean-field approximation $T_c^{\text{MF} = zJ/k_B$
   systematically overestimates the true critical temperature because it neglects fluctuations. The
   error is largest in low dimensions (where fluctuations are strongest) and vanishes above the
   upper critical dimension ($d = 4$ for short-range Ising).

5. **Classical vs. Quantum .../4-statistics-and-probability/2_statistics**: At temperatures much
   higher than the degeneracy temperature $T_F$ (fermions) or $T_c$ (bosons), both Fermi--Dirac and
   Bose--Einstein distributions reduce to the Maxwell--Boltzmann distribution. The quantum
   corrections are of order $n\lambda_{\text{dB}^3$ where $\lambda_{\text{dB} = h/\sqrt{2\pi mk_BT}$
   is the thermal de Broglie wavelength.

## Problems

<details>
<summary>Problem 1: Entropy of Mixing</summary>

Consider two ideal gases A and B, initially separated by a partition in a container of volume $V$.
Gas A has $N_A$ particles in volume $V_A$; gas B has $N_B$ particles in volume $V_B$With
$V_A + V_B = V$. The partition is removed and the gases mix isothermally at temperature $T$.

(a) Show that the entropy of mixing is:

$$\Delta S_{\text{mix} = -Nk_B\left[x\ln x + (1-x)\ln(1-x)\right] - Nk_B\left[y\ln y + (1-y)\ln(1-y)\right]$$

Where $x = N_A/N$$y = V_A/V$.

(b) Evaluate $\Delta S_{\text{mix}$ for $N_A = N_B = N_0$$V_A = V_B = V/2$ and show
$\Delta S_{\text{mix} = 2N_0k_B\ln 2$.

(c) **Gibbs paradox**: If gases A and B are identical, the actual entropy change is zero. Explain
how the factor of $1/N!$ in the partition function resolves this paradox.

**Solution:**

(a) For ideal gas A initially in $V_A$ and finally in $V$:

$$\Delta S_A = N_Ak_B\ln\frac{V}{V_A} = N_Ak_B\ln\frac{1}{y} = -Nk_B x\ln y$$

Similarly $\Delta S_B = -Nk_B(1-x)\ln(1-y)$. The total:

$$\Delta S = -Nk_B[x\ln y + (1-x)\ln(1-y)]$$

Note: The more general form includes contributions from the number of particles.

(b) With $x = 1/2$$y = 1/2$:

$$\Delta S = -2N_0k_B\left(\frac{1}{2}\ln\frac{1}{2}\right) = -2N_0k_B\left(-\frac{1}{2}\ln 2\right) = 2N_0k_B\ln 2$$

(c) The Sackur--Tetrode equation includes $-Nk_B\ln N + Nk_B = -k_B\ln N!$Which accounts for the
indistinguishability of particles. For identical gases, the "before" and "after" states are the same
(same $N$$V$$E$), so $\Delta S = 0$. Without the $1/N!$ factor, we would get the same non-zero
result for mixing identical gases — Gibbs' paradox.

</details>

<details>
<summary>Problem 2: Ising Model Phase Diagram</summary>

Consider the mean-field Ising model on a square lattice ($z = 4$).

(a) Find the magnetization $m$ as a function of reduced temperature $t = T/T_c^{\text{MF}$ in zero
field.

(b) Find the susceptibility $\chi$ on both sides of $T_c$.

(c) Calculate the specific heat jump at $T_c$.

**Solution:**

(a) The self-consistency equation is $m = \tanh(4\beta Jm) = \tanh(m/t)$ since
$T_c^{\text{MF} = 4J/k_B$.

For $t < 1$: $m$ satisfies $m = \tanh(m/t)$. For small $m/t$:

$$m \approx \frac{m}{t} - \frac{1}{3}\left(\frac{m}{t}\right)^3 \implies m = \sqrt{3(1-t)}\, t \approx \sqrt{3}\,(1-t)^{1/2} \text{ near  T_c$$

(b) From the Landau analysis: $\chi \propto |T - T_c|^{-1}$I.e., $\gamma = 1$.

Explicitly: $\chi^{-1} = k_B T(1 - t^{-1}\text{sech^2(m/t))$. Near $T_c$: $\chi \sim 1/(T - T_c)$.

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

(c) $u = aT^4$ with $a = 7.566 \times 10^{-16}$ J$\cdot$m$^{-3}$$\cdot$K$^{-4}$:

$$u = 7.566 \times 10^{-16} \times (2.725)^4 = 7.566 \times 10^{-16} \times 55.15 = 4.17 \times 10^{-14} \text{ J/m^3$$

Number density:

$$n_\gamma = \frac{2\zeta(3)}{\pi^2}\left(\frac{k_BT}{\hbar c}\right)^3 = \frac{2 \times 1.202}{\pi^2}\left(\frac{1.38 \times 10^{-23} \times 2.725}{1.055 \times 10^{-34} \times 3 \times 10^8}\right)^3$$

$$= 0.244 \times (1.193 \times 10^3)^3 \approx 0.244 \times 1.698 \times 10^9 \approx 4.14 \times 10^8 \text{ m^{-3}$$

</details>

<details>
<summary>Problem 4: Chemical Equilibrium</summary>

For the dissociation reaction $\text{H_2 \rightleftharpoons 2\text{H$The equilibrium constant is:

$$K(T) = \frac{n_H^2}{n_{H_2}} = \left(\frac{m_H k_B T}{2\pi\hbar^2}\right)^{3/2}\frac{(j_H + 1)^2}{2j_{H_2} + 1}\frac{1}{Z_{\text{rot}Z_{\text{vib}}e^{-D/(k_BT)}$$

Where $D = 4.52$ eV is the dissociation energy, $j_H = 1/2$$j_{H_2} = 1$.

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

For a gas at $P = 1$ atm, $n_{\text{total} = P/(k_BT) \approx 2.4 \times 10^{25}$ m$^{-3}$. Setting
$n_{H_2} \approx n_{\text{total}/2$:

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

## 18. Quantum Statistical Mechanics: Advanced Topics

### 18.1 Density Matrix and Ensemble Averages

The **density matrix** (or density operator) provides the most general description of a quantum
system, encompassing both pure and mixed states:

$$\hat{\rho} = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|$$

Where $p_i$ is the probability of being in state $|\psi_i\rangle$.

**Properties:**

- $\text{Tr(\hat{\rho}) = 1$ (normalisation)
- $\hat{\rho}^\dagger = \hat{\rho}$ (hermiticity)
- $\hat{\rho}^2 = \hat{\rho}$ if and only if the state is pure
- $\text{Tr(\hat{\rho}^2) \leq 1$ with equality for pure states

**Ensemble averages:** $\langle \hat{A} \rangle = \text{Tr(\hat{\rho}\hat{A})$.

**Canonical ensemble:** $\hat{\rho} = \frac{1}{Z}\exp(-\beta\hat{H})$ where
$Z = \text{Tr[\exp(-\beta\hat{H})]$.

**Von Neumann entropy:** $S = -k_B\text{Tr(\hat{\rho}\ln\hat{\rho})$.

For a pure state: $S = 0$. For a thermal state: $S > 0$ (maximum for the maximally mixed state).

### 18.2 Quantum Ideal Gases: General Treatment

For a system of non-interacting quantum particles, the grand canonical partition function is:

$$\ln\mathcal{Z} = \pm\sum_{\mathbf{k}}\ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})$$

Where $+$ is for fermions and $-$ for bosons.

The thermodynamic quantities follow from:

$$N = \sum_{\mathbf{k}}\frac{1}{e^{\beta(\epsilon_{\mathbf{k}} - \mu)} \pm 1}, \quad E = \sum_{\mathbf{k}}\frac{\epsilon_{\mathbf{k}}}{e^{\beta(\epsilon_{\mathbf{k}} - \mu)} \pm 1}$$

$$\Omega = -PV = \mp k_BT\sum_{\mathbf{k}}\ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})$$

In the continuum limit:

$$\Omega = \mp k_BT\int_0^\infty g(\epsilon)\ln(1 \mp e^{-\beta(\epsilon - \mu)})\,d\epsilon$$

### 18.3 Ideal Bose Gas Below $T_c$

Below the Bose--Einstein condensation temperature, the chemical potential is pinned at
$\mu = \epsilon_0$ (the ground state energy, taken as zero). The integral for $N$ splits into
condensate and excited fractions:

$$N = N_0 + N_{\text{ex} = N_0 + \int_0^\infty \frac{g(\epsilon)}{e^{\beta\epsilon} - 1}\,d\epsilon$$

For a 3D gas: $g(\epsilon) = (2m)^{3/2}V/(4\pi^2\hbar^3)\sqrt{\epsilon}$.

The excited fraction: $N_{\text{ex}/N = (T/T_c)^{3/2}$.

**Condensate fraction:** $N_0/N = 1 - (T/T_c)^{3/2}$.

**Low-$T$ properties of the condensate:**

- Ground state energy: $E_0 = 0$ (no kinetic energy)
- Heat capacity: $C_V \propto T^3$ (from excited states only)
- The condensate does not contribute to $C_V$ (all particles in the ground state have fixed energy)

### 18.4 Landau Levels and Quantum Oscillations

In a magnetic field $\mathbf{B} = B\hat{z}$The energy levels of a free electron gas become quantised
into **Landau levels**:

$$\epsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c + \frac{\hbar^2 k_z^2}{2m_e}, \quad \omega_c = \frac{eB}{m_e}$$

The density of states becomes a series of peaks (van Hove singularities) at each Landau level:

$$g(\epsilon) = \frac{eB}{2\pi^2\hbar}\sum_n \frac{1}{\sqrt{\epsilon - (n + 1/2)\hbar\omega_c}}$$

**Shubnikov--de Haas oscillations:** As $B$ is varied, Landau levels pass through the Fermi energy,
causing oscillations in the resistivity with period:

$$\Delta\!\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\text{ext}}$$

Where $A_{\text{ext}$ is the extremal cross-sectional area of the Fermi surface perpendicular to
$\mathbf{B}$.

**de Haas--van Alphen oscillations:** Similar oscillations in the magnetisation (and hence the
susceptibility). These provide the most precise tool for mapping Fermi surface geometry.

<details>
<summary>Worked Example 18.1: Density Matrix of a Two-Level System</summary>

Consider a spin-1/2 particle in a magnetic field $B\hat{z}$ at temperature $T$.

The Hamiltonian: $\hat{H} = -\gamma B\hbar\hat{S}_z$ with eigenstates $|\uparrow\rangle$ (energy
$-\gamma\hbar B/2$) and $|\downarrow\rangle$ (energy $+\gamma\hbar B/2$).

The density matrix:

$$\hat{\rho} = \frac{1}{Z}\begin{pmatrix} e^{\beta\gamma\hbar B/2} & 0 \\ 0 & e^{-\beta\gamma\hbar B/2} \end{pmatrix} = \begin{pmatrix} p_\uparrow & 0 \\ 0 & p_\downarrow \end{pmatrix}$$

Where $p_\uparrow = e^{\beta\gamma\hbar B/2}/(2\cosh(\beta\gamma\hbar B/2))$.

At high $T$: $p_\uparrow \approx p_\downarrow \approx 1/2$ (maximally mixed, $S = k_B\ln 2$).

At low $T$ ($\gamma\hbar B \gg k_BT$): $p_\uparrow \to 1$$p_\downarrow \to 0$ (nearly pure,
$S \to 0$).

The magnetisation:
$\langle S_z \rangle = \text{Tr(\hat{\rho}\hat{S}_z) = \frac{\hbar}{2}(p_\uparrow - p_\downarrow) = \frac{\hbar}{2}\tanh\!\left(\frac{\gamma\hbar B}{2k_BT}\right)$.

The entropy: $S = -k_B[p_\uparrow\ln p_\uparrow + p_\downarrow\ln p_\downarrow]$.

At $T = 0$: $S = 0$ (ground state, pure). At $T = \infty$: $S = k_B\ln 2$ (maximally mixed).

</details>

<details>
<summary>Worked Example 18.2: Blackbody Radiation in $d$ Dimensions</summary>

The photon density of states in $d$ dimensions scales as $g(\omega) \propto \omega^{d-1}$.

The energy density:

$$u_d = \int_0^\infty \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}\,g(\omega)\,d\omega \propto T^{d+1}$$

The Stefan--Boltzmann law in $d$ dimensions: $u_d \propto T^{d+1}$.

For $d = 1$: $u \propto T^2$. For $d = 2$: $u \propto T^3$. For $d = 3$: $u \propto T^4$ (the
standard result).

The Wien displacement law also changes: $\lambda_{\max} T \propto d$ (the peak wavelength scales
linearly with dimension).

In $d = 1$ (nanotubes): the blackbody spectrum peaks at lower temperatures and has a steeper
low-frequency rise. In $d = 2$ (graphene): the specific heat per area is
$C/A = (2\pi^2 k_B^4)/(15\hbar^3 c^2)\,T^3 \propto T^3$ (Debye $T^3$ in 2D).

</details>

## 19. Irreversible Thermodynamics and Fluctuations

### 19.1 Fluctuation-Dissipation in the Time Domain

The classical fluctuation-dissipation theorem relates the autocorrelation function of a fluctuating
variable to the linear response function:

$$\chi(t) = \frac{1}{k_BT}\frac{d}{dt}\langle A(t)A(0)\rangle$$

For example, the velocity autocorrelation function of a Brownian particle:

$$\langle v(t)v(0)\rangle = \frac{k_BT}{m}e^{-t/\tau}$$

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

$$\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}$$

Where the average is over many realisations of a process that drives the system from equilibrium
state $A$ to equilibrium state $B$ in time $\tau$.

**Consequences:**

- By Jensen's inequality: $\langle W \rangle \geq \Delta F$ (the average work is never less than the
  free energy change).
- For quasi-static processes: $\langle W \rangle = \Delta F$ and the distribution of $W$ is a delta
  function.
- For fast (far-from-equilibrium) processes: $\langle W \rangle > \Delta F$But the exponential
  average still equals $e^{-\beta\Delta F}$.

This remarkable result has been verified experimentally in single-molecule pulling experiments (RNA,
DNA hairpins) using optical tweezers.

### 19.4 Crooks Fluctuation Theorem

The **Crooks theorem** (1999) relates the work distributions for forward and reverse processes:

$$\frac{P_F(W)}{P_R(-W)} = e^{\beta(W - \Delta F)}$$

Where $P_F(W)$ is the probability distribution of work for the forward process and $P_R(W)$ for the
reverse process.

This implies the Jarzynski equality as a special case:

$$\int P_F(W)\,e^{-\beta W}\,dW = \int P_R(-W)\,e^{-\beta\Delta F}\,dW = e^{-\beta\Delta F}$$

<details>
<summary>Worked Example 19.1: Jarzynski Equality for a Two-Level System</summary>

Consider a two-level system with $\epsilon_1 = 0$ and $\epsilon_2 = \epsilon$Initially in
equilibrium at inverse temperature $\beta$.

The free energy: $F = -k_BT\ln Z = -k_BT\ln(1 + e^{-\beta\epsilon})$.

Now the energy gap is suddenly changed from $\epsilon$ to $\epsilon'$. The work done is:

$$W = \begin{cases} 0 & \text{with prob.  p_1 = 1/Z \\ \epsilon' - \epsilon & \text{with prob.  p_2 = e^{-\beta\epsilon}/Z \end{cases}$$

The Jarzynski average:

$$\langle e^{-\beta W}\rangle = p_1 \cdot e^0 + p_2 \cdot e^{-\beta(\epsilon' - \epsilon)} = \frac{1}{Z} + \frac{e^{-\beta\epsilon'}}{Z} = \frac{1 + e^{-\beta\epsilon'}}{Z}$$

The new free energy: $F' = -k_BT\ln(1 + e^{-\beta\epsilon'})$.

$$e^{-\beta\Delta F} = e^{-\beta(F' - F)} = e^{-\beta F'}e^{\beta F} = (1 + e^{-\beta\epsilon'})\frac{1}{Z} = \langle e^{-\beta W}\rangle \quad \checkmark$$

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

$$E = \int_0^\tau \frac{\partial F}{\partial \lambda(t)}\,\dot{\lambda}(t)\,dt$$

For a quasi-static process: $E \to \Delta F$ (minimum possible).

**Fredkin and Toffoli gates** are examples of logically reversible logic gates. Any computation can
be made reversible by saving all intermediate results and running the computation in reverse to
restore the input tape.

## Worked Examples

### Example 1: Carnot efficiency

**Problem.** A Carnot engine operates between $500 \mathrm{ K}$ and $300 \mathrm{ K}$. Find the
maximum efficiency.

**Solution.** $\eta = 1 - T_C/T_H = 1 - 300/500 = 1 - 0.6 = 0.4 = 40\%$.

$\blacksquare$

### Example 2: Entropy change

**Problem.** Find the entropy change when $2 \mathrm{ mol}$ of ice at $0°\mathrm{C}$ melts
($\Delta H_{\text{fus}} = 6.01 \mathrm{ kJ/mol}$).

**Solution.**
$\Delta S = \frac{Q}{T} = \frac{n \Delta H_{\text{fus}}}{T} = \frac{2 \times 6010}{273} = 44.0 \mathrm{ J/K}$.

$\blacksquare$

## Summary

- First law: $\Delta U = Q - W$; conservation of energy.
- Second law: $\Delta S_{\text{universe}} \geq 0$; entropy of an isolated system never decreases.
- Carnot efficiency: $\eta = 1 - T_C/T_H$ (maximum possible for given temperatures).
- Statistical mechanics: $S = k_B \ln \Omega$; Boltzmann distribution:
  $p_i \propto e^{-E_i/(k_BT)}$.

## Cross-References

| Topic             | Site       | Link                                                                                                       |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Thermal Physics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/thermal-physics/01-thermal-properties) |
| [Thermal Physics] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/2-particulate-nature-of-matter/1_thermodynamics)             |
| [Thermal Physics] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/4-thermal-physics/1_heat-and-gases)                        |
| [Thermal Physics] | University | [View](https://university.wyattau.com/docs/physics/2-thermal-physics/1_thermal-physics)                    |
