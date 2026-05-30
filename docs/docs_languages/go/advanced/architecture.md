---
title: go project architecture
slug: go/architecture
date: 2026-05-30
tags:
  - Go
categories:
  - Go
description: Go project architecture and best practices. Directory layout, package structure, dependency management, interface design, layered architecture, and the standard Go project layout.
---

## Standard Go Project Layout

Go does not mandate a project layout, but community conventions have emerged. The most common
structure:

```
myproject/
  go.mod
  go.sum
  cmd/
    myapp/
      main.go
  internal/
    auth/
      auth.go
    database/
      db.go
  pkg/
    middleware/
      auth.go
      logging.go
  api/
    openapi.yaml
  configs/
    config.yaml
  scripts/
    migrate.sh
  go.mod
  go.sum
  README.md
```

### cmd/

The `cmd/` directory contains executable entry points. Each subdirectory represents one binary:

```go
// cmd/myapp/main.go
package main

import "myproject/internal/database"

func main() {
    db := database.New()
    app := NewApp(db)
    app.Run()
}
```

### internal/

Code in `internal/` cannot be imported by other projects (enforced by the Go toolchain). Use it for
code that is private to your project:

```
internal/
  auth/        // authentication logic
  database/    // database access
  service/     // business logic
```

### pkg/

Code in `pkg/` is intended for external consumption. Libraries that other projects may import:

```
pkg/
  httputil/    // shared HTTP utilities
  validator/  // reusable validation functions
```

Only place code in `pkg/` if you intend for external projects to import it. Most projects do not
need `pkg/`.

### go.mod Placement

`go.mod` lives at the repository root. The module path defines the import prefix:

```go
module github.com/org/myproject

go 1.22

require (
    github.com/lib/pq v1.10.9
)
```

## Package Organization

### Package Naming

- Use lowercase, single-word names: `auth`, `database`, `httputil`
- Avoid underscores, mixed case, or camelCase: use `httputil`, not `http_util` or `httpUtil`
- Name packages for what they provide, not what they contain: `user`, not `usertype`
- Avoid `util`, `common`, `misc`, `base` -- these become catch-all dumping grounds

### Package Boundaries

Each package should have a single, clear purpose. Signs a package is too large:

- Multiple unrelated types in the same package
- Functions that only call other functions within the package
- Test files that import the same package but test unrelated functionality

### Avoiding Circular Dependencies

Go forbids circular imports. If package A imports package B and B imports A, the build fails.
Strategies to resolve circular dependencies:

- Extract shared types into a separate package: `types/` or `models/`
- Use interfaces in the consuming package to break the cycle
- Merge packages that are tightly coupled

### Accept Interfaces, Return Structs

This principle keeps coupling low:

```go
type Service struct {
    repo Repository
}

type Repository interface {
    Get(ctx context.Context, id string) (User, error)
    Save(ctx context.Context, u User) error
}

func NewService(repo Repository) *Service {
    return &Service{repo: repo}
}
```

The `Service` accepts a `Repository` interface. Callers provide concrete implementations. The
Service does not depend on any specific database or storage mechanism.

## Interface Design

### Small Interfaces

The standard library leads by example. `io.Reader`, `io.Writer`, and `fmt.Stringer` each have one
method:

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type Stringer interface {
    String() string
}
```

Prefer interfaces with one to three methods. If an interface has more than five methods, consider
splitting it.

### Define Interfaces at the Consumer

Define interfaces where they are used, not where they are implemented:

```go
// consumer package (internal/service)
type UserStore interface {
    Get(ctx context.Context, id string) (User, error)
    Put(ctx context.Context, u User) error
}

// producer package (internal/database)
type Store struct { /* ... */ }

func (s *Store) Get(ctx context.Context, id string) (User, error) { /* ... */ }
func (s *Store) Put(ctx context.Context, u User) error             { /* ... */ }
```

The `service` package defines the interface it needs. The `database` package implements it
implicitly. Neither package imports the other's type definitions.

### Avoid Interface Pollution

Do not create interfaces "just in case." Define an interface when a second concrete type is needed
or when testing requires a mock. The standard library's `io` interfaces exist because multiple
implementations share the same contract.

## Error Handling in Architecture

### Error Types per Package

Packages should define their own error types when callers need to distinguish between error
conditions:

```go
package database

type Error struct {
    Op   string
    Key  string
    Err  error
}

func (e *Error) Error() string {
    return fmt.Sprintf("database.%s(%s): %v", e.Op, e.Key, e.Err)
}
```

### Sentinel Errors vs Wrapped Errors

Sentinel errors for expected, checkable conditions:

```go
var ErrNotFound = errors.New("user not found")
var ErrConflict = errors.New("user already exists")
```

Wrapped errors for adding context:

```go
func (s *Service) GetUser(ctx context.Context, id string) (*User, error) {
    user, err := s.repo.Get(ctx, id)
    if err != nil {
        return nil, fmt.Errorf("service.GetUser(%s): %w", id, err)
    }
    return &user, nil
}
```

Callers use `errors.Is` and `errors.As` to inspect wrapped errors:

```go
if errors.Is(err, database.ErrNotFound) {
    // handle not found
}

var dbErr *database.Error
if errors.As(err, &dbErr) {
    // inspect dbErr.Op, dbErr.Key
}
```

### Error Wrapping at Boundaries

Wrap errors at package boundaries (API handlers, RPC boundaries) to add context. Do not wrap at
every call in the chain -- that creates noisy error messages:

```go
func (h *Handler) GetUser(w http.ResponseWriter, r *http.Request) {
    user, err := h.svc.GetUser(r.Context(), r.PathValue("id"))
    if err != nil {
        if errors.Is(err, service.ErrNotFound) {
            http.Error(w, err.Error(), http.StatusNotFound)
            return
        }
        slog.Error("get user failed", "err", err)
        http.Error(w, "internal error", http.StatusInternalServerError)
        return
    }
    json.NewEncoder(w).Encode(user)
}
```

## Dependency Management

### go.mod

```go
module github.com/org/myproject

