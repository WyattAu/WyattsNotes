---
id: garbage-collection
title: Garbage Collection
description: JVM garbage collection — generational GC, GC algorithms, memory pools, and tuning.
slug: garbage-collection
---

## GC Fundamentals

### What Is Garbage?

An object is garbage when it is no longer reachable from any live thread through any chain of
references. The JVM determines this through **reachability analysis**, starting from a set of root
objects and tracing all objects transitively reachable from those roots.

### GC Roots

GC roots are the starting points for reachability analysis. An object is reachable if there is a
path from at least one GC root. The primary categories of GC roots:

1. **Stack-local variables and method parameters** — references on the call stack of each thread.
2. **Static fields** — references stored in class metadata (loaded by any class loader).
3. **JNI references** — references held by native code through the Java Native Interface.
4. **JNI global references** — explicitly created global references in native code.
5. **Thread objects** — every live thread is a GC root (its stack contains references).
6. **`final` fields** in objects reachable from roots (finalizers also contribute).

```java
public class GCDemo {
    private static Object staticRoot;       // GC root (static field)
    private Object instanceField;           // reachable if 'this' is reachable

    public void method() {
        Object localVar = new Object();     // GC root (stack-local) while in scope
        // After method returns, localVar is no longer a root — eligible for GC
        // UNLESS a reference was stored somewhere reachable (e.g., in instanceField)
    }
}
```

### Reachability Phases

The JVM does not immediately collect objects when they become unreachable. The GC process involves
three conceptual phases:

1. **Mark** — Identify all reachable objects starting from roots.
2. **Sweep** — Identify all unreachable objects (garbage).
3. **Compact** (optional) — Move surviving objects to eliminate fragmentation.

## JVM Memory Regions

### Heap Structure

The heap is divided into generations based on the **generational hypothesis**: most objects are
short-lived ("die young"). Separating the heap into generations allows the GC to focus collection
effort on the young generation, where most garbage accumulates.

```
Heap
├── Young Generation
│   ├── Eden Space          — where new objects are allocated
│   ├── Survivor Space 0    — objects that survived one GC
│   └── Survivor Space 1    — objects that survived one GC
└── Old Generation (Tenured)
    └── Long-lived objects   — objects that survived multiple young GCs
```

### Young Generation

- **Eden:** All new objects (except very large ones) are allocated in Eden. When Eden fills up, a
  **minor GC** (young GC) is triggered.
- **Survivor spaces:** Two equally-sized spaces (S0 and S1) that act as a holding area. After a
  minor GC, surviving objects from Eden and one survivor space are copied to the other survivor
  space. Objects accumulate an "age" counter; each time they survive a GC, the age increments.

- **Promotion:** When an object's age exceeds a threshold (`-XX:MaxTenuringThreshold`, default 15
  for G1, 6 for Parallel), it is promoted to the old generation.

```bash
# Young generation sizing
-Xmn512m              # Fixed young generation size: 512 MB
-XX:NewRatio=2        # Old:Young = 2:1, so young = 1/3 of heap
-XX:SurvivorRatio=8   # Eden:Survivor = 8:1, so each survivor = 1/10 of young
```

### Old Generation

Objects that survive multiple young GCs are promoted to the old generation. A **major GC** (or full
GC) collects the entire heap, including the old generation. Major GCs are significantly more
expensive than minor GCs because they must scan the entire heap.

### Metaspace

Stores class metadata (method bytecodes, constant pool, field/method definitions), static fields,
and interned strings (moved from PermGen in JDK 8). Metaspace uses native memory and grows until
`MaxMetaspaceSize` is reached.

```bash
-XX:MaxMetaspaceSize=256m   # Limit metaspace (prevents native memory exhaustion)
-XX:CompressedClassSpaceSize=1g  # Compressed class pointer space
```

### Code Cache

Stores JIT-compiled native code. When the code cache fills up, the JVM stops compiling (and may
deoptimize). Monitor with:

```bash
-XX:ReservedCodeCacheSize=256m
```

## Generational Hypothesis

The generational hypothesis states that:

1. **Most objects are short-lived** — they become garbage soon after allocation.
2. **Few objects survive many GC cycles** — the old generation is relatively stable.

