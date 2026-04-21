---
title: Testing
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: testing
---

## 1. Introduction to Testing

### Definition

**Software testing** is the process of evaluating a program to determine whether it meets specified
requirements and to identify defects.

### Why Test?

1. **Correctness:** Verify the program produces expected outputs
2. **Reliability:** Ensure consistent behaviour under various conditions
3. **Security:** Identify vulnerabilities
4. **Performance:** Verify the program meets efficiency requirements
5. **Compliance:** Meet regulatory and safety standards

### Verification vs Validation

| Aspect   | Verification                         | Validation                           |
| -------- | ------------------------------------ | ------------------------------------ |
| Question | "Are we building the product right?" | "Are we building the right product?" |
| Focus    | Conformance to specification         | Meets user needs and expectations    |
| Activity | Reviews, inspections, walkthroughs   | Testing with real-world scenarios    |

<hr />

## 2. Levels of Testing

### 2.1 Unit Testing

**Definition:** Testing individual components (functions, methods, classes) in isolation.

```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
    assert add(100, 200) == 300
```

**Characteristics:**

- Written by developers
- Fast to execute
- Isolate dependencies using **mocks** and **stubs**
- High coverage of individual code paths

### 2.2 Integration Testing

**Definition:** Testing interactions between integrated components or modules.

**Approaches:**

| Approach  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Top-down  | Test from the top module down, using stubs for lower modules |
| Bottom-up | Test from the bottom up, using drivers for higher modules    |
| Big Bang  | Integrate all modules at once and test                       |

### 2.3 System Testing

**Definition:** Testing the complete, integrated system against its requirements.

Types:

- **Functional testing:** Does the system do what it should?
- **Non-functional testing:** Performance, usability, security, reliability
- **Regression testing:** Re-run tests after changes to ensure nothing broke

### 2.4 Acceptance Testing

**Definition:** Testing by the customer or end-user to determine if the system meets their
requirements.

| Type                 | Description                                             |
| -------------------- | ------------------------------------------------------- |
| Alpha testing        | Testing by the development team at the developer's site |
| Beta testing         | Testing by selected users at their own sites            |
| User acceptance test | Formal testing to determine if requirements are met     |

:::info Board-specific

- **AQA** requires unit testing, integration testing, system testing, acceptance testing; requires
  understanding of test data (normal, boundary, erroneous, extreme)
- **CIE (9618)** covers testing strategies; requires test plans and test data design
- **OCR (A)** requires unit, integration, system, and acceptance testing; may require traceability
  between requirements and tests
- **Edexcel** covers testing types and test data design :::

<hr />

## 3. Black-Box Testing

### Definition

**Black-box testing** tests the functionality of a system without knowledge of its internal
implementation. Tests are based on requirements and specifications.

### Equivalence Partitioning

Divide input data into **equivalence classes** — groups of inputs that the system should treat the
same way. Test one representative from each class.

**Example:** A function accepts ages 0-120.

| Equivalence class  | Range       | Test value |
| ------------------ | ----------- | ---------- |
| Valid              | $[0, 120]$  | 25         |
| Invalid (too low)  | $\lt{} 0$   | -1         |
| Invalid (too high) | $\gt{} 120$ | 150        |

### Boundary Value Analysis

Test values at the **boundaries** of equivalence classes, where errors are most likely to occur.

**Rules:** Test the boundary value, and the values immediately above and below.

**Example:** Age range $[0, 120]$:

| Boundary | Test values   |
| -------- | ------------- |
| Lower    | -1, 0, 1      |
| Upper    | 119, 120, 121 |

**Why boundaries?** Off-by-one errors are among the most common programming mistakes. If a developer
writes `age < 120` instead of `age <= 120`, boundary testing catches it immediately.

### Decision Table Testing

Create a table listing all combinations of conditions and the expected actions.

| Condition 1 | Condition 2 | Action |
| ----------- | ----------- | ------ |
| True        | True        | A      |
| True        | False       | B      |
| False       | True        | C      |
| False       | False       | D      |

### State Transition Testing

Test the transitions between states of a system that can be in different states.

Example: A login system has states: Logged Out → Authenticating → Logged In → Locked.

<hr />

## 4. White-Box Testing

