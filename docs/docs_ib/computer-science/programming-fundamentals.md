---
title: Programming Fundamentals
tags:
- IB
- CS
slug: programming-fundamentals
description: Comprehensive guide to programming fundamentals for the International
  Baccalaureate.
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

### Worked Example: Choosing Data Types

A school management system needs to store the following data. Choose the most appropriate data type
for each.

| Data Item                           | Appropriate Data Type | Justification                                                |
| ----------------------------------- | --------------------- | ------------------------------------------------------------ |
| Number of students in a class       | INTEGER               | Whole number, no fractional part needed                      |
| Student's average grade (e.g. 85.5) | FLOAT                 | May have a fractional part                                   |
| Student's letter grade (A, B, C)    | CHAR                  | Single character                                             |
| Student's full name                 | STRING                | Multiple characters                                          |
| Whether a student has graduated     | BOOLEAN               | Only two possible values: TRUE or FALSE                      |
| Maximum allowed absences (fixed)    | CONSTANT INTEGER      | Known at design time, never changes                          |
| School name                         | CONSTANT STRING       | Known at design time, never changes                          |
| Pi (3.14159...)                     | CONSTANT FLOAT        | Mathematical constant used throughout the program            |

<details>
<summary>Solution</summary>

The key principle is to choose the most restrictive type that can represent all possible values.
Using INTEGER instead of FLOAT when only whole numbers are needed avoids floating-point precision
issues. Using CHAR instead of STRING for single characters saves memory. Using CONSTANTS for values
that should never change prevents accidental modification and makes the code self-documenting.

A common mistake is using FLOAT for values that are always whole numbers (like student counts).
Another mistake is using STRING when CHAR suffices (like grade letters).

</details>

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

### Worked Example: DIV and MOD to Extract Digits

Extract the hundreds, tens, and units digits of the number `n = 472`.

<details>
<summary>Solution</summary>

```
n ← 472
hundreds ← n DIV 100       // 472 DIV 100 = 4
remainder ← n MOD 100      // 472 MOD 100 = 72
tens ← remainder DIV 10    // 72 DIV 10 = 7
units ← n MOD 10           // 472 MOD 10 = 2
OUTPUT hundreds, tens, units  // Outputs: 4, 7, 2
```

Verification: $4 \times 100 + 7 \times 10 + 2 = 472$. Correct.

This pattern generalizes: to extract digit at position $p$ (0-indexed from the right), compute
`n DIV (10^p) MOD 10`.

</details>

### Relational (Comparison) Operators

| Operator | Description              | Example  | Result |
| -------- | ------------------------ | -------- | ------ |
| `=`      | Equal to                 | `5 = 5`  | TRUE   |
| `<>`     | Not equal to             | `5 <> 3` | TRUE   |
| `<`      | Less than                | `3 < 5`  | TRUE   |
| `>`      | Greater than             | `5 > 3`  | TRUE   |
| `$\le$`  | Less than or equal to    | `5 $\le$` 5 | TRUE   |
| `$\ge$`  | Greater than or equal to | `5 $\ge$` 3 | TRUE   |

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

### Common Pitfalls: Operators

- **Operator precedence confusion:** Without parentheses, `2 + 3 * 4` evaluates to 14, not 20. Always
  use parentheses when in doubt: `(2 + 3) * 4 = 20`.
- **Integer division surprise:** `7 DIV 2` gives 3, not 3.5. If a fractional result is needed, use `/`
  instead of `DIV`.
- **MOD with negative numbers:** The behavior of MOD with negative operands varies between languages.
  In IB pseudocode, focus on non-negative operands to avoid ambiguity.
- **Confusing `=` (comparison) with `←` (assignment):** In IB pseudocode these are distinct, but in
  many programming languages `=` is assignment and `==` is comparison. Mixing them up causes logic
  errors that are hard to spot.
- **Bitwise vs logical operators:** `AND` and `OR` in IB pseudocode are logical operators that work on
  BOOLEAN values. Bitwise AND/OR work on the binary representation of integers. Do not confuse them.

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

### Worked Example: Tracing a Selection Structure

Trace the following pseudocode with `score = 75`:

```
IF score >= 90
  THEN grade ← "A"
  ELSE IF score >= 80
    THEN grade ← "B"
    ELSE IF score >= 70
      THEN grade ← "C"
      ELSE IF score >= 60
        THEN grade ← "D"
        ELSE grade ← "F"
      END IF
    END IF
  END IF
END IF
OUTPUT grade
```

<details>
<summary>Solution</summary>

