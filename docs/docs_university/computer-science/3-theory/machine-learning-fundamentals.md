---
title: Machine Learning Fundamentals
description:
  'University-level notes on Machine Learning Fundamentals: linear and logistic regression,
  decision trees, neural networks, loss functions, regularization, evaluation metrics,
  and the bias-variance tradeoff.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
slug: machine-learning-fundamentals
---

## 1. Linear Regression

### 1.1 Model

Given features $\mathbf{x} \in \mathbb{R}^d$, predict a continuous target $y$:

$$\hat{y} = \mathbf{w}^T \mathbf{x} + b = w_1 x_1 + w_2 x_2 + \cdots + w_d x_d + b$$

In matrix form (with bias absorbed): $\hat{y} = \mathbf{w}^T \mathbf{x}$ where $\mathbf{x} = [1, x_1, \ldots, x_d]^T$.

### 1.2 Ordinary Least Squares (OLS)

Minimize the **mean squared error**:

$$\mathcal{L}(\mathbf{w}) = \frac{1}{n} \sum_{i=1}^{n} (y_i - \mathbf{w}^T \mathbf{x}_i)^2 = \frac{1}{n} \|\mathbf{y} - X\mathbf{w}\|^2$$

**Closed-form solution:**

$$\mathbf{w}^* = (X^T X)^{-1} X^T \mathbf{y}$$

**Assumptions:**
- $X^T X$ is invertible (features are not linearly dependent).
- OLS is unbiased: $\mathbb{E}[\hat{\mathbf{w}}] = \mathbf{w}_{\text{true}}$.

### 1.3 Gradient Descent

When closed-form is expensive ($d$ large), use iterative optimization:

```
GRADIENT_DESCENT(X, y, α, iterations):
    w = zeros(d+1)  // including bias
    for t = 1 to iterations:
        predictions = X @ w
        gradient = (2/n) * X.T @ (predictions - y)
        w = w - α * gradient
    return w
```

**Learning rate $\alpha$:** Too large → divergence; too small → slow convergence.

**Batch gradient descent:** Uses all $n$ examples per step.
**Stochastic gradient descent (SGD):** Uses one example per step. Noisy but fast.
**Mini-batch SGD:** Uses $B$ examples per step. Balances efficiency and stability.

### 1.4 Variants

```
SGD(X, y, α, epochs, batch_size):
    w = zeros(d+1)
    for epoch = 1 to epochs:
        shuffle data
        for batch in get_batches(X, y, batch_size):
            predictions = batch.X @ w
            gradient = (2/|batch|) * batch.X.T @ (predictions - batch.y)
            w = w - α * gradient
    return w
```

## 2. Logistic Regression

### 2.1 Model

Binary classification: predict $P(y = 1 | \mathbf{x})$:

$$\hat{y} = \sigma(\mathbf{w}^T \mathbf{x} + b) = \frac{1}{1 + e^{-(\mathbf{w}^T \mathbf{x} + b)}}$$

**Sigmoid function $\sigma(z)$:** Maps any real number to $(0, 1)$.

$$\sigma(z) = \frac{1}{1+e^{-z}}, \quad \sigma'(z) = \sigma(z)(1 - \sigma(z))$$

### 2.2 Loss Function: Binary Cross-Entropy

$$\mathcal{L} = -\frac{1}{n} \sum_{i=1}^{n} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]$$

**Gradient:**

$$\nabla_{\mathbf{w}} \mathcal{L} = \frac{1}{n} \sum_{i=1}^{n} (\hat{y}_i - y_i) \mathbf{x}_i$$

**Update rule:**

$$\mathbf{w} \leftarrow \mathbf{w} - \alpha \cdot \frac{1}{n} \sum_{i=1}^{n} (\hat{y}_i - y_i) \mathbf{x}_i$$

### 2.3 Multi-Class: Softmax Regression

For $K$ classes, use the **softmax** function:

$$P(y = k | \mathbf{x}) = \frac{e^{z_k}}{\sum_{j=1}^{K} e^{z_j}}, \quad z_k = \mathbf{w}_k^T \mathbf{x} + b_k$$

**Loss: Categorical cross-entropy:**

$$\mathcal{L} = -\frac{1}{n} \sum_{i=1}^{n} \sum_{k=1}^{K} y_{ik} \log(\hat{y}_{ik})$$

