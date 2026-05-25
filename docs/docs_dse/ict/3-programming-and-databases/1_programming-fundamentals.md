---
title: Programming Fundamentals
description:
  'DSE ICT comprehensive notes on programming fundamentals covering variables, data types, control
  structures, functions, arrays, string manipulation, file I/O,'
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: programming-fundamentals
---

This document provides comprehensive coverage of programming fundamentals for the DSE ICT
examination. Basic programming concepts and SQL are covered in
[../3-programming-and-databases/2_programming-and-databases](../3-programming-and-databases/2_programming-and-databases).
This document extends those topics with Deeper treatment of algorithms, string manipulation, file
handling, debugging, and DSE-specific exam Techniques.

---

## Variables and Constants

### Variable Naming Conventions

| Rule                     | Description                                     | Valid        | Invalid      |
| ------------------------ | ----------------------------------------------- | ------------ | ------------ |
| Must start with a letter | Cannot begin with a number or special character | `score`      | `2score`     |
| No spaces                | Use camelCase or underscores                    | `myScore`    | `my score`   |
| Case sensitive           | `Score` and `score` are different variables     | `total`      | N/A          |
| Must be descriptive      | Name should indicate the purpose                | `studentAge` | `x`          |
| No reserved words        | Cannot use language keywords                    | `myClass`    | `class`      |
| Consistent naming style  | Use the same convention throughout              | camelCase    | Mixed_styles |

### Data Types in Detail

| Data Type  | Size (typical) | Range                                               | Precision          |
| ---------- | -------------- | --------------------------------------------------- | ------------------ |
| Integer    | 2--8 bytes     | $-2^{31}$ to $2^{31}-1$ (32-bit)                    | Exact              |
| Float/Real | 4--8 bytes     | $\pm 3.4 \times 10^{-38}$ to $3.4 \times 10^{38}$   | ~7 decimal digits  |
| Double     | 8 bytes        | $\pm 1.7 \times 10^{-308}$ to $1.7 \times 10^{308}$ | ~15 decimal digits |
| String     | Variable       | Depends on implementation                           | N/A                |
| Boolean    | 1 byte         | True / False                                        | N/A                |
| Character  | 1 byte         | Single character (ASCII/Unicode)                    | N/A                |

**Type coercion and conversion:**

Converting between types is a common source of errors. In many languages, mixing types in an
expression Causes automatic type promotion.

| Conversion       | Description                                    | Risk              |
| ---------------- | ---------------------------------------------- | ----------------- |
| Integer to Float | Always safe, no data loss                      | None              |
| Float to Integer | Truncates the decimal part                     | Loss of precision |
| String to Number | Parses the string; fails if non-numeric        | Runtime error     |
| Number to String | Converts the number to its text representation | None              |

<details>
<summary>Worked Example: Type Conversion Issues</summary>

```python
x = 7 / 2       # x = 3.5 (float division)
y = 7 // 2      # y = 3 (integer division)
z = int(3.9)    # z = 3 (truncation, NOT rounding)

# Common error:
score = input("Enter score: ")   # score is a STRING, e.g., "85"
total = score + 10               # ERROR: cannot add string and integer
total = int(score) + 10          # CORRECT: convert string to int first
```

The `input()` function always returns a string. Forgetting to convert to the appropriate numeric
type Before performing arithmetic is one of the most common errors in student programs.

</details>

---

## Control Structures in Depth

### Nested Selection

Nested IF statements occur when one IF statement is placed inside another. Each level of nesting
Should be indented for clarity.

<details>
<summary>Worked Example: Nested IF for Fee Calculation</summary>

A cinema charges different ticket prices based on age and day:

- Children (under 12): $50 on weekdays, $60 on weekends
- Adults (12--64): $100 on weekdays, $120 on weekends
- Seniors (65+): $60 on weekdays, $70 on weekends

```python
BEGIN
    INPUT age, isWeekend
    IF age < 12 THEN
        IF isWeekend = TRUE THEN
            price = 60
        ELSE
            price = 50
        ENDIF
    ELSE IF age <= 64 THEN
        IF isWeekend = TRUE THEN
            price = 120
        ELSE
            price = 100
        ENDIF
    ELSE
        IF isWeekend = TRUE THEN
            price = 70
        ELSE
            price = 60
        ENDIF
    ENDIF
    OUTPUT price
END
```

</details>

### FOR vs WHILE Loops

