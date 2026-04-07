---
title: JETS
date: 2025-05-02T19:29:09.542Z
tags:
  - CS
categories:
  - CS
slug: jets
draft: false
---

# Java Examination Tool Sebset (JETS)

The IB does not expect a specific standard of Java to be taught but a subset of Java called JETS for
students to present OOP concepts

## Conventions

### Styles

| Token               | Conventions        |
| ------------------- | ------------------ |
| Classes identifier  | `CapitalCamelCase` |
| Variable identifier | `camelCase`        |
| Method identifier   | `camelCase`        |
| Constant identifier | `UPPER_CASE`       |

### Ordering

- Main class should be placed at the top
- Constructors should be place as the first method

## Operators Permitted

- Arithmetic
  - `+`
  - `-`
  - `*`
  - `/`
  - `%`
- Relational
  - `==`
  - `!=`
  - `>`
  - `<`
  - `>=`
  - `<=`
- Boolean
  - `!`
  - `&&`
  - `||`

## Types

### Primitive Data Types

Primitive data types are data types other data types are constructed with, these are normally
built-in as standard data types of programming languages, in JETS, these are: | type declaration |
size | range | Standard | Default init value | | :---------------- |
:---------------------------------------: | :--------------------------------------------------: |
:------------------------------------------------------: | :------------------: | | `byte` | 8 bits
| $-128\le n \le 127$ | signed | `0` | | `int` | 32 bits | $-2^{31}\le n \le 2^{31}-1$ | signed |
`0` | | `long` | 64 bits | $-2^{63}\le n \le 2^{63}-1$ | signed | `0` | | `double` | 64 bits |
$-1.8\times 10^{308} \le n \le 1.8\times 10^{308}$ | IEEE 754-1984 (double precision binary
floating-point) | `0.0d` | | `char` | 16 bits | $0 \le n \le 2^{16} -1$ | UTF-16 | `'\u0000'` `'a'`
| | `boolean` | 1 bit (logical) 1 byte (in-practice) | `false` |

```java
byte b = 120 // byte is an 8-bit signed type with range -128 to 127
int i = 1243 // int is a 32-bit signed type with range -2^31 to 2^31-1
long
double
char
boolean
```

## Scopes

### Attribute Scopes

Java access modifiers used in JETS are:

```java
class ClassIdentifier{
  public int n1 = 0; //Accessible by any class
  protected int n2 = 0; //Accessible by any extended class
  private int n3 = 0; //Only accessible by the class
}
```

## Type Casting

Type casting refers to the converting of value to another type:

```java
int n1 = (int)9.8 //9
double n2 = (double)6 //6.0f
byte n3 = (byte)1000 //Signed integer truncated to 8 bits: 1000%256-256 = -24
char n4 = (char)75 //K, from ascii mapping
```

## Error Handling

Error handling refers to the handling of exceptions for functions that:

```java
type funcIdentifier () throws IOException
```

```java
try{ /*commands*/ }
  catch(Exception e){ /*Error condition handle*/ }
```

---

## Object-Oriented Programming Principles

OOP is a programming paradigm that organises code around objects, which are instances of classes.
JETS is designed to demonstrate these core principles.

### Encapsulation

Encapsulation is the bundling of data (attributes) and methods that operate on that data within a
single unit (class), while restricting direct access to some of the object's components.

- **Private attributes** can only be accessed through public methods (getters and setters).
- This protects the internal state of an object from unauthorised or accidental modification.

```java
class Student {
  private String name;
  private int grade;

  public Student(String name, int grade) {
    this.name = name;
    this.grade = grade;
  }

  // Getter
  public String getName() {
    return this.name;
  }

  // Setter with validation
  public void setGrade(int grade) {
    if (grade >= 0 && grade <= 100) {
      this.grade = grade;
    }
  }

  public int getGrade() {
    return this.grade;
  }
}
```

**Exam tip:** In IB exams, encapsulation questions often ask you to identify whether attributes
should be `private` and explain why. Always justify with data protection/validation.

### Inheritance

Inheritance allows a class (subclass/child) to inherit attributes and methods from another class
(superclass/parent). This promotes code reuse and establishes an "is-a" relationship.

```java
class Animal {
  private String name;

  public Animal(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public void speak() {
    // General behaviour
  }
}

class Dog extends Animal {
  private String breed;

  public Dog(String name, String breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Overriding the speak method
  public void speak() {
    System.out.println("Woof");
  }

  public String getBreed() {
    return this.breed;
  }
}
```

**Key concepts:**

- `extends` keyword creates the inheritance relationship.
- `super()` calls the parent class constructor.
- The subclass inherits all `public` and `protected` members of the superclass.
- `private` members are not directly accessible but can be accessed through inherited public
  methods.

### Polymorphism

Polymorphism means "many forms." It allows objects of different classes to be treated through a
common interface.

**Method overriding:** A subclass provides a specific implementation of a method already defined in
its superclass.

```java
class Shape {
  public double area() {
    return 0;
  }
}

class Circle extends Shape {
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  public double area() {
    return 3.14159 * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  private double width;
  private double height;

  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }

  public double area() {
    return this.width * this.height;
  }
}
```

**Method overloading:** Multiple methods with the same name but different parameter lists within the
same class.

```java
class Calculator {
  public int add(int a, int b) {
    return a + b;
  }

  public double add(double a, double b) {
    return a + b;
  }

  public int add(int a, int b, int c) {
    return a + b + c;
  }
}
```

### Abstraction

Abstraction hides complex implementation details and shows only the essential features of an object.
In JETS, this is achieved through abstract classes and interfaces.

