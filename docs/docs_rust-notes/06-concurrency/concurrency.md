---
id: concurrency
title: Concurrency
description:
  Rust concurrency — threads, message passing, shared state, async/await, futures, and common
  concurrency patterns.
slug: concurrency
---

## OS Threads

Rust's `std::thread` module provides a 1:1 mapping to OS threads. Each thread gets its own stack
(default 8 MB on Linux, configurable) and is scheduled by the operating system.

### Spawning Threads

```rust
use std::thread;
use std::time::Duration;

let handle = thread::spawn(|| {
    for i in 1..=5 {
        println!("spawned thread: {}", i);
        thread::sleep(Duration::from_millis(1));
    }
});

for i in 1..=3 {
    println!("main thread: {}", i);
    thread::sleep(Duration::from_millis(1));
}

handle.join().unwrap();
```

### Moving Data into Threads

The closure passed to `thread::spawn` must own all captured values or borrow them for `'static`. The
`move` keyword transfers ownership into the thread's closure:

```rust
use std::thread;

let s = String::from("hello");
let handle = thread::spawn(move || {
    println!("{}", s);  // s is moved into this closure
});

handle.join().unwrap();
// s is no longer valid here — it was moved
```

Without `move`, the closure would attempt to borrow `s`, but the borrow checker cannot guarantee
that the spawned thread will not outlive `s` (the thread might run after `s` is dropped).

### Thread Return Values

`JoinHandle<T>` allows the spawning thread to receive the return value:

```rust
use std::thread;

let handle = thread::spawn(|| {
    let mut sum = 0;
    for i in 1..=100 {
        sum += i;
    }
    sum
});

let result = handle.join().unwrap();
assert_eq!(result, 5050);
```

`join()` blocks the calling thread until the spawned thread completes. If the spawned thread panics,
`join()` returns `Err` containing the panic payload.

### Scoped Threads

`std::thread::scope` (stable since Rust 1.63) allows spawning threads that can borrow data from the
parent scope without `move` or `'static`:

```rust
use std::thread;

let data = vec![1, 2, 3, 4, 5];

let mut results = Vec::new();

thread::scope(|s| {
    for chunk in data.chunks(2) {
        let chunk = chunk.to_vec();
        s.spawn(|| {
            let sum: i32 = chunk.iter().sum();
            results.push(sum);
        });
    }
});  // all spawned threads are joined here

assert_eq!(results, vec![3, 7, 5]);
```

The key guarantee: all threads spawned within `scope` are joined before `scope` returns. This means
borrowed data is guaranteed to be valid for the lifetime of the scoped threads, eliminating the need
for `'static` bounds.

:::info

Scoped threads are preferred over manual `thread::spawn` + `join` when threads need to borrow data
from the parent scope. They are safer (no `'static` requirement) and more ergonomic.

:::

## Message Passing

Rust's channel implementation is based on the actor model — threads communicate by sending messages,
not by sharing memory.

### `mpsc` Channels

`mpsc` stands for "multiple producer, single consumer." The standard library provides a bounded and
unbounded channel:

```rust
use std::sync::mpsc;
use std::thread;

let (tx, rx) = mpsc::channel();

thread::spawn(move || {
    let val = String::from("hello");
    tx.send(val).unwrap();
    // val is moved into the channel — no longer accessible here
});

let received = rx.recv().unwrap();
assert_eq!(received, "hello");
```

### Multiple Producers

Clone the `Sender` to create multiple producers:

```rust
use std::sync::mpsc;
use std::thread;

let (tx, rx) = mpsc::channel();
let tx1 = tx.clone();

thread::spawn(move || {
    tx.send("from thread 1").unwrap();
});

thread::spawn(move || {
    tx1.send("from thread 2").unwrap();
});

drop(tx);  // drop the original sender

for received in rx {
    println!("got: {}", received);
}
```

When all senders are dropped, `recv()` returns `Err` (signaling the channel is closed). The `for`
loop over `rx` terminates when the channel is closed.

### Bounded Channels

```rust
use std::sync::mpsc;

let (tx, rx) = mpsc::sync_channel(10);  // buffer size 10

tx.send(1).unwrap();  // OK — buffer not full
// If the buffer is full, send() blocks until a receiver reads
```