| Step | Condition Tested       | Result | Action              |
| ---- | ---------------------- | ------ | ------------------- |
| 1    | `75 $\ge$` 90`             | FALSE  | Skip to ELSE        |
| 2    | `75 $\ge$` 80`             | FALSE  | Skip to ELSE        |
| 3    | `75 $\ge$` 70`             | TRUE   | `grade ← "C"`       |
| 4    | (inner ELSE skipped)   | --     | --                  |
| 5    | Output `grade`         | --     | Outputs "C"         |

Output: **C**

Key insight: Nested IF-ELSE IF evaluates conditions top-down. Once a TRUE condition is found, the
corresponding branch executes and all remaining branches are skipped. The order of conditions matters:
if they were reversed (checking `$\ge$` 60 first), every score of 60 or above would get "D".

</details>

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

### Common Pitfalls: Loops

- **Off-by-one errors:** The most common loop bug. For an array of size $n$, valid indices are $0$ to
  $n - 1$. A FOR loop from $0$ TO $n$ would access index $n$, which is out of bounds. Always trace
  with boundary values.
- **Infinite WHILE loops:** If the loop variable is never updated inside the loop body, the condition
  never changes and the loop runs forever. Always ensure the loop variable moves toward the termination
  condition.
- **Modifying the FOR loop variable:** Changing the loop variable inside a FOR loop body (e.g.,
  `i ← i + 2` inside `FOR i ← 1 TO 10`) produces unpredictable results depending on the language.
  Use a WHILE loop if you need non-standard stepping.
- **REPEAT...UNTIL runs at least once:** Do not use REPEAT...UNTIL when the loop body might not need to
  execute at all. If a file could be empty, a REPEAT...UNTIL that reads from it would still execute
  once with no data.

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

### Worked Example: Designing a Function

Write an IB pseudocode function `celsiusToFahrenheit(c)` that converts a temperature from Celsius to
Fahrenheit. Use it to convert 100 degrees and display the result.

<details>
<summary>Solution</summary>

```
FUNCTION celsiusToFahrenheit(c) RETURNS REAL
  RETURN c * 9 / 5 + 32
END FUNCTION

result ← celsiusToFahrenheit(100)
OUTPUT result  // Outputs: 212.0
```

The formula $F = C \times \frac{9}{5} + 32$ converts Celsius to Fahrenheit. This function is pure: it
has no side effects, and the same input always produces the same output.

To convert in the opposite direction, use $C = (F - 32) \times \frac{5}{9}$.

</details>

### Common Pitfalls: Procedures and Functions

- **Calling a procedure like a function:** A procedure does not return a value. Writing
  `result ← printStars(5)` is an error because `printStars` is a procedure, not a function.
- **Missing RETURN statement:** If a function has a code path that does not execute a RETURN statement,
  the behavior is undefined. Always ensure every path through a function ends with a RETURN.
- **Side effects in functions:** A function that modifies a global variable or prints output is not
  pure. This makes the function harder to test and reason about. Keep functions pure; use procedures
  for side effects.
- **Parameter count mismatch:** Calling a function with too many or too few arguments causes an error.
  Always check the function definition to verify the expected number and types of parameters.

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

### Worked Example: Tracing By-Value vs By-Reference

Trace the following pseudocode and predict all outputs:

```
PROCEDURE swapByValue(a, b)
  temp ← a
  a ← b
  b ← temp
  OUTPUT a, b
END PROCEDURE

PROCEDURE swapByRef(REF a, REF b)
  temp ← a
  a ← b
  b ← temp
  OUTPUT a, b
END PROCEDURE

x ← 10
y ← 20
swapByValue(x, y)
OUTPUT x, y

swapByRef(x, y)
OUTPUT x, y
```

<details>
<summary>Solution</summary>

**`swapByValue(x, y)` call:**

| Variable | Before Call | Inside Procedure | After Call |
| -------- | ----------- | ---------------- | ---------- |
| `x`      | 10          | 10 (unchanged)   | 10         |
| `y`      | 20          | 20 (unchanged)   | 20         |
| `a`      | --          | 20               | --         |
| `b`      | --          | 10               | --         |
| `temp`   | --          | 10               | --         |

Inside `swapByValue`: outputs 20, 10. After call: `x = 10`, `y = 20` (unchanged).

**`swapByRef(x, y)` call:**

| Variable | Before Call | Inside Procedure | After Call |
| -------- | ----------- | ---------------- | ---------- |
| `x`      | 10          | 20               | 20         |
| `y`      | 20          | 10               | 10         |
| `a`      | --          | 20 (alias for x) | --         |
| `b`      | --          | 10 (alias for y) | --         |

Inside `swapByRef`: outputs 20, 10. After call: `x = 20`, `y = 10` (swapped!).

**Complete output sequence:** 20, 10, 10, 20, 20, 10, 20, 10

The by-value version appears to work inside the procedure but has no effect on the original
variables. Only by-reference can modify the caller's variables.

</details>

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

### Worked Example: Tracing a Recursive Function

Trace `mystery(4)` where:

```
FUNCTION mystery(n) RETURNS INTEGER
  IF n = 1
    THEN RETURN 1
  END IF
  RETURN n + mystery(n - 1)
