---
title: Abstraction and Data Management
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - CS
categories:
  - IB
  - CS
slug: abstraction-and-data-management
---

## Conceptual Models vs Physical Models

A **conceptual model** describes what a system does, what data it manages, and what relationships
exist, without specifying how these are implemented. It focuses on the problem domain and the user's
perspective. Conceptual models are independent of any particular technology, programming language,
or database system.

A **physical model** describes how a system is actually implemented: the specific data structures,
algorithms, storage mechanisms, and hardware configurations used. It focuses on the solution domain
and the developer's perspective.

### Comparison

| Aspect            | Conceptual Model                            | Physical Model                               |
| ----------------- | ------------------------------------------- | -------------------------------------------- |
| Focus             | What the system does                        | How the system is implemented                |
| Audience          | Stakeholders, analysts, end users           | Developers, database administrators          |
| Abstraction level | High                                        | Low                                          |
| Technology        | Technology-independent                      | Technology-specific                          |
| Examples          | ERDs, use case diagrams, data flow diagrams | Schema definitions, file structures, indexes |
| Changes           | Stable (reflects the problem)               | Changes with technology or optimization      |

### Worked Example: Library System

**Conceptual model:** The library has Books and Members. A Member can borrow many Books. A Book can
be borrowed by one Member at a time. A Book has a title, author, ISBN, and availability status. A
Member has a name, member ID, and a list of current loans.

**Physical model:** The Book entity is stored in a MySQL table with columns
`book_id INT PRIMARY KEY AUTO_INCREMENT`, `title VARCHAR(200) NOT NULL`,
`author VARCHAR(100) NOT NULL`, `isbn VARCHAR(13) UNIQUE`, `is_available BOOLEAN DEFAULT TRUE`. The
Member entity is stored in a MySQL table with columns `member_id INT PRIMARY KEY AUTO_INCREMENT`,
`name VARCHAR(100) NOT NULL`. The loan relationship is stored in a junction table `loan` with
columns `loan_id`, `book_id FOREIGN KEY`, and `member_id FOREIGN KEY`.

The conceptual model describes the domain. The physical model describes the implementation. A good
design separates them so that the physical implementation can change (e.g., migrating from MySQL to
PostgreSQL) without requiring changes to the conceptual understanding of the system.

## Data Abstraction

Data abstraction is the principle of separating the specification of what data operations do from
the implementation of how they do it. The user of an abstract data type knows what operations are
available and what they do, but does not know (and does not need to know) how the data is stored or
how the operations are implemented.

### What vs How

**What (the interface):** A stack supports push, pop, peek, isEmpty, and size operations. Push adds
an element to the top. Pop removes and returns the top element. Peek returns the top element without
removing it.

**How (the implementation):** A stack can be implemented using a dynamic array (with an index
tracking the top position) or a linked list (with a head pointer). The array implementation provides
$O(1)$ amortized push and $O(1)$ pop but may need resizing. The linked list implementation provides
$O(1)$ push and $O(1)$ pop with no resizing but has pointer overhead.

The caller of push and pop does not know or care which implementation is used. This is data
abstraction: the "what" is exposed, the "how" is hidden.

### Benefits of Data Abstraction

**Reduced complexity:** The user only needs to understand the interface, not the implementation. A
programmer using a stack does not need to understand memory allocation, pointer arithmetic, or array
resizing.

**Implementation independence:** The implementation can be changed without affecting any code that
uses the abstract data type. If a stack is initially implemented with an array and later changed to
a linked list, no caller code needs to change.

**Encapsulation of invariants:** The implementation enforces the data structure's invariants. A
stack implemented as a class with a private array ensures that external code cannot corrupt the
stack by directly modifying array elements.

**Improved testing:** The interface defines a clear contract that can be tested independently of the
implementation. The same test suite can verify correctness regardless of which implementation is
used.

## Procedural Abstraction

Procedural abstraction is the practice of hiding the implementation details of a procedure or
function behind a well-defined interface. The caller knows the procedure's name, parameters, and
return type, but not the algorithm it uses.

### Procedural Decomposition

Procedural decomposition (also called top-down design) is the process of breaking a complex problem
into a hierarchy of sub-procedures, each of which solves a part of the problem. The main procedure
delegates work to lower-level procedures, which may themselves delegate to even lower-level
procedures.

**Worked example:** A program to calculate and display student grades.

```
PROCEDURE main()
  students ← loadStudentData()
  grades ← calculateGrades(students)
  displayReport(grades)
END PROCEDURE
```

