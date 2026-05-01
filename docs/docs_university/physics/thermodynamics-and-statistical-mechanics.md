---
title: Thermodynamics and Statistical Mechanics
description:
  "University-level notes on Thermodynamics and Statistical Mechanics: 1. The Laws of Thermodynamics; 1.1 Zeroth Law; 1.2 First Law; 1.3 Second Law."
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

### 1.6 Thermodynamic Response Functions

Several material-dependent quantities characterise how a system responds to changes in its state
variables.

**Definition (Isothermal compressibility).**

$$\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T$$

**Definition (Adiabatic compressibility).**

$$\kappa_S = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_S$$

**Definition (Coefficient of thermal expansion).**

$$\alpha = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P$$

**Theorem 1.2 (Relation between heat capacities).**

$$C_P - C_V = \frac{TV\alpha^2}{\kappa_T}$$

**Proof.** From the identity $dS(T, V) = (\partial S/\partial T)_V\,dT + (\partial S/\partial V)_T\,dV$
and writing $dV$ in terms of $dT$ and $dP$ along a constant-$P$ path:

$$\left(\frac{\partial S}{\partial T}\right)_P = \left(\frac{\partial S}{\partial T}\right)_V + \left(\frac{\partial S}{\partial V}\right)_T \left(\frac{\partial V}{\partial T}\right)_P$$

Multiply by $T$ and use $C_V = T(\partial S/\partial T)_V$, $C_P = T(\partial S/\partial T)_P$, and the
Maxwell relation $(\partial S/\partial V)_T = (\partial P/\partial T)_V$:

$$C_P - C_V = T\left(\frac{\partial P}{\partial T}\right)_V \left(\frac{\partial V}{\partial T}\right)_P$$

Now use the cyclic relation $(\partial P/\partial T)_V = -(\partial V/\partial T)_P / (\partial V/\partial P)_T$
to obtain:

$$C_P - C_V = -T\frac{\left(\frac{\partial V}{\partial T}\right)_P^2}{\left(\frac{\partial V}{\partial P}\right)_T} = \frac{TV\alpha^2}{\kappa_T}$$

$\blacksquare$

Since $\kappa_T \gt 0$ for stable systems and $\alpha^2 \geq 0$, we always have $C_P \geq C_V$.

**Theorem 1.3 (Adiabatic index).** The ratio $\gamma = C_P/C_V$ satisfies:

$$\gamma = \frac{\kappa_T}{\kappa_S}$$

**Proof.** Along an adiabat, $dS = 0$. Using the chain rule:

$$dS = \left(\frac{\partial S}{\partial T}\right)_P\,dT + \left(\frac{\partial S}{\partial P}\right)_T\,dP = 0$$

$$\left(\frac{\partial P}{\partial T}\right)_S = -\frac{\left(\frac{\partial S}{\partial T}\right)_P}{\left(\frac{\partial S}{\partial P}\right)_T} = -\frac{C_P/T}{-(\partial V/\partial T)_P} = \frac{C_P}{T(\partial V/\partial T)_P}$$

Similarly, along an isotherm:

$$\left(\frac{\partial P}{\partial T}\right)_V = -\frac{(\partial V/\partial T)_P}{(\partial V/\partial P)_T} = \frac{\alpha}{\kappa_T}$$

Using the identity $C_P/C_V = (\partial P/\partial T)_S / (\partial P/\partial T)_V$ and simplifying gives
$\gamma = \kappa_T/\kappa_S$. $\blacksquare$

### 1.7 Second Law from Statistical Mechanics

**Theorem 1.4 (Statistical basis of the second law).** For an isolated system, the entropy
$S = k_B \ln \Omega$ can only increase or remain constant.

**Proof.** Consider an isolated system with fixed energy $E$, volume $V$, and particle number $N$.
The system evolves through accessible microstates. If the system starts in a non-equilibrium
macrostate $A$ with $\Omega_A$ microstates and evolves to macrostate $B$ with $\Omega_B$ microstates,
the evolution is driven by the ergodic exploration of phase space.

Since the system explores all accessible microstates with equal probability over time, it will
overwhelmingly be found in the macrostate with the largest number of microstates. If $\Omega_B \geq
\Omega_A$, then $S_B = k_B \ln \Omega_B \geq k_B \ln \Omega_A = S_A$.

More rigorously: suppose the system starts in a subset of $w_0$ microstates out of a total
$\Omega$. The probability that the system remains in this subset after randomising over all
microstates is $w_0/\Omega \ll 1$. The system therefore evolves toward the macrostate that
maximises $\Omega$, and hence maximises $S$. $\blacksquare$

This shows that the second law is not absolute but statistical: fluctuations can temporarily
decrease entropy, but the probability of a macroscopic fluctuation is exponentially small in $N$.

<details>
<summary>Solution: Worked Example — Response Functions for an Ideal Gas</summary>

For an ideal gas $PV = Nk_B T$:

- $\alpha = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P = \frac{Nk_B}{PV} = \frac{1}{T}$
- $\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T = \frac{V}{PV} = \frac{1}{P}$
- $C_P - C_V = \frac{TV \cdot (1/T)^2}{1/P} = \frac{V P}{T} = Nk_B$

This confirms $C_P - C_V = Nk_B$ for an ideal gas, a result that also follows directly from
equipartition.

</details>

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

### 2.4 Maxwell Relations from Thermodynamic Potentials

Since each thermodynamic potential is a state function, its differential is exact. By Euler's
reciprocity, mixed second partial derivatives are equal. This yields the four Maxwell relations
directly:

| From potential | Exact differential | Maxwell relation |
| --- | --- | --- |
| $U(S,V)$ | $dU = T\,dS - P\,dV$ | $(\partial T/\partial V)_S = -(\partial P/\partial S)_V$ |
| $H(S,P)$ | $dH = T\,dS + V\,dP$ | $(\partial T/\partial P)_S = (\partial V/\partial S)_P$ |
| $F(T,V)$ | $dF = -S\,dT - P\,dV$ | $(\partial S/\partial V)_T = (\partial P/\partial T)_V$ |
| $G(T,P)$ | $dG = -S\,dT + V\,dP$ | $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$ |

These relations allow us to express unmeasurable quantities (entropy changes) in terms of
measurable ones (equations of state).

<details>
<summary>Solution: Worked Example — Free Energy Minimisation</summary>

A gas cylinder at $T = 300$ K is divided by a frictionless piston. Side $A$ has volume $V_A = 1$ L
with $N_A = 0.04$ mol of ideal gas. Side $B$ has volume $V_B = 3$ L with $N_B = 0.02$ mol of ideal
gas. The piston is released and the system equilibrates at constant $T$. Find the equilibrium
volumes.

The total Helmholtz free energy is:

$$F = F_A + F_B = -N_A k_B T \ln\frac{e V_A}{N_A \lambda^3} - N_B k_B T \ln\frac{e V_B}{N_B \lambda^3}$$

where $\lambda = h/\sqrt{2\pi m k_B T}$ is the thermal de Broglie wavelength. At constant $T$,
$\lambda$ is constant, so minimising $F$ with respect to $V_A$ (with $V_B = V_{\mathrm{tot}} -
V_A$):

$$\frac{\partial F}{\partial V_A} = -\frac{N_A k_B T}{V_A} + \frac{N_B k_B T}{V_B} = 0$$

$$\frac{N_A}{V_A} = \frac{N_B}{V_B}$$

So $V_A/V_B = N_A/N_B = 2$. With $V_A + V_B = 4$ L: $V_A = 8/3$ L, $V_B = 4/3$ L.

This is just mechanical equilibrium: $P_A = P_B$, i.e., $N_A k_B T/V_A = N_B k_B T/V_B$.

</details>

### 2.5 Equilibrium Conditions

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

### 3.3 Applications of Maxwell Relations

**Application: entropy change of an ideal gas.** Using $(\partial S/\partial V)_T = (\partial P/\partial T)_V$
and the ideal gas law $P = Nk_B T/V$:

