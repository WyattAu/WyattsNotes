---
title: Thermodynamics and Statistical Mechanics
date: 2026-04-24T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: thermodynamics-and-statistical-mechanics
---

## 1. The Laws of Thermodynamics

### 1.1 Zeroth Law

**Zeroth Law:** If system $A$ is in thermal equilibrium with system $B$, and $B$ is in thermal
equilibrium with system $C$, then $A$ is in thermal equilibrium with $C$.

This law establishes the existence of **temperature** as an equivalence relation. Two systems are in
thermal equilibrium if and only if they are at the same temperature.

### 1.2 First Law

**First Law (Conservation of Energy):** The change in internal energy of a system equals the heat
added to the system minus the work done by the system:

$$dU = \delta Q - \delta W$$

where $\delta Q$ and $\delta W$ are **inexact differentials** (path-dependent), while $dU$ is an
exact differential (state function).

For a quasi-static process with pressure-volume work:

$$\delta W = P\,dV$$

so the first law becomes:

$$dU = \delta Q - P\,dV$$

**Definition (Heat capacity).** The heat capacity at constant volume and constant pressure are:

$$C_V = \left(\frac{\partial U}{\partial T}\right)_V, \quad C_P = \left(\frac{\partial H}{\partial T}\right)_P$$

where $H = U + PV$ is the enthalpy.

### 1.3 Second Law

**Second Law (Clausius Statement):** Heat cannot spontaneously flow from a colder body to a hotter
body without external work.

**Second Law (Kelvin-Planck Statement):** No cyclic process can convert heat entirely into work.

