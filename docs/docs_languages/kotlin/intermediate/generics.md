---
title: Generics
description:
  Generic classes and functions, variance, type constraints, star projection, and reified types.
slug: generics
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Generic Classes and Functions

Generics allow types to be parameterized. The compiler enforces type safety at compile time, and the
JVM erases generic type parameters at runtime (type erasure).

```kotlin
class Box<T>(val value: T)

val intBox: Box<Int> = Box(42)
val strBox: Box<String> = Box("hello")
// val wrong: Box<Int> = Box("hello")  // compile error
```

Generic functions:

```kotlin
fun <T> singletonList(item: T): List<T> = listOf(item)
fun <T : Comparable<T>> maxOf(a: T, b: T): T = if (a > b) a else b
```

## Variance

Variance describes how subtyping relationships between generic type arguments compose with the
container type. Kotlin uses **declaration-site variance** with `in` and `out` modifiers.

### Invariance

By default, generic types are invariant. `Box<Dog>` is not a subtype of `Box<Animal>`.

```kotlin
class Container<T>

val dogs: Container<Dog> = Container()
// val animals: Container<Animal> = dogs  // compile error
```

### Covariance (`out`)

If a generic type is only used as output (produced), it can be declared covariant with `out`.
`Producer<Dog>` is a subtype of `Producer<Animal>`.

```kotlin
class Producer<out T>(private val value: T) {
    fun get(): T = value
}

val dogProducer: Producer<Dog> = Producer(Dog())
val animalProducer: Producer<Animal> = dogProducer  // OK
```

The compiler enforces that `T` only appears in **out-positions** (return types). It cannot appear as
a parameter type or in a mutable property.

```kotlin
class Producer<out T>(private val value: T) {
    fun get(): T = value       // OK -- T in return position
    // fun set(t: T) {}        // compile error -- T in parameter position
}
```

### Contravariance (`in`)

If a generic type is only used as input (consumed), it can be declared contravariant with `in`.
`Consumer<Animal>` is a subtype of `Consumer<Dog>`.

```kotlin
class Consumer<in T> {
    fun consume(value: T) {}
}

val animalConsumer: Consumer<Animal> = Consumer()
val dogConsumer: Consumer<Dog> = animalConsumer  // OK
```

The compiler enforces that `T` only appears in **in-positions** (parameter types). It cannot appear
as a return type.

### Variance Mnemonic

```
Producer<out T>  -- produces T, covariant
Consumer<in T>   -- consumes T, contravariant
```

### Declaration-Site vs Use-Site Variance

Kotlin prefers declaration-site variance (Java only has use-site). Declaration-site variance means
the class author decides the variance once, and all call sites benefit.

```kotlin
// Declaration-site (Kotlin style)
class Box<out T>(val value: T)

// Use-site (Java style, also available in Kotlin)
fun copy(from: Array<out Any>, to: Array<in Any>) {
    for (i in from.indices) {
        to[i] = from[i]
    }
}
```

Use-site variance is useful when declaration-site variance is not possible (e.g., arrays, which are
invariant on the JVM).

## Type Constraints

Upper bounds restrict the types accepted as type arguments.

### Single Bound

```kotlin
fun <T : Comparable<T>> sort(list: MutableList<T>) {
    list.sort()
}

sort(mutableListOf(3, 1, 2))      // OK -- Int : Comparable<Int>
// sort(mutableListOf(any()))      // compile error -- Any is not Comparable
```

### Multiple Bounds

```kotlin
fun <T> ensureTrailingPeriod(seq: T): String
    where T : CharSequence,
          T : Appendable
{
    if (!seq.endsWith('.')) {
        seq.append('.')
    }
    return seq.toString()
}
```

### Nullable Upper Bounds

```kotlin
fun <T : Any> requireNonNull(value: T?): T {
    return value ?: throw IllegalArgumentException("Value is null")
}
```

`T : Any` constrains `T` to non-nullable types. Without this bound, `T` defaults to `T : Any?`,
allowing nullable types.

