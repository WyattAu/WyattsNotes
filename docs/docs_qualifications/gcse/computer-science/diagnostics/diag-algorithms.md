---
title: 'Algorithms -- Diagnostic Tests'
description:
  'GCSE Computer Science Algorithms -- Diagnostic Tests notes covering key definitions, core
  concepts, worked examples, and practice questions for in-depth revision.'
slug: diag-algorithms
hide_table_of_contents: true
---

# Algorithms -- Diagnostic Tests

## Unit Tests

### UT-1: Flowcharts and Pseudocode

**Question:**

(a) Describe the purpose of a flowchart and name five standard flowchart symbols, stating what each
represents.

(b) Write pseudocode for an algorithm that reads 10 numbers from a user and outputs the largest
number entered.

(c) Convert the following flowchart description into pseudocode: "Start. Ask the user for a number.
If the number is greater than 0, output 'Positive'. If the number is equal to 0, output 'Zero'.
Otherwise, output 'Negative'. End."

(d) Explain why pseudocode is preferred over writing code in a specific programming language when
designing algorithms.

**Solution:**

(a) A flowchart is a visual representation of an algorithm that uses standard symbols to show the
sequence of steps, decisions, and inputs/outputs.

Five standard symbols:

1. **Oval (terminator)**: represents the start or end of the algorithm.
2. **Parallelogram (input/output)**: represents data input or output.
3. **Rectangle (process)**: represents a process or calculation.
4. **Diamond (decision)**: represents a decision with a yes/no or true/false outcome.
5. **Arrow (flow line)**: shows the direction of flow between steps.

(b)

```
FOR i = 1 TO 10
    INPUT number
    IF number > maximum THEN
        maximum = number
    ENDIF
ENDFOR
OUTPUT maximum
```

Note: `maximum` should be initialised to a very small value (e.g., $-\infty$ or the first input
value) before the loop begins. A more robust approach initialises `maximum` with the first input:

```
INPUT maximum
FOR i = 2 TO 10
    INPUT number
    IF number > maximum THEN
        maximum = number
    ENDIF
ENDFOR
OUTPUT maximum
```

(c)

```
INPUT number
IF number > 0 THEN
    OUTPUT "Positive"
ELSE IF number == 0 THEN
    OUTPUT "Zero"
ELSE
    OUTPUT "Negative"
ENDIF
```

(d) Pseudocode is preferred because it is language-independent, meaning the algorithm can be
understood and implemented in any programming language. It focuses on the logic and structure rather
than the specific syntax of a language, making it easier to communicate ideas to others who may not
know the same programming language. It also avoids the complexity of language-specific features such
as variable declarations, library imports, and syntax punctuation.

---

### UT-2: Searching Algorithms

**Question:**

(a) Describe the linear search algorithm and state its time complexity in big-O notation.

(b) Describe the binary search algorithm and explain why the data must be sorted before this
algorithm can be used.

(c) An ordered array contains the values: $[2, 5, 7, 11, 15, 18, 22, 25, 30, 34]$. Trace the binary
search algorithm to find the value 18. Show each step including the low, mid, and high pointers.

(d) Compare the efficiency of linear search and binary search for a sorted array of 1,000,000
elements. Give the approximate maximum number of comparisons for each.

**Solution:**

(a) **Linear search** checks each element in a list sequentially from the first to the last until
the target value is found or the end of the list is reached. It works on both sorted and unsorted
data. Its time complexity is $O(n)$, where $n$ is the number of elements, because in the worst case
every element must be checked.

(b) **Binary search** works by repeatedly dividing a sorted list in half. It compares the target
value with the middle element: if they match, the search is complete; if the target is smaller, the
search continues in the lower half; if the target is larger, the search continues in the upper half.
The data must be sorted because the algorithm relies on the ordering of elements to determine which
half to discard at each step. If the data were unsorted, discarding a half of the array could
eliminate the target value.

(c) Searching for 18 in $[2, 5, 7, 11, 15, 18, 22, 25, 30, 34]$:

| Step | Low | High | Mid | Mid Value | Comparison | Action            |
| ---- | --- | ---- | --- | --------- | ---------- | ----------------- |
| 1    | 0   | 9    | 4   | 15        | $18 > 15$  | Search upper half |
| 2    | 5   | 9    | 7   | 25        | $18 < 25$  | Search lower half |
| 3    | 5   | 6    | 5   | 18        | $18 = 18$  | Found at index 5  |

Mid is calculated as $\lfloor(\text{low} + \text{high}) / 2\rfloor$.

(d) For a sorted array of 1,000,000 elements:

- **Linear search**: In the worst case, 1,000,000 comparisons are needed. Time complexity is $O(n)$,
  so maximum comparisons $\approx 1,000,000$.
- **Binary search**: In the worst case, the maximum number of comparisons is
  $\lfloor\log_2(1000000)\rfloor + 1 = \lfloor 19.93 \rfloor + 1 = 20$ comparisons. Time complexity
  is $O(\log n)$.

Binary search is dramatically more efficient for large sorted datasets.

---

### UT-3: Sorting Algorithms

**Question:**

(a) Describe the bubble sort algorithm.

(b) Sort the following array using bubble sort, showing the array after each complete pass:
$[5, 1, 4, 2, 8]$.

(c) Describe the merge sort algorithm and state its time complexity.

(d) Explain the difference between a stable and an unstable sorting algorithm. Is bubble sort
stable?

**Solution:**

(a) **Bubble sort** works by repeatedly stepping through the list, comparing adjacent pairs of
elements and swapping them if they are in the wrong order. Each pass "bubbles" the largest unsorted
element to its correct position at the end of the list. The algorithm repeats until no swaps are
needed, indicating the list is sorted.

(b) Initial array: $[5, 1, 4, 2, 8]$

**Pass 1:**

- Compare 5 and 1: swap $\rightarrow [1, 5, 4, 2, 8]$
- Compare 5 and 4: swap $\rightarrow [1, 4, 5, 2, 8]$
- Compare 5 and 2: swap $\rightarrow [1, 4, 2, 5, 8]$
- Compare 5 and 8: no swap $\rightarrow [1, 4, 2, 5, 8]$

After Pass 1: $[1, 4, 2, 5, 8]$

**Pass 2:**

- Compare 1 and 4: no swap $\rightarrow [1, 4, 2, 5, 8]$
- Compare 4 and 2: swap $\rightarrow [1, 2, 4, 5, 8]$
- Compare 4 and 5: no swap $\rightarrow [1, 2, 4, 5, 8]$

After Pass 2: $[1, 2, 4, 5, 8]$

**Pass 3:**

- No swaps needed. Array is sorted: $[1, 2, 4, 5, 8]$

(c) **Merge sort** is a divide-and-conquer algorithm. It works by dividing the list into halves
repeatedly until each sublist contains a single element, then merging pairs of sublists back
together in sorted order. The merge step compares the front elements of each sublist and places the
smaller one into the result. This continues until the entire list is reassembled in sorted order.
Time complexity is $O(n \log n)$.

(d) A **stable** sorting algorithm preserves the relative order of equal elements. An **unstable**
algorithm may change the relative order of equal elements. For example, if sorting records by name
and two records have the same name, a stable sort keeps them in their original order. Bubble sort is
**stable** because it only swaps adjacent elements when the left element is strictly greater than
the right, meaning equal elements are never swapped past each other.

---

## Integration Tests

### IT-1: Algorithm Design and Analysis

**Question:**

(a) A teacher wants an algorithm to determine whether a student has passed an exam. The pass mark is
50 out of 100. If the student scores 70 or above, they receive a merit. If they score 90 or above,
they receive a distinction. Write pseudocode for this algorithm.

(b) The teacher also needs to find the average score of a class of 25 students. Write pseudocode
that reads 25 scores, calculates the average, and outputs whether the class average is above or
below the pass mark of 50.

(c) The teacher has a list of 25 student names and their scores in parallel arrays. Using
pseudocode, describe how to sort the students by score in descending order using bubble sort,
ensuring names stay matched with their scores.

(d) State which searching algorithm would be most efficient for finding a specific student's score
by name in an unsorted list, and justify your answer.

**Solution:**

(a)

