---
title: GraalVM and Modern JVM
description:
  "Java: GraalVM and Modern JVM — What GraalVM Provides; The Graal Compiler; Graal JIT vs C2 JIT; Compilation Tiers with Graal."
date: 2026-04-07T00:00:00.000Z
tags:
  - Java
categories:
  - Java
slug: graalvm-and-modern-jvm
---

## Introduction

GraalVM is a high-performance JDK distribution that extends the standard HotSpot JVM with an
advanced just-in-time compiler (Graal), a native image generator, and polyglot execution
capabilities. It compiles Java applications ahead-of-time into standalone native executables,
dramatically reducing startup time and memory footprint compared to the traditional JVM. The foreign
function and memory API (Project Panama) provides a modern, safe alternative to JNI for calling
native code and managing off-heap memory.

These technologies matter because they address the three persistent complaints about Java: slow
startup, high memory consumption, and painful native interop. GraalVM native images bring Java into
territory previously reserved for Go and Rust -- sub-millisecond startup and single-digit MB RSS for
microservices and CLI tools. The Foreign Function and Memory API replaces the brittle, error-prone
JNI mechanism with a type-safe, allocation-tracking API that is practically usable.

### What GraalVM Provides

| Component            | Purpose                                              | Status               |
| -------------------- | ---------------------------------------------------- | -------------------- |
| Graal JIT Compiler   | Replaces C2 as an advanced JIT compiler              | Production (JDK 17+) |
| Native Image         | AOT compilation to standalone executables            | Production (JDK 22+) |
| Polyglot Runtime     | Run JavaScript, Python, Ruby, R, LLVM alongside Java | Community Edition    |
| Truffle Framework    | API for building high-performance language runtimes  | Production           |
| VisualVM Integration | Profiling and diagnostics for Graal-compiled code    | Production           |

:::info
GraalVM has been folded into the OpenJDK project. Starting with JDK 22, `native-image` ships
as a standard JDK component. You no longer need a separate GraalVM distribution to build native
images. The Graal JIT compiler has been available as an experimental tier-4 compiler in OpenJDK
since JDK 10.
:::

## The Graal Compiler

### Graal JIT vs C2 JIT

HotSpot has historically used two JIT compilers: C1 (client compiler, fast compilation, less
optimization) and C2 (server compiler, slower compilation, aggressive optimization). The tiered
compilation strategy starts with the interpreter, promotes hot methods through C1, and eventually
compiles with C2 for maximum throughput.

Graal is a replacement for C2 written in Java. It is itself a Java program that compiles Java
bytecode to machine code. Being written in Java means Graal benefits from the same JVM optimizations
it produces, and its codebase is far more approachable for contributors than C2 (which is written in
C++).

**Definition.** The Graal compiler is a graph-based JIT compiler implemented in Java that replaces
C2 as the top-tier optimizing compiler. It operates on a sea-of-nodes intermediate representation
(IR) that is more expressive than C2's ideal graph.

| Feature             | C2                         | Graal                               |
| ------------------- | -------------------------- | ----------------------------------- |
| Implementation      | C++                        | Java                                |
| IR                  | Ideal graph (sea-of-nodes) | Sea-of-nodes (Graal IR)             |
| Inlining heuristics | Fixed thresholds           | Profile-guided, more aggressive     |
| Escape analysis     | Basic                      | Advanced (partial escape analysis)  |
| Loop optimizations  | Limited                    | Extensive (loop peeling, unrolling) |
| Deoptimization      | Speculative                | Speculative with better recovery    |
| Extensibility       | Hard (C++ plugin system)   | Easy (Java plugin system)           |

### Compilation Tiers with Graal

```
Interpreter -> C1 (quick) -> C1 (detailed) -> C2 (or Graal) -> Native code
```

When Graal is enabled, it replaces C2 as the top tier. Enable it with:

```bash
# Enable Graal as the top-tier JIT compiler (requires GraalVM or JDK with Graal)
java -XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler -jar app.jar
```

On GraalVM, this is the default. On standard OpenJDK, you must explicitly enable it.

### Profile-Guided Optimization

Graal can use profiling information from previous runs to guide compilation decisions. This is
particularly impactful for native image builds:

```bash
# Step 1: Run the application with profiling enabled
java -agentlib:native-image-agent=config-output-dir=META-INF/native-image \
     -jar app.jar

# Step 2: Build the native image using the collected profiles
native-image -H:ConfigurationFileDirectories=META-INF/native-image \
             -jar app.jar
```

The agent records which classes are instantiated, which methods are called, which reflection sites
are used, and which resources are loaded. This information feeds the closed-world analysis during
native image generation, producing a smaller and faster binary.

### When Graal JIT Outperforms C2

Graal typically outperforms C2 on workloads involving:

- **Frequent object allocation and escape analysis**: Graal's partial escape analysis can
  scalar-replace objects that escape only on some paths, where C2 would give up entirely.
- **Complex control flow**: Graal's IR represents control flow more precisely, enabling
  optimizations that C2 misses.
- **Polymorphic call sites**: Graal makes better inlining decisions based on profile data.
- **Loop-heavy numeric code**: Graal's loop optimizations (loop peeling, loop unrolling, loop
  invariant code motion) are more comprehensive.

## Native Image

### How It Works

**Definition.** Native Image performs ahead-of-time (AOT) compilation of a Java application into a
standalone native executable using closed-world static analysis. It operates on the SubstrateVM, a
minimal JVM runtime that replaces HotSpot entirely.

The closed-world analysis works as follows:

1. **Reachability analysis**: Starting from entry points (main method, JNI methods), the analysis
   traces all reachable classes, methods, and fields. Anything not reachable is discarded.
2. **Points-to analysis**: Determines which concrete types each reference may hold at each program
   point. This drives devirtualization -- turning virtual calls into direct calls.
3. **Heap snapshot**: Objects allocated at build time are serialized into the image heap. This
   includes static final fields, interned strings, and classes configured for build-time
   initialization.
4. **Code compilation**: All reachable methods are compiled to native machine code. No bytecode is
   included in the output.

The result is a native executable with no JVM dependency, no class loading at runtime, and no JIT
compilation overhead.

### Build Workflow