$$\left(\frac{\partial S}{\partial V}\right)_T = \frac{Nk_B}{V}$$

Integrating: $\Delta S = Nk_B \ln(V_f/V_i)$ for an isothermal expansion.

Similarly, using $(\partial S/\partial P)_T = -(\partial V/\partial T)_P$:

$$\left(\frac{\partial S}{\partial P}\right)_T = -\frac{Nk_B}{P}$$

So $\Delta S = -Nk_B \ln(P_f/P_i) = Nk_B \ln(V_f/V_i)$, consistent.

**Application: internal energy of an ideal gas.** Using $(\partial U/\partial V)_T = T(\partial P/\partial T)_V - P$
(a Maxwell relation consequence from $dU = T\,dS - P\,dV$):

$$\left(\frac{\partial U}{\partial V}\right)_T = T \cdot \frac{Nk_B}{V} - \frac{Nk_B T}{V} = 0$$

This confirms that the internal energy of an ideal gas depends only on $T$ (Joule's law).

<details>
<summary>Solution: Worked Example — Maxwell Relation for a Van der Waals Gas</summary>

For a van der Waals gas $\left(P + a/v^2\right)(v - b) = RT$ where $v = V/n$:

Using $(\partial U/\partial V)_T = T(\partial P/\partial T)_V - P$:

From the EOS: $P = RT/(v - b) - a/v^2$, so $(\partial P/\partial T)_V = R/(v - b) = (P + a/v^2)/T$.

Therefore:

$$\left(\frac{\partial U}{\partial V}\right)_T = T \cdot \frac{P + a/v^2}{T} - P = \frac{a}{v^2} = \frac{an^2}{V^2}$$

Integrating at constant $T$:

$$\Delta U = -\frac{an^2}{V_f} + \frac{an^2}{V_i}$$

For a free expansion ($W = 0$, $\delta Q = 0$, hence $\Delta U = 0$ for ideal gas), the van der Waals
gas heats up because the internal energy depends on volume through the $a/v^2$ term representing
intermolecular attraction. The temperature change is:

$$\Delta T = -\frac{a}{C_V}\left(\frac{1}{V_f} - \frac{1}{V_i}\right)$$

which is negative for $V_f \gt V_i$: the gas cools during free expansion.

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

### 4.4 Worked Example: Carnot Cycle Calculation

<details>
<summary>Solution: Carnot Cycle with a Monatomic Ideal Gas</summary>

A Carnot engine uses $n = 2$ mol of monatomic ideal gas ($C_V = \frac{3}{2}nR$, $C_P = \frac{5}{2}nR$,
$\gamma = 5/3$). The reservoirs are at $T_h = 600$ K and $T_c = 300$ K. At state $A$ (start of
isothermal expansion): $P_A = 10$ atm, $V_A = 10$ L.

**Step 1: Isothermal expansion at $T_h = 600$ K from $A$ to $B$.** Let $V_B = 20$ L.

$$Q_h = nRT_h \ln\frac{V_B}{V_A} = 2 \times 8.314 \times 600 \times \ln 2 \approx 6915\ \mathrm{J}$$

$$W_{AB} = Q_h = 6915\ \mathrm{J}$$ (isothermal, so $\Delta U = 0$)

$P_B = P_A V_A/V_B = 5$ atm.

**Step 2: Adiabatic expansion from $B$ to $C$.** $T_C = T_c = 300$ K. From $TV^{\gamma-1} = \mathrm{const}$:

$$V_C = V_B \left(\frac{T_h}{T_c}\right)^{1/(\gamma-1)} = 20 \times 2^{3/2} \approx 56.6\ \mathrm{L}$$

$Q_{BC} = 0$, $W_{BC} = -\Delta U = nC_V(T_h - T_c) = 2 \times \frac{3}{2} \times 8.314 \times 300 \approx 7483\ \mathrm{J}$.

**Step 3: Isothermal compression at $T_c = 300$ K from $C$ to $D$.** From $TV^{\gamma-1} = \mathrm{const}$
on the adiabat $DA$: $V_D = V_A(T_h/T_c)^{1/(\gamma-1)} = 10 \times 2^{3/2} \approx 28.3$ L.

$$Q_c = nRT_c \ln\frac{V_C}{V_D} = 2 \times 8.314 \times 300 \times \ln\frac{56.6}{28.3} \approx 3458\ \mathrm{J}$$

$W_{CD} = Q_c = 3458$ J (heat rejected; $W \lt 0$ for compression).

**Step 4: Adiabatic compression from $D$ to $A$.** $Q_{DA} = 0$, $W_{DA} = -nC_V(T_h - T_c) = -7483$ J.

**Summary:**

| Quantity | Value |
| --- | --- |
| $Q_h$ (absorbed) | 6915 J |
| $Q_c$ (rejected) | 3458 J |
| $W_{\mathrm{net}} = Q_h - Q_c$ | 3457 J |
| $\eta = W_{\mathrm{net}}/Q_h$ | 0.500 |
| $\eta_{\mathrm{Carnot}} = 1 - T_c/T_h$ | 0.500 |

The efficiency matches the Carnot prediction exactly, as expected for a reversible cycle.

</details>

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

**Theorem 5.1 (Concavity of entropy).** The Gibbs entropy is maximised when all accessible
microstates are equally probable.

**Proof.** Maximise $S = -k_B \sum_i p_i \ln p_i$ subject to $\sum_i p_i = 1$ using a Lagrange
multiplier $\lambda$:

$$\frac{\partial}{\partial p_j}\left[-\sum_i p_i \ln p_i - \lambda\left(\sum_i p_i - 1\right)\right] = -\ln p_j - 1 - \lambda = 0$$

This gives $p_j = e^{-1-\lambda} = \mathrm{const}$ for all $j$. The constraint $\sum_i p_i = 1$
then gives $p_i = 1/\Omega$. $\blacksquare$

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

### 6.4 Worked Example: Clausius-Clapeyron Applications

<details>
<summary>Solution: Boiling Point at Different Pressures</summary>

The latent heat of vaporisation of water at 1 atm ($T_b = 373.15$ K) is $L_v = 40700$ J/mol. Find the
boiling point at $P = 0.5$ atm.

Integrating the Clausius-Clapeyron equation:

$$\ln\frac{P_2}{P_1} = -\frac{L_v}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

$$\ln\frac{0.5}{1} = -\frac{40700}{8.314}\left(\frac{1}{T_2} - \frac{1}{373.15}\right)$$

$$-0.693 = -4894\left(\frac{1}{T_2} - 0.00268\right)$$

$$\frac{1}{T_2} = 0.00268 + \frac{0.693}{4894} = 0.00282$$

$$T_2 \approx 354.6\ \mathrm{K} \approx 81.5\degree\mathrm{C}$$

This explains why water boils at a lower temperature at high altitude.

</details>

<details>
<summary>Solution: Solid-Liquid Coexistence — Pressure Melting of Ice</summary>

For the ice-water transition: $L_f = 6008$ J/mol, $T_m = 273.15$ K,
$\Delta V = V_{\mathrm{water}} - V_{\mathrm{ice}} = 18.0 \times 10^{-6} - 19.7 \times 10^{-6}
= -1.7 \times 10^{-6}$ m$^3$/mol.

$$\frac{dP}{dT} = \frac{L_f}{T_m \Delta V} = \frac{6008}{273.15 \times (-1.7 \times 10^{-6})} \approx -1.29 \times 10^7\ \mathrm{Pa/K}$$

The negative slope means increasing pressure *lowers* the melting point:

$$\frac{dT}{dP} = -7.7 \times 10^{-8}\ \mathrm{K/Pa} = -0.0077\ \mathrm{K/atm}$$

At $P = 100$ atm: $\Delta T \approx -0.77$ K, so ice melts at approximately $272.4$ K. This is the
principle behind ice skating: the pressure under the blade slightly lowers the melting point,
creating a thin lubricating layer of water.

</details>

### 6.5 Worked Example: Phase Diagram Construction

<details>
<summary>Solution: Estimating the Triple Point</summary>

Given for a substance: normal boiling point $T_b = 353$ K at $P = 1$ atm, normal melting point
$T_m = 280$ K at $P = 1$ atm, $L_v = 35000$ J/mol, $L_f = 10000$ J/mol, and $\Delta V_{\mathrm{SL}} = -5 \times 10^{-6}$ m$^3$/mol.

At the triple point, the solid-gas, solid-liquid, and liquid-gas coexistence curves meet. To
estimate, we find where the sublimation curve meets the vaporisation curve.

For the sublimation curve: $L_s = L_f + L_v = 45000$ J/mol.

$$\ln\frac{P_{\mathrm{sub}}}{P_0} = -\frac{L_s}{R}\left(\frac{1}{T} - \frac{1}{T_0}\right)$$

At $T = T_m = 280$ K on the sublimation curve (assuming solid-gas equilibrium at the melting point
at low $P$):

$$P_{\mathrm{sub}}(280) = P_0 \exp\left[-\frac{45000}{8.314}\left(\frac{1}{280} - \frac{1}{T_0}\right)\right]$$

For the vaporisation curve at $T = 280$ K:

$$P_{\mathrm{vap}}(280) = 1\ \mathrm{atm} \times \exp\left[-\frac{35000}{8.314}\left(\frac{1}{280} - \frac{1}{353}\right)\right]$$

$$= \exp\left[-4210 \times (0.00357 - 0.00283)\right] = \exp(-3.12) \approx 0.044\ \mathrm{atm}$$

The triple point is where the sublimation and vaporisation curves intersect. In this simplified
model (neglecting the curvature of the solid-liquid line), the triple point is near $P \approx
0.04$ atm, $T \approx 275$ K. More accurate treatment requires integrating both curves and finding
their intersection numerically.

</details>

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

### 9.5 Kinetic Theory of Gases

#### Mean Free Path

The **mean free path** $\lambda_{\mathrm{mfp}}$ is the average distance a molecule travels between
collisions.

**Theorem 9.2 (Mean free path).** For a gas of $N$ hard-sphere molecules of diameter $d$ in volume
$V$:

$$\lambda_{\mathrm{mfp}} = \frac{1}{\sqrt{2}\,\pi d^2 n}$$

where $n = N/V$ is the number density.

**Proof.** A molecule of diameter $d$ sweeps out a cylinder of cross-section $\sigma = \pi d^2$
(per collision cross-section for identical particles, the effective cross-section is
$\pi(2d/2)^2 = \pi d^2$, but the relative velocity correction introduces the factor $\sqrt{2}$).
In time $\Delta t$, the molecule travels $v\,\Delta t$ and sweeps volume $\sigma v\,\Delta t$. The
number of collisions is $n\sigma v\,\Delta t$, so the mean free path is:

$$\lambda_{\mathrm{mfp}} = \frac{v\,\Delta t}{n\sigma v\,\Delta t} = \frac{1}{n\sigma}$$

For the correct treatment, one must use the mean relative velocity. Since both colliding molecules
are moving, the relative speed is $\sqrt{2}$ times the mean speed:

$$\lambda_{\mathrm{mfp}} = \frac{1}{\sqrt{2}\,\pi d^2 n}$$

$\blacksquare$

**Numerical example.** For air at STP ($n \approx 2.7 \times 10^{25}$ m$^{-3}$, $d \approx 3.7
\times 10^{-10}$ m):

$$\lambda_{\mathrm{mfp}} = \frac{1}{\sqrt{2}\,\pi (3.7 \times 10^{-10})^2 \times 2.7 \times 10^{25}} \approx 6.8 \times 10^{-8}\ \mathrm{m} \approx 68\ \mathrm{nm}$$

The collision frequency is $f_{\mathrm{coll}} = \langle v \rangle / \lambda_{\mathrm{mfp}} \approx
500/(6.8 \times 10^{-8}) \approx 7.4 \times 10^9$ s$^{-1}$.

#### Transport Properties

**Viscosity.** The shear viscosity of a dilute gas:

$$\eta = \frac{1}{3} n m \langle v \rangle \lambda_{\mathrm{mfp}} = \frac{1}{3} \frac{m\langle v \rangle}{\pi d^2 \sqrt{2}}$$

Substituting $\langle v \rangle = \sqrt{8k_B T/(\pi m)}$:

$$\eta = \frac{2}{3\pi^{3/2}} \frac{\sqrt{mk_B T}}{d^2}$$

A key prediction: viscosity is *independent of density* for a dilute gas (Maxwell's result,
verified experimentally). This is because $\lambda_{\mathrm{mfp}} \propto 1/n$ but the momentum
transfer per collision is proportional to the number of molecules per unit volume, giving
$\eta \propto n \cdot (1/n) = \mathrm{const}$.

**Thermal conductivity.** For a monatomic gas:

$$\kappa = \frac{1}{3} n \langle v \rangle \lambda_{\mathrm{mfp}} \cdot \frac{f}{2}k_B = \frac{f}{2}\frac{k_B}{m}\eta$$

where $f = 3$ for a monatomic gas. The ratio $\kappa/(\eta c_V/m) = f/2$ is predicted to be a
universal constant (Eucken's formula).

**Diffusion (self-diffusion).** The self-diffusion coefficient:

$$D = \frac{1}{3}\langle v \rangle \lambda_{\mathrm{mfp}} = \frac{1}{3}\frac{\langle v \rangle}{\sqrt{2}\,\pi d^2 n}$$

**Theorem 9.3 (Einstein relation).** The diffusion coefficient is related to mobility $\mu$ by:

$$D = \mu k_B T$$

This is a consequence of the fluctuation-dissipation theorem.

<details>
<summary>Solution: Worked Example — Viscosity of Nitrogen</summary>

For N$_2$ at $T = 273$ K: $m = 4.65 \times 10^{-26}$ kg, $d = 3.7 \times 10^{-10}$ m.

$$\eta = \frac{2}{3\pi^{3/2}} \frac{\sqrt{(4.65 \times 10^{-26})(1.381 \times 10^{-23})(273)}}{(3.7 \times 10^{-10})^2}$$

$$= \frac{2}{3\pi^{3/2}} \frac{\sqrt{1.75 \times 10^{-46}}}{1.37 \times 10^{-19}} = \frac{2}{16.69} \times \frac{1.32 \times 10^{-23}}{1.37 \times 10^{-19}}$$

$$\approx 1.15 \times 10^{-5}\ \mathrm{Pa\cdot s}$$

The experimental value is $\eta \approx 1.66 \times 10^{-5}$ Pa$\cdot$s. The discrepancy is due to
the hard-sphere model being an approximation; real molecules have softer repulsive potentials.

</details>

#### Derivation of the Maxwell-Boltzmann Speed Distribution

**Theorem 9.4.** The speed distribution for molecules in an ideal gas at temperature $T$ is:

$$f(v)\,dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-mv^2/(2k_B T)}\,dv$$

**Proof.** In the canonical ensemble, the probability of a molecule having momentum $\mathbf{p}$ is
proportional to $e^{-\beta p^2/(2m)}$. The velocity distribution is:

$$P(\mathbf{v})\,d^3v = \left(\frac{m}{2\pi k_B T}\right)^{3/2} \exp\left(-\frac{mv^2}{2k_B T}\right)\,d^3v$$

To find the speed distribution, transform to spherical coordinates in velocity space and integrate
over angles:

$$f(v)\,dv = P(\mathbf{v}) \cdot 4\pi v^2\,dv = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-mv^2/(2k_B T)}\,dv$$

