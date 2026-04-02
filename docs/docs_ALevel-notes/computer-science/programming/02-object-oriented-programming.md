---
title: Object-Oriented Programming
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: object-oriented-programming
---

## 1. Classes and Objects

### Definition

A **class** is a blueprint (template) that defines the structure and behaviour of objects. An
**object** is an **instance** of a class — a concrete entity with specific values for the attributes
defined by the class.

### Python Implementation

```python
class BankAccount:
    def __init__(self, account_number, owner, balance=0.0):
        self._account_number = account_number
        self._owner = owner
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False

    def get_balance(self):
        return self._balance
```

### Class vs Instance

| Concept  | Class                 | Instance (Object)         |
| -------- | --------------------- | ------------------------- |
| Nature   | Template / Blueprint  | Concrete realisation      |
| Number   | One class definition  | Many objects              |
| Creation | Defined by programmer | Created at runtime        |
| Memory   | One copy of methods   | Own copy of instance vars |

---

## 2. Encapsulation

### Definition

**Encapsulation** is the bundling of data (attributes) and methods that operate on that data within
a class, and restricting direct access to internal state.

### Access Modifiers

| Modifier  | Meaning                                | Python convention        |
| --------- | -------------------------------------- | ------------------------ |
| Public    | Accessible from anywhere               | `name`                   |
| Protected | Accessible within class and subclasses | `_name` (convention)     |
| Private   | Accessible only within the class       | `__name` (name mangling) |

```python
class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name

    def set_age(self, age):
        if age >= 0:
            self.__age = age
```

**Benefits of encapsulation:**

1. **Data hiding:** Prevents unauthorised access
2. **Validation:** Input validation through setters
3. **Flexibility:** Internal implementation can change without affecting users
4. **Maintainability:** Reduces coupling between components

:::tip Exam tip In exams, always justify why encapsulation is important. Focus on data integrity
(preventing invalid states) and implementation flexibility. :::

---

## 3. Inheritance

### Definition

**Inheritance** allows a class (subclass/child) to inherit attributes and methods from another class
(superclass/parent), enabling code reuse and establishing an "is-a" relationship.

```python
class Shape:
    def __init__(self, colour):
        self._colour = colour

    def area(self):
        return 0

    def __str__(self):
        return f"{self.__class__.__name__} (colour: {self._colour})"

class Rectangle(Shape):
    def __init__(self, colour, width, height):
        super().__init__(colour)
        self._width = width
        self._height = height

    def area(self):
        return self._width * self._height

class Circle(Shape):
    def __init__(self, colour, radius):
        super().__init__(colour)
        self._radius = radius

    def area(self):
        return 3.14159 * self._radius ** 2
```

### Types of Inheritance

| Type         | Description                   | Python support |
| ------------ | ----------------------------- | -------------- |
| Single       | One child, one parent         | Yes            |
| Multiple     | One child, multiple parents   | Yes            |
| Multilevel   | Chain: A → B → C              | Yes            |
| Hierarchical | One parent, multiple children | Yes            |
| Hybrid       | Combination of the above      | Yes            |

### Method Overriding

A subclass can **override** a method inherited from the superclass by defining a method with the
same name.

```python
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof"

class Cat(Animal):
    def speak(self):
        return "Meow"
```

### The `super()` Function

`super()` calls the parent class's method, enabling extension (not replacement) of inherited
behaviour.

---

## 4. Polymorphism

### Definition

**Polymorphism** (Greek: "many forms") allows objects of different classes to be treated through a
common interface, with the specific behaviour determined at runtime.

### Types of Polymorphism

#### Compile-Time (Static) Polymorphism

Achieved through **method overloading** (multiple methods with the same name but different
parameters). Python does not support method overloading directly, but can simulate it with default
arguments or type checking.

#### Run-Time (Dynamic) Polymorphism

Achieved through **method overriding** and **duck typing**. The actual method called depends on the
object's type at runtime.

```python
def make_speak(animal):
    print(animal.speak())

animals = [Dog(), Cat(), Animal()]
for animal in animals:
    make_speak(animal)
```

Output:

```
Woof
Meow
Some sound
```

**Theorem (Liskov Substitution Principle).** If $S$ is a subtype of $T$, then objects of type $T$
may be replaced with objects of type $S$ without altering any of the desirable properties of the
program.

This means: wherever a superclass object is expected, a subclass object should work correctly.

:::info Board-specific **AQA** requires understanding of classes, objects, inheritance,
polymorphism, encapsulation; uses pseudocode class definitions. **CIE (9618)** covers OOP
principles; may require implementation in a specific language (Python/Pascal). **OCR (A)** requires
class definitions with attributes and methods; constructor/destructor understanding. **Edexcel**
covers OOP with pseudocode; emphasises encapsulation and data hiding. :::

---

## 5. Abstract Classes and Interfaces

### Abstract Classes

An **abstract class** cannot be instantiated and may contain **abstract methods** (methods without
implementation that must be implemented by subclasses).

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass

    @abstractmethod
    def stop_engine(self):
        pass

    def drive(self):
        self.start_engine()
        print("Driving...")
        self.stop_engine()
