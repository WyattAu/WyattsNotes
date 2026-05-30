---
title: delegation and result
slug: kotlin/delegation-and-result
date: 2026-05-30
tags:
  - Kotlin
categories:
  - Kotlin
description: Kotlin delegation patterns: by lazy, by observable, by vetoable, and class delegation. The Result type for error handling, sealed class pattern, and functional error recovery.
---

## Property Delegation

Property delegation transfers the getter and setter logic to a delegate object using the `by`
keyword. The delegate must provide `getValue` (and `setValue` for mutable properties).

```kotlin
import kotlin.properties.Delegates

val name: String by NameDelegate()

class NameDelegate {
    private var value = "unknown"

    operator fun getValue(thisRef: Any?, property: KProperty<*>): String {
        return value
    }

    operator fun setValue(thisRef: Any?, property: KProperty<*>, newValue: String) {
        value = newValue
    }
}
```

Kotlin provides several built-in delegates in `kotlin.properties.Delegates`.

## by lazy

Lazy initialization defers property initialization until the first access.

```kotlin
val database: Database by lazy {
    Database.connect(host, port, credentials)
}
```

The lazy delegate guarantees that the initializer runs at most once. Subsequent reads return the
cached value.

### LazyThreadSafetyMode

```kotlin
val safeValue: String by lazy(LazyThreadSafetyMode.SYNCHRONIZED) {
    expensiveComputation()
}

val fastValue: String by lazy(LazyThreadSafetyMode.PUBLICATION) {
    expensiveComputation()
}

val unsafeValue: String by lazy(LazyThreadSafetyMode.NONE) {
    expensiveComputation()
}
```

| Mode            | Behavior                                                              |
|-----------------|-----------------------------------------------------------------------|
| `SYNCHRONIZED`  | Default. Uses double-checked locking. Thread-safe, slight overhead.  |
| `PUBLICATION`   | Allows multiple threads to initialize. First returned value is kept. |
| `NONE`          | No thread safety guarantees. Fastest, single-threaded use only.       |

### When Not to Use lazy

- When the property is accessed from multiple threads and `NONE` is used.
- When the initialization can fail and you need retry logic.
- When the dependency is already provided at construction time (eager initialization is clearer).

```kotlin
class UserService(userDao: UserDao) {
    // Prefer constructor injection over lazy for required dependencies
    private val dao = userDao
}
```

## by Delegates.observable

Observable delegates invoke a callback after the property value changes.

```kotlin
var score: Int by Delegates.observable(0) { property, oldValue, newValue ->
    println("${property.name}: $oldValue -> $newValue")
}

score = 10
// score: 0 -> 10
score = 25
// score: 10 -> 25
```

### Reactive State Pattern

```kotlin
class Settings {
    var theme: String by Delegates.observable("light") { _, _, new ->
        notifyThemeChanged(new)
    }

    var fontSize: Int by Delegates.observable(14) { _, _, new ->
        notifyFontSizeChanged(new)
    }

    fun notifyThemeChanged(theme: String) { /* ... */ }
    fun notifyFontSizeChanged(size: Int) { /* ... */ }
}
```

The callback receives three parameters: the property reference, the old value, and the new value.
Use `Delegates.observable` when you need to react to changes but do not need to veto them.

## by Delegates.vetoable

Vetoable delegates invoke a callback before the property value changes. The callback returns a
boolean: `true` to accept the change, `false` to reject it.

```kotlin
var age: Int by Delegates.vetoable(0) { _, _, newValue ->
    newValue >= 0
}

age = 25
// accepted
age = -5
// rejected, age remains 25
```

### Validation Pattern

```kotlin
var password: String by Delegates.vetoable("") { _, _, newValue ->
    newValue.length >= 8 && newValue.any { it.isDigit() } && newValue.any { it.isLetter() }
}

var percentage: Int by Delegates.vetoable(50) { _, _, newValue ->
    newValue in 0..100
}
```

When the veto callback returns `false`, the property retains its previous value. Use `vetoable`
when you need to enforce invariants on property changes.

## by Delegates.notNull()

`notNull()` throws `IllegalStateException` on access before the property is assigned. It is useful
for properties that must be initialized after construction.

```kotlin
var name: String by Delegates.notNull()

fun initialize(name: String) {
    this.name = name
}

fun greet() {
    println("Hello, $name")
}
```

```kotlin
val obj = MyClass()
obj.name = "Alice"
obj.greet()

val obj2 = MyClass()
obj2.greet()
// IllegalStateException: Property name should be initialized before get.
```

## Class Delegation

The `by` keyword can delegate interface implementations to another object. This provides composition
without inheritance.

```kotlin
interface Printer {
    fun print(message: String)
}

interface Scanner {
    fun scan(): String
}

class NetworkPrinter : Printer {
    override fun print(message: String) = println("Network: $message")
}

class NetworkScanner : Scanner {
    override fun scan(): String = "scanned document"
}

class MultiFunctionDevice(
    printer: Printer,
    scanner: Scanner
) : Printer by printer, Scanner by scanner
```

### Composing from Multiple Interfaces

```kotlin
class LoggingPrinter(private val inner: Printer) : Printer by inner {
    override fun print(message: String) {
        println("[LOG] Printing: $message")
        inner.print(message)
    }
}

val printer = LoggingPrinter(NetworkPrinter())
printer.print("Hello")
// [LOG] Printing: Hello
// Network: Hello
```

### Delegate Patterns

```kotlin
interface Repository<T> {
    fun getById(id: Long): T?
    fun save(item: T)
}

class CachedRepository<T>(
    private val source: Repository<T>,
    private val cache: MutableMap<Long, T> = mutableMapOf()
) : Repository<T> by source {

    override fun getById(id: Long): T? {
        return cache[id] ?: source.getById(id)?.also { cache[id] = it }
    }

    override fun save(item: T) {
        cache[item.id] = item
        source.save(item)
    }
}
```

