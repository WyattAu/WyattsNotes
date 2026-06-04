---
title: Regression
description:
  'AP Statistics regression notes covering scatterplots, correlation, least-squares regression,
  residuals, transformations, and inference for the slope.'
date: 2026-06-04T10:00:00.000Z
tags:
  - ap
  - ap-statistics
categories:
  - ap-statistics
slug: regression
---

## Scatterplots

A scatterplot displays the relationship between two **quantitative variables** measured on the same
individuals. The explanatory variable ($x$) is plotted on the horizontal axis and the response
variable ($y$) on the vertical axis.

### Interpreting Scatterplots

When describing a scatterplot, address:

1. **Direction**: Positive association (both increase), negative association (one increases while
   the other decreases), or no association
2. **Form**: Linear, curved, or no pattern
3. **Strength**: How closely the points follow a pattern (strong, moderate, weak)
4. **Outliers**: Points that fall far from the overall pattern

### Explanatory vs Response Variables

- **Explanatory variable** (independent variable, predictor): The variable that may explain or
  predict changes in the response variable
- **Response variable** (dependent variable): The variable that is being predicted or explained

Not all relationships imply causation, even when the explanatory variable precedes the response
variable in time.

## Correlation

The **correlation coefficient** ($r$) measures the strength and direction of the **linear**
relationship between two quantitative variables.

$$r = \frac{1}{n-1} \sum \left(\frac{x_i - \bar{x}}{s_x}\right)\left(\frac{y_i - \bar{y}}{s_y}\right)$$

### Properties of $r$

- $-1 \leq r \leq 1$
- $r = +1$: Perfect positive linear relationship
- $r = -1$: Perfect negative linear relationship
- $r = 0$: No linear relationship (but there may be a nonlinear relationship)
- $r$ is not affected by changes in the centre (adding a constant) or scale (multiplying by a
  positive constant) of either variable
- $r$ is not resistant to outliers
- $r$ only measures **linear** association; it does not capture curved relationships
- The correlation does not depend on which variable is called $x$ and which is called $y$
- Units of measurement do not affect $r$

### Calculating $r$

$$r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \cdot \sum(y_i - \bar{y})^2}}$$

## Least-Squares Regression

The **least-squares regression line** (LSRL) minimises the sum of the squared vertical distances
(residuals) between the observed data points and the line.

### Equation of the LSRL

$$\hat{y} = a + bx$$

Where:

- $b = r \cdot \frac{s_y}{s_x}$ (slope)
- $a = \bar{y} - b\bar{x}$ (y-intercept)

### Interpreting the Slope and y-Intercept

- **Slope ($b$)**: For each unit increase in $x$, $\hat{y}$ is predicted to increase (or decrease)
  by $b$ units, on average. Always include "when $x$ increases by 1 unit" and "predicted $y$ changes
  by $b$."
- **y-Intercept ($a$)**: When $x = 0$, the predicted value of $y$ is $a$. This interpretation is
  only meaningful if $x = 0$ is within the range of the data.

### Prediction

The LSRL gives the predicted value $\hat{y}$ for a given $x$. Predictions are most reliable for
values of $x$ within the range of the original data (**extrapolation** beyond the data is risky).

## Residuals

A **residual** is the difference between the observed value and the predicted value:

$$e_i = y_i - \hat{y}_i$$

- A positive residual: the point is above the regression line (actual $>$ predicted)
- A negative residual: the point is below the line (actual $<$ predicted)
- The mean of the residuals is always $\approx 0$ (by definition of least squares)
- The sum of squared residuals ($\sum e_i^2$) is minimised by the LSRL

### Residual Plots

A residual plot displays residuals ($e_i$) on the vertical axis and the explanatory variable ($x_i$)
or the predicted values ($\hat{y}_i$) on the horizontal axis.

**Interpretation**:

- If the regression line is a good model, the residual plot shows a random scatter of points with no
  pattern around the horizontal axis ($e = 0$)
- A **curved pattern** in the residual plot indicates a nonlinear relationship
- A **fan shape** (increasing spread) indicates non-constant variance (heteroscedasticity)
- **Outliers** in the residual plot are points with large residuals

## Coefficient of Determination ($r^2$)

$$r^2 = \frac{\text{variation in } \hat{y}}{\text{variation in } y} = 1 - \frac{\sum e_i^2}{\sum(y_i - \bar{y})^2}$$

$r^2$ represents the proportion of the variation in $y$ that is accounted for by the linear
relationship with $x$.

- $r^2 = 0$: The LSRL explains none of the variation in $y$
- $r^2 = 1$: The LSRL explains all of the variation in $y$
- $r^2 = 0.85$: 85% of the variation in $y$ is explained by the linear regression on $x$

### Interpretation

"Approximately 85% of the variation in [response variable] can be accounted for by the linear
relationship with [explanatory variable]."

## Outliers and Influential Points

### Outliers

A point with a **large residual** (far from the regression line). An outlier in the y-direction.

### Influential Points

A point that, if removed, would significantly change the slope and/or y-intercept of the regression
line. Influential points typically have **extreme x-values** (leverage points), even if their
residual is not large.

An influential point may or may not be an outlier. Always check the effect of removing a point on
the regression equation.

## Transformations

When the relationship between $x$ and $y$ is not linear, a transformation of one or both variables
may produce a linear relationship.

### Common Transformations

- **Logarithmic**: $y' = \ln(y)$ or $x' = \ln(x)$ -- useful for exponential growth/decay
- **Square root**: $y' = \sqrt{y}$ -- useful for count data with increasing variance
- **Reciprocal**: $y' = 1/y$ -- useful for hyperbolic relationships
- **Power**: $y' = y^p$ for some power $p$

### Strategy

1. Make a scatterplot of $y$ vs $x$
2. If nonlinear, try transformations of $x$, $y$, or both
3. Re-examine the scatterplot and residual plot after transformation
4. Choose the transformation that produces the most linear pattern with random residuals

## Out-of-Context Extrapolation

The LSRL should only be used to make predictions for values of $x$ within the range of the observed
data. Extrapolating beyond this range is unreliable because the linear pattern may not hold.

## Correlation vs Causation

A strong correlation between two variables does not imply that one causes the other. The
relationship may be due to:

- **Confounding variables**: A third variable related to both $x$ and $y$
- **Common response**: Both variables respond to a third variable
- **Coincidence**: Random chance producing a strong correlation in a particular sample

Establishing causation requires a well-designed **experiment** with random assignment, not just
observational data showing correlation.

## Inference for Regression Slope

On the AP exam, you may be asked to test whether the slope of the population regression line is
significantly different from zero:

$$H_0: \beta_1 = 0 \quad H_a: \beta_1 \neq 0$$

$$t = \frac{b_1 - 0}{SE_{b_1}} \quad \text{with } df = n - 2$$

## Common Pitfalls

- Confusing correlation with causation
- Using the regression line to extrapolate far beyond the data
- Interpreting $r^2$ as a percentage "explained" without proper context
- Forgetting to check residual plots for nonlinearity
- Confusing outliers (large residuals) with influential points (high leverage)
- Using correlation when the relationship is clearly nonlinear
