---
id: concurrency-deep-dive
title: Concurrency Deep Dive
description:
  Java concurrency — locks, conditions, atomic operations, ForkJoin, and concurrent collections.
slug: concurrency-deep-dive
---

## Lock Interfaces

### `ReentrantLock`

`java.util.concurrent.locks.ReentrantLock` provides mutual exclusion with features beyond
`synchronized`: fair/unfair ordering, timed lock acquisition, interruptible lock acquisition, and
multiple condition variables per lock.

```java
import java.util.concurrent.locks.ReentrantLock;

public class Counter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }

    public int getCount() {
        lock.lock();
        try {
            return count;
        } finally {
            lock.unlock();
        }
    }
}
```

**Fair vs Non-fair locking:**

- **Non-fair (default):** Threads can barge — a newly arriving thread may acquire the lock before a
  waiting thread. Higher throughput because threads do not need to be woken up and immediately put
  back to sleep.
- **Fair:** Threads acquire the lock in the order they requested it. Lower throughput due to
  context-switch overhead, but avoids starvation.

```java
ReentrantLock fairLock = new ReentrantLock(true);  // fair
ReentrantLock unfairLock = new ReentrantLock(false); // non-fair (default)
```

**Reentrancy:** A thread that holds the lock can acquire it again without deadlocking. The lock
keeps a hold count; `unlock` decrements the count, and the lock is released only when the count
reaches zero.

```java
ReentrantLock lock = new ReentrantLock();
lock.lock();    // hold count = 1
lock.lock();    // hold count = 2 (same thread)
lock.unlock();  // hold count = 1
lock.unlock();  // hold count = 0, lock released
```

**Timed and interruptible lock acquisition:**

```java
ReentrantLock lock = new ReentrantLock();

try {
    if (lock.tryLock(5, TimeUnit.SECONDS)) {
        try {
            // critical section
        } finally {
            lock.unlock();
        }
    } else {
        // failed to acquire lock within timeout
    }
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}
```

### `ReentrantReadWriteLock`

A read-write lock allows multiple concurrent readers but only one exclusive writer. When a writer
holds the lock, no readers or other writers can acquire it. This is useful for read-mostly data
structures (caches, configuration).

```java
public class ThreadSafeCache<K, V> {
    private final Map<K, V> cache = new HashMap<>();
    private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final Lock readLock = rwLock.readLock();
    private final Lock writeLock = rwLock.writeLock();

    public V get(K key) {
        readLock.lock();
        try {
            return cache.get(key);
        } finally {
            readLock.unlock();
        }
    }

    public void put(K key, V value) {
        writeLock.lock();
        try {
            cache.put(key, value);
        } finally {
            writeLock.unlock();
        }
    }

    public V computeIfAbsent(K key, Function<K, V> loader) {
        V value = get(key);
        if (value != null) return value;

        writeLock.lock();
        try {
            // Double-check after acquiring write lock
            value = cache.get(key);
            if (value == null) {
                value = loader.apply(key);
                cache.put(key, value);
            }
            return value;
        } finally {
            writeLock.unlock();
        }
    }
}
```

**Downgrade from write to read:** A thread holding the write lock can acquire the read lock without
releasing the write lock first. Then it can release the write lock, effectively downgrading.
**Upgrade from read to write is NOT supported** — attempting to acquire the write lock while holding
the read lock causes deadlock.

### `StampedLock`

Introduced in JDK 8, `StampedLock` provides optimistic reads that do not block writers. It is
designed for read-mostly scenarios where `ReentrantReadWriteLock` is too coarse.

```java
public class Point {
    private double x, y;
    private final StampedLock sl = new StampedLock();

    // Write — exclusive
    void move(double deltaX, double deltaY) {
        long stamp = sl.writeLock();
        try {
            x += deltaX;
            y += deltaY;
        } finally {
            sl.unlockWrite(stamp);
        }
    }

    // Optimistic read — NO blocking of writers
    double distanceFromOrigin() {
        long stamp = sl.tryOptimisticRead();
        double currentX = x, currentY = y;
        if (!sl.validate(stamp)) {
            // A write occurred — fall back to read lock
            stamp = sl.readLock();
            try {
                currentX = x;
                currentY = y;
            } finally {
                sl.unlockRead(stamp);
            }
        }
        return Math.sqrt(currentX * currentX + currentY * currentY);
    }

    // Read — blocking
    double[] getPosition() {
        long stamp = sl.readLock();
        try {
            return new double[]{x, y};
        } finally {
            sl.unlockRead(stamp);
        }
    }
}
```

