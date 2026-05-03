---
title: "Measurement and Data Processing -- Diagnostic Tests"
description: "Diagnostic tests for IB Chemistry measurement and data processing: uncertainty propagation, significant figures, graphical analysis, and error identification."
slug: diag-measurement
hide_table_of_contents: true
---

# Measurement and Data Processing — Diagnostic Tests

## Unit Tests

### UT-1: Uncertainty Propagation
**Question:** The density of a metal cylinder is determined by measuring its mass ($m = 12.45 \pm 0.01\ \text{g}$) and dimensions: diameter ($d = 1.25 \pm 0.01\ \text{cm}$) and height ($h = 5.00 \pm 0.01\ \text{cm}$). Calculate the density and its absolute uncertainty. The volume of a cylinder is $V = \pi d^2 h / 4$.

**Solution:**

$V = \frac{\pi \times 1.25^2 \times 5.00}{4} = \frac{\pi \times 1.5625 \times 5.00}{4} = \frac{24.54}{4} = 6.135\ \text{cm}^3$

$\rho = \frac{m}{V} = \frac{12.45}{6.135} = 2.029\ \text{g cm}^{-3}$

Fractional uncertainty in $d$: $\frac{0.01}{1.25} = 0.0080$ (0.80%). Since $d^2$ appears, its contribution is $2 \times 0.0080 = 0.016$ (1.6%).

Fractional uncertainty in $h$: $\frac{0.01}{5.00} = 0.0020$ (0.20%).

Fractional uncertainty in $m$: $\frac{0.01}{12.45} = 0.00080$ (0.08%).

Total fractional uncertainty in $\rho$: $\sqrt{(0.016)^2 + (0.0020)^2 + (0.00080)^2} = \sqrt{0.000256 + 0.000004 + 0.00000064} = \sqrt{0.000261} = 0.0161$ (1.6%).

Absolute uncertainty: $\Delta\rho = 2.029 \times 0.0161 = 0.033\ \text{g cm}^{-3}$.

$\rho = 2.03 \pm 0.03\ \text{g cm}^{-3}$ (uncertainty given to 1 s.f., value rounded to match).

The diameter measurement dominates the uncertainty because of the $d^2$ term.

---
### UT-2: Significant Figures in Calculations
**Question:** A student records the following data and performs calculations. Identify and correct all significant figure errors: (a) $0.0250 \times 4.00 = 0.1000$, (b) $12.4 / 3.2 = 3.875$, (c) $\log(2.5 \times 10^{-3}) = -2.6021$, (d) The pH is measured as 3.45. Calculate $[\text{H}^+] = 10^{-3.45} = 3.548 \times 10^{-4}$.

**Solution:**

(a) $0.0250 \times 4.00 = 0.100$. Rule: in multiplication, the answer has the same number of significant figures as the factor with the fewest. $0.0250$ has 3 s.f., $4.00$ has 3 s.f. Answer should be 3 s.f.: $0.100$. (The student wrote 0.1000 which is 4 s.f. -- incorrect.)

(b) $12.4 / 3.2 = 3.9$. $12.4$ has 3 s.f., $3.2$ has 2 s.f. Answer should be 2 s.f.: $3.9$ (not 3.875).

(c) $\log(2.5 \times 10^{-3}) = -2.60$. When taking a logarithm, the number of decimal places in the answer equals the number of significant figures in the original. $2.5 \times 10^{-3}$ has 2 s.f., so the log should have 2 decimal places: $-2.60$ (not $-2.6021$).

(d) $[\text{H}^+] = 10^{-3.45} = 3.5 \times 10^{-4}$. When taking an antilogarithm, the number of significant figures in the answer equals the number of decimal places in the original. pH $= 3.45$ has 2 decimal places, so $[\text{H}^+]$ should have 2 s.f.: $3.5 \times 10^{-4}\ \text{mol dm}^{-3}$ (not $3.548 \times 10^{-4}$).

---
### UT-3: Graphical Analysis and Best-Fit Line
**Question:** In an experiment to determine the molar mass of an unknown gas, a student measures the mass of gas at different pressures (constant $T$, $V$). The data should follow $m = \frac{PMV}{RT}$. The student plots $m$ vs $P$ and obtains a gradient of $0.0445\ \text{g kPa}^{-1}$. If $V = 250\ \text{cm}^3$ and $T = 298\ \text{K}$, calculate the molar mass. Identify whether the student should force the line through the origin and explain why.

