---
title: Electromagnetism Unification — Diagnostic Tests
description: Diagnostic tests for Maxwell's equations context, electromagnetic wave properties, Faraday's and Lenz's laws, and EM wave applications at maximum A-Level difficulty.
slug: diag-electromagnetism-unification
hide_table_of_contents: true
---

# Electromagnetism Unification — Diagnostic Tests

## Unit Tests

### UT-1: Faraday's Law vs Lenz's Law — Conceptual Distinction

**Question:**

A coil of $N = 500$ turns and radius $r = 0.05\,\text{m}$ is placed in a uniform magnetic field $B = 0.40\,\text{T}$ directed along the axis of the coil. The field is reduced uniformly to zero in a time $\Delta t = 0.10\,\text{s}$.

(a) Calculate the magnitude of the average EMF induced in the coil.

(b) Determine the direction of the induced current (clockwise or anticlockwise when viewed from the field direction).

(c) If the field were reversed (pointing in the opposite direction) and then reduced to zero over the same time, how would the induced EMF compare? Explain using both Faraday's and Lenz's laws.

**Solution:**

(a) By Faraday's law: $\varepsilon = -N\frac{\Delta\Phi}{\Delta t}$

$$\Delta\Phi = \Phi_{\text{final}} - \Phi_{\text{initial}} = 0 - BA = -B\pi r^2 = -0.40 \times \pi \times (0.05)^2 = -3.14 \times 10^{-3}\,\text{Wb}$$

$$|\varepsilon| = N\frac{|\Delta\Phi|}{\Delta t} = 500 \times \frac{3.14 \times 10^{-3}}{0.10} = 15.7\,\text{V}$$

(b) By Lenz's law, the induced current opposes the change in flux. Since the flux (into the page, say) is decreasing, the induced current flows to maintain the flux by creating its own field in the same direction (into the page). By the right-hand grip rule, the current flows **clockwise** when viewed from the direction of the original field.

(c) If the field points in the opposite direction (say out of the page) and is reduced to zero:

$\Delta\Phi = 0 - (-BA) = BA = +3.14 \times 10^{-3}\,\text{Wb}$

The magnitude of the average EMF is the same: $|\varepsilon| = 500 \times 3.14 \times 10^{-3}/0.10 = 15.7\,\text{V}$.

**Faraday's law** gives the magnitude of the EMF from the rate of change of flux: same rate of change, same magnitude.

**Lenz's law** gives the direction: the flux (out of the page) is decreasing, so the induced current creates a field out of the page to oppose the decrease. The current flows **anticlockwise** when viewed from the original field direction -- the opposite direction to part (b).

The key distinction: Faraday's law determines **how much** EMF is induced; Lenz's law determines **in which direction** the current flows (it always opposes the change that causes it).

---
### UT-2: EM Wave — Speed, Wavelength, and Frequency

**Question:**

An electromagnetic wave in vacuum has an electric field given by $E = E_0\sin(kx - \omega t)\,\hat{j}$, where $E_0 = 30\,\text{V}\,\text{m}^{-1}$, $k = 125.7\,\text{rad}\,\text{m}^{-1}$, and $\omega = 3.77 \times 10^{10}\,\text{rad}\,\text{s}^{-1}$.

(a) Calculate the wavelength, frequency, and speed of the wave. Verify that the speed equals $c$.

(b) Write the equation for the magnetic field component of this wave.

(c) Calculate the time-averaged intensity of the wave.

Take $c = 3.00 \times 10^8\,\text{m}\,\text{s}^{-1}$, $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{F}\,\text{m}^{-1}$, $\mu_0 = 4\pi \times 10^{-7}\,\text{H}\,\text{m}^{-1}$.

**Solution:**

(a) Wavelength: $\lambda = 2\pi/k = 2\pi/125.7 = 0.050\,\text{m} = 50\,\text{mm}$

Frequency: $f = \omega/(2\pi) = 3.77 \times 10^{10}/(2\pi) = 6.00 \times 10^9\,\text{Hz} = 6.0\,\text{GHz}$

Speed: $v = \omega/k = 3.77 \times 10^{10}/125.7 = 3.00 \times 10^8\,\text{m}\,\text{s}^{-1} = c$

Verified. This wave is in the microwave region.

(b) The magnetic field is perpendicular to both $E$ and the direction of propagation ($+x$). Since $E$ is in the $\hat{j}$ direction and the wave propagates in $+x$, $B$ is in the $\hat{k}$ direction.

$B_0 = E_0/c = 30/(3.00 \times 10^8) = 1.00 \times 10^{-7}\,\text{T}$

$$\mathbf{B} = B_0\sin(kx - \omega t)\,\hat{k} = 1.00 \times 10^{-7}\sin(125.7x - 3.77 \times 10^{10}t)\,\hat{k}$$

