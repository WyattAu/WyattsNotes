---
title: Wave Properties -- Diagnostic Tests
description: Hardest IB Physics wave properties diagnostic tests covering intensity-amplitude relationship, EM spectrum wave speed, string wave speed derivation, and polarisation misconceptions.
slug: diag-wave-properties
hide_table_of_contents: true
---

# Wave Properties — Diagnostic Tests

## Unit Tests

### UT-1: Intensity and Amplitude Squared Relationship

**Question:**

A point source emits spherical waves in a uniform medium. At a distance of $2.0\,\text{m}$ from the source, the wave intensity is $I_1 = 8.0 \times 10^{-3}\,\text{W}\,\text{m}^{-2}$ and the amplitude is $A_1$.

(a) Calculate the intensity at a distance of $5.0\,\text{m}$ from the source.

(b) Calculate the ratio $A_2/A_1$ where $A_2$ is the amplitude at $5.0\,\text{m}$.

(c) A second identical source is placed at the same location (coherent and in phase). Calculate the new intensity and amplitude at $5.0\,\text{m}$.

**Solution:**

(a) For a point source, intensity follows the inverse square law:

$$I \propto \frac{1}{r^2}$$

$$\frac{I_2}{I_1} = \frac{r_1^2}{r_2^2} = \frac{4.0}{25.0}$$

$$I_2 = 8.0 \times 10^{-3} \times \frac{4.0}{25.0} = 1.28 \times 10^{-3}\,\text{W}\,\text{m}^{-2}$$

(b) Intensity is proportional to amplitude squared: $I \propto A^2$.

$$\frac{A_2}{A_1} = \sqrt{\frac{I_2}{I_1}} = \sqrt{\frac{4.0}{25.0}} = \frac{2.0}{5.0} = 0.40$$

The amplitude at $5.0\,\text{m}$ is $0.40$ times the amplitude at $2.0\,\text{m}$.

(c) With two coherent in-phase sources at the same location, the amplitudes add constructively: $A_{\text{total}} = 2A_2$.

New intensity: $I_{\text{new}} \propto (2A_2)^2 = 4A_2^2 \propto 4I_2$

$$I_{\text{new}} = 4 \times 1.28 \times 10^{-3} = 5.12 \times 10^{-3}\,\text{W}\,\text{m}^{-2}$$

The amplitude doubles and the intensity quadruples, because intensity is proportional to the square of the amplitude.

---

### UT-2: Wave Speed on a String — Dependence on Tension and Mass Per Unit Length

**Question:**

A string of length $1.5\,\text{m}$ and mass $12\,\text{g}$ is fixed at both ends and stretched to a tension of $80\,\text{N}$.

(a) Calculate the speed of transverse waves on the string.

(b) Calculate the fundamental frequency and the frequency of the third harmonic.

(c) The tension is increased by $44\%$. A student claims the fundamental frequency increases by $44\%$. Determine whether this is correct and calculate the actual percentage increase.

**Solution:**

(a) Mass per unit length: $\mu = \frac{m}{L} = \frac{0.012}{1.5} = 0.008\,\text{kg}\,\text{m}^{-1}$

Wave speed: $v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{80}{0.008}} = \sqrt{10000} = 100\,\text{m}\,\text{s}^{-1}$

(b) Fundamental frequency: $f_1 = \frac{v}{2L} = \frac{100}{2 \times 1.5} = \frac{100}{3.0} = 33.3\,\text{Hz}$

Third harmonic: $f_3 = 3f_1 = 100\,\text{Hz}$

(c) New tension: $T' = 1.44 \times 80 = 115.2\,\text{N}$

New wave speed: $v' = \sqrt{\frac{115.2}{0.008}} = \sqrt{14400} = 120\,\text{m}\,\text{s}^{-1}$

New fundamental frequency: $f_1' = \frac{120}{3.0} = 40.0\,\text{Hz}$

Percentage increase: $\frac{40.0 - 33.3}{33.3} \times 100 = 20.1\%$

The student is wrong. Since $f \propto v \propto \sqrt{T}$, a $44\%$ increase in tension produces only a $\sqrt{1.44} - 1 = 1.20 - 1 = 20\%$ increase in frequency.

---

### UT-3: Electromagnetic Waves — Speed in Vacuum vs Medium

**Question:**

A monochromatic light source emits light of wavelength $550\,\text{nm}$ in vacuum. The light enters a glass block of refractive index $n = 1.50$.

(a) Calculate the speed, wavelength, and frequency of the light inside the glass.

(b) A student states that "the frequency decreases inside the glass because the wave slows down." Explain why this statement is wrong.

(c) The light exits the glass back into vacuum. A second student claims "the wavelength is permanently changed by passing through the glass." Explain why this is also wrong.

**Solution:**

