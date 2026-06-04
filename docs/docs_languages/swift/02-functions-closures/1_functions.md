---
title: Functions
description:
  'Swift functions and closures notes covering parameters, return types, closures, escaping
  closures, property wrappers, and higher-order functions.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Swift
categories:
  - Swift
slug: functions
---

## Functions

Functions are self-contained blocks of code that perform a specific task. Swift functions are
first-class citizens: they can be assigned to variables, passed as arguments, and returned from
other functions.

### Basic Syntax

```swift
func greet(name: String) -> String {
    return "Hello, \(name)!"
}
print(greet(name: "Alice"))    // Hello, Alice!

// Functions without parameters
func sayHello() {
    print("Hello, World!")
}

// Functions without return value
func log(_ message: String) {
    print("[LOG] \(message)")
}

// Implicit return for single-expression functions
func double(_ x: Int) -> Int { x * 2 }
```

### Parameters

```swift
// Argument label + parameter name
func greet(person name: String) -> String {
    return "Hello, \(name)!"
}
greet(person: "Alice")  // Argument label is 'person'

// Omitting argument label with _
func square(_ number: Int) -> Int {
    return number * number
}
square(5)  // No argument label needed

// Default parameter values
func power(_ base: Int, _ exponent: Int = 2) -> Int {
    var result = 1
    for _ in 0..<exponent {
        result *= base
    }
    return result
}
power(3)      // 9 (exponent defaults to 2)
power(3, 3)   // 27

// Variadic parameters
func average(_ numbers: Double...) -> Double {
    guard !numbers.isEmpty else { return 0 }
    let sum = numbers.reduce(0, +)
    return sum / Double(numbers.count)
}
average(1, 2, 3, 4, 5)  // 3.0

// Inout parameters -- modify the caller's variable
func swapValues(_ a: inout Int, _ b: inout Int) {
    let temp = a
    a = b
    b = temp
}
var x = 10, y = 20
swapValues(&x, &y)
print("x: \(x), y: \(y)")  // x: 20, y: 10

// Multiple return values with tuples
func minMax(array: [Int]) -> (min: Int, max: Int)? {
    guard let first = array.first else { return nil }
    var currentMin = first
    var currentMax = first
    for value in array {
        if value < currentMin { currentMin = value }
        if value > currentMax { currentMax = value }
    }
    return (currentMin, currentMax)
}

if let bounds = minMax(array: [3, 7, 1, 9, 4]) {
    print("Min: \(bounds.min), Max: \(bounds.max)")
}
```

### Function Types

Every function has a type, composed of its parameter types and return type.

```swift
func add(_ a: Int, _ b: Int) -> Int { a + b }
func multiply(_ a: Int, _ b: Int) -> Int { a * b }

// Function type: (Int, Int) -> Int
var operation: (Int, Int) -> Int = add
print(operation(3, 4))   // 7

operation = multiply
print(operation(3, 4))   // 12

// Function type as parameter
func apply(_ a: Int, _ b: Int, _ f: (Int, Int) -> Int) -> Int {
    return f(a, b)
}
apply(3, 4, add)           // 7
apply(3, 4, multiply)      // 12
apply(3, 4, { $0 - $1 })   // -1

// Function type as return type
func stepped(increment: Bool) -> (Int) -> Int {
    if increment {
        return { $0 + 1 }
    } else {
        return { $0 - 1 }
    }
}
let stepUp = stepped(increment: true)
print(stepUp(5))           // 6
```

### Nested Functions

```swift
func selectOperation(_ mode: String) -> (Double, Double) -> Double {
    func add(_ a: Double, _ b: Double) -> Double { a + b }
    func subtract(_ a: Double, _ b: Double) -> Double { a - b }
    func multiply(_ a: Double, _ b: Double) -> Double { a * b }

    switch mode {
    case "add": return add
    case "subtract": return subtract
    case "multiply": return multiply
    default: return add
    }
}

let calc = selectOperation("add")
print(calc(3.0, 4.0))    // 7.0
```

## Closures

Closures are **self-contained blocks of code** that can capture and store references to constants
and variables from their surrounding context. Swift handles all memory management for captured
variables automatically.

### Closure Expression Syntax

