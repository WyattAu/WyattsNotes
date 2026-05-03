---
title: "Programming and OOP -- Diagnostic Tests"
description: "Diagnostic tests for A-Level CS programming: OOP principles, polymorphism, encapsulation, and SQL queries."
slug: diag-programming
hide_table_of_contents: true
---

# Programming and OOP — Diagnostic Tests

## Unit Tests

### UT-1: OOP Principles and Encapsulation
**Question:** Design a class hierarchy for a library system with a base class `Item` and derived classes `Book`, `DVD`, and `Magazine`. The `Item` class should have private attributes `title`, `item_id`, and `is_available`. Include: (a) a constructor, (b) getter and setter methods demonstrating encapsulation, (c) an abstract method `calculate_late_fee(days)` that each derived class implements differently. Show how polymorphism is used to process a list of mixed items.

**Solution:**

```python
from abc import ABC, abstractmethod

class Item(ABC):
    def __init__(self, title, item_id):
        self.__title = title
        self.__item_id = item_id
        self.__is_available = True

    def get_title(self):
        return self.__title

    def set_title(self, title):
        if isinstance(title, str) and len(title) > 0:
            self.__title = title

    def get_item_id(self):
        return self.__item_id

    def is_available(self):
        return self.__is_available

    def borrow(self):
        if self.__is_available:
            self.__is_available = False
            return True
        return False

    def return_item(self):
        self.__is_available = True

    @abstractmethod
    def calculate_late_fee(self, days):
        pass


class Book(Item):
    def __init__(self, title, item_id, author):
        super().__init__(title, item_id)
        self.__author = author

    def calculate_late_fee(self, days):
        return days * 0.50


class DVD(Item):
    def __init__(self, title, item_id, duration):
        super().__init__(title, item_id)
        self.__duration = duration

    def calculate_late_fee(self, days):
        return days * 1.00


class Magazine(Item):
    def __init__(self, title, item_id, issue_number):
        super().__init__(title, item_id)
        self.__issue_number = issue_number

    def calculate_late_fee(self, days):
        return days * 0.25


items = [
    Book("1984", "B001", "Orwell"),
    DVD("Inception", "D001", 148),
    Magazine("Nature", "M001", 542)
]

for item in items:
    print(f"{item.get_title()}: late fee for 5 days = {item.calculate_late_fee(5)}")
```

Encapsulation is demonstrated by: (1) private attributes (`__title`, `__item_id`, `__is_available`) accessible only through getter/setter methods, (2) the setter validates input before modifying state, (3) `borrow()` and `return_item()` methods control state transitions.

Polymorphism is demonstrated by: the loop iterates over a list of `Item` references but calls `calculate_late_fee()` on each -- Python dispatches the call to the correct derived class method at runtime (dynamic polymorphism).

---
### UT-2: SQL Queries
**Question:** Given the following relational schema:

```
Student(student_id PK, name, date_of_birth, course_id FK)
Course(course_id PK, course_name, department)
Assessment(assessment_id PK, student_id FK, course_id FK, score, date)
```

Write SQL for: (a) list all students taking Computer Science with their average score, (b) find the student with the highest score in any assessment, (c) list courses where no student has scored below 40.

**Solution:**

(a)
```sql
SELECT s.name, s.student_id, AVG(a.score) AS average_score
FROM Student s
JOIN Course c ON s.course_id = c.course_id
LEFT JOIN Assessment a ON s.student_id = a.student_id
WHERE c.course_name = 'Computer Science'
GROUP BY s.student_id, s.name;
```

(b)
```sql
SELECT s.name, a.score, c.course_name, a.date
FROM Student s
JOIN Assessment a ON s.student_id = a.student_id
JOIN Course c ON a.course_id = c.course_id
WHERE a.score = (SELECT MAX(score) FROM Assessment);
```

(c)
```sql
SELECT c.course_name
FROM Course c
WHERE c.course_id NOT IN (
    SELECT a.course_id
    FROM Assessment a
    WHERE a.score < 40
);
```

Alternative using NOT EXISTS:
```sql
SELECT c.course_name
FROM Course c
WHERE NOT EXISTS (
    SELECT 1
    FROM Assessment a
    WHERE a.course_id = c.course_id AND a.score < 40
);
```

---
### UT-3: Relational Database Normalisation
**Question:** The following table has update anomalies:

| OrderID | CustomerName | CustomerCity | Product | Quantity | Price |
|---------|-------------|-------------|---------|----------|-------|
| 1 | Smith | London | Laptop | 2 | 500 |
| 1 | Smith | London | Mouse | 5 | 20 |
| 2 | Jones | Paris | Laptop | 1 | 500 |
| 3 | Smith | London | Keyboard | 1 | 50 |

