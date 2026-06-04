---
title: Probability
description:
  'AP Statistics probability notes covering probability rules, conditional probability,
  independence, random variables, binomial and geometric distributions, and the central limit
  theorem.'
date: 2026-06-04T10:00:00.000Z
tags:
  - ap
  - ap-statistics
categories:
  - ap-statistics
slug: probability
---

## Basic Probability Concepts

### Sample Space and Events

- **Sample space ($S$)**: The set of all possible outcomes of an experiment
- **Event**: Any subset of the sample space
- **Probability**: A number between 0 and 1 that measures the likelihood of an event

### Probability Rules

1. **Legitimate probability values**: $0 \leq P(A) \leq 1$ for any event $A$
2. **Sum of probabilities**: $P(S) = 1$ (the probability of the entire sample space is 1)
3. **Complement rule**: $P(A^c) = 1 - P(A)$, where $A^c$ is the complement of $A$

### Addition Rule

For any two events $A$ and $B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

If $A$ and $B$ are **mutually exclusive** (disjoint, cannot both occur):
$$P(A \cup B) = P(A) + P(B)$$

### Multiplication Rule

$$P(A \cap B) = P(A) \cdot P(B | A)$$

If $A$ and $B$ are **independent**: $$P(A \cap B) = P(A) \cdot P(B)$$

### Conditional Probability

$$P(B | A) = \frac{P(A \cap B)}{P(A)}$$

The probability of $B$ **given** that $A$ has occurred. Note that $P(A)$ must be greater than 0.

## Independence

Events $A$ and $B$ are **independent** if the occurrence of one does not affect the probability of
the other:

$$P(B | A) = P(B) \quad \text{and} \quad P(A | B) = P(A)$$

Equivalently: $P(A \cap B) = P(A) \cdot P(B)$

**Important**: Independence is not the same as mutually exclusive. In fact, if two events are both
mutually exclusive and both have non-zero probability, they **cannot** be independent.

### Checking Independence

To check independence on the AP exam:

1. Calculate $P(A)$ and $P(B)$ separately
2. Calculate $P(A \cap B)$
3. Check whether $P(A \cap B) = P(A) \cdot P(B)$

Alternatively, check whether $P(B | A) = P(B)$.

## Disjoint vs Independent

| Property      | Disjoint (Mutually Exclusive) | Independent                                 |
| ------------- | ----------------------------- | ------------------------------------------- |
| Definition    | Cannot occur together         | Occurrence of one does not affect the other |
| $P(A \cap B)$ | $0$                           | $P(A) \cdot P(B)$                           |
| $P(A \cup B)$ | $P(A) + P(B)$                 | $P(A) + P(B) - P(A)P(B)$                    |

## Bayes' Theorem

$$P(A | B) = \frac{P(B | A) \cdot P(A)}{P(B | A) \cdot P(A) + P(B | A^c) \cdot P(A^c)}$$

Used to find the probability of a "cause" given an observed "effect." Useful for medical testing
problems.

### Two-Way Tables and Probability

Given a two-way table:

- **Marginal probability**: probability based on a single variable (row or column total / grand
  total)
- **Joint probability**: probability of both events occurring (cell / grand total)
- **Conditional probability**: probability given a condition (cell / row total or cell / column
  total)

## Discrete Random Variables

A **random variable** assigns a numerical value to each outcome in the sample space.

### Probability Distribution

A table, graph, or formula that gives the probability ($p_i$) for each value ($x_i$) of the random
variable $X$.

Requirements:

1. $\sum p_i = 1$
2. $0 \leq p_i \leq 1$ for each $i$

### Mean (Expected Value)

$$\mu_X = E(X) = \sum x_i \cdot p_i$$

The mean of a random variable is the long-run average of its values over many repetitions.

### Variance and Standard Deviation

$$\sigma_X^2 = \sum (x_i - \mu_X)^2 \cdot p_i = \sum x_i^2 \cdot p_i - \mu_X^2$$

$$\sigma_X = \sqrt{\sigma_X^2}$$

### Rules for Means and Variances

For random variables $X$ and $Y$, and constants $a$ and $b$:

- $\mu_{a + bX} = a + b\mu_X$
- $\mu_{X + Y} = \mu_X + \mu_Y$ (always)
- $\sigma_{a + bX}^2 = b^2\sigma_X^2$
- If $X$ and $Y$ are independent: $\sigma_{X + Y}^2 = \sigma_X^2 + \sigma_Y^2$ and
  $\sigma_{X - Y}^2 = \sigma_X^2 + \sigma_Y^2$

## Binomial Distributions

A binomial setting has four conditions:

1. **Binary**: Each observation has two possible outcomes (success/failure)
2. **Independent**: Observations are independent (or approximately independent if sampling without
   replacement and the population is at least 10 times the sample)
3. **n trials**: A fixed number of trials $n$
4. **p probability**: The probability of success $p$ is the same for each trial

### Binomial Probability

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

### Mean and Standard Deviation

$$\mu = np, \quad \sigma = \sqrt{np(1-p)}$$

## Geometric Distributions

A geometric setting has three conditions:

1. **Binary**: Each trial has two outcomes
2. **Independent**: Trials are independent
3. **p probability**: The probability of success is the same for each trial

The random variable $X$ counts the **number of trials until the first success**.

### Geometric Probability

$$P(X = k) = (1-p)^{k-1} \cdot p$$

### Mean

$$\mu = \frac{1}{p}$$

## Normal Distributions and the Central Limit Theorem

### Central Limit Theorem (CLT)

For a sufficiently large sample size $n$ (typically $n \geq 30$), the sampling distribution of
$\bar{x}$ is approximately normal, regardless of the shape of the population distribution.

$$\mu_{\bar{x}} = \mu, \quad \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

The CLT allows us to use normal probability calculations for sample means even when the population
is not normally distributed.

### Sampling Distribution of $\hat{p}$

For a sample proportion $\hat{p}$ with population proportion $p$ and sample size $n$:

$$\mu_{\hat{p}} = p, \quad \sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}$$

Approximately normal when $np \geq 10$ and $n(1-p) \geq 10$.

## Common Pitfalls

- Confusing $P(A | B)$ with $P(B | A)$
- Assuming events are independent without justification
- Confusing disjoint with independent
- Forgetting to check the 10% condition for the binomial approximation
- Misapplying the central limit theorem with small sample sizes
- Confusing the mean of a random variable with its most probable value