```swift
// Full syntax
let greetFull = { (name: String) -> String in
    return "Hello, \(name)!"
}

// Inferring type from context
let names = ["Alice", "Bob", "Carol"]
let reversed = names.sorted(by: { (a: String, b: String) -> Bool in
    return a > b
})

// Implicit returns from single-expression closures
let sorted = names.sorted(by: { a, b in a > b })

// Shorthand argument names ($0, $1, ...)
let shortest = names.sorted(by: { $0.count < $1.count })

// Operator methods as closures
let alphabetical = names.sorted(by: <)
```

### Trailing Closure Syntax

When the last argument of a function is a closure, write it after the function call using trailing
closure syntax.

```swift
func transform(_ values: [Int], using closure: (Int) -> Int) -> [Int] {
    return values.map(closure)
}

// Trailing closure
let doubled = transform([1, 2, 3]) { $0 * 2 }  // [2, 4, 6]

// Multiple trailing closures (Swift 5.3+)
func load(url: String, onSuccess: (Data) -> Void, onFailure: (Error) -> Void) {
    // ...
}
load(url: "https://example.com") { data in
    print("Success: \(data.count) bytes")
} onFailure: { error in
    print("Failure: \(error)")
}
```

### Capturing Values

```swift
func makeCounter() -> () -> Int {
    var count = 0
    return {
        count += 1
        return count
    }
}

let counter = makeCounter()
print(counter())  // 1
print(counter())  // 2
print(counter())  // 3
// 'count' is captured and persists across calls

func makeIncrementer(increment amount: Int) -> () -> Int {
    var total = 0
    return {
        total += amount
        return total
    }
}

let incrementBy5 = makeIncrementer(increment: 5)
print(incrementBy5())  // 5
print(incrementBy5())  // 10
print(incrementBy5())  // 15
```

### Capturing List

Control how values are captured by using `[unowned self]` or `[weak self]`.

```swift
class NetworkManager {
    var requestCount = 0

    func fetchData(completion: @escaping () -> Void) {
        // Without capture list: strong reference to self
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.requestCount += 1
            completion()
        }

        // With capture list: weak reference (avoid retain cycle)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) { [weak self] in
            self?.requestCount += 1
            completion()
        }
    }
}
```

## Escaping Closures

A closure is **non-escaping** by default, meaning it is executed before the function returns. An
**escaping closure** is stored or executed after the function returns, requiring the `@escaping`
annotation.

```swift
// Non-escaping (default)
func perform(_ action: () -> Void) {
    action()  // Executed synchronously before return
}

// Escaping -- closure outlives the function
class EventStore {
    var handlers: [() -> Void] = []

    func subscribe(_ handler: @escaping () -> Void) {
        handlers.append(handler)  // Stored for later execution
    }

    func notify() {
        handlers.forEach { $0() }
    }
}

// Escaping with async work
func download(url: String, completion: @escaping (Result<Data, Error>) -> Void) {
    URLSession.shared.dataTask(with: URL(string: url)!) { data, response, error in
        if let data {
            completion(.success(data))
        } else if let error {
            completion(.failure(error))
        }
    }.resume()
}
```

### @escaping and Sendable (Swift 5.6+)

```swift
// Swift 6 requires Sendable for closures sent across concurrency boundaries
func submitTask(_ work: @escaping @Sendable () -> Void) {
    Task.detached {
        work()
    }
}
```

## Autoclosures

An `@autoclosure` wraps an expression in a closure, deferring evaluation until the closure is
called.

```swift
// Evaluates condition lazily
func assert(_ condition: @autoclosure () -> Bool, _ message: String) {
    if !condition() {
        print("Assertion failed: \(message)")
    }
}

var debugMode = false
assert(debugMode, "Debug mode should be on")
// The expression `debugMode` is only evaluated inside assert()

// @autoclosure + @escaping
func collect(operations: inout [@escaping () -> Void], _ op: @autoclosure @escaping () -> Void) {
    operations.append(op)
}
```

## Higher-Order Functions

Swift provides several higher-order functions on collections.

### map

