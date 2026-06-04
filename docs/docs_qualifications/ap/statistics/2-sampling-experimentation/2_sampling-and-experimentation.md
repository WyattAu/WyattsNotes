---
title: Sampling and Experimentation
description:
  'AP Statistics sampling and experimentation notes covering sampling methods, experimental design,
  bias, and the distinction between observational studies and experiments.'
date: 2026-06-04T10:00:00.000Z
tags:
  - ap
  - ap-statistics
categories:
  - ap-statistics
slug: sampling-and-experimentation
---

## Population vs Sample

- **Population**: The entire group of individuals about which we want information
- **Sample**: A subset of the population that is actually studied
- **Census**: A study that collects data from every individual in the population
- **Parameter**: A numerical value that describes a population (e.g., $\mu$, $p$)
- **Statistic**: A numerical value that describes a sample (e.g., $\bar{x}$, $\hat{p}$)

The goal of sampling is to estimate population parameters using sample statistics, while accounting
for the inevitable variability between samples.

## Sampling Methods

### Simple Random Sample (SRS)

A simple random sample of size $n$ is one in which every possible sample of size $n$ has an equal
chance of being selected. Each individual in the population is equally likely to be chosen, and
selections are independent.

- Use a random number generator or random digit table
- Every subset of size $n$ is equally likely
- Eliminates selection bias

### Stratified Random Sample

1. Divide the population into **strata** (homogeneous groups based on a characteristic such as age,
   gender, income level)
2. Take a random sample **within each stratum**

- Ensures representation from each group
- Reduces variability compared to an SRS of the same size
- Useful when strata differ significantly

### Cluster Sample

1. Divide the population into **clusters** (often geographic areas or natural groupings)
2. Randomly select entire clusters
3. Sample all (or a random sample of) individuals within the selected clusters

- Practical and cost-effective for large, spread-out populations
- Clusters should be as heterogeneous as possible internally

### Systematic Sample

1. Select every $k$th individual from a list after a random starting point
2. $k = \frac{N}{n}$ where $N$ is the population size and $n$ is the desired sample size

- Simple to implement
- Equivalent to an SRS if the list is randomly ordered

### Multistage Sample

Combines sampling methods across multiple stages. For example: select states (strata), then randomly
select counties within each state (clusters), then randomly select households within each county.

## Sampling Bias

### Types of Bias

- **Undercoverage**: Some groups in the population are less likely to be included (e.g., phone
  survey that only calls landlines misses younger populations)
- **Nonresponse**: Selected individuals refuse to participate or cannot be reached
- **Voluntary response**: Individuals choose to participate (e.g., online polls), typically
  attracting those with strong opinions
- **Convenience sampling**: Selecting individuals who are easiest to reach (not random)
- **Response bias**: The design of the survey or the behaviour of the interviewer influences
  responses (leading questions, social desirability bias, question wording)

### Reducing Bias

- Use probability sampling methods (SRS, stratified, cluster)
- Increase sample size to reduce variability (but does not fix bias)
- Use anonymous surveys to reduce social desirability bias
- Pilot test survey instruments
- Train interviewers to be neutral

## Observational Studies vs Experiments

### Observational Studies

An observational study **observes** individuals and measures variables of interest without
attempting to influence the response.

- Can identify **association** between variables
- Cannot establish **cause and effect**
- Confounding variables may explain observed relationships
- Types: retrospective (looking back), prospective (following forward), cross-sectional

### Experiments

An experiment **deliberately imposes** a treatment on individuals and observes the response.

- Can establish **cause and effect** (if well-designed)
- Key feature: control for confounding variables through random assignment
- The **response variable** is the outcome measured
- The **explanatory variable** (factor) is the variable manipulated

### Confounding Variables

A **confounding variable** is related to both the explanatory variable and the response variable.
Its effect cannot be distinguished from the effect of the explanatory variable, making it impossible
to determine which variable caused the change in the response.

## Principles of Experimental Design

### 1. Random Assignment

Assign experimental units to treatment groups using a random process. This creates groups that are
roughly equivalent on all variables (measured and unmeasured), ensuring that differences in outcomes
can be attributed to the treatments.

### 2. Control

Use a **control group** that receives no treatment, a placebo, or the standard treatment for
comparison. Without a control group, there is no baseline to evaluate the effect of the treatment.

### 3. Replication

Use enough experimental units in each group to reduce the role of chance variation and increase the
reliability of the results.

### 4. Blinding

- **Single-blind**: The subjects do not know which treatment they receive
- **Double-blind**: Neither the subjects nor those who evaluate the response know which treatment
  was received
- Blinding prevents the placebo effect and reduces experimenter bias

## Key Experimental Designs

### Completely Randomised Design

All experimental units are randomly assigned to treatment groups. This is the simplest design and is
appropriate when no known confounding variables exist.

### Randomised Block Design

1. Form blocks of similar experimental units (based on a known confounding variable)
2. Within each block, randomly assign units to treatments

- Reduces variability by accounting for the blocking variable
- More precise comparisons between treatments
- Blocking variable should be related to the response variable

### Matched Pairs Design

A special case of block design where each block contains exactly two units that are matched (e.g.,
twins, before/after on the same subject). Within each pair, one unit receives treatment A and the
other receives treatment B. Random assignment determines which treatment each unit in the pair
receives.

## Statistically Significant Results

An observed effect is **statistically significant** if it is unlikely to have occurred by chance
alone. On the AP exam, "statistically significant" typically means that the observed difference
between groups is larger than what would be expected from random variation.

## Common Pitfalls

- Confusing random **sampling** (generalising to the population) with random **assignment**
  (establishing cause and effect)
- Drawing causal conclusions from observational studies
- Forgetting to use a control group in an experiment
- Confounding the placebo effect with the actual treatment effect
- Undercoverage and voluntary response bias are not fixed by large sample sizes
- Failing to identify and control for confounding variables
