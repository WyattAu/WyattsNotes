---
title: scope functions
slug: kotlin/scope-functions
date: 2026-05-30
tags:
  - Kotlin
categories:
  - Kotlin
description: "Kotlin scope functions: let, apply, run, also, with, and withContext. Understanding when to use each, receiver vs context lambda, chaining patterns, and."
---

## Introduction

Scope functions execute a block of code within the context of an object. Kotlin provides five built-in
scope functions (`let`, `apply`, `run`, `also`, `with`) and one coroutine-specific function
(`withContext`). They differ in two dimensions: whether the block receives the object as `this`
(receiver) or as `it` (argument), and what the block returns (the object itself or the block's
result).

```
Function   | Block context | Returns
-----------|---------------|---------------------
let        | it            | block result
apply      | this          | receiver
run        | this          | block result
also       | it            | receiver
with       | this          | block result
```

## let

`let` receives the object as `it` and returns the block result. It is most commonly used for
null-safe scoping and value transformation.

```kotlin
val name: String? = null
val length = name?.let {
    println("Processing: $it")
    it.length
}
// length = null, block never executed
```

### Null-Check Pattern

```kotlin
fun processEmail(email: String?) {
    email?.let {
        val domain = it.substringAfter("@")
        println("Domain: $domain")
    } ?: println("No email provided")
}
```

### Transforming a Value

```kotlin
val raw = "  hello  "
val trimmed = raw.let {
    it.trim().uppercase()
}
// trimmed = "HELLO"
```

### Limiting Variable Scope

```kotlin
val result = listOf(1, 2, 3).firstOrNull()?.let { value ->
    val doubled = value * 2
    val formatted = "Result: $doubled"
    formatted
}
```

## apply

`apply` receives the object as `this` and returns the object itself. Use it for configuring or
initializing objects.

```kotlin
val request = Request.Builder()
    .apply {
        url = "https://example.com/api"
        method = "POST"
        headers["Content-Type"] = "application/json"
    }
    .build()
```

### Android View Setup

```kotlin
val textView = TextView(context).apply {
    text = "Welcome"
    textSize = 18f
    setPadding(16, 8, 16, 8)
    setOnClickListener { navigateToDetails() }
}
```

### Builder Configuration

```kotlin
val config = DatabaseConfig().apply {
    host = "localhost"
    port = 5432
    maxConnections = 10
    timeoutSeconds = 30
}
```

`apply` returns the receiver, making it ideal for fluent configuration chains.

## run

`run` receives the object as `this` and returns the block result. It has two forms: as an extension
function on an object, and as a standalone function without a receiver.

### Extension run

```kotlin
val person = Person("Alice", 30)
val greeting = person.run {
    "$name is $age years old"
}
// greeting = "Alice is 30 years old"
```

Use extension `run` to compute a result from an object when you need multiple property accesses.

### Non-Extension run

```kotlin
val hexColor = run {
    val r = 255
    val g = 128
    val b = 0
    "#%02x%02x%02x".format(r, g, b)
}
```

The non-extension `run` is useful for grouping related computations without exposing intermediate
variables to the surrounding scope.

### Computing a Result Requiring Null Safety

```kotlin
val displayName = user?.run {
    if (isActive) "$firstName $lastName" else "$lastName, $firstName"
}
```

## also

`also` receives the object as `it` and returns the object itself. It is used for side effects that
should not affect the chain.

```kotlin
val numbers = mutableListOf(1, 2, 3)
    .also { println("Initial: $it") }
    .also { require(it.isNotEmpty()) }
numbers.add(4)
```

### Logging

```kotlin
fun findUser(id: Long): User {
    return repository.findById(id)
        .also { log.debug("Found user: $it") }
        .also { metrics.increment("user.queries") }
}
```

### Debugging Intermediate Values

```kotlin
val result = data
    .filter { it.isValid }
    .also { println("After filter: ${it.size} items") }
    .map { it.transform() }
    .also { println("After map: ${it.size} items") }
```

`also` does not modify the object in the chain, making it safe for logging and debugging.

## with

`with` is not an extension function. It takes the object as its first argument and a lambda as its
second. Inside the block, the object is `this`. It returns the block result.

```kotlin
val config = Config()
with(config) {
    host = "localhost"
    port = 8080
    debug = true
}
```

### Property Access Without Qualification

```kotlin
val service = with(config) {
    println("Connecting to $host:$port")
    connect(host, port, debug)
}
```

### Grouping Operations on an Object

```kotlin
fun formatPerson(person: Person): String = with(person) {
    val fullName = "$firstName $lastName"
    val ageBracket = when {
        age < 18 -> "minor"
        age < 65 -> "adult"
        else -> "senior"
    }
    "$fullName ($ageBracket)"
}
```

