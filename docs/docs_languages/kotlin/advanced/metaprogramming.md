---
title: Metaprogramming
description: Reflection, annotations, sealed interfaces, value classes, and operator overloading.
slug: metaprogramming
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Reflection

Reflection allows inspection of classes, functions, properties, and annotations at runtime. Kotlin
reflection requires an additional dependency.

```kotlin
dependencies {
    implementation("org.jetbrains.kotlin:kotlin-reflect:2.1.0")
}
```

### Class References

```kotlin
val kClass: KClass<String> = String::class
val jClass: Class<String> = String::class.java
val runtimeClass: KClass<out String> = "hello"::class
```

### Property References

```kotlin
data class User(val name: String, var age: Int)

val nameProperty = User::name
println(nameProperty.name)              // "name"
println(nameProperty.get(User("A", 1))) // "A"

val ageProperty = User::age
val user = User("A", 1)
ageProperty.set(user, 25)
```

### Function References

```kotlin
fun isEven(n: Int): Boolean = n % 2 == 0

val predicate: (Int) -> Boolean = ::isEven
listOf(1, 2, 3, 4).filter(::isEven)  // [2, 4]
```

### Callable References on Instances

```kotlin
val user = User("Alice", 30)
val nameGetter: () -> String = user::name
val ageSetter: (Int) -> Unit = user::age::set
```

### Introspection

```kotlin
data class Config(val host: String, val port: Int, val debug: Boolean)

val kClass = Config::class

kClass.memberProperties.forEach { prop ->
    println("${prop.name}: ${prop.returnType}")
}

kClass.primaryConstructor?.parameters?.forEach { param ->
    println("${param.name}: ${param.type}")
}
```

### Dynamic Invocation

```kotlin
fun setProperty(obj: Any, propertyName: String, value: Any?) {
    val prop = obj::class.memberProperties.firstOrNull { it.name == propertyName }
    (prop as? KMutableProperty1<Any, Any?>)?.set(obj, value)
}

val config = Config("localhost", 8080, false)
setProperty(config, "debug", true)
```

Reflection has significant performance overhead compared to direct access. Use it for framework code
(serialization, dependency injection, ORM) where the structure is not known at compile time.

## Annotations

Annotations attach metadata to declarations. They do not directly affect program behavior but can be
read via reflection or used by the compiler.

### Declaration

```kotlin
annotation class ApiEndpoint(val method: String, val path: String)

@Target(AnnotationTarget.CLASS, AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
@MustBeDocumented
annotation class Deprecated(val message: String, val replaceWith: String = "")
```

### Built-in Annotation Targets

| Target                             | Applies To                                |
| ---------------------------------- | ----------------------------------------- |
| `AnnotationTarget.CLASS`           | Classes, interfaces, objects, annotations |
| `AnnotationTarget.FUNCTION`        | Functions (including constructors)        |
| `AnnotationTarget.PROPERTY`        | Properties                                |
| `AnnotationTarget.VALUE_PARAMETER` | Function/constructor parameters           |
| `AnnotationTarget.FIELD`           | Backing fields                            |
| `AnnotationTarget.TYPE`            | Types in type usages                      |

### Retention

| Retention | Behavior                                          |
| --------- | ------------------------------------------------- |
| `SOURCE`  | Discarded by the compiler (not in bytecode)       |
| `BINARY`  | Stored in bytecode but not visible via reflection |
| `RUNTIME` | Stored in bytecode and accessible via reflection  |

### Usage

```kotlin
@ApiEndpoint(method = "GET", path = "/users/{id}")
fun getUser(@Path("id") id: Long): User {
    // ...
}
```

### Annotation Parameters

Annotation parameters are restricted to: primitive types, strings, classes, enums, other
annotations, and arrays of these types.

```kotlin
annotation class Validate(
    val min: Int = 0,
    val max: Int = Int.MAX_VALUE,
    val message: String,
    val groups: Array<KClass<*>> = []
)

@Validate(min = 1, max = 100, message = "Age must be between 1 and 100")
var age: Int = 0
```

### Meta-Annotations

```kotlin
@Target(AnnotationTarget.ANNOTATION_CLASS)
annotation class Validator

@Validator
annotation class MinLength(val value: Int)
```

## Sealed Interfaces

Kotlin 1.5+ supports sealed interfaces, enabling closed type hierarchies without requiring a common
base class.

```kotlin
sealed interface Message {
    val timestamp: Long
}

data class TextMessage(
    override val timestamp: Long,
    val content: String
) : Message

data class ImageMessage(
    override val timestamp: Long,
    val url: String,
    val altText: String?
) : Message

data class SystemMessage(
    override val timestamp: Long,
    val event: String
) : Message
```

Sealed interfaces enable exhaustive `when` expressions, just like sealed classes.

```kotlin
fun render(message: Message): String = when (message) {
    is TextMessage -> "[${message.timestamp}] ${message.content}"
    is ImageMessage -> "[${message.timestamp}] Image: ${message.altText ?: message.url}"
    is SystemMessage -> "[${message.timestamp}] System: ${message.event}"
}
```