```bash
# Using the native-image command directly
native-image --no-fallback -H:Name=myapp -cp target/classes com.example.Main

# Using the Maven plugin
# pom.xml configuration:
```

```xml
<plugin>
    <groupId>org.graalvm.nativeimage</groupId>
    <artifactId>native-image-maven-plugin</artifactId>
    <version>0.10.4</version>
    <configuration>
        <imageName>myapp</imageName>
        <mainClass>com.example.Main</mainClass>
        <buildArgs>
            <buildArg>--no-fallback</buildArg>
            <buildArg>-H:+ReportExceptionStackTraces</buildArg>
        </buildArgs>
    </configuration>
    <executions>
        <execution>
            <id>build-native</id>
            <phase>package</phase>
            <goals>
                <goal>native-image</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

```bash
# Build with Maven
mvn -Pnative package

# Using the Gradle plugin
# build.gradle configuration:
```

```groovy
plugins {
    id 'org.graalvm.buildtools.native' version '0.10.4'
}

graalvmNative {
    binaries {
        main {
            imageName = 'myapp'
            mainClass = 'com.example.Main'
            buildArgs.add('--no-fallback')
        }
    }
}
```

```bash
# Build with Gradle
gradle nativeCompile
```

### Configuration: Reflection, Resources, Proxies, JNI

The closed-world analysis is conservative. It cannot see reflective access, dynamic resource
loading, or runtime proxy generation. You must provide explicit configuration for these.

**Reflection configuration** (`reflection-config.json`):

```json
[
  {
    "name": "com.example.MyDto",
    "allDeclaredConstructors": true,
    "allPublicMethods": true,
    "allDeclaredFields": true
  }
]
```

**Resource configuration** (`resource-config.json`):

```json
{
  "resources": {
    "includes": [{ "pattern": ".*\\.properties$" }, { "pattern": ".*\\.xml$" }]
  }
}
```

**Proxy configuration** (`proxy-config.json`):

```json
[["java.sql.Connection", "java.lang.AutoCloseable"]]
```

**JNI configuration** (`jni-config.json`):

```json
[
  {
    "name": "com.example.NativeLib",
    "methods": [{ "name": "nativeMethod", "parameterTypes": ["java.lang.String"] }]
  }
]
```

The easiest way to generate these configuration files is using the native-image agent:

```bash
java -agentlib:native-image-agent=config-output-dir=src/main/resources/META-INF/native-image \
     -jar myapp.jar
```

Run the application through all code paths (especially reflection-heavy paths like serialization,
dependency injection, and ORM initialization). The agent writes the configuration files
automatically.

### Class Initialization: Build Time vs Runtime

Native image classifies every class into one of two initialization times:

- **Build-time initialization**: The class's static initializer (`&lt;clinit&gt;`) runs during image
  generation. The resulting static field values are baked into the image heap.
- **Runtime initialization**: The class's static initializer runs at application startup, before
  `main()`.

By default, most JDK classes are initialized at build time. Application classes are initialized at
runtime unless they are reachable from build-time-initialized classes.

:::warning
Build-time initialization of application classes can cause subtle bugs. If a class's
static initializer opens a file, creates a thread, or accesses environment variables, these actions
execute on the build machine, not the deployment target. Use `--initialize-at-build-time` and
`--initialize-at-run-time` flags explicitly to control this:

```bash
native-image --initialize-at-build-time=com.example.Config \
             --initialize-at-run-time=com.example.DbConnection \
             -jar myapp.jar
```

:::

### Conditional Feature Analysis

GraalVM native image supports conditional features through feature classes that hook into the build
process:

```java
import org.graalvm.nativeimage.hosted.Feature;

public class MyFeature implements Feature {
    @Override
    public void beforeAnalysis(BeforeAnalysisAccess access) {
        // Register classes, resources, proxies at build time
        access.registerSubtype(access.findClassByName("com.example.MyInterface"));
    }

    @Override
    public void duringAnalysis(DuringAnalysisAccess access) {
        // Query reachability and register additional types
        if (access.reachesType(access.findClassByName("com.example.OptionalFeature"))) {
            access.registerSubtype(access.findClassByName("com.example.OptionalImpl"));
        }
    }
}
```

Register the feature in `META-INF/native-image/native-image.properties`:

```
Args = --features=org.graalvm.nativeimage.impl.InternalFeature \
       --features=com.example.MyFeature
```

## Native Image Performance

### Startup Time

Native image eliminates JIT warmup entirely. All code is compiled ahead of time, and the image heap
contains pre-initialized objects. The result is startup times measured in single-digit milliseconds.

| Metric                | HotSpot (JVM) | Native Image | Improvement |
| --------------------- | ------------- | ------------ | ----------- |
| Startup (cold)        | 1-3 seconds   | 5-20 ms      | 100-500x    |
| Time to first request | 2-5 seconds   | 15-50 ms     | 100-300x    |
| RSS (idle)            | 100-300 MB    | 20-60 MB     | 3-10x       |
| RSS (peak)            | 500 MB - 2 GB | 80-200 MB    | 3-10x       |

### Memory Footprint

Native image has no JIT compiler, no garbage collector metadata for JIT-compiled code, and a compact
image heap. The total memory footprint is typically 30-50 MB for a typical Spring Boot application,
compared to 200-500 MB on HotSpot.

The image heap is stored in the executable's data segment and mapped into memory at process start.
Objects in the image heap are not subject to garbage collection (they are effectively immortal),
which reduces GC pressure at runtime.

### Peak Throughput Tradeoffs

Native image does not match HotSpot's peak throughput for long-running, CPU-intensive workloads. The
reasons are:

1. **No profile-guided JIT optimization**: HotSpot collects profiling data during execution and
   recompiles hot methods with increasingly aggressive optimizations. Native image makes all
   optimization decisions at build time based on the agent's profile, which may not cover all
   runtime scenarios.
2. **No speculative optimizations**: HotSpot can speculate based on runtime profiles and deoptimize
   when speculation fails. Native image must produce code that works for all possible inputs.
3. **Fixed code layout**: HotSpot can reoptimize code layout based on actual execution frequency.
   Native image's code layout is fixed at build time.

| Workload             | HotSpot Throughput | Native Image Throughput |
| -------------------- | ------------------ | ----------------------- |
| I/O-bound REST API   | Baseline           | 90-110% of HotSpot      |
| JSON parsing         | Baseline           | 80-100% of HotSpot      |
| Numeric computation  | Baseline           | 60-85% of HotSpot       |
| Crypto workloads     | Baseline           | 70-90% of HotSpot       |
| Short-lived CLI tool | N/A (warmup kills) | 10-100x faster overall  |

:::info
The throughput gap between HotSpot and native image has been narrowing with each GraalVM
release. For I/O-bound server applications, native image now matches or exceeds HotSpot performance
for most practical workloads. The gap is most noticeable in CPU-bound, long-running processes where
HotSpot's adaptive optimization has time to produce highly specialized code.
:::

## Foreign Function and Memory API (Project Panama)

### Overview

The Foreign Function and Memory API (JEP 424, standardized in Java 22) replaces JNI with a pure Java
API for calling native functions and accessing native memory. It is safer, more ergonomic, and
supports variadic functions, structs by value, and callbacks without writing C glue code.

**Definition.** The FFM API consists of two main abstractions: `Linker` for creating downcall method
handles to native functions, and `MemorySegment` for modeling contiguous regions of native memory
with deterministic deallocation.

### Core Types

| Type                 | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `Linker`             | Creates native method handles (downcall/upcall) |
| `SymbolLookup`       | Looks up symbols in native libraries            |
| `MemorySegment`      | Models a contiguous region of native memory     |
| `Arena`              | Controls the lifetime of memory segments        |
| `ValueLayout`        | Describes the layout of values in memory        |
| `FunctionDescriptor` | Describes the signature of a native function    |
| `MethodHandle`       | Invokes a native function (downcall)            |

### Calling a C Function from Java

```java
import java.lang.foreign.*;
import java.lang.invoke.MethodHandle;
import java.lang.invoke.VarHandle;