(a) **Speed in glass:** $v = c/n = 3.0 \times 10^8 / 1.50 = 2.0 \times 10^8\,\text{m}\,\text{s}^{-1}$

**Frequency is unchanged** (frequency is determined by the source and is constant across all media):

$$f = \frac{c}{\lambda_0} = \frac{3.0 \times 10^8}{550 \times 10^{-9}} = 5.45 \times 10^{14}\,\text{Hz}$$

**Wavelength in glass:** $\lambda = v/f = \lambda_0/n = 550/1.50 = 367\,\text{nm}$

(b) The frequency does NOT change when light enters a medium. The frequency is set by the source and remains constant. The wave equation $v = f\lambda$ shows that since $v$ decreases and $f$ stays the same, it is the **wavelength** that decreases. The student confused wavelength with frequency.

(c) When light exits the glass back into vacuum, the wavelength returns to its original value of $550\,\text{nm}$. The wavelength change is a property of the medium, not a permanent change to the light. The speed, wavelength, and direction of propagation all change in the medium, but the frequency is invariant. Upon exiting, the wave simply returns to its vacuum characteristics.

## Integration Tests

### IT-1: Intensity and Sound Level with Multiple Sources (with Energy)

**Question:**

Two identical loudspeakers emit sound waves of frequency $440\,\text{Hz}$ in phase. Speaker $A$ is $3.0\,\text{m}$ from a point $P$ and speaker $B$ is $3.5\,\text{m}$ from $P$. The power output of each speaker is $0.010\,\text{W}$. The speed of sound is $340\,\text{m}\,\text{s}^{-1}$.

(a) Determine whether constructive or destructive interference occurs at $P$.

(b) Calculate the sound intensity level (in dB) at $P$ due to both speakers combined.

(c) Explain how your answer to (b) would change if one speaker were disconnected.

**Solution:**

(a) Path difference: $\Delta x = 3.5 - 3.0 = 0.5\,\text{m}$

Wavelength: $\lambda = v/f = 340/440 = 0.773\,\text{m}$

Path difference in wavelengths: $\Delta x/\lambda = 0.5/0.773 = 0.647$

Since this is not close to a whole number or half-integer, the interference is **neither fully constructive nor fully destructive**. The phase difference is $\phi = 2\pi \times 0.647 = 4.06\,\text{rad} = 233^\circ$.

(b) Intensity from each speaker (assuming spherical spreading):

$$I_A = \frac{P}{4\pi r_A^2} = \frac{0.010}{4\pi \times 9.0} = 8.84 \times 10^{-5}\,\text{W}\,\text{m}^{-2}$$

$$I_B = \frac{P}{4\pi r_B^2} = \frac{0.010}{4\pi \times 12.25} = 6.50 \times 10^{-5}\,\text{W}\,\text{m}^{-2}$$

The amplitudes at $P$ differ because the distances differ. The combined intensity requires the superposition of waves with different amplitudes and a phase difference.

$$I_{\text{total}} = I_A + I_B + 2\sqrt{I_A I_B}\cos\phi$$

$$I_{\text{total}} = 8.84 \times 10^{-5} + 6.50 \times 10^{-5} + 2\sqrt{8.84 \times 6.50} \times 10^{-5} \times \cos(233^\circ)$$

$$= 15.34 \times 10^{-5} + 2 \times 7.58 \times 10^{-5} \times (-0.602)$$

$$= 15.34 \times 10^{-5} - 9.13 \times 10^{-5} = 6.21 \times 10^{-5}\,\text{W}\,\text{m}^{-2}$$

Sound intensity level: $\beta = 10\log_{10}(I/I_0)$ where $I_0 = 10^{-12}\,\text{W}\,\text{m}^{-2}$:

$$\beta = 10\log_{10}\!\left(\frac{6.21 \times 10^{-5}}{10^{-12}}\right) = 10\log_{10}(6.21 \times 10^7) = 10 \times 7.793 = 77.9\,\text{dB}$$

(c) With one speaker disconnected, only one speaker contributes. Taking speaker $A$:

$$\beta_A = 10\log_{10}\!\left(\frac{8.84 \times 10^{-5}}{10^{-12}}\right) = 10\log_{10}(8.84 \times 10^7) = 10 \times 7.946 = 79.5\,\text{dB}$$

Surprisingly, removing one speaker **increases** the sound level at $P$ from $77.9\,\text{dB}$ to $79.5\,\text{dB}$. This is because the two speakers partially destructively interfere at $P$ (phase difference of $233^\circ$), so removing one eliminates the destructive effect. This demonstrates that adding a source does not always increase the intensity at a given point.

---

### IT-2: Standing Waves and Resonance in Air Columns (with SHM)

**Question:**

A closed pipe (closed at one end, open at the other) has length $0.85\,\text{m}$. A tuning fork of frequency $512\,\text{Hz}$ is held near the open end. The speed of sound in air is $340\,\text{m}\,\text{s}^{-1}$.

