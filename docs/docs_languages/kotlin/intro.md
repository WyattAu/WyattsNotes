---
title: Introduction to Kotlin
description: Kotlin overview, JVM vs Kotlin/Native, installation, and hello world.
slug: intro
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Overview

Kotlin is a statically typed language targeting the JVM, Android, JavaScript, and native platforms
via LLVM. Developed by JetBrains, it was designed to address Java's verbosity, null safety issues,
and lack of modern language features while maintaining full interoperability.

Key design goals:

- **Null safety at the type level** -- nullable and non-nullable types are distinct;
  `NullPointerException` is largely eliminated at compile time.
- **Concise syntax** -- type inference, data classes, default parameters, extension functions reduce
  boilerplate significantly versus Java.
- **Full Java interoperability** -- Kotlin compiles to JVM bytecode and can call any Java library
  without wrappers or adapters.
- **Coroutines for async** -- first-class language support for suspending functions replaces
  callback hell and reactive boilerplate.

## JVM vs Kotlin/Native vs Kotlin/JS

| Target        | Runtime              | Output            | Use Case                       |
| ------------- | -------------------- | ----------------- | ------------------------------ |
| JVM           | Java Virtual Machine | `.class` bytecode | Server, Android, existing Java |
| Kotlin/Native | LLVM                 | Native binaries   | iOS, macOS, Linux, embedded    |
| Kotlin/JS     | JavaScript engines   | `.js` / IR        | Frontend, Node.js              |

All three targets share the same language syntax and standard library. Platform-specific APIs are
accessed through `expect`/`actual` declarations.

```kotlin
// Common code (shared across all targets)
expect fun platformName(): String

fun greet() = "Hello from ${platformName()}"
```

```kotlin
// JVM actual
actual fun platformName(): String = "JVM ${System.getProperty("java.version")}"
```

```kotlin
// Native actual
actual fun platformName(): String = "Kotlin/Native"
```

### When to Use Each Target

- **JVM**: Default choice. Leverages the mature JVM ecosystem, garbage collector, and existing Java
  libraries. Android uses the JVM target (with ART/Dalvik as the runtime).
- **Kotlin/Native**: Required for iOS targets. No garbage collector -- uses reference counting with
  an automated cycle collector. Interop with C/Objective-C/Swift via cinterop.
- **Kotlin/JS**: Use Kotlin Multiplatform with Compose Multiplatform or when sharing logic between
  backend and browser. IR compiler produces optimizable JavaScript.

## Installation

### SDKMAN (recommended)

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install kotlin
```

### Homebrew (macOS)

```bash
brew install kotlin
```

### Verify Installation

```bash
kotlin -version
# Kotlin version 2.1.0-release (JRE 21.0.2+13)
kotlinc -version
# info: kotlinc-jvm 2.1.0 (JRE 21.0.2+13)
```

### Kotlin Playground

The [Kotlin Playground](https://play.kotlinlang.org) provides an in-browser editor with JVM,
JavaScript, and Kotlin/Native targets. Useful for quick experimentation without a local setup.

## Hello World

```kotlin
fun main() {
    println("Hello, World!")
}
```

Compile and run:

```bash
kotlinc hello.kt -include-runtime -d hello.jar
java -jar hello.jar
```

Or run directly:

```bash
kotlin hello.kt
```

## Kotlin Koans

The [Kotlin Koans](https://play.kotlinlang.org/koans/overview) are a series of interactive exercises
covering syntax features from basic to advanced. Each koan is a failing test that you fix by
implementing the correct Kotlin code.

## Build Tools

### Gradle with Kotlin DSL (standard)

```kotlin
plugins {
    kotlin("jvm") version "2.1.0"
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
```

### Maven

```xml
<dependency>
    <groupId>org.jetbrains.kotlin</groupId>
    <artifactId>kotlin-stdlib</artifactId>
    <version>2.1.0</version>
</dependency>
```

## Language Version and Compatibility

Kotlin uses a **stable backward compatibility** policy. Code compiled with Kotlin 1.x will run on
future 1.x releases without recompilation. Major version bumps (rare) may break compatibility.

```kotlin
// build.gradle.kts
kotlin {
    compilerOptions {
        languageVersion.set(org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_2_0)
        apiVersion.set(org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_2_0)
    }
}
```

- `languageVersion`: Language features available to the compiler.
- `apiVersion`: API surface available at runtime (must be &lt;= `languageVersion`).

## Common Pitfalls

- \*\* Mixing JVM and Native targets in the same module without Kotlin Multiplatform. Use KMP
  explicitly or keep targets in separate modules.
- \*_ Assuming Kotlin/JS has the same runtime characteristics as JVM. No `java._` packages,
  different concurrency model, different performance profile.
- \*\* Using `kotlinc` directly for production builds. Always use Gradle or Maven for dependency
  management, incremental compilation, and reproducible builds.
