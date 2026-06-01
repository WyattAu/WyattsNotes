---
title: JIT Compilation and Deoptimization
description:
  'Java JIT Compilation and Deoptimization notes covering key definitions, core concepts, worked
  examples, and practice questions for efficient revision.'
date: 2026-04-03T00:00:00.000Z
tags: ['java']
categories: ['java']
slug: jit-compilation
---

## Interpreter vs JIT Compilation

Java source code is compiled to bytecode (`.class` files) by `javac`. The JVM then has two ways to
Execute that bytecode: interpretation and JIT (Just-In-Time) compilation.

**Interpretation** reads each bytecode instruction, decodes it, and executes it. It is simple and
Portable but slow -- each instruction dispatch has overhead, and there is no opportunity for
Optimization across instruction boundaries.

**JIT compilation** translates bytecode into native machine code at runtime. The compiled code runs
At native speed, and the JIT can perform optimizations based on runtime profiling data that a static
Compiler (like `javac` or a C++ compiler) cannot see.

The JVM starts by interpreting all methods. As a method is executed repeatedly, the JVM's profiling
Infrastructure counts invocations and back-edge jumps (loop iterations). When a method crosses a
Compilation threshold, the JIT compiler compiles it to native code. Subsequent calls to that method
Execute the compiled native code directly, bypassing the interpreter entirely.

This hybrid approach gives you:

- **Fast startup**: The JVM starts interpreting immediately without waiting for compilation.
- **Peak performance**: Hot methods are compiled to optimized native code.
- **Profile-guided optimization**: The JIT optimizes based on actual runtime behavior (which
  branches are taken, which types appear, which methods are called).

## C1 and C2 Compilers

HotSpot has two JIT compilers:

**C1 (Client Compiler)**: Optimizes for fast compilation. Performs basic optimizations (inlining,
Null checks, simple constant folding). Compilation is fast (milliseconds), so methods are compiled
Sooner after they become hot. The compiled code is good but not optimal.

**C2 (Server Compiler)**: Optimizes for maximum performance. Performs aggressive optimizations
(escape analysis, loop unrolling, global value numbering, range check elimination). Compilation is
Slow (seconds), so methods must be very hot before C2 compiles them. The compiled code is
Near-optimal.

### Tiered Compilation

Modern HotSpot uses tiered compilation by default, combining C1 and C2:

1. **Tier 0**: Interpretation with profiling.
2. **Tier 1**: C1 compiled, simple profiling.
3. **Tier 2**: C1 compiled, limited profiling (for methods that are hot but not extremely hot).
4. **Tier 3**: C1 compiled, full profiling.
5. **Tier 4**: C2 compiled, fully optimized (no profiling).

Methods start at tier 0 and advance through the tiers as they get hotter. C1 provides a quick
Performance boost for moderately hot methods, while C2 provides maximum throughput for the hottest
Methods. The profiling data collected at lower tiers feeds into C2's optimization decisions.

```bash
# Tiered compilation is the default since Java 8
# Explicitly enable (in case it was disabled):
java -XX:+TieredCompilation MyApp

# Disable tiered compilation (use only C2):
java -XX:-TieredCompilation MyApp

# Use only C1:
java -XX:TieredStopAtLevel=1 MyApp
```

## Hot Spot Detection

### Method Invocation Counters

Each method has an invocation counter. Each time the method is called (via `invokevirtual`
`invokeinterface``invokestatic`Or `invokespecial`), the counter increments. When the counter Crosses
the compilation threshold, the method is queued for compilation.

```bash
# Default compilation threshold
-XX:CompileThreshold=10000  # C2 threshold (tiered: interpreted -> C2)
```

With tiered compilation, the thresholds are lower: C1 compiles at 1000-5000 invocations, and C2
Compiles at 10000-15000 invocations (exact values depend on the JVM version and platform).

### Back-Edge Counters (OSR)

Loops are the primary performance bottleneck in most programs. A method with a long-running loop
Might never be called enough times to cross the invocation threshold, but the loop body executes
Millions of times. The back-edge counter counts each iteration of a loop (each time control jumps
Back to the loop header).

When the back-edge counter crosses the threshold, the JVM performs **On-Stack Replacement (OSR)**:
It compiles the loop body while the loop is still executing and replaces the interpreted loop with
The compiled version mid-execution. The stack frame is rewritten to continue execution in the
Compiled code.

```java
public void hotLoop() {
    // This method might only be called once, but the loop runs millions of times
    // OSR compiles the loop body while it is running
    for (int i = 0; i &lt; 10_000_000; i++) {
        // After ~10,000 iterations, OSR compiles this loop
        process(i);
    }
}
```

