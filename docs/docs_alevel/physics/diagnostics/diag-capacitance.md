---
title: "Capacitance -- Diagnostic Tests"
description: Diagnostic tests for parallel plate capacitors, energy storage, RC circuit charging and discharging, and time constants at maximum A-Level Physics difficulty.
slug: diag-capacitance
hide_table_of_contents: true
---

# Capacitance — Diagnostic Tests

## Unit Tests

### UT-1: Parallel Plate Capacitor with Dielectric

**Question:**

A parallel plate capacitor consists of two square plates of side $0.10\,\text{m}$ separated by $2.0\,\text{mm}$ in vacuum. A dielectric of relative permittivity $\varepsilon_r = 4.5$ and thickness $1.0\,\text{mm}$ is inserted between the plates, leaving a $0.5\,\text{mm}$ air gap on each side.

(a) Calculate the capacitance.

(b) The capacitor is charged to $200\,\text{V}$ with the dielectric in place. The dielectric is then carefully removed without discharging the capacitor. Calculate the new voltage across the capacitor.

(c) Calculate the energy stored before and after removing the dielectric. Account for any difference.

Take $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{F}\,\text{m}^{-1}$.

**Solution:**

(a) The system consists of three capacitors in series: air ($0.5\,\text{mm}$), dielectric ($1.0\,\text{mm}$), air ($0.5\,\text{mm}$).

Plate area: $A = (0.10)^2 = 0.010\,\text{m}^2$

$C_{\text{air}} = \frac{\varepsilon_0 A}{d_{\text{air}}} = \frac{8.85 \times 10^{-12} \times 0.010}{0.5 \times 10^{-3}} = 1.77 \times 10^{-10}\,\text{F} = 177\,\text{pF}$

$C_{\text{dielectric}} = \frac{\varepsilon_0 \varepsilon_r A}{d_{\text{diel}}} = \frac{8.85 \times 10^{-12} \times 4.5 \times 0.010}{1.0 \times 10^{-3}} = 3.983 \times 10^{-10}\,\text{F} = 398\,\text{pF}$

For two air gaps in series: $\frac{1}{C_{\text{air,total}}} = \frac{1}{177} + \frac{1}{177} = \frac{2}{177} \Rightarrow C_{\text{air,total}} = 88.5\,\text{pF}$

Total capacitance: $\frac{1}{C} = \frac{1}{88.5} + \frac{1}{398} = 0.01130 + 0.002513 = 0.01381\,\text{pF}^{-1}$

$$C = 72.4\,\text{pF}$$

(b) Charge is conserved: $Q = CV = 72.4 \times 10^{-12} \times 200 = 1.448 \times 10^{-8}\,\text{C}$

After removing the dielectric, the capacitor is entirely air-filled:

$$C' = \frac{\varepsilon_0 A}{d} = \frac{8.85 \times 10^{-12} \times 0.010}{2.0 \times 10^{-3}} = 4.425 \times 10^{-11}\,\text{F} = 44.3\,\text{pF}$$

New voltage: $V' = Q/C' = 1.448 \times 10^{-8}/(4.425 \times 10^{-11}) = 327\,\text{V}$

(c) Energy before: $E = \frac{1}{2}CV^2 = 0.5 \times 72.4 \times 10^{-12} \times 40000 = 1.448 \times 10^{-6}\,\text{J} = 1.45\,\mu\text{J}$

Energy after: $E' = \frac{1}{2}C'V'^2 = 0.5 \times 44.3 \times 10^{-12} \times 327^2 = 0.5 \times 44.3 \times 10^{-12} \times 106929 = 2.369 \times 10^{-6}\,\text{J} = 2.37\,\mu\text{J}$

The energy increased by $0.92\,\mu\text{J}$. This extra energy came from the work done against the electric field in removing the dielectric (the dielectric is attracted into the capacitor, so removing it requires work).

---
### UT-2: Energy Stored in a Capacitor — Three Formulae

**Question:**