END FUNCTION
```

<details>
<summary>Solution</summary>

| Call Stack Frame | Action                | Return Value |
| ---------------- | --------------------- | ------------ |
| `mystery(4)`     | Calls `mystery(3)`    | $4 + 6 = 10$ |
| `mystery(3)`     | Calls `mystery(2)`    | $3 + 3 = 6$  |
| `mystery(2)`     | Calls `mystery(1)`    | $2 + 1 = 3$  |
| `mystery(1)`     | Returns 1 (base case) | 1            |

Result: **10**

This function computes the sum $1 + 2 + 3 + 4 = 10$. It is equivalent to the formula
$n(n+1)/2 = 4 \times 5 / 2 = 10$.

The recursive case reduces the problem: `mystery(4)` needs `mystery(3)`, which needs `mystery(2)`,
which needs `mystery(1)`. The base case stops the recursion. Each return value propagates back up
the call stack.

</details>

### Common Pitfalls: Recursion

- **No base case or unreachable base case:** Without a valid base case, recursion is infinite. For
  `factorial(n)` with `n = -1`, the base case `n \lt{}= 1` is never reached because the recursive call
  uses `n - 1`, making the argument more negative each time.
- **Stack overflow:** Each recursive call adds a frame to the call stack. For deep recursion (e.g.,
  naive `fibonacci(1000)`), the stack exceeds available memory. Prefer iteration for problems requiring
  many levels.
- **Redundant computation:** Naive recursive Fibonacci makes $O(2^n)$ calls because it recomputes the
  same values repeatedly. Use memoization (caching results) or convert to iteration for efficiency.

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

### Worked Example: Identifying Programming Paradigms

Identify the programming paradigm demonstrated by each code snippet.

<details>
<summary>Solution</summary>

**Snippet 1:**

```
total ← 0
FOR i ← 0 TO LENGTH(scores) - 1
  total ← total + scores[i]
END FOR
average ← total / LENGTH(scores)
OUTPUT average
```

**Paradigm: Procedural.** The program is a sequence of instructions operating on data. Variables are
separate from the operations. There are no objects, no encapsulation, and no pure function
composition.

**Snippet 2:**

```
CLASS Student
  PRIVATE name : STRING
  PRIVATE grade : INTEGER

  PUBLIC PROCEDURE setName(n)
    name ← n
  END PROCEDURE

  PUBLIC FUNCTION getGrade() RETURNS INTEGER
    RETURN grade
  END FUNCTION
END CLASS

s ← NEW Student()
s.setName("Alice")
OUTPUT s.getGrade()
```

**Paradigm: Object-Oriented.** Data (name, grade) and behavior (setName, getGrade) are encapsulated
in a class. Access is controlled with PRIVATE/PUBLIC modifiers. An object is created with `NEW`.

**Snippet 3:**

```
FUNCTION applyDiscount(price, discount) RETURNS REAL
  RETURN price - price * discount
END FUNCTION

FUNCTION addTax(amount, rate) RETURNS REAL
  RETURN amount + amount * rate
END FUNCTION

finalPrice ← addTax(applyDiscount(100.0, 0.1), 0.05)
```

**Paradigm: Functional.** Functions are pure (no side effects, no shared state). The result is built
by composing function calls. Data is never mutated -- new values are computed and returned.

</details>

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

### Worked Example: Converting a Problem Description to IB Pseudocode

**Problem:** Read 10 exam scores from the user, calculate the average, and output "Above average" if
the average is greater than 60, otherwise output "At or below average."

<details>
<summary>Solution</summary>

```
CONSTANTS
  NUM_SCORES ← 10
  PASS_THRESHOLD ← 60

total ← 0
FOR i ← 1 TO NUM_SCORES
  INPUT score
  total ← total + score
END FOR

average ← total / NUM_SCORES
IF average > PASS_THRESHOLD
  THEN OUTPUT "Above average: ", average
  ELSE OUTPUT "At or below average: ", average
