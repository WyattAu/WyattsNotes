---
id: concurrency-primitives
title: Concurrency Primitives
description:
  Python concurrency — threading, multiprocessing, queues, synchronization, and concurrent.futures.
slug: concurrency-primitives
---

## threading Module

The `threading` module provides low-level thread primitives. Python threads are OS-level threads
managed by the platform's native threading implementation (pthreads on Linux, Windows threads on
Windows).

### Creating Threads

```python
import threading
import time

def worker(thread_id, duration):
    print(f"Thread {thread_id} starting")
    time.sleep(duration)
    print(f"Thread {thread_id} finished after {duration}s")

threads = []
for i in range(5):
    t = threading.Thread(target=worker, args=(i, i + 1))
    threads.append(t)
    t.start()

for t in threads:
    t.join()  # Wait for all threads to complete

print("All threads finished")
```

### Thread Subclassing

```python
import threading

class WorkerThread(threading.Thread):
    def __init__(self, name, task_data):
        super().__init__(name=name)
        self.task_data = task_data
        self.result = None

    def run(self):
        print(f"{self.name} processing {self.task_data}")
        self.result = f"processed_{self.task_data}"

t = WorkerThread("worker-1", "task-a")
t.start()
t.join()
print(t.result)  # processed_task-a
```

### Daemon Threads

```python
import threading
import time

def daemon_worker():
    while True:
        print("Daemon running")
        time.sleep(1)

def regular_worker():
    time.sleep(3)
    print("Regular worker done")

d = threading.Thread(target=daemon_worker, daemon=True)
r = threading.Thread(target=regular_worker)

d.start()
r.start()

# When the main thread exits, daemon threads are killed immediately
# Regular threads keep the process alive
r.join()  # Wait for regular thread
# Program exits here — daemon thread is terminated
```

:::warning Daemon threads are abruptly terminated when the main thread exits. They may not release
locks, close files, or flush buffers. Use them only for non-critical background tasks.
:::

## Lock and RLock

### Lock (Mutex)

```python
import threading

counter = 0
lock = threading.Lock()

def increment(n):
    global counter
    for _ in range(n):
        with lock:
            counter += 1

threads = [
    threading.Thread(target=increment, args=(100000,)),
    threading.Thread(target=increment, args=(100000,)),
]

for t in threads:
    t.start()
for t in threads:
    t.join()

print(f"Counter: {counter}")  # Counter: 200000
```

Without the lock, `counter += 1` is not atomic — it involves reading, incrementing, and writing,
which can be interleaved between threads.

### RLock (Reentrant Lock)

```python
import threading

lock = threading.RLock()

def outer():
    with lock:
        print("outer acquired")
        inner()

def inner():
    with lock:
        print("inner acquired — same thread, reentrant")

outer()  # Works fine — RLock allows same thread to re-acquire
```

| Feature               | `Lock`         | `RLock`                  |
| --------------------- | -------------- | ------------------------ |
| Reentrant             | No (deadlocks) | Yes                      |
| Release by any thread | Yes            | No (must be same thread) |
| `acquire()` counting  | No             | Yes                      |
| Overhead              | Lower          | Slightly higher          |

:::warning With `Lock`, if the same thread tries to acquire it twice, it deadlocks. With `RLock`,
the thread must call `release()` the same number of times it called `acquire()`.
:::

## Semaphore, Event, Condition, Barrier

### Semaphore

```python
import threading
import time

semaphore = threading.Semaphore(3)  # Allow 3 concurrent accesses

def access_resource(thread_id):
    print(f"Thread {thread_id} waiting...")
    with semaphore:
        print(f"Thread {thread_id} acquired, working...")
        time.sleep(2)
    print(f"Thread {thread_id} released")

threads = [threading.Thread(target=access_resource, args=(i,)) for i in range(6)]
for t in threads:
    t.start()
for t in threads:
    t.join()
```

### Event

