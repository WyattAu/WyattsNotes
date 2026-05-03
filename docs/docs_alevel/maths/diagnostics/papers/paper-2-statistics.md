---
title: "Paper 2 — Statistics — Full Diagnostic Exam"
description: "Comprehensive statistics diagnostic paper covering all 5 A-Level topics with worked solutions. Timed at 75 minutes."
slug: diag-paper-2-statistics
hide_table_of_contents: true
---

# Paper 2 — Statistics

**Time allowed:** 75 minutes
**Total marks:** 50
**Topics covered:** All 5 statistics topics

---

## Instructions

Answer all questions. Calculators are permitted.
Show all working — marks are awarded for method as well as final answer.

---

## Questions

### Q1 [10 marks] — Data Representation

The frequency distribution below shows the daily commuting times (in minutes) for 200 employees at a large company:

| Commuting time $t$ (min) | Frequency |
|---|---|
| $0 \lt t \leq 10$ | 12 |
| $10 \lt t \leq 20$ | 38 |
| $20 \lt t \leq 35$ | 56 |
| $35 \lt t \leq 60$ | 65 |
| $60 \lt t \leq 90$ | 29 |

**(a)** A student draws a histogram using the frequency on the vertical axis and the commuting time on the horizontal axis, making all bars the same width. Explain why this histogram is misleading, and state the correct quantity to plot on the vertical axis. [3 marks]

**(b)** Calculate the frequency density for each class and estimate the mean commuting time. [4 marks]

**(c)** An employee claims "the most common commuting time is between 35 and 60 minutes." Determine whether this claim is supported by the data, carefully distinguishing between the class with the highest frequency and the class with the highest frequency density. [3 marks]

### Q2 [10 marks] — Correlation and Regression

An economist collects data on the annual income (in thousands of pounds) and annual savings (in hundreds of pounds) for 7 households:

| Income ($x$, in $\pounds 1000$) | 15 | 22 | 30 | 35 | 42 | 55 | 68 |
|---|---|---|---|---|---|---|---|
| Savings ($y$, in $\pounds 100$) | 3 | 8 | 12 | 18 | 22 | 35 | 48 |

**(a)** Calculate the product moment correlation coefficient (PMCC) for this data. [4 marks]

**(b)** The data is coded using $u = \frac{x}{1000}$ and $v = \frac{y}{100}$. A student claims that the PMCC of $u$ and $v$ will be different from the PMCC of $x$ and $y$ because "the units have changed." Determine whether this claim is correct, and explain your reasoning. [2 marks]

**(c)** Calculate Spearman's rank correlation coefficient for the original data. [2 marks]

**(d)** Explain why the PMCC is the more appropriate measure of correlation here rather than Spearman's rank coefficient, and state one scenario where Spearman's rank would be preferred. [2 marks]

### Q3 [10 marks] — Probability

A medical test for a disease has the following characteristics:
- If a person has the disease, the test is positive with probability 0.95.
- If a person does not have the disease, the test is positive with probability 0.02.
- The prevalence of the disease in the population is 0.01 (1%).

A person is randomly selected from the population and tests positive.

**(a)** Calculate the probability that the person actually has the disease. [3 marks]

**(b)** A prosecutor argues in court: "The test is 95% accurate, so there is a 95% chance the defendant has the disease." Identify the specific error in this reasoning, naming the two probabilities that have been confused. [2 marks]

**(c)** The hospital director wants the positive predictive value to be at least 50%. Find the minimum prevalence of the disease required to achieve this, keeping the test characteristics the same. [3 marks]

**(d)** Explain why $\mathrm{P}(\text{disease} \mid \text{positive}) \neq \mathrm{P}(\text{positive} \mid \text{disease})$ in general, and state the condition under which they would be equal. [2 marks]

### Q4 [10 marks] — Statistical Distributions

For each of the following scenarios, determine whether the binomial distribution $B(n, p)$ is appropriate. If it is, state the values of $n$ and $p$. If it is not, identify which binomial condition is violated and name the correct distribution (if one has been covered).

**(a)** A bag contains 5 red and 3 blue balls. Balls are drawn one at a time without replacement until a red ball is drawn. $X$ is the number of blue balls drawn before the first red ball. [2 marks]

**(b)** A machine produces components, and 2% are defective. Components are packed in boxes of 50. $Y$ is the number of defective components in a randomly selected box. [2 marks]

