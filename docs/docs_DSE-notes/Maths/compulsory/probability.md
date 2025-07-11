---
title: Probability
date: 2025-06-03T12:07:31.077Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: probability
---

## Notations

- $P(A|B)$, conditional probability of $A$ given the occurrence of $B$
- $A \cap B$, the intersection between A and B
- $A \cup B$, the union between A and B

## Mutually Exclusive

Mutually exclusive identifies the relationships between multiple events, where these events cannot occur at in the same trial. Given two events ($A, B$) mutually exclusive to each other:

$$
\begin{aligned}
  P(A \cap B) = 0
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- Coin flip, occurrence of heads and tails are mutually exclusive.
- Number of boys or girls in a class, the number of boys in a finite total determine the number of girls in a class.
</p>
</details>

## Independent

Independent identifies the relationships between multiple events, where the occurrence of one event does not affect the probability of the occurrence of other events. Given two events ($A, B$) independent to each other, the conditional probability satisfy the condition:

$$
\begin{aligned}
  P(A | B) = \frac{P(A \cup B)}{P(B)} = P(A)\\
  P(A)P(B) = P(A\cup B)
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- The probability of a asteroid colliding with Mars would not be affected by the occurrence of the national lottery, therefore these are independent events. 
</p>
</details>
