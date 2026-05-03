---
title: Superposition and Interference
description:
  "A-Level Physics notes on Superposition and Interference: 1. The Principle of Superposition; Constructive and Destructive Interference."
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: superposition-and-interference
---

## Superposition and Interference

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<PhetSimulation simulationId="wave-interference" title="Wave Interference" />

Explore the simulation above to develop intuition for this topic.

## 1. The Principle of Superposition

**Definition.** The principle of superposition states that when two or more waves overlap at a
point, the resultant displacement is the algebraic sum of the individual displacements of each wave
at that point.

**Principle of Superposition.** When two or more waves overlap, the resultant displacement at any
point is the **algebraic sum** of the individual displacements:

$$y_{\mathrm{total}} = y_1 + y_2 + y_3 + \cdots$$

This principle is valid for linear waves (small amplitudes). It is a direct consequence of the
linearity of the wave equation.

### Constructive and Destructive Interference

**Definition.** Constructive interference occurs when two waves meet in phase (phase difference
$= 0, 2\pi, 4\pi, \ldots$), producing a resultant amplitude greater than either individual
amplitude.

**Definition.** Destructive interference occurs when two waves meet in antiphase (phase difference
$= \pi, 3\pi, 5\pi, \ldots$), producing a resultant amplitude less than either individual amplitude,
or zero if the waves have equal amplitude.

Consider two coherent waves of the same amplitude $A$ arriving at a point with phase difference
$\Delta\phi$:

$$y_1 = A\sin(\omega t), \qquad y_2 = A\sin(\omega t + \Delta\phi)$$

The resultant is:

$$y_{\mathrm{total}} = A\sin(\omega t) + A\sin(\omega t + \Delta\phi)$$

Using the trigonometric identity
$\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$$y_{\mathrm{total}} = 2A\cos\left(\frac{\Delta\phi}{2}\right)\sin\left(\omega t + \frac{\Delta\phi}{2}\right)$$

The resultant amplitude is:

$$A_{\mathrm{resultant}} = 2A\left|\cos\frac{\Delta\phi}{2}\right|$$

- **Constructive interference**:
  $\Delta\phi = 0, 2\pi, 4\pi, \ldots \implies A_{\mathrm{resultant}} = 2A$
- **Destructive interference**:
  $\Delta\phi = \pi, 3\pi, 5\pi, \ldots \implies A_{\mathrm{resultant}} = 0$

## 2. Path Difference and Phase Difference

**Definition.** Path difference is the difference in distance travelled by two waves from their
respective sources to a given point: $\Delta x = |x_1 - x_2|$.

**Definition.** Phase difference is the difference in phase between two waves at a given point,
measured in radians. It is related to path difference by $\Delta\phi = (2\pi/\lambda)\Delta x$.

For two waves of wavelength $\lambda$ travelling to a point via paths of lengths $x_1$ and $x_2$:

**Path difference:** $\Delta x = |x_1 - x_2|$

**Phase difference:**

$$\boxed{\Delta\phi = \frac{2\pi}{\lambda}\Delta x}$$

**Derivation.** One extra wavelength $\lambda$ corresponds to a full cycle, i.e., a phase difference
of $2\pi$. By proportionality:

$$\frac{\Delta\phi}{2\pi} = \frac{\Delta x}{\lambda} \implies \Delta\phi = \frac{2\pi}{\lambda}\Delta x$$

$\square$

**Conditions for interference:**

| Condition              | Path Difference            | Phase Difference |
| ---------------------- | -------------------------- | ---------------- |
| Constructive (maximum) | $n\lambda$                 | $2n\pi$          |
| Destructive (minimum)  | $(n + \frac{1}{2})\lambda$ | $(2n+1)\pi$      |

where $n = 0, 1, 2, \ldots$

**Definition.** Coherence is the property of two or more waves having a constant phase relationship
over time, which is necessary to produce a stable interference pattern. Coherent waves must have the
same frequency and a constant phase difference.

