---
title: Types and Variables
description: val/var, basic types, type inference, and null safety.
slug: types-and-variables
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## val and var

`val` declares a read-only variable (assigned once). `var` declares a mutable variable.

```kotlin
val immutable: String = "assigned once"
var mutable: String = "can be reassigned"
mutable = "new value"
// immutable = "error" // Val cannot be reassigned
```

`val` does **not** mean the object is immutable -- it means the reference cannot be reassigned. The
underlying object may still be mutable.

```kotlin
val list = mutableListOf(1, 2, 3)
list.add(4)  // compiles: mutating the object, not the reference
// list = mutableListOf(5, 6) // error: val cannot be reassigned
```

Prefer `val` everywhere. Use `var` only when the variable genuinely must be reassigned.

## Basic Types

Kotlin represents all types as objects at the language level. The compiler maps them to JVM
primitives when possible (no boxing overhead).

| Kotlin Type | JVM Type  | Size (bits) |
| ----------- | --------- | ----------: |
| `Byte`      | `byte`    |           8 |
| `Short`     | `short`   |          16 |
| `Int`       | `int`     |          32 |
| `Long`      | `long`    |          64 |
| `Float`     | `float`   |          32 |
| `Double`    | `double`  |          64 |
| `Boolean`   | `boolean` |           1 |
| `Char`      | `char`    |          16 |

Numeric literals support underscores for readability:

```kotlin
val million = 1_000_000
val hex = 0xFF_EC_DE_5E
val binary = 0b1010_1010
val longVal = 42L
val doubleVal = 3.14
val floatVal = 3.14f
```

### Implicit Conversions

Kotlin does **not** perform implicit widening conversions. Every conversion is explicit.

```kotlin
val intVal: Int = 42
val longVal: Long = intVal.toLong()   // explicit
val doubleVal: Double = intVal.toDouble()
// val bad: Long = intVal  // compile error
```

The `toXxx()` methods exist on all numeric types: `toByte()`, `toShort()`, `toInt()`, `toLong()`,
`toFloat()`, `toDouble()`, `toChar()`.

## Type Inference

The compiler infers the type from the initializer when the type is unambiguous.

```kotlin
val name = "Kotlin"       // inferred: String
val count = 42             // inferred: Int
val price = 9.99           // inferred: Double
val flag = true            // inferred: Boolean
val items = listOf(1, 2)   // inferred: List<Int>
```

Type inference does not make Kotlin dynamically typed. The inferred type is concrete and enforced at
compile time.

```kotlin
var x = 42      // inferred: Int
// x = "string" // error: type mismatch
```

Use explicit types when the inferred type is not obvious or when the type carries important semantic
information.

```kotlin
val users: Map<Long, String> = emptyMap()
val response: Result<Data> = fetchFromNetwork()
```

## Strings

Strings are immutable. Kotlin supports string templates and multiline strings.

```kotlin
val name = "World"
val greeting = "Hello, $name!"
val expr = "2 + 2 = ${2 + 2}"

val json = """
    {
        "name": "$name",
        "value": ${42}
    }
""".trimIndent()
```

`trimIndent()` removes common leading whitespace. `trimMargin()` uses a custom margin prefix:

```kotlin
val text = """
    |Line 1
    |Line 2
    |Line 3
""".trimMargin()
```

Raw strings (triple-quoted) do not support escape sequences. Use `${'$'}` to insert a literal dollar
sign.

## Nullable Types and Null Safety

This is the defining feature of Kotlin's type system. The type `String` is non-nullable; `String?`
is nullable. The compiler prevents nullable values from being used where non-nullable values are
expected.

```kotlin
var nonNull: String = "always has a value"
// nonNull = null  // compile error

var nullable: String? = "might be null"
nullable = null    // OK

val len: Int = nonNull.length     // compile error: nullable receiver
val len2: Int? = nullable?.length  // OK: safe call, returns null if nullable is null
```

### Safe Call Operator: `?.`

Chains safely through potentially null references. Returns null if any receiver in the chain is
null.

```kotlin
val city: String? = user?.address?.city
// city is String? -- null if user, address, or city is null
```

### Elvis Operator: `?:`

Provides a default value when the left side is null.

```kotlin
val name: String = nullableName ?: "Unknown"
val length: Int = nullable?.length ?: 0
```

### Not-Null Assertion: `!!`

Throws `KotlinNullPointerException` if the value is null. Use sparingly -- it bypasses the null
safety system.

```kotlin
val name: String = nullableName!!  // throws if null
```

### Safe Cast: `as?`

Returns null instead of throwing `ClassCastException`.

```kotlin
val str: String? = obj as? String  // null if obj is not a String
```

### Late-Initialized Properties

Use `lateinit` for non-nullable properties that cannot be initialized in the constructor (dependency
injection, framework callbacks).

```kotlin
class DatabaseService {
    lateinit var connection: Connection

    fun init() {
        connection = DriverManager.getConnection(url)
    }

    fun query(sql: String): ResultSet {
        return connection.createStatement().executeQuery(sql)
    }
}
```

`lateinit` has tradeoffs:

- Accessing before initialization throws `UninitializedPropertyAccessException`.
- Only works with `var` and non-primitive types.
- You can check initialization with `::connection.isInitialized`.

### Nullable Collections vs Collections of Nullable Elements

```kotlin
val nullableList: List<Int>? = listOf(1, 2, 3)   // the list itself might be null
val listOfNullables: List<Int?> = listOf(1, null, 3)  // the list contains nullable elements

val result: Int? = nullableList?.firstOrNull()?.plus(1)
```

## Smart Casts

The compiler tracks null checks and type checks, automatically casting within the checked scope.

```kotlin
fun processValue(value: Any) {
    if (value is String) {
        // value is smart-cast to String here
        println(value.uppercase())
        println(value.length)
    }

    if (value is Int && value > 0) {
        // value is smart-cast to Int
        println(value * 2)
    }

    when (value) {
        is Double -> println(value.toBigDecimal())
        is List<*> -> println(value.size)
    }
}
```

Smart casts work when the compiler can prove the variable cannot change between the check and usage.
This means the variable must be `val` (or effectively final `var`) and not a custom property getter.

## Type Aliases

Type aliases create alternative names for existing types. They do not create new types.

```kotlin
typealias UserId = Long
typealias UserName = String
typealias UserMap = Map<UserId, UserName>

fun lookup(id: UserId): UserName? {
    return users[id]
}
```

Type aliases are useful for domain modeling and reducing verbosity in complex generic signatures.

## Common Pitfalls

- \*\* Using `!!` liberally. Each `!!` is a potential runtime crash. Prefer safe calls, Elvis
  operator, or early returns.
- \*\* Forgetting that `val` does not imply immutability of the referenced object.
  `val list = mutableListOf(1, 2)` is a mutable list behind a read-only reference.
- \*\* Confusing nullable collections with collections of nullable elements. `List<Int>?` vs
  `List<Int?>` are fundamentally different types.
- \*\* Using `lateinit` for properties that can be initialized in the constructor. If the value is
  known at construction time, pass it as a constructor parameter.
