---
title: Statistics
date: 2026-04-14
tags:
  - Maths
  - GCSE
categories:
  - Maths
slug: statistics
---

## Statistics

:::info
Board Coverage AQA Paper 2 | Edexcel Paper 2 | OCR Paper 3 (Higher) / Paper 6 (Foundation) |
WJEC Unit 2
:::

## 1. Data Collection

### 1.1 Types of Data

**Qualitative (categorical) data** describes qualities or characteristics (e.g. colour, type of
car).

**Quantitative data** is numerical:

- **Discrete:** can only take specific values (e.g. number of siblings: 0, 1, 2, ...).
- **Continuous:** can take any value within a range (e.g. height, temperature).

### 1.2 Sampling Methods

| Method        | Description                          | Advantage             | Disadvantage                 |
| ------------- | ------------------------------------ | --------------------- | ---------------------------- |
| Simple random | Every member has equal chance        | Unbiased              | May not represent subgroups  |
| Systematic    | Every $k$-th member selected         | Easy to implement     | Can coincide with a pattern  |
| Stratified    | Sample proportionally from subgroups | Represents all groups | Requires knowledge of groups |
| Quota         | Interviewer fills quotas             | Quick                 | Not truly random             |
| Opportunity   | Whoever is available                 | Convenient            | Highly biased                |

**Stratified sampling formula.** If a population of size $N$ contains a subgroup of size $n$, then
the sample from that subgroup should be:

$$\text{sample size} = \frac{n}{N} \times \text{total sample size}$$

**Worked Example.** A school has 600 boys and 400 girls. A sample of 50 students is needed. How many
boys and girls should be in the sample?

$$\text{Boys} = \frac{600}{1000} \times 50 = 30, \qquad \text{Girls} = \frac{400}{1000} \times 50 = 20$$

### 1.3 Bias in Data Collection

A sample is **biased** if it does not fairly represent the population. Sources of bias include:

- Sampling from a non-representative subset
- Leading questions in surveys
- Non-response (voluntary response bias)
- Using convenience sampling

## 2. Averages and Measures of Central Tendency

### 2.1 Mean, Median, and Mode

| Measure | Definition                        | When to use                         |
| ------- | --------------------------------- | ----------------------------------- |
| Mean    | $\bar{x} = \frac{\sum x}{n}$      | Uses all data; affected by outliers |
| Median  | Middle value when data is ordered | Not affected by outliers            |
| Mode    | Most frequent value               | Useful for categorical data         |

**Worked Example.** Find the mean, median, and mode of: $3, 5, 2, 7, 5, 8, 5, 1, 9, 4$.

Ordered: $1, 2, 3, 4, 5, 5, 5, 7, 8, 9$.

$$\text{Mean} = \frac{1 + 2 + 3 + 4 + 5 + 5 + 5 + 7 + 8 + 9}{10} = \frac{49}{10} = 4.9$$

$$\text{Median} = \frac{5 + 5}{2} = 5$$

$$\text{Mode} = 5$$

### 2.2 Mean from a Frequency Table

$$\bar{x} = \frac{\sum (f \times x)}{\sum f}$$

**Worked Example.**

| Score $x$ | Frequency $f$ | $f \times x$ |
| --------- | ------------- | ------------ |
| 1         | 4             | 4            |
| 2         | 7             | 14           |
| 3         | 12            | 36           |
| 4         | 9             | 36           |
| 5         | 3             | 15           |
| **Total** | **35**        | **105**      |

$$\bar{x} = \frac{105}{35} = 3$$

### 2.3 Estimated Mean from Grouped Data

For grouped data, use the **midpoint** of each class as an estimate for $x$.

**Worked Example.**

| Height (cm)          | Frequency $f$ | Midpoint $x$ | $f \times x$ |
| -------------------- | ------------- | ------------ | ------------ |
| $140 \leq h \lt 150$ | 5             | 145          | 725          |
| $150 \leq h \lt 160$ | 12            | 155          | 1860         |
| $160 \leq h \lt 170$ | 18            | 165          | 2970         |
| $170 \leq h \lt 180$ | 10            | 175          | 1750         |
| $180 \leq h \lt 190$ | 5             | 185          | 925          |
| **Total**            | **50**        |              | **8230**     |

$$\text{Estimated mean} = \frac{8230}{50} = 164.6 \text{ cm}$$

### 2.4 Estimated Median and Interquartile Range from Grouped Data

To find the median class: find the position $\frac{n}{2}$ and locate it in the cumulative frequency.

**Interquartile range (IQR):** $\text{IQR} = Q_3 - Q_1$.