`with` is best suited for calling multiple functions or accessing multiple properties on a single
object without writing the receiver name repeatedly.

## withContext

`withContext` switches the coroutine context for the duration of the block and returns the block
result. It is used for thread dispatching in coroutines.

```kotlin
suspend fun fetchUser(id: Long): User = withContext(Dispatchers.IO) {
    userRepository.findById(id)
}
```

### Switching Dispatchers

```kotlin
suspend fun loadAndDisplay() {
    val data = withContext(Dispatchers.IO) {
        api.fetchData()
    }
    withContext(Dispatchers.Main) {
        textView.text = data.message
    }
}
```

### Passing a Custom Context

```kotlin
suspend fun processWithTimeout() = withContext(TimeoutCoroutineScope(5000)) {
    performLongRunningOperation()
}
```

`withContext` is a suspend function that can only be called from a coroutine or another suspend
function. Unlike the other scope functions, it involves coroutine context switching and should be
used only when thread or context changes are needed.

## Choosing the Right Function

| Function   | Context | Returns        | Primary Use                     |
|------------|---------|----------------|---------------------------------|
| `let`      | `it`    | block result   | Null safety, transforms        |
| `run`      | `this`  | block result   | Compute result from object      |
| `with`     | `this`  | block result   | Multiple operations on object  |
| `apply`    | `this`  | receiver       | Configuration, initialization   |
| `also`     | `it`    | receiver       | Side effects, logging, debug   |

Use the following decision process:

- **Do you need to return the object itself?** Use `apply` or `also`.
- **Do you need to return the block result?** Use `let`, `run`, or `with`.
- **Do you prefer `this` or `it` context?** Use `this` for frequent member access, `it` when you
  want to shadow the outer scope or keep the lambda short.

## Chaining Patterns

Scope functions can be chained to build readable pipelines.

### Configure, Validate, Transform

```kotlin
val config = mutableMapOf<String, Any>()
    .apply { put("host", "localhost") }
    .apply { put("port", 8080) }
    .also { require(it.containsKey("host")) }
    .let { Config.fromMap(it) }
```

### Build, Log, and Return

```kotlin
fun createUser(name: String, email: String): User {
    return User(name = name, email = email)
        .also { log.info("Creating user: ${it.name}") }
        .also { validate(it) }
        .also { repository.save(it) }
}
```

### Null-Safe Transformation Chain

```kotlin
val displayName = user
    ?.let { normalizeName(it.firstName) }
    ?.also { log.debug("Normalized name: $it") }
    ?: "Guest"
```

### Builder with Validation

```kotlin
val server = ServerBuilder()
    .apply { host = "0.0.0.0" }
    .apply { port = 8080 }
    .run {
        require(port in 1024..65535) { "Invalid port" }
        build()
    }
    .also { log.info("Server started on ${it.host}:${it.port}") }
```

## Common Pitfalls

- **Using `let` for configuration when `apply` is more appropriate.** `let` returns the block
  result, not the receiver. If you intend to configure an object and continue using it, `apply` is
  clearer.
- **Over-nesting scope functions.** Each scope function adds a level of indentation and a new
  context. If you have more than two nested scope functions, extract to a named function.
- **Using `also` for transformation.** `also` returns the receiver, not the block result. If you
  need to transform a value, use `let` or `map`.
- **Shadowing `this` with nested `apply` or `run`.** When nesting receiver-based scope functions,
  `this` refers to the innermost receiver. Use explicit `this@OuterClass` or `also`/`let` to access
  the outer receiver.
- **Using `with` on nullable receivers.** `with` is not an extension function and does not support
  the `?.` safe-call syntax. Use `run` instead when working with nullable objects.
- **Using `also` with side effects that throw exceptions.** If the side effect in `also` throws, the
  chain is broken and the receiver is lost. Use `onSuccess`-style patterns or wrap in `try/catch`
  when exceptions are possible.
- **Confusing `run` (extension) with `run` (non-extension).** The non-extension `run` has no
  receiver and is used as a grouping mechanism. The extension `run` operates on an object and is
  used to compute a result.

## Summary

This topic covers Kotlin scope functions and their practical usage patterns, including when to use
each function, how they differ in context and return type, and how to combine them effectively.

**Key concepts include:**

- receiver vs argument context (`this` vs `it`)
- return type (receiver vs block result)
- null-safe scoping with `let`
- object configuration with `apply`
- side effects with `also`
- coroutine context switching with `withContext`
- chaining and composition patterns

Understanding scope functions thoroughly improves readability and reduces boilerplate in Kotlin
code. Practice each function with realistic examples to build fluency.
