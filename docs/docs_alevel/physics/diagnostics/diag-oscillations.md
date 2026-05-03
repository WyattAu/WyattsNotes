---
title: Oscillations — Diagnostic Tests
description: Diagnostic tests for simple harmonic motion, energy in oscillations, resonance, damping, and phase relationships at maximum A-Level Physics difficulty.
slug: diag-oscillations
hide_table_of_contents: true
---

# Oscillations — Diagnostic Tests

## Unit Tests

### UT-1: Identifying and Analysing SHM

**Question:**

A particle of mass $0.50\,\text{kg}$ moves in a straight line. Its displacement from a fixed point $O$ is given by $x = 0.15\cos(4\pi t + \pi/3)\,\text{m}$, where $t$ is in seconds.

(a) Calculate the amplitude, angular frequency, period, and frequency of the motion.

(b) Calculate the maximum velocity and maximum acceleration, and state the displacement at which each occurs.

(c) Calculate the first time at which the kinetic energy equals the potential energy.

**Solution:**

(a) Comparing $x = A\cos(\omega t + \phi)$:

- Amplitude $A = 0.15\,\text{m}$
- Angular frequency $\omega = 4\pi\,\text{rad}\,\text{s}^{-1}$
- Period $T = 2\pi/\omega = 2\pi/(4\pi) = 0.500\,\text{s}$
- Frequency $f = 1/T = 2.00\,\text{Hz}$

(b) Velocity: $v = -A\omega\sin(\omega t + \phi)$

Maximum velocity: $v_{\max} = A\omega = 0.15 \times 4\pi = 1.885\,\text{m}\,\text{s}^{-1}$

This occurs when $\sin(4\pi t + \pi/3) = \pm 1$, i.e. $x = 0$ (equilibrium position).

Acceleration: $a = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$

Maximum acceleration: $a_{\max} = A\omega^2 = 0.15 \times (4\pi)^2 = 0.15 \times 16\pi^2 = 23.69\,\text{m}\,\text{s}^{-2}$

This occurs when $|x| = A = 0.15\,\text{m}$ (maximum displacement).

(c) KE $=$ PE when $\frac{1}{2}mv^2 = \frac{1}{2}m\omega^2 x^2$.

Since $E_k + E_p = \frac{1}{2}m\omega^2 A^2$, KE $=$ PE implies each is half the total:

$$\frac{1}{2}m\omega^2 x^2 = \frac{1}{4}m\omega^2 A^2 \Rightarrow x^2 = \frac{A^2}{2} \Rightarrow x = \pm\frac{A}{\sqrt{2}}$$

$$0.15\cos(4\pi t + \pi/3) = \pm\frac{0.15}{\sqrt{2}} = \pm 0.1061$$

$$\cos(4\pi t + \pi/3) = \pm\frac{1}{\sqrt{2}}$$

For the positive case: $4\pi t + \pi/3 = \pi/4$ (first solution going forward in time from the negative case, or we can find the first positive $t$):

Actually, $\cos\theta = 1/\sqrt{2}$ when $\theta = \pm\pi/4 + 2n\pi$.

$$4\pi t + \pi/3 = -\pi/4 \Rightarrow 4\pi t = -\pi/4 - \pi/3 = -7\pi/12 \Rightarrow t = -7\pi/(48\pi) = -0.146\,\text{s}$$ (negative, reject)

$$4\pi t + \pi/3 = \pi/4 \Rightarrow 4\pi t = \pi/4 - \pi/3 = -\pi/12 \Rightarrow t = -1/48 = -0.0208\,\text{s}$$ (negative, reject)

$$4\pi t + \pi/3 = 2\pi - \pi/4 = 7\pi/4 \Rightarrow 4\pi t = 7\pi/4 - \pi/3 = 17\pi/12 \Rightarrow t = 17/(48) = 0.354\,\text{s}$$

First positive time: $t = 0.354\,\text{s}$

For the negative case: $\cos\theta = -1/\sqrt{2}$ when $\theta = \pm 3\pi/4 + 2n\pi$.