The `main` procedure does not contain any of the actual logic. It delegates to three sub-procedures:
`loadStudentData` handles file I/O, `calculateGrades` handles the computation, and `displayReport`
handles the output. Each sub-procedure can be developed, tested, and modified independently.

```
FUNCTION calculateGrades(students) RETURNS ARRAY
  FOR i ← 0 TO LENGTH(students) - 1
    total ← 0
    FOR j ← 0 TO LENGTH(students[i].scores) - 1
      total ← total + students[i].scores[j]
    END FOR
    students[i].average ← total / LENGTH(students[i].scores)
    IF students[i].average >= 90
      THEN students[i].grade ← "A"
    ELSE IF students[i].average >= 80
      THEN students[i].grade ← "B"
    ELSE IF students[i].average >= 70
      THEN students[i].grade ← "C"
    ELSE IF students[i].average >= 60
      THEN students[i].grade ← "D"
    ELSE
      students[i].grade ← "F"
    END IF
  END FOR
  RETURN students
END FUNCTION
```

The `calculateGrades` function can be further decomposed: the average calculation could be a
separate function, and the grade assignment could be a separate function. The level of decomposition
is a judgment call: too little decomposition makes the code monolithic; too much decomposition
creates trivial functions that add complexity without benefit.

## Abstract Data Types (ADTs)

### Specification vs Implementation

An Abstract Data Type is defined by two components:

**Specification:** The public interface -- the set of operations, their names, parameters, return
types, preconditions, and postconditions. The specification defines the contract between the ADT and
its users.

**Implementation:** The internal representation of the data and the algorithms that implement the
operations. The implementation is hidden from users and can be changed without affecting the
specification.

### ADT Example: Stack

**Specification:**

| Operation    | Precondition       | Postcondition                                            |
| ------------ | ------------------ | -------------------------------------------------------- |
| `push(item)` | Stack is not full  | `item` is on top; size increases by 1                    |
| `pop()`      | Stack is not empty | Top element is removed and returned; size decreases by 1 |
| `peek()`     | Stack is not empty | Returns top element; stack is unchanged                  |
| `isEmpty()`  | None               | Returns TRUE if size is 0, FALSE otherwise               |
| `size()`     | None               | Returns the number of elements in the stack              |

**Implementation (array-based):**

```
CLASS Stack
  PRIVATE items : ARRAY[0 : MAX_SIZE - 1] OF INTEGER
  PRIVATE top : INTEGER

  PUBLIC CONSTRUCTOR Stack()
    top ← -1
  END CONSTRUCTOR

  PUBLIC PROCEDURE push(item)
    IF top = MAX_SIZE - 1
      THEN OUTPUT "Stack overflow"
    ELSE
      top ← top + 1
      items[top] ← item
    END IF
  END PROCEDURE

  PUBLIC FUNCTION pop() RETURNS INTEGER
    IF isEmpty()
      THEN
        OUTPUT "Stack underflow"
        RETURN -1
      END IF
    result ← items[top]
    top ← top - 1
    RETURN result
  END FUNCTION

  PUBLIC FUNCTION peek() RETURNS INTEGER
    IF isEmpty()
      THEN RETURN -1
    END IF
    RETURN items[top]
  END FUNCTION

  PUBLIC FUNCTION isEmpty() RETURNS BOOLEAN
    RETURN top = -1
  END FUNCTION

  PUBLIC FUNCTION size() RETURNS INTEGER
    RETURN top + 1
  END FUNCTION
END CLASS
```

**Implementation (linked-list-based):**

```
CLASS Node
  PUBLIC data : INTEGER
  PUBLIC next : Node
END CLASS

CLASS LinkedListStack
  PRIVATE head : Node
  PRIVATE count : INTEGER

  PUBLIC CONSTRUCTOR LinkedListStack()
    head ← NIL
    count ← 0
  END CONSTRUCTOR

  PUBLIC PROCEDURE push(item)
    newNode ← new Node
    newNode.data ← item
    newNode.next ← head
    head ← newNode
    count ← count + 1
  END PROCEDURE

  PUBLIC FUNCTION pop() RETURNS INTEGER
    IF isEmpty()
      THEN RETURN -1
    END IF
    result ← head.data
    head ← head.next
    count ← count - 1
    RETURN result
  END FUNCTION

  PUBLIC FUNCTION peek() RETURNS INTEGER
    IF isEmpty()
      THEN RETURN -1
    END IF
    RETURN head.data
  END FUNCTION

  PUBLIC FUNCTION isEmpty() RETURNS BOOLEAN
    RETURN head = NIL
  END FUNCTION

  PUBLIC FUNCTION size() RETURNS INTEGER
    RETURN count
  END FUNCTION
END CLASS
```