This hypothesis has been validated empirically across virtually all Java workloads. It justifies the
generational heap layout: by collecting the young generation frequently and cheaply, the JVM avoids
costly full heap collections.

Exceptions to the hypothesis: long-lived caches, large object graphs loaded at startup, and
memory-mapped structures. These can cause premature promotion and increase old generation pressure.

## GC Algorithms

### Serial GC

The simplest collector. Uses a single thread for both minor and full GC. Stop-the-world (STW) for
the entire duration of collection.

```bash
-XX:+UseSerialGC
```

**When to use:** Small heap sizes (under ~1 GB), single-processor systems, or applications with low
pause-time requirements where simplicity is preferred. Rarely used in production servers.

**Algorithm:**

- Young GC: mark-sweep-compact on the young generation using a single thread.
- Full GC: mark-sweep-compact on the entire heap using a single thread.

### Parallel GC (Throughput Collector)

The default collector in JDK 8 and earlier for server-class machines. Uses multiple threads for
young GC and full GC but is still stop-the-world. Optimizes for **throughput** (maximize application
time between GC pauses).

```bash
-XX:+UseParallelGC          # Enable Parallel GC (default in JDK 8)
-XX:+UseParallelOldGC       # Enable parallel compaction for full GC (default since JDK 7u4)
-XX:ParallelGCThreads=8     # Number of GC threads
-XX:MaxGCPauseMillis=200    # Target maximum pause time (hint, not guarantee)
```

**Algorithm:**

- Young GC: parallel mark-copy (Eden + one survivor -&gt; other survivor).
- Full GC: parallel mark-sweep-compact.

**Trade-off:** Higher throughput (more CPU time for application) but potentially long STW pauses,
especially during full GC on large heaps.

### G1 GC

The default collector since JDK 9. Divides the heap into fixed-size regions (typically 2048 regions,
each 1-32 MB). The collector can selectively collect regions, mixing young and old generation
collection in a single pass ("mixed collection").

```bash
-XX:+UseG1GC                      # Enable G1 GC (default since JDK 9)
-XX:MaxGCPauseMillis=200          # Target pause time
-XX:G1HeapRegionSize=8m           # Region size (1, 2, 4, 8, 16, 32 MB)
-XX:G1MixedGCCountTarget=8        # Number of mixed collections after a marking cycle
-XX:G1ReservePercent=10           # Reserve 10% of heap for unexpected promotions
-XX:InitiatingHeapOccupancyPercent=45  # Start marking when heap is 45% full
```

**G1 phases:**

1. **Young-only collection** — collects Eden and survivor regions (same as minor GC in other
   collectors).
2. **Concurrent marking** — while the application runs, G1 marks live objects across all regions.
3. **Mixed collection** — collects some young regions AND some old regions with the most garbage.
   Balances pause time against overall memory release.

**G1 advantages:**

- Predictable pause times (configurable target).
- No full GC in normal operation (mixed collections replace it).
- Handles large heaps (multi-GB to TB-scale) better than Parallel GC.
- Compaction is incremental (done region-by-region during mixed collections).

**G1 disadvantages:**

- Higher memory overhead (region tables, remembered sets).
- More complex tuning.
- Can fall back to full GC under memory pressure (sign of a tuning problem).

### ZGC

A scalable, low-latency collector designed for multi-TB heaps with pause times under 10 milliseconds
(target: sub-millisecond). Became production-ready in JDK 15.

```bash
-XX:+UseZGC                    # Enable ZGC
-XX:+ZGenerational             # Enable generational ZGC (JDK 21+)
-XX:SoftMaxHeapSize=16g        # Soft limit — GC will try to stay under this
```

**ZGC design:**

- **Concurrent:** Almost all GC work (marking, relocation, compaction) happens concurrently with the
  application. STW pauses are limited to root scanning and a few other operations, typically under 1
  ms regardless of heap size.
- **Colored pointers:** ZGC uses 64-bit pointers with metadata bits (color bits) to track object
  state (marked, relocated, finalized) without requiring per-object headers.
- **Load barriers:** ZGC uses load barriers (triggered on every reference read) to detect and fix
  stale references. This is the main concurrency mechanism.
- **Region-based:** Like G1, the heap is divided into regions, but ZGC regions are more dynamic (2
  MB, 32 MB, or N MB for large objects).

