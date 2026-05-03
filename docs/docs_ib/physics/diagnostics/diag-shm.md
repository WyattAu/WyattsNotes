---
title: Simple Harmonic Motion -- Diagnostic Tests
description: Hardest IB Physics SHM diagnostic tests covering the necessary and sufficient condition for SHM, energy exchange between KE and PE, phase difference calculations, and damped resonance.
slug: diag-shm
hide_table_of_contents: true
---

# Simple Harmonic Motion — Diagnostic Tests

## Unit Tests

### UT-1: Verifying the SHM Condition

**Question:**

A particle of mass $m$ moves in one dimension. In each of the following cases, determine whether the motion is simple harmonic and justify your answer using the condition $a = -\omega^2 x$.

(a) The restoring force is $F = -kx + bx^3$ where $k, b \gt 0$ and $b$ is small.

(b) A simple pendulum of length $L$ oscillates with maximum angular displacement $\theta_{\max}$.

(c) A U-tube manometer contains a liquid of total mass $m$ and density $\rho$. The liquid is displaced by $x$ from equilibrium in one arm. The cross-sectional area of each arm is $A$.

**Solution:**

(a) The restoring force is $F = -kx + bx^3$.

Newton's second law: $ma = -kx + bx^3$, so $a = -\frac{k}{m}x + \frac{b}{m}x^3$.

This is **not** SHM because the acceleration is not proportional to displacement. The $bx^3$ term makes it anharmonic. The motion is approximately SHM only when $bx^3 \ll kx$, i.e. $x \ll \sqrt{k/b}$ (small oscillations). But strictly, the motion is not SHM.

(b) The equation of motion for a simple pendulum is:

$$\frac{d^2\theta}{dt^2} + \frac{g}{L}\sin\theta = 0$$

For SHM, we need $a = -\omega^2 x$ (or $\ddot{\theta} = -\omega^2 \theta$), which requires $\sin\theta \approx \theta$ (small angle approximation).

Using $\sin\theta = \theta - \theta^3/6 + \ldots$, the exact equation is:

$$\ddot{\theta} = -\frac{g}{L}\theta + \frac{g}{6L}\theta^3 - \ldots$$

This is SHM only when $\theta$ is small enough that $\theta^3/6 \ll \theta$, i.e. $\theta \ll \sqrt{6} \approx 2.45\,\text{rad}$ (about $140^\circ$). For practical purposes, $\theta_{\max} \lt 15^\circ$ ensures the error is less than $0.5\%$.

The motion is **approximately** SHM for small angles, but not exactly SHM. The period is $T = 2\pi\sqrt{L/g}$ only in the small angle limit.

(c) If the liquid is displaced by $x$ in one arm, the height difference between the two arms is $2x$. The restoring force is the weight of the excess liquid column:

$$F = -\rho A(2x)g = -2\rho Ag x$$

Total mass of oscillating liquid: $m = \rho \times 2AL$ (where $L$ is the total length of liquid).

$$a = \frac{F}{m} = \frac{-2\rho Ag x}{2\rho AL} = -\frac{g}{L}x$$

This is of the form $a = -\omega^2 x$ with $\omega^2 = g/L$.

The motion **is** SHM with period $T = 2\pi\sqrt{L/g}$, where $L$ is the total length of the liquid column. This is exact -- no approximation is needed.

---

### UT-2: Energy Exchange in SHM

**Question:**

A mass-spring system consists of a block of mass $0.50\,\text{kg}$ attached to a spring of spring constant $200\,\text{N}\,\text{m}^{-1}$ on a frictionless surface. The block oscillates with amplitude $0.10\,\text{m}$.

(a) Calculate the total energy, maximum KE, maximum PE, and the speed at the equilibrium position.

(b) At what displacement is the kinetic energy equal to the potential energy?

(c) A student claims that "the total energy is constant throughout the motion, so the forces must be conservative." Is this claim correct? Justify your answer.

