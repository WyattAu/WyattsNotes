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

$$\mathrm{sample size} = \frac{n}{N} \times \mathrm{total sample size}$$

**Worked Example.** A school has 600 boys and 400 girls. A sample of 50 students is needed. How many
boys and girls should be in the sample?

$$\mathrm{Boys} = \frac{600}{1000} \times 50 = 30, \qquad \mathrm{Girls} = \frac{400}{1000} \times 50 = 20$$

**Worked Example (Higher Tier).** A population of 1200 is divided into three age groups: Under 18
(300), 18--40 (500), Over 40 (400). A stratified sample of 60 is required.

Under 18: $\frac{300}{1200} \times 60 = 15$.

18--40: $\frac{500}{1200} \times 60 = 25$.

Over 40: $\frac{400}{1200} \times 60 = 20$.

### 1.3 Bias in Data Collection

A sample is **biased** if it does not fairly represent the population. Sources of bias include:

- Sampling from a non-representative subset
- Leading questions in surveys
- Non-response (voluntary response bias)
- Using convenience sampling

:::warning
A large sample size does not fix a biased sampling method. A sample of 10000 taken from
only one school is still biased if you want to draw conclusions about all schools in the country.
:::

## 2. Averages and Measures of Central Tendency

### 2.1 Mean, Median, and Mode

| Measure | Definition                        | When to use                         |
| ------- | --------------------------------- | ----------------------------------- |
| Mean    | $\bar{x} = \frac{\sum x}{n}$      | Uses all data; affected by outliers |
| Median  | Middle value when data is ordered | Not affected by outliers            |
| Mode    | Most frequent value               | Useful for categorical data         |

**Worked Example.** Find the mean, median, and mode of: $3, 5, 2, 7, 5, 8, 5, 1, 9, 4$.

Ordered: $1, 2, 3, 4, 5, 5, 5, 7, 8, 9$.

$$\mathrm{Mean} = \frac{1 + 2 + 3 + 4 + 5 + 5 + 5 + 7 + 8 + 9}{10} = \frac{49}{10} = 4.9$$

$$\mathrm{Median} = \frac{5 + 5}{2} = 5$$

$$\mathrm{Mode} = 5$$

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

$$\mathrm{Estimated mean} = \frac{8230}{50} = 164.6 \mathrm{ cm}$$

### 2.4 Estimated Median and Interquartile Range from Grouped Data

To find the median class: find the position $\frac{n}{2}$ and locate it in the cumulative frequency.

**Interquartile range (IQR):** $\mathrm{IQR} = Q_3 - Q_1$.

This is a **measure of spread** that is not affected by outliers.

**Worked Example (Higher Tier).** Using the data above, estimate the median height.

Cumulative frequencies: 5, 17, 35, 45, 50.

Median position: $\frac{50}{2} = 25$. This falls in the $160 \leq h \lt 170$ class (between 17 and
35).

Using linear interpolation within the class:

$$\mathrm{Median} = 160 + \frac{25 - 17}{35 - 17} \times 10 = 160 + \frac{8}{18} \times 10 = 160 + 4.44 = 164.4 \mathrm{ cm}$$

### 2.5 Choosing the Right Average

- Use the **mean** when data is roughly symmetric and there are no extreme outliers.
- Use the **median** when data is skewed or has outliers (e.g., income data).
- Use the **mode** for categorical data (e.g., favourite colour).

**Worked Example (Higher Tier).** The salaries of five employees are: 18000, 22000, 25000, 28000,
95000 (pounds). Compare the mean and median.

Mean $= \frac{188000}{5} = 37600$. Median $= 25000$.

The mean is heavily distorted by the outlier (95000). The median of 25000 is a much better
representation of the typical salary.

## 3. Measures of Spread

### 3.1 Range

$$\mathrm{Range} = \mathrm{maximum value} - \mathrm{minimum value}$$

Simple but affected by outliers.

### 3.2 Interquartile Range

$$\mathrm{IQR} = Q_3 - Q_1$$

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
- $\mathrm{IQR} = 19 - 7.75 = 11.25$

### 3.4 Outliers

A common definition: a value is an **outlier** if it is more than $1.5 \times \mathrm{IQR}$ below
$Q_1$ or above $Q_3$.

$$\mathrm{Lower fence} = Q_1 - 1.5 \times \mathrm{IQR}$$
$$\mathrm{Upper fence} = Q_3 + 1.5 \times \mathrm{IQR}$$

**Worked Example.** Using the data above, identify any outliers.

Lower fence $= 7.75 - 1.5 \times 11.25 = 7.75 - 16.875 = -9.125$.

