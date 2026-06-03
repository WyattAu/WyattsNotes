---
title: 'Programming -- Diagnostic Tests'
description:
  'GCSE Computer Science Programming -- Diagnostic Tests notes covering key definitions, core
  concepts, worked examples, and practice questions for in-depth revision.'
slug: diag-programming
hide_table_of_contents: true
---

# Programming -- Diagnostic Tests

## Unit Tests

### UT-1: Variables, Data Types, and Constants

**Question:**

(a) Explain the difference between a variable and a constant. Give an example of when you would use
each.

(b) State the purpose of each of the following data types and give an example of suitable data:
integer, real/float, string, Boolean, character.

(c) A program needs to store a student's name, their age, their exam score (which may include
decimals), and whether they have passed. State the most appropriate data type for each piece of data
and justify your choice.

(d) Explain why it is good practice to initialise variables before using them. What could happen if
a variable is used without being initialised?

**Solution:**

(a) A **variable** is a named storage location whose value can change during program execution. For
example, a variable called `score` might be updated as the player earns points. A **constant** is a
named value that does not change during program execution. For example, `PI` or `MAX_ATTEMPTS`
should be declared as constants because their values should remain fixed throughout the program.

(b)

- **Integer**: stores whole numbers without decimal places. Example: `age = 15` or `quantity = 42`.
- **Real/float**: stores numbers with decimal places. Example: `temperature = 36.6` or
  `price = 9.99`.
- **String**: stores a sequence of characters (text). Example: `name = "Alice"` or
  `address = "10 Downing Street"`.
- **Boolean**: stores one of two values: `True` or `False`. Example: `isMember = True` or
  `hasPassed = False`.
- **Character**: stores a single character. Example: `grade = 'A'` or `initial = 'J'`.

(c)

- **Student's name**: String -- names contain letters and possibly spaces, so a string is
  appropriate.
- **Age**: Integer -- age is always a whole number, so an integer is appropriate and uses less
  memory than a real.
- **Exam score**: Real/float -- exam scores may include decimal values (e.g., 67.5), so a real
  number type is needed.
- **Passed**: Boolean -- this represents a yes/no outcome (passed or not passed), so Boolean is the
  most appropriate type.

(d) Initialising variables ensures they have a known, predictable value before being used. If a
variable is not initialised, it may contain a random leftover value from memory ( garbage value),
which can lead to unpredictable program behaviour, incorrect calculations, or runtime errors. For
example, an uninitialised counter variable might start at a large random number, causing a loop to
run an incorrect number of times.

---

### UT-2: Selection and Iteration

**Question:**

(a) Explain the difference between selection and iteration in programming.

(b) Write pseudocode using a `CASE` structure to output the day of the week given an integer from 1
(Monday) to 7 (Sunday). If the input is not between 1 and 7, output "Invalid day".

(c) Explain the difference between a `FOR` loop and a `WHILE` loop. Describe a scenario where each
is the most appropriate choice.

(d) Write pseudocode for a program that asks the user to enter positive numbers one at a time. The
program should stop when the user enters -1 and output the sum and average of all numbers entered
(excluding -1).

**Solution:**

(a) **Selection** is a programming construct where the program chooses between different paths based
on a condition (e.g., `IF...THEN...ELSE`). It determines which block of code executes. **Iteration**
is a programming construct where a block of code is repeated multiple times until a condition is met
(e.g., `FOR`, `WHILE`, `REPEAT UNTIL` loops).

(b)

```
INPUT dayNumber
SWITCH dayNumber
    CASE 1: OUTPUT "Monday"
    CASE 2: OUTPUT "Tuesday"
    CASE 3: OUTPUT "Wednesday"
    CASE 4: OUTPUT "Thursday"
    CASE 5: OUTPUT "Friday"
    CASE 6: OUTPUT "Saturday"
    CASE 7: OUTPUT "Sunday"
    DEFAULT: OUTPUT "Invalid day"
ENDSWITCH
```

