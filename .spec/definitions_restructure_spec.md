# Definitions Document Restructure Specification

## 问题诊断

### 根本原因

文档采用增量式编写，未预先规划概念依赖关系，导致：

1. **前向引用 (Forward Reference)** - 概念在使用后才定义
2. **概念分散** - 相关概念分布在不同章节
3. **定义不严谨** - 措辞缺乏数学精确性

---

## 修改计划

### Phase 1: 结构重排序

**当前顺序 vs 目标顺序:**

| #   | 目标章节                          | 当前位置                                    | 需要的操作                    |
| --- | --------------------------------- | ------------------------------------------- | ----------------------------- |
| 1   | Sets and Relations                | Sets and Relations                          | 保持                          |
| 2   | Topology and Metric Spaces        | Topology and Metric Spaces                  | 保持                          |
| 3   | Measure Theory Foundations        | Measure Theory Foundations                  | 保持                          |
| 4   | Probability Properties            | Probability Properties                      | 保持                          |
| 5   | Random Elements and Distributions | Random Elements and Distributions           | **移除Covariance Matrix**     |
| 6   | Integration and Expectation       | Integration and Expectation                 | **添加LOTUS, 添加Covariance** |
| 7   | Inequalities                      | Inequalities                                | 保持(现在有E支持)             |
| 8   | Convergence                       | Convergence                                 | 保持                          |
| 9   | Functional Analysis               | Functional Analysis and Bochner Integration | **合并Bochner定义**           |
| 10  | Conditioning and Kernels          | Conditioning and Kernels                    | 保持                          |
| 11  | Probability Metrics & Info Theory | 分散                                        | **新建整合章节**              |
| 12  | Statistical Models                | Statistical Models and Information Geometry | 保持                          |
| 13  | Philosophy                        | Philosophy                                  | 保持                          |

---

### Phase 2: 准确性修正 (7项)

#### 2.1 Event定义 (Line 296)

**当前:**

```markdown
an event is a measurable set $A \in \mathcal{F}$ where the probability measure is $P(A)$.
```

**修正为:**

```markdown
an event is a measurable set $A \in \mathcal{F}$ to which a probability $P(A)$ can be assigned.
```

#### 2.2 Equivalence Relation Context (Line 45)

**当前:**

```markdown
$L^p$ spaces are quotient spaces where $f \sim g \iff f=g$ a.e.
```

**修正为:**

```markdown
$L^p$ is the quotient space of $\mathcal{L}^p$ (the space of measurable functions with finite $p$-norm) under the equivalence relation $f \sim g \iff f=g$ $\mu$-a.e. Formally, $L^p = \mathcal{L}^p / \sim$.
```

#### 2.3 Lipschitz Continuity (Line 92-97)

**当前:**

```markdown
The set of 1-Lipschitz functions is denoted $\lVert f \rVert_{\text{Lip}} \le 1$.
```

**修正为:**

```markdown
The **Lipschitz constant** (or Lipschitz semi-norm) is defined as:
$$\lVert f \rVert_{\text{Lip}} = \sup_{x \neq y} \frac{d_Y(f(x), f(y))}{d_X(x, y)}$$
The set of 1-Lipschitz functions consists of all functions satisfying $\lVert f \rVert_{\text{Lip}} \leq 1$.
```

#### 2.4 Almost Everywhere (Line 434-438)

**当前:**

```markdown
$$\mu(\left\{ x\in \Omega: f(x) \neq g(x)\right\}) = 0$$
```

**修正为:**

```markdown
$$\mu(\left\{ x\in \Omega: f(x) \neq g(x)\right\}) = 0$$
assuming the set $\{x \in \Omega : f(x) \neq g(x)\}$ is measurable.
```

#### 2.5 Absolute Continuous Random Element (Line 424-430)

**当前:**

```markdown
$X$ is an absolute continuous random element with respect to Lebesgue measure $\lambda$ if $P_X \ll \lambda$. This is indicated by:
$$P_X \ll \lambda \iff (\forall B \in \mathcal{B}(S), \lambda(B)=0 \implies P_X (B) = 0)$$
```

**修正为:**

```markdown
$X$ is absolutely continuous with respect to a reference measure $\lambda$ if its induced law $P_X$ is absolutely continuous with respect to $\lambda$, i.e., $P_X \ll \lambda$.
```

