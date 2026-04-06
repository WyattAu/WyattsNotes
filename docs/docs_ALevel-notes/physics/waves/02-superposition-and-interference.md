---
title: Superposition and Interference
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

## 1. The Principle of Superposition

**Definition.** The principle of superposition states that when two or more waves overlap at a
point, the resultant displacement is the algebraic sum of the individual displacements of each wave
at that point.

**Principle of Superposition.** When two or more waves overlap, the resultant displacement at any
point is the **algebraic sum** of the individual displacements:

$$y_{\text{total}} = y_1 + y_2 + y_3 + \cdots$$

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

$$y_{\text{total}} = A\sin(\omega t) + A\sin(\omega t + \Delta\phi)$$

Using the trigonometric identity
$\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$$y_{\text{total}} = 2A\cos\left(\frac{\Delta\phi}{2}\right)\sin\left(\omega t + \frac{\Delta\phi}{2}\right)$$

The resultant amplitude is:

$$A_{\text{resultant}} = 2A\left|\cos\frac{\Delta\phi}{2}\right|$$

- **Constructive interference**:
  $\Delta\phi = 0, 2\pi, 4\pi, \ldots \implies A_{\text{resultant}} = 2A$
- **Destructive interference**:
  $\Delta\phi = \pi, 3\pi, 5\pi, \ldots \implies A_{\text{resultant}} = 0$

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
sources, typically produced by splitting a single wave. :::

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
approximation. Quote the fringe spacing formula and explain each variable. :::

<details>
<summary>Example: Young's Double Slit</summary>
<p>

Light of wavelength 590 nm passes through double slits separated by 0.50 mm onto a screen 1.5 m
away. Calculate the fringe spacing.

**Answer.**
$\Delta w = \frac{\lambda D}{s} = \frac{590 \times 10^{-9} \times 1.5}{0.50 \times 10^{-3}} = \frac{8.85 \times 10^{-7}}{5.0 \times 10^{-4}} = 1.77 \times 10^{-3}$
m $= 1.77$ mm.

</p>
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
visible maxima $= 2n_{\max} + 1$. :::

## 5. Stationary Waves

**Definition.** A stationary (standing) wave is a wave formed by the superposition of two
progressive waves of the same frequency and amplitude travelling in opposite directions,
characterised by fixed positions of maximum amplitude (antinodes) and zero amplitude (nodes) with no
net energy transfer.

### Derivation from Superposition of Two Progressive Waves

Consider two identical waves travelling in opposite directions:

$$y_1 = A\sin(kx - \omega t) \quad \text{(travelling in } +x\text{)}$$
$$y_2 = A\sin(kx + \omega t) \quad \text{(travelling in } -x\text{)}$$

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

$$\boxed{f_n = \frac{nv}{4L}, \quad n = 1, 3, 5, \ldots \text{ (odd harmonics only)}}$$

Only odd harmonics are present because an even number of quarter-wavelengths would require a node at
the open end, which contradicts the boundary condition.

### Harmonics in a Pipe Open at Both Ends

Both ends are displacement antinodes.

$$\boxed{f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots \text{ (all harmonics)}}$$

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Two coherent sources emit waves of wavelength 0.80 m. At a point P, the path difference is 2.00 m.
Is the interference at P constructive or destructive?

**Answer.** $\Delta x / \lambda = 2.00 / 0.80 = 2.5 = 5/2$. This is an odd half-integer, so the
interference is destructive (minimum).