**Coherence.** For a stable interference pattern, the two waves must be **coherent** — they must
have a constant phase relationship. This requires:

- Same frequency (and hence wavelength)
- Constant phase difference

:::warning Common Pitfall Two waves from independent sources (e.g., two light bulbs) are generally
not coherent because the phase difference fluctuates randomly. Interference requires coherent
sources, typically produced by splitting a single wave.
:::

## 3. Young's Double Slit Experiment

### Derivation of the Double-Slit Interference Condition

1. Two coherent slits $S_1$ and $S_2$ are separated by distance $s$.
2. Light of wavelength $\lambda$ illuminates both slits.
3. A point $P$ on a distant screen ($D \gg s$) is at angle $\theta$ from the central axis.
4. The path difference from the two slits to $P$ is $\Delta x = s\sin\theta$.
5. For constructive interference, the path difference must equal a whole number of wavelengths:

$$\boxed{s\sin\theta = n\lambda, \qquad n = 0, 1, 2, \ldots}$$

$\square$

### Derivation of the Fringe Spacing Formula

Two narrow slits $S_1$ and $S_2$, separated by distance $s$, are illuminated by coherent light of
wavelength $\lambda$. A screen is placed at distance $D \gg s$ from the slits.

Consider a point $P$ on the screen at angle $\theta$ from the central axis. The path difference from
the two slits is:

$$\Delta x = s\sin\theta$$

For constructive interference (bright fringe): $s\sin\theta = n\lambda$.

For small angles ($\sin\theta \approx \tan\theta \approx \theta$):

$$\tan\theta = \frac{w}{D}$$

where $w$ is the distance from the central maximum to the $n$-th bright fringe. Therefore:

$$s \cdot \frac{w}{D} = n\lambda$$

$$\boxed{w = \frac{n\lambda D}{s}}$$

The **fringe spacing** (distance between adjacent bright fringes) is:

$$\boxed{\Delta w = \frac{\lambda D}{s}}$$

**Intuition.** Larger wavelength means wider fringes. Greater slit separation means narrower
fringes. Greater screen distance means wider fringes. The pattern scales linearly with all three
quantities.

### Single Slit Diffraction Envelope

Each slit has width $a$ and produces a diffraction pattern. The double-slit fringes are
**modulated** by a single-slit diffraction envelope. If $a$ is too small, the fringes are very broad
and hard to resolve. If $a$ is too large, the diffraction envelope is narrow and few fringes are
visible.

The first minimum of the single-slit pattern occurs at $\sin\theta = \lambda/a$.

:::tip Exam Technique When asked to describe Young's experiment, always mention: coherent source
(single slit before the double slit), narrow slits, monochromatic light, and the small-angle
approximation. Quote the fringe spacing formula and explain each variable.
:::

<details>
<summary>Example: Young's Double Slit</summary>
Light of wavelength 590 nm passes through double slits separated by 0.50 mm onto a screen 1.5 m
away. Calculate the fringe spacing.

**Answer.**
$\Delta w = \frac{\lambda D}{s} = \frac{590 \times 10^{-9} \times 1.5}{0.50 \times 10^{-3}} = \frac{8.85 \times 10^{-7}}{5.0 \times 10^{-4}} = 1.77 \times 10^{-3}$
m $= 1.77$ mm.

</details>

## 4. Diffraction Gratings

A diffraction grating has $N$ slits per unit length, with slit spacing $d = 1/N$.

### Derivation of the Grating Equation

Consider $N$ equally spaced slits. For light emerging at angle $\theta$, the path difference between
adjacent slits is $d\sin\theta$. For constructive interference from all $N$ slits simultaneously:

$$d\sin\theta = n\lambda, \qquad n = 0, \pm 1, \pm 2, \ldots$$

$$\boxed{d\sin\theta = n\lambda}$$

where $n$ is the **order** of the maximum.