### Definition

**White-box (structural) testing** uses knowledge of the internal code structure to design tests.
Tests are based on code paths, branches, and conditions.

### Statement Coverage

**Definition:** The percentage of executable statements that have been executed by the test suite.

$$\mathrm{Statement coverage} = \frac{\mathrm{Statements executed}}{\mathrm{Total statements}} \times 100\%$$

### Branch (Decision) Coverage

**Definition:** The percentage of decision outcomes (true/false branches) that have been taken.

$$\mathrm{Branch coverage} = \frac{\mathrm{Branches taken}}{\mathrm{Total branches}} \times 100\%$$

**Theorem.** 100% statement coverage does not imply 100% branch coverage.

**Proof.** Consider:

```python
if condition:
    x = 1
x = 2
```

A single test with `condition = True` achieves 100% statement coverage (all 2 statements executed)
but only 50% branch coverage (the false branch of the if-statement is never taken). $\square$

### Path Coverage

**Definition:** The percentage of distinct execution paths through the code.

**Theorem.** 100% path coverage is infeasible for programs with loops (exponentially many paths).

<hr />

## 5. Test-Driven Development (TDD)

### Process

1. **Red:** Write a failing test for the desired functionality
2. **Green:** Write the minimum code to make the test pass
3. **Refactor:** Improve the code while keeping tests green

### Benefits

- Forces consideration of the interface before implementation
- Comprehensive test suite as a by-product
- Confidence in refactoring
- Self-documenting code through tests

<hr />

## 6. Traceability

### Definition

**Traceability** links requirements to test cases, ensuring every requirement is tested and every
test case maps to a requirement.

```
Requirement → Design → Code → Test Case → Test Result
```

A **traceability matrix** maps each requirement to the test cases that verify it.

<hr />

## Problem Set

**Problem 1.** A function `calculate_discount(price, age)` applies a discount based on age:

- Children (0-12): 50% discount
- Seniors (65+): 30% discount
- Teenagers (13-17): 10% discount
- Adults (18-64): no discount

Using equivalence partitioning and boundary value analysis, identify all test cases.

<details>
<summary>Answer</summary>

**Equivalence classes:**

| Class              | Range          | Test value |
| ------------------ | -------------- | ---------- |
| Child              | $[0, 12]$      | 6          |
| Teen               | $[13, 17]$     | 15         |
| Adult              | $[18, 64]$     | 40         |
| Senior             | $[65, \infty)$ | 70         |
| Invalid (negative) | $\lt{} 0$      | -1         |

**Boundary value analysis:**

| Boundary | Values     |
| -------- | ---------- |
| 0        | -1, 0, 1   |
| 12/13    | 12, 13, 14 |
| 17/18    | 17, 18, 19 |
| 64/65    | 64, 65, 66 |

Total test cases: 5 (equivalence) + 12 (boundary) = 17 (some overlap).

</details>

**Problem 2.** Explain the difference between a stub and a mock in unit testing.

<details>
<summary>Answer</summary>

A **stub** is a simple replacement for a dependency that returns predefined responses. It provides
canned answers to calls.

A **mock** is a more sophisticated replacement that **verifies** how it was called — it records the
calls and can assert that specific methods were called with specific arguments.

| Feature    | Stub                                  | Mock                                  |
| ---------- | ------------------------------------- | ------------------------------------- |
| Purpose    | Provide test data                     | Verify interactions                   |
| Asserts    | On return values                      | On method calls                       |
| Complexity | Simple                                | More complex                          |
| Example    | Fake database returning fixed records | Verify `send_email()` was called once |

</details>

**Problem 3.** Consider the following code. What is the minimum number of test cases to achieve 100%
branch coverage?

```python
def classify(x, y):
    if x > 0:
        if y > 0:
            return "Q1"
        else:
            return "Q4"
    else:
        if y > 0:
            return "Q2"
        else:
            return "Q3"
```

<details>
<summary>Answer</summary>

There are 2 decision points, each with 2 branches → 4 branches total.

**2 test cases** achieve 100% branch coverage:

1. `classify(1, 1)` → "Q1" (both conditions true)
2. `classify(-1, -1)` → "Q3" (both conditions false)

