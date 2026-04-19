---
title: Error Handling
description: Error interface, custom errors, error wrapping, and panic/recover.
slug: error-handling
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## The Error Interface

Go's error handling is convention-based. The `error` interface has a single method:

```go
type error interface {
    Error() string
}
```

Any type implementing `Error() string` is an error. There is no exception mechanism -- errors are
values, returned like any other value.

### Idiomatic Error Pattern

Functions that can fail return an error as their last return value:

```go
func Open(name string) (*File, error)
func Read(r io.Reader) ([]byte, error)
func Parse(s string) (T, error)
```

The caller checks the error immediately:

```go
f, err := os.Open("file.txt")
if err != nil {
    return fmt.Errorf("failed to open file: %w", err)
}
defer f.Close()
```

## Sentinel Errors

Sentinel errors are predefined error values that the caller can compare against:

```go
var ErrNotFound = errors.New("not found")

func Lookup(key string) (Value, error) {
    // ...
    if notFound {
        return Value{}, ErrNotFound
    }
    return val, nil
}

v, err := Lookup("key")
if errors.Is(err, ErrNotFound) {
    // handle not found
}
```

Use `errors.Is` (Go 1.13+) instead of `==` for comparison, because `errors.Is` unwraps wrapped
errors:

```go
if errors.Is(err, ErrNotFound) { ... }
```

## Custom Error Types

Define custom error types when the caller needs to distinguish error kinds:

```go
type ParseError struct {
    Line   int
    Column int
    Msg    string
}

func (e *ParseError) Error() string {
    return fmt.Sprintf("parse error at %d:%d: %s", e.Line, e.Column, e.Msg)
}
```

Use `errors.As` to extract a specific error type from a wrapped error chain:

```go
var perr *ParseError
if errors.As(err, &perr) {
    fmt.Printf("parse error at line %d\n", perr.Line)
}
```

## Error Wrapping

Go 1.13 introduced `fmt.Errorf` with `%w` verb for error wrapping, along with `errors.Is` and
`errors.As` for inspecting wrapped errors.

### Wrapping with `%w`

```go
func readConfig(path string) (*Config, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("read config: %w", err)
    }
    // parse data...
}
```

`fmt.Errorf("context: %w", err)` creates a new error that wraps `err`. The wrapped error is
accessible via `errors.Is` and `errors.As`.

### `%w` vs `%v`

- `%w` wraps the error, making it accessible to `errors.Is` and `errors.As`.
- `%v` (or `%s`) formats the error as a string. The original error is not accessible.

```go
err1 := fmt.Errorf("context: %w", originalErr) // wrapped
err2 := fmt.Errorf("context: %v", originalErr) // not wrapped, just formatted

errors.Is(err1, originalErr) // true
errors.Is(err2, originalErr) // false
```

### `errors.Is`

Traverses the error chain to check if any error in the chain matches a target:

```go
var ErrNotFound = errors.New("not found")

func process() error {
    return fmt.Errorf("processing: %w", ErrNotFound)
}

err := process()
fmt.Println(errors.Is(err, ErrNotFound)) // true
```

### `errors.As`

Traverses the error chain to find an error of a specific type:

```go
type TimeoutError struct {
    Duration time.Duration
}

func (e *TimeoutError) Error() string {
    return fmt.Sprintf("timed out after %v", e.Duration)
}

err := someFunction()
var terr *TimeoutError
if errors.As(err, &terr) {
    fmt.Printf("timed out after %v\n", terr.Duration)
}
```

### Custom Unwrap

To make a custom error type compatible with `errors.Is` and `errors.As`, implement the
`Unwrap() error` method:

```go
type AppError struct {
    Code    int
    Message string
    Err     error
}

func (e *AppError) Error() string {
    if e.Err != nil {
        return fmt.Sprintf("[%d] %s: %v", e.Code, e.Message, e.Err)
    }
    return fmt.Sprintf("[%d] %s", e.Code, e.Message)
}

func (e *AppError) Unwrap() error {
    return e.Err
}
```

## Multi-error

Go 1.20 added `errors.Join` for combining multiple errors into one:

```go
var errs []error
errs = append(errs, err1)
errs = append(errs, err2)

combined := errors.Join(errs...)
fmt.Println(errors.Is(combined, err1)) // true
fmt.Println(errors.Is(combined, err2)) // true
```

## Panic and Recover

### Panic

`panic` is for unrecoverable programming errors -- bugs, not expected failures:

```go
panic("invariant violated: x must be positive")
panic(fmt.Sprintf("unexpected state: %v", state))
```

Panics unwind the stack, running deferred functions. If unhandled, the program crashes.

### Recover

`recover` stops a panic and returns the panic value. It is only useful inside a deferred function:

```go
func safeDivide(a, b float64) (result float64, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("panic recovered: %v", r)
        }
    }()

    if b == 0 {
        panic("division by zero")
    }
    return a / b, nil
}
```

`recover` returns `nil` if there was no panic.

### When to Panic

Panics are appropriate for:

- Invariant violations (programming bugs)
- Unreachable code paths (`default` in a type switch covering all cases)
- Initialization failures in `init()` functions

Panics are not appropriate for:

- File not found, network timeout, invalid user input -- these are expected failures
- Any error that a caller might reasonably want to handle

### Recover at the Top Level

In servers, recover panics at the handler level to prevent a single panic from crashing the entire
process:

```go
func handler(w http.ResponseWriter, r *http.Request) {
    defer func() {
        if err := recover(); err != nil {
            log.Printf("panic in handler: %v\n%s", err, debug.Stack())
            http.Error(w, "internal server error", http.StatusInternalServerError)
        }
    }()
    // handler logic
}
```

## Common Pitfalls

1. **Ignoring errors.** `result, _ := someFunc()` silently discards errors. At minimum, log the
   error. In tests, use `t.Fatal(err)`.

2. **Using `panic` for expected errors.** Panics are for bugs. If a file might not exist, return an
   error. If a network request might time out, return an error.

3. **Comparing errors with `==`.** Use `errors.Is` instead. Direct comparison fails for wrapped
   errors and for custom error types that are not sentinel values.

4. **Creating error types without `Unwrap`.** If your error type wraps another error, implement
   `Unwrap() error` so that `errors.Is` and `errors.As` can traverse the chain.

5. **Using `%v` instead of `%w` when wrapping.** `%v` formats the error as a string, losing the
   ability to inspect the chain with `errors.Is`/`errors.As`.

6. **Recover outside of defer.** `recover` only works inside deferred functions. Calling it anywhere
   else always returns `nil`.

7. **String-based error matching.** Using `strings.Contains(err.Error(), "not found")` is fragile.
   Use sentinel errors or custom error types with `errors.Is`/`errors.As`.
