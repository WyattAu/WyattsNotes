---
id: inheritance-polymorphism
title: Inheritance and Polymorphism
description:
  Java OOP — inheritance, polymorphism, abstract classes, interfaces, and design principles.
slug: inheritance-polymorphism
---

## Inheritance

Inheritance allows a class (subclass) to extend another class (superclass), acquiring its fields and
methods. The `extends` keyword establishes an "is-a" relationship. Java supports **single class
inheritance** — a class can extend exactly one superclass — but can implement multiple interfaces.

### The `extends` Keyword

```java
public class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating");
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age); // must be first statement
        this.breed = breed;
    }

    @Override
    public void eat() {
        System.out.println(getName() + " the " + breed + " is eating kibble");
    }
}
```

### Method Overriding with `@Override`

A subclass can override a non-final, non-static method of its superclass. The `@Override` annotation
tells the compiler to verify that you are actually overriding a superclass method. If you misspell
the method name or get the signature wrong, the compiler will report an error instead of silently
creating an overloaded method.

```java
public class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println(getName() + " is chewing");
    }

    // Compiler error if Animal.eat() does not exist
    // @Override
    // public void eet() { }
}
```

**Rules for overriding:**

- The method must have the same name, return type, and parameter list.
- The access level cannot be more restrictive (can widen, not narrow).
- Cannot override `static`, `final`, or `private` methods (static methods are hidden, not
  overridden).
- Cannot throw checked exceptions that are broader than the superclass method's exceptions (can
  narrow, not widen).

### The `super` Keyword

`super` has two uses: calling a superclass constructor and accessing a superclass member (field or
method).

```java
public class Labrador extends Dog {
    private boolean isGuideDog;

    public Labrador(String name, int age, String color, boolean isGuideDog) {
        super(name, age, "Labrador " + color); // superclass constructor
        this.isGuideDog = isGuideDog;
    }

    @Override
    public void eat() {
        super.eat(); // calls Dog.eat()
        System.out.println("  (especially guide dog food: " + isGuideDog + ")");
    }
}
```

### Constructors in Inheritance

The first statement of every constructor is either an explicit `super(...)` call or an implicit
`super()` (no-arg constructor). If the superclass has no no-arg constructor, the subclass **must**
explicitly call a superclass constructor with arguments.

```java
public class Base {
    private final int value;

    public Base(int value) {
        this.value = value;
        // No no-arg constructor exists
    }
}

public class Derived extends Base {
    public Derived() {
        super(42); // REQUIRED — Base has no no-arg constructor
    }

    public Derived(int value) {
        super(value); // explicitly calling parameterized constructor
    }
}
```

Constructor execution order: superclass constructor runs first, then subclass fields are
initialized, then subclass constructor body executes. This ensures that the superclass part of the
object is fully constructed before the subclass adds its own state.

```java
public class A {
    public A() {
        System.out.println("A constructor");
    }
}

public class B extends A {
    private static final Logger log = Logger.getLogger(B.class.getName());

    public B() {
        super(); // implicit
        System.out.println("B constructor");
    }
}

new B();
// Output:
// A constructor
// B constructor
```

## Access Modifiers

| Modifier          | Class | Package | Subclass | World |
| ----------------- | ----- | ------- | -------- | ----- |
| `public`          | Yes   | Yes     | Yes      | Yes   |
| `protected`       | Yes   | Yes     | Yes      | No    |
| (package-private) | Yes   | Yes     | No       | No    |
| `private`         | Yes   | No      | No       | No    |

### Package-Private (Default Access)

If you specify no access modifier, the member is accessible within the same package only. This is
often the right choice for implementation details that should be shared among classes in the same
package but hidden from external code.

```java
class PackagePrivateClass { // accessible within same package only
    int packageField;       // accessible within same package only
}
```

### `protected` vs Package-Private

`protected` grants access to subclasses **regardless of package**. This is a wider scope than many
developers expect. Use `protected` only when subclasses genuinely need direct access to the member.

