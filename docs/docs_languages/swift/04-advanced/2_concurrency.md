---
title: Concurrency
description:
  'Swift concurrency notes covering async/await, Tasks, actors, Sendable, structured concurrency,
  and @MainActor for safe parallel programming.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Swift
categories:
  - Swift
slug: concurrency
---

## Overview of Swift Concurrency

Swift's concurrency model provides **structured concurrency** -- asynchronous tasks are organised in
a hierarchy where the lifetime of child tasks is bounded by their parent. This prevents common bugs
like dangling callbacks, forgotten cleanup, and race conditions.

Key components:

- **async/await**: Asynchronous function syntax
- **Task**: Unit of asynchronous work
- **Actor**: Isolated, thread-safe reference type
- **Sendable**: Protocol for safe data transfer across concurrency boundaries
- **@MainActor**: Ensures code runs on the main thread (UI updates)

## async and await

### Defining Async Functions

```swift
func fetchUser(id: Int) async throws -> User {
    let url = URL(string: "https://api.example.com/users/\(id)")!
    let (data, response) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(User.self, from: data)
}

func loadAvatar(for user: User) async throws -> Image {
    let (data, _) = try await URLSession.shared.data(from: user.avatarURL)
    return Image(uiImage: UIImage(data: data)!)
}
```

### Calling Async Functions

```swift
func displayUserProfile(id: Int) async {
    do {
        let user = try await fetchUser(id: id)
        let avatar = try await loadAvatar(for: user)
        updateUI(with: user, avatar: avatar)
    } catch {
        print("Failed: \(error)")
    }
}

// Calling from synchronous context: wrap in a Task
Task {
    await displayUserProfile(id: 1)
}
```

### Sequential Async Operations

```swift
func loadDashboard() async throws -> Dashboard {
    // These run sequentially -- each waits for the previous
    let user = try await fetchUser(id: currentUserId)
    let notifications = try await fetchNotifications(for: user)
    let feed = try await fetchFeed(for: user)
    let settings = try await fetchSettings(for: user)
    return Dashboard(user: user, notifications: notifications, feed: feed, settings: settings)
}
```

## Tasks

### Creating Tasks

```swift
// Detached task -- independent of current context
let handle = Task.detached {
    let result = await heavyComputation()
    print("Result: \(result)")
    return result
}

// Structured task -- inherits context, bounded lifetime
let task = Task {
    try await fetchUser(id: 1)
}

// Cancel a task
task.cancel()
```

### Task Cancellation

```swift
func processAll(items: [Item]) async throws -> [Result<Item, Error>] {
    var results: [Result<Item, Error>] = []

    for item in items {
        // Check for cancellation at each iteration
        try Task.checkCancellation()

        do {
            let processed = try await process(item)
            results.append(.success(processed))
        } catch {
            results.append(.failure(error))
        }
    }

    return results
}

// Using isCancelled for non-throwing checks
Task {
    for i in 0..<1000 {
        if Task.isCancelled { break }
        await doWork(step: i)
    }
}
```

### Task Local Values

```swift
@TaskLocal static var currentRequestID: String?

func processRequest(id: String) async {
    // Inherit the request ID across async boundaries
    $currentRequestID.withValue(id) {
        performDatabaseOperation()
    }
}
```

## Structured Concurrency

### async let (Concurrent Bindings)

`async let` starts a child task that runs concurrently with the current task.

```swift
func loadDashboard() async throws -> Dashboard {
    // All three start simultaneously
    async let user = fetchUser(id: currentUserId)
    async let notifications = fetchNotifications(for: .user(currentUserId))
    async let feed = fetchFeed()

    // Wait for all results
    return try await Dashboard(
        user: user,
        notifications: notifications,
        feed: feed
    )
}
```

### TaskGroup

`TaskGroup` and `ThrowingTaskGroup` manage a dynamic number of child tasks.