Both implementations satisfy the same specification. Code that uses `Stack` via its public interface
(push, pop, peek, isEmpty, size) works identically with either implementation. The choice of
implementation affects performance characteristics (array-based has better cache locality;
linked-list-based has no size limit) but not correctness.

## Encapsulation and Information Hiding

### Encapsulation

Encapsulation is the bundling of data (attributes) and the methods that operate on that data into a
single unit. In object-oriented programming, this unit is a class. Encapsulation restricts direct
access to some of the object's components, typically by making attributes private and exposing only
public methods.

### Information Hiding

Information hiding is the design principle that the internal details of a module should be hidden
from other modules. Only the essential interface is exposed. The implementation can change without
affecting any code that depends only on the interface.

**Practical benefits:**

**Protection against invalid state:** If a bank account's balance is private and can only be
modified through `deposit()` and `withdraw()` methods, external code cannot set the balance to a
negative value directly. The methods enforce business rules (e.g., withdraw cannot exceed balance).

**Reduced coupling:** A module that depends only on another module's interface is loosely coupled to
it. Changes to the implementation do not propagate. This makes the system easier to maintain and
extend.

**Localized debugging:** When a bug is found in the stack implementation, the developer knows to
look inside the Stack class, not in the code that calls push and pop. The bug is confined to a
single location.

**Parallel development:** Teams can work on different modules simultaneously as long as they agree
on interfaces. One team implements the Stack class; another team writes code that uses it. They only
need to coordinate on the interface, not on the implementation details.

## Classes as Abstractions

### Structure of a Class

A class defines a template for creating objects. It encapsulates:

**Attributes:** The data stored in each object (also called fields, properties, or instance
variables).

**Methods:** The operations that can be performed on the object (also called functions or
behaviors).

**Constructors:** Special methods that initialize a new object when it is created.

**Access modifiers:** Keywords that control the visibility of attributes and methods.

### Access Modifiers

| Modifier    | Visibility                                 | Purpose                                        |
| ----------- | ------------------------------------------ | ---------------------------------------------- |
| `PUBLIC`    | Accessible from anywhere                   | Defines the interface exposed to other code    |
| `PRIVATE`   | Accessible only within the class           | Hides implementation details                   |
| `PROTECTED` | Accessible within the class and subclasses | Allows subclass access while hiding externally |

### Worked Example: BankAccount Class

```
CLASS BankAccount
  PRIVATE accountNumber : STRING
  PRIVATE balance : FLOAT
  PRIVATE ownerName : STRING

  PUBLIC CONSTRUCTOR BankAccount(accNum, owner, initialBalance)
    accountNumber ← accNum
    ownerName ← owner
    IF initialBalance >= 0
      THEN balance ← initialBalance
      ELSE balance ← 0
    END IF
  END CONSTRUCTOR

  PUBLIC PROCEDURE deposit(amount)
    IF amount > 0
      THEN balance ← balance + amount
    END IF
  END PROCEDURE

  PUBLIC FUNCTION withdraw(amount) RETURNS BOOLEAN
    IF amount > 0 AND amount <= balance
      THEN
        balance ← balance - amount
        RETURN TRUE
      END IF
    RETURN FALSE
  END FUNCTION

  PUBLIC FUNCTION getBalance() RETURNS FLOAT
    RETURN balance
  END FUNCTION

  PUBLIC FUNCTION getAccountNumber() RETURNS STRING
    RETURN accountNumber
  END FUNCTION
END CLASS
```

The balance is private and can only be modified through deposit and withdraw. The withdraw method
enforces the rule that you cannot withdraw more than your balance. The constructor enforces that the
initial balance cannot be negative.

## Interfaces and APIs

### Interfaces

An interface defines a contract that a class must fulfill. It specifies method signatures (names,
parameters, return types) without providing implementations. A class that implements an interface
must provide concrete implementations for all methods defined in the interface.

```
INTERFACE Sortable
  FUNCTION compare(item) RETURNS INTEGER
END INTERFACE

CLASS Student IMPLEMENTS Sortable
  PRIVATE name : STRING
  PRIVATE grade : FLOAT

  PUBLIC FUNCTION compare(other) RETURNS INTEGER
    IF grade > other.grade
      THEN RETURN 1
    ELSE IF grade < other.grade
      THEN RETURN -1
    ELSE RETURN 0
    END IF
  END FUNCTION
END CLASS
```

