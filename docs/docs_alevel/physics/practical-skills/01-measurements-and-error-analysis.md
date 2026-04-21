---
title: Measurements and Error Analysis
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: measurements-and-error-analysis
---

## Measurements and Error Analysis

:::info Board Coverage AQA Paper 3 | Edexcel CP1, CP6 | OCR (A) Paper 3 | CIE P5 :::

## 1. Systematic and Random Errors

### Systematic Errors

A **systematic error** is a consistent, repeatable deviation from the true value, caused by a flaw
in the experimental setup or method.

**Characteristics:**

- Affect **accuracy** (closeness to true value)
- Do **not** affect precision (repeatability)
- Cannot be reduced by repeated measurements
- Shift all readings in the same direction by the same amount

**Definition.** A zero error is a systematic error in which an instrument does not read zero when
the measured quantity is zero, causing all readings to be offset by a constant amount.

**Definition.** A parallax error is a systematic error caused by reading a scale from an angle
rather than perpendicular to it, leading to consistently higher or lower readings.

**Examples:**

- A zero error on a micrometer (all readings too high or too low)
- A stopwatch that runs consistently fast
- Parallax error from always reading a scale at the wrong angle
- A thermometer with an incorrect calibration

**Detection:** Compare with an accepted value (if known), or use a different method to cross-check.

**Correction:** Identify the source and either eliminate it or apply a correction factor.

### Random Errors

A **random error** is an unpredictable fluctuation in measured values, caused by limitations in
measurement or environmental variability.

**Characteristics:**

- Affect **precision** (repeatability)
- Do **not** affect accuracy (on average)
- Can be reduced by taking repeated measurements and averaging
- Cause scatter in the data

**Examples:**

- Reaction time when using a stopwatch
- Fluctuations in room temperature
- Reading the last digit of an analogue scale
- Vibration of the apparatus

**Reduction:** Take multiple readings and calculate the mean. Use more precise instruments.

:::warning Common Pitfall Do not confuse accuracy and precision. A measurement can be precise (small
scatter) but inaccurate (systematic error), or accurate (close to true value) but imprecise (large
scatter). Neither is sufficient alone. :::

## 2. Uncertainty Analysis

### Absolute, Fractional, and Percentage Uncertainty

**Definition.** Absolute uncertainty is the estimated range within which the true value of a
measurement is expected to lie, expressed in the same units as the measured quantity and denoted
$\pm \Delta x$.

**Definition.** Percentage uncertainty is the absolute uncertainty expressed as a percentage of the
measured value: $(\Delta x / x) \times 100\%$.

For a measurement $x \pm \Delta x$:

- **Absolute uncertainty:** $\Delta x$
- **Fractional uncertainty:** $\frac{\Delta x}{x}$
- **Percentage uncertainty:** $\frac{\Delta x}{x} \times 100\%$

### Propagation of Uncertainty

### Derivation of Uncertainty Propagation Rules

#### For Addition/Subtraction: $z = x + y$

The maximum value of $z$ occurs when both uncertainties add in the same direction:

$$z_{\max} = (x + \Delta x) + (y + \Delta y)$$

The minimum value:

$$z_{\min} = (x - \Delta x) + (y - \Delta y)$$

The absolute uncertainty is half the range:

$$\Delta z = \frac{z_{\max} - z_{\min}}{2} = \frac{2\Delta x + 2\Delta y}{2}$$

$$\boxed{\Delta z = \Delta x + \Delta y}$$

$\square$

#### For Multiplication/Division: $z = xy$

Taking natural logarithms: $\ln z = \ln x + \ln y$. Differentiating: $dz/z = dx/x + dy/y$.
Converting to finite uncertainties:

$$\frac{\Delta z}{z} = \frac{\Delta x}{x} + \frac{\Delta y}{y}$$

$$\boxed{\frac{\Delta z}{z} = \frac{\Delta x}{x} + \frac{\Delta y}{y}}$$

$\square$

The same rule applies for division ($z = x/y$) since $\\ln z = \\ln x - \\ln y$ gives
$\\Delta z/z = \\Delta x/x + \\Delta y/y$ (uncertainties always add).

