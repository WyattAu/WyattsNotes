---
title: Computational Thinking
description:
  "AP Computer Science: Computational Thinking — What Is Computational Thinking? (CED Unit 1); Four Pillars; Abstraction (CED Unit 2); Why Abstraction Matters."
date: 2026-04-14
tags:
  - Computer Science
  - AP
categories:
  - Computer Science
slug: computational-thinking
---

## What Is Computational Thinking? (CED Unit 1)

Computational thinking is a problem-solving approach that involves breaking down complex problems,
finding patterns, abstracting details, and designing step-by-step solutions. It is not about
thinking like a computer -- it is about expressing problems in a way that a computer can solve.

### Four Pillars

1. **Decomposition:** Breaking a complex problem into smaller, manageable subproblems.
2. **Pattern Recognition:** Finding similarities or trends within or between problems.
3. **Abstraction:** Focusing on essential information while ignoring irrelevant details.
4. **Algorithm Design:** Developing a step-by-step procedure to solve the problem.

**Why these four matter together.** Decomposition tells you _what_ the subproblems are. Pattern
recognition tells you _which_ subproblems are instances of problems you already know how to solve.
Abstraction tells you _which details matter_ for each subproblem. Algorithm design turns the
abstracted subproblems into _precise, executable steps_.

**Worked Example.** Design a program to manage a school library.

- **Decomposition:** Book cataloguing, user management, borrowing/returning, overdue tracking,
  search functionality.
- **Pattern Recognition:** Searching for a book and searching for a user follow the same pattern
  (linear or binary search on a sorted list). Borrowing and returning both modify the same data
  structure (a loan record).
- **Abstraction:** A "book" is represented by its ISBN, title, author, and availability status. We
  do not need to model the physical book's condition, shelf location, or cover colour.
- **Algorithm Design:** Write pseudocode for each operation: add_book, search_book, borrow_book,
  return_book, calculate_fine.

**Worked Example.** Design a program to calculate the average exam score for a class, excluding the
highest and lowest scores.

- **Decomposition:** Read scores, find min and max, remove them, calculate average.
- **Pattern Recognition:** Finding min and max are the same pattern (scan all elements, track the
  extreme).
- **Abstraction:** A "score" is a number. We do not need the student's name or subject.
- **Algorithm Design:**
  ```
  PROCEDURE trimmedAverage(scores)
  {
      min <- findMin(scores)
      max <- findMax(scores)
      sum <- 0
      count <- 0
      FOR EACH score IN scores
      {
          IF (score <> min AND score <> max)
          {
              sum <- sum + score
              count <- count + 1
          }
      }
      RETURN(sum / count)
  }
  ```

## Abstraction (CED Unit 2)

Abstraction is the process of reducing complexity by hiding unnecessary details and exposing only
the essential features.

### Why Abstraction Matters

- Simplifies complex systems by providing a manageable interface.
- Allows programmers to work with high-level concepts without worrying about low-level
  implementation.
- Enables code reuse and modularity.

**Concrete example.** When you drive a car, you use the steering wheel, pedals, and gear stick. You
do not need to know how the fuel injection system works, how the transmission gears mesh, or how the
ABS sensors communicate with the brake controller. The car's interface abstracts away these details.
Similarly, a programmer using a `sort()` function does not need to know whether it uses merge sort,
quick sort, or heap sort -- only that it sorts correctly.

### Levels of Abstraction

| Level    | Example                  | Detail Level |
| -------- | ------------------------ | ------------ |
| High     | A web browser            | Very low     |
| Medium   | HTML/CSS/JavaScript      | Moderate     |
| Low      | Operating system calls   | High         |
| Very low | Machine code / binary    | Very high    |
| Hardware | Logic gates, transistors | Maximum      |

Moving down the ladder reveals more detail. Moving up hides detail behind simpler interfaces. The
key insight of abstraction is that you rarely need to go all the way down -- you work at the level
appropriate to the problem.

### Procedural Abstraction