**ZGC limitations:**

- Requires 64-bit platform (uses high bits of 64-bit pointers).
- Load barriers add a small overhead to every reference read (~2-5% throughput reduction).
- May use more native memory than G1 for large heaps.

### Shenandoah

An open-source low-pause collector (backed by Red Hat). Similar goals to ZGC but uses a different
implementation (Brooks pointers instead of colored pointers).

```bash
-XX:+UseShenandoahGC
```

## GC Pauses

### Stop-the-World (STW)

During an STW pause, all application threads are suspended. The JVM cannot execute application code
while the GC is running. STW pauses directly impact application latency — if a GC pause takes 500
ms, no requests can be served during that time.

### Concurrent Phases

Modern collectors (G1, ZGC, Shenandoah) perform significant work concurrently with the application.
Only specific phases require STW pauses:

| Collector  | STW Phases                          | Concurrent Phases                  |
| ---------- | ----------------------------------- | ---------------------------------- |
| Serial     | All                                 | None                               |
| Parallel   | All                                 | None                               |
| G1         | Root scanning, evacuation (partial) | Marking, remembered set processing |
| ZGC        | Root scanning (sub-ms)              | Marking, relocation, compaction    |
| Shenandoah | Root scanning (sub-ms)              | Marking, evacuation, compaction    |

## GC Tuning Flags

### Heap Sizing

```bash
-Xms4g                # Initial heap size (minimum)
-Xmx4g                # Maximum heap size
# Set Xms == Xmx to avoid dynamic resizing overhead
```

### Collector Selection

```bash
-XX:+UseSerialGC       # Serial
-XX:+UseParallelGC     # Parallel (throughput)
-XX:+UseG1GC           # G1 (balanced)
-XX:+UseZGC            # ZGC (low latency)
-XX:+UseShenandoahGC   # Shenandoah (low latency)
```

### G1-Specific Tuning

```bash
-XX:MaxGCPauseMillis=200          # Target max pause (default 200ms)
-XX:G1HeapRegionSize=8m           # Region size
-XX:G1MixedGCCountTarget=8        # Mixed collections per cycle
-XX:InitiatingHeapOccupancyPercent=45  # Marking trigger threshold
-XX:G1NewSizePercent=5            # Min young generation (% of heap)
-XX:G1MaxNewSizePercent=60        # Max young generation (% of heap)
```

### Parallel GC Tuning

```bash
-XX:ParallelGCThreads=8           # GC worker threads
-XX:MaxGCPauseMillis=200          # Throughput hint (not guaranteed)
-XX:GCTimeRatio=99                # GC time : application time = 1:99
```

### String Deduplication (G1 only)

```bash
-XX:+UseG1GC
-XX:+StringDeduplication         # Deduplicate string backing arrays
```

## GC Logging

JDK 9+ uses the unified logging framework (`-Xlog`):

```bash
# Basic GC logging
-Xlog:gc*

# GC logging with details
-Xlog:gc*=info:file=gc.log:time,uptime,level,tags:filecount=5,filesize=100M

# Specific GC phases
-Xlog:gc+heap=debug               # Heap changes
-Xlog:gc+phases=debug             # GC phase details
-Xlog:gc+pause=info               # Pause times
-Xlog:gc+cpu=info                 # GC CPU usage
```

### Analyzing GC Logs

Use tools like **GCViewer**, **GCEasy.io**, or **JDK Mission Control** to analyze GC logs. Key
metrics to watch:

- **Pause time distribution** — P50, P95, P99, P99.9.
- **Throughput** — percentage of time the application is running vs. in GC.
- **Allocation rate** — MB/s allocated (high rate drives frequent GC).
- **Promotion rate** — MB/s promoted to old generation.
- **Old generation growth** — if it grows linearly, you have a memory leak or insufficient heap.

```bash
# Print GC summary at JVM exit
-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc.log  # JDK 8
-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=100m  # JDK 9+
```

## Memory Leaks

### Common Causes

1. **Static collections** — accumulating entries without removal.
2. **Unclosed resources** — holding references through unclosed streams, connections, or
   `ThreadLocal` instances.