`StampedLock` is not reentrant. Each call to `writeLock`, `readLock`, or `tryOptimisticRead` returns
a `long` stamp that must be used to unlock. This is a deliberate design choice — the lack of
reentrancy prevents certain deadlock patterns and allows the optimistic read mechanism.

:::warning
`StampedLock` does not implement the `Lock` or `ReadWriteLock` interface. It cannot be
used with `Condition` or in `synchronized`-style patterns. Convert to a `ReadWriteLock` view via
`asReadLock()` / `asWriteLock()` if needed.
:::

## Condition

`Condition` (from `java.util.concurrent.locks`) provides `await`/`signal` semantics similar to
`Object.wait`/`Object.notify` but with more features: multiple conditions per lock, interruptible
waits, timed waits, and fairness.

### Bounded Buffer Pattern

```java
public class BoundedBuffer<T> {
    private final Queue<T> queue = new LinkedList<>();
    private final int capacity;
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition notFull = lock.newCondition();
    private final Condition notEmpty = lock.newCondition();

    public BoundedBuffer(int capacity) {
        this.capacity = capacity;
    }

    public void put(T item) throws InterruptedException {
        lock.lock();
        try {
            while (queue.size() == capacity) {
                notFull.await(); // releases lock, waits for signal
            }
            queue.add(item);
            notEmpty.signal(); // wake one waiting consumer
        } finally {
            lock.unlock();
        }
    }

    public T take() throws InterruptedException {
        lock.lock();
        try {
            while (queue.isEmpty()) {
                notEmpty.await();
            }
            T item = queue.poll();
            notFull.signal(); // wake one waiting producer
            return item;
        } finally {
            lock.unlock();
        }
    }
}
```

:::info
Always use `while` (not `if`) with `await`. Spurious wakeups are possible — the thread may
wake without a `signal`. The loop re-checks the condition. This is mandated by the Javadoc for
`Object.wait` and `Condition.await`.
:::

### Fair vs Non-fair Conditions

The fairness of `Condition` follows the fairness of its associated `ReentrantLock`. A fair lock's
condition queues are FIFO; a non-fair lock's condition queues may allow barging.

## Atomic Operations

### `AtomicInteger`, `AtomicLong`, `AtomicReference`

The atomic classes use CPU-level compare-and-swap (CAS) instructions to provide lock-free,
thread-safe operations on single variables.

```java
AtomicInteger counter = new AtomicInteger(0);

counter.incrementAndGet();      // atomically increment, return new value
counter.getAndIncrement();      // atomically increment, return old value
counter.addAndGet(5);           // atomically add 5, return new value
counter.compareAndSet(10, 20);  // if current == 10, set to 20; return true/false

// Lock-free max
AtomicInteger max = new AtomicInteger(0);
int current;
do {
    current = max.get();
} while (!max.compareAndSet(current, Math.max(current, newValue)));
```

### `getAndUpdate` and `accumulateAndGet`

```java
AtomicInteger counter = new AtomicInteger(0);

// getAndUpdate — applies function, returns previous value
int prev = counter.getAndUpdate(n -&gt; n * 2);

// updateAndGet — applies function, returns new value
int next = counter.updateAndGet(n -&gt; n + 1);

// accumulateAndGet — int-specific, avoids boxing
int sum = counter.accumulateAndGet(5, Integer::sum);
// Equivalent to: counter = counter + 5

// getAndAccumulate
int old = counter.getAndAccumulate(5, Integer::sum);
```

### `AtomicStampedReference`

`AtomicReference` cannot detect the ABA problem: a thread reads value A, another thread changes it
to B then back to A, and the first thread's CAS succeeds despite the value having been changed in
between. `AtomicStampedReference` adds a version stamp to detect this.

```java
AtomicStampedReference<String> ref = new AtomicStampedReference<>("initial", 0);

int[] stampHolder = new int[1];
String value = ref.get(stampHolder); // value = "initial", stampHolder[0] = 0
int stamp = stampHolder[0];

boolean success = ref.compareAndSet("initial", "updated", stamp, stamp + 1);
// CAS checks both value AND stamp
```