<hr />

#### Addition/Subtraction: $z = x \pm y$

$$\Delta z = \Delta x + \Delta y$$

Add absolute uncertainties.

#### Multiplication/Division: $z = xy$ or $z = x/y$

$$\frac{\Delta z}{z} = \frac{\Delta x}{x} + \frac{\Delta y}{y}$$

Add fractional uncertainties.

#### Powers: $z = x^n$

$$\frac{\Delta z}{z} = |n| \cdot \frac{\Delta x}{x}$$

Multiply fractional uncertainty by the power.

#### General formula (for reference):

$$\Delta z = \sqrt{\sum_{i}\left(\frac{\partial z}{\partial x_i}\Delta x_i\right)^2}$$

### Uncertainty from a Single Reading

**Definition.** Resolution is the smallest change in the measured quantity that an instrument can
detect or display, equal to the smallest division on an analogue scale or the last digit on a
digital display.

For a single reading with an instrument, the uncertainty is typically:

- **Analogue instrument:** half the smallest division
- **Digital instrument:** the smallest division (last digit)

### Uncertainty from Repeated Measurements

For $n$ repeated readings:

$$\bar{x} = \frac{1}{n}\sum x_i$$

$$\Delta x = \frac{x_{\max} - x_{\min}}{2}$$

For large $n$, the standard uncertainty of the mean is:

$$\Delta x = \frac{\sigma}{\sqrt{n}}, \qquad \sigma = \sqrt{\frac{1}{n-1}\sum(x_i - \bar{x})^2}$$

## 3. Graphical Analysis

### Determining Uncertainty from a Line of Best Fit

When determining a physical quantity from the gradient of a straight-line graph:

1. Draw the **line of best fit** through the data points.
2. Draw the **worst acceptable line** (the steepest/shallowest line consistent with the error bars).
3. The uncertainty in the gradient is:

$$\Delta m = \frac{|m_{\mathrm{best}} - m_{\mathrm{worst}}|}{2}$$

### Error Bars

**Vertical error bars** represent the uncertainty in the $y$-measurement. **Horizontal error bars**
represent the uncertainty in the $x$-measurement.

When error bars are not shown, the uncertainty is typically assumed to be $\pm$ half the smallest
scale division.

### Linearising Data

Many physical relationships can be linearised by choosing appropriate variables:

| Non-linear relation  | Linearised form           | Plot                  | Gradient   | Intercept |
| -------------------- | ------------------------- | --------------------- | ---------- | --------- |
| $y = ax^2 + b$       | $y = aX + b$              | $y$ vs $X = x^2$      | $a$        | $b$       |
| $y = a\sqrt{x} + b$  | $y = aX + b$              | $y$ vs $X = \sqrt{x}$ | $a$        | $b$       |
| $y = a/x + b$        | $y = aX + b$              | $y$ vs $X = 1/x$      | $a$        | $b$       |
| $y = ae^{bx}$        | $\ln y = bx + \ln a$      | $\ln y$ vs $x$        | $b$        | $\ln a$   |
| $T = 2\pi\sqrt{L/g}$ | $T^2 = \frac{4\pi^2}{g}L$ | $T^2$ vs $L$          | $4\pi^2/g$ | $0$       |

:::tip Exam Technique When asked to find the percentage uncertainty in a quantity determined from a
gradient, first find the gradient uncertainty using the worst line method, then divide by the
best-fit gradient and multiply by 100%. :::

## Problem Set

<details>
<summary>Problem 1</summary>
A student measures the length of a table five times: 1.52 m, 1.53 m, 1.51 m, 1.52 m, 1.54 m.
Calculate the mean and the absolute uncertainty.

**Answer.** $\bar{L} = (1.52 + 1.53 + 1.51 + 1.52 + 1.54)/5 = 7.62/5 = 1.524$ m.

Range $= 1.54 - 1.51 = 0.03$ m. $\Delta L = 0.015$ m. Result: $L = 1.524 \pm 0.015$ m
$\approx 1.52 \pm 0.02$ m.