This is a **measure of spread** that is not affected by outliers.

## 3. Measures of Spread

### 3.1 Range

$$\text{Range} = \text{maximum value} - \text{minimum value}$$

Simple but affected by outliers.

### 3.2 Interquartile Range

$$\text{IQR} = Q_3 - Q_1$$

Where $Q_1$ is the lower quartile (25th percentile) and $Q_3$ is the upper quartile (75th
percentile).

**Finding quartiles from raw data:**

For $n$ data values in order:

- $Q_1$ position: $\frac{n + 1}{4}$
- $Q_3$ position: $\frac{3(n + 1)}{4}$

### 3.3 Box Plots

A **box plot** displays the minimum, $Q_1$, median, $Q_3$, and maximum.

**Worked Example.** Data set: $2, 5, 7, 8, 10, 12, 15, 18, 22, 25$.

- Minimum: 2
- $Q_1$ position: $\frac{11}{4} = 2.75$, so $Q_1 = 7 + 0.75(8 - 7) = 7.75$
- Median position: 5.5, so median $= \frac{10 + 12}{2} = 11$
- $Q_3$ position: $\frac{33}{4} = 8.25$, so $Q_3 = 18 + 0.25(22 - 18) = 19$
- Maximum: 25
- $\text{IQR} = 19 - 7.75 = 11.25$

### 3.4 Outliers

A common definition: a value is an **outlier** if it is more than $1.5 \times \text{IQR}$ below
$Q_1$ or above $Q_3$.

$$\text{Lower fence} = Q_1 - 1.5 \times \text{IQR}$$
$$\text{Upper fence} = Q_3 + 1.5 \times \text{IQR}$$

## 4. Representing Data

### 4.1 Charts and Diagrams

| Chart                | Best for                                  |
| -------------------- | ----------------------------------------- |
| Bar chart            | Comparing categories                      |
| Pie chart            | Showing proportions                       |
| Pictogram            | Simple visual comparison                  |
| Scatter graph        | Relationship between two variables        |
| Histogram            | Continuous data with unequal class widths |
| Cumulative frequency | Finding medians and quartiles             |

### 4.2 Histograms

In a histogram, the **area** of each bar represents the frequency, not the height.

$$\text{Frequency density} = \frac{\text{frequency}}{\text{class width}}$$

**Worked Example.**

| Distance (km)      | Frequency | Class width | Frequency density |
| ------------------ | --------- | ----------- | ----------------- |
| $0 \leq d \lt 10$  | 15        | 10          | 1.5               |
| $10 \leq d \lt 25$ | 30        | 15          | 2.0               |
| $25 \leq d \lt 40$ | 45        | 15          | 3.0               |
| $40 \leq d \lt 60$ | 20        | 20          | 1.0               |

The bar heights (frequency densities) are 1.5, 2.0, 3.0, and 1.0 respectively.

### 4.3 Cumulative Frequency

A **cumulative frequency** curve (ogive) is plotted by adding frequencies as you go. The $x$-axis
shows the upper boundary of each class.

From the curve you can read:

- Median (at $\frac{n}{2}$)
- Lower quartile $Q_1$ (at $\frac{n}{4}$)
- Upper quartile $Q_3$ (at $\frac{3n}{4}$)

### 4.4 Scatter Graphs and Correlation

**Correlation** describes the relationship between two variables:

| Type           | Description                             |
| -------------- | --------------------------------------- |
| Positive       | As $x$ increases, $y$ tends to increase |
| Negative       | As $x$ increases, $y$ tends to decrease |
| No correlation | No apparent relationship                |

**Line of best fit:** A straight line drawn through the data that approximately follows the trend.
It should pass through the mean point $(\bar{x}, \bar{y})$ and have roughly equal numbers of points
on each side.

:::warning
Correlation does not imply causation. Two variables may be correlated due to a third
factor, or by coincidence.
:::

### 4.5 Interpolation and Extrapolation

- **Interpolation:** Estimating values within the range of the data. Generally reliable.
- **Extrapolation:** Estimating values outside the range of the data. Unreliable.

## 5. Probability

### 5.1 Basic Probability

$$P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$$

The probability of any event satisfies $0 \leq P(E) \leq 1$.

**Complement rule:** $P(\text{not } E) = 1 - P(E)$

**Mutually exclusive events:** $P(A \text{ or } B) = P(A) + P(B)$

**Independent events:** $P(A \text{ and } B) = P(A) \times P(B)$

### 5.2 Combined Events

For two events $A$ and $B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

This is the **addition rule** and holds for all events (not just mutually exclusive ones).