## Star Projection

Star projection (`*`) is used when the exact type argument is unknown or irrelevant. It is the
Kotlin equivalent of Java's raw types but is type-safe.

```kotlin
fun printAll(list: List<*>) {
    for (item in list) {
        println(item)  // item has type Any?
    }
}
```

Star projection behavior depends on variance:

| Declaration       | Star projection `*` means              |
| ----------------- | -------------------------------------- |
| `Producer<out T>` | `Producer<out Nothing>`                |
| `Consumer<in T>`  | `Consumer<in Any?>`                    |
| `MutableList<T>`  | `MutableList<out Nothing>` (read-only) |

```kotlin
fun process(producer: Producer<*>) {
    val value: Any? = producer.get()  // OK
}

fun process(consumer: Consumer<*>) {
    // consumer.consume(value)  // compile error -- cannot write to star projection
}
```

## Reified Types

Type parameters are erased at runtime, so you cannot perform type checks or create instances of a
type parameter directly.

```kotlin
// This does not compile:
// fun <T> isType(value: Any): Boolean = value is T

// Using reified:
inline fun <reified T> isType(value: Any): Boolean = value is T

println(isType<String>("hello"))  // true
println(isType<Int>("hello"))     // false
```

The `reified` modifier requires the function to be `inline`. The compiler substitutes the actual
type argument at each call site, making the type available at runtime.

### Common Reified Use Cases

```kotlin
// Type-safe casting
inline fun <reified T> Any.castOrNull(): T? = this as? T

// Generic logging
inline fun <reified T> T.log(): T {
    println("${T::class.simpleName}: $this")
    return this
}

// Intent extras (Android)
inline fun <reified T : Parcelable> Intent.getParcelable(key: String): T? {
    return getParcelableExtra(key)
}
```

### Reified Type Parameters in Inline Classes

```kotlin
inline class Id<T : Any>(val value: Long) {
    inline fun <reified R> isSameType(other: Id<R>): Boolean =
        T::class == R::class
}
```

## Generics and Arrays

Arrays on the JVM are covariant and reified (type information is preserved at runtime). Kotlin's
generics are invariant and erased. This mismatch requires attention.

```kotlin
// Array is covariant (JVM behavior)
val strings: Array<String> = arrayOf("a", "b")
val objects: Array<Any> = strings  // compile error in Kotlin (unlike Java)

// Kotlin prevents this for safety. Use Array<out Any> if needed:
val objects: Array<out Any> = strings  // OK -- read-only
```

## Generic Extension Properties

```kotlin
val <T> List<T>.secondHalf: List<T>
    get() = subList(size / 2, size)

val <K, V> Map<K, V>.keysAsStrings: String
    get() = keys.joinToString(", ")
```

## Type Erasure and Runtime

Generic type parameters are erased at runtime. Two instances of `List<String>` and `List<Int>` are
both `List` at runtime.

```kotlin
val stringList = listOf("a", "b")
val intList = listOf(1, 2)

println(stringList::class == intList::class)  // true -- both are ArrayList
```

Reified types and inline functions are the primary mechanism for accessing generic type information
at runtime in Kotlin.

## Common Pitfalls

- \*\* Confusing `out` and `in` variance. Remember: producers are `out`, consumers are `in`. If a
  class both produces and consumes `T`, it must be invariant.
- \*\* Using star projection when you actually need the type. Star projection treats the type as
  unknown, which means you can read as `Any?` but cannot write. If you need the specific type, pass
  the type parameter explicitly.
- \*\* Forgetting that reified type parameters require `inline`. Non-inline functions cannot have
  reified type parameters.
- \*\* Storing reified type parameters in collections. Since reified works through inline expansion,
  you cannot store a type parameter for later use. The type information is only available at the
  call site during compilation.
- \*_ Using `List<_>` and then trying to add elements. Star projection makes the list effectively
  read-only for generic types.