### `send` and `recv` Semantics

| Method                 | Behavior                                                         |
| ---------------------- | ---------------------------------------------------------------- |
| `tx.send(val)`         | Blocks if bounded channel is full. Moves `val` into the channel. |
| `rx.recv()`            | Blocks until a message is available or all senders are dropped.  |
| `rx.try_recv()`        | Non-blocking. Returns `Ok(val)` or `Err(TryRecvError)`.          |
| `rx.recv_timeout(dur)` | Blocks with timeout. Returns `Err(RecvTimeoutError)` on timeout. |

## Shared State

### `Mutex<T>`

A mutual exclusion lock provides interior mutability — only one thread can access the data at a
time:

```rust
use std::sync::{Arc, Mutex};
use std::thread;

let counter = Arc::new(Mutex::new(0));
let mut handles = vec![];

for _ in 0..10 {
    let counter = Arc::clone(&counter);
    handles.push(thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    }));
}

for handle in handles {
    handle.join().unwrap();
}

assert_eq!(*counter.lock().unwrap(), 10);
```

#### Mutex Poisoning

If a thread panics while holding a `Mutex` lock, the mutex becomes **poisoned**. Subsequent calls to
`lock()` return `Err(PoisonError)`. This is a deliberate safety feature — it prevents you from
accessing potentially inconsistent state.

```rust
let lock = counter.lock();
match lock {
    Ok(guard) => *guard += 1,
    Err(poisoned) => {
        // Recover the data if you know it is safe
        let guard = poisoned.into_inner();
        *guard += 1;
    }
}
```

Use `lock().unwrap()` when you are confident panics inside the critical section are impossible, or
when a panic means the entire process should terminate.

### `RwLock<T>`

A read-write lock allows multiple concurrent readers or a single exclusive writer:

```rust
use std::sync::RwLock;

let lock = RwLock::new(5);

// Multiple concurrent readers
{
    let r1 = lock.read().unwrap();
    let r2 = lock.read().unwrap();  // OK — multiple readers
    assert_eq!(*r1, 5);
    assert_eq!(*r2, 5);
}  // readers dropped

// Single exclusive writer
{
    let mut w = lock.write().unwrap();
    *w += 1;
}  // writer dropped
```

#### When to Use `RwLock` vs `Mutex`

| Condition                       | Use                                               |
| ------------------------------- | ------------------------------------------------- |
| Mostly writes, low contention   | `Mutex` — simpler, lower overhead                 |
| Mostly reads, occasional writes | `RwLock` — allows concurrent reads                |
| Very high contention            | Reconsider your design — locks are the bottleneck |

### `Arc<T>` — Atomic Reference Counting

`Arc<T>` enables shared ownership across threads. It is `Send + Sync` because the reference count is
maintained atomically:

```rust
use std::sync::Arc;
use std::thread;

let data = Arc::new(vec![1, 2, 3, 4, 5]);
let mut handles = vec![];

for _ in 0..3 {
    let data = Arc::clone(&data);
    handles.push(thread::spawn(move || {
        let sum: i32 = data.iter().sum();
        println!("sum: {}", sum);
    }));
}

for handle in handles {
    handle.join().unwrap();
}
```

`Arc` vs `Rc`:

- `Arc` uses atomic operations for reference counting — thread-safe but slower.
- `Rc` uses non-atomic reference counting — not thread-safe but faster.
- `Rc` does not implement `Send` or `Sync` — the compiler prevents cross-thread use.

## Atomic Types

`std::sync::atomic` provides lock-free atomic operations for primitive types. Atomics are the
foundation of lock-free data structures and are essential for performance-critical concurrent code.

### Atomic Operations

```rust
use std::sync::atomic::{AtomicUsize, Ordering};

static COUNTER: AtomicUsize = AtomicUsize::new(0);

COUNTER.fetch_add(1, Ordering::SeqCst);
let current = COUNTER.load(Ordering::SeqCst);
COUNTER.store(0, Ordering::SeqCst);
let prev = COUNTER.swap(42, Ordering::SeqCst);

// Compare-and-swap loop
let mut current = COUNTER.load(Ordering::SeqCst);
loop {
    let new = current + 1;
    match COUNTER.compare_exchange_weak(current, new, Ordering::SeqCst, Ordering::SeqCst) {
        Ok(_) => break,
        Err(actual) => current = actual,  // retry with actual value
    }
}
```

