---
title: Superposition and Interference — Diagnostic Tests
description: Diagnostic tests for two-source interference, diffraction gratings, stationary waves, and path difference analysis at maximum A-Level Physics difficulty.
slug: diag-superposition-interference
hide_table_of_contents: true
---

# Superposition and Interference — Diagnostic Tests

## Unit Tests

### UT-1: Two-Source Interference with Microwaves

**Question:**

Two microwave sources $S_1$ and $S_2$ emit coherent waves of wavelength $28\,\text{mm}$ in phase. A detector is moved along a line parallel to the line joining the sources, at a perpendicular distance of $0.80\,\text{m}$. The sources are separated by $140\,\text{mm}$.

(a) Calculate the positions of the first three maxima from the central maximum.

(b) Calculate the fringe spacing.

(c) The source separation is doubled to $280\,\text{mm}$. Calculate the new fringe spacing and comment on the effect on the interference pattern.

**Solution:**

(a) For a maximum: path difference $= n\lambda$, where $n = 0, 1, 2, \ldots$

Using the approximation $d\sin\theta \approx n\lambda$ for small angles:

For $n = 1$: $\sin\theta_1 = \lambda/d = 28/140 = 0.200$, $\theta_1 = 11.5^\circ$

Position from centre: $y_1 = D\tan\theta_1 = 800\tan 11.5^\circ = 800 \times 0.2035 = 163\,\text{mm}$

For $n = 2$: $\sin\theta_2 = 56/140 = 0.400$, $\theta_2 = 23.6^\circ$

$y_2 = 800\tan 23.6^\circ = 800 \times 0.4368 = 349\,\text{mm}$

For $n = 3$: $\sin\theta_3 = 84/140 = 0.600$, $\theta_3 = 36.9^\circ$

$y_3 = 800\tan 36.9^\circ = 800 \times 0.7508 = 601\,\text{mm}$

(b) Fringe spacing (using small angle approximation): $\Delta y \approx \lambda D/d = 28 \times 800/140 = 160\,\text{mm}$

From exact calculation: $y_1 = 163\,\text{mm}$, $y_2 - y_1 = 349 - 163 = 186\,\text{mm}$. The approximation becomes less accurate at larger angles.

(c) New fringe spacing: $\Delta y' = 28 \times 800/280 = 80\,\text{mm}$

Doubling the source separation halves the fringe spacing, making the fringes closer together. This provides finer resolution but makes the pattern harder to observe.

---
### UT-2: Diffraction Grating with White Light

**Question:**

A diffraction grating has $500$ lines per mm. It is illuminated with white light at normal incidence.

(a) Calculate the angles of the first two orders for blue light ($\lambda = 450\,\text{nm}$) and red light ($\lambda = 700\,\text{nm}$).

(b) Calculate the angular width of the first-order spectrum.

(c) Determine whether the second-order spectrum overlaps with the first-order spectrum.

**Solution:**

(a) Grating spacing: $d = 1/500 = 2.0 \times 10^{-3}\,\text{mm} = 2.0 \times 10^{-6}\,\text{m}$

Grating equation: $d\sin\theta = n\lambda$

**Blue light ($450\,\text{nm}$):**

$n = 1$: $\sin\theta = 450 \times 10^{-9}/(2.0 \times 10^{-6}) = 0.225$, $\theta = 13.0^\circ$

$n = 2$: $\sin\theta = 900 \times 10^{-9}/(2.0 \times 10^{-6}) = 0.450$, $\theta = 26.7^\circ$

**Red light ($700\,\text{nm}$):**

$n = 1$: $\sin\theta = 700 \times 10^{-9}/(2.0 \times 10^{-6}) = 0.350$, $\theta = 20.5^\circ$

$n = 2$: $\sin\theta = 1400 \times 10^{-9}/(2.0 \times 10^{-6}) = 0.700$, $\theta = 44.4^\circ$

(b) Angular width of first-order spectrum $= 20.5^\circ - 13.0^\circ = 7.5^\circ$