Upper fence $= 19 + 16.875 = 35.875$.

Since all values are between $-9.125$ and $35.875$, there are no outliers.

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

$$\mathrm{Frequency density} = \frac{\mathrm{frequency}}{\mathrm{class width}}$$

**Worked Example.**

| Distance (km)      | Frequency | Class width | Frequency density |
| ------------------ | --------- | ----------- | ----------------- |
| $0 \leq d \lt 10$  | 15        | 10          | 1.5               |
| $10 \leq d \lt 25$ | 30        | 15          | 2.0               |
| $25 \leq d \lt 40$ | 45        | 15          | 3.0               |
| $40 \leq d \lt 60$ | 20        | 20          | 1.0               |

The bar heights (frequency densities) are 1.5, 2.0, 3.0, and 1.0 respectively.

**Worked Example (Higher Tier).** A histogram has a bar of width 5 and height 4. What frequency does
this bar represent?

$\mathrm{Frequency} = \mathrm{frequency density} \times \mathrm{class width} = 4 \times 5 = 20$.

**Worked Example (Higher Tier).** A histogram has bars with frequency densities 3, 5, 2, and 4 for
classes of width 4, 6, 8, and 3 respectively. Find the total frequency represented.

$3 \times 4 + 5 \times 6 + 2 \times 8 + 4 \times 3 = 12 + 30 + 16 + 12 = 70$.

### 4.3 Cumulative Frequency

A **cumulative frequency** curve (ogive) is plotted by adding frequencies as you go. The $x$-axis
shows the upper boundary of each class.

From the curve you can read:

- Median (at $\frac{n}{2}$)
- Lower quartile $Q_1$ (at $\frac{n}{4}$)
- Upper quartile $Q_3$ (at $\frac{3n}{4}$)

**Worked Example.** Using the distance data above, draw the cumulative frequency curve and estimate
the median distance.

Cumulative frequencies: 15, 45, 90, 110.

Total $n = 110$. Median at position 55.

$Q_1$ at position 27.5, $Q_3$ at position 82.5.

From the ogive, the median falls in the $25 \leq d \lt 40$ class.

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

**Worked Example (Higher Tier).** A scatter graph of exam score against hours of revision shows a
strong positive correlation. The line of best fit passes through $(2, 35)$ and $(10, 85)$. Estimate
the exam score for a student who revised for 7 hours.

Gradient: $m = \frac{85 - 35}{10 - 2} = \frac{50}{8} = 6.25$.

Equation: $y - 35 = 6.25(x - 2)$, so $y = 6.25x + 22.5$.

At $x = 7$: $y = 6.25 \times 7 + 22.5 = 43.75 + 22.5 = 66.25$.

The estimated exam score is approximately 66.

## 5. Probability

### 5.1 Basic Probability

$$P(\mathrm{event}) = \frac{\mathrm{number of favourable outcomes}}{\mathrm{total number of outcomes}}$$

The probability of any event satisfies $0 \leq P(E) \leq 1$.

**Complement rule:** $P(\mathrm{not } E) = 1 - P(E)$

**Mutually exclusive events:** $P(A \mathrm{ or } B) = P(A) + P(B)$

**Independent events:** $P(A \mathrm{ and } B) = P(A) \times P(B)$

**Theorem.** For any events $A$ and $B$: $0 \leq P(A \cap B) \leq \min(P(A), P(B))$.

**Proof.** $A \cap B \subseteq A$, so $P(A \cap B) \leq P(A)$. Similarly $P(A \cap B) \leq P(B)$.
Since probabilities are non-negative, $P(A \cap B) \geq 0$. $\blacksquare$

### 5.2 Combined Events

For two events $A$ and $B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

This is the **addition rule** and holds for all events (not just mutually exclusive ones).

**Worked Example.** The probability that it rains is 0.3. The probability that a student arrives
late is 0.1. The probability that it rains AND the student arrives late is 0.05. Find the
probability that it rains OR the student arrives late.

$$P(R \cup L) = 0.3 + 0.1 - 0.05 = 0.35$$

**Worked Example (Higher Tier).** Are the events "it rains" and "the student arrives late"
independent?

$P(R) \times P(L) = 0.3 \times 0.1 = 0.03$.

But $P(R \cap L) = 0.05 \neq 0.03$.

The events are **not** independent.

### 5.3 Tree Diagrams

Tree diagrams show all possible outcomes of two or more events.

**Rules:**

- Multiply along branches (for "and")
- Add between branches (for "or")

**Worked Example.** A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement.
Find the probability that both are red.

First draw: $P(R) = \frac{3}{8}$