### `LongAdder` and `LongAccumulator`

For high-contention counters where `AtomicLong` becomes a bottleneck due to CAS contention,
`LongAdder` distributes increments across an array of cells and sums them on read. Write contention
is eliminated; read requires summing all cells.

```java
// AtomicLong — single variable, CAS contention under high contention
AtomicLong counter = new AtomicLong();

// LongAdder — distributed cells, better under high contention
LongAdder adder = new LongAdder();
adder.increment();
adder.add(5L);
long total = adder.sum();

// LongAccumulator — general-purpose with custom function
LongAccumulator max = new LongAccumulator(Long::max, Long.MIN_VALUE);
max.accumulate(42L);
max.accumulate(17L);
long result = max.get(); // 42
```

## The `volatile` Keyword

### Visibility Guarantees

A `volatile` field has two guarantees:

1. **Visibility:** A write to a `volatile` field is immediately visible to all other threads. The
   JIT and CPU cannot cache the value in a register or reorder reads/writes past the volatile
   access.
2. **Ordering:** Reads and writes of `volatile` fields establish happens-before relationships. No
   reads or writes of volatile variables can be reordered with respect to each other.

```java
public class VolatileFlag {
    private volatile boolean shutdownRequested = false;

    public void shutdown() {
        shutdownRequested = true; // visible to all threads immediately
    }

    public void doWork() {
        while (!shutdownRequested) {
            // Without volatile, the JIT might optimize this loop to:
            // if (!shutdownRequested) { while (true) { ... } }
            // because it can cache shutdownRequested in a register
        }
    }
}
```

### When to Use `volatile`

Use `volatile` for:

- **Flags and status indicators** — one thread writes, others read (shutdown flags, initialization
  flags).
- **One-shot publication** — writing a reference to a fully constructed object exactly once.
- **Read-heavy counters** where approximate accuracy is acceptable (use `AtomicInteger` instead if
  exactness is required).

Do NOT use `volatile` for:

- **Compound operations** like `count++` (read-modify-write is not atomic — use `AtomicInteger`).
- **Multi-variable invariants** where consistency between variables matters (use a lock).

```java
// BUG — volatile does not make count++ atomic
public class VolatileCounter {
    private volatile int count = 0; // NOT thread-safe for increment

    public void increment() {
        count++; // read, add, write — NOT atomic
    }
}

// FIX — use AtomicInteger
public class SafeCounter {
    private final AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet();
    }
}
```

## Concurrent Collections

### `ConcurrentHashMap`

The workhorse concurrent map. JDK 8+ uses a lock-free CAS-based approach for most operations, with
synchronized blocks only on individual buckets during resize.

```java
ConcurrentHashMap<String, Long> wordCounts = new ConcurrentHashMap<>();

// Atomic operations — no external synchronization needed
wordCounts.put("hello", 1L);
wordCounts.merge("hello", 1L, Long::sum); // atomically adds 1
Long count = wordCounts.getOrDefault("hello", 0L);

// Atomic compute — the mapping function runs atomically
wordCounts.computeIfAbsent("world", k -&gt; {
    // expensive computation — runs at most once per key
    return loadFromDatabase(k);
});

// forEach with parallelism
wordCounts.forEach(4, (key, value) -&gt; {
    System.out.println(key + ": " + value);
});

// search
String firstKey = wordCounts.search(4, (key, value) -&gt;
    value &gt; 1000 ? key : null);

// reduce
long total = wordCounts.reduceValuesToLong(4, Long::longValue, 0, Long::sum);
```

:::info
`ConcurrentHashMap` does not allow `null` keys or values. `HashMap` allows one `null` key
and `null` values. This is a deliberate design decision — `null` is ambiguous in concurrent contexts
(does `get(key)` returning `null` mean "key not found" or "value is null"?).
:::

### `ConcurrentLinkedQueue`

An unbounded, thread-safe, FIFO queue based on a linked list. Uses lock-free CAS for all operations.
`ConcurrentLinkedDeque` is the double-ended variant.

```java
ConcurrentLinkedQueue<Task> queue = new ConcurrentLinkedQueue<>();

queue.offer(new Task("process"));
queue.offer(new Task("analyze"));

Task task = queue.poll(); // null if empty
Task peek = queue.peek(); // null if empty
```

### `CopyOnWriteArrayList`

