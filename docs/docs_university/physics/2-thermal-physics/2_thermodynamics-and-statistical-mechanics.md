---
title: Thermodynamics and Statistical Mechanics
description:
  'University-level notes on Thermodynamics and Statistical Mechanics: 1. The Laws of
  Thermodynamics; 1.1 Zeroth Law; 1.2 First Law; 1.3 Second Law.'
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

**Zeroth Law:** If system $A$ is in thermal equilibrium with system $B$And $B$ is in thermal
Equilibrium with system $C$Then $A$ is in thermal equilibrium with $C$.

This law establishes the existence of **temperature** as an equivalence relation. Two systems are in
Thermal equilibrium if and only if they are at the same temperature.

### 1.2 First Law

**First Law (Conservation of Energy):** The change in internal energy of a system equals the heat
Added to the system minus the work done by the system:

$$dU = \delta Q - \delta W$$

Where $\delta Q$ and $\delta W$ are **inexact differentials** (path-dependent), while $dU$ is an
Exact differential (state function).

For a quasi-static process with pressure-volume work:

$$\delta W = P\,dV$$

So the first law becomes:

$$dU = \delta Q - P\,dV$$

**Definition (Heat capacity).** The heat capacity at constant volume and constant pressure are:

$$C_V = \left(\frac◆LB◆\partial U◆RB◆◆LB◆\partial T◆RB◆\right)_V, \quad C_P = \left(\frac◆LB◆\partial H◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

Where $H = U + PV$ is the enthalpy.

### 1.3 Second Law

**Second Law (Clausius Statement):** Heat cannot spontaneously flow from a colder body to a hotter
Body without external work.

**Second Law (Kelvin-Planck Statement):** No cyclic process can convert heat entirely into work.

**Theorem 1.1 (Carnot's Theorem).** No engine operating between two heat reservoirs is more
Efficient than a Carnot engine. All reversible engines operating between the same two reservoirs
Have the same efficiency.

**Proof.** Suppose engine $A$ (claimed more efficient than Carnot) operates between reservoirs at
$T_h$ and $T_c$. Let $A$ extract heat $Q_h$ from the hot reservoir, do work $W$And reject heat
$Q_c = Q_h - W$ to the cold reservoir. Run a Carnot engine $C$ in reverse as a refrigerator using
Work $W$ from $A$: it extracts $Q_c'$ from the cold reservoir and delivers $Q_h' = W + Q_c'$ to the
Hot reservoir. If $\eta_A \gt \eta_C$Then $Q_c \lt Q_c'$So the combined system transfers net Heat
from cold to hot with no external work, violating the Clausius statement. $\blacksquare$

### 1.4 Entropy and the Clausius Inequality

**Definition (Entropy).** For a reversible process, the entropy change is:

$$dS = \frac◆LB◆\delta Q_◆LB◆\mathrm◆LB◆rev◆RB◆◆RB◆◆LB◆T◆RB◆◆RB◆$$

**Clausius Inequality:** For any cyclic process:

$$\oint \frac◆LB◆\delta Q◆RB◆◆LB◆T◆RB◆ \leq 0$$

With equality if and only if the process is reversible.

**Proof of entropy increase for irreversible processes.** Consider a system undergoing an
Irreversible process from state $1$ to state $2$Then returning via a reversible process. By the
Clausius inequality:

$$\int_1^2 \frac◆LB◆\delta Q_◆LB◆\mathrm◆LB◆irrev◆RB◆◆RB◆◆LB◆T◆RB◆ + \int_2^1 \frac◆LB◆\delta Q_◆LB◆\mathrm◆LB◆rev◆RB◆◆RB◆◆LB◆T◆RB◆ \leq 0◆RB◆◆RB◆$$

$$\int_1^2 \frac◆LB◆\delta Q_◆LB◆\mathrm◆LB◆irrev◆RB◆◆RB◆◆LB◆T◆RB◆ - \int_1^2 \frac◆LB◆\delta Q_◆LB◆\mathrm◆LB◆rev◆RB◆◆RB◆◆LB◆T◆RB◆ \leq 0◆RB◆◆RB◆$$

Since $dS = \delta Q_◆LB◆\mathrm◆LB◆rev◆RB◆/T◆RB◆$:

$$\Delta S \geq \int_1^2 \frac◆LB◆\delta Q◆RB◆◆LB◆T◆RB◆$$

With equality for reversible processes. $\blacksquare$

### 1.5 Third Law

**Third Law (Nernst Heat Theorem):** As $T \to 0$The entropy of a perfect crystal approaches zero:

$$\lim_◆LB◆T \to 0◆RB◆ S(T) = 0$$

This sets an absolute reference for entropy and implies that it is impossible to reach absolute zero
In a finite number of steps.

### 1.6 Thermodynamic Response Functions

Several material-dependent quantities characterise how a system responds to changes in its state
Variables.

**Definition (Isothermal compressibility).**

$$\kappa_T = -\frac◆LB◆1◆RB◆◆LB◆V◆RB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial P◆RB◆\right)_T$$

**Definition (Adiabatic compressibility).**

$$\kappa_S = -\frac◆LB◆1◆RB◆◆LB◆V◆RB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial P◆RB◆\right)_S$$

**Definition (Coefficient of thermal expansion).**

$$\alpha = \frac◆LB◆1◆RB◆◆LB◆V◆RB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

**Theorem 1.2 (Relation between heat capacities).**

$$C_P - C_V = \frac◆LB◆TV\alpha^2◆RB◆◆LB◆\kappa_T◆RB◆$$

**Proof.** From the identity
$dS(T, V) = (\partial S/\partial T)_V\,dT + (\partial S/\partial V)_T\,dV$ And writing $dV$ in terms
of $dT$ and $dP$ along a constant-$P$ path:

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_P = \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_V + \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_T \left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

Multiply by $T$ and use $C_V = T(\partial S/\partial T)_V$, $C_P = T(\partial S/\partial T)_P$And the
Maxwell relation $(\partial S/\partial V)_T = (\partial P/\partial T)_V$:

$$C_P - C_V = T\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V \left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

Now use the cyclic relation
$(\partial P/\partial T)_V = -(\partial V/\partial T)_P / (\partial V/\partial P)_T$ To obtain:

$$C_P - C_V = -T\frac◆LB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P^2◆RB◆◆LB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial P◆RB◆\right)_T◆RB◆ = \frac◆LB◆TV\alpha^2◆RB◆◆LB◆\kappa_T◆RB◆$$

$\blacksquare$

Since $\kappa_T \gt 0$ for stable systems and $\alpha^2 \geq 0$We always have $C_P \geq C_V$.

**Theorem 1.3 (Adiabatic index).** The ratio $\gamma = C_P/C_V$ satisfies:

$$\gamma = \frac◆LB◆\kappa_T◆RB◆◆LB◆\kappa_S◆RB◆$$

**Proof.** Along an adiabat, $dS = 0$. Using the chain rule:

$$dS = \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_P\,dT + \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_T\,dP = 0$$

$$\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_S = -\frac◆LB◆\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_P◆RB◆◆LB◆\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_T◆RB◆ = -\frac◆LB◆C_P/T◆RB◆◆LB◆-(\partial V/\partial T)_P◆RB◆ = \frac◆LB◆C_P◆RB◆◆LB◆T(\partial V/\partial T)_P◆RB◆$$

Similarly, along an isotherm:

$$\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V = -\frac◆LB◆(\partial V/\partial T)_P◆RB◆◆LB◆(\partial V/\partial P)_T◆RB◆ = \frac◆LB◆\alpha◆RB◆◆LB◆\kappa_T◆RB◆$$

Using the identity $C_P/C_V = (\partial P/\partial T)_S / (\partial P/\partial T)_V$ and simplifying
gives $\gamma = \kappa_T/\kappa_S$. $\blacksquare$

### 1.7 Second Law from Statistical Mechanics

**Theorem 1.4 (Statistical basis of the second law).** For an isolated system, the entropy
$S = k_B \ln \Omega$ can only increase or remain constant.

**Proof.** Consider an isolated system with fixed energy $E$Volume $V$And particle number $N$. The
system evolves through accessible microstates. If the system starts in a non-equilibrium Macrostate
$A$ with $\Omega_A$ microstates and evolves to macrostate $B$ with $\Omega_B$ microstates, The
evolution is driven by the ergodic exploration of phase space.

Since the system explores all accessible microstates with equal probability over time, it will
Overwhelmingly be found in the macrostate with the largest number of microstates. If
$\Omega_B \geq
\Omega_A$, then $S_B = k_B \ln \Omega_B \geq k_B \ln \Omega_A = S_A$.

More rigorously: suppose the system starts in a subset of $w_0$ microstates out of a total $\Omega$.
The probability that the system remains in this subset after randomising over all Microstates is
$w_0/\Omega \ll 1$. The system therefore evolves toward the macrostate that Maximises $\Omega$And
hence maximises $S$. $\blacksquare$

This shows that the second law is not absolute but statistical: fluctuations can temporarily
Decrease entropy, but the probability of a macroscopic fluctuation is exponentially small in $N$.

<details>
<summary>Solution: Worked Example — Response Functions for an Ideal Gas</summary>

For an ideal gas $PV = Nk_B T$:

- $\alpha = \frac◆LB◆1◆RB◆◆LB◆V◆RB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P = \frac◆LB◆Nk_B◆RB◆◆LB◆PV◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆T◆RB◆$
- $\kappa_T = -\frac◆LB◆1◆RB◆◆LB◆V◆RB◆\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial P◆RB◆\right)_T = \frac◆LB◆V◆RB◆◆LB◆PV◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆P◆RB◆$
- $C_P - C_V = \frac◆LB◆TV \cdot (1/T)^2◆RB◆◆LB◆1/P◆RB◆ = \frac◆LB◆V P◆RB◆◆LB◆T◆RB◆ = Nk_B$

This confirms $C_P - C_V = Nk_B$ for an ideal gas, a result that also follows directly from
Equipartition.

</details>

## 2. Thermodynamic Potentials

### 2.1 The Four Potentials

The internal energy $U$ is the fundamental thermodynamic potential. By performing Legendre
Transformations on $U(S, V, N)$We obtain the other potentials:

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

This tells us $T = (\partial U/\partial S)_◆LB◆V,N◆RB◆$, $P = -(\partial U/\partial V)_◆LB◆S,N◆RB◆$And
$\mu = (\partial U/\partial N)_◆LB◆S,V◆RB◆$.

For enthalpy, $H = U + PV$So:

$$dH = dU + P\,dV + V\,dP = T\,dS + V\,dP + \mu\,dN$$

For Helmholtz free energy, $F = U - TS$So:

$$dF = dU - T\,dS - S\,dT = -S\,dT - P\,dV + \mu\,dN$$

For Gibbs free energy, $G = U - TS + PV$So:

$$dG = -S\,dT + V\,dP + \mu\,dN$$

### 2.3 Physical Meaning of the Potentials

- $U$: Total energy at constant entropy and volume.
- $H$: Total energy plus the work needed to make room for the system ($PV$). Useful for
  constant-pressure processes (e.g., chemical reactions at atmospheric pressure).
- $F$: The maximum work extractable from a system at constant temperature. Minimised at equilibrium
  for systems in contact with a heat bath at fixed $T, V$.
- $G$: The maximum non-expansion work extractable. Minimised at equilibrium for systems at fixed
  $T, P$.

### 2.4 Maxwell Relations from Thermodynamic Potentials

Since each thermodynamic potential is a state function, its differential is exact. By Euler's
Reciprocity, mixed second partial derivatives are equal. This yields the four Maxwell relations
Directly:

| From potential | Exact differential    | Maxwell relation                                         |
| -------------- | --------------------- | -------------------------------------------------------- |
| $U(S,V)$       | $dU = T\,dS - P\,dV$  | $(\partial T/\partial V)_S = -(\partial P/\partial S)_V$ |
| $H(S,P)$       | $dH = T\,dS + V\,dP$  | $(\partial T/\partial P)_S = (\partial V/\partial S)_P$  |
| $F(T,V)$       | $dF = -S\,dT - P\,dV$ | $(\partial S/\partial V)_T = (\partial P/\partial T)_V$  |
| $G(T,P)$       | $dG = -S\,dT + V\,dP$ | $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$ |

These relations allow us to express unmeasurable quantities (entropy changes) in terms of Measurable
ones (equations of state).

<details>
<summary>Solution: Worked Example — Free Energy Minimisation</summary>

A gas cylinder at $T = 300$ K is divided by a frictionless piston. Side $A$ has volume $V_A = 1$ L
With $N_A = 0.04$ mol of ideal gas. Side $B$ has volume $V_B = 3$ L with $N_B = 0.02$ mol of ideal
Gas. The piston is released and the system equilibrates at constant $T$. Find the equilibrium
Volumes.

The total Helmholtz free energy is:

$$F = F_A + F_B = -N_A k_B T \ln\frac◆LB◆e V_A◆RB◆◆LB◆N_A \lambda^3◆RB◆ - N_B k_B T \ln\frac◆LB◆e V_B◆RB◆◆LB◆N_B \lambda^3◆RB◆$$

Where $\lambda = h/\sqrt◆LB◆2\pi m k_B T◆RB◆$ is the thermal de Broglie wavelength. At constant $T$
$\lambda$ is constant, so minimising $F$ with respect to $V_A$ (with $V_B = V_◆LB◆\mathrm◆LB◆tot◆RB◆ -
V_A◆RB◆$):

$$\frac◆LB◆\partial F◆RB◆◆LB◆\partial V_A◆RB◆ = -\frac◆LB◆N_A k_B T◆RB◆◆LB◆V_A◆RB◆ + \frac◆LB◆N_B k_B T◆RB◆◆LB◆V_B◆RB◆ = 0$$

$$\frac◆LB◆N_A◆RB◆◆LB◆V_A◆RB◆ = \frac◆LB◆N_B◆RB◆◆LB◆V_B◆RB◆$$

So $V_A/V_B = N_A/N_B = 2$. With $V_A + V_B = 4$ L: $V_A = 8/3$ L, $V_B = 4/3$ L.

This is just mechanical equilibrium: $P_A = P_B$I.e., $N_A k_B T/V_A = N_B k_B T/V_B$.

</details>

### 2.5 Equilibrium Conditions

**Theorem 2.1.** At equilibrium:

- For an isolated system: $S$ is maximised (at fixed $U, V, N$).
- For a system in contact with a heat bath at temperature $T$ and pressure $P$: $G$ is minimised.
- For a system at constant $T, V$: $F$ is minimised.

**Proof (for $G$).** Consider a system in contact with a reservoir at $T_0, P_0$. The total entropy
Of system plus reservoir is $S_◆LB◆\mathrm◆LB◆tot◆RB◆ = S + S_R◆RB◆$. At equilibrium, $S_◆LB◆\mathrm◆LB◆tot◆RB◆◆RB◆$ is
Maximised, so $\delta S_◆LB◆\mathrm◆LB◆tot◆RB◆ \leq 0◆RB◆$ for any variation. Since $dS_R = \delta Q_R / T_0$ And
by energy conservation $\delta Q_R = -\delta Q = -(dU + P_0\,dV)$:

$$\delta S_◆LB◆\mathrm◆LB◆tot◆RB◆ = \delta S - \frac◆LB◆1◆RB◆◆LB◆T_0◆RB◆(dU + P_0\,dV) = -\frac◆LB◆1◆RB◆◆LB◆T_0◆RB◆\delta G \leq 0◆RB◆$$

Where $\delta G = \delta U + P_0\,\delta V - T_0\,\delta S$. Hence $\delta G \geq 0$So $G$ is
Minimised. $\blacksquare$

## 3. Maxwell Relations

### 3.1 Derivation from Exact Differentials

Since $U, H, F, G$ are state functions, their differentials are exact. By the symmetry of second
Derivatives (Euler's reciprocity), if $dz = M\,dx + N\,dy$Then:

$$\left(\frac◆LB◆\partial M◆RB◆◆LB◆\partial y◆RB◆\right)_x = \left(\frac◆LB◆\partial N◆RB◆◆LB◆\partial x◆RB◆\right)_y$$

Applying this to each thermodynamic potential:

**From $dU = T\,dS - P\,dV + \mu\,dN$:**

$$\left(\frac◆LB◆\partial T◆RB◆◆LB◆\partial V◆RB◆\right)_◆LB◆S,N◆RB◆ = -\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial S◆RB◆\right)_◆LB◆V,N◆RB◆$$

$$\left(\frac◆LB◆\partial T◆RB◆◆LB◆\partial N◆RB◆\right)_◆LB◆S,V◆RB◆ = \left(\frac◆LB◆\partial \mu◆RB◆◆LB◆\partial S◆RB◆\right)_◆LB◆V,N◆RB◆$$

$$\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial N◆RB◆\right)_◆LB◆S,V◆RB◆ = -\left(\frac◆LB◆\partial \mu◆RB◆◆LB◆\partial V◆RB◆\right)_◆LB◆S,N◆RB◆$$

**From $dH = T\,dS + V\,dP + \mu\,dN$:**

$$\left(\frac◆LB◆\partial T◆RB◆◆LB◆\partial P◆RB◆\right)_◆LB◆S,N◆RB◆ = \left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial S◆RB◆\right)_◆LB◆P,N◆RB◆$$

**From $dF = -S\,dT - P\,dV + \mu\,dN$:**

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_◆LB◆T,N◆RB◆ = \left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_◆LB◆V,N◆RB◆$$

**From $dG = -S\,dT + V\,dP + \mu\,dN$:**

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_◆LB◆T,N◆RB◆ = -\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_◆LB◆P,N◆RB◆$$

### 3.2 Applications

**Derivation of the heat capacity relation.** From $dU = T\,dS - P\,dV$:

$$C_V = T\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_V, \quad C_P = T\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

Using the chain rule and Maxwell relations:

$$C_P - C_V = T\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V \left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P$$

**Proof.** Expand $S(T, V)$ as $S(T, P(T, V))$:

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_V = \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial T◆RB◆\right)_P + \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_T \left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V$$

Multiply by $T$:

$$C_V = C_P + T\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_T \left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V$$

Using the Maxwell relation $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$:

$$C_V = C_P - T\left(\frac◆LB◆\partial V◆RB◆◆LB◆\partial T◆RB◆\right)_P \left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V$$

$\blacksquare$

### 3.3 Applications of Maxwell Relations

**Application: entropy change of an ideal gas.** Using
$(\partial S/\partial V)_T = (\partial P/\partial T)_V$ And the ideal gas law $P = Nk_B T/V$:

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_T = \frac◆LB◆Nk_B◆RB◆◆LB◆V◆RB◆$$

Integrating: $\Delta S = Nk_B \ln(V_f/V_i)$ for an isothermal expansion.

Similarly, using $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$:

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial P◆RB◆\right)_T = -\frac◆LB◆Nk_B◆RB◆◆LB◆P◆RB◆$$

So $\Delta S = -Nk_B \ln(P_f/P_i) = Nk_B \ln(V_f/V_i)$Consistent.

**Application: internal energy of an ideal gas.** Using
$(\partial U/\partial V)_T = T(\partial P/\partial T)_V - P$ (a Maxwell relation consequence from
$dU = T\,dS - P\,dV$):

$$\left(\frac◆LB◆\partial U◆RB◆◆LB◆\partial V◆RB◆\right)_T = T \cdot \frac◆LB◆Nk_B◆RB◆◆LB◆V◆RB◆ - \frac◆LB◆Nk_B T◆RB◆◆LB◆V◆RB◆ = 0$$