where $y_{ik} = 1$ if example $i$ belongs to class $k$, else $0$.

## 3. Decision Trees

### 3.1 Structure

A tree where:
- **Internal nodes** test a feature (e.g., "is $x_1 \leq 3$?").
- **Leaves** assign a class label (or regression value).
- **Branches** correspond to test outcomes.

### 3.2 Splitting Criteria (Classification)

**Gini impurity:**

$$\text{Gini}(S) = 1 - \sum_{k=1}^{K} p_k^2$$

where $p_k$ is the proportion of class $k$ in set $S$.

**Information gain (Entropy):**

$$H(S) = -\sum_{k=1}^{K} p_k \log_2 p_k$$

$$\text{Gain}(S, A) = H(S) - \sum_{v \in \text{Values}(A)} \frac{|S_v|}{|S|} H(S_v)$$

**Choose the feature and threshold that maximizes gain (or minimizes impurity).**

### 3.3 Splitting Criteria (Regression)

**Reduction in variance:**

$$\text{Split Score} = \text{Var}(S) - \sum_{v} \frac{|S_v|}{|S|} \text{Var}(S_v)$$

### 3.4 Training Algorithm

```
BUILD_TREE(data, max_depth, min_samples):
    if all labels same: return Leaf(majority_label)
    if max_depth == 0 or len(data) < min_samples:
        return Leaf(majority_label)

    best_feature, best_threshold = None, None
    best_score = -∞
    for each feature f:
        for each threshold t in unique values of f:
            score = IMPURITY(data, f, t)
            if score > best_score:
                best_score = score
                best_feature = f
                best_threshold = t

    left = data where data[f] <= t
    right = data where data[f] > t
    return Node(best_feature, best_threshold,
                 BUILD_TREE(left, max_depth-1, min_samples),
                 BUILD_TREE(right, max_depth-1, min_samples))
```

### 3.5 Pruning

**Pre-pruning:** Stop growing early (max depth, min samples per leaf, min impurity decrease).

**Post-pruning (cost-complexity pruning):**

Grow full tree, then prune branches:

$$R_\alpha(T) = R(T) + \alpha |T|$$

where $R(T)$ = training error, $|T|$ = number of leaves, $\alpha$ = complexity parameter.

### 3.6 Ensemble Methods

**Bagging (Random Forest):**

```
RANDOM_FOREST(data, n_trees, B):
    trees = []
    for i = 1 to n_trees:
        sample = bootstrap_sample(data, size = len(data))
        tree = BUILD_TREE(sample, random feature subset at each split)
        trees.append(tree)

    PREDICT(x):
        return majority_vote([tree.predict(x) for tree in trees])
```

**Boosting (Gradient Boosting):**

```
GRADIENT_BOOST(data, n_estimators, lr):
    F(x) = 0  // initial prediction
    residuals = y
    for m = 1 to n_estimators:
        tree = BUILD_TREE(X, residuals, shallow)
        update = tree.predict(X)
        F = F + lr * update
        residuals = y - F  // new residuals (negative gradient)
    return F
```

## 4. Neural Networks

### 4.1 Perceptron

A single neuron:

$$\hat{y} = \sigma(\mathbf{w}^T \mathbf{x} + b) = \sigma\left(\sum_{j=1}^{d} w_j x_j + b\right)$$

**Limitation:** Can only learn linearly separable functions (single-layer cannot solve XOR).

### 4.2 Multi-Layer Perceptron (MLP)

Layers of neurons connected by weights:

```
Layer l=0 (input):   a[0] = x          (d neurons)
Layer l=1 (hidden):  z[1] = W[1]a[0] + b[1]
                     a[1] = activation(z[1])    (h neurons)
Layer l=2 (output):  z[2] = W[2]a[1] + b[2]
                     a[2] = activation(z[2])    (K neurons)
```

### 4.3 Activation Functions

