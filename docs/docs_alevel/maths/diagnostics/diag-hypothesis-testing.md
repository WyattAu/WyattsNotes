---
title: Hypothesis Testing -- Diagnostic Tests
description: Hard diagnostic tests for hypothesis testing covering one-tailed and two-tailed tests, Type I and II errors, critical regions, p-values, and test power at A-Level.
slug: diag-hypothesis-testing
hide_table_of_contents: true
---

# Hypothesis Testing — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for hypothesis testing.

### UT-1: One-Tailed vs Two-Tailed Tests and Critical Region Identification

**Question:**

A machine fills bags of sugar. The weight of sugar in each bag is normally distributed with mean $\mu$ grams and standard deviation 0.5 g. The machine is set to produce bags with mean weight 500 g. A quality control inspector takes a random sample of 16 bags and measures their mean weight.

**(a)** The inspector wishes to test whether the machine is underfilling the bags. State the null and alternative hypotheses for a suitable test.

**(b)** Find the critical region for this test at the 5% significance level. Give your answer in terms of the sample mean $\bar{x}$.

**(c)** A different inspector believes the machine could be overfilling or underfilling, and proposes a two-tailed test. Find the critical region for the two-tailed test at the 5% significance level.

**(d)** The sample mean is found to be $\bar{x} = 499.4$ g. Carry out both the one-tailed test from part (a) and the two-tailed test from part (c). Show that they lead to different conclusions, and explain why.

**(e)** Explain why the one-tailed test has a larger critical region in the tail of interest compared to either tail of the two-tailed test, and discuss the implications for Type I and Type II errors.

[Difficulty: hard. Tests the critical distinction between one-tailed and two-tailed tests and their practical consequences.]

**Solution:**

**(a)** Let $\mu$ be the population mean weight of sugar in bags.

$H_0: \mu = 500$ (the machine is filling correctly)

$H_1: \mu \lt 500$ (the machine is underfilling)

This is a one-tailed test (left-tailed).

**(b)** Under $H_0$: $\bar{X} \sim N(500, \frac{0.5^2}{16}) = N(500, \frac{0.25}{16}) = N(500, 0.015625)$.

So $\sigma_{\bar{X}} = \sqrt{0.015625} = 0.125$.

The critical region is where $\mathrm{P}(\bar{X} \leq c) = 0.05$ under $H_0$:

$$\mathrm{P}\left(Z \leq \frac{c - 500}{0.125}\right) = 0.05$$

$$\frac{c - 500}{0.125} = -1.6449$$

$$c = 500 - 1.6449 \times 0.125 = 500 - 0.2056 = 499.794$$

**Critical region:** $\bar{X} \leq 499.79$ g (to 2 d.p.).

**(c)** For the two-tailed test at the 5% level, each tail has significance $\frac{0.05}{2} = 0.025$.

$H_0: \mu = 500$, $H_1: \mu \neq 500$.

Lower critical value:

$$\mathrm{P}\left(Z \leq \frac{c_1 - 500}{0.125}\right) = 0.025 \implies \frac{c_1 - 500}{0.125} = -1.96$$

$$c_1 = 500 - 1.96 \times 0.125 = 500 - 0.245 = 499.755$$

Upper critical value:

$$\frac{c_2 - 500}{0.125} = 1.96 \implies c_2 = 500 + 0.245 = 500.245$$

**Critical region:** $\bar{X} \leq 499.76$ or $\bar{X} \geq 500.24$ g (to 2 d.p.).

**(d)** **One-tailed test:** $\bar{x} = 499.4$.

Test statistic: $z = \frac{499.4 - 500}{0.125} = \frac{-0.6}{0.125} = -4.8$.

Since $-4.8 \lt -1.6449$, the test statistic falls in the critical region.

**Conclusion (one-tailed):** Reject $H_0$. There is sufficient evidence that the machine is underfilling.

**Two-tailed test:** $z = -4.8$.

Since $-4.8 \lt -1.96$, the test statistic falls in the lower critical region.

**Conclusion (two-tailed):** Reject $H_0$. There is sufficient evidence that the mean fill weight differs from 500 g.

