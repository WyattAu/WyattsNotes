---
title: Programming Fundamentals
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - CS
categories:
  - IB
  - CS
slug: programming-fundamentals
---

## Variables, Constants, and Data Types

### Variables

A variable is a named storage location in memory whose value can change during program execution. A
variable has a name (identifier), a data type (which determines the kind of data it can hold and how
much memory it occupies), and a value (the data currently stored).

**Declaration** allocates memory for the variable and associates a name with that location.
**Initialization** assigns an initial value at the point of declaration. **Assignment** changes the
value stored in the variable after it has been declared.

### Constants

A constant is a named storage location whose value cannot change after initialization. Constants
make programs more readable and maintainable by replacing magic numbers with meaningful names. In IB
pseudocode, constants are declared with the `CONSTANTS` keyword.

```
CONSTANTS
  MAX_STUDENTS ← 30
  TAX_RATE ← 0.15
  SCHOOL_NAME ← "Springfield High"
```

Attempting to reassign a constant is a logic error (or a compilation error in statically typed
languages with constant enforcement).

### Primitive Data Types

| Data Type | Description                                 | Typical Size | Example Values        |
| --------- | ------------------------------------------- | ------------ | --------------------- |
| INTEGER   | Whole numbers (positive, negative, or zero) | 4 bytes      | -42, 0, 1024          |
| FLOAT     | Real numbers with fractional parts          | 8 bytes      | 3.14, -0.001, 1.0e10  |
| CHAR      | A single character                          | 1 byte       | 'A', 'z', '9', '?'    |
| STRING    | A sequence of characters                    | Variable     | "Hello", "IB CS 2025" |
| BOOLEAN   | Logical values                              | 1 byte       | TRUE, FALSE           |

**INTEGER vs FLOAT:** Integers are exact; floating-point numbers have limited precision due to their
binary representation. This matters for comparison. The expression `0.1 + 0.2 = 0.3` may evaluate to
FALSE in many languages because `0.1 + 0.2` is stored as `0.30000000000000004`.

**CHAR vs STRING:** A CHAR is a single character. A STRING is a sequence of zero or more characters.
In many languages, a STRING is an array of CHARs with a null terminator or a length field.

**BOOLEAN:** Named after George Boole. Only two values: TRUE and FALSE. Used as the condition in
selection and iteration constructs, and as the return type of functions that perform checks or
comparisons.

## Operators

### Arithmetic Operators

| Operator | Description        | Example   | Result |
| -------- | ------------------ | --------- | ------ |
| `+`      | Addition           | `7 + 3`   | 10     |
| `-`      | Subtraction        | `7 - 3`   | 4      |
| `*`      | Multiplication     | `7 * 3`   | 21     |
| `/`      | Division           | `7 / 3`   | 2.33   |
| DIV      | Integer division   | `7 DIV 3` | 2      |
| MOD      | Modulo (remainder) | `7 MOD 3` | 1      |
| `^`      | Exponentiation     | `2 ^ 10`  | 1024   |

**DIV vs `/`:** DIV discards the fractional part (truncates toward zero in most IB pseudocode
contexts). `/` produces a floating-point result. For `7 / 3`, DIV gives 2 and `/` gives 2.333...

**MOD:** Returns the remainder after integer division. `7 MOD 3 = 1` because `7 = 3 * 2 + 1`. MOD is
commonly used to test divisibility (e.g., `n MOD 2 = 0` tests if `n` is even), to wrap indices in
circular data structures, and to extract digits.

### Relational (Comparison) Operators

| Operator | Description              | Example  | Result |
| -------- | ------------------------ | -------- | ------ |
| `=`      | Equal to                 | `5 = 5`  | TRUE   |
| `<>`     | Not equal to             | `5 <> 3` | TRUE   |
| `<`      | Less than                | `3 < 5`  | TRUE   |
| `>`      | Greater than             | `5 > 3`  | TRUE   |
| `<=`     | Less than or equal to    | `5 <= 5` | TRUE   |
| `>=`     | Greater than or equal to | `5 >= 3` | TRUE   |

Relational operators always produce a BOOLEAN result. They can be applied to numeric types
(comparing magnitude) and string types (comparing lexicographically based on character codes).

### Logical Operators

| Operator | Description | Truth Table Rule                       |
| -------- | ----------- | -------------------------------------- |
| NOT      | Negation    | Reverses the truth value               |
| AND      | Conjunction | TRUE only when both operands are TRUE  |
| OR       | Disjunction | TRUE when at least one operand is TRUE |
| XOR      | Exclusive   | TRUE when operands differ              |