(a) Determine whether the tuning fork can cause resonance in the pipe, and if so, which harmonic.

(b) Calculate the position of the nearest displacement node to the open end of the pipe when resonance occurs.

(c) The temperature increases so that the speed of sound becomes $350\,\text{m}\,\text{s}^{-1}$. Calculate the new resonant frequencies for the first three harmonics.

**Solution:**

(a) Wavelength of the tuning fork: $\lambda = v/f = 340/512 = 0.664\,\text{m}$

For a closed pipe, resonant wavelengths satisfy: $L = (2n - 1)\lambda/4$ for $n = 1, 2, 3, \ldots$

Checking for $n = 1$: $\lambda_1 = 4L = 3.40\,\text{m}$, $f_1 = 100\,\text{Hz}$

$n = 2$: $\lambda_2 = 4L/3 = 1.133\,\text{m}$, $f_2 = 300\,\text{Hz}$

$n = 3$: $\lambda_3 = 4L/5 = 0.680\,\text{m}$, $f_3 = 500\,\text{Hz}$

$n = 4$: $\lambda_4 = 4L/7 = 0.486\,\text{m}$, $f_4 = 700\,\text{Hz}$

The tuning fork frequency $512\,\text{Hz}$ is close to $f_3 = 500\,\text{Hz}$ but not exactly equal. For resonance, the frequency must match exactly. So the tuning fork does **not** cause exact resonance.

However, if we check more carefully: the wavelength for resonance at $512\,\text{Hz}$ would need $L = (2n-1)\lambda/4 = (2n-1) \times 340/(4 \times 512) = (2n-1) \times 0.1658\,\text{m}$.

For $n = 3$: $L = 5 \times 0.1658 = 0.829\,\text{m} \neq 0.85\,\text{m}$

So no exact resonance occurs. The pipe is slightly too long for the third harmonic at this frequency.

(b) Since there is no exact resonance, the displacement pattern is not a pure standing wave. However, the nearest displacement node to the open end for the $n = 3$ mode would be at a distance $\lambda/2 = 0.332\,\text{m}$ from the open end (approximately, since the resonance is not exact).

(c) New resonant frequencies for a closed pipe of length $0.85\,\text{m}$ with $v = 350\,\text{m}\,\text{s}^{-1}$:

$$f_n = \frac{(2n - 1)v}{4L} = \frac{(2n - 1) \times 350}{3.4} = (2n - 1) \times 102.9\,\text{Hz}$$

- $n = 1$: $f_1 = 102.9\,\text{Hz}$
- $n = 2$: $f_2 = 308.8\,\text{Hz}$
- $n = 3$: $f_3 = 514.7\,\text{Hz}$

The third harmonic at $514.7\,\text{Hz}$ is now very close to the tuning fork frequency of $512\,\text{Hz}$, and near-resonance would occur.

---

### IT-3: Polarisation and Malus's Law (with Energy)

**Question:**

Unpolarised light of intensity $I_0$ is incident on a system of three polarising filters. The first has its transmission axis vertical. The second is rotated $45^\circ$ from the vertical. The third is horizontal.

(a) Calculate the intensity of light emerging from the third filter.

(b) A student removes the middle filter. Calculate the new intensity and explain the result.

(c) Explain why the middle filter is essential for light to pass through all three, and discuss what this demonstrates about the nature of polarisation.

**Solution:**

(a) **After the first filter (vertical):** The unpolarised light is polarised vertically. Intensity is halved:

$$I_1 = \frac{I_0}{2}$$

**After the second filter ($45^\circ$ from vertical):** Applying Malus's law:

$$I_2 = I_1\cos^2 45^\circ = \frac{I_0}{2} \times \frac{1}{2} = \frac{I_0}{4}$$

**After the third filter (horizontal, $90^\circ$ from vertical, $45^\circ$ from second filter's axis):**

$$I_3 = I_2\cos^2 45^\circ = \frac{I_0}{4} \times \frac{1}{2} = \frac{I_0}{8}$$

(b) **Without the middle filter:** The first filter polarises vertically, the third filter is horizontal ($90^\circ$ difference):

$$I = \frac{I_0}{2}\cos^2 90^\circ = 0$$

No light passes through. The result is counterintuitive: removing a filter **reduces** the transmitted intensity from $I_0/8$ to zero.

(c) The middle filter is essential because it rotates the plane of polarisation by $45^\circ$, creating a non-zero component along the horizontal axis of the third filter. Without it, the vertically polarised light has zero component along the horizontal transmission axis.

This demonstrates that:
- Polarisation is a vector property of the electric field
- The electric field component along the transmission axis is what passes through
- Filters do not simply "block" light; they project the electric field onto their transmission axis
- Intermediate rotations allow transmission through crossed polarisers, which is the principle behind liquid crystal displays and optical activity measurements