**Solution:**

(a) **Total energy** (at maximum displacement, all PE):

$$E = \frac{1}{2}kA^2 = \frac{1}{2} \times 200 \times 0.01 = 1.0\,\text{J}$$

**Maximum KE** = $E = 1.0\,\text{J}$ (at equilibrium)

**Maximum PE** = $E = 1.0\,\text{J}$ (at maximum displacement)

**Speed at equilibrium** (all energy is KE):

$$\frac{1}{2}mv^2 = 1.0 \Rightarrow v = \sqrt{\frac{2.0}{0.50}} = \sqrt{4.0} = 2.0\,\text{m}\,\text{s}^{-1}$$

(b) KE = PE when:

$$\frac{1}{2}mv^2 = \frac{1}{2}kx^2$$

Since $E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2$ and KE = PE:

$$\frac{1}{2}kx^2 = \frac{E}{2} = 0.50\,\text{J}$$

$$x^2 = \frac{1.0}{200} = 0.005$$

$$x = \pm 0.0707\,\text{m} = \pm \frac{A}{\sqrt{2}} = \pm 0.10\sqrt{0.5} = \pm 0.0707\,\text{m}$$

The KE equals PE at displacement $x = \pm A/\sqrt{2}$.

(c) The claim is correct. The total mechanical energy is constant because the only force doing work is the spring force, which is conservative. A conservative force is defined as one for which the work done depends only on the initial and final positions, not the path. The spring force $F = -kx$ satisfies this criterion.

In general, constant total energy implies all forces are conservative. If friction were present, the total energy would decrease over time as energy is dissipated as thermal energy.

---

### UT-3: Phase Difference and Superposition

**Question:**

Two SHM systems oscillate at the same frequency $f = 2.0\,\text{Hz}$. System 1 has amplitude $A_1 = 0.08\,\text{m}$ and system 2 has amplitude $A_2 = 0.05\,\text{m}$. System 2 leads system 1 by a phase difference of $\phi = \pi/3\,\text{rad}$.

(a) Write the displacement equations for both systems, taking system 1's phase as zero.

(b) Calculate the amplitude of the resultant oscillation when the two displacements are added.

(c) Determine the phase of the resultant oscillation relative to system 1.

**Solution:**

(a) Angular frequency: $\omega = 2\pi f = 4\pi\,\text{rad}\,\text{s}^{-1}$

System 1: $x_1 = 0.08\cos(4\pi t)$

System 2: $x_2 = 0.05\cos(4\pi t + \pi/3)$

(b) The resultant amplitude of the superposition of two SHMs with the same frequency is:

$$A_R = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\phi}$$

$$A_R = \sqrt{0.08^2 + 0.05^2 + 2 \times 0.08 \times 0.05 \times \cos(\pi/3)}$$

$$= \sqrt{0.0064 + 0.0025 + 2 \times 0.08 \times 0.05 \times 0.5}$$

$$= \sqrt{0.0064 + 0.0025 + 0.004}$$

$$= \sqrt{0.0129} = 0.1136\,\text{m}$$

(c) The phase of the resultant relative to system 1:

$$\tan\delta = \frac{A_2\sin\phi}{A_1 + A_2\cos\phi} = \frac{0.05\sin(\pi/3)}{0.08 + 0.05\cos(\pi/3)}$$

$$= \frac{0.05 \times 0.866}{0.08 + 0.05 \times 0.5} = \frac{0.0433}{0.105} = 0.412$$

$$\delta = \tan^{-1}(0.412) = 0.391\,\text{rad} = 22.4^\circ$$

The resultant oscillation: $x_R = 0.114\cos(4\pi t + 0.391)$

## Integration Tests

### IT-1: SHM of a Mass on a Spring in a Moving Lift (with Dynamics)

**Question:**

