---
id: error-handling
title: Error Handling
description:
  Error Handling — Panic vs Result; Panics; Stack Unwinding vs Abort;
  `std::panic::catch_unwind` with worked examples and exam-style questions.
slug: error-handling
---

## Panic vs Result

Rust divides errors into two categories: **unrecoverable** (bugs) and **recoverable** (expected
failures).

### Panics

Panics are for unrecoverable programming errors — the kind of bugs where the program cannot continue
correctly. When a panic occurs, the runtime unwinds the stack (by default), calling destructors for
all live values, and then aborts the thread (or the process in `panic = "abort"` mode).

```rust
fn main() {
    panic!("this is a deliberate crash");
}
```

Common panic sources:

- `unwrap()` on `None` or `Err`
- Array index out of bounds
- Integer overflow in debug mode
- `assert!`, `assert_eq!`, `assert_ne!` failures
- Calling `panic!` directly
- Division by zero

### Stack Unwinding vs Abort

The default panic strategy is unwinding (destructors run). You can set `panic = "abort"` in
`Cargo.toml` to terminate immediately without unwinding:

```toml
[profile.release]
panic = "abort"
```

Trade-offs:

- **Unwinding**: Safe cleanup (destructors run, `Drop::drop` is called), larger binary size (unwind
  tables), slightly slower.
- **Abort**: Smaller binary, faster, but no cleanup. File handles, network connections, and locks
  may not be released properly.

For embedded and `no_std` targets, `panic = "abort"` is often the only option.

### `std::panic::catch_unwind`

You can catch panics in the current thread:

```rust
use std::panic;

fn may_panic() -> i32 {
    panic!("crash");
}

let result = panic::catch_unwind(may_panic);
assert!(result.is_err());
```

:::warning

`catch_unwind` only works if the panicked code was compiled with unwinding support. It does not work
across FFI boundaries (panics through C callbacks are undefined behavior). It is also not a
substitute for proper error handling — use it sparingly, typically for plugin systems or process
isolation.

:::

## `unwrap` and `expect`

```rust
let some_value: Option<i32> = Some(42);
some_value.unwrap();    // 42 — panics on None
some_value.expect("value should exist");  // 42 — panics with message on None

let result: Result<i32, &str> = Ok(10);
result.unwrap();        // 10 — panics on Err
result.expect("parse should succeed"); // 10 — panics with message on Err
```

:::tip

Use `expect()` instead of `unwrap()` everywhere. The message serves as documentation about why the
value should exist and makes debugging easier when the panic occurs.

:::

### When `unwrap` Is Acceptable

- In `main()` or tests where a panic terminates the program gracefully
- When you have already validated the precondition (e.g., after an `if` check)
- In prototypes and examples where error handling would obscure the logic

```rust
#[test]
fn test_addition() {
    let result = add(2, 3);
    assert_eq!(result.unwrap(), 5);
}
```

## `Option` Combinators

### `map` and `and_then`

```rust
let x: Option<i32> = Some(2);

x.map(|n| n * 2);          // Some(4)
x.map(|n| n.to_string());  // Some("2")

x.and_then(|n| {
    if n > 0 { Some(n * 2) } else { None }
});  // Some(4)
```

`map` transforms the inner value if `Some`, passes through `None`. `and_then` (also known as
`flatMap` or `bind`) chains operations that may fail — if the first operation returns `None`, the
entire chain short-circuits.

### `unwrap_or` and `unwrap_or_else`

```rust
let x: Option<i32> = None;

x.unwrap_or(0);              // 0 — always evaluated
x.unwrap_or_else(|| {
    println!("computing default");
    expensive_computation()   // only evaluated for None
});
```

Use `unwrap_or_else` when the default value is expensive to compute. The closure is called lazily
only when the `Option` is `None`.

### `ok_or` and `ok_or_else`

Convert `Option` to `Result` by specifying the error type:

```rust
let x: Option<i32> = Some(42);
let r: Result<i32, &str> = x.ok_or("missing value");  // Ok(42)

let y: Option<i32> = None;
let r: Result<i32, &str> = y.ok_or("missing value");  // Err("missing value")

let r: Result<i32, String> = y.ok_or_else(|| {
    format!("value missing at line {}", line_number)
});
```

### `filter`, `zip`, `unzip`

```rust
let x: Option<i32> = Some(5);
x.filter(|&n| n > 3);       // Some(5)
x.filter(|&n| n > 10);      // None

let a = Some(1);
let b = Some(2);
let c: Option<(i32, i32)> = a.zip(b);  // Some((1, 2))

let pair = Some((1, 2));
let (first, second): (Option<i32>, Option<i32>) = pair.unzip();
// first == Some(1), second == Some(2)
```