This covers all 4 branches: `x > 0` (true and false), `y > 0` (true and false).

However, for 100% **path** coverage, we need 4 test cases (one per quadrant):

1. (1, 1) → Q1
2. (-1, 1) → Q2
3. (-1, -1) → Q3
4. (1, -1) → Q4
</details>

**Problem 4.** Write unit tests for a stack's push, pop, and peek operations. Include edge cases.

<details>
<summary>Answer</summary>

```python
def test_stack():
    s = ArrayStack(5)

    s.push(10)
    assert s.peek() == 10
    assert s.size() == 1

    s.push(20)
    assert s.peek() == 20
    assert s.pop() == 20
    assert s.peek() == 10

    assert s.pop() == 10
    assert s.is_empty()

    try:
        s.pop()
        assert False, "Should have raised"
    except Exception:
        pass

    try:
        s.peek()
        assert False, "Should have raised"
    except Exception:
        pass
```

Tests cover: push/peek, push/pop order, empty after all pops, pop from empty, peek from empty.

</details>

**Problem 5.** Explain why 100% statement coverage does not guarantee bug-free code. Give a concrete
example.

<details>
<summary>Answer</summary>

100% statement coverage means every line of code has been executed at least once, but it does not
guarantee:

1. All combinations of conditions are tested
2. All data flows are tested
3. All timing/ordering issues are caught
4. Integration issues between modules are found

**Example:**

```python
def process(data):
    result = []
    for item in data:
        if item > 0:
            result.append(item * 2)
        result.append(item)
    return result
```

Test: `process([3])` → `[6, 3]`. Statement coverage: 100% (all lines executed). But this doesn't
test:

- Negative items (different branch)
- Empty list (edge case)
- Zero (boundary)
</details>

**Problem 6.** Describe the difference between top-down and bottom-up integration testing. What are
the advantages of each?

<details>
<summary>Answer</summary>

**Top-down integration:**

- Start with the top-level module and integrate downward
- Lower-level modules are replaced by **stubs** (simple stand-ins)
- Advantages: High-level design flaws are found early; the system skeleton is visible early
- Disadvantages: Stubs may not represent lower modules accurately; testing lower modules in
  isolation is difficult

**Bottom-up integration:**

- Start with the lowest-level modules and integrate upward
- Higher-level modules are replaced by **drivers** (test harnesses)
- Advantages: Low-level modules are thoroughly tested; drivers are simpler than stubs
- Disadvantages: The complete system is not visible until late; interface defects between high-level
modules may be found late
</details>

**Problem 7.** Create a decision table for a login system where a user can be:

- Valid or invalid
- Have correct or incorrect password
- Account may be locked (after 3 failed attempts)

<details>
<summary>Answer</summary>

| Rule | User    | Password  | Locked | Action                         |
| ---- | ------- | --------- | ------ | ------------------------------ |
| 1    | Valid   | Correct   | No     | Login success                  |
| 2    | Valid   | Incorrect | No     | Show error, increment attempts |
| 3    | Valid   | Correct   | Yes    | Show "account locked"          |
| 4    | Valid   | Incorrect | Yes    | Show "account locked"          |
| 5    | Invalid | Any       | Any    | Show "user not found"          |

Rules 3, 4, 5 could potentially be merged (locked or invalid user always shows an error), but for
completeness, they're listed separately.

</details>

**Problem 8.** Explain the concept of regression testing and why it is necessary in iterative
development.

<details>
<summary>Answer</summary>

**Regression testing** is the re-execution of existing test cases after a code change to verify that
previously working functionality has not been broken (regressed).

**Why necessary in iterative development:**

1. Each sprint modifies existing code → risk of breaking existing features
2. New features may interact with old features in unexpected ways
3. Refactoring (improving code structure without changing behaviour) must not introduce bugs
4. Without regression testing, each iteration could degrade quality, making the system increasingly
   unstable

**Best practices:**

- Automate regression tests (run them as part of CI/CD pipeline)
- Prioritise tests for critical functionality
- Run a subset of tests after each change (smoke tests) and the full suite nightly
- Use version control to track which tests fail after each change

For revision on software development, see
[SDLC](/docs/alevel/computer-science/software-engineering/software-development-lifecycle).

