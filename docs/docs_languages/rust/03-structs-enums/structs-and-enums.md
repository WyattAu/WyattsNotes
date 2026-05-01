---
id: structs-and-enums
title: Structs and Enums
description:
  Structs and Enums — Structs; Unit Structs; Tuple Structs; Named-Field Structs
  with worked examples and exam-style questions.
slug: structs-and-enums
---

## Structs

Structs are the primary mechanism for defining custom types in Rust. Unlike classes in C++ or Java,
structs in Rust do not support inheritance. Composition and trait-based polymorphism are the
idiomatic alternatives.

### Unit Structs

Unit structs have no fields. They are useful as marker types or phantom types:

```rust
struct Marker;
struct Benchmark;

impl Marker {
    fn describe(&self) -> &'static str {
        "I am a marker type"
    }
}
```

Unit structs have size 0 (they are zero-sized types). This makes them free to create and pass around
— the compiler optimizes away all storage for them.

```rust
assert_eq!(std::mem::size_of::<Marker>(), 0);
```

### Tuple Structs

Tuple structs are named tuples. Each field is unnamed but accessible by index:

```rust
struct Point(f64, f64);

impl Point {
    fn distance_from_origin(&self) -> f64 {
        (self.0 * self.0 + self.1 * self.1).sqrt()
    }
}

let p = Point(3.0, 4.0);
assert_eq!(p.distance_from_origin(), 5.0);
```

Tuple structs with a single field implement the **newtype pattern**, creating a distinct type from
the wrapped type:

```rust
struct UserId(u64);
struct OrderId(u64);

fn get_user(id: UserId) { /* ... */ }

let uid = UserId(42);
let oid = OrderId(99);
get_user(uid);   // OK
// get_user(oid);  // ERROR: expected UserId, found OrderId
```

This is type-safe and zero-cost — the compiler eliminates the wrapper at optimization time.

### Named-Field Structs

The most common form of struct definition:

```rust
struct Person {
    name: String,
    age: u32,
    email: Option<String>,
}

let alice = Person {
    name: String::from("Alice"),
    age: 30,
    email: Some(String::from("alice@example.com")),
};

println!("{} is {}", alice.name, alice.age);
```

#### Field Init Shorthand

When the variable name matches the field name, you can use the shorthand:

```rust
fn make_person(name: String, age: u32) -> Person {
    Person { name, age, email: None }
}
```

#### Struct Update Syntax

Create a new struct from an existing one, overriding specific fields:

```rust
let bob = Person {
    name: String::from("Bob"),
    ..alice  // remaining fields copied from alice
};
// bob.name == "Bob", bob.age == 30, bob.email == Some("alice@example.com")
```

Struct update syntax moves the remaining fields. After `..alice`, the `alice` binding can no longer
be used in its entirety (it is partially moved), but individual `Copy` fields remain accessible.

### Struct Layout and `#[repr]`

By default, the compiler is free to reorder fields and add padding for alignment. The `#[repr]`
attribute controls the memory layout:

```rust
#[repr(C)]      // C-compatible layout — fields in declaration order, C alignment rules
struct Color {
    r: u8,
    g: u8,
    b: u8,
}

#[repr(transparent)]  // has the same layout as the single field inside
struct Wrapper(u32);

#[repr(packed)]   // no padding — fields are packed tightly (may cause unaligned access)
struct Packed {
    a: u8,
    b: u32,       // at offset 1, not offset 4 — misaligned on most platforms
}

#[repr(align(16))]  // forced alignment of 16 bytes
struct Aligned {
    data: [u8; 32],
}
```

:::warning

`#[repr(packed)]` makes every field reference potentially misaligned. Accessing a `packed` struct's
fields through references requires `unsafe` because the compiler cannot guarantee alignment for
dereferences. Use `#[repr(packed(2))]` or similar to specify minimum alignment.

:::

### Visibility

By default, all struct fields are private (visible only within the module where the struct is
defined). Use `pub` to make fields public:

```rust
mod geometry {
    pub struct Circle {
        pub radius: f64,   // public — accessible from other modules
        center: Point,      // private — only accessible within this module
    }

    impl Circle {
        pub fn new(radius: f64, center: Point) -> Self {
            Circle { radius, center }
        }

        pub fn area(&self) -> f64 {
            std::f64::consts::PI * self.radius * self.radius
        }
    }
}
```

Note: making a struct `pub` does not make its fields `pub`. Each field must be individually marked
as `pub`. This is different from C++ where `public:` in a class definition makes all subsequent
members public.

### Methods and Associated Functions

Methods are defined inside `impl` blocks:

```rust
struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    // Associated function (no self parameter) — like a static method
    fn new(width: f64, height: f64) -> Self {
        Rectangle { width, height }
    }

    fn square(size: f64) -> Self {
        Rectangle { width: size, height: size }
    }

    // Method taking immutable reference
    fn area(&self) -> f64 {
        self.width * self.height
    }

    // Method taking mutable reference
    fn scale(&mut self, factor: f64) {
        self.width *= factor;
        self.height *= factor;
    }

    // Method taking ownership
    fn into_components(self) -> (f64, f64) {
        (self.width, self.height)
    }
}

let r = Rectangle::new(3.0, 4.0);
assert_eq!(r.area(), 12.0);
```

### Multiple `impl` Blocks

A type can have multiple `impl` blocks. This is useful for organizing methods by functionality or
for separating trait implementations from inherent methods:

```rust
impl Rectangle {
    fn area(&self) -> f64 { self.width * self.height }
}

impl Rectangle {
    fn perimeter(&self) -> f64 {
        2.0 * (self.width + self.height)
    }
}
```

### Method Dispatch

Rust uses static dispatch by default — the compiler knows the exact type at the call site and
monomorphizes the code. Trait methods called through `dyn Trait` use dynamic dispatch via vtable
indirection.

```rust
trait Shape {
    fn area(&self) -> f64;
}

struct Circle { radius: f64 }
impl Shape for Circle {
    fn area(&self) -> f64 { std::f64::consts::PI * self.radius * self.radius }
}

// Static dispatch — no vtable
let c = Circle { radius: 5.0 };
let a = c.area();  // compiler generates Circle::area directly

// Dynamic dispatch — vtable lookup
let s: &dyn Shape = &Circle { radius: 5.0 };
let a = s.area();  // indirect call through vtable
```

## Enums

Enums are algebraic data types (sum types). Each variant can optionally carry data. Rust enums are
discriminated unions — the compiler stores a tag (discriminant) to identify which variant is active.

### Unit Variants

```rust
enum Direction {
    North,
    East,
    South,
    West,
}

let d = Direction::North;
```

### Tuple Variants

```rust
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);
let loopback = IpAddr::V6(String::from("::1"));
```

### Struct Variants

```rust
enum Shape {
    Circle { radius: f64 },
    Rectangle { width: f64, height: f64 },
    Point { x: f64, y: f64 },
}

let s = Shape::Circle { radius: 5.0 };
```

### Mixed Variants

```rust
enum Event {
    Click,                           // unit
    KeyPress(char),                  // tuple
    Resize { width: u32, height: u32 },  // struct
}
```

### Enum Memory Layout

The compiler stores a discriminant tag alongside the variant data. The default discriminant type is
the smallest integer that can represent all variants:

```rust
enum Color {
    Red,    // 0
    Green,  // 1
    Blue,   // 2
}
// sizeof(Color) == 1 (tag only, no data)

enum Payload {
    None,               // 0 — no data
    Integer(i64),       // 1 — 8 bytes of data
    Text(String),       // 2 — 24 bytes (ptr + len + cap)
}
// sizeof(Payload) == 32 (8 bytes tag + 24 bytes data, with padding)
```

You can control the discriminant with `#[repr]`:

```rust
#[repr(u8)]
enum Status {
    Ok = 0,
    Err = 1,
    Pending = 2,
}
```

