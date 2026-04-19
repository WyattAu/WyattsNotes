---
title: Coroutines
description:
  Coroutine basics, suspend functions, launch/async, structured concurrency, Flow, and channels.
slug: coroutines
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Core Concepts

Coroutines are Kotlin's mechanism for asynchronous programming. They are lightweight -- a coroutine
suspends instead of blocking a thread, allowing a small number of OS threads to handle many
concurrent operations.

Key distinction: **coroutines are not threads**. A coroutine runs on a thread but can be suspended
and resumed on a different thread. Thousands of coroutines can run concurrently on a handful of
threads.

## Setup

Add the coroutines dependency:

```kotlin
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.9.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor:1.9.0") // Reactor
    testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:1.9.0")
}
```

## Suspend Functions

A `suspend` function can suspend the execution of a coroutine without blocking the underlying
thread. Only coroutines (or other suspend functions) can call suspend functions.

```kotlin
suspend fun fetchUser(id: Long): User {
    delay(1000)  // suspends without blocking the thread
    return api.getUser(id)
}
```

`suspend` functions have no special mechanism -- the compiler inserts a state machine at compile
time that saves and restores the local variables and execution position at each suspension point.

`delay()` is the coroutine equivalent of `Thread.sleep()` but does not block the thread.

## Coroutine Builders

### launch

Launches a fire-and-forget coroutine. Returns a `Job` that can be joined or cancelled.

```kotlin
fun main() = runBlocking {
    val job: Job = launch {
        delay(1000)
        println("World")
    }
    println("Hello")
    job.join()
    println("Done")
}
// Output: Hello (immediate), World (after 1s), Done
```

### async

Launches a coroutine that returns a `Deferred<T>` (a cancellable future). Use `await()` to get the
result.

```kotlin
suspend fun fetchAllData(): Data {
    val deferred1 = async { fetchUser(1) }
    val deferred2 = async { fetchOrders(1) }
    val deferred3 = async { fetchPreferences(1) }

    return Data(
        user = deferred1.await(),
        orders = deferred2.await(),
        preferences = deferred3.await()
    )
}
```

`launch` vs `async`:

- `launch`: returns `Job`, no result value. Use for side effects.
- `async`: returns `Deferred<T>`, produces a result. Use for concurrent computations.

### runBlocking

Bridges blocking and non-blocking code. Blocks the current thread until all coroutines inside
complete. Primarily used in `main()` and tests -- avoid in application code.

```kotlin
fun main() = runBlocking {
    launch {
        delay(1000)
        println("Done")
    }
}
```

### withContext

Switches the coroutine to a different dispatcher and returns a result.

```kotlin
suspend fun loadData(): String = withContext(Dispatchers.IO) {
    // runs on IO thread pool
    Thread.sleep(1000)  // blocking IO -- OK on Dispatchers.IO
    "data"
}
```

## Dispatchers

Dispatchers determine which thread pool executes the coroutine.

| Dispatcher               | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `Dispatchers.Default`    | CPU-intensive work (sorting, parsing, JSON)                    |
| `Dispatchers.IO`         | Blocking IO (network, disk, database)                          |
| `Dispatchers.Main`       | UI thread (Android, JavaFX)                                    |
| `Dispatchers.Unconfined` | Starts on caller thread, resumes on whatever thread resumes it |

```kotlin
launch(Dispatchers.Default) {
    // CPU work
}

launch(Dispatchers.IO) {
    // blocking IO
}

withContext(Dispatchers.Main) {
    // update UI
}
```

## Structured Concurrency

Coroutines follow structured concurrency: child coroutines are bound to a parent scope. When the
parent scope is cancelled, all children are cancelled. When all children complete, the parent
completes.

```kotlin
suspend fun processBatch(items: List<Item>) = coroutineScope {
    items.map { item ->
        async {
            processItem(item)
        }
    }.awaitAll()
}
```

If any `processItem` call throws, `coroutineScope` cancels all other coroutines and propagates the
exception. This prevents resource leaks from orphaned coroutines.

### CoroutineScope

`coroutineScope` creates a new scope that completes when all children complete. It does not block
the current thread -- it suspends.