```
INPUT score
IF score >= 90 THEN
    OUTPUT "Distinction -- Pass"
ELSE IF score >= 70 THEN
    OUTPUT "Merit -- Pass"
ELSE IF score >= 50 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
ENDIF
```

(b)

```
total = 0
FOR i = 1 TO 25
    INPUT score
    total = total + score
ENDFOR
average = total / 25
OUTPUT "Class average: ", average
IF average >= 50 THEN
    OUTPUT "Class average is above the pass mark."
ELSE
    OUTPUT "Class average is below the pass mark."
ENDIF
```

(c)

```
FOR i = 0 TO 23
    FOR j = 0 TO 23 - i
        IF scores[j] < scores[j + 1] THEN
            temp_score = scores[j]
            scores[j] = scores[j + 1]
            scores[j + 1] = temp_score
            temp_name = names[j]
            names[j] = names[j + 1]
            names[j + 1] = temp_name
        ENDIF
    ENDFOR
ENDFOR
```

When the scores are swapped, the corresponding names in the parallel array are also swapped, keeping
the data matched.

(d) **Linear search** is the only option for an unsorted list. Binary search requires the data to be
sorted first. Although linear search has a worst-case time complexity of $O(n)$, it is the correct
choice here because the list is not ordered, and sorting first would take at least $O(n \log n)$
time, which for a single search would be less efficient than $O(n)$.

---

### IT-2: Choosing and Combining Algorithms

**Question:**

(a) A library has 10,000 books sorted alphabetically by title. Explain which searching algorithm
should be used to find a book by title and calculate the maximum number of comparisons needed.

(b) The library receives 500 new books that need to be added to the catalogue. Describe an algorithm
to insert each new book into the correct position in the sorted list of 10,000 books.

(c) Write pseudocode for a program that reads a list of exam scores, uses linear search to count how
many scores are above the pass mark of 50, and then calculates the percentage of students who
passed.

(d) A student claims that bubble sort is always the best sorting algorithm. Evaluate this claim with
reference to time complexity and practical scenarios.

**Solution:**

(a) **Binary search** should be used because the list is already sorted. Binary search has a time
complexity of $O(\log n)$, whereas linear search has $O(n)$. Maximum comparisons:
$\lfloor\log_2(10000)\rfloor + 1 = \lfloor 13.29 \rfloor + 1 = 14$ comparisons.

(b) For each new book title, use **binary search** to find the position where the title should be
inserted (the position of the first title that is alphabetically greater than the new title). Then
shift all elements from that position onwards one place to the right and insert the new book at the
correct position. This is an **insertion into a sorted array**, which requires $O(n)$ time for the
shifting step per insertion. For 500 books, this totals $O(500n)$ where $n \approx 10000$.

(c)

```
INPUT n
count_pass = 0
FOR i = 1 TO n
    INPUT score
    IF score >= 50 THEN
        count_pass = count_pass + 1
    ENDIF
ENDFOR
percentage = (count_pass / n) * 100
OUTPUT "Number of passes: ", count_pass
OUTPUT "Percentage passed: ", percentage, "%"
```

(d) This claim is incorrect. Bubble sort has a time complexity of $O(n^2)$ in the average and worst
case, making it very inefficient for large datasets. Merge sort ($O(n \log n)$) is far more
efficient for large lists. For example, sorting 100,000 items: bubble sort may require up to
$100000^2 = 10^{10}$ operations, while merge sort requires approximately
$100000 \times 17 \approx 1.7 \times 10^6$ operations. However, bubble sort can be useful for very
small datasets or for educational purposes due to its simplicity. It is also efficient ($O(n)$) when
the data is nearly sorted if an optimised version with an early termination check is used.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Forgetting to initialise variables (especially counters and accumulators) before loops begin.
- Calculating the midpoint incorrectly in binary search: use
  $\lfloor(\text{low} + \text{high}) / 2\rfloor$, not $(\text{low} + \text{high}) / 2$ rounded up.
- Applying binary search to unsorted data, which will give incorrect results.
- Confusing the number of passes in bubble sort with the number of individual comparisons.
- Writing pseudocode with language-specific syntax rather than clear, structured English-like logic.