### Enums with Data

Enums that carry data are one of Rust's most powerful features. The standard library's `Option` and
`Result` are both enums:

```rust
enum Option<T> {
    None,
    Some(T),
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Custom enums with data are equally powerful:

```rust
enum Expr {
    Literal(i64),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
    Var(String),
}

fn eval(expr: &Expr, env: &std::collections::HashMap<String, i64>) -> i64 {
    match expr {
        Expr::Literal(n) => *n,
        Expr::Add(l, r) => eval(l, env) + eval(r, env),
        Expr::Mul(l, r) => eval(l, env) * eval(r, env),
        Expr::Var(name) => env.get(name).copied().unwrap_or(0),
    }
}
```

Note the use of `Box<Expr>` — without boxing, the enum would be infinitely sized because `Expr`
contains itself recursively.

## Pattern Matching

Pattern matching is Rust's primary control flow mechanism for enums and is exhaustively checked by
the compiler.

### `match` Expressions

```rust
enum Color {
    Red,
    Green,
    Blue,
}

fn color_to_rgb(c: Color) -> (u8, u8, u8) {
    match c {
        Color::Red => (255, 0, 0),
        Color::Green => (0, 255, 0),
        Color::Blue => (0, 0, 255),
    }
}
```

The compiler verifies that every variant is handled. If you add a new variant to `Color`, every
`match` on `Color` will produce a compile error until updated. This is exhaustive pattern matching.

### Match Ergonomics (Rust 2021+)

Match ergonomics automatically add `&` and `ref` patterns when matching through references:

```rust
let c = Color::Red;
let r: &Color = &c;

match r {
    Color::Red => println!("red"),
    // Before match ergonomics: &Color::Red => ...
    // Now: Color::Red => ... (compiler auto-refs)
}
```

### Match Guards

A match guard is an additional `if` condition on a match arm:

```rust
let num = Some(4);

match num {
    Some(x) if x < 5 => println!("less than five: {}", x),
    Some(x) => println!("{}", x),
    None => println!("none"),
}
```

Match guards do not participate in exhaustiveness checking. The compiler cannot prove that a guard
will always match for a given variant, so you may still need a catch-all arm.

### Binding Modes

#### `ref` — Borrow Instead of Move

```rust
struct Point { x: i32, y: i32 }
let p = Point { x: 1, y: 2 };

match p {
    Point { x: 0, y: 0 } => println!("origin"),
    Point { ref x, ref y } => println!("x={}, y={}", x, y),
    // x and y are &i32, p is not moved
}
```

#### `mut` — Mutable Binding

```rust
let mut v = vec![1, 2, 3];
match v {
    ref mut v => v.push(4),  // borrow v mutably and push
}
assert_eq!(v, vec![1, 2, 3, 4]);
```

#### `@` — At Bindings

The `@` operator binds a value to a name while also testing it against a pattern:

```rust
let age = 15;

match age {
    0 => println!("zero"),
    n @ 1..=12 => println!("child of age {}", n),
    n @ 13..=19 => println!("teenager of age {}", n),
    n => println!("adult of age {}", n),
}
```

This is especially useful when you need to destructure and also capture the whole value:

```rust
enum Value {
    Number(i64),
    Text(String),
}

let v = Value::Number(42);

match v {
    Value::Number(n @ 0..=100) => println!("small number: {}", n),
    Value::Number(n) => println!("large number: {}", n),
    Value::Text(s) => println!("text: {}", s),
}
```

### Range Patterns

```rust
let x = 5;

match x {
    1..=5 => println!("one through five"),
    6..=10 => println!("six through ten"),
    _ => println!("something else"),
}
```

Range patterns only work on numeric types and `char`. They are inclusive on both ends.

### Destructuring Tuples in Matches

```rust
let pair = (2, -2);

