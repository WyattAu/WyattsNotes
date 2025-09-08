---
title: Logic
date: 2025-08-01T02:44:51.120Z
tags:
  - maths
categories:
  - maths
slug: logic
---

:::info TMUA Specification

- The Logic of Arguments
- Arg1 Understand and be able to use mathematical logic in simple situations:
- The terms true and false;
- The terms and, or (meaning inclusive or), not;
- Statements of the form:
- if A then B
- A if B
- A only if B
- A if and only if B
- The converse of a statement;
- The contrapositive of a statement;
- The relationship between the truth of a statement and its converse
- and its contrapositive.
- Note: candidates will not be expected to recognise or use symbolic notation for any
- of these terms, nor will they be expected to complete formal truth tables.
- Arg2 Understand and use the terms necessary and sufficient.
- Arg3 Understand and use the terms for all, for some (meaning for at least one),
- and there exists.
- Arg4 Be able to negate statements that use any of the above terms.
- Mathematical Proof
- Prf1 Follow a proof of the following types, and in simple cases know how to
- construct such a proof:
- Direct deductive proof (‘Since A, therefore B, therefore C, …,
- therefore Z, which is what we wanted to prove.’);
- Proof by cases (for example, by considering even and odd cases
- separately);
- Proof by contradiction;
- Disproof by counterexample.
- Prf2 Deduce implications from given statements.
- Prf3 Make conjectures based on small cases, and then justify these conjectures.
- Prf4 Rearrange a sequence of statements into the correct order to give a proof for
- a statement.
- Prf5 Problems requiring a sophisticated chain of reasoning to solve.
- Identifying Errors in Proofs
- Err1 Identifying errors in purported proofs.
- Err2 Be aware of common mathematical errors in purported proofs; for example,
- claiming ‘if 𝑎𝑏 ൌ 𝑎𝑐, then 𝑏 ൌ 𝑐’ or assuming ‘if sin 𝐴 ൌ sin 𝐵, then 𝐴 ൌ 𝐵’
- neither of which are valid deductions.
  :::

# The Logic Of Arguments

## Arg1: Simple Logic

- In mathematics, statements must be true or false.
- A statement is a sentence which is definitely true or definitely false. A statement can never be both true and false.
- Examples:
  - If $𝑥 = 3$, then $𝑥^2= 9$.” This is certainly true, so it is a statement.
  - “If $𝑥=3$, then $𝑥^2=4$.” This is certainly false, so it is a statement.
  - “The sum of two odd numbers is an even number.” This is certainly true, so it is a statement.

### Truth values

A truth value is whether the statement is true or false. For instance:

- Truth value of the statement 2 is an even number is “true”
- Truth value of the statement 2 is an odd number is “false”.

### Logically equivalent

Two statements being logically equivalent means that they have the same truth values in the same circumstances. For example:

- Today is Tuesday; True
- Today is the day after Monday; Also True.

### Making new statements

- 21 is divisible by 3 and 21 is divisible by 6 \[A and B]
- 21 is divisible by 3 or 21 is divisible by 6 \[A or B]
- 21 is not divisible by 6 \[not B]
- if 21 is divisible by 3 then 21 is divisible by 6 \[if A then B]
- 21 is divisible by 3 if 21 is divisible by 6 \[A if B]
- 21 is divisible by 3 only if 21 is divisible by 6 \[A only if B]
- 21 is divisible by 3 if and only if 21 is divisible by 6 \[A if and only if B]

### The term "not"

Negates a statement. Only applies to what occurs immediately after unless there are brackets.
Therefore, we can say not A or B is the same as (not A) or B.

### If, only if, if and only if

I cry if I am sad

- $\text{Sad}\implies\text{Cry}$
- Means that if I am sad, then I cry.
- It doesn't say that there aren't other situations in which I might also cry.
- I can cry under other conditions. Being sad is NOT the only condition.
- Leads to the 'if... then...' statement: If I am sad, then I am crying.

I cry only if I am sad

- $\text{Cry}\implies\text{Sad}$
- If I am crying, the I am sad. This is because only under this condition (being sad) I can cry.
- This does not mean that I cry every time I am sad. I can be sad and not cry, but if I am crying, then I HAVE to be sad.
- Being sad is the only thing that can cause me to cry.
- Leads to the 'if... then...' statement: If I am crying, then I am sad.

I cry if and only if I am sad

- $\text{Sad}\iff\text{Cry}$
- Combination of the other two statements, both must be true.
- I cry if I am sad: 'If I am sad then I cry'
- I cry only if I am sad: 'If I am crying then I am sad'
- The only time I ever cry is if I am sad, and I will 100% cry if I am sad.

The church bells ring if it is Sunday

- $\text{Sunday}\implies\text{Ring}$
- If it is Sunday, then the bells ring
- On Sunday, at some point the bells ring
- Doesn't say anything else about the other days
- Example: A church that rings the bells at midday every day

The church bells ring only if it is Sunday