In this case, both tests lead to rejection because the evidence is very strong ($z = -4.8$ is far in the tail). However, consider if $\bar{x} = 499.77$ instead:

- One-tailed: $z = \frac{499.77 - 500}{0.125} = -1.84$. Since $-1.84 \lt -1.6449$, we reject $H_0$.
- Two-tailed: $z = -1.84$. Since $-1.96 \lt -1.84 \lt 1.96$, we do **not** reject $H_0$.

This shows that the one-tailed test is more powerful for detecting deviations in the specified direction, but it should only be used when there is a genuine prior reason to test in one direction only.

**(e)** The one-tailed test allocates the entire 5% significance level to one tail, giving a critical value of $z = \pm 1.645$. The two-tailed test splits the 5% equally between both tails, giving critical values of $z = \pm 1.96$.

In the tail of interest (e.g., the left tail for $H_1: \mu \lt 500$):
- One-tailed: critical value $z = -1.645$
- Two-tailed: critical value $z = -1.96$

The one-tailed critical region extends further into the tail (includes values between $z = -1.96$ and $z = -1.645$ that the two-tailed test would not catch).

**Implications:**
- **Type I error rate:** Both tests have the same overall Type I error rate (5%). The one-tailed test concentrates this 5% in one direction.
- **Type II error rate:** The one-tailed test has a **lower** Type II error rate (higher power) for detecting deviations in the specified direction, because its critical region is larger in that direction.
- **Risk:** The one-tailed test cannot detect deviations in the opposite direction. If the machine is actually overfilling, the one-tailed test (testing for underfilling) will almost certainly fail to reject $H_0$, committing a Type II error.

---

### UT-2: Type I and Type II Errors — Calculation and Interpretation

**Question:**

A doctor uses a blood test to diagnose a condition. The test is based on a biomarker level $B$ which is normally distributed with mean $\mu$ and standard deviation 8. For healthy individuals, $\mu = 50$. For individuals with the condition, $\mu = 62$.

The doctor diagnoses the condition if $B > 58$.

**(a)** Calculate the probability of a Type I error (diagnosing the condition in a healthy individual).

**(b)** Calculate the probability of a Type II error (failing to diagnose the condition in an affected individual).

**(c)** The doctor wants both the Type I error rate and the Type II error rate to be at most 5%. Show that a single threshold value cannot achieve both simultaneously with the given distributions.

**(d)** The doctor increases the sample size to 4 independent blood tests and uses the mean biomarker level $\bar{B}$ as the test statistic. Find the threshold value $c$ such that both the Type I and Type II error rates are at most 5%. If this is not possible, find the threshold that minimises the sum of the two error rates.

[Difficulty: hard. Tests precise calculation of both types of error and the trade-off between them.]

**Solution:**

**(a)** A Type I error occurs when a healthy person is diagnosed with the condition.

For healthy individuals: $B \sim N(50, 8^2) = N(50, 64)$.

$$\mathrm{P}(\text{Type I error}) = \mathrm{P}(B > 58 \mid \mu = 50) = \mathrm{P}\left(Z > \frac{58 - 50}{8}\right) = \mathrm{P}(Z > 1)$$

$$= 1 - \Phi(1) = 1 - 0.8413 = 0.1587$$

The probability of a Type I error is approximately 15.9%.

**(b)** A Type II error occurs when an affected person is not diagnosed.

For affected individuals: $B \sim N(62, 8^2) = N(62, 64)$.

$$\mathrm{P}(\text{Type II error}) = \mathrm{P}(B \leq 58 \mid \mu = 62) = \mathrm{P}\left(Z \leq \frac{58 - 62}{8}\right) = \mathrm{P}(Z \leq -0.5)$$

$$= \Phi(-0.5) = 1 - \Phi(0.5) = 1 - 0.6915 = 0.3085$$

The probability of a Type II error is approximately 30.9%.

**(c)** For the Type I error rate to be at most 5%, we need:

$$\mathrm{P}(B > c \mid \mu = 50) \leq 0.05$$