match pair {
    (0, y) => println!("x is zero, y is {}", y),
    (x, 0) => println!("x is {}, y is zero", x),
    (x, y) if x == y => println!("equal: {}", x),
    (x, y) => println!("different: {} and {}", x, y),
}
```

### Destructuring Structs in Matches

```rust
struct Point { x: f64, y: f64 }
let p = Point { x: 0.0, y: 7.0 };

match p {
    Point { x: 0.0, y } => println!("on the y-axis at {}", y),
    Point { x, y: 0.0 } => println!("on the x-axis at {}", x),
    Point { x, y } => println!("at ({}, {})", x, y),
}
```

### `if let` — Single Pattern Matching

When you only care about one variant, `if let` is more concise than `match`:

```rust
let some_value = Some(7);

if let Some(n) = some_value {
    println!("value is {}", n);
}
```

`if let` does not check exhaustiveness. The else branch handles all non-matching cases:

```rust
if let Some(n) = some_value {
    println!("value is {}", n);
} else {
    println!("no value");
}
```

### `let-else` (Rust 1.65+)

`let-else` combines pattern matching with early return:

```rust
fn process(data: Option<Vec<i32>>) -> i32 {
    let Some(values) = data else {
        return 0;
    };
    values.iter().sum()
}
```

The `else` block must diverge (return, break, continue, panic, or loop). This is cleaner than the
equivalent `match` with a single arm and a fallback.

### `while let` — Repeated Pattern Matching

```rust
let mut stack = Vec::new();
stack.push(1);
stack.push(2);
stack.push(3);

while let Some(top) = stack.pop() {
    println!("{}", top);
}
```

`while let` runs the loop body as long as the pattern matches. When it stops matching, the loop
ends.

### `matches!` Macro

The `matches!` macro is a concise way to check whether a value matches a pattern:

```rust
let x = Some(5);

assert!(matches!(x, Some(5)));
assert!(matches!(x, Some(_)));
assert!(!matches!(x, None));
assert!(matches!(x, Some(n) if n > 3));
```

### `Option` and `Result` Matching

```rust
// Option matching
fn maybe_double(x: Option<i32>) -> Option<i32> {
    match x {
        Some(n) => Some(n * 2),
        None => None,
    }
}

// Result matching
fn parse_int(s: &str) -> Result<i32, std::num::ParseIntError> {
    match s.parse::<i32>() {
        Ok(n) => Ok(n),
        Err(e) => Err(e),
    }
}
```

In practice, you rarely write explicit `match` for `Option` and `Result`. Combinator methods and the
`?` operator are more idiomatic:

```rust
fn maybe_double(x: Option<i32>) -> Option<i32> {
    x.map(|n| n * 2)
}

fn parse_and_double(s: &str) -> Result<i32, std::num::ParseIntError> {
    let n: i32 = s.parse()?;
    Ok(n * 2)
}
```

## Deriving Traits

The `#[derive]` attribute auto-generates implementations for common traits:

```rust
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
struct User {
    id: u64,
    name: String,
    email: String,
}
```

| Trait        | What it generates                                              |
| ------------ | -------------------------------------------------------------- |
| `Debug`      | `fmt::Debug` for `{:?}` formatting                             |
| `Clone`      | `clone()` — deep copy (requires all fields to be `Clone`)      |
| `Copy`       | Implicit bitwise copy (requires `Clone`, no `Drop`)            |
| `PartialEq`  | `==` and `!=` — structural equality                            |
| `Eq`         | Marks type as having reflexive equality (requires `PartialEq`) |
| `PartialOrd` | `&lt;`, `&gt;`, `&lt;=`, `&gt;=` — derived from field order    |
| `Ord`        | Total ordering (requires `PartialOrd`, `Eq`)                   |
| `Hash`       | Hash function for `HashMap`/`HashSet` keys                     |
| `Default`    | Default value (all fields must implement `Default`)            |

:::warning

Deriving `PartialOrd` compares fields in declaration order. If you change the order of fields in the
struct, the derived ordering changes. Deriving `Ord` on a struct with a `f64` field will fail
because `f64` does not implement `Ord`. Use a custom implementation or wrap the field in the
`ordered-float` crate's `OrderedFloat` type instead.