**Solution:**

From $m = \frac{MV}{RT} \times P$, the gradient of $m$ vs $P$ is $\frac{MV}{RT}$.

$M = \frac{\text{gradient} \times RT}{V}$

Convert units: $V = 250\ \text{cm}^3 = 250 \times 10^{-6}\ \text{m}^3 = 2.50 \times 10^{-4}\ \text{m}^3$. $P$ in kPa, so $R = 8.314\ \text{J K}^{-1}\text{mol}^{-1}$ and we need gradient in $\text{kg Pa}^{-1}$:

Gradient $= 0.0445\ \text{g kPa}^{-1} = 4.45 \times 10^{-5}\ \text{kg Pa}^{-1}$.

$M = \frac{4.45 \times 10^{-5} \times 8.314 \times 298}{2.50 \times 10^{-4}} = \frac{0.1103}{2.50 \times 10^{-4}} = 441\ \text{g mol}^{-1}$

(Checking: $\text{CO}_2$ is $44\ \text{g mol}^{-1}$, so this is likely $\text{CO}_2$ with a unit issue. Rechecking: gradient should be $0.0445\ \text{g kPa}^{-1}$. Using $R = 8.314\ \text{J K}^{-1}\text{mol}^{-1} = 8.314 \times 10^{-3}\ \text{kJ K}^{-1}\text{mol}^{-1}$ but with pressure in kPa and volume in dm$^3$: $V = 0.250\ \text{dm}^3$.)

$M = \frac{0.0445 \times 8.314 \times 298}{0.250} = \frac{110.3}{0.250} = 44.1\ \text{g mol}^{-1}$

This gives $\text{CO}_2$ ($M = 44.01\ \text{g mol}^{-1}$), which is correct.

**Origin question:** Yes, the line should be forced through the origin because when $P = 0$, there is no gas in the container, so $m$ must equal $0$. The relationship $m = (MV/RT)P$ has no intercept term. However, in practice, a best-fit line not forced through the origin may reveal systematic error (e.g., the container was not fully evacuated).

## Integration Tests

### IT-1: Error Analysis in a Titration (with Acids and Bases)
**Question:** In a titration of $\text{HCl}$ with $\text{NaOH}$, a student uses a burette ($\pm 0.05\ \text{cm}^3$) and a pipette ($\pm 0.05\ \text{cm}^3$). The pipette delivers $25.00\ \text{cm}^3$ of $0.100 \pm 0.001\ \text{mol dm}^{-3}$ HCl. The average titre is $24.85\ \text{cm}^3$. Calculate the concentration of NaOH with its absolute uncertainty. The titre range is $24.80$--$24.90\ \text{cm}^3$.

**Solution:**

$n(\text{HCl}) = c \times V = 0.100 \times 25.00/1000 = 2.500 \times 10^{-3}\ \text{mol}$

$n(\text{NaOH}) = n(\text{HCl}) = 2.500 \times 10^{-3}\ \text{mol}$ (1:1 stoichiometry)

$c(\text{NaOH}) = \frac{2.500 \times 10^{-3}}{24.85/1000} = \frac{2.500 \times 10^{-3}}{0.02485} = 0.1006\ \text{mol dm}^{-3}$

Uncertainty analysis:

Fractional uncertainty in $c(\text{HCl})$: $0.001/0.100 = 0.010$ (1.0%)

Fractional uncertainty in $V(\text{HCl})$: $0.05/25.00 = 0.0020$ (0.20%)

Fractional uncertainty in $V(\text{NaOH})$: The range $24.80$--$24.90$ gives a spread of $0.10\ \text{cm}^3$. Half-range $= 0.05\ \text{cm}^3$. Fractional: $0.05/24.85 = 0.0020$ (0.20%).

Total fractional uncertainty in $c(\text{NaOH})$: $\sqrt{0.010^2 + 0.0020^2 + 0.0020^2} = \sqrt{0.0001 + 0.000004 + 0.000004} = \sqrt{0.000108} = 0.0104$ (1.04%).

Absolute uncertainty: $0.1006 \times 0.0104 = 0.00105\ \text{mol dm}^{-3}$.