**Theorem 1.1 (Carnot's Theorem).** No engine operating between two heat reservoirs is more
efficient than a Carnot engine. All reversible engines operating between the same two reservoirs
have the same efficiency.

**Proof.** Suppose engine $A$ (claimed more efficient than Carnot) operates between reservoirs at
$T_h$ and $T_c$. Let $A$ extract heat $Q_h$ from the hot reservoir, do work $W$, and reject heat
$Q_c = Q_h - W$ to the cold reservoir. Run a Carnot engine $C$ in reverse as a refrigerator using
work $W$ from $A$: it extracts $Q_c'$ from the cold reservoir and delivers $Q_h' = W + Q_c'$ to the
hot reservoir. If $\eta_A \gt \eta_C$, then $Q_c \lt Q_c'$, so the combined system transfers net
heat from cold to hot with no external work, violating the Clausius statement. $\blacksquare$

### 1.4 Entropy and the Clausius Inequality

**Definition (Entropy).** For a reversible process, the entropy change is:

$$dS = \frac{\delta Q_{\mathrm{rev}}}{T}$$

**Clausius Inequality:** For any cyclic process:

$$\oint \frac{\delta Q}{T} \leq 0$$

with equality if and only if the process is reversible.

**Proof of entropy increase for irreversible processes.** Consider a system undergoing an
irreversible process from state $1$ to state $2$, then returning via a reversible process. By the
Clausius inequality:

$$\int_1^2 \frac{\delta Q_{\mathrm{irrev}}}{T} + \int_2^1 \frac{\delta Q_{\mathrm{rev}}}{T} \leq 0$$

$$\int_1^2 \frac{\delta Q_{\mathrm{irrev}}}{T} - \int_1^2 \frac{\delta Q_{\mathrm{rev}}}{T} \leq 0$$

Since $dS = \delta Q_{\mathrm{rev}}/T$:

$$\Delta S \geq \int_1^2 \frac{\delta Q}{T}$$

with equality for reversible processes. $\blacksquare$

### 1.5 Third Law

**Third Law (Nernst Heat Theorem):** As $T \to 0$, the entropy of a perfect crystal approaches zero:

$$\lim_{T \to 0} S(T) = 0$$

This sets an absolute reference for entropy and implies that it is impossible to reach absolute zero
in a finite number of steps.

## 2. Thermodynamic Potentials

### 2.1 The Four Potentials

The internal energy $U$ is the fundamental thermodynamic potential. By performing Legendre
transformations on $U(S, V, N)$, we obtain the other potentials:

| Potential             | Symbol | Natural Variables | Differential                    |
| --------------------- | ------ | ----------------- | ------------------------------- |
| Internal energy       | $U$    | $S, V, N$         | $dU = T\,dS - P\,dV + \mu\,dN$  |
| Enthalpy              | $H$    | $S, P, N$         | $dH = T\,dS + V\,dP + \mu\,dN$  |
| Helmholtz free energy | $F$    | $T, V, N$         | $dF = -S\,dT - P\,dV + \mu\,dN$ |
| Gibbs free energy     | $G$    | $T, P, N$         | $dG = -S\,dT + V\,dP + \mu\,dN$ |

The Legendre transforms are:

$$H = U + PV, \quad F = U - TS, \quad G = H - TS = U - TS + PV$$

### 2.2 Derivation of the Differential Relations

Starting from the first law for a reversible process:

$$dU = T\,dS - P\,dV + \mu\,dN$$

This tells us $T = (\partial U/\partial S)_{V,N}$, $P = -(\partial U/\partial V)_{S,N}$, and
$\mu = (\partial U/\partial N)_{S,V}$.

For enthalpy, $H = U + PV$, so:

$$dH = dU + P\,dV + V\,dP = T\,dS + V\,dP + \mu\,dN$$

For Helmholtz free energy, $F = U - TS$, so:

$$dF = dU - T\,dS - S\,dT = -S\,dT - P\,dV + \mu\,dN$$

For Gibbs free energy, $G = U - TS + PV$, so:

$$dG = -S\,dT + V\,dP + \mu\,dN$$

### 2.3 Physical Meaning of the Potentials

- $U$: Total energy at constant entropy and volume.
- $H$: Total energy plus the work needed to make room for the system ($PV$). Useful for
  constant-pressure processes (e.g., chemical reactions at atmospheric pressure).
- $F$: The maximum work extractable from a system at constant temperature. Minimised at equilibrium
  for systems in contact with a heat bath at fixed $T, V$.
- $G$: The maximum non-expansion work extractable. Minimised at equilibrium for systems at fixed
  $T, P$.

### 2.4 Equilibrium Conditions

**Theorem 2.1.** At equilibrium:

- For an isolated system: $S$ is maximised (at fixed $U, V, N$).
- For a system in contact with a heat bath at temperature $T$ and pressure $P$: $G$ is minimised.
- For a system at constant $T, V$: $F$ is minimised.

**Proof (for $G$).** Consider a system in contact with a reservoir at $T_0, P_0$. The total entropy
of system plus reservoir is $S_{\mathrm{tot}} = S + S_R$. At equilibrium, $S_{\mathrm{tot}}$ is
maximised, so $\delta S_{\mathrm{tot}} \leq 0$ for any variation. Since $dS_R = \delta Q_R / T_0$,
and by energy conservation $\delta Q_R = -\delta Q = -(dU + P_0\,dV)$:

$$\delta S_{\mathrm{tot}} = \delta S - \frac{1}{T_0}(dU + P_0\,dV) = -\frac{1}{T_0}\delta G \leq 0$$

where $\delta G = \delta U + P_0\,\delta V - T_0\,\delta S$. Hence $\delta G \geq 0$, so $G$ is
minimised. $\blacksquare$

## 3. Maxwell Relations

### 3.1 Derivation from Exact Differentials

Since $U, H, F, G$ are state functions, their differentials are exact. By the symmetry of second
derivatives (Euler's reciprocity), if $dz = M\,dx + N\,dy$, then:

$$\left(\frac{\partial M}{\partial y}\right)_x = \left(\frac{\partial N}{\partial x}\right)_y$$

Applying this to each thermodynamic potential:

**From $dU = T\,dS - P\,dV + \mu\,dN$:**

$$\left(\frac{\partial T}{\partial V}\right)_{S,N} = -\left(\frac{\partial P}{\partial S}\right)_{V,N}$$

$$\left(\frac{\partial T}{\partial N}\right)_{S,V} = \left(\frac{\partial \mu}{\partial S}\right)_{V,N}$$

$$\left(\frac{\partial P}{\partial N}\right)_{S,V} = -\left(\frac{\partial \mu}{\partial V}\right)_{S,N}$$

**From $dH = T\,dS + V\,dP + \mu\,dN$:**

$$\left(\frac{\partial T}{\partial P}\right)_{S,N} = \left(\frac{\partial V}{\partial S}\right)_{P,N}$$

**From $dF = -S\,dT - P\,dV + \mu\,dN$:**

$$\left(\frac{\partial S}{\partial V}\right)_{T,N} = \left(\frac{\partial P}{\partial T}\right)_{V,N}$$

**From $dG = -S\,dT + V\,dP + \mu\,dN$:**

$$\left(\frac{\partial S}{\partial P}\right)_{T,N} = -\left(\frac{\partial V}{\partial T}\right)_{P,N}$$

### 3.2 Applications

**Derivation of the heat capacity relation.** From $dU = T\,dS - P\,dV$:

$$C_V = T\left(\frac{\partial S}{\partial T}\right)_V, \quad C_P = T\left(\frac{\partial S}{\partial T}\right)_P$$

Using the chain rule and Maxwell relations:

$$C_P - C_V = T\left(\frac{\partial P}{\partial T}\right)_V \left(\frac{\partial V}{\partial T}\right)_P$$

**Proof.** Expand $S(T, V)$ as $S(T, P(T, V))$:

$$\left(\frac{\partial S}{\partial T}\right)_V = \left(\frac{\partial S}{\partial T}\right)_P + \left(\frac{\partial S}{\partial P}\right)_T \left(\frac{\partial P}{\partial T}\right)_V$$

Multiply by $T$:

$$C_V = C_P + T\left(\frac{\partial S}{\partial P}\right)_T \left(\frac{\partial P}{\partial T}\right)_V$$

Using the Maxwell relation $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$:

$$C_V = C_P - T\left(\frac{\partial V}{\partial T}\right)_P \left(\frac{\partial P}{\partial T}\right)_V$$

$\blacksquare$

## 4. Heat Engines and Refrigerators

### 4.1 The Carnot Cycle

The Carnot cycle consists of four reversible stages operating between temperatures $T_h$ (hot) and
$T_c$ (cold):

1. **Isothermal expansion** at $T_h$: absorb heat $Q_h$ from hot reservoir.
2. **Adiabatic expansion**: temperature drops from $T_h$ to $T_c$.
3. **Isothermal compression** at $T_c$: reject heat $Q_c$ to cold reservoir.
4. **Adiabatic compression**: temperature rises from $T_c$ to $T_h$.

The efficiency is:

$$\eta = 1 - \frac{Q_c}{Q_h} = 1 - \frac{T_c}{T_h}$$

**Derivation.** For the isothermal steps, $\Delta S_{\mathrm{hot}} = Q_h/T_h$ and
$\Delta S_{\mathrm{cold}} = -Q_c/T_c$. Since entropy is a state function and the cycle returns to
the initial state, $\Delta S_{\mathrm{total}} = 0$, so $Q_h/T_h = Q_c/T_c$. $\blacksquare$

### 4.2 Heat Pumps and Refrigerators

A **refrigerator** is a Carnot engine run in reverse. The **coefficient of performance (COP)**:

$$\mathrm{COP}_{\mathrm{ref}} = \frac{Q_c}{W} = \frac{T_c}{T_h - T_c}$$

A **heat pump** heats the hot reservoir:

$$\mathrm{COP}_{\mathrm{hp}} = \frac{Q_h}{W} = \frac{T_h}{T_h - T_c}$$

### 4.3 The Otto and Diesel Cycles

**Otto cycle** (idealised petrol engine): two isochoric and two adiabatic processes.

$$\eta_{\mathrm{Otto}} = 1 - \frac{1}{r^{\gamma - 1}}$$

where $r = V_{\mathrm{max}}/V_{\mathrm{min}}$ is the compression ratio and $\gamma = C_P/C_V$.

**Diesel cycle:** one isobaric, two adiabatic, and one isochoric process:

$$\eta_{\mathrm{Diesel}} = 1 - \frac{1}{r^{\gamma - 1}} \cdot \frac{\alpha^\gamma - 1}{\gamma(\alpha - 1)}$$

where $\alpha = V_{\mathrm{max}}/V_{\mathrm{cutoff}}$ is the cutoff ratio.

## 5. Entropy and Free Energy

### 5.1 Statistical Definition of Entropy

**Definition (Boltzmann Entropy).** For a macrostate with $\Omega$ accessible microstates:

$$S = k_B \ln \Omega$$

where $k_B = 1.381 \times 10^{-23}$ J/K is Boltzmann's constant.

**Justification.** Consider two independent systems $A$ and $B$. The total number of microstates is
$\Omega_{AB} = \Omega_A \cdot \Omega_B$. We require $S_{AB} = S_A + S_B$ (additivity). The logarithm
is the unique function satisfying $f(xy) = f(x) + f(y)$. $\blacksquare$

### 5.2 Gibbs Entropy Formula

For a system with probability $p_i$ of being in microstate $i$:

$$S = -k_B \sum_i p_i \ln p_i$$

This reduces to the Boltzmann formula when all accessible microstates are equally probable:
$p_i = 1/\Omega$.

**Derivation from Boltzmann.** For $N$ identical systems distributed among $\Omega$ equally probable
microstates, the most probable macrostate has $n_i = N/\Omega$ systems in each microstate. The
number of ways to arrange this is:

$$W = \frac{N!}{\prod_i n_i!}$$

Using Stirling's approximation $\ln N! \approx N \ln N - N$:

$$\ln W = N \ln N - N - \sum_i (n_i \ln n_i - n_i) = -N \sum_i p_i \ln p_i$$

where $p_i = n_i/N$. Multiplying by $k_B$ gives the Gibbs entropy. $\blacksquare$

### 5.3 Helmholtz Free Energy and the Partition Function

The Helmholtz free energy connects thermodynamics to statistical mechanics:

$$F = -k_B T \ln Z$$

where $Z = \sum_i e^{-\beta E_i}$ is the canonical partition function and $\beta = 1/(k_B T)$.

**Derivation.** From the Gibbs entropy with the Boltzmann distribution $p_i = e^{-\beta E_i}/Z$:

$$S = -k_B \sum_i \frac{e^{-\beta E_i}}{Z} \left(-\beta E_i - \ln Z\right) = k_B \beta \langle E \rangle + k_B \ln Z$$

Since $\langle E \rangle = U$ and $k_B \beta = 1/T$:

$$S = \frac{U}{T} + k_B \ln Z$$

$$F = U - TS = U - T\left(\frac{U}{T} + k_B \ln Z\right) = -k_B T \ln Z$$

$\blacksquare$

## 6. Phase Transitions

### 6.1 Classification of Phase Transitions

**First-order transition:** Discontinuity in first derivatives of $G$ (e.g., $S$, $V$). There is a
latent heat $L = T \Delta S$.

**Second-order (continuous) transition:** First derivatives are continuous, but second derivatives
(e.g., $C_P$, $\kappa_T$, $\alpha$) diverge or are discontinuous.

**Ehrenfest classification:** An $n$-th order transition has discontinuities in the $n$-th
derivatives of $G$, with all lower derivatives continuous.

### 6.2 The Clausius-Clapeyron Equation

For a first-order phase transition between phases $\alpha$ and $\beta$ in equilibrium
($G_\alpha =
G_\beta$):

$$\frac{dP}{dT} = \frac{S_\beta - S_\alpha}{V_\beta - V_\alpha} = \frac{L}{T \Delta V}$$

where $L$ is the latent heat and $\Delta V = V_\beta - V_\alpha$.

**Derivation.** Along the coexistence curve, $dG_\alpha = dG_\beta$. Since $dG = -S\,dT + V\,dP$:

$$-S_\alpha\,dT + V_\alpha\,dP = -S_\beta\,dT + V_\beta\,dP$$

$$\frac{dP}{dT} = \frac{S_\beta - S_\alpha}{V_\beta - V_\alpha} = \frac{L}{T \Delta V}$$

$\blacksquare$

**Application: liquid-gas coexistence.** Assuming the vapour is an ideal gas and
$V_{\mathrm{gas}}
\gg V_{\mathrm{liquid}}$:

$$\frac{dP}{dT} \approx \frac{L}{T \cdot nRT/P} = \frac{PL}{nRT^2}$$

Integrating (assuming $L$ is constant) gives the **Clausius equation**:

$$\ln P = -\frac{L}{nRT} + \mathrm{const}$$

### 6.3 Critical Phenomena

Near a critical point, thermodynamic quantities exhibit power-law behaviour:

$$|T - T_c|^\beta \quad \mathrm{(order\ parameter)}$$

**Van der Waals equation of state:**

$$\left(P + \frac{a}{v^2}\right)(v - b) = RT$$

where $a$ accounts for intermolecular attraction and $b$ accounts for the finite molecular volume.

The critical point is at $T_c = 8a/(27Rb)$, $P_c = a/(27b^2)$, $v_c = 3b$.

## 7. The Boltzmann Distribution

### 7.1 Derivation from the Microcanonical Ensemble

Consider a system $S$ in thermal contact with a large heat reservoir $R$ at temperature $T$. The
total energy $E_{\mathrm{tot}} = E_S + E_R$ is conserved.

The probability that $S$ is in state $i$ with energy $E_i$ is proportional to the number of
microstates of the reservoir:

$$P_i \propto \Omega_R(E_{\mathrm{tot}} - E_i)$$

Since the reservoir is large, expand $\ln \Omega_R$ to first order:

$$\ln \Omega_R(E_{\mathrm{tot}} - E_i) \approx \ln \Omega_R(E_{\mathrm{tot}}) - E_i \left(\frac{\partial \ln \Omega_R}{\partial E}\right)_V$$

$$= \ln \Omega_R(E_{\mathrm{tot}}) - \frac{E_i}{k_B T}$$

where we used $\partial \ln \Omega_R / \partial E = 1/(k_B T)$ (the thermodynamic definition of
temperature). Therefore:

$$P_i \propto e^{-E_i/(k_B T)} = e^{-\beta E_i}$$

Normalising:

$$P_i = \frac{e^{-\beta E_i}}{Z}, \quad Z = \sum_i e^{-\beta E_i}$$

This is the **Boltzmann distribution** (canonical ensemble).

### 7.2 Connection to Thermodynamics

From the partition function, all thermodynamic quantities follow:

- Internal energy: $U = -\frac{\partial \ln Z}{\partial \beta}$
- Entropy: $S = k_B(\ln Z + \beta U)$
- Helmholtz free energy: $F = -k_B T \ln Z$
- Pressure: $P = \frac{1}{\beta}\frac{\partial \ln Z}{\partial V}$
- Heat capacity: $C_V = k_B \beta^2 \left(\langle E^2 \rangle - \langle E \rangle^2\right)$

### 7.3 Worked Example: Two-Level System

A system has two energy levels: $E_0 = 0$ and $E_1 = \varepsilon$.

$$Z = 1 + e^{-\beta\varepsilon}$$

$$U = -\frac{\partial \ln Z}{\partial \beta} = \frac{\varepsilon e^{-\beta\varepsilon}}{1 + e^{-\beta\varepsilon}} = \frac{\varepsilon}{e^{\beta\varepsilon} + 1}$$

$$C = \frac{\partial U}{\partial T} = k_B \beta^2 \varepsilon^2 \frac{e^{\beta\varepsilon}}{(1 + e^{\beta\varepsilon})^2}$$

At high $T$ ($\beta \to 0$): $U \to \varepsilon/2$ and $C \to 0$ (equipartition). At low $T$
($\beta \to \infty$): $U \to 0$ and $C \to 0$ (Schottky anomaly).

## 8. Partition Functions

### 8.1 Molecular Partition Function

For a single molecule, the total partition function factors into contributions from different
degrees of freedom:

$$z = z_{\mathrm{trans}} \cdot z_{\mathrm{rot}} \cdot z_{\mathrm{vib}} \cdot z_{\mathrm{elec}}$$

### 8.2 Translational Partition Function

For a particle of mass $m$ in a box of volume $V$:

$$z_{\mathrm{trans}} = \sum_{\mathbf{k}} e^{-\beta \hbar^2 k^2/(2m)}$$

In the continuum limit (replace sum with integral):

$$z_{\mathrm{trans}} = V \left(\frac{2\pi m k_B T}{h^2}\right)^{3/2} = V n_Q$$

where $n_Q = (2\pi m k_B T / h^2)^{3/2}$ is the **quantum concentration**.

**Derivation.** Using $\sum_{\mathbf{k}} \to V/(2\pi)^3 \int d^3k$:

$$z_{\mathrm{trans}} = \frac{V}{(2\pi)^3} \int e^{-\beta \hbar^2 k^2/(2m)} d^3k = \frac{V}{(2\pi)^3} \left(\frac{2\pi m}{\beta \hbar^2}\right)^{3/2} \int_0^\infty 4\pi u^2 e^{-u^2}\,du$$

$$= \frac{V}{(2\pi)^3} \left(\frac{2\pi m k_B T}{\hbar^2}\right)^{3/2} \pi^{3/2} = V \left(\frac{2\pi m k_B T}{h^2}\right)^{3/2}$$

$\blacksquare$

### 8.3 Rotational Partition Function

For a rigid rotor (diatomic molecule) with moment of inertia $I$:

$$z_{\mathrm{rot}} = \sum_{J=0}^{\infty} (2J + 1) e^{-\beta \hbar^2 J(J+1)/(2I)}$$

At high temperature ($T \gg \Theta_{\mathrm{rot}} = \hbar^2/(2Ik_B)$), the sum can be approximated
by an integral:

$$z_{\mathrm{rot}} \approx \frac{T}{\Theta_{\mathrm{rot}}} = \frac{2Ik_B T}{\hbar^2}$$

For a heteronuclear diatomic, we multiply by the symmetry number $\sigma = 1$. For a homonuclear
diatomic, $\sigma = 2$ (exchange of identical nuclei gives indistinguishable configurations).

### 8.4 Vibrational Partition Function

For a harmonic oscillator with frequency $\nu$:

$$z_{\mathrm{vib}} = \sum_{n=0}^{\infty} e^{-\beta \hbar \nu (n + 1/2)} = \frac{e^{-\beta \hbar \nu / 2}}{1 - e^{-\beta \hbar \nu}}$$

The mean vibrational energy is:

$$\langle E_{\mathrm{vib}} \rangle = \frac{\hbar \nu}{2} + \frac{\hbar \nu}{e^{\beta \hbar \nu} - 1}$$

The first term is the zero-point energy.

## 9. The Ideal Gas

### 9.1 Classical Ideal Gas

For $N$ distinguishable particles, $Z = z^N$. For $N$ **indistinguishable** particles:

$$Z = \frac{z^N}{N!}$$

The factor $1/N!$ corrects for overcounting (Gibbs paradox).

**Proof (Gibbs paradox).** Without the $1/N!$ factor, the entropy $S = Nk_B \ln z + U/T$ is not
extensive: mixing two identical gases gives $S_{\mathrm{mix}} = 2S + Nk_B \ln 2 \neq 2S$. With
$1/N!$, using Stirling's approximation:

$$F = -Nk_B T \ln\left(\frac{z}{N}\right) - Nk_B T$$

$$S = -\left(\frac{\partial F}{\partial T}\right)_V = Nk_B \left[\ln\left(\frac{z}{N}\right) + 1\right] + \frac{U}{T}$$

which is now extensive. $\blacksquare$

### 9.2 Equation of State

From the translational partition function:

$$Z = \frac{1}{N!}\left[V\left(\frac{2\pi m k_B T}{h^2}\right)^{3/2}\right]^N$$

$$F = -k_B T \ln Z = -Nk_B T \left[\ln\left(\frac{V}{N}\left(\frac{2\pi m k_B T}{h^2}\right)^{3/2}\right) + 1\right]$$

$$P = -\left(\frac{\partial F}{\partial V}\right)_{T,N} = \frac{Nk_B T}{V}$$

This recovers the **ideal gas law** $PV = Nk_B T$.

### 9.3 Maxwell-Boltzmann Speed Distribution

The probability distribution for the speed $v$ of a molecule in an ideal gas at temperature $T$:

$$f(v)\,dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-mv^2/(2k_B T)}\,dv$$

**Characteristic speeds:**

- **Most probable speed:** $v_p = \sqrt{2k_B T / m}$
- **Mean speed:** $\langle v \rangle = \sqrt{8k_B T / (\pi m)}$
- **Root-mean-square speed:** $v_{\mathrm{rms}} = \sqrt{3k_B T / m}$

### 9.4 Equipartition Theorem

**Theorem 9.1 (Equipartition).** Each quadratic degree of freedom in the Hamiltonian contributes
$\frac{1}{2}k_B T$ to the average energy.

**Proof.** If $H$ contains a term $aq_i^2$ or $bp_i^2$ with $a, b \gt 0$, then:

$$\langle q_i^2 \rangle = \frac{\int q_i^2 e^{-\beta a q_i^2}\,dq_i}{\int e^{-\beta a q_i^2}\,dq_i} = \frac{1}{2a\beta} = \frac{k_B T}{2a}$$

So $\langle aq_i^2 \rangle = k_B T / 2$. Similarly for momentum terms. $\blacksquare$

This gives $U = \frac{f}{2}Nk_B T$ and $C_V = \frac{f}{2}Nk_B$ where $f$ is the number of quadratic
degrees of freedom.

## 10. Quantum Statistical Mechanics

### 10.1 Identical Particles and Indistinguishability

Classical particles are distinguishable. Quantum particles are not. There are two types:

- **Fermions** (half-integer spin): obey the **Pauli exclusion principle**; the total wavefunction
  is antisymmetric under particle exchange.
- **Bosons** (integer spin): the total wavefunction is symmetric under particle exchange.

### 10.2 Fermi-Dirac Statistics

For fermions, each state can be occupied by at most one particle. The occupation number is $n_i = 0$
or $1$.

The average occupation number:

$$\langle n_i \rangle = \frac{1}{e^{\beta(\varepsilon_i - \mu)} + 1} = f_{\mathrm{FD}}(\varepsilon_i)$$

**Derivation from the grand canonical ensemble.** The grand partition function for a single state at
energy $\varepsilon_i$:

$$\mathcal{Z}_i = \sum_{n_i=0}^{1} e^{-\beta n_i(\varepsilon_i - \mu)} = 1 + e^{-\beta(\varepsilon_i - \mu)}$$

$$\langle n_i \rangle = -\frac{1}{\beta}\frac{\partial \ln \mathcal{Z}_i}{\partial \mu} = \frac{e^{-\beta(\varepsilon_i - \mu)}}{1 + e^{-\beta(\varepsilon_i - \mu)}} = \frac{1}{e^{\beta(\varepsilon_i - \mu)} + 1}$$

$\blacksquare$

**The Fermi energy** $\varepsilon_F$ is the chemical potential at $T = 0$:
$f_{\mathrm{FD}}(\varepsilon)
= \Theta(\varepsilon_F - \varepsilon)$.

**The Fermi temperature:** $T_F = \varepsilon_F / k_B$.

**Density of states** for a 3D free electron gas:

$$g(\varepsilon) = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} \sqrt{\varepsilon}$$