:::

### Custom Derive

You can implement custom derive macros. The `derive` crate ecosystem includes `serde::Serialize`,
`serde::Deserialize`, `thiserror::Error`, and many more. These work by procedural macro expansion at
compile time.

## The Newtype Pattern

The newtype pattern wraps an existing type in a tuple struct to provide type safety, implement
different traits, or add domain-specific behavior:

```rust
struct Millimeters(u32);
struct Meters(u32);

impl Meters {
    fn to_millimeters(&self) -> Millimeters {
        Millimeters(self.0 * 1000)
    }
}

fn measure(distance: Millimeters) {
    println!("{}mm", distance.0);
}

let m = Meters(5);
measure(m.to_millimeters());  // OK
// measure(m);  // ERROR: expected Millimeters, found Meters
```

### Newtype for Trait Implementation

You can implement traits on newtypes that the wrapped type does not implement:

```rust
struct Wrapper(Vec<String>);

impl std::fmt::Display for Wrapper {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "[{}]", self.0.join(", "))
    }
}

let w = Wrapper(vec![String::from("hello"), String::from("world")]);
println!("{}", w);  // [hello, world]
```

## Enums with Methods

Enums can have `impl` blocks just like structs:

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(u8, u8, u8),
}

impl Message {
    fn process(&self) {
        match self {
            Message::Quit => println!("quitting"),
            Message::Move { x, y } => println!("moving to ({}, {})", x, y),
            Message::Write(text) => println!("writing: {}", text),
            Message::ChangeColor(r, g, b) => {
                println!("changing color to ({}, {}, {})", r, g, b)
            }
        }
    }
}
```

## Visibility in Depth

Rust's visibility system is based on modules, not classes. The `pub` keyword makes an item visible
to the parent module. To make an item visible to the entire crate, use `pub(crate)`. To make it
visible to a specific module, use `pub(in path)`.

```rust
mod network {
    pub mod tcp {
        pub struct Connection {
            pub stream: TcpStream,         // visible everywhere
            pub(crate) buffer: Vec<u8>,    // visible within the crate
            pub(super) state: State,       // visible in parent module (network)
            local_addr: SocketAddr,        // private — only visible in tcp
        }
    }
}
```

### Re-exporting

Use `pub use` to re-export items from another module, making them accessible under the current
module's path:

```rust
mod internal {
    pub struct Config {
        pub debug: bool,
    }
}

pub use internal::Config;  // Config is now available as crate::Config
```

This is commonly used to flatten module hierarchies and provide a clean public API that differs from
the internal organization.

## `Option<T>` Deep Dive

`Option<T>` represents a value that may or may not be present. It is defined as:

```rust
enum Option<T> {
    None,
    Some(T),
}
```

### `Option` Combinators

```rust
let x: Option<i32> = Some(2);

x.map(|n| n * 2);                    // Some(4)
x.and_then(|n| if n > 0 { Some(n) } else { None }); // Some(2)
x.filter(|&n| n > 1);                // Some(2)
x.unwrap_or(0);                       // 2
x.unwrap_or_else(|| expensive_fall()); // 2 (fallthrough only evaluated for None)
x.ok_or("error");                    // Ok(2)
x.as_ref();                           // Some(&2)
x.as_mut();                           // Some(&mut 2)
x.is_some();                          // true
x.is_none();                          // false

let y: Option<i32> = None;
y.map(|n| n * 2);                    // None
y.unwrap_or(0);                       // 0
```

### `Option` and the Question Mark Operator

The `?` operator works with `Option` in functions that return `Option`:

```rust
fn first_even(nums: &[i32]) -> Option<i32> {
    nums.iter()
        .find(|&&n| n % 2 == 0)?;  // returns None if find returns None
    let &n = nums.iter().find(|&&n| n % 2 == 0)?;
    Some(n)
}
```

## `Result<T, E>` Deep Dive

`Result<T, E>` represents an operation that can either succeed (`Ok(T)`) or fail (`Err(E)`):

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

### `Result` Combinators

```rust
let r: Result<i32, &str> = Ok(42);