3. **Listener registration** — registering listeners but never unregistering.
4. **Internal caches without eviction** — `HashMap` used as a cache without size limits or eviction
   policy.
5. **`ThreadLocal` in thread pools** — values not cleaned up when tasks complete.
6. **String interning** — interning unbounded unique strings.

### Detection with Heap Dumps

```bash
# Trigger a heap dump on OOM
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/tmp/heap.hprof

# Manual heap dump
jmap -dump:live,format=b,file=heap.hprof <pid>
```

Analyze heap dumps with **Eclipse MAT** (Memory Analyzer Tool), **VisualVM**, or **IntelliJ IDEA
profiler**:

1. Open the heap dump in MAT.
2. Run the "Leak Suspects" report.
3. Look at "Dominator Tree" — objects that retain the most memory.
4. Check "GC Roots" to find what is holding references to leaked objects.

### Weak, Soft, and Phantom References

```java
// WeakReference — GC'd as soon as no strong references remain
// Use for caches where entries can be reclaimed when memory is needed
WeakReference<byte[]> weak = new WeakReference<>(largeData);
byte[] data = weak.get(); // null if GC'd

// SoftReference — GC'd only when the JVM needs memory
// Use for memory-sensitive caches
SoftReference<byte[]> soft = new SoftReference<>(largeData);
byte[] data = soft.get(); // may survive several GC cycles

// PhantomReference — enqueued after the object is finalized
// Use for cleanup (e.g., releasing native resources)
ReferenceQueue<byte[]> queue = new ReferenceQueue<>();
PhantomReference<byte[]> phantom = new PhantomReference<>(largeData, queue);
// phantom.get() always returns null
// Object is enqueued after GC, but before memory reclamation
```

### Reference Queues

Reference queues allow you to be notified when a reference is cleared by the GC. This is useful for
cleanup:

```java
ReferenceQueue<Object> queue = new ReferenceQueue<>();
Map<Object, String> metadata = new ConcurrentHashMap<>();

// Create a phantom reference with a queue
Object resource = new Object();
PhantomReference<Object> ref = new PhantomReference<>(resource, queue);

// When the GC clears the reference, it is enqueued
// A background thread can poll the queue and perform cleanup
Thread cleaner = new Thread(() -&gt; {
    while (true) {
        try {
            Reference<? extends Object> cleared = queue.remove();
            String meta = metadata.remove(cleared);
            if (meta != null) {
                cleanupNativeResource(meta);
            }
        } catch (InterruptedException e) {
            break;
        }
    }
});
cleaner.setDaemon(true);
cleaner.start();
```

## Finalizers

`Object.finalize()` is called by the GC before an object's memory is reclaimed. **Do not use
finalizers.** They are deprecated for removal since JDK 18.

### Problems with Finalizers

1. **Unpredictable timing** — there is no guarantee when (or if) the finalizer will run.
2. **Performance** — finalizable objects require extra GC cycles.
3. **Resurrection** — a finalizer can make the object reachable again by storing `this` in a static
   field.
4. **Exceptions in finalizers are silently swallowed** — they do not propagate.
5. **Finalizer thread bottleneck** — a single finalizer thread processes all finalizable objects,
   creating a bottleneck.

```java
// DEPRECATED — do not use
public class Resource {
    @Override
    protected void finalize() throws Throwable {
        try {
            close();
        } finally {
            super.finalize();
        }
    }
    public void close() { /* release resources */ }
}

// CORRECT — use try-with-resources
public class Resource implements AutoCloseable {
    public void close() { /* release resources */ }
}

try (Resource r = new Resource()) {
    // use resource
} // close() called automatically
```

## Common Pitfalls

### Setting `Xms` Much Lower Than `Xmx`

```bash
# BAD — JVM starts small and grows, causing multiple GC cycles during startup
java -Xms128m -Xmx4g MyApp

# GOOD — allocate the full heap upfront
java -Xms4g -Xmx4g MyApp
```

### Ignoring GC Logs Until Production

Never ship to production without GC logging. You cannot tune what you cannot measure. Enable GC
logging from day one, even in development.

### Premature Promotion

If objects are promoted to the old generation too quickly, the old generation fills up and triggers
expensive full GCs. Causes: young generation too small, survivor spaces too small, large objects
(allocated directly in old generation if they exceed the `PretenureSizeThreshold`).