The total number of electrons:

$$N = \int_0^{\varepsilon_F} g(\varepsilon)\,d\varepsilon = \frac{V}{3\pi^2}\left(\frac{2m\varepsilon_F}{\hbar^2}\right)^{3/2}$$

### 10.3 Bose-Einstein Statistics

For bosons, any number of particles can occupy a single state:

$$\langle n_i \rangle = \frac{1}{e^{\beta(\varepsilon_i - \mu)} - 1} = f_{\mathrm{BE}}(\varepsilon_i)$$

The chemical potential for bosons must satisfy $\mu \leq \varepsilon_0$ (lowest single-particle
energy) to ensure $\langle n_i \rangle \geq 0$.

**Derivation.** For a single bosonic state:

$$\mathcal{Z}_i = \sum_{n_i=0}^{\infty} e^{-\beta n_i(\varepsilon_i - \mu)} = \frac{1}{1 - e^{-\beta(\varepsilon_i - \mu)}}$$

$$\langle n_i \rangle = -\frac{1}{\beta}\frac{\partial \ln \mathcal{Z}_i}{\partial \mu} = \frac{e^{-\beta(\varepsilon_i - \mu)}}{1 - e^{-\beta(\varepsilon_i - \mu)}} = \frac{1}{e^{\beta(\varepsilon_i - \mu)} - 1}$$