```swift
let prices = [10.0, 20.0, 30.0]
let withTax = prices.map { $0 * 1.2 }
// [12.0, 24.0, 36.0]

// Map with index
let indexed = prices.enumerated().map { (index, price) in
    "\(index + 1). $\(price)"
}
// ["1. $10.0", "2. $20.0", "3. $30.0"]

// flatMap for flattening nested arrays
let nested = [[1, 2], [3], [4, 5, 6]]
let flat = nested.flatMap { $0 }
// [1, 2, 3, 4, 5, 6]

// flatMap for filtering nil from optionals
let inputs: [String?] = ["42", nil, "hello", "7", nil]
let numbers = inputs.compactMap { $0.flatMap(Int.init) }
// [42, 7]

// compactMap -- filter out nil, unwrap non-nil
let possibleNumbers = ["1", "two", "3", "four", "5"]
let validNumbers = possibleNumbers.compactMap { Int($0) }
// [1, 3, 5]
```

### filter

```swift
let scores = [45, 82, 67, 91, 55, 78, 93, 60]
let passing = scores.filter { $0 >= 60 }
// [82, 67, 91, 78, 93, 60]

let highScorers = scores.filter { $0 >= 80 }.sorted(by: >)
// [93, 91, 82]
```

### reduce

```swift
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce(0, +)               // 15
let product = numbers.reduce(1, *)            // 120
let joined = ["Hello", "World"].reduce("", { $0 + " " + $1 })
// " Hello World"

// reduce(into:) for efficiency
let grouped: [Character: [Int]] = [1, 2, 3, 4, 5].reduce(into: [:]) { result, number in
    let key = number % 2 == 0 ? "e" : "o"
    result[key, default: []].append(number)
}
// ["o": [1, 3, 5], "e": [2, 4]]
```

### contains, first, allSatisfy

```swift
let words = ["apple", "banana", "cherry", "avocado"]
words.contains { $0.hasPrefix("a") }           // true
words.first { $0.count > 5 }                  // "banana"
words.allSatisfy { $0.count > 2 }             // true
```

### forEach

```swift
let names = ["Alice", "Bob", "Carol"]
names.forEach { print("Hello, \($0)") }

// Note: cannot use break or continue in forEach
// Use for-in if you need control flow
```

### Chaining Higher-Order Functions

```swift
let students = [
    (name: "Alice", score: 92),
    (name: "Bob", score: 78),
    (name: "Carol", score: 95),
    (name: "Dave", score: 82),
    (name: "Eve", score: 61)
]

let honours = students
    .filter { $0.score >= 80 }
    .sorted { $0.score > $1.score }
    .map { "\($0.name): \($0.score)" }
// ["Carol: 95", "Alice: 92", "Dave: 82"]
```

## Property Wrappers

Property wrappers encapsulate get/set logic in a reusable wrapper type. SwiftUI relies heavily on
property wrappers.

### Creating a Custom Property Wrapper

```swift
@propertyWrapper
struct Capitalized {
    private var value: String = ""

    var wrappedValue: String {
        get { value }
        set { value = newValue.capitalized }
    }

    init(wrappedValue: String) {
        self.wrappedValue = wrappedValue
    }
}

struct UserProfile {
    @Capitalized var firstName: String
    @Capitalized var lastName: String
}

var profile = UserProfile(firstName: "alice", lastName: "smith")
print(profile.firstName)    // Alice
print(profile.lastName)     // Smith
```

### Projected Value

```swift
@propertyWrapper
struct Clamped<Value: Comparable> {
    var wrappedValue: Value {
        didSet { wrappedValue = min(max(wrappedValue, range.lowerBound), range.upperBound) }
    }

    let range: ClosedRange<Value>

    var projectedValue: ClosedRange<Value> { range }

    init(wrappedValue: Value, range: ClosedRange<Value>) {
        self.range = range
        self.wrappedValue = min(max(wrappedValue, range.lowerBound), range.upperBound)
    }
}

struct GameSettings {
    @Clamped(range: 0...100) var volume: Int = 50
}

var settings = GameSettings()
print(settings.volume)           // 50
settings.volume = 150
print(settings.volume)           // 100 (clamped)
print(settings.$volume)          // 0...100 (projected value)
```

### SwiftUI Property Wrappers