| Aspect             | FOR Loop                               | WHILE Loop                              |
| ------------------ | -------------------------------------- | --------------------------------------- |
| Type               | Count-controlled                       | Condition-controlled                    |
| Known iterations?  | Yes, the number of iterations is known | No, depends on a condition              |
| Counter            | Automatically managed                  | Must be updated manually in the loop    |
| Infinite loop risk | Low (counter reaches limit)            | High (condition may never become false) |
| Use case           | Processing arrays, fixed repetitions   | User input validation, unknown counts   |

**Choosing between FOR and WHILE:**

- Use **FOR** when you know exactly how many times the loop should run (e.g., processing every
  element in an array).
- Use **WHILE** when the number of iterations depends on a condition that is evaluated at runtime
  (e.g., keep asking for input until the user enters a valid value).

### Loop Patterns

#### Sentinel-Controlled Loop

A loop that continues until a special value (sentinel) is entered.

```python
BEGIN
    SET total = 0
    SET count = 0
    INPUT score
    WHILE score <> -1
        total = total + score
        count = count + 1
        INPUT score
    ENDWHILE
    IF count > 0 THEN
        OUTPUT total / count
    ELSE
        OUTPUT "No valid data"
    ENDIF
END
```

#### Accumulator Pattern

Accumulates a running total.

```python
BEGIN
    SET sum = 0
    FOR i = 1 TO 100
        sum = sum + i
    NEXT i
    OUTPUT sum
END
```

#### Counting Pattern

Counts how many items satisfy a condition.

```python
BEGIN
    SET count = 0
    FOR i = 0 TO N - 1
        IF numbers[i] > 50 THEN
            count = count + 1
        ENDIF
    NEXT i
    OUTPUT count
END
```

#### Finding Maximum/Minimum

```python
BEGIN
    SET maximum = numbers[0]
    FOR i = 1 TO N - 1
        IF numbers[i] > maximum THEN
            maximum = numbers[i]
        ENDIF
    NEXT i
    OUTPUT maximum
END
```

<details>
<summary>Worked Example: Combined Loop Patterns</summary>

Write a program to read N numbers, output the sum, average, maximum, minimum, and count of numbers
Above the average.

```python
BEGIN
    INPUT N
    SET numbers = array of size N
    FOR i = 0 TO N - 1
        INPUT numbers[i]
    NEXT i

    SET sum = 0
    SET maximum = numbers[0]
    SET minimum = numbers[0]
    FOR i = 0 TO N - 1
        sum = sum + numbers[i]
        IF numbers[i] > maximum THEN
            maximum = numbers[i]
        ENDIF
        IF numbers[i] < minimum THEN
            minimum = numbers[i]
        ENDIF
    NEXT i

    SET average = sum / N
    SET aboveAverage = 0
    FOR i = 0 TO N - 1
        IF numbers[i] > average THEN
            aboveAverage = aboveAverage + 1
        ENDIF
    NEXT i

    OUTPUT "Sum: " + sum
    OUTPUT "Average: " + average
    OUTPUT "Maximum: " + maximum
    OUTPUT "Minimum: " + minimum
    OUTPUT "Above average: " + aboveAverage
END
```

</details>

---

## Functions and Procedures in Depth

### Parameter Passing

| Mechanism             | Description                                                | Effect on Original Variable |
| --------------------- | ---------------------------------------------------------- | --------------------------- |
| **Pass by value**     | A copy of the argument is passed to the function/procedure | Original unchanged          |
| **Pass by reference** | A reference (address) to the original variable is passed   | Original CAN be changed     |

In many exam-style pseudocode languages, parameters are passed by value by default. To pass by
Reference (allowing the procedure to modify the original), some notations use `BYREF`.

<details>
<summary>Worked Example: Pass by Value vs Reference</summary>

```python
PROCEDURE addBonus(BYREF salary, bonus)
    salary = salary + bonus
END PROCEDURE

BEGIN
    SET pay = 30000
    CALL addBonus(pay, 5000)
    OUTPUT pay
END
```

Because `salary` is passed BYREF, the original variable `pay` is modified. Output: `35000`.

If `salary` were passed by value (default), `pay` would remain `30000` because the procedure would
Modify only a local copy.

</details>

### Recursion

A recursive function calls itself to solve a problem by breaking it into smaller subproblems.

<details>
<summary>Worked Example: Recursive Fibonacci</summary>