$\blacksquare$

### 10.4 Bose-Einstein Condensation

For an ideal Bose gas in 3D, the critical temperature is:

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

where $n = N/V$ is the particle density and $\zeta(3/2) \approx 2.612$.

Below $T_c$, the chemical potential is essentially zero ($\mu \approx 0$), and a macroscopic
fraction of particles condense into the ground state:

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

**Derivation.** The number of particles in excited states is:

$$N_{\mathrm{ex}} = \int_0^{\infty} \frac{g(\varepsilon)\,d\varepsilon}{e^{\beta\varepsilon} - 1} = V\left(\frac{mk_B T}{2\pi\hbar^2}\right)^{3/2} \zeta(3/2)$$

This has a maximum value at $\mu = 0$. When $N \gt N_{\mathrm{ex}}^{\mathrm{max}}$, the excess
particles must go to the ground state. Setting $N = N_{\mathrm{ex}}^{\mathrm{max}}$ at $T = T_c$
gives the critical temperature above. $\blacksquare$

### 10.5 Comparison of the Three Statistics

$$f_{\mathrm{MB}} = e^{-\beta(\varepsilon - \mu)}, \quad f_{\mathrm{FD}} = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1}, \quad f_{\mathrm{BE}} = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1}$$

In the classical (dilute) limit $e^{\beta(\varepsilon - \mu)} \gg 1$, all three reduce to the
Maxwell-Boltzmann distribution. This occurs when $n \ll n_Q$ (dilute gas) or $T \gg T_F$ for
fermions.