- $\text{Ring}\implies\text{Sunday}$
- If then bells ring, then it is Sunday
- The bells will not ring on any other day
- They might not ring on Sunday/on every Sunday
- Example: A church that rings only once a year on remembrance Sunday

The church bells ring if and only if it is Sunday

- Both 'if... then...' statements are true
- On Sunday you will hear the bells ring, and you will not hear the bells ring on any other day.

A number is prime if it is an integer

- $\text{Integer}\implies\text{Prime}$ : False, lots of integers are not prime.
- If a number is an integer, then it is prime.
- It can also possible be a decimal and prime, doesn't have to be an integer

A number is prime only if it is an integer

- $\text{Prime}\implies\text{Integer}$ : True, all primes are integers.
- If a number is prime, then it is an integer.

A number is prime if and only if it is an integer

- $\text{Integer}\iff\text{Prime}$ : False, all primes are integers, but not all integers are primes
- Both statements must be true.

A shape is a rectangle if it is a square

- $\text{Square}\implies\text{Rectangle}$ : True, all squares are rectangles
- If a shape is a square, then it is a rectangle

A shape is a rectangle only if it is a square

- $\text{Rectangle}\implies\text{Square}$ : False, not all rectangles are squares
- If a shape is a rectangle, then it is a square.

A shape is a rectangle if and only if it is a square

- $\text{Square}\iff\text{Rectangle}$ False, because one of the two statements above are false.

A if B

- Same as: If B, then A
- Therefore B is sufficient for A
- $B\implies A$

A only if B

- Same as: If A then B
- Therefore B is necessary for A
- $A\implies B$

A if and only if B

- Same as: If A then B and If B then A
- B is necessary and sufficient for A
- $A\iff B$

### Negation of Statements

Statement: That man is tall
Negation: That man is not tall
Wrong: That man is short

Rule 1: Just add not
Rule 2: Don't say the opposite

Statement: All the students are short
Negation: At least one student is not short

Rule 3: Don't claim too much

Statement: None of the teachers are interesting
Equivalent to: All of the teachers are not interesting
Negation: Some of the teachers are interesting
At least one teacher is interesting

Statement: All A are B
Negation: Some A are not B
At least one A is not B

Statement: No A are B
Negation: Some A are B
At least one A is B

Statement: Some of the topics are hard
Negation: All of the topics are not hard
None of the topics are hard

Statement: All numbers are prime
Negation: Some numbers are not prime

Statement: Some shapes have 4 sides
Negation: No shapes have 4 sides

Statement: No Integers are factors of 20
Negation: Some integers are factors of 20

Statement: Every day next week, Fred will do at least one maths problem
All days, Fred don math
Negation: Some day next week, Fred will do no maths problems.
Some days, Fred not do math

### Converse

Basically opposite of a statement. Swap A and B.

| Statement   | Converse    |
| ----------- | ----------- |
| if A then B | if B then A |
| A only if B | B only if A |
| A if B      | B if A      |
| A iff B     | B iff A     |

### Contrapositive

Basically the equivalent of a statement. Swap A and B, then negate both of them

| Statement   | Contrapositive      |
| ----------- | ------------------- |
| if A then B | if not B then not A |
| A only if B | not B only if not A |
| A if B      | not B if not A      |
| A iff B     | not B iff not A     |

## Arg2 Understand and use the terms necessary and sufficient

Is it necessary or sufficient to bring a passport to the airport to get on an international flight

- It is necessary. They will not allow you on the flight without one
- It is not sufficient. You also need to: Pay for the flight. Turn up at the right time, visa etc.

Is it necessary or sufficient to be a twin in order to have a sibling

- It is not necessary. You can have a sibling without being a twin
- It is sufficient. If you are a twin you have a sibling

Is playing cricket necessary or sufficient to understand all of the laws of cricket

- It is not necessary. You can understand and know all the rules of cricket without playing it
- It is not sufficient. You can play cricket happily without knowing or understand all of the laws

Is being a bat necessary of sufficient to being a flying mammal

- It is necessary. Bats are the only mammal that can fly
- It is sufficient. Bats can fly and are mammals.

Is being prime necessary or sufficient to be a positive integer

- It is not necessary. 4
- It is sufficient. All primes are positive integers

Is a number being less than 12 necessary or sufficient to be less than 20

- It is not necessary. 19 is not less than 12, but it is less than 20
- It is sufficient. Any number that is less than 12 also meets the condition of less than 20

Is being a square necessary of sufficient to be a rectangle

- It is not necessary. You can be a rectangle but not a square
- It is sufficient. All squares are rectangles, so being a square is enough to be a rectangle

Is being odd necessary or sufficient to be prime

- It is not necessary. 2
- It is not sufficient. Primes must also have only two factors, so being odd is not enough

Is being less than 20 necessary or sufficient to be more than 15

- It is not necessary. 25
- It is not sufficient. 14

Is being a quadrilateral necessary of sufficient to be a square

- It is necessary. Squares have 4 sides.
- It is not sufficient. There are quadrilaterals that are not squares, so being a quadrilateral isn't enough to be classified as a square.
