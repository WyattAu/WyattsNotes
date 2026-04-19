---
title: Testing
description: go test, table-driven tests, benchmarks, fuzzing, and test coverage.
slug: testing
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## go test Basics

Go has a built-in testing framework. Test files are named `*_test.go` and the build system excludes
them from production binaries. Test functions have the signature `func TestXxx(t *testing.T)`.

```go
// math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", result)
    }
}
```

Run tests:

```bash
go test ./...          # run all tests in all packages
go test -v ./math      # verbose output
go test -run TestAdd   # run specific test by name (regex)
go test -count=1 ./... # disable test caching
go test -short ./...   # skip long-running tests
```

## Test Helpers

`t.Helper()` marks a function as a test helper. Failures report the calling line, not the helper
line:

```go
func assertEqual[T comparable](t *testing.T, got, want T) {
    t.Helper()
    if got != want {
        t.Errorf("got %v, want %v", got, want)
    }
}

func TestAdd(t *testing.T) {
    assertEqual(t, Add(2, 3), 5)
    assertEqual(t, Add(-1, 1), 0)
}
```

## Table-Driven Tests

The idiomatic Go testing pattern. Define a slice of test cases and iterate:

```go
func TestIsPalindrome(t *testing.T) {
    tests := []struct {
        name  string
        input string
        want  bool
    }{
        {"empty", "", true},
        {"single char", "a", true},
        {"even length", "abba", true},
        {"odd length", "racecar", true},
        {"not palindrome", "hello", false},
        {"with spaces", "taco cat", true},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := IsPalindrome(tt.input)
            if got != tt.want {
                t.Errorf("IsPalindrome(%q) = %v; want %v", tt.input, got, tt.want)
            }
        })
    }
}
```

`t.Run` creates a subtest. Each subtest has its own `t` and can be run independently:

```bash
go test -run TestIsPalindrome/"not_palindrome"
```

## Test Main

Use `TestMain` for setup and teardown that runs once before all tests:

```go
func TestMain(m *testing.M) {
    setup()
    code := m.Run()
    teardown()
    os.Exit(code)
}
```

## Skipping Tests

```go
func TestIntegration(t *testing.T) {
    if testing.Short() {
        t.Skip("skipping integration test in short mode")
    }
    // ...
}

func TestPlatformSpecific(t *testing.T) {
    if runtime.GOOS != "linux" {
        t.Skip("skipping on non-linux platform")
    }
    // ...
}
```

## Benchmarks

Benchmark functions have the signature `func BenchmarkXxx(b *testing.B)`:

```go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}
```

Run benchmarks:

```bash
go test -bench=. -benchmem
```

Output:

```
BenchmarkAdd-8    1000000000    0.25 ns/op    0 B/op    0 allocs/op
```

`-benchmem` reports memory allocations. `-bench=. ` runs all benchmarks.

### BenchmarkTimerControls

```go
func BenchmarkExpensiveSetup(b *testing.B) {
    b.StopTimer()
    expensiveSetup()
    b.StartTimer()

    for i := 0; i < b.N; i++ {
        operation()
    }
}
```

### Parallel Benchmarks

```go
func BenchmarkParallel(b *testing.B) {
    b.RunParallel(func(pb *testing.PB) {
        for pb.Next() {
            process()
        }
    })
}
```

`RunParallel` distributes work across `GOMAXPROCS` goroutines.

## Fuzzing

Go 1.18+ includes built-in fuzzing support. Fuzz tests find inputs that trigger panics, assertion
failures, or other violations:

```go
func FuzzReverse(f *testing.F) {
    f.Add("hello")
    f.Add("racecar")

    f.Fuzz(func(t *testing.T, s string) {
        reversed := Reverse(s)
        doubleReversed := Reverse(reversed)
        if s != doubleReversed {
            t.Errorf("Reverse(Reverse(%q)) = %q, want %q", s, doubleReversed, s)
        }
    })
}
```

Run fuzzing:

```bash
go test -fuzz=FuzzReverse -fuzztime=30s
```

When a crash is found, the failing input is saved to `testdata/fuzz/FuzzReverse/` and will be
replayed on subsequent test runs.

## Test Coverage

Generate coverage reports:

```bash
# Summary
go test -cover ./...

# Profile output
go test -coverprofile=coverage.out ./...
go tool cover -func=coverage.out    # per-function summary
go tool cover -html=coverage.out     # HTML report in browser
```

Coverage threshold enforcement in CI:

```bash
go test -coverprofile=coverage.out ./...
coverage=$(go tool cover -func=coverage.out | grep total | awk '{print $3}' | sed 's/%//')
if [ "$coverage" -lt 80 ]; then
    echo "coverage below 80%: $coverage%"
    exit 1
fi
```

## Examples

Test examples double as documentation. If the output comment matches the actual output, `go test`
verifies it:

```go
func ExampleAdd() {
    fmt.Println(Add(2, 3))
    // Output: 5
}

func ExampleIsPalindrome() {
    fmt.Println(IsPalindrome("racecar"))
    // Output: true
}
```

Run with `go test -run Example`.

## Mocking

Go does not have built-in mocking. The standard approach is to define interfaces and implement test
doubles:

```go
type Store interface {
    Get(key string) (string, error)
    Put(key, value string) error
}

type MockStore struct {
    GetFunc func(key string) (string, error)
    PutFunc func(key, value string) error
}

func (m *MockStore) Get(key string) (string, error) {
    return m.GetFunc(key)
}

func (m *MockStore) Put(key, value string) error {
    return m.PutFunc(key, value)
}
```

Popular mocking libraries: `gomock` (code generation), `testify/mock` (manual mocks),
`go.uber.org/mock` (successor to gomock).

## Common Pitfalls

1. **Testing implementation details.** Test behavior, not internal mechanics. If you find yourself
   reaching for `reflect` in tests to inspect unexported fields, reconsider the design.

2. **Not using table-driven tests.** Copy-pasting test functions with different inputs creates
   maintenance burden. Use table-driven tests for any function with multiple input/output cases.

3. **Flaky tests due to time or concurrency.** Use `testing.Short()` to skip slow tests, and use
   deterministic test doubles instead of real time/network in unit tests.

4. **Ignoring benchmark results.** Always run benchmarks with `-benchmem` to catch unexpected
   allocations. A single allocation in a hot path can dominate performance.

5. **Low coverage on error paths.** Test both the happy path and error paths. Use
   `go test -coverprofile` to identify uncovered code.

6. **Modifying global state in tests.** Tests that modify package-level variables or global state
   can interfere with each other. Use `t.Parallel()` and isolate state per test.