**Derivation.** For two adjacent slits, constructive interference requires $d\sin\theta = n\lambda$.
Since all slits are equally spaced, if adjacent slits constructively interfere, then all pairs do.
The condition is the same as for two slits, but with $N$ slits the maxima are much sharper (because
destructive interference from non-adjacent pairs suppresses the background).

**Maximum number of orders.** Since $|\sin\theta| \leq 1$:

$$|n| \leq \frac{d}{\lambda}$$

The highest order visible is $n_{\max} = \lfloor d/\lambda \rfloor$ (the greatest integer less than
or equal to $d/\lambda$).

### Grating vs Double Slit

| Property          | Double Slit    | Diffraction Grating                         |
| ----------------- | -------------- | ------------------------------------------- |
| Number of sources | 2              | Hundreds to thousands                       |
| Maxima sharpness  | Broad          | Very sharp                                  |
| Maxima brightness | Low            | High                                        |
| Missing orders    | None (ideally) | Possible (if slit width effects considered) |

:::tip Exam Technique If asked to find the number of visible orders: calculate $d/\lambda$, take the
integer part, then note that orders $+n$ and $-n$ are both visible (plus the zeroth order). Total
visible maxima $= 2n_{\max} + 1$.
:::

## 5. Stationary Waves

**Definition.** A stationary (standing) wave is a wave formed by the superposition of two
progressive waves of the same frequency and amplitude travelling in opposite directions,
characterised by fixed positions of maximum amplitude (antinodes) and zero amplitude (nodes) with no
net energy transfer.

### Derivation from Superposition of Two Progressive Waves

Consider two identical waves travelling in opposite directions:

$$y_1 = A\sin(kx - \omega t) \quad \mathrm{(travelling in } +x\mathrm{)}$$
$$y_2 = A\sin(kx + \omega t) \quad \mathrm{(travelling in } -x\mathrm{)}$$

By superposition:

$$y = y_1 + y_2 = A[\sin(kx - \omega t) + \sin(kx + \omega t)]$$

Using $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$$y = 2A\sin(kx)\cos(\omega t)$$

$$\boxed{y = 2A\sin(kx)\cos(\omega t)}$$

This is the equation of a **stationary wave**. Key features:

- The amplitude varies with position: $A(x) = 2A|\sin(kx)|$
- All points oscillate at the same frequency $\omega$
- The spatial and temporal parts are separated (hence "stationary")

### Nodes and Antinodes

**Definition.** A node is a point on a stationary wave where the amplitude is always zero, occurring
at positions where the two constituent waves always cancel.

**Definition.** An antinode is a point on a stationary wave where the amplitude is maximum,
occurring midway between adjacent nodes.

**Nodes** are points of zero amplitude at all times. From $A(x) = 0$:

$$\sin(kx) = 0 \implies kx = n\pi \implies x = \frac{n\lambda}{2}, \quad n = 0, 1, 2, \ldots$$

**Antinodes** are points of maximum amplitude. From $|\sin(kx)| = 1$:

$$kx = (n + \tfrac{1}{2})\pi \implies x = \frac{(2n+1)\lambda}{4}, \quad n = 0, 1, 2, \ldots$$

The distance between adjacent nodes is $\lambda/2$. The distance between a node and the nearest
antinode is $\lambda/4$.

**Intuition.** In a stationary wave, energy is trapped between nodes — it oscillates between kinetic
and potential forms but does not propagate. This is fundamentally different from a progressive wave,
where energy flows continuously.

### Harmonics on a String Fixed at Both Ends

**Definition.** The fundamental frequency $f_1$ is the lowest frequency at which a stationary wave
can form on a system, corresponding to the simplest mode of vibration.

For a string of length $L$ fixed at both ends, nodes must exist at $x = 0$ and $x = L$.

- **Fundamental mode** (1st harmonic): one antinode in the middle. $L = \lambda_1/2$, so
  $\lambda_1 = 2L$ and $f_1 = v/(2L)$.
- **2nd harmonic**: two antinodes. $L = \lambda_2$, so $\lambda_2 = L$ and $f_2 = v/L = 2f_1$.
- **$n$-th harmonic**: $L = n\lambda_n/2$, so $\lambda_n = 2L/n$ and $f_n = nv/(2L) = nf_1$.