A capacitor of capacitance $C = 100\,\mu\text{F}$ is charged from a $12\,\text{V}$ battery through a resistor.

(a) Calculate the energy stored on the capacitor using each of the three formulae: $\frac{1}{2}CV^2$, $\frac{1}{2}QV$, and $\frac{Q^2}{2C}$.

(b) Calculate the total energy supplied by the battery during charging.

(c) Calculate the energy dissipated in the resistor and express it as a percentage of the battery's output.

**Solution:**

(a) Final charge: $Q = CV = 100 \times 10^{-6} \times 12 = 1.2 \times 10^{-3}\,\text{C}$

Using $\frac{1}{2}CV^2$: $E = 0.5 \times 100 \times 10^{-6} \times 144 = 7.20 \times 10^{-3}\,\text{J} = 7.20\,\text{mJ}$

Using $\frac{1}{2}QV$: $E = 0.5 \times 1.2 \times 10^{-3} \times 12 = 7.20\,\text{mJ}$

Using $\frac{Q^2}{2C}$: $E = (1.2 \times 10^{-3})^2/(2 \times 100 \times 10^{-6}) = 1.44 \times 10^{-6}/(2 \times 10^{-4}) = 7.20\,\text{mJ}$

All three give the same result, as expected. The three formulae are equivalent since $Q = CV$.

(b) The battery supplies charge $Q$ at constant voltage $V$:

$$E_{\text{battery}} = QV = 1.2 \times 10^{-3} \times 12 = 14.4 \times 10^{-3}\,\text{J} = 14.4\,\text{mJ}$$

(c) Energy dissipated in the resistor $= E_{\text{battery}} - E_{\text{capacitor}} = 14.4 - 7.2 = 7.2\,\text{mJ}$

Percentage $= 7.2/14.4 \times 100 = 50\%$

Exactly half the energy supplied by the battery is stored on the capacitor, and half is dissipated as heat in the resistor. This is a general result for RC charging: regardless of the value of $R$, exactly half the energy is always lost.

---
### UT-3: RC Discharge Through a Changing Resistance

**Question:**

A capacitor of capacitance $C = 470\,\mu\text{F}$ is charged to $20\,\text{V}$. It is then discharged through a resistor $R = 100\,\text{k}\Omega$.

(a) Calculate the time constant and the time for the voltage to fall to $5.0\,\text{V}$.

(b) Calculate the current at $t = 0$ and at $t = 2\tau$.

(c) Calculate the charge remaining on the capacitor at $t = 3\tau$.

**Solution:**

(a) Time constant: $\tau = RC = 100 \times 10^3 \times 470 \times 10^{-6} = 47.0\,\text{s}$

Voltage during discharge: $V = V_0 e^{-t/\tau}$

$$5.0 = 20 \times e^{-t/47}$$
$$e^{-t/47} = 0.25$$
$$-t/47 = \ln(0.25) = -1.386$$
$$t = 1.386 \times 47 = 65.2\,\text{s}$$

(b) At $t = 0$: $I_0 = V_0/R = 20/(100 \times 10^3) = 2.0 \times 10^{-4}\,\text{A} = 0.20\,\text{mA}$

At $t = 2\tau = 94\,\text{s}$: $I = I_0 e^{-2} = 0.20 \times e^{-2} = 0.20 \times 0.1353 = 0.0271\,\text{mA}$

(c) At $t = 3\tau = 141\,\text{s}$:

$$Q = Q_0 e^{-3} = CV_0 e^{-3} = 470 \times 10^{-6} \times 20 \times 0.0498 = 4.68 \times 10^{-4}\,\text{C}$$

After $3\tau$, only $4.98\%$ of the original charge remains. After $5\tau$, less than $1\%$ remains.

## Integration Tests

### IT-1: RC Circuit Driving an Oscilloscope (with Oscillations)

**Question:**

An RC circuit with $R = 10\,\text{k}\Omega$ and $C = 100\,\text{nF}$ is driven by a square wave voltage source that alternates between $0\,\text{V}$ and $5.0\,\text{V}$ with frequency $f$.