**Operator precedence** (highest to lowest): NOT, AND, OR. This matters in expressions like:

```
NOT a AND b OR c
```

This is evaluated as `((NOT a) AND b) OR c`, not `NOT (a AND (b OR c))`. Use parentheses to make
intent explicit.

### Assignment Operator

In IB pseudocode, the assignment operator is the left arrow `←`. It evaluates the expression on the
right and stores the result in the variable on the left. Assignment is not equality:
`count ← count + 1` means "take the current value of `count`, add 1, and store the result back in
`count`."

### Bitwise Operators

| Operator | Description                           | Example (binary) | Result |
| -------- | ------------------------------------- | ---------------- | ------ |
| AND      | Bitwise AND                           | `1100 AND 1010`  | 1000   |
| OR       | Bitwise OR                            | `1100 OR 1010`   | 1110   |
| XOR      | Bitwise exclusive OR                  | `1100 XOR 1010`  | 0110   |
| NOT      | Bitwise complement (one's complement) | `NOT 1100`       | 0011   |
| `<<`     | Left shift                            | `1100 << 1`      | 1000   |
| `>>`     | Right shift                           | `1100 >> 1`      | 0110   |

Bitwise operators operate on the binary representation of integers. Each bit position is treated
independently. Bitwise AND is used for masking (extracting specific bits), bitwise OR is used for
setting bits, and bitwise XOR is used for toggling bits.

## Control Structures

### Sequence

Sequence is the default control structure: statements execute one after another in the order they
appear. Every program is ultimately a sequence of operations, possibly interspersed with selections
and iterations.

### Selection

Selection allows the program to choose between different paths of execution based on a condition.

**IF...THEN...ELSE:**

```
IF grade >= 50
  THEN
    OUTPUT "Pass"
    passed ← passed + 1
  ELSE
    OUTPUT "Fail"
    failed ← failed + 1
END IF
```

**Nested IF:**

```
IF score >= 90
  THEN OUTPUT "Grade: A"
  ELSE IF score >= 80
    THEN OUTPUT "Grade: B"
    ELSE IF score >= 70
      THEN OUTPUT "Grade: C"
      ELSE IF score >= 60
        THEN OUTPUT "Grade: D"
        ELSE OUTPUT "Grade: F"
      END IF
    END IF
  END IF
END IF
```

**CASE (switch):** The CASE structure is cleaner when there are multiple discrete values to compare
against:

```
CASE OF month
  1 : OUTPUT "January"
  2 : OUTPUT "February"
  3 : OUTPUT "March"
  ...
  12: OUTPUT "December"
  OTHERWISE OUTPUT "Invalid month"
ENDCASE
```

CASE is appropriate when the selection is based on a single variable being tested against specific
values. Nested IF is appropriate when conditions involve different variables or ranges.

### Iteration

**FOR loop (counted loop):** Executes a fixed number of times.

```
FOR i ← 1 TO 10
  OUTPUT i
END FOR
```

The loop variable `i` is automatically initialized to 1, incremented by 1 after each iteration, and
the loop terminates when `i` exceeds 10. IB pseudocode also supports stepping:

```
FOR i ← 10 DOWNTO 1
  OUTPUT i
END FOR
```

**WHILE loop (pre-test conditional loop):** Tests the condition before each iteration. The loop body
may execute zero times.

```
WHILE count < target
  count ← count + 1
END WHILE
```

Use WHILE when the number of iterations is not known in advance and the loop may not execute at all.

**REPEAT...UNTIL loop (post-test conditional loop):** Tests the condition after each iteration. The
loop body always executes at least once.

```
REPEAT
  INPUT password
UNTIL password = correctPassword
```

Use REPEAT...UNTIL when the loop body must execute at least once (e.g., prompting for input that
must be validated).

### Comparison of Loop Constructs

| Feature          | FOR              | WHILE         | REPEAT...UNTIL   |
| ---------------- | ---------------- | ------------- | ---------------- |
| Test position    | Pre-test         | Pre-test      | Post-test        |
| Minimum runs     | 0                | 0             | 1                |
| Known iterations | Yes              | No            | No               |
| Use case         | Counting         | Unknown count | Input validation |
| Risk             | Off-by-one error | Infinite loop | Always runs once |

### Nested Loops

A loop inside another loop. The inner loop completes all its iterations for each single iteration of
the outer loop.

**Worked example:** Print a multiplication table for 1 to 5.

```
FOR i ← 1 TO 5
  FOR j ← 1 TO 5
    OUTPUT i * j, " "
  END FOR
  OUTPUT newLine
END FOR
```

The inner loop executes 5 times for each of the 5 iterations of the outer loop, giving a total of 25
iterations. For nested loops with outer loop size $m$ and inner loop size $n$, the total iterations
are $m \times n$.

### Common Loop Patterns

**Accumulator pattern:** Maintain a running total.

```
total ← 0
FOR i ← 1 TO n
  total ← total + arr[i]
END FOR
```

**Counter pattern:** Count occurrences of a condition.

```
count ← 0
FOR i ← 0 TO LENGTH(arr) - 1
  IF arr[i] > threshold
    THEN count ← count + 1
  END IF
END FOR
```

**Sentinel pattern:** Loop until a special value is encountered.

```
REPEAT
  INPUT value
  IF value <> -1
    THEN total ← total + value
  END IF
UNTIL value = -1
```

**Flag pattern:** Use a boolean to signal loop termination.

```
found ← FALSE
i ← 0
WHILE i < LENGTH(arr) AND found = FALSE
  IF arr[i] = target
    THEN found ← TRUE
  END IF
  i ← i + 1
END WHILE
```

## Procedures and Functions

### Procedures

A procedure is a named block of code that performs a specific task. It does not return a value. It
is called for its side effects (e.g., printing output, modifying global state, updating data
structures).

```
PROCEDURE printStars(n)
  FOR i ← 1 TO n
    OUTPUT "*"
  END FOR
END PROCEDURE
```

### Functions

A function is a named block of code that performs a computation and returns a value. Functions
should not have side effects -- they should be pure: the same inputs always produce the same output.

```
FUNCTION factorial(n) RETURNS INTEGER
  IF n <= 1
    THEN RETURN 1
  END IF
  RETURN n * factorial(n - 1)
END FUNCTION
```

### Parameters and Return Values

**Parameters** are variables listed in the procedure or function definition that receive values from
the caller. **Arguments** are the actual values passed when the procedure or function is called.

```
FUNCTION rectangleArea(length, width) RETURNS REAL
  RETURN length * width
END FUNCTION

area ← rectangleArea(5.0, 3.0)  // 5.0 and 3.0 are arguments
```

**Return values:** A function uses the `RETURN` statement to send a result back to the caller.
Execution of the function terminates immediately when `RETURN` is encountered. A procedure does not
have a return value.

### Side Effects

A side effect occurs when a function or procedure modifies state outside its local scope. Side
effects include modifying global variables, performing I/O, and mutating arguments passed by
reference. Pure functions have no side effects: they depend only on their inputs and produce only a
return value.

Side effects make code harder to reason about, test, and debug because the behavior of a function
depends on the state of the entire program, not just its inputs.

## Parameter Passing

### By Value (Pass by Value)

A copy of the argument's value is passed to the parameter. Modifications to the parameter inside the
function do not affect the original argument.

```
PROCEDURE increment(x)
  x ← x + 1
  OUTPUT x
END PROCEDURE

num ← 10
increment(num)
OUTPUT num  // Outputs 10 (unchanged)
```

The parameter `x` is a local copy. Changing it has no effect on `num`.

### By Reference (Pass by Reference)

The memory address of the argument is passed to the parameter. Modifications to the parameter inside
the function directly affect the original argument.

```
PROCEDURE increment(REF x)
  x ← x + 1
  OUTPUT x
END PROCEDURE

num ← 10
increment(num)
OUTPUT num  // Outputs 11 (changed)
```

The `REF` keyword in IB pseudocode indicates pass by reference. The parameter `x` is an alias for
`num`, so changing `x` changes `num`.

### Comparison

| Aspect            | By Value                           | By Reference                     |
| ----------------- | ---------------------------------- | -------------------------------- |
| What is passed    | Copy of the value                  | Address of the original variable |
| Original affected | No                                 | Yes                              |
| Memory overhead   | Yes (copy created)                 | No (just an address)             |
| Safety            | High (original cannot be modified) | Lower (original can be modified) |
| Use case          | Input-only parameters              | Output parameters, large objects |
| Default in IB     | Default                            | Must specify `REF` keyword       |

## Recursion

Recursion is a problem-solving technique where a function calls itself to solve smaller instances of
the same problem. Every recursive solution has two essential components:

**Base case:** The condition under which the function returns directly without making a recursive
call. Without a base case, the recursion never terminates (infinite recursion), eventually causing a
stack overflow.

**Recursive case:** The condition under which the function calls itself with a modified argument
that moves closer to the base case.

### Worked Example: Factorial

```
FUNCTION factorial(n) RETURNS INTEGER
  IF n <= 1
    THEN RETURN 1         // Base case
  END IF
  RETURN n * factorial(n - 1)  // Recursive case
END FUNCTION
```

**Call stack trace for `factorial(4)`:**

| Call Stack Frame | Action                | Return Value      |
| ---------------- | --------------------- | ----------------- |
| `factorial(4)`   | Calls `factorial(3)`  | $4 \times 6 = 24$ |
| `factorial(3)`   | Calls `factorial(2)`  | $3 \times 2 = 6$  |
| `factorial(2)`   | Calls `factorial(1)`  | $2 \times 1 = 2$  |
| `factorial(1)`   | Returns 1 (base case) | 1                 |

### Worked Example: Fibonacci

```
FUNCTION fibonacci(n) RETURNS INTEGER
  IF n <= 1
    THEN RETURN n
  END IF
  RETURN fibonacci(n - 1) + fibonacci(n - 2)
END FUNCTION
```

This naive recursive Fibonacci has exponential time complexity $O(2^n)$ because each call spawns two
sub-calls. The call tree for `fibonacci(5)` has 15 calls total. For `fibonacci(40)`, there are over
300 million calls. This demonstrates why recursion must be used carefully -- memoization or an
iterative approach is required for practical Fibonacci computation.

### Worked Example: Sum of Array

```
FUNCTION arraySum(arr, index) RETURNS INTEGER
  IF index >= LENGTH(arr)
    THEN RETURN 0
  END IF
  RETURN arr[index] + arraySum(arr, index + 1)
END FUNCTION
```

This is tail-recursive (the recursive call is the last operation). Some compilers optimize tail
recursion into iteration to avoid stack growth.

### When to Use Recursion vs Iteration

| Criterion   | Recursion                                            | Iteration                   |
| ----------- | ---------------------------------------------------- | --------------------------- |
| Readability | Clearer for tree/graph traversal, divide and conquer | Clearer for simple loops    |
| Memory      | Uses call stack ($O(n)$ stack frames)                | $O(1)$ auxiliary space      |
| Performance | Function call overhead                               | Generally faster            |
| Risk        | Stack overflow for deep recursion                    | No stack overflow risk      |
| Natural fit | Tree traversal, fractals, backtracking               | Linear processing, counting |

## Programming Paradigms

### Procedural Programming

Programs are structured as a sequence of instructions that operate on data. Data and functions are
separate. The focus is on "what to do" step by step. Variables are shared globally or passed between
procedures.

**Characteristics:** Top-down design, stepwise refinement, procedures and functions, global and
local scope, sequential execution.

**Languages:** C, Pascal, Fortran, BASIC.

**Strengths:** Simple to understand for small programs, efficient execution, close to hardware.

**Weaknesses:** Difficult to maintain for large programs, data is not protected (global variables
can be modified anywhere), limited code reuse.

### Object-Oriented Programming (OOP)

Programs are organized around objects that combine data (attributes) and behavior (methods). Objects
are instances of classes, which define the structure and behavior.

**Characteristics:** Encapsulation, inheritance, polymorphism, abstraction, classes and objects,
message passing.

**Languages:** Java, Python, C++, C#.

**Strengths:** Data hiding and protection, code reuse through inheritance, natural modeling of
real-world entities, easier maintenance of large systems.

**Weaknesses:** Steeper learning curve, runtime overhead from objects and method dispatch, can be
overkill for simple programs.

### Functional Programming

Programs are structured as a composition of pure functions. Data is immutable -- once created, it
cannot be changed. Functions are first-class citizens (they can be passed as arguments, returned as
values, and stored in data structures).

**Characteristics:** Pure functions, immutability, higher-order functions, recursion instead of
loops, function composition.

**Languages:** Haskell, Lisp, Erlang, F#.

**Strengths:** No side effects (easier to reason about, test, and debug), natural support for
parallelism (no shared mutable state), mathematical elegance.

**Weaknesses:** Can be less intuitive for stateful problems, immutability can lead to performance
overhead (creating new copies of data structures), steep learning curve for imperative programmers.

### Paradigm Comparison

| Aspect       | Procedural          | OOP                         | Functional             |
| ------------ | ------------------- | --------------------------- | ---------------------- |
| Primary unit | Procedure/function  | Object/class                | Function               |
| Data         | Separate from logic | Encapsulated in objects     | Immutable              |
| State        | Global/local vars   | Object state                | No mutable state       |
| Reuse        | Libraries           | Inheritance, composition    | Higher-order functions |
| Side effects | Common              | Controlled by encapsulation | Avoided                |
| Parallelism  | Manual              | Manual                      | Natural                |

## Pseudocode and Flowchart Conventions

### IB Pseudocode Standard

The IB defines a specific pseudocode standard. Key elements:

**Variable assignment:** `variable ← expression`

**Input/output:** `INPUT variable`, `OUTPUT expression`

**Selection:** `IF ... THEN ... ELSE IF ... ELSE ... END IF`

**Case selection:** `CASE OF ... ENDCASE`

**Counted loop:** `FOR variable ← start TO end ... END FOR`

**Pre-test loop:** `WHILE condition ... END WHILE`

**Post-test loop:** `REPEAT ... UNTIL condition`

**Procedures:** `PROCEDURE name(params) ... END PROCEDURE`

**Functions:** `FUNCTION name(params) RETURNS type ... END FUNCTION`

**Arrays:** Zero-indexed, `arr[i]`, `matrix[i, j]`

**Comments:** Use `//` for single-line comments.

### Nassi-Shneiderman Diagrams

Nassi-Shneiderman diagrams (also called structorgrams) are a structured alternative to traditional
flowcharts. They eliminate the need for flow lines (arrows) by using nested rectangular blocks. This
enforces structured programming -- there is no way to represent a GOTO or unstructured branching.

The diagram uses three fundamental structures:

1. **Process block:** A simple rectangle containing a sequence of statements.
2. **Selection block:** A rectangle divided into sections. For IF/ELSE, the block is split
   vertically into two parts (true and false branches). For CASE, the block is divided into multiple
   columns.
3. **Iteration block:** A rectangle with a condition at the top and the loop body below. For WHILE
   loops, the condition is tested first. For REPEAT...UNTIL loops, the body appears first and the
   condition appears at the bottom.

Nassi-Shneiderman diagrams are particularly useful for illustrating structured algorithms because
they make the nesting of control structures visually explicit. They cannot represent unstructured
jumps, which is both a strength (enforcing good practice) and a limitation (cannot represent certain
low-level algorithms).

## Debugging and Testing

### Error Types

**Syntax errors:** Violations of the language's grammar rules. Detected at compile time (or parse
time for interpreted languages). The program will not run until all syntax errors are fixed.

