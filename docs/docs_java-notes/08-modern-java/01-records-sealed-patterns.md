---
title: Records, Sealed Classes, and Pattern Matching
date: 2026-04-03T00:00:00.000Z
tags: ['java']
categories: ['java']
slug: records-sealed-patterns
---

## Records (JEP 395, Java 16)

A record is a transparent carrier for immutable data. The compiler generates the constructor, field
accessors, `equals`, `hashCode`, and `toString` from a single declaration. This eliminates the
single largest source of boilerplate in Java: the dumb data class.

### Syntax and Basic Usage

```java
public record Point(double x, double y) { }

// Usage
var p = new Point(3.0, 4.0);
p.x();  // 3.0 -- accessor method, not a field
p.y();  // 4.0
System.out.println(p);  // Point[x=3.0, y=4.0]
```

The record components (`x`, `y`) are declared in the state space of the class. The compiler
generates a `final` private field for each component, a public accessor method with the same name
(no `get` prefix), and a canonical constructor that assigns each parameter to its corresponding
field. The accessor is a method, not a field access -- this distinction matters for binary
compatibility and for frameworks that rely on JavaBeans conventions.

### The Generated Methods

For `record Point(double x, double y)`, the compiler generates:

```java
public final class Point extends java.lang.Record {
    private final double x;
    private final double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double x() { return this.x; }
    public double y() { return this.y; }

    @Override
    public boolean equals(Object o) {
        return o instanceof Point other
            && Double.compare(this.x, other.x) == 0
            && Double.compare(this.y, other.y) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }

    @Override
    public String toString() {
        return STR."Point[x=\{x}, y=\{y}]";
    }
}
```

The `equals` implementation uses `==` for primitive components and `Objects.equals` for reference
components. This is a structural equality comparison, not identity comparison. The `hashCode`
implementation is consistent with `equals` by contract.

### Compact Constructors

A compact constructor lets you validate or normalize components without repeating the parameter
list:

```java
public record Age(int value) {
    public Age {
        if (value &lt; 0 || value &gt; 150) {
            throw new IllegalArgumentException("Invalid age: " + value);
        }
    }
}
```

The compact constructor does not declare parameters -- it implicitly has access to all record
components. Any assignment to a component in the compact constructor is treated as an assignment to
the corresponding field in the canonical constructor. This means you can normalize values:

```java
public record NormalizedString(String value) {
    public NormalizedString {
        value = value.trim().toLowerCase();
    }
}
```

### Custom Accessors

You can override the default accessor to provide computed or transformed values:

```java
public record Circle(double radius) {
    public double area() {
        return Math.PI * radius * radius;
    }

    // Override the radius accessor to validate on read
    public double radius() {
        if (this.radius &lt; 0) {
            throw new IllegalStateException("Radius cannot be negative");
        }
        return this.radius;
    }
}
```

Overriding an accessor does not change the field storage. The field `radius` is still stored
directly. The accessor intercept is the only change.

### Additional Fields and Methods

Records can have static fields, static methods, and instance methods. They cannot have instance
fields beyond the record components:

```java
public record Money(long cents) {
    private static final long MAX_CENTS = Long.MAX_VALUE / 100;

    public static Money dollars(long dollars) {
        return new Money(dollars * 100);
    }

    public Money add(Money other) {
        return new Money(Math.addExact(this.cents, other.cents));
    }
}
```

Instance fields that are not record components are prohibited because records are shallowly
immutable. Allowing mutable instance state would violate that contract.

### Serialization

Records implement `java.io.Serializable` if they choose to (by declaring `implements Serializable`).
The serialization mechanism is different from regular classes: the canonical constructor is used for
deserialization, which means validation in the compact constructor is enforced during
deserialization. This closes a long-standing attack vector where malicious serialized data could
bypass constructor validation.

```java
public record AuthToken(String token, long expiryEpochMs) implements Serializable {
    public AuthToken {
        if (token == null || token.isBlank()) {
            throw new IllegalArgumentException("Token must not be blank");
        }
    }
    // During deserialization, the compact constructor runs.
    // A crafted serialized blob with a blank token will be rejected.
}
```

### Records vs Lombok `@Value`

| Feature                 | Records                | Lombok `@Value`                  |
| ----------------------- | ---------------------- | -------------------------------- |
| Language support        | Built-in since Java 16 | Annotation processor (library)   |
| Equals/hashCode         | Structural, generated  | Structural, generated            |
| Mutability              | Enforced immutable     | Enforced immutable               |
| Extensibility           | Can extend `Record`    | Can extend any class             |
| Compact constructors    | Yes                    | No (use `@Builder` etc.)         |
| Deserialization safety  | Validates on read      | Uses reflection, can be bypassed |
| IDE support             | Native                 | Requires plugin                  |
| Framework compatibility | Full (standard Java)   | May need annotation processing   |