$$4\pi t + \pi/3 = 3\pi/4 \Rightarrow 4\pi t = 3\pi/4 - \pi/3 = 5\pi/12 \Rightarrow t = 5/48 = 0.104\,\text{s}$$

The first time is $t = 0.104\,\text{s}$ (when $x = -A/\sqrt{2}$).

---
### UT-2: Damped Oscillations — Logarithmic Decrement

**Question:**

A mass-spring system undergoes damped harmonic oscillations. The displacement is given by $x = A_0 e^{-\gamma t}\cos(\omega_d t)$, where $\gamma = 0.50\,\text{s}^{-1}$ and $\omega_d = 8.0\,\text{rad}\,\text{s}^{-1}$.

(a) Calculate the time for the amplitude to halve.

(b) Calculate the logarithmic decrement $\Lambda$ (the natural logarithm of the ratio of successive amplitudes).

(c) Calculate the quality factor $Q$ of the oscillator.

**Solution:**

(a) The amplitude envelope is $A(t) = A_0 e^{-\gamma t}$.

For the amplitude to halve: $e^{-\gamma t_{1/2}} = 0.5$

$$-\gamma t_{1/2} = \ln(0.5) = -\ln 2$$
$$t_{1/2} = \frac{\ln 2}{\gamma} = \frac{0.693}{0.50} = 1.39\,\text{s}$$

(b) Successive amplitudes occur at times separated by one period $T_d = 2\pi/\omega_d$:

$$T_d = \frac{2\pi}{8.0} = 0.7854\,\text{s}$$

Ratio of successive amplitudes: $\frac{A(t + T_d)}{A(t)} = e^{-\gamma T_d}$

Logarithmic decrement:

$$\Lambda = \ln\left(\frac{A(t)}{A(t + T_d)}\right) = \gamma T_d = 0.50 \times 0.7854 = 0.393$$

(c) The quality factor is:

$$Q = \frac{\omega_d}{2\gamma} = \frac{8.0}{2 \times 0.50} = 8.0$$

Alternatively, $Q = \pi/\Lambda = \pi/0.393 = 8.0$. Consistent.

A $Q$ factor of 8 means the oscillator completes approximately 8 radians (about 1.3 cycles) before its energy drops to $1/e$ of its initial value.

---
### UT-3: Resonance and Forced Oscillations

**Question:**

A simple pendulum of length $1.00\,\text{m}$ and mass $0.20\,\text{kg}$ is driven by a periodic force $F = F_0\cos(\omega t)$. The pendulum experiences a damping force proportional to velocity with damping constant $b = 0.10\,\text{N}\,\text{s}\,\text{m}^{-1}$.

(a) Calculate the natural frequency of the pendulum.

(b) Calculate the amplitude of oscillation at resonance ($\omega = \omega_0$) when $F_0 = 0.50\,\text{N}$.

(c) Calculate the frequency at which the amplitude is half the maximum amplitude, and hence estimate the width of the resonance peak.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) For a simple pendulum: $\omega_0 = \sqrt{g/l} = \sqrt{9.81/1.00} = 3.132\,\text{rad}\,\text{s}^{-1}$

Natural frequency $f_0 = \omega_0/(2\pi) = 0.498\,\text{Hz}$

(b) At resonance, the amplitude is:

$$A_{\text{res}} = \frac{F_0/m}{2\gamma\omega_0}$$

where $\gamma = b/(2m) = 0.10/(2 \times 0.20) = 0.25\,\text{s}^{-1}$

$$A_{\text{res}} = \frac{0.50/0.20}{2 \times 0.25 \times 3.132} = \frac{2.50}{1.566} = 1.596\,\text{m}$$

Note: this amplitude exceeds the length of the pendulum ($1.00\,\text{m}$), which means the small-angle approximation has broken down and the linear model is no longer valid. This highlights a limitation of the simple harmonic model.

(c) The amplitude at driving frequency $\omega$ is:

$$A(\omega) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2\gamma\omega)^2}}$$

At half maximum amplitude: $A(\omega_{1/2}) = A_{\text{res}}/2$

$$\sqrt{(\omega_0^2 - \omega^2)^2 + (2\gamma\omega)^2} = 2 \times 2\gamma\omega_0 = 4\gamma\omega_0$$