### Memory Orderings

| Ordering  | Guarantee                                                              |
| --------- | ---------------------------------------------------------------------- |
| `Relaxed` | No ordering — only atomicity guaranteed                                |
| `Release` | All prior writes are visible to threads that acquire this location     |
| `Acquire` | All subsequent reads see writes from the last release on this location |
| `AcqRel`  | Both acquire and release semantics                                     |
| `SeqCst`  | Sequentially consistent — total ordering across all threads            |

```rust
use std::sync::atomic::{AtomicBool, Ordering};

static READY: AtomicBool = AtomicBool::new(false);
static DATA: AtomicUsize = AtomicUsize::new(0);

// Writer thread
fn writer() {
    DATA.store(42, Ordering::Relaxed);          // write data
    READY.store(true, Ordering::Release);       // release fence
}

// Reader thread
fn reader() {
    if READY.load(Ordering::Acquire) {          // acquire fence
        assert_eq!(DATA.load(Ordering::Relaxed), 42);  // data is visible
    }
}
```

:::warning

`Relaxed` ordering is sufficient for simple counters but incorrect for producer-consumer patterns
where one thread's write must be visible to another thread's read. Use `Release`/`Acquire` pairs for
correct visibility semantics. Use `SeqCst` when you are unsure — it is the safest but slowest
option.

:::

### Available Atomic Types

| Type                                  | Operations                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| `AtomicBool`                          | `load`, `store`, `swap`, `compare_exchange`, `fetch_and`, `fetch_or`, `fetch_xor`           |
| `AtomicU8`–`AtomicU64`, `AtomicUsize` | All integer atomics: `fetch_add`, `fetch_sub`, `fetch_max`, `fetch_min`, `compare_exchange` |
| `AtomicI8`–`AtomicI64`, `AtomicIsize` | Same as unsigned, with signed comparison                                                    |
| `AtomicPtr<T>`                        | Pointer-sized atomic operations                                                             |

## Deadlock Prevention

### Common Deadlock Patterns

1. **Lock ordering violation**: Thread A holds lock 1 and waits for lock 2. Thread B holds lock 2
   and waits for lock 1.

2. **Non-reentrant locking**: A thread attempts to acquire a lock it already holds. Rust's `Mutex`
   is not reentrant (by design — reentrant locks hide bugs).

3. **Resource starvation**: A thread holds a lock for too long, preventing other threads from making
   progress.

### Prevention Strategies

```rust
use std::sync::Mutex;

struct Account {
    balance: Mutex<i64>,
}

fn transfer(from: &Account, to: &Account, amount: i64) {
    // Always lock in a consistent order to prevent deadlock
    let (first, second) = if from as *const _ as usize < to as *const _ as usize {
        (&from.balance, &to.balance)
    } else {
        (&to.balance, &from.balance)
    };

    let mut first_lock = first.lock().unwrap();
    let mut second_lock = second.lock().unwrap();

    *first_lock.get_mut().unwrap() -= amount;
    *second_lock.get_mut().unwrap() += amount;
}
```

### Lock Guard Scope

Keep lock guards in as small a scope as possible:

```rust
// Bad — lock held for the entire function body
fn process(data: &Mutex<Vec<i32>>) {
    let guard = data.lock().unwrap();
    guard.push(1);
    guard.push(2);
    // ... many more operations while lock is held
}

// Good — lock held only when needed
fn process(data: &Mutex<Vec<i32>>) {
    {
        let mut guard = data.lock().unwrap();
        guard.push(1);
        guard.push(2);
    }  // lock released here
    // ... other work without lock
}
```

## Async/Await

### The Problem with Threads

OS threads are expensive: each thread uses 8 MB of stack (default on Linux), context switches cost
1,000–10,000 nanoseconds, and creating threads has significant overhead. For I/O-bound workloads
with thousands of concurrent tasks (web servers, database connections), threads do not scale
efficiently.

Async/await provides lightweight concurrency — thousands of tasks on a handful of OS threads.

### `Future` Trait

```rust
pub trait Future {
    type Output;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}

pub enum Poll<T> {
    Ready(T),
    Pending,
}
```

