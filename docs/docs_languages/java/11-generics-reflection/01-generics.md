---
title: Generics and Type Erasure
date: 2026-04-04T00:00:00.000Z
tags:
  - Java
categories:
  - Java
slug: generics-type-erasure
---

## Why Generics

### Before Java 5: Raw Types and Casting

Before generics (JDK 5, 2004), the Java collections API worked with `Object`. Every retrieval
required a cast, and the compiler could not verify that you were putting the right type in:

```java
List names = new ArrayList();
names.add("Alice");
names.add(42);                  // compiles fine, bug at runtime
String name = (String) names.get(1); // ClassCastException at runtime
```

This was the standard pattern for container classes. The `Collections` framework, Hibernate, and
every library that dealt with heterogeneous data required the programmer to track types mentally.
Incorrect casts surfaced as `ClassCastException` at runtime, often far from the actual insertion
point.

Generics introduced **compile-time type checking** with **no runtime cost** (via type erasure). The
compiler inserts casts for you and rejects code that violates type constraints:

```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add(42);  // compile error
String name = names.get(0); // no cast needed
```

The primary motivation was not performance but **correctness**: move type errors from runtime to
compile time.

The primary motivation was **correctness**: move type errors from runtime to compile time.

## Generic Classes, Interfaces, and Methods

### Generic Classes

A generic class declares one or more type parameters after the class name. These parameters act as
type placeholders throughout the class body:

```java
public class Box<T> {
    private T value;

    public Box(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }

    public void set(T value) {
        this.value = value;
    }
}
```

Usage:

```java
Box<String> stringBox = new Box<>("hello");
Box<Integer> intBox = new Box<>(42);
```

Type parameters are typically single uppercase letters by convention:

| Parameter | Meaning               |
| --------- | --------------------- |
| `T`       | Type                  |
| `E`       | Element (collections) |
| `K`       | Key                   |
| `V`       | Value                 |
| `S`, `U`  | Second, third types   |
| `R`       | Return type           |

Multiple type parameters are comma-separated. Convention uses `K` for key, `V` for value, `E` for
element, `S`/`U` for secondary types.

### Generic Interfaces

Interfaces follow the same pattern:

```java
public interface Repository<T, ID> {
    Optional<T> findById(ID id);
    List<T> findAll();
    T save(T entity);
    void deleteById(ID id);
}

public interface Comparable<T> {
    int compareTo(T other);
}
```

A class can implement a generic interface with a concrete type or pass its own type parameter
through:

```java
public class StringRepository implements Repository<String, Long> {
    @Override
    public Optional<String> findById(Long id) { /* ... */ }
}

public class InMemoryRepository<T, ID> implements Repository<T, ID> {
    // passes type parameters through
}
```

### Generic Methods

A generic method declares its own type parameters before the return type. This allows the method to
be generic even if the enclosing class is not:

```java
public class Util {
    public static <T> T getFirst(List<T> list) {
        if (list.isEmpty()) {
            throw new IllegalArgumentException("empty list");
        }
        return list.get(0);
    }

    public static <K, V> Map<V, List<K>> invert(Map<K, V> map) {
        Map<V, List<K>> result = new HashMap<>();
        for (Map.Entry<K, V> entry : map.entrySet()) {
            result.computeIfAbsent(entry.getValue(), k -> new ArrayList<>())
                  .add(entry.getKey());
        }
        return result;
    }
}
```

The type parameters of a generic method are inferred by the compiler. Explicit type arguments are
rarely needed:

```java
String first = Util.getFirst(List.of("a", "b", "c"));
// Explicit when inference is ambiguous:
// Util.<String, Integer>invert(someMap);
```

Generic constructors follow the same pattern — type parameters go before the constructor name:

```java
public class IdentityWrapper<T> {
    private final T value;
    public <S extends T> IdentityWrapper(S value) { this.value = value; }
}
// IdentityWrapper<Number> w = new IdentityWrapper<>(42);
// S inferred as Integer, which extends Number
```

## Type Parameters and Bounds