```java
public class Base {
    protected int counter; // visible to subclasses AND same-package classes

    // Prefer protected methods over protected fields
    protected int getCounter() {
        return counter;
    }
}
```

## Polymorphism

### Compile-Time vs Runtime Polymorphism

**Compile-time polymorphism** (method overloading) — the compiler resolves which method to call
based on the static types of the arguments at compile time.

**Runtime polymorphism** (method overriding) — the JVM resolves which method to call based on the
actual type of the object at runtime. This is the polymorphism that matters for the "is-a"
relationship.

```java
Animal animal = new Dog("Rex", 3, "Shepherd");
animal.eat(); // Calls Dog.eat() — runtime dispatch

// The variable type is Animal, but the actual object is Dog
// The JVM calls Dog's overridden eat() method
```

### Virtual Method Dispatch

In Java, all non-static, non-final instance methods are **virtual** by default. When you call a
method on an object reference, the JVM looks up the method in the object's actual class (not the
declared type of the reference). This is called **dynamic dispatch** or **virtual method
invocation**.

The JVM uses a vtable (virtual method table) to implement this efficiently. Each class has a vtable
containing pointers to its virtual methods. When a subclass overrides a method, its vtable entry is
replaced with a pointer to the overriding method.

```java
public class Shape {
    public double area() { return 0; }
}

public class Circle extends Shape {
    private final double radius;
    public Circle(double radius) { this.radius = radius; }
    @Override
    public double area() { return Math.PI * radius * radius; }
}

public class Rectangle extends Shape {
    private final double width, height;
    public Rectangle(double w, double h) { width = w; height = h; }
    @Override
    public double area() { return width * height; }
}

// Runtime dispatch in action
Shape s = Math.random() &gt; 0.5 ? new Circle(5) : new Rectangle(3, 4);
s.area(); // The JVM calls the correct area() based on the actual object type
```

### Dynamic Binding and `final`

The `final` keyword on a method prevents overriding and allows the JIT compiler to devirtualize the
call — it can inline the method at the call site because it knows no subclass will override it. This
can improve performance in hot paths.

```java
public class Point {
    private final double x, y;

    public Point(double x, double y) { this.x = x; this.y = y; }

    // JIT can inline this — no subclass can override it
    public final double distanceTo(Point other) {
        double dx = this.x - other.x;
        double dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
```

## Abstract Classes

An abstract class is a class declared with the `abstract` keyword. It may contain abstract methods
(declared without a body) and concrete methods. You cannot instantiate an abstract class directly.

```java
public abstract class Shape {
    private final String color;

    protected Shape(String color) {
        this.color = color;
    }

    // Abstract method — subclasses must implement
    public abstract double area();
    public abstract double perimeter();

    // Concrete method — subclasses inherit
    public String getColor() {
        return color;
    }

    // Template method pattern
    public void describe() {
        System.out.printf("Shape: %s, Area: %.2f, Perimeter: %.2f%n",
                color, area(), perimeter());
    }
}

public class Triangle extends Shape {
    private final double a, b, c;

    public Triangle(double a, double b, double c, String color) {
        super(color);
        this.a = a; this.b = b; this.c = c;
    }

    @Override
    public double area() {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    @Override
    public double perimeter() {
        return a + b + c;
    }
}
```

### When to Use Abstract Classes

Use abstract classes when:

- You want to share code among closely related classes (common fields, utility methods).
- You need to declare fields that subclasses will use.
- You want to use the template method pattern (base class defines the algorithm skeleton, subclasses
  fill in steps).
- You need to control access to state (fields can be `private`).

Abstract classes provide "is-a" semantics with shared implementation. Interfaces provide "can-do"
semantics with no shared state (prior to Java 8).

## Interfaces

An interface defines a contract that implementing classes must fulfill. Since Java 8, interfaces can
have default methods, static methods, and (since Java 9) private methods.

### Interface Evolution