```python
FUNCTION fibonacci(n)
    IF n <= 1 THEN
        RETURN n
    ELSE
        RETURN fibonacci(n - 1) + fibonacci(n - 2)
    ENDIF
END FUNCTION
```

Trace for `fibonacci(5)`:

| Call         | Result                      |
| ------------ | --------------------------- |
| fibonacci(5) | fibonacci(4) + fibonacci(3) |
| fibonacci(4) | fibonacci(3) + fibonacci(2) |
| fibonacci(3) | fibonacci(2) + fibonacci(1) |
| fibonacci(2) | fibonacci(1) + fibonacci(0) |
| fibonacci(1) | 1                           |
| fibonacci(0) | 0                           |

Working back up: fib(2) = 1 + 0 = 1, fib(3) = 1 + 1 = 2, fib(4) = 2 + 1 = 3, fib(5) = 3 + 2 = 5.

</details>

---

## String Manipulation

String operations are frequently tested in DSE ICT programming questions.

### Common String Operations

| Operation             | Description                                  | Example                                   |
| --------------------- | -------------------------------------------- | ----------------------------------------- |
| **Length**            | Returns the number of characters in a string | `LEN("Hello")` = 5                        |
| **Concatenation**     | Joins two strings together                   | `"Hello" + " " + "World"` = "Hello World" |
| **Substring/Extract** | Extracts a portion of a string               | `MID("Hello", 2, 3)` = "ell"              |
| **Left**              | Extracts characters from the left            | `LEFT("Hello", 3)` = "Hel"                |
| **Right**             | Extracts characters from the right           | `RIGHT("Hello", 2)` = "lo"                |
| **Upper case**        | Converts all characters to uppercase         | `UPPER("hello")` = "HELLO"                |
| **Lower case**        | Converts all characters to lowercase         | `LOWER("HELLO")` = "hello"                |
| **Find/Position**     | Finds the position of a substring            | `FIND("ll", "Hello")` = 3                 |
| **Replace**           | Replaces all occurrences of a substring      | `REPLACE("aab", "a", "x")` = "xxb"        |
| **Compare**           | Compares two strings alphabetically          | "Apple" < "Banana" is True                |

### Character Analysis

<details>
<summary>Worked Example: Count Vowels in a String</summary>

```python
FUNCTION countVowels(text)
    SET count = 0
    SET vowels = "aeiouAEIOU"
    FOR i = 0 TO LEN(text) - 1
        SET char = MID(text, i + 1, 1)
        IF FIND(char, vowels) > 0 THEN
            count = count + 1
        ENDIF
    NEXT i
    RETURN count
END FUNCTION
```

Note: In pseudocode, string indexing often starts at 1 (unlike Python which starts at 0). Check the
Specific convention used in your exam.

</details>

<details>
<summary>Worked Example: Reverse a String</summary>

```python
FUNCTION reverseString(text)
    SET result = ""
    FOR i = LEN(text) DOWNTO 1
        result = result + MID(text, i, 1)
    NEXT i
    RETURN result
END FUNCTION
```

For `reverseString("Hello")`:

| Iteration | i   | char | result  |
| --------- | --- | ---- | ------- |
| 1         | 5   | "o"  | "o"     |
| 2         | 4   | "l"  | "ol"    |
| 3         | 3   | "l"  | "oll"   |
| 4         | 2   | "e"  | "olle"  |
| 5         | 1   | "H"  | "olleH" |

</details>

<details>
<summary>Worked Example: Palindrome Check</summary>

```python
FUNCTION isPalindrome(text)
    SET length = LEN(text)
    FOR i = 1 TO length / 2
        IF MID(text, i, 1) <> MID(text, length - i + 1, 1) THEN
            RETURN FALSE
        ENDIF
    NEXT i
    RETURN TRUE
END FUNCTION
```

This compares the first character with the last, the second with the second-to-last, and so on. If
Any pair does not match, the function returns FALSE immediately.

</details>

---

## File Input/Output in Depth

### File Operations

| Operation | Description                                      | Mode       |
| --------- | ------------------------------------------------ | ---------- |
| Open      | Prepare a file for reading or writing            | Read/Write |
| Read      | Read data from an open file                      | Read       |
| Write     | Write data to an open file (overwrites existing) | Write      |
| Append    | Add data to the end of an existing file          | Append     |
| Close     | Release the file and save any buffered data      | N/A        |

### Sequential vs Random Access