This confirms that the internal energy of an ideal gas depends only on $T$ (Joule's law).

<details>
<summary>Solution: Worked Example — Maxwell Relation for a Van der Waals Gas</summary>

For a van der Waals gas $\left(P + a/v^2\right)(v - b) = RT$ where $v = V/n$:

Using $(\partial U/\partial V)_T = T(\partial P/\partial T)_V - P$:

From the EOS: $P = RT/(v - b) - a/v^2$So $(\partial P/\partial T)_V = R/(v - b) = (P + a/v^2)/T$.

Therefore:

$$\left(\frac◆LB◆\partial U◆RB◆◆LB◆\partial V◆RB◆\right)_T = T \cdot \frac◆LB◆P + a/v^2◆RB◆◆LB◆T◆RB◆ - P = \frac◆LB◆a◆RB◆◆LB◆v^2◆RB◆ = \frac◆LB◆an^2◆RB◆◆LB◆V^2◆RB◆$$

Integrating at constant $T$:

$$\Delta U = -\frac◆LB◆an^2◆RB◆◆LB◆V_f◆RB◆ + \frac◆LB◆an^2◆RB◆◆LB◆V_i◆RB◆$$

For a free expansion ($W = 0$, $\delta Q = 0$Hence $\Delta U = 0$ for ideal gas), the van der Waals
Gas heats up because the internal energy depends on volume through the $a/v^2$ term representing
Intermolecular attraction. The temperature change is:

$$\Delta T = -\frac◆LB◆a◆RB◆◆LB◆C_V◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆V_f◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆V_i◆RB◆\right)$$

Which is negative for $V_f \gt V_i$: the gas cools during free expansion.

</details>

## 4. Heat Engines and Refrigerators

### 4.1 The Carnot Cycle

The Carnot cycle consists of four reversible stages operating between temperatures $T_h$ (hot) and
$T_c$ (cold):

1. **Isothermal expansion** at $T_h$: absorb heat $Q_h$ from hot reservoir.
2. **Adiabatic expansion**: temperature drops from $T_h$ to $T_c$.
3. **Isothermal compression** at $T_c$: reject heat $Q_c$ to cold reservoir.
4. **Adiabatic compression**: temperature rises from $T_c$ to $T_h$.

The efficiency is:

$$\eta = 1 - \frac◆LB◆Q_c◆RB◆◆LB◆Q_h◆RB◆ = 1 - \frac◆LB◆T_c◆RB◆◆LB◆T_h◆RB◆$$

**Derivation.** For the isothermal steps, $\Delta S_◆LB◆\mathrm◆LB◆hot◆RB◆ = Q_h/T_h◆RB◆$ and
$\Delta S_◆LB◆\mathrm◆LB◆cold◆RB◆ = -Q_c/T_c◆RB◆$. Since entropy is a state function and the cycle returns to The
initial state, $\Delta S_◆LB◆\mathrm◆LB◆total◆RB◆ = 0◆RB◆$So $Q_h/T_h = Q_c/T_c$. $\blacksquare$

### 4.2 Heat Pumps and Refrigerators

A **refrigerator** is a Carnot engine run in reverse. The **coefficient of performance (COP)**:

$$\mathrm◆LB◆COP_◆RB◆◆LB◆\mathrm◆LB◆ref◆RB◆ = \frac◆LB◆Q_c◆RB◆◆LB◆W◆RB◆ = \frac◆LB◆T_c◆RB◆◆LB◆T_h - T_c◆RB◆◆RB◆$$

A **heat pump** heats the hot reservoir:

$$\mathrm◆LB◆COP_◆RB◆◆LB◆\mathrm◆LB◆hp◆RB◆ = \frac◆LB◆Q_h◆RB◆◆LB◆W◆RB◆ = \frac◆LB◆T_h◆RB◆◆LB◆T_h - T_c◆RB◆◆RB◆$$

### 4.3 The Otto and Diesel Cycles

**Otto cycle** (idealised petrol engine): two isochoric and two adiabatic processes.

$$\eta_◆LB◆\mathrm◆LB◆Otto◆RB◆ = 1 - \frac◆LB◆1◆RB◆◆LB◆r^◆LB◆\gamma - 1◆RB◆◆RB◆◆RB◆$$

Where $r = V_◆LB◆\mathrm◆LB◆max◆RB◆/V_◆LB◆\mathrm◆LB◆min◆RB◆◆RB◆◆RB◆$ is the compression ratio and $\gamma = C_P/C_V$.

**Diesel cycle:** one isobaric, two adiabatic, and one isochoric process:

$$\eta_◆LB◆\mathrm◆LB◆Diesel◆RB◆ = 1 - \frac◆LB◆1◆RB◆◆LB◆r^◆LB◆\gamma - 1◆RB◆◆RB◆ \cdot \frac◆LB◆\alpha^\gamma - 1◆RB◆◆LB◆\gamma(\alpha - 1)◆RB◆◆RB◆$$

Where $\alpha = V_◆LB◆\mathrm◆LB◆max◆RB◆/V_◆LB◆\mathrm◆LB◆cutoff◆RB◆◆RB◆◆RB◆$ is the cutoff ratio.

### 4.4 Worked Example: Carnot Cycle Calculation

<details>
<summary>Solution: Carnot Cycle with a Monatomic Ideal Gas</summary>

A Carnot engine uses $n = 2$ mol of monatomic ideal gas ($C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆nR$, $C_P = \frac◆LB◆5◆RB◆◆LB◆2◆RB◆nR$
$\gamma = 5/3$). The reservoirs are at $T_h = 600$ K and $T_c = 300$ K. At state $A$ (start of
Isothermal expansion): $P_A = 10$ atm, $V_A = 10$ L.

**Step 1: Isothermal expansion at $T_h = 600$ K from $A$ to $B$.** Let $V_B = 20$ L.

$$Q_h = nRT_h \ln\frac◆LB◆V_B◆RB◆◆LB◆V_A◆RB◆ = 2 \times 8.314 \times 600 \times \ln 2 \approx 6915\ \mathrm◆LB◆J◆RB◆$$

$$W_◆LB◆AB◆RB◆ = Q_h = 6915\ \mathrm◆LB◆J◆RB◆$$ (isothermal, so $\Delta U = 0$)

$P_B = P_A V_A/V_B = 5$ atm.

**Step 2: Adiabatic expansion from $B$ to $C$.** $T_C = T_c = 300$ K. From
$TV^◆LB◆\gamma-1◆RB◆ = \mathrm◆LB◆const◆RB◆$:

$$V_C = V_B \left(\frac◆LB◆T_h◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆1/(\gamma-1)◆RB◆ = 20 \times 2^◆LB◆3/2◆RB◆ \approx 56.6\ \mathrm◆LB◆L◆RB◆$$

$Q_◆LB◆BC◆RB◆ = 0$, $W_◆LB◆BC◆RB◆ = -\Delta U = nC_V(T_h - T_c) = 2 \times \frac◆LB◆3◆RB◆◆LB◆2◆RB◆ \times 8.314 \times 300 \approx 7483\ \mathrm◆LB◆J◆RB◆$.

**Step 3: Isothermal compression at $T_c = 300$ K from $C$ to $D$.** From
$TV^◆LB◆\gamma-1◆RB◆ = \mathrm◆LB◆const◆RB◆$ On the adiabat $DA$:
$V_D = V_A(T_h/T_c)^◆LB◆1/(\gamma-1)◆RB◆ = 10 \times 2^◆LB◆3/2◆RB◆ \approx 28.3$ L.

$$Q_c = nRT_c \ln\frac◆LB◆V_C◆RB◆◆LB◆V_D◆RB◆ = 2 \times 8.314 \times 300 \times \ln\frac◆LB◆56.6◆RB◆◆LB◆28.3◆RB◆ \approx 3458\ \mathrm◆LB◆J◆RB◆$$

$W_◆LB◆CD◆RB◆ = Q_c = 3458$ J (heat rejected; $W \lt 0$ for compression).

**Step 4: Adiabatic compression from $D$ to $A$.** $Q_◆LB◆DA◆RB◆ = 0$, $W_◆LB◆DA◆RB◆ = -nC_V(T_h - T_c) = -7483$
J.

**Summary:**

| Quantity                              | Value  |
| ------------------------------------- | ------ |
| $Q_h$ (absorbed)                      | 6915 J |
| $Q_c$ (rejected)                      | 3458 J |
| $W_◆LB◆\mathrm◆LB◆net◆RB◆ = Q_h - Q_c◆RB◆$         | 3457 J |
| $\eta = W_◆LB◆\mathrm◆LB◆net◆RB◆/Q_h◆RB◆$          | 0.500  |
| $\eta_◆LB◆\mathrm◆LB◆Carnot◆RB◆ = 1 - T_c/T_h◆RB◆$ | 0.500  |

The efficiency matches the Carnot prediction exactly, as expected for a reversible cycle.

</details>

## 5. Entropy and Free Energy

### 5.1 Statistical Definition of Entropy

**Definition (Boltzmann Entropy).** For a macrostate with $\Omega$ accessible microstates:

$$S = k_B \ln \Omega$$

Where $k_B = 1.381 \times 10^◆LB◆-23◆RB◆$ J/K is Boltzmann's constant.

**Justification.** Consider two independent systems $A$ and $B$. The total number of microstates is
$\Omega_◆LB◆AB◆RB◆ = \Omega_A \cdot \Omega_B$. We require $S_◆LB◆AB◆RB◆ = S_A + S_B$ (additivity). The logarithm
Is the unique function satisfying $f(xy) = f(x) + f(y)$. $\blacksquare$

### 5.2 Gibbs Entropy Formula

For a system with probability $p_i$ of being in microstate $i$:

$$S = -k_B \sum_i p_i \ln p_i$$

This reduces to the Boltzmann formula when all accessible microstates are equally probable:
$p_i = 1/\Omega$.

**Theorem 5.1 (Concavity of entropy).** The Gibbs entropy is maximised when all accessible
Microstates are equally probable.

**Proof.** Maximise $S = -k_B \sum_i p_i \ln p_i$ subject to $\sum_i p_i = 1$ using a Lagrange
Multiplier $\lambda$:

$$\frac◆LB◆\partial◆RB◆◆LB◆\partial p_j◆RB◆\left[-\sum_i p_i \ln p_i - \lambda\left(\sum_i p_i - 1\right)\right] = -\ln p_j - 1 - \lambda = 0$$

This gives $p_j = e^◆LB◆-1-\lambda◆RB◆ = \mathrm◆LB◆const◆RB◆$ for all $j$. The constraint $\sum_i p_i = 1$ Then
gives $p_i = 1/\Omega$. $\blacksquare$

**Derivation from Boltzmann.** For $N$ identical systems distributed among $\Omega$ equally probable
Microstates, the most probable macrostate has $n_i = N/\Omega$ systems in each microstate. The
Number of ways to arrange this is:

$$W = \frac◆LB◆N!◆RB◆◆LB◆\prod_i n_i!◆RB◆$$

Using Stirling's approximation $\ln N! \approx N \ln N - N$:

$$\ln W = N \ln N - N - \sum_i (n_i \ln n_i - n_i) = -N \sum_i p_i \ln p_i$$

Where $p_i = n_i/N$. Multiplying by $k_B$ gives the Gibbs entropy. $\blacksquare$

### 5.3 Helmholtz Free Energy and the Partition Function

The Helmholtz free energy connects thermodynamics to statistical mechanics:

$$F = -k_B T \ln Z$$

Where $Z = \sum_i e^◆LB◆-\beta E_i◆RB◆$ is the canonical partition function and $\beta = 1/(k_B T)$.

**Derivation.** From the Gibbs entropy with the Boltzmann distribution $p_i = e^◆LB◆-\beta E_i◆RB◆/Z$:

$$S = -k_B \sum_i \frac◆LB◆e^◆LB◆-\beta E_i◆RB◆◆RB◆◆LB◆Z◆RB◆ \left(-\beta E_i - \ln Z\right) = k_B \beta \langle E \rangle + k_B \ln Z$$

Since $\langle E \rangle = U$ and $k_B \beta = 1/T$:

$$S = \frac◆LB◆U◆RB◆◆LB◆T◆RB◆ + k_B \ln Z$$

$$F = U - TS = U - T\left(\frac◆LB◆U◆RB◆◆LB◆T◆RB◆ + k_B \ln Z\right) = -k_B T \ln Z$$

$\blacksquare$

## 6. Phase Transitions

### 6.1 Classification of Phase Transitions

**First-order transition:** Discontinuity in first derivatives of $G$ (e.g., $S$, $V$). There is a
Latent heat $L = T \Delta S$.

**Second-order (continuous) transition:** First derivatives are continuous, but second derivatives
(e.g., $C_P$$\kappa_T$$\alpha$) diverge or are discontinuous.

**Ehrenfest classification:** An $n$-th order transition has discontinuities in the $n$-th
Derivatives of $G$With all lower derivatives continuous.

### 6.2 The Clausius-Clapeyron Equation

For a first-order phase transition between phases $\alpha$ and $\beta$ in equilibrium
($G_\alpha =
G_\beta$):

$$\frac◆LB◆dP◆RB◆◆LB◆dT◆RB◆ = \frac◆LB◆S_\beta - S_\alpha◆RB◆◆LB◆V_\beta - V_\alpha◆RB◆ = \frac◆LB◆L◆RB◆◆LB◆T \Delta V◆RB◆$$

Where $L$ is the latent heat and $\Delta V = V_\beta - V_\alpha$.

**Derivation.** Along the coexistence curve, $dG_\alpha = dG_\beta$. Since $dG = -S\,dT + V\,dP$:

$$-S_\alpha\,dT + V_\alpha\,dP = -S_\beta\,dT + V_\beta\,dP$$

$$\frac◆LB◆dP◆RB◆◆LB◆dT◆RB◆ = \frac◆LB◆S_\beta - S_\alpha◆RB◆◆LB◆V_\beta - V_\alpha◆RB◆ = \frac◆LB◆L◆RB◆◆LB◆T \Delta V◆RB◆$$

$\blacksquare$

**Application: liquid-gas coexistence.** Assuming the vapour is an ideal gas and
$V_◆LB◆\mathrm◆LB◆gas◆RB◆
\gg V_◆LB◆\mathrm◆LB◆liquid◆RB◆◆RB◆◆RB◆$:

$$\frac◆LB◆dP◆RB◆◆LB◆dT◆RB◆ \approx \frac◆LB◆L◆RB◆◆LB◆T \cdot nRT/P◆RB◆ = \frac◆LB◆PL◆RB◆◆LB◆nRT^2◆RB◆$$

Integrating (assuming $L$ is constant) gives the **Clausius equation**:

$$\ln P = -\frac◆LB◆L◆RB◆◆LB◆nRT◆RB◆ + \mathrm◆LB◆const◆RB◆$$

### 6.4 Worked Example: Clausius-Clapeyron Applications

<details>
<summary>Solution: Boiling Point at Different Pressures</summary>

The latent heat of vaporisation of water at 1 atm ($T_b = 373.15$ K) is $L_v = 40700$ J/mol. Find
the Boiling point at $P = 0.5$ atm.

Integrating the Clausius-Clapeyron equation:

$$\ln\frac◆LB◆P_2◆RB◆◆LB◆P_1◆RB◆ = -\frac◆LB◆L_v◆RB◆◆LB◆R◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆T_2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆T_1◆RB◆\right)$$

$$\ln\frac◆LB◆0.5◆RB◆◆LB◆1◆RB◆ = -\frac◆LB◆40700◆RB◆◆LB◆8.314◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆T_2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆373.15◆RB◆\right)$$

$$-0.693 = -4894\left(\frac◆LB◆1◆RB◆◆LB◆T_2◆RB◆ - 0.00268\right)$$

$$\frac◆LB◆1◆RB◆◆LB◆T_2◆RB◆ = 0.00268 + \frac◆LB◆0.693◆RB◆◆LB◆4894◆RB◆ = 0.00282$$

$$T_2 \approx 354.6\ \mathrm◆LB◆K◆RB◆ \approx 81.5\degree\mathrm◆LB◆C◆RB◆$$

This explains why water boils at a lower temperature at high altitude.

</details>

<details>
<summary>Solution: Solid-Liquid Coexistence — Pressure Melting of Ice</summary>

For the ice-water transition: $L_f = 6008$ J/mol, $T_m = 273.15$ K,
$\Delta V = V_◆LB◆\mathrm◆LB◆water◆RB◆ - V_◆LB◆\mathrm◆LB◆ice◆RB◆ = 18.0 \times 10^◆LB◆-6◆RB◆ - 19.7 \times 10^◆LB◆-6◆RB◆
= -1.7 \times 10^◆LB◆-6◆RB◆◆RB◆◆RB◆$
m$^3$/mol.

$$\frac◆LB◆dP◆RB◆◆LB◆dT◆RB◆ = \frac◆LB◆L_f◆RB◆◆LB◆T_m \Delta V◆RB◆ = \frac◆LB◆6008◆RB◆◆LB◆273.15 \times (-1.7 \times 10^◆LB◆-6◆RB◆)◆RB◆ \approx -1.29 \times 10^7\ \mathrm◆LB◆Pa◆RB◆/K$$

The negative slope means increasing pressure _lowers_ the melting point:

$$\frac◆LB◆dT◆RB◆◆LB◆dP◆RB◆ = -7.7 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆K◆RB◆/Pa = -0.0077\ \mathrm◆LB◆K◆RB◆/atm$$

At $P = 100$ atm: $\Delta T \approx -0.77$ K, so ice melts at approximately $272.4$ K. This is the
Principle behind ice skating: the pressure under the blade slightly lowers the melting point,
Creating a thin lubricating layer of water.

</details>

### 6.5 Worked Example: Phase Diagram Construction

<details>
<summary>Solution: Estimating the Triple Point</summary>

Given for a substance: normal boiling point $T_b = 353$ K at $P = 1$ atm, normal melting point
$T_m = 280$ K at $P = 1$ atm, $L_v = 35000$ J/mol, $L_f = 10000$ J/mol, and
$\Delta V_◆LB◆\mathrm◆LB◆SL◆RB◆ = -5 \times 10^◆LB◆-6◆RB◆◆RB◆$ m$^3$/mol.

At the triple point, the solid-gas, solid-liquid, and liquid-gas coexistence curves meet. To
Estimate, we find where the sublimation curve meets the vaporisation curve.

For the sublimation curve: $L_s = L_f + L_v = 45000$ J/mol.

$$\ln\frac◆LB◆P_◆LB◆\mathrm◆LB◆sub◆RB◆◆RB◆◆LB◆P_0◆RB◆ = -\frac◆LB◆L_s◆RB◆◆LB◆R◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆T◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆T_0◆RB◆\right)◆RB◆$$

At $T = T_m = 280$ K on the sublimation curve (assuming solid-gas equilibrium at the melting point
At low $P$):

$$P_◆LB◆\mathrm◆LB◆sub◆RB◆(280) = P_0 \exp\left[-\frac◆LB◆45000◆RB◆◆LB◆8.314◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆280◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆T_0◆RB◆\right)\right]◆RB◆$$

For the vaporisation curve at $T = 280$ K:

$$P_◆LB◆\mathrm◆LB◆vap◆RB◆(280) = 1\ \mathrm◆LB◆atm◆RB◆ \times \exp\left[-\frac◆LB◆35000◆RB◆◆LB◆8.314◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆280◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆353◆RB◆\right)\right]◆RB◆$$