### Derivation of Standing Wave Frequencies on a String

1. A string of length $L$ is fixed at both ends, so nodes exist at $x = 0$ and $x = L$.
2. The standing wave condition requires $L = n\lambda_n/2$ for integer $n$.
3. Therefore $\lambda_n = 2L/n$.
4. Using the wave equation $v = f\lambda$: $f_n = v/\lambda_n = nv/(2L)$.

$$\boxed{f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots}$$

$\square$

$$\boxed{f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots}$$

### Harmonics in a Pipe Closed at One End

A closed end is a displacement **node** (pressure antinode). An open end is a displacement
**antinode** (pressure node).

- **Fundamental**: $L = \lambda_1/4$, so $f_1 = v/(4L)$.
- **3rd harmonic** (first overtone): $L = 3\lambda_3/4$, so $f_3 = 3v/(4L) = 3f_1$.

$$\boxed{f_n = \frac{nv}{4L}, \quad n = 1, 3, 5, \ldots \mathrm{ (odd harmonics only)}}$$

Only odd harmonics are present because an even number of quarter-wavelengths would require a node at
the open end, which contradicts the boundary condition.

### Harmonics in a Pipe Open at Both Ends

Both ends are displacement antinodes.

$$\boxed{f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots \mathrm{ (all harmonics)}}$$

## Problem Set

<details>
<summary>Problem 1</summary>
Two coherent sources emit waves of wavelength 0.80 m. At a point P, the path difference is 2.00 m.
Is the interference at P constructive or destructive?

**Answer.** $\Delta x / \lambda = 2.00 / 0.80 = 2.5 = 5/2$. This is an odd half-integer, so the
interference is destructive (minimum).