Examples: missing semicolons, mismatched parentheses, misspelled keywords, undeclared variables.

**Logic errors:** The program runs without crashing but produces incorrect results. The code does
something different from what the programmer intended. Logic errors are the most difficult to find
because the program appears to work.

Examples: off-by-one errors in loop bounds, incorrect comparison operators, wrong formula, using
assignment (`=`) instead of comparison (`==`) in a condition.

**Runtime errors:** Errors that occur during program execution. The program compiles successfully
but crashes or produces unexpected behavior when run.

Examples: division by zero, array index out of bounds, stack overflow from infinite recursion, null
pointer dereference, insufficient memory.

### Debugging Strategies

**Trace tables:** Systematically record the value of each variable at each step of execution. This
is the primary debugging technique in IB examinations.

```
FUNCTION mystery(n) RETURNS INTEGER
  result ← 0
  i ← 1
  WHILE i <= n
    result ← result + i * i
    i ← i + 1
  END WHILE
  RETURN result
END FUNCTION
```

Trace with `n = 3`:

| Step | i   | n   | result | i `<=` n | result + i \* i |
| ---- | --- | --- | ------ | -------- | --------------- |
| 1    | 1   | 3   | 0      | True     | 0 + 1 = 1       |
| 2    | 2   | 3   | 1      | True     | 1 + 4 = 5       |
| 3    | 3   | 3   | 5      | True     | 5 + 9 = 14      |
| 4    | 4   | 3   | 14     | False    | --              |