$$\mathrm{P}\left(Z > \frac{c - 50}{8}\right) \leq 0.05 \implies \frac{c - 50}{8} \geq 1.6449 \implies c \geq 50 + 13.16 = 63.16$$

So $c \geq 63.16$.

For the Type II error rate to be at most 5%, we need:

$$\mathrm{P}(B \leq c \mid \mu = 62) \leq 0.05$$

$$\mathrm{P}\left(Z \leq \frac{c - 62}{8}\right) \leq 0.05 \implies \frac{c - 62}{8} \geq 1.6449 \implies c \geq 62 + 13.16 = 75.16$$

So $c \geq 75.16$.

But for the Type I error rate to be at most 5%, we need $c \geq 63.16$, while for the Type II error rate to be at most 5%, we need $c \geq 75.16$. These are contradictory requirements in the sense that increasing $c$ reduces the Type I error rate but increases the Type II error rate, and vice versa.

Let me verify: at $c = 63.16$, Type I error $= 5\%$ and Type II error $= \mathrm{P}(B \leq 63.16 \mid \mu = 62) = \mathrm{P}(Z \leq 0.145) = 0.558 = 55.8\%$. At $c = 75.16$, Type II error $= 5\%$ but Type I error $= \mathrm{P}(B > 75.16 \mid \mu = 50) = \mathrm{P}(Z > 3.145) \approx 0.08\%$.

As $c$ increases, Type I error decreases and Type II error increases. There is no value of $c$ where both are at most 5% simultaneously.

**(d)** With $n = 4$ independent tests, $\bar{B} \sim N(\mu, \frac{64}{4}) = N(\mu, 16)$, so $\sigma_{\bar{B}} = 4$.

For Type I error $\leq 5\%$: $c \geq 50 + 1.6449 \times 4 = 56.58$

For Type II error $\leq 5\%$: $c \geq 62 + 1.6449 \times 4 = 68.58$

Wait --- for Type II error $\leq 5\%$: we need $\mathrm{P}(\bar{B} \leq c \mid \mu = 62) \leq 0.05$:

$$\mathrm{P}\left(Z \leq \frac{c - 62}{4}\right) \leq 0.05 \implies \frac{c - 62}{4} \geq 1.6449 \implies c \geq 68.58$$

But at $c = 68.58$: Type I error $= \mathrm{P}(\bar{B} > 68.58 \mid \mu = 50) = \mathrm{P}(Z > 4.645) \approx 0$, and Type II error $= 5\%$.

At $c = 56.58$: Type I error $= 5\%$, Type II error $= \mathrm{P}(\bar{B} \leq 56.58 \mid \mu = 62) = \mathrm{P}(Z \leq -1.355) = 8.8\%$.

Still, there is no value where both are $\leq 5\%$. Even with 4 samples, the distributions overlap too much.

To minimise the sum of error rates, we set the threshold where the two PDFs cross:

$$\frac{1}{4\sqrt{2\pi}}\exp\left(-\frac{(c-50)^2}{32}\right) = \frac{1}{4\sqrt{2\pi}}\exp\left(-\frac{(c-62)^2}{32}\right)$$

$$(c - 50)^2 = (c - 62)^2$$

$$c - 50 = -(c - 62) \implies 2c = 112 \implies c = 56$$

At $c = 56$:

Type I error $= \mathrm{P}(\bar{B} > 56 \mid \mu = 50) = \mathrm{P}(Z > 1.5) = 0.0668$

Type II error $= \mathrm{P}(\bar{B} \leq 56 \mid \mu = 62) = \mathrm{P}(Z \leq -1.5) = 0.0668$

Sum $= 0.1336$. This is the threshold that minimises the total error probability, giving equal error rates of 6.68% each.

---

### UT-3: P-value Interpretation and "Accepting" the Null Hypothesis

**Question:**

A researcher tests whether a new drug reduces blood pressure. Under the null hypothesis $H_0$: the drug has no effect, so the change in blood pressure $X \sim N(0, 15^2)$. The alternative hypothesis is $H_1$: the drug reduces blood pressure, i.e., $X \sim N(\mu, 15^2)$ with $\mu \lt 0$.