**(c)** A fair coin is tossed repeatedly until 3 heads have been obtained. $Z$ is the total number of tosses required. [2 marks]

**(d)** A biased die is rolled 100 times. The probability of rolling a 6 is $p = 0.3$. $W$ is the number of times a 6 is rolled in the first 50 rolls. [2 marks]

**(e)** A student answers 10 multiple choice questions, each with 4 options. For the first 5 questions, she knows the answer. For the last 5, she guesses randomly. $V$ is the total number of correct answers. [2 marks]

### Q5 [10 marks] — Hypothesis Testing

A researcher tests whether a new drug reduces blood pressure. Under the null hypothesis $H_0$: the drug has no effect, so the change in blood pressure $X \sim N(0, 15^2)$. The alternative hypothesis is $H_1$: the drug reduces blood pressure, i.e., $X \sim N(\mu, 15^2)$ with $\mu \lt 0$.

The researcher tests the drug on 25 patients and finds the mean reduction in blood pressure is $\bar{x} = -5.2$ mmHg.

**(a)** Calculate the p-value for this test. [3 marks]

**(b)** The researcher writes in her report: "The p-value is greater than 0.05, so we accept the null hypothesis. The drug has no effect." Identify two errors in this statement and rewrite it correctly. [3 marks]

**(c)** A colleague argues: "Since the p-value is greater than 0.05, the null hypothesis is probably true." Explain why this is incorrect, making reference to what the p-value actually measures. [2 marks]

**(d)** The researcher doubles the sample size to 50 patients and finds the same mean reduction of $\bar{x} = -5.2$ mmHg. Calculate the new p-value and explain why it is smaller even though the effect size (mean reduction) is the same. [2 marks]

---

## Solutions

### Q1 — Solution

**(a)** The class widths are not equal: 10, 10, 15, 25, and 30 minutes respectively. When bars are drawn with equal width, the area of each bar is proportional to the frequency, but the **height** should be proportional to the **frequency density**, not the raw frequency. By plotting raw frequency as the bar height with equal-width bars, the visual impression over-represents narrow classes and under-represents wide classes.

The correct quantity for the vertical axis is the **frequency density**, defined as:

$$\text{Frequency density} = \frac{\text{Frequency}}{\text{Class width}}$$

**(b)** Frequency densities:

| Class | Width | Frequency | Frequency density |
|---|---|---|---|
| $0 \lt t \leq 10$ | 10 | 12 | 1.2 |
| $10 \lt t \leq 20$ | 10 | 38 | 3.8 |
| $20 \lt t \leq 35$ | 15 | 56 | 3.73 |
| $35 \lt t \leq 60$ | 25 | 65 | 2.6 |
| $60 \lt t \leq 90$ | 30 | 29 | 0.97 |

To estimate the mean, we use the midpoint of each class:

| Class | Midpoint $x$ | Frequency $f$ | $fx$ |
|---|---|---|---|
| $0 \lt t \leq 10$ | 5 | 12 | 60 |
| $10 \lt t \leq 20$ | 15 | 38 | 570 |
| $20 \lt t \leq 35$ | 27.5 | 56 | 1540 |
| $35 \lt t \leq 60$ | 47.5 | 65 | 3087.5 |
| $60 \lt t \leq 90$ | 75 | 29 | 2175 |

$$\sum f = 200, \quad \sum fx = 7432.5$$

$$\bar{x} = \frac{7432.5}{200} = 37.2 \text{ minutes}$$

**(c)** The class $35 \lt t \leq 60$ has the highest **frequency** (65), so more employees fall in this class than any other. However, the class with the highest **frequency density** is $10 \lt t \leq 20$ (density 3.8), meaning the data is most concentrated (per unit time interval) in the 10--20 minute range.

The employee's claim is supported in the sense that the largest **number** of employees commute for 35--60 minutes. But the claim could be misleading if interpreted as "the most common single commuting time is in this range," since the density is highest in the 10--20 minute range. The wide class width of the 35--60 minute class inflates its frequency.

---

### Q2 — Solution

**(a)** We need $\sum x$, $\sum y$, $\sum x^2$, $\sum y^2$, $\sum xy$.

$$\sum x = 15 + 22 + 30 + 35 + 42 + 55 + 68 = 267$$

