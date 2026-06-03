---
id: intro
title: Introduction to Probabilistic ML
description:
  'Probabilisticml Introduction to notes covering key definitions, core concepts, worked examples,
  and practice questions for revision.'
slug: intro
sidebar_position: 1
date: 2026-01-07T07:50:21.312Z
tags:
  - ML
categories:
  - ML
---

## Abstract

Inspired by Kevin P. Murphy's series of books on probabilisitc machine learning, Marc Peter's book
On Mathematics for Machine Learning and Evarist Gine's book on Mathematical Foundations of
Infinite-Dimensional Statistical Models. With the ever growing field of machines learning, I will
Only be able to cover a small portion of what is available, for more detail and up to date
Appraoches, please refer to latest reports and publications.

## Notes Format

These notes will be written with a format consist of mathematics $\rightarrow$ Specification in
Lean4 $\rightarrow$ Implementation in python with JAX.

### Why Probabilistic Approaches

Traditional machine learning produces point estimates: a single best prediction or parameter value.
Probabilistic machine learning models uncertainty explicitly, producing distributions over
predictions and parameters. This distinction has several practical consequences:

1. **Calibrated uncertainty**: A model that outputs $p(y \mid x)$ instead of $\hat{y}$ expresses
   confidence. A classification model that reports "70% cat, 30% dog" is more informative than one
   that says "cat" with no certainty measure. In medical diagnosis, autonomous driving, and
   financial risk modeling, knowing _how confident_ a prediction is matters as much as the
   prediction itself.

2. **Regularization through priors**: In Bayesian inference, the prior $p(\theta)$ encodes beliefs
   about parameters before observing data. This acts as an implicit regularizer: strong priors
   shrink estimates toward plausible values, reducing overfitting on small datasets. Ridge
   regression and Lasso can both be derived as MAP estimates under Gaussian and Laplacian priors
   respectively.