A `Future` represents an asynchronous computation. `poll` is called by the executor to check whether
the computation has completed (`Ready`) or needs more time (`Pending`). When `Pending` is returned,
the future registers the current `Waker` with the reactor, which will wake the future when the I/O
operation completes.

### Async Syntax

```rust
async fn fetch_data(url: &str) -> Result<String, reqwest::Error> {
    let response = reqwest::get(url).await?;
    Ok(response.text().await?)
}

async fn main() {
    match fetch_data("https://example.com").await {
        Ok(data) => println!("received {} bytes", data.len()),
        Err(e) => eprintln!("error: {}", e),
    }
}
```

`async fn` desugars to a function that returns an `impl Future<Output = T>`. `.await` desugars to a
state machine transition in the generated future.

### What `.await` Does

The `.await` keyword yields control to the executor. When the future is not ready, it returns
`Poll::Pending` and saves its state. When the waker fires, the executor polls the future again, and
execution resumes from the `.await` point.

```
Time →
┌──────────────────────────────────────────────────┐
│ Future execution:                                 │
│                                                   │
│  start ──► .await ──► [yield] ──► resume ──► end  │
│           (pending)   (woken)                     │
│                                                   │
│  While yielded, the executor runs OTHER futures    │
└──────────────────────────────────────────────────┘
```

### `Pin` and Unpin

`Pin` is a wrapper that prevents the wrapped pointer from being moved. This is necessary because
async futures contain self-referential data (pointers from the state machine to local variables on
the stack). If the future were moved, these pointers would become invalid.

```rust
use std::pin::Pin;
use std::marker::PhantomPinned;

struct SelfReferential {
    data: String,
    pointer: *const String,  // points to data
    _marker: PhantomPinned,
}
```

Most types are `Unpin` — they can be safely moved even when pinned. Types that are self-referential
(like the compiler-generated state machine for async blocks) are `!Unpin`.

### `Send` and `Sync` Bounds for Futures

A future must be `Send` to be spawned on an async runtime (like tokio). If a future captures a
non-`Send` type (like `Rc` or `&RefCell`), it cannot be spawned:

```rust
use std::rc::Rc;

async fn bad() {
    let rc = Rc::new(42);
    // This future is !Send because Rc is !Send
    // tokio::spawn(async move { println!("{}", rc) });  // ERROR
}
```

## Tokio Runtime

Tokio is the dominant async runtime for Rust. It provides a multi-threaded executor, I/O driver, and
timer.

### Basic Tokio Usage

```toml
[dependencies]
tokio = { version = "1", features = ["full"] }
```

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        sleep(Duration::from_millis(100)).await;
        42
    });

    let result = handle.await.unwrap();
    assert_eq!(result, 42);
}
```

### Tokio Task Spawning

```rust
#[tokio::main]
async fn main() {
    let handle1 = tokio::spawn(async {
        // runs on the tokio runtime
        tokio::time::sleep(Duration::from_millis(100)).await;
        "task 1"
    });

    let handle2 = tokio::spawn(async {
        tokio::time::sleep(Duration::from_millis(50)).await;
        "task 2"
    });

    assert_eq!(handle2.await.unwrap(), "task 2");  // finishes first
    assert_eq!(handle1.await.unwrap(), "task 1");
}
```

### `spawn_blocking`

For CPU-bound work that would block the async executor:

```rust
#[tokio::main]
async fn main() {
    let result = tokio::task::spawn_blocking(|| {
        // This runs on a blocking thread pool
        // Does NOT block the async executor
        expensive_computation()
    }).await.unwrap();
}
```

Never run CPU-intensive or blocking I/O (like `std::fs::read_to_string`) directly on the async
executor — it will block all other tasks on that thread. Use `spawn_blocking` for blocking
operations and `tokio::fs` for async file I/O.

### Async Channels

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(32);

    let tx2 = tx.clone();
    tokio::spawn(async move {
        tx.send("from task 1").await.unwrap();
    });

    tokio::spawn(async move {
        tx2.send("from task 2").await.unwrap();
    });

    while let Some(msg) = rx.recv().await {
        println!("{}", msg);
    }
}
```

Note: tokio's async channels use `.await` for send/receive, unlike `std::sync::mpsc` which blocks.

### `select!`