(c) Time-averaged intensity: $I = \frac{1}{2}\varepsilon_0 c E_0^2$

$$= 0.5 \times 8.85 \times 10^{-12} \times 3.00 \times 10^8 \times 900 = 0.5 \times 8.85 \times 10^{-12} \times 2.7 \times 10^{11} = 1.195\,\text{W}\,\text{m}^{-2}$$

---
### UT-3: Displacement Current and Maxwell's Insight

**Question:**

A parallel plate capacitor with circular plates of radius $0.10\,\text{m}$ is being charged by a current $I = 2.0\,\text{A}$. The plate separation is $5.0\,\text{mm}$.

(a) Calculate the rate of change of electric field between the plates.

(b) Calculate the displacement current between the plates and verify it equals the conduction current.

(c) Explain why the concept of displacement current was necessary for Maxwell to predict electromagnetic waves.

Take $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{F}\,\text{m}^{-1}$.

**Solution:**

(a) Area of plates: $A = \pi r^2 = \pi(0.10)^2 = 0.0314\,\text{m}^2$

The conduction current equals the rate of charge flow onto the plates: $I = dQ/dt$

Since $Q = CV = (\varepsilon_0 A/d) \times Ed = \varepsilon_0 AE$:

$$I = \frac{dQ}{dt} = \varepsilon_0 A \frac{dE}{dt}$$

$$\frac{dE}{dt} = \frac{I}{\varepsilon_0 A} = \frac{2.0}{8.85 \times 10^{-12} \times 0.0314} = \frac{2.0}{2.779 \times 10^{-13}} = 7.20 \times 10^{12}\,\text{V}\,\text{m}^{-1}\,\text{s}^{-1}$$

(b) Displacement current: $I_d = \varepsilon_0 \frac{d\Phi_E}{dt} = \varepsilon_0 A \frac{dE}{dt}$

$$I_d = 8.85 \times 10^{-12} \times 0.0314 \times 7.20 \times 10^{12} = 2.0\,\text{A}$$

$I_d = I = 2.0\,\text{A}$. The displacement current exactly equals the conduction current, as required by the continuity of current in Maxwell's equations.

(c) Before Maxwell, Ampere's law applied only to conduction currents in closed loops. For a charging capacitor, a conduction current flows in the wires but not between the plates. Maxwell introduced the displacement current to make Ampere's law consistent: the changing electric field between the plates acts like a current ($I_d = \varepsilon_0 d\Phi_E/dt$). This completed the symmetry of Maxwell's equations: a changing electric field produces a magnetic field (just as Faraday's law says a changing magnetic field produces an electric field). This mutual generation of $E$ and $B$ fields is what allows electromagnetic waves to propagate through space even in the absence of charges and currents.

## Integration Tests

### IT-1: Generating EM Waves — LC Circuit Analogy (with Oscillations)

**Question:**

An LC circuit has $L = 1.0\,\mu\text{H}$ and $C = 1.0\,\text{pF}$.

(a) Calculate the resonant frequency of the circuit.

(b) The electric field between the capacitor plates has maximum amplitude $E_0 = 100\,\text{V}\,\text{m}^{-1}$ and the plate area is $0.01\,\text{m}^2$. Calculate the maximum energy stored in the electric field and the maximum energy stored in the magnetic field.

(c) Explain how this circuit is analogous to an electromagnetic wave and state the wavelength of the radiation it would emit.

**Solution:**

(a) $f = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{1.0 \times 10^{-6} \times 1.0 \times 10^{-12}}} = \frac{1}{2\pi\sqrt{10^{-18}}} = \frac{1}{2\pi \times 10^{-9}} = 1.59 \times 10^8\,\text{Hz} = 159\,\text{MHz}$

This is in the VHF radio band.

(b) Maximum energy in electric field (when capacitor is fully charged):

$$U_E = \frac{1}{2}\varepsilon_0 E_0^2 \times \text{volume}$$

We need the plate separation: $C = \varepsilon_0 A/d$, so $d = \varepsilon_0 A/C = 8.85 \times 10^{-12} \times 0.01/(1.0 \times 10^{-12}) = 0.0885\,\text{m}$

$$U_E = \frac{1}{2}\varepsilon_0 E_0^2 Ad = \frac{1}{2}CV^2$$

Using $U_E = \frac{1}{2}CV^2$: $V_0 = E_0 d = 100 \times 0.0885 = 8.85\,\text{V}$

$$U_E = 0.5 \times 10^{-12} \times 78.32 = 3.92 \times 10^{-11}\,\text{J}$$

At maximum, all energy is in the electric field, so $U_B = U_E = 3.92 \times 10^{-11}\,\text{J}$.

(c) In an LC circuit, energy oscillates between the electric field (capacitor) and the magnetic field (inductor), analogous to how in an EM wave, energy oscillates between the $E$ and $B$ fields. The frequency of the circuit determines the frequency of the emitted radiation.