The researcher tests the drug on 25 patients and finds the mean reduction in blood pressure is $\bar{x} = -5.2$ mmHg.

**(a)** Calculate the p-value for this test.

**(b)** The researcher writes in her report: "The p-value is greater than 0.05, so we accept the null hypothesis. The drug has no effect." Identify two errors in this statement and rewrite it correctly.

**(c)** A colleague argues: "Since the p-value is greater than 0.05, the null hypothesis is probably true." Explain why this is incorrect, making reference to what the p-value actually measures.

**(d)** The researcher doubles the sample size to 50 patients and finds the same mean reduction of $\bar{x} = -5.2$ mmHg. Calculate the new p-value and explain why it is smaller even though the effect size (mean reduction) is the same.

[Difficulty: hard. Tests the most commonly misunderstood aspects of hypothesis testing: p-value interpretation and the language of conclusions.]

**Solution:**

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

## Integration Tests

> Tests synthesis of hypothesis testing with other topics. Requires combining concepts from multiple units.

### IT-1: Choosing the Correct Distribution for a Test (with Statistical Distributions)

**Question:**

A traffic engineer monitors a busy junction and records the number of vehicles passing through per 10-second interval. Over a long period, the mean number of vehicles per 10-second interval is 8.

After a new traffic light system is installed, the engineer records the number of vehicles in 20 randomly selected 10-second intervals:

$$6, 7, 5, 8, 4, 9, 6, 7, 5, 8, 6, 7, 4, 9, 5, 8, 6, 7, 5, 8$$

**(a)** The engineer proposes to use a Poisson distribution to model the data. Before the new system, the number of vehicles $X \sim \text{Po}(8)$. State the mean and variance of $X$, and explain why the Poisson distribution is a reasonable model for this scenario.

**(b)** The engineer wants to test whether the new traffic light system has changed the mean number of vehicles per interval. She decides to use the sample mean. State why using the sample mean directly with a Poisson test is difficult, and explain why a normal approximation would be appropriate.

**(c)** Using the sample data, calculate the sample mean $\bar{x}$ and carry out a hypothesis test at the 5% significance level to determine whether the mean number of vehicles has decreased. Use the normal approximation to the Poisson distribution.

**(d)** An alternative approach is to use the total count $T = \sum x_i$ and model $T \sim \text{Po}(20\lambda)$ under the null hypothesis. Carry out this test and show that it gives the same conclusion as part (c).

[Difficulty: hard. Combines distribution selection with hypothesis testing using two equivalent approaches.]

**Solution:**

**(a)** For $X \sim \text{Po}(8)$:

$$\mathrm{E}(X) = 8, \quad \mathrm{Var}(X) = 8$$

The Poisson distribution is appropriate because:
- Vehicles arrive independently at the junction.
- The rate is approximately constant over time.
- Multiple vehicles can pass through in the same interval (not Bernoulli trials).
- The events (vehicle arrivals) are rare relative to the time scale (individual vehicle arrivals are instantaneous events in a continuous time process).

These are the standard assumptions of the Poisson process.

**(b)** Testing the sample mean directly with a Poisson distribution is difficult because the sum (or mean) of independent Poisson random variables is also Poisson-distributed, but the Poisson distribution is discrete and the critical values must be found from Poisson cumulative probability tables. With a mean of 8 per interval and 20 intervals, the total is Po(160), which is large and would require interpolation in tables.

The normal approximation is appropriate because:
- The sum of independent Poisson variables is Poisson: $T \sim \text{Po}(160)$.
- Since $\lambda = 160$ is large ($\lambda > 10$), the normal approximation $T \approx N(160, 160)$ is very accurate.
- The sample mean $\bar{X} = \frac{T}{n}$ is then approximately $N\left(\lambda, \frac{\lambda}{n}\right) = N\left(8, \frac{160}{400}\right) = N(8, 0.4)$.

**(c)** From the data:

$$\bar{x} = \frac{6+7+5+8+4+9+6+7+5+8+6+7+4+9+5+8+6+7+5+8}{20} = \frac{134}{20} = 6.7$$