END IF
```

**Key decisions:**

- Used a CONSTANT for `NUM_SCORES` and `PASS_THRESHOLD` to make the code self-documenting and easy to
  modify.
- Used a FOR loop because the number of iterations is known (10).
- Used the accumulator pattern to maintain a running total.
- Used IF/THEN/ELSE for the final selection based on the computed average.

</details>

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

| Step | i   | n   | result | i `$\le$` n | result + i \* i |
| ---- | --- | --- | ------ | -------- | --------------- |
| 1    | 1   | 3   | 0      | True     | 0 + 1 = 1       |
| 2    | 2   | 3   | 1      | True     | 1 + 4 = 5       |
| 3    | 3   | 3   | 5      | True     | 5 + 9 = 14      |
| 4    | 4   | 3   | 14     | False    | --              |

The function returns 14, which is $1^2 + 2^2 + 3^2 = 14$. It computes the sum of squares.

### Worked Example: Selecting Test Data

A function `getLetterGrade(score)` accepts an integer score from 0 to 100 and returns a letter grade
(A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59). Identify appropriate test data for each
category.

<details>
<summary>Solution</summary>

| Category  | Test Input | Expected Output | Rationale                                          |
| --------- | ---------- | --------------- | -------------------------------------------------- |
| Normal    | 85         | B               | Typical value within a grade range                 |
| Normal    | 42         | F               | Typical value in another range                     |
| Boundary  | 90         | A               | Lowest score for grade A                           |
| Boundary  | 89         | B               | Highest score for grade B (boundary between A and B)|
| Boundary  | 60         | D               | Lowest score for grade D                           |
| Boundary  | 0          | F               | Lowest possible score                              |
| Boundary  | 100        | A               | Highest possible score                             |
| Erroneous | -5         | Error message   | Below valid range                                  |
| Erroneous | 105        | Error message   | Above valid range                                  |
| Erroneous | "abc"      | Error message   | Wrong data type (string instead of integer)        |

Boundary values are the most likely to reveal off-by-one errors. Always test the exact boundary and
one value on each side.

</details>

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

### Worked Example: Constructing an Advanced Trace Table

Trace the following function with `arr = [5, 3, 8, 1, 8, 3]` and `target = 8`:

```
FUNCTION countAndFind(arr, target) RETURNS INTEGER
  count ← 0
  firstIndex ← -1
  i ← 0
  WHILE i < LENGTH(arr)
    IF arr[i] = target
      THEN
        count ← count + 1
        IF firstIndex = -1
          THEN firstIndex ← i
        END IF
    END IF
    i ← i + 1
  END WHILE
  OUTPUT "First at: ", firstIndex, " Count: ", count
  RETURN count
END FUNCTION
```

<details>
<summary>Solution</summary>

| Step | `i` | `arr[i]` | `arr[i] = target` | `count` | `firstIndex` | `firstIndex = -1` |
| ---- | --- | -------- | ----------------- | ------- | ------------ | ----------------- |
| Init | 0   | --       | --                | 0       | -1           | --                |
| 1    | 0   | 5        | FALSE             | 0       | -1           | --                |
| 2    | 1   | 3        | FALSE             | 0       | -1           | --                |
| 3    | 2   | 8        | TRUE              | 1       | 2            | TRUE (was -1)     |
| 4    | 3   | 1        | FALSE             | 1       | 2            | --                |
| 5    | 4   | 8        | TRUE              | 2       | 2            | FALSE (not -1)    |
| 6    | 5   | 3        | FALSE             | 2       | 2            | --                |
| 7    | 6   | --       | --                | 2       | 2            | -- (loop ends)    |

Output: **First at: 2, Count: 2**

The function returns 2. It finds the first occurrence of 8 at index 2 and counts 2 total occurrences.

</details>

### Common Pitfalls: Debugging and Testing

- **Incomplete trace tables:** Every variable that changes must have a column. Forgetting to include a
  variable (like the loop counter `i`) means the trace is incomplete and may miss errors.
- **Testing only normal cases:** A test suite that only tests valid inputs within the expected range
  will miss boundary and error cases. Always include boundary values (0, 1, maximum) and invalid
  inputs.
- **Confusing syntax errors with logic errors:** A program that compiles successfully can still
  produce wrong results. Fixing compilation errors does not guarantee correctness. Always verify
  output against expected results.
- **Not testing edge cases:** For a function that processes an array, test with an empty array, a
  single-element array, and an array where all elements are the same. These edge cases often reveal
  bugs.

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

### Worked Example: Exception Handling in Practice

Write IB pseudocode that prompts the user for two integers and outputs their quotient. Handle the case
where the second number is zero.

<details>
<summary>Solution</summary>

```
LOOP
  TRY
    INPUT numerator
    INPUT denominator
    IF denominator = 0
      THEN RAISE "DivisionError"
    END IF
    result ← numerator / denominator
    OUTPUT numerator, " / ", denominator, " = ", result
    EXIT  // Success: leave the loop
  CATCH error
    IF error = "DivisionError"
      THEN OUTPUT "Error: Cannot divide by zero. Try again."
      ELSE OUTPUT "Unexpected error: ", error
    END IF
  END TRY
