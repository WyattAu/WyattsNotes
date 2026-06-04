---
title: Error Handling
description:
  'Swift error handling notes covering do-catch-try, custom errors, Result type, defer, guard, typed
  throws, and error propagation patterns.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Swift
categories:
  - Swift
slug: error-handling
---

## Representing Errors

Errors in Swift are represented by types conforming to the `Error` protocol, which is an empty
protocol. Any type can be an error.

### Enum-Based Errors

```swift
enum NetworkError: Error {
    case invalidURL
    case noConnection
    case timeout
    case serverError(statusCode: Int)
    case decodingFailed
}

enum ValidationError: Error {
    case emptyField(String)
    case invalidEmail(String)
    case passwordTooShort(minLength: Int)
    case ageOutOfRange(min: Int, max: Int)
}

enum FileError: Error {
    case notFound(path: String)
    case permissionDenied(path: String)
    case unreadable
}
```

### Struct-Based Errors

```swift
struct AppError: Error {
    let code: Int
    let message: String
    let underlyingError: Error?

    var localizedDescription: String {
        return "[\(code)] \(message)"
    }
}
```

## Throwing Functions

Functions marked with `throws` propagate errors to the caller.

```swift
func fetchUser(id: Int) throws -> User {
    guard id > 0 else {
        throw ValidationError.emptyField("User ID")
    }
    // ... network call
    return User(id: id, name: "Alice")
}

func readFile(at path: String) throws -> Data {
    guard FileManager.default.fileExists(atPath: path) else {
        throw FileError.notFound(path: path)
    }
    return try Data(contentsOf: URL(fileURLWithPath: path))
}
```

### Typed Throws (Swift 5.9+)

```swift
func parse(input: String) throws(ParseError) -> Int {
    guard let value = Int(input) else {
        throw .invalidFormat
    }
    return value
}

enum ParseError: Error {
    case invalidFormat
    case outOfRange
}
```

## Handling Errors

### do-catch

```swift
do {
    let data = try readFile(at: "/path/to/file.json")
    let user = try JSONDecoder().decode(User.self, from: data)
    print("Loaded: \(user.name)")
} catch FileError.notFound(let path) {
    print("File not found: \(path)")
} catch FileError.permissionDenied(let path) {
    print("Permission denied: \(path)")
} catch {
    print("Unexpected error: \(error)")
}
```

### try? and try!

```swift
// try? -- returns nil on error (discards error information)
let data = try? readFile(at: "/path/to/file.json")
if let data {
    print("Read \(data.count) bytes")
}

// try! -- crashes on error (use only when you are certain it succeeds)
let content = try! readFile(at: "/known/good/file.txt")
```

### Multiple Catches

```swift
func processFile(path: String) {
    do {
        let data = try readFile(at: path)
        let decoded = try JSONDecoder().decode(Config.self, from: data)
        apply(config: decoded)
    } catch FileError.notFound(let path) {
        print("Missing file: \(path)")
    } catch FileError.permissionDenied {
        print("Fix permissions")
    } catch DecodingError.keyNotFound(let key, _) {
        print("Missing key in config: \(key.stringValue)")
    } catch DecodingError.typeMismatch(let type, _) {
        print("Type mismatch: expected \(type)")
    } catch is DecodingError {
        print("General decoding error")
    } catch {
        print("Unknown error: \(error)")
    }
}
```

### Nested Error Handling

```swift
func loadConfig() throws -> Config {
    do {
        let data = try readFile(at: "/config.json")
        return try JSONDecoder().decode(Config.self, from: data)
    } catch let error as DecodingError {
        print("Decoding failed: \(error)")
        throw AppError(code: 1001, message: "Config decode failed", underlyingError: error)
    }
}
```

## Result Type

The `Result<Success, Failure>` enum encapsulates a success value or an error, making error handling
explicit and composable.

### Basic Usage

```swift
func divide(_ a: Double, _ b: Double) -> Result<Double, ArithmeticError> {
    guard b != 0 else {
        return .failure(ArithmeticError.divisionByZero)
    }
    return .success(a / b)
}

let result = divide(10, by: 3)
switch result {
case .success(let value):
    print("Result: \(value)")
case .failure(let error):
    print("Error: \(error)")
}
```

### Result with Higher-Order Functions

```swift
let operations: [Result<Double, ArithmeticError>] = [
    divide(10, by: 2),    // .success(5)
    divide(10, by: 0),    // .failure
    divide(10, by: 4)     // .success(2.5)
]

let successes = operations.compactMap { try? $0.get() }
// [5.0, 2.5]

let failures = operations.filter {
    if case .failure = $0 { return true }
    return false
}
```