### 10.6 Worked Example: Electron Gas in Metals

For copper: one conduction electron per atom, $n \approx 8.5 \times 10^{28}$ m$^{-3}$.

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3} \approx 7.0 \times 10^{-19}\ \mathrm{J} \approx 4.4\ \mathrm{eV}$$

$$T_F = \frac{\varepsilon_F}{k_B} \approx 51000\ \mathrm{K}$$

At room temperature ($T = 300$ K), $T/T_F \approx 0.006$, so the gas is deeply degenerate. The heat
capacity is:

$$C_V \approx \frac{\pi^2}{2}Nk_B\frac{T}{T_F}$$

This is much smaller than the classical prediction $C_V = \frac{3}{2}Nk_B$, explaining why electrons
contribute negligibly to the heat capacity of metals at room temperature.

## 11. Grand Canonical Ensemble

### 11.1 Definition

The **grand canonical ensemble** describes a system that can exchange both energy and particles with
a reservoir at temperature $T$ and chemical potential $\mu$.

The **grand partition function:**

$$\Xi = \sum_N \sum_i e^{-\beta(E_i - \mu N)}$$

The probability of finding the system in state $i$ with $N$ particles:

$$P_{i,N} = \frac{e^{-\beta(E_i - \mu N)}}{\Xi}$$