`supervisorScope` is a variant where the failure of one child does not cancel the others.

```kotlin
suspend fun fetchWithFallback() = supervisorScope {
    val primary = async { fetchFromPrimary() }
    val fallback = async { fetchFromFallback() }

    try {
        primary.await()
    } catch (e: Exception) {
        fallback.await()
    }
}
```

## Cancellation

Coroutines cooperate with cancellation by checking `isActive` or calling cancellable suspend
functions.

```kotlin
launch {
    repeat(1000) { i ->
        if (!isActive) return@launch  // cooperative cancellation check

        // delay() is cancellable -- throws CancellationException on cancel
        delay(100)
        println("Processing $i")
    }
}
```

### CancellationException Propagation

`CancellationException` is special -- it is used to cancel coroutines and should not be caught in
general `catch` blocks.

```kotlin
launch {
    try {
        delay(5000)
    } catch (e: CancellationException) {
        throw e  // always rethrow CancellationException
    } catch (e: Exception) {
        // handle other exceptions
    }
}
```

## Flow

`Flow` is a cold asynchronous stream. It is the coroutine equivalent of RxJava's `Observable` but
built on coroutines.

```kotlin
fun numbers(): Flow<Int> = flow {
    for (i in 1..5) {
        delay(100)
        emit(i)
    }
}

suspend fun main() {
    numbers()
        .map { it * it }
        .filter { it > 10 }
        .collect { println(it) }
}
// Output: 16, 25
```

Flow is cold -- nothing happens until `collect` is called. Each collector gets its own independent
stream.

### Flow Operators

```kotlin
flow {
    emit(1)
    emit(2)
    emit(3)
}
    .map { it * 2 }         // [2, 4, 6]
    .filter { it > 2 }      // [4, 6]
    .onEach { println(it) } // side effects
    .catch { e -> log(e) }  // upstream exception handling
    .onCompletion { println("done") }
    .collect()
```

### StateFlow and SharedFlow

`StateFlow` is a hot flow that holds a single current value. Use it for state management.

```kotlin
class ViewModel {
    private val _uiState = MutableStateFlow(UiState())
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    fun updateName(name: String) {
        _uiState.update { it.copy(userName = name) }
    }
}
```

`SharedFlow` is a hot flow for event broadcasting.

```kotlin
class EventBus {
    private val _events = MutableSharedFlow<Event>(extraBufferCapacity = 64)
    val events: SharedFlow<Event> = _events.asSharedFlow()

    suspend fun emit(event: Event) {
        _events.emit(event)
    }
}
```

## Channels

Channels provide a way to transfer values between coroutines. They are similar to Go channels.

```kotlin
suspend fun producer(channel: SendChannel<Int>) {
    for (i in 1..5) {
        channel.send(i)
    }
    channel.close()
}

suspend fun consumer(channel: ReceiveChannel<Int>) {
    for (value in channel) {
        println(value)
    }
}
```

### Channel Types

| Type                | Description                         |
| ------------------- | ----------------------------------- |
| `Channel()`         | Rendezvous (buffer size 0)          |
| `Channel(64)`       | Buffered with capacity 64           |
| `Channel.CONFLATED` | Drops previous values, keeps latest |
| `Channel.UNLIMITED` | Unbounded buffer (use with caution) |

## Common Pitfalls

- \*\* Using `runBlocking` in application code. It blocks the thread, defeating the purpose of
  coroutines. Use `CoroutineScope` with lifecycle management instead.
- \*\* Forgetting to make IO functions suspending. If you wrap blocking calls in `withContext(IO)`,
  that is fine, but prefer genuinely non-blocking libraries (e.g., `ktor-client`,
  `Retrofit with coroutines`) over `withContext(IO)` wrapping blocking code.
- \*\* Not handling cancellation properly. Always rethrow `CancellationException`. Use
  `ensureActive()` or check `isActive` in long-running CPU loops.
- \*\* Using `GlobalScope`. It creates unbound coroutines that outlive the application scope, making
  cancellation and lifecycle management impossible. Always use structured concurrency with explicit
  scopes.
- \*\* Collecting multiple flows sequentially. Use `combine`, `merge`, or `zip` to compose flows
  concurrently.
