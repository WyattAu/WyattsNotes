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

### File Handling

**Sequential files:** Records stored one after another. Read from beginning to end.

**Random-access files:** Records can be accessed directly by their position.

**Example (Python):**

```python
# Writing to a file
with open("data.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("Second line\n")

# Reading from a file
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Appending to a file
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