### 11.2 Connection to Thermodynamics

$$\ln \Xi = \beta PV$$

This follows from the Euler relation for the grand potential $\Phi_G = -PV = F - \mu N$.

**Key relations:**

- Average particle number:
  $\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}$
- Pressure: $P = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial V}\bigg|_{T,\mu}$
- Entropy: $S = k_B(\ln \Xi + \beta \langle E \rangle - \beta \mu \langle N \rangle)$

### 11.3 Fluctuations

The number fluctuations in the grand canonical ensemble:

$$\frac{\langle N^2 \rangle - \langle N \rangle^2}{\langle N \rangle^2} = \frac{k_B T \kappa_T}{V}$$

where $\kappa_T = -\frac{1}{V}(\partial V/\partial P)_T$ is the isothermal compressibility. For an
ideal gas, this gives $\langle N^2 \rangle - \langle N \rangle^2 = \langle N \rangle$, consistent
with Poisson statistics.

## 12. Fluctuation-Dissipation Theorem

### 12.1 Energy Fluctuations

In the canonical ensemble:

$$\langle E^2 \rangle - \langle E \rangle^2 = k_B T^2 C_V$$

**Proof.**
$\langle E^2 \rangle - \langle E \rangle^2 = \frac{\partial^2 \ln Z}{\partial \beta^2}
= -\frac{\partial U}{\partial \beta} = k_B T^2 C_V$.
$\blacksquare$