Second draw (after removing one red): $P(R) = \frac{2}{7}$

$$P(\mathrm{both red}) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$$

**Worked Example (Higher Tier).** Using the same bag, find the probability that the two balls are
different colours.

$$P(\mathrm{different}) = P(\mathrm{RB}) + P(\mathrm{BR}) = \frac{3}{8} \times \frac{5}{7} + \frac{5}{8} \times \frac{3}{7} = \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28}$$

**Worked Example (Higher Tier).** A fair coin is tossed three times. Find the probability of getting
exactly two heads.

There are $2^3 = 8$ equally likely outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.

Favourable: HHT, HTH, THH (3 outcomes).

$$P(\mathrm{exactly 2 heads}) = \frac{3}{8}$$

### 5.4 Conditional Probability

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

This reads as "the probability of $A$ given $B$".

**Worked Example.** In a class of 30 students, 18 play football, 12 play rugby, and 6 play both.
Find the probability that a student plays rugby given that they play football.

$$P(R \mid F) = \frac{P(R \cap F)}{P(F)} = \frac{6/30}{18/30} = \frac{6}{18} = \frac{1}{3}$$

**Worked Example (Higher Tier).** A factory produces items in three shifts. Shift A produces 40% of
items with 2% defective, shift B produces 35% with 3% defective, and shift C produces 25% with 1%
defective. An item is found to be defective. What is the probability it came from shift B?

This is Bayes' theorem. Let $D$ be the event "defective" and $B$ be "from shift B".

$$P(D) = 0.40 \times 0.02 + 0.35 \times 0.03 + 0.25 \times 0.01 = 0.008 + 0.0105 + 0.0025 = 0.021$$

$$P(B \mid D) = \frac{P(D \mid B) \cdot P(B)}{P(D)} = \frac{0.03 \times 0.35}{0.021} = \frac{0.0105}{0.021} = 0.5$$

### 5.5 Venn Diagrams and Probability

A Venn diagram with two sets $A$ and $B$ has four regions:

| Region     | Notation      | Description           |
| ---------- | ------------- | --------------------- |
| Left only  | $A \cap B'$   | In $A$ but not in $B$ |
| Right only | $A' \cap B$   | In $B$ but not in $A$ |
| Overlap    | $A \cap B$    | In both               |
| Outside    | $(A \cup B)'$ | In neither            |

**Worked Example.** In a survey of 100 people, 45 like tea, 35 like coffee, and 15 like both. A
person is chosen at random. Find the probability they like neither.

$|T \cup C| = 45 + 35 - 15 = 65$.

$P(\mathrm{neither}) = \frac{100 - 65}{100} = 0.35$.

**Worked Example (Higher Tier).** Using the same data, given that a person likes at least one drink,
find the probability they like tea but not coffee.

$|T \cap C'| = 45 - 15 = 30$.