`select!` allows waiting on multiple async operations simultaneously and handles the first one to
complete:

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(32);

    tokio::spawn(async move {
        sleep(Duration::from_millis(100)).await;
        tx.send("delayed").await.unwrap();
    });

    tokio::select! {
        msg = rx.recv() => {
            println!("received: {:?}", msg);
        }
        _ = sleep(Duration::from_millis(50)) => {
            println!("timeout");
        }
    }
}
```

:::warning

`select!` drops all non-selected futures. If you need to retry the other branches, you must
restructure your code to recreate the futures. This is a common source of confusion for developers
coming from JavaScript's `Promise.race`.

:::

## Race Conditions

### Data Races vs Race Conditions

A **data race** is undefined behavior — two threads access the same memory location concurrently, at
least one of them writes, and there is no synchronization. Rust's type system prevents data races at
compile time (in safe code).

A **race condition** is a logical error where the outcome depends on the timing of concurrent
operations. Race conditions are not prevented by the type system — they are logic bugs that require
careful design to avoid.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

let counter = Arc::new(Mutex::new(0));
let mut handles = vec![];

for _ in 0..10 {
    let counter = Arc::clone(&counter);
    handles.push(thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        // Check-then-act race condition:
        // Two threads could both read 0, both increment to 1, losing one increment
        if *num < 5 {
            *num += 1;
        }
    }));
}

// This is NOT a data race (Mutex provides synchronization)
// but it IS a race condition (logical bug)
```

### Preventing Race Conditions

1. **Minimize shared mutable state.** Prefer message passing over shared memory.
2. **Use atomic operations** for simple counters and flags.
3. **Hold locks for the shortest possible time.** Do not perform I/O while holding a lock.
4. **Design lock protocols** (always acquire locks in the same order).
5. **Use `RwLock`** when reads vastly outnumber writes.

## Common Concurrency Patterns

### Thread Pool

```rust
use std::sync::{Arc, Mutex, mpsc};
use std::thread;

type Job = Box<dyn FnOnce() + Send + 'static>;

struct ThreadPool {
    workers: Vec<Worker>,
    sender: mpsc::Sender<Job>,
}

struct Worker {
    id: usize,
    thread: Option<thread::JoinHandle<()>>,
}

impl ThreadPool {
    fn new(size: usize) -> Self {
        let (sender, receiver) = mpsc::channel();
        let receiver = Arc::new(Mutex::new(receiver));
        let mut workers = Vec::with_capacity(size);

        for id in 0..size {
            workers.push(Worker::new(id, Arc::clone(&receiver)));
        }

        ThreadPool { workers, sender }
    }

    fn execute<F>(&self, f: F)
    where
        F: FnOnce() + Send + 'static,
    {
        self.sender.send(Box::new(f)).unwrap();
    }
}

impl Worker {
    fn new(id: usize, receiver: Arc<Mutex<mpsc::Receiver<Job>>>) -> Self {
        let thread = thread::spawn(move || loop {
            let job = receiver.lock().unwrap().recv();
            match job {
                Ok(job) => job(),
                Err(_) => break,
            }
        });

        Worker {
            id,
            thread: Some(thread),
        }
    }
}
```

### Work Stealing (with `rayon`)

```toml
[dependencies]
rayon = "1.10"
```

```rust
use rayon::prelude::*;

let data: Vec<i32> = (1..=1_000_000).collect();

let sum: i64 = data.par_iter().map(|&x| x as i64).sum();
let even_count = data.par_iter().filter(|&&x| x % 2 == 0).count();

let mut result = vec![0i32; 1_000_000];
data.par_iter().enumerate().for_each(|(i, &x)| {
    result[i] = x * 2;
});
```

Rayon uses a work-stealing scheduler: each thread has a local deque of tasks. When a thread finishes
its work, it steals tasks from other threads' deques. This provides automatic load balancing without
central coordination.

### Async Mutex (tokio)

```rust
use tokio::sync::Mutex;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));

    let mut handles = vec![];
    for _ in 0..10 {
        let data = Arc::clone(&data);
        handles.push(tokio::spawn(async move {
            let mut lock = data.lock().await;
            *lock += 1;
        }));
    }

    for handle in handles {
        handle.await.unwrap();
    }

    assert_eq!(*data.lock().await, 10);
}
```