public class CStringOperations {
    public static void main(String[] args) throws Throwable {
        Linker linker = Linker.nativeLinker();
        SymbolLookup stdlib = SymbolLookup.libraryLookup("libc.so.6", Arena.ofAuto());
        SymbolLookup lookup = name -> stdlib.lookup(name).or(Linker.nativeLinker().defaultLookup().lookup(name));

        // strlen(const char *s) -> size_t
        MethodHandle strlen = linker.downcallHandle(
            lookup.lookup("strlen").orElseThrow(),
            FunctionDescriptor.of(ValueLayout.JAVA_LONG, ValueLayout.ADDRESS)
        );

        // Allocate a C string in native memory
        try (Arena arena = Arena.ofConfined()) {
            MemorySegment cString = arena.allocateFrom("Hello, native world!");
            long length = (long) strlen.invoke(cString);
            System.out.println("Length: " + length); // 20
        }
    }
}
```

### Passing Structs

C structs are modeled using ` GroupLayout`:

```java
import java.lang.foreign.*;
import java.lang.invoke.MethodHandle;
import java.lang.invoke.VarHandle;

public class StructExample {
    // Equivalent to: struct Point { double x; double y; };
    static final GroupLayout POINT_LAYOUT = MemoryLayout.structLayout(
        ValueLayout.JAVA_DOUBLE.withName("x"),
        ValueLayout.JAVA_DOUBLE.withName("y")
    );

    public static void main(String[] args) throws Throwable {
        Linker linker = Linker.nativeLinker();

        // Allocate a Point struct on the native heap
        try (Arena arena = Arena.ofConfined()) {
            MemorySegment point = arena.allocate(POINT_LAYOUT);

            VarHandle xHandle = POINT_LAYOUT.varHandle(MemoryLayout.PathElement.groupElement("x"));
            VarHandle yHandle = POINT_LAYOUT.varHandle(MemoryLayout.PathElement.groupElement("y"));

            xHandle.set(point, 3.0);
            yHandle.set(point, 4.0);

            System.out.println("x=" + xHandle.get(point) + ", y=" + yHandle.get(point));
        }
    }
}
```

### Callbacks: Upcall Handles

To pass a Java method as a C function pointer, create an upcall method handle:

```java
import java.lang.foreign.*;
import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;

public class CallbackExample {
    public static void main(String[] args) throws Throwable {
        Linker linker = Linker.nativeLinker();
        SymbolLookup lookup = name -> SymbolLookup.libraryLookup("libc.so.6", Arena.ofAuto())
            .lookup(name)
            .or(Linker.nativeLinker().defaultLookup().lookup(name));

        // int compare(const void *a, const void *b, void *arg)
        MethodHandle qsort = linker.downcallHandle(
            lookup.lookup("qsort").orElseThrow(),
            FunctionDescriptor.ofVoid(
                ValueLayout.ADDRESS,  // base
                ValueLayout.JAVA_LONG, // nmemb
                ValueLayout.JAVA_LONG, // size
                ValueLayout.ADDRESS   // compar
            )
        );

        // Callback: int (*compar)(const void *, const void *)
        MethodHandle comparHandle = MethodHandles.lookup().findStatic(
            CallbackExample.class,
            "compareInts",
            MethodType.methodType(int.class, MemorySegment.class, MemorySegment.class)
        );

        MemorySegment comparFunc = linker.upcallStub(
            comparHandle,
            FunctionDescriptor.of(ValueLayout.JAVA_INT, ValueLayout.ADDRESS, ValueLayout.ADDRESS),
            Arena.ofAuto()
        );

        try (Arena arena = Arena.ofConfined()) {
            MemorySegment array = arena.allocate(ValueLayout.JAVA_INT, 5);
            VarHandle intHandle = ValueLayout.JAVA_INT.varHandle();
            intHandle.set(array, 0L, 5);
            intHandle.set(array, 1L, 2);
            intHandle.set(array, 2L, 8);
            intHandle.set(array, 3L, 1);
            intHandle.set(array, 4L, 9);

            qsort.invoke(array, 5L, 4L, comparFunc);

            System.out.print("Sorted: ");
            for (long i = 0; i &lt; 5; i++) {
                System.out.print(intHandle.get(array, i) + " ");
            }
            // Output: Sorted: 1 2 5 8 9
        }
    }