(c) A `FOR` loop is used when the number of iterations is known in advance. For example, iterating
through an array of known size or outputting a message 10 times. A `WHILE` loop is used when the
number of iterations is not known and depends on a condition that may change during execution. For
example, reading user input until a valid value is entered, or processing data until the end of a
file is reached.

(d)

```
sum = 0
count = 0
INPUT number
WHILE number != -1
    sum = sum + number
    count = count + 1
    INPUT number
ENDWHILE
IF count > 0 THEN
    average = sum / count
    OUTPUT "Sum: ", sum
    OUTPUT "Average: ", average
ELSE
    OUTPUT "No numbers were entered."
ENDIF
```

---

### UT-3: Functions and Procedures

**Question:**

(a) Explain the difference between a function and a procedure.

(b) Write a function in pseudocode called `calculateArea(length, width)` that takes the length and
width of a rectangle and returns its area.

(c) Write a procedure in pseudocode called `displayWelcome(name)` that takes a person's name as a
parameter and outputs a personalised welcome message.

(d) Explain the benefits of using subprograms (functions and procedures) in a program, including the
terms "modular programming" and "code reusability".

**Solution:**

(a) A **function** is a subprogram that performs a specific task and returns a single value to the
calling code. A **procedure** is a subprogram that performs a specific task but does not return a
value. Both can accept parameters.

(b)

```
FUNCTION calculateArea(length, width) RETURNS real
    area = length * width
    RETURN area
ENDFUNCTION
```

Usage:

```
result = calculateArea(5, 3)
OUTPUT "The area is: ", result
```

(c)

```
PROCEDURE displayWelcome(name)
    OUTPUT "Welcome, ", name, "!"
    OUTPUT "We hope you enjoy your visit."
ENDPROCEDURE
```

Usage:

```
displayWelcome("Alice")
```

(d) The benefits of using subprograms include:

- **Modular programming**: Breaking a large program into smaller, manageable subprograms makes the
  code easier to read, understand, and maintain. Each subprogram handles a specific task.
- **Code reusability**: Once a subprogram is written, it can be called multiple times from different
  parts of the program without rewriting the same code. This reduces code duplication and the risk
  of errors.
- **Easier testing**: Individual subprograms can be tested independently, making it easier to
  identify and fix bugs.
- **Team collaboration**: Different programmers can work on different subprograms simultaneously.
- **Abstraction**: The complexity of a subprogram is hidden from the calling code; users only need
  to know what the subprogram does, not how it works internally.

---

## Integration Tests

### IT-1: Combined Programming Constructs

**Question:**

(a) Write pseudocode for a program that reads 20 student exam scores (0 to 100). The program should
use a function to determine the grade for each score: A (70-100), B (55-69), C (40-54), D (25-39), U
(0-24). The program should count how many students achieved each grade and output the results.

(b) Modify your solution so that after outputting the grade counts, the program also calculates and
outputs the percentage of students who achieved grade C or above (A, B, or C).

(c) Add validation to ensure each score entered is between 0 and 100. If an invalid score is
entered, the program should ask the user to re-enter the score until it is valid. State the type of
validation being applied.

(d) Explain how using a function for grade determination makes the program easier to maintain than
writing the grade logic directly in the main program loop.

**Solution:**

(a)

```
FUNCTION determineGrade(score) RETURNS character
    IF score >= 70 THEN
        RETURN "A"
    ELSE IF score >= 55 THEN
        RETURN "B"
    ELSE IF score >= 40 THEN
        RETURN "C"
    ELSE IF score >= 25 THEN
        RETURN "D"
    ELSE
        RETURN "U"
    ENDIF
ENDFUNCTION

countA = 0
countB = 0
countC = 0
countD = 0
countU = 0

FOR i = 1 TO 20
    INPUT score
    grade = determineGrade(score)
    IF grade == "A" THEN countA = countA + 1
    ELSE IF grade == "B" THEN countB = countB + 1
    ELSE IF grade == "C" THEN countC = countC + 1
    ELSE IF grade == "D" THEN countD = countD + 1
    ELSE countU = countU + 1
    ENDIF
ENDFOR

OUTPUT "Grade A: ", countA
OUTPUT "Grade B: ", countB
OUTPUT "Grade C: ", countC
OUTPUT "Grade D: ", countD
OUTPUT "Grade U: ", countU
```