Every write operation (add, set, remove) creates a fresh copy of the underlying array. Reads proceed
without locking against the current array snapshot. This makes reads extremely fast and writes
expensive. Ideal for read-heavy workloads with infrequent writes (listener lists, configuration).

```java
CopyOnWriteArrayList<EventListener> listeners = new CopyOnWriteArrayList<>();

// Fast read — no synchronization
for (EventListener listener : listeners) {
    listener.onEvent(event); // safe even during concurrent modification
}

// Expensive write — copies entire array
listeners.add(newListener);
```

:::warning
`CopyOnWriteArrayList` does NOT support `Iterator.remove()` or `ListIterator.set()`. The
iterator operates on a snapshot and does not reflect modifications made during iteration.
:::

### Blocking Queues

Blocking queues are designed for producer-consumer patterns. `put` blocks when full, `take` blocks
when empty.

| Implementation          | Bounded        | Ordering                         | Notes                        |
| ----------------------- | -------------- | -------------------------------- | ---------------------------- |
| `ArrayBlockingQueue`    | Yes (fixed)    | FIFO                             | Backed by array              |
| `LinkedBlockingQueue`   | Optional       | FIFO                             | Backed by linked nodes       |
| `PriorityBlockingQueue` | No (unbounded) | Priority (natural or Comparator) | Never blocks on put          |
| `SynchronousQueue`      | Zero capacity  | None                             | Handoff — put waits for take |
| `DelayQueue`            | Unbounded      | By delay time                    | Elements implement `Delayed` |

```java
// Producer-consumer with LinkedBlockingQueue
BlockingQueue<Task> queue = new LinkedBlockingQueue<>(100);

// Producer
ExecutorService producers = Executors.newFixedThreadPool(4);
producers.submit(() -&gt; {
    while (!Thread.currentThread().isInterrupted()) {
        Task task = generateTask();
        queue.put(task); // blocks if queue is full
    }
});

// Consumer
ExecutorService consumers = Executors.newFixedThreadPool(4);
consumers.submit(() -&gt; {
    while (!Thread.currentThread().isInterrupted()) {
        Task task = queue.take(); // blocks if queue is empty
        process(task);
    }
});
```

**`SynchronousQueue`** has zero capacity — each `put` must wait for a matching `take` and vice
versa. It is used by `Executors.newCachedThreadPool()` to hand off tasks directly to worker threads
without buffering.

## ForkJoin Framework

The ForkJoin framework (JDK 7) is designed for divide-and-conquer algorithms that can be
parallelized by splitting work into smaller subtasks. It uses a work-stealing scheduler: idle
threads steal subtasks from busy threads' queues.

### `RecursiveTask` (returns a result)

```java
public class ParallelMergeSort extends RecursiveTask<long[]> {
    private final long[] array;
    private final int lo, hi;

    public ParallelMergeSort(long[] array, int lo, int hi) {
        this.array = array;
        this.lo = lo;
        this.hi = hi;
    }

    @Override
    protected long[] compute() {
        if (hi - lo &lt; 8192) {
            // Sequential threshold — sort small arrays sequentially
            Arrays.sort(array, lo, hi);
            return array;
        }

        int mid = (lo + hi) / 2;
        ParallelMergeSort left = new ParallelMergeSort(array, lo, mid);
        ParallelMergeSort right = new ParallelMergeSort(array, mid, hi);

        left.fork(); // async execution in the pool
        long[] rightResult = right.compute(); // execute in current thread
        long[] leftResult = left.join(); // wait for forked task

        return merge(leftResult, rightResult, lo, mid, hi);
    }

    private long[] merge(long[] left, long[] right, int lo, int mid, int hi) {
        long[] sorted = new long[hi - lo];
        int i = 0, j = mid - lo, k = 0;
        while (i &lt; mid - lo && j &lt; hi - lo) {
            sorted[k++] = left[i] &lt;= right[j] ? left[i++] : right[j++];
        }
        while (i &lt; mid - lo) sorted[k++] = left[i++];
        while (j &lt; hi - lo) sorted[k++] = right[j++];
        System.arraycopy(sorted, 0, array, lo, sorted.length);
        return array;
    }
}
```

### `RecursiveAction` (no result)