Class delegation compiles to forwarding calls to the delegate. The `by` keyword generates the
boilerplate for all interface methods automatically. Override individual methods to add behavior.

## Result Type

The `Result<T>` type represents either a success with a value of type `T` or a failure with an
exception. It is the standard Kotlin approach to functional error handling.

```kotlin
val success: Result<Int> = Result.success(42)
val failure: Result<Int> = Result.failure(IllegalArgumentException("Invalid input"))
```

### Result.runCatching

`runCatching` wraps a block in a `try/catch` and returns a `Result`.

```kotlin
val result = runCatching {
    Integer.parseInt(input)
}

val doubled = result.map { it * 2 }
```

### onSuccess and onFailure

```kotlin
parseConfig(configFile)
    .onSuccess { config -> applyConfig(config) }
    .onFailure { error -> log.error("Failed to parse config: ${error.message}") }
```

### getOrNull and getOrThrow

```kotlin
val parsed: Int? = runCatching { "123".toInt() }.getOrNull()
// parsed = 123

val failed: Int? = runCatching { "abc".toInt() }.getOrNull()
// failed = null

val value: Int = runCatching { "42".toInt() }.getOrThrow()
// value = 42
```

### Folding

`fold` transforms a `Result` into a single value regardless of success or failure.

```kotlin
val message = runCatching { loadData() }
    .fold(
        onSuccess = { "Loaded ${it.size} items" },
        onFailure = { "Error: ${it.message}" }
    )
```

### Recovery and Transform

```kotlin
val result: Result<Int> = runCatching { "abc".toInt() }

val recovered: Result<Int> = result.recover { 0 }
// success(0)

val transformed: Result<String> = result.mapCatching { it.toString() + "!" }
// failure(NumberFormatException)

val fallback: Result<String> = result.getOrElse { "default" }
// "default"
```

### Zip

```kotlin
val a: Result<Int> = Result.success(10)
val b: Result<Int> = Result.success(20)

val combined: Result<Int> = Result.success(10).zip(Result.success(20)) { x, y -> x + y }
// success(30)
```

## Error Handling Strategies

### Result vs Exceptions

| Aspect           | Result                              | Exceptions                    |
|------------------|-------------------------------------|-------------------------------|
| Explicitness     | Must be handled in the type system  | Can be ignored at call site   |
| Composability    | Chains with `map`, `flatMap`        | Requires try/catch blocks     |
| Performance      | No stack trace allocation on happy path | Stack trace on every throw |
| Use case         | Expected failures, domain errors    | System failures, bugs         |

Use `Result` for expected failures that are part of the domain logic. Use exceptions for
programming errors, system failures, and cases where the caller cannot meaningfully recover.

### Migrating to Result

```kotlin
// Before: throwing exceptions for expected failures
fun parseAge(input: String): Int {
    val age = input.toInt()
    require(age in 0..150) { "Age out of range" }
    return age
}

// After: returning Result
fun parseAge(input: String): Result<Int> {
    return runCatching {
        val age = input.toInt()
        require(age in 0..150) { "Age out of range" }
        age
    }
}
```

### Functional Error Recovery Chain

```kotlin
fun fetchUserProfile(userId: Long): Result<Profile> {
    return runCatching { api.getProfile(userId) }
        .recoverCatching { fallbackService.getProfile(userId) }
        .map { it.copy(lastUpdated = Clock.System.now()) }
        .onFailure { log.warn("Could not fetch profile for $userId: ${it.message}") }
}
```

## Common Pitfalls

- **Using `by lazy` with `var`.** `lazy` only works with `val` properties. Using it with `var` is a
  compilation error. For late-initialized mutable properties, use `lateinit var` or
  `Delegates.notNull()`.
- **Accessing `lateinit var` before initialization.** This throws `UninitializedPropertyAccessException`.
  Use `::propertyName.isInitialized` to check if a `lateinit` property has been set.
- **Overusing `Delegates.observable` for complex state management.** For reactive UI state,
  consider `StateFlow` or `LiveData` which integrate with the coroutine and lifecycle ecosystems.
- **Ignoring the `Result` exception.** `result.getOrNull()` silently discards the error. Always handle
  the failure case explicitly with `onFailure`, `fold`, or `getOrElse`.
- **Nesting `runCatching` blocks without recovery.** Nested `runCatching` wraps exceptions
  multiple times. Use `mapCatching` or `flatMap` to chain operations within a single `Result`
  context.
- **Using class delegation to bypass interface contracts.** The `by` keyword delegates all
  interface methods. If the delegate does not fully satisfy the interface contract, override the
  specific methods to enforce invariants.
- **Using `SYNCHRONIZED` lazy in single-threaded contexts unnecessarily.** The default
  `LazyThreadSafetyMode.SYNCHRONIZED` adds synchronization overhead. Use `NONE` when the property
  is only accessed from a single thread (e.g., in an Android Activity or a confined coroutine).

## Summary

This topic covers Kotlin delegation patterns and the Result type, including practical applications
for property delegation, interface delegation, and functional error handling.

**Key concepts include:**

- property delegation with `by lazy`, `by observable`, `by vetoable`
- class delegation for interface composition
- the `Result<T>` type for functional error handling
- `runCatching`, `map`, `recover`, and `fold` for Result chains
- choosing between Result and exceptions

Understanding delegation and Result patterns reduces boilerplate, improves code reuse, and makes
error handling more explicit and composable. Practice these patterns with real-world scenarios to
build fluency.
