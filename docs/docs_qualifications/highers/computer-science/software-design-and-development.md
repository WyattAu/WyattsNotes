---
title: Software Design and Development
date: 2026-04-14
tags:
  - Computer Science
  - Highers
categories:
  - Computer Science
slug: software-design-and-development
---

# Software Design and Development

## Higher Software Design

### Software Development Process

**Waterfall Model:** A linear sequential approach where each phase must be completed before the next
begins.

1. **Requirements analysis:** Gather and document what the software must do
2. **Design:** Plan the software architecture, data structures, and algorithms
3. **Implementation:** Write the code
4. **Testing:** Verify the software meets requirements
5. **Deployment:** Release the software
6. **Maintenance:** Fix bugs and add features

**Agile Methodologies:** Iterative and incremental approaches that embrace change.

**Scrum:** Uses sprints (typically 2-4 weeks), daily stand-ups, sprint reviews, and retrospectives.
Roles: Product Owner, Scrum Master, Development Team.

**Extreme Programming (XP):** Emphasises pair programming, test-driven development, continuous
integration, and frequent small releases.

**Waterfall vs Agile comparison:**

| Feature              | Waterfall                | Agile                     |
| -------------------- | ------------------------ | ------------------------- |
| Approach             | Linear, sequential       | Iterative, incremental    |
| Flexibility          | Rigid                    | Flexible, embraces change |
| Customer involvement | At start/end             | Continuous                |
| Delivery             | Single release at end    | Frequent small releases   |
| Documentation        | Extensive upfront        | Minimal, working code     |
| Risk                 | High (late testing)      | Low (early testing)       |
| Best for             | Well-understood projects | Evolving requirements     |

### Analysis and Design

**Requirements gathering techniques:**

- Interviews with stakeholders
- Observation of current systems
- Questionnaires
- Document analysis
- Prototyping

**Feasibility study:** Evaluates whether a project is worth undertaking. Considers:

- Technical feasibility
- Economic feasibility
- Operational feasibility
- Schedule feasibility