$$= \exp\left[-4210 \times (0.00357 - 0.00283)\right] = \exp(-3.12) \approx 0.044\ \mathrm◆LB◆atm◆RB◆$$

The triple point is where the sublimation and vaporisation curves intersect. In this simplified
Model (neglecting the curvature of the solid-liquid line), the triple point is near $P \approx
0.04$
atm, $T \approx 275$ K. More accurate treatment requires integrating both curves and finding Their
intersection numerically.

</details>

## 7. The Boltzmann Distribution

### 7.1 Derivation from the Microcanonical Ensemble

Consider a system $S$ in thermal contact with a large heat reservoir $R$ at temperature $T$. The
Total energy $E_◆LB◆\mathrm◆LB◆tot◆RB◆ = E_S + E_R◆RB◆$ is conserved.

The probability that $S$ is in state $i$ with energy $E_i$ is proportional to the number of
Microstates of the reservoir:

$$P_i \propto \Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_i)◆RB◆$$

Since the reservoir is large, expand $\ln \Omega_R$ to first order:

$$\ln \Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_i) \approx \ln \Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆) - E_i \left(\frac◆LB◆\partial \ln \Omega_R◆RB◆◆LB◆\partial E◆RB◆\right)_V◆RB◆◆RB◆$$

$$= \ln \Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆) - \frac◆LB◆E_i◆RB◆◆LB◆k_B T◆RB◆◆RB◆$$

Where we used $\partial \ln \Omega_R / \partial E = 1/(k_B T)$ (the thermodynamic definition of
Temperature). Therefore:

$$P_i \propto e^◆LB◆-E_i/(k_B T)◆RB◆ = e^◆LB◆-\beta E_i◆RB◆$$

Normalising:

$$P_i = \frac◆LB◆e^◆LB◆-\beta E_i◆RB◆◆RB◆◆LB◆Z◆RB◆, \quad Z = \sum_i e^◆LB◆-\beta E_i◆RB◆$$

This is the **Boltzmann distribution** (canonical ensemble).

### 7.2 Connection to Thermodynamics

From the partition function, all thermodynamic quantities follow:

- Internal energy: $U = -\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial \beta◆RB◆$
- Entropy: $S = k_B(\ln Z + \beta U)$
- Helmholtz free energy: $F = -k_B T \ln Z$
- Pressure: $P = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial V◆RB◆$
- Heat capacity: $C_V = k_B \beta^2 \left(\langle E^2 \rangle - \langle E \rangle^2\right)$

### 7.3 Worked Example: Two-Level System

A system has two energy levels: $E_0 = 0$ and $E_1 = \varepsilon$.

$$Z = 1 + e^◆LB◆-\beta\varepsilon◆RB◆$$

$$U = -\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial \beta◆RB◆ = \frac◆LB◆\varepsilon e^◆LB◆-\beta\varepsilon◆RB◆◆RB◆◆LB◆1 + e^◆LB◆-\beta\varepsilon◆RB◆◆RB◆ = \frac◆LB◆\varepsilon◆RB◆◆LB◆e^◆LB◆\beta\varepsilon◆RB◆ + 1◆RB◆$$

$$C = \frac◆LB◆\partial U◆RB◆◆LB◆\partial T◆RB◆ = k_B \beta^2 \varepsilon^2 \frac◆LB◆e^◆LB◆\beta\varepsilon◆RB◆◆RB◆◆LB◆(1 + e^◆LB◆\beta\varepsilon◆RB◆)^2◆RB◆$$

At high $T$ ($\beta \to 0$): $U \to \varepsilon/2$ and $C \to 0$ (equipartition). At low $T$
($\beta \to \infty$): $U \to 0$ and $C \to 0$ (Schottky anomaly).

## 8. Partition Functions

### 8.1 Molecular Partition Function

For a single molecule, the total partition function factors into contributions from different
Degrees of freedom:

$$z = z_◆LB◆\mathrm◆LB◆trans◆RB◆ \cdot z_◆LB◆\mathrm◆LB◆rot◆RB◆ \cdot z_◆LB◆\mathrm◆LB◆vib◆RB◆ \cdot z_◆LB◆\mathrm◆LB◆elec◆RB◆◆RB◆◆RB◆◆RB◆◆RB◆$$

### 8.2 Translational Partition Function

For a particle of mass $m$ in a box of volume $V$:

$$z_◆LB◆\mathrm◆LB◆trans◆RB◆ = \sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ e^◆LB◆-\beta \hbar^2 k^2/(2m)◆RB◆◆RB◆$$

In the continuum limit (replace sum with integral):

$$z_◆LB◆\mathrm◆LB◆trans◆RB◆ = V \left(\frac◆LB◆2\pi m k_B T◆RB◆◆LB◆h^2◆RB◆\right)^◆LB◆3/2◆RB◆ = V n_Q◆RB◆$$

Where $n_Q = (2\pi m k_B T / h^2)^◆LB◆3/2◆RB◆$ is the **quantum concentration**.

**Derivation.** Using $\sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ \to V/(2\pi)^3 \int d^3k$:

$$z_◆LB◆\mathrm◆LB◆trans◆RB◆ = \frac◆LB◆V◆RB◆◆LB◆(2\pi)^3◆RB◆ \int e^◆LB◆-\beta \hbar^2 k^2/(2m)◆RB◆ d^3k = \frac◆LB◆V◆RB◆◆LB◆(2\pi)^3◆RB◆ \left(\frac◆LB◆2\pi m◆RB◆◆LB◆\beta \hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆ \int_0^\infty 4\pi u^2 e^◆LB◆-u^2◆RB◆\,du◆RB◆$$

$$= \frac◆LB◆V◆RB◆◆LB◆(2\pi)^3◆RB◆ \left(\frac◆LB◆2\pi m k_B T◆RB◆◆LB◆\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆ \pi^◆LB◆3/2◆RB◆ = V \left(\frac◆LB◆2\pi m k_B T◆RB◆◆LB◆h^2◆RB◆\right)^◆LB◆3/2◆RB◆$$

$\blacksquare$

### 8.3 Rotational Partition Function

For a rigid rotor (diatomic molecule) with moment of inertia $I$:

$$z_◆LB◆\mathrm◆LB◆rot◆RB◆ = \sum_◆LB◆J=0◆RB◆^◆LB◆\infty◆RB◆ (2J + 1) e^◆LB◆-\beta \hbar^2 J(J+1)/(2I)◆RB◆◆RB◆$$

At high temperature ($T \gg \Theta_◆LB◆\mathrm◆LB◆rot◆RB◆ = \hbar^2/(2Ik_B)◆RB◆$), the sum can be approximated By
an integral:

$$z_◆LB◆\mathrm◆LB◆rot◆RB◆ \approx \frac◆LB◆T◆RB◆◆LB◆\Theta_◆LB◆\mathrm◆LB◆rot◆RB◆◆RB◆ = \frac◆LB◆2Ik_B T◆RB◆◆LB◆\hbar^2◆RB◆◆RB◆◆RB◆$$

For a heteronuclear diatomic, we multiply by the symmetry number $\sigma = 1$. For a homonuclear
Diatomic, $\sigma = 2$ (exchange of identical nuclei gives indistinguishable configurations).

### 8.4 Vibrational Partition Function

For a harmonic oscillator with frequency $\nu$:

$$z_◆LB◆\mathrm◆LB◆vib◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-\beta \hbar \nu (n + 1/2)◆RB◆ = \frac◆LB◆e^◆LB◆-\beta \hbar \nu / 2◆RB◆◆RB◆◆LB◆1 - e^◆LB◆-\beta \hbar \nu◆RB◆◆RB◆◆RB◆$$

The mean vibrational energy is:

$$\langle E_◆LB◆\mathrm◆LB◆vib◆RB◆ \rangle = \frac◆LB◆\hbar \nu◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆\hbar \nu◆RB◆◆LB◆e^◆LB◆\beta \hbar \nu◆RB◆ - 1◆RB◆◆RB◆$$

The first term is the zero-point energy.

## 9. The Ideal Gas

### 9.1 Classical Ideal Gas

For $N$ distinguishable particles, $Z = z^N$. For $N$ **indistinguishable** particles:

$$Z = \frac◆LB◆z^N◆RB◆◆LB◆N!◆RB◆$$

The factor $1/N!$ corrects for overcounting (Gibbs paradox).

**Proof (Gibbs paradox).** Without the $1/N!$ factor, the entropy $S = Nk_B \ln z + U/T$ is not
Extensive: mixing two identical gases gives $S_◆LB◆\mathrm◆LB◆mix◆RB◆ = 2S + Nk_B \ln 2 \neq 2S◆RB◆$. With
$1/N!$Using Stirling's approximation:

$$F = -Nk_B T \ln\left(\frac◆LB◆z◆RB◆◆LB◆N◆RB◆\right) - Nk_B T$$

$$S = -\left(\frac◆LB◆\partial F◆RB◆◆LB◆\partial T◆RB◆\right)_V = Nk_B \left[\ln\left(\frac◆LB◆z◆RB◆◆LB◆N◆RB◆\right) + 1\right] + \frac◆LB◆U◆RB◆◆LB◆T◆RB◆$$

Which is now extensive. $\blacksquare$

### 9.2 Equation of State

From the translational partition function:

$$Z = \frac◆LB◆1◆RB◆◆LB◆N!◆RB◆\left[V\left(\frac◆LB◆2\pi m k_B T◆RB◆◆LB◆h^2◆RB◆\right)^◆LB◆3/2◆RB◆\right]^N$$

$$F = -k_B T \ln Z = -Nk_B T \left[\ln\left(\frac◆LB◆V◆RB◆◆LB◆N◆RB◆\left(\frac◆LB◆2\pi m k_B T◆RB◆◆LB◆h^2◆RB◆\right)^◆LB◆3/2◆RB◆\right) + 1\right]$$

$$P = -\left(\frac◆LB◆\partial F◆RB◆◆LB◆\partial V◆RB◆\right)_◆LB◆T,N◆RB◆ = \frac◆LB◆Nk_B T◆RB◆◆LB◆V◆RB◆$$

This recovers the **ideal gas law** $PV = Nk_B T$.

### 9.3 Maxwell-Boltzmann Speed Distribution

The probability distribution for the speed $v$ of a molecule in an ideal gas at temperature $T$:

$$f(v)\,dv = 4\pi \left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆ v^2 e^◆LB◆-mv^2/(2k_B T)◆RB◆\,dv$$

**Characteristic speeds:**

- **Most probable speed:** $v_p = \sqrt◆LB◆2k_B T / m◆RB◆$
- **Mean speed:** $\langle v \rangle = \sqrt◆LB◆8k_B T / (\pi m)◆RB◆$
- **Root-mean-square speed:** $v_◆LB◆\mathrm◆LB◆rms◆RB◆ = \sqrt◆LB◆3k_B T / m◆RB◆◆RB◆$

### 9.4 Equipartition Theorem

**Theorem 9.1 (Equipartition).** Each quadratic degree of freedom in the Hamiltonian contributes
$\frac◆LB◆1◆RB◆◆LB◆2◆RB◆k_B T$ to the average energy.

**Proof.** If $H$ contains a term $aq_i^2$ or $bp_i^2$ with $a, b \gt 0$Then:

$$\langle q_i^2 \rangle = \frac◆LB◆\int q_i^2 e^◆LB◆-\beta a q_i^2◆RB◆\,dq_i◆RB◆◆LB◆\int e^◆LB◆-\beta a q_i^2◆RB◆\,dq_i◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2a\beta◆RB◆ = \frac◆LB◆k_B T◆RB◆◆LB◆2a◆RB◆$$

So $\langle aq_i^2 \rangle = k_B T / 2$. Similarly for momentum terms. $\blacksquare$

This gives $U = \frac◆LB◆f◆RB◆◆LB◆2◆RB◆Nk_B T$ and $C_V = \frac◆LB◆f◆RB◆◆LB◆2◆RB◆Nk_B$ where $f$ is the number of quadratic
Degrees of freedom.

### 9.5 Kinetic Theory of Gases

#### Mean Free Path

The **mean free path** $\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆◆RB◆$ is the average distance a molecule travels between
Collisions.

**Theorem 9.2 (Mean free path).** For a gas of $N$ hard-sphere molecules of diameter $d$ in volume
$V$:

$$\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,\pi d^2 n◆RB◆◆RB◆$$

Where $n = N/V$ is the number density.

**Proof.** A molecule of diameter $d$ sweeps out a cylinder of cross-section $\sigma = \pi d^2$ (per
collision cross-section for identical particles, the effective cross-section is
$\pi(2d/2)^2 = \pi d^2$But the relative velocity correction introduces the factor $\sqrt◆LB◆2◆RB◆$). In
time $\Delta t$The molecule travels $v\,\Delta t$ and sweeps volume $\sigma v\,\Delta t$. The Number
of collisions is $n\sigma v\,\Delta t$So the mean free path is:

$$\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆v\,\Delta t◆RB◆◆LB◆n\sigma v\,\Delta t◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆n\sigma◆RB◆◆RB◆$$

For the correct treatment, one must use the mean relative velocity. Since both colliding molecules
Are moving, the relative speed is $\sqrt◆LB◆2◆RB◆$ times the mean speed:

$$\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,\pi d^2 n◆RB◆◆RB◆$$

$\blacksquare$

**Numerical example.** For air at STP ($n \approx 2.7 \times 10^◆LB◆25◆RB◆$
m$^◆LB◆-3◆RB◆$, $d \approx 3.7
\times 10^◆LB◆-10◆RB◆$ m):

$$\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,\pi (3.7 \times 10^◆LB◆-10◆RB◆)^2 \times 2.7 \times 10^◆LB◆25◆RB◆◆RB◆ \approx 6.8 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆m◆RB◆ \approx 68\ \mathrm◆LB◆nm◆RB◆◆RB◆$$

The collision frequency is
$f_◆LB◆\mathrm◆LB◆coll◆RB◆ = \langle v \rangle / \lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ \approx
500/(6.8 \times 10^◆LB◆-8◆RB◆) \approx 7.4 \times 10^9◆RB◆◆RB◆$
s$^◆LB◆-1◆RB◆$.

#### Transport Properties

**Viscosity.** The shear viscosity of a dilute gas:

$$\eta = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆ n m \langle v \rangle \lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆ \frac◆LB◆m\langle v \rangle◆RB◆◆LB◆\pi d^2 \sqrt◆LB◆2◆RB◆◆RB◆◆RB◆$$

Substituting $\langle v \rangle = \sqrt◆LB◆8k_B T/(\pi m)◆RB◆$:

$$\eta = \frac◆LB◆2◆RB◆◆LB◆3\pi^◆LB◆3/2◆RB◆◆RB◆ \frac◆LB◆\sqrt◆LB◆mk_B T◆RB◆◆RB◆◆LB◆d^2◆RB◆$$

A key prediction: viscosity is _independent of density_ for a dilute gas (Maxwell's result, Verified
experimentally). This is because $\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ \propto 1/n◆RB◆$ but the momentum Transfer per
collision is proportional to the number of molecules per unit volume, giving
$\eta \propto n \cdot (1/n) = \mathrm◆LB◆const◆RB◆$.

**Thermal conductivity.** For a monatomic gas:

$$\kappa = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆ n \langle v \rangle \lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ \cdot \frac◆LB◆f◆RB◆◆LB◆2◆RB◆k_B = \frac◆LB◆f◆RB◆◆LB◆2◆RB◆\frac◆LB◆k_B◆RB◆◆LB◆m◆RB◆\eta◆RB◆$$

Where $f = 3$ for a monatomic gas. The ratio $\kappa/(\eta c_V/m) = f/2$ is predicted to be a
Universal constant (Eucken's formula).

**Diffusion (self-diffusion).** The self-diffusion coefficient:

$$D = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\langle v \rangle \lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\frac◆LB◆\langle v \rangle◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,\pi d^2 n◆RB◆◆RB◆$$

**Theorem 9.3 (Einstein relation).** The diffusion coefficient is related to mobility $\mu$ by:

$$D = \mu k_B T$$

This is a consequence of the fluctuation-dissipation theorem.

<details>
<summary>Solution: Worked Example — Viscosity of Nitrogen</summary>

For N$_2$ at $T = 273$ K: $m = 4.65 \times 10^◆LB◆-26◆RB◆$ kg, $d = 3.7 \times 10^◆LB◆-10◆RB◆$ m.

$$\eta = \frac◆LB◆2◆RB◆◆LB◆3\pi^◆LB◆3/2◆RB◆◆RB◆ \frac◆LB◆\sqrt◆LB◆(4.65 \times 10^◆LB◆-26◆RB◆)(1.381 \times 10^◆LB◆-23◆RB◆)(273)◆RB◆◆RB◆◆LB◆(3.7 \times 10^◆LB◆-10◆RB◆)^2◆RB◆$$

$$= \frac◆LB◆2◆RB◆◆LB◆3\pi^◆LB◆3/2◆RB◆◆RB◆ \frac◆LB◆\sqrt◆LB◆1.75 \times 10^◆LB◆-46◆RB◆◆RB◆◆RB◆◆LB◆1.37 \times 10^◆LB◆-19◆RB◆◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆16.69◆RB◆ \times \frac◆LB◆1.32 \times 10^◆LB◆-23◆RB◆◆RB◆◆LB◆1.37 \times 10^◆LB◆-19◆RB◆◆RB◆$$

$$\approx 1.15 \times 10^◆LB◆-5◆RB◆\ \mathrm◆LB◆Pa◆RB◆\cdot s$$

The experimental value is $\eta \approx 1.66 \times 10^◆LB◆-5◆RB◆$ Pa$\cdot$S. The discrepancy is due to
The hard-sphere model being an approximation; real molecules have softer repulsive potentials.

</details>

#### Derivation of the Maxwell-Boltzmann Speed Distribution

**Theorem 9.4.** The speed distribution for molecules in an ideal gas at temperature $T$ is:

$$f(v)\,dv = 4\pi \left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆ v^2 e^◆LB◆-mv^2/(2k_B T)◆RB◆\,dv$$

**Proof.** In the canonical ensemble, the probability of a molecule having momentum $\mathbf◆LB◆p◆RB◆$ is
Proportional to $e^◆LB◆-\beta p^2/(2m)◆RB◆$. The velocity distribution is:

$$P(\mathbf◆LB◆v◆RB◆)\,d^3v = \left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆ \exp\left(-\frac◆LB◆mv^2◆RB◆◆LB◆2k_B T◆RB◆\right)\,d^3v$$

To find the speed distribution, transform to spherical coordinates in velocity space and integrate
Over angles:

$$f(v)\,dv = P(\mathbf◆LB◆v◆RB◆) \cdot 4\pi v^2\,dv = 4\pi \left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆ v^2 e^◆LB◆-mv^2/(2k_B T)◆RB◆\,dv$$

$\blacksquare$

**Characteristic speeds from $f(v)$.** The most probable speed maximises $v^2 e^◆LB◆-mv^2/(2k_BT)◆RB◆$:

$$\frac◆LB◆d◆RB◆◆LB◆dv◆RB◆\left(v^2 e^◆LB◆-mv^2/(2k_BT)◆RB◆\right) = 0 \implies v_p = \sqrt◆LB◆\frac◆LB◆2k_B T◆RB◆◆LB◆m◆RB◆◆RB◆$$

The mean speed:

$$\langle v \rangle = \int_0^\infty v\,f(v)\,dv = 4\pi\left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆\int_0^\infty v^3 e^◆LB◆-mv^2/(2k_BT)◆RB◆\,dv = \sqrt◆LB◆\frac◆LB◆8k_B T◆RB◆◆LB◆\pi m◆RB◆◆RB◆$$

The RMS speed:

$$v_◆LB◆\mathrm◆LB◆rms◆RB◆ = \sqrt◆LB◆\langle v^2 \rangle◆RB◆ = \sqrt◆LB◆\frac◆LB◆3k_B T◆RB◆◆LB◆m◆RB◆◆RB◆◆RB◆$$

## 10. Quantum Statistical Mechanics

### 10.1 Identical Particles and Indistinguishability

Classical particles are distinguishable. Quantum particles are not. There are two types:

- **Fermions** (half-integer spin): obey the **Pauli exclusion principle**; the total wavefunction
  is antisymmetric under particle exchange.
- **Bosons** (integer spin): the total wavefunction is symmetric under particle exchange.

### 10.2 Fermi-Dirac Statistics

For fermions, each state can be occupied by at most one particle. The occupation number is $n_i = 0$
Or $1$.

The average occupation number:

$$\langle n_i \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon_i - \mu)◆RB◆ + 1◆RB◆ = f_◆LB◆\mathrm◆LB◆FD◆RB◆(\varepsilon_i)◆RB◆$$

**Derivation from the grand canonical ensemble.** The grand partition function for a single state at
Energy $\varepsilon_i$:

$$\mathcal◆LB◆Z◆RB◆_i = \sum_◆LB◆n_i=0◆RB◆^◆LB◆1◆RB◆ e^◆LB◆-\beta n_i(\varepsilon_i - \mu)◆RB◆ = 1 + e^◆LB◆-\beta(\varepsilon_i - \mu)◆RB◆$$

$$\langle n_i \rangle = -\frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \mathcal◆LB◆Z◆RB◆_i◆RB◆◆LB◆\partial \mu◆RB◆ = \frac◆LB◆e^◆LB◆-\beta(\varepsilon_i - \mu)◆RB◆◆RB◆◆LB◆1 + e^◆LB◆-\beta(\varepsilon_i - \mu)◆RB◆◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon_i - \mu)◆RB◆ + 1◆RB◆$$

$\blacksquare$

**The Fermi energy** $\varepsilon_F$ is the chemical potential at $T = 0$:
$f_◆LB◆\mathrm◆LB◆FD◆RB◆(\varepsilon)
= \Theta(\varepsilon_F - \varepsilon)◆RB◆$.

**The Fermi temperature:** $T_F = \varepsilon_F / k_B$.

**Density of states** for a 3D free electron gas:

$$g(\varepsilon) = \frac◆LB◆V◆RB◆◆LB◆2\pi^2◆RB◆\left(\frac◆LB◆2m◆RB◆◆LB◆\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆ \sqrt◆LB◆\varepsilon◆RB◆$$

The total number of electrons:

$$N = \int_0^◆LB◆\varepsilon_F◆RB◆ g(\varepsilon)\,d\varepsilon = \frac◆LB◆V◆RB◆◆LB◆3\pi^2◆RB◆\left(\frac◆LB◆2m\varepsilon_F◆RB◆◆LB◆\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆$$

### 10.3 Bose-Einstein Statistics

For bosons, any number of particles can occupy a single state:

$$\langle n_i \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon_i - \mu)◆RB◆ - 1◆RB◆ = f_◆LB◆\mathrm◆LB◆BE◆RB◆(\varepsilon_i)◆RB◆$$

The chemical potential for bosons must satisfy $\mu \leq \varepsilon_0$ (lowest single-particle
Energy) to ensure $\langle n_i \rangle \geq 0$.

**Derivation.** For a single bosonic state:

$$\mathcal◆LB◆Z◆RB◆_i = \sum_◆LB◆n_i=0◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-\beta n_i(\varepsilon_i - \mu)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 - e^◆LB◆-\beta(\varepsilon_i - \mu)◆RB◆◆RB◆$$

$$\langle n_i \rangle = -\frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \mathcal◆LB◆Z◆RB◆_i◆RB◆◆LB◆\partial \mu◆RB◆ = \frac◆LB◆e^◆LB◆-\beta(\varepsilon_i - \mu)◆RB◆◆RB◆◆LB◆1 - e^◆LB◆-\beta(\varepsilon_i - \mu)◆RB◆◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon_i - \mu)◆RB◆ - 1◆RB◆$$

$\blacksquare$

### 10.4 Bose-Einstein Condensation

For an ideal Bose gas in 3D, the critical temperature is:

$$T_c = \frac◆LB◆2\pi\hbar^2◆RB◆◆LB◆mk_B◆RB◆\left(\frac◆LB◆n◆RB◆◆LB◆\zeta(3/2)◆RB◆\right)^◆LB◆2/3◆RB◆$$

Where $n = N/V$ is the particle density and $\zeta(3/2) \approx 2.612$.

Below $T_c$The chemical potential is essentially zero ($\mu \approx 0$), and a macroscopic Fraction
of particles condense into the ground state:

$$\frac◆LB◆N_0◆RB◆◆LB◆N◆RB◆ = 1 - \left(\frac◆LB◆T◆RB◆◆LB◆T_c◆RB◆\right)^◆LB◆3/2◆RB◆$$

**Derivation.** The number of particles in excited states is:

$$N_◆LB◆\mathrm◆LB◆ex◆RB◆ = \int_0^◆LB◆\infty◆RB◆ \frac◆LB◆g(\varepsilon)\,d\varepsilon◆RB◆◆LB◆e^◆LB◆\beta\varepsilon◆RB◆ - 1◆RB◆ = V\left(\frac◆LB◆mk_B T◆RB◆◆LB◆2\pi\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆ \zeta(3/2)◆RB◆$$

This has a maximum value at $\mu = 0$. When $N \gt N_◆LB◆\mathrm◆LB◆ex◆RB◆^◆LB◆\mathrm◆LB◆max◆RB◆◆RB◆◆RB◆$The excess Particles
must go to the ground state. Setting $N = N_◆LB◆\mathrm◆LB◆ex◆RB◆^◆LB◆\mathrm◆LB◆max◆RB◆◆RB◆◆RB◆$ at $T = T_c$ Gives the
critical temperature above. $\blacksquare$

### 10.5 Comparison of the Three Statistics

$$f_◆LB◆\mathrm◆LB◆MB◆RB◆ = e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆, \quad f_◆LB◆\mathrm◆LB◆FD◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆, \quad f_◆LB◆\mathrm◆LB◆BE◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ - 1◆RB◆◆RB◆◆RB◆◆RB◆$$

In the classical (dilute) limit $e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ \gg 1$All three reduce to the
Maxwell-Boltzmann distribution. This occurs when $n \ll n_Q$ (dilute gas) or $T \gg T_F$ for
Fermions.

### 10.6 Worked Example: Electron Gas in Metals

For copper: one conduction electron per atom, $n \approx 8.5 \times 10^◆LB◆28◆RB◆$ m$^◆LB◆-3◆RB◆$.

$$\varepsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆(3\pi^2 n)^◆LB◆2/3◆RB◆ \approx 7.0 \times 10^◆LB◆-19◆RB◆\ \mathrm◆LB◆J◆RB◆ \approx 4.4\ \mathrm◆LB◆eV◆RB◆$$

$$T_F = \frac◆LB◆\varepsilon_F◆RB◆◆LB◆k_B◆RB◆ \approx 51000\ \mathrm◆LB◆K◆RB◆$$

At room temperature ($T = 300$ K), $T/T_F \approx 0.006$So the gas is deeply degenerate. The heat
Capacity is:

$$C_V \approx \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆Nk_B\frac◆LB◆T◆RB◆◆LB◆T_F◆RB◆$$

This is much smaller than the classical prediction $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B$Explaining why electrons
Contribute negligibly to the heat capacity of metals at room temperature.

## 11. Grand Canonical Ensemble

### 11.1 Definition

The **grand canonical ensemble** describes a system that can exchange both energy and particles with
A reservoir at temperature $T$ and chemical potential $\mu$.

The **grand partition function:**

$$\Xi = \sum_N \sum_i e^◆LB◆-\beta(E_i - \mu N)◆RB◆$$

The probability of finding the system in state $i$ with $N$ particles:

$$P_◆LB◆i,N◆RB◆ = \frac◆LB◆e^◆LB◆-\beta(E_i - \mu N)◆RB◆◆RB◆◆LB◆\Xi◆RB◆$$

### 11.2 Connection to Thermodynamics

$$\ln \Xi = \beta PV$$

This follows from the Euler relation for the grand potential $\Phi_G = -PV = F - \mu N$.

**Key relations:**

- Average particle number:
  $\langle N \rangle = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial \mu◆RB◆\bigg|_◆LB◆T,V◆RB◆$
- Pressure: $P = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \Xi◆RB◆◆LB◆\partial V◆RB◆\bigg|_◆LB◆T,\mu◆RB◆$
- Entropy: $S = k_B(\ln \Xi + \beta \langle E \rangle - \beta \mu \langle N \rangle)$

### 11.3 Fluctuations

The number fluctuations in the grand canonical ensemble:

$$\frac◆LB◆\langle N^2 \rangle - \langle N \rangle^2◆RB◆◆LB◆\langle N \rangle^2◆RB◆ = \frac◆LB◆k_B T \kappa_T◆RB◆◆LB◆V◆RB◆$$

Where $\kappa_T = -\frac◆LB◆1◆RB◆◆LB◆V◆RB◆(\partial V/\partial P)_T$ is the isothermal compressibility. For an
Ideal gas, this gives $\langle N^2 \rangle - \langle N \rangle^2 = \langle N \rangle$Consistent With
Poisson .../4-statistics-and-probability/2_statistics.

## 12. Fluctuation-Dissipation Theorem

### 12.1 Energy Fluctuations

In the canonical ensemble:

$$\langle E^2 \rangle - \langle E \rangle^2 = k_B T^2 C_V$$

**Proof.**
$\langle E^2 \rangle - \langle E \rangle^2 = \frac◆LB◆\partial^2 \ln Z◆RB◆◆LB◆\partial \beta^2◆RB◆
= -\frac◆LB◆\partial U◆RB◆◆LB◆\partial \beta◆RB◆ = k_B T^2 C_V$.
$\blacksquare$

This is a manifestation of the **fluctuation-dissipation theorem**: the response of the system
($C_V$) is related to the equilibrium fluctuations.

### 12.2 General Fluctuation-Dissipation Relation

For a general observable $X$ coupled to its conjugate field $f$ via $H' = -fX$:

$$\chi = \beta \left(\langle X^2 \rangle - \langle X \rangle^2\right)$$

Where $\chi = \partial \langle X \rangle / \partial f$ is the susceptibility. This connects the
Linear response of a system to its spontaneous fluctuations.

## 13. Blackbody Radiation

### 13.1 Planck Distribution

Treating electromagnetic radiation in a cavity as a gas of non-interacting photons (bosons with
$\mu = 0$):

$$\langle n(\omega) \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

The **spectral energy density** (energy per unit volume per unit frequency):

$$u(\omega) = \frac◆LB◆\hbar \omega^3◆RB◆◆LB◆\pi^2 c^3◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

**Derivation.** The density of photon states in a cavity of volume $V$ is
$g(\omega) = V\omega^2/(\pi^2 c^3)$. Each photon has energy $\hbar\omega$And the mean occupation
Number is the Bose-Einstein distribution with $\mu = 0$:

$$u(\omega) = \frac◆LB◆g(\omega)◆RB◆◆LB◆V◆RB◆ \cdot \hbar\omega \cdot \langle n(\omega) \rangle = \frac◆LB◆\omega^2◆RB◆◆LB◆\pi^2 c^3◆RB◆ \cdot \frac◆LB◆\hbar\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

$\blacksquare$

### 13.2 Stefan-Boltzmann Law

The total energy density:

$$u = \int_0^\infty u(\omega)\,d\omega = \frac◆LB◆\hbar◆RB◆◆LB◆\pi^2 c^3◆RB◆ \int_0^\infty \frac◆LB◆\omega^3\,d\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

Substituting $x = \beta\hbar\omega$:

$$u = \frac◆LB◆(k_B T)^4◆RB◆◆LB◆\pi^2 \hbar^3 c^3◆RB◆ \int_0^\infty \frac◆LB◆x^3◆RB◆◆LB◆e^x - 1◆RB◆\,dx = \frac◆LB◆(k_B T)^4◆RB◆◆LB◆\pi^2 \hbar^3 c^3◆RB◆ \cdot \frac◆LB◆\pi^4◆RB◆◆LB◆15◆RB◆ = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆15\hbar^3 c^3◆RB◆ T^4$$

The **Stefan-Boltzmann law** for radiated power per unit area:

$$◆LB◆j = \frac◆LB◆c◆RB◆◆LB◆4◆RB◆ u = \sigma T^4, \quad \sigma = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆60\hbar^3 c^2◆RB◆ \approx 5.67 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆W◆RB◆\,m^◆LB◆-2◆RB◆\,K^◆LB◆-4◆RB◆◆RB◆$$

### 13.3 Wien's Displacement Law

The peak of $u(\lambda)$ occurs at:

$$\lambda_◆LB◆\mathrm◆LB◆max◆RB◆ T = 2.898 \times 10^◆LB◆-3◆RB◆\ \mathrm◆LB◆m◆RB◆\cdot K◆RB◆$$

This follows from maximising $u(\lambda) = (8\pi h c / \lambda^5)(e^◆LB◆hc/(\lambda k_B T)◆RB◆ - 1)^◆LB◆-1◆RB◆$
With respect to $\lambda$.

### 13.4 Detailed Derivation of Planck's Law

**Theorem 13.1 (Planck's law).** The spectral radiance of a blackbody is:

$$B(\omega) = \frac◆LB◆\hbar \omega^3◆RB◆◆LB◆4\pi^3 c^2◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

**Proof.** Consider electromagnetic modes in a cavity of volume $V = L^3$ with periodic boundary
Conditions. The allowed wavevectors are $\mathbf◆LB◆k◆RB◆ = (2\pi/L)(n_x, n_y, n_z)$ with
$n_i \in
\mathbb◆LB◆Z◆RB◆$. The number of modes with wavevector magnitude between $K$ and $K + dk$
(counting two Polarisations) is:

$$g(k)\,dk = \frac◆LB◆V \cdot 4\pi k^2\,dk◆RB◆◆LB◆(2\pi)^3◆RB◆ \times 2 = \frac◆LB◆Vk^2◆RB◆◆LB◆\pi^2◆RB◆\,dk$$

Converting to frequency using $\omega = ck$ and $dk = d\omega/c$:

$$g(\omega)\,d\omega = \frac◆LB◆V\omega^2◆RB◆◆LB◆\pi^2 c^3◆RB◆\,d\omega$$

Each mode is a quantum harmonic oscillator with energy $\hbar\omega(n + 1/2)$. Since photons are
Bosons with $\mu = 0$ (photon number is not conserved), the mean occupation number is:

$$\langle n(\omega) \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

The energy in modes between $\omega$ and $\omega + d\omega$ is:

$$dU = g(\omega)\,d\omega \cdot \hbar\omega \cdot \langle n(\omega) \rangle = \frac◆LB◆V\hbar\omega^3◆RB◆◆LB◆\pi^2 c^3◆RB◆ \cdot \frac◆LB◆d\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

The spectral energy density is $u(\omega) = (1/V)\,dU/d\omega$:

$$u(\omega) = \frac◆LB◆\hbar\omega^3◆RB◆◆LB◆\pi^2 c^3◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

$\blacksquare$

**Historical note.** Planck originally derived this result in 1900 by interpolating between the
Rayleigh-Jeans law (valid at low frequencies, $u(\omega) \propto \omega^2$) and Wien's law (valid At
high frequencies, $u(\omega) \propto \omega^3 e^◆LB◆-\beta\hbar\omega◆RB◆$). The Rayleigh-Jeans law Leads
to the "ultraviolet catastrophe" — infinite total energy — which Planck resolved by Postulating that
energy is quantised in units of $\hbar\omega$.

### 13.5 Derivation of the Stefan-Boltzmann Law

**Theorem 13.2 (Stefan-Boltzmann).** The total radiated power per unit area from a blackbody is:

$$j = \sigma T^4, \quad \sigma = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆60\hbar^3 c^2◆RB◆$$

**Proof.** Integrate the spectral energy density:

$$u = \int_0^\infty u(\omega)\,d\omega = \frac◆LB◆\hbar◆RB◆◆LB◆\pi^2 c^3◆RB◆ \int_0^\infty \frac◆LB◆\omega^3\,d\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

Substituting $x = \beta\hbar\omega$:

$$u = \frac◆LB◆(k_B T)^4◆RB◆◆LB◆\pi^2 \hbar^3 c^3◆RB◆ \int_0^\infty \frac◆LB◆x^3\,dx◆RB◆◆LB◆e^x - 1◆RB◆$$

The integral $\int_0^\infty x^3/(e^x - 1)\,dx = \Gamma(4)\,\zeta(4) = 6 \times \pi^4/90 = \pi^4/15$.

$$u = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆15\hbar^3 c^3◆RB◆\,T^4$$

The radiated power per unit area (intensity) relates to the energy density by $j = cu/4$ (the Factor
of $1/4$ accounts for the projection effect and the average of $\cos\theta$ over the Hemisphere):

$$j = \frac◆LB◆c◆RB◆◆LB◆4◆RB◆u = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆60\hbar^3 c^2◆RB◆\,T^4 = \sigma T^4$$

$\blacksquare$

### 13.6 Wien's Displacement Law

**Theorem 13.3 (Wien's displacement law).** The peak of $u(\lambda)$ occurs at:

$$\lambda_◆LB◆\mathrm◆LB◆max◆RB◆ T = b = 2.898 \times 10^◆LB◆-3◆RB◆\ \mathrm◆LB◆m◆RB◆ \cdot K◆RB◆$$

**Proof.** Express the spectral energy density in terms of wavelength $\lambda = 2\pi c/\omega$:

$$u(\lambda) = \frac◆LB◆8\pi h c◆RB◆◆LB◆\lambda^5◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆hc/(\lambda k_B T)◆RB◆ - 1◆RB◆$$

Setting $du/d\lambda = 0$ and substituting $x = hc/(\lambda k_B T)$:

$$\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆\left(\frac◆LB◆x^5◆RB◆◆LB◆e^x - 1◆RB◆\right) = 0 \implies 5(e^x - 1) - xe^x = 0$$

This transcendental equation has the solution $x \approx 4.965$Giving
$\lambda_◆LB◆\mathrm◆LB◆max◆RB◆ T
= hc/(4.965\,k_B) = b◆RB◆$. $\blacksquare$

<details>
<summary>Solution: Worked Example — Temperature of the Sun's Surface</summary>

The Sun's emission peaks at $\lambda_◆LB◆\mathrm◆LB◆max◆RB◆ \approx 502◆RB◆$ nm (green). Using Wien's law:

$$T = \frac◆LB◆b◆RB◆◆LB◆\lambda_◆LB◆\mathrm◆LB◆max◆RB◆◆RB◆ = \frac◆LB◆2.898 \times 10^◆LB◆-3◆RB◆◆RB◆◆LB◆502 \times 10^◆LB◆-9◆RB◆◆RB◆ \approx 5770\ \mathrm◆LB◆K◆RB◆◆RB◆$$

The total radiated power per unit area:

$$j = \sigma T^4 = (5.67 \times 10^◆LB◆-8◆RB◆)(5770)^4 \approx 6.32 \times 10^7\ \mathrm◆LB◆W◆RB◆/m^2$$

With solar radius $R_\odot \approx 6.96 \times 10^8$ m, the total luminosity is:

$$L = 4\pi R_\odot^2 \cdot j \approx 4\pi(6.96 \times 10^8)^2 \times 6.32 \times 10^7 \approx 3.85 \times 10^◆LB◆26◆RB◆\ \mathrm◆LB◆W◆RB◆$$

This matches the measured solar luminosity to within a few percent, validating blackbody theory.

</details>

## 14. The Ising Model

### 14.1 Definition

The **Ising model** is a lattice of $N$ spin-1/2 variables $s_i \in \\{+1, -1\\}$ with Hamiltonian:

$$H = -J \sum_◆LB◆\langle i,j \rangle◆RB◆ s_i s_j - h \sum_i s_i$$

Where $J$ is the coupling constant, $\langle i,j \rangle$ denotes nearest neighbours, and $h$ is an
External magnetic field.

- $J \gt 0$: ferromagnetic (spins tend to align).
- $J \lt 0$: antiferromagnetic (spins tend to anti-align).

### 14.2 Exact Solution in 1D

**Theorem 14.1 (Ising, 1925).** The 1D Ising model has no phase transition at $T \gt 0$.

**Proof sketch.** Using the transfer matrix method, the partition function for $N$ spins with
Periodic boundary conditions is:

$$Z = \lambda_+^N + \lambda_-^N$$

Where
$\lambda_\pm = e^◆LB◆\beta J◆RB◆\cosh(\beta h) \pm \sqrt◆LB◆e^◆LB◆2\beta J◆RB◆\sinh^2(\beta h) + e^◆LB◆-2\beta J◆RB◆◆RB◆$.

In the thermodynamic limit ($N \to \infty$), $Z \to \lambda_+^N$ (the larger eigenvalue dominates).

The magnetisation per spin is:

$$m = \frac◆LB◆1◆RB◆◆LB◆\beta◆RB◆\frac◆LB◆\partial \ln \lambda_+◆RB◆◆LB◆\partial h◆RB◆$$

For $h = 0$: $\lambda_+ = e^◆LB◆\beta J◆RB◆ + e^◆LB◆-\beta J◆RB◆ = 2\cosh(\beta J)$And $m = 0$ for all
$T \gt 0$. There is no spontaneous magnetisation, hence no phase transition. $\blacksquare$

### 14.3 Mean-Field Approximation

Replace the interaction of spin $s_i$ with its neighbours by the mean field $m = \langle s \rangle$:

$$H_◆LB◆\mathrm◆LB◆MF◆RB◆ = -J z m \sum_i s_i - h \sum_i s_i◆RB◆$$

Where $z$ is the coordination number. The self-consistency equation:

$$m = \tanh\left[\beta(Jzm + h)\right]$$

For $h = 0$A non-zero solution exists when $T \lt T_c = Jz/k_B$.

The critical exponents in mean-field theory: $\beta = 1/2$$\gamma = 1$$\delta = 3$.

### 14.4 Landau Theory of Phase Transitions

The Landau theory provides a phenomenological description of second-order phase transitions using a
Free energy expanded in the **order parameter** $\phi$:

$$F(\phi, T) = F_0(T) + a(T - T_c)\phi^2 + b\phi^4 + \cdots$$

Where $a \gt 0$ and $b \gt 0$.

- For $T \gt T_c$: the minimum is at $\phi = 0$ (disordered phase).
- For $T \lt T_c$: the minimum is at $\phi = \pm\sqrt◆LB◆a(T_c - T)/(2b)◆RB◆$ (ordered phase).

**Specific heat jump.** The entropy $S = -\partial F/\partial T$ has a discontinuity at $T_c$:

$$\Delta C_P = -T_c \frac◆LB◆\partial^2 F◆RB◆◆LB◆\partial T^2◆RB◆\bigg|_◆LB◆T_c^+◆RB◆^◆LB◆T_c^-◆RB◆ = \frac◆LB◆a^2 T_c◆RB◆◆LB◆2b◆RB◆$$

**Limitations.** Landau theory neglects fluctuations and gives incorrect critical exponents in low
Dimensions. It is exact in mean-field (infinite-range) models and above the upper critical dimension
$d_u = 4$.

### 14.5 Scaling and Critical Exponents

Near a critical point, thermodynamic quantities follow power laws:

| Quantity                      | Power law                                      | Exponent |
| ----------------------------- | ---------------------------------------------- | -------- |
| Order parameter ($T \lt T_c$) | $\phi \propto (T_c - T)^\beta$                 | $\beta$  |
| Susceptibility                | $\chi \propto \lvert T - T_c \rvert^◆LB◆-\gamma◆RB◆$ | $\gamma$ |
| Specific heat                 | $C \propto \lvert T - T_c \rvert^◆LB◆-\alpha◆RB◆$    | $\alpha$ |
| Correlation length            | $\xi \propto \lvert T - T_c \rvert^◆LB◆-\nu◆RB◆$     | $\nu$    |

The **scaling relations** (from the homogeneity hypothesis):

$$\alpha + 2\beta + \gamma = 2 \quad \mathrm◆LB◆(Rushbrooke)◆RB◆$$

$$\gamma = \beta(\delta - 1) \quad \mathrm◆LB◆(Widom)◆RB◆$$

$$\gamma = (2 - \eta)\nu \quad \mathrm◆LB◆(Fisher)◆RB◆$$

These are verified experimentally and by renormalisation group calculations.

:::caution Common Pitfall The mean-field approximation overestimates $T_c$ and gives incorrect
Critical exponents. In 1D, it predicts a phase transition at $T_c = Jz/k_B$Whereas the exact
Solution shows no transition at $T \gt 0$. Mean-field theory is only reliable in high dimensions
(where fluctuations are small) or for long-range interactions. :::

## 15. The Microcanonical Ensemble

### 15.1 Definition and Fundamental Postulate

The **microcanonical ensemble** describes an isolated system with fixed energy $E$Volume $V$And
Particle number $N$. The fundamental postulate of statistical mechanics states:

> All accessible microstates of an isolated system are equally probable.

For a classical system, the number of microstates with energy between $E$ and $E + \delta E$ is:

$$\Omega(E, V, N) = \frac◆LB◆1◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆ \int_◆LB◆E \lt H(\mathbf◆LB◆q◆RB◆,\mathbf◆LB◆p◆RB◆) \lt E+\delta E◆RB◆ d^◆LB◆3N◆RB◆q\,d^◆LB◆3N◆RB◆p$$

The factor $h^◆LB◆3N◆RB◆$ makes $\Omega$ dimensionless (and is justified by quantum mechanics), and $1/N!$
accounts for indistinguishability.

### 15.2 Connection to Thermodynamics

**Definition (Microcanonical temperature).** The temperature is defined by:

$$\frac◆LB◆1◆RB◆◆LB◆T◆RB◆ = \left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial E◆RB◆\right)_◆LB◆V,N◆RB◆, \quad S = k_B \ln \Omega$$

**Definition (Microcanonical pressure).**

$$P = T\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_◆LB◆E,N◆RB◆$$

**Definition (Microcanonical chemical potential).**

$$\mu = -T\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial N◆RB◆\right)_◆LB◆E,V◆RB◆$$

### 15.3 The Ideal Gas in the Microcanonical Ensemble

**Theorem 15.1 (Sackur-Tetrode equation).** The entropy of a monatomic ideal gas is:

$$S = Nk_B\left[\ln\left(\frac◆LB◆V◆RB◆◆LB◆N◆RB◆\left(\frac◆LB◆4\pi m E◆RB◆◆LB◆3Nh^2◆RB◆\right)^◆LB◆3/2◆RB◆\right) + \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right]$$

**Proof.** For $N$ non-interacting particles, $H = \sum_◆LB◆i=1◆RB◆^N p_i^2/(2m)$. The number of
Microstates with total energy between $E$ and $E + \delta E$ is the volume of a spherical shell in
$3N$-dimensional momentum space:

$$\Omega = \frac◆LB◆1◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆ V^N \cdot \frac◆LB◆2\pi^◆LB◆3N/2◆RB◆◆RB◆◆LB◆\Gamma(3N/2)◆RB◆ (2mE)^◆LB◆3N/2◆RB◆ \cdot \frac◆LB◆3N\,\delta E◆RB◆◆LB◆2E◆RB◆$$

The factor $(3N\,\delta E)/(2E)$ is the shell thickness in radius. Taking the logarithm:

$$\ln\Omega = N\ln V - \ln N! + \frac◆LB◆3N◆RB◆◆LB◆2◆RB◆\ln(2\pi m k_B T) - 3N\ln h + \frac◆LB◆3N◆RB◆◆LB◆2◆RB◆ + \ln\left(\frac◆LB◆3N\,\delta E◆RB◆◆LB◆2E◆RB◆\right)$$

Using Stirling's approximation $\ln N! \approx N\ln N - N$ and $E = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B T$:

$$S = k_B\ln\Omega = Nk_B\left[\ln\left(\frac◆LB◆V◆RB◆◆LB◆N◆RB◆\left(\frac◆LB◆4\pi m E◆RB◆◆LB◆3Nh^2◆RB◆\right)^◆LB◆3/2◆RB◆\right) + \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right] + \mathcal◆LB◆O◆RB◆(\ln N)$$

The $\mathcal◆LB◆O◆RB◆(\ln N)$ terms (from the shell thickness) are negligible compared to the
$\mathcal◆LB◆O◆RB◆(N)$ Terms in the thermodynamic limit. $\blacksquare$

This is the **Sackur-Tetrode equation**, which gives the absolute entropy of a monatomic ideal gas.
It satisfies the third law in the sense that $S \to -\infty$ as $T \to 0$Indicating the Breakdown of
the classical description at low temperatures.

### 15.4 Derivation of the Canonical Ensemble from the Microcanonical Ensemble

**Theorem 15.2.** A small subsystem of a large microcanonical ensemble obeys the Boltzmann
Distribution.

**Proof.** Consider a total system with energy $E_◆LB◆\mathrm◆LB◆tot◆RB◆◆RB◆$ composed of subsystem $S$ (with
Energy $E_S$) and reservoir $R$ (with energy $E_R = E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_S◆RB◆$). The probability that
$S$ is in a specific microstate with energy $E_S$ is:

$$P(E_S) = \frac◆LB◆\Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_S)◆RB◆◆LB◆\Omega_◆LB◆\mathrm◆LB◆tot◆RB◆(E_◆LB◆\mathrm◆LB◆tot◆RB◆)◆RB◆◆RB◆◆RB◆◆RB◆$$