| Function     | Formula                      | Range    | Properties                  |
| ------------ | ---------------------------- | -------- | --------------------------- |
| **Sigmoid**  | $\sigma(z) = \frac{1}{1+e^{-z}}$ | $(0, 1)$ | Smooth, vanishing gradient  |
| **Tanh**     | $\tanh(z) = \frac{e^z-e^{-z}}{e^z+e^{-z}}$ | $(-1, 1)$ | Zero-centered             |
| **ReLU**     | $\text{ReLU}(z) = \max(0, z)$ | $[0, \infty)$ | Fast, but "dead neurons"   |
| **Leaky ReLU**| $\max(\alpha z, z)$, $\alpha = 0.01$ | $(-\infty, \infty)$ | Fixes dead neurons   |
| **Softmax**  | $\frac{e^{z_k}}{\sum_j e^{z_j}}$ | $(0, 1)^K$ | For multi-class output    |

### 4.4 Backpropagation

Compute gradients layer by layer using the **chain rule**.

```
FORWARD(x):
    a[0] = x
    for l = 1 to L:
        z[l] = W[l] @ a[l-1] + b[l]
        a[l] = activation(z[l])
    return a[L]

BACKWARD(x, y):
    // Forward pass to compute activations
    activations = FORWARD(x)

    // Output layer gradient
    δ[L] = ∂L/∂z[L] = (a[L] - y) * activation'(z[L])

    // Backward pass
    for l = L-1 downto 1:
        δ[l] = (W[l+1].T @ δ[l+1]) * activation'(z[l])

    // Compute parameter gradients
    for l = 1 to L:
        dW[l] = δ[l] @ a[l-1].T / n
        db[l] = mean(δ[l], axis=1)

    return dW, db
```

**Update rule (SGD):**

$$W[l] \leftarrow W[l] - \alpha \cdot dW[l]$$
$$b[l] \leftarrow b[l] - \alpha \cdot db[l]$$

### 4.5 Universal Approximation Theorem

A feedforward neural network with a single hidden layer containing a finite number of neurons can approximate any continuous function on compact subsets of $\mathbb{R}^d$ to arbitrary precision.

**Caveat:** The theorem does not say the network will *learn* easily, or that a shallow network is practical.

## 5. Loss Functions

### 5.1 Regression Losses

**Mean Squared Error (MSE):**

$$\mathcal{L}_{\text{MSE}} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

Sensitive to outliers (quadratic penalty).

**Mean Absolute Error (MAE):**

$$\mathcal{L}_{\text{MAE}} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$

More robust to outliers (linear penalty).

**Huber loss:** MSE for small errors, MAE for large errors:

$$\mathcal{L}_\delta = \begin{cases} \frac{1}{2}(y - \hat{y})^2 & \text{if } |y - \hat{y}| \leq \delta \\ \delta(|y - \hat{y}| - \frac{\delta}{2}) & \text{otherwise} \end{cases}$$

### 5.2 Classification Losses

**Binary Cross-Entropy:**

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{n} \sum_{i=1}^{n} [y_i \log \hat{y}_i + (1 - y_i) \log(1 - \hat{y}_i)]$$

**Categorical Cross-Entropy:**

$$\mathcal{L}_{\text{CE}} = -\sum_{k=1}^{K} y_k \log \hat{y}_k$$

**Hinge loss (SVM):**

$$\mathcal{L}_{\text{hinge}} = \max(0, 1 - y \cdot \hat{y})$$

### 5.3 Loss Selection Guide

| Task            | Loss Function              |
| --------------- | -------------------------- |
| Regression      | MSE, MAE, Huber           |
| Binary          | Binary Cross-Entropy       |
| Multi-class     | Categorical Cross-Entropy  |
| Imbalanced      | Focal loss, weighted CE    |

## 6. Regularization

### 6.1 L1 Regularization (Lasso)

$$\mathcal{L}_{\text{L1}} = \mathcal{L}_{\text{base}} + \lambda \sum_{j=1}^{d} |w_j|$$

**Effect:** Produces **sparse** solutions (drives some weights to exactly zero). Useful for feature selection.

### 6.2 L2 Regularization (Ridge)

$$\mathcal{L}_{\text{L2}} = \mathcal{L}_{\text{base}} + \lambda \sum_{j=1}^{d} w_j^2 = \mathcal{L}_{\text{base}} + \lambda \|\mathbf{w}\|^2$$

**Effect:** Penalizes large weights. Shrinks all weights toward zero but rarely makes them exactly zero.

**Update rule (L2):**

$$\mathbf{w} \leftarrow \mathbf{w} - \alpha \left(\nabla \mathcal{L} + 2\lambda \mathbf{w}\right)$$