OSR is why Java programs "warm up": the first few iterations run interpreted, then the JIT kicks in
And subsequent iterations run at full native speed. The transition is seamless -- the loop index and
All local variables are preserved.

### Counter Decay

Invocation counters decay over time. If a method is not called frequently enough, its counter is
Decremented. This prevents one-time startup methods from being compiled and wasting code cache
Space. The decay rate is controlled by `-XX:CompileThresholdScaling`.

## Optimization Techniques

### Inlining

Inlining is the single most impactful optimization. It replaces a method call with the body of the
Callee, eliminating call overhead (parameter passing, stack frame setup, return value handling) and
Enabling downstream optimizations across the call boundary.

```java
// Before inlining
int result = add(multiply(a, b), multiply(c, d));

// After inlining (multiply is inlined into add)
int temp1 = a * b;
int temp2 = c * d;
int result = temp1 + temp2;
```

C2 is aggressive about inlining. The maximum inline depth is controlled by `-XX:MaxInlineLevel=9`
(default). Methods larger than 325 bytes (configurable via `-XX:MaxInlineSize=325`) are not inlined.
Hot methods with frequent calls are inlined even if they exceed the size limit (up to
`-XX:FreqInlineSize=325`).

```bash
# Disable inlining for a specific method
-XX:CompileCommand=dontinline,com/example/MyClass.myMethod

# Force inlining (rarely needed)
-XX:CompileCommand=inline,com/example/MyClass.myMethod

# Print inlining decisions
-XX:+PrintInlining
```

### Escape Analysis

Escape analysis determines whether an object is accessible outside the method that created it. If an
Object does not escape (it is only used locally), the JIT can:

1. **Eliminate the allocation entirely** (stack allocation or scalar replacement).
2. **Remove synchronization** on objects that do not escape (because no other thread can access
   them).
3. **Eliminate field accesses** and replace them with local variables.

```java
public int sum(int[] data) {
    // The StringBuilder does not escape this method
    // The JIT eliminates the allocation and replaces it with scalar operations
    StringBuilder sb = new StringBuilder();
    for (int val : data) {
        sb.append(val).append(",");
    }
    return sb.toString().length();
}

public int compute(Point p) {
    // If Point does not escape, the JIT replaces p.x() and p.y()
    // with scalar values, eliminating the field load
    int x = p.x();
    int y = p.y();
    return x * x + y * y;
}
```

### Scalar Replacement

When escape analysis proves an object does not escape, scalar replacement breaks the object into its
Individual fields and treats them as separate scalar values stored on the stack or in registers.
This eliminates heap allocation, reduces GC pressure, and enables further optimizations.

```java
// Before scalar replacement
public int distance(int x1, int y1, int x2, int y2) {
    Point p1 = new Point(x1, y1);  // Allocated on heap
    Point p2 = new Point(x2, y2);  // Allocated on heap
    return (int) Math.sqrt(
        (p2.x() - p1.x()) * (p2.x() - p1.x()) +
        (p2.y() - p1.y()) * (p2.y() - p1.y())
    );
}

// After scalar replacement (conceptual)
// Point objects are eliminated, fields are stored as local variables
public int distance(int x1, int y1, int x2, int y2) {
    double dx = x2 - x1;
    double dy = y2 - y1;
    return (int) Math.sqrt(dx * dx + dy * dy);
}
```

### Loop Unrolling

Loop unrolling reduces the overhead of loop control (branch prediction, counter increments, bounds
Checks) by executing multiple iterations per loop iteration:

```java
// Before unrolling
for (int i = 0; i &lt; 1000; i++) {
    sum += data[i];
}

// After unrolling (4x)
for (int i = 0; i &lt; 1000; i += 4) {
    sum += data[i];
    sum += data[i + 1];
    sum += data[i + 2];
    sum += data[i + 3];
}
```

C2 performs loop unrolling based on heuristics: the loop body must be small, the iteration count
Must be known (or predictable), and unrolling must not increase code size beyond the benefit. The
Unroll factor is controlled by `-XX:LoopUnrollLimit`.

### Dead Code Elimination

Code that cannot be reached or whose results are never used is eliminated entirely. This includes:

- Unreachable branches after constant condition evaluation.
- Assignments to local variables that are never read.
- Method calls whose return values are discarded and that have no side effects (after escape
  analysis confirms the receiver does not escape).