Since the reservoir is large, expand to first order:

$$\ln\Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆ - E_S) \approx \ln\Omega_R(E_◆LB◆\mathrm◆LB◆tot◆RB◆) - E_S\frac◆LB◆\partial \ln\Omega_R◆RB◆◆LB◆\partial E_R◆RB◆◆RB◆◆RB◆$$

Using $\partial\ln\Omega_R/\partial E_R = 1/(k_B T)$:

$$P(E_S) \propto e^◆LB◆-E_S/(k_B T)◆RB◆ = e^◆LB◆-\beta E_S◆RB◆$$

Normalising gives the Boltzmann distribution $P_i = e^◆LB◆-\beta E_i◆RB◆/Z$. $\blacksquare$

<details>
<summary>Solution: Worked Example — Entropy of Mixing Revisited</summary>

Two ideal gases, each with $N$ particles at the same $T$ and $P$Are separated by a partition. The
partition is removed. Find $\Delta S$.

Before mixing: each gas occupies volume $V$. The total entropy is $S_i = 2 \times S(N, V, T)$.

After mixing: each gas occupies volume $2V$. The total entropy is:

$$S_f = S(N, 2V, T) + S(N, 2V, T) = 2 \times S(N, 2V, T)$$

From the Sackur-Tetrode equation, the change for each gas is:

$$\Delta S_◆LB◆\mathrm◆LB◆one\ gas◆RB◆ = Nk_B\ln\frac◆LB◆2V◆RB◆◆LB◆V◆RB◆ = Nk_B\ln 2◆RB◆$$

If the gases are _different_: $\Delta S = 2Nk_B\ln 2$.

If the gases are _identical_: removing the partition does nothing observable. The total entropy is
$S(N, 2V, T) = S(2N, 2V, T)$ (using $N!$ correction), and $\Delta S = 0$. The $1/N!$ factor in The
partition function automatically resolves this paradox.

</details>

## 16. The Canonical Ensemble — Detailed Treatment

### 16.1 Derivation of Thermodynamic Quantities

The canonical partition function is $Z = \sum_i e^◆LB◆-\beta E_i◆RB◆$ for a discrete spectrum, or

$$Z = \frac◆LB◆1◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆\int e^◆LB◆-\beta H(\mathbf◆LB◆q◆RB◆,\mathbf◆LB◆p◆RB◆)◆RB◆\,d^◆LB◆3N◆RB◆q\,d^◆LB◆3N◆RB◆p$$

For a classical system.

**Theorem 16.1.** All thermodynamic quantities follow from $\ln Z$:

| Quantity              | Formula                                                       |
| --------------------- | ------------------------------------------------------------- |
| Internal energy       | $U = -\partial \ln Z / \partial \beta$                        |
| Helmholtz free energy | $F = -k_B T \ln Z$                                            |
| Entropy               | $S = k_B(\ln Z + \beta U)$                                    |
| Pressure              | $P = k_B T\,(\partial \ln Z/\partial V)_◆LB◆\beta,N◆RB◆$            |
| Chemical potential    | $\mu = -k_B T\,(\partial \ln Z/\partial N)_◆LB◆\beta,V◆RB◆$         |
| Heat capacity         | $C_V = k_B\beta^2(\langle E^2 \rangle - \langle E \rangle^2)$ |

**Proof (energy and heat capacity).**

$$U = \langle E \rangle = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\sum_i E_i e^◆LB◆-\beta E_i◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\frac◆LB◆\partial Z◆RB◆◆LB◆\partial \beta◆RB◆ = -\frac◆LB◆\partial \ln Z◆RB◆◆LB◆\partial \beta◆RB◆$$

$$\langle E^2 \rangle = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\sum_i E_i^2 e^◆LB◆-\beta E_i◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆Z◆RB◆\frac◆LB◆\partial^2 Z◆RB◆◆LB◆\partial \beta^2◆RB◆$$

$$\langle E^2 \rangle - \langle E \rangle^2 = \frac◆LB◆\partial^2 \ln Z◆RB◆◆LB◆\partial \beta^2◆RB◆ = -\frac◆LB◆\partial U◆RB◆◆LB◆\partial \beta◆RB◆ = k_B T^2 C_V$$

$\blacksquare$

### 16.2 The Classical Partition Function for an Ideal Gas

**Theorem 16.2.** The classical partition function for $N$ indistinguishable ideal gas particles is:

$$Z = \frac◆LB◆1◆RB◆◆LB◆N!◆RB◆\left(\frac◆LB◆V◆RB◆◆LB◆\lambda^3◆RB◆\right)^N$$

Where $\lambda = h/\sqrt◆LB◆2\pi m k_B T◆RB◆$ is the thermal de Broglie wavelength.

**Proof.** For non-interacting particles, $H = \sum_◆LB◆i=1◆RB◆^N p_i^2/(2m)$:

$$Z = \frac◆LB◆1◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆\int_V d^◆LB◆3N◆RB◆q \int_◆LB◆-\infty◆RB◆^\infty d^◆LB◆3N◆RB◆p\;\exp\left(-\beta\sum_◆LB◆i=1◆RB◆^N\frac◆LB◆p_i^2◆RB◆◆LB◆2m◆RB◆\right)$$

$$= \frac◆LB◆V^N◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆\left[\int_◆LB◆-\infty◆RB◆^\infty e^◆LB◆-\beta p^2/(2m)◆RB◆\,dp\right]^◆LB◆3N◆RB◆$$

Using the Gaussian integral $\int_◆LB◆-\infty◆RB◆^\infty e^◆LB◆-ax^2◆RB◆\,dx = \sqrt◆LB◆\pi/a◆RB◆$:

$$= \frac◆LB◆V^N◆RB◆◆LB◆N!h^◆LB◆3N◆RB◆◆RB◆\left(\frac◆LB◆2\pi m◆RB◆◆LB◆\beta◆RB◆\right)^◆LB◆3N/2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆N!◆RB◆\left[\frac◆LB◆V◆RB◆◆LB◆h^3◆RB◆\left(\frac◆LB◆2\pi m◆RB◆◆LB◆\beta◆RB◆\right)^◆LB◆3/2◆RB◆\right]^N = \frac◆LB◆1◆RB◆◆LB◆N!◆RB◆\left(\frac◆LB◆V◆RB◆◆LB◆\lambda^3◆RB◆\right)^N$$

$\blacksquare$

From this, all ideal gas thermodynamics follows:
$F = -Nk_B T[\ln(V/N\lambda^3) + 1]$$P = Nk_B T/V$$S = Nk_B[\ln(V/N\lambda^3) + 5/2]$.

## 17. Problem Set

<details>
<summary>Problem 1: Entropy change in free expansion</summary>

**Problem.** One mole of ideal gas doubles its volume in a free expansion (no heat exchange, no Work
done). Calculate $\Delta S$. Does this violate the second law?

**Solution.** For a free expansion, $Q = 0$ and $W = 0$So $\Delta U = 0$ and $\Delta T = 0$ (ideal
gas). The entropy change is:

$$\Delta S = nR\ln\frac◆LB◆V_f◆RB◆◆LB◆V_i◆RB◆ = R\ln 2 \approx 5.76\ \mathrm◆LB◆J◆RB◆/K$$

This does not violate the second law. The second law states $\Delta S_◆LB◆\mathrm◆LB◆universe◆RB◆ \geq 0◆RB◆$.
For the system, $\Delta S = R\ln 2 \gt 0$. For the surroundings, $\Delta S_◆LB◆\mathrm◆LB◆surr◆RB◆ = 0◆RB◆$ (no
heat exchanged). So $\Delta S_◆LB◆\mathrm◆LB◆universe◆RB◆ = R\ln 2 \gt 0◆RB◆$Consistent with an Irreversible
process.

**If you get this wrong, revise:** Section 1.4 (Clausius inequality) and Section 9.2 (ideal gas
Entropy).

</details>

<details>
<summary>Problem 2: Carnot efficiency with given temperatures</summary>

**Problem.** A Carnot engine operates between $T_h = 500$ K and $T_c = 300$ K, absorbing 1000 J per
Cycle from the hot reservoir. Find $Q_c$, $W$And $\eta$.

**Solution.**

$$\eta = 1 - \frac◆LB◆T_c◆RB◆◆LB◆T_h◆RB◆ = 1 - \frac◆LB◆300◆RB◆◆LB◆500◆RB◆ = 0.4$$

$$W = \eta Q_h = 0.4 \times 1000 = 400\ \mathrm◆LB◆J◆RB◆$$

$$Q_c = Q_h - W = 600\ \mathrm◆LB◆J◆RB◆$$