END LOOP
```

**Key points:**

- The `RAISE` statement explicitly triggers an exception when an invalid condition is detected
  (denominator is zero).
- The `TRY` block contains the risky operation. The `CATCH` block handles the specific error type.
- The outer LOOP ensures the user is re-prompted until they provide valid input. The `EXIT` statement
  is only reached on success.
- Multiple error types can be distinguished within the CATCH block using conditional logic.

</details>

### Common Pitfalls by Construct

**Selection:**

- Using `=` (assignment) instead of `==` (comparison) in conditions. In IB pseudocode this is less
  of an issue since `=` is the comparison operator, but in languages like C/Java this is a frequent
  bug.
- Forgetting the `ELSE` branch when all cases should be handled, leading to silent failures.
- Overlapping conditions in nested IF statements, where a later condition can never be reached
  because an earlier one already covers it.

**Iteration:**

- Off-by-one errors: using `$\le$` instead of `<` (or vice versa) in loop conditions. Always verify
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

## Problem Set: 15 IB-Style Questions

**Q1.** State the most appropriate primitive data type for each of the following:
(a) The number of students in a school
(b) A student's phone number (e.g., "555-1234")
(c) Whether a user is an administrator
(d) A single menu option character (A, B, C, or Q)
(e) The current temperature to one decimal place

<details>
<summary>Solution</summary>

(a) **INTEGER** -- student count is a whole number.
(b) **STRING** -- phone numbers contain hyphens and may start with 0; they are not used for
    arithmetic, so STRING is more appropriate than INTEGER.
(c) **BOOLEAN** -- only two states: administrator or not.
(d) **CHAR** -- exactly one character from a known set.
(e) **FLOAT** -- has a fractional part (one decimal place).

**Revision:** Variables and Data Types

</details>

**Q2.** Evaluate the following IB pseudocode expression step by step, showing the result after each
operator:

```
result ← (17 DIV 4) + (17 MOD 4) * 2 ^ 3 - 1
```

<details>
<summary>Solution</summary>

Following operator precedence (parentheses first, then exponentiation, then multiplication, then
addition/subtraction):

| Step | Expression                         | Result |
| ---- | ---------------------------------- | ------ |
| 1    | `17 DIV 4`                         | 4      |
| 2    | `17 MOD 4`                         | 1      |
| 3    | `2 ^ 3`                            | 8      |
| 4    | `1 * 8` (MOD result times power)   | 8      |
| 5    | `4 + 8` (DIV result plus product)  | 12     |
| 6    | `12 - 1`                           | 11     |

`result = 11`

**Revision:** Operators, Operator Precedence

</details>

**Q3.** Given `a ← TRUE`, `b ← FALSE`, `c ← TRUE`, evaluate each expression:
(a) `NOT a AND b`
(b) `a OR b AND c`
(c) `NOT (a OR b) XOR c`
(d) `(a AND b) OR (NOT b AND c)`

<details>
<summary>Solution</summary>

(a) `NOT a AND b` = `NOT TRUE AND FALSE` = `FALSE AND FALSE` = **FALSE**

(b) `a OR b AND c` = `TRUE OR FALSE AND TRUE` = `TRUE OR FALSE` = **TRUE** (AND has higher
    precedence than OR)

(c) `NOT (a OR b) XOR c` = `NOT (TRUE OR FALSE) XOR TRUE` = `NOT TRUE XOR TRUE` = `FALSE XOR TRUE`
    = **TRUE**

(d) `(a AND b) OR (NOT b AND c)` = `(TRUE AND FALSE) OR (TRUE AND TRUE)` = `FALSE OR TRUE`
    = **TRUE**

**Revision:** Logical Operators, Operator Precedence

</details>

**Q4.** Explain the difference between `"apple" < "banana"` and `"Zebra" < "apple"` in terms of string
comparison. What will each expression evaluate to?

<details>
<summary>Solution</summary>

String comparison is lexicographic, based on character codes (e.g., ASCII/Unicode values).

- `"apple" < "banana"` evaluates to **TRUE** because 'a' (code 97) \lt{} 'b' (code 98). The first
  character differs, so the comparison is decided immediately.
- `"Zebra" < "apple"` evaluates to **TRUE** because 'Z' (code 90) \lt{} 'a' (code 97). Uppercase
  letters have lower character codes than lowercase letters.

This is a common source of bugs: case-sensitive comparison means "Zebra" sorts before "apple"
alphabetically. To perform case-insensitive comparison, convert both strings to the same case first.

**Revision:** Relational Operators, Data Types

</details>

**Q5.** Trace the following pseudocode with `score ← 55` and state the output:

```
IF score >= 90
  THEN grade ← "A"
  ELSE IF score >= 80
    THEN grade ← "B"
    ELSE IF score >= 70
      THEN grade ← "C"
      ELSE IF score >= 60
        THEN grade ← "D"
        ELSE grade ← "F"
      END IF
    END IF
  END IF