For light damping ($\gamma \ll \omega_0$), the half-maximum points occur at approximately $\omega \approx \omega_0 \pm \gamma$.

$$\omega_{1/2} \approx 3.132 \pm 0.25$$

So $\omega_1 = 2.88\,\text{rad}\,\text{s}^{-1}$ and $\omega_2 = 3.38\,\text{rad}\,\text{s}^{-1}$.

The full width at half maximum (FWHM): $\Delta\omega = 2\gamma = 0.50\,\text{rad}\,\text{s}^{-1}$.

The quality factor $Q = \omega_0/\Delta\omega = 3.132/0.50 = 6.26$.

## Integration Tests

### IT-1: Mass on a Spring in an Accelerating Lift (with Dynamics)

**Question:**

A mass of $2.0\,\text{kg}$ hangs from a spring of spring constant $k = 80\,\text{N}\,\text{m}^{-1}$ in a lift. The lift accelerates upwards at $3.0\,\text{m}\,\text{s}^{-2}$. The mass is displaced $0.05\,\text{m}$ from its equilibrium position and released.

(a) Calculate the new equilibrium position of the mass relative to the unstretched position of the spring.

(b) Calculate the period of oscillation of the mass.

(c) Calculate the maximum speed of the mass during the oscillation.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) In the accelerating lift, the effective gravitational field strength is $g_{\text{eff}} = g + a = 9.81 + 3.0 = 12.81\,\text{m}\,\text{s}^{-2}$.

At equilibrium: $kx_0 = mg_{\text{eff}}$

$$x_0 = \frac{mg_{\text{eff}}}{k} = \frac{2.0 \times 12.81}{80} = \frac{25.62}{80} = 0.320\,\text{m}$$

(b) The period of a mass-spring system is independent of gravity:

$$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{2.0}{80}} = 2\pi\sqrt{0.025} = 2\pi \times 0.1581 = 0.993\,\text{s}$$

The acceleration of the lift changes the equilibrium position but not the period, because the restoring force $F = -kx$ depends only on the spring constant and displacement from equilibrium.

(c) Maximum speed: $v_{\max} = A\omega = 0.05 \times \sqrt{k/m} = 0.05 \times \sqrt{40} = 0.05 \times 6.325 = 0.316\,\text{m}\,\text{s}^{-1}$

---
### IT-2: Driven Oscillator Connected to a Circuit (with Capacitance)

**Question:**

A mechanical oscillator (mass $m$, spring constant $k$, damping constant $b$) is driven by a force $F = F_0\cos(\omega t)$. The analogous electrical circuit consists of an inductor $L$, capacitor $C$, and resistor $R$ in series driven by an AC voltage $V = V_0\cos(\omega t)$.

Given: $m = 0.50\,\text{kg}$, $k = 200\,\text{N}\,\text{m}^{-1}$, $b = 2.0\,\text{N}\,\text{s}\,\text{m}^{-1}$, $L = 0.10\,\text{H}$, $C = 25\,\mu\text{F}$, $R = 40\,\Omega$.

(a) Show that the natural frequency of the mechanical oscillator equals the resonant frequency of the electrical circuit.

(b) Calculate the amplitude response at resonance for both systems when $F_0 = 5.0\,\text{N}$ and $V_0 = 10\,\text{V}$.

(c) Calculate the power dissipated at resonance in both systems.

**Solution:**

(a) Mechanical: $\omega_0 = \sqrt{k/m} = \sqrt{200/0.50} = \sqrt{400} = 20\,\text{rad}\,\text{s}^{-1}$

Electrical: $\omega_0 = 1/\sqrt{LC} = 1/\sqrt{0.10 \times 25 \times 10^{-6}} = 1/\sqrt{2.5 \times 10^{-6}} = 1/(1.581 \times 10^{-3}) = 632.5\,\text{rad}\,\text{s}^{-1}$

These are **not** equal. For the analogy to hold, the corresponding parameters must be chosen consistently. The mechanical-electrical analogies are: $m \leftrightarrow L$, $k \leftrightarrow 1/C$, $b \leftrightarrow R$.