#### 2.6 Space of Probability Measure (Line 268-274)

**当前:**

```markdown
the space of probability measures $\mathcal{M}_1(S, \mathcal{B}(S))$ is the set of all probability measures where $\forall \mu_i \in \mathcal{M}_1, \space \mu_i: \mathcal{B}(S) \rightarrow [0,1]$.
```

**修正为:**

```markdown
the space of probability measures $\mathcal{M}_1(S)$ is the set of all probability measures on $(S, \mathcal{B}(S))$ such that $\mu(S) = 1$ for all $\mu \in \mathcal{M}_1(S)$.
```

#### 2.7 Regular Conditional Probability vs Distribution

**需要添加区分说明:**
在 Regular Conditional Distribution 定义后添加:

```markdown
**Key Distinction:**

- **Regular Conditional Probability** evaluates the probability of target sets given a sub-$\sigma$-algebra $\mathcal{G}$.
- **Regular Conditional Distribution** is specifically the conditional law of a Random Element $X$ given $\mathcal{G}$.
```

---

### Phase 3: 添加缺失定义 (6项)

#### 3.1 LOTUS (Law of the Unconscious Statistician)

**位置:** Integration and Expectation 章节末尾

```markdown
### Law of the Unconscious Statistician (LOTUS)

Let $X: \Omega \to S$ be a random element with law $P_X$, and let $f: S \to \mathbb{R}$ be measurable. The expectation of $f(X)$ can be computed either in the sample space or the target space:

$$\mathbb{E}[f(X)] = \int_\Omega f(X(\omega)) \, dP(\omega) = \int_S f(x) \, dP_X(x)$$

_Intuition:_ LOTUS justifies computing expectations using the pushforward measure (distribution) rather than the underlying probability space. In ML, this is why we can compute $\mathbb{E}[f(X)]$ using the density $p_X(x)$ without knowing $\Omega$ or $P$.
```

#### 3.2 Central Limit Theorem (CLT)

**位置:** Convergence 章节，LLN之后

```markdown
### Central Limit Theorem (CLT)

Let $X_1, X_2, \dots$ be i.i.d. random variables with mean $\mu$ and finite covariance $\Sigma$. Then:

$$\sqrt{n}(\bar{X}_n - \mu) \xrightarrow{d} \mathcal{N}(0, \Sigma)$$

where $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$.

_Relevance:_ Foundation of asymptotic normality, Fisher Information properties, and explains why neural network weights are often initialized with Gaussian distributions.
```

#### 3.3 Reparameterization Trick

**位置:** Integration and Expectation 章节，Change of Variables之后

```markdown
### Reparameterization Trick

To compute gradients of expectations $\nabla_\phi \mathbb{E}_{z \sim q_\phi}[f(z)]$, we cannot directly push the gradient through the distribution. The reparameterization trick rewrites the sampling process using a deterministic transformation:

If $z = T_\phi(\epsilon)$ where $\epsilon \sim p(\epsilon)$ (a fixed, parameter-free distribution) and $T_\phi$ is a diffeomorphism, then by LOTUS:

$$\nabla_\phi \mathbb{E}_{z \sim q_\phi}[f(z)] = \nabla_\phi \mathbb{E}_{\epsilon \sim p}[f(T_\phi(\epsilon))] = \mathbb{E}_{\epsilon \sim p}[\nabla_\phi f(T_\phi(\epsilon))]$$

_Relevance:_ Foundation of VAE training and differentiable Monte Carlo estimation.
```

#### 3.4 Positive Definite Kernels & Mercer's Theorem

**位置:** Functional Analysis 章节，RKHS定义之后

```markdown
### Positive Definite Kernel

A function $k: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a **positive definite kernel** if:

1. Symmetry: $k(x, y) = k(y, x)$ for all $x, y \in \mathcal{X}$
2. Positive semi-definiteness: For any $n \in \mathbb{N}$, any $x_1, \dots, x_n \in \mathcal{X}$, and any $c_1, \dots, c_n \in \mathbb{R}$:
   $$\sum_{i=1}^n \sum_{j=1}^n c_i c_j k(x_i, x_j) \geq 0$$

### Moore-Aronszajn Theorem

For every positive definite kernel $k$, there exists a unique RKHS $\mathcal{H}_k$ for which $k$ is the reproducing kernel.

_Relevance:_ This theorem guarantees that we can work with kernels directly (e.g., RBF, polynomial) without explicitly constructing the RKHS.
```

