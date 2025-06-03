---
title: Combinatorics
date: 2025-06-03T11:59:39.630Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: combinatorics
---

Combinatorics is the study of enumeration and arrangement.

## Counting Principles

### Sum Rule

Given two [mutually exclusive](./probability.md#mutually-exclusive) events, where the first event can occur in $n_1$ distinct ways and the second event in $n_2$ distinct ways, the total number of occurrences ($N$) for either event is $n_1 + n_2$. This extends to $k$ mutually exclusive events:

$$
\begin{aligned}
  N = \sum_{i=1}^k n_i
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- There is $5$ theme parks and $2$ water parks in the area, the number choices to attending one of them only would be $5+2 = 7$
</p>
</details>

### Product Rule

Given two [independent](./probability.md#independent) sequential events, where the first event has $n_1$ outcomes and the second has $n_2$ outcomes, the total number of compound outcomes ($N$) is $n_1 \times n_2$. This extends to $k$ independent sequential choices:

$$
\begin{aligned}
  N = \prod_{i=1}^k n_i
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- 4-digit PIN with $10$ options per digit yields $10^4 = 10,000$ combinations
- A 16-input AND gate with binary inputs has $2^{16} = 65,536$ possible input
- Restaurant offers $3$ appetizers, $4$ entrees, $2$ desserts. There are $3\cdot 4 \cdot 2 = 24$ distinct meal combinations
</p>
</details>

## Arrangements

### Permutations

A permutation is an ordered arrangement of distinct objects. Since objects choice cannot be repeated, the number of choice decrease by one every time a object is chosen in a permutation, therefore the total permutation of $n$ distinct objects is given by the factorial function:

$$
\begin{aligned}
  n(n-1)(n-2) \ldots 2 \times 1 = \prod_{k=1}^n k = n!
\end{aligned}
$$

When selecting $r$ number of objects from $n$ distinct objects, the number of choice for each selection therefore decreases by one similarly, but only down to the last position needed, therefore the permutation $n \mathbf{P} r$ is:

$$
\begin{aligned}
  n \mathbf{P} r = P(n, r) = n(n-1)(n-2) \ldots (n-r+2)(n-r+1) = \frac{n!}{(n-r)!}
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- Number of ways you can put $5$ people in a queue from a class of $30$ people, $30 \mathbf{P} 5 = 17 100 720$
- $15$ runners distributed across gold/silver/bronze positions: $P(15,3) = 15 \times 14 \times 13 = 2,730$ arrangements
- 7 teams assigned to 7 distinct time slots: $P(7,7) = 5,040$ distinct schedules
</p>
</details>

### Combinations

A combination is a selection of $r$ objects from $n$ distinct objects where order is irrelevant. Since the number of ways to permute the given selection is ($r!$), the combination ($n \mathbf{C} r$) can multiply $r!$ to obtain the permutation ($n \mathbf{P} r$):

$$
\begin{aligned}
  k!(n \mathbf{C} r) = n\mathbf{P}r = \frac{n!}{(n-r)!}\\
  n \mathbf{C} r = \binom{n}{r} = \frac{n!}{(n-r)!r!}
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- Number of ways you can put $5$ people in a group from a class of $30$ people, $30 \mathbf{C} 5 = 142506$
- 5 members chosen from 20 candidates: $\binom{20}{5} = 15,504$
</p>
</details>

### Arrangements of Non-Distinct Objects

Given a $n$ objects with $m$ types (type $i$ has quantity $k_i$ where $\sum_{i=1}^m k_i = n$), the total permutation ($n!$) according to the size of the finite set can be over the unique arrangements. Since the permutation ($k_i!$) of objects in repetitive position gives the number of arrangements that leaves the arrangement of the whole trial unchanged, the distinct permutations ($N$) are given by the multinomial coefficient.

$$
\begin{aligned}
  N = \binom{n}{k_1,k_2,\ldots,k_m} = \frac{n!}{k_1! \times k_2! \times \ldots \times k_m!}
\end{aligned}
$$

<details>
<summary>Examples</summary>
<p>
- Arranging "TRIGGER" (7 letters: T,R,I,G,G,E,R):  
  $n=7$, $k_G=2$, $k_R=2$, others unique $\implies N = \frac{7!}{2! \cdot 2!} = 1260$ distinct sequences.
</p>
</details>

---

<details>
<summary>Wrap-up Questions</summary>
<p>

1. **Question:** How many 8-character passwords exist if they must contain at least one uppercase letter, one lowercase letter, one digit, and one symbol (from 10 symbols), with no repeated characters?
   <details>
   <summary>Answer</summary>
   <p>
   - Total permutations of 8 distinct characters from 62 options (26 uppercase, 26 lowercase, 10 digits, 10 symbols): $P(62,8)$.  
   - Subtract invalid cases using inclusion-exclusion:  
     $$
     \begin{aligned}
           P(62,8) - \binom{4}{1}P(52,8) + \binom{4}{2}P(42,8) - \binom{4}{3}P(32,8) + \binom{4}{4}P(22,8)
     \end{aligned}
     $$

   </p>
   </details>

2. **Question:** You have 10 books: 4 distinct mathematics books, 3 identical physics books, and 2 identical chemistry books. How many distinct ways can they be arranged on a shelf?
   <details>
   <summary>Answer</summary>
   <p>
   - Account for identical books: $\frac{10!}{3! \cdot 2!}$.  
   </p>
   </details>

3. **Question:** From 10 people, select a committee of 5 with roles: president, vice-president, and 3 indistinct members. How many ways can this be done?
   <details>
   <summary>Answer</summary>
   <p>
   - Choose president and vice-president (ordered): $\binom{10}{2} \cdot 2!$.  
   - Choose 3 indistinct members from remaining: $\binom{8}{3}$.  
   - Total: $\binom{10}{2} \cdot 2! \cdot \binom{8}{3}$.  
   </p>
   </details>

4. **Question:** 6 people queue for a bus, but 2 refuse to stand next to each other. How many valid permutations exist?
   <details>
   <summary>Answer</summary>
   <p>
   - Total permutations: $6!$.  
   - Subtract permutations where the two are adjacent: $2 \cdot 5!$.  
   - Valid: $6! - 2 \cdot 5! = 480$.  
   </p>
   </details>

5. **Question:** An exam has 3 sections with 5 questions each. How many ways can you choose 6 questions if you must pick ≥1 from each section?
   <details>
   <summary>Answer</summary>
   <p>
   - Use inclusion-exclusion:  
     $$
     \binom{15}{6} - \binom{3}{1}\binom{10}{6} + \binom{3}{2}\binom{5}{6} - \binom{3}{3}\binom{0}{6}
     $$
     (Note: $\binom{5}{6} = 0$, $\binom{0}{6} = 0$).  
   </p></details>

6. **Question:** Divide 10 students into two groups of 5, but Alice and Bob cannot be in the same group. How many unique arrangements can be made?
   <details>
   <summary>Answer</summary>
   <p>
   - Total ways to partition into unlabeled groups: $\frac{1}{2}\binom{10}{5}$.  
   - Subtract cases where Alice and Bob are together: $\frac{1}{2} \left[ \binom{10}{5} - \binom{8}{3} \right]$ (since $\binom{8}{3}$ fixes them together).  
   </p></details>

7. **Question:** How many 4-letter words can be formed from "MISSISSIPPI" with no repeated letters?
   <details>
   <summary>Answer</summary>
   <p>
   - Only 4 distinct letters (M,I,S,P) in the multiset. Impossible to form words with no repeats: $0$.  
   </p>
   </details>

8. **Question:** A pizza place offers 10 distinct toppings (6 meat, 4 vegetable). How many pizzas can be made with 3–5 toppings, including at least one meat and one vegetable?
   <details>
   <summary>Answer</summary>
   <p>
   - For $k$ toppings ($k = 3,4,5$): $\binom{10}{k} - \binom{6}{k} - \binom{4}{k}$ (exclude all-meat/all-vegetable).  
   - Sum: $\left[\binom{10}{3}{-}\binom{6}{3}{-}\binom{4}{3}\right] {+} \left[\binom{10}{4}{-}\binom{6}{4}{-}\binom{4}{4}\right] {+} \left[\binom{10}{5}{-}\binom{6}{5}{-}\binom{4}{5}\right] = 96{+}194{+}246 = 536$.  
   </p>
   </details>

9. **Question:** A student must choose 4 courses from 7 morning and 5 afternoon offerings, with ≥1 morning and ≥2 afternoon courses. How many ways?
   <details>
   <summary>Answer</summary>
   <p>
   - Cases: (1 morning, 3 afternoon) or (2 morning, 2 afternoon).  
   - $\binom{7}{1}\binom{5}{3} + \binom{7}{2}\binom{5}{2} = 7 \cdot 10 + 21 \cdot 10 = 280$.  
   </p>
   </details>

10. **Question:** A license plate has 3 distinct letters (A–Z) followed by 3 distinct digits (0–9). How many plates exist if the number formed by the digits is even?
    <details>
    <summary>Answer</summary>
    <p>
    - Letters: $P(26,3)$.  
    - Digits: Choose last digit (even: 0,2,4,6,8; 5 options), then arrange first two from remaining 9 digits: $5 \cdot P(9,2)$.  
    - Total: $P(26,3) \cdot 5 \cdot 9 \cdot 8 = 5,616,000$.  
    </p>
    </details>

11. **Question:** A bag has 6 identical red, 4 identical blue, and 5 identical green marbles. How many distinct ways can you draw 4 marbles?
    <details>
    <summary>Answer</summary>
    <p>
    - Nonnegative integer solutions to $R + B + G = 4$: $\binom{4+3-1}{4} = \binom{6}{4} = 15$.  
    </p>
    </details>

12. **Question:** How many 5-card poker hands contain at least one card from each suit?
    <details>
    <summary>Answer</summary>
    <p>
    - Choose suit with two cards: $\binom{4}{1}$.  
    - Choose 2 cards from that suit: $\binom{13}{2}$.  
    - Choose 1 card from each other suit: $\binom{13}{1}^3$.  
    - Total: $\binom{4}{1} \binom{13}{2} \binom{13}{1}^3 = 4 \cdot 78 \cdot 13^3$.  
    </p>
    </details>

13. **Question:** Arrange 5 distinct math and 4 distinct history books on a shelf such that no two math books are adjacent.
    <details>
    <summary>Answer</summary>
    <p>
    - Arrange history books (creates 5 gaps): $4!$.  
    - Place math books in gaps (one per gap): $5!$.  
    - Total: $4! \cdot 5! = 24 \cdot 120 = 2,880$.  
    </p>
    </details>

14. **Question:** How many positive integers $<1000$ have digits summing to $10$?
    <details>
    <summary>Answer</summary>
    <p>
    - Represent numbers as 3-digit strings (allow leading zeros).  
    - Nonnegative solutions to $a+b+c=10$ with $0 \leq a,b,c \leq 9$: $\binom{12}{10} - \binom{3}{1} = 66 - 3 = 63$ (subtract cases where a digit ≥10).  
    </p>
    </details>

15. **Question:** A family (parents, two children) and 3 friends are seated in a row. Parents must sit together, and children must be separated by at least one adult. How many arrangements?
    <details>
    <summary>Answer</summary>
    <p>
    - Treat parents as a block: $2!$ internal arrangements.  
    - Total with parents together: $2! \cdot 6! = 1,440$.  
    - Subtract cases where children are adjacent (treat as a block): $2! \cdot 2! \cdot 5! = 480$.  
    - Valid: $1,440 - 480 = 960$.  
    </p>
    </details>

16. **Question:** Assign 10 distinct gifts to 3 distinct children such that each gets ≥2 gifts.
    <details>
    <summary>Answer</summary>
    <p>
    - Total assignments: $3^{10}$.  
    - Subtract cases where a child gets $<2$ gifts (inclusion-exclusion):  
      $$
      3^{10} - \binom{3}{1}\left[\binom{10}{0}2^{10} + \binom{10}{1}2^9\right] + \binom{3}{2}\left[1 + 2\binom{10}{1} + \binom{10}{2}2!\right] = 59,049 - 18,099 = 40,950.
      $$
    </p>
    </details>

17. **Question:** Pair 5 men and 5 women for a dance. Two men (A,B) refuse to dance with a particular woman (X). How many valid pairings?
    <details>
    <summary>Answer</summary>
    <p>
    - Total pairings: $5!$.  
    - Subtract pairings where A or B is paired with X: $5! - 2 \cdot 4! = 120 - 48 = 72$.  
    </p>
    </details>

18. **Question:** How many distinct 4-digit numbers can be formed from {1,2,3,4,5,6} with each digit used ≤2 times?
    <details>
    <summary>Answer</summary>
    <p>
    - Case 1 (all distinct): $\binom{6}{4}4! = 360$.  
    - Case 2 (one digit twice, two once): $\binom{6}{1}\binom{5}{2} \frac{4!}{2!} = 720$.  
    - Case 3 (two digits twice): $\binom{6}{2} \frac{4!}{2!2!} = 90$.  
    - Total: $360 + 720 + 90 = 1,170$.  
    </p>
    </details>

19. **Question:** A coin is flipped 10 times. How many outcomes have between 3 and 5 heads (inclusive)?
    <details>
    <summary>Answer</summary>
    <p>
    - Sum: $\binom{10}{3} + \binom{10}{4} + \binom{10}{5} = 120 + 210 + 252 = 582$.  
    </p>
    </details>

20. **Question:** A bakery has 8 types of donuts. How many ways to buy a dozen (12) if you must buy $\lq 1$ of each type?
    <details>
    <summary>Answer</summary>
    <p>
    - First take one of each type. Distribute remaining 4 donuts freely: $\binom{4+8-1}{4} = \binom{11}{4} = 330$.  
    </p>
    </details>

</p>
</details>
