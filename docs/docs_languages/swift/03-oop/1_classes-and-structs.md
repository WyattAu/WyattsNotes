---
title: Classes and Structs
description:
  'Swift OOP notes covering classes vs structs, properties, methods, inheritance, protocols,
  extensions, generics, and memory management with ARC.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Swift
categories:
  - Swift
slug: classes-and-structs
---

## Classes vs Structs

Swift provides both **classes** (reference types) and **structs** (value types). The choice between
them is a fundamental design decision.

| Feature         | Struct                      | Class                           |
| --------------- | --------------------------- | ------------------------------- |
| Type            | Value type                  | Reference type                  |
| Assignment      | Copied                      | Shared reference                |
| Inheritance     | No                          | Yes                             |
| Deinitialiser   | No                          | Yes (`deinit`)                  |
| Mutability      | Must use `var` + `mutating` | Properties always mutable       |
| Memory          | Stack (usually)             | Heap (ARC)                      |
| Identity        | No (`==` compares values)   | Yes (`===` compares references) |
| Implicit `init` | Yes (memberwise)            | No                              |

### Choosing Between Struct and Class

Use **structs** by default. Switch to **classes** when you need:

- Inheritance
- Shared mutable state (identity semantics)
- Objective-C interoperability
- Deinitialisation (`deinit`)

```swift
// Struct -- value type
struct Point {
    var x: Double
    var y: Double
}

var p1 = Point(x: 1.0, y: 2.0)
var p2 = p1          // Copy
p2.x = 10.0
print(p1.x)          // 1.0 (unchanged)

// Class -- reference type
class Dog {
    var name: String
    init(name: String) { self.name = name }
}

var d1 = Dog(name: "Rex")
var d2 = d1           // Same reference
d2.name = "Buddy"
print(d1.name)        // Buddy (changed)
print(d1 === d2)      // true (same object)
```

## Properties

### Stored Properties

```swift
struct Rectangle {
    var width: Double
    var height: Double

    // Lazy stored property -- initialised on first access
    lazy var area: Double = width * height
}

var rect = Rectangle(width: 10, height: 5)
print(rect.area)     // 50.0 (computed now)
```

### Computed Properties

```swift
struct Circle {
    var radius: Double

    // Read-only computed property
    var diameter: Double { radius * 2 }

    // Read-write computed property
    var circumference: Double {
        get { 2 * .pi * radius }
        set { radius = newValue / (2 * .pi) }
    }

    // Computed property with observer is NOT allowed
}

var circle = Circle(radius: 5)
print(circle.circumference)  // 31.4159...
circle.circumference = 62.83
print(circle.radius)         // 10.0
```

### Property Observers

```swift
class StepCounter {
    var totalSteps: Int = 0 {
        willSet {
            print("About to set to \(newValue)")
        }
        didSet {
            print("Changed from \(oldValue) to \(totalSteps)")
            if totalSteps > 10000 {
                print("Goal reached!")
            }
        }
    }
}

let counter = StepCounter()
counter.totalSteps = 200
// About to set to 200
// Changed from 0 to 200

counter.totalSteps = 10500
// About to set to 10500
// Changed from 200 to 10500
// Goal reached!
```

### Type Properties

```swift
struct Configuration {
    static let apiVersion = "v2"
    static var requestCount = 0

    static func reset() {
        requestCount = 0
    }

    class var description: String { "Configuration \(apiVersion)" }
}
```

## Methods

### Instance Methods

```swift
class Counter {
    var count = 0

    func increment() { count += 1 }
    func increment(by amount: Int) { count += amount }
    func reset() { count = 0 }
}
```

### Mutating Methods (Structs Only)

```swift
struct Point {
    var x: Double
    var y: Double

    mutating func moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }

    mutating func reset() {
        self = Point(x: 0, y: 0)
    }
}

var origin = Point(x: 0, y: 0)
origin.moveBy(dx: 3, dy: 4)
```

### Type Methods