    static int compareInts(MemorySegment a, MemorySegment b) {
        int va = ValueLayout.JAVA_INT.get(a, 0);
        int vb = ValueLayout.JAVA_INT.get(b, 0);
        return Integer.compare(va, vb);
    }
}
```

### Downcall and Upcall: Complete Example (libcurl)

```java
import java.lang.foreign.*;
import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;
import java.lang.invoke.VarHandle;

public class LibCurlExample {
    static final Linker LINKER = Linker.nativeLinker();

    static final SymbolLookup CURL = SymbolLookup.libraryLookup(
        "libcurl.so.4", Arena.ofAuto()
    );

    static final MemorySession.SessionImpl CURL_GLOBAL_ALL =
        MemorySession.sessionCreator().create();

    public static void main(String[] args) throws Throwable {
        // curl_easy_init() -> CURL*
        MethodHandle curlEasyInit = LINKER.downcallHandle(
            CURL.lookup("curl_easy_init").orElseThrow(),
            FunctionDescriptor.of(ValueLayout.ADDRESS)
        );

        // curl_easy_setopt(CURL*, CURLoption, ...) -> CURLcode
        MethodHandle curlEasySetopt = LINKER.downcallHandle(
            CURL.lookup("curl_easy_setopt").orElseThrow(),
            FunctionDescriptor.of(
                ValueLayout.JAVA_INT,
                ValueLayout.ADDRESS,
                ValueLayout.JAVA_INT,
                ValueLayout.ADDRESS
            )
        );

        // curl_easy_perform(CURL*) -> CURLcode
        MethodHandle curlEasyPerform = LINKER.downcallHandle(
            CURL.lookup("curl_easy_perform").orElseThrow(),
            FunctionDescriptor.of(ValueLayout.JAVA_INT, ValueLayout.ADDRESS)
        );

        // curl_easy_cleanup(CURL*) -> void
        MethodHandle curlEasyCleanup = LINKER.downcallHandle(
            CURL.lookup("curl_easy_cleanup").orElseThrow(),
            FunctionDescriptor.ofVoid(ValueLayout.ADDRESS)
        );

        try (Arena arena = Arena.ofConfined()) {
            MemorySegment curl = (MemorySegment) curlEasyInit.invoke();

            // CURLOPT_URL = 10002
            MemorySegment url = arena.allocateFrom("https://example.com");
            curlEasySetopt.invoke(curl, 10002, url);

            int result = (int) curlEasyPerform.invoke(curl);
            curlEasyCleanup.invoke(curl);

            System.out.println("curl result: " + result);
        }
    }
}
```

### FFM API vs JNI

| Feature            | JNI                              | FFM API                                 |
| ------------------ | -------------------------------- | --------------------------------------- |
| Boilerplate        | C header generation + C code     | Pure Java                               |
| Type safety        | Weak (jobject, jfieldID)         | Strong (MemorySegment, ValueLayout)     |
| Memory management  | Manual (DeleteLocalRef, etc.)    | Arena-based, deterministic deallocation |
| Variadic functions | Not supported                    | Supported via FunctionDescriptor        |
| Structs by value   | Not supported                    | Supported via GroupLayout               |
| Callbacks          | Manual JNI env + C trampoline    | Upcall handles                          |
| Performance        | Good (direct call after linking) | Comparable (downcall stubs are fast)    |
| Safety             | Undefined behavior on misuse     | Bounds-checked, null-checked            |

:::warning
The FFM API uses `restricted` methods (marked with `@Restricted`) that can crash the JVM
if misused. These methods perform bounds checks and null checks, but cannot prevent all undefined
behavior (e.g., passing a freed segment to a native function). The `@Restricted` annotation serves
as a warning: you are leaving the safety guarantees of the Java platform.
:::

## Foreign Memory Access

### Arena-Based Memory Management

The `Arena` class controls the lifetime of memory segments. When an arena is closed, all segments
allocated from it are freed. This eliminates the class of bugs where native memory is leaked because
the Java code forgot to call `free()`.

```java
import java.lang.foreign.Arena;
import java.lang.foreign.MemorySegment;
import java.lang.foreign.ValueLayout;

public class ArenaExample {
    public static void main(String[] args) {
        // Confined arena: only one thread can access its segments
        try (Arena arena = Arena.ofConfined()) {
            MemorySegment buffer = arena.allocate(1024);
            ValueLayout.JAVA_INT.set(buffer, 0L, 42);
            int value = ValueLayout.JAVA_INT.get(buffer, 0L);
            System.out.println("Value: " + value); // 42
        }
        // buffer is freed here

        // Shared arena: multiple threads can access segments
        try (Arena arena = Arena.ofShared()) {
            MemorySegment shared = arena.allocate(256);
            // safe to pass 'shared' to another thread
        }

        // Auto arena: freed by the GC (for interop with existing code)
        Arena autoArena = Arena.ofAuto();
        MemorySegment ephemeral = autoArena.allocate(128);
        // freed when ephemeral becomes unreachable
    }
}
```

### `MemorySegment` Allocation and Access

```java
import java.lang.foreign.*;
import java.lang.invoke.VarHandle;
import java.nio.ByteOrder;