Wavelength: $\lambda = c/f = 3.00 \times 10^8/(1.59 \times 10^8) = 1.89\,\text{m}$

This is a radio wave with wavelength approximately $1.9\,\text{m}$.

---
### IT-2: EM Wave Intensity and Radiation Pressure (with Wave Properties)

**Question:**

A laser produces a beam of wavelength $532\,\text{nm}$ (green) with power $5.0\,\text{mW}$ and beam diameter $2.0\,\text{mm}$. The beam is incident normally on a perfectly reflecting mirror.

(a) Calculate the intensity of the beam.

(b) Calculate the radiation pressure on the mirror.

(c) Calculate the number of photons per second striking the mirror and the momentum transferred per second.

Take $c = 3.00 \times 10^8\,\text{m}\,\text{s}^{-1}$, $h = 6.63 \times 10^{-34}\,\text{J}\,\text{s}$.

**Solution:**

(a) Beam area: $A = \pi r^2 = \pi(1.0 \times 10^{-3})^2 = 3.14 \times 10^{-6}\,\text{m}^2$

Intensity: $I = P/A = 5.0 \times 10^{-3}/(3.14 \times 10^{-6}) = 1592\,\text{W}\,\text{m}^{-2}$

(b) For a perfectly reflecting surface: $P_{\text{rad}} = 2I/c = 2 \times 1592/(3.00 \times 10^8) = 1.061 \times 10^{-5}\,\text{Pa}$

Force on mirror: $F = P_{\text{rad}} \times A = 1.061 \times 10^{-5} \times 3.14 \times 10^{-6} = 3.33 \times 10^{-11}\,\text{N}$

(c) Energy per photon: $E_{\text{photon}} = hc/\lambda = 6.63 \times 10^{-34} \times 3.00 \times 10^8/(532 \times 10^{-9}) = 3.74 \times 10^{-19}\,\text{J}$

Photons per second: $n = P/E_{\text{photon}} = 5.0 \times 10^{-3}/(3.74 \times 10^{-19}) = 1.34 \times 10^{16}\,\text{s}^{-1}$

Momentum per photon: $p = E/c = 3.74 \times 10^{-19}/(3.00 \times 10^8) = 1.25 \times 10^{-27}\,\text{kg}\,\text{m}\,\text{s}^{-1}$

For perfect reflection, momentum transfer per photon $= 2p = 2.50 \times 10^{-27}\,\text{kg}\,\text{m}\,\text{s}^{-1}$

Total momentum transfer per second $= 1.34 \times 10^{16} \times 2.50 \times 10^{-27} = 3.34 \times 10^{-11}\,\text{N}$

This matches the force calculated in part (b) (Newton's second law: force = rate of change of momentum).

---
### IT-3: EM Wave in a Medium (with Refraction)

**Question:**

An EM wave of frequency $5.0 \times 10^{14}\,\text{Hz}$ travels from air into glass of refractive index $n = 1.50$.

(a) Calculate the speed, wavelength, and frequency of the wave in the glass.

(b) Calculate the impedance of the glass and the reflection coefficient at normal incidence.

(c) Calculate the depth of penetration at which the intensity drops to $1/e$ of its value at the surface, assuming the glass has an absorption coefficient $\alpha = 0.50\,\text{m}^{-1}$.

Take $c = 3.00 \times 10^8\,\text{m}\,\text{s}^{-1}$, $Z_0 = 377\,\Omega$ (impedance of free space).

**Solution:**

(a) Frequency is unchanged: $f = 5.0 \times 10^{14}\,\text{Hz}$

Speed in glass: $v = c/n = 3.00 \times 10^8/1.50 = 2.00 \times 10^8\,\text{m}\,\text{s}^{-1}$

Wavelength in glass: $\lambda = v/f = 2.00 \times 10^8/(5.0 \times 10^{14}) = 4.0 \times 10^{-7}\,\text{m} = 400\,\text{nm}$

The wavelength decreases by the factor $n$ while the frequency remains constant.

(b) Impedance of glass: $Z = Z_0/n = 377/1.50 = 251\,\Omega$

Reflection coefficient (amplitude) at normal incidence: $r = \frac{Z_2 - Z_1}{Z_2 + Z_1} = \frac{251 - 377}{251 + 377} = \frac{-126}{628} = -0.201$

Reflectance (intensity): $R = r^2 = 0.0404 = 4.0\%$

About $4\%$ of the light intensity is reflected at the air-glass interface.

(c) Intensity in an absorbing medium: $I = I_0 e^{-\alpha x}$

At $I = I_0/e$: $\alpha x = 1 \Rightarrow x = 1/\alpha = 1/0.50 = 2.0\,\text{m}$

The penetration depth is $2.0\,\text{m}$. For glass with this absorption coefficient, the light penetrates deeply (typical window glass has much lower absorption in the visible range).