```python
import threading

event = threading.Event()

def waiter(name):
    print(f"{name} waiting for signal")
    event.wait()
    print(f"{name} received signal, proceeding")

def setter():
    time.sleep(2)
    print("Setting event")
    event.set()

w1 = threading.Thread(target=waiter, args=("W1",))
w2 = threading.Thread(target=waiter, args=("W2",))
s = threading.Thread(target=setter)

w1.start()
w2.start()
s.start()

w1.join()
w2.join()
s.join()
```

### Condition

```python
import threading
import time
import random

buffer = []
buffer_lock = threading.Condition()
MAX_SIZE = 5

def producer():
    for i in range(10):
        with buffer_lock:
            while len(buffer) >= MAX_SIZE:
                buffer_lock.wait()
            item = f"item_{i}"
            buffer.append(item)
            print(f"Produced: {item}, buffer size: {len(buffer)}")
            buffer_lock.notify()
        time.sleep(random.random() * 0.1)

def consumer():
    for _ in range(10):
        with buffer_lock:
            while len(buffer) == 0:
                buffer_lock.wait()
            item = buffer.pop(0)
            print(f"Consumed: {item}, buffer size: {len(buffer)}")
            buffer_lock.notify()
        time.sleep(random.random() * 0.1)

p = threading.Thread(target=producer)
c = threading.Thread(target=consumer)
p.start()
c.start()
p.join()
c.join()
```

### Barrier

```python
import threading

barrier = threading.Barrier(3)

def phase(thread_id):
    print(f"Thread {thread_id} in phase 1")
    barrier.wait()
    print(f"Thread {thread_id} in phase 2")
    barrier.wait()
    print(f"Thread {thread_id} done")

threads = [threading.Thread(target=phase, args=(i,)) for i in range(3)]
for t in threads:
    t.start()
for t in threads:
    t.join()
```

## multiprocessing

The `multiprocessing` module creates separate OS processes, each with its own Python interpreter and
GIL. This is the primary way to achieve true parallelism for CPU-bound work in Python.

### Basic Usage

```python
import multiprocessing

def square(x):
    return x * x

if __name__ == "__main__":
    with multiprocessing.Pool(4) as pool:
        results = pool.map(square, range(10))
    print(results)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

:::warning On Linux/macOS, `multiprocessing` uses `fork()` by default, which copies the entire
parent process memory (copy-on-write). On Windows, it uses `spawn()`, which re-imports the module.
Always protect entry points with `if __name__ == "__main__"` to avoid infinite recursion on Windows.
:::

### Process

```python
import multiprocessing
import time

def compute(n):
    total = 0
    for i in range(n):
        total += i ** 2
    return total

if __name__ == "__main__":
    start = time.time()
    processes = []
    for i in range(4):
        p = multiprocessing.Process(target=compute, args=(10_000_000,))
        processes.append(p)
        p.start()
    for p in processes:
        p.join()
    elapsed = time.time() - start
    print(f"4 processes: {elapsed:.2f}s")
```

### Shared Memory

```python
import multiprocessing

def increment(counter, lock):
    for _ in range(100000):
        with lock:
            counter.value += 1

if __name__ == "__main__":
    counter = multiprocessing.Value("i", 0)  # Signed integer
    lock = multiprocessing.Lock()

    processes = [
        multiprocessing.Process(target=increment, args=(counter, lock))
        for _ in range(4)
    ]

    for p in processes:
        p.start()
    for p in processes:
        p.join()

    print(f"Counter: {counter.value}")  # Counter: 400000
```

### Shared Array

```python
import multiprocessing

def fill_array(arr, start, end):
    for i in range(start, end):
        arr[i] = i * i

if __name__ == "__main__":
    arr = multiprocessing.Array("d", 100)  # Array of doubles
    size = len(arr)
    chunk = size // 4

    processes = [
        multiprocessing.Process(target=fill_array, args=(arr, i * chunk, (i + 1) * chunk))
        for i in range(4)
    ]

    for p in processes:
        p.start()
    for p in processes:
        p.join()

    print(list(arr[:10]))  # [0.0, 1.0, 4.0, 9.0, 16.0, 25.0, 36.0, 49.0, 64.0, 81.0]
```

### Pipe

```python
import multiprocessing