A mass of $2.0\,\text{kg}$ hangs from a spring of spring constant $k = 500\,\text{N}\,\text{m}^{-1}$ inside a lift. The lift accelerates upward at $3.0\,\text{m}\,\text{s}^{-2}$. The mass is pulled down $0.05\,\text{m}$ from its equilibrium position and released.

(a) Calculate the new equilibrium position of the mass relative to its position when the lift is stationary.

(b) Calculate the period and frequency of the resulting oscillations.

(c) Calculate the maximum speed and maximum acceleration of the mass during the oscillation.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) When the lift accelerates upward, the effective gravity is $g_{\text{eff}} = g + a = 9.81 + 3.0 = 12.81\,\text{m}\,\text{s}^{-2}$.

Original equilibrium extension: $x_0 = mg/k = 2.0 \times 9.81/500 = 0.0392\,\text{m}$

New equilibrium extension: $x_0' = mg_{\text{eff}}/k = 2.0 \times 12.81/500 = 0.0512\,\text{m}$

The equilibrium position shifts downward by $\Delta x = 0.0512 - 0.0392 = 0.012\,\text{m}$.

(b) The angular frequency: $\omega = \sqrt{k/m} = \sqrt{500/2.0} = \sqrt{250} = 15.81\,\text{rad}\,\text{s}^{-1}$

Note: the period of SHM depends only on $k$ and $m$, **not** on gravity or the lift's acceleration.

Period: $T = 2\pi/\omega = 2\pi/15.81 = 0.397\,\text{s}$

Frequency: $f = 1/T = 2.52\,\text{Hz}$

(c) Amplitude: $A = 0.05\,\text{m}$

Maximum speed: $v_{\max} = A\omega = 0.05 \times 15.81 = 0.791\,\text{m}\,\text{s}^{-1}$

Maximum acceleration: $a_{\max} = A\omega^2 = 0.05 \times 250 = 12.5\,\text{m}\,\text{s}^{-2}$

---

### IT-2: Damped Oscillations and Resonance (with Energy)

**Question:**

A mass-spring system has $m = 0.50\,\text{kg}$, $k = 50\,\text{N}\,\text{m}^{-1}$, and is subject to a damping force $F_d = -bv$ where $b = 0.50\,\text{N}\,\text{s}\,\text{m}^{-1}$. A driving force $F = F_0\cos(\omega_d t)$ is applied.

(a) Calculate the natural frequency, the damping ratio, and determine whether the system is underdamped, critically damped, or overdamped.

(b) Calculate the resonant frequency and the frequency at which maximum amplitude occurs.

(c) Calculate the quality factor $Q$ of the system and estimate the number of oscillations for the amplitude to decay to $1/e$ of its initial value when the driving force is removed.

**Solution:**

(a) Natural angular frequency: $\omega_0 = \sqrt{k/m} = \sqrt{50/0.50} = \sqrt{100} = 10.0\,\text{rad}\,\text{s}^{-1}$

Natural frequency: $f_0 = \omega_0/(2\pi) = 1.59\,\text{Hz}$

Damping parameter: $\gamma = b/(2m) = 0.50/(2 \times 0.50) = 0.50\,\text{s}^{-1}$

Damping ratio: $\zeta = \gamma/\omega_0 = 0.50/10.0 = 0.05$

Since $\zeta \lt 1$, the system is **underdamped**.

(b) The resonant frequency (where amplitude is maximum) is:

$$\omega_r = \sqrt{\omega_0^2 - 2\gamma^2} = \sqrt{100 - 2 \times 0.25} = \sqrt{99.5} = 9.975\,\text{rad}\,\text{s}^{-1}$$

$$f_r = \frac{\omega_r}{2\pi} = \frac{9.975}{2\pi} = 1.588\,\text{Hz}$$

Note: the resonant frequency is slightly less than the natural frequency ($1.588\,\text{Hz}$ vs $1.59\,\text{Hz}$). This difference is small because the damping is light ($\zeta = 0.05$). For heavier damping, the shift would be more pronounced.