### Unbounded Type Parameters

`<T>` means "any reference type." The bound is implicitly `Object`. You can call only `Object`
methods on `T`:

```java
public static <T> void print(T item) {
    System.out.println(item.toString()); // OK, inherited from Object
    System.out.println(item.length());   // compile error
}
```

### Upper Bounds (`extends`)

`<T extends SomeType>` constrains `T` to `SomeType` or any subtype. Multiple bounds use `&` (the
first bound can be a class, subsequent ones must be interfaces):

```java
public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

public static <T extends Number & Comparable<T>> T maxNumeric(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}
```

With a bound, you can call methods declared in the bound type:

```java
public static <T extends Comparable<T>> void sort(List<T> list) {
    list.sort(null); // T is known to be Comparable, so sort works
}
```

Upper bounds are the most common form. They say "I need to **read** from `T`" (I need it to be at
least this capable).

### Lower Bounds (`super`)

Lower bounds do not appear on type parameter declarations. They appear on **wildcards** (see next
section). A type parameter itself can only have upper bounds.

This distinction is important:

```java
// VALID: type parameter with upper bound
public static <T extends Number> double sum(List<T> numbers) { /* ... */ }

// INVALID: type parameter with lower bound
// public static <T super Integer> void foo(List<T> list) { }
// Compile error — type parameters cannot have lower bounds
```

### Recursive Bounds

The `Comparable` interface uses a recursive bound: `T extends Comparable<T>`. This means "T must be
comparable to itself," which is the standard contract for ordered types:

```java
public static <T extends Comparable<T>> T max(List<T> list) {
    if (list.isEmpty()) throw new IllegalArgumentException();
    T result = list.get(0);
    for (T item : list) {
        if (item.compareTo(result) > 0) {
            result = item;
        }
    }
    return result;
}
```

### Bounded Type Parameters and Erasure

When a type parameter has a bound, erasure replaces it with the **first bound**:

```java
// erasure of <T extends Comparable<T>> is Comparable
// erasure of <T extends Number & Comparable<T>> is Number
```

The compiler is smart enough to let you call methods from any bound — it generates the appropriate
cast at the call site. But at the bytecode level, the erased type is only the first bound.

## Wildcards and the PECS Principle

### Unbounded Wildcard (`?`)

`List<?>` means "a list of some unknown type." You can **read** from it (getting `Object`) but you
cannot **write** to it (except `null`):

```java
void printSize(List<?> list) {
    System.out.println(list.size());    // OK
    Object obj = list.get(0);           // OK, type is Object
    list.add(null);                     // OK, null is a member of every reference type
    list.add("hello");                  // compile error
}
```

Use `List<?>` when you don't care about the element type and only need read-only access.

### Upper-Bounded Wildcard (`? extends T`)

`List<? extends Number>` means "a list of some type that is `Number` or a subtype." You can **read**
`Number` from it, but you cannot **write** anything meaningful to it:

```java
void sum(List<? extends Number> numbers) {
    double total = 0;
    for (Number n : numbers) {
        total += n.doubleValue();  // OK — every element is at least a Number
    }
    // numbers.add(3.14);          // compile error — don't know if it's List<Double>
}
```

The key insight: `List<? extends Number>` could be `List<Integer>`, `List<Double>`, or
`List<Number>`. The compiler cannot safely allow an `add` because the actual list type is unknown.

### Lower-Bounded Wildcard (`? super T`)

`List<? super Integer>` means "a list of some type that is `Integer` or a supertype." You can
**write** `Integer` (or its subtypes) to it, but you can only **read** `Object`:

```java
void addIntegers(List<? super Integer> list) {
    list.add(1);          // OK — Integer is assignable to Integer, Number, or Object
    list.add(2);          // OK
    Object obj = list.get(0); // OK — don't know the actual type
    // Number n = list.get(0);  // compile error
}
```

### PECS: Producer Extends, Consumer Super

Joshua Bloch's PECS principle (from _Effective Java_) is the canonical rule for choosing wildcard
directions:

- **If the parameter is a producer** (you read from it, it gives you values) → use `? extends T`
- **If the parameter is a consumer** (you write to it, it takes values) → use `? super T`

The `Collections.copy` method is the classic example:

```java
// src produces elements → extends
// dest consumes elements → super
public static <T> void copy(List<? super T> dest, List<? extends T> src) {
    for (int i = 0; i < src.size(); i++) {
        dest.set(i, src.get(i));
    }
}
```

```java
List<Integer> src = List.of(1, 2, 3);
List<Number> dest = new ArrayList<>(List.of(0.0, 0.0, 0.0));
Collections.copy(dest, src); // dest is ? super Integer, src is ? extends Integer
```

### PECS Decision Table

| Scenario              | Use               | Can read as | Can write               |
| --------------------- | ----------------- | ----------- | ----------------------- |
| Read-only (producer)  | `? extends T`     | `T`         | nothing (except `null`) |
| Write-only (consumer) | `? super T`       | `Object`    | `T` and subtypes of `T` |
| Read and write        | `T` (no wildcard) | `T`         | `T`                     |
| Don't care            | `?`               | `Object`    | nothing (except `null`) |

### Wildcard Capture

When the compiler encounters a wildcard type, it internally creates a "capture" of the unknown type
to track consistency. You can see this in error messages:

```java
List<?> list = new ArrayList<String>();
// list.add("hello");  // error: ? capture#1 cannot be applied to add(String)

// Workaround: use a private helper method that captures the wildcard
private static <T> void addAndPrint(List<T> list, T item) {
    list.add(item);
    System.out.println(list);
}

List<?> list = new ArrayList<String>();
addAndPrint(list, "hello"); // T is inferred as String
```

This pattern — delegating to a generic helper method to "capture" a wildcard — is called the
**wildcard capture helper** pattern.

### Return Types and Wildcards

Avoid wildcards in return types. They shift the burden onto the caller:

```java
// BAD: caller must deal with wildcard
public List<? extends Number> getNumbers();

// GOOD: caller gets a concrete type
public List<Number> getNumbers();
```

Use wildcards in **parameters** (input), use concrete types in **return types** (output).

## Type Erasure

### How Erasure Works

Java generics are implemented via **type erasure**. The compiler removes all generic type
information and replaces type parameters with their bounds (or `Object` if unbounded). Casts are
inserted where necessary.

```java
// Source code
public class Box<T> {
    private T value;
    public T get() { return value; }
    public void set(T value) { this.value = value; }
}

// After erasure (what the JVM sees)
public class Box {
    private Object value;
    public Object get() { return value; }
    public void set(Object value) { this.value = value; }
}
```

```java
// Source code
public class NumericBox<T extends Number> {
    private T value;
    public T get() { return value; }
}

// After erasure
public class NumericBox {
    private Number value;
    public Number get() { return value; }
}
```

```java
// Source code
Box<String> box = new Box<>();
box.set("hello");
String s = box.get();

// After erasure
Box box = new Box();
box.set("hello");
String s = (String) box.get(); // compiler-inserted cast
```

The compiler inserts casts at every point where a generic type is narrowed from the erased type.
This is the only runtime mechanism that enforces generic type safety.

### Why Erasure?

Type erasure was a deliberate design decision to achieve **backwards compatibility**. The goals:

1. **Migration compatibility**: Existing pre-generic code (raw types) must compile and run alongside
   generic code.
2. **Binary compatibility**: Libraries compiled without generics must work with generic code without
   recompilation. The JVM class file format did not change for generics.
3. **No runtime performance cost**: No generic-specific bytecodes. The JIT compiler optimizes away
   the inserted casts.

C# chose the opposite approach (reified generics), which provides richer runtime type information
but broke backwards compatibility.

### Bridge Methods

Consider a generic class that a subclass specializes:

```java
public class Node<T> {
    public T data;
    public void setData(T data) { this.data = data; }
}

public class StringNode extends Node<String> {
    @Override
    public void setData(String data) { super.setData(data); }
}
```