:::warning

Do NOT use `std::sync::Mutex` in async code. Holding a `std::sync::Mutex` across an `.await` point
blocks the entire OS thread, preventing other async tasks from running. Use `tokio::sync::Mutex` for
async contexts. However, if the critical section is short and does not contain any `.await`, a
`std::sync::Mutex` is acceptable and has lower overhead.

:::

## `Send` and `Sync` in Depth

### Auto-Implementation Rules

The compiler automatically implements `Send` and `Sync` based on the composition of the type:

- A type is `Send` if all its members are `Send`.
- A type is `Sync` if all its members are `Sync` (equivalently, if `&T` is `Send`).

| Type                               | `Send` | `Sync`                |
| ---------------------------------- | ------ | --------------------- |
| `i32`, `f64`, `bool`               | Yes    | Yes                   |
| `String`, `Vec<T>` where `T: Send` | Yes    | Yes                   |
| `Box<T>` where `T: Send`           | Yes    | No (unless `T: Sync`) |
| `Rc<T>`                            | No     | No                    |
| `Arc<T>` where `T: Send + Sync`    | Yes    | Yes                   |
| `&T` where `T: Sync`               | Yes    | No                    |
| `&mut T`                           | No     | No                    |
| `Mutex<T>` where `T: Send`         | Yes    | Yes                   |

### Manual Implementation

```rust
struct MyType {
    pointer: *const i32,  // raw pointers are !Send and !Sync
}

unsafe impl Send for MyType {}
unsafe impl Sync for MyType {}
```

:::danger

Manually implementing `Send` or `Sync` is unsafe because you are asserting that the compiler's
automatic analysis is wrong and that your type is actually safe to send/share across threads. If
your assertion is wrong, you have undefined behavior. Only do this when you can rigorously prove
thread safety (e.g., when using platform-specific synchronization primitives that the compiler
cannot see).

:::

## Common Pitfalls

1. **Blocking the async executor.** Calling `std::thread::sleep`, `std::fs::read_to_string`, or any
   blocking operation inside an async task blocks the entire OS thread. All other tasks on that
   thread are stalled. Use `tokio::time::sleep`, `tokio::fs`, or `spawn_blocking`.

2. **Holding a `std::sync::Mutex` across `.await`.** This blocks the thread even while the future is
   suspended. Either use `tokio::sync::Mutex` or restructure the code to drop the lock before
   awaiting.

3. **Deadlock with `Mutex` in async code.** Two tasks each lock one mutex and then try to lock the
   other — classic deadlock. This is worse in async code because the executor cannot preempt the
   tasks. Always acquire locks in a consistent order, or use `try_lock` with backoff.

4. **`Arc` reference cycles.** Two `Arc` values that reference each other will never be dropped. Use
   `Weak<T>` to break cycles, especially in graph data structures and observer patterns.

5. **Not using scoped threads when possible.** `thread::spawn` requires `'static` bounds, forcing
   you to `move` or `Arc` everything. `thread::scope` allows borrowing and is safer and more
   ergonomic.

6. **Atomic ordering mistakes.** Using `Ordering::Relaxed` when you need `Release`/`Acquire`
   semantics is a data race on the visibility of writes. The data is not corrupted (the operation is
   atomic), but other threads may see stale values.

7. **Over-spawning threads.** Each OS thread consumes stack space (8 MB default) and kernel
   resources. For I/O-bound concurrency, use async/await instead of threads. For CPU-bound
   parallelism, use a thread pool with a fixed number of threads (typically equal to the number of
   CPU cores).

8. **Ignoring JoinHandle errors.** If a spawned thread panics, `handle.join()` returns `Err`.
   Ignoring this error silently swallows panics, which may indicate serious bugs. Always check join
   results or use a supervision mechanism.

9. **Using `Rc` in async code.** `Rc` is not `Send`, so any future capturing an `Rc` cannot be
   spawned on tokio. Use `Arc` instead. This is one of the most common async Rust compilation
   errors.

10. **`select!` dropping futures.** When `select!` completes, all non-selected branches are dropped.
    If you need to retry a branch, you must restructure your code to loop and recreate the future.
    Consider using `tokio::select!` with a loop pattern for repeated selection.