```java
public class ParallelArrayFill extends RecursiveAction {
    private final double[] array;
    private final int lo, hi;
    private final double value;

    public ParallelArrayFill(double[] array, int lo, int hi, double value) {
        this.array = array; this.lo = lo; this.hi = hi; this.value = value;
    }

    @Override
    protected void compute() {
        if (hi - lo &lt; 10000) {
            Arrays.fill(array, lo, hi, value);
        } else {
            int mid = (lo + hi) / 2;
            invokeAll(new ParallelArrayFill(array, lo, mid, value),
                      new ParallelArrayFill(array, mid, hi, value));
        }
    }
}
```

### `ForkJoinPool`

```java
ForkJoinPool pool = new ForkJoinPool(); // uses Runtime.availableProcessors() workers
ForkJoinPool customPool = new ForkJoinPool(16); // 16 worker threads

long[] data = new long[10_000_000];
// Fill with random data...

long[] sorted = pool.invoke(new ParallelMergeSort(data, 0, data.length));
```

**Choosing the sequential threshold:** Too low and the overhead of task creation dominates. Too high
and you lose parallelism. A good starting point is an array size that takes 10-100 microseconds to
process sequentially. Profile and adjust.

## `ThreadLocal`

`ThreadLocal<T>` provides thread-confined variables — each thread has its own independently
initialized copy. No synchronization is needed because threads never share the value.

```java
public class UserIdContext {
    private static final ThreadLocal<String> CURRENT_USER =
        ThreadLocal.withInitial(() -&gt; "anonymous");

    public static void set(String userId) {
        CURRENT_USER.set(userId);
    }

    public static String get() {
        return CURRENT_USER.get();
    }

    public static void clear() {
        CURRENT_USER.remove(); // CRITICAL — prevents memory leaks
    }
}
```

### Memory Leak Pitfalls

`ThreadLocal` values are stored in each thread's `ThreadLocalMap`. If a thread is long-lived (e.g.,
a web server worker thread in a thread pool), and you do not call `remove()`, the value will remain
in memory for the lifetime of the thread. This is the most common `ThreadLocal` leak.

```java
// DANGEROUS — in a servlet container with pooled threads
public void doGet(HttpServletRequest req, HttpServletResponse resp) {
    ThreadLocal&lt;Connection&gt; connectionHolder = ...; // instance variable
    connectionHolder.set(dataSource.getConnection());
    try {
        // process request
    } finally {
        // BUG — connection not closed, not removed from ThreadLocal
        // The Connection leaks because the thread is returned to the pool
    }
}

// SAFE — always clean up in finally
public void doGet(HttpServletRequest req, HttpServletResponse resp) {
    connectionHolder.set(dataSource.getConnection());
    try {
        processRequest();
    } finally {
        connectionHolder.get().close();
        connectionHolder.remove(); // prevent leak
    }
}
```

:::warning
In thread pools (web servers, `ExecutorService`), always call `ThreadLocal.remove()` in a
`finally` block. Threads are reused; stale values from a previous task will leak into the next task.
:::

## Deadlock

### Prevention with Lock Ordering

Deadlock occurs when thread A holds lock X and waits for lock Y, while thread B holds lock Y and
waits for lock X. The simplest prevention strategy is to always acquire locks in a global,
consistent order.

```java
// DEADLOCK-PRONE
void transfer(Account from, Account to, int amount) {
    synchronized (from) {      // lock A
        synchronized (to) {    // lock B — potential deadlock
            from.debit(amount);
            to.credit(amount);
        }
    }
}

// SAFE — consistent lock ordering
void safeTransfer(Account from, Account to, int amount) {
    Account first = from.getId() &lt; to.getId() ? from : to;
    Account second = from.getId() &lt; to.getId() ? to : from;
    synchronized (first) {
        synchronized (second) {
            from.debit(amount);
            to.credit(amount);
        }
    }
}
```

### Detection with `jconsole`

Run your application with `-Djdk.attach.allowAttachSelf=true` and attach `jconsole`. The "Threads"
tab shows deadlocked threads. Programmatically, use `ThreadMXBean`:

```java
ThreadMXBean mxBean = ManagementFactory.getThreadMXBean();
long[] deadlockedThreads = mxBean.findDeadlockedThreads();
if (deadlockedThreads != null) {
    ThreadInfo[] infos = mxBean.getThreadInfo(deadlockedThreads);
    for (ThreadInfo info : infos) {
        System.err.println("Deadlocked thread: " + info.getThreadName());
        System.err.println("  Waiting on: " + info.getLockName());
        for (StackTraceElement ste : info.getStackTrace()) {
            System.err.println("    at " + ste);
        }
    }
}
```

