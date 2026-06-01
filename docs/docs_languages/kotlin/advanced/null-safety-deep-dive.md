---
title: Null Safety Deep Dive
description: 'Kotlin Null Safety Deep Dive notes covering key definitions, core concepts, worked examples, and practice questions for complete exam preparation and revision.'
slug: kotlin/null-safety-deep-dive
date: 2026-05-31
tags:
  - Kotlin
categories:
  - Kotlin
---

## Nullable Types

Kotlin's type system distinguishes between nullable and non-null types at compile time:

```kotlin
var name: String = "Alice"       // non-null: cannot hold null
var nickname: String? = null    // nullable: can hold null or a String
```

Assigning `null` to a non-null type is a compile-time error:

```kotlin
name = null  // compile error: Null can not be a value of a non-null type String
```

Non-null types are the default. The `?` suffix makes a type nullable. The compiler enforces this
distinction throughout — you cannot pass a nullable `String?` where `String` is expected without
explicit handling.

## Safe Calls and Elvis

### Safe Call Operator (?.)

The safe call operator returns the value if the receiver is non-null, or `null` if the receiver is
null. The entire chain short-circuits:

```kotlin
val length: Int? = name?.length        // null-safe access
val city: String? = user?.address?.city  // chains short-circuit
```

No `NullPointerException` at runtime — the compiler inserts null checks.

### Elvis Operator (?:)

The elvis operator provides a default value when the left side is null:

```kotlin
val displayName: String = name ?: "Anonymous"
val len: Int = name?.length ?: 0
```

It is equivalent to:

```kotlin
val displayName = if (name != null) name else "Anonymous"
```

### let Scope

`let` executes a block only when the receiver is non-null. Inside the block, `it` is the
non-null unwrapped value:

```kotlin
name?.let {
    println("Name is ${it.uppercase()}")  // it: String (non-null)
    println("Length: ${it.length}")        // safe to access length
}
```

With explicit name:

```kotlin
name?.let { n ->
    println("Name is $n")
}
```

Common pattern for early returns:

```kotlin
fun process(user: User?) {
    val email = user?.email ?: return
    sendEmail(email)
}
```

## Not-Null Assertions

### !! Operator

The `!!` operator asserts that a value is non-null. If it is null, a `KotlinNullPointerException`
is thrown at runtime:

```kotlin
val name: String? = getName()
val len: Int = name!!.length  // throws NPE if name is null
```

### When to Use

Use `!!` only when you are **certain** the value is non-null and no better alternative exists:

```kotlin
// Acceptable: precondition known to hold
val result = list.first()!!.someMethod()

// Better: avoid !! with safe alternatives
val result = list.firstOrNull()?.someMethod()
```

### When to Avoid

Prefer `!!` alternatives in most cases:

```kotlin
// Instead of: val len = name!!.length
// Use:
val len = name?.length ?: throw IllegalStateException("name is required")
val len = requireNotNull(name) { "name is required" }.length
val len = name!!.length  // only when you truly guarantee non-null
```

`requireNotNull` provides a descriptive error message, unlike `!!` which gives a generic NPE.

## Null Safety and Java Interop

### Platform Types

When calling Java code, Kotlin does not know whether a value can be null. Such types are called
**platform types** and represented as `String!` (in the IDE). The compiler allows both nullable
and non-null usage:

```java
// Java
public String getName() { return null; }
```

```kotlin
// Kotlin — both compile, but one may NPE at runtime
val name: String = getName()   // risky: may NPE
val name: String? = getName()  // safe: treat as nullable
```

### @Nullable and @NotNull Annotations

Annotate Java APIs to help Kotlin's compiler:

```java
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

@NotNull
public String getName() { return name; }

@Nullable
public String getNickname() { return nickname; }
```

Supported annotation packages:
- `org.jetbrains.annotations` (JetBrains)
- `javax.annotation` (JSR-305)
- `androidx.annotation` (Android)
- `lombok.NonNull` (Lombok)

Without annotations, Kotlin assumes the worst — the value could be null.

## Contracts

### Smart Casts After Null Checks

Kotlin performs **smart casts** after null checks:

```kotlin
val name: String? = getName()

if (name != null) {
    println(name.length)  // name is smart-cast to String (non-null)
}
```

The compiler tracks null-check flow and automatically casts inside the safe branch.

### Compiler Contracts

Contracts tell the compiler about function behaviour. The standard library uses them internally:

```kotlin
public inline fun <T> T?.let(block: (T) -> R): R {
    contract { returns() implies (this@let != null) }
    return block(this)
}
```