| Feature                           | Sequential Access                    | Random Access                    |
| --------------------------------- | ------------------------------------ | -------------------------------- |
| Access method                     | Records read one after another       | Jump directly to any record      |
| Speed for reading all             | Fast (sequential read)               | Same or slower                   |
| Speed for finding specific record | Must read all preceding records      | Direct access, very fast         |
| File type                         | Text files                           | Binary files, database files     |
| Modification                      | Difficult (must rewrite entire file) | Easy (overwrite specific record) |
| Example                           | CSV, TXT                             | Direct-access binary files       |

<details>
<summary>Worked Example: Read and Process File Data</summary>

A file `students.txt` contains student records, one per line, in the format: `Name,Class,Score`

```
Chan Tai Man,5A,85
Lee Siu Ming,5B,72
Wong Ka Wai,5A,93
```

Write a program to read the file and find the student with the highest score.

```python
BEGIN
    OPEN FILE "students.txt" FOR READ
    SET highestScore = -1
    SET topStudent = ""

    WHILE NOT end of file
        READ line FROM FILE
        SET commaPos = FIND(",", line)
        SET name = LEFT(line, commaPos - 1)
        SET rest = MID(line, commaPos + 1, LEN(line) - commaPos)
        SET commaPos2 = FIND(",", rest)
        SET class = LEFT(rest, commaPos2 - 1)
        SET scoreStr = MID(rest, commaPos2 + 1, LEN(rest) - commaPos2)
        SET score = CONVERT_TO_INT(scoreStr)

        IF score > highestScore THEN
            highestScore = score
            topStudent = name
        ENDIF
    ENDWHILE

    CLOSE FILE
    OUTPUT "Top student: " + topStudent + " with score: " + highestScore
END
```

</details>

---

## Algorithms -- Search and Sort

### Linear Search

Linear search checks each element in sequence until the target is found or all elements have been
Checked.

| Aspect               | Value                                       |
| -------------------- | ------------------------------------------- |
| **Best case**        | O(1) -- found at first position             |
| **Worst case**       | O(n) -- found at last position or not found |
| **Average case**     | O(n/2)                                      |
| **Data requirement** | None (works on unsorted data)               |

```python
FUNCTION linearSearch(arr, size, target)
    FOR i = 0 TO size - 1
        IF arr[i] = target THEN
            RETURN i
        ENDIF
    NEXT i
    RETURN -1
END FUNCTION
```

### Binary Search

Binary search works on **sorted** arrays by repeatedly dividing the search range in half.

| Aspect               | Value                                   |
| -------------------- | --------------------------------------- |
| **Best case**        | O(1) -- found at middle on first check  |
| **Worst case**       | O(log n)                                |
| **Data requirement** | Array MUST be sorted in ascending order |

```python
FUNCTION binarySearch(arr, size, target)
    SET low = 0
    SET high = size - 1
    WHILE low <= high
        SET mid = (low + high) / 2  (integer division)
        IF arr[mid] = target THEN
            RETURN mid
        ELSE IF arr[mid] < target THEN
            low = mid + 1
        ELSE
            high = mid - 1
        ENDIF
    ENDWHILE
    RETURN -1
END FUNCTION
```

<details>
<summary>Worked Example: Binary Search Trace</summary>

Search for 23 in the sorted array: `[2, 5, 8, 12, 16, 23, 38, 45, 56]`

| Step | low | high | mid | arr[mid] | Comparison | Action           |
| ---- | --- | ---- | --- | -------- | ---------- | ---------------- |
| 1    | 0   | 8    | 4   | 16       | 16 < 23    | low = 5          |
| 2    | 5   | 8    | 6   | 38       | 38 > 23    | high = 5         |
| 3    | 5   | 5    | 5   | 23       | 23 = 23    | Found at index 5 |

Result: 23 is found at index 5.

</details>

### Insertion Sort

Insertion sort builds a sorted array one element at a time by inserting each element into its
correct Position among the previously sorted elements.

| Aspect         | Value                    |
| -------------- | ------------------------ |
| **Best case**  | O(n) -- already sorted   |
| **Worst case** | O(n^2) -- reverse sorted |
| **Stable**     | Yes                      |

```python
FUNCTION insertionSort(arr, size)
    FOR i = 1 TO size - 1
        SET key = arr[i]
        SET j = i - 1
        WHILE j >= 0 AND arr[j] > key
            arr[j + 1] = arr[j]
            j = j - 1
        ENDWHILE
        arr[j + 1] = key
    NEXT i
END FUNCTION
```

### Comparison of Sorting Algorithms