## Virtual Threads Integration

Project Loom (JDK 21) introduces virtual threads — lightweight threads managed by the JVM, not the
OS. Virtual threads make blocking operations cheap, reducing the need for complex asynchronous
programming.

```java
// Traditional platform threads — expensive, limited by OS
ExecutorService platformPool = Executors.newFixedThreadPool(200);

// Virtual threads — millions of concurrent tasks
ExecutorService virtualPool = Executors.newVirtualThreadPerTaskExecutor();

List&lt;Future&lt;String&gt;&gt; futures = new ArrayList&lt;&gt;();
for (int i = 0; i &lt; 10_000; i++) {
    futures.add(virtualPool.submit(() -&gt; {
        Thread.sleep(Duration.ofSeconds(1)); // blocks the virtual thread, NOT the carrier
        return "result-" + Thread.currentThread().threadId();
    }));
}
```

### Virtual Threads and `synchronized`

`virtualPool.close(); // waits for all tasks`

Virtual threads can use `synchronized`, but it pins the carrier thread (the underlying platform
thread) for the duration of the synchronized block. If many virtual threads are pinned
simultaneously, the carrier thread pool can be exhausted. Use `ReentrantLock` instead of
`synchronized` in code that will run on virtual threads.

```java
// PREFERRED for virtual threads
private final ReentrantLock lock = new ReentrantLock();

public void doWork() {
    lock.lock();
    try {
        // critical section
    } finally {
        lock.unlock();
    }
}

// Avoid — pins carrier thread
public synchronized void doWorkSync() {
    // critical section
}
```

## Common Pitfalls

### Forgetting `finally { lock.unlock(); }`

```java
// BUG — lock is never released if an exception occurs
public void process() {
    lock.lock();
    doRiskyOperation(); // if this throws, lock is never released
    lock.unlock();
}

// CORRECT
public void process() {
    lock.lock();
    try {
        doRiskyOperation();
    } finally {
        lock.unlock();
    }
}
```

### `ConcurrentModificationException` on Concurrent Collections

```java
// Even concurrent collections can throw CME during bulk operations
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
for (String key : map.keySet()) {
    // This is safe for ConcurrentHashMap — no CME
    map.remove(key); // ConcurrentHashMap's iterator is weakly consistent
}

// But iterating with Stream operations that modify the map can cause issues
map.forEach((key, value) -&gt; {
    map.put(key + "2", value); // may cause CME during iteration
});
```

### Using `synchronized` on `Long` or `Integer` Wrappers

```java
// BUG — synchronized on auto-boxed Integer
// Each boxing creates a NEW Integer object, so the lock is on different objects
private Integer counter = 0;

public void increment() {
    synchronized (counter) { // BUG — counter is re-boxed each time
        counter++;
    }
}

// FIX — use a dedicated lock object
private final Object lock = new Object();
private int counter = 0;

public void increment() {
    synchronized (lock) {
        counter++;
    }
}
```

### `AtomicReference` ABA Problem

```java
// BUG — ABA problem with AtomicReference
AtomicReference<Node> head = new AtomicReference<>(nodeA);
// Thread 1: reads head = nodeA, gets preempted
// Thread 2: sets head = nodeB
// Thread 3: sets head = nodeA (same reference, different state)
// Thread 1: CAS succeeds, but the list structure has changed!
head.compareAndSet(nodeA, newNode); // succeeds incorrectly

// FIX — use AtomicStampedReference
AtomicStampedReference<Node> stampedHead = new AtomicStampedReference<>(nodeA, 1);
```

### Thread Pool Starvation

```java
// DEADLOCK — all threads in the pool are waiting for tasks from the same pool
ExecutorService pool = Executors.newFixedThreadPool(10);
pool.submit(() -&gt; {
    Future&lt;String&gt; f = pool.submit(() -&gt; "result"); // waits for another thread
    return f.get(); // but all 10 threads may be doing this
});
```

:::warning
Never submit a task to a pool that waits for the result of another task submitted to the
same pool. If the pool is fully utilized, all threads will be blocked waiting, and no thread will be
available to execute the inner tasks. This is called thread pool deadlock or starvation.
:::

