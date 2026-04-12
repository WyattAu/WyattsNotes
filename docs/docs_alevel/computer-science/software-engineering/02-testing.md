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

---

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

:::info
Board-specific

- **AQA** requires unit testing, integration testing, system testing, acceptance testing; requires
  understanding of test data (normal, boundary, erroneous, extreme)
- **CIE (9618)** covers testing strategies; requires test plans and test data design
- **OCR (A)** requires unit, integration, system, and acceptance testing; may require traceability
  between requirements and tests
- **Edexcel** covers testing types and test data design
:::

---

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

---

## 4. White-Box Testing

### Definition

**White-box (structural) testing** uses knowledge of the internal code structure to design tests.
Tests are based on code paths, branches, and conditions.

### Statement Coverage

**Definition:** The percentage of executable statements that have been executed by the test suite.

$$\text{Statement coverage} = \frac{\text{Statements executed}}{\text{Total statements}} \times 100\%$$

### Branch (Decision) Coverage

**Definition:** The percentage of decision outcomes (true/false branches) that have been taken.

$$\text{Branch coverage} = \frac{\text{Branches taken}}{\text{Total branches}} \times 100\%$$

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

---

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

---

## 6. Traceability

### Definition

**Traceability** links requirements to test cases, ensuring every requirement is tested and every
test case maps to a requirement.

```
Requirement → Design → Code → Test Case → Test Result
```

A **traceability matrix** maps each requirement to the test cases that verify it.

---

## Problem Set

**Problem 1.** A function `calculate_discount(price, age)` applies a discount based on age:

- Children (0-12): 50% discount
- Seniors (65+): 30% discount
- Teenagers (13-17): 10% discount
- Adults (18-64): no discount

Using equivalence partitioning and boundary value analysis, identify all test cases.

<details>
<summary>Answer</summary>

**Equivalence classes:** | Class | Range | Test value | | ----- | -------- | ---------- | | Child |
$[0, 12]$| 6 | | Teen | $[13, 17]$| 15 | | Adult | $[18, 64]$| 40 | | Senior| $[65, \infty)$| 70 | |
Invalid (negative) | $\lt{} 0$ | -1 |

**Boundary value analysis:** | Boundary | Values | | -------- | ------------ | | 0 | -1, 0, 1 | |
12/13 | 12, 13, 14 | | 17/18 | 17, 18, 19 | | 64/65 | 64, 65, 66 |

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
def abs(x):
    if x >= 0:
        return x
    return -x
```

Test: `abs(5)` returns 5. This achieves 100% statement coverage (both branches are technically
reached... wait, only one branch is taken). Actually, test `abs(5)` only achieves 50% branch
coverage.

Better example:

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
[SDLC](/docs/academics/alevel/computer-science/software-engineering/software-development-lifecycle).
</details>

:::