```

### Interfaces

An **interface** is a contract specifying methods a class must implement, without providing any
implementation. In Python, interfaces are typically simulated using abstract classes with only
abstract methods.

---

## 6. Association, Aggregation, and Composition

### Association

A general relationship between two classes. Objects can exist independently.

```python
class Doctor:
    def __init__(self, name):
        self.name = name
        self.patients = []
```

### Aggregation ("has-a", weak)

A whole-part relationship where parts can exist independently of the whole.

```python
class Department:
    def __init__(self, name):
        self.name = name
        self.teachers = []

class Teacher:
    def __init__(self, name):
        self.name = name
```

### Composition ("has-a", strong)

A whole-part relationship where parts cannot exist without the whole.

```python
class House:
    def __init__(self, address):
        self.address = address
        self.rooms = [Room("living"), Room("bedroom")]

class Room:
    def __init__(self, purpose):
        self.purpose = purpose
```

When a `House` is destroyed, its `Room` objects are also destroyed.

| Relationship | Independence | Lifecycle            | Example            |
| ------------ | ------------ | -------------------- | ------------------ |
| Association  | Independent  | Independent          | Doctor-Patient     |
| Aggregation  | Independent  | Independent          | Department-Teacher |
| Composition  | Dependent    | Part dies with whole | House-Room         |

---

## 7. SOLID Principles

| Principle | Name                  | Description                                         |
| --------- | --------------------- | --------------------------------------------------- |
| S         | Single Responsibility | A class should have one reason to change            |
| O         | Open/Closed           | Open for extension, closed for modification         |
| L         | Liskov Substitution   | Subtypes must be substitutable for their base types |
| I         | Interface Segregation | Clients shouldn't depend on methods they don't use  |
| D         | Dependency Inversion  | Depend on abstractions, not concretions             |

### Example: Single Responsibility

```python
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

class UserRepository:
    def save(self, user):
        pass

class EmailService:
    def send_welcome(self, user):
        pass
```

Each class has a single responsibility.

---

## Problem Set

**Problem 1.** Design a class hierarchy for different types of employees in a company: Manager,
Developer, and Intern. Include a common method `calculate_salary()` with different implementations.

<details>
<summary>Answer</summary>

```python
from abc import ABC, abstractmethod

class Employee(ABC):
    def __init__(self, name, base_salary):
        self.name = name
        self.base_salary = base_salary

    @abstractmethod
    def calculate_salary(self):
        pass

class Manager(Employee):
    def __init__(self, name, base_salary, bonus):
        super().__init__(name, base_salary)
        self.bonus = bonus

    def calculate_salary(self):
        return self.base_salary + self.bonus

class Developer(Employee):
    def __init__(self, name, base_salary, overtime_hours):
        super().__init__(name, base_salary)
        self.overtime_hours = overtime_hours

    def calculate_salary(self):
        return self.base_salary + self.overtime_hours * 50

class Intern(Employee):
    def calculate_salary(self):
        return self.base_salary
```

</details>

**Problem 2.** Explain the difference between a class variable and an instance variable. Give an
example.

<details>
<summary>Answer</summary>

A **class variable** is shared by all instances of the class (defined at the class level). An
**instance variable** is unique to each instance (defined in `__init__`).

```python
class Dog:
    species = "Canis familiaris"  # Class variable (shared)

    def __init__(self, name):
        self.name = name  # Instance variable (unique)
```

`Dog.species` is the same for all dogs. `dog1.name` and `dog2.name` are different.

</details>

**Problem 3.** Explain how polymorphism is demonstrated in the following code:

```python
shapes = [Rectangle("red", 3, 4), Circle("blue", 5)]
for shape in shapes:
    print(shape.area())
```

<details>
<summary>Answer</summary>

The loop iterates over a list of `Shape` objects (actually `Rectangle` and `Circle` instances). When
`shape.area()` is called, Python determines at **runtime** which `area()` method to invoke based on
the actual type of the object:

- For the `Rectangle`: calls `Rectangle.area()` → $3 \times 4 = 12$
- For the `Circle`: calls `Circle.area()` → $\pi \times 25 \approx 78.54$

The same interface (`area()`) produces different behaviour for different types — this is **run-time
polymorphism** (also called **dynamic dispatch**).

</details>

**Problem 4.** A student writes a `Square` class that inherits from `Rectangle`. The `Square`
constructor takes only a `side` parameter. Explain why this might violate the Liskov Substitution
Principle.

<details>
<summary>Answer</summary>

```python
class Square(Rectangle):
    def __init__(self, colour, side):
        super().__init__(colour, side, side)