r.map(|n| n * 2);                    // Ok(84)
r.map_err(|e| format!("error: {}", e)); // Ok(42)
r.and_then(|n| if n > 0 { Ok(n) } else { Err("negative") }); // Ok(42)
r.unwrap_or(0);                       // 42
r.unwrap_or_else(|e| { e.len() });    // 42
r.as_ref();                           // Ok(&42)
r.is_ok();                            // true
r.is_err();                           // false

let e: Result<i32, &str> = Err("bad");
e.unwrap_or(0);                       // 0
e.unwrap_or_default();                // 0 (requires T: Default)
```

### Converting Between `Option` and `Result`

```rust
let opt: Option<i32> = Some(42);
let res: Result<i32, &str> = opt.ok_or("missing value"); // Ok(42)

let res: Result<i32, &str> = Ok(42);
let opt: Option<i32> = res.ok(); // Some(42)
```

## Common Pitfalls

1. **Forgetting to handle all enum variants.** The compiler will error if a `match` is not
   exhaustive. Add a `_ =>` catch-all only when it makes semantic sense — it hides future variant
   additions. Prefer explicit handling of every variant for types you control.

2. **Struct update syntax and partial moves.** `Struct { ..other }` moves the remaining fields. If
   `other` has any `Drop` types, the entire struct is considered partially moved and cannot be used
   as a whole afterward. This is correct behavior — you have transferred ownership of some fields.

3. **Matching on references without understanding match ergonomics.** Pre-2021 Rust required
   explicit `&` in patterns when matching through references. Match ergonomics simplify this, but
   can be confusing when you need to capture a reference vs. a value. If the compiler suggests
   adding `ref`, pay attention — it is telling you that a move would occur otherwise.

4. **Using `unwrap()` in production code.** `unwrap()` panics on `None`/`Err`. Panics are for
   unrecoverable programming errors (bugs), not for expected failure modes. Use `?`, `unwrap_or`,
   `unwrap_or_else`, or pattern matching for expected failures.

5. **Enum size explosion.** An enum's size is the size of its largest variant plus the discriminant,
   aligned to the largest variant's alignment. If one variant is much larger than the others (e.g.,
   a `String` variant alongside `u8` variants), consider boxing the large variant: `Large(String)`
   vs `Large(Box&lt;String&gt;)`.

6. **Deriving traits on enums with non-unit variants.** `#[derive(PartialEq)]` compares variant
   discriminants first, then compares the inner data. For structs, it compares field-by-field. If
   your type contains `f64`, you cannot derive `Eq` or `Ord` because `f64` does not implement them.

7. **Not using `if let`/`let-else` when appropriate.** A `match` with a single non-trivial arm and a
   `_ =>` catch-all is less readable than an `if let` or `let-else`. Use `match` when you need
   exhaustive handling; use `if let`/`let-else` for focused pattern extraction.

8. **Overusing `Option` for boolean semantics.** `Option<bool>` has three states: `None`,
   `Some(true)`, `Some(false)`. If you need three states, use an enum instead — it is clearer and
   self-documenting.

9. **Pattern binding shadowing.** In match arms, the binding name shadows any outer binding with the
   same name. This can lead to confusion when the same variable name appears in multiple arms:

   ```rust
   let x = 5;
   match x {
       0 => {
           let x = "zero";  // shadows outer x
           println!("{}", x); // "zero"
       }
       n => println!("{}", n), // n is a new binding, not the outer x
   }
   ```

10. **Enum variants are not types.** You cannot write `fn takes_v4(addr: IpAddr::V4)`. Enum variants
    are not types — they are constructors. Use the full enum type and pattern match inside the
    function body, or use a newtype wrapper around the variant.