This is a manifestation of the **fluctuation-dissipation theorem**: the response of the system
($C_V$) is related to the equilibrium fluctuations.

### 12.2 General Fluctuation-Dissipation Relation

For a general observable $X$ coupled to its conjugate field $f$ via $H' = -fX$:

$$\chi = \beta \left(\langle X^2 \rangle - \langle X \rangle^2\right)$$

where $\chi = \partial \langle X \rangle / \partial f$ is the susceptibility. This connects the
linear response of a system to its spontaneous fluctuations.

## 13. Blackbody Radiation

### 13.1 Planck Distribution

Treating electromagnetic radiation in a cavity as a gas of non-interacting photons (bosons with
$\mu = 0$):

$$\langle n(\omega) \rangle = \frac{1}{e^{\beta\hbar\omega} - 1}$$

The **spectral energy density** (energy per unit volume per unit frequency):

$$u(\omega) = \frac{\hbar \omega^3}{\pi^2 c^3} \cdot \frac{1}{e^{\beta\hbar\omega} - 1}$$

**Derivation.** The density of photon states in a cavity of volume $V$ is
$g(\omega) = V\omega^2/(\pi^2 c^3)$. Each photon has energy $\hbar\omega$, and the mean occupation
number is the Bose-Einstein distribution with $\mu = 0$:

$$u(\omega) = \frac{g(\omega)}{V} \cdot \hbar\omega \cdot \langle n(\omega) \rangle = \frac{\omega^2}{\pi^2 c^3} \cdot \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}$$

$\blacksquare$

### 13.2 Stefan-Boltzmann Law

The total energy density:

$$u = \int_0^\infty u(\omega)\,d\omega = \frac{\hbar}{\pi^2 c^3} \int_0^\infty \frac{\omega^3\,d\omega}{e^{\beta\hbar\omega} - 1}$$

Substituting $x = \beta\hbar\omega$:

$$u = \frac{(k_B T)^4}{\pi^2 \hbar^3 c^3} \int_0^\infty \frac{x^3}{e^x - 1}\,dx = \frac{(k_B T)^4}{\pi^2 \hbar^3 c^3} \cdot \frac{\pi^4}{15} = \frac{\pi^2 k_B^4}{15\hbar^3 c^3} T^4$$

The **Stefan-Boltzmann law** for radiated power per unit area:

$$j = \frac{c}{4} u = \sigma T^4, \quad \sigma = \frac{\pi^2 k_B^4}{60\hbar^3 c^2} \approx 5.67 \times 10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}$$