```bash
# Monitor promotion rate
-Xlog:gc+age=debug  # Shows object aging and promotion
```

### Using `System.gc()`

`System.gc()` is a hint to the JVM to perform a full GC. It is not guaranteed to run, and it can
trigger an unexpected long pause. Never call it in application code. Disable explicit GC calls with:

```bash
-XX:+DisableExplicitGC
```

### Over-Tuning GC

Do not tune GC until you have measured and identified a problem. Many applications run fine with
default settings. Start with G1 (the default) and only tune specific flags if you have concrete
evidence of a problem (long pauses, low throughput, high memory usage).

### Full GC Under G1

If G1 falls back to full GC, it means the concurrent cycle could not keep up with allocation
pressure. This is a sign that the heap is too small, the marking threshold is too high, or the mixed
collections are not reclaiming enough memory. Address the root cause rather than trying to tune
around it.

### Large Objects and Humongous Allocations

Objects larger than half a G1 region size are allocated directly in the old generation as
"humongous" objects. This bypasses the young generation entirely, which defeats the generational
hypothesis. Large byte arrays (e.g., pre-allocated buffers for I/O), large `String` objects, and big
collections are typical culprits.

```bash
# Monitor humongous allocations
-Xlog:gc+humongous=debug

# Tune region size to reduce humongous allocations
# Default region size is 1/2048 of heap, rounded to power of 2
# For a 4 GB heap, default region size is 2 MB (humongous threshold = 1 MB)
-XX:G1HeapRegionSize=8m  # increases humongous threshold to 4 MB
```

If your application allocates many objects larger than the humongous threshold, consider: increasing
the region size, pooling large buffers, or using `MappedByteBuffer` for large data structures that
do not need to live on the GC-managed heap.

### String Deduplication in Detail

G1's string deduplication identifies `String` objects in the old generation whose backing `byte[]`
arrays are identical, and replaces duplicates with a single shared array. This operates at GC time
and is transparent to the application.

```bash
-XX:+UseG1GC -XX:+StringDeduplication
-XX:StringDeduplicationAgeThreshold=3  # deduplicate strings promoted at least 3 GC cycles ago
```

Deduplication works by maintaining a queue of candidate `String` objects. During a GC pause, the JVM
compares the backing `byte[]` of candidate strings. If a duplicate is found, the JVM replaces the
duplicate's reference to point to the canonical array. The old array becomes garbage and is
collected in a subsequent GC cycle.

**When to enable:** Applications with high heap usage dominated by duplicate strings (web servers
processing similar requests, XML/JSON parsers, log aggregation). The overhead is minimal — a few
percent of GC pause time — but the memory savings can be substantial (20-30% reduction in live set
size for string-heavy workloads).

**When NOT to enable:** Applications with few duplicate strings (the deduplication work has no
benefit), or when using ZGC/Shenandoah (which do not support string deduplication).

## GC in Containers and Cloud Environments

### Container-Aware JVM

Modern JVMs (JDK 8u191+, JDK 10+) automatically detect container limits (cgroups v1 and v2) and set
heap size defaults accordingly. Earlier JVMs would use host machine memory, leading to OOM kills in
containers.

```bash
# Verify container detection
java -XshowSettings:system -version
# Container count: 1 (if running in a container)
# Memory Limit: 512M (from cgroup)
```

### Recommended GC Settings for Containers

```bash
# G1 with container-aware defaults (JDK 11+)
java -XX:+UseG1GC -XX:MaxRAMPercentage=75.0 -jar app.jar
# Uses 75% of the container memory limit for heap

# Explicit heap sizing (if MaxRAMPercentage is insufficient)
java -XX:+UseG1GC -Xms2g -Xmx2g -jar app.jar

# ZGC for latency-sensitive services
java -XX:+UseZGC -XX:MaxRAMPercentage=75.0 -jar app.jar
```

:::tip
Use `-XX:MaxRAMPercentage` instead of fixed `-Xmx` for containerized deployments. This allows
the same container image to work with different memory limits without rebuilding. A value of 70-80%
is typical, leaving room for metaspace, native memory, and off-heap buffers.
:::

### Native Memory Tracking

