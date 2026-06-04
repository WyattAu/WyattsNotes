---
title: Exploring Data
description:
  'AP Statistics exploring data notes covering categorical and quantitative variables, graphical
  displays, summary statistics, and the empirical rule for exam preparation.'
date: 2026-06-04T10:00:00.000Z
tags:
  - ap
  - ap-statistics
categories:
  - ap-statistics
slug: exploring-data
---

## Categorical vs Quantitative Variables

### Categorical Variables

A **categorical variable** (qualitative variable) places an individual or item into one of several
groups or categories. The values are labels, not numerical quantities.

- **Binary**: Two categories (e.g., yes/no, pass/fail, male/female)
- **Nominal**: Categories with no natural order (e.g., eye colour, favourite sport, nationality)
- **Ordinal**: Categories with a natural order but not measurable intervals (e.g., survey ratings:
  poor/fair/good/excellent)

Graphical displays for categorical data include **bar charts** (bars separated by gaps, showing
frequency or relative frequency) and **pie charts** (showing parts of a whole as proportions).

### Quantitative Variables

A **quantitative variable** takes numerical values for which arithmetic operations (addition,
subtraction, multiplication, division) are meaningful.

- **Discrete**: Values can be counted (e.g., number of siblings, number of cars in a parking lot)
- **Continuous**: Values can take any value in an interval (e.g., height, weight, temperature, time)

Graphical displays for quantitative data include **dotplots, stemplots (stem-and-leaf plots),
histograms, boxplots, and ogives (cumulative frequency curves)**.

## Graphical Displays for Quantitative Data

### Dotplots

A dotplot places a dot above each value on a number line. Each observation is represented by one
dot. Dotplots are best for small to moderate data sets (typically $n \leq 30$).

- Easily identify the shape, centre, and spread
- Identify clusters, gaps, and outliers visually
- Each data point is individually visible

### Histograms

A histogram divides the data into intervals (classes/bins) and displays the frequency or relative
frequency of each interval as a bar. Bars touch each other (no gaps) because the variable is
continuous.

- **Class width** should be chosen so that 5-15 classes result
- **Relative frequency histogram**: bar height = frequency / total count
- The **area** of a bar represents the proportion of observations in that class
- Histograms can be described by **shape, centre, spread**, and potential outliers

### Boxplots (Box-and-Whisker Plots)

A boxplot provides a five-number summary of the data visually: minimum, Q1, median (Q2), Q3, and
maximum.

- **Box**: Spans from Q1 to Q3 (contains the middle 50% of the data, the IQR)
- **Line inside box**: Median (Q2)
- **Whiskers**: Extend to the most extreme data point within $1.5 \times \text{IQR}$ of Q1 or Q3
- **Outliers**: Points beyond the whiskers, plotted individually as dots or asterisks
- Boxplots are especially useful for **comparing distributions** across groups (side-by-side
  boxplots)

## Describing Distributions

When describing a distribution, always address these three characteristics:

1. **Shape**: Overall pattern (symmetric, skewed left, skewed right, uniform, bimodal)
2. **Centre**: Typical or central value (mean or median)
3. **Spread**: Variability or dispersion of the data (range, IQR, standard deviation)
4. **Outliers**: Individual observations that fall outside the overall pattern

### Shape

- **Symmetric**: The left and right halves are approximately mirror images
- **Skewed right (positively skewed)**: Tail extends to the right; mean > median
- **Skewed left (negatively skewed)**: Tail extends to the left; mean < median
- **Uniform**: All values appear with roughly equal frequency
- **Bimodal**: Two distinct peaks (may indicate two subgroups in the data)

## Measures of Centre

### Mean

The **mean** ($\bar{x}$) is the arithmetic average of all observations.

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{x_1 + x_2 + \cdots + x_n}{n}$$

- Uses every data value in its calculation
- Sensitive to outliers and skewness
- The balance point of the distribution
- For a population: $\mu = \frac{\sum x_i}{N}$

### Median

The **median** is the middle value of an ordered data set.

- If $n$ is odd: median is the $\frac{n+1}{2}$th value
- If $n$ is even: median is the average of the $\frac{n}{2}$th and $\frac{n}{2}+1$th values
- Resistant to outliers and skewness
- Preferred measure of centre for skewed distributions

### Comparing Mean and Median

- In a **symmetric** distribution: mean $\approx$ median
- In a **right-skewed** distribution: mean > median (mean pulled toward the tail)
- In a **left-skewed** distribution: mean < median (mean pulled toward the tail)

## Measures of Spread

### Range

$$\text{Range} = \text{Maximum} - \text{Minimum}$$

- Simplest measure of spread
- Uses only two values, so it is sensitive to outliers
- Not resistant

### Interquartile Range (IQR)

$$\text{IQR} = Q_3 - Q_1$$

- Spread of the middle 50% of the data
- Resistant to outliers
- Used to identify outliers: a value is an outlier if it is below $Q_1 - 1.5 \times \text{IQR}$ or
  above $Q_3 + 1.5 \times \text{IQR}$

### Standard Deviation

The **standard deviation** ($s$) measures the typical distance of each observation from the mean.

$$s = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n - 1}}$$

The **variance** is $s^2 = \frac{\sum(x_i - \bar{x})^2}{n-1}$.

- Uses every data value; not resistant to outliers
- $s = 0$ only when all values are identical
- $s$ is always greater than or equal to 0
- For a population: $\sigma = \sqrt{\frac{\sum(x_i - \mu)^2}{N}}$

## Five-Number Summary

The **five-number summary** consists of: minimum, Q1, median (Q2), Q3, maximum.

These five values provide a complete picture of the data's centre and spread and are the basis for
the boxplot.

## Normal Distributions

The **normal distribution** is a symmetric, bell-shaped curve described by its mean ($\mu$) and
standard deviation ($\sigma$).

### The Empirical Rule (68-95-99.7 Rule)

For any normal distribution:

- Approximately **68%** of observations fall within $\mu \pm \sigma$
- Approximately **95%** fall within $\mu \pm 2\sigma$
- Approximately **99.7%** fall within $\mu \pm 3\sigma$

### Standardised Scores (z-scores)

$$z = \frac{x - \mu}{\sigma}$$

A z-score measures the number of standard deviations an observation is from the mean.

- $z > 0$: above the mean
- $z < 0$: below the mean
- $z = 0$: at the mean

## Comparing Distributions

When comparing two or more distributions:

1. Compare **centre** (medians for boxplots, means for symmetric data)
2. Compare **spread** (IQR for boxplots, standard deviation for symmetric data)
3. Compare **shape** (symmetry, skewness, modality)
4. Note **outliers** and their potential impact
5. Write comparisons **in context** with specific numerical values

## Transforming Data

Applying a **linear transformation** ($a + bx$) to data:

- Multiplies the measure of centre by $b$ and adds $a$
- Multiplies the measure of spread by $|b|$
- Does not change the shape

Applying a **nonlinear transformation** (e.g., log, square root):

- Can change the shape of the distribution
- Often used to make skewed data more symmetric

## Common Pitfalls

- Confusing categorical and quantitative variables
- Choosing inappropriate class widths for histograms
- Using the mean to describe a skewed distribution without noting the skew
- Forgetting to identify outliers when describing a distribution
- Confusing the standard deviation formula for samples ($n-1$) with populations ($N$)
- Incorrectly interpreting the empirical rule for non-normal distributions