Records are the standard mechanism going forward. Lombok remains useful in codebases that need
features records do not support (mutable data carriers, builders with complex logic, etc.), but for
new code, records should be the default.

### Nested Records

Records can be nested inside other records or classes. This is useful for modeling hierarchical
data:

```java
public record Person(String name, Address address) {
    public record Address(String street, String city, String zip) { }
}

var p = new Person("Ada Lovelace", new Person.Address("12 King St", "London", "WC2N 5DU"));
```

### Generic Records

Records support generics:

```java
public record Result<T, E>(T value, E error) {
    public static <T> Result<T, Void> ok(T value) {
        return new Result<>(value, null);
    }

    public static <E> Result<Void, E> fail(E error) {
        return new Result<>(null, error);
    }

    public boolean isSuccess() {
        return error == null;
    }
}
```

## Sealed Classes (JEP 409, Java 17)

A sealed class restricts which other classes or interfaces can extend or implement it. This makes
class hierarchies explicit and enables the compiler to enforce exhaustiveness in pattern matching.

### Syntax

```java
public sealed class Shape
    permits Circle, Rectangle, Triangle {
}

public record Circle(double radius) extends Shape { }
public record Rectangle(double width, double height) extends Shape { }
public final class Triangle extends Shape {
    private final double sideA, sideB, sideC;

    public Triangle(double sideA, double sideB, double sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
}
```

Permitted subclasses must be in the same module (if the sealed class is in a named module) or the
same package (if in the unnamed module). Each permitted subclass must use exactly one of three
modifiers:

- **`final`** -- cannot be extended further
- **`sealed`** -- continues the sealed hierarchy
- **`non-sealed`** -- opens the hierarchy back up for extension

```java
public sealed class Expr
    permits Num, Add, Mul, Neg {

    // Abstract methods define the contract
    public abstract double eval();
}

public record Num(double value) extends Expr {
    @Override
    public double eval() { return value; }
}

public record Add(Expr left, Expr right) extends Expr {
    @Override
    public double eval() { return left.eval() + right.eval(); }
}

public record Mul(Expr left, Expr right) extends Expr {
    @Override
    public double eval() { return left.eval() * right.eval(); }
}

public final class Neg extends Expr {
    private final Expr operand;

    public Neg(Expr operand) {
        this.operand = operand;
    }

    @Override
    public double eval() { return -operand.eval(); }
}
```

### Sealed Interfaces

Interfaces can be sealed as well, permitting both classes and interfaces as subtypes:

```java
public sealed interface Codec
    permits JsonCodec, XmlCodec, ProtobufCodec {

    String encode(Object data);
    Object decode(String raw);
}

public final class JsonCodec implements Codec {
    @Override
    public String encode(Object data) {
        return JsonWriter.toJson(data);
    }

    @Override
    public Object decode(String raw) {
        return JsonReader.fromJson(raw);
    }
}
```

### Migration from Abstract Classes

Before sealed classes, modeling a closed hierarchy required either abstract classes with
package-private constructors (fragile, not enforced by the compiler) or enum singletons (verbose for
stateful types). Sealed classes give you the closed hierarchy guarantee of enums with the
flexibility of regular class hierarchies:

```java
// Before: abstract class with package-private constructor
public abstract class Command {
    private Command() { }  // Package-private, but not enforced by compiler

    public static final class Create extends Command { }
    public static final class Update extends Command { }
    public static final class Delete extends Command { }
}

// After: sealed class, compiler-enforced
public sealed class Command permits Create, Update, Delete { }
public final class Create extends Command { }
public final class Update extends Command { }
public final class Delete extends Command { }
```

The sealed version is both more readable and more correct. Any attempt to extend `Command` from
outside the permitted list is a compile-time error.

## Pattern Matching for `instanceof` (JEP 394, Java 16)

Pattern matching for `instanceof` eliminates the need for explicit casting when type-checking. The
pattern variable is bound only if the `instanceof` test succeeds, and it is in scope only in the
branch where it is guaranteed to be non-null.

### Basic Usage

```java
// Before
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// After
if (obj instanceof String s) {
    System.out.println(s.length());
}
```

The pattern variable `s` is only in scope inside the `if` block. The compiler guarantees that `s` is
non-null when the block executes -- the `instanceof` check already ruled out `null`.

### Pattern Variables in Conditions

```java
if (obj instanceof String s && s.length() &gt; 5) {
    System.out.println(s.toUpperCase());
}
```

The pattern variable `s` is in scope for the remainder of the enclosing expression after it is
introduced. This works with `&&` but not with `||` -- the right operand of `||` executes when the
left operand is false, which would mean `s` is not bound.

### Pattern Matching in Expressions

Pattern variables can be used in ternary expressions and other conditional contexts:

```java
String label = (obj instanceof Number n)
    ? "Number: " + n.doubleValue()
    : "Not a number";
```

### Common Pitfall: Shadowing

A pattern variable cannot shadow a local variable that is already in scope:

```java
String s = "outer";
if (obj instanceof String s) {  // Compile error: s already defined
    System.out.println(s);
}
```

This is intentional -- it prevents confusing rebindings where a variable name suddenly refers to a
different value.

## Switch Expressions (JEP 441, Java 21)

Switch expressions are a major evolution of the traditional `switch` statement. They can return a
value, use arrow syntax, and the compiler can verify exhaustiveness when switching on sealed types
or enums.

### Arrow Syntax and `yield`

```java
String result = switch (status) {
    case 200, 201, 204 -> "Success";
    case 400 -> "Bad Request";
    case 401 -> "Unauthorized";
    case 404 -> "Not Found";
    case 500 -> "Internal Server Error";
    default -> "Unknown";
};
```

Arrow syntax (`->`) means "if this case matches, evaluate the expression on the right." There is no
fall-through. When you need a block with multiple statements, use `yield` to return a value:

```java
String result = switch (status) {
    case 200, 201, 204 -> "Success";
    case 400 -> {
        log.warn("Bad request received");
        yield "Bad Request";
    }
    default -> {
        log.error("Unexpected status: " + status);
        yield "Unknown";
    }
};
```

### Pattern Matching in Switch

JEP 441 extends switch to work with type patterns, guarded patterns, and record patterns. This is
where sealed classes become truly powerful:

```java
public static double area(Shape shape) {
    return switch (shape) {
        case Circle c -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.width() * r.height();
        case Triangle t -> heronsFormula(t);
        // No default needed -- sealed hierarchy is exhaustive
    };
}
```

The compiler knows all permitted subclasses of `Shape` and verifies that every case is covered. If
you add a new `Shape` subtype and forget to update the switch, it is a compile-time error, not a
runtime bug.

### Guarded Patterns

Add a `when` clause to filter matches:

```java
return switch (shape) {
    case Circle c when c.radius() == 0 -> 0.0;
    case Circle c -> Math.PI * c.radius() * c.radius();
    case Rectangle r -> r.width() * r.height();
    case Triangle t -> heronsFormula(t);
};
```

Guards are evaluated in order. A `case Circle c` with no guard must appear after any guarded
`case Circle c when ...` to avoid being unreachable.

### Record Patterns

Destructure records directly in switch cases:

```java
public static String describe(Expr expr) {
    return switch (expr) {
        case Num(var value) -> STR."Number: \{value}";
        case Add(var left, var right) -> STR."Add(\{left.eval()}, \{right.eval()})";
        case Mul(var left, var right) -> STR."Mul(\{left.eval()}, \{right.eval()})";
        case Neg(var operand) -> STR."Neg(\{operand.eval()})";
    };
}
```

Record patterns can be nested:

```java
public static String deepDescribe(Expr expr) {
    return switch (expr) {
        case Add(Num(var a), Num(var b)) -> STR."Sum of two numbers: \{a} + \{b}";
        case Add(var left, var right) -> STR."Complex add: \{left} + \{right}";
        case Mul(Num(var a), Num(var b)) -> STR."Product of two numbers: \{a} * \{b}";
        case Neg(Num(var v)) -> STR."Negation of: \{v}";
        case Num(var v) -> STR."Literal: \{v}";
    };
}
```

### Null Handling in Switch

A traditional `switch` on `null` throws `NullPointerException`. Switch expressions (with JEP 441)
allow an explicit `null` case:

```java
return switch (shape) {
    case null -> throw new IllegalArgumentException("Shape must not be null");
    case Circle c -> Math.PI * c.radius() * c.radius();
    case Rectangle r -> r.width() * r.height();
    case Triangle t -> heronsFormula(t);
};
```

### Exhaustiveness and Sealed Types

When switching on a sealed type, the compiler performs exhaustiveness checking. It considers the
permitted subtypes, their record components, and any `default` or `null` cases. This transforms the
Visitor pattern from a runtime dispatch mechanism into a compile-time guarantee:

```java
// Traditional Visitor (verbose, runtime dispatch)
interface ShapeVisitor {
    void visit(Circle c);
    void visit(Rectangle r);
    void visit(Triangle t);
}

// Modern pattern matching (concise, compile-time verified)
static void process(Shape shape) {
    switch (shape) {
        case Circle c -> handleCircle(c);
        case Rectangle r -> handleRectangle(r);
        case Triangle t -> handleTriangle(t);
    }
}
```

## Text Blocks (JEP 378, Java 15)

Text blocks provide a way to write multi-line strings without escape sequences for newlines and
quotes. They use triple double quotes as delimiters.

### Basic Syntax

