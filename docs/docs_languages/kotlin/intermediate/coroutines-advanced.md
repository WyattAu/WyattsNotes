---
title: coroutines advanced
slug: kotlin/coroutines-advanced
date: 2026-05-30
tags:
  - Kotlin
categories:
  - Kotlin
description: Advanced Kotlin coroutines: Flow error handling, sharing flows, flow lifecycle, coroutine context elements, testing coroutines with TestDispatchers, debugging, and production patterns.
---

This document builds on the coroutine fundamentals covered in
[coroutines](/docs_languages/kotlin/intermediate/coroutines/). It assumes familiarity with suspend
functions, coroutine builders, dispatchers, structured concurrency, and basic Flow usage.

## Flow Error Handling

Error handling in Flow differs from regular exception handling because Flow is cold and lazy. Errors
propagate downstream through the operator chain and terminate the flow unless explicitly caught.

### catch Operator

The `catch` operator intercepts upstream exceptions. It must be placed **before** the terminal
operator and catches exceptions from all upstream operators but not from downstream code.

```kotlin
fun numbersFromApi(): Flow<Int> = flow {
    for (i in 1..5) {
        delay(100)
        if (i == 3) throw RuntimeException("API error at $i")
        emit(i)
    }
}

suspend fun main() {
    numbersFromApi()
        .catch { e -> println("Caught: ${e.message}") }
        .collect { println(it) }
}
// Output: 1, 2, Caught: API error at 3
```

The `catch` operator can emit alternative values to allow the flow to continue:

```kotlin
numbersFromApi()
    .catch { e -> emit(-1); println("Recovered: ${e.message}") }
    .collect { println(it) }
// Output: 1, 2, -1, Recovered: API error at 3
```

### flow {} Wrapper for Exception Safety

Wrapping emit calls inside `flow {}` ensures exceptions are properly propagated through the
operator chain. The builder enforces the context preservation rule and guarantees exceptions are
caught by downstream `catch` operators.

```kotlin
fun safeNumbers(): Flow<Int> = flow {
    try {
        for (i in 1..5) { delay(100); emit(i) }
    } catch (e: CancellationException) {
        throw e
    } catch (e: Exception) {
        emit(0)
    }
}
```

### Retry Pattern

Use the `retry` operator to automatically re-attempt a failing flow on upstream exceptions:

```kotlin
fun fetchData(): Flow<String> = flow {
    emit(api.getData())
}
    .retry(3) { e -> e is IOException && delay(1000); true }
    .catch { e -> println("All retries exhausted: ${e.message}") }
```

`retry(n)` re-subscribes to the upstream flow up to `n` times. Each retry re-executes the entire
upstream chain from scratch.

### Circuit Breaker Pattern

The circuit breaker pattern tracks consecutive failures and halts attempts once a threshold is
reached:

```kotlin
class CircuitBreaker(
    private val failureThreshold: Int = 5,
    private val resetTimeout: Duration = Duration.ofSeconds(30)
) {
    private var failureCount = 0
    private var state = State.CLOSED
    private var lastFailureTime: Instant? = null
    enum class State { CLOSED, OPEN, HALF_OPEN }

    fun allowRequest(): Boolean {
        if (state == State.OPEN) {
            val elapsed = lastFailureTime?.let { Duration.between(it, Instant.now()) }
            if (elapsed != null && elapsed >= resetTimeout) { state = State.HALF_OPEN; return true }
            return false
        }
        return true
    }

    fun recordSuccess() { failureCount = 0; state = State.CLOSED }
    fun recordFailure() {
        failureCount++
        lastFailureTime = Instant.now()
        if (failureCount >= failureThreshold) state = State.OPEN
    }
}

fun <T> Flow<T>.withCircuitBreaker(breaker: CircuitBreaker): Flow<T> = flow {
    if (!breaker.allowRequest()) throw CircuitOpenException("Circuit breaker is open")
    collect { value -> breaker.recordSuccess(); emit(value) }
}.catch { e ->
    if (e !is CircuitOpenException) breaker.recordFailure()
    throw e
}
```