go 1.22

require (
    github.com/lib/pq v1.10.9
    golang.org/x/crypto v0.31.0 // indirect
)
```

### Minimal Dependencies

Keep the dependency graph small:

- Prefer the standard library over third-party packages
- Avoid dependencies with large transitive dependency trees
- Periodically run `go mod tidy` to remove unused dependencies

### go.sum

`go.sum` contains checksums for all dependencies. Commit it to version control. It ensures
reproducible builds.

### Replacing Dependencies

Use `replace` for local development or to fork a dependency:

```go
module github.com/org/myproject

go 1.22

require github.com/lib/pq v1.10.9

replace github.com/lib/pq => ../pq-fork
```

### Vendoring

Vendoring copies dependencies into `vendor/` for offline builds:

```bash
go mod vendor    # create vendor directory
go build -mod=vendor  # build using vendored deps
```

Vendoring is optional in Go modules. Use it when you need guaranteed offline builds or when working
in restricted network environments.

## Project Structure Patterns

### CLI Application

```
mycli/
  cmd/
    mycli/
      main.go
  internal/
    cli/
      root.go
      config.go
  pkg/
    version/
      version.go
  go.mod
```

### HTTP Service

```
myservice/
  cmd/
    server/
      main.go
  internal/
    handler/
      user.go
    service/
      user.go
    repository/
      user.go
    middleware/
      auth.go
      logging.go
  go.mod
```

### Library

```
mylib/
  go.mod
  client.go
  options.go
  errors.go
  mylib_test.go
  example_test.go
```

Libraries should be minimal. No `cmd/`, no `internal/` unless needed for internal helpers.

### Monorepo

```
workspace/
  go.work
  service-a/
    go.mod
  service-b/
    go.mod
  shared/
    go.mod
```

Go workspaces (`go.work`) manage multiple modules in a single repository:

```go
// go.work
go 1.22

use (
    ./service-a
    ./service-b
    ./shared
)
```

## Build Tags and Cross-Compilation

### GOOS and GOARCH

Go cross-compiles to any supported platform:

```bash
GOOS=linux   GOARCH=amd64  go build -o bin/app-linux-amd64
GOOS=darwin  GOARCH=arm64  go build -o bin/app-darwin-arm64
GOOS=windows GOARCH=amd64  go build -o bin/app.exe
```

### Build Constraints

Use build tags to include or exclude files per platform:

```go
//go:build linux

package main

import "syscall"

func getPID() int { return syscall.Getpid() }
```

```go
//go:build !linux

package main

import "os"

func getPID() int { return os.Getpid() }
```

### File Suffix Conventions

Go also recognizes platform-specific file suffixes:

```
syscall_linux.go    // linux only
syscall_darwin.go   // darwin only
syscall_windows.go  // windows only
```

## Testing Architecture

### Test Organization

Three patterns for test file placement:

**Same package** (white-box testing -- accesses unexported names):

```
auth/
  auth.go
  auth_test.go    // package auth
```

**External test package** (black-box testing -- only exported API):

```
auth/
  auth.go
  auth_test.go    // package auth_test
```

**Test helpers package** (shared test utilities):

```
testutil/
  testutil.go
  db.go           // test database helpers
```

### Test Helpers

Centralize common test setup:

```go
package testutil

func NewTestDB(t *testing.T) *sql.DB {
    t.Helper()
    db, err := sql.Open("sqlite3", ":memory:")
    if err != nil {
        t.Fatal(err)
    }
    t.Cleanup(func() { db.Close() })
    runMigrations(db)
    return db
}
```

### Integration Tests

Tag integration tests so they can be run separately:

```go
//go:build integration

package repository_test

func TestIntegrationWithRealDB(t *testing.T) {
    // ...
}
```

Run only integration tests:

```bash
go test -tags=integration ./...
```

## Common Pitfalls

1. **Over-engineering the directory structure.** A small project does not need `internal/`, `pkg/`,
   `cmd/`, and `api/` directories. Start flat and add structure as the codebase grows.

2. **Circular imports.** Go's compiler enforces acyclic imports. If A needs B and B needs A, extract
   shared code into a third package. Planning package dependencies before writing code prevents this.

3. **God packages.** A package named `common`, `util`, or `misc` that accumulates unrelated helpers
   is a code smell. Place functions near the types they operate on.

4. **Defining interfaces in the wrong package.** Interfaces belong in the package that consumes
   them, not the package that implements them. This avoids import cycles and keeps consumers
   decoupled.

5. **Ignoring go.sum.** Always commit `go.sum`. It ensures that every developer and CI environment
   uses the same dependency versions and checksums.

6. **Leaking build tags into production code.** Build tags in `go:build` directives should only gate
   implementation differences. Do not use build tags to include or exclude entire features that
   should be controlled at runtime with configuration.

7. **Not using t.Cleanup in tests.** `defer` in tests only runs when the test function returns.
   `t.Cleanup` runs after the test and all its subtests finish, making it the correct choice for
   resource teardown.

## Summary

This topic covers the core concepts of Go project architecture, including underlying theory,
practical implementation, and key applications.

**Key concepts include:**

- core concepts and terminology
- algorithms and computational thinking
- practical implementation
- security and ethical considerations
- applications in the real world

Understanding these concepts thoroughly is essential for both examinations and practical
programming, and requires both theoretical knowledge and hands-on practice.