### `is_some`, `is_none`, `as_ref`, `as_mut`

```rust
let x: Option<String> = Some("hello".to_string());

x.is_some();   // true
x.is_none();   // false

let r: Option<&String> = x.as_ref();   // Some(&String)
let m: Option<&mut String> = x.as_mut(); // Some(&mut String)
```

`as_ref` borrows the `Option` as `Option<&T>` without moving the inner value. `as_mut` does the same
for mutable borrows.

### Iterating Over `Option`

`Option` implements `IntoIterator`, so you can use it in `for` loops:

```rust
let x: Option<i32> = Some(5);
for value in x {
    println!("{}", value);  // prints 5
}

let y: Option<i32> = None;
for value in y {
    println!("{}", value);  // never executes
}
```

## `Result` Combinators

### `map` and `map_err`

```rust
let r: Result<i32, &str> = Ok(42);

r.map(|n| n * 2);          // Ok(84)
r.map_err(|e| e.to_string()); // Ok(42) — map_err transforms the error

let e: Result<i32, &str> = Err("bad input");
e.map_err(|e| format!("error: {}", e)); // Err("error: bad input")
```

### `and_then` and `or_else`

```rust
fn parse(s: &str) -> Result<i32, &str> {
    s.parse().map_err(|_| "not a number")
}

fn validate(n: i32) -> Result<i32, &str> {
    if n >= 0 { Ok(n) } else { Err("negative") }
}

// Chaining with and_then — short-circuits on Err
let result = parse("42").and_then(validate); // Ok(42)
let result = parse("abc").and_then(validate); // Err("not a number")
let result = parse("-5").and_then(validate); // Err("negative")
```

### `unwrap_or`, `unwrap_or_else`

```rust
let r: Result<i32, &str> = Err("failed");

r.unwrap_or(0);                // 0
r.unwrap_or_else(|e| e.len() * 10); // 60 (len("failed") == 6, 6*10)
```

### `unwrap_or_default`

```rust
let r: Result<i32, &str> = Err("failed");
assert_eq!(r.unwrap_or_default(), 0);  // i32::default() == 0

let r: Result<String, &str> = Err("failed");
assert_eq!(r.unwrap_or_default(), ""); // String::default() == ""
```

### `inspect` and `inspect_err`

`inspect` allows you to examine a `Result` without changing it — useful for logging:

```rust
let r: Result<i32, ParseIntError> = "42".parse();
let r = r.inspect(|&n| println!("parsed: {}", n)); // Ok(42), side effect printed
```

### `flatten`

Flatten a nested `Result<Result<T, E>, E>` into `Result<T, E>`:

```rust
let nested: Result<Result<i32, &str>, &str> = Ok(Ok(42));
let flat: Result<i32, &str> = nested.flatten(); // Ok(42)
```

## The `?` Operator

The `?` operator propagates errors. It is syntactic sugar for a `match` that returns early on `Err`:

```rust
fn read_config(path: &str) -> Result<Config, Box<dyn std::error::Error>> {
    let content = std::fs::read_to_string(path)?;   // returns Err on IO failure
    let config: Config = serde_json::from_str(&content)?; // returns Err on parse failure
    Ok(config)
}
```

Desugared:

```rust
fn read_config(path: &str) -> Result<Config, Box<dyn std::error::Error>> {
    let content = match std::fs::read_to_string(path) {
        Ok(c) => c,
        Err(e) => return Err(e.into()),
    };
    let config: Config = match serde_json::from_str(&content) {
        Ok(c) => c,
        Err(e) => return Err(e.into()),
    };
    Ok(config)
}
```

### `?` with `Option`

The `?` operator also works with `Option`. In a function returning `Option<T>`, `?` propagates
`None`:

```rust
fn first_even(nums: &[i32]) -> Option<i32> {
    let &n = nums.iter().find(|&&n| n % 2 == 0)?;
    Some(n * 2)
}
```

### `?` and `From` Trait Conversion

The `?` operator automatically converts errors using the `From` trait. If the function returns
`Result<T, E>`, then `?` on a `Result<T2, E2>` will call `E2::from(e)` to convert the error,
provided `impl From<E2> for E` exists:

```rust
use std::fs;
use std::io;

fn read_file(path: &str) -> Result<String, io::Error> {
    let content = fs::read_to_string(path)?;  // io::Error propagates directly
    Ok(content)
}

fn read_file_boxed(path: &str) -> Result<String, Box<dyn std::error::Error>> {
    let content = fs::read_to_string(path)?;  // io::Error -> Box<dyn Error> via From
    Ok(content)
}
```

