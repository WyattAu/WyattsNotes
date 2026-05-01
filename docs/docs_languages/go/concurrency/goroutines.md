---
title: Goroutines and Synchronization
description:
  Goroutines and Synchronization — Goroutines; The Goroutine Scheduler;
  sync.WaitGroup; WaitGroup Gotcha with worked examples and exam-style
  questions.
slug: goroutines
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Goroutines

A goroutine is a lightweight thread managed by the Go runtime. Goroutines are multiplexed onto a
small number of OS threads (default: GOMAXPROCS, usually equal to the number of CPU cores). The
initial stack size is small (2-8 KB) and grows/shrinks as needed.

Starting a goroutine:

```go
go func() {
    fmt.Println("running in a goroutine")
}()
```

Goroutines are cheap. Creating thousands or millions of goroutines is routine in Go programs:

```go
for i := 0; i < 100000; i++ {
    go func(id int) {
        doWork(id)
    }(i)
}
```

## The Goroutine Scheduler

Go uses an M:N scheduler: M goroutines are multiplexed onto N OS threads (called "M" in Go's runtime
terminology, with "P" as logical processors). The scheduler uses work-stealing to balance load
across Ps.

Key components:

- **G** (goroutine): the user-level thread
- **M** (machine): the OS thread
- **P** (processor): the context for scheduling, holds the run queue

GOMAXPROCS controls the number of Ps (and thus the maximum parallelism):

```go
runtime.GOMAXPROCS(4) // use 4 OS threads
```

Since Go 1.5, GOMAXPROCS defaults to `runtime.NumCPU()`.

## sync.WaitGroup

`sync.WaitGroup` waits for a collection of goroutines to finish:

```go
func main() {
    var wg sync.WaitGroup

    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            fmt.Printf("worker %d\n", id)
        }(i)
    }

    wg.Wait()
    fmt.Println("all workers done")
}
```

Rules:

1. `Add(delta)` must be called before the goroutine starts.
2. `Done()` decrements the counter. It is typically deferred.
3. `Wait()` blocks until the counter reaches zero.

### WaitGroup Gotcha

Never copy a `WaitGroup` by value. It contains internal state that must not be duplicated:

```go
// Wrong: copies the WaitGroup
var wg sync.WaitGroup
go func(wg sync.WaitGroup) { // copy!
    defer wg.Done()
}(wg)

// Correct: pass by pointer
var wg sync.WaitGroup
wg.Add(1)
go func(wg *sync.WaitGroup) {
    defer wg.Done()
}(&wg)
```

## sync.Mutex

`sync.Mutex` provides mutual exclusion. Only one goroutine can hold the lock at a time:

```go
type SafeCounter struct {
    mu    sync.Mutex
    value int
}

func (c *SafeCounter) Incr() {
    c.mu.Lock()
    c.value++
    c.mu.Unlock()
}

func (c *SafeCounter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}
```

### Critical Section Rules

1. Always pair `Lock()` with `Unlock()`. Use `defer` to ensure `Unlock()` runs even on panic.
2. Keep critical sections as short as possible. Long-held locks reduce concurrency.
3. Never copy a `Mutex` after first use.

### Locking Gotchas

```go
// Deadlock: reentrant lock attempt
mu.Lock()
mu.Lock() // deadlock -- same goroutine tries to lock again
```

Go's `Mutex` is not reentrant. If the same goroutine calls `Lock()` twice without unlocking, it
deadlocks. This is a deliberate design choice -- reentrant locks hide locking discipline bugs.

## sync.RWMutex

`sync.RWMutex` allows multiple readers or a single writer:

```go
type Cache struct {
    mu    sync.RWMutex
    items map[string]string
}

func (c *Cache) Get(key string) (string, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()
    v, ok := c.items[key]
    return v, ok
}

func (c *Cache) Set(key, value string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.items[key] = value
}
```