END IF
OUTPUT grade
```

<details>
<summary>Solution</summary>

| Step | Condition    | Result | Action          |
| ---- | ------------ | ------ | --------------- |
| 1    | `55 $\ge$` 90`   | FALSE  | Check next      |
| 2    | `55 $\ge$` 80`   | FALSE  | Check next      |
| 3    | `55 $\ge$` 70`   | FALSE  | Check next      |
| 4    | `55 $\ge$` 60`   | FALSE  | Check next      |
| 5    | (else branch)| --     | `grade ← "F"`   |
| 6    | --           | --     | OUTPUT "F"      |

Output: **F**

**Revision:** Selection, Nested IF

</details>

**Q6.** Rewrite the following nested IF statement as a CASE statement:

```
IF day = 1
  THEN OUTPUT "Monday"
  ELSE IF day = 2
    THEN OUTPUT "Tuesday"
    ELSE IF day = 3
      THEN OUTPUT "Wednesday"
      ELSE IF day = 4
        THEN OUTPUT "Thursday"
        ELSE IF day = 5
          THEN OUTPUT "Friday"
          ELSE IF day = 6 OR day = 7
            THEN OUTPUT "Weekend"
            ELSE OUTPUT "Invalid"
          END IF
        END IF
      END IF
    END IF
  END IF
END IF
```

<details>
<summary>Solution</summary>

```
CASE OF day
  1 : OUTPUT "Monday"
  2 : OUTPUT "Tuesday"
  3 : OUTPUT "Wednesday"
  4 : OUTPUT "Thursday"
  5 : OUTPUT "Friday"
  6 : OUTPUT "Weekend"
  7 : OUTPUT "Weekend"
  OTHERWISE OUTPUT "Invalid"
ENDCASE
```

CASE tests against specific values, so days 6 and 7 each need their own line pointing to "Weekend".
The OTHERWISE clause handles any value outside 1--7. CASE is more readable here because we are comparing
a single variable against discrete values, but CASE cannot directly express `day = 6 OR day = 7` as a
single condition.

**Revision:** Selection, CASE Statement

</details>

**Q7.** What is the output of the following pseudocode?

```
FOR i ← 1 TO 4
  output ← ""
  FOR j ← 1 TO i
    output ← output + "*"
  END FOR
  OUTPUT output
END FOR
```

<details>
<summary>Solution</summary>

| Outer `i` | Inner `j` range | `output` built | OUTPUT |
| --------- | --------------- | -------------- | ------ |
| 1         | 1 to 1          | `*`            | `*`    |
| 2         | 1 to 2          | `**`           | `**`   |
| 3         | 1 to 3          | `***`          | `***`  |
| 4         | 1 to 4          | `****`         | `****` |

Output:
```
*
**
***
****
```

The inner loop runs `i` times for each value of the outer loop, producing a triangle pattern. Total
inner loop iterations: $1 + 2 + 3 + 4 = 10$.

**Revision:** Iteration, Nested Loops

</details>

**Q8.** Write IB pseudocode that reads positive integers from the user until the user enters 0. The
program should then output the sum, count, and average of all numbers entered (excluding the 0).

<details>
<summary>Solution</summary>

```
sum ← 0
count ← 0
REPEAT
  INPUT value
  IF value > 0
    THEN
      sum ← sum + value
      count ← count + 1
    END IF
UNTIL value = 0

IF count > 0
  THEN
    average ← sum / count
    OUTPUT "Sum: ", sum
    OUTPUT "Count: ", count
    OUTPUT "Average: ", average
  ELSE
    OUTPUT "No positive numbers were entered."