def sender(conn):
    conn.send(["hello", "from", "sender"])
    conn.close()

def receiver(conn):
    data = conn.recv()
    print(f"Received: {data}")
    conn.close()

if __name__ == "__main__":
    parent_conn, child_conn = multiprocessing.Pipe()
    p1 = multiprocessing.Process(target=sender, args=(child_conn,))
    p2 = multiprocessing.Process(target=receiver, args=(parent_conn,))

    p1.start()
    p2.start()
    p1.join()
    p2.join()
```

:::info `multiprocessing.Pipe()` creates a pair of connection objects. It supports duplex
communication by default. For one-way communication, use `duplex=False`.
:::

## concurrent.futures

`concurrent.futures` provides a high-level interface for asynchronously executing callables using
threads or processes.

### ThreadPoolExecutor

```python
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def fetch_url(url):
    time.sleep(1)  # Simulate network latency
    return f"fetched {url}"

urls = [f"http://example.com/page/{i}" for i in range(10)]

with ThreadPoolExecutor(max_workers=5) as executor:
    futures = {executor.submit(fetch_url, url): url for url in urls}
    for future in as_completed(futures):
        url = futures[future]
        try:
            result = future.result()
            print(result)
        except Exception as e:
            print(f"Error fetching {url}: {e}")
```

### ProcessPoolExecutor

```python
from concurrent.futures import ProcessPoolExecutor
import time

def cpu_bound(n):
    total = 0
    for i in range(n):
        total += i ** 3
    return total

start = time.time()
with ProcessPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(cpu_bound, [10_000_000] * 8))
elapsed = time.time() - start
print(f"Elapsed: {elapsed:.2f}s, results: {results[:2]}...")
```

### submit vs map

```python
from concurrent.futures import ThreadPoolExecutor

def process(item):
    return item * 2

# map — simple, ordered, blocks until all complete
with ThreadPoolExecutor(max_workers=3) as executor:
    results = list(executor.map(process, range(5)))
    print(results)  # [0, 2, 4, 6, 8]

# submit — more control, unordered results
with ThreadPoolExecutor(max_workers=3) as executor:
    futures = [executor.submit(process, i) for i in range(5)]
    for future in futures:
        print(future.result())  # May be out of order
```

### Exception Handling

```python
from concurrent.futures import ThreadPoolExecutor

def may_fail(x):
    if x == 3:
        raise ValueError(f"Cannot process {x}")
    return x * 2

with ThreadPoolExecutor(max_workers=3) as executor:
    futures = [executor.submit(may_fail, i) for i in range(5)]
    for future in futures:
        try:
            print(future.result())
        except ValueError as e:
            print(f"Failed: {e}")
# 0, 2, Failed: Cannot process 3, 6, 8
```

## queue Module

The `queue` module provides thread-safe FIFO, LIFO, and priority queues.

### Queue (FIFO)

```python
import queue
import threading

q = queue.Queue(maxsize=10)

def producer():
    for i in range(20):
        q.put(f"item_{i}")
        print(f"Produced item_{i}")

def consumer():
    while True:
        item = q.get()
        print(f"Consumed {item}")
        q.task_done()

p = threading.Thread(target=producer)
c = threading.Thread(target=consumer, daemon=True)

p.start()
c.start()
p.join()
q.join()  # Block until all items are processed
```

### LifoQueue

```python
import queue

lq = queue.LifoQueue()
lq.put(1)
lq.put(2)
lq.put(3)
print(lq.get())  # 3 — last in, first out
print(lq.get())  # 2
```

### PriorityQueue

```python
import queue

pq = queue.PriorityQueue()
pq.put((2, "medium priority"))
pq.put((1, "high priority"))
pq.put((3, "low priority"))