Use `RLock`/`RUnlock` for read-only access. This allows concurrent readers but blocks writers (and
vice versa). Use `Lock`/`Unlock` for writes.

### When to Use RWMutex vs Mutex

Use `RWMutex` when reads significantly outnumber writes and the read critical section is not
trivially short. The overhead of `RWMutex` is higher than `Mutex`, so if reads are rare or the
critical section is a single field read, `Mutex` may be faster.

## sync.Once

`sync.Once` ensures a function is executed exactly once, regardless of how many goroutines call it:

```go
var instance *Singleton
var once sync.Once

func GetInstance() *Singleton {
    once.Do(func() {
        instance = &Singleton{}
    })
    return instance
}
```

`sync.Once` is safe for concurrent use and is the idiomatic way to implement lazy initialization in
Go.

## sync.Map

`sync.Map` is a concurrency-safe map. It is optimized for two patterns:

1. **Append-only** (keys written once, read many times)
2. **Disjoint** (goroutines read/write distinct keys)

```go
var m sync.Map

m.Store("key", "value")
v, ok := m.Load("key")
m.Delete("key")
m.LoadOrStore("key", "default")
```

Use `sync.Map` only when the standard `map` with `sync.RWMutex` is a proven bottleneck. For most use
cases, `map` + `Mutex`/`RWMutex` is simpler and performs better.

## Channel Basics

Channels are a typed conduit for sending values between goroutines. They synchronize goroutines and
provide a safe communication mechanism without explicit locks.

### Unbuffered Channels

An unbuffered channel blocks the sender until a receiver is ready:

```go
ch := make(chan int)

go func() {
    ch <- 42 // blocks until receiver is ready
}()

v := <-ch // blocks until sender is ready
fmt.Println(v) // 42
```

### Buffered Channels

A buffered channel does not block the sender until the buffer is full:

```go
ch := make(chan int, 3)

ch <- 1 // does not block
ch <- 2 // does not block
ch <- 3 // does not block
// ch <- 4 // would block -- buffer is full

v := <-ch // 1
```

### Closing Channels

Only the sender should close a channel. Closing a closed channel panics. Receiving from a closed
channel returns the zero value and `false`:

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
close(ch)

for v := range ch {
    fmt.Println(v) // 1, 2
}

v, ok := <-ch
fmt.Println(v, ok) // 0 false
```

### Channel Direction

Channels can be restricted to send-only or receive-only:

```go
func sender(ch chan<- int) {
    ch <- 42
    // <-ch // compile error: receive from send-only channel
}

func receiver(ch <-chan int) {
    v := <-ch
    fmt.Println(v)
    // ch <- 1 // compile error: send to receive-only channel
}
```

Use directional channels in function signatures to make the intended usage explicit.

## Common Pitfalls

1. **Forgetting to close channels.** If the sender does not close the channel, receivers waiting
   with `range` will block forever. Use `defer close(ch)` or close explicitly when done.

2. **Closing a channel twice.** Closing an already-closed channel panics. Track ownership: only the
   goroutine responsible for sending should close the channel.

3. **Sending on a closed channel.** Sending a value to a closed channel panics. This is a
   fundamental rule of Go channels.

4. **Blocking on unbuffered channel with no receiver.** An unbuffered send blocks until a receiver
   is ready. If no receiver exists, the goroutine blocks forever.

5. **Copying a Mutex after use.** `sync.Mutex` must not be copied after first use. The same applies
   to `sync.RWMutex`, `sync.WaitGroup`, `sync.Cond`, and `sync.Pool`. Use pointers.

6. **Using goroutines without synchronization.** Starting a goroutine and not waiting for it or
   communicating with it via a channel leads to data races. Use `sync.WaitGroup` or channels to
   coordinate.

7. **Deadlock with RWMutex.** A goroutine holding `RLock` cannot upgrade to `Lock` -- it must
   release `RLock` first. Attempting to call `Lock()` while holding `RLock()` deadlocks.