Interfaces enable polymorphism: any class that implements the `Sortable` interface can be used by
sorting algorithms without the algorithm needing to know the specific class.

### Application Programming Interfaces (APIs)

An API is a set of rules and protocols that allows different software components to communicate. An
API defines the endpoints, request formats, response formats, and authentication mechanisms that
external code must use to interact with a service.

**Types of APIs:**

| Type         | Description                                                   | Example                     |
| ------------ | ------------------------------------------------------------- | --------------------------- |
| REST API     | Uses HTTP methods (GET, POST, PUT, DELETE) with JSON payloads | OpenWeatherMap, Twitter API |
| Library API  | Functions and classes provided by a library                   | Python's `requests` library |
| OS API       | Functions provided by the operating system                    | POSIX file I/O, Win32 API   |
| Database API | Protocol for interacting with a database                      | JDBC (Java), SQLite API     |

**API abstraction:** The caller of an API does not need to know how the API is implemented. When you
call `requests.get(url)`, you do not need to know how the HTTP protocol is implemented at the socket
level. The API abstracts away the complexity.

## Top-Down Design and Stepwise Refinement

### Top-Down Design

Top-down design starts with the overall problem and progressively breaks it down into smaller, more
manageable sub-problems. At each level of decomposition, the sub-problems are defined by what they
should accomplish (their specification), not by how they accomplish it (their implementation).

The process continues until each sub-problem is simple enough to be implemented directly as a single
function or procedure.

### Stepwise Refinement

Stepwise refinement is the iterative process of gradually adding detail to a design. At each step, a
high-level description is refined into a more detailed description, until the level of detail is
sufficient for direct implementation.

**Worked example: A program to process student exam results.**

**Level 1 (highest abstraction):**

```
PROCEDURE processResults()
  load data
  calculate statistics
  generate report
END PROCEDURE
```

**Level 2 (refine each sub-procedure):**

```
PROCEDURE processResults()
  students ← loadStudentData("results.csv")
  stats ← calculateStatistics(students)
  generateReport(stats, "report.txt")
END PROCEDURE
```

**Level 3 (refine calculateStatistics):**

```
FUNCTION calculateStatistics(students) RETURNS RECORD
  total ← 0
  highest ← -1
  lowest ← 101
  count ← LENGTH(students)

  FOR i ← 0 TO count - 1
    total ← total + students[i].score
    IF students[i].score > highest
      THEN highest ← students[i].score
    END IF
    IF students[i].score < lowest
      THEN lowest ← students[i].score
    END IF
  END FOR

  stats.average ← total / count
  stats.highest ← highest
  stats.lowest ← lowest
  stats.count ← count

  RETURN stats
END FUNCTION
```

At Level 3, the logic is detailed enough to be translated directly into code. The top-down approach
ensures that the overall structure is correct before details are filled in.

## UML Class Diagrams

### Basics

UML class diagrams are a standard notation for visualizing the structure of object-oriented systems.
They show classes, their attributes, methods, and the relationships between them.

### Class Notation

A class is represented as a rectangle divided into three compartments:

1. **Top compartment:** Class name (bold, centered)
2. **Middle compartment:** Attributes with types and visibility
3. **Bottom compartment:** Methods with parameters, return types, and visibility

Visibility prefixes: `+` (public), `-` (private), `#` (protected)

```
+-----------------------+
|        Student         |
+-----------------------+
| - studentID: INTEGER  |
| - name: STRING        |
| - gpa: FLOAT          |
+-----------------------+
| + getGPA(): FLOAT     |
| + setName(n: STRING)  |
| + getName(): STRING   |
+-----------------------+
```

### Relationship Types

| Relationship | UML Notation              | Description                                                   |
| ------------ | ------------------------- | ------------------------------------------------------------- |
| Association  | Solid line                | General relationship between two classes                      |
| Aggregation  | Hollow diamond on one end | "Has-a" relationship, weak ownership                          |
| Composition  | Filled diamond on one end | "Has-a" relationship, strong ownership (lifecycle dependency) |
| Inheritance  | Hollow triangle arrow     | "Is-a" relationship, generalization                           |
| Dependency   | Dashed arrow              | One class uses another temporarily                            |

### Worked Example: School System