### Converting Between throws and Result

```swift
// From throwing to Result
func safeFetchUser(id: Int) -> Result<User, Error> {
    Result {
        try fetchUser(id: id)
    }
}

// From Result to throwing
func unwrap(_ result: Result<Data, Error>) throws -> Data {
    switch result {
    case .success(let data): return data
    case .failure(let error): throw error
    }
}

// Using Result.get()
do {
    let data = try divide(10, by: 3).get()
    print(data)
} catch {
    print("Error: \(error)")
}
```

### Chaining Results

```swift
extension Result {
    func map<NewSuccess>(_ transform: (Success) -> NewSuccess) -> Result<NewSuccess, Failure> {
        switch self {
        case .success(let value): return .success(transform(value))
        case .failure(let error): return .failure(error)
        }
    }

    func flatMap<NewSuccess>(_ transform: (Success) -> Result<NewSuccess, Failure>) -> Result<NewSuccess, Failure> {
        switch self {
        case .success(let value): return transform(value)
        case .failure(let error): return .failure(error)
        }
    }
}

let pipeline = divide(10, by: 2)
    .map { $0 * 3 }      // .success(15)
    .flatMap { divide($0, by: 5) }  // .success(3)
```

## Error Propagation

### Rethrowing Functions

A `rethrows` function passes through errors from its closure argument.

```swift
func withRetry<T>(maxAttempts: Int, operation: () throws -> T) rethrows -> T {
    var lastError: Error?
    for attempt in 1...maxAttempts {
        do {
            return try operation()
        } catch {
            lastError = error
            print("Attempt \(attempt) failed: \(error)")
        }
    }
    throw lastError!  // Guaranteed to exist
}

// Caller must handle errors from the operation
let result = try withRetry(maxAttempts: 3) {
    try networkRequest()
}
```

### Propagating Errors in Initialisers

```swift
struct Config: Decodable {
    let apiUrl: URL
    let timeout: TimeInterval

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let urlString = try container.decode(String.self, forKey: .apiUrl)
        guard let url = URL(string: urlString) else {
            throw DecodingError.dataCorruptedError(
                forKey: .apiUrl, in: container,
                debugDescription: "Invalid URL string: \(urlString)"
            )
        }
        self.apiUrl = url
        self.timeout = try container.decode(TimeInterval.self, forKey: .timeout)
    }

    enum CodingKeys: String, CodingKey {
        case apiUrl = "api_url"
        case timeout
    }
}
```

## defer

The `defer` statement executes cleanup code when the current scope exits, regardless of how it exits
(return, throw, break, or normal completion).

### Resource Management

```swift
func processFile(path: String) throws -> String {
    let fileHandle = try FileHandle(forReadingFrom: URL(fileURLWithPath: path))
    defer {
        try? fileHandle.close()
    }

    let data = fileHandle.readDataToEndOfFile()
    return String(data: data, encoding: .utf8) ?? ""
}

func transaction() throws {
    beginTransaction()
    defer {
        if !committed {
            rollbackTransaction()
        }
    }

    var committed = false
    defer {
        if committed {
            print("Transaction committed successfully")
        }
    }

    try executeStatement("INSERT INTO users ...")
    try executeStatement("UPDATE accounts ...")
    committed = true
}
```

### Multiple defer Statements

```swift
func multiDefer() {
    print("Start")

    defer { print("Defer 1") }
    defer { print("Defer 2") }
    defer { print("Defer 3") }

    print("End")
}
// Output: Start, End, Defer 3, Defer 2, Defer 1
// defers execute in reverse order (LIFO)
```

### defer with Guard

```swift
func connectDatabase(host: String) throws -> Connection {
    guard !host.isEmpty else {
        throw ValidationError.emptyField("host")
    }

    let conn = try Connection(host: host)
    defer { conn.close() }

    try conn.authenticate()
    let data = try conn.query("SELECT * FROM users")
    return try conn.process(data)
}
```

## Custom Error Types and Localized Errors