$$\sum y = 3 + 8 + 12 + 18 + 22 + 35 + 48 = 146$$

$$\sum x^2 = 225 + 484 + 900 + 1225 + 1764 + 3025 + 4624 = 12247$$

$$\sum y^2 = 9 + 64 + 144 + 324 + 484 + 1225 + 2304 = 4554$$

$$\sum xy = 45 + 176 + 360 + 630 + 924 + 1925 + 3264 = 7324$$

$$S_{xx} = 12247 - \frac{267^2}{7} = 12247 - \frac{71289}{7} = 12247 - 10184.14... = 2062.857$$

$$S_{yy} = 4554 - \frac{146^2}{7} = 4554 - \frac{21316}{7} = 4554 - 3045.143 = 1508.857$$

$$S_{xy} = 7324 - \frac{267 \times 146}{7} = 7324 - \frac{38982}{7} = 7324 - 5568.857 = 1755.143$$

$$r = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}} = \frac{1755.143}{\sqrt{2062.857 \times 1508.857}}$$

$$= \frac{1755.143}{\sqrt{3111755.1}} = \frac{1755.143}{1764.02} = 0.9950 \text{ (4 d.p.)}$$

**(b)** The student's claim is **incorrect**. The PMCC is invariant under linear coding of the form $u = ax + b$ and $v = cy + d$ (where $a, c \neq 0$). Here $u = \frac{1}{1000}x$ and $v = \frac{1}{100}y$, which are linear transformations.

To see why: the PMCC is defined as $r = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}}$. Under coding:

$$S_{uv} = ac \cdot S_{xy}, \quad S_{uu} = a^2 S_{xx}, \quad S_{vv} = c^2 S_{yy}$$

$$r_{uv} = \frac{ac \cdot S_{xy}}{\sqrt{a^2 S_{xx} \cdot c^2 S_{yy}}} = \frac{ac \cdot S_{xy}}{|ac|\sqrt{S_{xx} \cdot S_{yy}}} = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}} = r_{xy}$$

The factors of $a$ and $c$ cancel out completely, so the PMCC is unchanged by scaling or shifting.

**(c)** Ranking the data:

| $x$ | Rank $R_x$ | $y$ | Rank $R_y$ | $d = R_x - R_y$ | $d^2$ |
|---|---|---|---|---|---|
| 15 | 1 | 3 | 1 | 0 | 0 |
| 22 | 2 | 8 | 2 | 0 | 0 |
| 30 | 3 | 12 | 3 | 0 | 0 |
| 35 | 4 | 18 | 4 | 0 | 0 |
| 42 | 5 | 22 | 5 | 0 | 0 |
| 55 | 6 | 35 | 6 | 0 | 0 |
| 68 | 7 | 48 | 7 | 0 | 0 |

$$\sum d^2 = 0$$

$$r_s = 1 - \frac{6 \sum d^2}{n(n^2 - 1)} = 1 - 0 = 1$$

Spearman's rank correlation coefficient is 1 (perfect rank correlation).

**(d)** The PMCC is more appropriate here because:

1. The data appears to follow an approximately linear relationship (PMCC $= 0.995$), so the PMCC correctly captures the strength of this linear association.
2. The PMCC uses the actual data values, giving a more precise measure of the strength of the linear relationship. Spearman's rank discards information about the magnitude of differences between values.

Spearman's rank would be preferred when:
- The relationship is monotonic but **not linear** (e.g., exponential or logarithmic).
- The data contains extreme outliers whose values would distort the PMCC but whose rank positions are not affected.
- The data is ordinal (ranked categories) rather than interval/ratio.

---

### Q3 — Solution

**(a)** Let $D$ = "person has the disease" and $+$ = "test is positive".

We need $\mathrm{P}(D \mid +)$.

By Bayes' theorem (or using a tree diagram / contingency table):

$$\mathrm{P}(D \mid +) = \frac{\mathrm{P}(+ \mid D) \cdot \mathrm{P}(D)}{\mathrm{P}(+)}$$

$$\mathrm{P}(+) = \mathrm{P}(+ \mid D)\mathrm{P}(D) + \mathrm{P}(+ \mid D')\mathrm{P}(D')$$

$$= (0.95)(0.01) + (0.02)(0.99) = 0.0095 + 0.0198 = 0.0293$$

