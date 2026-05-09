---
title: "Waves and Sound -- Diagnostic Tests"
description: "Hardest DSE waves questions: standing wave formation, wave speed calculations, longitudinal wave properties, and harmonics identification."
slug: diag-waves-sound
hide_table_of_contents: true
---

# Waves and Sound — Diagnostic Tests

## Unit Tests

### UT-1: Standing Wave with Mixed Boundary Conditions

**Question:**

A string of length $1.2$ m is fixed at both ends. A standing wave is set up on the string. Nodes are observed at $x = 0$, $x = 0.3$ m, $x = 0.6$ m, $x = 0.9$ m, and $x = 1.2$ m. The maximum transverse displacement of the string at an antinode is $4$ mm and the wave speed on the string is $24 \text{ m s}^{-1}$. Find (a) the wavelength, (b) the frequency, (c) which harmonic this is, and (d) the equation of the standing wave.

**Solution:**

**(a) Wavelength:**

Adjacent nodes are separated by $\lambda/2$. The distance between adjacent nodes is $0.3$ m.

$$\frac{\lambda}{2} = 0.3 \text{ m}$$

$$\lambda = 0.6 \text{ m}$$

**(b) Frequency:**

$$f = \frac{v}{\lambda} = \frac{24}{0.6} = 40 \text{ Hz}$$

**(c) Harmonic number:**

Number of loops (half-wavelengths) $= \frac{L}{\lambda/2} = \frac{1.2}{0.3} = 4$

This is the **4th harmonic** (also called the 2nd overtone).

**(d) Equation of the standing wave:**

The standing wave has the form:

$$y(x,t) = 2A \sin\left(\frac{2\pi}{\lambda} x\right) \cos(2\pi f t)$$

The amplitude at the antinode is $2A = 4$ mm, so $A = 2$ mm.

$$y(x,t) = 4 \times 10^{-3} \sin\left(\frac{2\pi}{0.6} x\right) \cos(2\pi \times 40 \times t)$$

$$y(x,t) = 4 \times 10^{-3} \sin\left(\frac{10\pi}{3} x\right) \cos(80\pi t) \text{ m}$$

**Key check:** At $x = 0$, $\sin(0) = 0$ (node). At $x = 0.15$ m, $\sin(\pi/2) = 1$ (antinode). At $x = 0.3$ m, $\sin(\pi) = 0$ (node). All consistent.

---

### UT-2: Sound Intensity and the Inverse Square Law with Decibels

**Question:**

A point source emits sound uniformly in all directions with a power output of $0.01$ W. A listener stands $5$ m from the source. The threshold of hearing is $1 \times 10^{-12} \text{ W m}^{-2}$. Find (a) the intensity at the listener's position, (b) the sound intensity level in decibels, and (c) the distance at which the sound intensity level drops to $40$ dB.

**Solution:**

**(a) Intensity at 5 m:**

The sound spreads over a sphere of radius $r = 5$ m:

$$I = \frac{P}{4\pi r^2} = \frac{0.01}{4\pi(5)^2} = \frac{0.01}{314.16} = 3.183 \times 10^{-5} \text{ W m}^{-2}$$

**(b) Sound intensity level:**

$$\beta = 10 \log_{10}\left(\frac{I}{I_0}\right) = 10 \log_{10}\left(\frac{3.183 \times 10^{-5}}{1 \times 10^{-12}}\right)$$

$$\beta = 10 \log_{10}(3.183 \times 10^{7}) = 10 \times (7 + \log_{10} 3.183)$$

$$\beta = 10 \times (7 + 0.503) = 10 \times 7.503 = 75.0 \text{ dB}$$

**(c) Distance for 40 dB:**

$$40 = 10 \log_{10}\left(\frac{I}{10^{-12}}\right)$$

$$4 = \log_{10}\left(\frac{I}{10^{-12}}\right)$$

$$\frac{I}{10^{-12}} = 10^4$$

$$I = 10^{-8} \text{ W m}^{-2}$$

$$I = \frac{P}{4\pi r^2}$$

$$r = \sqrt{\frac{P}{4\pi I}} = \sqrt{\frac{0.01}{4\pi \times 10^{-8}}} = \sqrt{\frac{0.01}{1.2566 \times 10^{-7}}} = \sqrt{79577} = 282 \text{ m}$$

**Key misconception:** Intensity depends on $1/r^2$, not $1/r$. Doubling the distance reduces intensity by a factor of $4$ (decrease of $6$ dB), not $2$.

---

### UT-3: Beats and Doppler Effect Combined

**Question:**

Two tuning forks, A and B, produce sound of frequencies $256$ Hz and $260$ Hz respectively. Fork A is stationary while fork B is moved toward a stationary observer at $5 \text{ m s}^{-1}$. The speed of sound is $340 \text{ m s}^{-1}$. Find the beat frequency heard by the observer.

**Solution:**

**Apparent frequency of fork B (Doppler effect):**

The source (fork B) moves toward a stationary observer:

$$f' = f \times \frac{v}{v - v_s} = 260 \times \frac{340}{340 - 5} = 260 \times \frac{340}{335} = 260 \times 1.01493 = 263.9 \text{ Hz}$$

**Beat frequency:**

$$f_{\text{beat}} = |f' - f_A| = |263.9 - 256| = 7.9 \text{ Hz}$$

**Key insight:** Without the Doppler shift, the beat frequency would be $|260 - 256| = 4$ Hz. The motion of fork B toward the observer increases its apparent frequency, raising the beat frequency. Students often forget to apply the Doppler effect before calculating beats when sources are moving.

---

## Integration Tests

### IT-1: Open-Closed Pipe Harmonics (with Waves and Optics)

**Question:**

