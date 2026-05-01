---
title: Functions
description:
  Functions — Function Declarations; Default Parameters; Mixing Positional and
  Named Arguments; Named Arguments with worked examples and exam-style
  questions.
slug: functions
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Function Declarations

Kotlin uses the `fun` keyword. The return type follows the parameter list, separated by a colon.

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

// Single-expression body -- return type can be inferred
fun add(a: Int, b: Int) = a + b

// Unit return type (equivalent to void in Java)
fun log(message: String) {
    println(message)
}
// Unit is explicit here
fun log(message: String): Unit { println(message) }
```

## Default Parameters

Parameters can have default values, eliminating the need for method overloading in most cases.

```kotlin
fun connect(
    host: String,
    port: Int = 443,
    timeout: Long = 30_000,
    useTls: Boolean = true
): Connection {
    // ...
}
```

Call with positional arguments or named arguments:

```kotlin
connect("example.com")                    // all defaults
connect("example.com", 8080)              // port=8080, rest default
connect("example.com", timeout = 60_000)  // host + timeout, rest default
connect(timeout = 60_000, host = "example.com")  // any order with named args
```

### Mixing Positional and Named Arguments

Positional arguments must precede named arguments.

```kotlin
connect("example.com", 8080, useTls = false)  // valid
// connect(host = "example.com", 8080)          // error: named after positional
```

## Named Arguments

Named arguments improve readability for functions with multiple parameters of the same type.

```kotlin
val rect = createRectangle(
    width = 100,
    height = 50,
    x = 10,
    y = 20
)
```

When calling Java methods from Kotlin, named arguments cannot be used (the JVM does not preserve
parameter names by default; use `-parameters` compiler flag to enable this).

## Extension Functions

Extension functions add functions to existing classes without modifying their source code or using
inheritance. They are resolved statically -- they are not virtual.

```kotlin
fun String.isPalindrome(): Boolean {
    return this == this.reversed()
}

fun String.addExclamation(suffix: String = "!"): String {
    return this + suffix
}

println("racecar".isPalindrome())  // true
println("hello".addExclamation())  // hello!
```

The receiver type (`String` in this case) is the type being extended. Inside the function body,
`this` refers to the receiver instance.

### Nullable Receiver Extensions

```kotlin
fun String?.orEmpty(): String = this ?: ""

val nullStr: String? = null
println(nullStr.orEmpty())  // ""
println("hello".orEmpty())  // "hello"
```

### Extension Functions vs Utility Functions

Extension functions compile to static functions with the receiver as the first parameter. They do
not modify the class.

```kotlin
// Kotlin
fun String.isPalindrome() = this == this.reversed()

// Equivalent Java
public static boolean isPalindrome(String receiver) {
    return receiver.equals(new StringBuilder(receiver).reverse().toString());
}
```

### Import and Scope

Extension functions are imported and resolved at compile time based on static types.

```kotlin
// In file StringUtils.kt
package com.example.util

fun String.capitalizeWords(): String =
    split(" ").joinToString(" ") { it.replaceFirstChar { c -> c.uppercase() } }
```

```kotlin
import com.example.util.capitalizeWords

println("hello world".capitalizeWords())
```

If a member function and an extension function have the same signature, the **member always wins**.

## Infix Functions

Functions marked `infix` can be called with infix notation (without parentheses and dots) when they
have a single parameter.

```kotlin
infix fun Int.power(exponent: Int): Long {
    return toLong().pow(exponent)
}

val result = 2 power 10  // 1024
```

Standard library examples:

```kotlin
val pair = "key" to "value"
val range = 1 until 10
val contains = 5 in range
```

Infix functions must have exactly one parameter and must be a member function or an extension
function. The parameter cannot accept a variable number of arguments and cannot have a default
value.

## Lambda Expressions

Lambdas are anonymous functions enclosed in curly braces. The last expression is the return value.

```kotlin
val sum: (Int, Int) -> Int = { a, b -> a + b }
val double: (Int) -> Int = { it * 2 }
val print: (String) -> Unit = { println(it) }
val noArgs: () -> Unit = { println("executed") }
```

### Trailing Lambda Syntax

When a function's last parameter is a function type, the lambda can be placed outside the
parentheses.

```kotlin
list.filter({ it > 0 })
list.filter { it > 0 }

list.fold(0) { acc, element -> acc + element }
```

### Implicit Parameter: `it`

When a lambda has a single parameter, its name defaults to `it`.

```kotlin
list.filter { it > 0 }        // 'it' is the implicit parameter
list.filter { element -> element > 0 }  // equivalent with explicit name
```

### Destructuring in Lambdas

```kotlin
val map = mapOf("a" to 1, "b" to 2)
map.forEach { (key, value) ->
    println("$key -> $value")
}
```

### Lambdas with Multiple Statements

```kotlin
val transform: (Int) -> String = {
    val doubled = it * 2
    val formatted = String.format("%04d", doubled)
    formatted
}
```

### Returning from a Lambda

`return` returns from the enclosing function. Use a labeled return to return from the lambda.

```kotlin
fun findFirstNegative(list: List<Int>): Int? {
    list.forEach {
        if (it < 0) return it  // returns from findFirstNegative
    }
    return null
}
```

## Higher-Order Functions

Functions that take functions as parameters or return functions.

```kotlin
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

val result = operate(3, 4) { x, y -> x * y }  // 12
```

### Function Types

Function types use the parenthesized parameter list followed by `->` and the return type.

```kotlin
val noParams: () -> Unit = { }
val oneParam: (Int) -> Boolean = { it > 0 }
var twoParams: (String, Int) -> String = { s, i -> s.repeat(i) }
val nullableFunction: ((Int) -> String)? = null
val functionReturningFunction: (Int) -> (Int) -> Int = { a -> { b -> a + b } }
```

### Returning Functions

```kotlin
fun multiplier(factor: Int): (Int) -> Int {
    return { number -> number * factor }
}

val triple = multiplier(3)
println(triple(5))  // 15
```

### Inline Functions

Higher-order functions create anonymous classes for lambdas, causing allocation overhead. The
`inline` modifier instructs the compiler to substitute the function body and the lambda at each call
site.

```kotlin
inline fun measureTime(block: () -> Unit): Long {
    val start = System.nanoTime()
    block()
    return System.nanoTime() - start
}
```

`noinline` prevents specific lambda parameters from being inlined (needed when the lambda is stored
or passed to a non-inline function):

```kotlin
inline fun runAndStore(block: () -> Unit, noinline later: () -> Unit) {
    block()
    storeLater(later)
}
```

`crossinline` prevents non-local returns inside the lambda (required when the lambda is called in a
different execution context, such as inside another lambda or an object expression).

### Local Functions

Functions can be declared inside other functions. They have access to the enclosing scope.

```kotlin
fun processUser(user: User) {
    fun validate(name: String) {
        require(name.isNotBlank()) { "Name must not be blank" }
    }

    validate(user.name)
    validate(user.email)
}
```

## Common Pitfalls

- \*\* Using `it` implicitly when the lambda context is unclear. Name the parameter explicitly when
  nesting lambdas or when `it` would be ambiguous.
- \*\* Capturing mutable variables in lambdas. Each captured variable is boxed, which adds
  allocation overhead in loops.
- \*\* Forgetting that extension functions are resolved statically. If you call an extension
  function on a variable declared as a supertype, the extension for the supertype is resolved, not
  the actual runtime type.
- \*\* Using `inline` on large functions or functions with many lambda parameters. This increases
  code size and can cause longer compilation times. Reserve `inline` for small, frequently called
  functions where the allocation overhead matters.