**Functional requirements:** What the system must do (e.g., "The system shall allow users to
register an account").

**Non-functional requirements:** How the system should perform (e.g., "The system shall respond
within 2 seconds").

**Worked Example.** For a school library system, identify three functional and three non-functional
requirements.

Functional: (1) The system shall allow librarians to add new books. (2) The system shall track which
books are currently on loan. (3) The system shall generate overdue reports.

Non-functional: (1) The system shall respond to search queries within 1 second. (2) The system shall
support at least 50 concurrent users. (3) The system shall be available 99.5% of the time.

### Data Modelling

**Entity-Relationship Diagrams (ERDs):**

Show entities (tables), attributes, and relationships between them.

**Relationship types:**

- One-to-one (1:1)
- One-to-many (1:M)
- Many-to-many (M:N) -- requires a junction table

**Example:** A school database with Students, Courses, and Enrolments.

- Student (1) -- (M) Enrolment (M) -- (1) Course

### Unified Modelling Language (UML)

**Use Case Diagrams:**

- Actors (users or external systems)
- Use cases (functions the system performs)
- System boundary

**Class Diagrams:**

- Classes with attributes and methods
- Relationships: association, aggregation, composition, inheritance
- Visibility: + (public), - (private), # (protected)

**Example:**

```
+-------------------+
|      Animal       |
+-------------------+
| - name: String    |
| - age: Integer    |
+-------------------+
| + eat(): void     |
| + sleep(): void   |
+-------------------+
         |
         | (inheritance)
         |
+-------------------+
|        Dog        |
+-------------------+
| - breed: String   |
+-------------------+
| + bark(): void    |
| + fetch(): void   |
+-------------------+
```

**Sequence Diagrams:** Show the interaction between objects over time. Include lifelines, activation
bars, and messages.

### Algorithms and Pseudocode

**Standard pseudocode conventions:**

```
BEGIN
    INPUT name
    INPUT age
    IF age >= 18 THEN
        OUTPUT "Welcome, " + name
    ELSE
        OUTPUT "Access denied"
    END IF
END
```

**Example:** Linear search.

```
FUNCTION linear_search(array, target)
    FOR i FROM 0 TO length(array) - 1
        IF array[i] = target THEN
            RETURN i
        END IF
    END FOR
    RETURN -1
END FUNCTION
```

**Time complexity:** $O(n)$ -- in the worst case, every element is checked.

---

## Software Development

### Programming Paradigms

**Imperative Programming:** Sequence of commands that change the program state. The programmer
specifies how to solve the problem step by step.

**Object-Oriented Programming (OOP):** Based on objects that contain data (attributes) and behaviour
(methods).

**Four pillars of OOP:**

1. **Encapsulation:** Bundling data and methods together; hiding internal details through access
   modifiers.

2. **Inheritance:** Creating new classes from existing ones, inheriting their attributes and
   methods.

3. **Polymorphism:** The ability of objects to take on different forms. Method overriding (runtime)
   and method overloading (compile-time).

4. **Abstraction:** Hiding complex implementation details and exposing only essential features.

**Example (Python):**

```python
class Shape:
    def area(self):
        raise NotImplementedError

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2

shapes = [Rectangle(4, 5), Circle(3)]
for shape in shapes:
    print(shape.area())
```

**Worked Example (Python inheritance):**

```python
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def describe(self):
        return f"{self.year} {self.make} {self.model}"

class Car(Vehicle):
    def __init__(self, make, model, year, doors):
        super().__init__(make, model, year)
        self.doors = doors

    def describe(self):
        return f"{super().describe()} ({self.doors}-door)"
```

**Functional Programming:** Based on mathematical functions. Emphasises immutability, pure
functions, and higher-order functions.

**Key concepts:**

- **Pure functions:** Same output for same input; no side effects
- **First-class functions:** Functions can be passed as arguments and returned as values
- **Higher-order functions:** Functions that take or return other functions
- **Recursion:** Functions that call themselves instead of using loops
- **Immutable data:** Data cannot be modified after creation

**Example (Haskell):**

```haskell
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

map' :: (a -> b) -> [a] -> [b]
map' _ []     = []
map' f (x:xs) = f x : map' f xs

sumEven :: [Int] -> Int
sumEven xs = sum (filter even xs)
```

### Data Types and Structures

**Primitive data types:** Integer, Real/Float, Boolean, Character, String.

**Composite data types:** Arrays, records, lists, tuples.

**Abstract Data Types (ADTs):**

- Stack: LIFO (Last In, First Out)
- Queue: FIFO (First In, First Out)
- Linked list
- Binary tree
- Hash table

**Example (Python stack):**

```python
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

**Example (Python queue):**

```python
from collections import deque

class Queue:
    def __init__(self):
        self._items = deque()

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items.popleft()

    def peek(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items[0]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

**ADT complexity comparison:**

| Operation       | Stack  | Queue  | Array  | Linked List         |
| --------------- | ------ | ------ | ------ | ------------------- |
| Push/Enqueue    | $O(1)$ | $O(1)$ | N/A    | $O(1)$              |
| Pop/Dequeue     | $O(1)$ | $O(1)$ | N/A    | $O(1)$              |
| Peek/Front      | $O(1)$ | $O(1)$ | N/A    | $O(1)$              |
| Search          | $O(n)$ | $O(n)$ | $O(n)$ | $O(n)$              |
| Access by index | N/A    | N/A    | $O(1)$ | $O(n)$              |
| Insert middle   | N/A    | N/A    | $O(n)$ | $O(1)$ with pointer |

### File Handling

**Sequential files:** Records stored one after another. Read from beginning to end.

**Random-access files:** Records can be accessed directly by their position.

**Example (Python):**

```python
with open("data.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("Second line\n")

with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

with open("data.txt", "a") as f:
    f.write("Third line\n")
```

### Error Handling

**Types of errors:**

- **Syntax errors:** Code does not follow the language rules
- **Logic errors:** Code runs but produces incorrect results
- **Runtime errors:** Code crashes during execution

**Exception handling (Python):**

```python
try:
    numerator = int(input("Enter numerator: "))
    denominator = int(input("Enter denominator: "))
    result = numerator / denominator
    print(f"Result: {result}")
except ValueError:
    print("Please enter valid integers.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
finally:
    print("Program complete.")
```

### Testing

**Test strategies:**

- **Unit testing:** Testing individual components in isolation
- **Integration testing:** Testing how components work together
- **System testing:** Testing the complete system
- **Acceptance testing:** User verifies the system meets requirements

**Black-box testing:** Testing based on specifications without knowing the internal code. Uses
equivalence partitioning and boundary value analysis.

**White-box testing:** Testing based on the internal structure and logic of the code.

**Example:** For a function that accepts ages 0-120:

- Equivalence classes: 0-120 (valid), less than 0 (invalid), greater than 120 (invalid)
- Boundary values: -1, 0, 1, 119, 120, 121

**Worked Example.** A function calculates a discount based on quantity: 0-9 items (no discount),
10-49 items (5% discount), 50+ items (10% discount). Identify the boundary values.

Boundaries: 0, 1, 9, 10, 11, 49, 50, 51. Test values at and on either side of each boundary.

## Additional Design Topics

### Software Design Principles

**SOLID Principles (Higher):**

1. **Single Responsibility:** A class should have only one reason to change.
2. **Open/Closed:** Classes should be open for extension but closed for modification.
3. **Liskov Substitution:** Subtypes must be substitutable for their base types.
4. **Interface Segregation:** Many specific interfaces are better than one general interface.
5. **Dependency Inversion:** Depend on abstractions, not concretions.

**Cohesion:** How closely related the responsibilities of a module are. High cohesion is desirable.

**Coupling:** How much modules depend on each other. Low coupling is desirable.

| Design Goal   | Desirable | Effect                                 |
| ------------- | --------- | -------------------------------------- |
| High cohesion | Yes       | Easier to understand and modify        |
| Low coupling  | Yes       | Changes in one module have less impact |

**Worked Example.** A class `CustomerManager` handles customer data, sends emails, and generates
reports. This has low cohesion. Refactor by splitting into `CustomerData`, `EmailService`, and
`ReportGenerator`.

### Sequence Diagrams

Sequence diagrams show the interaction between objects over time.

**Example: User borrows a book from the library.**

```
User -> LibrarySystem: borrowBook(userID, bookID)
LibrarySystem -> Database: checkAvailability(bookID)
Database --> LibrarySystem: available = true
LibrarySystem -> Database: createLoan(userID, bookID)
Database --> LibrarySystem: loanCreated
LibrarySystem --> User: "Book borrowed successfully"
```

### State Transition Diagrams

Show how an object moves between states in response to events.

**Example: Order states**

```
[New] --place--> [Processing] --ship--> [Shipped] --deliver--> [Delivered]
                       |                                    |
                       +---cancel--> [Cancelled]              |
                       |                                    |
                       +---return--<------------------------+
```

## Additional Programming Topics

### Functional Programming in Detail (Higher)

**Key concepts:**

- **Pure functions:** Same output for same input; no side effects.
- **First-class functions:** Functions can be passed as arguments and returned as values.
- **Higher-order functions:** Functions that take or return other functions.
- **Recursion:** Functions that call themselves instead of using loops.
- **Immutable data:** Data cannot be modified after creation.

**Map, Filter, Reduce:**

| Function | Purpose                              | Example (Haskell)            |
| -------- | ------------------------------------ | ---------------------------- |
| map      | Apply a function to each element     | `map (*2) [1,2,3] = [2,4,6]` |
| filter   | Keep elements matching a predicate   | `filter even [1..10]`        |
| reduce   | Combine elements into a single value | `sum [1,2,3,4] = 10`         |

**Haskell examples:**

```haskell
-- Map: double each element
doubleAll xs = map (*2) xs

-- Filter: keep even numbers
keepEven xs = filter even xs

-- Reduce: sum all elements
sumList xs = foldl (+) 0 xs

-- Composition: square then filter even
process xs = filter even (map (^2) xs)
```

### Exception Handling in Detail

**Exception hierarchy:**

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
except (TypeError, ValueError) as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("Cleanup code runs here")
```

**Best practices:**

- Catch specific exceptions, not bare `except:`.
- Use `finally` for cleanup (closing files, releasing resources).
- Do not silently suppress exceptions.

### Data Validation Techniques

| Check          | Description                             | Example                    |
| -------------- | --------------------------------------- | -------------------------- |
| Range check    | Value within acceptable range           | `0 <= age <= 120`          |
| Type check     | Value is the correct data type          | isinstance(age, int)       |
| Length check   | String has correct number of characters | `len(name) <= 50`          |
| Format check   | Data matches expected pattern           | email contains @ and .     |
| Presence check | Field is not empty                      | name != ""                 |
| Lookup check   | Value exists in a reference table       | country in valid_countries |

**Worked Example.** Write a Python function that validates a password.

```python
def validate_password(password):
    if len(password) < 8:
        return False, "Password must be at least 8 characters."
    if not any(c.isupper() for c in password):
        return False, "Password must contain an uppercase letter."
    if not any(c.islower() for c in password):
        return False, "Password must contain a lowercase letter."
    if not any(c.isdigit() for c in password):
        return False, "Password must contain a digit."
    return True, "Password is valid."
```

## Additional Practice Questions

19. Explain the difference between high cohesion and low coupling. Why are both desirable?

20. Design a sequence diagram for a user logging into a system. Include the user, the web server,
    the database, and the authentication service.

21. Write a Haskell function that takes a list of integers and returns a new list containing only
    the positive even numbers.

22. Explain the SOLID principles. Give an example of violating the Single Responsibility Principle
    and show how to fix it.

23. Write a Python class `BankAccount` with methods for deposit, withdraw, and get_balance. Include
    validation (no negative deposits, no overdrafts).

24. Explain the difference between a state transition diagram and a sequence diagram. When would you
    use each?

25. Write pseudocode for a function that validates an email address. Check for the presence of @ and
    at least one . after the @.

26. Explain why functional programming is becoming more popular. Give two advantages and two
    disadvantages compared to imperative programming.

27. Design a class diagram for an online shopping system with classes for User, Product, Order, and
    OrderItem. Show relationships and key attributes.

28. Write a Python function that implements merge sort. Include comments explaining each step.

29. Explain what test-driven development (TDD) is. Describe the red-green-refactor cycle.

30. A function `calculateDiscount(price, customerType)` applies discounts: students get 10%, staff
    get 20%, everyone else gets 5% on orders over 100 pounds. Using boundary value analysis,
    identify all test cases.

## Additional Testing Topics

### Test-Driven Development (TDD)

TDD is a development methodology where tests are written before the code.

**The TDD cycle (Red-Green-Refactor):**

1. **Red:** Write a failing test for the desired functionality.
2. **Green:** Write the minimum code to make the test pass.
3. **Refactor:** Improve the code while keeping tests green.

**Benefits:**

- Forces clear thinking about requirements before coding.
- Produces a comprehensive test suite.
- Gives confidence that changes do not break existing functionality.
- Results in modular, testable code.

**Example:**

```python
# Red: Write the test first
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

# Green: Write minimum code
def add(a, b):
    return a + b

# Refactor: Improve if needed (not much to refactor here)
```

### Code Quality Metrics

| Metric                | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| Cyclomatic complexity | Number of independent paths through code (lower is better)         |
| Code coverage         | Percentage of code exercised by tests (higher is better)           |
| Lines of code         | Total lines (lower is generally better for the same functionality) |
| Technical debt        | Cost of future work caused by shortcuts taken now                  |

### Debugging Strategies

1. **Print statements:** Insert print/println to trace variable values.
2. **Breakpoints:** Pause execution at a specific line (using a debugger).
3. **Stepping:** Execute code one line at a time.
4. **Watch variables:** Monitor specific variables as code executes.
5. **Binary search:** Comment out half the code to isolate the bug.

### Software Licensing

| License     | Description                                         |
| ----------- | --------------------------------------------------- |
| Proprietary | Source code is closed; usage restricted by EULA     |
| Open source | Source code is available; usage governed by license |
| GPL         | Derivative works must also be open source           |
| MIT         | Permissive; can use, modify, and distribute freely  |
| Apache      | Permissive; requires attribution and license notice |

## Additional Practice Questions

31. Write a Python function that implements a linked list with append, delete, and search methods.
    What is the time complexity of each?

32. Explain the difference between a syntax error, a logic error, and a runtime error. Give a Python
    example of each.

33. Design a test plan for a vending machine program. Include test cases for normal operation,
    boundary conditions, and error handling.

34. Explain three advantages of test-driven development. Give a scenario where TDD would be
    particularly beneficial.

35. Write a Python decorator that measures the execution time of a function.

36. Compare the waterfall and agile methodologies. For each, give a type of project where it is the
    better choice.

37. Explain what cyclomatic complexity is and why keeping it low is important.

38. Write a Python function that implements binary search on a sorted list. Include unit tests that
    cover normal, boundary, and error cases.

---

## Common Pitfalls

1. **Choosing the wrong paradigm:** OOP is not always the best choice. For data transformation
   tasks, functional programming may be cleaner.

2. **Ignoring non-functional requirements:** Performance, security, and usability are as important
   as functionality.

3. **Insufficient testing:** Boundary values are where most bugs occur. Always test at the edges of
   valid ranges.

4. **Poor encapsulation:** Making all attributes public defeats the purpose of OOP. Use private
   attributes with getter/setter methods.

5. **Not handling exceptions:** Programs should gracefully handle unexpected inputs without
   crashing.

6. **Confusing stack and queue operations.** Stack is LIFO (push/pop from the same end). Queue is
   FIFO (enqueue at back, dequeue from front).

7. **Not validating inputs.** Always check that inputs are within expected ranges and of the correct
   type before processing.

8. **Writing tests that only test the happy path.** Edge cases and invalid inputs must also be
   tested.

---

## Practice Questions

1. Compare the waterfall and agile software development methodologies.

2. Design a class diagram for a library management system with classes for Book, Member, and Loan.

3. Write a Python function that implements a queue using a list, with enqueue and dequeue
   operations.

4. Explain the four pillars of OOP with examples.

5. Write a Haskell function that takes a list of integers and returns a new list with only the
   positive values.

6. Describe three differences between black-box and white-box testing.

7. Draw a use case diagram for an online shopping system with at least three actors and five use
   cases.

8. Write pseudocode for a binary search algorithm and explain its time complexity.

9. Explain the difference between functional and imperative programming paradigms. Give an example
   where each would be more appropriate.

10. Write a Python class `LinkedList` with methods `append`, `delete`, and `search`. What is the
    time complexity of each operation?

11. Write a Python function that validates a password according to the following rules: at least 8
    characters, contains at least one uppercase letter, one lowercase letter, and one digit.

12. Explain what is meant by test-driven development. Describe the cycle: red, green, refactor.

13. A function `calculateGrade(score)` returns "A" for scores 70-100, "B" for 50-69, "C" for 40-49,
    and "Fail" for 0-39. Using boundary value analysis, identify all test cases.

14. Write a Haskell function `reverseList` that reverses a list recursively. Prove that it
    terminates.

15. Explain how inheritance promotes code reuse. Write a Python example with at least three levels
    of inheritance.

16. Write pseudocode for a procedure that determines whether a string is a palindrome.

17. Explain the difference between a syntax error, a logic error, and a runtime error. Give an
    example of each in Python.

18. Describe three advantages and two disadvantages of agile development compared to the waterfall
    model.