END IF
```

**Key points:**

- REPEAT...UNTIL ensures the prompt appears at least once.
- The `value > 0` check excludes both 0 (sentinel) and negative numbers.
- The final IF/ELSE handles the edge case where the user enters 0 immediately (avoiding division by
  zero).

**Revision:** Iteration, REPEAT...UNTIL, Selection

</details>

**Q9.** Explain the key difference between a WHILE loop and a REPEAT...UNTIL loop. For each scenario,
state which loop is more appropriate and explain why:
(a) Validating user input (must prompt at least once)
(b) Processing items in a queue that may be empty
(c) Searching for a value in a sorted array using binary search

<details>
<summary>Solution</summary>

**Key difference:** WHILE is a pre-test loop (condition checked before the body; may execute zero
times). REPEAT...UNTIL is a post-test loop (condition checked after the body; always executes at
least once).

(a) **REPEAT...UNTIL** -- The user must see the prompt at least once before they can provide input.
Post-test is correct because the body must run at least once.

(b) **WHILE** -- If the queue is empty, there is nothing to process. The loop should not execute at
all. Pre-test is correct.

(c) **WHILE** -- Binary search may terminate immediately if the search range is empty (e.g., searching
an empty array). Pre-test is correct.

**Revision:** Iteration, WHILE, REPEAT...UNTIL

</details>

**Q10.** How many times does the statement `OUTPUT i, j` execute in total?

```
FOR i ← 0 TO 4
  FOR j ← i TO 4
    OUTPUT i, j
  END FOR
END FOR
```

<details>
<summary>Solution</summary>

| Outer `i` | Inner `j` values | Inner iterations |
| --------- | ---------------- | ---------------- |
| 0         | 0, 1, 2, 3, 4   | 5                |
| 1         | 1, 2, 3, 4       | 4                |
| 2         | 2, 3, 4          | 3                |
| 3         | 3, 4             | 2                |
| 4         | 4                | 1                |

Total: $5 + 4 + 3 + 2 + 1 = 15$ times.

The inner loop's starting value depends on the outer loop variable, so the number of inner iterations
decreases as `i` increases. This is the triangular number $T_5 = \frac{5 \times 6}{2} = 15$.

**Revision:** Nested Loops, FOR Loop

</details>

**Q11.** Write an IB pseudocode function `isPrime(n)` that returns TRUE if `n` is a prime number and
FALSE otherwise.

<details>
<summary>Solution</summary>

```
FUNCTION isPrime(n) RETURNS BOOLEAN
  IF n < 2
    THEN RETURN FALSE
  END IF
  IF n = 2
    THEN RETURN TRUE
  END IF
  IF n MOD 2 = 0
    THEN RETURN FALSE
  END IF
  i ← 3
  WHILE i * i <= n
    IF n MOD i = 0
      THEN RETURN FALSE
    END IF
    i ← i + 2
  END WHILE
  RETURN TRUE
END FUNCTION
```

**Optimizations:**

- Check divisibility by 2 separately, then only test odd divisors (step by 2).
- Only test up to $\sqrt{n}$ (since if $n = a \times b$ and $a \leq b$, then $a \leq \sqrt{n}$). In
  pseudocode, `i * i $\le$` n avoids needing a square root function.
- Time complexity: $O(\sqrt{n})$, which is efficient for the values typically tested in IB exams.

**Revision:** Functions, Iteration, WHILE Loop, Operators (MOD)

</details>

**Q12.** Trace the following pseudocode and state the final values of `a`, `b`, and `c`:

```
PROCEDURE modify(REF x, y, REF z)
  x ← x + y
  y ← y * 2
  z ← x + z
END PROCEDURE

a ← 5
b ← 3
c ← 10
modify(a, b, c)
OUTPUT a, b, c
```

<details>
<summary>Solution</summary>

| Step | Action                     | `a` | `b` | `c` | `x` | `y` | `z` |
| ---- | -------------------------- | --- | --- | --- | --- | --- | --- |
| 1    | Initialize                 | 5   | 3   | 10  | --  | --  | --  |
| 2    | Call `modify(a, b, c)`     | 5   | 3   | 10  | 5   | 3   | 10  |
| 3    | `x ← x + y` (REF to `a`)  | 8   | 3   | 10  | 8   | 3   | 10  |
| 4    | `y ← y * 2` (copy of `b`) | 8   | 3   | 10  | 8   | 6   | 10  |
| 5    | `z ← x + z` (REF to `c`)  | 8   | 3   | 18  | 8   | 6   | 18  |
| 6    | Procedure returns          | 8   | 3   | 18  | --  | --  | --  |

Final values: **a = 8, b = 3, c = 18**

`x` (REF to `a`) and `z` (REF to `c`) are aliases, so changes persist. `y` is a copy of `b`, so
changes to `y` do not affect `b`.

**Revision:** Parameter Passing, By Value, By Reference

</details>

**Q13.** Construct a trace table showing the evaluation of `factorial(5)`. How many stack frames are
created, and what is the final return value?

<details>
<summary>Solution</summary>

```
FUNCTION factorial(n) RETURNS INTEGER
  IF n <= 1
    THEN RETURN 1
  END IF
  RETURN n * factorial(n - 1)