$H_0: \lambda = 8$ (mean number of vehicles per interval is 8)

$H_1: \lambda \lt 8$ (mean has decreased)

Under $H_0$: $\bar{X} \approx N(8, 0.4)$, $\sigma = \sqrt{0.4} \approx 0.6325$.

$$z = \frac{6.7 - 8}{0.6325} = \frac{-1.3}{0.6325} = -2.056$$

p-value $= \mathrm{P}(Z \lt -2.056) = 1 - \Phi(2.056) = 1 - 0.9801 = 0.0199$

Since $0.0199 \lt 0.05$, we reject $H_0$.

**Conclusion:** There is sufficient evidence at the 5% significance level to conclude that the new traffic light system has reduced the mean number of vehicles per 10-second interval.

**(d)** The total count is $T = 134$.

Under $H_0$: $T \sim \text{Po}(160)$, approximated by $N(160, 160)$, $\sigma = \sqrt{160} \approx 12.649$.

With continuity correction (since $T$ is discrete and we want $\mathrm{P}(T \leq 134)$):

$$z = \frac{134.5 - 160}{\sqrt{160}} = \frac{-25.5}{12.649} = -2.016$$

p-value $= \mathrm{P}(Z \lt -2.016) = 1 - \Phi(2.016) = 1 - 0.9781 = 0.0219$

Since $0.0219 \lt 0.05$, we reject $H_0$ --- the same conclusion as part (c).

The slight difference in p-values (0.0199 vs 0.0219) is due to the continuity correction in part (d). Without the continuity correction, part (d) gives $z = \frac{134 - 160}{\sqrt{160}} = -2.056$, exactly matching part (c). This confirms the equivalence: testing the sample mean is mathematically identical to testing the total count, since $\bar{X} = \frac{T}{n}$ and dividing by a constant $n$ does not change the significance of the result.

---

### IT-2: Calculating the Probability of Type II Error (with Probability)

**Question:**

A manufacturer claims that the mean lifetime of their batteries is 500 hours. A consumer group believes the mean lifetime is less than 500 hours and tests a random sample of 36 batteries. The lifetimes are normally distributed with standard deviation 40 hours.

**(a)** Find the critical region for a one-tailed test at the 5% significance level.

**(b)** If the true mean lifetime is actually 480 hours, calculate the probability of a Type II error.

**(c)** Calculate the power of the test when the true mean is 480 hours.

**(d)** The consumer group wants the power of the test to be at least 90% when the true mean is 480 hours. Find the minimum sample size required.

[Difficulty: hard. Combines hypothesis testing with probability calculations and optimisation of test power.]

**Solution:**

**(a)** $H_0: \mu = 500$, $H_1: \mu \lt 500$.

Under $H_0$: $\bar{X} \sim N\left(500, \frac{40^2}{36}\right) = N(500, \frac{1600}{36}) = N(500, 44.44)$.

$\sigma_{\bar{X}} = \frac{40}{6} = \frac{20}{3}$.

Critical value:

$$\mathrm{P}(\bar{X} \leq c) = 0.05 \implies \frac{c - 500}{20/3} = -1.6449$$

$$c = 500 - 1.6449 \times \frac{20}{3} = 500 - 10.966 = 489.03$$

**Critical region:** $\bar{X} \leq 489.0$ hours (to 1 d.p.).

We reject $H_0$ if the sample mean is at most approximately 489 hours.

**(b)** A Type II error occurs when we fail to reject $H_0$ even though $H_1$ is true (the true mean is 480).

When the true mean is $\mu = 480$:

$$\bar{X} \sim N\left(480, \frac{1600}{36}\right) = N(480, 44.44)$$

We fail to reject $H_0$ when $\bar{X} > 489.03$:

$$\mathrm{P}(\text{Type II error}) = \mathrm{P}(\bar{X} > 489.03 \mid \mu = 480) = \mathrm{P}\left(Z > \frac{489.03 - 480}{20/3}\right)$$