```swift
func fetchAllUsers(ids: [Int]) async throws -> [User] {
    try await withThrowingTaskGroup(of: User.self) { group in
        for id in ids {
            group.addTask {
                try await fetchUser(id: id)
            }
        }

        var users: [User] = []
        for try await user in group {
            users.append(user)
        }
        return users
    }
}

// Non-throwing version
func downloadImages(urls: [URL]) async -> [UIImage] {
    await withTaskGroup(of: UIImage?.self) { group in
        for url in urls {
            group.addTask {
                try? await downloadImage(from: url)
            }
        }

        var images: [UIImage] = []
        for await image in group {
            if let image { images.append(image) }
        }
        return images
    }
}
```

### TaskGroup with Collect

```swift
func searchAll(query: String) async throws -> [SearchResult] {
    try await withThrowingTaskGroup(of: [SearchResult].self) { group in
        group.addTask { try await searchWeb(query: query) }
        group.addTask { try await searchLocal(query: query) }
        group.addTask { try await searchCache(query: query) }

        var allResults: [SearchResult] = []
        for try await results in group {
            allResults.append(contentsOf: results)
        }
        return allResults.sorted(by: { $0.relevance > $1.relevance })
    }
}
```

### Cancellation in TaskGroups

```swift
func processInParallel(items: [Item]) async throws -> [ProcessedItem] {
    try await withThrowingTaskGroup(of: ProcessedItem.self) { group in
        for item in items {
            group.addTask {
                try await process(item)
            }
        }

        // If one task fails, all remaining are cancelled
        // Use collectAllResults() to continue on failure
        var results: [ProcessedItem] = []
        for try await result in group {
            results.append(result)
        }
        return results
    }
}
```

## Actors

Actors are **reference types** that provide **data isolation** -- access to their mutable state is
synchronized automatically by the compiler.

### Defining an Actor

```swift
actor Counter {
    private var count = 0

    func increment() {
        count += 1
    }

    func decrement() {
        count -= 1
    }

    func current() -> Int {
        return count
    }

    func reset() {
        count = 0
    }
}

let counter = Counter()

Task {
    await counter.increment()
    let value = await counter.current()
    print("Count: \(value)")
}
```

### Actor Isolation

All access to actor state must go through `await` (or from within the actor itself). The compiler
enforces this at compile time, eliminating data races.

```swift
actor BankAccount {
    let accountNumber: String
    private var balance: Double

    init(accountNumber: String, initialBalance: Double) {
        self.accountNumber = accountNumber
        self.balance = initialBalance
    }

    func deposit(amount: Double) {
        balance += amount
    }

    func withdraw(amount: Double) throws {
        guard balance >= amount else {
            throw BankError.insufficientFunds
        }
        balance -= amount
    }

    func transfer(amount: Double, to other: BankAccount) async throws {
        try withdraw(amount: amount)
        await other.deposit(amount: amount)
    }

    func getBalance() -> Double {
        return balance
    }
}
```

### Global Actors

```swift
@globalActor
struct DatabaseActor: GlobalActor {
    static let shared = DatabaseActor()
    actor ActorType { }
}

@DatabaseActor
func saveUser(_ user: User) {
    // Runs on DatabaseActor's executor
    db.insert(user)
}

@DatabaseActor
var currentUser: User?
```

## @MainActor

`@MainActor` marks code that must run on the main thread, which is essential for UI updates.

```swift
@MainActor
class ViewModel: ObservableObject {
    @Published var items: [Item] = []
    @Published var isLoading = false
    @Published var errorMessage: String?

    func load() async {
        isLoading = true
        defer { isLoading = false }

        do {
            items = try await fetchItems()
        } catch {
            errorMessage = error.localizedDescription
        }
    }
}

// Mark individual functions
@MainActor
func updateLabel(_ text: String) {
    label.text = text
}

// Call from background task
Task {
    let data = await heavyComputation()
    await updateLabel("Result: \(data)")
}
```

