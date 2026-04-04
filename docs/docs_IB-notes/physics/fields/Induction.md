---
title: Induction
date: 2025-04-28T11:28:34.281Z
tags:
  - physics
---

## Magnetic Flux

Magnetic flux ($\Phi_B$) is quantity of magnetic field ($\bm{B}$) passing through a surface ($S$)
perpendicular to the local area ($d\bm{A}$) of the surface:

$$
\begin{aligned}
    \bm{\Phi_B} = \int_S \bm{B} \cdot d\bm{A}
\end{aligned}
$$

### Magnetic Flux in Uniform Magnetic Field

In a [uniform](./motion-in-electromagnetic-fields.md#uniform-fields) magnetic field, the magnetic
field ($\bm{B}$) is a space invariant, where if the surface also have no curvature (such as a
plane), then the magnetic flux can be expressed with the area ($\bm{A}$) of the plane:

$$
\begin{aligned}
    {\Phi_B} &= \bm{B} \cdot \bm{A} = |\bm{B}||\bm{A}|\cos\theta\\
    \Phi_B &= BA \cos \theta
\end{aligned}
$$

where $\theta$ is the angular displacement between the normal vector of the plane and the direction
of electric field.

## Inductors

A inductor is a electrical component that stores energy in a magnetic field when a current pass
through.

### Faraday's Law of Induction

Faraday's law of induction states that the electromotive force ($\epsilon$) is equal to the negative
(according to Lenz's Law) rate of change of magnetic flux with time:

$$
\begin{aligned}
    \epsilon = -\frac{d\Phi_B}{dt}
    \epsilon = -\frac{\Delta \Phi_B}{\Delta t}
\end{aligned}
$$

Electromotive force (EMF) had been given a misleading name, where EMF refers to the energy transfer
to an electric circuit per unit charge, and is not a force. EMF of a coil can be scaled by the
number of turns:

$$
    \epsilon = -N\frac{\Delta \Phi_B}{\Delta t}
$$

:::info One situation that generates EMF is a magnet passing through a solenoid, where an EMF is
generated to oppose the change in flux through the coil. :::

## Lenz's Law

Lenz's law states that the direction of the induced EMF (and hence the induced current) is such that
it **opposes the change** in magnetic flux that produced it. This is the origin of the negative sign
in Faraday's law.

The law is a consequence of **conservation of energy** — if the induced current reinforced the
change in flux, it would create a runaway effect producing infinite energy.

### Determining the Direction of Induced Current

1. Identify whether magnetic flux is increasing or decreasing.
2. If flux is **increasing**, the induced current creates a magnetic field to **oppose** the
   increase (opposite direction to the original field).
3. If flux is **decreasing**, the induced current creates a magnetic field to **reinforce** the
   original field (same direction as the original field).
4. Use the right-hand grip rule to find the current direction from the magnetic field direction.

:::tip Exam Tip When answering Lenz's law questions, always state both: (a) the direction of the
induced current, and (b) **why** it flows in that direction (to oppose the change in flux). :::

## Motional EMF

When a straight conductor of length $l$ moves with velocity $v$ perpendicular to a uniform magnetic
field $B$, an EMF is induced across its ends. This can be derived from Faraday's law.

### Derivation

Consider a conducting rod of length $l$ moving at velocity $v$ perpendicular to a uniform field $B$:

- In time $\Delta t$, the rod sweeps out an area $\Delta A = l \cdot v \cdot \Delta t$
- The change in flux is $\Delta \Phi_B = B \cdot \Delta A = Blv\Delta t$
- By Faraday's law:

$$
\begin{aligned}
    \epsilon = -\frac{\Delta \Phi_B}{\Delta t} = -\frac{Blv\Delta t}{\Delta t} = -Blv
\end{aligned}
$$

Taking the magnitude:

$$
\epsilon = Blv
$$

If the velocity makes an angle $\theta$ with the magnetic field:

$$
\epsilon = Blv \sin \theta
$$

### Worked Example 1: Motional EMF

**Problem:** A rod of length $0.5\text{ m}$ moves at $3.0\text{ m s}^{-1}$ perpendicular to a
magnetic field of $0.2\text{ T}$. Calculate the induced EMF.

**Solution:**

$$
\epsilon = Blv = (0.2)(0.5)(3.0) = 0.3\text{ V}
$$

### Worked Example 2: EMF in a Rotating Coil

**Problem:** A rectangular coil of $200$ turns, each of area $0.01\text{ m}^2$, rotates at
$50\text{ Hz}$ in a magnetic field of $0.5\text{ T}$. Calculate the peak EMF.

**Solution:**

$$
\begin{aligned}
    \epsilon_0 &= NAB\omega = NAB \cdot 2\pi f\\
    \epsilon_0 &= (200)(0.01)(0.5)(2\pi \times 50)\\
    \epsilon_0 &= 314\text{ V}
\end{aligned}
$$

## AC Generation

When a coil rotates uniformly in a uniform magnetic field, the magnetic flux through the coil varies
sinusoidally, producing an alternating EMF.

### Flux as a Function of Time

$$
\Phi_B(t) = BA \cos(\omega t)
$$

where $\omega$ is the angular velocity of rotation.

### Induced EMF

$$
\begin{aligned}
    \epsilon &= -N\frac{d\Phi_B}{dt} = -N\frac{d}{dt}\left[BA\cos(\omega t)\right]\\
    \epsilon &= NBA\omega \sin(\omega t)
\end{aligned}
$$

The peak EMF is:

$$
\epsilon_0 = NBA\omega
$$

### Key Features of AC

- **Peak EMF** ($\epsilon_0$): maximum value of the alternating EMF
- **Root mean square (RMS) EMF**: $\epsilon_{\text{rms}} = \frac{\epsilon_0}{\sqrt{2}}$
- **Frequency** ($f$): number of complete cycles per second, $f = \frac{\omega}{2\pi}$
- **Period** ($T$): time for one complete cycle, $T = \frac{1}{f}$

:::tip Exam Tip RMS values are what multimeters display. Always use RMS values when calculating
average power in AC circuits:
$P_{\text{avg}} = \frac{\epsilon_0^2}{2R} = \frac{\epsilon_{\text{rms}}^2}{R}$ :::

## Transformers

A transformer changes the voltage of an alternating current. It consists of a primary coil and a
secondary coil wound around a common iron core.

### Ideal Transformer Equation

For an ideal transformer (no energy losses):

$$
\frac{V_s}{V_p} = \frac{N_s}{N_p}
$$

where $V_p$ and $V_s$ are the primary and secondary voltages, and $N_p$ and $N_s$ are the number of
turns on the primary and secondary coils.

- **Step-up transformer:** $N_s > N_p$ (increases voltage)
- **Step-down transformer:** $N_s < N_p$ (decreases voltage)

### Power in an Ideal Transformer

By conservation of energy (ideal case):

$$
V_p I_p = V_s I_s
$$

Therefore:

$$
\frac{I_s}{I_p} = \frac{N_p}{N_s}
$$

A step-up transformer increases voltage but decreases current, and vice versa.

### Why Transformers Only Work with AC

Transformers require a **changing** magnetic flux to induce an EMF in the secondary coil. DC
provides a constant current and constant flux, so no EMF is induced.

### Efficiency of Real Transformers

Real transformers have losses due to:

- **Eddy currents** in the iron core — reduced by laminating the core
- **Hysteresis losses** — energy lost as the core is magnetised and demagnetised repeatedly
- **Resistive heating** in the coils ($I^2R$ losses)
- **Flux leakage** — not all magnetic flux links both coils

Efficiency:

$$
\eta = \frac{V_s I_s}{V_p I_p} \times 100\%
$$

### Worked Example 3: Transformer

**Problem:** A step-down transformer has $2000$ turns on the primary and $100$ turns on the
secondary. The primary voltage is $240\text{ V}$ and the primary current is $2\text{ A}$. Calculate
the secondary voltage and current (assuming ideal).

**Solution:**

$$
\frac{V_s}{V_p} = \frac{N_s}{N_p} \implies V_s = V_p \times \frac{N_s}{N_p} = 240 \times \frac{100}{2000} = 12\text{ V}
$$

$$
I_s = I_p \times \frac{N_p}{N_s} = 2 \times \frac{2000}{100} = 40\text{ A}
$$

## Energy Stored in an Inductor

An inductor stores energy in its magnetic field. For an inductor with inductance $L$ carrying
current $I$:

$$
E = \frac{1}{2}LI^2
$$

## Self-Inductance

Self-inductance ($L$) is defined as:

$$
\epsilon = -L\frac{\Delta I}{\Delta t}
$$

where $L$ is measured in henrys (H). Self-inductance is the property of a coil that opposes changes
in current through itself.

For a solenoid:

$$
L = \frac{\mu_0 N^2 A}{l}
$$

where $N$ is the number of turns, $A$ is the cross-sectional area, and $l$ is the length of the
solenoid.

## Summary Table

| Quantity           | Formula                                      | Units       |
| ------------------ | -------------------------------------------- | ----------- |
| Magnetic flux      | $\Phi_B = BA\cos\theta$                      | Wb (Tm$^2$) |
| Faraday's law      | $\epsilon = -N\frac{\Delta\Phi_B}{\Delta t}$ | V           |
| Motional EMF       | $\epsilon = Blv\sin\theta$                   | V           |
| Peak AC EMF        | $\epsilon_0 = NBA\omega$                     | V           |
| Transformer ratio  | $\frac{V_s}{V_p} = \frac{N_s}{N_p}$          | —           |
| Energy in inductor | $E = \frac{1}{2}LI^2$                        | J           |

:::tip Exam Tip In Paper 2, induction questions often combine Faraday's law with energy
conservation. Make sure you can explain why Lenz's law is necessary (conservation of energy) and
derive the motional EMF expression from Faraday's law. :::