The function returns 14, which is $1^2 + 2^2 + 3^2 = 14$. It computes the sum of squares.

**Print statements (dry running):** Insert output statements at key points to observe variable
values during execution.

**Breakpoints:** Pause execution at a specific line and inspect the program state. Available in
IDEs.

**Rubber duck debugging:** Explain the code line by line to an inanimate object (or a colleague).
The act of verbalizing often reveals the error.

### Testing Strategies

**Unit testing:** Testing individual functions or procedures in isolation. Each unit test provides a
specific input and checks whether the output matches the expected result. A comprehensive test suite
covers normal cases, boundary cases, and error cases.

**Integration testing:** Testing the interactions between multiple units (functions, modules,
components) to ensure they work together correctly.

**System testing:** Testing the entire system as a whole to verify that it meets all requirements.

**Black-box testing:** Testing without knowledge of the internal code. Tests are based on the
specification: given these inputs, the expected output is X.

**White-box testing:** Testing with knowledge of the internal code. Tests are designed to exercise
specific paths, branches, and conditions in the code.

### Test Data Categories

| Category  | Description                              | Example (function: `isEven(n)`)   |
| --------- | ---------------------------------------- | --------------------------------- |
| Normal    | Typical inputs within the expected range | `isEven(4)` returns TRUE          |
| Boundary  | Values at the edge of valid ranges       | `isEven(0)` returns TRUE          |
| Erroneous | Invalid inputs that should be rejected   | `isEven(-1)` returns FALSE        |
| Extreme   | Very large or very small values          | `isEven(2147483646)` returns TRUE |