### MainActor in SwiftUI Views

```swift
struct ContentView: View {
    @StateObject private var viewModel = ViewModel()

    var body: some View {
        List(viewModel.items) { item in
            ItemRow(item: item)
        }
        .overlay {
            if viewModel.isLoading {
                ProgressView("Loading...")
            }
        }
        .task {
            await viewModel.load()
        }
        .refreshable {
            await viewModel.load()
        }
    }
}
```

## Sendable

The `Sendable` protocol marks types that are safe to transfer across concurrency boundaries.

### Built-In Sendable Types

Value types are implicitly `Sendable`: `Int`, `String`, `Array`, `Dictionary`, `Set`, structs with
only Sendable stored properties.

Reference types are **not** implicitly `Sendable` (unless they are actors or explicitly conform).

### Making Types Sendable

```swift
// Value types with Sendable stored properties are automatically Sendable
struct Message: Sendable {
    let id: UUID
    let text: String
    let timestamp: Date
}

// Lock-based Sendable conformance for reference types
final class SafeCache<Key: Hashable, Value>: Sendable {
    private var storage: [Key: Value] = [:]
    private let lock = NSLock()

    func get(_ key: Key) -> Value? {
        lock.lock()
        defer { lock.unlock() }
        return storage[key]
    }

    func set(_ key: Key, value: Value) {
        lock.lock()
        defer { lock.unlock() }
        storage[key] = value
    }
}

// @unchecked Sendable -- opt out of compiler checking (use carefully)
final class LegacyStore: @unchecked Sendable {
    var data: [String: Any] = [:]
}
```

### @Sendable Closures

Closures passed to concurrency APIs must be `@Sendable`:

```swift
// The compiler infers @Sendable for Task and TaskGroup
Task {
    await fetchUser(id: 1)
}

// Explicit @Sendable
func runInParallel(
    _ a: @Sendable @escaping () -> Void,
    _ b: @Sendable @escaping () -> Void
) async {
    async let t1 = Task { a() }
    async let t2 = Task { b() }
    await t1
    await t2
}
```

### Non-Sendable Types in Concurrent Code

```swift
// Error: class is not Sendable
class DataStore {
    var cache: [String: Data] = [:]
}

// Fix 1: Use an actor
actor SafeDataStore {
    var cache: [String: Data] = [:]

    func store(_ data: Data, for key: String) {
        cache[key] = data
    }
}

// Fix 2: Use Sendable value type
struct DataCache: Sendable {
    private let storage: [String: Data]

    func get(_ key: String) -> Data? { storage[key] }
}

// Fix 3: Mark @unchecked (only if you guarantee thread safety)
final class ThreadSafeStore: @unchecked Sendable {
    private let lock = NSLock()
    private var cache: [String: Data] = [:]
}
```

## AsyncStream and AsyncThrowingStream

Streams provide a way to deliver values over time, similar to Combine publishers.

### Creating an AsyncStream

```swift
func countdown(from n: Int) -> AsyncStream<Int> {
    AsyncStream { continuation in
        Task {
            for i in (1...n).reversed() {
                continuation.yield(i)
                try? await Task.sleep(nanoseconds: 1_000_000_000)
            }
            continuation.finish()
        }
    }
}

for await count in countdown(from: 5) {
    print(count)
}

// AsyncThrowingStream
func fetchPaginatedResults() -> AsyncThrowingStream<[Item], Error> {
    AsyncThrowingStream { continuation in
        var page = 1

        Task {
            while true {
                do {
                    let items = try await fetchPage(page: page)
                    if items.isEmpty {
                        continuation.finish()
                        break
                    }
                    continuation.yield(items)
                    page += 1
                } catch {
                    continuation.finish(throwing: error)
                    break
                }
            }
        }
    }
}

for try await items in fetchPaginatedResults() {
    print("Received \(items.count) items")
}
```