After erasure, `Node` has `setData(Object)` and `StringNode` has `setData(String)`. The compiler
generates a **bridge method** in `StringNode`:

```java
// Compiler-generated bridge method in StringNode
public void setData(Object data) {
    setData((String) data); // delegates to the actual override
}
```

Bridge methods are synthetic, marked with `ACC_BRIDGE` (0x0040) in the class file. They ensure
polymorphism works despite erasure. Verify with `javap -v`.

### Bridge Methods and Covariant Returns

Bridge methods also handle covariant return types. If a generic method returns `T` and the subclass
narrows it, the bridge method handles the casting:

```java
public class Animal { }
public class Cat extends Animal { }

public class Shelter<T extends Animal> {
    public T adopt() { /* ... */ }
}

public class CatShelter extends Shelter<Cat> {
    @Override
    public Cat adopt() { return new Cat(); }
}

// Bridge method generated in CatShelter:
// public Animal adopt() { return (Animal) adopt(); }
```

### Erasure and `instanceof`

You cannot use `instanceof` with parameterized types because the type parameter is erased:

```java
if (list instanceof List<String>)  // compile error — illegal generic type for instanceof
if (list instanceof List<?>)       // OK since Java 8 for unbounded wildcards? No — still error

// Correct approach:
if (list instanceof List)  // raw type check only
```

Use `Class&lt;T&gt;` tokens for runtime type checks (see the "Generic Type Tokens" section below).

### Erasure and Overloading

Erasure can cause surprising overload conflicts:

```java
public class Overload {
    public void print(List<String> list) { }
    public void print(List<Integer> list) { }
    // Compile error: name clash — both erase to print(List)
}
```

The methods have the same erasure, so they are considered the same method signature. This is a
compile-time error.

## Generics and Arrays

### The Fundamental Problem

Arrays are **covariant** in Java: `String[]` is a subtype of `Object[]`. Generics are **invariant**:
`List<String>` is not a subtype of `List<Object>`. These two systems conflict:

```java
String[] strings = new String[1];
Object[] objects = strings;     // OK — arrays are covariant
objects[0] = 42;                // ArrayStoreException at runtime

List<String> strings = List.of("a");
// List<Object> objects = strings;  // compile error — generics are invariant
```

Arrays enforce type safety at runtime (`ArrayStoreException`). Generics enforce it at compile time.
When you mix the two, things break:

```java
// Compile error: cannot create a generic array
List<String>[] array = new List<String>[1];
```

This is illegal because if it were allowed:

```java
List<String>[] strings = new List<String>[1]; // hypothetical
Object[] objects = strings;
objects[0] = List.of(42);   // would pass compile-time array covariance check
String s = strings[0].get(0); // ClassCastException at runtime — heap pollution
```

The compiler prevents this by forbidding generic array creation.

### Workarounds

**Use `Object[]` with casts** (what `java.util.ArrayList` does internally):

```java
public class ArrayList<E> {
    private Object[] elements;
    @SuppressWarnings("unchecked")
    public E get(int index) {
        return (E) elements[index]; // unchecked cast
    }
}
```

**Use `List<Class<T>>` instead of `Class<T>[]`:**

```java
List<Class<T>> types = new ArrayList<>(); // instead of Class<T>[]
```

**Varargs with generic types** — `@SafeVarargs` (JDK 7) suppresses the heap pollution warning for
varargs methods where the caller does not modify the array:

```java
@SafeVarargs
public static <T> List<T> of(T... elements) { return List.of(elements); }
```

### Unchecked Warnings and `@SuppressWarnings`

When you mix raw types and generic types, the compiler issues unchecked warnings. Use
`@SuppressWarnings("unchecked")` sparingly and document why it is safe:

```java
@SuppressWarnings("unchecked")
public <T> T[] toArray(T[] array) {
    return (T[]) Arrays.copyOf(elements, array.length, array.getClass());
}
```

## Reified Types and Why `new T[]` Doesn't Work

### What "Reified" Means

A **reified** type is one that retains its full type information at runtime. In Java:

- Primitive types are reified: `int.class`, `double.class` exist at runtime.
- Regular class types are reified: `String.class`, `List.class` exist at runtime.
- **Generic type parameters are NOT reified**: `List<String>.class` does not exist. At runtime,
  `List<String>` and `List<Integer>` are both just `List`.

This is the direct consequence of type erasure. The JVM has no way to distinguish between
`List<String>` and `List<Integer>` at runtime.

### Why `new T[]` Is Illegal

```java
public class Container<T> {
    private T[] items;

    public Container(int size) {
        items = new T[size]; // compile error: type parameter T cannot be instantiated directly
    }
}
```

The compiler cannot generate the correct bytecode because it doesn't know what type `T` represents
at runtime. It cannot emit `newarray` or `anewarray` without a concrete class reference.

### Why `new T()` Is Also Illegal

```java
public class Factory<T> {
    public T create() {
        return new T(); // compile error: type parameter T cannot be instantiated directly
    }
}
```

Same reason: the erased code would need to be `return new Object()` which is wrong for any `T` other
than `Object`.

### Workarounds for Creating `T` Instances

**Pass a `Supplier<T>`:**

```java
public class Factory<T> {
    private final Supplier<T> constructor;
    public Factory(Supplier<T> constructor) { this.constructor = constructor; }
    public T create() { return constructor.get(); }
}
Factory<String> f = new Factory<>(String::new);
```

**Pass a `Class<T>` token:**

```java
public static <T> T create(Class<T> clazz) throws Exception {
    return clazz.getDeclaredConstructor().newInstance();
}
```

`Class.newInstance()` (deprecated since JDK 9) is replaced by
`clazz.getDeclaredConstructor().newInstance()`.

### Workarounds for `new T[]`

**Array of `Object` with cast** (unsafe for any `T` other than `Object`):

```java
@SuppressWarnings("unchecked")
public static <T> T[] newArray(int size) {
    return (T[]) new Object[size]; // runtime type is Object[], not T[]
}
```

**Array from a `Class<T>` token** (correct approach):

```java
@SuppressWarnings("unchecked")
public static <T> T[] newArray(Class<T> componentType, int size) {
    return (T[]) java.lang.reflect.Array.newInstance(componentType, size);
}
```

## Generic Type Tokens with the `Class<T>` Pattern

### The Super Type Token (GSON/Jackson pattern)

Since `List<String>.class` doesn't exist, you need a way to preserve generic type information at
runtime. The **super type token** pattern exploits the fact that a class's generic superclass
signature is preserved in the class file:

```java
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public abstract class TypeReference<T> {
    private final Type type;

    protected TypeReference() {
        Type superClass = getClass().getGenericSuperclass();
        if (superClass instanceof ParameterizedType pt) {
            this.type = pt.getActualTypeArguments()[0];
        } else {
            throw new IllegalArgumentException("Missing type parameter");
        }
    }

    public Type getType() {
        return type;
    }
}
```

Usage:

```java
// The anonymous subclass captures List<String> in its superclass type signature
TypeReference<List<String>> token = new TypeReference<List<String>>() {};
Type type = token.getType(); // java.util.List<java.lang.String>
```

This is how Jackson's `TypeReference<T>` and GSON's `TypeToken<T>` work. The anonymous inner class
carries the generic type argument in its class metadata, which reflection can read.

### `Class<T>` as a Type Token

For non-parameterized types, `Class<T>` serves as a runtime type token:

```java
public <T> String serialize(T obj, Class<T> type) {
    if (type == String.class) return "\"" + obj + "\"";
    if (type == Integer.class) return String.valueOf(obj);
    return obj.toString();
}
```

### Type Token with Bounds

Combine `Class<T>` with bounded type parameters for type-safe configuration reading:

```java
public static <T extends Comparable<T>> T readConfig(
        String key, Class<T> type, T defaultValue) {
    String value = System.getProperty(key);
    if (value == null) return defaultValue;
    if (type == Integer.class) return type.cast(Integer.valueOf(value));
    if (type == Long.class) return type.cast(Long.valueOf(value));
    return type.cast(value);
}
```