```
+------------------+       +------------------+
|     Teacher      |       |     Student      |
+------------------+       +------------------+
| - teacherID: INT |1    * | - studentID: INT |
| - name: STRING   |<>-----| - name: STRING   |
| - department: STR|       | - gpa: FLOAT     |
+------------------+       +------------------+
| + getName(): STR |       | + getGPA(): FLT  |
+------------------+       +------------------+
        | 1                        | *
        |                          |
        | *                        | *
+------------------+       +------------------+
|     Course       |       |   Enrollment     |
+------------------+       +------------------+
| - courseID: INT  |       | - grade: STRING  |
| - title: STRING  |       +------------------+
| - credits: INT   |       | + getGrade(): STR|
+------------------+       +------------------+
| + getTitle(): STR|
+------------------+
```

Teacher aggregates Courses (a teacher can have many courses). Student is associated with Enrollment
(a student has many enrollments). Course is associated with Enrollment (a course has many
enrollments). The Enrollment table is the junction table for the many-to-many relationship between
Student and Course.

## Inheritance and Polymorphism as Abstraction Mechanisms

### Inheritance

Inheritance allows a class (subclass/child) to acquire the attributes and methods of another class
(superclass/parent). The subclass extends the superclass by adding new attributes and methods or by
overriding existing methods.

**Purpose as abstraction:** Inheritance abstracts common properties and behaviors into a superclass.
Instead of duplicating code across multiple classes, the shared code is defined once in the
superclass and inherited by all subclasses.

```
CLASS Shape
  PRIVATE color : STRING

  PUBLIC CONSTRUCTOR Shape(c)
    color ← c
  END CONSTRUCTOR

  PUBLIC FUNCTION area() RETURNS FLOAT
    RETURN 0
  END FUNCTION

  PUBLIC FUNCTION getAreaDescription() RETURNS STRING
    RETURN "Area: " + area()
  END FUNCTION
END CLASS

CLASS Rectangle EXTENDS Shape
  PRIVATE width : FLOAT
  PRIVATE height : FLOAT

  PUBLIC CONSTRUCTOR Rectangle(w, h, c)
    SUPER(c)
    width ← w
    height ← h
  END CONSTRUCTOR

  PUBLIC FUNCTION area() RETURNS FLOAT
    RETURN width * height
  END FUNCTION
END CLASS

CLASS Circle EXTENDS Shape
  PRIVATE radius : FLOAT

  PUBLIC CONSTRUCTOR Circle(r, c)
    SUPER(c)
    radius ← r
  END CONSTRUCTOR

  PUBLIC FUNCTION area() RETURNS FLOAT
    RETURN 3.14159 * radius * radius
  END FUNCTION
END CLASS
```

### Polymorphism

Polymorphism (meaning "many forms") allows objects of different classes to be treated through a
common interface. When a method is called on a superclass reference, the actual method that executes
depends on the type of the object at runtime.

**Purpose as abstraction:** Polymorphism allows the caller to interact with a hierarchy of classes
through a single interface without knowing the specific class of each object. The caller calls
`shape.area()` without knowing or caring whether the shape is a Rectangle or a Circle.

```
shapes ← ARRAY[0..2] OF Shape
shapes[0] ← new Rectangle(5, 3, "red")
shapes[1] ← new Circle(2, "blue")
shapes[2] ← new Rectangle(10, 10, "green")

FOR i ← 0 TO 2
  OUTPUT shapes[i].getAreaDescription()
END FOR
```

Output:

```
Area: 15
Area: 12.56636
Area: 100
```

The `getAreaDescription()` method is defined in `Shape` and calls `area()`. Because `area()` is
overridden in both `Rectangle` and `Circle`, the correct version is called for each object at
runtime. This is **runtime polymorphism** (also called dynamic dispatch or late binding).

### Abstract Classes

An abstract class is a class that cannot be instantiated directly. It may contain abstract methods
(methods without implementations) that must be implemented by concrete subclasses.

```
ABSTRACT CLASS Animal
  ABSTRACT FUNCTION speak() RETURNS STRING

  PUBLIC FUNCTION introduce() RETURNS STRING
    RETURN "I say " + speak()
  END FUNCTION
END CLASS

CLASS Dog EXTENDS Animal
  PUBLIC FUNCTION speak() RETURNS STRING
    RETURN "Woof"
  END FUNCTION
END CLASS

CLASS Cat EXTENDS Animal
  PUBLIC FUNCTION speak() RETURNS STRING
    RETURN "Meow"
  END FUNCTION
END CLASS
```