| Algorithm      | Best Case           | Average | Worst Case | Stable | Memory |
| -------------- | ------------------- | ------- | ---------- | ------ | ------ |
| Bubble Sort    | O(n)                | O(n^2)  | O(n^2)     | Yes    | O(1)   |
| Insertion Sort | O(n)                | O(n^2)  | O(n^2)     | Yes    | O(1)   |
| Selection Sort | O(n^2)              | O(n^2)  | O(n^2)     | No     | O(1)   |
| Binary Search  | O(log n) per lookup | N/A     | N/A        | N/A    | N/A    |

---

## Top-Down Design

Top-down design (stepwise refinement) is a problem-solving approach where a complex problem is
broken Down into smaller, more manageable sub-problems. Each sub-problem is then further refined
until the Solutions are simple enough to implement directly.

### Process

1. **Identify the main task:** State the overall problem in one sentence.
2. **Decompose into sub-tasks:** Break the main task into 2--5 major sub-tasks.
3. **Refine each sub-task:** Further break down each sub-task until each component is a simple,
   well-defined operation.
4. **Implement each component:** Write code (or pseudocode) for each leaf-level component.
5. **Combine and test:** Integrate all components and test the complete solution.

<details>
<summary>Worked Example: Top-Down Design for a Student Report Generator</summary>

**Main task:** Generate a student report showing each student's scores, average, and grade.

**Level 1 decomposition:**

1. Read student data from file
2. Calculate each student's average and grade
3. Display the report

**Level 2 refinement:**

1. Read student data from file 1.1 Open file for reading 1.2 Read each line and parse name, scores
   1.3 Store data in arrays 1.4 Close file

2. Calculate each student's average and grade 2.1 For each student, sum their scores 2.2 Calculate
   average 2.3 Assign grade based on average

3. Display the report 3.1 Print header 3.2 For each student, print name, scores, average, grade 3.3
   Print class .../4-statistics-and-probability/2_statistics (class average, highest, lowest)

Each leaf-level component (1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3) can be implemented as A
simple function or procedure.

</details>

### Advantages of Top-Down Design

| Advantage            | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| **Manageability**    | Large problems become manageable                                       |
| **Clarity**          | Each component has a clear, single responsibility                      |
| **Reusability**      | Well-defined components can be reused in other programs                |
| **Testability**      | Each component can be tested independently                             |
| **Teamwork**         | Different team members can work on different components simultaneously |
| **Easier debugging** | Errors can be isolated to specific components                          |

---

## Flowcharts and Pseudocode -- DSE Exam Requirements

### Flowchart Symbols

| Symbol           | Shape                       | Meaning                                   |
| ---------------- | --------------------------- | ----------------------------------------- |
| **Start/End**    | Oval                        | Beginning or end of the program           |
| **Input/Output** | Parallelogram               | Data input or output                      |
| **Process**      | Rectangle                   | A calculation or assignment               |
| **Decision**     | Diamond                     | A conditional branch (Yes/No)             |
| **Flow arrow**   | Arrow                       | Direction of flow                         |
| **Connector**    | Circle                      | Connects to another part of the flowchart |
| **Subroutine**   | Rectangle with double sides | A call to a function/procedure            |

### Pseudocode Conventions for DSE

The DSE ICT examination uses structured pseudocode. Key conventions:

| Construct        | Syntax                                                    |
| ---------------- | --------------------------------------------------------- |
| **Start/End**    | `BEGIN` ... `END`                                         |
| **Assignment**   | `SET variable = expression`                               |
| **Input**        | `INPUT variable`                                          |
| **Output**       | `OUTPUT expression`                                       |
| **IF**           | `IF condition THEN ... ELSE ... ENDIF`                    |
| **FOR**          | `FOR counter = start TO end ... NEXT counter`             |
| **WHILE**        | `WHILE condition ... ENDWHILE`                            |
| **REPEAT-UNTIL** | `REPEAT ... UNTIL condition`                              |
| **Function**     | `FUNCTION name(parameters) ... RETURN value END FUNCTION` |
| **Procedure**    | `PROCEDURE name(parameters) ... END PROCEDURE`            |
| **Array access** | `array[index]`                                            |
| **Comment**      | `// This is a comment`                                    |

### Converting Between Flowcharts and Pseudocode

Every flowchart symbol maps directly to pseudocode:

| Flowchart Symbol       | Pseudocode Equivalent                  |
| ---------------------- | -------------------------------------- |
| Oval (Start)           | `BEGIN`                                |
| Parallelogram (Input)  | `INPUT variable`                       |
| Rectangle (Process)    | `SET variable = expression`            |
| Diamond (Decision)     | `IF condition THEN ... ELSE ... ENDIF` |
| Parallelogram (Output) | `OUTPUT expression`                    |
| Oval (End)             | `END`                                  |
| Arrow (loop)           | `FOR ... NEXT` or `WHILE ... ENDWHILE` |

---

## Debugging and Testing

### Types of Errors

| Error Type        | Description                                                  | Detected When    | Example                               |
| ----------------- | ------------------------------------------------------------ | ---------------- | ------------------------------------- |
| **Syntax error**  | Code violates the language's grammar rules                   | Compilation      | Missing `THEN` in IF statement        |
| **Logic error**   | Program runs but produces incorrect results                  | During testing   | Using `>` instead of `>=`             |
| **Runtime error** | Program crashes during execution due to an invalid operation | During execution | Division by zero, array out of bounds |

### Debugging Techniques

| Technique            | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| **Trace tables**     | Manually trace through the algorithm recording variable values |
| **Print statements** | Add OUTPUT statements at key points to inspect variable values |
| **Dry run**          | Execute the algorithm on paper with sample data                |
| **Breakpoints**      | Pause execution at specific lines (in an IDE)                  |
| **Step-through**     | Execute one line at a time, inspecting variables               |
| **Rubber ducking**   | Explain the code line by line to identify the error            |

### Testing Strategies

| Testing Type       | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| **Normal data**    | Test with typical, expected input values                        |
| **Boundary data**  | Test with values at the edges of valid ranges (e.g., 0, 100)    |
| **Erroneous data** | Test with invalid input (e.g., negative age, non-numeric input) |
| **Extreme data**   | Test with very large or very small values                       |
| **Absent data**    | Test with empty or missing input                                |

<details>
<summary>Worked Example: Testing a Grade Program</summary>

Program: Assign grades based on score (A: &gt;= 80, B: &gt;= 60, C: &gt;= 40, F: &lt; 40).

| Test Case | Input | Expected Output | Purpose           |
| --------- | ----- | --------------- | ----------------- |
| Normal    | 75    | B               | Typical input     |
| Normal    | 45    | C               | Typical input     |
| Boundary  | 80    | A               | Edge of A range   |
| Boundary  | 79    | B               | Just below A      |
| Boundary  | 60    | B               | Edge of B range   |
| Boundary  | 40    | C               | Edge of C range   |
| Boundary  | 39    | F               | Just below C      |
| Boundary  | 0     | F               | Minimum valid     |
| Boundary  | 100   | A               | Maximum valid     |
| Erroneous | -5    | Error message   | Negative score    |
| Erroneous | 105   | Error message   | Score exceeds max |
| Erroneous | "abc" | Error message   | Non-numeric input |

</details>

---

## Common Pitfalls

1. **Off-by-one errors in loops:** When iterating through an array of size N, the loop should run
   from 0 to N-1 (inclusive), not 0 to N. Accessing index N causes an out-of-bounds error.

2. **Not initialising variables before use:** If a variable used as a maximum or minimum is
   initialised to 0 instead of the first array element, the algorithm fails when all values are
   negative.

3. **Confusing assignment (=) and comparison (==):** In many languages, `=` assigns a value and `==`
   compares. Using `=` in a condition assigns the value instead of comparing it.

4. **Forgetting to update the loop counter in WHILE loops:** If the loop variable is not modified
   inside the loop body, the condition never becomes false, causing an infinite loop.

5. **Binary search requires sorted data:** Applying binary search to an unsorted array produces
   incorrect results. Always verify the array is sorted before using binary search.

6. **String indexing:** Some pseudocode conventions use 1-based indexing (first character is at
   position 1), while programming languages like Python use 0-based indexing. Be consistent with the
   convention specified in the exam.

7. **Infinite recursion without a base case:** A recursive function must have a condition that stops
   the recursion. Without it, the function calls itself indefinitely, eventually causing a stack
   overflow.

8. **Not closing files:** Forgetting to close a file after reading or writing can cause data loss
   (for writes) or resource leaks (files remaining locked).

9. **Integer division truncation:** In many languages, dividing two integers produces an integer
   result (truncated). `7 / 2` gives `3`Not `3.5`. Use floating-point division when a decimal result
   is needed.