A procedure (function/method) provides a named interface that hides its implementation. The caller
only needs to know what the procedure does (its specification), not how it does it.

**Benefits:**

- Readability: descriptive names document intent.
- Reusability: write once, call many times.
- Modifiability: change the implementation without affecting callers.

**Formal notion: preconditions and postconditions.** A procedure's contract specifies what must be
true before it is called (precondition) and what it guarantees after it returns (postcondition). The
implementation can change as long as it satisfies this contract.

### Data Abstraction

Data abstraction separates the interface (what operations are available) from the implementation
(how the data is stored and manipulated).

In Java, this is achieved through classes: private fields with public getters/setters and methods.

:::info[Example: Java]

```java
public class Rectangle {
    private double width;
    private double height;

    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    public double getArea() {
        return width * height;
    }

    public double getPerimeter() {
        return 2 * (width + height);
    }
}
```

The caller uses `getArea()` and `getPerimeter()` without knowing that `width` and `height` are
stored as doubles. The implementation could be changed to store different data (e.g., coordinates of
corners) without affecting any code that uses this class.

:::

### Information Hiding

Information hiding is the principle that the internal details of a module should be hidden from
other modules. Only the public interface is exposed. This reduces coupling between modules, making
the system easier to understand, test, and modify.

In Java, the `private` keyword enforces information hiding. A `private` field cannot be accessed
directly from outside the class, forcing callers to use the public methods.

**Example of poor vs good abstraction:**

```java
// Poor: exposes internal representation
public class Student {
    public int[] grades;  // caller can modify directly
}

// Good: hides internal representation
public class Student {
    private int[] grades;
    public void addGrade(int grade) { ... }
    public double getAverage() { ... }
}
```

## Pseudocode (AP CSP)

AP CSP uses a specific pseudocode notation. Key constructs:

### Variable Assignment

```
a <- 10
b <- a + 5
```

### Conditional Statements

```
IF (condition)
{
    <block of code>
}
ELSE
{
    <block of code>
}
```

**Nested conditionals:**

```
IF (score >= 90)
{
    DISPLAY("Grade A")
}
ELSE IF (score >= 80)
{
    DISPLAY("Grade B")
}
ELSE
{
    DISPLAY("Grade C or below")
}
```

### Loops

**REPEAT n TIMES:**

```
REPEAT 5 TIMES
{
    DISPLAY(i)
}
```

**REPEAT UNTIL:**

```
REPEAT UNTIL (condition)
{
    <block of code>
}
```

:::warning
`REPEAT UNTIL` is a post-test loop -- the body executes at least once, then the condition
is checked. This differs from a `WHILE` loop, which is a pre-test loop.
:::

**FOR EACH:**

```
FOR EACH item IN list
{
    DISPLAY(item)
}
```

### Procedures

```
PROCEDURE name(parameter1, parameter2)
{
    <block of code>
    RETURN(value)
}
```

### Lists

```
list <- [1, 2, 3, 4, 5]
list[1] <- 10
APPEND(list, 6)
REMOVE(list, 3)
INSERT(list, 2, 99)
LENGTH(list)
```

:::warning
AP CSP pseudocode uses **1-based indexing**. `list[1]` is the first element, not
`list[0]`. This differs from Java, Python, and most programming languages.
:::

:::info[Example: Finding the Maximum]

```
PROCEDURE findMax(list)
{
    max <- list[1]
    FOR EACH item IN list
    {
        IF (item > max)
        {
            max <- item
        }
    }
    RETURN(max)
}
```

**Proof of correctness (invariant).** Invariant: "max is the largest element among all elements
examined so far." Initially, max = list[1], trivially the largest of the first element. When a new
item is compared, if it is larger, max is updated; otherwise, max remains the largest. By induction,
after all elements are examined, max is the largest in the entire list. $\blacksquare$

:::

:::info[Example: Finding the Second Largest]