END FUNCTION
```

| Call              | `n` | Base case? | Action                | Return value          |
| ----------------- | --- | ---------- | --------------------- | --------------------- |
| `factorial(5)`    | 5   | No         | Calls `factorial(4)`  | $5 \times 24 = 120$   |
| `factorial(4)`    | 4   | No         | Calls `factorial(3)`  | $4 \times 6 = 24$     |
| `factorial(3)`    | 3   | No         | Calls `factorial(2)`  | $3 \times 2 = 6$      |
| `factorial(2)`    | 2   | No         | Calls `factorial(1)`  | $2 \times 1 = 2$      |
| `factorial(1)`    | 1   | Yes        | Returns 1 (base case) | 1                     |

**Stack frames created:** 5 (one for each call from `factorial(5)` down to `factorial(1)`)

**Final return value:** 120

Returns are resolved bottom-up: `factorial(1)` returns 1, then `factorial(2)` returns
$2 \times 1 = 2$, then `factorial(3)` returns $3 \times 2 = 6$, and so on up to `factorial(5)`
returning $5 \times 24 = 120$.

**Revision:** Recursion, Call Stack, Functions

</details>

**Q14.** The following function is intended to return the sum of all elements in an array. It contains
a logic error. Identify the error, explain why it is wrong, and provide the corrected version.

```
FUNCTION arrayTotal(arr) RETURNS INTEGER
  total ← 0
  FOR i ← 1 TO LENGTH(arr)
    total ← total + arr[i]
  END FOR
  RETURN total
END FUNCTION
```

<details>
<summary>Solution</summary>

**Error:** The FOR loop starts at `i ← 1` and goes to `LENGTH(arr)`. Since IB pseudocode arrays are
zero-indexed, the loop accesses `arr[1]` through `arr[LENGTH(arr)]`. This means:

- `arr[0]` is never included in the sum (off-by-one, first element missed).
- `arr[LENGTH(arr)]` is out of bounds and causes a runtime error.

**Corrected version:**

```
FUNCTION arrayTotal(arr) RETURNS INTEGER
  total ← 0
  FOR i ← 0 TO LENGTH(arr) - 1
    total ← total + arr[i]
  END FOR
  RETURN total
END FUNCTION
```

The corrected loop runs from index 0 to `LENGTH(arr) - 1`, covering every valid index exactly once.

**Error type:** Logic error (also causes a runtime error due to out-of-bounds access).

**Revision:** Iteration, FOR Loop, Arrays, Debugging

</details>

**Q15.** Write IB pseudocode for a program that repeatedly asks the user to enter a student's score
(0--100). The program should:
- Reject scores outside the range 0--100 and ask again.
- Stop when the user enters -1.
- After stopping, output the number of valid scores entered and the average score.

<details>
<summary>Solution</summary>

```
CONSTANTS
  MIN_SCORE ← 0
  MAX_SCORE ← 100
  SENTINEL ← -1

total ← 0
count ← 0
LOOP
  INPUT score
  IF score = SENTINEL
    THEN EXIT
  END IF
  IF score >= MIN_SCORE AND score <= MAX_SCORE
    THEN
      total ← total + score
      count ← count + 1
    ELSE
      OUTPUT "Invalid score. Enter a value between 0 and 100."
    END IF
END LOOP

IF count > 0
  THEN
    average ← total / count
    OUTPUT "Valid scores entered: ", count
    OUTPUT "Average score: ", average
  ELSE
    OUTPUT "No valid scores were entered."
END IF
```

**Key points:**

- A sentinel value (-1) signals the end of input. It is checked first, before validation.
- Constants make the code readable and easy to modify.
- Input validation rejects invalid scores and prompts again without counting them.
- The final IF/ELSE prevents division by zero if no valid scores were entered.

**Revision:** Iteration, Selection, Constants, Operators, Exception Handling

</details>