$\blacksquare$

**Characteristic speeds from $f(v)$.** The most probable speed maximises $v^2 e^{-mv^2/(2k_BT)}$:

$$\frac{d}{dv}\left(v^2 e^{-mv^2/(2k_BT)}\right) = 0 \implies v_p = \sqrt{\frac{2k_B T}{m}}$$

The mean speed:

$$\langle v \rangle = \int_0^\infty v\,f(v)\,dv = 4\pi\left(\frac{m}{2\pi k_B T}\right)^{3/2}\int_0^\infty v^3 e^{-mv^2/(2k_BT)}\,dv = \sqrt{\frac{8k_B T}{\pi m}}$$

The RMS speed:

$$v_{\mathrm{rms}} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3k_B T}{m}}$$

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

### 13.4 Detailed Derivation of Planck's Law

**Theorem 13.1 (Planck's law).** The spectral radiance of a blackbody is:

$$B(\omega) = \frac{\hbar \omega^3}{4\pi^3 c^2} \cdot \frac{1}{e^{\beta\hbar\omega} - 1}$$

**Proof.** Consider electromagnetic modes in a cavity of volume $V = L^3$ with periodic boundary
conditions. The allowed wavevectors are $\mathbf{k} = (2\pi/L)(n_x, n_y, n_z)$ with $n_i \in
\mathbb{Z}$. The number of modes with wavevector magnitude between $k$ and $k + dk$ (counting two
polarisations) is:

$$g(k)\,dk = \frac{V \cdot 4\pi k^2\,dk}{(2\pi)^3} \times 2 = \frac{Vk^2}{\pi^2}\,dk$$

Converting to frequency using $\omega = ck$ and $dk = d\omega/c$:

$$g(\omega)\,d\omega = \frac{V\omega^2}{\pi^2 c^3}\,d\omega$$

Each mode is a quantum harmonic oscillator with energy $\hbar\omega(n + 1/2)$. Since photons are
bosons with $\mu = 0$ (photon number is not conserved), the mean occupation number is:

$$\langle n(\omega) \rangle = \frac{1}{e^{\beta\hbar\omega} - 1}$$

The energy in modes between $\omega$ and $\omega + d\omega$ is:

$$dU = g(\omega)\,d\omega \cdot \hbar\omega \cdot \langle n(\omega) \rangle = \frac{V\hbar\omega^3}{\pi^2 c^3} \cdot \frac{d\omega}{e^{\beta\hbar\omega} - 1}$$

The spectral energy density is $u(\omega) = (1/V)\,dU/d\omega$:

$$u(\omega) = \frac{\hbar\omega^3}{\pi^2 c^3} \cdot \frac{1}{e^{\beta\hbar\omega} - 1}$$

$\blacksquare$

**Historical note.** Planck originally derived this result in 1900 by interpolating between the
Rayleigh-Jeans law (valid at low frequencies, $u(\omega) \propto \omega^2$) and Wien's law (valid
at high frequencies, $u(\omega) \propto \omega^3 e^{-\beta\hbar\omega}$). The Rayleigh-Jeans law
leads to the "ultraviolet catastrophe" — infinite total energy — which Planck resolved by
postulating that energy is quantised in units of $\hbar\omega$.