An open-closed pipe (open at one end, closed at the other) has a fundamental frequency of $220$ Hz when the speed of sound is $340 \text{ m s}^{-1}$. Find (a) the length of the pipe, (b) the frequency of the 3rd harmonic, and (c) the next pipe length (open-open) that would have the same fundamental frequency.

**Solution:**

**(a) Length of open-closed pipe:**

For an open-closed pipe, only odd harmonics exist. The fundamental has a node at the closed end and an antinode at the open end, so $L = \lambda/4$.

$$f_1 = \frac{v}{4L}$$

$$220 = \frac{340}{4L}$$

$$L = \frac{340}{880} = 0.3864 \text{ m} = 38.6 \text{ cm}$$

**(b) Frequency of the 3rd harmonic:**

The harmonics of an open-closed pipe are $f_1, 3f_1, 5f_1, \ldots$ (odd multiples only).

The 3rd harmonic: $f_3 = 3f_1 = 3 \times 220 = 660$ Hz.

**Note:** The 2nd harmonic does NOT exist for an open-closed pipe. The next harmonic after the fundamental is the 3rd harmonic.

**(c) Open-open pipe with same fundamental:**

For an open-open pipe: $f_1 = \frac{v}{2L}$

$$220 = \frac{340}{2L}$$

$$L = \frac{340}{440} = 0.7727 \text{ m} = 77.3 \text{ cm}$$

The open-open pipe must be twice as long as the open-closed pipe to produce the same fundamental frequency, because an open-open pipe supports all harmonics ($\lambda/2$ fits in $L$) while an open-closed pipe only supports odd harmonics ($\lambda/4$ fits in $L$).

---

### IT-2: Water Wave Refraction and Diffraction (with Waves and Optics)

**Question:**

Water waves of wavelength $2$ cm travel from deep water (speed $20 \text{ cm s}^{-1}$) into shallow water (speed $12 \text{ cm s}^{-1}$) at an angle of incidence of $30°$. The waves then pass through a gap of width $4$ cm in a barrier. Find (a) the angle of refraction, (b) the wavelength in the shallow water, and (c) whether significant diffraction occurs at the gap.

**Solution:**

**(a) Angle of refraction (Snell's law for waves):**

$$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$$

$$\frac{\sin 30°}{20} = \frac{\sin\theta_2}{12}$$

$$\sin\theta_2 = \frac{12 \times 0.5}{20} = 0.3$$

$$\theta_2 = \sin^{-1}(0.3) = 17.46°$$

**(b) Wavelength in shallow water:**

Frequency remains constant ($f = v/\lambda$):

$$f = \frac{20}{2} = 10 \text{ Hz}$$

$$\lambda_2 = \frac{v_2}{f} = \frac{12}{10} = 1.2 \text{ cm}$$

**(c) Diffraction condition:**

Significant diffraction occurs when the gap width is comparable to the wavelength.

$$\text{Gap width} = 4 \text{ cm}, \quad \lambda = 1.2 \text{ cm}$$

Since $4$ cm is about $3.3$ times the wavelength, there will be **moderate diffraction** but not maximum spreading. Maximum diffraction would occur if the gap width were approximately equal to $\lambda$ (about $1.2$ cm).

**Key insight:** When waves enter shallower water, they slow down, wavelength decreases, frequency stays constant, and the wavefronts bend toward the normal (just like light entering a denser medium).

---

### IT-3: Ultrasound Medical Imaging (with Electricity and Magnetism)

**Question:**

An ultrasound probe emits pulses of frequency $2.0$ MHz into soft tissue. The speed of ultrasound in soft tissue is $1540 \text{ m s}^{-1}$. The pulse travels to a tissue boundary $3$ cm deep, is reflected, and returns to the probe. The probe emits a pulse every $0.1$ ms. Find (a) the wavelength of the ultrasound, (b) the time for the echo to return, (c) the maximum imaging depth before the next pulse is emitted (assuming no overlap is allowed), and (d) the minimum distance between two reflectors that can be resolved (axial resolution), given each pulse has a duration of $3$ cycles.

**Solution:**

**(a) Wavelength:**

$$\lambda = \frac{v}{f} = \frac{1540}{2.0 \times 10^6} = 7.70 \times 10^{-4} \text{ m} = 0.770 \text{ mm}$$

**(b) Echo return time:**

Distance to boundary $= 3$ cm $= 0.03$ m. Total travel distance $= 0.06$ m.

$$t = \frac{d}{v} = \frac{0.06}{1540} = 3.90 \times 10^{-5} \text{ s} = 39.0 \text{ }\mu\text{s}$$

**(c) Maximum imaging depth:**

The round-trip time must not exceed the pulse interval ($0.1$ ms $= 1 \times 10^{-4}$ s):

$$\frac{2d_{\max}}{v} = 1 \times 10^{-4}$$

$$d_{\max} = \frac{1540 \times 1 \times 10^{-4}}{2} = 0.0770 \text{ m} = 7.70 \text{ cm}$$

**(d) Axial resolution:**

Pulse duration $= 3$ cycles $= \frac{3}{f} = \frac{3}{2 \times 10^6} = 1.5 \times 10^{-6}$ s

Spatial length of pulse $= v \times t_{\text{pulse}} = 1540 \times 1.5 \times 10^{-6} = 2.31 \times 10^{-3}$ m $= 2.31$ mm

The axial resolution (minimum distinguishable distance between two reflectors) is half the spatial pulse length:

$$\Delta d_{\min} = \frac{2.31}{2} = 1.16 \text{ mm}$$

**Key insight:** Higher frequency gives better resolution (shorter wavelength) but poorer penetration depth. There is a fundamental trade-off in ultrasound imaging determined by the pulse repetition frequency and the speed of sound in the medium.