```java
public int optimized(boolean flag) {
    int a = 10;
    int b = 20;
    if (false) {
        b = 30;  // Dead code -- never executed
    }
    return a + b;  // Compiler folds to return 30
}
```

### Constant Folding

Expressions involving compile-time constants are evaluated at compile time:

```java
// Before constant folding
int secondsPerDay = 24 * 60 * 60;

// After constant folding
int secondsPerDay = 86400;
```

C2 also performs constant propagation: if a variable is assigned a constant value and never
Reassigned, all uses of that variable are replaced with the constant. This enables further
Optimizations like dead code elimination.

### Null Check Elimination

The JIT eliminates redundant null checks when it can prove that a value is non-null:

```java
public int length(String s) {
    if (s == null) {
        throw new IllegalArgumentException("s must not be null");
    }
    // After the explicit null check, s.hashCode() does not need an implicit null check
    return s.hashCode();
}
```

In practice, the JVM uses implicit null checks via hardware traps: it dereferences the pointer and
Relies on a `SIGSEGV` signal handler to throw `NullPointerException`. This is faster than an
Explicit branch because the common case (non-null) has zero overhead.

### Range Check Elimination

Array accesses inside loops with predictable bounds have range checks eliminated:

```java
// Before range check elimination
for (int i = 0; i &lt; data.length; i++) {
    sum += data[i];  // Implicit range check on every iteration
}

// After range check elimination
// The JIT proves that 0 &lt;= i &lt; data.length always holds
// The range check is eliminated from the loop body
for (int i = 0; i &lt; data.length; i++) {
    sum += data[i];
}
```

## Deoptimization

### When Compiled Code Is Invalidated

The JIT makes assumptions based on profiling data: that a virtual call always targets the same
Class, that a branch is always taken, that a type check always succeeds. If these assumptions become
Invalid (due to class loading, field modification, or changes in runtime behavior), the compiled
Code must be **deoptimized**: the JVM discards the compiled native code and reverts to interpreted
Execution.

Common triggers:

- **Class loading**: A new subclass is loaded that overrides a method that was inlined. The inlined
  code is no longer correct.
- **Abstract method implementation**: An abstract method was called on a concrete type, and a new
  implementation is loaded.
- **Interface method dispatch**: A class implements a new interface, changing the dispatch target.
- **Field type change**: A field that always contained `String` suddenly contains `Integer`.
- **OSR entry/exit**: OSR-compiled code may be deoptimized when the loop exits and execution returns
  to the interpreter.

### How Deoptimization Works

When deoptimization is triggered:

1. The JVM walks the stack of the thread executing the invalid compiled code.
2. It identifies all frames that contain invalid assumptions.
3. For each frame, it reconstructs the interpreter state (local variables, operand stack, program
   counter) from the compiled code state.
4. It replaces the compiled frames with interpreter frames.
5. Execution continues in the interpreter from the point where the invalid assumption was detected.

This process is called "unpacking" and it is relatively expensive (microseconds per frame), but it
Only happens when the profiling assumptions change, which is rare in steady-state execution.

### Deoptimization Points

The JIT inserts deoptimization points (also called "safepoints") at backward branches (loop headers)
And method returns. These are points where the JVM has enough information to reconstruct the
Interpreter state. If deoptimization is needed, the JVM waits until the thread reaches the next
Safepoint.

Rarely, a deoptimization is "urgent" (e.g., a field was modified and the compiled code reads stale
Data). In this case, the JVM can force deoptimization at the next safepoint poll, which is inserted
At method calls, loop back edges, and return points.

## AOT Compilation: GraalVM Native Image

### How Native Image Works

GraalVM Native Image performs ahead-of-time (AOT) compilation: it analyzes your application at build
Time, determines the closed-world set of classes and methods that are reachable, and compiles them
To a standalone native executable. There is no JIT at runtime -- all code is already native machine
Code.

```bash
# Build a native image
native-image -H:Name=myapp -cp myapp.jar com.example.Main

# Run the native executable
./myapp
```

### Advantages

- **Instant startup**: No interpretation, no JIT warmup. The application starts at full speed.
- **Small memory footprint**: No JIT compiler, no code cache, no profiling infrastructure. Typical
  native images use 30-50 MB of RSS.
- **Fast container startup**: Ideal for serverless, CLI tools, and Kubernetes where startup time
  matters.
- **No warmup phase**: Performance is predictable from the first request.

### Disadvantages

- **No profile-guided optimization**: The AOT compiler does not have runtime profiling data. It
  cannot inline virtual calls that are monomorphic at runtime, cannot eliminate branches that are
  never taken, and cannot perform escape analysis based on actual allocation patterns.