### 13.5 Derivation of the Stefan-Boltzmann Law

**Theorem 13.2 (Stefan-Boltzmann).** The total radiated power per unit area from a blackbody is:

$$j = \sigma T^4, \quad \sigma = \frac{\pi^2 k_B^4}{60\hbar^3 c^2}$$

**Proof.** Integrate the spectral energy density:

$$u = \int_0^\infty u(\omega)\,d\omega = \frac{\hbar}{\pi^2 c^3} \int_0^\infty \frac{\omega^3\,d\omega}{e^{\beta\hbar\omega} - 1}$$

Substituting $x = \beta\hbar\omega$:

$$u = \frac{(k_B T)^4}{\pi^2 \hbar^3 c^3} \int_0^\infty \frac{x^3\,dx}{e^x - 1}$$

The integral $\int_0^\infty x^3/(e^x - 1)\,dx = \Gamma(4)\,\zeta(4) = 6 \times \pi^4/90 = \pi^4/15$.

$$u = \frac{\pi^2 k_B^4}{15\hbar^3 c^3}\,T^4$$

The radiated power per unit area (intensity) relates to the energy density by $j = cu/4$ (the
factor of $1/4$ accounts for the projection effect and the average of $\cos\theta$ over the
hemisphere):

$$j = \frac{c}{4}u = \frac{\pi^2 k_B^4}{60\hbar^3 c^2}\,T^4 = \sigma T^4$$

$\blacksquare$

### 13.6 Wien's Displacement Law