print(pq.get())  # (1, 'high priority')
print(pq.get())  # (2, 'medium priority')
print(pq.get())  # (3, 'low priority')
```

:::info `PriorityQueue` orders items by the first element of the tuple. If the first elements are
equal, it compares the second, and so on. If items are not comparable, it raises `TypeError`.
:::

## GIL Impact Analysis

The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing
multiple native threads from executing Python bytecodes simultaneously.

### CPU-Bound vs I/O-Bound

| Workload  | Threading                         | Multiprocessing                   |
| --------- | --------------------------------- | --------------------------------- |
| CPU-bound | No speedup (GIL bottleneck)       | Linear speedup (up to core count) |
| I/O-bound | Speedup (GIL released during I/O) | Overkill (higher overhead)        |

```python
import threading
import multiprocessing
import time

def cpu_task(n):
    total = 0
    for i in range(n):
        total += i ** 2
    return total

def io_task():
    import urllib.request
    urllib.request.urlopen("http://httpbin.org/delay/0.1")
    return "done"

# CPU-bound: threading gives NO speedup
# Multiprocessing gives near-linear speedup

# I/O-bound: threading gives speedup with lower overhead
# Multiprocessing also works but has higher memory/process overhead
```

### When GIL Is Released

The GIL is released during:

- I/O operations (file read/write, network requests)
- `time.sleep()`
- C extensions that explicitly release the GIL (NumPy, database drivers)
- `concurrent.futures` operations

The GIL is held during:

- Pure Python computation
- Reference counting operations
- Attribute access on Python objects

## asyncio vs Threading vs Multiprocessing

### Decision Framework

```
Is the workload I/O-bound?
├── Yes
│   ├── Is simplicity important?
│   │   ├── Yes → asyncio (single-threaded, no race conditions)
│   │   └── No → threading (familiar model, blocking APIs)
│   └── Do you need to integrate with blocking libraries?
│       ├── Yes → threading (or run in executor)
│       └── No → asyncio
└── No (CPU-bound)
    ├── Need true parallelism?
    │   ├── Yes → multiprocessing
    │   └── No → asyncio (with run_in_executor for heavy work)
    └── Shared memory required?
        ├── Yes → multiprocessing with shared state
        └── No → multiprocessing
```

### Benchmark Template

```python
import time
import threading
import multiprocessing
import asyncio

def measure(label, func):
    start = time.time()
    func()
    elapsed = time.time() - start
    print(f"{label}: {elapsed:.3f}s")

# CPU-bound benchmark
def cpu_work():
    total = 0
    for i in range(5_000_000):
        total += i ** 2
    return total

def sequential_cpu():
    for _ in range(4):
        cpu_work()

def threaded_cpu():
    threads = [threading.Thread(target=cpu_work) for _ in range(4)]
    for t in threads: t.start()
    for t in threads: t.join()

def multiprocess_cpu():
    with multiprocessing.Pool(4) as pool:
        pool.map(cpu_work, range(4))

measure("sequential CPU", sequential_cpu)
measure("threaded CPU", threaded_cpu)
measure("multiprocess CPU", multiprocess_cpu)
```

## Practical Patterns

### Worker Pool

```python
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def process_task(task_id):
    time.sleep(0.5)
    return f"result_{task_id}"

tasks = range(20)

with ThreadPoolExecutor(max_workers=4) as executor:
    future_to_id = {executor.submit(process_task, tid): tid for tid in tasks}
    for future in as_completed(future_to_id):
        tid = future_to_id[future]
        result = future.result()
        print(f"Task {tid}: {result}")
```

### Producer-Consumer with Queue

```python
import threading
import queue
import time
import random

work_queue = queue.Queue(maxsize=100)
results = []
results_lock = threading.Lock()

def producer():
    for i in range(50):
        work_queue.put(i)
        time.sleep(random.random() * 0.01)

def consumer(worker_id):
    while True:
        try:
            item = work_queue.get(timeout=1)
            time.sleep(random.random() * 0.05)
            with results_lock:
                results.append((worker_id, item))
            work_queue.task_done()
        except queue.Empty:
            break

producers = [threading.Thread(target=producer) for _ in range(2)]
consumers = [threading.Thread(target=consumer, args=(i,)) for i in range(5)]

for p in producers: p.start()
time.sleep(0.1)
for c in consumers: c.start()

for p in producers: p.join()
work_queue.join()
for c in consumers: c.join()