```swift
import SwiftUI

struct CounterView: View {
    // @State: Local state, value type, view-owned
    @State private var count = 0

    // @Binding: Two-way binding to a parent's state
    // Used in child views

    // @ObservedObject: Reference type conforming to ObservableObject
    @ObservedObject var viewModel = GameViewModel()

    // @StateObject: Owns and creates the ObservableObject
    @StateObject var manager = DataManager()

    // @EnvironmentObject: Injected from parent hierarchy
    @EnvironmentObject var appSettings: AppSettings

    // @Environment: Read system/environment values
    @Environment(\.colorScheme) var colorScheme
    @Environment(\.dismiss) var dismiss

    // @FetchRequest: Core Data query
    // @ScaledMetric: Dynamic type scaling
    // @FocusState: Keyboard focus management

    var body: some View {
        VStack {
            Text("Count: \(count)")
            Button("Increment") { count += 1 }
        }
    }
}

// Binding example
struct ParentView: View {
    @State private var isOn = false

    var body: some View {
        ToggleView(isOn: $isOn)  // Pass binding
    }
}

struct ToggleView: View {
    @Binding var isOn: Bool

    var body: some View {
        Toggle("Feature", isOn: $isOn)
    }
}
```

## Key Paths

Key paths provide type-safe references to properties.

```swift
struct Person {
    let name: String
    var age: Int
}

let nameKeyPath = \Person.name
let ageKeyPath = \Person.age

let alice = Person(name: "Alice", age: 30)
print(alice[keyPath: nameKeyPath])  // Alice

// Key paths with arrays
let people = [
    Person(name: "Alice", age: 30),
    Person(name: "Bob", age: 25),
    Person(name: "Carol", age: 35)
]

let names = people.map(\.name)          // ["Alice", "Bob", "Carol"]
let sorted = people.sorted(by: \.age)   // [Bob(25), Alice(30), Carol(35)]

// Key paths in sorting and filtering
let adults = people.filter { $0[keyPath: \.age] >= 30 }
// [Alice(30), Carol(35)]
```

## Enumerations with Associated Values

### Basic Enums

```swift
enum CompassDirection {
    case north, south, east, west
}

var direction = CompassDirection.north
direction = .south  // Shorthand when type is known

switch direction {
case .north: print("Heading north")
case .south: print("Heading south")
case .east: print("Heading east")
case .west: print("Heading west")
}
```

### Enums with Associated Values

```swift
enum NetworkResponse {
    case success(data: Data, statusCode: Int)
    case failure(error: Error)
    case redirect(to: URL)
}

func handle(response: NetworkResponse) {
    switch response {
    case .success(let data, let code):
        print("Success (\(code)): \(data.count) bytes")
    case .failure(let error):
        print("Error: \(error.localizedDescription)")
    case .redirect(let url):
        print("Redirect to: \(url)")
    }
}
```

### Enums with Raw Values

```swift
enum Planet: Int {
    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune
}

let earthOrder = Planet.earth.rawValue  // 3

enum HTTPMethod: String {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case delete = "DELETE"
}

let method = HTTPMethod.post.rawValue  // "POST"

// Initialising from raw value
if let planet = Planet(rawValue: 3) {
    print(planet)  // earth
}
```

### Enums as Function Types

```swift
enum Operation {
    static func add(_ a: Double, _ b: Double) -> Double { a + b }
    static func subtract(_ a: Double, _ b: Double) -> Double { a - b }
    static func multiply(_ a: Double, _ b: Double) -> Double { a * b }
    static func divide(_ a: Double, _ b: Double) -> Double { a / b }
}

let compute: (Double, Double) -> Double = Operation.add
print(compute(3.0, 4.0))  // 7.0
```

## Call Operators and Subscripts

```swift
struct Matrix {
    let rows: Int, cols: Int
    var grid: [Double]

    init(rows: Int, cols: Int) {
        self.rows = rows
        self.cols = cols
        self.grid = Array(repeating: 0, count: rows * cols)
    }

    subscript(row: Int, col: Int) -> Double {
        get { grid[row * cols + col] }
        set { grid[row * cols + col] = newValue }
    }
}

var m = Matrix(rows: 3, cols: 3)
m[0, 1] = 5.0
print(m[0, 1])  // 5.0
```

## Summary

Swift functions are first-class values that can be stored, passed, and returned. Closures provide
inline function definitions with shorthand syntax. Escaping closures handle asynchronous work, while
property wrappers encapsulate storage logic. Higher-order functions (`map`, `filter`, `reduce`)
enable concise, expressive data transformations.