**Theorem 13.3 (Wien's displacement law).** The peak of $u(\lambda)$ occurs at:

$$\lambda_{\mathrm{max}} T = b = 2.898 \times 10^{-3}\ \mathrm{m \cdot K}$$

**Proof.** Express the spectral energy density in terms of wavelength $\lambda = 2\pi c/\omega$:

$$u(\lambda) = \frac{8\pi h c}{\lambda^5} \cdot \frac{1}{e^{hc/(\lambda k_B T)} - 1}$$

Setting $du/d\lambda = 0$ and substituting $x = hc/(\lambda k_B T)$:

$$\frac{d}{dx}\left(\frac{x^5}{e^x - 1}\right) = 0 \implies 5(e^x - 1) - xe^x = 0$$

This transcendental equation has the solution $x \approx 4.965$, giving $\lambda_{\mathrm{max}} T
= hc/(4.965\,k_B) = b$. $\blacksquare$

<details>
<summary>Solution: Worked Example — Temperature of the Sun's Surface</summary>

The Sun's emission peaks at $\lambda_{\mathrm{max}} \approx 502$ nm (green). Using Wien's law:

$$T = \frac{b}{\lambda_{\mathrm{max}}} = \frac{2.898 \times 10^{-3}}{502 \times 10^{-9}} \approx 5770\ \mathrm{K}$$

The total radiated power per unit area:

$$j = \sigma T^4 = (5.67 \times 10^{-8})(5770)^4 \approx 6.32 \times 10^7\ \mathrm{W/m^2}$$

With solar radius $R_\odot \approx 6.96 \times 10^8$ m, the total luminosity is:

$$L = 4\pi R_\odot^2 \cdot j \approx 4\pi(6.96 \times 10^8)^2 \times 6.32 \times 10^7 \approx 3.85 \times 10^{26}\ \mathrm{W}$$

This matches the measured solar luminosity to within a few percent, validating blackbody theory.

</details>

## 14. The Ising Model

### 14.1 Definition

The **Ising model** is a lattice of $N$ spin-1/2 variables $s_i \in \\{+1, -1\\}$ with Hamiltonian:

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

## 15. The Microcanonical Ensemble

### 15.1 Definition and Fundamental Postulate

The **microcanonical ensemble** describes an isolated system with fixed energy $E$, volume $V$, and
particle number $N$. The fundamental postulate of statistical mechanics states:

> All accessible microstates of an isolated system are equally probable.

For a classical system, the number of microstates with energy between $E$ and $E + \delta E$ is:

$$\Omega(E, V, N) = \frac{1}{N!h^{3N}} \int_{E \lt H(\mathbf{q},\mathbf{p}) \lt E+\delta E} d^{3N}q\,d^{3N}p$$

The factor $h^{3N}$ makes $\Omega$ dimensionless (and is justified by quantum mechanics), and
$1/N!$ accounts for indistinguishability.

### 15.2 Connection to Thermodynamics

**Definition (Microcanonical temperature).** The temperature is defined by:

$$\frac{1}{T} = \left(\frac{\partial S}{\partial E}\right)_{V,N}, \quad S = k_B \ln \Omega$$

**Definition (Microcanonical pressure).**

$$P = T\left(\frac{\partial S}{\partial V}\right)_{E,N}$$

**Definition (Microcanonical chemical potential).**

$$\mu = -T\left(\frac{\partial S}{\partial N}\right)_{E,V}$$

### 15.3 The Ideal Gas in the Microcanonical Ensemble

**Theorem 15.1 (Sackur-Tetrode equation).** The entropy of a monatomic ideal gas is:

$$S = Nk_B\left[\ln\left(\frac{V}{N}\left(\frac{4\pi m E}{3Nh^2}\right)^{3/2}\right) + \frac{5}{2}\right]$$

**Proof.** For $N$ non-interacting particles, $H = \sum_{i=1}^N p_i^2/(2m)$. The number of
microstates with total energy between $E$ and $E + \delta E$ is the volume of a spherical shell in
$3N$-dimensional momentum space:

$$\Omega = \frac{1}{N!h^{3N}} V^N \cdot \frac{2\pi^{3N/2}}{\Gamma(3N/2)} (2mE)^{3N/2} \cdot \frac{3N\,\delta E}{2E}$$

The factor $(3N\,\delta E)/(2E)$ is the shell thickness in radius. Taking the logarithm:

$$\ln\Omega = N\ln V - \ln N! + \frac{3N}{2}\ln(2\pi m k_B T) - 3N\ln h + \frac{3N}{2} + \ln\left(\frac{3N\,\delta E}{2E}\right)$$

Using Stirling's approximation $\ln N! \approx N\ln N - N$ and $E = \frac{3}{2}Nk_B T$:

$$S = k_B\ln\Omega = Nk_B\left[\ln\left(\frac{V}{N}\left(\frac{4\pi m E}{3Nh^2}\right)^{3/2}\right) + \frac{5}{2}\right] + \mathcal{O}(\ln N)$$

The $\mathcal{O}(\ln N)$ terms (from the shell thickness) are negligible compared to the $\mathcal{O}(N)$
terms in the thermodynamic limit. $\blacksquare$

This is the **Sackur-Tetrode equation**, which gives the absolute entropy of a monatomic ideal gas.
It satisfies the third law in the sense that $S \to -\infty$ as $T \to 0$, indicating the
breakdown of the classical description at low temperatures.

### 15.4 Derivation of the Canonical Ensemble from the Microcanonical Ensemble

**Theorem 15.2.** A small subsystem of a large microcanonical ensemble obeys the Boltzmann
distribution.

**Proof.** Consider a total system with energy $E_{\mathrm{tot}}$ composed of subsystem $S$ (with
energy $E_S$) and reservoir $R$ (with energy $E_R = E_{\mathrm{tot}} - E_S$). The probability that
$S$ is in a specific microstate with energy $E_S$ is:

$$P(E_S) = \frac{\Omega_R(E_{\mathrm{tot}} - E_S)}{\Omega_{\mathrm{tot}}(E_{\mathrm{tot}})}$$

Since the reservoir is large, expand to first order:

$$\ln\Omega_R(E_{\mathrm{tot}} - E_S) \approx \ln\Omega_R(E_{\mathrm{tot}}) - E_S\frac{\partial \ln\Omega_R}{\partial E_R}$$

Using $\partial\ln\Omega_R/\partial E_R = 1/(k_B T)$:

$$P(E_S) \propto e^{-E_S/(k_B T)} = e^{-\beta E_S}$$

Normalising gives the Boltzmann distribution $P_i = e^{-\beta E_i}/Z$. $\blacksquare$

<details>
<summary>Solution: Worked Example — Entropy of Mixing Revisited</summary>

Two ideal gases, each with $N$ particles at the same $T$ and $P$, are separated by a partition.
The partition is removed. Find $\Delta S$.

Before mixing: each gas occupies volume $V$. The total entropy is $S_i = 2 \times S(N, V, T)$.

After mixing: each gas occupies volume $2V$. The total entropy is:

$$S_f = S(N, 2V, T) + S(N, 2V, T) = 2 \times S(N, 2V, T)$$

From the Sackur-Tetrode equation, the change for each gas is:

$$\Delta S_{\mathrm{one\ gas}} = Nk_B\ln\frac{2V}{V} = Nk_B\ln 2$$

If the gases are *different*: $\Delta S = 2Nk_B\ln 2$.

If the gases are *identical*: removing the partition does nothing observable. The total entropy is
$S(N, 2V, T) = S(2N, 2V, T)$ (using $N!$ correction), and $\Delta S = 0$. The $1/N!$ factor in
the partition function automatically resolves this paradox.

</details>

## 16. The Canonical Ensemble — Detailed Treatment

### 16.1 Derivation of Thermodynamic Quantities

The canonical partition function is $Z = \sum_i e^{-\beta E_i}$ for a discrete spectrum, or

$$Z = \frac{1}{N!h^{3N}}\int e^{-\beta H(\mathbf{q},\mathbf{p})}\,d^{3N}q\,d^{3N}p$$

for a classical system.

**Theorem 16.1.** All thermodynamic quantities follow from $\ln Z$:

| Quantity | Formula |
| --- | --- |
| Internal energy | $U = -\partial \ln Z / \partial \beta$ |
| Helmholtz free energy | $F = -k_B T \ln Z$ |
| Entropy | $S = k_B(\ln Z + \beta U)$ |
| Pressure | $P = k_B T\,(\partial \ln Z/\partial V)_{\beta,N}$ |
| Chemical potential | $\mu = -k_B T\,(\partial \ln Z/\partial N)_{\beta,V}$ |
| Heat capacity | $C_V = k_B\beta^2(\langle E^2 \rangle - \langle E \rangle^2)$ |

**Proof (energy and heat capacity).**

$$U = \langle E \rangle = \frac{1}{Z}\sum_i E_i e^{-\beta E_i} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta} = -\frac{\partial \ln Z}{\partial \beta}$$

$$\langle E^2 \rangle = \frac{1}{Z}\sum_i E_i^2 e^{-\beta E_i} = \frac{1}{Z}\frac{\partial^2 Z}{\partial \beta^2}$$

$$\langle E^2 \rangle - \langle E \rangle^2 = \frac{\partial^2 \ln Z}{\partial \beta^2} = -\frac{\partial U}{\partial \beta} = k_B T^2 C_V$$

$\blacksquare$

### 16.2 The Classical Partition Function for an Ideal Gas

**Theorem 16.2.** The classical partition function for $N$ indistinguishable ideal gas particles is:

$$Z = \frac{1}{N!}\left(\frac{V}{\lambda^3}\right)^N$$

where $\lambda = h/\sqrt{2\pi m k_B T}$ is the thermal de Broglie wavelength.

**Proof.** For non-interacting particles, $H = \sum_{i=1}^N p_i^2/(2m)$:

$$Z = \frac{1}{N!h^{3N}}\int_V d^{3N}q \int_{-\infty}^\infty d^{3N}p\;\exp\left(-\beta\sum_{i=1}^N\frac{p_i^2}{2m}\right)$$

$$= \frac{V^N}{N!h^{3N}}\left[\int_{-\infty}^\infty e^{-\beta p^2/(2m)}\,dp\right]^{3N}$$

Using the Gaussian integral $\int_{-\infty}^\infty e^{-ax^2}\,dx = \sqrt{\pi/a}$:

$$= \frac{V^N}{N!h^{3N}}\left(\frac{2\pi m}{\beta}\right)^{3N/2} = \frac{1}{N!}\left[\frac{V}{h^3}\left(\frac{2\pi m}{\beta}\right)^{3/2}\right]^N = \frac{1}{N!}\left(\frac{V}{\lambda^3}\right)^N$$

$\blacksquare$

From this, all ideal gas thermodynamics follows:
$F = -Nk_B T[\ln(V/N\lambda^3) + 1]$, $P = Nk_B T/V$, $S = Nk_B[\ln(V/N\lambda^3) + 5/2]$.

## 17. Problem Set

<details>
<summary>Problem 1: Entropy change in free expansion</summary>

**Problem.** One mole of ideal gas doubles its volume in a free expansion (no heat exchange, no
work done). Calculate $\Delta S$. Does this violate the second law?

**Solution.** For a free expansion, $Q = 0$ and $W = 0$, so $\Delta U = 0$ and $\Delta T = 0$
(ideal gas). The entropy change is:

$$\Delta S = nR\ln\frac{V_f}{V_i} = R\ln 2 \approx 5.76\ \mathrm{J/K}$$

