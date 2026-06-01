---
title: CBSE Physics Study Guide
date: 2026-05-31
description: 'Qualifications Physics.Md CBSE Physics Study notes covering key definitions, core concepts, worked examples, and practice questions for effective preparation.'
tags:
  - cbse
  - physics
categories:
  - cbse
slug: physics
---

## Overview

This guide covers the **CBSE Class 11 and 12 Physics** syllabus (NCERT). It is organised by topic with
key concepts, equations, and exam-focused advice.

The CBSE Class 12 Physics board exam carries **70 marks** (theory) + **30 marks** (practical). The theory
paper includes MCQs, very-short-answer (1-mark), short-answer (2-3 marks), and long-answer (5-mark)
questions. Numerical problems carry approximately 15--20 marks.

---

## 1. Mechanics

### 1.1 Laws of Motion

**Newton's Laws:**

1. An object remains at rest or in uniform motion unless acted upon by a net external force.
2. $\vec{F}_{\text{net}} = m\vec{a}$
3. Every action has an equal and opposite reaction.

**Friction.** Static friction: $f_s \leq \mu_s N$. Kinetic friction: $f_k = \mu_k N$.

**Connected body problems.** Draw free-body diagrams for each mass separately. Apply Newton's second
law to each, then use the constraint (common acceleration for connected strings).

### 1.2 Work, Energy, and Power

**Work:** $W = \vec{F} \cdot \vec{d} = Fd\cos\theta$

**Work-energy theorem:** $W_{\text{net}} = \Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$

**Kinetic energy:** $K = \frac{1}{2}mv^2$

**Potential energy (gravity):** $U = mgh$

**Conservation of mechanical energy:** $K + U = \text{constant}$ (when only conservative forces act)

**Power:** $P = \frac{dW}{dt} = \vec{F} \cdot \vec{v}$

### 1.3 Rotational Motion

**Moment of inertia** (key results):

| Body | $I$ (about given axis) |
| --- | --- |
| Thin rod (centre) | $\frac{1}{12}ML^2$ |
| Thin rod (end) | $\frac{1}{3}ML^2$ |
| Solid cylinder/disc | $\frac{1}{2}MR^2$ |
| Hollow cylinder | $MR^2$ |
| Solid sphere | $\frac{2}{5}MR^2$ |
| Hollow sphere | $\frac{2}{3}MR^2$ |

**Parallel axis theorem:** $I = I_{\text{cm}} + Md^2$

**Perpendicular axis theorem** (2D lamina): $I_z = I_x + I_y$

**Torque:** $\vec{\tau} = \vec{r} \times \vec{F}$

**Angular momentum:** $\vec{L} = I\vec{\omega}$; conservation: $\vec{\tau}_{\text{net}} = 0 \Rightarrow \vec{L} = \text{const}$

**Rolling without slipping:** $v = R\omega$

### 1.4 Gravitation

**Newton's law:** $F = \frac{Gm_1 m_2}{r^2}$

**Gravitational field:** $\vec{g} = -\frac{GM}{r^2}\hat{r}$

**Escape velocity:** $v_e = \sqrt{\frac{2GM}{R}}$

**Orbital velocity:** $v_o = \sqrt{\frac{GM}{r}}$

**Kepler's third law:** $T^2 \propto r^3$

### 1.5 Fluid Mechanics

**Bernoulli's equation:** $P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}$

**Continuity equation:** $A_1 v_1 = A_2 v_2$

**Surface tension:** $F = \gamma L$; capillary rise: $h = \frac{2\gamma\cos\theta}{\rho g r}$

---

## 2. Thermodynamics

### 2.1 Thermal Properties

**Linear expansion:** $\Delta L = \alpha L_0 \Delta T$

**Heat transfer mechanisms:**

- **Conduction:** $\frac{dQ}{dt} = -kA\frac{dT}{dx}$
- **Convection:** transfer by fluid motion
- **Radiation:** Stefan-Boltzmann: $P = \sigma A T^4$

**Specific heat capacity:** $Q = mc\Delta T$

**Latent heat:** $Q = mL$ (phase change at constant temperature)

### 2.2 Laws of Thermodynamics

**Zeroth law:** If $A$ is in thermal equilibrium with $B$ and $C$, then $B$ and $C$ are in thermal equilibrium.

**First law:** $\Delta Q = \Delta U + \Delta W$

- $\Delta Q$: heat supplied to the system
- $\Delta U$: change in internal energy
- $\Delta W$: work done by the system; for isobaric process: $W = P\Delta V$

**Second law:**

- **Kelvin-Planck:** No process converts heat entirely into work.
- **Clausius:** Heat cannot flow from cold to hot without external work.

**Thermodynamic processes:**