```

The LSP violation occurs if `Rectangle` allows independent setting of width and height:

```python
r = Square("red", 5)
r.set_width(10)  # If Rectangle has this, width = 10, height = 5
# Now r is no longer a valid square!
```

A `Square` used as a `Rectangle` can be put into an invalid state. This means `Square` is not a
proper subtype of `Rectangle` if `Rectangle` allows mutation of width and height independently.

**Solution:** Use composition instead (Square has-a Rectangle), or make Rectangle immutable, or use
an interface-based approach.

</details>

**Problem 5.** Explain the difference between aggregation and composition with examples.

<details>
<summary>Answer</summary>

**Aggregation (weak "has-a"):** The part can exist independently of the whole. Example: A
`Department` has `Teacher` objects. If the department is dissolved, the teachers still exist and can
join another department.

**Composition (strong "has-a"):** The part cannot exist independently of the whole. Example: A `Car`
has `Engine` and `Wheel` objects. If the car is destroyed, its specific engine and wheels are also
destroyed (they don't make sense independently in this context).

In code: Aggregation passes in existing objects. Composition creates objects internally.

</details>

**Problem 6.** Implement an abstract class `DataStructure` with abstract methods `insert`, `delete`,
and `search`. Then implement it as a `Stack`.

<details>
<summary>Answer</summary>

```python
from abc import ABC, abstractmethod

class DataStructure(ABC):
    @abstractmethod
    def insert(self, value):
        pass

    @abstractmethod
    def delete(self):
        pass

    @abstractmethod
    def search(self, value):
        pass

class Stack(DataStructure):
    def __init__(self):
        self._data = []

    def insert(self, value):
        self._data.append(value)

    def delete(self):
        if self._data:
            return self._data.pop()
        raise Exception("Stack underflow")

    def search(self, value):
        for i in range(len(self._data) - 1, -1, -1):
            if self._data[i] == value:
                return i
        return -1
```

</details>

**Problem 7.** Explain the Open/Closed Principle and give an example of a design that violates it,
then fix it.

<details>
<summary>Answer</summary>

**Violation:**

```python
class AreaCalculator:
    def area(self, shape):
        if shape.type == "rectangle":
            return shape.width * shape.height
        elif shape.type == "circle":
            return 3.14159 * shape.radius ** 2
        # Adding a new shape requires modifying this class!
```

**Fix (open for extension, closed for modification):**

```python
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def area(self):
        return 3.14159 * self.radius ** 2

class AreaCalculator:
    def total_area(self, shapes):
        return sum(s.area() for s in shapes)
```

Adding a new shape requires only adding a new class — no modification to existing code.

</details>

**Problem 8.** What is the output of the following code? Explain the method resolution order.

```python
class A:
    def greet(self):
        return "A"

class B(A):
    def greet(self):
        return "B"

class C(A):
    def greet(self):
        return "C"

class D(B, C):
    pass

print(D().greet())
print(D.__mro__)
```

<details>
<summary>Answer</summary>

Output:

```
B
(<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)
```

Python uses **C3 Linearization** (MRO — Method Resolution Order) to determine the order in which
base classes are searched for methods. For `D(B, C)`:

1. `D` itself → no `greet`
2. `B` → has `greet`, returns "B"

The MRO is D → B → C → A → object. Since `B` has `greet`, the search stops there.

</details>

**Problem 9.** Explain why multiple inheritance can lead to the "diamond problem" and how Python
resolves it.

<details>
<summary>Answer</summary>

The **diamond problem** occurs when a class inherits from two classes that both inherit from the
same base class:

```
    A
   / \
  B   C
   \ /
    D
```

If both `B` and `C` override a method from `A`, which version does `D` inherit?

Python resolves this using **C3 Linearization**, which produces a deterministic, monotonically
increasing order. For `D(B, C)`:

- MRO: D, B, C, A, object
- `B`'s version is preferred over `C`'s

If `D` calls `super().__init__()`, Python follows the MRO, ensuring each class's `__init__` is
called exactly once.

Languages like C++ resolve this differently (requiring explicit disambiguation).

</details>

**Problem 10.** Design a library system with classes for `Book`, `Member`, and `Library`. Use
encapsulation appropriately. Include methods for borrowing and returning books.

<details>
<summary>Answer</summary>

```python
class Book:
    def __init__(self, isbn, title, author):
        self.__isbn = isbn
        self.__title = title
        self.__author = author
        self.__available = True

    def is_available(self):
        return self.__available

    def borrow(self):
        if self.__available:
            self.__available = False
            return True
        return False

    def return_book(self):
        self.__available = True

class Member:
    def __init__(self, member_id, name):
        self.__member_id = member_id
        self.__name = name
        self.__borrowed_books = []

    def borrow_book(self, library, isbn):
        book = library.find_book(isbn)
        if book and book.is_available():
            book.borrow()
            self.__borrowed_books.append(book)
            return True
        return False

    def return_book(self, library, isbn):
        for i, book in enumerate(self.__borrowed_books):
            if book._Book__isbn == isbn:
                book.return_book()
                self.__borrowed_books.pop(i)
                return True
        return False

    def get_borrowed_count(self):
        return len(self.__borrowed_books)

class Library:
    def __init__(self):
        self.__books = {}
        self.__members = {}

    def add_book(self, book):
        self.__books[book._Book__isbn] = book

    def register_member(self, member):
        self.__members[member._Member__member_id] = member

    def find_book(self, isbn):
        return self.__books.get(isbn)
```

</details>

For revision on programming fundamentals, see
[Programming Constructs](/docs/docs_ALevel-notes/computer-science/programming/programming-constructs).
