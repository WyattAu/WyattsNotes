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

---

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

$$\Delta m = \frac{|m_{\text{best}} - m_{\text{worst}}|}{2}$$

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
<p>

A student measures the length of a table five times: 1.52 m, 1.53 m, 1.51 m, 1.52 m, 1.54 m.
Calculate the mean and the absolute uncertainty.

**Answer.** $\bar{L} = (1.52 + 1.53 + 1.51 + 1.52 + 1.54)/5 = 7.62/5 = 1.524$ m.

Range $= 1.54 - 1.51 = 0.03$ m. $\Delta L = 0.015$ m. Result: $L = 1.524 \pm 0.015$ m
$\approx 1.52 \pm 0.02$ m.

<b>If you get this wrong, revise:</b>
[Uncertainty from Repeated Measurements](#uncertainty-from-repeated-measurements)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

The density of a material is $\rho = m/V$. The mass is $25.0 \pm 0.3$ g and the volume is
$10.0 \pm 0.5$ cm$^3$. Calculate $\rho$ and its percentage uncertainty.

**Answer.** $\rho = 25.0/10.0 = 2.50$ g cm$^{-3}$. Fractional uncertainties: $0.3/25.0 = 0.012$ and
$0.5/10.0 = 0.050$.

Total fractional uncertainty $= 0.012 + 0.050 = 0.062 = 6.2\%$.
$\Delta\rho = 2.50 \times 0.062 = 0.16$ g cm$^{-3}$.

Result: $\rho = 2.50 \pm 0.16$ g cm$^{-3}$ (6.2%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A digital voltmeter reads 4.52 V. What is the absolute uncertainty?

**Answer.** For a digital instrument, the uncertainty is the smallest division (last digit):
$\pm 0.01$ V.

<b>If you get this wrong, revise:</b>
[Uncertainty from a Single Reading](#uncertainty-from-a-single-reading)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

The period of a pendulum is given by $T = 2\pi\sqrt{L/g}$. A student plots $T^2$ against $L$ and
obtains a gradient of $4.05$ s$^2$ m$^{-1}$ with an uncertainty of $\pm 0.10$ s$^2$ m$^{-1}$.
Calculate $g$ and its uncertainty.

**Answer.** $g = 4\pi^2/\text{gradient} = 39.48/4.05 = 9.75$ m s$^{-2}$.

$\Delta g/g = \Delta(\text{gradient})/\text{gradient} = 0.10/4.05 = 0.0247 = 2.5\%$.
$\Delta g = 9.75 \times 0.025 = 0.24$ m s$^{-2}$.

Result: $g = 9.75 \pm 0.24$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Graphical Analysis](#3-graphical-analysis)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A quantity $y$ is calculated as $y = ax^3/b$ where $a = 4.0 \pm 0.2$, $b = 2.0 \pm 0.1$, and
$x = 3.0 \pm 0.1$. Calculate $y$ and its percentage uncertainty.

**Answer.** $y = 4.0 \times 27 / 2.0 = 54.0$.

Fractional uncertainties: $0.2/4.0 = 0.050$ (for $a$), $0.1/2.0 = 0.050$ (for $b$),
$3(0.1/3.0) = 0.10$ (for $x^3$, power rule).

Total $= 0.050 + 0.050 + 0.10 = 0.20 = 20\%$. $\Delta y = 54.0 \times 0.20 = 10.8$.

Result: $y = 54 \pm 11$ (20%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Distinguish between systematic and random errors, giving one example of each from measuring the
acceleration of free fall using a simple pendulum.

**Answer.** **Systematic error:** The string is not perfectly inextensible, so the effective length
is greater than measured, leading to a consistently overestimated $T$ and hence underestimated $g$.
**Random error:** Human reaction time when timing oscillations causes scatter in the measured
periods.

<b>If you get this wrong, revise:</b>
[Systematic and Random Errors](#1-systematic-and-random-errors)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

In an experiment to determine $g$ using $T = 2\pi\sqrt{L/g}$, a student measures
$L = 0.800 \pm 0.002$ m and $T = 1.80 \pm 0.05$ s. Calculate $g$ with its absolute uncertainty.

**Answer.** $g = 4\pi^2 L / T^2 = 39.48 \times 0.800 / 3.24 = 31.58/3.24 = 9.75$ m s$^{-2}$.

Fractional uncertainties: $\Delta L/L = 0.002/0.800 = 0.0025$.
$\Delta T^2/T^2 = 2\Delta T/T = 2(0.05/1.80) = 0.0556$.

Total fractional uncertainty $= 0.0025 + 0.0556 = 0.0581$. $\Delta g = 9.75 \times 0.058 = 0.57$ m
s$^{-2}$.

Result: $g = 9.8 \pm 0.6$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

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

</p>
</details>

:::

:::