print(f"Processed {len(results)} items")
```

### Fan-Out / Fan-In

```python
from concurrent.futures import ProcessPoolExecutor, as_completed

def fetch_metrics(server):
    # Simulate fetching metrics from a server
    import time
    time.sleep(0.5)
    return {server: {"cpu": 50, "memory": 70}}

servers = [f"server-{i}.example.com" for i in range(10)]

# Fan-out: submit all tasks
with ProcessPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(fetch_metrics, s): s for s in servers}

    # Fan-in: collect all results
    all_metrics = {}
    for future in as_completed(futures):
        result = future.result()
        all_metrics.update(result)

print(f"Collected metrics from {len(all_metrics)} servers")
```

## Common Pitfalls

### 1. Deadlock with Locks

```python
import threading

lock_a = threading.Lock()
lock_b = threading.Lock()

def task1():
    with lock_a:
        time.sleep(0.1)
        with lock_b:  # Deadlock if task2 holds lock_b
            print("task1 done")

def task2():
    with lock_b:
        time.sleep(0.1)
        with lock_a:  # Deadlock if task1 holds lock_a
            print("task2 done")

# Fix: always acquire locks in the same order
def task1_fixed():
    with lock_a:
        time.sleep(0.1)
        with lock_b:
            print("task1 done")

def task2_fixed():
    with lock_a:  # Same order as task1
        time.sleep(0.1)
        with lock_b:
            print("task2 done")
```

### 2. Forgetting to Join

```python
import threading
import time

def worker():
    time.sleep(2)

# Without join, main thread exits before worker finishes
t = threading.Thread(target=worker)
t.start()
# t.join()  # Must call join to wait
```

### 3. Shared Mutable State Without Locking

```python
import threading

counter = 0  # Shared mutable state — no lock!

def increment():
    global counter
    for _ in range(100000):
        counter += 1  # NOT atomic!

threads = [threading.Thread(target=increment) for _ in range(4)]
for t in threads: t.start()
for t in threads: t.join()

print(f"Counter: {counter}")  # NOT 400000 — likely less due to races
```

### 4. Multiprocessing with Lambdas

```python
from concurrent.futures import ProcessPoolExecutor

# This fails — lambdas are not picklable by default
# executor = ProcessPoolExecutor()
# executor.submit(lambda x: x * 2, 5)  # PicklingError

# Fix: use named functions or functools.partial
def double(x):
    return x * 2

with ProcessPoolExecutor() as executor:
    result = executor.submit(double, 5).result()
    print(result)  # 10
```

### 5. Queue.get() Without Timeout

```python
import queue
import threading

q = queue.Queue()

def consumer():
    # This blocks forever if no more items arrive
    item = q.get()  # Blocks indefinitely

# Fix: use timeout or sentinel value
def consumer_fixed():
    try:
        item = q.get(timeout=5)
    except queue.Empty:
        print("No items available")

# Or use a sentinel:
STOP_SENTINEL = object()

def consumer_sentinel():
    while True:
        item = q.get()
        if item is STOP_SENTINEL:
            break
        print(f"Processing {item}")
```

### 6. ThreadPoolExecutor for CPU-Bound Work

```python
from concurrent.futures import ThreadPoolExecutor
import time

def heavy_computation(n):
    total = 0
    for i in range(n):
        total += i ** 2
    return total

# Wrong: ThreadPoolExecutor for CPU-bound work — GIL prevents parallelism
with ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(heavy_computation, [10_000_000] * 8))

# Correct: ProcessPoolExecutor for CPU-bound work
with ProcessPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(heavy_computation, [10_000_000] * 8))
```

### 7. Thread Safety of print()

```python
import threading

# print() is NOT atomic — output from multiple threads may interleave
def noisy_worker(thread_id):
    for _ in range(100):
        print(f"[{thread_id}] message")

threads = [threading.Thread(target=noisy_worker, args=(i,)) for i in range(5)]
for t in threads: t.start()
for t in threads: t.join()
# Output may have garbled lines like: [1] mes[2] message
```

Use a `threading.Lock()` around `print()` calls or use the `logging` module which is thread-safe.