```
PROCEDURE findSecondLargest(list)
{
    IF (LENGTH(list) < 2)
    {
        RETURN(0)
    }
    IF (list[1] > list[2])
    {
        max <- list[1]
        second <- list[2]
    }
    ELSE
    {
        max <- list[2]
        second <- list[1]
    }
    FOR i <- 3 TO LENGTH(list)
    {
        IF (list[i] > max)
        {
            second <- max
            max <- list[i]
        }
        ELSE IF (list[i] > second)
        {
            second <- list[i]
        }
    }
    RETURN(second)
}
```

**Time complexity:** $O(n)$ -- single pass through the list.

:::

:::info[Example: Linear Search (AP CSP)]

```
PROCEDURE linearSearch(list, target)
{
    FOR i <- 1 TO LENGTH(list)
    {
        IF (list[i] = target)
        {
            RETURN(i)
        }
    }
    RETURN(0)
}
```

Note: AP CSP pseudocode returns 0 (not -1) to indicate "not found", because index 0 is not a valid
position in 1-based indexing.

:::

:::info[Example: Binary Search (AP CSP)]

```
PROCEDURE binarySearch(list, target)
{
    low <- 1
    high <- LENGTH(list)
    REPEAT UNTIL ((low > high) OR (list[mid] = target))
    {
        mid <- (low + high) / 2
        IF (list[mid] < target)
        {
            low <- mid + 1
        }
        ELSE
        {
            high <- mid - 1
        }
    }
    IF (list[mid] = target)
    {
        RETURN(mid)
    }
    ELSE
    {
        RETURN(0)
    }
}
```

**Complexity analysis.** Each iteration halves the search space, so the maximum number of iterations
is $\lceil \log_2 n \rceil$. Time complexity: $O(\log n)$.

:::

:::info[Example: Counting Occurrences]

```
PROCEDURE countOccurrences(list, value)
{
    count <- 0
    FOR EACH item IN list
    {
        IF (item = value)
        {
            count <- count + 1
        }
    }
    RETURN(count)
}
```

**Time complexity:** $O(n)$ -- examines each element once.

:::

:::info[Example: Reversing a List]

```
PROCEDURE reverseList(list)
{
    reversed <- []
    FOR i <- LENGTH(list) DOWNTO 1
    {
        APPEND(reversed, list[i])
    }
    RETURN(reversed)
}
```

**Time complexity:** $O(n)$ -- copies each element once.

**Proof of termination.** The loop variable `i` starts at LENGTH(list) and decreases by 1 each
iteration until it reaches 1. Since LENGTH(list) is a finite positive integer, the loop terminates
after LENGTH(list) iterations. $\blacksquare$

:::

## Problem Solving Strategies

### Top-Down Design

Start with the main problem, then decompose into subproblems. Each subproblem is further decomposed
until the tasks are simple enough to implement directly.

**Example:** "Build a student management system."

Level 1: Student records, course enrolment, grading, reporting.

Level 2 (under Student records): Add student, edit student, delete student, search student.

Level 3 (under Add student): Validate name, validate ID, check for duplicates, save to database.

### Stepwise Refinement

Gradually add detail to a high-level design. Start with pseudocode, then refine each step into more
specific instructions.

**Example:**

Level 1: `Calculate the average exam score for a class.`

Level 2: `Read all scores. Sum them. Divide by the number of scores.`

Level 3:
`Open the file. For each line, parse the score. Add to running total. Increment counter. After all lines, divide total by counter. Display result.`

### Heuristics

General problem-solving strategies that are not guaranteed to work but are often effective:

- **Trial and error:** Try different approaches.
- **Working backward:** Start from the desired outcome.
- **Divide and conquer:** Split the problem into independent parts.
- **Draw diagrams:** Visualize the problem.

**Worked Example.** Solve the following problem using working backward: "A number is doubled, then
5 is added, then the result is squared, giving 144. What was the original number?"

Working backward: $\sqrt{144} = 12$. $12 - 5 = 7$. $7 / 2 = 3.5$. The original number is 3.5.

## Algorithms as Abstraction

An algorithm is a finite set of unambiguous instructions that solves a problem or performs a task.

