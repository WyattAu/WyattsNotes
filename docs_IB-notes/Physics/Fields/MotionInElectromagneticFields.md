---
title: Motion in Electromagnetic Fields
date: 2025-04-27T16:56:56.736Z
---

## Uniform Fields

A uniform field ($\bm{F}$) is a field with spatial invariance, therefore, a zero gradient ($\nabla \bm{F} = 0$).

## Test Charge

A test charge is an idealized particle where all other properties are assumed to be negligible except for the charge.

## Lorentz Force Law

[Coulomb's Law](./ElectricAndMagneticFields.md#coulombs-law) is only valid for electrostatics, as magnetic force is also induced by moving charge. The combined force ($\bm{F}$) on the test charge ($q$) can be governed by Lorentz force law:

$$
\begin{aligned}
    \bm{F} = q(\bm{E}+\bm{v} \times \bm{B})
\end{aligned}
$$

When only considering the magnitude of the force:

$$
\begin{aligned}
    \bm{F} = q(|\bm{E}| + |\bm{v} \times \bm{B}|) = q(|\bm{E}|+|\bm{v}||\bm{B}|sin\theta)
\end{aligned}
$$

The magnitude form is written in the IB formula booklet separately for magnetic and electric force:

$$
\begin{aligned}
    F &= qvB \sin \theta\\
    F &= qE\\
    E &= \frac{F}{q}
\end{aligned}
$$

### Motion of Current in Electromagnetic Field

The total force ($\bm{F}$) on a current ($I$) is determined by the combine force on the total number ($N$) of moving charges ($q$) in the current. As the dimensions of a electron is negligible when comparing to the cross section of a wire, the flow of electrons $I$ can be approximated by a continuum of current density ($\bm{J} = nq\bm{v}$), where $n$ is the density of charge carriers, and since the electric field have a negligible effect, only the force applied by magnetic field ($\bm{B}$ is accounted):

$$
\begin{aligned}
    \bm{F_m} &= nV(q(v\times \bm{B})) = V(\bm{J}\times\bm{B})\\
    \bm{F_m} &= \int_C \bm{J}\times\bm{B} dV
\end{aligned}
$$

For current of a conductor with constant cross-sectional area ($A$) and length displacement of ($\bm{L}$), the volume can be evaluated as ($V = AL$), leading to a force of:

$$
\begin{aligned}
    \bm{F_m} = \int I(d\bm{L})\times B = I \int \bm{B}\times d\bm{L}
\end{aligned}
$$

Since IB only considers interactions of current with uniform electric fields, magnetic field $\bm{B}$ is constant, evaluating the force to:

$$
\begin{aligned}
    \bm{F_m} = I(\bm{L}\times\bm{B})
\end{aligned}
$$

Since IB considers the direction separately by the use of right hand rule (Motor effect), the magnitude of the force is expressed as:

$$
\begin{aligned}
    |\bm{F_m}| = F = I|\bm{L}\times\bm{B}| = I|\bm{L}||\bm{B}|\sin\theta = BIL\sin\theta
\end{aligned}
$$

This is expressed in the formula booklet $D.3$.

#### Motion Between Currents

According to Ampere's Law, current ($I_1$) generates a magnetic field ($\bm{B_1}$), due to rotational symmetry around the direction of current, the magnetic field can be express using cylindrical coordinates ($\hat{\phi}$) shows:

$$
\begin{aligned}
    \bm{B_1} = \frac{\mu_0 I_1}{2\pi r}\hat{\bm{\phi}}
\end{aligned}
$$

For a $\hat{\phi} = \hat{y}$ where $\hat{y}$ is a unit vector perpendicular to other current ($I_2$). Using the Lorentz Force Law, the magnetic force ($F_{12}$) experienced by the other current is:

$$
\begin{aligned}
    \bm{F_{12}} &= I_2(\bm{L}\times\bm{B_1})\\
    \bm{F_{12}} &= I_2L(\hat{z}\times{B_1}), \quad \hat{z} = \hat{\bm{L}}\\
    \bm{F_{12}} &= I_2L\left(\hat{z}\times\frac{\mu_0 I_1}{2\pi r}\hat{y}\right)\\
    \bm{F_{12}} &= -\frac{\mu_0 I_1 I_2 L}{2\pi r}\hat{x}, \quad \hat{y} \times \hat{z} = -\hat{x}
\end{aligned}
$$

Similar to before the IB expresses the magnitude form of this equation in the formula booklet:

$$
\begin{aligned}
    |\bm{F_{12}}| = F = -\frac{\mu_0 I_1 I_2 L}{2\pi r}\hat{x} = \mu_0 \frac{I_1 I_2 L}{2\pi r}
\end{aligned}
$$

Where the direction of motion on current can be determined by right hand rule (motor effect).