#### 3.5 Stochastic Processes & SDEs

**位置:** Conditioning and Kernels 章节开头

```markdown
### Stochastic Process

A **stochastic process** is a collection of random elements $\{X_t\}_{t \in T}$ indexed by a set $T$ (typically time, discrete or continuous), all defined on the same probability space $(\Omega, \mathcal{F}, P)$ and taking values in a measurable space $(S, \mathcal{S})$.

### Wiener Process (Brownian Motion)

A stochastic process $\{W_t\}_{t \geq 0}$ is a **Wiener process** (or standard Brownian motion) if:

1. $W_0 = 0$ almost surely
2. $W_t$ has independent increments: $W_t - W_s \perp W_u - W_v$ for disjoint intervals
3. $W_t - W_s \sim \mathcal{N}(0, t-s)$ for $t > s$
4. $t \mapsto W_t$ is continuous almost surely

_Relevance:_ The foundational continuous-time martingale; essential for diffusion models.

### Stochastic Differential Equation (SDE)

An SDE describes the evolution of a stochastic process:
$$dX_t = f(X_t, t)dt + g(X_t, t)dW_t$$

where $f$ is the drift function, $g$ is the diffusion coefficient, and $W_t$ is a Wiener process.

_Relevance:_ Score-based generative models and diffusion models are formulated as SDEs, where the Stein score $\nabla_x \log p_t(x)$ appears in the reverse-time SDE.
```

#### 3.6 Jensen-Shannon Divergence

**位置:** 新建 Probability Metrics & Information Theory 章节

```markdown
### Jensen-Shannon Divergence

The Jensen-Shannon Divergence (JSD) is a symmetrized and smoothed version of KL divergence:
$$D_{JS}(P \| Q) = \frac{1}{2} D_{KL}(P \| M) + \frac{1}{2} D_{KL}(Q \| M)$$
where $M = \frac{1}{2}(P + Q)$.

_Properties:_

- Symmetric: $D_{JS}(P \| Q) = D_{JS}(Q \| P)$
- Bounded: $0 \leq D_{JS}(P \| Q) \leq \log 2$
- $D_{JS}(P \| Q) = 0 \iff P = Q$

_Relevance:_ The original GAN objective minimizes JSD between the data distribution and generated distribution.
```

---

### Phase 4: 章节重组细节

#### 4.1 移动 Covariance Matrix

**从:** Random Elements and Distributions (Line 388-396)
**到:** Integration and Expectation (在 Expectation with Real-valued Variables 之后)

#### 4.2 合并 Bochner 相关定义

当前 Bochner Integrability (Line 501-511) 和 Bochner Integral (Line 610-622) 有重复。
**操作:** 删除 Functional Analysis 中的 Bochner Integral 定义，保留 Integration and Expectation 中的 Bochner Integrability。

#### 4.3 新建 Probability Metrics & Information Theory 章节

整合以下内容:

- Wasserstein Metric (从 Functional Analysis)
- MMD (从 Functional Analysis)
- Total Variation Distance (从 Statistical Models)
- KL Divergence (从 Statistical Models)
- Jensen-Shannon Divergence (新增)
- Cross-entropy (从 Statistical Models)
- Mutual Information (从 Statistical Models)
- Entropy (从 Statistical Models)
- I-Projection vs M-Projection (从 Statistical Models)

---

## 执行顺序

1. [ ] 修复准确性问题 (Phase 2) - 小范围修改
2. [ ] 移动 Covariance Matrix 到正确位置
3. [ ] 删除重复的 Bochner Integral 定义
4. [ ] 添加 LOTUS
5. [ ] 添加 CLT
6. [ ] 添加 Reparameterization Trick
7. [ ] 添加 Positive Definite Kernels
8. [ ] 添加 Stochastic Processes & SDEs
9. [ ] 创建 Probability Metrics & Information Theory 章节
10. [ ] 添加 Jensen-Shannon Divergence
11. [ ] 添加 RCP vs RCD 区分说明