10. **Scope of variables:** Local variables inside a function are not accessible outside the
    function. Using a variable name that conflicts with a global variable can lead to unexpected
    behaviour.

---

## Practice Problems

<details>
<summary>Question 1: Algorithm Design with Trace Table</summary>

Write pseudocode for a program that reads N integers and counts how many are positive, how many are
Negative, and how many are zero. Trace the algorithm with input: `N = 5`Values: `3, -2, 0, 7, -1`.

Answer:

```python
BEGIN
    INPUT N
    SET positive = 0
    SET negative = 0
    SET zero = 0
    FOR i = 1 TO N
        INPUT num
        IF num > 0 THEN
            positive = positive + 1
        ELSE IF num < 0 THEN
            negative = negative + 1
        ELSE
            zero = zero + 1
        ENDIF
    NEXT i
    OUTPUT positive, negative, zero
END
```

Trace table:

| i   | num | num > 0 | num < 0 | positive | negative | zero |
| --- | --- | ------- | ------- | -------- | -------- | ---- |
| 1   | 3   | True    | -       | 1        | 0        | 0    |
| 2   | -2  | False   | True    | 1        | 1        | 0    |
| 3   | 0   | False   | False   | 1        | 1        | 1    |
| 4   | 7   | True    | -       | 2        | 1        | 1    |
| 5   | -1  | False   | True    | 2        | 2        | 1    |

Output: `positive = 2, negative = 2, zero = 1`

</details>

<details>
<summary>Question 2: String Processing</summary>

Write a function in pseudocode that takes a string and returns the number of words in the string. A
Word is defined as a sequence of characters separated by spaces.

(a) Write the pseudocode.

(b) Trace the function with the input: `"DSE ICT is challenging"`.

Answer:

(a)

```python
FUNCTION countWords(text)
    SET count = 0
    SET inWord = FALSE
    FOR i = 1 TO LEN(text)
        SET char = MID(text, i, 1)
        IF char <> " " THEN
            IF inWord = FALSE THEN
                count = count + 1
                inWord = TRUE
            ENDIF
        ELSE
            inWord = FALSE
        ENDIF
    NEXT i
    RETURN count
END FUNCTION
```

(b) Trace for `"DSE ICT is challenging"` (LEN = 21):

| i     | char              | inWord (before) | Action   | count | inWord (after) |
| ----- | ----------------- | --------------- | -------- | ----- | -------------- |
| 1     | D                 | FALSE           | New word | 1     | TRUE           |
| 2     | S                 | TRUE            | None     | 1     | TRUE           |
| 3     | E                 | TRUE            | None     | 1     | TRUE           |
| 4     | " "               | TRUE            | End word | 1     | FALSE          |
| 5     | I                 | FALSE           | New word | 2     | TRUE           |
| 6     | C                 | TRUE            | None     | 2     | TRUE           |
| 7     | T                 | TRUE            | None     | 2     | TRUE           |
| 8     | " "               | TRUE            | End word | 2     | FALSE          |
| 9     | i                 | FALSE           | New word | 3     | TRUE           |
| 10    | s                 | TRUE            | None     | 3     | TRUE           |
| 11    | " "               | TRUE            | End word | 3     | FALSE          |
| 12    | c                 | FALSE           | New word | 4     | TRUE           |
| 13-21 | (remaining chars) | TRUE            | None     | 4     | TRUE           |

Result: 4 words

</details>

<details>
<summary>Question 3: Binary Search</summary>

(a) Explain why binary search requires the data to be sorted.

(b) Trace a binary search for the value 7 in the sorted array: `[1, 3, 5, 7, 9, 11, 13, 15, 17]`.

(c) State the maximum number of comparisons needed to search an array of 1000 elements using binary
search.

Answer:

(a) Binary search works by comparing the target with the middle element and discarding half of the
Remaining elements each time. This strategy only works correctly if the elements are in a known
order (sorted ascending). If the array is unsorted, discarding half the elements based on a
comparison with The middle element could eliminate the target, making the algorithm fail.

(b) Array: `[1, 3, 5, 7, 9, 11, 13, 15, 17]`Target = 7

| Step | low | high | mid | arr[mid] | Comparison | Action   |
| ---- | --- | ---- | --- | -------- | ---------- | -------- |
| 1    | 0   | 8    | 4   | 9        | 9 > 7      | high = 3 |
| 2    | 0   | 3    | 1   | 3        | 3 < 7      | low = 2  |
| 3    | 2   | 3    | 2   | 5        | 5 < 7      | low = 3  |
| 4    | 3   | 3    | 3   | 7        | 7 = 7      | Found    |

