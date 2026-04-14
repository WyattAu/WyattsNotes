---
title: Computational Thinking
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
finding patterns, abstracting details, and designing step-by-step solutions.

### Four Pillars

1. **Decomposition:** Breaking a complex problem into smaller, manageable subproblems.
2. **Pattern Recognition:** Finding similarities or trends within or between problems.
3. **Abstraction:** Focusing on essential information while ignoring irrelevant details.
4. **Algorithm Design:** Developing a step-by-step procedure to solve the problem.

## Abstraction (CED Unit 2)

Abstraction is the process of reducing complexity by hiding unnecessary details and exposing only
the essential features.

### Why Abstraction Matters

- Simplifies complex systems by providing a manageable interface.
- Allows programmers to work with high-level concepts without worrying about low-level
  implementation.
- Enables code reuse and modularity.

### Levels of Abstraction

| Level    | Example                  | Detail Level |
| -------- | ------------------------ | ------------ |
| High     | A web browser            | Very low     |
| Medium   | HTML/CSS/JavaScript      | Moderate     |
| Low      | Operating system calls   | High         |
| Very low | Machine code / binary    | Very high    |
| Hardware | Logic gates, transistors | Maximum      |

### Procedural Abstraction

A procedure (function/method) provides a named interface that hides its implementation. The caller
only needs to know what the procedure does (its specification), not how it does it.

**Benefits:**

- Readability: descriptive names document intent.
- Reusability: write once, call many times.
- Modifiability: change the implementation without affecting callers.

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

## Pseudocode (AP CSP)

AP CSP uses a specific pseudocode notation. Key constructs:

### Variable Assignment

```
a ← 10
b ← a + 5
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
list ← [1, 2, 3, 4, 5]
list[1] ← 10
APPEND(list, 6)
REMOVE(list, 3)
INSERT(list, 2, 99)
LENGTH(list)
```

:::info[Example: Finding the Maximum]

```
PROCEDURE findMax(list)
{
    max ← list[1]
    FOR EACH item IN list
    {
        IF (item > max)
        {
            max ← item
        }
    }
    RETURN(max)
}
```

:::

## Problem Solving Strategies

### Top-Down Design

Start with the main problem, then decompose into subproblems. Each subproblem is further decomposed
until the tasks are simple enough to implement directly.

### Stepwise Refinement

Gradually add detail to a high-level design. Start with pseudocode, then refine each step into more
specific instructions.

### Heuristics

General problem-solving strategies that are not guaranteed to work but are often effective:

- **Trial and error:** Try different approaches.
- **Working backward:** Start from the desired outcome.
- **Divide and conquer:** Split the problem into independent parts.
- **Draw diagrams:** Visualize the problem.

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