<b>If you get this wrong, revise:</b>
[Path Difference and Phase Difference](#2-path-difference-and-phase-difference)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

In Young's double slit experiment, the slits are 0.40 mm apart and the screen is 2.0 m away. The
fringe spacing is measured as 2.8 mm. Calculate the wavelength of the light.

**Answer.**
$\lambda = \frac{s \cdot \Delta w}{D} = \frac{0.40 \times 10^{-3} \times 2.8 \times 10^{-3}}{2.0} = \frac{1.12 \times 10^{-6}}{2.0} = 5.6 \times 10^{-7}$
m $= 560$ nm.

<b>If you get this wrong, revise:</b>
[Young's Double Slit Experiment](#3-youngs-double-slit-experiment)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A diffraction grating has 500 lines per mm. Light of wavelength 600 nm is incident normally.
Calculate the angle of the second-order maximum.

**Answer.** $d = 1/500$ mm $= 2.0 \times 10^{-6}$ m. $d\sin\theta = 2\lambda$.
$\sin\theta = \frac{2 \times 600 \times 10^{-9}}{2.0 \times 10^{-6}} = \frac{1.2 \times 10^{-6}}{2.0 \times 10^{-6}} = 0.60$.
$\theta = \arcsin(0.60) = 36.9°$.

<b>If you get this wrong, revise:</b> [Diffraction Gratings](#4-diffraction-gratings)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A stationary wave on a string of length 1.2 m has a fundamental frequency of 120 Hz. Find: (a) the
wave speed on the string, (b) the frequency of the third harmonic.

**Answer.** (a) $f_1 = v/(2L)$, so $v = 2Lf_1 = 2 \times 1.2 \times 120 = 288$ m s$^{-1}$.

(b) $f_3 = 3f_1 = 360$ Hz.

<b>If you get this wrong, revise:</b>
[Harmonics on a String Fixed at Both Ends](#harmonics-on-a-string-fixed-at-both-ends)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A pipe of length 0.85 m is closed at one end. The speed of sound is 340 m s$^{-1}$. Calculate the
frequency of the first two harmonics.

**Answer.** $f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.85} = \frac{340}{3.4} = 100$ Hz.

The next harmonic is the 3rd: $f_3 = 3f_1 = 300$ Hz. (No 2nd harmonic exists for a closed pipe.)

<b>If you get this wrong, revise:</b>
[Harmonics in a Pipe Closed at One End](#harmonics-in-a-pipe-closed-at-one-end)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Two waves meet at a point. Wave 1 has amplitude 3.0 mm and wave 2 has amplitude 4.0 mm. If they are
in phase, what is the resultant amplitude? If they are in antiphase?

**Answer.** In phase: $A_{\text{resultant}} = 3.0 + 4.0 = 7.0$ mm.

In antiphase: $A_{\text{resultant}} = |3.0 - 4.0| = 1.0$ mm.

<b>If you get this wrong, revise:</b>
[Constructive and Destructive Interference](#constructive-and-destructive-interference)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A diffraction grating with 300 lines per mm is used with light of wavelength 540 nm. How many orders
of maximum can be seen on each side of the central maximum?

**Answer.** $d = 1/300$ mm $= 3.33 \times 10^{-6}$ m.
$n_{\max} = d/\lambda = 3.33 \times 10^{-6} / 540 \times 10^{-9} = 6.17$. So the highest visible
order is $n = 6$. Total visible maxima $= 2(6) + 1 = 13$.

<b>If you get this wrong, revise:</b> [Maximum number of orders](#maximum-number-of-orders)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

Derive the stationary wave equation from two progressive waves $y_1 = A\sin(kx - \omega t)$ and
$y_2 = A\sin(kx + \omega t)$.

**Answer.** $y = y_1 + y_2 = A[\sin(kx - \omega t) + \sin(kx + \omega t)]$.

Using the identity $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$\alpha = kx - \omega t$, $\beta = kx + \omega t$.

$\frac{\alpha + \beta}{2} = kx$, $\frac{\alpha - \beta}{2} = -\omega t$.

$y = 2A\sin(kx)\cos(-\omega t) = 2A\sin(kx)\cos(\omega t)$ (since $\cos$ is even).

<b>If you get this wrong, revise:</b>
[Derivation from Superposition of Two Progressive Waves](#derivation-from-superposition-of-two-progressive-waves)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

In a Young's double slit experiment using light of wavelength 550 nm, the fringe spacing on a screen
1.5 m away is 1.1 mm. Calculate the slit separation.

**Answer.**
$s = \frac{\lambda D}{\Delta w} = \frac{550 \times 10^{-9} \times 1.5}{1.1 \times 10^{-3}} = \frac{8.25 \times 10^{-7}}{1.1 \times 10^{-3}} = 7.5 \times 10^{-4}$
m $= 0.75$ mm.

<b>If you get this wrong, revise:</b>
[Young's Double Slit Experiment](#3-youngs-double-slit-experiment)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A string of length 0.60 m vibrates at its fourth harmonic at 400 Hz. Find the wave speed and the
wavelength of the fourth harmonic.

**Answer.** $f_4 = \frac{4v}{2L} = \frac{2v}{L}$.
$v = \frac{f_4 L}{2} = \frac{400 \times 0.60}{2} = 120$ m s$^{-1}$.

$\lambda_4 = 2L/4 = L/2 = 0.30$ m.

<b>If you get this wrong, revise:</b>
[Harmonics on a String Fixed at Both Ends](#harmonics-on-a-string-fixed-at-both-ends)

</p>
</details>

<details>
<summary>Problem 11</summary>
<p>

Explain the difference between progressive and stationary waves in terms of (a) energy transfer, (b)
amplitude variation, and (c) phase relationship between neighbouring points.

**Answer.** (a) Progressive waves transfer energy; stationary waves do not (energy is trapped).

(b) In a progressive wave, all points have the same amplitude (for an ideal wave). In a stationary
wave, the amplitude varies from zero (nodes) to maximum (antinodes).

(c) In a progressive wave, all points have the same phase (the wave pattern translates). In a
stationary wave, all points between two adjacent nodes are in phase, but points in adjacent segments
are in antiphase.

<b>If you get this wrong, revise:</b> [Stationary Waves](#5-stationary-waves)

</p>
</details>

<details>
<summary>Problem 12</summary>
<p>

White light (wavelengths 400–700 nm) is incident on a diffraction grating with 400 lines per mm. For
the second order, calculate the angular range subtended by the visible spectrum.

**Answer.** $d = 1/400$ mm $= 2.5 \times 10^{-6}$ m. For $n = 2$:

For 400 nm: $\sin\theta = \frac{2 \times 400 \times 10^{-9}}{2.5 \times 10^{-6}} = 0.320$,
$\theta = 18.7°$.

For 700 nm: $\sin\theta = \frac{2 \times 700 \times 10^{-9}}{2.5 \times 10^{-6}} = 0.560$,
$\theta = 34.1°$.

Angular range $= 34.1° - 18.7° = 15.4°$.

<b>If you get this wrong, revise:</b> [Diffraction Gratings](#4-diffraction-gratings)

</p>
</details>

:::

:::

:::