(c) The second-order blue ($26.7^\circ$) must be compared with the first-order red ($20.5^\circ$).

Since $26.7^\circ \gt 20.5^\circ$, the second-order blue light is at a larger angle than the first-order red light. This means the second-order spectrum **does overlap** with the first order. In practice, for gratings, this overlap occurs between the short-wavelength end of order $n + 1$ and the long-wavelength end of order $n$.

To find the overlap region: we need $\theta_{2,\text{blue}} \gt \theta_{1,\text{red}}$, which is $26.7^\circ \gt 20.5^\circ$. Confirmed.

---
### UT-3: Stationary Wave in a Closed Pipe

**Question:**

A closed pipe (closed at one end, open at the other) has a fundamental frequency of $220\,\text{Hz}$ when the speed of sound is $340\,\text{m}\,\text{s}^{-1}$.

(a) Calculate the length of the pipe.

(b) Calculate the frequency of the next two harmonics and explain why only odd harmonics are present.

(c) The pipe is opened at both ends. Calculate the new fundamental frequency.

**Solution:**

(a) For a closed pipe, the fundamental has a node at the closed end and an antinode at the open end. The effective length is $L = \lambda/4$.

$$f_1 = \frac{v}{4L} \Rightarrow L = \frac{v}{4f_1} = \frac{340}{4 \times 220} = \frac{340}{880} = 0.386\,\text{m}$$

(b) For a closed pipe, only odd harmonics exist: $f_n = n \times f_1$ where $n = 1, 3, 5, \ldots$

$f_1 = 220\,\text{Hz}$ (fundamental)

$f_3 = 3 \times 220 = 660\,\text{Hz}$ (third harmonic, first overtone)

$f_5 = 5 \times 220 = 1100\,\text{Hz}$ (fifth harmonic, second overtone)

Only odd harmonics exist because even harmonics would require an antinode at the closed end, which violates the boundary condition (displacement node at a closed end, displacement antinode at an open end).

(c) For an open pipe (both ends open): $f_1' = v/(2L) = 340/(2 \times 0.386) = 340/0.773 = 440\,\text{Hz}$

The fundamental frequency doubles when the pipe is opened at both ends, because the wavelength halves (from $4L$ to $2L$).

## Integration Tests

### IT-1: Double Slit with Glass Block (with Refraction)

**Question:**

In Young's double-slit experiment, the slit separation is $0.50\,\text{mm}$ and the screen is $1.20\,\text{m}$ away. Light of wavelength $600\,\text{nm}$ is used. A thin glass slab of thickness $t = 0.10\,\text{mm}$ and refractive index $n = 1.50$ is placed in front of one slit.

(a) Calculate the fringe spacing without the glass slab.

(b) Calculate the optical path difference introduced by the glass slab.

(c) Calculate the shift of the central maximum on the screen.

**Solution:**

(a) Fringe spacing: $\Delta y = \lambda D/d = 600 \times 10^{-9} \times 1.20/(0.50 \times 10^{-3}) = 1.44 \times 10^{-3}\,\text{m} = 1.44\,\text{mm}$

(b) The glass slab adds optical path length: the light travels a distance $t$ through glass (optical path $nt$) instead of air (optical path $t$). The additional optical path is:

$$\Delta = (n - 1)t = (1.50 - 1) \times 0.10 \times 10^{-3} = 0.050 \times 10^{-3} = 5.0 \times 10^{-5}\,\text{m}$$

This is equivalent to $5.0 \times 10^{-5}/(600 \times 10^{-9}) = 83.3$ wavelengths.

(c) The central maximum shifts to compensate for this optical path difference. The central maximum now occurs where the path difference from the two slits equals the optical path difference introduced by the glass:

$$\frac{d \times y_{\text{shift}}}{D} = (n-1)t$$
$$y_{\text{shift}} = \frac{(n-1)tD}{d} = \frac{5.0 \times 10^{-5} \times 1.20}{0.50 \times 10^{-3}} = \frac{6.0 \times 10^{-5}}{5.0 \times 10^{-4}} = 0.120\,\text{m} = 120\,\text{mm}$$

