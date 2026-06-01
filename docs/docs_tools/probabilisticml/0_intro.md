---
id: intro
title: Introduction to Probabilistic ML
description: 'Probabilisticml Introduction to notes covering key definitions, core concepts, worked examples, and practice questions for revision.'
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