The conversion chain: `io::Error` implements `Into<Box<dyn std::error::Error>>`, so `?` can convert
`io::Error` into `Box<dyn Error>` automatically.

### Early Return with `?` in `main`

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let content = fs::read_to_string("config.toml")?;
    let config: Config = toml::from_str(&content)?;
    println!("loaded config: {:?}", config);
    Ok(())
}
```

Since Rust 1.26, `main` can return `Result`. The runtime will print the error and set the exit code
to 1 on `Err`.

### `?` in `Option` vs `Result` Functions

The `?` operator can only be used in functions that return `Result` or `Option`. Using `?` on a
`Result` in an `Option` function is a compile error, and vice versa. If you need to mix them,
convert explicitly:

```rust
fn maybe_read(path: &str) -> Option<String> {
    Some(std::fs::read_to_string(path).ok()?)
}
```

## Custom Error Types

### Manual Implementation

```rust
use std::fmt;

#[derive(Debug)]
enum AppError {
    Io(std::io::Error),
    Parse(std::num::ParseIntError),
    NotFound(String),
    Validation(String),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AppError::Io(e) => write!(f, "IO error: {}", e),
            AppError::Parse(e) => write!(f, "parse error: {}", e),
            AppError::NotFound(msg) => write!(f, "not found: {}", msg),
            AppError::Validation(msg) => write!(f, "validation error: {}", msg),
        }
    }
}

impl std::error::Error for AppError {
    fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        match self {
            AppError::Io(e) => Some(e),
            AppError::Parse(e) => Some(e),
            _ => None,
        }
    }
}

impl From<std::io::Error> for AppError {
    fn from(e: std::io::Error) -> Self {
        AppError::Io(e)
    }
}

impl From<std::num::ParseIntError> for AppError {
    fn from(e: std::num::ParseIntError) -> Self {
        AppError::Parse(e)
    }
}
```

This is verbose but gives full control. Each `From` implementation enables the `?` operator for that
error type.

### `thiserror` — Derive Macro for Errors

The `thiserror` crate eliminates the boilerplate:

```toml
[dependencies]
thiserror = "2"
```

```rust
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),

    #[error("parse error: {0}")]
    Parse(#[from] std::num::ParseIntError),

    #[error("resource not found: {0}")]
    NotFound(String),

    #[error("validation failed: {field} - {reason}")]
    Validation { field: String, reason: String },
}
```

`#[from]` automatically generates the `From` implementation, enabling `?` propagation. The
`#[error]` attribute defines the `Display` message, with `{0}` for the first field, `{field}` for
named fields.

### `thiserror` with Source Chains

```rust
#[derive(Error, Debug)]
enum AppError {
    #[error("database error")]
    Db(#[from] sqlx::Error),

    #[error("HTTP request failed: {0}")]
    Http(#[from] reqwest::Error),

    #[error("config error in {path}: {source}")]
    Config {
        path: String,
        #[source]
        source: std::io::Error,
    },
}
```

The `#[source]` attribute sets `Error::source()` for error chain introspection. `anyhow::Error` and
`std::error::Error::source()` walk this chain.

### `thiserror` with `#[error(transparent)]`

```rust
#[derive(Error, Debug)]
enum AppError {
    #[error(transparent)]
    Io(#[from] std::io::Error),

    #[error(transparent)]
    Parse(#[from] serde_json::Error),
}
```

`#[error(transparent)]` forwards the inner error's `Display` message directly, making the wrapper
error invisible in error reports.

## `anyhow` — Ergonomic Error Handling for Applications

`anyhow` is designed for application code (binaries, CLIs) where you want to propagate errors with
context without defining custom error enums for every function.

```toml
[dependencies]
anyhow = "1"
```

```rust
use anyhow::{Context, Result};

fn read_config(path: &str) -> Result<Config> {
    let content = std::fs::read_to_string(path)
        .context(format!("failed to read config file: {}", path))?;

    let config: Config = serde_json::from_str(&content)
        .context("failed to parse config as JSON")?;

    Ok(config)
}
```

### `anyhow` vs `thiserror`

| Use `anyhow` for                  | Use `thiserror` for                              |
| --------------------------------- | ------------------------------------------------ |
| Application binaries              | Library crates                                   |
| Quick prototyping                 | Public APIs with typed errors                    |
| Functions with many error sources | Error types that callers need to match on        |
| Scripts and CLIs                  | When the caller needs to distinguish error kinds |

A common pattern: use `thiserror` in your library crate to define precise error types, and use
`anyhow` in the application crate that consumes the library.