public class MemorySegmentDemo {
    public static void main(String[] args) {
        try (Arena arena = Arena.ofConfined()) {
            // Allocate from a C string literal
            MemorySegment hello = arena.allocateFrom("Hello, World!");
            long byteSize = hello.byteSize(); // 14 (13 chars + null terminator)

            // Allocate a typed array in native memory
            MemorySegment doubles = arena.allocate(ValueLayout.JAVA_DOUBLE, 10);
            for (long i = 0; i &lt; 10; i++) {
                ValueLayout.JAVA_DOUBLE.set(doubles, i, i * 1.5);
            }

            // Bulk copy between segments
            MemorySegment dest = arena.allocate(80);
            dest.copyFrom(doubles);

            // Slice a segment
            MemorySegment firstFive = doubles.asSlice(0, 5 * ValueLayout.JAVA_DOUBLE.byteSize());

            // Fill with a value
            MemorySegment zeros = arena.allocate(256);
            zeros.fill((byte) 0);

            // Create a mapped segment from a file
            MemorySegment fileData = MemorySegment.mapFile(
                Path.of("data.bin"),
                0L,
                1024,
                FileChannel.MapMode.READ_ONLY,
                Arena.ofAuto()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### `ValueLayout` for Type-Safe Access

`ValueLayout` describes how values are laid out in memory. Each primitive type has a corresponding
layout with a specific byte order and alignment:

```java
import java.lang.foreign.ValueLayout;
import java.nio.ByteOrder;

// Standard layouts (platform byte order)
ValueLayout.JAVA_BYTE      // 1 byte
ValueLayout.JAVA_SHORT     // 2 bytes
ValueLayout.JAVA_CHAR      // 2 bytes (unsigned)
ValueLayout.JAVA_INT       // 4 bytes
ValueLayout.JAVA_LONG      // 8 bytes
ValueLayout.JAVA_FLOAT     // 4 bytes
ValueLayout.JAVA_DOUBLE    // 8 bytes
ValueLayout.ADDRESS        // Platform-dependent pointer size (4 or 8 bytes)

// Custom layouts with explicit byte order
ValueLayout.JAVA_INT.withOrder(ByteOrder.LITTLE_ENDIAN)

// C-compatible layouts
ValueLayout.C_BOOL         // _Bool (1 byte)
ValueLayout.C_SHORT        // short (2 bytes)
ValueLayout.C_INT          // int (4 bytes)
ValueLayout.C_LONG         // long (4 or 8 bytes, platform-dependent)
ValueLayout.C_LONG_LONG    // long long (8 bytes)
ValueLayout.C_FLOAT        // float (4 bytes)
ValueLayout.C_DOUBLE       // double (8 bytes)
ValueLayout.C_POINTER      // pointer (4 or 8 bytes)
```

### `VarHandle` Integration

`VarHandle` provides atomic and volatile access to memory segments, integrating with the Java memory
model:

```java
import java.lang.foreign.*;
import java.lang.invoke.VarHandle;
import java.util.concurrent.atomic.AtomicInteger;

public class VarHandleMemoryDemo {
    public static void main(String[] args) {
        try (Arena arena = Arena.ofConfined()) {
            MemorySegment counter = arena.allocate(ValueLayout.JAVA_INT);

            VarHandle handle = ValueLayout.JAVA_INT.varHandle();

            // Plain access
            handle.set(counter, 0L, 0);

            // Volatile write and read
            handle.setVolatile(counter, 0L, 42);
            int val = (int) handle.getVolatile(counter, 0L);

            // Compare-and-swap
            boolean success = handle.compareAndSet(counter, 0L, 42, 43);

            // Atomic add
            int oldVal = (int) handle.getAndAdd(counter, 0L, 10);
        }
    }
}
```

### Off-Heap Data Structures

Memory segments enable building high-performance data structures outside the Java heap, avoiding GC
pressure:

```java
import java.lang.foreign.*;

public class OffHeapRingBuffer {
    private final MemorySegment buffer;
    private final long capacity;
    private final VarHandle intHandle;
    private long head = 0;
    private long tail = 0;

    public OffHeapRingBuffer(int capacity) {
        this.capacity = capacity;
        try (Arena arena = Arena.ofConfined()) {
            this.buffer = arena.allocate(ValueLayout.JAVA_LONG, capacity);
        }
        this.intHandle = ValueLayout.JAVA_LONG.varHandle();
    }

    public void offer(long value) {
        intHandle.set(buffer, tail * ValueLayout.JAVA_LONG.byteSize(), value);
        tail = (tail + 1) % capacity;
    }

    public long poll() {
        long value = (long) intHandle.get(buffer, head * ValueLayout.JAVA_LONG.byteSize());
        head = (head + 1) % capacity;
        return value;
    }

    public boolean isEmpty() {
        return head == tail;
    }
}
```

:::warning
The off-heap ring buffer above has a bug: the `Arena` used to allocate the buffer is
closed in the constructor, making the segment inaccessible. In practice, the arena must outlive the
data structure. Use a shared arena or hold a reference to the arena as a field.
:::

## Vector API (Incubator)

### Overview

The Vector API (JEP 448, incubating) provides SIMD (Single Instruction, Multiple Data) operations in
Java. It allows developers to express data-parallel computations that the JVM maps to hardware SIMD
instructions (AVX2, AVX-512, NEON, SVE) without writing intrinsics or architecture-specific code.

**Definition.** A `Vector&lt;E&gt;` represents a fixed number of values of a primitive type `E`
(byte, short, int, long, float, double) packed into a single hardware register. A
`VectorSpecies&lt;E&gt;` defines the shape (lane count and bit width) of the vector.

### Basic SIMD Operations

```java
import jdk.incubator.vector.*;

public class VectorDemo {
    public static void floatVectorAdd(float[] a, float[] b, float[] result) {
        // Select the preferred vector species for float (256-bit on most x86 machines)
        VectorSpecies&lt;Float&gt; species = FloatVector.SPECIES_PREFERRED;
        int i = 0;

        // Process 8 floats at a time (256 bits / 32 bits per float = 8 lanes)
        int upperBound = species.loopBound(a.length);
        for (; i &lt; upperBound; i += species.length()) {
            FloatVector va = FloatVector.fromArray(species, a, i);
            FloatVector vb = FloatVector.fromArray(species, b, i);
            va.add(vb).intoArray(result, i);
        }

        // Handle remainder
        for (; i &lt; a.length; i++) {
            result[i] = a[i] + b[i];
        }
    }

    public static void main(String[] args) {
        float[] a = {1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f};
        float[] b = {8.0f, 7.0f, 6.0f, 5.0f, 4.0f, 3.0f, 2.0f, 1.0f};
        float[] result = new float[8];

        floatVectorAdd(a, b, result);
        // result: [9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0]
    }
}
```

### Lane-Wise Operations

```java
import jdk.incubator.vector.*;

public class LaneWiseOperations {
    public static void vectorOperations(float[] a, float[] b, float[] result) {
        VectorSpecies&lt;Float&gt; species = FloatVector.SPECIES_PREFERRED;
        int i = 0;
        int upperBound = species.loopBound(a.length);

        for (; i &lt; upperBound; i += species.length()) {
            FloatVector va = FloatVector.fromArray(species, a, i);
            FloatVector vb = FloatVector.fromArray(species, b, i);

            // Lane-wise multiply, then add a scalar
            FloatVector mul = va.mul(vb);
            FloatVector addScalar = mul.add(1.0f);

            // Lane-wise comparison, producing a mask
            VectorMask&lt;Float&gt; mask = va.gt(vb);

            // Blend: select from va where mask is true, from vb where false
            FloatVector blended = va.blend(vb, mask);

            // Reduce: sum all lanes to a single float
            float sum = va.reduceLanes(VectorOperators.ADD);

            blended.intoArray(result, i);
        }

        for (; i &lt; a.length; i++) {
            result[i] = a[i];
        }
    }
}
```

### Performance Benefits

For compute-intensive loops operating on arrays of primitives, the Vector API can provide 4-8x
speedup over scalar code on hardware with AVX2/AVX-512 support. The key advantage over manual
intrinsics is portability: the same Java code runs on x86 (AVX2/AVX-512), ARM (NEON/SVE), and other
architectures, with the JIT compiler selecting the appropriate instructions at runtime.

:::info
The Vector API requires `--add-modules jdk.incubator.vector` on the command line. It is
still in incubator status as of JDK 23. The API surface may change before final standardization.
:::

## Virtual Threads (Project Loom)

Virtual threads are covered in depth in
[Virtual Threads and Structured Concurrency](./08-modern-java/02-virtual-threads-structured-concurrency.md).
This section provides a condensed reference.

### Key Facts

- **JEP 444, Java 21**: Virtual threads are a standard feature.
- **M:N scheduling**: Many virtual threads multiplex onto a small pool of carrier (OS) threads.
- **Heap-allocated stacks**: Virtual thread stacks are continuations on the heap, not 1 MB stack
  segments. A blocked virtual thread costs a few hundred bytes.
- **Transparent blocking**: `Thread.sleep`, socket I/O, file I/O, and `Future.get` automatically
  unmount the virtual thread from its carrier.

### Quick Reference

```java
// Create a single virtual thread
Thread vt = Thread.ofVirtual().name("worker").start(() -> doWork());

// Executor that creates a new virtual thread per task
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> blockingIoCall());
}

// Avoid synchronized blocks for blocking operations (pinning)
// Bad: pins the carrier thread
synchronized (lock) { socket.read(buffer); }

// Good: ReentrantLock allows unmounting
lock.lock();
try { socket.read(buffer); } finally { lock.unlock(); }
```

### When to Use Virtual Threads

| Scenario                     | Use Virtual Threads?                      |
| ---------------------------- | ----------------------------------------- |
| HTTP server (I/O-bound)      | Yes                                       |
| Database query orchestration | Yes                                       |
| File processing pipeline     | Yes                                       |
| CPU-bound computation        | No (use parallel streams or ForkJoinPool) |
| Latency-critical path        | No (scheduling adds overhead)             |

## Structured Concurrency (Preview)

Structured concurrency is covered in depth in
[Virtual Threads and Structured Concurrency](./08-modern-java/02-virtual-threads-structured-concurrency.md).
This section provides a condensed reference.

### Key Facts

- **JEP 453, Java 21**: Structured concurrency is a preview API.
- **`StructuredTaskScope`**: Enforces parent-child task relationships. All children must complete
  before the parent proceeds.
- **Shutdown policies**: `ShutdownOnFailure` (cancel all on first error) and `ShutdownOnSuccess`
  (cancel all on first success).
- **Thread dumps**: Structured concurrency produces thread dumps that show the parent-child
  relationship, making it easy to understand what a thread is waiting for.

### Quick Reference

```java
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    var userTask = scope.fork(() -> fetchUser(id));
    var ordersTask = scope.fork(() -> fetchOrders(id));

    scope.join();
    scope.throwIfFailed();

    return new UserData(userTask.get(), ordersTask.get());
}
```

## Record Patterns and Pattern Matching

Record patterns and pattern matching for switch are covered in depth in
[Records, Sealed Classes, and Pattern Matching](./08-modern-java/01-records-sealed-patterns.md).
This section provides a condensed reference.

### Key Facts

- **JEP 440, Java 21**: Record patterns are a standard feature.
- **JEP 441, Java 21**: Pattern matching for switch is a standard feature.
- **Record deconstruction**: Destructure records directly in `instanceof` and `switch` patterns.
- **Exhaustiveness**: The compiler verifies that all cases of a sealed hierarchy are covered.

### Quick Reference

```java
// Record pattern in instanceof
if (obj instanceof Point(var x, var y)) {
    System.out.println("Point at (" + x + ", " + y + ")");
}

// Record pattern in switch with sealed hierarchy
return switch (shape) {
    case Circle(var r) when r == 0 -> 0.0;
    case Circle(var r) -> Math.PI * r * r;
    case Rectangle(var w, var h) -> w * h;
    case Triangle t -> heronsFormula(t);
};
```

## Value Types (Project Valhalla)

### Overview

Project Valhalla introduces value types to Java -- classes that have identity-free, flattened
instances. A value type's instances are compared by their contents, not by reference identity. They
can be stored inline in fields and array elements, eliminating the memory indirection and cache
misses of boxed types.

**Definition.** A value class is a class declared with the `value` keyword (or `inline` in earlier
prototypes). Its instances have no identity -- there is no concept of reference equality, no
synchronization, and no null instances. Two value instances with the same field values are
considered equal.

:::info
Project Valhalla is still in preview as of JDK 23. The syntax and semantics may change
before finalization. The examples below reflect the current preview state.
:::

### Identity Classes vs Value Classes

| Property            | Identity Class (today) | Value Class (Valhalla)       |
| ------------------- | ---------------------- | ---------------------------- |
| Identity            | Has identity (`==`)    | No identity                  |
| Nullability         | Can be null            | Cannot be null               |
| Default value       | null                   | All-zero bits (like int 0)   |
| Memory layout       | Reference (pointer)    | Flattened inline             |
| `==` operator       | Reference equality     | Structural equality          |
| Synchronization     | Can use `synchronized` | Not allowed                  |
| Supertype           | `Object`               | Implicit abstract superclass |
| Generic type params | Reference types only   | Can be used as type argument |

### Declaring a Value Class

```java
// Value class (Valhalla preview syntax)
public value class Point {
    final double x;
    final double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}

// Usage: Point is stored inline, no heap allocation
public value class Line {
    final Point start;
    final Point end;

    public Line(Point start, Point end) {
        this.start = start;
        this.end = end;
    }
}
```

A `Line` contains two `Point` instances inline -- there are no pointers. The entire `Line` is 32
bytes (four doubles), stored contiguously in memory. Compare this to the identity class equivalent,
which would be 16 bytes of references plus 32 bytes of heap-allocated `Point` objects.

### Flattened Memory Layout

```java
// Identity class: array of references (each element is a pointer)
Point[] identityPoints = new Point[1000];
// Memory: 8000 bytes for references + 16000 bytes for Point objects on heap

// Value class: array of flattened values (no indirection)
value Point[] valuePoints = new value Point[1000];
// Memory: 16000 bytes total (8 bytes per element, inline in the array)
```

The flattened layout eliminates one level of indirection, which improves cache utilization for
data-intensive workloads. For `double[]` arrays, the difference is negligible (doubles are already
primitive), but for arrays of small compound types (points, complex numbers, 2D/3D vectors), the
improvement is significant.

### Implications for Generics

Value types solve a long-standing limitation of Java generics: primitive types cannot be used as
type arguments. With value types, `List&lt;Point&gt;` can store `Point` instances inline (or at
least more compactly) without boxing.

```java
// Today: List<int> does not exist, must use List<Integer> (boxed)
List&lt;Integer&gt; boxed = new ArrayList&lt;&gt;();
boxed.add(42); // allocates an Integer object

// Valhalla: List<int> stores int values directly
List&lt;int&gt; unboxed = new ArrayList&lt;&gt;(); // hypothetical syntax
unboxed.add(42); // no allocation
```

The exact generic specialization strategy is still under discussion. The current Valhalla prototype
uses a "value generic" approach where type arguments can be value types, and the JVM generates
specialized code paths for value-carrying generic classes.

### Current Status

Valhalla has been in development for over a decade. As of JDK 23:

- **Value classes**: Preview in recent builds. Syntax may change.
- **Generic specialization**: Not yet implemented. This is the hardest part of Valhalla.
- **Migration**: Existing wrapper types (`Integer`, `Long`, etc.) will eventually be migrated to
  value classes, but this is a long-term goal that requires full generic specialization.

## Practical Setup

### Installing GraalVM

```bash
# Using SDKMAN (recommended)
sdk install java 22-graal
sdk use java 22-graal

# Or download directly from https://github.com/graalvm/graalvm-ce/releases

# Verify installation
java -version
# openjdk version "22.0.2" 2024-...
# OpenJDK Runtime Environment GraalVM CE 22.0.2
native-image --version
# native-image 22.0.2
```

:::info
As of JDK 22, native-image is bundled with the standard JDK. You do not need a separate
GraalVM distribution. Install a JDK that includes native-image support (look for "GraalVM" in the
vendor name when using SDKMAN, or download from the GraalVM GitHub releases).
:::

### Building a Native Image: Step by Step

**Step 1**: Create a simple Java application:

```java
// src/main/java/com/example/App.java
package com.example;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello from native image!");
        System.out.println("OS: " + System.getProperty("os.name"));
        System.out.println("Arch: " + System.getProperty("os.arch"));
    }
}
```

**Step 2**: Compile:

```bash
javac -d target/classes src/main/java/com/example/App.java
```

**Step 3**: Build native image:

```bash
native-image -H:Name=app -cp target/classes com.example.App
```

**Step 4**: Run:

```bash
./app
# Hello from native image!
# OS: Linux
# Arch: amd64
```

### Reflection Metadata Generation

For applications that use reflection (Spring, Jackson, Hibernate, etc.), use the agent to collect
metadata:

```bash
# Phase 1: Run with agent to collect configuration
java -agentlib:native-image-agent=config-output-dir=src/main/resources/META-INF/native-image \
     -jar myapp.jar

# Phase 2: Build native image with collected configuration
native-image -H:ConfigurationFileDirectories=src/main/resources/META-INF/native-image \
             -H:Name=myapp \
             -jar myapp.jar
```

For Spring Boot applications, the Spring AOT plugin handles most of this automatically:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <image>
            <builder>paketobuildpacks/builder-jammy-base:latest</builder>
            <env>
                <BP_NATIVE_IMAGE>true</BP_NATIVE_IMAGE>
            </env>
        </image>
    </configuration>
</plugin>
```

```bash
mvn spring-boot:build-image -Pnative
```

### Testing Native Images

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class NativeImageTest {
    @Test
    void testMainOutput() {
        // Test the main class logic, not the native image itself
        App app = new App();
        String result = app.greet("World");
        assertEquals("Hello, World!", result);
    }
}
```

```bash
# Run tests in JVM mode (fast iteration)
mvn test

# Build native image and run integration tests against it
mvn -Pnative native:compile
./target/myapp --test
```

:::warning
Do not attempt to unit test the native image binary itself during development. The build
takes 30-120 seconds, which makes the test cycle too slow. Test business logic in JVM mode, and use
the native image binary only for integration tests and final validation.
:::

## Common Pitfalls

### Reflection in Native Image

The closed-world analysis cannot see reflective access. If you use `Class.forName()`,
`getDeclaredMethod()`, or `newInstance()` on a class that is not otherwise reachable, it will not be
included in the native image.

```java
// This will fail at runtime in native image if MyDto is not otherwise reachable
Class&lt;?&gt; clazz = Class.forName("com.example.MyDto");
Object instance = clazz.getDeclaredConstructor().newInstance();
```

**Fix**: Register the class in reflection configuration, or use the agent:

```bash
java -agentlib:native-image-agent=config-output-dir=META-INF/native-image \
     -jar myapp.jar
```

### Classpath Scanning Failures

Frameworks like Spring and Hibernate scan the classpath at runtime to find annotated classes. This
does not work in native image because there is no classpath at runtime -- all classes are statically
linked.

**Fix**: Use the agent, or configure the framework's native-image integration:

```java
// Spring Boot: AOT processing generates reachability metadata at build time
// Hibernate: use the Hibernate native-image integration
// Jackson: register modules explicitly
```

### Resource Loading

`ClassLoader.getResource()` and `ClassLoader.getResourceAsStream()` work in native image only for
resources registered in the resource configuration. Resources not listed are not included in the
binary.

**Fix**: Use the agent to detect resource access, or list resources explicitly in
`resource-config.json`:

```json
{
  "resources": {
    "includes": [{ "pattern": "application\\.properties" }, { "pattern": "static/.*" }]
  }
}
```

### JNI Limitations in Native Image

JNI libraries loaded with `System.loadLibrary()` work in native image, but the JNI configuration
must list all native methods and their signatures. Dynamically registered JNI methods (via
`RegisterNatives`) require additional configuration.

The FFM API is the preferred mechanism for native interop in native image. It requires no JNI
configuration and is fully supported.

### Build-Time vs Runtime Initialization

Classes initialized at build time have their static fields frozen into the image heap. If a static
field holds a reference to a build-machine-specific value (a file path, a network address, a
timestamp), that value persists in the deployed binary.

```java
// Dangerous: initialized at build time
public class Config {
    // This path is baked in at build time, not at runtime
    private static final String DATA_DIR = System.getProperty("app.data.dir", "/tmp/data");
}

// Safe: initialized at runtime
// Force runtime initialization with: --initialize-at-run-time=com.example.Config
```

**Fix**: Explicitly mark such classes for runtime initialization:

```bash
native-image --initialize-at-run-time=com.example.Config -jar myapp.jar
```

### Dynamic Proxies

`java.lang.reflect.Proxy` requires explicit configuration. If you create dynamic proxies at runtime
(e.g., for Mockito, Spring AOP, or Hibernate lazy loading), you must list the interfaces they
implement in `proxy-config.json`:

```json
[["com.example.Repository"]]
```

### Serialization

Java serialization works in native image for classes that are reachable and registered. The agent
handles most cases, but custom `readObject`/`writeObject` methods that use reflection internally may
need additional configuration.

### Unsupported Features in Native Image

| Feature                            | Supported? | Notes                                 |
| ---------------------------------- | ---------- | ------------------------------------- |
| `java.lang.reflect`                | Partial    | Requires explicit configuration       |
| `java.lang.invoke` (lambdas)       | Yes        | Lambda metafactory is supported       |
| `java.lang.instrument` (agents)    | No         | No runtime class redefinition         |
| `java.security` (dynamic policies) | Partial    | Security providers must be registered |
| `javax.script` (ScriptEngine)      | Partial    | JS engine available, others vary      |
| `java.util.logging`                | Yes        |                                       |
| `java.net.http.HttpClient`         | Yes        | Fully supported                       |
| `java.net.URI`/`URL`               | Yes        |                                       |
| `javax.crypto`                     | Partial    | Some providers need registration      |

## Reference

### JEP Numbers and Java Versions

| JEP | Feature                                | Java Version | Status    |
| --- | -------------------------------------- | ------------ | --------- |
| 424 | Foreign Function and Memory API        | 22           | Standard  |
| 444 | Virtual Threads                        | 21           | Standard  |
| 446 | Scoped Values (preview)                | 21           | Preview   |
| 448 | Vector API (incubator)                 | 16+          | Incubator |
| 453 | Structured Concurrency (preview)       | 21           | Preview   |
| 440 | Record Patterns                        | 21           | Standard  |
| 441 | Pattern Matching for switch            | 21           | Standard  |
| 443 | Unnamed Patterns and Variables         | 22           | Standard  |
| 445 | Unnamed Classes and Instance Methods   | 22           | Standard  |
| 459 | String Templates (preview)             | 21           | Preview   |
| 477 | Implicitly Declared Classes/Instances  | 22           | Standard  |
| 482 | Flexible Constructor Bodies (Valhalla) | 24           | Preview   |
| 401 | Value Classes (Valhalla)               | TBD          | Preview   |
| 412 | Foreign Function and Memory API (prev) | 19           | Preview   |
| 395 | Records                                | 16           | Standard  |
| 409 | Sealed Classes                         | 17           | Standard  |

### Useful JVM Flags

#### Graal JIT

```bash
-XX:+UnlockExperimentalVMOptions   # Required for experimental flags
-XX:+UseJVMCICompiler              # Use Graal as the top-tier JIT
-XX:+PrintCompilation              # Print compilation events
-XX:CompileCommand=print,*Foo.bar  # Print assembly for specific method
```

#### Native Image

```bash
-H:Name=myapp                           # Output binary name
-H:+ReportExceptionStackTraces         # Include stack traces in native image
--no-fallback                          # Fail if native image cannot be built (no JVM fallback)
--initialize-at-build-time=            # Initialize classes at build time
--initialize-at-run-time=              # Initialize classes at runtime
-O0 / -O1 / -O2                        # Optimization level (default: -O2)
-H:+AddAllCharsets                     # Include all character sets (increases image size)
-H:ConfigurationFileDirectories=       # Path to reflection/resource/proxy config
-H:+UnlockExperimentalVMOptions        # Enable experimental features
--gc=serial / --gc=parallel            # Garbage collector selection
--enable-svm                           # Enable SubstrateVM features
-H:DashboardDump=directory             # Generate build dashboard data
-H:+BuildOutputProgress                # Show build progress
```

#### FFM API

```bash
--enable-native-access=ALL-UNNAMED     # Enable restricted FFM methods
--enable-native-access=com.example     # Enable for specific module
```

#### Virtual Threads

```bash
-Djdk.virtualThreadScheduler.parallelism=8    # Carrier thread count
-Djdk.virtualThreadScheduler.maxPoolSize=256   # Max carrier threads
-Djdk.tracePinnedThreads=short                 # Log pinning events
-Djdk.tracePinnedThreads=long                  # Log pinning with stack traces
```

#### Vector API

```bash
--add-modules jdk.incubator.vector    # Required to use the Vector API
```

### Platform-Specific Notes

#### Linux

- Native image requires `glibc-devel`, `zlib-devel`, and `libstdc++-static` on most distributions.
- The FFM API uses `dlopen`/`dlsym` for symbol lookup. Library paths follow `LD_LIBRARY_PATH`.

#### macOS

- Native image on Apple Silicon requires JDK 22+ with ARM64 support.
- The FFM API uses `dlopen`/`dlsym`. Frameworks must be loaded by full path.

#### Windows

- Native image requires Visual Studio Build Tools with the C++ workload.
- The FFM API uses `LoadLibrary`/`GetProcAddress`. DLLs must be on `PATH`.