$$= \mathrm{P}\left(Z > \frac{9.03 \times 3}{20}\right) = \mathrm{P}(Z > 1.355)$$

$$= 1 - \Phi(1.355) = 1 - 0.9123 = 0.0877$$

The probability of a Type II error is approximately 8.8%.

**(c)** The power of the test is the probability of correctly rejecting $H_0$ when $H_1$ is true:

$$\text{Power} = 1 - \mathrm{P}(\text{Type II error}) = 1 - 0.0877 = 0.9123$$

The power is approximately 91.2% when the true mean is 480 hours.

**(d)** We need Power $\geq 0.90$ when $\mu = 480$, i.e., $\mathrm{P}(\text{Type II error}) \leq 0.10$.

Let $n$ be the sample size. Under $H_0$: $\bar{X} \sim N(500, \frac{1600}{n})$.

Critical value: $\mathrm{P}(\bar{X} \leq c) = 0.05$ under $H_0$:

$$c = 500 - 1.6449 \times \frac{40}{\sqrt{n}}$$

Under $H_1$ ($\mu = 480$): $\bar{X} \sim N(480, \frac{1600}{n})$.

$$\mathrm{P}(\text{Type II error}) = \mathrm{P}\left(\bar{X} > 500 - 1.6449 \times \frac{40}{\sqrt{n}} \;\middle|\; \mu = 480\right) \leq 0.10$$

$$\mathrm{P}\left(Z > \frac{500 - 1.6449 \times 40/\sqrt{n} - 480}{40/\sqrt{n}}\right) \leq 0.10$$

$$\mathrm{P}\left(Z > \frac{20\sqrt{n} - 1.6449 \times 40}{40}\right) \leq 0.10$$

$$\mathrm{P}\left(Z > \frac{20\sqrt{n} - 65.796}{40}\right) \leq 0.10$$

For this probability to be at most 0.10, we need:

$$\frac{20\sqrt{n} - 65.796}{40} \geq 1.2816$$

$$20\sqrt{n} - 65.796 \geq 51.264$$

$$20\sqrt{n} \geq 117.06$$

$$\sqrt{n} \geq 5.853$$

$$n \geq 34.26$$

Since $n$ must be an integer, the minimum sample size is $n = 35$.

**Verification:** With $n = 35$: $\sigma_{\bar{X}} = \frac{40}{\sqrt{35}} = 6.761$.

Critical value $= 500 - 1.6449 \times 6.761 = 500 - 11.12 = 488.88$.

$$\mathrm{P}(\text{Type II error} \mid \mu = 480) = \mathrm{P}\left(Z > \frac{488.88 - 480}{6.761}\right) = \mathrm{P}(Z > 1.314) = 0.0944$$

Power $= 1 - 0.0944 = 0.9056 = 90.6\% \geq 90\%$.

With $n = 34$: $\sigma_{\bar{X}} = \frac{40}{\sqrt{34}} = 6.860$.

Critical value $= 500 - 1.6449 \times 6.860 = 488.71$.

$$\mathrm{P}(\text{Type II error} \mid \mu = 480) = \mathrm{P}\left(Z > \frac{488.71 - 480}{6.860}\right) = \mathrm{P}(Z > 1.270) = 0.1020$$

Power $= 89.8\% \lt 90\%$.

So $n = 35$ is the minimum sample size.

---

### IT-3: Testing Whether a Correlation Coefficient is Significant (with Correlation)

**Question:**

A psychologist investigates the relationship between hours of sleep ($S$) and reaction time ($R$, in ms) for a random sample of 15 adults. She calculates the product moment correlation coefficient to be $r = -0.52$.

**(a)** Stating your hypotheses clearly, test at the 5% significance level whether there is evidence of a negative correlation between hours of sleep and reaction time. The critical value for a one-tailed test with $n = 15$ at the 5% level is $-0.441$.

**(b)** Calculate the coefficient of determination $r^2$ and interpret it in the context of this study.

**(c)** The psychologist fits a regression line of $R$ on $S$ and obtains $R = 580 - 28S$. Using this regression line, predict the reaction time for someone who sleeps 8 hours. Explain why this prediction might not be reliable.