### Properties of a Good Algorithm

1. **Input:** Zero or more inputs.
2. **Output:** At least one output.
3. **Definiteness:** Each step is precisely defined.
4. **Finiteness:** The algorithm terminates after a finite number of steps.
5. **Effectiveness:** Each step is basic enough to be carried out.

### Representing Algorithms

- Natural language (informal)
- Pseudocode (semi-formal)
- Flowcharts (graphical)
- Programming language (formal, executable)

### Deciding Between Representations

| Representation   | Precision | Readability | Executable |
| ---------------- | --------- | ----------- | ---------- |
| Natural language | Low       | High        | No         |
| Pseudocode       | Medium    | Medium      | No         |
| Flowchart        | Medium    | High        | No         |
| Programming code | High      | Low         | Yes        |

Pseudocode is the best compromise for communicating algorithms between humans. It is precise enough
to unambiguously describe the logic, but does not require knowledge of a specific language's syntax.

### Proving Termination

An algorithm terminates if every loop has a well-defined condition that is eventually satisfied, and
every recursive call makes progress toward a base case.

**Example.** The following algorithm always terminates:

```
PROCEDURE countdown(n)
{
    REPEAT UNTIL (n = 0)
    {
        DISPLAY(n)
        n <- n - 1
    }
}
```

**Proof.** The variable `n` decreases by 1 each iteration. Since `n` is a non-negative integer, it
will eventually reach 0, satisfying the loop condition. $\blacksquare$

### Proving Correctness by Induction

**Example.** Prove that `factorial(n)` returns $n!$.

Base case: `factorial(0) = 1 = 0!`. True.

Inductive step: assume `factorial(k) = k!` for all $k \lt n$. Then `factorial(n) = n *
factorial(n-1) = n * (n-1)! = n!`. True by the inductive hypothesis.

By induction, `factorial(n) = n!` for all $n \ge 0$. $\blacksquare$

## Abstraction in Practice

### Abstract Data Types

An Abstract Data Type (ADT) defines a data type by its behavior (operations) rather than its
implementation. The user interacts with the ADT through a well-defined interface.

**Stack ADT:**

- `push(item)`: Add an item to the top.
- `pop()`: Remove and return the top item.
- `peek()`: Return the top item without removing it.
- `isEmpty()`: Return true if the stack is empty.

The user does not need to know whether the stack is implemented using an array, a linked list, or
something else.

**Queue ADT:**

- `enqueue(item)`: Add an item to the back.
- `dequeue()`: Remove and return the front item.
- `peek()`: Return the front item without removing it.
- `isEmpty()`: Return true if the queue is empty.

**Stack implementation in Java (AP CS A):**

```java
public class ArrayStack {
    private int[] stack;
    private int top;

    public ArrayStack(int capacity) {
        stack = new int[capacity];
        top = -1;
    }

    public void push(int item) {
        if (top == stack.length - 1) {
            throw new RuntimeException("Stack overflow");
        }
        stack[++top] = item;
    }

    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack underflow");
        }
        return stack[top--];
    }

    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}
```

**Time complexity of stack operations:**

| Operation | Time Complexity |
| --------- | --------------- |
| push      | $O(1)$          |
| pop       | $O(1)$          |
| peek      | $O(1)$          |
| isEmpty   | $O(1)$          |
| search    | $O(n)$          |

### Using Stacks: Balanced Parentheses

A classic application of stacks is checking for balanced parentheses.

```java
public static boolean isBalanced(String expr) {
    java.util.Stack<Character> stack = new java.util.Stack<>();
    for (char c : expr.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if (!matches(top, c)) return false;
        }
    }
    return stack.isEmpty();
}

private static boolean matches(char open, char close) {
    return (open == '(' && close == ')') ||
           (open == '{' && close == '}') ||
           (open == '[' && close == ']');
}
```

**Time complexity:** $O(n)$ -- each character is pushed and popped at most once.

### Using Queues: BFS (Breadth-First Search)

A queue is essential for breadth-first search, which explores nodes level by level.