</details>

<hr />

## 7. Worked Examples: Writing Test Cases

### Worked Example: Boundary Value Analysis for a Password Validator

A system requires passwords to be 8-20 characters long, containing at least one uppercase letter,
one digit, and one special character.

**Boundary value analysis for length:**

| Boundary        | Values     | Expected               |
| --------------- | ---------- | ---------------------- |
| Min length (8)  | 7, 8, 9    | Reject, Accept, Accept |
| Max length (20) | 19, 20, 21 | Accept, Accept, Reject |

**Equivalence partitioning for character requirements:**

| Class           | Test input                         | Expected |
| --------------- | ---------------------------------- | -------- |
| Valid password  | `Abcdef1!`                         | Accept   |
| No uppercase    | `abcdef1!`                         | Reject   |
| No digit        | `Abcdefgh`                         | Reject   |
| No special char | `Abcdefg1`                         | Reject   |
| Too short       | `Abc1!`                            | Reject   |
| Too long        | `Abcdefghijklmnopqr1!x` (22 chars) | Reject   |

### Worked Example: Equivalence Partitioning for a Date Validator

A function accepts dates in the format `DD/MM/YYYY` where the year must be between 1900 and 2100.

**Equivalence classes:**

| Class          | Description                          | Test value   | Expected |
| -------------- | ------------------------------------ | ------------ | -------- |
| Valid date     | Day 1-31, month 1-12, year 1900-2100 | `15/06/2024` | Accept   |
| Invalid day    | Day &gt; 31 or &lt; 1                | `32/01/2024` | Reject   |
| Invalid month  | Month &gt; 12 or &lt; 1              | `15/13/2024` | Reject   |
| Year too early | Year &lt; 1900                       | `15/06/1899` | Reject   |
| Year too late  | Year &gt; 2100                       | `15/06/2101` | Reject   |
| Invalid format | Wrong separator or order             | `06-15-2024` | Reject   |

**Boundary values for year:** `1899, 1900, 1901` and `2099, 2100, 2101`

**Additional boundary values for day:** Test February 29 (leap year): `29/02/2024` (accept),
`29/02/2023` (reject)

### Worked Example: Test Cases for a Stack with Fixed Size

A stack has a maximum capacity of 5 elements. Operations: `push(item)`, `pop()`, `peek()`,
`is_empty()`, `is_full()`.

| Test case            | Input                          | Expected output             |
| -------------------- | ------------------------------ | --------------------------- |
| Push single item     | `push(10)`                     | Stack: `[10]`, size = 1     |
| Push to full         | `push` 5 items, then `push(6)` | Error/exception             |
| Pop from full        | Push 3 items, `pop()`          | Returns 3rd item, size = 2  |
| Pop from empty       | `pop()` on empty stack         | Error/exception             |
| Peek does not remove | `push(10)`, `peek()`, size     | Returns 10, size = 1        |
| Is empty             | New stack, `is_empty()`        | True                        |
| Is full              | Push 5 items, `is_full()`      | True                        |
| Pop then push        | Push 5, pop 1, push 1          | Stack has 5 items, no error |
| Order preserved      | Push 1, 2, 3; pop twice        | Returns 3, then 2           |

<hr />

## 8. Test-Driven Development Workflow

### Detailed TDD Cycle

```
Write failing test → See it fail (Red) → Write minimum code → See it pass (Green) → Refactor → Repeat
```

### Worked Example: TDD for an `is_prime` Function

**Step 1 (Red):** Write a test.

```python
def test_is_prime():
    assert is_prime(2) == True
    assert is_prime(17) == True
    assert is_prime(1) == False
    assert is_prime(4) == False
```

Run the test — it fails because `is_prime` does not exist.

**Step 2 (Green):** Write the minimum code to pass.

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
```

Run the test — all tests pass.

**Step 3 (Refactor):** The loop can be optimised.

```python
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True
```

Run the test — still passes. The refactored version is more efficient.

**Step 4 (Add more tests):** Test edge cases discovered during refactoring.

```python
def test_is_prime():
    assert is_prime(2) == True
    assert is_prime(3) == True
    assert is_prime(17) == True
    assert is_prime(1) == False
    assert is_prime(0) == False
    assert is_prime(-5) == False
    assert is_prime(4) == False
    assert is_prime(9) == False
    assert is_prime(49) == False