```java
public interface Drawable {
    // Abstract method — implementing classes must provide an implementation
    void draw();

    // Default method — provides a default implementation (Java 8+)
    default void drawWithBorder(int borderWidth) {
        System.out.println("Drawing border of width " + borderWidth);
        draw();
    }

    // Static method — belongs to the interface, not implementing instances (Java 8+)
    static void drawAll(Drawable[] drawables) {
        for (Drawable d : drawables) {
            d.draw();
        }
    }

    // Private method — helper for default methods (Java 9+)
    private void logDraw() {
        System.out.println("Drawing performed");
    }
}
```

### Functional Interfaces

A functional interface has exactly one abstract method. It can be used as the target of a lambda
expression. The `@FunctionalInterface` annotation is optional but recommended — the compiler will
verify the constraint.

```java
@FunctionalInterface
public interface Transformer&lt;T, R&gt; {
    R transform(T input);
}

// Lambda usage
Transformer&lt;String, Integer&gt; lengthExtractor = String::length;
int len = lengthExtractor.transform("hello"); // 5
```

Built-in functional interfaces in `java.util.function`:

| Interface                 | Abstract Method   | Signature       |
| ------------------------- | ----------------- | --------------- |
| `Predicate&lt;T&gt;`      | `boolean test(T)` | T -&gt; boolean |
| `Function&lt;T,R&gt;`     | `R apply(T)`      | T -&gt; R       |
| `Consumer&lt;T&gt;`       | `void accept(T)`  | T -&gt; void    |
| `Supplier&lt;T&gt;`       | `T get()`         | () -&gt; T      |
| `UnaryOperator&lt;T&gt;`  | `T apply(T)`      | T -&gt; T       |
| `BinaryOperator&lt;T&gt;` | `T apply(T, T)`   | (T,T) -&gt; T   |
| `BiFunction&lt;T,U,R&gt;` | `R apply(T, U)`   | (T,U) -&gt; R   |

### Multiple Inheritance of Interfaces

A class can implement multiple interfaces. If two interfaces declare the same default method, the
implementing class must resolve the conflict:

```java
interface Walkable {
    default void move() { System.out.println("Walking"); }
}

interface Swimmable {
    default void move() { System.out.println("Swimming"); }
}

// Must override to resolve conflict
class Duck implements Walkable, Swimmable {
    @Override
    public void move() {
        Walkable.super.move(); // explicitly choose one
    }
}
```

If a class extends a superclass and implements an interface that both define a method with the same
signature, the **superclass method wins** (class wins over interface). This is called "class-first"
rule.

## Composition Over Inheritance

Inheritance creates tight coupling between superclass and subclass. Changes to the superclass can
break subclasses in unexpected ways. Composition — building complex objects from simpler ones —
provides flexibility and loose coupling.

```java
// INHERITANCE — tight coupling
public class FlyingCar extends Car {
    @Override
    public void drive() {
        super.drive();
        fly();
    }
    private void fly() { /* ... */ }
}

// COMPOSITION — loose coupling, flexible
public class FlyingVehicle {
    private final GroundNavigation groundNav = new GroundNavigation();
    private final AirNavigation airNav = new AirNavigation();

    public void drive() { groundNav.navigate(); }
    public void fly() { airNav.navigate(); }
}
```

**Favor composition when:**