<b>If you get this wrong, revise:</b>
[Uncertainty from Repeated Measurements](#uncertainty-from-repeated-measurements)

</details>

<details>
<summary>Problem 2</summary>
The density of a material is $\rho = m/V$. The mass is $25.0 \pm 0.3$ g and the volume is
$10.0 \pm 0.5$ cm$^3$. Calculate $\rho$ and its percentage uncertainty.

**Answer.** $\rho = 25.0/10.0 = 2.50$ g cm$^{-3}$. Fractional uncertainties: $0.3/25.0 = 0.012$ and
$0.5/10.0 = 0.050$.

Total fractional uncertainty $= 0.012 + 0.050 = 0.062 = 6.2\%$.
$\Delta\rho = 2.50 \times 0.062 = 0.16$ g cm$^{-3}$.

Result: $\rho = 2.50 \pm 0.16$ g cm$^{-3}$ (6.2%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 3</summary>
A digital voltmeter reads 4.52 V. What is the absolute uncertainty?

**Answer.** For a digital instrument, the uncertainty is the smallest division (last digit):
$\pm 0.01$ V.

<b>If you get this wrong, revise:</b>
[Uncertainty from a Single Reading](#uncertainty-from-a-single-reading)

</details>

<details>
<summary>Problem 4</summary>
The period of a pendulum is given by $T = 2\pi\sqrt{L/g}$. A student plots $T^2$ against $L$ and
obtains a gradient of $4.05$ s$^2$ m$^{-1}$ with an uncertainty of $\pm 0.10$ s$^2$ m$^{-1}$.
Calculate $g$ and its uncertainty.

**Answer.** $g = 4\pi^2/\mathrm{gradient} = 39.48/4.05 = 9.75$ m s$^{-2}$.

$\Delta g/g = \Delta(\mathrm{gradient})/\mathrm{gradient} = 0.10/4.05 = 0.0247 = 2.5\%$.
$\Delta g = 9.75 \times 0.025 = 0.24$ m s$^{-2}$.

Result: $g = 9.75 \pm 0.24$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Graphical Analysis](#3-graphical-analysis)

</details>

<details>
<summary>Problem 5</summary>
A quantity $y$ is calculated as $y = ax^3/b$ where $a = 4.0 \pm 0.2$, $b = 2.0 \pm 0.1$, and
$x = 3.0 \pm 0.1$. Calculate $y$ and its percentage uncertainty.

**Answer.** $y = 4.0 \times 27 / 2.0 = 54.0$.

Fractional uncertainties: $0.2/4.0 = 0.050$ (for $a$), $0.1/2.0 = 0.050$ (for $b$),
$3(0.1/3.0) = 0.10$ (for $x^3$, power rule).

Total $= 0.050 + 0.050 + 0.10 = 0.20 = 20\%$. $\Delta y = 54.0 \times 0.20 = 10.8$.

Result: $y = 54 \pm 11$ (20%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 6</summary>
Distinguish between systematic and random errors, giving one example of each from measuring the
acceleration of free fall using a simple pendulum.

**Answer.** **Systematic error:** The string is not perfectly inextensible, so the effective length
is greater than measured, leading to a consistently overestimated $T$ and hence underestimated $g$.
**Random error:** Human reaction time when timing oscillations causes scatter in the measured
periods.

<b>If you get this wrong, revise:</b>
[Systematic and Random Errors](#1-systematic-and-random-errors)

</details>

<details>
<summary>Problem 7</summary>
In an experiment to determine $g$ using $T = 2\pi\sqrt{L/g}$, a student measures
$L = 0.800 \pm 0.002$ m and $T = 1.80 \pm 0.05$ s. Calculate $g$ with its absolute uncertainty.

**Answer.** $g = 4\pi^2 L / T^2 = 39.48 \times 0.800 / 3.24 = 31.58/3.24 = 9.75$ m s$^{-2}$.

Fractional uncertainties: $\Delta L/L = 0.002/0.800 = 0.0025$.
$\Delta T^2/T^2 = 2\Delta T/T = 2(0.05/1.80) = 0.0556$.

Total fractional uncertainty $= 0.0025 + 0.0556 = 0.0581$. $\Delta g = 9.75 \times 0.058 = 0.57$ m
s$^{-2}$.

Result: $g = 9.8 \pm 0.6$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 8</summary>
A student obtains the following data for a linear relationship $y = mx + c$:

| $x$ (cm) | $y$ (cm) |
| -------- | -------- |
| 2.0      | 3.2      |
| 4.0      | 5.8      |
| 6.0      | 8.5      |
| 8.0      | 11.0     |
| 10.0     | 13.8     |

Using a line of best fit, the gradient is $1.34$ cm/cm. The worst acceptable line gives a gradient
of $1.28$ cm/cm. Calculate the gradient and its uncertainty as a percentage.

**Answer.** $m = 1.34 \pm \frac{1.34 - 1.28}{2} = 1.34 \pm 0.03$ cm/cm.

Percentage uncertainty $= (0.03/1.34) \times 100 = 2.2\%$.

<b>If you get this wrong, revise:</b>
[Determining Uncertainty from a Line of Best Fit](#determining-uncertainty-from-a-line-of-best-fit)

</details>

## 4. Worked Example: Determining $g$ from a Simple Pendulum

This example brings together multiple concepts: repeated measurements, propagation of uncertainty,
and graphical analysis.

### 4.1 The Experiment

A student measures the period $T$ of a simple pendulum for five different lengths $L$. The
relationship is:

$$T = 2\pi\sqrt{\frac{L}{g}} \implies T^2 = \frac{4\pi^2}{g}L$$

By plotting $T^2$ against $L$, the gradient gives $4\pi^2/g$, from which $g$ can be determined.

### 4.2 Sample Data and Calculations

| $L$ (m)           | $T$ (s)         | $T^2$ (s$^2$)   |
| ----------------- | --------------- | --------------- |
| $0.400 \pm 0.002$ | $1.26 \pm 0.03$ | $1.59 \pm 0.08$ |
| $0.600 \pm 0.002$ | $1.55 \pm 0.03$ | $2.40 \pm 0.09$ |
| $0.800 \pm 0.002$ | $1.80 \pm 0.03$ | $3.24 \pm 0.11$ |
| $1.000 \pm 0.002$ | $2.01 \pm 0.03$ | $4.04 \pm 0.12$ |
| $1.200 \pm 0.002$ | $2.20 \pm 0.03$ | $4.84 \pm 0.13$ |

The uncertainty in $T^2$ is calculated using the power rule: $\Delta T^2/T^2 = 2\Delta T/T$.

For the first row: $\Delta T^2 = 2 \times (0.03/1.26) \times 1.59 = 0.076 \approx 0.08$.

### 4.3 Determining $g$ from the Gradient

From a line of best fit through $(L, T^2)$, the gradient is $m = 4.08$ s$^2$ m$^{-1}$. The worst
acceptable line gives $m = 3.95$ s$^2$ m$^{-1}$.

$$g = \frac{4\pi^2}{m} = \frac{39.48}{4.08} = 9.68 \mathrm{ m s}^{-2}$$

Uncertainty in the gradient: $\Delta m = (4.08 - 3.95)/2 = 0.065$ s$^2$ m$^{-1}$.

Since $g = 4\pi^2 / m$ and $g \propto 1/m$:

$$\frac{\Delta g}{g} = \frac{\Delta m}{m} = \frac{0.065}{4.08} = 0.016 = 1.6\%$$

$$\Delta g = 9.68 \times 0.016 = 0.15 \mathrm{ m s}^{-2}$$

Result: $g = 9.68 \pm 0.15$ m s$^{-2}$, which is consistent with the accepted value of $9.81$ m
s$^{-2}$.

### 4.4 Identifying Errors in This Experiment

**Systematic errors:**

- The string is not perfectly inextensible, so the effective length is greater than measured,
  leading to overestimated $T$ and underestimated $g$
- Air resistance slightly increases the period, causing $g$ to be underestimated
- The angle of swing may be too large (the formula assumes small angles)

**Random errors:**

- Human reaction time when starting and stopping the stopwatch
- Reading the scale on the metre rule at an angle (parallax)
- Variations in the release mechanism

## 5. Precision vs Accuracy: A Deeper Analysis

### 5.1 Definitions Revisited

| Property      | Definition                                       | How to Assess                                      |
| ------------- | ------------------------------------------------ | -------------------------------------------------- |
| **Accuracy**  | Closeness of measurements to the true value      | Compare the mean with an accepted value            |
| **Precision** | Closeness of repeated measurements to each other | Calculate the spread (range or standard deviation) |

### 5.2 The Four Scenarios

| Scenario | Accuracy | Precision | Interpretation                                                                              |
| -------- | -------- | --------- | ------------------------------------------------------------------------------------------- |
| A        | High     | High      | Measurements are clustered near the true value. Ideal.                                      |
| B        | High     | Low       | Measurements are scattered but the mean is close to the true value. Random errors dominate. |
| C        | Low      | High      | Measurements are tightly clustered but away from the true value. Systematic error present.  |
| D        | Low      | Low       | Measurements are scattered and the mean is wrong. Both error types present.                 |

### 5.3 Improving Both Accuracy and Precision

To improve accuracy: calibrate instruments, correct for systematic errors, use a better experimental
method.

To improve precision: take more repeated measurements, use instruments with finer resolution,
control environmental conditions (temperature, vibrations).

## 6. Systematic Error Identification Techniques

Identifying systematic errors is critical because they cannot be reduced by averaging. Several
techniques are available:

1. **Comparison with an accepted value.** If the mean of repeated measurements differs significantly
   from the accepted value (considering the random uncertainty), a systematic error is likely
   present.

2. **Using a different method.** If two independent methods give results that disagree beyond their
   combined uncertainties, at least one method has a systematic error.

3. **Varying the experimental conditions.** Change the range of measurements. If the discrepancy
   from the accepted value varies with the measured quantity (e.g., always a fixed percentage too
   high), this indicates a systematic error.

4. **Checking for zero errors.** Measure a known zero before and after the experiment. Any non-zero
   reading indicates a zero error.

5. **Analysing the graph.** If a straight-line graph does not pass through the expected intercept
   (e.g., $T^2$ vs $L$ should pass through the origin), the non-zero intercept indicates a
   systematic error.

<details>
<summary>Example: Identifying Systematic Error from a Graph</summary>
A student plots $T^2$ against $L$ for a pendulum. The line of best fit has a $y$-intercept of $0.15$ s$^2$ instead of $0$. This suggests a systematic error: the effective pendulum length is $L + \delta$ where $\delta = 0.15g/(4\pi^2) \approx 0.037$ m. Possible causes: measuring from the wrong point on the bob, or the string not being clamped at the measured point.
</details>

## 7. Error Bars on Graphs

### 7.1 Drawing Error Bars

Error bars represent the uncertainty in each measurement point:

- **Vertical error bars** show the uncertainty in the $y$-variable. Draw a vertical line of length
  $2\Delta y$ centred on each data point, with small horizontal caps at each end.
- **Horizontal error bars** show the uncertainty in the $x$-variable. Draw a horizontal line of
  length $2\Delta x$ centred on each data point, with small vertical caps at each end.

### 7.2 Interpreting Error Bars

The line of best fit should pass through or near the error bars of each data point. If a data
point's error bar does not overlap with the line of best fit, either:

- The point is an outlier (consider whether to exclude it with justification)
- There is an unaccounted systematic error
- The uncertainty has been underestimated

### 7.3 Error Bars and the Worst Acceptable Line

The worst acceptable line is the steepest (or shallowest) straight line that still passes through
all the error bars. The uncertainty in the gradient is:

$$\Delta m = \frac{|m_{\mathrm{best}} - m_{\mathrm{worst}}|}{2}$$

:::warning Common Pitfall When error bars are not shown on a graph, examiners typically assume the
uncertainty is $\pm$ half the smallest scale division of the measuring instrument used to obtain
each data point. State this assumption explicitly. :::

## 8. Common Pitfalls

1. **Using the wrong uncertainty for a single reading.** For an analogue instrument, the uncertainty
   is half the smallest division. For a digital instrument, it is the smallest division (the last
   digit). Do not use half the smallest division for a digital instrument.

2. **Using the range instead of the half-range.** The absolute uncertainty from repeated
   measurements is the half-range: $\Delta x = (x_{\max} - x_{\min})/2$, not the full range. Using
   the full range overestimates the uncertainty by a factor of 2.

3. **Confusing the line of best fit with the worst acceptable line.** The line of best fit passes as
   close as possible to all data points. The worst acceptable line is the steepest or shallowest
   line that passes through all error bars. These are different lines with different gradients.

4. **Forgetting to propagate uncertainty through intermediate calculations.** If you calculate $T^2$
   from $T$, you must calculate the uncertainty in $T^2$ using the power rule before plotting. Do
   not plot the raw uncertainty in $T$ on the $T^2$ axis.

5. **Reporting uncertainty with too many significant figures.** Round the uncertainty to 1 or 2
   significant figures, then round the result to the same decimal place. For example, write
   $9.68 \pm 0.15$, not $9.678 \pm 0.1542$.

6. **Ignoring the uncertainty in the gradient when determining a physical constant.** Always use the
   worst acceptable line method to find the uncertainty in the gradient, and propagate this to the
   final result.

## 9. Extension Problem Set

<details>
<summary>Problem 1</summary>
A student measures the diameter of a wire using a micrometer. Five readings are: 0.52 mm, 0.53 mm, 0.52 mm, 0.54 mm, 0.53 mm. The micrometer has a zero error of $+0.01$ mm. Calculate the corrected mean diameter and its uncertainty.

**Answer.** Raw mean: $(0.52 + 0.53 + 0.52 + 0.54 + 0.53)/5 = 0.528$ mm. Range: $0.54 - 0.52 = 0.02$
mm. Half-range: $\Delta d = 0.01$ mm.

Corrected mean: $0.528 - 0.01 = 0.518$ mm $\approx 0.52$ mm.

Result: $d = 0.52 \pm 0.01$ mm (after correcting for the zero error).

<b>If you get this wrong, revise:</b>
[Systematic and Random Errors](#1-systematic-and-random-errors)

</details>

<details>
<summary>Problem 2</summary>
The resistivity of a wire is $\rho = \pi d^2 R / (4L)$. Given $d = 0.52 \pm 0.01$ mm, $R = 8.5 \pm 0.2$ $\Omega$, and $L = 1.200 \pm 0.005$ m, calculate $\rho$ and its percentage uncertainty.

**Answer.** Convert $d$ to metres: $d = 5.2 \times 10^{-4}$ m.

$\rho = \pi(5.2 \times 10^{-4})^2 \times 8.5 / (4 \times 1.200) = \pi \times 2.704 \times 10^{-7} \times 8.5 / 4.800 = 1.504 \times 10^{-6}$
$\Omega$ m.

Fractional uncertainties: $2(\Delta d/d) = 2(0.01/0.52) = 0.0385$ (for $d^2$),
$\Delta R/R = 0.2/8.5 = 0.0235$, $\Delta L/L = 0.005/1.200 = 0.0042$.

Total fractional uncertainty: $0.0385 + 0.0235 + 0.0042 = 0.0662 = 6.6\%$.

$\Delta\rho = 1.504 \times 10^{-6} \times 0.066 = 0.10 \times 10^{-6}$ $\Omega$ m.

Result: $\rho = (1.50 \pm 0.10) \times 10^{-6}$ $\Omega$ m (6.6%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 3</summary>
In an experiment to determine the specific heat capacity $c$ of a metal, a student uses $c = E/(m\Delta T)$ where $E = 1250 \pm 30$ J, $m = 0.150 \pm 0.005$ kg, and $\Delta T = 12.5 \pm 0.5$ K. Calculate $c$ and its uncertainty.

**Answer.** $c = 1250 / (0.150 \times 12.5) = 1250 / 1.875 = 667$ J kg$^{-1}$ K$^{-1}$.

Fractional uncertainties: $\Delta E/E = 30/1250 = 0.024$, $\Delta m/m = 0.005/0.150 = 0.033$,
$\Delta T/\Delta T = 0.5/12.5 = 0.040$.

Total fractional uncertainty: $0.024 + 0.033 + 0.040 = 0.097 = 9.7\%$.

$\Delta c = 667 \times 0.097 = 65$ J kg$^{-1}$ K$^{-1}$.

Result: $c = 670 \pm 70$ J kg$^{-1}$ K$^{-1}$ (9.7%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 4</summary>
A digital thermometer displays $22.7$ °C. What is the absolute uncertainty in this reading? A student takes three readings: $22.7$, $22.8$, $22.7$ °C. What is the best estimate of the temperature and its uncertainty?

**Answer.** For a single digital reading, the absolute uncertainty is the smallest division:
$\pm 0.1$ °C.

For three repeated readings: mean $= (22.7 + 22.8 + 22.7)/3 = 22.73$ °C. Range $= 0.1$ °C.
Half-range $= 0.05$ °C.

Since the half-range ($0.05$ °C) is smaller than the instrument resolution ($0.1$ °C), the
uncertainty is dominated by the instrument resolution. The best estimate is $22.7 \pm 0.1$ °C.

<b>If you get this wrong, revise:</b>
[Uncertainty from a Single Reading](#uncertainty-from-a-single-reading)

</details>

<details>
<summary>Problem 5</summary>
A graph of $\ln V$ against $t$ gives a gradient of $-0.025 \pm 0.002$ s$^{-1}$ and a $y$-intercept of $2.30 \pm 0.05$. The relationship is $\ln V = -kt + \ln V_0$. Determine $k$, $V_0$, and their uncertainties.

**Answer.** From the gradient: $k = 0.025$ s$^{-1}$, $\Delta k = 0.002$ s$^{-1}$. Result:
$k = 0.025 \pm 0.002$ s$^{-1}$.

From the intercept: $\ln V_0 = 2.30$, so $V_0 = e^{2.30} = 9.97 \approx 10.0$.

$\Delta(\ln V_0) = 0.05$. Since $V_0 = e^{\ln V_0}$: $\Delta V_0/V_0 = \Delta(\ln V_0) = 0.05$.

$\Delta V_0 = 10.0 \times 0.05 = 0.5$.

Result: $V_0 = 10.0 \pm 0.5$ (arbitrary units).

<b>If you get this wrong, revise:</b> [Linearising Data](#linearising-data)

</details>

<details>
<summary>Problem 6</summary>
A student determines the refractive index $n$ of glass by measuring the critical angle $\theta_c$. Five measurements of $\theta_c$ are: $41.5^\circ$, $42.0^\circ$, $41.8^\circ$, $42.2^\circ$, $41.6^\circ$. Using $n = 1/\sin\theta_c$, calculate $n$ and its uncertainty.

**Answer.** Mean $\theta_c = (41.5 + 42.0 + 41.8 + 42.2 + 41.6)/5 = 41.82^\circ$. Range
$= 42.2 - 41.5 = 0.7^\circ$. $\Delta\theta_c = 0.35^\circ$.

$n = 1/\sin(41.82°) = 1/0.6667 = 1.500$.

For the uncertainty, we need
$\Delta n/n = |\Delta(\sin\theta_c)/\sin\theta_c| = |\cos\theta_c \cdot \Delta\theta_c / \sin\theta_c| = \cot\theta_c \cdot \Delta\theta_c$.

Converting $\Delta\theta_c$ to radians: $0.35° = 0.00611$ rad.

$\Delta n/n = \cot(41.82°) \times 0.00611 = 1.118 \times 0.00611 = 0.00683 = 0.68\%$.

$\Delta n = 1.500 \times 0.00683 = 0.010$.

Result: $n = 1.500 \pm 0.010$.

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>