```java
public static void bfs(int[][] graph, int start) {
    boolean[] visited = new boolean[graph.length];
    java.util.Queue<Integer> queue = new java.util.LinkedList<>();
    visited[start] = true;
    queue.add(start);
    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.add(neighbor);
            }
        }
    }
}
```

### Top-Down Design Example: Contact Management System

**Level 1:** Contact storage, search, display, import/export.

**Level 2 (under Contact storage):** Add contact, edit contact, delete contact.

**Level 3 (under Add contact):** Validate name, validate phone number, check for duplicates, save.

**Level 3 (under Search):** Search by name, search by phone, search by email.

Each leaf node in the decomposition is a simple, implementable task.

### Stepwise Refinement Example: Calculating GPA

**Level 1:** Calculate GPA from a list of grades.

**Level 2:** Map each grade to points, sum the points, divide by the number of grades.

**Level 3:**
```
PROCEDURE calculateGPA(grades)
{
    totalPoints <- 0
    FOR EACH grade IN grades
    {
        points <- gradeToPoints(grade)
        totalPoints <- totalPoints + points
    }
    RETURN(totalPoints / LENGTH(grades))
}

PROCEDURE gradeToPoints(grade)
{
    IF (grade = "A") { RETURN(4.0) }
    ELSE IF (grade = "B") { RETURN(3.0) }
    ELSE IF (grade = "C") { RETURN(2.0) }
    ELSE IF (grade = "D") { RETURN(1.0) }
    ELSE { RETURN(0.0) }
}
```

## Trace Tables

A trace table records the values of variables as an algorithm executes.

**Example:** Trace `findMax` on the list [3, 7, 2, 9, 5].

| Iteration | item | max (before) | max (after) |
| --------- | ---- | ------------ | ----------- |
| 1         | 3    | 3            | 3           |
| 2         | 7    | 3            | 7           |
| 3         | 2    | 7            | 7           |
| 4         | 9    | 7            | 9           |
| 5         | 5    | 9            | 9           |

Final result: 9. Correct.

**Example:** Trace `binarySearch` on [2, 5, 8, 12, 16, 23, 38] searching for 16.

| Iteration | low | high | mid | list[mid] | Action    |
| --------- | --- | ---- | --- | --------- | --------- |
| 1         | 1   | 7    | 4   | 12        | 12 < 16   |
| 2         | 5   | 7    | 6   | 23        | 23 > 16   |
| 3         | 5   | 5    | 5   | 16        | Found!    |

Result: index 5. Correct.

## Common Pitfalls

1. **Confusing abstraction with simplification.** Abstraction hides irrelevant details while
   preserving essential behavior; simplification may lose important information.
2. **Not identifying the right level of abstraction.** Too high-level: the solution is vague. Too
   low-level: the solution is cluttered with irrelevant details.
3. **Ignoring edge cases in pseudocode.** Always consider empty inputs, single-element inputs, and
   boundary conditions.
4. **Confusing procedure parameters with procedure calls.** A parameter is a variable in the
   procedure definition; an argument is the actual value passed when calling the procedure.
5. **Using programming-language-specific syntax in pseudocode.** AP CSP pseudocode is
   language-agnostic.
6. **Forgetting that lists in AP CSP pseudocode are 1-indexed**, not 0-indexed like in Java.
7. **Not decomposing the problem sufficiently.** If a procedure is too complex, it should be
   decomposed further.
8. **Writing pseudocode that is too vague.** "Sort the list" is not an acceptable step -- you must
   describe _how_ to sort it, unless you are calling a named procedure that you have already
   defined.
9. **Forgetting the RETURN statement.** A procedure that computes a result must use RETURN to pass
   the result back to the caller. Without RETURN, the computed value is lost.
10. **Confusing REPEAT UNTIL with WHILE.** REPEAT UNTIL checks the condition _after_ the body
    executes (post-test loop). WHILE checks the condition _before_ the body executes (pre-test loop).

## Practice Questions

