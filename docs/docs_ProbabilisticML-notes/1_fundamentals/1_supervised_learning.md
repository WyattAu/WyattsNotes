---
title: Supervised Learning
date: 2026-01-07T08:38:26.907Z
tags:
  - ML
categories:
  - ML
slug: supervised-learning
---

Supervised learning is the field of training models to act as a mapping between a set of inputs to a set of output. To conduct supervised learning, a training set $N$ is given in the form of pairs $D = {x_n, y_n}^N_{n=1}$, where a input $x_n$ is paire with the correct output $y_n$.

## Classification

One type of problems supervised learning targets is classification, a labeling process through pattern recognition. This maps a input set of data to be classfied to a output set known as classes, usually this will result in a discrete probability distribution that shows how probable each classes are to be correct when predicting the labels on the input. When there are only $2$ classes they are denoted as $y \in {0,1}, y \in{-1,+1}$, and given the name binary classification. An example of classification would be determining the car model from an image.

### Design Matrix

When considering a small dataset, a common practice is to store them in a design matrix, a $N \times D$ matrix that represent example in row and features in column. Many features however does not share the same value type, an example being a sequence of words or characters rather than fixed-length vectors. This problem is usually solved by featuriszation where a mapping first convert the data into a type of fixed size representation and processed afterwards, an example being the infamous "bag of words" algorithm for sequential data.

### Pair Plot

Many tabular data have small amount of features, to observe data patterns, a lot of these data with dimension are plotted with a pair plot, with each feature on one axis, often this allow clear visualization of classification as data with similar features should share a region and the logic for the classification would be correctly partitioning each classification with a corrosponding region separated by the decision boundary. An example being classifying planetary objects, where the one dimensional feature, radius can determine whether the input given is a planet or a star this is called a decision rule, the decision boundary will therefore be the radius where it behaves as a binary case, where bellow the radius threshold, the model will classfied the input as planet.

### Decision Tree

However for non-binary classification, a singular decision boundary is not enough, a decision surface maybe needed to fully determine the features a class poses. This classification of surfaces can be implemented as a decision tree, nesting decisions to determine the class of the input. This classification tree will be defined by parameters $\theta$ that denote nodes with feature index and threshold, a binary tree that will determines the mapping by evaluating each input to leaf nodes that corrsponse to the predicted class $f(x_n;\theta)$.

### Performance Measurement

Supervised learning applies to classfication through a model is trained by a dataset to generate a decision tree. To measure the perforance of the classification, a common indicator is the misclassification rate $\mathcal{L}$:

$$
\mathcal{L}(\theta) \triangleq \frac{1}{N}\sum^N_{n=1} B(y_n \neq f(x_n;\theta))
$$

where $B(k)$ is a binary indicator function, with condition:
$$
B(k) = 
\begin{dcases}
  1 \quad \text{if k is true}\\
  0 \quad \text{if k is false}
\end{dcases}
$$

However, in certain cases, it maybe beneficial how non binary determination of misclassification as some classes maybe more similar to each other presented in having common features, therefore to guide the training process of the model, it maybe benefitial to use a asymmetric loss function $\mathcal{l}$