This does not violate the second law. The second law states $\Delta S_{\mathrm{universe}} \geq 0$.
For the system, $\Delta S = R\ln 2 \gt 0$. For the surroundings, $\Delta S_{\mathrm{surr}} = 0$
(no heat exchanged). So $\Delta S_{\mathrm{universe}} = R\ln 2 \gt 0$, consistent with an
irreversible process.

**If you get this wrong, revise:** Section 1.4 (Clausius inequality) and Section 9.2 (ideal gas
entropy).

</details>

<details>
<summary>Problem 2: Carnot efficiency with given temperatures</summary>

**Problem.** A Carnot engine operates between $T_h = 500$ K and $T_c = 300$ K, absorbing 1000 J per
cycle from the hot reservoir. Find $Q_c$, $W$, and $\eta$.

**Solution.**

$$\eta = 1 - \frac{T_c}{T_h} = 1 - \frac{300}{500} = 0.4$$

$$W = \eta Q_h = 0.4 \times 1000 = 400\ \mathrm{J}$$

$$Q_c = Q_h - W = 600\ \mathrm{J}$$

**If you get this wrong, revise:** Section 4.1 (Carnot cycle) and Theorem 1.1 (Carnot's theorem).

</details>

<details>
<summary>Problem 3: Maxwell relation for a general equation of state</summary>

**Problem.** A gas obeys $P = RT/(V_m - b) - a/V_m^2$ (van der Waals). Use a Maxwell relation to
find $(\partial S/\partial V)_T$.

**Solution.** Using $(\partial S/\partial V)_T = (\partial P/\partial T)_V$:

$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V = \frac{R}{V_m - b}$$

Integrating at constant $T$:

$$\Delta S = R\ln\frac{V_{m,f} - b}{V_{m,i} - b}$$

**If you get this wrong, revise:** Section 3.1 (Maxwell relation derivation) and Section 3.3
(applications).

</details>

<details>
<summary>Problem 4: Heat capacity relation for a solid</summary>

**Problem.** A solid has $\alpha = 3 \times 10^{-5}$ K$^{-1}$, $\kappa_T = 6 \times 10^{-12}$
Pa$^{-1}$, molar volume $V_m = 2.5 \times 10^{-5}$ m$^3$/mol, and $C_P = 25$ J/(mol$\cdot$K).
Find $C_P - C_V$ and $C_V$.

**Solution.**

$$C_P - C_V = \frac{TV_m\alpha^2}{\kappa_T} = \frac{300 \times 2.5 \times 10^{-5} \times (3 \times 10^{-5})^2}{6 \times 10^{-12}}$$

$$= \frac{300 \times 2.5 \times 10^{-5} \times 9 \times 10^{-10}}{6 \times 10^{-12}} = \frac{6.75 \times 10^{-12}}{6 \times 10^{-12}} = 1.125\ \mathrm{J/(mol \cdot K)}$$

$$C_V = C_P - 1.125 \approx 23.9\ \mathrm{J/(mol \cdot K)}$$

For a solid at room temperature, $C_P - C_V$ is typically small (a few percent of $C_P$).

**If you get this wrong, revise:** Section 1.6 (thermodynamic response functions) and Theorem 1.2.

</details>

<details>
<summary>Problem 5: Helmholtz free energy of a paramagnet</summary>

**Problem.** A paramagnetic system of $N$ non-interacting spin-1/2 particles in a magnetic field $B$
has energy levels $E = \pm \mu_B B$ per particle ($\mu_B$ is the Bohr magneton). Find $F$, $S$, and
$M = -(\partial F/\partial B)_T$.

**Solution.** Single-particle partition function: $z = e^{\beta\mu_B B} + e^{-\beta\mu_B B} = 2\cosh(\beta\mu_B B)$.

$$Z = z^N = 2^N \cosh^N(\beta\mu_B B)$$

$$F = -k_B T \ln Z = -Nk_B T\left[\ln 2 + \ln\cosh(\beta\mu_B B)\right]$$

$$S = -\left(\frac{\partial F}{\partial T}\right)_B = Nk_B\left[\ln 2 + \ln\cosh(\beta\mu_B B) - \beta\mu_B B\tanh(\beta\mu_B B)\right]$$

$$M = -\left(\frac{\partial F}{\partial B}\right)_T = N\mu_B\tanh(\beta\mu_B B)$$

At high $T$: $M \approx N\mu_B^2 B/(k_B T)$ (Curie's law). At $T = 0$: $M = N\mu_B$ (saturation).

**If you get this wrong, revise:** Section 7.1 (Boltzmann distribution) and Section 7.3 (two-level
system).

</details>

<details>
<summary>Problem 6: Partition function of a quantum harmonic oscillator</summary>

**Problem.** A 1D quantum harmonic oscillator has $E_n = \hbar\omega(n + 1/2)$. Calculate $Z$, $U$,
$C_V$, and $S$. Find the high- and low-temperature limits.

**Solution.**

$$Z = \sum_{n=0}^\infty e^{-\beta\hbar\omega(n+1/2)} = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}$$

$$U = -\frac{\partial\ln Z}{\partial\beta} = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}$$

$$C_V = \frac{\partial U}{\partial T} = k_B(\beta\hbar\omega)^2 \frac{e^{\beta\hbar\omega}}{(e^{\beta\hbar\omega} - 1)^2}$$

High $T$ ($\beta\hbar\omega \ll 1$): $U \approx k_B T$, $C_V \approx k_B$ (equipartition).
Low $T$ ($\beta\hbar\omega \gg 1$): $U \approx \hbar\omega/2$ (zero-point energy), $C_V \approx
k_B(\beta\hbar\omega)^2 e^{-\beta\hbar\omega} \to 0$ exponentially.

**If you get this wrong, revise:** Section 8.4 (vibrational partition function) and Section 9.4
(equipartition).

</details>

<details>
<summary>Problem 7: Fermi energy of a 3D electron gas</summary>

**Problem.** Sodium has one conduction electron per atom, atomic mass $23$ g/mol, density $970$
kg/m$^3$. Calculate the Fermi energy $\varepsilon_F$ and Fermi temperature $T_F$.

**Solution.** Number density: $n = (\rho N_A / M) = (970 \times 6.022 \times 10^{23}) / (0.023)
= 2.54 \times 10^{28}$ m$^{-3}$.

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3} = \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}}(3\pi^2 \times 2.54 \times 10^{28})^{2/3}$$

$$(3\pi^2 n)^{2/3} = (7.55 \times 10^{29})^{2/3} = 8.28 \times 10^{19}\ \mathrm{m^{-2}}$$

$$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 8.28 \times 10^{19} = 5.06 \times 10^{-19}\ \mathrm{J} \approx 3.16\ \mathrm{eV}$$

$$T_F = \frac{\varepsilon_F}{k_B} = \frac{5.06 \times 10^{-19}}{1.381 \times 10^{-23}} \approx 36600\ \mathrm{K}$$

**If you get this wrong, revise:** Section 10.2 (Fermi-Dirac statistics) and Section 10.6 (electron
gas in metals).

</details>

<details>
<summary>Problem 8: Bose-Einstein condensation temperature</summary>

**Problem.** $10^4$ rubidium-87 atoms are trapped in a harmonic potential. Estimate the BEC
transition temperature. ($m = 87 \times 1.66 \times 10^{-27}$ kg.)

**Solution.** For a harmonic trap, the density of states is $g(\varepsilon) = \varepsilon^2 /
(2(\hbar\bar\omega)^3)$ where $\bar\omega = (\omega_x\omega_y\omega_z)^{1/3}$. The BEC condition
is $N = \zeta(3)(k_B T_c/\hbar\bar\omega)^3$:

$$T_c = \frac{\hbar\bar\omega}{k_B}\left(\frac{N}{\zeta(3)}\right)^{1/3}$$

Assuming $\bar\omega = 2\pi \times 100$ Hz:

$$T_c = \frac{1.055 \times 10^{-34} \times 2\pi \times 100}{1.381 \times 10^{-23}} \times \left(\frac{10^4}{2.612}\right)^{1/3}$$

$$= 4.80 \times 10^{-9} \times 15.7 \approx 7.5 \times 10^{-8}\ \mathrm{K} = 75\ \mathrm{nK}$$

This is consistent with experimental BEC observations in laser-cooled atom traps.

**If you get this wrong, revise:** Section 10.3 (Bose-Einstein statistics) and Section 10.4 (BEC).

</details>

<details>
<summary>Problem 9: Chemical potential of a classical ideal gas</summary>

**Problem.** Show that the chemical potential of a classical ideal gas is $\mu = k_B T\ln(n\lambda^3)$
where $n = N/V$ and $\lambda$ is the thermal de Broglie wavelength. Discuss the sign of $\mu$.

**Solution.** From $F = -Nk_B T[\ln(V/N\lambda^3) + 1]$:

$$\mu = \left(\frac{\partial F}{\partial N}\right)_{T,V} = -k_B T\ln\left(\frac{V}{N\lambda^3}\right) = k_B T\ln\left(\frac{N\lambda^3}{V}\right) = k_B T\ln(n\lambda^3)$$

When $n\lambda^3 \ll 1$ (classical regime, dilute gas or high $T$): $\mu \lt 0$. When $n\lambda^3 \to
1$ (approaching quantum degeneracy): $\mu \to 0$. For fermions, $\mu \gt 0$ in the degenerate
regime ($T \ll T_F$).

**If you get this wrong, revise:** Section 9.2 (equation of state) and Section 10.5 (comparison of
statistics).

</details>

<details>
<summary>Problem 10: Entropy of a spin system</summary>

**Problem.** A system of $N = 100$ non-interacting spin-1/2 particles in zero magnetic field. What
is the total entropy? If a field is applied and all spins align, what is $\Delta S$?

**Solution.** In zero field, all $2^N$ microstates are equally probable:

$$S = k_B\ln\Omega = k_B\ln(2^N) = Nk_B\ln 2 = 100 \times 1.381 \times 10^{-23} \times 0.693 \approx 9.57 \times 10^{-22}\ \mathrm{J/K}$$

When all spins are aligned (one microstate):

$$S_f = k_B\ln 1 = 0$$

$$\Delta S = -Nk_B\ln 2$$

This is the maximum entropy change achievable by applying a magnetic field to a spin system, and
forms the basis of magnetic cooling (adiabatic demagnetisation refrigeration).

**If you get this wrong, revise:** Section 5.1 (Boltzmann entropy) and Section 5.2 (Gibbs entropy).

</details>

<details>
<summary>Problem 11: Blackbody radiation in a cavity</summary>

**Problem.** A cavity of volume $V = 1$ cm$^3$ is maintained at $T = 1000$ K. Find the total
radiant energy inside and the radiation pressure on the walls.

**Solution.** Total energy density:

$$u = \frac{\pi^2 k_B^4}{15\hbar^3 c^3}\,T^4 = \frac{\pi^2(1.381 \times 10^{-23})^4}{15(1.055 \times 10^{-34})^3(3 \times 10^8)^3} \times (1000)^4$$

$$= \frac{7.56 \times 10^{-16}}{15 \times 1.17 \times 10^{-102} \times 2.7 \times 10^{25}} \times 10^{12}$$

$$u \approx 7.56 \times 10^{-16}\ \mathrm{J/m^3}$$

Total energy: $U = uV = 7.56 \times 10^{-16} \times 10^{-6} = 7.56 \times 10^{-22}$ J.

Radiation pressure: $P_{\mathrm{rad}} = u/3 = 2.52 \times 10^{-16}$ Pa.

**If you get this wrong, revise:** Section 13.2 (Stefan-Boltzmann law) and Section 13.1 (Planck
distribution).

</details>

<details>
<summary>Problem 12: Clausius-Clapeyron application</summary>

**Problem.** The vapour pressure of benzene is 75 mmHg at $20\degree$C and 300 mmHg at $50\degree$C.
Estimate the enthalpy of vaporisation and the normal boiling point.

**Solution.** From the integrated Clausius-Clapeyron equation:

$$\ln\frac{P_2}{P_1} = -\frac{L_v}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

$$\ln\frac{300}{75} = -\frac{L_v}{8.314}\left(\frac{1}{323} - \frac{1}{293}\right)$$

$$\ln 4 = 1.386 = -\frac{L_v}{8.314}(-3.16 \times 10^{-4})$$

$$L_v = \frac{1.386 \times 8.314}{3.16 \times 10^{-4}} \approx 36400\ \mathrm{J/mol}$$

Normal boiling point ($P = 760$ mmHg):

$$\ln\frac{760}{75} = -\frac{36400}{8.314}\left(\frac{1}{T_b} - \frac{1}{293}\right)$$

$$2.313 = -4378\left(\frac{1}{T_b} - 0.00341\right)$$

$$\frac{1}{T_b} = 0.00341 + \frac{2.313}{4378} = 0.00394$$

$$T_b \approx 354\ \mathrm{K} \approx 81\degree\mathrm{C}$$

(Experimental value: $80.1\degree$C, showing good agreement.)

**If you get this wrong, revise:** Section 6.2 (Clausius-Clapeyron equation) and Section 6.4
(worked examples).

</details>

<details>
<summary>Problem 13: Grand canonical partition function of a single orbital</summary>

**Problem.** A single quantum orbital at energy $\varepsilon$ is in contact with a reservoir at
chemical potential $\mu$ and temperature $T$. Calculate $\langle N \rangle$ and
$\langle N^2 \rangle - \langle N \rangle^2$ for (a) fermions and (b) bosons.

**Solution.**

**(a) Fermions:** $\mathcal{Z} = 1 + e^{-\beta(\varepsilon - \mu)}$.

$$\langle N \rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1} = f_{\mathrm{FD}}$$

$$\langle N^2 \rangle = \langle N \rangle$$ (since $N^2 = N$ for $N = 0, 1$)

$$\langle N^2 \rangle - \langle N \rangle^2 = f_{\mathrm{FD}}(1 - f_{\mathrm{FD}})$$

**(b) Bosons:** $\mathcal{Z} = (1 - e^{-\beta(\varepsilon - \mu)})^{-1}$.

$$\langle N \rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1} = f_{\mathrm{BE}}$$

$$\langle N^2 \rangle = \frac{1 + e^{-\beta(\varepsilon - \mu)}}{(1 - e^{-\beta(\varepsilon - \mu)})^2}$$

$$\langle N^2 \rangle - \langle N \rangle^2 = f_{\mathrm{BE}}(1 + f_{\mathrm{BE}})$$

Note: boson fluctuations are larger than fermion fluctuations at the same $\varepsilon, \mu, T$.

**If you get this wrong, revise:** Section 10.2 (Fermi-Dirac), Section 10.3 (Bose-Einstein), and
Section 11 (grand canonical ensemble).

</details>

<details>
<summary>Problem 14: Ising model mean-field critical temperature</summary>

**Problem.** For a 2D square lattice Ising model with coupling $J \gt 0$ and $h = 0$, use mean-field
theory to find $T_c$. The exact result (Onsager, 1944) is $T_c^{\mathrm{exact}} = 2J/(k_B\ln(1 +
\sqrt{2}))$. Compare.

**Solution.** The coordination number is $z = 4$. Mean-field theory gives:

$$T_c^{\mathrm{MF}} = \frac{Jz}{k_B} = \frac{4J}{k_B}$$

Exact result:

$$T_c^{\mathrm{exact}} = \frac{2J}{k_B\ln(1 + \sqrt{2})} = \frac{2J}{k_B \times 0.881} = \frac{2.27J}{k_B}$$

The ratio: $T_c^{\mathrm{MF}}/T_c^{\mathrm{exact}} = 4/2.27 \approx 1.76$. Mean-field theory
overestimates $T_c$ by 76% in 2D, because fluctuations (neglected in mean-field) are large in two
dimensions.