## Sharing Flows

Cold flows create a new execution pipeline for every collector. Sharing flows allow a single
execution to be observed by multiple collectors simultaneously.

### StateFlow vs SharedFlow

| Feature              | StateFlow                     | SharedFlow                              |
| --------------------- | ----------------------------- | --------------------------------------- |
| Initial value         | Required (always has a value) | Optional (no initial value by default) |
| Replays to new collector | Latest value (replay = 1)  | Configurable replay cache               |
| Conflation            | Always conflates (latest)     | Configurable                            |
| Use case              | State holding (ViewModel)     | Event broadcasting (navigation, toasts) |

### StateFlow

`StateFlow` combines `SharedFlow` semantics with a conflated, single-value state model:

```kotlin
class UserViewModel(private val repository: UserRepository) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    fun refresh() {
        _uiState.update { it.copy(isLoading = true) }
        viewModelScope.launch {
            try {
                _uiState.update { it.copy(user = repository.fetchUser(), isLoading = false) }
            } catch (e: Exception) {
                _uiState.update { it.copy(error = e.message, isLoading = false) }
            }
        }
    }
}
```

Use `update {}` for atomic updates that depend on the current value.

### SharedFlow

`SharedFlow` is for one-time events where conflation would lose data:

```kotlin
class NavigationManager {
    private val _events = MutableSharedFlow<NavEvent>(
        replay = 0, extraBufferCapacity = 10, onBufferOverflow = BufferOverflow.SUSPEND
    )
    val events: SharedFlow<NavEvent> = _events.asSharedFlow()
    suspend fun navigate(event: NavEvent) { _events.emit(event) }
}
```

### Converting Between StateFlow and SharedFlow

```kotlin
val shared: SharedFlow<Int> = stateFlow.asSharedFlow()
val state: StateFlow<String?> = sharedFlow.stateIn(scope, SharingStarted.Lazily, null)
```

### Conflation Risks

With `StateFlow`, rapid emissions are conflated -- slow collectors skip intermediate values. For
event streams where no emission can be lost, use `SharedFlow` with sufficient buffer capacity.

## Flow Lifecycle

A flow is inactive until `collect` is called. The upstream only executes when a collector is active.
When the collector cancels, the upstream is also cancelled.

```kotlin
fun tickingClock(): Flow<String> = flow {
    var ticks = 0
    try {
        while (true) { delay(1000); emit("Tick ${++ticks}") }
    } finally { println("Clock stopped after $ticks ticks") }
}

val job = scope.launch {
    tickingClock()
        .onCompletion { cause -> if (cause != null) println("Cancelled: $cause") }
        .collect { println(it) }
}
delay(3500)
job.cancel()
// Output: Tick 1, Tick 2, Tick 3, Clock stopped after 3 ticks, Cancelled: ...
```

Cancellation propagates upstream through the operator chain. Each operator checks for cancellation
before processing the next element.

### Collecting from Multiple Sources

Use `combine` to merge values from multiple flows when any of them emits, and `merge` to interleave
emissions from multiple flows of the same type:

```kotlin
combine(userFlow, notificationsFlow) { user, notifs ->
    CombinedState(user = user, notifications = notifs, isLoading = false)
}

merge(periodicRefreshFlow(), userTriggeredRefreshFlow()).collect { refresh(it) }
```

## Coroutine Context Elements

### CoroutineContext Keys

Every coroutine has a `CoroutineContext` which is a set of elements with unique keys:

```kotlin
val context = CoroutineScope(Dispatchers.IO + Job() + CoroutineName("worker"))
println(context[CoroutineName])            // CoroutineName(worker)
println(context[Job])                       // JobImpl{...}

val newContext = Dispatchers.Default + CoroutineName("compute") + SupervisorJob()
```

### Custom Context Elements

Define custom context elements for logging, tracing, or passing metadata:

```kotlin
data class RequestId(val id: String) : CoroutineContext.Element {
    override val key: CoroutineContext.Key<*> = Key
    companion object Key : CoroutineContext.Key<RequestId>
}

suspend fun processRequest() {
    println("Processing request: ${coroutineContext[RequestId]?.id ?: "no id"}")
}
suspend fun main() = withContext(RequestId("abc-123")) { processRequest() }
// Output: Processing request: abc-123
```

### ThreadLocal

`ThreadLocal` values do not propagate across thread switches in coroutines. Use `asContextElement`
to bridge them:

```kotlin
val threadLocalUser = ThreadLocal<String?>()

suspend fun main() {
    withContext(threadLocalUser.asContextElement("alice")) {
        println("Main: ${threadLocalUser.get()}")            // alice
        withContext(Dispatchers.Default) {
            println("Default: ${threadLocalUser.get()}")     // alice (propagated)
        }
    }
}
```

Without `asContextElement`, the value would be lost when switching dispatchers.

### CoroutineScope Inheritance

Child coroutines inherit the context of their parent scope. Overridden elements (like dispatchers)
replace the inherited value while everything else is preserved.

## Testing Coroutines

### TestDispatchers

`kotlinx-coroutines-test` provides dispatchers that make timing deterministic:

| Dispatcher                    | Behavior                                             |
| ----------------------------- | ---------------------------------------------------- |
| `StandardTestDispatcher()`    | Executes eagerly but respects ordering and delays    |
| `UnconfinedTestDispatcher()`  | Executes immediately on the current thread            |
| `TestDispatcher` (Main)       | Replaces `Dispatchers.Main` in tests                  |

### runTest

`runTest` replaces `runBlocking` in tests and provides virtual time control:

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
class UserRepositoryTest {
    @Test
    fun fetchUserReturnsData() = runTest {
        val repository = FakeUserRepository()
        assertEquals("Alice", repository.fetchUser(1).name)
    }

    @Test
    fun retryDelaysCorrectly() = runTest {
        var attempts = 0
        suspend fun fetchData(): String {
            attempts++
            if (attempts < 3) throw IOException("fail")
            return "success"
        }
        val result = retry(3) { delay(1000); fetchData() }
        assertEquals("success", result)
        assertEquals(2000L, testScheduler.currentTime)
    }
}
```

### Testing Flow and StateFlow

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun emitsCorrectValues() = runTest {
    val flow = flow { emit(1); delay(100); emit(2); delay(100); emit(3) }
    assertEquals(listOf(1, 2, 3), flow.toList())
}

@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun handlesErrorsInFlow() = runTest {
    val flow = flow { emit(1); throw RuntimeException("boom") }
    assertEquals(listOf(1, -1), flow.catch { emit(-1) }.toList())
}

@OptIn(ExperimentalCoroutinesApi::class)
@Test
fun stateFlowTracksUpdates() = runTest {
    val stateFlow = MutableStateFlow("initial")
    stateFlow.value = "updated"
    val values = mutableListOf<String>()
    backgroundScope.launch { stateFlow.toList(values) }
    assertEquals(listOf("initial", "updated"), values)
}
```

## Debugging Coroutines

### Coroutine Debug Agent

Enable coroutine debugging by setting the `kotlinx.coroutines.debug` system property:

```kotlin
System.setProperty("kotlinx.coroutines.debug", "ON")
```

When enabled, coroutine creation, resumption, and completion are logged with stack traces. This adds
overhead and should only be used during development.

### Stack Traces on Failure

Without the debug agent, stack traces show only `BaseContinuationImpl.resumeWith`. With it enabled,
exceptions include the full coroutine call chain:

```kotlin
// Without debug agent:
//   at kotlinx.coroutines.BaseContinuationImpl.resumeWith(...)

// With debug agent:
//   at MyService.processData(MyService.kt:42)
//   at MyViewModel.loadData(MyViewModel.kt:28)
```

### Logging Coroutine Lifecycle

Use `onStart` and `onCompletion` for Flow lifecycle tracing:

```kotlin
flow { emit(fetchData()) }
    .onStart { println("Flow started on ${Thread.currentThread().name}") }
    .onCompletion { cause -> if (cause != null) println("Failed: ${cause.message}") }
    .collect { println("Collected: $it") }
```

### Common Debugging Pitfalls

- Missing stack traces are almost always caused by forgetting to enable the debug agent.
- `CancellationException` in logs is normal during scope cancellation.
- `Thread.currentThread().name` is misleading since coroutines may resume on different threads.
- Logging inside hot flows can flood logs since emissions occur independently of collectors.

## Production Patterns

### CoroutineScope Lifecycle in Android and Compose

`viewModelScope` is tied to the ViewModel's lifecycle. In Compose, `LaunchedEffect` creates
coroutines tied to composition:

```kotlin
@Composable
fun UserProfile(userId: String) {
    val viewModel: UserViewModel = viewModel()
    LaunchedEffect(userId) { viewModel.loadUser(userId) }
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    UserScreen(uiState)
}
```

### coroutineScope vs supervisorScope

`coroutineScope` cancels all siblings if any child fails. `supervisorScope` isolates each child:

```kotlin
suspend fun processOrder(order: Order): OrderResult = coroutineScope {
    val validate = async { validateOrder(order) }
    val inventory = async { checkInventory(order) }
    val payment = async { processPayment(order) }
    OrderResult(validate.await(), inventory.await(), payment.await())
}

suspend fun fetchWithFallback(): Data = supervisorScope {
    val primary = async { fetchFromPrimary() }
    val fallback = async { fetchFromFallback() }
    try { primary.await() } catch (e: Exception) { fallback.await() }
}
```

| Scope            | Child failure behavior               |
| ---------------- | ------------------------------------ |
| `coroutineScope` | Cancels all siblings, propagates up |
| `supervisorScope` | Only the failing child is cancelled |

### Cancelling Hierarchies

When a parent scope is cancelled, all children are cancelled recursively:

```kotlin
val scope = CoroutineScope(SupervisorJob())
scope.launch {
    launch { launch { repeat(1000) { delay(100); println("grandchild $it") } } }
    launch { repeat(1000) { delay(100); println("child $it") } }
    delay(500)
}
delay(1000)
scope.cancel()  // cancels parent and all descendants
```

## Common Pitfalls

- **Catching `CancellationException` in generic catch blocks.** Always rethrow it. Silently catching
  it prevents cancellation from propagating, leading to leaked coroutines.
- **Using `StateFlow` for event streams.** `StateFlow` conflates emissions and replays the latest
  value to new collectors. Use `SharedFlow` with `replay = 0` for one-time events.
- **Collecting Flow in `launch` without lifecycle awareness.** Use `collectAsStateWithLifecycle`
  in Compose or `repeatOnLifecycle` in ViewModel to tie collection to the correct lifecycle.
- **Calling `collect` inside another Flow operator.** `collect` is a terminal operator that
  suspends. Use `flatMapLatest` or `flatMapConcat` instead.
- **Forgetting that `flowOf` and `flow {}` are cold.** Each `collect` re-executes the entire
  upstream. Use `shareIn` to convert to a hot flow for side-effecting upstreams.
- **Using `ThreadLocal` without `asContextElement`.** Thread-local values are lost when coroutines
  resume on different threads.
- **Testing with `runBlocking` instead of `runTest`.** `runBlocking` does not control virtual time,
  making tests with `delay` slow and non-deterministic.

## Summary

This document covers advanced coroutine patterns that build on the fundamentals.

**Key concepts include:**

- Flow error handling with catch, retry, and circuit breaker patterns
- Sharing flows with StateFlow and SharedFlow and their trade-offs
- Flow lifecycle management including cancellation propagation
- Custom coroutine context elements and ThreadLocal bridging
- Testing coroutines with TestDispatchers and deterministic time control
- Debugging coroutines with the debug agent and lifecycle logging
- Production patterns for structured concurrency and scope management

Understanding these advanced patterns is essential for building robust, maintainable, and testable
asynchronous systems with Kotlin coroutines.