## Exception Handling

Exception handling is a mechanism for managing runtime errors gracefully without crashing the
program. When an exceptional condition occurs (e.g., division by zero, file not found, invalid
input), an exception object is created and "thrown." The program can "catch" the exception and take
corrective action.

### Try-Catch-Finally Pattern

```
TRY
  result ← numerator / denominator
  OUTPUT result
CATCH error
  OUTPUT "Error: Division by zero"
FINALLY
  OUTPUT "Calculation attempted"
END TRY
```

The `TRY` block contains the code that might throw an exception. The `CATCH` block handles the
exception if one occurs. The `FINALLY` block executes regardless of whether an exception occurred --
it is used for cleanup operations like closing files or releasing resources.

### Common Pitfalls by Construct

**Selection:**

- Using `=` (assignment) instead of `==` (comparison) in conditions. In IB pseudocode this is less
  of an issue since `=` is the comparison operator, but in languages like C/Java this is a frequent
  bug.
- Forgetting the `ELSE` branch when all cases should be handled, leading to silent failures.
- Overlapping conditions in nested IF statements, where a later condition can never be reached
  because an earlier one already covers it.

**Iteration:**

- Off-by-one errors: using `<=` instead of `<` (or vice versa) in loop conditions. Always verify
  with boundary values.