**If you get this wrong, revise:** Section 4.1 (Carnot cycle) and Theorem 1.1 (Carnot's theorem).

</details>

<details>
<summary>Problem 3: Maxwell relation for a general equation of state</summary>

**Problem.** A gas obeys $P = RT/(V_m - b) - a/V_m^2$ (van der Waals). Use a Maxwell relation to
Find $(\partial S/\partial V)_T$.

**Solution.** Using $(\partial S/\partial V)_T = (\partial P/\partial T)_V$:

$$\left(\frac◆LB◆\partial S◆RB◆◆LB◆\partial V◆RB◆\right)_T = \left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial T◆RB◆\right)_V = \frac◆LB◆R◆RB◆◆LB◆V_m - b◆RB◆$$

Integrating at constant $T$:

$$\Delta S = R\ln\frac◆LB◆V_◆LB◆m,f◆RB◆ - b◆RB◆◆LB◆V_◆LB◆m,i◆RB◆ - b◆RB◆$$

**If you get this wrong, revise:** Section 3.1 (Maxwell relation derivation) and Section 3.3
(applications).

</details>

<details>
<summary>Problem 4: Heat capacity relation for a solid</summary>

**Problem.** A solid has $\alpha = 3 \times 10^◆LB◆-5◆RB◆$ K$^◆LB◆-1◆RB◆$, $\kappa_T = 6 \times 10^◆LB◆-12◆RB◆$
Pa$^◆LB◆-1◆RB◆$Molar volume $V_m = 2.5 \times 10^◆LB◆-5◆RB◆$ m$^3$/mol, and $C_P = 25$ J/(mol$\cdot$K). Find
$C_P - C_V$ and $C_V$.

**Solution.**

$$C_P - C_V = \frac◆LB◆TV_m\alpha^2◆RB◆◆LB◆\kappa_T◆RB◆ = \frac◆LB◆300 \times 2.5 \times 10^◆LB◆-5◆RB◆ \times (3 \times 10^◆LB◆-5◆RB◆)^2◆RB◆◆LB◆6 \times 10^◆LB◆-12◆RB◆◆RB◆$$

$$= \frac◆LB◆300 \times 2.5 \times 10^◆LB◆-5◆RB◆ \times 9 \times 10^◆LB◆-10◆RB◆◆RB◆◆LB◆6 \times 10^◆LB◆-12◆RB◆◆RB◆ = \frac◆LB◆6.75 \times 10^◆LB◆-12◆RB◆◆RB◆◆LB◆6 \times 10^◆LB◆-12◆RB◆◆RB◆ = 1.125\ \mathrm◆LB◆J◆RB◆/(mol \cdot K)$$

$$C_V = C_P - 1.125 \approx 23.9\ \mathrm◆LB◆J◆RB◆/(mol \cdot K)$$

For a solid at room temperature, $C_P - C_V$ is small (a few percent of $C_P$).

**If you get this wrong, revise:** Section 1.6 (thermodynamic response functions) and Theorem 1.2.

</details>

<details>
<summary>Problem 5: Helmholtz free energy of a paramagnet</summary>

**Problem.** A paramagnetic system of $N$ non-interacting spin-1/2 particles in a magnetic field $B$
Has energy levels $E = \pm \mu_B B$ per particle ($\mu_B$ is the Bohr magneton). Find $F$, $S$And
$M = -(\partial F/\partial B)_T$.

**Solution.** Single-particle partition function:
$z = e^◆LB◆\beta\mu_B B◆RB◆ + e^◆LB◆-\beta\mu_B B◆RB◆ = 2\cosh(\beta\mu_B B)$.

$$Z = z^N = 2^N \cosh^N(\beta\mu_B B)$$

$$F = -k_B T \ln Z = -Nk_B T\left[\ln 2 + \ln\cosh(\beta\mu_B B)\right]$$

$$S = -\left(\frac◆LB◆\partial F◆RB◆◆LB◆\partial T◆RB◆\right)_B = Nk_B\left[\ln 2 + \ln\cosh(\beta\mu_B B) - \beta\mu_B B\tanh(\beta\mu_B B)\right]$$

$$M = -\left(\frac◆LB◆\partial F◆RB◆◆LB◆\partial B◆RB◆\right)_T = N\mu_B\tanh(\beta\mu_B B)$$

At high $T$: $M \approx N\mu_B^2 B/(k_B T)$ (Curie's law). At $T = 0$: $M = N\mu_B$ (saturation).

**If you get this wrong, revise:** Section 7.1 (Boltzmann distribution) and Section 7.3 (two-level
System).

</details>

<details>
<summary>Problem 6: Partition function of a quantum harmonic oscillator</summary>

**Problem.** A 1D quantum harmonic oscillator has $E_n = \hbar\omega(n + 1/2)$. Calculate $Z$, $U$
$C_V$And $S$. Find the high- and low-temperature limits.

**Solution.**

$$Z = \sum_◆LB◆n=0◆RB◆^\infty e^◆LB◆-\beta\hbar\omega(n+1/2)◆RB◆ = \frac◆LB◆e^◆LB◆-\beta\hbar\omega/2◆RB◆◆RB◆◆LB◆1 - e^◆LB◆-\beta\hbar\omega◆RB◆◆RB◆$$

$$U = -\frac◆LB◆\partial\ln Z◆RB◆◆LB◆\partial\beta◆RB◆ = \frac◆LB◆\hbar\omega◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆\hbar\omega◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆ - 1◆RB◆$$

$$C_V = \frac◆LB◆\partial U◆RB◆◆LB◆\partial T◆RB◆ = k_B(\beta\hbar\omega)^2 \frac◆LB◆e^◆LB◆\beta\hbar\omega◆RB◆◆RB◆◆LB◆(e^◆LB◆\beta\hbar\omega◆RB◆ - 1)^2◆RB◆$$

High $T$ ($\beta\hbar\omega \ll 1$): $U \approx k_B T$, $C_V \approx k_B$ (equipartition). Low $T$
($\beta\hbar\omega \gg 1$): $U \approx \hbar\omega/2$ (zero-point energy),
$C_V \approx
K_B(\beta\hbar\omega)^2 e^◆LB◆-\beta\hbar\omega◆RB◆ \to 0$ exponentially.

**If you get this wrong, revise:** Section 8.4 (vibrational partition function) and Section 9.4
(equipartition).

</details>

<details>
<summary>Problem 7: Fermi energy of a 3D electron gas</summary>

**Problem.** Sodium has one conduction electron per atom, atomic mass $23$ g/mol, density $970$
Kg/m$^3$. Calculate the Fermi energy $\varepsilon_F$ and Fermi temperature $T_F$.

**Solution.** Number density:
$n = (\rho N_A / M) = (970 \times 6.022 \times 10^◆LB◆23◆RB◆) / (0.023)
= 2.54 \times 10^◆LB◆28◆RB◆$ m$^◆LB◆-3◆RB◆$.

$$\varepsilon_F = \frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆(3\pi^2 n)^◆LB◆2/3◆RB◆ = \frac◆LB◆(1.055 \times 10^◆LB◆-34◆RB◆)^2◆RB◆◆LB◆2 \times 9.109 \times 10^◆LB◆-31◆RB◆◆RB◆(3\pi^2 \times 2.54 \times 10^◆LB◆28◆RB◆)^◆LB◆2/3◆RB◆$$

$$◆LB◆(3\pi^2 n)^◆LB◆2/3◆RB◆ = (7.55 \times 10^◆LB◆29◆RB◆)^◆LB◆2/3◆RB◆ = 8.28 \times 10^◆LB◆19◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-2◆RB◆◆RB◆$$

$$\varepsilon_F = \frac◆LB◆1.113 \times 10^◆LB◆-68◆RB◆◆RB◆◆LB◆1.822 \times 10^◆LB◆-30◆RB◆◆RB◆ \times 8.28 \times 10^◆LB◆19◆RB◆ = 5.06 \times 10^◆LB◆-19◆RB◆\ \mathrm◆LB◆J◆RB◆ \approx 3.16\ \mathrm◆LB◆eV◆RB◆$$

$$T_F = \frac◆LB◆\varepsilon_F◆RB◆◆LB◆k_B◆RB◆ = \frac◆LB◆5.06 \times 10^◆LB◆-19◆RB◆◆RB◆◆LB◆1.381 \times 10^◆LB◆-23◆RB◆◆RB◆ \approx 36600\ \mathrm◆LB◆K◆RB◆$$

**If you get this wrong, revise:** Section 10.2 (Fermi-Dirac
.../4-statistics-and-probability/2_statistics) and Section 10.6 (electron Gas in metals).

</details>

<details>
<summary>Problem 8: Bose-Einstein condensation temperature</summary>

**Problem.** $10^4$ rubidium-87 atoms are trapped in a harmonic potential. Estimate the BEC
Transition temperature. ($m = 87 \times 1.66 \times 10^◆LB◆-27◆RB◆$ kg.)

**Solution.** For a harmonic trap, the density of states is
$g(\varepsilon) = \varepsilon^2 /
(2(\hbar\bar\omega)^3)$ where
$\bar\omega = (\omega_x\omega_y\omega_z)^◆LB◆1/3◆RB◆$. The BEC condition Is
$N = \zeta(3)(k_B T_c/\hbar\bar\omega)^3$:

$$T_c = \frac◆LB◆\hbar\bar\omega◆RB◆◆LB◆k_B◆RB◆\left(\frac◆LB◆N◆RB◆◆LB◆\zeta(3)◆RB◆\right)^◆LB◆1/3◆RB◆$$

Assuming $\bar\omega = 2\pi \times 100$ Hz:

$$T_c = \frac◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 2\pi \times 100◆RB◆◆LB◆1.381 \times 10^◆LB◆-23◆RB◆◆RB◆ \times \left(\frac◆LB◆10^4◆RB◆◆LB◆2.612◆RB◆\right)^◆LB◆1/3◆RB◆$$

$$= 4.80 \times 10^◆LB◆-9◆RB◆ \times 15.7 \approx 7.5 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆K◆RB◆ = 75\ \mathrm◆LB◆nK◆RB◆$$

This is consistent with experimental BEC observations in laser-cooled atom traps.

**If you get this wrong, revise:** Section 10.3 (Bose-Einstein
.../4-statistics-and-probability/2_statistics) and Section 10.4 (BEC).

</details>

<details>
<summary>Problem 9: Chemical potential of a classical ideal gas</summary>

**Problem.** Show that the chemical potential of a classical ideal gas is
$\mu = k_B T\ln(n\lambda^3)$ Where $n = N/V$ and $\lambda$ is the thermal de Broglie wavelength.
Discuss the sign of $\mu$.

**Solution.** From $F = -Nk_B T[\ln(V/N\lambda^3) + 1]$:

$$\mu = \left(\frac◆LB◆\partial F◆RB◆◆LB◆\partial N◆RB◆\right)_◆LB◆T,V◆RB◆ = -k_B T\ln\left(\frac◆LB◆V◆RB◆◆LB◆N\lambda^3◆RB◆\right) = k_B T\ln\left(\frac◆LB◆N\lambda^3◆RB◆◆LB◆V◆RB◆\right) = k_B T\ln(n\lambda^3)$$

When $n\lambda^3 \ll 1$ (classical regime, dilute gas or high $T$): $\mu \lt 0$. When
$n\lambda^3 \to
1$ (approaching quantum degeneracy): $\mu \to 0$. For fermions, $\mu \gt 0$ in the
degenerate Regime ($T \ll T_F$).

**If you get this wrong, revise:** Section 9.2 (equation of state) and Section 10.5 (comparison of
Statistics).

</details>

<details>
<summary>Problem 10: Entropy of a spin system</summary>

**Problem.** A system of $N = 100$ non-interacting spin-1/2 particles in zero magnetic field. What
Is the total entropy? If a field is applied and all spins align, what is $\Delta S$?

**Solution.** In zero field, all $2^N$ microstates are equally probable:

$$S = k_B\ln\Omega = k_B\ln(2^N) = Nk_B\ln 2 = 100 \times 1.381 \times 10^◆LB◆-23◆RB◆ \times 0.693 \approx 9.57 \times 10^◆LB◆-22◆RB◆\ \mathrm◆LB◆J◆RB◆/K$$

When all spins are aligned (one microstate):

$$S_f = k_B\ln 1 = 0$$

$$\Delta S = -Nk_B\ln 2$$

This is the maximum entropy change achievable by applying a magnetic field to a spin system, and
Forms the basis of magnetic cooling (adiabatic demagnetisation refrigeration).

**If you get this wrong, revise:** Section 5.1 (Boltzmann entropy) and Section 5.2 (Gibbs entropy).

</details>

<details>
<summary>Problem 11: Blackbody radiation in a cavity</summary>

**Problem.** A cavity of volume $V = 1$ cm$^3$ is maintained at $T = 1000$ K. Find the total Radiant
energy inside and the radiation pressure on the walls.

**Solution.** Total energy density:

$$u = \frac◆LB◆\pi^2 k_B^4◆RB◆◆LB◆15\hbar^3 c^3◆RB◆\,T^4 = \frac◆LB◆\pi^2(1.381 \times 10^◆LB◆-23◆RB◆)^4◆RB◆◆LB◆15(1.055 \times 10^◆LB◆-34◆RB◆)^3(3 \times 10^8)^3◆RB◆ \times (1000)^4$$

$$= \frac◆LB◆7.56 \times 10^◆LB◆-16◆RB◆◆RB◆◆LB◆15 \times 1.17 \times 10^◆LB◆-102◆RB◆ \times 2.7 \times 10^◆LB◆25◆RB◆◆RB◆ \times 10^◆LB◆12◆RB◆$$

$$u \approx 7.56 \times 10^◆LB◆-16◆RB◆\ \mathrm◆LB◆J◆RB◆/m^3$$

Total energy: $U = uV = 7.56 \times 10^◆LB◆-16◆RB◆ \times 10^◆LB◆-6◆RB◆ = 7.56 \times 10^◆LB◆-22◆RB◆$ J.

Radiation pressure: $P_◆LB◆\mathrm◆LB◆rad◆RB◆ = u/3 = 2.52 \times 10^◆LB◆-16◆RB◆◆RB◆$ Pa.

**If you get this wrong, revise:** Section 13.2 (Stefan-Boltzmann law) and Section 13.1 (Planck
Distribution).

</details>

<details>
<summary>Problem 12: Clausius-Clapeyron application</summary>

**Problem.** The vapour pressure of benzene is 75 mmHg at $20\degree$C and 300 mmHg at $50\degree$C.
Estimate the enthalpy of vaporisation and the normal boiling point.

**Solution.** From the integrated Clausius-Clapeyron equation:

$$\ln\frac◆LB◆P_2◆RB◆◆LB◆P_1◆RB◆ = -\frac◆LB◆L_v◆RB◆◆LB◆R◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆T_2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆T_1◆RB◆\right)$$

$$\ln\frac◆LB◆300◆RB◆◆LB◆75◆RB◆ = -\frac◆LB◆L_v◆RB◆◆LB◆8.314◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆323◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆293◆RB◆\right)$$

$$\ln 4 = 1.386 = -\frac◆LB◆L_v◆RB◆◆LB◆8.314◆RB◆(-3.16 \times 10^◆LB◆-4◆RB◆)$$

$$L_v = \frac◆LB◆1.386 \times 8.314◆RB◆◆LB◆3.16 \times 10^◆LB◆-4◆RB◆◆RB◆ \approx 36400\ \mathrm◆LB◆J◆RB◆/mol$$

Normal boiling point ($P = 760$ mmHg):

$$\ln\frac◆LB◆760◆RB◆◆LB◆75◆RB◆ = -\frac◆LB◆36400◆RB◆◆LB◆8.314◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆T_b◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆293◆RB◆\right)$$

$$2.313 = -4378\left(\frac◆LB◆1◆RB◆◆LB◆T_b◆RB◆ - 0.00341\right)$$

$$\frac◆LB◆1◆RB◆◆LB◆T_b◆RB◆ = 0.00341 + \frac◆LB◆2.313◆RB◆◆LB◆4378◆RB◆ = 0.00394$$

$$T_b \approx 354\ \mathrm◆LB◆K◆RB◆ \approx 81\degree\mathrm◆LB◆C◆RB◆$$

(Experimental value: $80.1\degree$C, showing good agreement.)

**If you get this wrong, revise:** Section 6.2 (Clausius-Clapeyron equation) and Section 6.4 (worked
examples).

</details>

<details>
<summary>Problem 13: Grand canonical partition function of a single orbital</summary>

**Problem.** A single quantum orbital at energy $\varepsilon$ is in contact with a reservoir at
Chemical potential $\mu$ and temperature $T$. Calculate $\langle N \rangle$ and
$\langle N^2 \rangle - \langle N \rangle^2$ for (a) fermions and (b) bosons.

**Solution.**

**(a) Fermions:** $\mathcal◆LB◆Z◆RB◆ = 1 + e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆$.

$$\langle N \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1◆RB◆ = f_◆LB◆\mathrm◆LB◆FD◆RB◆◆RB◆$$

$$\langle N^2 \rangle = \langle N \rangle$$ (since $N^2 = N$ for $N = 0, 1$)

$$\langle N^2 \rangle - \langle N \rangle^2 = f_◆LB◆\mathrm◆LB◆FD◆RB◆(1 - f_◆LB◆\mathrm◆LB◆FD◆RB◆)◆RB◆◆RB◆$$

**(b) Bosons:** $\mathcal◆LB◆Z◆RB◆ = (1 - e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆)^◆LB◆-1◆RB◆$.

$$\langle N \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ - 1◆RB◆ = f_◆LB◆\mathrm◆LB◆BE◆RB◆◆RB◆$$

$$\langle N^2 \rangle = \frac◆LB◆1 + e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆◆RB◆◆LB◆(1 - e^◆LB◆-\beta(\varepsilon - \mu)◆RB◆)^2◆RB◆$$

$$\langle N^2 \rangle - \langle N \rangle^2 = f_◆LB◆\mathrm◆LB◆BE◆RB◆(1 + f_◆LB◆\mathrm◆LB◆BE◆RB◆)◆RB◆◆RB◆$$

Note: boson fluctuations are larger than fermion fluctuations at the same $\varepsilon, \mu, T$.

**If you get this wrong, revise:** Section 10.2 (Fermi-Dirac), Section 10.3 (Bose-Einstein), and
Section 11 (grand canonical ensemble).

</details>

<details>
<summary>Problem 14: Ising model mean-field critical temperature</summary>

**Problem.** For a 2D square lattice Ising model with coupling $J \gt 0$ and $h = 0$Use mean-field
Theory to find $T_c$. The exact result (Onsager, 1944) is
$T_c^◆LB◆\mathrm◆LB◆exact◆RB◆ = 2J/(k_B\ln(1 +
\sqrt◆LB◆2◆RB◆))◆RB◆$. Compare.

**Solution.** The coordination number is $z = 4$. Mean-field theory gives:

$$T_c^◆LB◆\mathrm◆LB◆MF◆RB◆ = \frac◆LB◆Jz◆RB◆◆LB◆k_B◆RB◆ = \frac◆LB◆4J◆RB◆◆LB◆k_B◆RB◆◆RB◆$$

Exact result:

$$T_c^◆LB◆\mathrm◆LB◆exact◆RB◆ = \frac◆LB◆2J◆RB◆◆LB◆k_B\ln(1 + \sqrt◆LB◆2◆RB◆)◆RB◆ = \frac◆LB◆2J◆RB◆◆LB◆k_B \times 0.881◆RB◆ = \frac◆LB◆2.27J◆RB◆◆LB◆k_B◆RB◆◆RB◆$$