```

### Benefits of TDD in Practice

| Benefit                | Explanation                                                                       |
| ---------------------- | --------------------------------------------------------------------------------- |
| Design improvement     | Writing tests first forces you to think about the interface before implementation |
| Comprehensive coverage | Every feature has at least one test (written before the feature)                  |
| Safe refactoring       | Existing tests catch regressions when code is changed                             |
| Living documentation   | Tests demonstrate how the code is intended to be used                             |
| Smaller code           | Writing only enough code to pass the test discourages over-engineering            |

<hr />

## 9. Common Pitfalls

| Pitfall                         | Explanation                                                          | Avoidance                                                                        |
| ------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Testing only the happy path     | Edge cases and error conditions are where most bugs hide             | Include boundary values, invalid inputs, and empty inputs                        |
| Writing tests after the code    | Tests become biased toward the implementation, not the specification | Use TDD or write tests from the requirements document                            |
| Insufficient branch coverage    | A single test passing through `if` does not test the `else`          | Use branch coverage analysis to identify untested paths                          |
| Test interdependence            | Tests that depend on execution order produce false passes/failures   | Each test should set up its own state and clean up after itself                  |
| Ignoring non-functional testing | Performance, security, and usability bugs reach production           | Include load tests, security scans, and user acceptance tests                    |
| Over-reliance on code coverage  | 100% coverage does not mean 100% correctness                         | Combine coverage metrics with manual test design (equivalence partitioning, BVA) |

<hr />

## 10. Additional Problem Set

**Problem 1.** A function `calculate_bmi(weight_kg, height_m)` returns a BMI category:

- BMI &lt; 18.5: "Underweight"
- 18.5 &lt;= BMI &lt; 25: "Normal"
- 25 &lt;= BMI &lt; 30: "Overweight"
- BMI &gt;= 30: "Obese"

Using boundary value analysis, identify all boundary test cases.

<details>
<summary>Answer</summary>

Boundaries are at BMI values: 18.5, 25, and 30.

For each boundary, test the value, and the values immediately above and below:

| Boundary | Test values      | Expected                       |
| -------- | ---------------- | ------------------------------ |
| 18.5     | 18.4, 18.5, 18.6 | Underweight, Normal, Normal    |
| 25.0     | 24.9, 25.0, 25.1 | Normal, Overweight, Overweight |
| 30.0     | 29.9, 30.0, 30.1 | Overweight, Obese, Obese       |

To produce these BMIs from weight and height, choose fixed height (e.g., 1.7m) and calculate the
corresponding weights.

For height = 1.7m: BMI = weight / (1.7 \* 1.7) = weight / 2.89

| Target BMI | Weight (kg) |
| ---------- | ----------- |
| 18.4       | 53.2        |
| 18.5       | 53.5        |
| 18.6       | 53.8        |
| 24.9       | 72.0        |
| 25.0       | 72.3        |
| 25.1       | 72.5        |
| 29.9       | 86.4        |
| 30.0       | 86.7        |
| 30.1       | 87.0        |

</details>

**Problem 2.** A function `merge_sorted(a, b)` merges two sorted arrays into one sorted array. Write
a set of test cases using equivalence partitioning.

<details>
<summary>Answer</summary>

**Equivalence classes for inputs:**

| Class                    | Description            | Test input               | Expected             |
| ------------------------ | ---------------------- | ------------------------ | -------------------- |
| Both non-empty           | Normal case            | `[1, 3, 5]`, `[2, 4, 6]` | `[1, 2, 3, 4, 5, 6]` |
| First empty              | Edge case              | `[]`, `[1, 2]`           | `[1, 2]`             |
| Second empty             | Edge case              | `[1, 2]`, `[]`           | `[1, 2]`             |
| Both empty               | Edge case              | `[]`, `[]`               | `[]`                 |
| Single element each      | Small case             | `[1]`, `[2]`             | `[1, 2]`             |
| Duplicate values         | Data with repeats      | `[1, 2, 2]`, `[2, 3]`    | `[1, 2, 2, 2, 3]`    |
| Negative values          | Include negatives      | `[-3, -1]`, `[-2, 0]`    | `[-3, -2, -1, 0]`    |
| Different lengths        | Unequal arrays         | `[1]`, `[2, 3, 4, 5]`    | `[1, 2, 3, 4, 5]`    |
| One contains all smaller | No interleaving needed | `[1, 2]`, `[3, 4]`       | `[1, 2, 3, 4]`       |

</details>

**Problem 3.** Explain why a test that achieves 100% branch coverage might still miss a bug. Provide
a concrete code example.

<details>
<summary>Answer</summary>

Consider a function that calculates the area of a triangle given three side lengths using Heron's
formula:

```python
def triangle_area(a, b, c):
    if a + b > c and b + c > a and a + c > b:
        s = (a + b + c) / 2
        area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
        return area
    return -1