(b) Add after the grade outputs:

```
total = countA + countB + countC + countD + countU
aboveC = countA + countB + countC
percentage = (aboveC / total) * 100
OUTPUT "Percentage achieving grade C or above: ", percentage, "%"
```

(c) Add a validation loop inside the `FOR` loop:

```
FOR i = 1 TO 20
    INPUT score
    WHILE score < 0 OR score > 100
        OUTPUT "Invalid score. Please enter a value between 0 and 100."
        INPUT score
    ENDWHILE
    grade = determineGrade(score)
    ...
ENDFOR
```

This is **range validation** -- checking that the input falls within an acceptable range of values.

(d) Using a function for grade determination means that if the grade boundaries change (e.g., the A
grade is changed to 75-100), the code only needs to be modified in one place (inside the
`determineGrade` function). Without the function, the same logic might be duplicated in multiple
places, requiring all instances to be found and updated, increasing the risk of inconsistency and
errors.

---

### IT-2: Data Processing with Iteration and Selection

**Question:**

(a) Write pseudocode for a procedure called `findMaximum(numbers, n)` that finds and outputs the
largest value in an array of `n` numbers.

(b) Write pseudocode for a function called `countOccurrences(numbers, n, target)` that counts and
returns how many times `target` appears in the array.

(c) A program stores monthly rainfall data in an array of 12 integers. Write pseudocode that: reads
the 12 values, calculates the annual total, finds the wettest and driest months, and outputs all
results including the average monthly rainfall.

(d) Explain the term "infinite loop" and describe how to prevent one when using `WHILE` loops in
your code.

**Solution:**

(a)

```
PROCEDURE findMaximum(numbers, n)
    maximum = numbers[0]
    FOR i = 1 TO n - 1
        IF numbers[i] > maximum THEN
            maximum = numbers[i]
        ENDIF
    ENDFOR
    OUTPUT "Maximum value: ", maximum
ENDPROCEDURE
```

(b)

```
FUNCTION countOccurrences(numbers, n, target) RETURNS integer
    count = 0
    FOR i = 0 TO n - 1
        IF numbers[i] == target THEN
            count = count + 1
        ENDIF
    ENDFOR
    RETURN count
ENDFUNCTION
```

(c)

```
DIM rainfall[12]
total = 0
maximum = -1
minMonth = 1
maxMonth = 1
FOR i = 0 TO 11
    INPUT rainfall[i]
    total = total + rainfall[i]
    IF rainfall[i] > maximum THEN
        maximum = rainfall[i]
        maxMonth = i + 1
    ENDIF
ENDFOR

minimum = rainfall[0]
FOR i = 1 TO 11
    IF rainfall[i] < minimum THEN
        minimum = rainfall[i]
        minMonth = i + 1
    ENDIF
ENDFOR

average = total / 12
OUTPUT "Annual total rainfall: ", total
OUTPUT "Average monthly rainfall: ", average
OUTPUT "Wettest month: ", maxMonth, " (", maximum, " mm)"
OUTPUT "Driest month: ", minMonth, " (", minimum, " mm)"
```

(d) An **infinite loop** occurs when the condition of a `WHILE` loop never becomes `False`, so the
loop never terminates. For example, if the loop condition depends on a variable that is never
modified inside the loop body. To prevent infinite loops: ensure that the condition variable is
updated within the loop body; include a maximum iteration count as a safety mechanism; and
double-check the logic of the condition to ensure it can eventually evaluate to `False`.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Using `=` (assignment) instead of `==` (comparison) in conditions, which assigns a value rather
  than testing for equality.
- Forgetting to update the loop counter or condition variable inside a `WHILE` loop, creating an
  infinite loop.
- Declaring a function that should return a value but forgetting to include a `RETURN` statement.
- Using integer division when a real result is needed (e.g., `5 / 2` giving 2 instead of 2.5).
- Off-by-one errors in loop bounds: confusing whether a `FOR` loop should run from 0 to `n-1` or 1
  to `n`.