A type can both extend a sealed class and implement a sealed interface:

```kotlin
sealed class Result<out T>
sealed interface Succeeded

data class Success<T>(val value: T) : Result<T>(), Succeeded
```

## Value Classes (Inline Classes)

Value classes provide a way to wrap a value with a distinct type without the runtime overhead of
object allocation.

```kotlin
@JvmInline
value class UserId(val value: Long)

@JvmInline
value class Email(val value: String) {
    init {
        require(value.contains("@")) { "Invalid email" }
    }

    val domain: String
        get() = value.substringAfter("@")
}
```

At runtime, `UserId` is represented as a plain `Long`. No object allocation occurs.

### Restrictions

- Must have exactly one property in the primary constructor.
- Cannot have `init` blocks that access the backing property before it is initialized (validation in
  `init` blocks is allowed).
- Cannot extend other classes (but can implement interfaces).
- Cannot be used as generic type arguments at runtime (they are erased).

### Interfaces

```kotlin
interface Identifiable {
    val id: String
}

@JvmInline
value class OrderId(val value: String) : Identifiable {
    override val id: String get() = value
}
```

### Equality and Identity

Value classes use structural equality based on the wrapped value.

```kotlin
val a = UserId(42)
val b = UserId(42)
println(a == b)  // true
println(a === b)  // false (identity check not meaningful for value classes)
```

## Operator Overloading

Kotlin allows overloading a fixed set of operators by defining functions with specific names.

### Arithmetic Operators

```kotlin
data class Vec2(val x: Double, val y: Double) {
    operator fun plus(other: Vec2) = Vec2(x + other.x, y + other.y)
    operator fun minus(other: Vec2) = Vec2(x - other.x, y - other.y)
    operator fun times(scalar: Double) = Vec2(x * scalar, y * scalar)
    operator fun unaryMinus() = Vec2(-x, -y)
}

val a = Vec2(1.0, 2.0)
val b = Vec2(3.0, 4.0)
val c = a + b  // Vec2(4.0, 6.0)
val d = -a     // Vec2(-1.0, -2.0)
```

### Comparison Operators

```kotlin
data class Version(val major: Int, val minor: Int, val patch: Int) : Comparable<Version> {
    override fun compareTo(other: Version): Int = compareValuesBy(
        this, other, { it.major }, { it.minor }, { it.patch }
    )
}

val v1 = Version(2, 1, 0)
val v2 = Version(2, 3, 0)
println(v1 < v2)  // true
```

### Indexing Operators

```kotlin
class Matrix(private val data: DoubleArray, val rows: Int, val cols: Int) {
    operator fun get(row: Int, col: Int): Double = data[row * cols + col]
    operator fun set(row: Int, col: Int, value: Double) {
        data[row * cols + col] = value
    }
}

val m = Matrix(DoubleArray(9), 3, 3)
m[0, 0] = 1.0
println(m[0, 0])  // 1.0
```

### In Operator

```kotlin
operator fun Version.rangeTo(other: Version): ClosedRange<Version> {
    return VersionRange(this, other)
}

for (v in Version(1, 0, 0)..Version(2, 0, 0)) {
    println(v)
}
```

### Invoke Operator

```kotlin
class Config {
    operator fun invoke(block: Config.() -> Unit): Config {
        this.block()
        return this
    }
}

val config = Config().invoke {
    // configure
}
```

### Available Operators

| Expression    | Operator Function    | Translation    |
| ------------- | -------------------- | -------------- |
| `a + b`       | `a.plus(b)`          | Binary plus    |
| `a - b`       | `a.minus(b)`         | Binary minus   |
| `a * b`       | `a.times(b)`         | Multiplication |
| `a / b`       | `a.div(b)`           | Division       |
| `a % b`       | `a.rem(b)`           | Remainder      |
| `-a`          | `a.unaryMinus()`     | Unary minus    |
| `++a` / `a++` | `a.inc()`            | Increment      |
| `a > b`       | `a.compareTo(b) > 0` | Comparison     |
| `a in b`      | `b.contains(a)`      | Contains       |
| `a[i]`        | `a.get(i)`           | Indexing       |
| `a(i)`        | `a.invoke(i)`        | Function call  |
| `a..b`        | `a.rangeTo(b)`       | Range          |

## Common Pitfalls

- \*\* Overusing reflection for tasks that can be solved with compile-time mechanisms. Reflection
  bypasses the type system and has significant performance cost. Prefer code generation, annotation
  processors, or inline functions.
- \*\* Using value classes where inheritance is needed. Value classes cannot extend other classes.
  If you need a type hierarchy, use a regular class or sealed class.
- \*\* Overloading operators in ways that violate the principle of least surprise. The `+` operator
  should represent addition or concatenation, not arbitrary behavior.
- \*\* Forgetting that `equals()` and `hashCode()` are not generated for value classes implementing
  interfaces that declare them. The interface equality is used instead of structural equality.
- \*\* Using reflection on value classes. Value classes are represented as their underlying type at
  runtime. `KClass` for a value class may not behave as expected -- use the underlying type for
  reflection operations.