```

Two test cases achieve 100% branch coverage:

1. `triangle_area(3, 4, 5)` returns 6.0 (takes the true branch)
2. `triangle_area(1, 2, 10)` returns -1 (takes the false branch)

Both branches are covered. But the following issues are not caught:

- **Negative side length:** `triangle_area(-3, 4, 5)` — the condition `-3 + 4 > 5` is `1 > 5` which
  is false, so it returns -1. But `triangle_area(-3, -4, -5)` — the condition `-3 + (-4) > -5` is
  `-7 > -5` which is false. These happen to be handled, but only by accident — the function does not
  explicitly validate for negative inputs.

The key insight: branch coverage tests control flow, not data ranges, not data types, not arithmetic
properties. A function can have correct control flow but incorrect logic for specific data values.

</details>

**Problem 4.** Describe how you would apply TDD to develop a function that converts a Roman numeral
string to an integer.

<details>
<summary>Answer</summary>

**Step 1: Write the simplest failing tests.**

```python
def test_roman_to_int():
    assert roman_to_int("I") == 1
    assert roman_to_int("V") == 5
    assert roman_to_int("X") == 10
```

**Step 2: Minimum code to pass.**

```python
def roman_to_int(s):
    values = {"I": 1, "V": 5, "X": 10}
    return values[s]
```

**Step 3: Add more tests.**

```python
    assert roman_to_int("III") == 3
    assert roman_to_int("IV") == 4
    assert roman_to_int("IX") == 9
    assert roman_to_int("LVIII") == 58
    assert roman_to_int("MCMXCIV") == 1994
```

**Step 4: Expand implementation.**

```python
def roman_to_int(s):
    values = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    total = 0
    for i in range(len(s)):
        if i + 1 < len(s) and values[s[i]] < values[s[i + 1]]:
            total -= values[s[i]]
        else:
            total += values[s[i]]
    return total
```

**Step 5: Refactor and add edge case tests.**

```python
    assert roman_to_int("") == 0
```

Each TDD cycle adds a test case that captures a new requirement (repeated characters, subtractive
notation, multi-character numerals), then implements just enough code to satisfy it.

</details>

**Problem 5.** A software team has 500 test cases. Running all tests takes 2 hours. After a code
change, the team only wants to run the tests most likely to fail. Describe a strategy for selecting
which tests to run.

<details>
<summary>Answer</summary>

**Test prioritisation strategies:**

1. **Impact analysis:** Identify which modules were changed and run only the tests that cover those
   modules. If function `X` was modified, run all tests that call `X` directly or indirectly.

2. **Test categorisation:**
   - **Smoke tests (5 minutes):** Core functionality — login, database connection, API health. Run
     always.
   - **Regression tests (30 minutes):** Tests for previously-fixed bugs. Run after each commit.
   - **Full suite (2 hours):** Run nightly or before release.

3. **Historical failure rate:** Prioritise tests that have failed most frequently in the past. Tests
   that always pass are less likely to catch new bugs.

4. **Code change proximity:** Tests for code that is "close" (in the call graph) to the changed code
   are more likely to fail than tests for unrelated modules.

5. **Risk-based selection:** If the change is to authentication code, prioritise all
   security-related tests. If the change is to the UI, prioritise UI tests.

The most practical approach: run smoke tests on every commit, run affected module tests on every
pull request, and run the full suite nightly.

</details>

:::