$$\mathrm{P}(D \mid +) = \frac{0.0095}{0.0293} = 0.3242... \approx 0.324$$

So there is approximately a 32.4% chance the person actually has the disease, despite the positive test.

**(b)** The prosecutor has confused:
- $\mathrm{P}(+ \mid D) = 0.95$ (probability of a positive test given the person has the disease)
- $\mathrm{P}(D \mid +) \approx 0.324$ (probability the person has the disease given a positive test)

This is the **prosecutor's fallacy** (also known as the base rate fallacy or confusion of the inverse). The prosecutor has transposed the conditioning, ignoring the base rate (prevalence) of the disease. When the disease is rare (1% prevalence), most positive tests are actually false positives, even with a "95% accurate" test.

**(c)** We need $\mathrm{P}(D \mid +) \geq 0.5$.

Let $p = \mathrm{P}(D)$ be the prevalence. Then:

$$\mathrm{P}(+) = 0.95p + 0.02(1 - p) = 0.95p + 0.02 - 0.02p = 0.93p + 0.02$$

$$\mathrm{P}(D \mid +) = \frac{0.95p}{0.93p + 0.02} \geq 0.5$$

$$0.95p \geq 0.5(0.93p + 0.02) = 0.465p + 0.01$$

$$0.95p - 0.465p \geq 0.01$$

$$0.485p \geq 0.01$$

$$p \geq \frac{0.01}{0.485} = 0.02062...$$

The minimum prevalence is approximately 2.06%. At this prevalence, exactly half of all positive tests are true positives.

**(d)** $\mathrm{P}(D \mid +) \neq \mathrm{P}(+ \mid D)$ in general because they condition on different events. $\mathrm{P}(+ \mid D)$ is the sensitivity of the test (among people with the disease, what fraction test positive), while $\mathrm{P}(D \mid +)$ is the positive predictive value (among people who test positive, what fraction actually have the disease). These are related by Bayes' theorem:

$$\mathrm{P}(D \mid +) = \frac{\mathrm{P}(+ \mid D) \cdot \mathrm{P}(D)}{\mathrm{P}(+)}$$

They would be equal only when $\mathrm{P}(D) = \mathrm{P}(+)$, i.e., when the prevalence equals the overall probability of a positive test. This is a very specific condition that would not generally hold.

---

### Q4 — Solution

**(a)** The binomial distribution is **NOT** appropriate. The condition violated is **independence of trials**: since balls are drawn without replacement, the probability of drawing a red ball changes after each draw. The probability of red on the first draw is $\frac{5}{8}$, but if the first ball is blue, the probability of red on the second draw becomes $\frac{5}{7}$.

The correct distribution is the **geometric distribution** (number of failures before the first success in sampling without replacement follows a negative hypergeometric distribution, but the scenario of "number of blue balls before the first red" without replacement is best modelled by a direct probability calculation for each value).

**(b)** The binomial distribution **IS** appropriate.
- Fixed number of trials: $n = 50$ components per box.
- Two outcomes: defective or not defective.
- Constant probability: $p = 0.02$ (assuming the defect rate is constant and independent between components, which is reasonable for a large production process).
- Independent trials: the defect status of one component does not affect another.

So $Y \sim B(50, 0.02)$.

**(c)** The binomial distribution is **NOT** appropriate. The condition violated is **fixed number of trials**: the number of tosses is not fixed in advance; it depends on when the third head occurs.

The correct distribution is the **negative binomial distribution** (or Pascal distribution). If we define $Z$ as the number of trials until the $r$-th success, then $Z \sim \text{NegBin}(r = 3, p = 0.5)$.

**(d)** The binomial distribution **IS** appropriate.
- Fixed number of trials: $n = 50$ (the first 50 rolls).
- Two outcomes: 6 or not 6.
- Constant probability: $p = 0.3$ for each roll.
- Independent trials: die rolls are independent.

So $W \sim B(50, 0.3)$.

The fact that there are 100 total rolls is irrelevant --- we are only considering the first 50.

**(e)** The binomial distribution is **NOT** appropriate. The condition violated is **constant probability of success**: for the first 5 questions, $\mathrm{P}(\text{correct}) = 1$, but for the last 5 questions, $\mathrm{P}(\text{correct}) = \frac{1}{4}$. The probability of success changes partway through.