**If you get this wrong, revise:** Section 14.3 (mean-field approximation) and the Common Pitfall
box in Section 14.

</details>

<details>
<summary>Problem 15: Deriving the Sackur-Tetrode equation</summary>

**Problem.** Starting from the microcanonical ensemble, derive the Sackur-Tetrode equation for the
entropy of a monatomic ideal gas. State all assumptions.

**Solution.** See Theorem 15.1 for the full derivation. Key assumptions:
1. Particles are non-interacting (ideal gas).
2. Particles are indistinguishable (Gibbs factor $1/N!$).
3. Classical phase space is quantised in units of $h^{3N}$.
4. Thermodynamic limit ($N \to \infty$, $V \to \infty$, $N/V = \mathrm{const}$).

**If you get this wrong, revise:** Section 15.3 (ideal gas in the microcanonical ensemble).

</details>

<details>
<summary>Problem 16: Transport coefficients from kinetic theory</summary>

**Problem.** Estimate the thermal conductivity of argon at STP. ($m = 6.63 \times 10^{-26}$ kg,
$d = 3.6 \times 10^{-10}$ m, $C_V = \frac{3}{2}k_B$ per atom.)

**Solution.** Mean free path: $\lambda_{\mathrm{mfp}} = 1/(\sqrt{2}\,\pi d^2 n)$.

With $n = P/(k_B T) = 101325/(1.381 \times 10^{-23} \times 273) = 2.69 \times 10^{25}$ m$^{-3}$:

$$\lambda_{\mathrm{mfp}} = \frac{1}{\sqrt{2}\,\pi(3.6 \times 10^{-10})^2 \times 2.69 \times 10^{25}} \approx 6.5 \times 10^{-8}\ \mathrm{m}$$

Mean speed: $\langle v \rangle = \sqrt{8k_B T/(\pi m)} = \sqrt{8 \times 1.381 \times 10^{-23} \times 273 / (\pi \times 6.63 \times 10^{-26})} \approx 398$ m/s.

$$\kappa = \frac{1}{3}n\langle v\rangle\lambda_{\mathrm{mfp}} \cdot \frac{3}{2}k_B = \frac{1}{2}nk_B\langle v\rangle\lambda_{\mathrm{mfp}}$$

$$= \frac{1}{2} \times 2.69 \times 10^{25} \times 1.381 \times 10^{-23} \times 398 \times 6.5 \times 10^{-8} \approx 0.019\ \mathrm{W/(m \cdot K)}$$

The experimental value is approximately 0.018 W/(m$\cdot$K) — reasonable agreement for the hard-sphere
model.

**If you get this wrong, revise:** Section 9.5 (kinetic theory, transport properties).

</details>

<details>
<summary>Problem 17: Landau theory specific heat jump</summary>

**Problem.** A system undergoes a second-order phase transition at $T_c = 100$ K described by
Landau theory with $a = 0.1$ J/(mol$\cdot$K) and $b = 0.05$ J/mol. Calculate the order parameter at
$T = 90$ K and the specific heat jump $\Delta C_P$ at $T_c$.

**Solution.** Order parameter below $T_c$:

$$\phi = \pm\sqrt{\frac{a(T_c - T)}{2b}} = \pm\sqrt{\frac{0.1 \times 10}{2 \times 0.05}} = \pm\sqrt{10} \approx \pm 3.16$$

Specific heat jump:

$$\Delta C_P = \frac{a^2 T_c}{2b} = \frac{0.01 \times 100}{0.1} = 10\ \mathrm{J/(mol \cdot K)}$$

**If you get this wrong, revise:** Section 14.4 (Landau theory) and Section 6.1 (classification of
phase transitions).

</details>

<details>
<summary>Problem 18: Grand canonical fluctuations</summary>

**Problem.** For an ideal gas in the grand canonical ensemble, show that the relative number
fluctuation is $\sqrt{\langle N^2 \rangle - \langle N \rangle^2}/\langle N \rangle = 1/\sqrt{\langle N \rangle}$.

**Solution.** The grand partition function for an ideal gas factorises into single-particle
contributions. Each single-particle state contributes independently, so the particle number is a sum
of independent Bernoulli-like random variables. By the central limit theorem:

$$\langle N^2 \rangle - \langle N \rangle^2 = \langle N \rangle$$

(Poisson statistics for an ideal gas.)

$$\frac{\sqrt{\langle N^2 \rangle - \langle N \rangle^2}}{\langle N \rangle} = \frac{1}{\sqrt{\langle N \rangle}}$$

For $\langle N \rangle = 10^{23}$: relative fluctuations are $\sim 10^{-11.5}$, completely negligible
— the grand canonical and canonical ensembles are equivalent for macroscopic systems.

**If you get this wrong, revise:** Section 11.3 (grand canonical fluctuations) and Section 12
(fluctuation-dissipation theorem).

</details>

<details>
<summary>Problem 19: Wien's law and stellar classification</summary>

**Problem.** A star has peak emission at $\lambda_{\mathrm{max}} = 290$ nm. (a) What is its surface
temperature? (b) What spectral class does it belong to? (c) What is the total power radiated per
square metre?

**Solution.**

**(a)** $T = b/\lambda_{\mathrm{max}} = (2.898 \times 10^{-3})/(290 \times 10^{-9}) \approx 9990$ K
$\approx 10000$ K.

**(b)** A surface temperature of $\sim 10000$ K corresponds to spectral class A (white stars, like
Sirius).

**(c)** $j = \sigma T^4 = (5.67 \times 10^{-8})(10000)^4 = 5.67 \times 10^8$ W/m$^2$.

**If you get this wrong, revise:** Section 13.3 (Wien's displacement law) and Section 13.2
(Stefan-Boltzmann law).

</details>

<details>
<summary>Problem 20: Free energy and phase equilibrium</summary>

**Problem.** The Gibbs free energy of a substance near its melting point is given by:
$G_{\mathrm{solid}} = -10000 + 30T$ J/mol and $G_{\mathrm{liquid}} = -9500 + 25T$ J/mol (valid for
$T$ near the melting point). Find $T_m$ and $L_f$.

**Solution.** At the melting point, $G_{\mathrm{solid}} = G_{\mathrm{liquid}}$:

$$-10000 + 30T_m = -9500 + 25T_m$$

$$5T_m = 500 \implies T_m = 100\ \mathrm{K}$$

Latent heat: $L_f = T_m(S_{\mathrm{liquid}} - S_{\mathrm{solid}}) = T_m(-\partial G_{\mathrm{liquid}}/\partial T + \partial G_{\mathrm{solid}}/\partial T)$

$$L_f = 100 \times (30 - 25) = 500\ \mathrm{J/mol}$$

We can verify with the Clausius-Clapeyron equation if $\Delta V$ is known.

**If you get this wrong, revise:** Section 2.3 (physical meaning of potentials), Section 2.5
(equilibrium conditions), and Section 6.2 (Clausius-Clapeyron).

</details>

:::caution Common Pitfall Do not confuse the different ensembles. Use the microcanonical ensemble
($NVE$) for isolated systems, the canonical ensemble ($NVT$) for systems in a heat bath, and the
grand canonical ensemble ($\mu VT$) for open systems. For macroscopic systems in equilibrium, all
ensembles give the same thermodynamic results, but they differ in their fluctuation predictions.
:::

:::caution Common Pitfall When applying the equipartition theorem, remember that it applies only to
*quadratic* degrees of freedom. Vibrational modes contribute $k_B T$ (not $k_B T/2$) because they
have both kinetic and potential energy terms. Electronic and rotational degrees of freedom may be
"frozen out" at low temperatures when $k_B T$ is much less than the level spacing.
:::

:::caution Common Pitfall The Gibbs paradox arises when classical particles are treated as
distinguishable. Always include the $1/N!$ factor in the partition function for identical particles.
This is not an optional correction — it is required by quantum mechanics (indistinguishability of
identical particles) and ensures that entropy is extensive.
:::