Result: Found at index 3.

(c) Binary search has O(log n) complexity. For n = 1000: $\log_2(1000) \approx 9.97$. The maximum
Number of comparisons is $\lceil \log_2(1000) \rceil = 10$. (The array needs at most 10 comparisons
Because $2^{10} = 1024 > 1000$.)

</details>

<details>
<summary>Question 4: Top-Down Design and Implementation</summary>

A teacher needs a program to process student attendance data. The program should:

1. Read attendance records from a file (one record per student: name followed by P/A for each day).
2. Calculate each student's attendance percentage.
3. Output a list of students whose attendance is below 80%.

(a) Apply top-down design to decompose this problem into sub-tasks.

(b) Write pseudocode for the complete solution.

Answer:

(a)

**Level 1:** Process attendance data

**Level 2:**

1. Read attendance data 1.1 Open file 1.2 Read each student's attendance record 1.3 Parse name and
   attendance marks 1.4 Store in arrays 1.5 Close file
2. Calculate attendance percentages 2.1 For each student, count P marks 2.2 Calculate percentage: (P
   count / total days) \* 100
3. Identify students below 80% 3.1 Check each student's percentage 3.2 Output those below 80%

(b)

```python
BEGIN
    OPEN FILE "attendance.txt" FOR READ
    SET names = empty array
    SET percentages = empty array
    SET studentCount = 0

    WHILE NOT end of file
        READ line FROM FILE
        SET spacePos = FIND(" ", line)
        SET name = LEFT(line, spacePos - 1)
        SET attendance = MID(line, spacePos + 1, LEN(line) - spacePos)

        SET totalDays = LEN(attendance)
        SET presentDays = 0
        FOR i = 1 TO totalDays
            IF MID(attendance, i, 1) = "P" THEN
                presentDays = presentDays + 1
            ENDIF
        NEXT i

        SET percentage = (presentDays / totalDays) * 100
        APPEND name TO names
        APPEND percentage TO percentages
        studentCount = studentCount + 1
    ENDWHILE
    CLOSE FILE

    OUTPUT "Students with attendance below 80%:"
    FOR i = 0 TO studentCount - 1
        IF percentages[i] < 80 THEN
            OUTPUT names[i] + " - " + percentages[i] + "%"
        ENDIF
    NEXT i
END
```

</details>

<details>
<summary>Question 5: Comprehensive Programming Question</summary>

A shop sells items with prices stored in an array. A discount is applied based on the total purchase
Amount:

- Total &lt; 100: no discount
- 100 &lt;= Total &lt; 500: 5% discount
- 500 &lt;= Total &lt; 1000: 10% discount
- Total &gt;= 1000: 15% discount

Write a program that:

(a) Reads N item prices into an array.

(b) Calculates the total before discount.

(c) Determines the discount percentage.

(d) Calculates the final amount after discount.

(e) Outputs the total, discount percentage, and final amount.

Answer:

```python
BEGIN
    INPUT N
    SET prices = array of size N
    SET total = 0

    FOR i = 0 TO N - 1
        INPUT prices[i]
        total = total + prices[i]
    NEXT i

    OUTPUT "Total before discount: " + total

    IF total >= 1000 THEN
        discountRate = 15
    ELSE IF total >= 500 THEN
        discountRate = 10
    ELSE IF total >= 100 THEN
        discountRate = 5
    ELSE
        discountRate = 0
    ENDIF

    SET discountAmount = total * discountRate / 100
    SET finalAmount = total - discountAmount

    OUTPUT "Discount: " + discountRate + "%"
    OUTPUT "Discount amount: " + discountAmount
    OUTPUT "Final amount: " + finalAmount
END
```

</details>

## Summary

theory, practical implementation, and key applications.

> > > > > > > Stashed changes:docs/docs_dse/ICT/programming-fundamentals.md

**Key concepts include:**


- Big O notation and complexity analysis
- searching algorithms (binary, linear)
- sorting algorithms (bubble, merge, quick)
- graph algorithms (Dijkstra, BFS, DFS)
- dynamic programming

Understanding these concepts thoroughly is essential for both examinations and practical
programming, and requires both theoretical knowledge and hands-on practice.

> > > > > > > Stashed changes:docs/docs_dse/ICT/programming-fundamentals.md