```swift
struct MathHelpers {
    static func factorial(_ n: Int) -> Int {
        guard n > 0 else { return 1 }
        return n * factorial(n - 1)
    }

    static func isPrime(_ n: Int) -> Bool {
        guard n > 1 else { return false }
        for i in 2..<n where i * i <= n {
            if n % i == 0 { return false }
        }
        return true
    }
}
```

## Initialisation

### Memberwise Initialiser (Structs)

```swift
struct Person {
    let name: String
    var age: Int
}

// Auto-generated: Person(name:age:)
let alice = Person(name: "Alice", age: 30)
```

### Custom Initialisers

```swift
class Temperature {
    var celsius: Double

    init(celsius: Double) {
        self.celsius = celsius
    }

    init(fahrenheit: Double) {
        self.celsius = (fahrenheit - 32) * 5 / 9
    }

    init(kelvin: Double) {
        self.celsius = kelvin - 273.15
    }

    convenience init(fromString s: String) {
        if s.hasSuffix("F") {
            let val = Double(s.dropLast()) ?? 0
            self.init(fahrenheit: val)
        } else {
            let val = Double(s) ?? 0
            self.init(celsius: val)
        }
    }
}
```

### Required and Failable Initialisers

```swift
class Animal {
    let species: String

    required init(species: String) {
        self.species = species
    }

    // Failable initialiser
    convenience init?(species: String?) {
        guard let species, !species.isEmpty else { return nil }
        self.init(species: species)
    }
}

class Dog: Animal {
    let breed: String

    init(breed: String) {
        self.breed = breed
        super.init(species: "Dog")
    }

    // Must implement required initialiser
    required init(species: String) {
        self.breed = "Mixed"
        super.init(species: species)
    }
}
```

### Deinitialisation

```swift
class FileManager {
    let filename: String

    init(filename: String) {
        self.filename = filename
        print("Opened \(filename)")
    }

    deinit {
        print("Closed \(filename)")
    }
}

if true {
    let fm = FileManager(filename: "data.txt")
    print("Using file...")
}
// "Closed data.txt" printed automatically when fm goes out of scope
```

## Inheritance

```swift
class Vehicle {
    var speed: Double = 0
    let make: String

    init(make: String) { self.make = make }

    func describe() -> String { "\(make) moving at \(speed) km/h" }

    // Prevent override
    final func typeName() -> String { "Vehicle" }
}

class Car: Vehicle {
    var numberOfDoors: Int

    init(make: String, doors: Int) {
        self.numberOfDoors = doors
        super.init(make: make)
    }

    override func describe() -> String {
        return "\(make) (\(numberOfDoors)-door) at \(speed) km/h"
    }
}

class ElectricCar: Car {
    var batteryLevel: Double = 100

    override func describe() -> String {
        return "\(make) EV at \(speed) km/h (battery: \(batteryLevel)%)"
    }
}

let tesla = ElectricCar(make: "Tesla", doors: 4)
tesla.speed = 80
print(tesla.describe())  // Tesla EV at 80 km/h (battery: 100%)
```

### Overriding Properties

```swift
class Shape {
    var color: String = "black"
}

class ColoredShape: Shape {
    override var color: String {
        didSet {
            print("Color changed to \(color)")
        }
    }
}
```

## Protocols

Protocols define a **blueprint of methods, properties, and requirements** that conforming types must
implement. They are central to Swift's protocol-oriented programming paradigm.

### Defining Protocols

```swift
protocol Drawable {
    func draw()
}

protocol Resizable {
    var scale: Double { get set }
    func resize(by factor: Double)
}

protocol Identifiable {
    var id: UUID { get }
    var name: String { get }
}

protocol Configurable {
    static var defaultConfiguration: Self { get }
    init(configuration: Self)
}
```

### Protocol Conformance

