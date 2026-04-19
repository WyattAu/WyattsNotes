---
title: Java Interoperability
description:
  Calling Java from Kotlin, calling Kotlin from Java, SAM conversions, and platform types.
slug: interoperability
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Calling Java from Kotlin

Kotlin code can call any Java class, method, or field without adapters or wrappers. This is a
fundamental design principle of the language.

```kotlin
import java.time.LocalDateTime
import java.util.Base64

val now = LocalDateTime.now()
val encoded = Base64.getEncoder().encodeToString("hello".toByteArray())
```

### Getters and Setters

Java getters and setters are automatically mapped to Kotlin properties.

```java
// Java
public class User {
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
```

```kotlin
// Kotlin
val user = User()
user.name = "Alice"   // calls setName()
user.age = 30          // calls setAge()
println(user.name)     // calls getName()
```

### Nullability and Platform Types

Java has no nullability information in its type system. When Kotlin calls Java code, the types are
represented as **platform types**, written as `T!`. The compiler neither enforces null safety nor
guarantees non-nullity for platform types.

```kotlin
val list: MutableList<String!> = ArrayList()  // platform type
// The compiler allows both:
list.add(null)    // no warning
val first: String = list[0]  // no warning, could be null at runtime
```

### Handling Platform Types

Explicitly declare nullability when calling Java code:

```kotlin
// If you know the Java method never returns null:
val result: String = javaObject.toString()  // non-null assertion

// If the Java method might return null:
val result: String? = javaObject.getProperty("key")  // safe
```

### @NotNull and @Nullable Annotations

Kotlin recognizes nullability annotations from several frameworks:

- JetBrains: `org.jetbrains.annotations.NotNull` / `Nullable`
- Android: `android.support.annotation.NonNull` / `Nullable`
- JSR-305: `javax.annotation.Nonnull` / `CheckForNull`
- Lombok: `lombok.NonNull`

```java
// Java with nullability annotations
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class Service {
    @NotNull
    public String getName() { return "default"; }

    @Nullable
    public String getNickname() { return null; }
}
```

```kotlin
// Kotlin sees:
// getName(): String (non-null)
// getNickname(): String? (nullable)
val name: String = service.getName()
val nickname: String? = service.getNickname()
```

## Calling Kotlin from Java

### Top-Level Functions

Kotlin top-level functions are compiled to static methods in a class named after the file (with a
`Kt` suffix). Use `@JvmName` to customize the class name and `@JvmField` to expose properties as
fields.

```kotlin
// File: StringHelpers.kt
package com.example.util

@JvmName("StringUtils")
object StringHelpers {
    fun capitalizeWords(s: String): String =
        s.split(" ").joinToString(" ") { it.replaceFirstChar { c -> c.uppercase() } }
}
```

```java
// Java
String result = StringUtils.capitalizeWords("hello world");
```

### Top-Level Functions Without Object Wrapper

```kotlin
// File: MathUtils.kt
@file:JvmName("MathUtils")

package com.example.util

fun factorial(n: Int): Long {
    return if (n <= 1) 1L else n * factorial(n - 1)
}
```

```java
// Java
long result = MathUtils.factorial(10);
```

### Properties

Kotlin properties are accessed via getters and setters from Java. Use `@JvmField` to expose the
backing field directly.

```kotlin
class Config {
    @JvmField
    val maxRetries = 3

    var timeout: Long = 30_000L
        private set
}
```

```java
// Java
Config config = new Config();
int retries = config.maxRetries;  // direct field access
long timeout = config.getTimeout();
// config.setTimeout(60_000L);  // compile error: setter is private
```

### Default Parameter Values

Kotlin default parameters do not work from Java. Use `@JvmOverloads` to generate overloaded methods.

```kotlin
class HttpClient(
    val baseUrl: String,
    val timeout: Int = 30_000,
    val retries: Int = 3
) {
    @JvmOverloads
    fun get(path: String, headers: Map<String, String> = emptyMap()): Response {
        // ...
    }
}
```

The compiler generates:

```java
// Java (generated overloads)
Response get(String path);
Response get(String path, Map<String, String> headers);
```

### Companion Object Members

Members in companion objects are accessed via the `Companion` class from Java. Use `@JvmStatic` to
generate true static methods.

```kotlin
class Database {
    companion object {
        @JvmStatic
        fun connect(url: String): Connection {
            // ...
        }

        fun disconnect() {
            // ...
        }
    }
}
```

```java
// Java
Connection conn = Database.connect("jdbc:postgresql://localhost/db");  // @JvmStatic
Database.Companion.disconnect();  // without @JvmStatic
```

## SAM Conversions

SAM (Single Abstract Method) conversions allow a lambda to be converted to a Java functional
interface implementation.

```kotlin
// Java functional interface
interface Runnable {
    void run();
}
```

```kotlin
// Kotlin lambda automatically converted
val thread = Thread {
    println("Running in a thread")
}

executor.execute { task ->
    process(task)
}
```

SAM conversion works for Java interfaces with exactly one abstract method. For Kotlin interfaces,
use the `fun interface` keyword to enable SAM conversion:

```kotlin
fun interface Predicate<T> {
    fun test(t: T): Boolean
}

val isEven = Predicate<Int> { it % 2 == 0 }
```

## No-Arg and Named Constructors

### @JvmOverloads with Constructors

```kotlin
class Button @JvmOverloads constructor(
    val text: String,
    val color: Int = 0,
    val fontSize: Int = 14
)
```

Generates three constructors accessible from Java: `Button(String)`, `Button(String, int)`,
`Button(String, int, int)`.

### @Throws for Checked Exceptions

Kotlin does not have checked exceptions, but Java callers may need them declared. Use `@Throws` to
specify which exceptions the function can throw.

```kotlin
@Throws(IOException::class)
fun readFile(path: String): String {
    return File(path).readText()
}
```

```java
// Java -- compiler now knows about IOException
try {
    String content = FileUtils.readFile("/path/to/file");
} catch (IOException e) {
    // handle
}
```

## Kotlin-Specific Types from Java

### Unit

`Unit` in Kotlin maps to `void` when called from Java. A Kotlin function returning `Unit` is
callable as a `void` method from Java.

### Nothing

`Nothing` has no instances. A function returning `Nothing` never returns normally (always throws).

### Kotlin Collections from Java

Java code sees Kotlin's read-only collection types as their mutable equivalents (e.g., `List` is
seen as `java.util.List`). This is because Kotlin's read-only interfaces extend Java's mutable
interfaces for compatibility.

## Common Pitfalls

- \*\* Ignoring platform types. Always annotate Java APIs with nullability annotations when both
  Java and Kotlin code share the codebase. Unannotated Java APIs create a null safety gap.
- \*\* Forgetting `@JvmStatic` on companion object members. Without it, Java callers must use
  `ClassName.Companion.method()`, which is awkward.
- \*\* Forgetting `@JvmOverloads` for constructors and methods with default parameters. Java cannot
  use Kotlin default parameters.
- \*\* Assuming Kotlin's read-only collections are immutable when accessed from Java. Java sees
  `kotlin.collections.List` as `java.util.List`, so it can call `add()`, `remove()`, etc. Use
  `Collections.unmodifiableList()` or Kotlinx immutable collections for true immutability.
- \*\* Using Kotlin extension functions from Java. Extension functions compile to static methods, so
  Java callers must call them explicitly: `ExtensionKt.functionName(receiver, args)`.