The correct approach is to split $V = V_1 + V_2$ where $V_1 \sim B(5, 1)$ (deterministic: always 5) and $V_2 \sim B(5, 0.25)$. Then $V = 5 + V_2$ and $V_2 \sim B(5, 0.25)$.

---

### Q5 — Solution

**(a)** Under $H_0$: $\bar{X} \sim N\left(0, \frac{15^2}{25}\right) = N(0, 9)$, so $\sigma_{\bar{X}} = 3$.

$$z = \frac{\bar{x} - 0}{3} = \frac{-5.2}{3} = -1.733$$

This is a one-tailed test (left-tailed), so the p-value is:

$$\text{p-value} = \mathrm{P}(Z \leq -1.733) = \Phi(-1.733) = 1 - \Phi(1.733) = 1 - 0.9586 = 0.0414$$

The p-value is approximately 0.0414.

Since $0.0414 \lt 0.05$, the result is statistically significant at the 5% level.

**(b)** The researcher's statement contains two errors:

1. **"Accept the null hypothesis"**: We never "accept" $H_0$. The correct language is "there is insufficient evidence to reject $H_0$" or "we fail to reject $H_0$." The distinction matters because a lack of evidence against $H_0$ is not the same as evidence for $H_0$. The drug may have a small effect that the test was not powerful enough to detect.

2. **"The drug has no effect"**: Failing to reject $H_0$ does not prove that $H_0$ is true. The correct statement is that "the data does not provide sufficient evidence to conclude that the drug reduces blood pressure." The drug might still have an effect; we simply cannot detect it with this sample size.

**Corrected statement:** "The p-value is [greater/less] than 0.05, so there is [insufficient/sufficient] evidence at the 5% significance level to reject the null hypothesis that the drug has no effect on blood pressure."

**(c)** The colleague's statement is incorrect because the p-value does **not** measure the probability that $H_0$ is true. The p-value is:

> The probability of obtaining a test statistic at least as extreme as the one observed, **assuming $H_0$ is true**.

The p-value is a conditional probability: $\mathrm{P}(\text{data} \mid H_0)$, not $\mathrm{P}(H_0 \mid \text{data})$.

A large p-value means the observed data is consistent with $H_0$, but it does not mean $H_0$ is probably true. The data could also be consistent with a small but non-zero effect. For example, if the true effect is a reduction of 2 mmHg (which is clinically meaningful), a small sample might still produce a large p-value.

To determine $\mathrm{P}(H_0 \mid \text{data})$ would require Bayesian methods (prior probabilities), which go beyond the scope of classical hypothesis testing.

**(d)** With $n = 50$: $\bar{X} \sim N\left(0, \frac{15^2}{50}\right) = N(0, 4.5)$, so $\sigma_{\bar{X}} = \sqrt{4.5} \approx 2.121$.

$$z = \frac{-5.2}{\sqrt{4.5}} = \frac{-5.2}{2.121} = -2.451$$

$$\text{p-value} = \mathrm{P}(Z \leq -2.451) = 1 - \Phi(2.451) = 1 - 0.9929 = 0.0071$$

The new p-value is approximately 0.0071, which is much smaller than the original 0.0414.

The p-value decreases because with a larger sample, the standard error $\frac{\sigma}{\sqrt{n}}$ is smaller. The same mean reduction of 5.2 mmHg represents a larger number of standard errors away from the null hypothesis value of 0. This makes the evidence against $H_0$ stronger, even though the observed effect size is the same.

This illustrates a fundamental principle: **statistical significance depends on both the effect size and the sample size**. With a large enough sample, even a very small effect can produce a statistically significant result.

---

## Marking Guide

| Question | Topic | Marks | Key Skills Tested |
|----------|-------|------:|-------------------|
| Q1 | Data Representation | 10 | Frequency density vs frequency, grouped mean estimation, unequal class widths |
| Q2 | Correlation and Regression | 10 | PMCC calculation, coding invariance, Spearman's rank, choosing appropriate measure |
| Q3 | Probability | 10 | Bayes' theorem, prosecutor's fallacy, base rate, conditional probability direction |
| Q4 | Statistical Distributions | 10 | Binomial conditions, distribution identification, independence and fixed trials |
| Q5 | Hypothesis Testing | 10 | P-value calculation, correct conclusion language, Type I/II errors, sample size effects |
| **Total** | | **50** | |