- The "is-a" relationship does not hold cleanly.
- You need behavior from multiple sources (Java's single inheritance limits this).
- Subclasses would override most superclass methods anyway.
- You need runtime flexibility (swap implementations).

**Use inheritance when:**

- The "is-a" relationship is clear and stable.
- You genuinely want to share implementation code.
- The superclass is part of a framework/library that expects extension (e.g., `HttpServlet`).
- You need polymorphic behavior via virtual dispatch.

## Liskov Substitution Principle

The Liskov Substitution Principle (LSP) states that if S is a subtype of T, then objects of type T
may be replaced with objects of type S without altering any of the desirable properties of the
program. In practical terms: a subclass must be usable anywhere the superclass is expected.

```java
// LSP VIOLATION
public class Rectangle {
    private int width, height;

    public void setWidth(int w) { this.width = w; }
    public void setHeight(int h) { this.height = h; }
    public int getArea() { return width * height; }
}

// A square IS a rectangle geometrically, but NOT behaviorally
public class Square extends Rectangle {
    @Override
    public void setWidth(int w) {
        super.setWidth(w);
        super.setHeight(w); // breaks the LSP contract
    }

    @Override
    public void setHeight(int h) {
        super.setHeight(h);
        super.setWidth(h);
    }
}

// Code that works with Rectangle breaks with Square
void resize(Rectangle r, int w, int h) {
    r.setWidth(w);
    r.setHeight(h);
    assert r.getArea() == w * h; // FAILS for Square!
}
```

:::info
The classic Rectangle/Square example demonstrates that behavioral subtyping is stricter than
structural subtyping. Just because a class can be made to extend another does not mean it should. If
a subclass must violate the superclass's contract to work correctly, use composition instead.
:::

## SOLID Principles Overview

| Principle                     | Guideline                                                           |
| ----------------------------- | ------------------------------------------------------------------- |
| **S** — Single Responsibility | A class should have only one reason to change.                      |
| **O** — Open/Closed           | Open for extension, closed for modification.                        |
| **L** — Liskov Substitution   | Subtypes must be substitutable for their base types.                |
| **I** — Interface Segregation | Prefer many specific interfaces over one general-purpose interface. |
| **D** — Dependency Inversion  | Depend on abstractions, not concretions.                            |

### Single Responsibility Example

```java
// VIOLATION — class does too many things
public class UserService {
    public void saveUser(User user) { /* DB access */ }
    public void sendEmail(User user, String msg) { /* email sending */ }
    public void validateUser(User user) { /* validation */ }
}

// CORRECT — separate responsibilities
public class UserRepository {
    public void save(User user) { /* DB access */ }
}
public class EmailService {
    public void send(String to, String message) { /* email */ }
}
public class UserValidator {
    public void validate(User user) { /* validation */ }
}
```

### Open/Closed Example

```java
// Open for extension (add new shapes) without modifying existing code
public interface AreaCalculator {
    double calculate(Shape shape);
}

public class CircleAreaCalculator implements AreaCalculator {
    @Override
    public double calculate(Shape shape) {
        Circle c = (Circle) shape;
        return Math.PI * c.radius() * c.radius();
    }
}

// Add a new shape without changing existing calculators
public class RectangleAreaCalculator implements AreaCalculator {
    @Override
    public double calculate(Shape shape) {
        Rectangle r = (Rectangle) shape;
        return r.width() * r.height();
    }
}
```

### Dependency Inversion Example

```java
// HIGH-LEVEL module depends on ABSTRACTION, not on LOW-LEVEL detail
public interface DataSource {
    String fetchData(String query);
}

public class DatabaseDataSource implements DataSource {
    @Override
    public String fetchData(String query) { /* SQL */ }
}

public class FileDataSource implements DataSource {
    @Override
    public String fetchData(String query) { /* file read */ }
}

public class ReportService {
    private final DataSource dataSource;

    // Inject the dependency — don't create it here
    public ReportService(DataSource dataSource) {
        this.dataSource = dataSource;
    }
}
```

## Object Casting

### Downcasting and `instanceof`

```java
Animal animal = new Dog("Rex", 3, "Shepherd");

// Upcasting — always safe, implicit
Animal a = animal;

// Downcasting — may fail, requires explicit cast
Dog dog = (Dog) a;        // OK — a actually refers to a Dog
// Cat cat = (Cat) a;     // ClassCastException at runtime

// Safe downcasting with instanceof
if (a instanceof Dog d) {
    d.bark(); // pattern variable d is in scope (Java 16+)
}
```

### Pattern Matching with `switch` (JDK 21)

Java 21 finalized pattern matching for switch, allowing you to match on types directly:

```java
public String describe(Object obj) {
    return switch (obj) {
        case Integer i -&gt; "Integer: " + i;
        case String s when s.length() &gt; 10 -&gt; "Long string: " + s.substring(0, 10) + "...";
        case String s -&gt; "String: " + s;
        case int[] arr -&gt; "Array of " + arr.length + " ints";
        case null -&gt; "null value";
        default -&gt; "Unknown: " + obj.getClass().getSimpleName();
    };
}
```

**Rules for pattern matching in switch:**

- Case labels are matched top-to-bottom. More specific patterns must come before more general ones.
- The `null` case must come first (or be handled with a nullable pattern `case String s` which
  matches non-null strings).
- A `default` case is required if the switch expression does not cover all possible values.
- Guards (`when` clauses) refine pattern matching with boolean conditions.

```java
// Sealed hierarchy with exhaustive pattern matching
public sealed interface Shape permits Circle, Rectangle, Triangle {}
public record Circle(double radius) implements Shape {}
public record Rectangle(double width, double height) implements Shape {}
public record Triangle(double a, double b, double c) implements Shape {}

public double area(Shape shape) {
    return switch (shape) {
        case Circle c -&gt; Math.PI * c.radius() * c.radius();
        case Rectangle r -&gt; r.width() * r.height();
        case Triangle t -&gt; {
            double s = (t.a() + t.b() + t.c()) / 2;
            yield Math.sqrt(s * (s - t.a()) * (s - t.b()) * (s - t.c()));
        }
        // No default needed — sealed interface ensures exhaustive matching
    };
}
```

## Sealed Classes for Restricted Hierarchies

Sealed classes (JDK 17) restrict which classes can extend or implement them. This enables the
compiler to verify exhaustive pattern matching.

```java
public sealed class Expr
    permits Literal, Add, Multiply, Negate {
    // ...
}

public final class Literal extends Expr {
    private final int value;
    public Literal(int value) { this.value = value; }
    public int value() { return value; }
}

public final class Add extends Expr {
    private final Expr left, right;
    public Add(Expr left, Expr right) { this.left = left; this.right = right; }
    public Expr left() { return left; }
    public Expr right() { return right; }
}

public non-sealed class Multiply extends Expr {
    // non-sealed allows further extension
}
```

**Permitted subclass rules:**

- The permitted subclasses must be in the same module (if the sealed class is in a named module) or
  the same package (if in the unnamed module).
- Permitted subclasses must use one of: `final`, `sealed`, or `non-sealed`.
- The sealed class and its permitted subclasses must co-compile (or be in the same compilation
  unit).

## Record Patterns

Record patterns (JDK 21, JEP 440) destructure record instances directly in pattern matching:

```java
record Point(double x, double y) {}
record ColoredPoint(Point point, String color) {}
record Rectangle(ColoredPoint upperLeft, ColoredPoint lowerRight) {}

// Destructure a record
static void printColorOfUpperLeftPoint(Rectangle r) {
    if (r instanceof Rectangle(ColoredPoint(Point(var x, var y), var color), var other)) {
        System.out.println("Upper-left corner: (" + x + "," + y + "), color: " + color);
    }
}

// In switch
static void printGeometry(Object obj) {
    switch (obj) {
        case Point(var x, var y) -&gt;
            System.out.println("Point at (" + x + "," + y + ")");
        case ColoredPoint(Point(var x, var y), var color) -&gt;
            System.out.println("Colored point at (" + x + "," + y + "), color: " + color);
        case Rectangle(ColoredPoint(Point(var x1, var y1), var c1),
                       ColoredPoint(Point(var x2, var y2), var c2)) -&gt;
            System.out.printf("Rectangle from (%.1f,%.1f) to (%.1f,%.1f)%n", x1, y1, x2, y2);
        default -&gt;
            System.out.println("Not a geometric shape");
    }
}
```

### Nested Record Patterns

Record patterns can be nested arbitrarily deep, allowing you to match the internal structure of
complex data:

```java
// Deep nesting
if (r instanceof Rectangle(
        ColoredPoint(Point(var x1, var y1), var c1),
        ColoredPoint(Point(var x2, var y2), var c2))) {
    // All variables are extracted and in scope
}
```

:::info
Record patterns work with any record class. The pattern variables are inferred from the
record components. You can use `var` for type inference or specify the exact type. The number of
pattern components must match the number of record components.
:::

## Common Pitfalls

### Forgetting `super()` in Constructor

```java
public class Derived extends Base {
    public Derived(int value) {
        // BUG — implicit super() calls Base(), but Base(int) is the only constructor
        // Compiler error: constructor Base() not found
    }
}
```

### Overloading vs Overriding Confusion

```java
public class Base {
    public void process(List&lt;String&gt; items) { /* ... */ }
}

public class Derived extends Base {
    // BUG — this is overloading, NOT overriding
    // Parameter type is different (ArrayList vs List)
    public void process(ArrayList&lt;String&gt; items) { /* ... */ }

    // CORRECT overriding
    @Override
    public void process(List&lt;String&gt; items) { /* ... */ }
}
```

### Calling Overridable Methods in Constructor

```java
public class Base {
    public Base() {
        initialize(); // DANGEROUS — calls overridden method before subclass is constructed
    }

    protected void initialize() {
        // subclass may override this
    }
}

public class Derived extends Base {
    private final List&lt;String&gt; data = new ArrayList&lt;&gt;();

    @Override
    protected void initialize() {
        data.add("initialized"); // NullPointerException — data not yet initialized
    }
}

new Derived(); // throws NullPointerException
```

:::warning
Never call an overridable method from a constructor. The subclass constructor has not yet
run, so its fields are uninitialized. If the overridden method accesses subclass fields, you get
`NullPointerException` or incorrect behavior. Mark the method `final` or `private` if you must call
it from a constructor.
:::

### `instanceof` and `null`

```java
// instanceof returns false for null — no NullPointerException
if (obj instanceof String s) {
    // s is non-null here
}

// Safe — no NPE
String result = (obj instanceof String s) ? s.toUpperCase() : "default";
```

### Hiding Static Methods

```java
public class Base {
    public static void describe() { System.out.println("Base"); }
}

public class Derived extends Base {
    // This does NOT override Base.describe() — it HIDES it
    public static void describe() { System.out.println("Derived"); }
}

Base.describe();   // "Base"
Derived.describe(); // "Derived" — static dispatch, not virtual
```

Static method dispatch is based on the declared type, not the actual object type. There is no
polymorphism for static methods. This is why hiding static methods is almost always a mistake — it
creates confusion.

### Fragile Base Class Problem

Changes to a superclass can silently break subclasses. If a new method is added to the superclass
with the same name as a method in the subclass, the subclass method becomes an overload instead of
an override:

```java
// Version 1 of library
public class Base {
    public void process(String s) { /* ... */ }
}

// Your code
public class Derived extends Base {
    public void process(Object o) { /* ... */ } // overload of process(String)
}

// Version 2 of library adds a new method
public class Base {
    public void process(String s) { /* ... */ }
    public void process(Object o) { /* ... */ } // NEW — now shadows Derived.process(Object)!
}

// Your Derived.process(Object) is now never called through Base references
// This is the fragile base class problem
```

### Using Inheritance for Code Reuse Only

If you extend a class solely to reuse its methods but there is no genuine "is-a" relationship, you
are misusing inheritance. Use composition with delegation instead:

```java
// WRONG — Stack is NOT a List (you don't want random access, iteration at arbitrary positions)
public class Stack&lt;E&gt; extends ArrayList&lt;E&gt; {
    public void push(E item) { add(item); }
    public E pop() { return remove(size() - 1); }
    // Problem: user can call add(0, item) or get(5), violating stack semantics
}

// CORRECT — composition
public class Stack&lt;E&gt; {
    private final List&lt;E&gt; items = new ArrayList&lt;&gt;();
    public void push(E item) { items.add(item); }
    public E pop() { return items.remove(items.size() - 1); }
    public boolean isEmpty() { return items.isEmpty(); }
}
```