The `speak()` method is abstract in `Animal` and must be implemented by every concrete subclass. The
`introduce()` method is concrete and inherited by all subclasses. This enforces a common interface
while allowing each subclass to provide its own behavior.

## Data Modeling Concepts

### Entities and Attributes

Data modeling is the process of defining the data structures that a system requires. The fundamental
concepts are entities (things of interest), attributes (properties of entities), and relationships
(associations between entities).

### Modeling the Real World

Effective data modeling requires identifying the entities in the problem domain, determining their
attributes, and establishing the relationships between them. The process is iterative: the initial
model is refined as the understanding of the problem domain deepens.

**Worked example: Modeling a bookstore.**

Identify entities: Book, Author, Publisher, Customer, Order, OrderItem.

Identify attributes:

- Book: ISBN (PK), title, price, publicationYear, publisherID (FK)
- Author: authorID (PK), name, nationality
- Publisher: publisherID (PK), name, city
- Customer: customerID (PK), name, email, address
- Order: orderID (PK), customerID (FK), orderDate, totalAmount
- OrderItem: orderID (FK), ISBN (FK), quantity, unitPrice (composite PK: orderID + ISBN)

Identify relationships:

- Publisher-Book: 1:M (a publisher publishes many books)
- Author-Book: M:N (an author writes many books; a book has many authors) -- requires junction table
- Customer-Order: 1:M (a customer places many orders)
- Order-OrderItem: 1:M (an order contains many items)
- Book-OrderItem: 1:M (a book appears in many order items)

### From Conceptual to Logical to Physical

The data modeling process moves through three stages:

1. **Conceptual model:** Identify entities, attributes, and relationships without concern for
   implementation. Produce an ERD.
2. **Logical model:** Convert the conceptual model into tables, columns, keys, and constraints.
   Apply normalization rules (1NF, 2NF, 3NF). The logical model is still independent of any specific
   RDBMS.
3. **Physical model:** Translate the logical model into the specific SQL data definition language of
   the target RDBMS. Choose data types, define indexes, optimize for performance.

## Common Pitfalls in Abstraction Design

### Leaky Abstractions

An abstraction is "leaky" when implementation details are exposed to the user, forcing them to
understand the implementation to use the abstraction correctly. For example, if a stack implemented
with an array throws an "array index out of bounds" error, the user must understand that the stack
uses an array internally. A well-designed stack would throw a "stack overflow" error instead,
keeping the array implementation hidden.

### Over-Abstraction

Creating too many layers of abstraction makes the code harder to understand and debug. If a simple
calculation is wrapped in a factory that creates a strategy object that delegates to a provider, the
code becomes unnecessarily complex. Abstraction should be applied where it provides clear benefits:
code reuse, encapsulation, or separation of concerns. A good rule of thumb: if you cannot explain
the purpose of an abstraction layer in one sentence, it may be unnecessary.

### Under-Abstraction

Failing to abstract common patterns leads to code duplication. If the same validation logic appears
in five different functions, it should be extracted into a shared function. If multiple classes
share the same attributes and methods, they should inherit from a common superclass. The "don't
repeat yourself" (DRY) principle is a guideline for identifying where abstraction is needed.

### Breaking Encapsulation

Making attributes public when they should be private violates encapsulation. If a BankAccount class
exposes its balance as a public attribute, external code can modify it directly, bypassing the
deposit and withdraw methods and their validation logic. Always make attributes private and provide
public getter/setter methods where needed.

### Violating the Liskov Substitution Principle

The Liskov Substitution Principle states that a subclass should be usable wherever its superclass is
expected, without altering the correctness of the program. If a Square class extends Rectangle and
overrides `setWidth()` to also set the height (to maintain the square invariant), then a Square
object cannot be used interchangeably with a Rectangle object. Code that calls `setWidth(5)`
followed by `setHeight(10)` on a Rectangle expects the area to be 50, but on a Square the area would
be 100. This is a violation of abstraction: the subclass does not truly behave like its superclass.

### Ignoring Preconditions and Postconditions

An ADT's contract is defined by its preconditions and postconditions. If the documentation says that
`pop()` requires the stack to be non-empty (precondition) and that `pop()` returns the top element
and decreases the size by one (postcondition), both sides must be honored. The caller must not call
`pop()` on an empty stack, and the implementation must correctly return the top element. Violations
on either side lead to bugs that are difficult to trace.