```java
String json = """
    {
        "name": "Ada Lovelace",
        "age": 36,
        "languages": ["Java", "Python"]
    }
    """;
```

The closing `"""` determines the indentation. The compiler removes the common leading whitespace
from all lines based on the position of the closing delimiter. In the example above, the content is
indented 4 spaces relative to the closing `"""`, so 4 spaces are stripped from every line.

### Escaping Rules

Most escape sequences work the same inside text blocks as in regular strings. The key differences:

- **No need to escape `"` inside a text block** -- a single `"` or `""` does not terminate the text
  block. Only `"""` terminates it.
- **`\` at end of line** prevents a line break, joining the lines:
  ```java
  String query = """
      SELECT id, name, email
      FROM users
      WHERE status = 'active'
      ORDER BY \s
      name""";
  ```
- **`\s`** translates to a single ASCII space, useful for preserving trailing whitespace that would
  otherwise be stripped.

### Common Pitfalls

**Trailing whitespace is stripped.** The compiler removes all trailing whitespace from each line in
a text block. If you need trailing spaces, use `\s`:

```java
String table = """
    header1  \s
    header2  \s
    --------\s
    value1   \s
    value2   \s
    """;
```

**Closing delimiter position matters.** The closing `"""` must be on its own line (or on the last
line of content) for the indentation algorithm to work correctly. Placing it at column 0 removes no
indentation:

```java
// 0 indentation stripped (closing """ at column 0)
String a = """
    line1
    line2
""";

// 4 spaces stripped (closing """ indented 4 spaces)
String b = """
        line1
        line2
    """;
```

**Inconsistent indentation causes errors.** If the closing delimiter is more indented than some
content lines, the content lines have negative indentation, which is a compile error:

```java
String bad = """
        indented
    less indented  // Compile error: negative indentation
    """;
```

## Common Pitfalls

### Records Are Not Always a Drop-In Replacement

Records cannot extend other classes (they implicitly extend `java.lang.Record`). If you need
inheritance, use a regular class. Records also cannot have mutable state -- if your data carrier
needs to be mutated after construction, a record is the wrong tool.

```java
// This does NOT compile
public record MutablePoint(double x, double y) {
    public void setX(double newX) {
        // No way to assign to the x field from an instance method
    }
}
```

### Sealed Class Permits Must Be Accessible

The permitted subclasses must be accessible to the sealed class at compile time. If they are in a
different package, they must be `public`. If they are in the same package but not public, they must
be at least package-private.

### Pattern Variables and Effectively Final

Pattern variables introduced by `instanceof` are effectively final. You cannot reassign them:

```java
if (obj instanceof String s) {
    s = "new value";  // Compile error: pattern variable s is effectively final
}
```

### Switch Expression Fall-Through

Arrow syntax in switch expressions does not fall through. If you use colon syntax (the traditional
style), fall-through still applies, and you must use `break` or `yield` explicitly:

```java
// Arrow: no fall-through
switch (x) {
    case 1 -> System.out.println("one");
    case 2 -> System.out.println("two");
}

// Colon: fall-through still works (dangerous)
switch (x) {
    case 1:
        System.out.println("one");
    case 2:
        System.out.println("one or two");  // This executes for case 1 too!
}
```

Always prefer arrow syntax unless you deliberately need fall-through.

## JEP Reference Table

| JEP | Feature                          | Java Version | Status   |
| --- | -------------------------------- | ------------ | -------- |
| 355 | Text Blocks (preview)            | 13           | Preview  |
| 368 | Text Blocks (second preview)     | 14           | Preview  |
| 378 | Text Blocks                      | 15           | Standard |
| 305 | Pattern Matching for instanceof  | 14           | Preview  |
| 375 | Pattern Matching for instanceof  | 15           | Preview  |
| 394 | Pattern Matching for instanceof  | 16           | Standard |
| 325 | Switch Expressions (preview)     | 12           | Preview  |
| 361 | Switch Expressions (second prev) | 13           | Preview  |
| 394 | Switch Expressions               | 14           | Standard |
| 409 | Sealed Classes                   | 17           | Standard |
| 395 | Records                          | 16           | Standard |
| 440 | Record Patterns (preview)        | 19           | Preview  |
| 441 | Pattern Matching for switch      | 21           | Standard |
| 443 | Unnamed Patterns and Variables   | 22           | Standard |

## See Also

- [Concurrency](../06-concurrency/01-concurrency.md) -- pattern matching and sealed classes
  integrate with concurrent data structures
- [Collections Framework](../04-collections/01-collections-framework.md) -- records as collection
  element types
- [Style and Patterns](../07-best-practices/01-style-and-patterns.md) -- when to use records vs
  regular classes in production code
- [Virtual Threads and Structured Concurrency](../08-modern-java/02-virtual-threads-structured-concurrency.md)
  -- modern concurrency features
