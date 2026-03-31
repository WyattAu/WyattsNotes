# 2_definitions.md 重构计划

## 诊断总结

用户提供了详细的文档审查报告，指出了四类问题：

1. **结构排序问题** - 概念定义顺序违反依赖关系
2. **准确性问题** - 数学定义不完整或有误
3. **缺失定义** - 高级ML必需的概念未定义
4. **符号一致性** - 符号使用不统一

## 修改计划

### Phase 1: 结构重组

#### 1.1 新的章节顺序

```
1. Sets and Relations (新顶级章节)
   - Power Set
   - Disjoint Sets
   - Equivalence Relation
   - Quotient Space (从 Integration 移入)

2. Topology and Metric Spaces
   - Topology
   - Topological Space
   - Metric Space (从后面移入)
   - Neighborhood (从后面移入)
   - Closed Set
   - Closure and Interior
   - Lipschitz Continuity
   - Polish Space (依赖 Metric Space)
   - Borel σ-algebra
   - Borel Space
   - Standard Borel Space

3. Measure Theory Foundations
   - σ-algebra
   - Measurable Space
   - Generated σ-algebra
   - Measurable Function (新增)
   - Measure
   - σ-finite Measure
   - Reference Measure
   - Pushforward Measure (从 Random Elements 移入)
   - Product Measure (从 Random Elements 移入)
   - Radon-Nikodym Derivative
   - Dirac Measure
   - Empirical Measure
   - Support of a Measure
   - Probability Measure
   - Space of Probability Measure
   - Probability Space
   - Carathéodory's Extension Theorem

4. Random Elements and Distributions
   - Random Element
   - Random Variable
   - Independence of σ-algebras
   - Independence of Random Elements
   - The Law/Induced Distribution
   - Probability Density Function
   - Absolute Continuous Random Element
   - Almost Everywhere and Equivalence

5. Integration and Expectation
   - Indicator Function
   - Simple Function
   - Lebesgue Integral
   - Lebesgue p-spaces
   - Bochner Integrability
   - Fubini-Tonelli Theorem
   - Diffeomorphism
   - Change of Variables

6. Inequalities (新独立章节)
   - Convex Function
   - Jensen's Inequality
   - Markov's Inequality (新增)
   - Chebyshev's Inequality (新增)

7. Functional Analysis and Bochner Integration
   - (保持现有内容)

8. Convergence
   - (保持现有内容)
   - 添加 Uniform Law of Large Numbers

9. Conditioning and Kernels
   - (保持现有内容)
   - 添加 Markov Chain
   - 添加 Stationary Distribution

10. Statistical Models and Information Geometry
    - (保持现有内容)
    - 添加 Score Function
    - 添加 Mutual Information
    - 添加 ELBO
    - 添加 I-Projection vs M-Projection

11. Philosophy
    - (保持现有内容)
```

### Phase 2: 准确性修正

| 定义                | 问题                     | 修正                                     |
| ------------------- | ------------------------ | ---------------------------------------- |
| Pushforward Measure | 缺少 measurable map 定义 | 添加 T: (Ω₁, F₁) → (Ω₂, F₂) 可测映射     |
| Cross-entropy       | 定义顺序问题             | 先定义 H(P,Q) = -E[log q(x)]，再给恒等式 |
| Diffeomorphism      | 未指定可微度             | 添加 C^k 说明                            |
| Dirac Measure       | typo                     | B(S) 而非 B(S)                           |
| LLN/ERM             | 概念混淆                 | 添加 ULLN 区分                           |
| Lebesgue Integral   | 边界情况不清             | 澄清 integrable vs defined               |
| Lipschitz           | 缺少约束                 | 添加 K >= 0                              |

### Phase 3: 新增定义

1. **Measurable Function** - 在 Measurable Space 之后
2. **Uniform Law of Large Numbers** - 在 Convergence 章节
3. **Score Function** - 在 Information Geometry 章节
4. **Mutual Information** - 在 KL Divergence 附近
5. **ELBO** - 在 Information Geometry 章节
6. **I-Projection vs M-Projection** - 在 KL Divergence 之后
7. **Markov Chain** - 在 Markov Kernel 之后
8. **Stationary Distribution** - 在 Markov Chain 之后

### Phase 4: 符号一致性

| 问题     | 修正                                              |
| -------- | ------------------------------------------------- |
| 范数符号 | 统一使用 \lVert \rVert                            |
| 空间符号 | 明确 Ω (样本空间), S (一般可测空间), X (数据空间) |
| 度量符号 | d(X_n(ω), X(ω)) 点态应用                          |

## 执行策略

由于文件较大，采用分模块重写：

1. 先重写头部和 Sets and Relations 章节
2. 重写 Topology and Metric Spaces 章节
3. 重写 Measure Theory 章节
4. 继续后续章节...

## 风险评估

- **内容丢失风险**: 低（使用完整重写策略）
- **格式不一致风险**: 中（需要仔细检查 Markdown/LaTeX 格式）
- **交叉引用断裂**: 需要检查内部链接