- Infinite loops: forgetting to update the loop variable in a WHILE loop, or setting a condition
  that can never become false.
- Modifying the loop variable inside the loop body (in a FOR loop), which can produce unexpected
  behavior depending on the language.
- Fence-post errors: looping one time too many or one time too few. For an array of size $n$, valid
  indices are $0$ to $n - 1$.

**Recursion:**

- Missing base case, causing infinite recursion and stack overflow.
- Base case that is never reached, e.g., `factorial(-1)` calls `factorial(-2)`, which calls
  `factorial(-3)`, and so on indefinitely.
- Excessive recursion depth for problems that could be solved iteratively, leading to performance
  degradation.
- Redundant recursive calls that recompute the same values, leading to exponential time complexity
  (as in the naive Fibonacci implementation).

**Parameters:**

- Passing by value when by reference is needed (the original variable will not be modified).
- Passing by reference when by value is intended (the original variable will be unexpectedly
  modified).
- Modifying a by-value parameter and expecting the change to persist after the function returns.

**Data types:**

- Integer overflow: exceeding the maximum representable value. For a 32-bit signed integer, the
  range is $-2,147,483,648$ to $2,147,483,647$. Adding 1 to the maximum produces $-2,147,483,648$
  (wrap around).
- Floating-point precision: comparing floating-point numbers for exact equality is unreliable due to
  rounding errors. Use a tolerance: `ABS(a - b) < epsilon` where epsilon is a small value like
  $10^{-9}$.
- Type coercion: implicitly converting between types (e.g., integer to float) can cause unexpected
  results. In some languages, `7 / 2` gives 3 (integer division), while `7.0 / 2` gives 3.5.