### `anyhow::Error` Chain

`anyhow::Error` wraps any error type that implements `std::error::Error + Send + Sync + 'static`. It
preserves the error chain for debugging:

```rust
use anyhow::{Error, Result};

fn process() -> Result<()> {
    let content = std::fs::read_to_string("missing.txt")?;
    Ok(())
}

fn main() {
    if let Err(e) = process() {
        // Print the full error chain
        for cause in e.chain() {
            eprintln!("caused by: {}", cause);
        }
    }
}
```

### `anyhow::ensure!`

```rust
use anyhow::{ensure, Result};

fn validate_age(age: u32) -> Result<()> {
    ensure!(age < 150, "age {} is implausible", age);
    ensure!(age > 0, "age must be positive");
    Ok(())
}
```

`ensure!` is `assert!` but returns `Result::Err` instead of panicking.

## Error Handling Patterns

### Converting Errors

Convert errors from one type to another using `From` implementations or `map_err`:

```rust
fn parse_config(content: &str) -> Result<Config, AppError> {
    let config: Config = serde_json::from_str(content)
        .map_err(AppError::Serialization)?;
    Ok(config)
}
```

### Wrapping Errors

Add context to errors as they propagate up the call stack:

```rust
use std::path::PathBuf;

fn load_database(path: PathBuf) -> Result<Database, AppError> {
    let content = std::fs::read_to_string(&path)
        .map_err(|e| AppError::IoContext {
            path: path.display().to_string(),
            source: e,
        })?;
    // ...
}
```

### Mapping Errors in Iterators

When processing a collection where individual items may fail:

```rust
let results: Vec<Result<i32, &str>> = vec!["1", "2", "three", "4"]
    .iter()
    .map(|s| s.parse::<i32>().map_err(|_| "not a number"))
    .collect();

// Collect into Result<Vec<T>, E> — stops at first error
let results: Result<Vec<i32>, &str> = vec!["1", "2", "three", "4"]
    .iter()
    .map(|s| s.parse::<i32>().map_err(|_| "not a number"))
    .collect();
// Err("not a number")
```

### Error Recovery — `filter_map` and `partition`

When you want to skip failures instead of propagating them:

```rust
let inputs = vec!["1", "2", "three", "4", "five", "6"];
let (numbers, errors): (Vec<i32>, Vec<&str>) = inputs
    .iter()
    .filter_map(|s| {
        s.parse::<i32>()
            .map(|n| (n, None))
            .unwrap_or_else(|_| (0, Some(*s)))
            .map(|(n, _)| n)
            .ok()
    })
    .collect();
```

A simpler approach using `partition`:

```rust
let inputs = vec!["1", "2", "three", "4", "five", "6"];
let parsed: Vec<Result<i32, _>> = inputs
    .iter()
    .map(|s| s.parse::<i32>())
    .collect();

let (successes, failures): (Vec<_>, Vec<_>) = parsed
    .into_iter()
    .partition(Result::is_ok);

let numbers: Vec<i32> = successes.into_iter().map(Result::unwrap).collect();
let errors: Vec<_> = failures.into_iter().map(Result::unwrap_err).collect();
```

### The Error Trait

`std::error::Error` is the base trait for error types:

```rust
pub trait Error: Debug + Display {
    fn source(&self) -> Option<&(dyn Error + 'static)> { None }
    fn description(&self) -> &str { "description() is deprecated" }
    fn cause(&self) -> Option<&dyn Error> { self.source() }
}
```

Implementing `Error` is optional — any type implementing `Debug + Display` can be used as an error.
But implementing `Error` enables `source()` chaining and compatibility with `anyhow`.

### Error Chains and `std::error::Error::source()`

The `source()` method enables error chain walking, which is used by error reporting libraries:

```rust
use std::error::Error;
use std::fmt;

#[derive(Debug)]
struct OuterError {
    message: String,
    source: InnerError,
}

#[derive(Debug)]
struct InnerError {
    code: u32,
}

impl fmt::Display for OuterError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{} (inner code: {})", self.message, self.source.code)
    }
}

impl fmt::Display for InnerError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "inner error with code {}", self.code)
    }
}

impl Error for OuterError {
    fn source(&self) -> Option<&(dyn Error + 'static)> {
        Some(&self.source)
    }
}

impl Error for InnerError {}
```

Walking the chain:

```rust
let outer = OuterError {
    message: "operation failed".into(),
    source: InnerError { code: 42 },
};

let mut cause: &dyn Error = &outer;
while let Some(source) = cause.source() {
    eprintln!("caused by: {}", source);
    cause = source;
}
```