The ratio: $T_c^◆LB◆\mathrm◆LB◆MF◆RB◆/T_c^◆LB◆\mathrm◆LB◆exact◆RB◆ = 4/2.27 \approx 1.76◆RB◆◆RB◆$. Mean-field theory
Overestimates $T_c$ by 76% in 2D, because fluctuations (neglected in mean-field) are large in two
Dimensions.

**If you get this wrong, revise:** Section 14.3 (mean-field approximation) and the Common Pitfall
Box in Section 14.

</details>

<details>
<summary>Problem 15: Deriving the Sackur-Tetrode equation</summary>

**Problem.** Starting from the microcanonical ensemble, derive the Sackur-Tetrode equation for the
Entropy of a monatomic ideal gas. State all assumptions.

**Solution.** See Theorem 15.1 for the full derivation. Key assumptions:

1. Particles are non-interacting (ideal gas).
2. Particles are indistinguishable (Gibbs factor $1/N!$).
3. Classical phase space is quantised in units of $h^◆LB◆3N◆RB◆$.
4. Thermodynamic limit ($N \to \infty$$V \to \infty$$N/V = \mathrm◆LB◆const◆RB◆$).

**If you get this wrong, revise:** Section 15.3 (ideal gas in the microcanonical ensemble).

</details>

<details>
<summary>Problem 16: Transport coefficients from kinetic theory</summary>

**Problem.** Estimate the thermal conductivity of argon at STP. ($m = 6.63 \times 10^◆LB◆-26◆RB◆$ kg,
$d = 3.6 \times 10^◆LB◆-10◆RB◆$ m, $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆k_B$ per atom.)

**Solution.** Mean free path: $\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = 1/(\sqrt◆LB◆2◆RB◆\,\pi d^2 n)◆RB◆$.

With $n = P/(k_B T) = 101325/(1.381 \times 10^◆LB◆-23◆RB◆ \times 273) = 2.69 \times 10^◆LB◆25◆RB◆$ m$^◆LB◆-3◆RB◆$:

$$\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,\pi(3.6 \times 10^◆LB◆-10◆RB◆)^2 \times 2.69 \times 10^◆LB◆25◆RB◆◆RB◆ \approx 6.5 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆m◆RB◆◆RB◆$$

Mean speed:
$\langle v \rangle = \sqrt◆LB◆8k_B T/(\pi m)◆RB◆ = \sqrt◆LB◆8 \times 1.381 \times 10^◆LB◆-23◆RB◆ \times 273 / (\pi \times 6.63 \times 10^◆LB◆-26◆RB◆)◆RB◆ \approx 398$
m/s.

$$\kappa = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆n\langle v\rangle\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆ \cdot \frac◆LB◆3◆RB◆◆LB◆2◆RB◆k_B = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆nk_B\langle v\rangle\lambda_◆LB◆\mathrm◆LB◆mfp◆RB◆◆RB◆◆RB◆$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \times 2.69 \times 10^◆LB◆25◆RB◆ \times 1.381 \times 10^◆LB◆-23◆RB◆ \times 398 \times 6.5 \times 10^◆LB◆-8◆RB◆ \approx 0.019\ \mathrm◆LB◆W◆RB◆/(m \cdot K)$$

The experimental value is approximately 0.018 W/(m$\cdot$K) — reasonable agreement for the
hard-sphere Model.

**If you get this wrong, revise:** Section 9.5 (kinetic theory, transport properties).

</details>

<details>
<summary>Problem 17: Landau theory specific heat jump</summary>

**Problem.** A system undergoes a second-order phase transition at $T_c = 100$ K described by Landau
theory with $a = 0.1$ J/(mol$\cdot$K) and $b = 0.05$ J/mol. Calculate the order parameter at
$T = 90$ K and the specific heat jump $\Delta C_P$ at $T_c$.

**Solution.** Order parameter below $T_c$:

$$\phi = \pm\sqrt◆LB◆\frac◆LB◆a(T_c - T)◆RB◆◆LB◆2b◆RB◆◆RB◆ = \pm\sqrt◆LB◆\frac◆LB◆0.1 \times 10◆RB◆◆LB◆2 \times 0.05◆RB◆◆RB◆ = \pm\sqrt◆LB◆10◆RB◆ \approx \pm 3.16$$

Specific heat jump:

$$\Delta C_P = \frac◆LB◆a^2 T_c◆RB◆◆LB◆2b◆RB◆ = \frac◆LB◆0.01 \times 100◆RB◆◆LB◆0.1◆RB◆ = 10\ \mathrm◆LB◆J◆RB◆/(mol \cdot K)$$

**If you get this wrong, revise:** Section 14.4 (Landau theory) and Section 6.1 (classification of
Phase transitions).

</details>

<details>
<summary>Problem 18: Grand canonical fluctuations</summary>

**Problem.** For an ideal gas in the grand canonical ensemble, show that the relative number
Fluctuation is
$\sqrt◆LB◆\langle N^2 \rangle - \langle N \rangle^2◆RB◆/\langle N \rangle = 1/\sqrt◆LB◆\langle N \rangle◆RB◆$.

**Solution.** The grand partition function for an ideal gas factorises into single-particle
Contributions. Each single-particle state contributes independently, so the particle number is a sum
Of independent Bernoulli-like random variables. By the central limit theorem:

$$\langle N^2 \rangle - \langle N \rangle^2 = \langle N \rangle$$

(Poisson .../4-statistics-and-probability/2_statistics for an ideal gas.)

$$\frac◆LB◆\sqrt◆LB◆\langle N^2 \rangle - \langle N \rangle^2◆RB◆◆RB◆◆LB◆\langle N \rangle◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆\langle N \rangle◆RB◆◆RB◆$$

For $\langle N \rangle = 10^◆LB◆23◆RB◆$: relative fluctuations are $\sim 10^◆LB◆-11.5◆RB◆$Completely negligible
— the grand canonical and canonical ensembles are equivalent for macroscopic systems.

**If you get this wrong, revise:** Section 11.3 (grand canonical fluctuations) and Section 12
(fluctuation-dissipation theorem).

</details>

<details>
<summary>Problem 19: Wien's law and stellar classification</summary>

**Problem.** A star has peak emission at $\lambda_◆LB◆\mathrm◆LB◆max◆RB◆ = 290◆RB◆$ nm. (a) What is its surface
Temperature? (b) What spectral class does it belong to? (c) What is the total power radiated per
Square metre?

**Solution.**

**(a)** $T = b/\lambda_◆LB◆\mathrm◆LB◆max◆RB◆ = (2.898 \times 10^◆LB◆-3◆RB◆)/(290 \times 10^◆LB◆-9◆RB◆) \approx 9990◆RB◆$ K
$\approx 10000$ K.

**(b)** A surface temperature of $\sim 10000$ K corresponds to spectral class A (white stars, like
Sirius).

**(c)** $j = \sigma T^4 = (5.67 \times 10^◆LB◆-8◆RB◆)(10000)^4 = 5.67 \times 10^8$ W/m$^2$.

**If you get this wrong, revise:** Section 13.3 (Wien's displacement law) and Section 13.2
(Stefan-Boltzmann law).

</details>

<details>
<summary>Problem 20: Free energy and phase equilibrium</summary>

**Problem.** The Gibbs free energy of a substance near its melting point is given by:
$G_◆LB◆\mathrm◆LB◆solid◆RB◆ = -10000 + 30T◆RB◆$ J/mol and $G_◆LB◆\mathrm◆LB◆liquid◆RB◆ = -9500 + 25T◆RB◆$ J/mol (valid for $T$
near the melting point). Find $T_m$ and $L_f$.

**Solution.** At the melting point, $G_◆LB◆\mathrm◆LB◆solid◆RB◆ = G_◆LB◆\mathrm◆LB◆liquid◆RB◆◆RB◆◆RB◆$:

$$-10000 + 30T_m = -9500 + 25T_m$$

$$5T_m = 500 \implies T_m = 100\ \mathrm◆LB◆K◆RB◆$$

Latent heat:
$L_f = T_m(S_◆LB◆\mathrm◆LB◆liquid◆RB◆ - S_◆LB◆\mathrm◆LB◆solid◆RB◆) = T_m(-\partial G_◆LB◆\mathrm◆LB◆liquid◆RB◆/\partial T + \partial G_◆LB◆\mathrm◆LB◆solid◆RB◆/\partial T)◆RB◆◆RB◆◆RB◆◆RB◆$

$$L_f = 100 \times (30 - 25) = 500\ \mathrm◆LB◆J◆RB◆/mol$$

We can verify with the Clausius-Clapeyron equation if $\Delta V$ is known.

**If you get this wrong, revise:** Section 2.3 (physical meaning of potentials), Section 2.5
(equilibrium conditions), and Section 6.2 (Clausius-Clapeyron).

</details>

:::caution Common Pitfall Do not confuse the different ensembles. Use the microcanonical ensemble
($NVE$) for isolated systems, the canonical ensemble ($NVT$) for systems in a heat bath, and the
Grand canonical ensemble ($\mu VT$) for open systems. For macroscopic systems in equilibrium, all
Ensembles give the same thermodynamic results, but they differ in their fluctuation predictions. :::

:::caution Common Pitfall When applying the equipartition theorem, remember that it applies only to
_quadratic_ degrees of freedom. Vibrational modes contribute $k_B T$ (not $k_B T/2$) because they
Have both kinetic and potential energy terms. Electronic and rotational degrees of freedom may be
"frozen out" at low temperatures when $k_B T$ is much less than the level spacing. :::

:::caution Common Pitfall The Gibbs paradox arises when classical particles are treated as
Distinguishable. Always include the $1/N!$ factor in the partition function for identical particles.
This is not an optional correction — it is required by quantum mechanics (indistinguishability of
Identical particles) and ensures that entropy is extensive. :::

## 13. Nonequilibrium Thermodynamics

### 13.1 Entropy Production and the Second Law

For a system not in equilibrium, the second law takes the form:

$$\frac◆LB◆dS◆RB◆◆LB◆dt◆RB◆ = \frac◆LB◆dS_e◆RB◆◆LB◆dt◆RB◆ + \frac◆LB◆dS_i◆RB◆◆LB◆dt◆RB◆ \geq 0$$

Where $dS_e/dt$ is the entropy exchange with the environment (can be positive or negative) and
$dS_i/dt \geq 0$ is the **entropy production** rate (always non-negative).

For coupled transport processes (heat flow $\mathbf◆LB◆J◆RB◆_q$ and particle flow $\mathbf◆LB◆J◆RB◆_n$ driven by
$\nabla(1/T)$ and $-\nabla(\mu/T)$):

$$\frac◆LB◆dS_i◆RB◆◆LB◆dt◆RB◆ = \int\left[\mathbf◆LB◆J◆RB◆_q \cdot \nabla\!\left(\frac◆LB◆1◆RB◆◆LB◆T◆RB◆\right) - \mathbf◆LB◆J◆RB◆_n \cdot \nabla\!\left(\frac◆LB◆\mu◆RB◆◆LB◆T◆RB◆\right)\right] dV \geq 0$$

### 13.2 Onsager Reciprocal Relations

In the linear regime (small gradients), the fluxes are linear functions of the forces:

$$J_i = \sum_j L_◆LB◆ij◆RB◆F_j$$

**Onsager's theorem:** The Onsager coefficients satisfy $L_◆LB◆ij◆RB◆ = L_◆LB◆ji◆RB◆$ (when the forces and
fluxes are chosen as conjugate pairs). This is a consequence of microscopic reversibility and has
important implications:

- **Thermoelectric effects:** The Seebeck coefficient and Peltier coefficient are related:
  $\Pi = ST$ (Kelvin relation).
- **Cross-diffusion:** The diffusivity of species A in a gradient of species B equals the
  diffusivity of B in a gradient of A.

### 13.3 Boltzmann Transport Equation

The Boltzmann equation describes the evolution of the distribution function
$f(\mathbf◆LB◆r◆RB◆, \mathbf◆LB◆v◆RB◆, t)$:

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆ + \mathbf◆LB◆v◆RB◆\cdot\nabla_◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆f + \frac◆LB◆\mathbf◆LB◆F◆RB◆◆RB◆◆LB◆m◆RB◆\cdot\nabla_◆LB◆\mathbf◆LB◆v◆RB◆◆RB◆f = \left(\frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆\right)_◆LB◆\text◆LB◆coll◆RB◆◆RB◆$$

The collision integral is often approximated by the **relaxation time approximation**:

$$\left(\frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆\right)_◆LB◆\text◆LB◆coll◆RB◆ \approx -\frac◆LB◆f - f_0◆RB◆◆LB◆\tau(\mathbf◆LB◆v◆RB◆)◆RB◆◆RB◆$$

Where $f_0$ is the equilibrium (Maxwell--Boltzmann) distribution and $\tau$ is the relaxation time.

The **$H$-theorem:** Define $H = \int f\ln f\, d^3v$. The Boltzmann equation implies
$dH/dt \leq 0$With equality only at equilibrium. This is the microscopic basis of the second law.

### 13.4 Fick's Law and Diffusion

**Fick's first law:** $J = -D\nabla n$ where $D$ is the diffusion coefficient.

**Fick's second law (diffusion equation):** $\partial n/\partial t = D\nabla^2 n$.

**Einstein relation:** $D = \mu k_B T$ where $\mu$ is the mobility.

**Green's function solution** (point source at origin, $t = 0$):

$$n(\mathbf◆LB◆r◆RB◆, t) = \frac◆LB◆N◆RB◆◆LB◆(4\pi Dt)^◆LB◆3/2◆RB◆◆RB◆\exp\!\left(-\frac◆LB◆r^2◆RB◆◆LB◆4Dt◆RB◆\right)$$

The mean squared displacement: $\langle r^2 \rangle = 6Dt$.

<details>
<summary>Worked Example 13.1: Thermal Diffusion (Soret Effect)</summary>

In a mixture of two gases with a temperature gradient, particles tend to migrate toward the cold
end. The mass flux includes a thermal diffusion term:

$$\mathbf◆LB◆J◆RB◆_n = -D\nabla n - nD_T\nabla T$$

Where $D_T$ is the thermal diffusion coefficient. The **Soret coefficient** $S_T = D_T/D$
characterises the strength of the effect.

For a $50$--$50$ mixture of $^3$He--$^4$He below 2 K, $S_T$ is large and positive: $^3$He migrates
toward the warm end. This is exploited in $^3$He--$^4$He dilution refrigerators, the workhorses of
millikelvin physics.

The steady-state concentration gradient is:

$$\frac◆LB◆\nabla n◆RB◆◆LB◆n◆RB◆ = -S_T\,\nabla T$$

For $S_T = 0.01$ K$^◆LB◆-1◆RB◆$ and $\Delta T = 0.1$ K across a 10 cm column:

$$\frac◆LB◆\Delta n◆RB◆◆LB◆n◆RB◆ = S_T \Delta T = 0.001 = 0.1\%$$

</details>

## 14. Kinetic Theory in Detail

### 14.1 Maxwell--Boltzmann Distribution

The velocity distribution of an ideal gas at temperature $T$:

$$f(\mathbf◆LB◆v◆RB◆) = n\left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆\exp\!\left(-\frac◆LB◆mv^2◆RB◆◆LB◆2k_B T◆RB◆\right)$$

**Speed distribution** (integrating over angles):

$$f(v)\,dv = 4\pi n\left(\frac◆LB◆m◆RB◆◆LB◆2\pi k_B T◆RB◆\right)^◆LB◆3/2◆RB◆v^2\exp\!\left(-\frac◆LB◆mv^2◆RB◆◆LB◆2k_B T◆RB◆\right)dv$$

**Characteristic speeds:**

- Most probable: $v_p = \sqrt◆LB◆2k_BT/m◆RB◆$
- Mean: $\langle v \rangle = \sqrt◆LB◆8k_BT/(\pi m)◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆\sqrt◆LB◆\pi◆RB◆◆RB◆v_p$
- RMS: $v_◆LB◆\text◆LB◆rms◆RB◆ = \sqrt◆LB◆3k_BT/m◆RB◆ = \sqrt◆LB◆3/2◆RB◆\,v_p◆RB◆$

### 14.2 Mean Free Path and Collisions

The **mean free path** for hard-sphere molecules of diameter $d$:

$$\ell = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,n\pi d^2◆RB◆$$

The factor $\sqrt◆LB◆2◆RB◆$ accounts for the relative motion of the scattering partners.

The **collision frequency:** $\nu = \langle v \rangle/\ell = \sqrt◆LB◆2◆RB◆\,n\pi d^2\langle v\rangle$.

For air at STP ($n \approx 2.5 \times 10^◆LB◆25◆RB◆$ m$^◆LB◆-3◆RB◆$, $d \approx 3.7 \times 10^◆LB◆-10◆RB◆$ m):

$$\ell = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆ \times 2.5 \times 10^◆LB◆25◆RB◆ \times \pi \times (3.7 \times 10^◆LB◆-10◆RB◆)^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1.52 \times 10^7◆RB◆ = 66\ \text◆LB◆nm◆RB◆$$

$$\nu = \frac◆LB◆445\ \text◆LB◆m◆RB◆/s◆RB◆◆LB◆66 \times 10^◆LB◆-9◆RB◆\,\text◆LB◆m◆RB◆ = 6.7 \times 10^9\ \text◆LB◆s◆RB◆^◆LB◆-1◆RB◆◆RB◆$$

### 14.3 Transport Coefficients

**Viscosity (gas):**
$\eta = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆n m \langle v \rangle \ell = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\rho\langle v \rangle\ell$.

**Thermal conductivity:**
$\kappa = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆n\langle v \rangle\ell\,c_V = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\rho\langle v \rangle\ell\,c_v$ where
$c_v$ is the specific heat per unit mass.

**Self-diffusion:** $D = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\langle v \rangle\ell$.

**Chapman--Enskog theory** gives more accurate expressions with numerical corrections:

$$\eta = \frac◆LB◆5◆RB◆◆LB◆16◆RB◆\frac◆LB◆\sqrt◆LB◆\pi m k_B T◆RB◆◆RB◆◆LB◆\pi d^2◆RB◆$$

<details>
<summary>Worked Example 14.1: Effusion Through a Small Hole</summary>

A container of nitrogen ($m = 28$ amu, $T = 300$ K) has a small hole of area $A$. The effusion rate
(molecules per second escaping):

$$\Phi = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆n\langle v\rangle A = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆n\sqrt◆LB◆\frac◆LB◆8k_BT◆RB◆◆LB◆\pi m◆RB◆◆RB◆\,A$$

At $P = 100$ Pa, $T = 300$ K:
$n = P/(k_BT) = 100/(1.38 \times 10^◆LB◆-23◆RB◆ \times 300) = 2.42 \times 10^◆LB◆22◆RB◆$ m$^◆LB◆-3◆RB◆$.

$$\langle v \rangle = \sqrt◆LB◆\frac◆LB◆8 \times 1.38 \times 10^◆LB◆-23◆RB◆ \times 300◆RB◆◆LB◆\pi \times 28 \times 1.66 \times 10^◆LB◆-27◆RB◆◆RB◆◆RB◆ = \sqrt◆LB◆\frac◆LB◆3.31 \times 10^◆LB◆-20◆RB◆◆RB◆◆LB◆1.46 \times 10^◆LB◆-25◆RB◆◆RB◆◆RB◆ = \sqrt◆LB◆2.27 \times 10^5◆RB◆ = 476\ \text◆LB◆m◆RB◆/s$$

