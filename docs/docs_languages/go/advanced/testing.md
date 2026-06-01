---
title: Testing
description: 'Go Testing notes covering key definitions, core concepts, worked examples, and practice questions for solid revision and exam readiness.'
slug: go/testing
date: 2026-05-31
tags:
  - Go
categories:
  - Go
---

## Testing Fundamentals

Go has a built-in testing framework. Test files are named `*_test.go` and the build system excludes
them from production binaries. Test functions have the signature `func TestXxx(t *testing.T)`.

```go
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
go test ./...          # all tests in all packages
go test -v ./math      # verbose output
go test -run TestAdd   # specific test by name (regex)
go test -count=1 ./... # disable test caching
go test -short ./...   # skip long-running tests
```

### Subtests

`t.Run` creates named subtests within a test function. Each subtest gets its own `t` and can be run
independently with `-run`:

```go
func TestStack(t *testing.T) {
    t.Run("empty stack", func(t *testing.T) {
        s := NewStack()
        if !s.IsEmpty() {
            t.Error("new stack should be empty")
        }
    })

    t.Run("push and pop", func(t *testing.T) {
        s := NewStack()
        s.Push(1)
        got := s.Pop()
        if got != 1 {
            t.Errorf("Pop() = %d; want 1", got)
        }
    })
}
```

### Test Helpers

`t.Helper()` marks a function as a test helper. Failures report the calling line, not the helper:

```go
func assertEqual[T comparable](t *testing.T, got, want T) {
    t.Helper()
    if got != want {
        t.Errorf("got %v, want %v", got, want)
    }
}
```

### Table-Driven Tests

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

## Assertions and Errors

### t.Error vs t.Fatal

- `t.Error` / `t.Errorf`: logs the failure and continues running the test.
- `t.Fatal` / `t.Fatalf`: logs the failure and **stops** the current test immediately.

Use `Fatal` when subsequent code would panic (e.g., a nil pointer). Use `Error` to collect all
failures in a single run.

### Custom Error Types

```go
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation failed on %q: %s", e.Field, e.Message)
}
```

Test with `errors.As`:

```go
func TestValidate(t *testing.T) {
    _, err := Validate(User{})
    var ve *ValidationError
    if !errors.As(err, &ve) {
        t.Fatalf("expected ValidationError, got %T", err)
    }
    if ve.Field != "Name" {
        t.Errorf("Field = %q; want %q", ve.Field, "Name")
    }
}
```

## Mocking and Interfaces

### Interface-Based Testing

Design code around interfaces to enable test doubles:

```go
type Repository interface {
    GetByID(ctx context.Context, id string) (*User, error)
    Save(ctx context.Context, u *User) error
}
```

### Manual Mocks

The simplest approach — implement the interface inline:

```go
type MockStore struct {
    GetFunc func(ctx context.Context, id string) (*User, error)
    SaveFunc func(ctx context.Context, u *User) error
}

func (m *MockStore) GetByID(ctx context.Context, id string) (*User, error) {
    return m.GetFunc(ctx, id)
}

func (m *MockStore) Save(ctx context.Context, u *User) error {
    return m.SaveFunc(ctx, u)
}
```

### gomock (Code Generation)

```go
ctrl := gomock.NewController(t)
defer ctrl.Finish()

mockRepo := mock.NewMockRepository(ctrl)
mockRepo.EXPECT().GetByID(gomock.Any(), "123").Return(&User{Name: "Alice"}, nil)
```

Use `go.uber.org/mock` (the actively maintained successor to `gomock`).

### testify/mock

```go
mockRepo := new(MockRepository)
mockRepo.On("GetByID", mock.Anything, "123").Return(&User{Name: "Alice"}, nil)
mockRepo.AssertExpectations(t)
```

## Benchmarking

Benchmark functions have the signature `func BenchmarkXxx(b *testing.B)`:

```go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}
```

```bash
go test -bench=. -benchmem
```

Output:

```
BenchmarkAdd-8    1000000000    0.25 ns/op    0 B/op    0 allocs/op
```

### Timer Controls

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

Go 1.18+ includes built-in fuzzing. Fuzz tests find inputs that trigger panics, assertion failures, or
other violations:

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

```bash
go test -fuzz=FuzzReverse -fuzztime=30s
```

When a crash is found, the failing input is saved to `testdata/fuzz/FuzzReverse/` and will be replayed
on subsequent test runs. The corpus grows over time, providing better coverage.

Supported fuzz types: `string`, `[]byte`, `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `float32`,
`float64`, `bool`.

## Integration Testing

### TestMain

Use `TestMain` for one-time setup and teardown:

```go
func TestMain(m *testing.M) {
    db := setupTestDB()
    defer db.Close()
    code := m.Run()
    os.Exit(code)
}
```

### HTTP Handler Testing

```go
func TestHealthHandler(t *testing.T) {
    req := httptest.NewRequest("GET", "/health", nil)
    w := httptest.NewRecorder()

    HealthHandler(w, req)

    if w.Code != http.StatusOK {
        t.Errorf("status = %d; want %d", w.Code, http.StatusOK)
    }
}
```

### Test Containers

For database integration tests using `testcontainers-go`:

```go
func TestWithDatabase(t *testing.T) {
    ctx := context.Background()
    container, err := postgres.RunContainer(ctx,
        testcontainer.WithImage("postgres:16"),
    )
    if err != nil {
        t.Fatal(err)
    }
    defer container.Terminate(ctx)

    connStr, _ := container.ConnectionString(ctx)
    db, _ := sql.Open("postgres", connStr)
    defer db.Close()

    // run tests against db
}
```

## Coverage

```bash
go test -cover ./...                       # summary
go test -coverprofile=coverage.out ./...   # generate profile
go tool cover -func=coverage.out           # per-function summary
go tool cover -html=coverage.out            # HTML report in browser
```

### CI Coverage Enforcement

```bash
go test -coverprofile=coverage.out ./...
coverage=$(go tool cover -func=coverage.out | grep total | awk '{print $3}' | sed 's/%//')
if [ "$coverage" -lt 80 ]; then
    echo "coverage below 80%: $coverage%"
    exit 1
fi
```

## Common Pitfalls

1. **Testing implementation details.** Test behaviour, not internals. If you use `reflect` to inspect
   unexported fields in tests, reconsider the design.

2. **Not using table-driven tests.** Copy-pasting test functions creates maintenance burden. Use
   table-driven tests for any function with multiple input/output cases.

3. **Flaky tests from time or concurrency.** Use `testing.Short()` to skip slow tests. Use
   deterministic test doubles instead of real time or network in unit tests.

4. **Ignoring benchmark allocations.** Always run benchmarks with `-benchmem`. A single allocation in a
   hot path can dominate performance.

5. **Low coverage on error paths.** Test both happy path and error paths. Use `go test -coverprofile`
   to identify uncovered code.

6. **Modifying global state in tests.** Tests that modify package-level variables can interfere with
   each other. Use `t.Parallel()` where possible and isolate state per test.

7. **Over-mocking.** Over-reliance on mocks produces tests that pass but code that fails in production.
   Prefer thin wrappers around real dependencies and integration tests for critical paths.

## Summary

- `go test ./...` runs all tests; `*_test.go` files are excluded from production builds.
- Table-driven tests with `t.Run` subtests are the idiomatic Go pattern.
- `t.Helper()` marks helper functions for proper failure line reporting.
- `t.Error` continues the test; `t.Fatal` stops it immediately.
- Interface-based design enables manual mocks, `go.uber.org/mock`, and `testify/mock`.
- `go test -bench=.` with `-benchmem` reveals allocation hotspots.
- Built-in fuzzing (`go test -fuzz`) finds edge cases with coverage-guided input generation.
- `httptest` enables handler tests without starting a real server.
- `go test -coverprofile` generates profiles for HTML reports and CI enforcement.