(a) Identify the normal form violations. (b) Normalise to 3NF, showing all tables with primary and foreign keys. (c) Explain what anomalies are eliminated at each stage.

**Solution:**

(a) Violations in the unnormalised form (UNF):
- **1NF violation:** The table is already in 1NF (all values are atomic).
- **2NF violation:** Partial dependencies exist. `CustomerName` and `CustomerCity` depend only on part of a composite key. If we use `(OrderID, Product)` as the composite key, `CustomerName` and `CustomerCity` depend only on `OrderID` (partial dependency). Also, `Price` depends only on `Product`, not on the full composite key.
- **3NF violation:** Transitive dependencies exist. `CustomerCity` depends on `CustomerName` (transitively through `CustomerName`).

(b) **Normalisation to 3NF:**

**1NF:** Already in 1NF (atomic values).

**2NF tables:**

Customer(OrderID, CustomerName, CustomerCity)
PK: OrderID

OrderLine(OrderID, Product, Quantity)
PK: (OrderID, Product), FK: OrderID references Customer

Product(Product, Price)
PK: Product

**3NF tables:** Check for transitive dependencies in each 2NF table.

Customer(OrderID, CustomerName, CustomerCity): `CustomerCity` depends on `CustomerName`, not on `OrderID`. This is a transitive dependency. Split into:

CustomerOrder(OrderID, CustomerID)
PK: OrderID, FK: CustomerID references Customer

Customer(CustomerID, CustomerName, CustomerCity)
PK: CustomerID

Final 3NF schema:

- Customer(CustomerID PK, CustomerName, CustomerCity)
- Order(OrderID PK, CustomerID FK)
- Product(Product PK, Price)
- OrderLine(OrderID FK, Product FK, Quantity) -- PK: (OrderID, Product)