(a) Calculate the time constant. For what frequency would the capacitor voltage just reach $63\%$ of the supply voltage during each half-cycle?

(b) If the driving frequency is $1.0\,\text{kHz}$, sketch the voltage across the capacitor over two complete cycles.

(c) Explain how this circuit can be used to convert a square wave into an approximate triangular wave.

**Solution:**

(a) $\tau = RC = 10 \times 10^3 \times 100 \times 10^{-9} = 1.0 \times 10^{-3}\,\text{s} = 1.0\,\text{ms}$

For the capacitor to reach $63\%$ during one half-cycle: $\tau = T/2 = 1/(2f)$

$$f = \frac{1}{2\tau} = \frac{1}{2 \times 10^{-3}} = 500\,\text{Hz}$$

(b) At $f = 1.0\,\text{kHz}$, the period is $T = 1.0\,\text{ms}$ and the half-cycle is $0.50\,\text{ms}$.

Since $\tau = 1.0\,\text{ms}$ and the half-cycle is $0.5\tau$, the capacitor charges to only:

$$V_C = V_0(1 - e^{-0.5}) = 5.0(1 - 0.6065) = 5.0 \times 0.3935 = 1.97\,\text{V}$$

The voltage across the capacitor rises exponentially to $1.97\,\text{V}$ during each half-cycle, then decays back. The waveform is a series of exponential rises and falls that do not reach the full supply voltage.

(c) When the time constant is much longer than the half-period of the square wave ($\tau \gg T/2$), the capacitor only charges (or discharges) through a small fraction of its range during each half-cycle. Over this small range, the exponential curve is approximately linear, so the voltage across the capacitor approximates a triangular wave. The amplitude of the triangular wave is approximately $V_0 T/(2\tau)$ for $\tau \gg T/2$.

For example, with $\tau = 10T/2 = 5T$, the capacitor charges to only $V_0(1 - e^{-0.2}) \approx 0.18V_0$ during each half-cycle, and this portion of the exponential is nearly linear.

---
### IT-2: Capacitor Microphone (with Wave Properties)

**Question:**

A capacitor microphone consists of two parallel plates, one fixed and one flexible (diaphragm), separated by $20\,\mu\text{m}$. Each plate has area $2.0 \times 10^{-3}\,\text{m}^2$. The capacitor is connected in series with a $10\,\text{M}\Omega$ resistor and a $200\,\text{V}$ DC supply.

(a) Calculate the capacitance at rest.

(b) A sound wave causes the diaphragm to oscillate with amplitude $1.0\,\mu\text{m}$ at $1000\,\text{Hz}$. Calculate the approximate peak-to-peak voltage variation across the resistor.

(c) Calculate the time constant and explain why the time constant must satisfy $\tau \gg 1/f$ for the microphone to work correctly.

Take $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{F}\,\text{m}^{-1}$.

**Solution:**

(a) $C = \frac{\varepsilon_0 A}{d} = \frac{8.85 \times 10^{-12} \times 2.0 \times 10^{-3}}{20 \times 10^{-6}} = \frac{1.77 \times 10^{-14}}{2.0 \times 10^{-5}} = 8.85 \times 10^{-10}\,\text{F} = 885\,\text{pF}$

(b) The charge on the capacitor is approximately constant (since $\tau$ is large): $Q \approx CV_0 = 885 \times 10^{-12} \times 200 = 1.77 \times 10^{-7}\,\text{C}$

When the separation changes by $\Delta d = \pm 1.0\,\mu\text{m}$:

$$\Delta C = -\frac{\varepsilon_0 A \Delta d}{d^2} = -\frac{8.85 \times 10^{-12} \times 2.0 \times 10^{-3} \times 1.0 \times 10^{-6}}{(20 \times 10^{-6})^2} = -\frac{1.77 \times 10^{-20}}{4.0 \times 10^{-10}} = -4.43 \times 10^{-11}\,\text{F}$$