The central maximum shifts by $120\,\text{mm}$ towards the slit with the glass (since the light through the glass is delayed, the central maximum moves to make the path through air longer to compensate).

In terms of fringe spacings: $120/1.44 = 83.3$ fringes. The entire pattern shifts by $83.3$ fringes.

---
### IT-2: Diffraction Grating Resolution (with Wave Properties)

**Question:**

A diffraction grating has $6000$ lines per cm and is $4.0\,\text{cm}$ wide. It is used to resolve the sodium doublet at wavelengths $589.0\,\text{nm}$ and $589.6\,\text{nm}$ in the first order.

(a) Calculate the resolving power of the grating.

(b) Determine whether the grating can resolve the sodium doublet in the first order.

(c) Calculate the minimum number of lines required to resolve the sodium doublet in the second order.

**Solution:**

(a) Resolving power: $R = nN$, where $N$ is the total number of lines.

$N = 6000 \times 4.0 = 24000$ lines

$R = 1 \times 24000 = 24000$

(b) The resolving power needed: $R = \lambda/\Delta\lambda = 589.0/0.6 = 982$

Since $R = 24000 \gg 982$, the grating can easily resolve the sodium doublet in the first order.

(c) For the second order, $R = 2N \ge 982$, so $N \ge 491$ lines.

The minimum width of grating needed: $491/6000 = 0.082\,\text{cm} = 0.82\,\text{mm}$.

This demonstrates that even a very small grating can resolve the sodium doublet, which is why it is a standard test of optical instruments.

---
### IT-3: Interference from Thin Films (with Refraction)

**Question:**

A thin film of oil ($n = 1.45$) floats on water ($n = 1.33$). White light is incident normally on the film.

(a) Explain why a phase change of $\pi$ occurs at one interface but not the other.

(b) For a film of thickness $300\,\text{nm}$, calculate the wavelength of light in the visible spectrum ($400$--$700\,\text{nm}$) that is most strongly reflected.

(c) Calculate the minimum thickness of the film for which reflected light of wavelength $550\,\text{nm}$ is minimised (destructive interference).

**Solution:**

(a) When light reflects from a boundary going from a lower to a higher refractive index medium, it undergoes a phase change of $\pi$ (equivalent to a path change of $\lambda/2$). Going from higher to lower index, no phase change occurs.

At the air-oil interface: light goes from $n = 1.0$ to $n = 1.45$ -- phase change of $\pi$.

At the oil-water interface: light goes from $n = 1.45$ to $n = 1.33$ -- no phase change.

The net phase difference from reflections is $\pi$.

(b) For constructive interference (strong reflection), the path difference must be $(m + 1/2)\lambda_{\text{film}}$ (accounting for the $\pi$ phase change):

$$2nt = (m + 1/2)\lambda$$

For the film: $2 \times 1.45 \times 300 \times 10^{-9} = (m + 1/2)\lambda$

$$870\,\text{nm} = (m + 1/2)\lambda$$

For $m = 0$: $\lambda = 1740\,\text{nm}$ (infrared, not visible)

For $m = 1$: $\lambda = 580\,\text{nm}$ (yellow, visible)

For $m = 2$: $\lambda = 348\,\text{nm}$ (ultraviolet)

The most strongly reflected visible wavelength is $\lambda = 580\,\text{nm}$ (yellow).

(c) For destructive interference of $550\,\text{nm}$:

$$2nt = m\lambda$$ (path difference must be an integer number of wavelengths, since the $\pi$ phase change already provides the half-wavelength)

For minimum thickness ($m = 1$):

$$t = \frac{\lambda}{2n} = \frac{550}{2 \times 1.45} = \frac{550}{2.90} = 190\,\text{nm}$$

This is the minimum non-zero thickness for destructive reflection of $550\,\text{nm}$ light.
