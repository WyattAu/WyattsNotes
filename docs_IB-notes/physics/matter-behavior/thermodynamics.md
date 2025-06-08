---
title: Thermodynamics
date: 2025-04-28T21:30:19.653Z
tags:
  - physics
---

## Ideal Gas Law

The ideal gas law states the relationship of ideal gas qualities:

$$
\begin{aligned}
    PV = nRT = n N_A k_B T = N k_B T
\end{aligned}
$$

where:
$P$: Pressure
$V$: Volume
$T$: Temperature
$n$: Number of moles
$N$: Number of particles
$R$: Gas constant, where $R = N_A \cdot k_B$
$N_A$: Avogadro constant
$k_B$: Boltzmann constant

## Average Translational Kinetic Energy

Kinetic theory states the average pressure ($P$) of an ideal gas is:

$$
\begin{aligned}
    P = \frac{N}{3V} m\bar{v}^2\\
    P\frac{3V}{2N} = \frac{1}{2}m\bar{v}^2\\
    \left(\frac{N k_B T}{V}\right)\frac{3V}{2N} = \frac{1}{2}m\bar{v}^2\\
    \bar{E_k} = \frac{3}{2}k_B T
\end{aligned}
$$

## First Law of Thermodynamics

The first law of thermodynamics states the law of conservation of energy where the change of internal energy ($\Delta U$) is the heat transfer ($Q$) to the system subtract the work done ($W$) from the process:

$$
\begin{aligned}
    \Delta U = Q - W
\end{aligned}
$$

## Second Law of Thermodynamics

The second law of thermodynamics states in any energy transform, the total entropy of an isolated system can never decrease over time.

## Internal energy

The internal energy ($U$) is the accumulation of potential energy and kinetic energy. Therefore the change of internal energy is directly effected by the change of average translational kinetic energy ($\bar{E_k}$) by the change of temperature ($\Delta T$):

$$
\begin{aligned}
    \Delta U = N \Delta \bar{E_k} = \frac{3}{2}Nk_B\Delta T = \frac{3}{2} nR\Delta T
\end{aligned}
$$

## Thermodynamic Processes

### Adiabatic Process

Adiabatic process is a thermodynamic process where there is no heat transfer ($Q=0$) between the system and surroundings:

$$
\begin{aligned}
    \Delta U = -W
\end{aligned}
$$

Where for monatomic ideal gas, adiabatic process satisfy the condition:

$$
\begin{aligned}
    \Delta PV^{\frac{5}{3}} = 0
\end{aligned}
$$

### Isothermal Process

Isothermal process is a thermodynamic process that occurs at constant temperature ($\Delta T = 0$), normally occurs when heat transfer cause a change in volume that the average kinetic energy of particles does not increase:

$$
\begin{aligned}
    \Delta \left(\frac{PV}{nR}\right) = 0
\end{aligned}
$$

### Isovolumetric Process

Isovolumetric process is a thermodynamic process that occurs at constant volume ($\Delta V = 0$), since work done rely on the change of volume ($ W = P \Delta V$ = 0), heat transfer ($Q$) direct result in the change of internal energy:

$$
\begin{aligned}
    \Delta U = Q - W = Q \\
    \Delta \left(\frac{P}{nRT}\right) = 0
\end{aligned}
$$

### Isobaric Process

Isobaric Process is a thermodynamic process that occurs at constant pressure ($\Delta P = 0$):

$$
\begin{aligned}
    \Delta \left(\frac{V}{nRT}\right) = 0
\end{aligned}
$$