```swift
enum DatabaseError: Error, LocalizedError {
    case connectionFailed(host: String)
    case queryFailed(query: String, reason: String)
    case timeout(seconds: Double)

    var errorDescription: String? {
        switch self {
        case .connectionFailed(let host):
            return "Cannot connect to database at \(host)"
        case .queryFailed(let query, let reason):
            return "Query '\(query)' failed: \(reason)"
        case .timeout(let seconds):
            return "Database operation timed out after \(seconds)s"
        }
    }

    var recoverySuggestion: String? {
        switch self {
        case .connectionFailed:
            return "Check network connection and database status"
        case .queryFailed:
            return "Verify query syntax and table schema"
        case .timeout:
            return "Consider increasing timeout or optimising the query"
        }
    }
}
```

## Error Handling Patterns

### Custom Result Type

```swift
enum APIResponse<T> {
    case success(T)
    case failure(APIError)

    var value: T? {
        switch self {
        case .success(let value): return value
        case .failure: return nil
        }
    }

    var error: APIError? {
        switch self {
        case .success: return nil
        case .failure(let error): return error
        }
    }
}

enum APIError: Error {
    case unauthorized
    case notFound
    case serverError(Int)
    case networkError(Error)
}
```

### Guard with Result

```swift
func validateEmail(_ email: String) -> Result<String, ValidationError> {
    guard !email.isEmpty else {
        return .failure(.emptyField("email"))
    }
    guard email.contains("@") && email.contains(".") else {
        return .failure(.invalidEmail(email))
    }
    return .success(email)
}

// Usage
switch validateEmail("test@example.com") {
case .success(let email):
    print("Valid: \(email)")
case .failure(let error):
    print("Invalid: \(error)")
}
```

### Error Handling in SwiftUI

```swift
enum LoadError: Error, LocalizedError {
    case networkUnavailable
    case serverUnreachable

    var errorDescription: String? {
        switch self {
        case .networkUnavailable: return "No internet connection"
        case .serverUnreachable: return "Server is unreachable"
        }
    }
}

@MainActor
class ViewModel: ObservableObject {
    @Published var items: [Item] = []
    @Published var errorMessage: String?
    @Published var isLoading = false

    func load() async {
        isLoading = true
        errorMessage = nil

        do {
            items = try await fetchItems()
        } catch {
            errorMessage = (error as? LocalizedError)?.errorDescription ?? error.localizedDescription
        }

        isLoading = false
    }
}

struct ContentView: View {
    @StateObject var viewModel = ViewModel()

    var body: some View {
        Group {
            if let errorMessage = viewModel.errorMessage {
                Text("Error: \(errorMessage)").foregroundStyle(.red)
            } else if viewModel.isLoading {
                ProgressView()
            } else {
                List(viewModel.items) { item in
                    Text(item.title)
                }
            }
        }
        .task { await viewModel.load() }
    }
}
```

### Combining Error Handling with Guard

```swift
func processData(input: String) throws -> ProcessedResult {
    guard !input.isEmpty else {
        throw ValidationError.emptyField("input")
    }

    guard input.count >= 3 else {
        throw ValidationError.passwordTooShort(minLength: 3)
    }

    let cleaned = input.trimmingCharacters(in: .whitespacesAndNewlines)
    guard !cleaned.isEmpty else {
        throw ValidationError.emptyField("cleaned input")
    }

    let parsed = try parse(cleaned)
    let validated = try validate(parsed)

    return try transform(validated)
}
```

## Codable Errors

```swift
struct User: Codable {
    let id: Int
    let name: String
    let email: String
}

func decodeUser(from data: Data) -> Result<User, Error> {
    let decoder = JSONDecoder()
    decoder.keyDecodingStrategy = .convertFromSnakeCase

    do {
        let user = try decoder.decode(User.self, from: data)
        return .success(user)
    } catch let DecodingError.keyNotFound(key, context) {
        return .failure(AppError(
            code: 1001,
            message: "Missing key: \(key.stringValue)",
            underlyingError: error
        ))
    } catch let DecodingError.typeMismatch(type, context) {
        return .failure(AppError(
            code: 1002,
            message: "Type mismatch for \(type)",
            underlyingError: error
        ))
    } catch let DecodingError.valueNotFound(type, context) {
        return .failure(AppError(
            code: 1003,
            message: "Nil value for non-optional type: \(type)",
            underlyingError: error
        ))
    } catch {
        return .failure(error)
    }
}
```

## Summary

Swift's error handling is explicit and type-safe. Enum-based error types provide structured error
information. The `do`/`catch`/`try` pattern propagates errors while `Result` makes error handling
composable. `defer` ensures cleanup code runs reliably, and `guard` keeps the happy path clean.
Combined, these tools enable robust error handling without the overhead of exceptions in other
languages.