The voltage across the capacitor changes: $V_C = Q/C$

$$\Delta V_C \approx -\frac{Q \Delta C}{C^2} = -\frac{1.77 \times 10^{-7} \times (-4.43 \times 10^{-11})}{(8.85 \times 10^{-10})^2} = \frac{7.84 \times 10^{-18}}{7.83 \times 10^{-19}} = 10.0\,\text{V}$$

Peak-to-peak variation across the resistor $\approx 20\,\text{V}$.

(c) $\tau = RC = 10 \times 10^6 \times 885 \times 10^{-12} = 8.85 \times 10^{-3}\,\text{s} = 8.85\,\text{ms}$

$1/f = 1.0\,\text{ms}$

Since $\tau = 8.85\,\text{ms} \gg 1.0\,\text{ms} = 1/f$, the condition is satisfied. The time constant must be much longer than the period of the sound wave so that the capacitor voltage cannot follow the rapid changes in capacitance. This means the charge on the capacitor remains approximately constant, and the voltage changes are caused by the changing capacitance, producing an AC signal across the resistor that faithfully reproduces the sound wave.

---
### IT-3: Energy Transfer in a Two-Capacitor System (with DC Circuits)

**Question:**

Capacitor $C_1 = 10\,\mu\text{F}$ is charged to $50\,\text{V}$. It is then connected across an initially uncharged capacitor $C_2 = 40\,\mu\text{F}$.

(a) Calculate the final voltage across both capacitors after they are connected.

(b) Calculate the total energy stored before and after connection. Account for the difference.

(c) A resistor $R = 100\,\Omega$ is placed between the capacitors during connection. Calculate the peak current and the total energy dissipated in the resistor.

**Solution:**

(a) Charge is conserved: $Q_1 = C_1 V_1 = 10 \times 10^{-6} \times 50 = 5.0 \times 10^{-4}\,\text{C}$

After connection, the capacitors are in parallel: $C_{\text{total}} = C_1 + C_2 = 50\,\mu\text{F}$

$$V_f = \frac{Q_1}{C_{\text{total}}} = \frac{5.0 \times 10^{-4}}{50 \times 10^{-6}} = 10\,\text{V}$$

(b) Energy before: $E_i = \frac{1}{2}C_1 V_1^2 = 0.5 \times 10^{-5} \times 2500 = 12.5 \times 10^{-3}\,\text{J} = 12.5\,\text{mJ}$

Energy after: $E_f = \frac{1}{2}(C_1 + C_2)V_f^2 = 0.5 \times 50 \times 10^{-6} \times 100 = 2.5 \times 10^{-3}\,\text{J} = 2.5\,\text{mJ}$

Energy lost $= 12.5 - 2.5 = 10.0\,\text{mJ}$

This energy is dissipated as heat in the connecting wires (or resistor) and as electromagnetic radiation during the transient current flow. This is a fundamental result: connecting two capacitors always results in energy loss.

(c) Peak current occurs at $t = 0$ when the full voltage difference appears across $R$:

$$I_{\text{peak}} = \frac{V_1 - V_f}{R} = \frac{50 - 0}{100} = 0.50\,\text{A}$$

Wait, at $t = 0$, $C_2$ has zero voltage and $C_1$ has $50\,\text{V}$. The initial current is:

$$I_0 = \frac{V_1}{R} = \frac{50}{100} = 0.50\,\text{A}$$

The time constant for the discharge: $\tau = R \times \frac{C_1 C_2}{C_1 + C_2} = 100 \times \frac{10 \times 40}{50} \times 10^{-6} = 100 \times 8 \times 10^{-6} = 8.0 \times 10^{-4}\,\text{s}$

Total energy dissipated in the resistor $= 10.0\,\text{mJ}$ (same as the energy lost, regardless of $R$).

This confirms that the energy loss is independent of the resistance value -- even with $R = 0$, the same amount of energy would be lost (as radiation rather than heat).