1. Decompose the problem "sort a list of student records by grade point average" into subproblems.
   Write pseudocode for each subproblem.

2. Write pseudocode for a procedure `countOccurrences(list, value)` that returns the number of times
   `value` appears in `list`.

3. Explain the difference between procedural abstraction and data abstraction, and give an example
   of each.

4. Write pseudocode for a procedure `isPalindrome(word)` that returns `true` if `word` reads the
   same forwards and backwards.

5. A programmer is designing a program to manage a library. Identify three levels of abstraction and
   describe what details are hidden at each level.

6. Write pseudocode for a procedure that finds the second-largest value in a list of numbers.

7. Explain why abstraction is important in software development. How does it contribute to code
   maintainability?

8. Write pseudocode for a procedure `mergeLists(list1, list2)` that combines two sorted lists into
   one sorted list.

9. Write AP CSP pseudocode for a procedure `removeDuplicates(list)` that returns a new list with all
   duplicate values removed.

10. Explain the difference between top-down design and stepwise refinement. How do they complement
    each other?

11. Write AP CSP pseudocode for a procedure `binarySearch(list, target)` that returns the index of
    `target` in a sorted `list`, or 0 if not found.

12. Explain what is meant by the "contract" of a procedure. Why are preconditions and postconditions
    important?

13. Write pseudocode for a procedure `reverseList(list)` that returns a new list with the elements
    in reverse order. Prove that your algorithm terminates.

14. Write pseudocode for a procedure `isSorted(list)` that returns true if the list is sorted in
    non-decreasing order. What is the time complexity?

15. Explain the difference between `REPEAT UNTIL (condition)` and `WHILE (condition)` loops. Give an
    example where each would be more appropriate than the other.

16. Write pseudocode for a procedure `findRange(list)` that returns both the minimum and maximum
    values in a list in a single pass. What is the time complexity compared to calling findMin and
    findMax separately?

17. **(AP CS A)** Write a Java method that implements `removeDuplicates` using an `ArrayList`. What
    is the time complexity of your solution?

18. **(AP CS A)** Write a recursive Java method `gcd(int a, int b)` that computes the greatest
    common divisor using Euclid's algorithm. Prove that it terminates by showing that the arguments
    decrease at each recursive call.

19. Prove by induction that the procedure `sumFirstN(n)` which computes $1 + 2 + \cdots + n$
    returns $n(n+1)/2$.

20. Write pseudocode for a procedure `isAnagram(word1, word2)` that returns true if the two words
    are anagrams of each other. What is the time complexity?

21. Explain how information hiding reduces coupling between modules. Give a concrete example from
    Java programming.

22. Write pseudocode for a procedure that determines whether a list contains any duplicate values.
    What is the most efficient approach?

23. Design a procedure `mode(list)` that returns the most frequently occurring value in a list. What
    is the time complexity?

24. **(AP CS A)** Explain the difference between a class and an interface in Java. How does each
    support abstraction?

25. Write a detailed trace table for the binary search algorithm when searching for 23 in the list
    [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]. Show the values of low, high, mid, and list[mid] at
    each step.

## Practice Problems

<details>
<summary>Question 1: Pseudocode tracing</summary>

Trace the following pseudocode and determine the output when `n = 5`:

```
PROCEDURE mystery(n)
{
    result <- 1
    i <- 1
    REPEAT UNTIL (i > n)
    {
        result <- result * i
        i <- i + 1
    }
    RETURN(result)
}
```

</details>

<details>
<summary>Answer</summary>

Tracing with n = 5:
- Start: result = 1, i = 1
- Iteration 1: result = 1*1 = 1, i = 2. 2 &gt; 5? No.
- Iteration 2: result = 1*2 = 2, i = 3. 3 &gt; 5? No.
- Iteration 3: result = 2*3 = 6, i = 4. 4 &gt; 5? No.
- Iteration 4: result = 6*4 = 24, i = 5. 5 &gt; 5? No.
- Iteration 5: result = 24*5 = 120, i = 6. 6 &gt; 5? Yes. Loop ends.