```swift
protocol ShapeProtocol {
    var area: Double { get }
    func describe() -> String
}

struct Circle: ShapeProtocol {
    var radius: Double

    var area: Double { .pi * radius * radius }

    func describe() -> String {
        return "Circle (r=\(radius), area=\(area))"
    }
}

struct Rectangle: ShapeProtocol {
    var width: Double
    var height: Double

    var area: Double { width * height }

    func describe() -> String {
        return "Rectangle (\(width)x\(height), area=\(area))"
    }
}

// Polymorphism through protocols
let shapes: [ShapeProtocol] = [Circle(radius: 5), Rectangle(width: 4, height: 6)]
for shape in shapes {
    print(shape.describe())
}
```

### Protocol Extensions with Default Implementations

```swift
protocol Loggable {
    var logIdentifier: String { get }
    func log(_ message: String)
}

extension Loggable {
    func log(_ message: String) {
        print("[\(logIdentifier)] \(message)")
    }
}

// Now any type conforming to Loggable gets log() for free
struct UserService: Loggable {
    var logIdentifier: String { "UserService" }
}

let service = UserService()
service.log("User logged in")  // [UserService] User logged in
```

### Protocol Composition

```swift
protocol Named {
    var name: String { get }
}

protocol Aged {
    var age: Int { get }
}

protocol Employee: Named, Aged {
    var department: String { get }
}

func greet(_ person: some Named & Aged) {
    print("Hello, \(person.name). You are \(person.age) years old.")
}
```

### Existential Types (`any` and `some`)

```swift
// any -- existential (type-erased) container
func draw(_ shape: any ShapeProtocol) {
    shape.draw()
}

// some -- opaque type (caller doesn't know the concrete type)
func makeShape() -> some ShapeProtocol {
    return Circle(radius: 5)  // Concrete type hidden from caller
}
```

## Extensions

Extensions add new functionality to **existing types** without subclassing.

```swift
extension Double {
    var isInteger: Bool { self == rounded() }
    var squared: Double { self * self }
    func clamped(to range: ClosedRange<Double>) -> Double {
        return min(max(self, range.lowerBound), range.upperBound)
    }
}

let value = 3.7
print(value.isInteger)  // false
print(value.squared)   // 13.69
print(value.clamped(to: 0...3))  // 3.0

// Extension on String
extension String {
    var isEmail: Bool {
        return self.contains("@") && self.contains(".")
    }

    func masked() -> String {
        guard count > 2 else { return self }
        return String(self.prefix(2)) + String(repeating: "*", count: count - 2)
    }
}

print("hello@example.com".isEmail)  // true
print("secret".masked())             // "se****"
```

### Extensions with Protocol Conformance

```swift
extension Int: Loggable {
    var logIdentifier: String { "Int(\(self))" }
}

5.log("Logging from an integer")
```

## Generics

Generics write **flexible, reusable code** that works with any type while maintaining type safety.

### Generic Functions

```swift
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

var x = "hello", y = "world"
swapValues(&x, &y)

func firstElement<T>(of array: [T]) -> T? {
    return array.first
}

func identical<T: Equatable>(_ a: T, _ b: T) -> Bool {
    return a == b
}
```

### Generic Types

```swift
struct Stack<Element> {
    private var elements: [Element] = []

    var isEmpty: Bool { elements.isEmpty }
    var top: Element? { elements.last }
    var count: Int { elements.count }

    mutating func push(_ element: Element) {
        elements.append(element)
    }

    mutating func pop() -> Element? {
        return elements.popLast()
    }
}

var intStack = Stack<Int>()
intStack.push(1)
intStack.push(2)
print(intStack.pop())  // 2

var stringStack = Stack<String>()
stringStack.push("hello")
print(stringStack.top)  // Optional("hello")
```

### Generic Constraints

```swift
func findIndex<T: Equatable>(of value: T, in array: [T]) -> Int? {
    for (index, element) in array.enumerated() {
        if element == value { return index }
    }
    return nil
}

// Multiple constraints
protocol Container {
    associatedtype Item
    var count: Int { get }
    subscript(i: Int) -> Item { get }
}

func allItemsMatch<C1: Container, C2: Container>(
    _ c1: C1, _ c2: C2
) -> Bool where C1.Item: Equatable, C1.Item == C2.Item {
    guard c1.count == c2.count else { return false }
    for i in 0..<c1.count {
        if c1[i] != c2[i] { return false }
    }
    return true
}
```