The JVM's heap is only part of the total memory used by a Java process. Native memory includes
metaspace, thread stacks, direct buffers, code cache, and JNI allocations. In containers, native
memory usage can cause OOM kills even when heap usage is low.

```bash
# Enable native memory tracking (small runtime overhead, ~5%)
-XX:NativeMemoryTracking=summary

# Print native memory summary at JVM exit
-XX:+PrintNMTStatistics

# Runtime dump via jcmd
jcmd <pid> VM.native_memory summary
jcmd <pid> VM.native_memory detail scale=MB
```

A typical memory breakdown for a JVM process:

| Component      | Typical Allocation                 |
| -------------- | ---------------------------------- |
| Java heap      | 60-75% of container memory         |
| Metaspace      | 50-256 MB                          |
| Thread stacks  | 1 MB per thread (default `-Xss1m`) |
| Code cache     | 128-256 MB                         |
| Direct buffers | Application-dependent              |
| GC overhead    | 10-20% of heap                     |

## GC Troubleshooting Workflow

### Step 1: Enable GC Logging

```bash
-Xlog:gc*=info:file=gc.log:time,uptime,level,tags:filecount=5,filesize=100M
```

### Step 2: Identify the Symptom

- **Long pauses** — check pause time distribution. Is it minor GC or full GC?
- **Low throughput** — check GC time ratio. If GC takes more than 5-10% of CPU time, investigate.
- **Heap exhaustion** — check old generation growth. Is it linear (memory leak) or stable?
- **Allocation failure** — check allocation rate. If the young generation fills too fast, increase
  its size.

### Step 3: Analyze and Fix

```bash
# Parse GC logs with JDK tools
jcmd <pid> GC.heap_info
jcmd <pid> GC.run           # suggest GC (diagnostic, not System.gc())
jstat -gc <pid> 1000 10     # GC stats every 1 second, 10 times
jstat -gccause <pid> 1000   # include GC cause
jmap -histo <pid> | head -20  # top 20 objects by size
```

### Step 4: Verify

After making changes, compare GC logs before and after. Look for:

- Reduced pause times (P50, P99).
- Higher throughput (lower GC time ratio).
- Reduced promotion rate (fewer objects surviving to old generation).
- No increase in full GC frequency.

:::info
JDK Mission Control (JMC) and Java Flight Recorder (JFR) provide the most comprehensive GC
analysis. JFR has near-zero overhead and can be enabled in production:
`-XX:StartFlightRecording=duration=60s,filename=recording.jfr`
:::

## GC Internals: Detailed Algorithms

### Mark-Sweep-Compact (Serial and Parallel)

The classic GC algorithm used by Serial and Parallel collectors:

1. **Mark phase** — Starting from GC roots, traverse the object graph and mark all reachable
   objects. This requires a STW pause. The Parallel collector uses multiple threads for marking.

2. **Sweep phase** — Scan the heap linearly. Unmarked objects are garbage. Their memory is added to
   free lists. Live objects are not moved.

3. **Compact phase** — Move all live objects to the beginning of the heap, eliminating
   fragmentation. Update all references to moved objects. This requires another STW pause.

**Time complexity:** O(heap size) for mark, O(heap size) for sweep, O(live objects) for compact. The
entire heap is scanned, so pause times scale linearly with heap size. This is why Serial and
Parallel GC are unsuitable for large heaps.

### G1 Region-Based Collection

G1 divides the heap into fixed-size regions (1-32 MB). Each region can be Eden, Survivor, Old,
Humongous, or Empty. The key insight: instead of collecting the entire heap, collect only the
regions with the most garbage.

**G1 concurrent marking cycle:**

1. **Initial mark** — STW pause. Marks GC roots and marks the regions they point to as "dirty."
   Piggybacks on a young GC pause (minimal additional cost).

2. **Root region scanning** — Concurrent. Scans the dirty regions from the initial mark to find
   references to old generation regions.

3. **Concurrent marking** — Concurrent. Traces the object graph from roots to mark all live objects.
   Uses a SATB (Snapshot-At-The-Beginning) write barrier to handle mutations during marking.

4. **Remark** — STW pause. Processes any remaining SATB buffers and completes marking. Reclaims
   completely empty regions.