$$\Phi = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ \times 2.42 \times 10^◆LB◆22◆RB◆ \times 476 \times A = 2.88 \times 10^◆LB◆24◆RB◆\,A\ \text◆LB◆s◆RB◆^◆LB◆-1◆RB◆$$

For $A = 1\,\text◆LB◆mm◆RB◆^2 = 10^◆LB◆-6◆RB◆\,\text◆LB◆m◆RB◆^2$: $\Phi = 2.88 \times 10^◆LB◆18◆RB◆$ molecules/s.

**Knudsen effusion:** The ratio of effusion rates for two gases with masses $m_1$ and $m_2$:

$$\frac◆LB◆\Phi_1◆RB◆◆LB◆\Phi_2◆RB◆ = \sqrt◆LB◆\frac◆LB◆m_2◆RB◆◆LB◆m_1◆RB◆◆RB◆$$

This is the basis for isotope separation by gaseous diffusion.

</details>

## 15. Information Theory and Statistical Mechanics

### 15.1 Shannon Entropy

The **Shannon entropy** of a probability distribution $\{p_i\}$:

$$S_◆LB◆\text◆LB◆Shannon◆RB◆ = -\sum_i p_i\ln p_i◆RB◆$$

This is mathematically identical to the Boltzmann entropy (up to the constant $k_B$), providing a
deep connection between information theory and thermodynamics.

**Maximum entropy principle:** The least biased probability distribution, given constraints (e.g.,
fixed mean energy), is the one that maximises the Shannon entropy. This reproduces the canonical
ensemble: maximising $S$ subject to $\sum p_i E_i = \langle E \rangle$ gives the Boltzmann
distribution.

### 15.2 Landauer's Principle

Erasing one bit of information in a memory element necessarily dissipates at least:

$$E \geq k_B T \ln 2$$

Of energy as heat. This establishes a fundamental lower bound on the energy cost of computation.

**Reversible computation:** If no information is erased (e.g., in logically reversible operations
like NOT), no energy dissipation is required in principle. This motivates research into reversible
computing architectures.

### 15.3 Maxwell's Demon

Maxwell's demon appears to violate the second law by sorting fast and slow molecules, creating a
temperature difference from an initially uniform gas without doing work.

**Resolution (Bennett, 1982):** The demon must acquire information about molecular speeds
(measurement) and then erase this information to reset its memory. By Landauer's principle, erasing
the information costs at least $k_B T \ln 2$ per bit, exactly compensating the entropy decrease of
the gas. The second law is upheld: $dS_◆LB◆\text◆LB◆gas◆RB◆ + dS_◆LB◆\text◆LB◆demon◆RB◆ \geq 0◆RB◆◆RB◆$.

<details>
<summary>Worked Example 15.1: Maximum Entropy Distribution</summary>

Find the probability distribution on $\{1, 2, 3, \ldots\}$ that maximises $S = -\sum_n p_n\ln p_n$
subject to the constraint $\sum_n n\,p_n = \mu$ (fixed mean).

Using Lagrange multipliers:

$$\frac◆LB◆\partial◆RB◆◆LB◆\partial p_n◆RB◆\left[-\sum_n p_n\ln p_n - \lambda\sum_n p_n - \beta\sum_n n\,p_n\right] = 0$$

$$-\ln p_n - 1 - \lambda - \beta n = 0 \implies p_n = e^◆LB◆-1-\lambda◆RB◆\,e^◆LB◆-\beta n◆RB◆$$

Normalising $\sum_n p_n = 1$: $p_n = (1 - e^◆LB◆-\beta◆RB◆)\,e^◆LB◆-\beta n◆RB◆$ (geometric distribution).

The constraint $\mu = \sum n\,p_n = e^◆LB◆-\beta◆RB◆/(1 - e^◆LB◆-\beta◆RB◆) = 1/(e^\beta - 1)$So
$\beta = \ln(1 + 1/\mu)$.

For $\mu = 5$: $\beta = \ln(1.2) = 0.182$, $p_n = 0.167 \times e^◆LB◆-0.182n◆RB◆$.

This shows that the exponential (geometric) distribution arises from maximum entropy with a
constraint on the mean value --- a deep connection between information theory and statistical
physics.

</details>

## Common Pitfalls (Additional)

1. **Onsager relations require careful force-flux pairing:** The reciprocal relations
   $L_◆LB◆ij◆RB◆ = L_◆LB◆ji◆RB◆$ hold only when the forces $F_i$ and fluxes $J_i$ are properly chosen as
   conjugate pairs (both contributing positively to $dS_i/dt$). An incorrect pairing can lead to
   wrong cross-coefficients.

2. **The relaxation time approximation is not exact:** Setting
   $(\partial f/\partial t)_◆LB◆\text◆LB◆coll◆RB◆ = -(f - f_0)/\tau◆RB◆$ assumes a single relaxation time for all
   processes. In reality, $\tau$ depends on velocity (energy), and different scattering processes
   have different time scales. The approximation works well for order-of-magnitude estimates but
   fails for quantitatively accurate transport predictions.

3. **Effusion vs. Hydrodynamic flow:** Effusion (molecular flow through a small hole) occurs when
   the hole diameter is much smaller than the mean free path ($d \ll \ell$Knudsen number $\gg 1$).
   For larger holes ($d \gg \ell$), hydrodynamic flow (described by the Navier--Stokes equations)
   dominates. The transition between regimes is important in vacuum systems.

4. **Landauer's bound is per bit, not per operation:** Only logically irreversible operations (those
   that erase information) incur the $k_BT\ln 2$ cost. Logically reversible operations (e.g.,
   swapping two bits) have no minimum energy cost in principle, though real physical implementations
   always have some dissipation.

5. **Maximum entropy is not the same as most probable:** The maximum entropy distribution is the
   least biased distribution consistent with the constraints. It may not be the distribution you
   would observe in a specific realisation. The ergodic hypothesis connects time averages to
   ensemble averages, but the convergence can be very slow for systems with long-range interactions
   or glassy dynamics.

## Problems (Additional)

<details>
<summary>Problem 21: Thermal Conductivity of a Gas</summary>

Calculate the thermal conductivity of argon at STP using kinetic theory.

Data: $m = 40$ amu, $d = 3.6 \times 10^◆LB◆-10◆RB◆$ m, $c_V = (3/2)k_B$ (monatomic),
$n = 2.69 \times 10^◆LB◆25◆RB◆$ m$^◆LB◆-3◆RB◆$.

Compare with the experimental value of $\kappa = 0.0177$ W/(m$\cdot$K) and comment on the
discrepancy.

**Solution:**

Mean speed:
$\langle v \rangle = \sqrt◆LB◆8k_BT/(\pi m)◆RB◆ = \sqrt◆LB◆8 \times 1.38 \times 10^◆LB◆-23◆RB◆ \times 300/(\pi \times 40 \times 1.66 \times 10^◆LB◆-27◆RB◆)◆RB◆ = \sqrt◆LB◆1.59 \times 10^5◆RB◆ = 399$
m/s.

Mean free path:
$\ell = 1/(\sqrt◆LB◆2◆RB◆\,n\pi d^2) = 1/(1.414 \times 2.69 \times 10^◆LB◆25◆RB◆ \times \pi \times 1.296 \times 10^◆LB◆-19◆RB◆) = 1/(1.38 \times 10^7) = 72.5$
nm.

$$\kappa = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\rho\langle v\rangle\ell\,c_v = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\frac◆LB◆nm\langle v\rangle\ell \times 3k_B◆RB◆◆LB◆2m◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆n\langle v\rangle\ell\,k_B$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \times 2.69 \times 10^◆LB◆25◆RB◆ \times 399 \times 72.5 \times 10^◆LB◆-9◆RB◆ \times 1.38 \times 10^◆LB◆-23◆RB◆$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \times 2.69 \times 10^◆LB◆25◆RB◆ \times 399 \times 10^◆LB◆-9◆RB◆ \times 72.5 \times 1.38 \times 10^◆LB◆-23◆RB◆$$

$$= 0.5 \times 2.69 \times 10^◆LB◆25◆RB◆ \times 3.995 \times 10^2 \times 10^◆LB◆-9◆RB◆ \times 10^◆LB◆-23◆RB◆$$

$$= 0.5 \times 2.69 \times 3.995 \times 72.5 \times 10^◆LB◆-5◆RB◆ = 0.5 \times 7789 \times 10^◆LB◆-5◆RB◆ = 0.0390\ \text◆LB◆W◆RB◆/(m\cdot\text◆LB◆K◆RB◆)$$

The kinetic theory prediction (0.039) overestimates the experimental value (0.0177) by about a
factor of 2.2. This discrepancy is systematic and is resolved by the Chapman--Enskog theory, which
gives:

$$\kappa_◆LB◆\text◆LB◆CE◆RB◆ = \frac◆LB◆25◆RB◆◆LB◆32◆RB◆\kappa_◆LB◆\text◆LB◆simple◆RB◆ \approx 0.78 \times 0.039 = 0.030\ \text◆LB◆W◆RB◆/(m\cdot\text◆LB◆K◆RB◆)◆RB◆◆RB◆$$

Still an overestimate; the remaining discrepancy is due to the hard-sphere model not accurately
representing the real intermolecular potential of argon (which has an attractive well that reduces
the effective collision cross-section at lower temperatures).

</details>

<details>
<summary>Problem 22: Boltzmann $H$-Theorem</summary>

(a) Show that for a spatially uniform gas, the Boltzmann equation with the BGK collision operator
$C[f] = -(f - f_0)/\tau$ leads to $dH/dt \leq 0$ where $H = \int f\ln f\, d^3v$.

(b) Identify the equilibrium state where $dH/dt = 0$.

**Solution:**

(a) For a spatially uniform gas with no external forces: $\partial f/\partial t = -(f - f_0)/\tau$.

$$\frac◆LB◆dH◆RB◆◆LB◆dt◆RB◆ = \int \frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆(1 + \ln f)\,d^3v = -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\int(f - f_0)(1 + \ln f)\,d^3v$$

$$= -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\left[\int f\,d^3v - \int f_0\,d^3v + \int f\ln f\,d^3v - \int f_0\ln f\,d^3v\right]$$

Since $\int f\,d^3v = \int f_0\,d^3v = n$ (number conservation):

$$\frac◆LB◆dH◆RB◆◆LB◆dt◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\left[\int f\ln f\,d^3v - \int f_0\ln f\,d^3v\right]$$

$$= -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\int (f - f_0)\ln f\,d^3v$$

Using the Gibbs inequality $\int (f - f_0)\ln f\,d^3v \geq 0$ (since $x\ln x - x + 1 \geq 0$ with
equality at $x = 1$):

$$\frac◆LB◆dH◆RB◆◆LB◆dt◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\int(f - f_0)(\ln f - \ln f_0)\,d^3v - \frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\int(f - f_0)\ln f_0\,d^3v$$

$$= -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\int(f - f_0)\ln(f/f_0)\,d^3v - \frac◆LB◆\ln f_0◆RB◆◆LB◆\tau◆RB◆\int(f - f_0)\,d^3v$$

$$= -\frac◆LB◆1◆RB◆◆LB◆\tau◆RB◆\int(f - f_0)\ln(f/f_0)\,d^3v$$

Since $x\ln x \geq x - 1$ for $x > 0$ (with equality at $x = 1$), the integrand
$(f/f_0)\ln(f/f_0) - (f/f_0) + 1 \geq 0$So $\int(f - f_0)\ln(f/f_0)\,d^3v \geq 0$.

Therefore $\frac◆LB◆dH◆RB◆◆LB◆dt◆RB◆ \leq 0$. $\blacksquare$

(b) $dH/dt = 0$ requires $f = f_0$ everywhere, i.e., the distribution is Maxwell--Boltzmann. This is
the equilibrium state, as expected.

</details>

## 16. Statistical Mechanics of Interacting Systems

### 16.1 The Ising Model Revisited

The 1D Ising model was solved exactly by Ising (1925) using the transfer matrix method. The 2D Ising
model was solved by Onsager (1944), providing one of the most important exact results in statistical
mechanics.

**Correlation functions:** The spin-spin correlation function:

$$\langle\sigma_i\sigma_j\rangle = \tanh^n(\beta J)$$

For the 1D chain with $n = |i - j|$. The **correlation length**:

$$\xi = -\frac◆LB◆1◆RB◆◆LB◆\ln\tanh(\beta J)◆RB◆$$

As $T \to T_c^-$: $\xi \to \infty$ (critical point).

**Scaling near $T_c$:** The correlation function takes the scaling form:

$$\langle\sigma_0\sigma_r\rangle \sim \frac◆LB◆e^◆LB◆-r/\xi◆RB◆◆RB◆◆LB◆r^◆LB◆(d-2+\eta)◆RB◆◆RB◆$$

Where $\eta$ is a critical exponent ($\eta = 1/4$ for the 2D Ising model).

### 16.2 Renormalisation Group (Conceptual)

The **renormalisation group** (RG) provides a framework for understanding critical phenomena. The
key idea: progressively integrate out short-wavelength fluctuations, rescaling, and look for fixed
points.

**RG flow diagram:**

1. Start with a Hamiltonian $H_0$ with coupling constants $\{K_i\}$.
2. Integrate out short-wavelength modes (thin out the lattice).
3. Rescale lengths: $x' = x/b$ ($b > 1$).
4. Rescale spins: $\sigma' = b^◆LB◆(d-2+\eta)/2◆RB◆\sigma$.
5. Repeat.

**Fixed points:** Values of the coupling constants that are invariant under RG transformation. Fixed
points correspond to scale-invariant theories (critical points).

- **Gaussian fixed point:** The mean-field critical exponents ($\eta = 0$, $\nu = 1/2$).
- **Wilson--Fisher fixed point:** The nontrivial fixed point of the $\phi^4$ theory in $d < 4$
  dimensions, giving non-mean-field exponents.
- **IR-stable fixed point:** Controls the low-energy (long-wavelength) physics.

** epsilon expansion:** Expand in $\epsilon = 4 - d$. At one loop:

$$\beta_u = \epsilon u - \frac◆LB◆3◆RB◆◆LB◆16\pi^2◆RB◆u^2 + \cdots$$

$$\beta_\lambda = \epsilon\lambda - \frac◆LB◆3◆RB◆◆LB◆16\pi^2◆RB◆\lambda u + \cdots$$

Setting $\beta_u = 0$: $u^* = 16\pi^2\epsilon/3 + O(\epsilon^2)$.

The critical exponents to order $\epsilon$:

$$\nu = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆\epsilon◆RB◆◆LB◆6◆RB◆ + O(\epsilon^2)$$

For $\epsilon = 1$ ($d = 3$): $\nu = 2/3 \approx 0.667$ (compare with the numerical value
$\nu \approx 0.630$).

### 16.3 Mean-Field Theory of Phase Transitions

The **Landau free energy** for a scalar order parameter $\phi$ near $T_c$:

$$f(\phi, T) = f_0(T) + \frac◆LB◆a_0◆RB◆◆LB◆2◆RB◆(T - T_c)\phi^2 + \frac◆LB◆b◆RB◆◆LB◆4◆RB◆\phi^4$$

**Mean-field exponents:** $\alpha = 0$ (jump in $C$),
$\beta = 1/2$$\gamma = 1$$\delta = 3$$\eta = 0$.

These are exact above the upper critical dimension $d_u = 4$. Below $d_u$Fluctuations modify the
exponents (as computed by the epsilon expansion).

**Ginzburg criterion:** Mean-field theory is valid when the fluctuation contribution to the free
energy is small compared to the mean-field part:

$$\xi^d \ll (T_c - T)^◆LB◆-(4-d)/2◆RB◆\frac◆LB◆1◆RB◆◆LB◆b^2◆RB◆$$

This gives a **Ginzburg temperature** $T_G$ below which fluctuations become important. For
conventional superconductors ($\xi_0 \sim 100$ nm, $T_c \sim 10$ K): $T_G/T_c \sim 10^◆LB◆-14◆RB◆$
(mean-field is excellent). For high-$T_c$ superconductors ($\xi_0 \sim 1$ nm, $T_c \sim 100$ K):
$T_G/T_c \sim 1$ (fluctuations are important, explaining the broad fluctuation regime above $T_c$).

<details>
<summary>Worked Example 16.1: RG Flow for the Gaussian Model</summary>

Consider the Gaussian (free field) model:
$\mathcal◆LB◆H◆RB◆ = \int d^dr\left[\frac◆LB◆1◆RB◆◆LB◆2◆RB◆(\nabla\phi)^2 + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆r_0\phi^2\right]$.

After thinning out modes in the shell $\Lambda/b < |k| < \Lambda$ and rescaling:

1. Integrate out short-wavelength modes: the correlation function $\xi$ transforms as
   $\xi' = \xi/b$.
2. The rescaled coupling: $r_0' = b^2 r_0$ (since $r_0$ has dimensions of mass$^2$ and we rescale
   $\phi' = b^◆LB◆(d-2)/2◆RB◆\phi$).

The RG flow for $r_0$: $\frac◆LB◆dr_0◆RB◆◆LB◆d\ln b◆RB◆ = 2r_0$ (relevant operator).

This means $r_0$ grows under RG, flowing away from the Gaussian fixed point ($r_0 = 0$). The fixed
point is unstable, indicating that the disordered phase ($r_0 > 0$$\phi = 0$ is stable) is separated
from the ordered phase by the critical point.

The correlation length exponent: $\xi \propto r_0^◆LB◆-1/2◆RB◆$Giving $\nu = 1/2$ (the mean-field value).

</details>

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

## Common Pitfalls

- **Confusing heat, temperature, and internal energy.** Temperature is a state variable; heat is
  energy transfer due to temperature difference; internal energy is the total kinetic energy of
  particles. **Fix:** $\Delta U = Q - W$ (first law); $U$ is a state function, $Q$ and $W$ are
  path-dependent.
- **Wrong entropy interpretation.** Entropy is a state function;
  $\Delta S = \int dQ_◆LB◆\text◆LB◆rev◆RB◆◆RB◆/T$. **Fix:** The second law states
  $\Delta S_◆LB◆\text◆LB◆universe◆RB◆◆RB◆ \geq 0$ for all processes; entropy of an isolated system never
  decreases.
- **Confusing microstates and macrostates.** Macrostate: specified by macroscopic variables.
  Microstate: specific arrangement of particles. **Fix:** $S = k_B \ln \Omega$ where $\Omega$ is the
  number of microstates.

## Summary

- First law: $\Delta U = Q - W$; conservation of energy.
- Second law: $\Delta S_◆LB◆\text◆LB◆universe◆RB◆◆RB◆ \geq 0$; entropy of an isolated system never decreases.
- Carnot efficiency: $\eta = 1 - T_C/T_H$ (maximum possible for given temperatures).
- Statistical mechanics: $S = k_B \ln \Omega$; Boltzmann distribution:
  $p_i \propto e^◆LB◆-E_i/(k_BT)◆RB◆$.

## Cross-References

| Topic            | Site       | Link                                                                                                             |
| ---------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| [Thermodynamics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/thermal-physics/02-thermodynamics)           |
| [Thermodynamics] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/2-particulate-nature-of-matter/1_thermodynamics)                   |
| [Thermodynamics] | University | [View](https://university.wyattau.com/docs/physics/2-thermal-physics/2_thermodynamics-and-statistical-mechanics) |