**Worked Example.** The probability that it rains is 0.3. The probability that a student arrives
late is 0.1. The probability that it rains AND the student arrives late is 0.05. Find the
probability that it rains OR the student arrives late.

$$P(R \cup L) = 0.3 + 0.1 - 0.05 = 0.35$$

### 5.3 Tree Diagrams

Tree diagrams show all possible outcomes of two or more events.

**Rules:**

- Multiply along branches (for "and")
- Add between branches (for "or")

**Worked Example.** A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement.
Find the probability that both are red.

First draw: $P(R) = \frac{3}{8}$

Second draw (after removing one red): $P(R) = \frac{2}{7}$

$$P(\text{both red}) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$$

### 5.4 Conditional Probability

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

This reads as "the probability of $A$ given $B$".

**Worked Example.** In a class of 30 students, 18 play football, 12 play rugby, and 6 play both.
Find the probability that a student plays rugby given that they play football.

$$P(R \mid F) = \frac{P(R \cap F)}{P(F)} = \frac{6/30}{18/30} = \frac{6}{18} = \frac{1}{3}$$

### 5.5 Venn Diagrams and Probability

A Venn diagram with two sets $A$ and $B$ has four regions:

| Region     | Notation      | Description           |
| ---------- | ------------- | --------------------- |
| Left only  | $A \cap B'$   | In $A$ but not in $B$ |
| Right only | $A' \cap B$   | In $B$ but not in $A$ |
| Overlap    | $A \cap B$    | In both               |
| Outside    | $(A \cup B)'$ | In neither            |

## 6. Statistical Distributions (Higher Tier)

### 6.1 The Normal Distribution

The **normal distribution** is a bell-shaped curve defined by its mean $\mu$ and standard deviation
$\sigma$.

**Key properties:**

- Symmetric about $\mu$
- Approximately 68% of data lies within $\mu \pm \sigma$
- Approximately 95% of data lies within $\mu \pm 2\sigma$
- Approximately 99.7% of data lies within $\mu \pm 3\sigma$

### 6.2 Standard Deviation

The **standard deviation** measures the average distance of data points from the mean.

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$$

For frequency data:

$$\sigma = \sqrt{\frac{\sum f(x - \bar{x})^2}{\sum f}}$$

**Worked Example.** Find the standard deviation of: $4, 8, 6, 5, 3, 9, 7$.

$$\bar{x} = \frac{42}{7} = 6$$

$$\sigma = \sqrt{\frac{(4-6)^2 + (8-6)^2 + (6-6)^2 + (5-6)^2 + (3-6)^2 + (9-6)^2 + (7-6)^2}{7}}$$

$$\sigma = \sqrt{\frac{4 + 4 + 0 + 1 + 9 + 9 + 1}{7}} = \sqrt{\frac{28}{7}} = \sqrt{4} = 2$$

## Common Pitfalls

- **Using frequency instead of frequency density** in histograms. The bar height is frequency
  density, not frequency.
- **Forgetting that cumulative frequency uses upper class boundaries**, not midpoints.
- **Assuming correlation means causation.** This is one of the most common errors in statistics.
- **Not subtracting $P(A \cap B)$** in the addition rule for non-mutually exclusive events.
- **Confusing "with replacement" and "without replacement"** in probability questions. This changes
  the probabilities on the second draw.
- **Counting the overlap twice** when adding probabilities from a Venn diagram.

## Practice Questions

1. The mean of six numbers is 12. When one number is removed, the mean of the remaining five is 10.
   Find the removed number.

2. A grouped frequency table has classes $0 \leq x \lt 20$, $20 \leq x \lt 40$, $40 \leq x \lt 60$,
   $60 \leq x \lt 80$. Explain why an estimated mean calculated from this table is only an
   approximation.

3. Draw a box plot for the data: $3, 5, 6, 8, 9, 11, 14, 15, 22, 35$. Identify any outliers.

4. A bag contains 4 green and 6 yellow counters. Three counters are drawn without replacement. Find
   the probability that all three are the same colour.

5. In a survey, 60% of people like tea, 40% like coffee, and 25% like both. A person is chosen at
   random. Given that they like tea, find the probability that they also like coffee.

6. Calculate the standard deviation of the following data: $5, 7, 3, 9, 6, 4, 8$.

7. Explain why the mode is the only useful average for categorical data.

8. A histogram has a bar of width 4 and height 3.5. What frequency does this bar represent?

9. Two events $A$ and $B$ are such that $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \cup B) = 0.8$. Are $A$
   and $B$ independent? Justify your answer.

10. The heights of 100 students are summarised in a cumulative frequency table. Explain how you
    would estimate the interquartile range from this table.