- **Closed-world assumption**: All classes must be known at build time. Reflection, dynamic proxies,
  and classpath scanning require explicit configuration (reflection configs, resource configs, proxy
  configs). This is a significant maintenance burden for frameworks that rely heavily on reflection
  (Spring, Hibernate, Jackson).
- **Peak throughput is lower**: Native images achieve 60-80% of JIT peak throughput for
  compute-bound workloads. For I/O-bound workloads, the difference is negligible.
- **Longer build times**: AOT compilation is slow (seconds to minutes for large applications).
- **Limited debugging**: Stack traces from native images are less informative than JIT stack traces.
  Profiling tools (VisualVM, async profiler) have limited support.

### When to Use Native Image

Use native image when:

- Startup time is critical (serverless functions, CLI tools, cron jobs).
- Memory is constrained (containers with tight resource limits).
- Peak throughput is not the primary metric.
- The application has a relatively simple dependency tree (few reflection-based frameworks).

Do not use native image when:

- Peak throughput is the primary metric.
- The application heavily uses reflection, dynamic class loading, or runtime code generation.
- You rely on JVM monitoring tools (JFR, VisualVM, jstat) for production debugging.

## JVM Flags for JIT

### Compilation Control

```bash
# Compilation thresholds
-XX:CompileThreshold=10000         # C2 threshold (interpreted -> C2)
-XX:TieredStopAtLevel=4            # Highest tier to use (1=C1 only, 4=C2)
-XX:InitialCodeCacheSize=4096k     # Initial code cache size
-XX:ReservedCodeCacheSize=256m     # Maximum code cache size

# Print compilation activity
-XX:+PrintCompilation              # Print method compilations
-XX:+PrintInlining                 # Print inlining decisions (very verbose)

# Control specific methods
-XX:CompileCommand=dontinline,*MyClass.myMethod
-XX:CompileCommand=exclude,*MyClass.myMethod    # Never compile
-XX:CompileCommand=log,*MyClass.*               # Log compilations
-XX:CompileCommand=print,*MyClass.myMethod      # Print assembly after compilation
```

### Disabling Optimizations (for Debugging)

```bash
# Disable escape analysis
-XX:-EliminateAllocations
-XX:-EliminateLocks

# Disable inlining
-XX:-Inline

# Disable loop unrolling
-XX:LoopUnrollLimit=0
```

These flags are useful for verifying that a specific optimization is responsible for a bug or a
Performance change. They should never be used in production.

## Practical Profiling

### jstat: GC Statistics

```bash
# GC utilization every 1 second
jstat -gcutil &lt;pid&gt; 1000

# GC summary with more detail
jstat -gc &lt;pid&gt; 1000
```

### jmap: Heap Analysis

```bash
# Heap histogram (shows objects by size and count)
jmap -histo &lt;pid&gt; | head -30

# Dump heap to file for offline analysis
jmap -dump:format=b,file=heap.hprof &lt;pid&gt;
```

The heap histogram is invaluable for identifying memory leaks: if `byte[]` or `char[]` instances
Dominate, you likely have a `String` accumulation problem. If specific domain objects dominate, you
Likely have a collection leak.

### jhat: Heap Dump Analysis (Legacy)

`jhat` parses a heap dump and provides a web-based object query interface. It is slow and largely
Superseded by Eclipse MAT and VisualVM:

```bash
jhat -J-Xmx4g heap.hprof
# Open http://localhost:7000
```

### Async Profiler

Async Profiler is a low-overhead sampling profiler that uses `perf_events` (Linux), `dtrace`
(macOS), or `getrusage` (fallback) to collect stack traces with minimal impact on application
Performance (&lt; 5% overhead).

```bash
# CPU profiling for 60 seconds
./profiler.sh -d 60 -f profile.html &lt;pid&gt;

# Allocation profiling
./profiler.sh -d 60 -e alloc -f alloc.html &lt;pid&gt;

# Wall-clock profiling (includes sleep/wait)
./profiler.sh -d 60 -e wall -f wall.html &lt;pid&gt;
```

Async Profiler produces flame graphs that show where CPU time is spent. The flame graph is read
Bottom-up: the base is the root call (e.g., `Thread.run()`), and each layer above is a callee. Wide
Bars represent methods that consume more CPU time.

### Java Flight Recorder (JFR)

JFR is built into the JVM and provides production-safe profiling with sub-1% overhead. It records:

- Method profiling (CPU time per method)
- Allocation profiling (where objects are allocated)
- GC events (pause times, heap occupancy)
- I/O operations (file, network)
- Thread events (blocks, waits, locks)
- Exception throwing
- JIT compilation events

```bash
# Start a 5-minute recording
jcmd &lt;pid&gt; JFR.start duration=300s filename=app.jfr settings=profile

# Dump a running recording
jcmd &lt;pid&gt; JFR.dump filename=app.jfr

# Analyze with Java Mission Control
jmc app.jfr
```

### Interpreting Profiling Results

When profiling for performance:

1. **Focus on the hottest method**. The Pareto principle applies: 80% of CPU time is spent in 20% of
   methods.
2. **Check inlining**. If a hot method is a small wrapper that calls another method, verify the
   callee is inlined. Use `-XX:+PrintInlining` to check.
3. **Check for GC pressure**. If GC pause times are a significant fraction of total runtime, the
   application is allocating too much. Reduce allocation (object pooling, primitive arrays instead
   of boxed types, reuse buffers).
4. **Check for lock contention**. Thread dumps or JFR lock events show where threads are blocked.
   Reduce lock scope, use `ConcurrentHashMap`Or switch to lock-free algorithms.
5. **Check for I/O waits**. If threads spend most of their time in `Socket` or `FileChannel` reads,
   the bottleneck is I/O, not CPU. Optimize queries, add caching, or use async I/O.

## Common Pitfalls

### Premature Optimization

Do not optimize based on speculation. Profile first, identify the actual bottleneck, then optimize.
The JIT compiler is already doing most of the optimizations you would think of (and many you would
Not). Micro-optimizations that fight the JIT (like manually inlining, adding redundant null checks,
Or unrolling loops) are counterproductive.

### Megamorphic Call Sites

A virtual call site that has been observed to target more than 2 (inline cache) or 5 (CHT) different
Classes is "megamorphic." The JIT cannot inline megamorphic calls and must use a hash table
Dispatch. This is significantly slower than monomorphic or bimorphic inlining.

```java
// Megamorphic: process() is called on many different Animal subclasses
public void processAnimals(List&lt;Animal&gt; animals) {
    for (Animal a : animals) {
        a.process();  // If Animal has 20+ subclasses, this is megamorphic
    }
}
```

Fix: use sealed interfaces with pattern matching (switch), which the JIT can optimize into a
Tableswitch:

```java
public void processAnimals(List&lt;Animal&gt; animals) {
    for (Animal a : animals) {
        switch (a) {
            case Dog d -> d.bark();
            case Cat c -> c.meow();
            case Bird b -> b.sing();
        }
    }
}
```

### Warmup Matters for Benchmarks

Never measure performance in the first few seconds of execution. The JIT has not compiled the hot
Methods yet, and your measurements will reflect interpreted performance (5-20x slower than
Compiled). Use JMH (Java Microbenchmark Harness) for any microbenchmarking:

```java
@Benchmark
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@Warmup(iterations = 3, time = 1)
@Measurement(iterations = 5, time = 1)
@Fork(1)
public class MyBenchmark {
    @Benchmark
    public int testMethod() {
        return new Calculator().compute(42);
    }
}
```

### Code Cache Exhaustion

If the JIT compiles too many methods (common in large applications with many small methods), the
Code cache fills up. Once full, the JVM stops compiling. Monitor code cache usage:

```bash
jcmd &lt;pid&gt; Compiler.CodeHeap_Analytics none
```

Fix: increase code cache size (`-XX:ReservedCodeCacheSize=512m`) or audit which methods are being
Compiled (use `-XX:+PrintCompilation`).

## See Also

- [Class Loading and Memory Model](../09-jvm-internals/01-class-loading-memory.md) -- how class
  loading and GC interact with JIT compilation
- [Concurrency](../06-concurrency/01-concurrency.md) -- JIT optimization of concurrent code
- [Virtual Threads and Structured Concurrency](../08-modern-java/02-virtual-threads-structured-concurrency.md)
  -- JIT behavior with virtual threads
- [Style and Patterns](../07-best-practices/01-style-and-patterns.md) -- writing JIT-friendly code

## Summary

This topic covers the biological principles of jit compilation and deoptimization, including key
concepts, experimental evidence, and real-world applications.

**Key concepts include:**

- key biological principles and concepts
- experimental methods and data analysis
- applications of biology in medicine and industry
- ethical considerations in biological research
- the relationship between structure and function

Success requires the ability to recall specific factual content, apply knowledge to novel scenarios,
and evaluate experimental evidence critically.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