| Process | $\Delta U$ | $\Delta Q$ | $\Delta W$ |
| --- | --- | --- | --- |
| Isothermal | $0$ | $nRT\ln(V_f/V_i)$ | $nRT\ln(V_f/V_i)$ |
| Adiabatic | $nC_V\Delta T$ | $0$ | $-\Delta U$ |
| Isobaric | $nC_V\Delta T$ | $nC_P\Delta T$ | $P\Delta V$ |
| Isochoric | $nC_V\Delta T$ | $nC_V\Delta T$ | $0$ |

### 2.3 Kinetic Theory of Gases

**Ideal gas equation:** $PV = nRT$

**Root mean square speed:** $v_{\text{rms}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}$

**Mean free path:** $\lambda = \frac{1}{\sqrt{2}\pi d^2 n}$

**Degrees of freedom and specific heats:**

- Monatomic: $f = 3$, $C_V = \frac{3}{2}R$, $C_P = \frac{5}{2}R$, $\gamma = \frac{5}{3}$
- Diatomic: $f = 5$, $C_V = \frac{5}{2}R$, $C_P = \frac{7}{2}R$, $\gamma = \frac{7}{5}$

---

## 3. Electrostatics

### 3.1 Coulomb's Law

$$F = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r^2}$$

where $\dfrac{1}{4\pi\varepsilon_0} = 9 \times 10^9\;\text{N m}^2\text{ C}^{-2}$.

### 3.2 Electric Field and Potential

**Electric field:** $\vec{E} = \frac{\vec{F}}{q}$

**Field due to a point charge:** $\vec{E} = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\hat{r}$

**Electric potential:** $V = \frac{1}{4\pi\varepsilon_0}\frac{q}{r}$

**Relation:** $\vec{E} = -\nabla V$; in one dimension: $E = -\frac{dV}{dx}$

**Gauss's law:** $\oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{enc}}}{\varepsilon_0}$

### 3.3 Capacitance

**Parallel plate capacitor:** $C = \frac{\varepsilon_0 A}{d}$

**With dielectric:** $C = \frac{\varepsilon_0 \kappa A}{d}$ where $\kappa$ is the dielectric constant.

**Energy stored:** $U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV$

**Series:** $\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2}$

**Parallel:** $C_{\text{eq}} = C_1 + C_2$

---

## 4. Current Electricity

### 4.1 Ohm's Law and Resistance

$$V = IR$$

**Resistivity:** $R = \rho\frac{L}{A}$

**Temperature dependence:** $R_T = R_0[1 + \alpha(T - T_0)]$

### 4.2 Kirchhoff's Laws

1. **Junction rule:** $\sum I_{\text{in}} = \sum I_{\text{out}}$ (conservation of charge)
2. **Loop rule:** $\sum V = 0$ around any closed loop (conservation of energy)

### 4.3 Wheatstone Bridge

At balance: $\frac{P}{Q} = \frac{R}{S}$ (galvanometer reads zero current).

### 4.4 Measuring Instruments

**Ammeter:** very low resistance, connected in series.

**Voltmeter:** very high resistance, connected in parallel.

**Conversion:**

- Ammeter from galvanometer: $R_s = \frac{I_g R_g}{I - I_g}$ (shunt resistance)
- Voltmeter from galvanometer: $R = \frac{V}{I_g} - R_g$ (series resistance)

---

## 5. Magnetism and Electromagnetic Induction

### 5.1 Biot-Savart Law

$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I\,d\vec{l} \times \hat{r}}{r^2}$$

**Field due to a long straight wire:** $B = \frac{\mu_0 I}{2\pi r}$

**Field at centre of circular loop:** $B = \frac{\mu_0 I}{2R}$

### 5.2 Ampere's Law

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$$

**Inside a solenoid:** $B = \mu_0 n I$ where $n = N/L$ is the number of turns per unit length.

### 5.3 Electromagnetic Induction

**Faraday's law:** $\mathcal{E} = -\frac{d\Phi_B}{dt}$

**Magnetic flux:** $\Phi_B = \vec{B} \cdot \vec{A} = BA\cos\theta$

**Lenz's law:** The induced emf opposes the change that produces it.

**Self-inductance:** $\mathcal{E} = -L\frac{dI}{dt}$

**Energy stored in inductor:** $U = \frac{1}{2}LI^2$

### 5.4 AC Circuits

**RMS voltage and current:** $V_{\text{rms}} = \frac{V_0}{\sqrt{2}}$; $I_{\text{rms}} = \frac{I_0}{\sqrt{2}}$

**Impedance in series RLC:** $Z = \sqrt{R^2 + (X_L - X_C)^2}$

where $X_L = \omega L$ and $X_C = \frac{1}{\omega C}$.