$c(\text{NaOH}) = 0.101 \pm 0.001\ \text{mol dm}^{-3}$

The concentration uncertainty is dominated by the uncertainty in the HCl concentration.

---
### IT-2: Propagation of Uncertainty in Kinetics (with Kinetics)
**Question:** The Arrhenius equation $\ln k = \ln A - E_a/RT$ is used to determine $E_a$ from a plot of $\ln k$ vs $1/T$. A student obtains a gradient of $-8500\ \text{K}$ with a standard error of $\pm 200\ \text{K}$. Calculate $E_a$ and its uncertainty. If the y-intercept is $25.0 \pm 0.5$, calculate $A$ and its uncertainty.

**Solution:**

$\text{Gradient} = -E_a/R$, so $E_a = -\text{gradient} \times R$.

$E_a = 8500 \times 8.314 = 70669\ \text{J mol}^{-1} = 70.7\ \text{kJ mol}^{-1}$

Uncertainty: $\Delta E_a = 200 \times 8.314 = 1663\ \text{J mol}^{-1} = 1.7\ \text{kJ mol}^{-1}$

$E_a = 70.7 \pm 1.7\ \text{kJ mol}^{-1}$

For the pre-exponential factor: $\ln A = \text{intercept} = 25.0$.

$A = e^{25.0} = 7.20 \times 10^{10}$ (with units depending on the reaction order)

Uncertainty in $A$: The intercept uncertainty is $\pm 0.5$. Since $A = e^{\text{intercept}}$:

$A_{\max} = e^{25.5} = 1.18 \times 10^{11}$, $A_{\min} = e^{24.5} = 4.39 \times 10^{10}$

$\Delta A = \frac{1.18 \times 10^{11} - 4.39 \times 10^{10}}{2} = 3.71 \times 10^{10}$

$A = (7.2 \pm 3.7) \times 10^{10}\ \text{dm}^{3}\text{mol}^{-1}\text{s}^{-1}$ (for a second-order reaction)

The large relative uncertainty in $A$ (about 51%) reflects the exponential sensitivity: a small uncertainty in the intercept produces a large uncertainty in $A$. This is why $E_a$ is generally determined more precisely than $A$ from Arrhenius plots.

---
### IT-3: Statistical Analysis and Equilibrium (with Equilibrium)
**Question:** A student measures $K_c$ for the reaction $\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2$ five times and obtains: $4.2 \times 10^{-3}$, $4.8 \times 10^{-3}$, $4.5 \times 10^{-3}$, $4.1 \times 10^{-3}$, $4.6 \times 10^{-3}$. Calculate the mean, standard deviation, and 95% confidence interval. The literature value is $4.6 \times 10^{-3}$. Does the experimental value agree with the literature value?

**Solution:**

Mean: $\bar{x} = \frac{4.2 + 4.8 + 4.5 + 4.1 + 4.6}{5} \times 10^{-3} = \frac{22.2}{5} \times 10^{-3} = 4.44 \times 10^{-3}$

Standard deviation:

Deviations: $-0.24, +0.36, +0.06, -0.34, +0.16$ (all $\times 10^{-3}$)

$s = \sqrt{\frac{(-0.24)^2 + (0.36)^2 + (0.06)^2 + (-0.34)^2 + (0.16)^2}{5 - 1}} \times 10^{-3}$

$s = \sqrt{\frac{0.0576 + 0.1296 + 0.0036 + 0.1156 + 0.0256}{4}} \times 10^{-3} = \sqrt{\frac{0.3320}{4}} \times 10^{-3} = \sqrt{0.0830} \times 10^{-3} = 0.288 \times 10^{-3}$

Standard error of the mean: $\text{SEM} = \frac{s}{\sqrt{n}} = \frac{0.288 \times 10^{-3}}{\sqrt{5}} = 0.129 \times 10^{-3}$

95% confidence interval (using $t_{0.025, 4} = 2.776$):

$\text{CI} = \bar{x} \pm t \times \text{SEM} = (4.44 \pm 2.776 \times 0.129) \times 10^{-3} = (4.44 \pm 0.36) \times 10^{-3}$

Range: $(4.08 \text{ to } 4.80) \times 10^{-3}$.

The literature value $4.6 \times 10^{-3}$ falls within the 95% confidence interval, so the experimental result **agrees** with the literature value at the 95% confidence level.