### 6.3 Elastic Net

Combines L1 and L2:

$$\mathcal{L} = \mathcal{L}_{\text{base}} + \lambda_1 \|\mathbf{w}\|_1 + \lambda_2 \|\mathbf{w}\|^2$$

Benefits of both: sparse features + stable coefficients.

### 6.4 Dropout

During training, randomly set neuron activations to zero with probability $p$:

```
DROPOUT_LAYER(a, p, training):
    if training:
        mask = random_bernoulli(1-p, size=a.shape) / (1-p)
        return a * mask
    else:
        return a
```

**Effect:** Prevents co-adaptation of neurons. Implicit ensemble of sub-networks. Test time: no dropout (use full network, scaled by $1-p$).

### 6.5 Early Stopping

Monitor validation loss during training. Stop when validation loss starts increasing:

```
EARLY_STOPPING(train_fn, patience):
    best_val_loss = INF
    patience_counter = 0
    for epoch in epochs:
        train_fn(epoch)
        val_loss = evaluate_validation()
        if val_loss < best_val_loss:
            best_val_loss = val_loss
            save_model()
            patience_counter = 0
        else:
            patience_counter += 1
            if patience_counter >= patience:
                break
    return best_model
```

### 6.6 Regularization Comparison

| Method        | Effect                     | When to Use                    |
| ------------- | -------------------------- | ------------------------------ |
| L1 (Lasso)    | Sparsity, feature selection | Many irrelevant features       |
| L2 (Ridge)    | Weight shrinkage           | All features potentially useful |
| Elastic Net   | Both                       | Correlated features            |
| Dropout       | Prevents co-adaptation     | Neural networks                |
| Early stopping | Prevents overfitting     | All models, especially NNs     |

## 7. Evaluation Metrics

### 7.1 Confusion Matrix

|                | Predicted Positive | Predicted Negative |
| -------------- | ------------------ | ------------------ |
| **Actual Positive** | TP (True Positive)  | FN (False Negative) |
| **Actual Negative** | FP (False Positive) | TN (True Negative)  |

### 7.2 Classification Metrics

**Accuracy:** $\frac{TP + TN}{TP + TN + FP + FN}$

Misleading with imbalanced classes (e.g., 99% negative: predict all negative → 99% accuracy).

**Precision:** $\frac{TP}{TP + FP}$ (of all positive predictions, how many were correct?)

**Recall (Sensitivity):** $\frac{TP}{TP + FN}$ (of all actual positives, how many were found?)

**F1 Score:** Harmonic mean of precision and recall:

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

**Specificity:** $\frac{TN}{TN + FP}$ (of all actual negatives, how many were correctly identified?)

**$F_\beta$ Score:** Weighted harmonic mean (gives $\beta$ times more importance to recall):

$$F_\beta = (1 + \beta^2) \cdot \frac{\text{Precision} \cdot \text{Recall}}{(\beta^2 \cdot \text{Precision}) + \text{Recall}}$$

### 7.3 ROC Curve and AUC

**ROC curve:** Plots TPR (Recall) vs. FPR ($\frac{FP}{FP + TN}$) at various classification thresholds.

**AUC (Area Under Curve):**
- AUC = 1.0: Perfect classifier.
- AUC = 0.5: Random guessing.
- AUC < 0.5: Worse than random (invert predictions).

**Interpretation:** Probability that a randomly chosen positive example is ranked higher than a randomly chosen negative example.

### 7.4 Regression Metrics

**MSE:** $\frac{1}{n}\sum(y_i - \hat{y}_i)^2$

**RMSE:** $\sqrt{\text{MSE}}$ (same units as $y$)

**MAE:** $\frac{1}{n}\sum|y_i - \hat{y}_i|$

**$R^2$ (Coefficient of Determination):**

$$R^2 = 1 - \frac{\sum(y_i - \hat{y}_i)^2}{\sum(y_i - \bar{y})^2}$$

$R^2 = 1$: Perfect fit. $R^2 = 0$: Predicts mean. $R^2 < 0$: Worse than predicting mean.

### 7.5 Cross-Validation

**k-fold cross-validation:**