### Associated Types

```swift
protocol IteratorProtocol {
    associatedtype Element
    mutating func next() -> Element?
}

struct CountdownIterator: IteratorProtocol {
    typealias Element = Int
    var current: Int

    mutating func next() -> Int? {
        guard current > 0 else { return nil }
        current -= 1
        return current + 1
    }
}

// some IteratorProtocol
func makeIterator() -> some IteratorProtocol {
    return CountdownIterator(current: 3)
}
```

## Memory Management -- ARC

Automatic Reference Counting (ARC) automatically manages memory for reference types.

### Strong References

```swift
class Person {
    let name: String
    init(name: String) { self.name = name }
    deinit { print("\(name) is being deallocated") }
}

var reference1: Person? = Person(name: "Alice")
// reference1 -> Alice (reference count: 1)
var reference2 = reference1
// reference count: 2
reference1 = nil
// reference count: 1 (still alive)
reference2 = nil
// reference count: 0 -> deallocated, deinit prints
```

### Strong Reference Cycles

```swift
class Person2 {
    let name: String
    var apartment: Apartment?
    init(name: String) { self.name = name }
    deinit { print("\(name) deallocated") }
}

class Apartment {
    let unit: String
    var tenant: Person2?
    init(unit: String) { self.unit = unit }
    deinit { print("Apartment \(unit) deallocated") }
}

// This creates a strong reference cycle
var john: Person2? = Person2(name: "John")
var unit4A: Apartment? = Apartment(unit: "4A")
john?.apartment = unit4A
unit4A?.tenant = john
john = nil
unit4A = nil
// Neither is deallocated -- memory leak!
```

### Resolving Cycles with weak and unowned

```swift
class Person3 {
    let name: String
    weak var apartment: Apartment2?
    init(name: String) { self.name = name }
    deinit { print("\(name) deallocated") }
}

class Apartment2 {
    let unit: String
    unowned let tenant: Person3
    init(unit: String, tenant: Person3) { self.unit = unit; self.tenant = tenant }
    deinit { print("Apartment \(unit) deallocated") }
}

var john2: Person3? = Person3(name: "John")
var unit4B: Apartment2? = Apartment2(unit: "4B", tenant: john2!)
john2?.apartment = unit4B
john2 = nil
unit4B = nil
// Both deallocated correctly
```

### weak vs unowned

- **`weak`**: Optional, reference can become nil at any time. Use when the referenced object might
  be deallocated before the reference.
- **`unowned`**: Non-optional, reference is assumed to never become nil during its lifetime. Use
  when the referenced object outlives the reference. Accessing a deallocated `unowned` reference
  crashes.

```swift
// weak -- use with optional
class Customer {
    weak var card: CreditCard?
}

// unowned -- use when lifecycle is guaranteed
class CreditCard {
    unowned let owner: Customer
    init(owner: Customer) { self.owner = owner }
}
```

## Access Control

| Level         | Same module              | Different module         |
| ------------- | ------------------------ | ------------------------ |
| `open`        | Yes (subclass, override) | Yes (subclass, override) |
| `public`      | Yes                      | Yes (use only)           |
| `internal`    | Yes                      | No                       |
| `fileprivate` | Same file                | No                       |
| `private`     | Same scope               | No                       |

```swift
open class PublicClass {
    public var name: String
    internal var id: String
    fileprivate var secret: String
    private var password: String

    public init(name: String, id: String, secret: String, password: String) {
        self.name = name
        self.id = id
        self.secret = secret
        self.password = password
    }
}
```

## Summary

Swift's type system separates value types (structs) from reference types (classes), each with
distinct semantics. Protocols and extensions enable flexible abstractions without inheritance.
Generics provide type-safe reusable code, and ARC manages reference type memory automatically.
Understanding these concepts is essential for designing robust, efficient Swift applications.
