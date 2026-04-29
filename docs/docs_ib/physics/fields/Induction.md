---
title: Induction
tags:
- physics
slug: Induction
description: Comprehensive guide to induction for the International Baccalaureate.
---


## Magnetic Flux

Magnetic flux ($\Phi_B$) is quantity of magnetic field ($\bm{B}$) passing through a surface ($S$)
perpendicular to the local area ($d\bm{A}$) of the surface:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;\Phi_B&rbrace; = \int_S \bm&lbrace;B&rbrace; \cdot d\bm&lbrace;A&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Magnetic Flux in Uniform Magnetic Field

In a [uniform](./motion-in-electromagnetic-fields.md#uniform-fields) magnetic field, the magnetic
field ($\bm{B}$) is a space invariant, where if the surface also have no curvature (such as a
plane), then the magnetic flux can be expressed with the area ($\bm{A}$) of the plane:

$$
\begin&lbrace;aligned&rbrace;
    &lbrace;\Phi_B&rbrace; &= \bm&lbrace;B&rbrace; \cdot \bm&lbrace;A&rbrace; = |\bm&lbrace;B&rbrace;||\bm&lbrace;A&rbrace;|\cos\theta\\
    \Phi_B &= BA \cos \theta
\end&lbrace;aligned&rbrace;
$$

where $\theta$ is the angular displacement between the normal vector of the plane and the direction
of magnetic field.

## Inductors

A inductor is a electrical component that stores energy in a magnetic field when a current pass
through.

### Faraday's Law of Induction

<PhetSimulation simulationId="faraday-electromagnetic-lab" title="Faraday's Electromagnetic Lab" />

Investigate electromagnetic induction by moving magnets through coils, changing magnetic fields, and
observing the induced current and EMF in real time.

Faraday's law of induction states that the electromotive force ($\epsilon$) is equal to the negative
(according to Lenz's Law) rate of change of magnetic flux with time:

$$
\begin&lbrace;aligned&rbrace;
    \epsilon = -\frac&lbrace;d\Phi_B&rbrace;&lbrace;dt&rbrace;
    \epsilon = -\frac&lbrace;\Delta \Phi_B&rbrace;&lbrace;\Delta t&rbrace;
\end&lbrace;aligned&rbrace;
$$

Electromotive force (EMF) had been given a misleading name, where EMF refers to the energy transfer
to an electric circuit per unit charge, and is not a force. EMF of a coil can be scaled by the
number of turns:

$$
    \epsilon = -N\frac&lbrace;\Delta \Phi_B&rbrace;&lbrace;\Delta t&rbrace;
$$

:::info One situation that generates EMF is a magnet passing through a solenoid, where an EMF is
generated to oppose the change in flux through the coil.
:::

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
induced current, and (b) **why** it flows in that direction (to oppose the change in flux).
:::

## Motional EMF

When a straight conductor of length $l$ moves with velocity $v$ perpendicular to a uniform magnetic
field $B$, an EMF is induced across its ends. This can be derived from Faraday's law.

### Derivation

Consider a conducting rod of length $l$ moving at velocity $v$ perpendicular to a uniform field $B$:

- In time $\Delta t$, the rod sweeps out an area $\Delta A = l \cdot v \cdot \Delta t$
- The change in flux is $\Delta \Phi_B = B \cdot \Delta A = Blv\Delta t$
- By Faraday's law:

$$
\begin&lbrace;aligned&rbrace;
    \epsilon = -\frac&lbrace;\Delta \Phi_B&rbrace;&lbrace;\Delta t&rbrace; = -\frac&lbrace;Blv\Delta t&rbrace;&lbrace;\Delta t&rbrace; = -Blv
\end&lbrace;aligned&rbrace;
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

**Problem:** A rod of length $0.5\mathrm{ m}$ moves at $3.0\mathrm{ m s}^{-1}$ perpendicular to a
magnetic field of $0.2\mathrm{ T}$. Calculate the induced EMF.

**Solution:**

$$
\epsilon = Blv = (0.2)(0.5)(3.0) = 0.3\mathrm&lbrace; V&rbrace;
$$

### Worked Example 2: EMF in a Rotating Coil

**Problem:** A rectangular coil of $200$ turns, each of area $0.01\mathrm{ m}^2$, rotates at
$50\mathrm{ Hz}$ in a magnetic field of $0.5\mathrm{ T}$. Calculate the peak EMF.

**Solution:**

$$
\begin&lbrace;aligned&rbrace;
    \epsilon_0 &= NAB\omega = NAB \cdot 2\pi f\\
    \epsilon_0 &= (200)(0.01)(0.5)(2\pi \times 50)\\
    \epsilon_0 &= 314\mathrm&lbrace; V&rbrace;
\end&lbrace;aligned&rbrace;
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
\begin&lbrace;aligned&rbrace;
    \epsilon &= -N\frac&lbrace;d\Phi_B&rbrace;&lbrace;dt&rbrace; = -N\frac&lbrace;d&rbrace;&lbrace;dt&rbrace;\left[BA\cos(\omega t)\right]\\
    \epsilon &= NBA\omega \sin(\omega t)
\end&lbrace;aligned&rbrace;
$$

The peak EMF is:

$$
\epsilon_0 = NBA\omega
$$

### Key Features of AC

- **Peak EMF** ($\epsilon_0$): maximum value of the alternating EMF
- **Root mean square (RMS) EMF**: $\epsilon_{\mathrm{rms}} = \frac{\epsilon_0}{\sqrt{2}}$
- **Frequency** ($f$): number of complete cycles per second, $f = \frac{\omega}{2\pi}$
- **Period** ($T$): time for one complete cycle, $T = \frac{1}{f}$

:::tip Exam Tip RMS values are what multimeters display. Always use RMS values when calculating
average power in AC circuits:
$P_{\mathrm{avg}} = \frac{\epsilon_0^2}{2R} = \frac{\epsilon_{\mathrm{rms}}^2}{R}$
:::

## Transformers

A transformer changes the voltage of an alternating current. It consists of a primary coil and a
secondary coil wound around a common iron core.

### Ideal Transformer Equation

For an ideal transformer (no energy losses):

$$
\frac&lbrace;V_s&rbrace;&lbrace;V_p&rbrace; = \frac&lbrace;N_s&rbrace;&lbrace;N_p&rbrace;
$$

where $V_p$ and $V_s$ are the primary and secondary voltages, and $N_p$ and $N_s$ are the number of
turns on the primary and secondary coils.

- **Step-up transformer:** $N_s \gt{} N_p$ (increases voltage)
- **Step-down transformer:** $N_s \lt{} N_p$ (decreases voltage)

### Power in an Ideal Transformer

By conservation of energy (ideal case):

$$
V_p I_p = V_s I_s
$$

Therefore:

$$
\frac&lbrace;I_s&rbrace;&lbrace;I_p&rbrace; = \frac&lbrace;N_p&rbrace;&lbrace;N_s&rbrace;
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
\eta = \frac&lbrace;V_s I_s&rbrace;&lbrace;V_p I_p&rbrace; \times 100\%
$$

### Worked Example 3: Transformer

**Problem:** A step-down transformer has $2000$ turns on the primary and $100$ turns on the
secondary. The primary voltage is $240\mathrm{ V}$ and the primary current is $2\mathrm{ A}$.
Calculate the secondary voltage and current (assuming ideal).

**Solution:**

$$
\frac&lbrace;V_s&rbrace;&lbrace;V_p&rbrace; = \frac&lbrace;N_s&rbrace;&lbrace;N_p&rbrace; \implies V_s = V_p \times \frac&lbrace;N_s&rbrace;&lbrace;N_p&rbrace; = 240 \times \frac&lbrace;100&rbrace;&lbrace;2000&rbrace; = 12\mathrm&lbrace; V&rbrace;
$$

$$
I_s = I_p \times \frac&lbrace;N_p&rbrace;&lbrace;N_s&rbrace; = 2 \times \frac&lbrace;2000&rbrace;&lbrace;100&rbrace; = 40\mathrm&lbrace; A&rbrace;
$$

## Energy Stored in an Inductor

An inductor stores energy in its magnetic field. For an inductor with inductance $L$ carrying
current $I$:

$$
E = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;LI^2
$$

## Self-Inductance

Self-inductance ($L$) is defined as:

$$
\epsilon = -L\frac&lbrace;\Delta I&rbrace;&lbrace;\Delta t&rbrace;
$$

where $L$ is measured in henrys (H). Self-inductance is the property of a coil that opposes changes
in current through itself.

For a solenoid:

$$
L = \frac&lbrace;\mu_0 N^2 A&rbrace;&lbrace;l&rbrace;
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
derive the motional EMF expression from Faraday's law.
:::

---

## Additional Worked Examples

### Worked Example 4: Lenz's Law Direction Determination

**Problem:** A bar magnet is pushed **north-pole first** into a solenoid viewed from the left.
Determine the direction of the induced current in the coil.

**Solution:**

1. The north pole approaches the left end of the solenoid, so the flux through the coil (directed to
   the right, towards the south pole of the magnet inside the coil) is **increasing**.
2. By Lenz's law, the induced current creates a magnetic field that **opposes** this increase. The
   induced field inside the coil points to the **left** — making the left end of the coil a **north
   pole** to repel the approaching magnet.
3. Using the right-hand grip rule (fingers curl in the direction of current, thumb points to the
   induced north pole), when viewed from the left end the current flows **counter-clockwise**.

### Worked Example 5: Faraday's Law with Changing Area

**Problem:** A square loop of side length $0.10\mathrm{ m}$ lies perpendicular to a uniform magnetic
field of $0.40\mathrm{ T}$. The loop is pulled out of the field in $0.20\mathrm{ s}$, shrinking the
area inside the field from $0.010\mathrm{ m}^2$ to zero. The loop has $50$ turns. Find the average
induced EMF.

**Solution:**

$$
\Delta\Phi_B = B\,\Delta A = (0.40)(0.010 - 0) = 4.0 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; Wb&rbrace;
$$

$$
\epsilon = N\frac&lbrace;\Delta\Phi_B&rbrace;&lbrace;\Delta t&rbrace; = 50 \times \frac&lbrace;4.0 \times 10^&lbrace;-3&rbrace;&rbrace;&lbrace;0.20&rbrace; = 1.0\mathrm&lbrace; V&rbrace;
$$

Note that here $B$ is constant and the flux changes because the **area** changes — Faraday's law
applies equally to $\Delta A$ as to $\Delta B$.

### Worked Example 6: EMF in a Coil Being Pulled Out of a Field

**Problem:** A circular coil of radius $5.0\mathrm{ cm}$ with $120$ turns is positioned so that its
plane is perpendicular to a uniform field of $0.60\mathrm{ T}$. The coil is moved completely out of
the field region in $0.050\mathrm{ s}$. Calculate the magnitude of the average EMF induced.

**Solution:**

$$
A = \pi r^2 = \pi(0.050)^2 = 7.85 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; m&rbrace;^2
$$

$$
\Delta\Phi_B = BA = (0.60)(7.85 \times 10^&lbrace;-3&rbrace;) = 4.71 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; Wb&rbrace;
$$

$$
\epsilon = N\frac&lbrace;\Delta\Phi_B&rbrace;&lbrace;\Delta t&rbrace; = 120 \times \frac&lbrace;4.71 \times 10^&lbrace;-3&rbrace;&rbrace;&lbrace;0.050&rbrace; = 11.3\mathrm&lbrace; V&rbrace;
$$

### Worked Example 7: Transformer Efficiency with Losses

**Problem:** A transformer has $N_p = 4000$ and $N_s = 200$. The input power is $1200\mathrm{ W}$ at
$V_p = 240\mathrm{ V}$. The output power measured at the secondary is $1140\mathrm{ W}$. Calculate:
(a) the secondary voltage, (b) the secondary current, (c) the efficiency.

**Solution:**

(a) $V_s = 240 \times 200/4000 = 12.0\mathrm{ V}$

(b) $I_s = 1140/12.0 = 95.0\mathrm{ A}$

(c) $\eta = 1140/1200 \times 100\% = 95.0\%$

### Worked Example 8: Power Transmission — Step-Up Then Step-Down

**Problem:** A power station generates $500\mathrm{ kW}$ at $5000\mathrm{ V}$. The power is
transmitted through cables of total resistance $10\,\Omega$.

(a) Calculate the power loss if transmitted directly at $5000\mathrm{ V}$.

(b) A step-up transformer raises the voltage to $50\,000\mathrm{ V}$ for transmission, and a
step-down transformer reduces it back to $5000\mathrm{ V}$ at the consumer end. Calculate the power
loss now.

**Solution:**

(a) Direct transmission:

$$
I = \frac&lbrace;P&rbrace;&lbrace;V&rbrace; = \frac&lbrace;500\,000&rbrace;&lbrace;5000&rbrace; = 100\mathrm&lbrace; A&rbrace;
$$

$$
P_&lbrace;\mathrm&lbrace;loss&rbrace;&rbrace; = I^2 R = (100)^2(10) = 100\,000\mathrm&lbrace; W&rbrace; = 100\mathrm&lbrace; kW&rbrace;
$$

This is $20\%$ of the generated power wasted as heat.

(b) With step-up to $50\,000\mathrm{ V}$:

$$
I' = \frac&lbrace;P&rbrace;&lbrace;V'&rbrace; = \frac&lbrace;500\,000&rbrace;&lbrace;50\,000&rbrace; = 10\mathrm&lbrace; A&rbrace;, \quad P'_&lbrace;\mathrm&lbrace;loss&rbrace;&rbrace; = (10)^2(10) = 1000\mathrm&lbrace; W&rbrace; = 1.0\mathrm&lbrace; kW&rbrace;
$$

The loss drops from $100\mathrm{ kW}$ to $1.0\mathrm{ kW}$ — a factor of 100, since
$P_{\mathrm{loss}} \propto I^2$ and the current was reduced by a factor of 10.

---

## Eddy Currents

### Definition and Mechanism

When a solid conductor is placed in a changing magnetic field, the changing flux induces circular
currents within the bulk of the conductor. These are called **eddy currents** (or Foucault
currents). They arise because the conductor itself forms closed conducting paths in which Faraday's
law drives EMFs.

By Lenz's law, eddy currents produce magnetic fields that **oppose** the change in flux that created
them. This opposition manifests as a resistive force on moving conductors or as energy dissipation
in stationary conductors in oscillating fields.

### Applications

**Electromagnetic braking.** When a conducting disc spins between the poles of a magnet, eddy
currents in the disc create a magnetic field opposing the rotation. The resulting braking torque is
proportional to the angular speed, so the braking force is largest at high speed and decreases
smoothly to zero — providing smooth, wear-free braking. This principle is used in trains,
amusement-park rides, and some exercise equipment.

**Induction heating.** A high-frequency alternating magnetic field induces eddy currents in a
metallic object. The $I^2R$ losses within the object itself generate heat. This is the basis of
induction cooktops, where the pot is heated directly while the glass surface remains cool, and of
industrial induction furnaces for melting metals.

### Problems

**Energy loss in transformers.** The iron core of a transformer is itself a conductor in a changing
magnetic field. Eddy currents in the core dissipate energy as heat, reducing efficiency.

**Mitigation: laminated cores.** The core is constructed from thin, electrically insulated sheets
(laminations) stacked together. Each lamination has a small cross-sectional area, which limits the
magnitude of the eddy currents ($\epsilon \propto A$, so smaller area means smaller induced EMF per
lamination). The insulation between laminations prevents currents from flowing across sheets.

### Worked Example: Eddy Current Braking Force

**Problem:** A conducting disc of radius $R$ and thickness $t$ rotates at angular velocity $\omega$
in a uniform magnetic field $B$ perpendicular to the disc. Show that the power dissipated by eddy
currents scales as $P \propto B^2\omega^2 R^4 t / \rho$, and evaluate for $R = 0.15\mathrm{ m}$,
$t = 5.0\mathrm{ mm}$, $\omega = 300\mathrm{ rad s}^{-1}$, $B = 0.80\mathrm{ T}$,
$\rho = 1.7 \times 10^{-8}\,\Omega\mathrm{m}$.

**Solution:**

Model a thin annular ring at radius $r$ of width $dr$. The EMF induced in the ring is
$d\epsilon = 2\pi B\omega r^2$, and its resistance is $dR = \rho \cdot 2\pi r / (t\,dr)$. The power
in the ring is:

$$
dP = \frac&lbrace;(d\epsilon)^2&rbrace;&lbrace;dR&rbrace; = \frac&lbrace;2\pi B^2\omega^2 r^3\,t\,dr&rbrace;&lbrace;\rho&rbrace;
$$

Integrating from $r = 0$ to $R$:

$$
P = \int_0^R \frac&lbrace;2\pi B^2\omega^2 r^3\,t&rbrace;&lbrace;\rho&rbrace;\,dr = \frac&lbrace;\pi B^2\omega^2 t R^4&rbrace;&lbrace;2\rho&rbrace;
$$

Substituting:

$$
P = \frac&lbrace;\pi(0.80)^2(300)^2(5.0 \times 10^&lbrace;-3&rbrace;)(0.15)^4&rbrace;&lbrace;2(1.7 \times 10^&lbrace;-8&rbrace;)&rbrace; \approx 1.4 \times 10^&lbrace;7&rbrace;\mathrm&lbrace; W&rbrace;
$$

:::warning This model assumes the entire disc is immersed in the field. In practice only a localized
region passes through the field gap, so actual dissipation is far lower. The key result is the
scaling: $P \propto \omega^2$ and $P \propto R^4$.
:::

---

## Back EMF in Motors

When the coil of a DC motor rotates in the magnetic field of the stator, it simultaneously acts as a
generator. The changing flux through the rotating coil induces an EMF that **opposes** the supply
voltage. This is called the **back EMF** ($\epsilon_{\mathrm{back}}$).

### Net Voltage and Current

The net voltage driving current through the motor coil is:

$$
V_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = V_&lbrace;\mathrm&lbrace;supply&rbrace;&rbrace; - \epsilon_&lbrace;\mathrm&lbrace;back&rbrace;&rbrace;
$$

and the current in the motor is:

$$
I = \frac&lbrace;V_&lbrace;\mathrm&lbrace;supply&rbrace;&rbrace; - \epsilon_&lbrace;\mathrm&lbrace;back&rbrace;&rbrace;&rbrace;&lbrace;R&rbrace;
$$

where $R$ is the total resistance of the motor windings.

### Startup vs Operating Speed

- **At startup** ($\omega = 0$): $\epsilon_{\mathrm{back}} = 0$, so $I = V_{\mathrm{supply}}/R$.
  This is the **maximum current** — it can be very large if $R$ is small, which is why motors often
  use a **starter resistor** or electronic speed controller to limit initial current.
- **At operating speed**: the back EMF increases with $\omega$ (since $\epsilon_{\mathrm{back}}$ is
  proportional to the rate of change of flux), reducing the net voltage and hence the current. The
  motor reaches a steady speed when the back EMF is large enough that the current produces just
  enough torque to balance the load torque.

### Power Delivered to the Mechanical Load

The mechanical power output of the motor is:

$$
P_&lbrace;\mathrm&lbrace;mech&rbrace;&rbrace; = \epsilon_&lbrace;\mathrm&lbrace;back&rbrace;&rbrace; \cdot I
$$

By energy conservation, $V_{\mathrm{supply}} \cdot I = \epsilon_{\mathrm{back}} \cdot I + I^2 R$.

### Worked Example: Back EMF

**Problem:** A DC motor is connected to a $120\mathrm{ V}$ supply. The resistance of the armature
windings is $4.0\,\Omega$. When the motor is running at full speed, the current is $5.0\mathrm{ A}$.
Calculate: (a) the back EMF, (b) the mechanical power output, (c) the current at startup.

**Solution:**

(a) $\epsilon_{\mathrm{back}} = V_{\mathrm{supply}} - IR = 120 - (5.0)(4.0) = 100\mathrm{ V}$

(b) $P_{\mathrm{mech}} = \epsilon_{\mathrm{back}} \cdot I = (100)(5.0) = 500\mathrm{ W}$

(c) At startup, $\epsilon_{\mathrm{back}} = 0$, so $I_{\mathrm{startup}} = 120/4.0 = 30\mathrm{ A}$
— six times the operating current, confirming the need for startup protection.

---

## Common Pitfalls

### Confusing Flux Through a Coil with Flux Density

Magnetic flux density $B$ is measured in tesla and describes field strength at a point. Magnetic
flux $\Phi_B = BA\cos\theta$ is measured in weber and describes the total field through a surface. A
common error is to substitute $B$ where $\Phi_B$ is required in Faraday's law, or to forget the
$\cos\theta$ factor when the field is not perpendicular to the coil.

### Forgetting Lenz's Law Sign (Direction of Induced Current)

Faraday's law gives the **magnitude** of the EMF; the negative sign indicates direction via Lenz's
law. Many students calculate $\epsilon$ correctly but cannot determine which way the current flows.
Always explicitly identify whether flux is increasing or decreasing, then apply the right-hand grip
rule to determine the current direction.

### Using DC in Transformer Calculations

Transformers require a time-varying flux. If a problem states that a transformer is connected to a
DC source, no secondary voltage is produced (except for a brief transient pulse at the moment the
switch is closed). Always check that the source is AC before applying the transformer equations.

### Confusing Peak and RMS Values

The peak EMF $\epsilon_0$ and the RMS EMF $\epsilon_{\mathrm{rms}} = \epsilon_0/\sqrt{2}$ are
different quantities. Using peak values where RMS is expected (or vice versa) leads to errors of
$\sqrt{2}$ in voltage, $2$ in power, or $\sqrt{2}$ in current. Multimeters display RMS. When a
problem gives "$240\mathrm{ V}$ AC" without qualification, it means RMS.

---

## Problem Set

### Problem 1 (SL)

A rectangular coil of $100$ turns, each of dimensions $0.10\mathrm{ m} \times 0.05\mathrm{ m}$, is
placed perpendicular to a uniform magnetic field of $0.30\mathrm{ T}$. The field drops to zero
uniformly in $0.040\mathrm{ s}$. Calculate the average EMF induced in the coil.

<details>
<summary>Solution</summary>

$$
\Delta\Phi_B = B\,\Delta A\cos\theta = (0.30)(0.10 \times 0.05)(1) - 0 = 1.5 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; Wb&rbrace;
$$

$$
\epsilon = N\frac&lbrace;\Delta\Phi_B&rbrace;&lbrace;\Delta t&rbrace; = 100 \times \frac&lbrace;1.5 \times 10^&lbrace;-3&rbrace;&rbrace;&lbrace;0.040&rbrace; = 3.75\mathrm&lbrace; V&rbrace;
$$

</details>

### Problem 2 (SL)

A straight wire of length $0.60\mathrm{ m}$ moves at $8.0\mathrm{ m s}^{-1}$ at an angle of
$30^\circ$ to a magnetic field of $0.25\mathrm{ T}$. Calculate the induced EMF.

<details>
<summary>Solution</summary>

$$
\epsilon = Blv\sin\theta = (0.25)(0.60)(8.0)\sin 30° = (0.25)(0.60)(8.0)(0.500) = 0.60\mathrm&lbrace; V&rbrace;
$$

</details>

### Problem 3 (SL)

A step-up transformer converts $120\mathrm{ V}$ to $2400\mathrm{ V}$. The primary coil has $200$
turns. The secondary is connected to a load of $100\,\Omega$. Calculate: (a) the number of secondary
turns, (b) the secondary current, (c) the primary current (ideal).

<details>
<summary>Solution</summary>

(a)

$$
N_s = N_p \times \frac&lbrace;V_s&rbrace;&lbrace;V_p&rbrace; = 200 \times \frac&lbrace;2400&rbrace;&lbrace;120&rbrace; = 4000
$$

(b)

$$
I_s = \frac&lbrace;V_s&rbrace;&lbrace;R_L&rbrace; = \frac&lbrace;2400&rbrace;&lbrace;100&rbrace; = 24\mathrm&lbrace; A&rbrace;
$$

(c)

$$
I_p = I_s \times \frac&lbrace;N_s&rbrace;&lbrace;N_p&rbrace; = 24 \times \frac&lbrace;4000&rbrace;&lbrace;200&rbrace; = 480\mathrm&lbrace; A&rbrace;
$$

Check: $V_p I_p = 120 \times 480 = 57\,600\mathrm{ W}$,
$V_s I_s = 2400 \times 24 = 57\,600\mathrm{ W}$.

</details>

### Problem 4 (SL)

An AC generator produces a peak EMF of $340\mathrm{ V}$ at $60\mathrm{ Hz}$. Calculate: (a) the RMS
voltage, (b) the peak voltage across a $50\,\Omega$ resistor, (c) the average power dissipated.

<details>
<summary>Solution</summary>

(a) $V_{\mathrm{rms}} = 340/\sqrt{2} = 240\mathrm{ V}$

(b) Peak voltage across the resistor (negligible internal resistance): $V_0 = 340\mathrm{ V}$.

(c) $P_{\mathrm{avg}} = V_{\mathrm{rms}}^2/R = (240)^2/50 = 1152\mathrm{ W}$

</details>

### Problem 5 (HL)

A solenoid of length $0.50\mathrm{ m}$, cross-sectional area $4.0 \times 10^{-3}\mathrm{ m}^2$, and
$500$ turns carries a current that increases uniformly from $0$ to $3.0\mathrm{ A}$ in
$0.10\mathrm{ s}$. A secondary coil of $50$ turns is wound around the centre of the solenoid.
Calculate: (a) the self-inductance of the solenoid, (b) the EMF induced in the secondary coil.

<details>
<summary>Solution</summary>

(a)

$$
L = \frac&lbrace;\mu_0 N^2 A&rbrace;&lbrace;l&rbrace; = \frac&lbrace;(4\pi \times 10^&lbrace;-7&rbrace;)(500)^2(4.0 \times 10^&lbrace;-3&rbrace;)&rbrace;&lbrace;0.50&rbrace; = 2.51 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; H&rbrace; = 2.51\mathrm&lbrace; mH&rbrace;
$$

(b) The field inside the solenoid is $B = \mu_0(N/l)I$, so the flux through one secondary turn is
$\Phi_B = \mu_0(N/l)IA$. The rate of change:

$$
\frac&lbrace;\Delta\Phi_B&rbrace;&lbrace;\Delta t&rbrace; = \mu_0 \frac&lbrace;N&rbrace;&lbrace;l&rbrace;A \frac&lbrace;\Delta I&rbrace;&lbrace;\Delta t&rbrace; = (4\pi \times 10^&lbrace;-7&rbrace;) \cdot 1000 \cdot (4.0 \times 10^&lbrace;-3&rbrace;) \cdot 30 = 1.508 \times 10^&lbrace;-4&rbrace;\mathrm&lbrace; Wb s&rbrace;^&lbrace;-1&rbrace;
$$

$$
\epsilon_&lbrace;\mathrm&lbrace;secondary&rbrace;&rbrace; = N_s \frac&lbrace;\Delta\Phi_B&rbrace;&lbrace;\Delta t&rbrace; = 50 \times 1.508 \times 10^&lbrace;-4&rbrace; = 7.54\mathrm&lbrace; mV&rbrace;
$$

</details>

### Problem 6 (HL)

A metal ring of radius $r = 0.040\mathrm{ m}$ and resistance $0.50\,\Omega$ falls vertically into a
region of uniform horizontal magnetic field of $0.80\mathrm{ T}$. At the instant the ring enters the
field (moving at $2.0\mathrm{ m s}^{-1}$), calculate: (a) the induced EMF, (b) the induced current,
(c) the direction of the magnetic force on the ring.

<details>
<summary>Solution</summary>

(a) As the ring enters, the flux increases at rate $\Delta\Phi_B/\Delta t = B \cdot 2r \cdot v$:

$$
\epsilon = B \cdot 2r \cdot v = (0.80)(0.080)(2.0) = 0.128\mathrm&lbrace; V&rbrace;
$$

(b)

$$
I = \frac&lbrace;\epsilon&rbrace;&lbrace;R&rbrace; = \frac&lbrace;0.128&rbrace;&lbrace;0.50&rbrace; = 0.256\mathrm&lbrace; A&rbrace;
$$

(c) By Lenz's law, the induced current creates a field opposing the increasing downward flux, so the
force on the ring is **upward**, opposing the fall.

</details>

### Problem 7 (HL)

A power station produces $2.0\mathrm{ MW}$ at $4000\mathrm{ V}$. The transmission line has total
resistance $8.0\,\Omega$. A step-up transformer increases the voltage to $80\,000\mathrm{ V}$ for
transmission, and a step-down transformer at the destination returns it to $4000\mathrm{ V}$.
Calculate: (a) the current in the transmission line, (b) the power loss in the line, (c) the overall
efficiency of the transmission system.

<details>
<summary>Solution</summary>

(a) $I_{\mathrm{line}} = 2.0 \times 10^6 / 80\,000 = 25\mathrm{ A}$

(b) $P_{\mathrm{loss}} = (25)^2(8.0) = 5.0\mathrm{ kW}$

(c) $\eta = (2.0 \times 10^6 - 5000)/(2.0 \times 10^6) = 99.75\%$

Without transformers the current would be $500\mathrm{ A}$, giving
$P_{\mathrm{loss}} = 2.0\mathrm{ MW}$ — all power would be lost.

</details>

### Problem 8 (HL)

A DC motor operates from a $48\mathrm{ V}$ supply. The armature resistance is $2.0\,\Omega$. When
driving a mechanical load at steady speed, the back EMF is $42\mathrm{ V}$. Calculate: (a) the
current drawn, (b) the mechanical power output, (c) the power dissipated as heat, (d) the efficiency
of the motor.

<details>
<summary>Solution</summary>

(a) $I = (48 - 42)/2.0 = 3.0\mathrm{ A}$

(b) $P_{\mathrm{mech}} = (42)(3.0) = 126\mathrm{ W}$

(c) $P_{\mathrm{heat}} = (3.0)^2(2.0) = 18\mathrm{ W}$ (check:
$126 + 18 = 48 \times 3.0 = 144\mathrm{ W}$)

(d) $\eta = 126/144 = 87.5\%$

</details>

### Problem 9 (HL)

An inductor of $0.50\mathrm{ H}$ carries a current of $4.0\mathrm{ A}$. The current is reduced to
zero in $0.020\mathrm{ s}$. Calculate: (a) the energy initially stored, (b) the average EMF induced
during the decay.

<details>
<summary>Solution</summary>

(a)

$$
E = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;LI^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(0.50)(4.0)^2 = 4.0\mathrm&lbrace; J&rbrace;
$$

(b)

$$
\epsilon = L\frac&lbrace;\Delta I&rbrace;&lbrace;\Delta t&rbrace; = (0.50)\frac&lbrace;4.0 - 0&rbrace;&lbrace;0.020&rbrace; = 100\mathrm&lbrace; V&rbrace;
$$

The negative sign (from Lenz's law) indicates the EMF opposes the decrease in current, but the
question asks for the magnitude.

</details>

### Problem 10 (SL/HL)

A coil of $150$ turns and area $2.0 \times 10^{-3}\mathrm{ m}^2$ is placed in a magnetic field that
varies with time as $B(t) = 0.50\sin(120\pi t)\mathrm{ T}$. The coil is oriented with its plane
perpendicular to the field. Calculate: (a) the flux as a function of time, (b) the peak EMF, (c) the
RMS EMF.

<details>
<summary>Solution</summary>

(a)

$$
\Phi_B(t) = NAB(t) = (150)(2.0 \times 10^&lbrace;-3&rbrace;)(0.50\sin 120\pi t) = 0.150\sin(120\pi t)\mathrm&lbrace; Wb&rbrace;
$$

(b)

$$
\epsilon(t) = -\frac&lbrace;d\Phi_B&rbrace;&lbrace;dt&rbrace; = -(0.150)(120\pi)\cos(120\pi t) = -56.5\cos(120\pi t)\mathrm&lbrace; V&rbrace;
$$

$$
\epsilon_0 = 56.5\mathrm&lbrace; V&rbrace;
$$

(c)

$$
\epsilon_&lbrace;\mathrm&lbrace;rms&rbrace;&rbrace; = \frac&lbrace;\epsilon_0&rbrace;&lbrace;\sqrt&lbrace;2&rbrace;&rbrace; = \frac&lbrace;56.5&rbrace;&lbrace;\sqrt&lbrace;2&rbrace;&rbrace; = 40.0\mathrm&lbrace; V&rbrace;
$$

</details>