**(d)** A colleague collects data from 40 adults and obtains $r = -0.31$. Using the fact that the critical value for a one-tailed test with $n = 40$ at the 5% level is $-0.257$, test whether there is evidence of negative correlation. Compare the p-values (qualitatively) for the two studies and explain the role of sample size in hypothesis testing for correlation.

[Difficulty: hard. Combines hypothesis testing for correlation with regression and interpretation of $r^2$.]

**Solution:**

**(a)** Let $\rho$ be the population correlation coefficient.

$H_0: \rho = 0$ (no linear correlation between sleep and reaction time)

$H_1: \rho \lt 0$ (negative linear correlation)

**Test statistic:** $r = -0.52$

**Critical value:** $-0.441$ (for a one-tailed test at the 5% level with $n = 15$)

Since $r = -0.52 \lt -0.441$, the test statistic falls in the critical region.

**Conclusion:** There is sufficient evidence at the 5% significance level to reject $H_0$ and conclude that there is evidence of a negative correlation between hours of sleep and reaction time in the population.

This means that as hours of sleep increase, reaction time tends to decrease (i.e., reaction time improves with more sleep), which is consistent with established psychological research.

**(b)** The coefficient of determination:

$$r^2 = (-0.52)^2 = 0.2704$$

Interpretation: approximately 27.0% of the variation in reaction time can be explained by the linear relationship with hours of sleep. The remaining 73.0% of the variation is due to other factors (e.g., age, caffeine intake, natural ability, time of day).

Note: $r^2$ is always non-negative, regardless of the sign of $r$. The sign of $r$ tells us the **direction** of the relationship, while $r^2$ tells us the **strength**.

**(c)** For $S = 8$ hours:

$$R = 580 - 28(8) = 580 - 224 = 356 \text{ ms}$$

This prediction might not be reliable because:

1. **Extrapolation:** If the original data was collected from adults with, say, 4--9 hours of sleep, then 8 hours might be near the upper end of the data range. The regression line may not accurately predict beyond the observed range.

2. **Weak correlation:** With $r^2 = 0.27$, only 27% of the variation is explained. The remaining 73% of variation means there is substantial scatter around the regression line, making individual predictions imprecise.

3. **Confounding variables:** Reaction time depends on many factors other than sleep. The prediction assumes all other factors are at their average values, which may not be the case for any specific individual.

**(d)** $H_0: \rho = 0$, $H_1: \rho \lt 0$.

Test statistic: $r = -0.31$.

Critical value: $-0.257$.

Since $-0.31 \lt -0.257$, the test statistic falls in the critical region.

**Conclusion:** There is sufficient evidence at the 5% level to conclude there is a negative correlation.

**Comparison:**

Study 1 ($n = 15$, $r = -0.52$): Stronger correlation but smaller sample. The p-value is small but not extremely so, because with only 15 observations, a correlation of $-0.52$ could plausibly occur by chance with moderate probability.

Study 2 ($n = 40$, $r = -0.31$): Weaker correlation but larger sample. Despite the weaker correlation, the larger sample provides more evidence against $H_0$, and the p-value may be comparable or even smaller.

The relationship between $r$, $n$, and the p-value is governed by the test statistic $t = r\sqrt{\frac{n-2}{1-r^2}}$, which follows a $t$-distribution with $n-2$ degrees of freedom under $H_0$.

For Study 1: $t = -0.52\sqrt{\frac{13}{1-0.2704}} = -0.52\sqrt{17.81} = -0.52 \times 4.22 = -2.19$

For Study 2: $t = -0.31\sqrt{\frac{38}{1-0.0961}} = -0.31\sqrt{42.06} = -0.31 \times 6.49 = -2.01$

The $t$-values are comparable ($-2.19$ vs $-2.01$), confirming that both studies provide similar strength of evidence against $H_0$. The larger sample in Study 2 compensates for the weaker correlation.

This demonstrates that **statistical significance depends on both the strength of the effect (correlation) and the sample size**. A large sample can detect even a weak but real correlation, while a small sample may fail to detect even a strong correlation.