### Buffering Policy

```swift
func generateEvents() -> AsyncStream<Event> {
    AsyncStream(bufferingPolicy: .bufferingOldest(100)) { continuation in
        // ...
    }
}
```

## Combining Async with Existing Patterns

### Replacing Callbacks with async/await

```swift
// Before: completion handler
func fetchOld(completion: @escaping (Result<Data, Error>) -> Void) {
    URLSession.shared.dataTask(with: url) { data, _, error in
        if let data {
            completion(.success(data))
        } else if let error {
            completion(.failure(error))
        }
    }.resume()
}

// After: async/await
func fetchNew() async throws -> Data {
    let (data, _) = try await URLSession.shared.data(from: url)
    return data
}

// Bridging callback to async
func fetchBridged() async throws -> Data {
    try await withCheckedThrowingContinuation { continuation in
        fetchOld { result in
            continuation.resume(with: result)
        }
    }
}
```

### withCheckedThrowingContinuation

```swift
func performLegacyOperation() async throws -> String {
    try await withCheckedThrowingContinuation { continuation in
        legacyAPI.execute { result, error in
            if let error {
                continuation.resume(throwing: error)
            } else {
                continuation.resume(returning: result)
            }
        }
    }
}
```

## Concurrency Best Practices

### Avoid Data Races

```swift
// BAD: shared mutable state across tasks
var counter = 0
await withTaskGroup(of: Void.self) { group in
    for _ in 0..<1000 {
        group.addTask {
            counter += 1  // Data race!
        }
    }
}
// counter is unpredictable

// GOOD: use actor
actor SafeCounter {
    var count = 0
    func increment() { count += 1 }
    func value() -> Int { count }
}

// GOOD: use atomic value
let counter = LockedValue<Int>(initialValue: 0)
await withTaskGroup(of: Void.self) { group in
    for _ in 0..<1000 {
        group.addTask {
            await counter.update { $0 += 1 }
        }
    }
}
```

### Prefer Structured Concurrency

```swift
// BAD: fire and forget
func loadAll() {
    Task { await fetchUser(id: 1) }
    Task { await fetchFeed() }
    // No way to wait for completion, no error handling
}

// GOOD: structured with async let
func loadAll() async throws {
    async let user = fetchUser(id: 1)
    async let feed = fetchFeed()
    let dashboard = try await Dashboard(user: user, feed: feed)
}

// GOOD: TaskGroup for dynamic number
func loadAll(ids: [Int]) async throws {
    try await withThrowingTaskGroup(of: User.self) { group in
        for id in ids {
            group.addTask { try await fetchUser(id: id) }
        }
        // All results collected or errors propagated
    }
}
```

### Cancellation Cooperatively

```swift
func longRunningOperation() async throws -> Result {
    for i in 0..<100 {
        try Task.checkCancellation()  // Respond to cancellation

        let partial = try await processBatch(startIndex: i * 100)

        if partial.isComplete {
            return partial
        }
    }
    throw OperationError.timedOut
}
```

### Avoid Main Thread Blocking

```swift
// BAD: CPU-intensive work on main actor
@MainActor
func processLargeDataset(_ data: [DataPoint]) {
    let result = heavyComputation(data)  // Blocks UI!
    displayResult(result)
}

// GOOD: offload to background, update on main
@MainActor
func processLargeDataset(_ data: [DataPoint]) async {
    let result = await Task.detached {
        heavyComputation(data)
    }.value
    displayResult(result)
}
```

## Summary

Swift's structured concurrency model provides compile-time safety for asynchronous code.
`async/await` simplifies asynchronous code, `Task` and `TaskGroup` manage work units, `actors`
prevent data races, `Sendable` ensures safe data transfer, and `@MainActor` keeps UI updates on the
main thread. Together, these eliminate entire categories of concurrency bugs while maintaining the
expressiveness and performance Swift is known for.