```java
abstract class Vehicle {
  private String type;

  public Vehicle(String type) {
    this.type = type;
  }

  // Abstract method — no implementation
  public abstract void move();

  public String getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  public Car() {
    super("Car");
  }

  public void move() {
    System.out.println("Driving on road");
  }
}
```

---

## UML Class Diagrams

UML (Unified Modelling Language) class diagrams are a standard way to represent the structure of OOP
programs. IB exams frequently include UML diagrams and ask you to interpret or construct them.

### Key UML Notation

| Element         | Symbol                                          | Meaning                                    |
| :-------------- | :---------------------------------------------- | :----------------------------------------- |
| Class           | Rectangle with three sections                   | Class name, attributes, methods            |
| `-` (private)   | Minus sign before attribute/method              | Only accessible within the class           |
| `+` (public)    | Plus sign before attribute/method               | Accessible from any class                  |
| `#` (protected) | Hash sign before attribute/method               | Accessible within the class and subclasses |
| Inheritance     | Solid line with hollow arrow pointing to parent | "Is-a" relationship                        |
| Association     | Solid line with arrow                           | "Has-a" relationship                       |
| Aggregation     | Solid line with hollow diamond                  | "Has-a" (weak ownership)                   |
| Composition     | Solid line with filled diamond                  | "Has-a" (strong ownership)                 |

### Example UML Diagram (Text Representation)

```
+------------------+
|     Animal       |
+------------------+
| - name: String   |
+------------------+
| + getName(): Str |
| + speak(): void  |
+------------------+
         ^
         | (extends)
         |
+------------------+
|       Dog        |
+------------------+
| - breed: String  |
+------------------+
| + speak(): void  |
| + getBreed(): Str|
+------------------+
```

---

## Design Patterns (IB Context)

Design patterns are reusable solutions to common programming problems. While the IB does not require
deep knowledge of design patterns, understanding these concepts helps with exam questions.

### Singleton Pattern

Ensures a class has only one instance and provides a global point of access to it.

```java
class DatabaseConnection {
  private static DatabaseConnection instance;
  private String status;

  private DatabaseConnection() {
    this.status = "Connected";
  }

  public static DatabaseConnection getInstance() {
    if (instance == null) {
      instance = new DatabaseConnection();
    }
    return instance;
  }

  public String getStatus() {
    return this.status;
  }
}
```

### Observer Pattern

A one-to-many dependency: when one object (subject) changes state, all its dependents (observers)
are notified and updated automatically. This is relevant to event-driven programming in the IB
syllabus.

---

## Collections and Data Structures in JETS

### Arrays

```java
int[] numbers = new int[5]; // Declare array of 5 integers
int[] values = {1, 2, 3, 4, 5}; // Initialise with values
```

### ArrayList (Dynamic Arrays)

`ArrayList` is not part of the basic JETS subset but appears in IB exam questions:

```java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<String>();
names.add("Alice");
names.add("Bob");
String first = names.get(0); // "Alice"
int size = names.size(); // 2
names.remove(0); // Removes "Alice"
```

### Two-Dimensional Arrays

```java
int[][] matrix = new int[3][3];
matrix[0][0] = 1;
matrix[1][2] = 5;

// Iterating through a 2D array
for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
    System.out.println(matrix[i][j]);
  }
}
```

---

## Control Structures

### Conditional Statements

```java
int score = 85;

if (score >= 90) {
  System.out.println("Grade A");
} else if (score >= 80) {
  System.out.println("Grade B");
} else if (score >= 70) {
  System.out.println("Grade C");
} else {
  System.out.println("Grade D");
}
```

### Loops

```java
// For loop
for (int i = 0; i < 10; i++) {
  System.out.println(i);
}

// While loop
int count = 0;
while (count < 10) {
  System.out.println(count);
  count++;
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
  System.out.println(num);
}
```

---

## Searching and Sorting Algorithms

### Linear Search

Checks each element sequentially until the target is found.

```java
int linearSearch(int[] arr, int target) {
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1; // Not found
}
```

- **Time complexity:** $O(n)$ — worst case checks every element.
- **Best for:** Small or unsorted arrays.

### Binary Search

Divides a sorted array in half repeatedly to find the target. The array **must be sorted**.

```java
int binarySearch(int[] arr, int target) {
  int low = 0;
  int high = arr.length - 1;

  while (low <= high) {
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; // Not found
}
```

- **Time complexity:** $O(\log n)$ — much faster for large sorted arrays.
- **Best for:** Large, sorted arrays.

### Bubble Sort

Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the
wrong order.

```java
void bubbleSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

- **Time complexity:** $O(n^2)$ — slow for large arrays.
- **Space complexity:** $O(1)$ — sorts in place.

### Selection Sort

Finds the minimum element from the unsorted part and places it at the beginning.

```java
void selectionSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap
    int temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
}
```

---

## IB Exam Tips for JETS

1. **Know the access modifiers:** Understand when to use `public`, `private`, and `protected`. Most
   attributes should be `private`; most methods should be `public`.

2. **Constructors come first:** In JETS convention, constructors are placed as the first method in a
   class.

3. **Use `this` keyword:** When a parameter has the same name as an attribute, use `this.attribute`
   to distinguish them.

4. **Read UML diagrams carefully:** Identify the attributes (with types and access modifiers),
   methods, and relationships between classes.

5. **Practise tracing code:** IB exams often include code tracing questions where you must determine
   the output of a given program. Step through the code line by line.

6. **Understand polymorphism:** Be prepared to explain how method overriding works and why it is
   useful.

7. **Be careful with array indices:** Arrays in Java are zero-indexed. `arr.length` gives the number
   of elements, but the last valid index is `arr.length - 1`.