3. **Model comparison**: Bayesian model selection uses the marginal likelihood (evidence)
   $p(\mathcal{D}) = \int p(\mathcal{D} \mid \theta) p(\theta) d\theta$ to compare models. This
   automatically penalizes model complexity (Occam's razor), selecting models that are neither too
   simple nor too complex.

4. **Active learning**: When a model is uncertain about a prediction, it can request labels for the
   most informative data points. This is the foundation of Bayesian optimization and active
   learning, which reduce the amount of labeled data needed by orders of magnitude.

### Probabilistic vs Deterministic Models

| Aspect          | Deterministic                         | Probabilistic                                         |
| --------------- | ------------------------------------- | ----------------------------------------------------- |
| Output          | Point estimate $\hat{y}$              | Distribution $p(y \mid x, \mathcal{D})$               |
| Parameters      | Single optimal $\hat{\theta}$         | Posterior $p(\theta \mid \mathcal{D})$                |
| Uncertainty     | Not quantified (unless via bootstrap) | Naturally quantified via variance, credible intervals |
| Regularization  | Explicit (L1/L2 penalties, dropout)   | Implicit (through priors)                             |
| Model selection | Cross-validation, AIC/BIC             | Marginal likelihood, Bayes factors                    |
| Small data      | Prone to overfitting                  | Priors stabilize estimates                            |
| Computation     | Often cheaper                         | Often more expensive (integration over parameters)    |

### Real-World Applications

1. **Medical imaging**: Bayesian U-Nets output uncertainty maps alongside predictions. Radiologists
   flag regions where the model is uncertain, improving diagnostic safety.
2. **Autonomous vehicles**: Gaussian process outputs for obstacle positions enable planners to
   account for worst-case scenarios within credible bounds.
3. **Financial modeling**: The Black-Litterman model combines investor priors with market data.
   Bayesian methods handle fat-tailed distributions and regime changes that frequentist models miss.
4. **Climate science**: Gaussian process emulators surrogate expensive climate simulations,
   providing uncertainty bounds on temperature predictions while running in milliseconds.
5. **Natural language processing**: Latent Dirichlet Allocation discovers latent themes in document
   collections. Variational inference makes these models tractable on large corpora.
6. **Drug discovery**: Bayesian optimization balances exploration (uncertain regions) and
   exploitation (promising regions), reducing expensive wet-lab experiments.

### Information Theory Connections

Information theory provides the mathematical language for probabilistic ML:

- **Entropy** $H(X) = -\sum_x p(x) \log p(x)$ measures the minimum average number of bits needed to
  encode outcomes of $X$. Maximum entropy distributions are the least informative models consistent
  with given constraints, serving as principled priors.
- **Mutual information** $I(X; Y) = H(X) - H(X \mid Y)$ quantifies the information one random
  variable provides about another. Used in feature selection, representation learning (INFOGAN), and
  the ELBO in variational inference.
- **Cross-entropy** $H(p, q) = -\sum_x p(x) \log q(x)$ is the standard loss for classification.
  Minimizing cross-entropy is equivalent to maximizing likelihood when $q_\theta$ is the model.
- **KL divergence** $D_{\mathrm{KL}}(p \| q) = \sum_x p(x) \log \frac{p(x)}{q(x)}$ measures how one
  distribution diverges from a reference. Appears in the ELBO, variational objectives, and policy
  gradient methods (PPO).

### Roadmap

The subsequent chapters follow a progression from foundational probability through classical models
to modern deep generative methods:

1. **Fundamentals** -- supervised and unsupervised learning from a probabilistic perspective, loss
   functions as negative log-likelihoods, Bayesian vs frequentist estimation
2. **Probability Distributions** -- exponential family, conjugate priors, Gaussian, categorical,
   Poisson, and their properties
3. **Bayesian Inference** -- exact inference, conjugate analysis, MCMC, variational inference
4. **Gaussian Processes** -- kernel functions, GP regression and classification, sparse
   approximations
5. **Latent Variable Models** -- mixture models, factor analysis, PCA as probabilistic model, EM
   algorithm
6. **Deep Generative Models** -- VAEs, normalizing flows, diffusion models, and training objectives

## Common Pitfalls

1. Not making connections between different topics within the subject to build a coherent
   understanding.

2. Focusing only on content knowledge without developing exam technique and question-answering
   skills.

3. Ignoring feedback from marked work and failing to address recurring weaknesses.

4. Not practising with past papers or exercises under timed conditions.

### Scope and Coverage

These notes cover the mathematical foundations required for understanding modern probabilistic
machine learning:

1. **Probability Theory** — measure-theoretic foundations, $\sigma$-algebras, random variables,
   expectation, conditional probability, and Bayes' theorem
2. **Statistical Inference** — maximum likelihood estimation (MLE), maximum a posteriori (MAP),
   Bayesian inference, and conjugate priors
3. **Linear Models** — Bayesian linear regression, Gaussian processes, and kernel methods
4. **Latent Variable Models** — mixture models, EM algorithm, variational inference
5. **Deep Generative Models** — variational autoencoders (VAEs), normalising flows, diffusion models
6. **Graphical Models** — directed and undirected graphical models, message passing, belief
   propagation

### Mathematical Prerequisites

- **Linear algebra**: matrix decompositions (eigendecomposition, SVD), positive definite matrices,
  trace and determinant properties
- **Calculus**: multivariate calculus, gradients, Hessians, Jacobians
- **Probability**: random variables, expectation, variance, conditional distributions, Bayes'
  theorem
- **Optimization**: gradient descent, convexity, Lagrangian duality

### Software Stack

| Component     | Tool       | Purpose                                   |
| ------------- | ---------- | ----------------------------------------- |
| Array compute | JAX        | Differentiable NumPy with GPU/TPU support |
| Probabilistic | NumPyro    | Probabilistic programming on JAX          |
| Visualization | Matplotlib | Plots and figures                         |
| Formalization | Lean 4     | Proof verification of key theorems        |

### Notation Conventions

- Random variables: uppercase ($X$, $Y$, $Z$); realised values: lowercase ($x$, $y$, $z$).
- Vectors: bold lowercase ($\mathbf{x}$); matrices: bold uppercase ($\mathbf{A}$).
- Distributions: $p(x)$ for density, $P(A)$ for probability of event $A$.
- Expectation: $\mathbb{E}[X]$ or $\mathbb{E}_{x \sim p}[f(x)]$.
- KL divergence: $\mathrm{KL}(p \| q) = \int p(x) \log \frac{p(x)}{q(x)} dx$.

### Key Results Used Throughout

- **Bayes' theorem**:
  $p(\\theta | \\mathcal{D}) = \\frac{p(\\mathcal{D} | \\theta) p(\\theta)}{p(\\mathcal{D})}$, the
  foundation of Bayesian inference.
- **Law of total probability**: $p(x) = \\int p(x | \\theta) p(\\theta)\\,d\\theta$, used to compute
  marginal likelihoods.
- **Jensen's inequality**: for a convex function $f$, $f(\\mathbb{E}[X]) \\leq \\mathbb{E}[f(X)]$.
  This underpins the evidence lower bound (ELBO) used in variational inference.
- **Chain rule of probability**:
  $p(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} p(x_i | x_1, \\ldots, x_{i-1})$, the basis for
  autoregressive models.
- **Central limit theorem**: the sample mean $\\bar{X}_n \\to \\mathcal{N}(\\mu, \\sigma^2/n)$ as
  $n \\to \\infty$, justifying Gaussian approximations.
- **Entropy**: $H(X) = -\\sum_x p(x) \\log p(x)$ measures the uncertainty in a random variable.
- **Cross-entropy**: $H(p, q) = -\\sum_x p(x) \\log q(x)$ is the objective function for
  classification.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