```
K_FOLD_CV(model_fn, X, y, k):
    indices = shuffle(range(len(X)))
    fold_size = len(X) // k
    scores = []
    for i in 0 to k-1:
        val_idx = indices[i*fold_size : (i+1)*fold_size]
        train_idx = all other indices
        model = model_fn(X[train_idx], y[train_idx])
        score = evaluate(model, X[val_idx], y[val_idx])
        scores.append(score)
    return mean(scores), std(scores)
```

**Stratified k-fold:** Maintains class distribution in each fold (important for imbalanced data).

## 8. Bias-Variance Tradeoff

### 8.1 Decomposition

For a model predicting $\hat{f}(\mathbf{x})$ of true function $f(\mathbf{x})$ with noise $\epsilon$:

$$\text{Expected Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Error}$$

where:

$$\text{Bias}^2 = (\mathbb{E}[\hat{f}(\mathbf{x})] - f(\mathbf{x}))^2$$
$$\text{Variance} = \mathbb{E}[(\hat{f}(\mathbf{x}) - \mathbb{E}[\hat{f}(\mathbf{x})])^2]$$
$$\text{Irreducible Error} = \sigma^2_\epsilon$$

### 8.2 Tradeoff

| Model Complexity | Bias        | Variance   | Total Error |
| ---------------- | ----------- | ---------- | ----------- |
| Low (underfit)   | High        | Low        | High        |
| Optimal          | Moderate    | Moderate   | Minimal     |
| High (overfit)   | Low         | High       | High        |

### 8.3 Overfitting and Underfitting

**Overfitting:** Model learns noise in training data. Training error $\ll$ validation error.

**Signs:**
- High training accuracy, low validation accuracy.
- Large gap between training and test performance.

**Remedies:**
- More training data.
- Reduce model complexity (fewer parameters, shallower tree, smaller network).
- Regularization (L1, L2, dropout).
- Early stopping.
- Cross-validation for hyperparameter tuning.

**Underfitting:** Model fails to capture the underlying pattern. Both training and validation error are high.

**Remedies:**
- Increase model complexity.
- Add more features.
- Reduce regularization.
- Train longer.

### 8.4 Learning Curves

Plot training and validation error vs. training set size:

- **High bias (underfit):** Both curves plateau at high error, close together.
- **High variance (overfit):** Training error low, validation error high with a gap.
- **Good fit:** Both errors low and converging.

## 9. Common Pitfalls

1. **Training without splitting data.** Evaluating on training data gives overly optimistic metrics. Always use train/validation/test splits or cross-validation.

2. **Using accuracy on imbalanced datasets.** A 99% negative dataset with a model that always predicts negative achieves 99% accuracy but learns nothing. Use precision, recall, F1, or AUC instead.

3. **Leaking information from test to train.** Fitting preprocessing (scaling, imputation) on the entire dataset before splitting. Fit transformers on training data only, then apply to validation/test.

4. **Ignoring feature scaling.** Gradient descent converges faster with standardized features. Unscaled features cause slow convergence and may bias regularized models.

5. **Setting learning rate too high or too low.** Too high: loss diverges or oscillates. Too low: training is prohibitively slow. Use learning rate schedules or adaptive optimizers (Adam, RMSprop).

6. **Overfitting to validation set through hyperparameter tuning.** Repeated tuning on the same validation set causes "validation leakage." Use nested cross-validation or a held-out test set touched only once.

7. **Ignoring data distribution shifts.** If training and test data come from different distributions (e.g., different time periods), model performance may degrade. Monitor for covariate shift and concept drift.

## Summary

- **Linear regression** (OLS, gradient descent) predicts continuous targets; **logistic regression** predicts probabilities for binary classification.
- **Decision trees** split on features using impurity measures (Gini, entropy); ensembles (Random Forest, Gradient Boosting) improve performance.
- **Neural networks** learn hierarchical features through backpropagation with activation functions (ReLU, sigmoid, softmax).
- **Loss functions** (MSE, cross-entropy, Huber) measure prediction error and guide optimization.
- **Regularization** (L1, L2, dropout, early stopping) prevents overfitting by penalizing complexity.
- **Evaluation metrics** (accuracy, precision, recall, F1, ROC-AUC, $R^2$) must match the task and class distribution.
- **Bias-variance tradeoff** guides model complexity: underfitting (high bias) vs. overfitting (high variance).