$P(T \cap C' \mid T \cup C) = \frac{30}{65} = \frac{6}{13}$.

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

**Computational formula (avoids calculating deviations individually):**

$$\sigma = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$$

**Worked Example.** Find the standard deviation of: $4, 8, 6, 5, 3, 9, 7$.

$$\bar{x} = \frac{42}{7} = 6$$

$$\sigma = \sqrt{\frac{(4-6)^2 + (8-6)^2 + (6-6)^2 + (5-6)^2 + (3-6)^2 + (9-6)^2 + (7-6)^2}{7}}$$

$$\sigma = \sqrt{\frac{4 + 4 + 0 + 1 + 9 + 9 + 1}{7}} = \sqrt{\frac{28}{7}} = \sqrt{4} = 2$$

**Worked Example (Higher Tier).** If every value in a data set is increased by 5, what happens to
the mean and standard deviation?

The new mean is $\bar{x} + 5$. The standard deviation is unchanged, because adding a constant shifts
all values by the same amount but does not change their spread.

If every value is multiplied by $k$, the new mean is $k\bar{x}$ and the new standard deviation is
$|k|\sigma$.

## 7. Comparing Distributions (Higher Tier)

### 7.1 Using Box Plots

When comparing two box plots:

- Compare the medians (measure of central tendency)
- Compare the IQRs (measure of spread)
- Compare the ranges
- Comment on skewness (if the median is closer to $Q_1$ or $Q_3$)

**Worked Example.** Class A has median 65, $Q_1 = 50$, $Q_3 = 75$. Class B has median 60,
$Q_1 = 45$, $Q_3 = 70$.

Class A has a higher median (65 vs 60), so on average they scored better. Class A also has a
narrower IQR ($75 - 50 = 25$ vs $70 - 45 = 25$), so both classes have the same spread by this
measure.

### 7.2 Using Histograms

When comparing histograms, compare the shapes (symmetric, skewed, bimodal), the locations of peaks,
and the overall spread.

## Common Pitfalls

- **Using frequency instead of frequency density** in histograms. The bar height is frequency
  density, not frequency.
- **Forgetting that cumulative frequency uses upper class boundaries**, not midpoints.
- **Assuming correlation means causation.** This is one of the most common errors in statistics.
- **Not subtracting $P(A \cap B)$** in the addition rule for non-mutually exclusive events.
- **Confusing "with replacement" and "without replacement"** in probability questions. This changes
  the probabilities on the second draw.
- **Counting the overlap twice** when adding probabilities from a Venn diagram.
- **Using the wrong quartile formula.** For $n$ data points, $Q_1$ is at position $\frac{n+1}{4}$,
  not $\frac{n}{4}$.
- **Forgetting that the area under a histogram bar equals the frequency**, not the height.
- **Misinterpreting the median from grouped data.** The estimated median uses linear interpolation
  within the median class, not just the midpoint.

### 9.1 Independence vs. Mutual Exclusivity

A very common confusion is between independent events and mutually exclusive events. These are
different concepts:

- **Independent events:** The occurrence of one does not affect the probability of the other.
  $P(A \cap B) = P(A) \times P(B)$.
- **Mutually exclusive events:** They cannot occur at the same time. $P(A \cap B) = 0$.

In fact, if two events have positive probability and are mutually exclusive, they cannot be
independent (because $P(A \cap B) = 0 \neq P(A) \times P(B)$ when both are positive).

**Example.** A card is drawn from a standard 52-card deck. Let $A$ be "the card is a heart" and $B$
be "the card is a king". These events are NOT mutually exclusive (the king of hearts is both), but
they ARE independent: $P(A) = 13/52 = 1/4$, $P(B) = 4/52 = 1/13$, and
$P(A \cap B) = 1/52 = (1/4)(1/13)$.

### 9.2 Why the Standard Deviation Uses Squared Differences

The standard deviation uses squared differences from the mean rather than absolute differences for
two key reasons:

1. **Mathematical convenience.** Squared differences are differentiable everywhere, enabling the use
   of calculus. Absolute values have a "corner" at zero.
2. **Additivity.** The variance of a sum of independent random variables equals the sum of their
   variances. This does not hold for mean absolute deviation.

### 9.3 Effect of Coding on Statistical Measures

When data is transformed by a linear coding $y = ax + b$:

- The new mean is $\bar{y} = a\bar{x} + b$.
- The new standard deviation is $s_y = |a| \cdot s_x$.
- Adding a constant $b$ shifts the data but does not change the spread. Multiplying by $a$ scales
  the spread.

**Worked Example.** Data has mean 50 and standard deviation 8. After coding $y = \frac{x - 50}{8}$:
$\bar{y} = \frac{50 - 50}{8} = 0$ and $s_y = \frac{1}{8} \times 8 = 1$.

This process is called **standardisation** and produces data with mean 0 and standard deviation 1.

### 9.4 Outliers and Their Impact

An outlier is a value that lies far from the other data points. There are several ways to detect
outliers:

- Values below $Q_1 - 1.5 \times \mathrm{IQR}$ or above $Q_3 + 1.5 \times \mathrm{IQR}$.
- Values more than 2 standard deviations from the mean (for approximately normal data).

**Impact on measures:**

- The **mean** is heavily affected by outliers because every value contributes equally.
- The **median** is resistant to outliers because it depends only on the middle value(s).
- The **standard deviation** is inflated by outliers.
- The **IQR** is resistant to outliers.

**Example.** Consider the data set $\{2, 3, 4, 5, 100\}$. The mean is $114/5 = 22.8$, heavily pulled
up by the outlier 100. The median is 4, which better represents the "typical" value. The standard
deviation is very large due to the outlier. The IQR is $5 - 3 = 2$, unaffected by the outlier.

### 9.5 Tree Diagrams for Multiple Events

Tree diagrams are useful for visualising multi-stage experiments where events are sequential.

**Worked Example.** A bag contains 4 red and 6 blue counters. Two counters are drawn without
replacement. Find the probability that both are the same colour.

First draw: $P(\mathrm{red}) = 4/10 = 0.4$, $P(\mathrm{blue}) = 6/10 = 0.6$.

Second draw (if first was red): $P(\mathrm{red}) = 3/9 = 1/3$, $P(\mathrm{blue}) = 6/9 = 2/3$.

Second draw (if first was blue): $P(\mathrm{red}) = 4/9$, $P(\mathrm{blue}) = 5/9$.

$$
P(\mathrm{both red}) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}
$$