5. **Cleanup** — Optional concurrent phase. Resets region state and reclaims empty regions. May
   trigger mixed collections.

**Mixed collections:** After a marking cycle, G1 selects old regions with the most reclaimable space
(along with all young regions) and collects them. The number of mixed collections per cycle is
controlled by `-XX:G1MixedGCCountTarget` (default 8).

### ZGC Colored Pointers and Load Barriers

ZGC's design is fundamentally different from G1 and Parallel:

**Colored pointers:** On 64-bit platforms, ZGC uses the high bits of each reference (which are
normally unused because no system has 2^48 bytes of addressable memory) to store metadata bits:

| Bits  | Usage                                              |
| ----- | -------------------------------------------------- |
| 0-41  | Object address (4 TB addressable)                  |
| 42-43 | Metadata (Finalizable, Remapped, Marked1, Marked0) |
| 44-62 | Unused (reserved for future use)                   |
| 63    | Unused                                             |

The metadata bits encode the state of the object: whether it has been marked, relocated, or
finalized. No per-object header space is needed for GC metadata.

**Load barriers:** Every reference read from the heap triggers a load barrier. The load barrier
checks the metadata bits of the loaded reference:

- If the reference points to a relocated object, the barrier fixes it to point to the new location.
- If the reference points to a not-yet-marked object, the barrier marks it (or adds it to a marking
  queue).

This is how ZGC achieves concurrent relocation — the GC can move objects while the application is
running, and the load barriers transparently fix any stale references the application encounters.

**Phases:**

1. **Pause mark start** — STW (sub-ms). Mark GC roots.
2. **Concurrent mark** — Concurrent. Trace the object graph using load barriers.
3. **Pause mark end** — STW (sub-ms). Process remaining marking work.
4. **Concurrent relocate prepare** — Concurrent. Identify regions to evacuate.
5. **Pause relocate start** — STW (sub-ms). Select relocation set.
6. **Concurrent relocate** — Concurrent. Move live objects to new regions. Load barriers fix stale
   references.

### Generational ZGC (JDK 21+)

Generational ZGC separates the heap into young and old generations, like G1. Most objects are
allocated in the young generation and collected frequently (young-only collections). Objects that
survive multiple young collections are promoted to the old generation. This reduces the amount of
data the GC must scan during old generation collections.

```bash
-XX:+UseZGC -XX:+ZGenerational
```

Generational ZGC is the default ZGC mode in JDK 21+. It typically uses 4-8x less memory for GC
metadata compared to non-generational ZGC and achieves higher throughput for most workloads.

## Practical GC Tuning Examples

### Low-Latency Web Service

```bash
# Target: P99 pause under 50ms
java -XX:+UseZGC \
     -XX:SoftMaxHeapSize=4g \
     -Xmx8g \
     -XX:+ZGenerational \
     -Xlog:gc*:file=gc.log:time,uptime,level,tags:filecount=5,filesize=100M \
     -jar web-service.jar
```

### High-Throughput Batch Processing

```bash
# Target: Maximum throughput, pauses acceptable up to 2s
java -XX:+UseParallelGC \
     -XX:ParallelGCThreads=8 \
     -Xms16g -Xmx16g \
     -XX:+UseParallelOldGC \
     -Xlog:gc*:file=gc.log:time,uptime,level,tags:filecount=5,filesize=100M \
     -jar batch-processor.jar
```

### Balanced General-Purpose Service

```bash
# Target: P99 pause under 200ms, good throughput
java -XX:+UseG1GC \
     -XX:MaxGCPauseMillis=200 \
     -Xms4g -Xmx4g \
     -XX:G1HeapRegionSize=8m \
     -XX:InitiatingHeapOccupancyPercent=45 \
     -XX:+StringDeduplication \
     -Xlog:gc*:file=gc.log:time,uptime,level,tags:filecount=5,filesize=100M \
     -jar app.jar
```

### Containerized Microservice

```bash
# Target: Auto-size to container limits, low latency
java -XX:+UseZGC \
     -XX:MaxRAMPercentage=75.0 \
     -XX:ZAllocationSpikeTolerance=5 \
     -Xlog:gc*:file=/var/log/app/gc.log:time,uptime,level,tags:filecount=5,filesize=50M \
     -jar microservice.jar
```