For the frequencies to match, we need $\sqrt{k/m} = 1/\sqrt{LC}$, i.e. $k/m = 1/(LC)$.

Check: $k/m = 200/0.50 = 400$ and $1/(LC) = 1/(0.10 \times 25 \times 10^{-6}) = 400000$. These are not equal, so the systems are not analogous as given.

For a true analogy with the given mechanical parameters, the electrical components would need: $LC = m/k = 0.50/200 = 2.5 \times 10^{-3}\,\text{s}^2$, e.g. $L = 0.50\,\text{H}$, $C = 5.0 \times 10^{-3}\,\text{F}$.

(b) For the mechanical oscillator at resonance:

$$A_{\text{res}} = \frac{F_0/m}{2\gamma\omega_0} = \frac{5.0/0.50}{2 \times (2.0/(2 \times 0.50)) \times 20} = \frac{10}{2 \times 2.0 \times 20} = \frac{10}{80} = 0.125\,\text{m}$$

For the electrical circuit at resonance ($\omega = 632.5\,\text{rad}\,\text{s}^{-1}$):

$$I_{\text{res}} = \frac{V_0}{R} = \frac{10}{40} = 0.25\,\text{A}$$

Voltage across capacitor: $V_C = I_{\text{res}}/(\omega_0 C) = 0.25/(632.5 \times 25 \times 10^{-6}) = 0.25/0.01581 = 15.8\,\text{V}$

(c) Power dissipated at resonance:

Mechanical: $P = \frac{1}{2}F_0 v_{\max} = \frac{1}{2}F_0 A_{\text{res}}\omega_0 = \frac{1}{2} \times 5.0 \times 0.125 \times 20 = 6.25\,\text{W}$

Alternatively: $P = \frac{F_0^2}{2b} = 25/(2 \times 2.0) = 6.25\,\text{W}$

Electrical: $P = \frac{V_0^2}{2R} = 100/80 = 1.25\,\text{W}$

---
### IT-3: Oscillation of a Liquid in a U-Tube (with Properties of Materials)

**Question:**

A U-tube of uniform cross-sectional area $A = 2.0 \times 10^{-3}\,\text{m}^2$ contains a liquid of density $\rho = 1200\,\text{kg}\,\text{m}^{-3}$. The total length of the liquid column is $L = 0.80\,\text{m}$. The liquid is displaced so that the level on one side is $0.050\,\text{m}$ above the equilibrium level.

(a) Show that the liquid undergoes SHM and derive an expression for the period.

(b) Calculate the period of oscillation.

(c) If the U-tube is tilted at $30^\circ$ to the vertical, calculate the new period.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) When the liquid is displaced by $x$ on one side, the restoring force is due to the weight of the excess liquid column of height $2x$:

$$F = -\rho A (2x) g = -2\rho A g x$$

The mass of the oscillating liquid: $m = \rho A L$

By Newton's second law: $ma = F$

$$\rho A L \ddot{x} = -2\rho A g x$$
$$\ddot{x} = -\frac{2g}{L} x$$

This is of the form $\ddot{x} = -\omega^2 x$, confirming SHM with $\omega^2 = 2g/L$.

(b) $\omega = \sqrt{2g/L} = \sqrt{2 \times 9.81/0.80} = \sqrt{24.53} = 4.953\,\text{rad}\,\text{s}^{-1}$

$$T = \frac{2\pi}{\omega} = \frac{2\pi}{4.953} = 1.269\,\text{s}$$

(c) When the U-tube is tilted at $30^\circ$ to the vertical, the effective component of $g$ along the tube direction is $g\cos 30^\circ$.

The restoring force becomes: $F = -\rho A (2x) g\cos 30^\circ$

$$\omega' = \sqrt{\frac{2g\cos 30^\circ}{L}} = \sqrt{\frac{2 \times 9.81 \times 0.866}{0.80}} = \sqrt{21.25} = 4.610\,\text{rad}\,\text{s}^{-1}$$

$$T' = \frac{2\pi}{4.610} = 1.363\,\text{s}$$

The period increases when the tube is tilted because the effective restoring acceleration is reduced.