$$
P(\mathrm{both blue}) = \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} = \frac{1}{3}
$$

$$
P(\mathrm{same colour}) = \frac{2}{15} + \frac{1}{3} = \frac{2}{15} + \frac{5}{15} = \frac{7}{15}
$$

### 9.6 Scatter Graphs and Lines of Best Fit

A **scatter graph** plots pairs of data values to investigate the relationship between two
variables.

**Types of correlation:**

| Correlation | Description                                    |
| ----------- | ---------------------------------------------- |
| Positive    | As one variable increases, so does the other   |
| Negative    | As one variable increases, the other decreases |
| None        | No visible linear pattern                      |

The **line of best fit** is drawn by eye so that it passes through the middle of the data, with
roughly equal numbers of points on each side. It can be used to make predictions:

- **Interpolation:** Predicting within the range of the data (reliable).
- **Extrapolation:** Predicting outside the range of the data (unreliable).

:::warning
Never extrapolate far beyond the data range. The relationship may not hold outside the
observed values.
:::

### 9.7 Frequency Polygons

A frequency polygon is created by plotting the class midpoint against the frequency density (for
grouped data) or frequency (for ungrouped data), and joining the points with straight lines.

The area under a frequency polygon equals the total frequency (just like a histogram).

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

11. A biased dice has $P(\mathrm{even}) = 0.6$ and $P(\mathrm{odd}) = 0.4$. It is rolled twice. Find the
    probability that the sum is greater than 8.

12. Explain the difference between a histogram and a bar chart, and when each is most appropriate.

13. A set of data has $\bar{x} = 20$ and $\sigma = 4$. If every value is increased by 5, find the
    new mean and standard deviation.

14. Two classes took the same test. Class A: median 55, IQR 20. Class B: median 52, IQR 30. Compare
    the performance of the two classes.

15. In a Venn diagram for events $A$ and $B$, $P(A) = 0.7$, $P(B) = 0.5$, and $P(A \mid B) = 0.6$.
    Find $P(A \cap B)$ and $P(A \cup B)$.

16. A fair coin is tossed 5 times. Find the probability of getting at least 3 heads.

17. The mean height of 8 students is 162 cm. When a ninth student joins, the mean becomes 163 cm.
    Find the height of the ninth student.

18. From a histogram, the first three bars have frequency densities 2, 4, and 3 with class widths 5,
    5, and 10. Estimate the total frequency and the mean.

19. A bag contains $n$ red and $n$ blue balls. Two balls are drawn at random without replacement.
    Show that the probability of drawing two balls of the same colour is $\frac{n - 1}{2n - 1}$.

20. Explain why the standard deviation is always non-negative, and state when it equals zero.

### Extended Practice (Higher Tier)

21. The probability that it rains on any given day is 0.3. Find the probability that it rains on
    exactly 2 out of the next 5 days.

22. Two events $A$ and $B$ are mutually exclusive. If $P(A) = 0.35$ and $P(A \cup B) = 0.65$, find
    $P(B)$ and $P(A \cap B)$.

23. A set of data has a mean of 50 and a standard deviation of 8. After applying the coding
    $y = \frac{x - 50}{8}$, find the new mean and standard deviation.

24. The table below shows the distribution of exam scores for a class of 40 students:

    | Score range        | Frequency |
    | ------------------ | --------- |
    | $0 \le s \lt 20$   | 3         |
    | $20 \le s \lt 40$  | 8         |
    | $40 \le s \lt 60$  | 14        |
    | $60 \le s \lt 80$  | 10        |
    | $80 \le s \lt 100$ | 5         |

    Draw a cumulative frequency curve and estimate the median and interquartile range.

25. A bag contains 3 red, 5 blue, and 2 green marbles. Three marbles are drawn at random without
    replacement. Find the probability that exactly two are the same colour.

26. Explain why the mean is affected by outliers but the median is not. Use the data set
    $2, 3, 4, 5, 100$ to illustrate your answer.

27. A fair spinner has the numbers 1, 2, 3, 4. It is spun twice. Find the probability that the
    product of the two numbers is even.

28. The standard deviation of a data set is zero. What does this tell you about the data?

29. Two classes sit the same exam. Class A has 20 students with mean 65 and standard deviation 8.
    Class B has 30 students with mean 70 and standard deviation 10. Find the overall mean.

30. A card is drawn from a standard deck of 52 cards. Find the probability that it is a heart or a
    face card (or both).