**Resonance:** $X_L = X_C \Rightarrow \omega_0 = \frac{1}{\sqrt{LC}}$

**Power:** $P = V_{\text{rms}}I_{\text{rms}}\cos\phi$ where $\cos\phi = R/Z$ is the power factor.

---

## 6. Optics

### 6.1 Reflection and Refraction

**Law of reflection:** $\theta_i = \theta_r$

**Snell's law:** $n_1\sin\theta_1 = n_2\sin\theta_2$

**Total internal reflection:** occurs when $\theta_1 > \theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)$ for $n_1 > n_2$.

### 6.2 Lenses and Optical Instruments

**Lens maker's equation:** $\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$

**Thin lens formula:** $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$

**Magnification:** $m = \frac{v}{u}$

**Power of a lens:** $P = \frac{1}{f}$ (in dioptres when $f$ is in metres)

**Magnifying glass:** $M = 1 + \frac{D}{f}$ (at near point)

**Compound microscope:** $M = \frac{v_o}{u_o} \times \frac{D}{u_e}$

**Astronomical telescope:** $M = \frac{f_o}{f_e}$

### 6.3 Wave Optics

**Interference (Young's double slit):**

$$y = \frac{n\lambda D}{d} \quad \text{(bright fringes)} \qquad y = \left(n + \frac{1}{2}\right)\frac{\lambda D}{d} \quad \text{(dark fringes)}$$

**Fringe width:** $\beta = \frac{\lambda D}{d}$

**Diffraction:** Single slit minima at $a\sin\theta = n\lambda$; central maximum width $= 2\beta$.

**Polarisation:** Malus's law: $I = I_0\cos^2\theta$

---

## 7. Modern Physics

### 7.1 Dual Nature of Radiation and Matter

**Photoelectric effect (Einstein's equation):**

$$K_{\max} = h\nu - \phi$$

where $\phi = h\nu_0$ is the work function and $\nu_0$ is the threshold frequency.

**De Broglie wavelength:** $\lambda = \frac{h}{p} = \frac{h}{mv}$

### 7.2 Atoms

**Bohr model:**

- $mvr = \frac{nh}{2\pi}$ (quantised angular momentum)
- $r_n = \frac{n^2 h^2}{4\pi^2 m k Z e^2} = 0.529\frac{n^2}{Z}\;\text{\AA}$ (Bohr radius)
- $E_n = -13.6\frac{Z^2}{n^2}\;\text{eV}$

### 7.3 Nuclei

**Mass-energy equivalence:** $E = \Delta m\, c^2$

**Nuclear binding energy:** the energy equivalent of the mass defect of a nucleus.

**Radioactive decay:** $N = N_0 e^{-\lambda t}$; half-life: $t_{1/2} = \frac{\ln 2}{\lambda}$

**Fission:** heavy nucleus splits, releasing energy (used in nuclear reactors).

**Fusion:** light nuclei combine, releasing energy (powers stars).

### 7.4 Semiconductor Devices

- **Intrinsic semiconductor:** equal electrons and holes; conductivity increases with temperature
- **Extrinsic (n-type):** donor impurities add free electrons
- **Extrinsic (p-type):** acceptor impurities add holes
- **p-n junction:** diode (rectification), LED, photodiode
- **Transistor:** n-p-n or p-n-p; used for amplification and switching
- **Logic gates:** AND, OR, NOT, NAND, NOR

---

## 8. Key Equations

| Topic | Equation |
| --- | --- |
| Newton's second law | $\vec{F} = m\vec{a}$ |
| Kinetic energy | $K = \frac{1}{2}mv^2$ |
| Gravitational force | $F = Gm_1 m_2/r^2$ |
| First law of thermodynamics | $\Delta Q = \Delta U + \Delta W$ |
| Ideal gas law | $PV = nRT$ |
| Coulomb's law | $F = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r^2}$ |
| Ohm's law | $V = IR$ |
| Faraday's law | $\mathcal{E} = -d\Phi_B/dt$ |
| Lens formula | $1/v - 1/u = 1/f$ |
| Photoelectric effect | $K_{\max} = h\nu - \phi$ |
| De Broglie wavelength | $\lambda = h/mv$ |
| Bohr energy levels | $E_n = -13.6\,Z^2/n^2\;\text{eV}$ |
| Radioactive decay | $N = N_0 e^{-\lambda t}$ |

---

## 9. Exam Tips

1. **Draw diagrams for every problem.** Free-body diagrams, circuit diagrams, and ray diagrams earn marks
   and clarify your thinking.
2. **Show dimensional analysis checks.** If you are unsure of a derived formula, substitute SI units
   to verify dimensional consistency.
3. **Use SI units consistently.** Convert everything to metres, kilograms, seconds, amperes, kelvin before
   calculating. Very common source of lost marks.
4. **State assumptions.** In mechanics problems, explicitly note "frictionless surface", "no air
   resistance", etc. This demonstrates understanding.
5. **Memorise standard values.** $g = 9.8\;\text{m/s}^2$, $e = 1.6 \times 10^{-19}\;\text{C}$,
   $c = 3 \times 10^8\;\text{m/s}$, $h = 6.63 \times 10^{-34}\;\text{J s}$.
6. **Practise numericals from NCERT exemplar.** CBSE numericals are typically NCERT-level with minor
   modifications.
7. **Label circuit diagrams clearly.** Show current direction, polarity of cells, and junction points.

---

## Common Pitfalls

1. **Forgetting to convert units.** Using cm instead of m, or grams instead of kg, throws off the
   entire calculation.
2. **Incorrect sign conventions in lenses and mirrors.** Always state your convention (e.g., distances
   measured from the lens/mirror along the incident ray direction are positive).
3. **Mixing up emf and terminal voltage.** Terminal voltage $V = \mathcal{E} - Ir$ for a discharging
   cell; internal resistance $r$ reduces the terminal voltage.
4. **Applying Gauss's law without symmetry.** The law is only directly solvable when the field has
   sufficient symmetry (spherical, cylindrical, or planar).
5. **Ignoring Lenz's law in EMI problems.** The induced current must oppose the change in flux; getting
   the direction wrong loses marks.
6. **Confusing $B$ and $H$ fields.** $B$ is magnetic flux density (tesla), $H = B/\mu_0$ is magnetic
   field strength (A/m). In most CBSE problems, $B$ is what is used.
7. **Writing "heat is lost" instead of specifying the mechanism.** In thermodynamics, distinguish
   between heat transfer by conduction, convection, and radiation.

## Worked Examples

### Example 1: Kirchhoff's Laws Problem
**Problem:** Two cells of emf 2V (internal resistance 0.5 ohm) and 4V (internal resistance 1 ohm) are connected in parallel across a 5 ohm external resistor. Find the current through each cell.
**Solution:** Let I1 flow from the 2V cell and I2 from the 4V cell. By Kirchhoff's junction rule: I1 + I2 = I (current through 5 ohm resistor). Loop equation for 2V cell: 2 - 0.5I1 = 5(I1 + I2). Loop equation for 4V cell: 4 - I2 = 5(I1 + I2). From second equation: 4 - I2 = 5I1 + 5I2 => 4 = 5I1 + 6I2. From first: 2 - 0.5I1 = 5I1 + 5I2 => 2 = 5.5I1 + 5I2. Subtracting: 2 = -0.5I1 + I2 => I2 = 2 + 0.5I1. Substituting into 4 = 5I1 + 6(2 + 0.5I1) = 5I1 + 12 + 3I1 = 8I1 + 12. So 8I1 = -8, I1 = -1A. The 2V cell is being charged. I2 = 2 + 0.5(-1) = 1.5A. Current through 5 ohm: 0.5A.

### Example 2: Young's Double Slit Calculation
**Problem:** Light of wavelength 600 nm passes through double slits separated by 0.1 mm. The screen is 1.5 m away. Find the fringe width.
**Solution:** Fringe width beta = lambda * D / d = (600 x 10^-9)(1.5) / (0.1 x 10^-3) = 9 x 10^-3 m = 9 mm. The bright fringes are 9 mm apart.

### Example 3: Photoelectric Effect
**Problem:** Light of wavelength 400 nm falls on a metal with work function 2.0 eV. Find the maximum kinetic energy of emitted photoelectrons. (h = 6.63 x 10^-34 J s, c = 3 x 10^8 m/s, 1 eV = 1.6 x 10^-19 J)
**Solution:** E_photon = hc/lambda = (6.63 x 10^-34)(3 x 10^8) / (400 x 10^-9) = 4.97 x 10^-19 J = 3.11 eV. K_max = E_photon - phi = 3.11 - 2.0 = 1.11 eV. Since K_max > 0, photoelectrons are emitted.

## Summary

CBSE Physics covers mechanics (Newton's laws, work-energy, rotational motion, gravitation, fluids), thermodynamics (laws, kinetic theory), electrostatics (Coulomb's law, Gauss's law, capacitance), current electricity (Ohm's law, Kirchhoff's laws, Wheatstone bridge), magnetism and electromagnetic induction (Biot-Savart, Faraday's law, AC circuits), optics (reflection, refraction, wave optics), and modern physics (photoelectric effect, atomic structure, nuclear physics, semiconductors). The theory paper is 70 marks and practicals are 30 marks. Key exam strategies include drawing diagrams, using SI units consistently, showing dimensional analysis checks, and practising NCERT exemplar numericals.