(c) **Anomalies eliminated:**
- **2NF eliminates:** Update anomaly (changing Smith's city requires updating multiple rows), insertion anomaly (cannot add a customer without an order), deletion anomaly (deleting an order may lose customer info).
- **3NF eliminates:** Transitive update anomaly (if Smith moves, update only one row in Customer table, not multiple Order rows). Partial dependency anomaly: changing a product price only updates the Product table, not every order containing that product.

## Integration Tests

### IT-1: OOP and File Handling (with Software Engineering)
**Question:** Design a `StudentRecordManager` class that: (a) reads student data from a CSV file, (b) stores records in a suitable data structure, (c) supports adding, deleting, and searching by student ID, (d) writes modified records back to the CSV file. Write pseudocode and explain which testing strategy (black-box or white-box) is more appropriate for each method, with specific test cases.

**Solution:**

```python
import csv

class StudentRecordManager:
    def __init__(self, filename):
        self.__filename = filename
        self.__records = {}

    def load(self):
        with open(self.__filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                self.__records[row['student_id']] = {
                    'name': row['name'],
                    'course': row['course']
                }

    def add(self, student_id, name, course):
        if student_id in self.__records:
            return False
        self.__records[student_id] = {'name': name, 'course': course}
        return True

    def delete(self, student_id):
        if student_id not in self.__records:
            return False
        del self.__records[student_id]
        return True

    def search(self, student_id):
        return self.__records.get(student_id, None)

    def save(self):
        with open(self.__filename, 'w', newline='') as file:
            writer = csv.DictWriter(file, fieldnames=['student_id', 'name', 'course'])
            writer.writeheader()
            for sid, data in self.__records.items():
                writer.writerow({
                    'student_id': sid,
                    'name': data['name'],
                    'course': data['course']
                })
```

**Testing strategies:**

`load()` -- **Black-box testing** with equivalence partitioning:
- Test with empty file (boundary case)
- Test with valid file containing 0, 1, many records
- Test with malformed CSV (missing fields, wrong data types)

`add()` -- **Black-box testing:**
- Add new student with valid data $\to$ expect True
- Add student with existing ID $\to$ expect False
- Add with empty name $\to$ expect False (validation)
- Boundary: max length strings for each field

`delete()` -- **White-box testing** (need to verify internal dictionary state):
- Delete existing ID $\to$ verify removed from `__records`
- Delete non-existent ID $\to$ verify no change to `__records`
- Delete from empty collection

`search()` -- **Black-box testing:**
- Search for existing ID $\to$ return student data
- Search for non-existent ID $\to$ return None
- Case sensitivity of student ID

`save()` -- **Black-box testing:**
- Save after modifications, reload, verify data matches
- Save to non-existent directory $\to$ expect error handling

---
### IT-2: SQL and Programming Integration (with Relational Databases)
**Question:** A school database has tables: `Student(student_id, name, form_group)`, `Subject(subject_id, subject_name, teacher)`, `Enrolment(student_id, subject_id, grade)`. Write Python code using parameterised queries to: (a) enrol a student in a subject, (b) update a student's grade, (c) generate a report showing each student's average grade. Explain why parameterised queries are essential for security.

**Solution:**

```python
import sqlite3

def enrol_student(db, student_id, subject_id):
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO Enrolment (student_id, subject_id, grade) VALUES (?, ?, NULL)",
        (student_id, subject_id)
    )
    db.commit()

def update_grade(db, student_id, subject_id, grade):
    cursor = db.cursor()
    cursor.execute(
        "UPDATE Enrolment SET grade = ? WHERE student_id = ? AND subject_id = ?",
        (grade, student_id, subject_id)
    )
    db.commit()

def generate_report(db):
    cursor = db.cursor()
    cursor.execute("""
        SELECT s.name, s.form_group, AVG(e.grade) AS avg_grade
        FROM Student s
        JOIN Enrolment e ON s.student_id = e.student_id
        WHERE e.grade IS NOT NULL
        GROUP BY s.student_id, s.name, s.form_group
        ORDER BY avg_grade DESC
    """)
    return cursor.fetchall()
```

**Why parameterised queries are essential:**

Without parameterisation (string concatenation), a user could input a student name containing SQL:

```python
name = "'; DROP TABLE Student; --"
query = f"SELECT * FROM Student WHERE name = '{name}'"
```

This would execute: `SELECT * FROM Student WHERE name = ''; DROP TABLE Student; --'`, destroying the table. This is a **SQL injection attack**.

Parameterised queries separate the SQL code from the data. The database driver treats parameters strictly as data values, never as executable SQL code. Even if the input contains SQL syntax, it is treated as a literal string value and cannot alter the query structure.

---
### IT-3: Recursion and Data Structures (with Algorithms)
**Question:** Implement a function that checks whether a binary tree is a valid binary search tree. Then, given the following tree, trace through the algorithm:

```
       10
      /  \
     5    15
    / \   / \
   3   7 12  20
       \
        8
```

State whether this tree is a valid BST and explain why.

**Solution:**

```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def is_valid_bst(node, min_val=float('-inf'), max_val=float('inf')):
    if node is None:
        return True
    if node.val <= min_val or node.val >= max_val:
        return False
    return (is_valid_bst(node.left, min_val, node.val) and
            is_valid_bst(node.right, node.val, max_val))
```

**Trace through the given tree:**

`is_valid_bst(10, -inf, +inf)`:
- $10 \gt -\inf$ and $10 \lt +\inf$: OK
- Check left: `is_valid_bst(5, -inf, 10)`
  - $5 \gt -\inf$ and $5 \lt 10$: OK
  - Check left: `is_valid_bst(3, -inf, 5)`
    - $3 \gt -\inf$ and $3 \lt 5$: OK
    - Both children None: True
  - Check right: `is_valid_bst(7, 5, 10)`
    - $7 \gt 5$ and $7 \lt 10$: OK
    - Left is None: True
    - Check right: `is_valid_bst(8, 7, 10)`
      - $8 \gt 7$ and $8 \lt 10$: OK
      - Both children None: True
    - True
  - True
- Check right: `is_valid_bst(15, 10, +inf)`
  - $15 \gt 10$ and $15 \lt +\inf$: OK
  - Check left: `is_valid_bst(12, 10, 15)`
    - $12 \gt 10$ and $12 \lt 15$: OK
    - Both children None: True
  - Check right: `is_valid_bst(20, 15, +inf)`
    - $20 \gt 15$ and $20 \lt +\inf$: OK
    - Both children None: True
  - True
- True

**Result: This IS a valid BST.** Every node's value is within the valid range defined by its ancestors. Specifically:
- All nodes in the left subtree of 10 are $\lt 10$
- All nodes in the right subtree of 10 are $\gt 10$
- All nodes in the left subtree of 5 are $\lt 5$
- All nodes in the right subtree of 5 are between 5 and 10
- Node 8 (right child of 7) is between 7 and 10: valid

Time complexity: $O(n)$ -- each node is visited exactly once. Space complexity: $O(h)$ where $h$ is the tree height (recursion stack depth).
