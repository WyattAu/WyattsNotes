---
title: Induction
date: 2025-04-28T11:28:34.281Z
tags:
  - physics
---

## Magnetic Flux

Magnetic flux ($\Phi_B$) is quantity of magnetic field ($\bm{B}$) passing through a surface ($S$) perpendicular to the local area ($d\bm{A}$) of the surface:

$$
\begin{aligned}
    \bm{\Phi_B} = \int_S \bm{B} \cdot d\bm{A}
\end{aligned}
$$

### Magnetic Flux in Uniform Magnetic Field

In a [uniform](./MotionInElectromagneticFields.md#uniform-fields) magnetic field, the magnetic field ($\bm{B}$) is a space invariant, where if the surface also have no curvature (such as a plane), then the magnetic flux can be expressed with the area ($\bm{A}$) of the plane:

$$
\begin{aligned}
    {\Phi_B} &= \bm{B} \cdot \bm{A} = |\bm{B}||\bm{A}|\cos\theta\\
    \Phi_B &= BA \cos \theta
\end{aligned}
$$

where $\theta$ is the angular displacement between the normal vector of the plane and the direction of electric field.

## Inductors

A inductor is a electrical component that stores energy in a magnetic field when a current pass through.

### Faraday's Law of Induction

Faraday's law of induction states that the electromotive force ($\epsilon$) is equal to the negative (according to Lenz's Law) rate of change of magnetic flux with time:

$$
\begin{aligned}
    \epsilon = -\frac{d\Phi_B}{dt}
    \epsilon = -\frac{\Delta \Phi_B}{\Delta t}
\end{aligned}
$$

Electromotive force (EMF) had been given a misleading name, where EMF refers to the energy transfer to an electric circuit per unit charge, and is not a force. EMF of a coil can be scaled by the number of turns:

$$
    \epsilon = -N\frac{\Delta \Phi_B}{\Delta t}
$$

:::info
One situation that generate EMF is a magnetic passing through a solenoid, where an emf is generated to
:::