### Generic Type Erasure in Practice

```java
List<String> a = new ArrayList<>();
List<Integer> b = new ArrayList<>();

System.out.println(a.getClass() == b.getClass()); // true — both are ArrayList
System.out.println(a.getClass());                  // class java.util.ArrayList
```

There is no way to recover `String` or `Integer` from `a.getClass()` or `b.getClass()`. The type
parameter is simply gone at runtime.

## Common Pitfalls

### Heap Pollution

Heap pollution occurs when a variable of a parameterized type refers to an object that is not of
that type. This typically happens through unchecked casts or mixing raw and generic types:

```java
List raw = new ArrayList<Integer>();
raw.add("not an integer");  // heap pollution
List<Integer> integers = raw; // no warning — raw type assignment
int x = integers.get(0);   // ClassCastException: String cannot be cast to Integer
```

Varargs with generic types are a common source of heap pollution:

```java
public static <T> void addToList(List<T> list, T... elements) {
    // internally, elements is T[] which erases to Object[]
    // The compiler creates an Object[] at the call site
    for (T e : elements) {
        list.add(e);
    }
}

// Call site
List<String> strings = new ArrayList<>();
addToList(strings, "a", "b"); // compiler creates new Object[]{"a", "b"}

// Dangerous call site
List<String> strings = new ArrayList<>();
List<Integer> ints = new ArrayList<>();
addToList(strings, ints.toArray()); // Object[] of Integer assigned to T... where T=String
```

Use `@SafeVarargs` only when the method does not store the varargs array or expose it to code that
might perform unsafe operations.

### Unchecked Warnings

Unchecked warnings indicate that the compiler cannot verify type safety. The most common sources:

1. **Raw type usage**: `List list = new ArrayList<>();`
2. **Unchecked casts**: `(List<String>) someObject`
3. **Generic array creation**: `new List<String>[1]`
4. **Varargs with non-reifiable types**: `void foo(List<String>... args)`

Never suppress unchecked warnings without understanding why they are safe. Document the safety
argument:

```java
// Safe because elements is only read, never written to, and only T values were inserted
@SuppressWarnings("unchecked")
public <T> T[] toArray(T[] array) {
    return (T[]) Arrays.copyOf(elements, array.length, array.getClass());
}
```

### Erasure Surprises

**`instanceof` doesn't work with generics:**

```java
if (obj instanceof List<String>) // compile error
```

**Cast to generic type is unchecked** — erasure reduces it to `(List)` at runtime:

```java
List<String> list = (List<String>) obj; // unchecked cast warning
```

**Cannot throw or catch generic types** — the JVM needs the exception class at runtime:

```java
try { } catch (T e) { } // compile error
```

**Static fields cannot reference type parameters** — shared across all `Box<T>` instances:

```java
public class Box<T> {
    private static T value; // compile error
}
```

**`ClassCastException` at the wrong location** — erasure delays the check to the inserted cast:

```java
List<Integer> list = new ArrayList<>();
List raw = list;
raw.add("oops");          // no error here
Integer i = list.get(0);  // ClassCastException HERE
```

### Raw Types vs Parameterized Types

Never use raw types in new code. They disable all generic type checking:

```java
List list = new ArrayList();        // BAD
List<Object> list = new ArrayList<>(); // GOOD
List<String> list = new ArrayList<>(); // BETTER
```

The one exception is `Class` literals: `List.class` (not `List<String>.class`).

### Type Inference Limitations

Java's type inference has improved over releases but still has limits. Target type inference (JDK 8)
allows type parameters to be inferred from assignment context, but deeply nested generic types can
confuse the compiler.

### Mixing Inheritance and Generics

```java
public class StringList extends ArrayList<String> { } // valid — fixes T to String

public class MyList implements List<String>, List<Integer> {
    // compile error — both erase to List
}
```

When extending a generic class, you can fix the type parameter, pass it through, or add constraints
— but you cannot have conflicting erasures.