(c) Quality factor: $Q = \frac{\omega_0}{2\gamma} = \frac{10.0}{1.0} = 10$

The amplitude decays as $A(t) = A_0 e^{-\gamma t}$. The time for amplitude to reach $A_0/e$:

$$e^{-\gamma t} = e^{-1} \Rightarrow \gamma t = 1 \Rightarrow t = 1/\gamma = 2.0\,\text{s}$$

Number of oscillations in this time: $n = f_0 \times t = 1.59 \times 2.0 = 3.18$

So approximately $Q = 10$ oscillations occur before the amplitude drops to $1/e \approx 37\%$ of its initial value. More precisely, the amplitude drops to $1/e$ after approximately $Q/(2\pi) \times 2\pi = Q$ radians of oscillation, or about $Q$ cycles for light damping.

---

### IT-3: SHM in a Vertical Spring-Mass System (with Energy and Dynamics)

**Question:**

A spring of natural length $0.50\,\text{m}$ and spring constant $k = 100\,\text{N}\,\text{m}^{-1}$ hangs vertically. A mass $m = 2.0\,\text{kg}$ is attached to the free end and released from rest when the spring is at its natural length.

(a) Calculate the equilibrium position and show that the mass undergoes SHM about this position.

(b) Calculate the amplitude, maximum speed, and period of the oscillation.

(c) Calculate the spring extension when the mass is at its lowest point, and verify using energy conservation that this equals the equilibrium extension plus the amplitude.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) At equilibrium: $T = mg$, so $kx_0 = mg$:

$$x_0 = \frac{mg}{k} = \frac{2.0 \times 9.81}{100} = 0.1962\,\text{m}$$

The equilibrium position is $0.1962\,\text{m}$ below the natural length.

When the mass is at displacement $y$ below the equilibrium position, the net force (taking downward as positive):

$$F = mg - k(x_0 + y) = mg - kx_0 - ky = -ky$$

Since $F = ma$ and $F = -ky$:

$$a = -\frac{k}{m}y$$

This is SHM with $\omega^2 = k/m$ and equilibrium at $x_0$.

(b) The mass is released from the natural length, which is $x_0 = 0.1962\,\text{m}$ above the equilibrium position. So the amplitude is:

$$A = x_0 = 0.1962\,\text{m}$$

Maximum speed: $v_{\max} = A\omega = A\sqrt{k/m} = 0.1962 \times \sqrt{50} = 0.1962 \times 7.07 = 1.387\,\text{m}\,\text{s}^{-1}$

Period: $T = 2\pi/\omega = 2\pi\sqrt{m/k} = 2\pi\sqrt{0.02} = 2\pi \times 0.1414 = 0.889\,\text{s}$

(c) Maximum extension = equilibrium extension + amplitude:

$$x_{\max} = x_0 + A = 0.1962 + 0.1962 = 0.3924\,\text{m}$$

**Verification using energy conservation:**

At the natural length (release point), all energy is gravitational PE (taking equilibrium as reference):

$$E = mgA = 2.0 \times 9.81 \times 0.1962 = 3.851\,\text{J}$$

At the lowest point (extension $x_{\max}$), all energy is elastic PE minus gravitational PE:

$$\frac{1}{2}kx_{\max}^2 - mgx_{\max} = \frac{1}{2} \times 100 \times x_{\max}^2 - 19.62x_{\max}$$

Setting equal to initial energy (at natural length, all energy is $mgx_{\max}$... but we need to be careful with reference).

Using the total energy approach from the release point (natural length, zero spring PE, zero KE, height = $x_{\max}$ above lowest point):

$$mgx_{\max} = \frac{1}{2}kx_{\max}^2$$

$$x_{\max} = \frac{2mg}{k} = 2x_0 = 0.3924\,\text{m}$$

This confirms: $x_{\max} = 2x_0 = x_0 + A = 0.1962 + 0.1962 = 0.3924\,\text{m}$.