`returns() implies (this@let != null)` tells the compiler: after `let` returns, the receiver is
non-null. This is why smart casts work inside `let`.

Custom contracts:

```kotlin
fun String?.requireNonEmpty(): String {
    contract { returns() implies (this@requireNonEmpty != null) }
    require(!this.isNullOrEmpty()) { "string must be non-empty" }
    return this!!
}
```

### Limitations

Contracts have limitations:
- They only work with `inline` functions.
- They cannot express complex relationships (e.g., "if the function returns false, then the parameter
  is null").
- `contract` blocks are experimental in some compiler versions.

## Collections and Null

### emptyList() vs listOf(null)

```kotlin
val empty: List<String> = emptyList()       // empty, non-null list
val withNull: List<String?> = listOf(null)   // list with one null element
val mixed: List<String?> = listOf("a", null, "b")
```

`emptyList<String>()` is an empty list of non-null strings. `listOf(null)` is a list of nullable
strings containing one element.

### filterNotNull

Removes null elements and returns a `List<T>` (non-null):

```kotlin
val items: List<String?> = listOf("hello", null, "world")
val nonNull: List<String> = items.filterNotNull()  // ["hello", "world"]
```

### mapNotNull

Maps and filters in one pass — drops entries where the transform returns null:

```kotlin
val names: List<String> = users.mapNotNull { it.name }
// equivalent to: users.map { it.name }.filterNotNull()
```

### Map with Nullable Values

```kotlin
val map: Map<String, String?> = mapOf(
    "name" to "Alice",
    "nickname" to null,
)
val name: String? = map["name"]
```

## Sealed Classes and When

### Exhaustive When with Sealed Classes

Sealed classes restrict inheritance to a known set of subclasses. `when` used as an expression must
be exhaustive:

```kotlin
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
    object Loading : Result()
}

fun describe(result: Result): String = when (result) {
    is Result.Success -> "Data: ${result.data}"
    is Result.Error -> "Error: ${result.message}"
    Result.Loading -> "Loading..."
    // no else needed — exhaustive
}
```

### Handling Null Branches

When a sealed class property is nullable, include the null check:

```kotlin
val result: Result? = get()

val message = when (result) {
    null -> "No result"
    is Result.Success -> "Got: ${result.data}"
    is Result.Error -> "Failed: ${result.message}"
    Result.Loading -> "Still loading"
}
```

The `null` branch must be handled explicitly since `when` is an expression and the compiler cannot
prove it covers the null case.

## Common Pitfalls

1. **Confusing `List<String?>` with `List<String>?`.** `List<String?>` is a non-null list whose
   elements may be null. `List<String>?` is a nullable list whose elements are non-null.

2. **Using !! on platform types from Java.** Java return values may be null at runtime regardless
   of how you use them in Kotlin. Always prefer safe calls or explicit null checks on Java data.

3. **Forgetting to handle null in when expressions.** When a `when` block is used as an expression
   and the subject is nullable, omitting the `null` branch is a compile error. Add it explicitly.

4. **Smart cast failure after property access.** Smart casts fail if the property is a `var` that
   could be modified between the check and usage. Use a local `val` to capture it:

   ```kotlin
   val local = user.name  // capture once
   if (local != null) {
       println(local.length)  // smart cast succeeds
   }
   ```

5. **Unnecessary nullable on generic types.** `List<String?>` vs `List<String>` — mark nullability
   at the element level, not the collection level, unless the entire collection can be null.

6. **Overusing !! in tests.** `!!` is common in test code but hides bugs. Prefer `requireNotNull`
   with a descriptive message or use test assertion libraries that give clear failure messages.

7. **Forgetting that `lateinit` does not make a type nullable.** `lateinit var` bypasses null
   safety for non-null initialization. Accessing it before assignment throws
   `UninitializedPropertyAccessException`, not NPE.

## Summary

- Non-null types are the default in Kotlin; add `?` to make a type nullable.
- `?.` safely accesses nullable values; `?:` provides defaults.
- `let` scopes execute blocks on non-null receivers with smart-cast `it`.
- `!!` forces non-null with an NPE on null — prefer `requireNotNull` for better errors.
- Java interop uses platform types — annotate Java APIs with `@Nullable`/`@NotNull`.
- Smart casts after null checks are powered by compiler contracts on `inline` functions.
- `filterNotNull` and `mapNotNull` remove null elements; understand `List<String?>` vs `List<String>?`.
- Sealed classes guarantee exhaustive `when`; handle `null` branches explicitly when nullable.