<b>If you get this wrong, revise:</b>
[Path Difference and Phase Difference](#2-path-difference-and-phase-difference)

</details>

<details>
<summary>Problem 2</summary>
In Young's double slit experiment, the slits are 0.40 mm apart and the screen is 2.0 m away. The
fringe spacing is measured as 2.8 mm. Calculate the wavelength of the light.

**Answer.**
$\lambda = \frac{s \cdot \Delta w}{D} = \frac{0.40 \times 10^{-3} \times 2.8 \times 10^{-3}}{2.0} = \frac{1.12 \times 10^{-6}}{2.0} = 5.6 \times 10^{-7}$
m $= 560$ nm.

<b>If you get this wrong, revise:</b>
[Young's Double Slit Experiment](#3-youngs-double-slit-experiment)

</details>

<details>
<summary>Problem 3</summary>
A diffraction grating has 500 lines per mm. Light of wavelength 600 nm is incident normally.
Calculate the angle of the second-order maximum.

**Answer.** $d = 1/500$ mm $= 2.0 \times 10^{-6}$ m. $d\sin\theta = 2\lambda$.
$\sin\theta = \frac{2 \times 600 \times 10^{-9}}{2.0 \times 10^{-6}} = \frac{1.2 \times 10^{-6}}{2.0 \times 10^{-6}} = 0.60$.
$\theta = \arcsin(0.60) = 36.9^\circ$.

<b>If you get this wrong, revise:</b> [Diffraction Gratings](#4-diffraction-gratings)

</details>

<details>
<summary>Problem 4</summary>
A stationary wave on a string of length 1.2 m has a fundamental frequency of 120 Hz. Find: (a) the
wave speed on the string, (b) the frequency of the third harmonic.

**Answer.** (a) $f_1 = v/(2L)$, so $v = 2Lf_1 = 2 \times 1.2 \times 120 = 288$ m s$^{-1}$.

(b) $f_3 = 3f_1 = 360$ Hz.

<b>If you get this wrong, revise:</b>
[Harmonics on a String Fixed at Both Ends](#harmonics-on-a-string-fixed-at-both-ends)

</details>

<details>
<summary>Problem 5</summary>
A pipe of length 0.85 m is closed at one end. The speed of sound is 340 m s$^{-1}$. Calculate the
frequency of the first two harmonics.

**Answer.** $f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.85} = \frac{340}{3.4} = 100$ Hz.

The next harmonic is the 3rd: $f_3 = 3f_1 = 300$ Hz. (No 2nd harmonic exists for a closed pipe.)

<b>If you get this wrong, revise:</b>
[Harmonics in a Pipe Closed at One End](#harmonics-in-a-pipe-closed-at-one-end)

</details>

<details>
<summary>Problem 6</summary>
Two waves meet at a point. Wave 1 has amplitude 3.0 mm and wave 2 has amplitude 4.0 mm. If they are
in phase, what is the resultant amplitude? If they are in antiphase?

**Answer.** In phase: $A_{\mathrm{resultant}} = 3.0 + 4.0 = 7.0$ mm.

In antiphase: $A_{\mathrm{resultant}} = |3.0 - 4.0| = 1.0$ mm.

<b>If you get this wrong, revise:</b>
[Constructive and Destructive Interference](#constructive-and-destructive-interference)

</details>

<details>
<summary>Problem 7</summary>
A diffraction grating with 300 lines per mm is used with light of wavelength 540 nm. How many orders
of maximum can be seen on each side of the central maximum?

**Answer.** $d = 1/300$ mm $= 3.33 \times 10^{-6}$ m.
$n_{\max} = d/\lambda = 3.33 \times 10^{-6} / 540 \times 10^{-9} = 6.17$. So the highest visible
order is $n = 6$. Total visible maxima $= 2(6) + 1 = 13$.

<b>If you get this wrong, revise:</b> [Maximum number of orders](#4-diffraction-gratings)

</details>

<details>
<summary>Problem 8</summary>
Derive the stationary wave equation from two progressive waves $y_1 = A\sin(kx - \omega t)$ and
$y_2 = A\sin(kx + \omega t)$.

**Answer.** $y = y_1 + y_2 = A[\sin(kx - \omega t) + \sin(kx + \omega t)]$.

Using the identity $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$\alpha = kx - \omega t$, $\beta = kx + \omega t$.

$\frac{\alpha + \beta}{2} = kx$, $\frac{\alpha - \beta}{2} = -\omega t$.

$y = 2A\sin(kx)\cos(-\omega t) = 2A\sin(kx)\cos(\omega t)$ (since $\cos$ is even).

<b>If you get this wrong, revise:</b>
[Derivation from Superposition of Two Progressive Waves](#derivation-from-superposition-of-two-progressive-waves)

</details>

<details>
<summary>Problem 9</summary>
In a Young's double slit experiment using light of wavelength 550 nm, the fringe spacing on a screen
1.5 m away is 1.1 mm. Calculate the slit separation.

**Answer.**
$s = \frac{\lambda D}{\Delta w} = \frac{550 \times 10^{-9} \times 1.5}{1.1 \times 10^{-3}} = \frac{8.25 \times 10^{-7}}{1.1 \times 10^{-3}} = 7.5 \times 10^{-4}$
m $= 0.75$ mm.

<b>If you get this wrong, revise:</b>
[Young's Double Slit Experiment](#3-youngs-double-slit-experiment)

</details>

<details>
<summary>Problem 10</summary>
A string of length 0.60 m vibrates at its fourth harmonic at 400 Hz. Find the wave speed and the
wavelength of the fourth harmonic.

**Answer.** $f_4 = \frac{4v}{2L} = \frac{2v}{L}$.
$v = \frac{f_4 L}{2} = \frac{400 \times 0.60}{2} = 120$ m s$^{-1}$.

$\lambda_4 = 2L/4 = L/2 = 0.30$ m.

<b>If you get this wrong, revise:</b>
[Harmonics on a String Fixed at Both Ends](#harmonics-on-a-string-fixed-at-both-ends)

</details>

<details>
<summary>Problem 11</summary>
Explain the difference between progressive and stationary waves in terms of (a) energy transfer, (b)
amplitude variation, and (c) phase relationship between neighbouring points.

**Answer.** (a) Progressive waves transfer energy; stationary waves do not (energy is trapped).

(b) In a progressive wave, all points have the same amplitude (for an ideal wave). In a stationary
wave, the amplitude varies from zero (nodes) to maximum (antinodes).

(c) In a progressive wave, all points have the same phase (the wave pattern translates). In a
stationary wave, all points between two adjacent nodes are in phase, but points in adjacent segments
are in antiphase.

<b>If you get this wrong, revise:</b> [Stationary Waves](#5-stationary-waves)

</details>

<details>
<summary>Problem 12</summary>
White light (wavelengths 400–700 nm) is incident on a diffraction grating with 400 lines per mm. For
the second order, calculate the angular range subtended by the visible spectrum.

**Answer.** $d = 1/400$ mm $= 2.5 \times 10^{-6}$ m. For $n = 2$:

For 400 nm: $\sin\theta = \frac{2 \times 400 \times 10^{-9}}{2.5 \times 10^{-6}} = 0.320$,
$\theta = 18.7^\circ$.

For 700 nm: $\sin\theta = \frac{2 \times 700 \times 10^{-9}}{2.5 \times 10^{-6}} = 0.560$,
$\theta = 34.1^\circ$.

Angular range $= 34.1° - 18.7° = 15.4^\circ$.

<b>If you get this wrong, revise:</b> [Diffraction Gratings](#4-diffraction-gratings)

</details>

## 6. Advanced Double Slit Calculations

### 6.1 Finding the Position of a Specific Maximum

**Example.** Light of wavelength $480$ nm passes through double slits separated by $0.80$ mm onto a
screen $2.0$ m away. Find the distance from the central maximum to the fifth bright fringe.

**Answer.**
$w = \frac{n\lambda D}{s} = \frac{5 \times 480 \times 10^{-9} \times 2.0}{0.80 \times 10^{-3}} = \frac{4.80 \times 10^{-6}}{8.0 \times 10^{-4}} = 6.0 \times 10^{-3}$
m $= 6.0$ mm.

### 6.2 Finding the Position of a Minimum

**Example.** Using the same setup ($\lambda = 480$ nm, $s = 0.80$ mm, $D = 2.0$ m), find the
distance from the central maximum to the first dark fringe.

**Answer.** For the first minimum, the path difference equals $\lambda/2$. For small angles:
$w = D\sin\theta \approx D \cdot \lambda/(2s) = 2.0 \times 480 \times 10^{-9}/(2 \times 0.80 \times 10^{-3}) = 6.0 \times 10^{-4}$
m $= 0.60$ mm.

This is exactly half the fringe spacing: $\Delta w = \lambda D/s = 1.20$ mm, and
$0.60 = \Delta w/2$. Confirmed.

### 6.3 Non-Integer Wavelength Ratios

**Example.** Two coherent sources emit waves of wavelength $2.5$ cm. At point $P$, the path
difference is $9.0$ cm. Describe the interference at $P$.

**Answer.** $\Delta x / \lambda = 9.0 / 2.5 = 3.6 = 18/5$. This is neither an integer (constructive)
nor a half-integer (destructive). The interference is partial. The phase difference is
$\Delta\phi = (2\pi/\lambda)\Delta x = 2\pi \times 3.6 = 7.2\pi = 0.2\pi$ (modulo $2\pi$).

The resultant amplitude is
$A_R = 2A|\cos(\Delta\phi/2)| = 2A|\cos(0.1\pi)| = 2A \times 0.951 = 1.90A$. This is close to
maximum ($2A$) because the path difference is close to $4\lambda = 10.0$ cm.

## 7. Path Difference for Minima and Maxima: Extended Analysis

### 7.1 General Conditions

For two coherent sources separated by distance $s$, at a point $P$ on a screen at distance
$D \gg s$:

| Condition | Path Difference    | Fringe Type  | Order                 |
| --------- | ------------------ | ------------ | --------------------- |
| Bright    | $n\lambda$         | Constructive | $n = 0, 1, 2, \ldots$ |
| Dark      | $(n + 0.5)\lambda$ | Destructive  | $n = 0, 1, 2, \ldots$ |

The distance from the central maximum to the $n$-th bright fringe is $w_n = n\lambda D/s$. The
distance to the $n$-th dark fringe is $w_n = (n + 0.5)\lambda D/s$.

### 7.2 White Light Fringes

If white light is used, each wavelength produces its own fringe pattern. The central maximum
($n = 0$) is white (all wavelengths constructively interfere at $\Delta x = 0$). Higher-order
fringes are spectrally dispersed: blue light ($\lambda \approx 450$ nm) produces narrower fringes
than red light ($\lambda \approx 700$ nm).

## 8. Phase Difference and Coherence in Detail

### 8.1 Quantifying Coherence

Two sources are **coherent** if their phase difference $\Delta\phi$ is constant in time. The
**coherence length** is the maximum path difference over which interference can be observed:

$$L_c = \frac{\lambda^2}{\Delta\lambda}$$

where $\Delta\lambda$ is the bandwidth of the source. A narrow-band source (small $\Delta\lambda$)
has a long coherence length.

**Example.** A sodium lamp at $\lambda = 589$ nm with $\Delta\lambda = 0.6$ nm:
$L_c = (589 \times 10^{-9})^2 / (0.6 \times 10^{-9}) = 5.8 \times 10^{-4}$ m $= 0.58$ mm. A laser at
$\lambda = 633$ nm with $\Delta\lambda = 10^{-6}$ nm has $L_c \approx 400$ m.

### 8.2 Why Independent Sources Are Not Coherent

Light from two independent sources is not coherent because each emits photons with random phase. The
phase difference fluctuates randomly on a timescale of about $10^{-8}$ s, washing out any
interference pattern. Young's experiment requires a single source illuminating both slits so the
slits act as secondary coherent sources.

## 9. Diffraction Grating: Extended Analysis

### 9.1 Angular Dispersion and Resolving Power

The **angular dispersion** of a grating is $d\theta/d\lambda = n/(d\cos\theta)$. The **resolving
power** is:

$$R = \frac{\lambda}{\Delta\lambda} = nN$$

where $N$ is the total number of illuminated slits.

**Example.** A grating has $500$ lines/mm and is $20$ mm wide. In second order at $\lambda = 600$
nm, the minimum resolvable wavelength difference is
$\Delta\lambda = 600/(2 \times 10{,}000) = 0.030$ nm.

### 9.2 Missing Orders

If grating slits have finite width $a$, an order $n$ is missing when it coincides with a single-slit
minimum: $n = (d/a) \times m$ for $m = 1, 2, 3, \ldots$.

**Example.** A grating with $d = 2.0$ $\mu$m and slit width $a = 0.50$ $\mu$m: $d/a = 4$, so orders
$n = 4, 8, 12, \ldots$ are missing.

## 10. Common Pitfalls

1. **Forgetting the small-angle approximation.** $\Delta w = \lambda D/s$ assumes
   $\sin\theta \approx \tan\theta$, valid only when $D \gg s$. For large angles, use
   $\sin\theta = n\lambda/s$ directly.

2. **Confusing slit separation $s$ with slit width $a$.** $s$ is the separation between slit
   centres; $a$ determines the diffraction envelope.

3. **Counting the zeroth order.** The central maximum ($n = 0$) counts as a maximum. Total visible
   maxima $= 2n_{\max} + 1$.

4. **Assuming all harmonics exist for closed pipes.** A pipe closed at one end only supports odd
   harmonics ($n = 1, 3, 5, \ldots$).

5. **Confusing nodes and antinodes at boundaries.** A fixed end is a displacement node. An open end
   is a displacement antinode.

## 11. Extension Problem Set

<details>
<summary>Problem 1</summary>
In a Young's double slit experiment, light of wavelength $620$ nm produces fringes that are $2.5$ mm apart on a screen $1.2$ m from the slits. Calculate the slit separation. If the slit separation is halved, what happens to the fringe spacing?

**Answer.**
$s = \lambda D / \Delta w = 620 \times 10^{-9} \times 1.2 / 2.5 \times 10^{-3} = 2.98 \times 10^{-4}$
m $= 0.298$ mm. If $s$ is halved: $\Delta w$ doubles to $5.0$ mm.

<b>If you get this wrong, revise:</b>
[Young's Double Slit Experiment](#3-youngs-double-slit-experiment)

</details>

<details>
<summary>Problem 2</summary>
Two coherent sources $S_1$ and $S_2$ are $3.0$ mm apart and emit light of wavelength $600$ nm. A screen is placed $5.0$ m away. Calculate the positions of the central maximum and the first three minima.

**Answer.** Fringe spacing: $\Delta w = 600 \times 10^{-9} \times 5.0 / 3.0 \times 10^{-3} = 1.0$
mm. Central maximum at $w = 0$. Minima at $w = 0.50$ mm, $1.5$ mm, $2.5$ mm.

<b>If you get this wrong, revise:</b>
[Path Difference for Minima and Maxima](#7-path-difference-for-minima-and-maxima-extended-analysis)

</details>

<details>
<summary>Problem 3</summary>
A diffraction grating with 400 lines/mm is used with light of wavelength $500$ nm. Calculate the angle of the third-order maximum and the total number of visible maxima.

**Answer.** $d = 2.5 \times 10^{-6}$ m.
$\sin\theta = 3 \times 500 \times 10^{-9}/2.5 \times 10^{-6} = 0.600$. $\theta = 36.9^\circ$.
$n_{\max} = d/\lambda = 5$. Total $= 2(5) + 1 = 11$.

<b>If you get this wrong, revise:</b> [Diffraction Gratings](#4-diffraction-gratings)

</details>

<details>
<summary>Problem 4</summary>
A stationary wave is formed on a string of length $0.80$ m with wave speed $320$ m s$^{-1}$. Calculate the fundamental frequency and the number of nodes in the fourth harmonic.

**Answer.** $f_1 = 320/(2 \times 0.80) = 200$ Hz. Fourth harmonic has $n + 1 = 5$ nodes.

<b>If you get this wrong, revise:</b>
[Harmonics on a String Fixed at Both Ends](#harmonics-on-a-string-fixed-at-both-ends)

</details>

<details>
<summary>Problem 5</summary>
Two waves of the same frequency meet at a point. Wave $A$ has amplitude $5.0$ mm and wave $B$ has amplitude $3.0$ mm. The phase difference is $\pi/3$ radians. Calculate the resultant amplitude.

**Answer.**
$A_R = \sqrt{A^2 + B^2 + 2AB\cos\Delta\phi} = \sqrt{25 + 9 + 2 \times 5 \times 3 \times \cos(\pi/3)} = \sqrt{25 + 9 + 15} = \sqrt{49} = 7.0$
mm.

<b>If you get this wrong, revise:</b>
[Constructive and Destructive Interference](#constructive-and-destructive-interference)

</details>

<details>
<summary>Problem 6</summary>
Explain why a diffraction grating produces sharper maxima than a double slit.

**Answer.** With $N$ slits, destructive interference occurs between all pairs, not just adjacent
slits. Between two adjacent maxima, there are $N - 2$ positions where $N - 1$ slits cancel pairwise,
suppressing the background intensity much more effectively than with 2 slits. As $N$ increases,
maxima become narrower and brighter.

<b>If you get this wrong, revise:</b> [Diffraction Gratings](#4-diffraction-gratings)

</details>


---

:::tip Diagnostic Test
Ready to test your understanding of **Superposition and Interference**? The [diagnostic test](/physics/diagnostics/diag-superposition-interference) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Superposition and Interference with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