### 13.3 Wien's Displacement Law

The peak of $u(\lambda)$ occurs at:

$$\lambda_{\mathrm{max}} T = 2.898 \times 10^{-3}\ \mathrm{m\cdot K}$$

This follows from maximising $u(\lambda) = (8\pi h c / \lambda^5)(e^{hc/(\lambda k_B T)} - 1)^{-1}$
with respect to $\lambda$.

## 14. The Ising Model

### 14.1 Definition

The **Ising model** is a lattice of $N$ spin-1/2 variables $s_i \in \{+1, -1\}$ with Hamiltonian:

$$H = -J \sum_{\langle i,j \rangle} s_i s_j - h \sum_i s_i$$

where $J$ is the coupling constant, $\langle i,j \rangle$ denotes nearest neighbours, and $h$ is an
external magnetic field.

- $J \gt 0$: ferromagnetic (spins tend to align).
- $J \lt 0$: antiferromagnetic (spins tend to anti-align).

### 14.2 Exact Solution in 1D

**Theorem 14.1 (Ising, 1925).** The 1D Ising model has no phase transition at $T \gt 0$.

**Proof sketch.** Using the transfer matrix method, the partition function for $N$ spins with
periodic boundary conditions is:

$$Z = \lambda_+^N + \lambda_-^N$$

where
$\lambda_\pm = e^{\beta J}\cosh(\beta h) \pm \sqrt{e^{2\beta J}\sinh^2(\beta h) + e^{-2\beta J}}$.

In the thermodynamic limit ($N \to \infty$), $Z \to \lambda_+^N$ (the larger eigenvalue dominates).

The magnetisation per spin is:

$$m = \frac{1}{\beta}\frac{\partial \ln \lambda_+}{\partial h}$$

For $h = 0$: $\lambda_+ = e^{\beta J} + e^{-\beta J} = 2\cosh(\beta J)$, and $m = 0$ for all
$T \gt 0$. There is no spontaneous magnetisation, hence no phase transition. $\blacksquare$

### 14.3 Mean-Field Approximation

Replace the interaction of spin $s_i$ with its neighbours by the mean field $m = \langle s \rangle$:

$$H_{\mathrm{MF}} = -J z m \sum_i s_i - h \sum_i s_i$$

where $z$ is the coordination number. The self-consistency equation:

$$m = \tanh\left[\beta(Jzm + h)\right]$$

For $h = 0$, a non-zero solution exists when $T \lt T_c = Jz/k_B$.

The critical exponents in mean-field theory: $\beta = 1/2$, $\gamma = 1$, $\delta = 3$.

### 14.4 Landau Theory of Phase Transitions

The Landau theory provides a phenomenological description of second-order phase transitions using a
free energy expanded in the **order parameter** $\phi$:

$$F(\phi, T) = F_0(T) + a(T - T_c)\phi^2 + b\phi^4 + \cdots$$

where $a \gt 0$ and $b \gt 0$.

- For $T \gt T_c$: the minimum is at $\phi = 0$ (disordered phase).
- For $T \lt T_c$: the minimum is at $\phi = \pm\sqrt{a(T_c - T)/(2b)}$ (ordered phase).

**Specific heat jump.** The entropy $S = -\partial F/\partial T$ has a discontinuity at $T_c$:

$$\Delta C_P = -T_c \frac{\partial^2 F}{\partial T^2}\bigg|_{T_c^+}^{T_c^-} = \frac{a^2 T_c}{2b}$$

**Limitations.** Landau theory neglects fluctuations and gives incorrect critical exponents in low
dimensions. It is exact in mean-field (infinite-range) models and above the upper critical dimension
$d_u = 4$.

### 14.5 Scaling and Critical Exponents

Near a critical point, thermodynamic quantities follow power laws:

| Quantity                      | Power law                                      | Exponent |
| ----------------------------- | ---------------------------------------------- | -------- |
| Order parameter ($T \lt T_c$) | $\phi \propto (T_c - T)^\beta$                 | $\beta$  |
| Susceptibility                | $\chi \propto \lvert T - T_c \rvert^{-\gamma}$ | $\gamma$ |
| Specific heat                 | $C \propto \lvert T - T_c \rvert^{-\alpha}$    | $\alpha$ |
| Correlation length            | $\xi \propto \lvert T - T_c \rvert^{-\nu}$     | $\nu$    |

The **scaling relations** (from the homogeneity hypothesis):

$$\alpha + 2\beta + \gamma = 2 \quad \mathrm{(Rushbrooke)}$$

$$\gamma = \beta(\delta - 1) \quad \mathrm{(Widom)}$$

$$\gamma = (2 - \eta)\nu \quad \mathrm{(Fisher)}$$

These are verified experimentally and by renormalisation group calculations.

:::caution Common Pitfall The mean-field approximation overestimates $T_c$ and gives incorrect
critical exponents. In 1D, it predicts a phase transition at $T_c = Jz/k_B$, whereas the exact
solution shows no transition at $T \gt 0$. Mean-field theory is only reliable in high dimensions
(where fluctuations are small) or for long-range interactions.
:::