### `eyre` — Alternative to `anyhow`

`eyre` is a fork of `anyhow` with better customization for error reports:

```toml
[dependencies]
eyre = "0.6"
```

```rust
use eyre::{Result, WrapErr};

fn main() -> Result<()> {
    let content = std::fs::read_to_string("config.toml")
        .wrap_err("failed to read config file")?;
    Ok(())
}
```

`eyre` supports custom error reporters via the `eyre::EyreHandler` trait, allowing structured error
output (JSON, colored terminal output, etc.) without changing error propagation code.

## Recoverable vs Unrecoverable Errors

### Use `Result` When

- The error is an expected outcome (file not found, invalid input, network timeout)
- The caller should decide how to handle the error
- The error is part of the function's contract

### Use `panic` When

- The program has entered an invalid state that cannot be corrected
- An invariant has been violated
- The error indicates a bug in the program, not an expected failure

### Use `unwrap`/`expect` When

- In tests where a panic provides clear failure output
- In `main()` where the error message is sufficient
- When you have verified the precondition immediately before (and the verifier is obviously correct)

```rust
fn process(data: &HashMap<String, Vec<i32>>) -> i32 {
    let values = data.get("key").expect("key must exist — invariant checked by caller");
    values.iter().sum()
}
```

## `std::error::Error` Trait in Depth

The `Error` trait has evolved across Rust editions:

### Rust 1.81+ — `Error::provide` and `std::error::Request`

Rust 1.81 stabilized the `provide` method, which allows errors to provide type-erased context data:

```rust
use std::error::Error;
use std::fmt;

#[derive(Debug)]
struct DbError {
    query: String,
    code: u32,
}

impl fmt::Display for DbError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "database error code {}: {}", self.code, self.query)
    }
}

impl Error for DbError {
    fn provide<'a>(&'a self, request: &mut std::error::Request<'a>) {
        request.provide_value::<u32>(&self.code);
        request.provide_ref::<str>(&self.query);
    }
}
```

This allows error handlers to extract structured data from errors without downcasting:

```rust
use std::error::Error;
use std::error::request_value;

fn handle_error(err: &dyn Error) {
    if let Some(code) = request_value::<u32>(err) {
        println!("error code: {}", code);
    }
}
```

## Common Pitfalls

1. **Using `unwrap()` on external input.** Parsing user input, reading files, making network
   requests — all of these can fail in expected ways. Always use `?` or explicit error handling for
   these operations.

2. **Swallowing errors with `let _ =`.** Writing `let _ = result` silently discards the error. At
   minimum, log the error: `if let Err(e) = result { log::warn!("operation failed: {}", e); }`.

3. **`Box<dyn Error>` loses type information.** When you use `Box<dyn Error>` as the error type, the
   caller cannot `match` on specific error variants. This is fine for applications (use `anyhow`)
   but inappropriate for libraries where callers need to distinguish error types.

4. **Not implementing `Error` for library error types.** If your library defines a custom error
   type, implement `std::error::Error` (or derive it with `thiserror`). This enables `?`
   propagation, error chain walking, and `anyhow` compatibility.

5. **Over-engineering error types in applications.** In a binary, you rarely need to match on
   specific error variants — you just need to report them to the user or log them. Use `anyhow` with
   `.context()` and avoid defining large error enums unless you have a specific need.

6. **Mixing `Result` and `Option` without conversion.** Calling `?` on a `Result` inside an `Option`
   function is a compile error. Use `.ok()` to convert `Result` to `Option` or `.ok_or()` to convert
   `Option` to `Result`.

7. **Error types that are not `Send + Sync`.** By default, `Box<dyn Error>` requires `Send + Sync`.
   If your error type contains `Rc` or other non-thread-safe types, it cannot be used with `?` in
   async contexts or across threads. Use `Arc` instead of `Rc`, or ensure all error fields are
   `Send + Sync`.

8. **Not adding context to errors.** A bare `io::Error` tells you what went wrong but not where or
   why. Use `.context()` (anyhow) or `.map_err(|e| AppError::Context { ... })` to add contextual
   information as the error propagates up the call stack.

9. **Panicking in library code.** Libraries should never panic on expected failure modes. Panics are
   for bugs (internal invariant violations). If a library function receives invalid input, it should
   return `Err`, not panic. The one exception is `debug_assert!` which is compiled out in release
   mode.

10. **Using `match` instead of `?` for error propagation.** Writing explicit `match` blocks for
    every `Result` is verbose and error-prone. The `?` operator is the idiomatic way to propagate
    errors. Use `match` only when you need to handle specific error variants differently.