Output: 120 (this computes 5!, factorial of 5).

</details>

<details>
<summary>Question 2: Procedure with side effects</summary>

Consider the following pseudocode. What does `calculate(list)` return, and what is the value of `list` after the call?

```
list <- [3, 1, 4, 1, 5]

PROCEDURE calculate(lst)
{
    total <- 0
    FOR EACH item IN lst
    {
        total <- total + item
        REMOVE(lst, 1)
    }
    RETURN(total)
}

result <- calculate(list)
```

</details>

<details>
<summary>Answer</summary>

This question tests understanding of how modifying a list during iteration affects the result. In AP CSP pseudocode, `REMOVE(lst, 1)` removes the element at index 1.

The exact behavior depends on the specification. In most implementations, modifying a list during iteration is undefined or removes elements as it goes:

- Iteration 1: item = 3 (index 1), total = 3, remove index 1. List becomes [3, 4, 1, 5].
- Iteration 2: item = 4 (new index 1), total = 7, remove index 1. List becomes [3, 1, 5].
- Iteration 3: item = 1 (new index 1), total = 8, remove index 1. List becomes [3, 5].
- Iteration 4: item = 5 (new index 1), total = 13, remove index 1. List becomes [3].

Return value: 13. The list after the call: [3].

This demonstrates why modifying a collection during iteration leads to unpredictable results.

</details>

<details>
<summary>Question 3: Abstraction levels</summary>

A program manages a school's grading system. Describe three levels of abstraction, specifying what details are hidden at each level.

</details>

<details>
<summary>Answer</summary>

Level 1 (highest): The school administrator interface. Hides: database queries, grade calculation algorithms, data storage format. The user only sees buttons like "Add Student" and "Generate Report".

Level 2 (middle): The grading logic module. Hides: individual assignment scoring details, how grades are stored in memory. Exposes procedures like `calculateGPA(studentID)` and `addClassGrade(studentID, courseID, grade)`.

Level 3 (lowest): The data storage layer. Hides: file system operations, database query language, indexing. Exposes procedures like `save(record)` and `retrieve(key)`.

Each level builds on the one below it, hiding implementation details and exposing only the necessary interface.

</details>

<details>
<summary>Question 4: Binary search pseudocode</summary>

Write AP CSP pseudocode for a binary search that returns the index of `target` in sorted `list`, or 0 if not found.

</details>

<details>
<summary>Answer</summary>

```
PROCEDURE binarySearch(list, target)
{
    low <- 1
    high <- LENGTH(list)
    
    REPEAT UNTIL (low > high)
    {
        mid <- (low + high) / 2
        IF (list[mid] = target)
        {
            RETURN(mid)
        }
        ELSE IF (list[mid] < target)
        {
            low <- mid + 1
        }
        ELSE
        {
            high <- mid - 1
        }
    }
    
    RETURN(0)
}
```

Note: AP CSP uses 1-based indexing, so indices start at 1. The loop continues until `low &gt; high`, indicating the target was not found.

</details>

<details>
<summary>Question 5: Decomposition of a problem</summary>

Decompose the problem "find the most common word in a text file" into subproblems. Write pseudocode for each subproblem.

</details>

<details>
<summary>Answer</summary>

Subproblems:
1. Read the file and split it into individual words.
2. Clean each word (remove punctuation, convert to lowercase).
3. Count the frequency of each word.
4. Find the word with the highest count.

```
PROCEDURE findMostCommonWord(filename)
{
    text <- readFile(filename)
    words <- split(text, " ")
    cleanedWords <- []
    
    FOR EACH word IN words
    {
        cleaned <- toLowerCase(removePunctuation(word))
        IF (LENGTH(cleaned) > 0)
        {
            APPEND(cleanedWords, cleaned)
        }
    }
    
    counts <- countFrequencies(cleanedWords)
    RETURN(findMaxKey(counts)
}
```

This decomposition separates concerns: file I/O, string processing, counting, and finding the maximum.

</details>
