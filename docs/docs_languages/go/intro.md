---
title: Introduction to Go
description: Go overview, installation, hello world, and the go toolchain.
slug: intro
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Why Go

Go was designed at Google by Rob Pike, Ken Thompson, and Robert Griesemer, first released in 2009.
It targets the niche between systems languages (C, C++) and managed languages (Java, Python): fast
compilation, native performance, garbage collection, and built-in concurrency primitives.

Core design goals:

1. **Simplicity.** The language spec is ~50 pages. There are no exceptions, no inheritance, no
   operator overloading, no macros. Features are additive, not combinatorial -- the number of
   concepts you must hold in your head grows linearly with the language, not exponentially.

2. **Fast compilation.** Dependency-aware compilation, minimal syntax, and no header files mean
   large codebases compile in seconds, not minutes.

3. **Concurrency as a first-class citizen.** Goroutines are multiplexed onto OS threads by the
   runtime scheduler. Channels provide safe communication between goroutines without locks.

4. **Static typing with inference.** Types are checked at compile time, but the compiler infers
   types where unambiguous. This catches bugs early without the verbosity of explicit annotations
   everywhere.

## Compilation Model

Go compiles to native machine code. There is no VM, no interpreter, no JIT.

```
Source (.go) -> go build -> linker -> native binary (statically linked by default)
```

The compiler pipeline:

- **Lexing and parsing** -> AST
- **Type checking** -> resolves all types, verifies correctness
- **SSA-based optimization** -> intermediate representation for optimizations
- **Machine code generation** -> targets the native architecture

The resulting binary is statically linked by default (on Linux/macOS), containing the Go runtime,
garbage collector, and all dependencies. No external shared libraries are required at runtime.

## Installation

Download from [go.dev/dl](https://go.dev/dl/) or use a package manager:

```bash
# Linux (snap)
sudo snap install go --classic

# macOS (homebrew)
brew install go

# Verify
go version
```

Set up workspace environment variables:

```bash
# GOPATH is where Go stores downloaded modules and built binaries
# Default is $HOME/go
go env GOPATH

# GOROOT is where Go is installed (usually auto-detected)
go env GOROOT
```

## Hello World

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Run directly:

```bash
go run main.go
```

Build a binary:

```bash
go build -o hello main.go
./hello
```

Every Go file belongs to a package. Executables must be in `package main` and expose a
`func main()`. Library packages use any other name and are imported by path.

## The Go Toolchain

### `go run`

Compiles and executes one or more `.go` files in a temporary directory. Useful for development and
one-off scripts. Does not produce a persistent binary.

```bash
go run .
go run main.go
go run cmd/server/main.go
```

### `go build`

Compiles packages and dependencies, producing a binary. By default, the binary is named after the
directory containing `package main`.

```bash
go build                  # binary named after current directory
go build -o myapp        # custom output name
go build -ldflags "-s -w" # strip debug info, reduce binary size
go build -race            # enable race detector
```

Cross-compilation is trivial -- set `GOOS` and `GOARCH`:

```bash
GOOS=linux GOARCH=amd64 go build -o myapp-linux
GOOS=windows GOARCH=amd64 go build -o myapp.exe
GOOS=darwin GOARCH=arm64 go build -o myapp-mac
```

### `go install`

Builds and installs the binary to `$GOPATH/bin` (or `$GOBIN` if set). This is how CLI tools are
installed from source.

```bash
go install golang.org/x/tools/gopls@latest
```

### `go fmt` / `gofmt`

Formats Go source code according to the standard style. There is no configuration -- the format is
canonical. This eliminates style debates in code reviews.

```bash
go fmt ./...
```

### `go vet`

Examines source code and reports suspicious constructs. Catches bugs that the compiler does not.

```bash
go vet ./...
```

### `go doc`

Prints documentation for packages and symbols.

```bash
go doc fmt.Println
go doc net/http
```

## Project Structure

A minimal Go project:

```
myproject/
  go.mod
  main.go
  internal/
    db/
      db.go
  cmd/
    server/
      main.go
```

The `internal/` directory is special: packages inside `internal` cannot be imported by packages
outside the module tree rooted at the parent of `internal`. This enforces encapsulation.

The `cmd/` directory convention holds executable entry points.

## Go Modules

Since Go 1.16, modules are the default dependency management system. A `go.mod` file declares the
module path and dependency requirements:

```go
module github.com/you/myproject

go 1.22

require (
    github.com/go-chi/chi/v5 v5.0.12
    github.com/lib/pq v1.10.9
)
```

Key module commands:

```bash
go mod init github.com/you/myproject   # initialize
go mod tidy                             # sync dependencies with source
go mod download                          # download modules to cache
go mod verify                            # verify checksums
go mod graph                             # print dependency graph
go list -m all                           # list all dependencies
```

`go.sum` records the expected cryptographic checksums of every dependency. It should be committed to
version control and never edited manually.

## Where Go Runs

| Target                               | Use Case                   |
| ------------------------------------ | -------------------------- |
| **Linux** (amd64, arm64)             | Servers, containers, cloud |
| **macOS** (amd64, arm64)             | Desktop development        |
| **Windows** (amd64)                  | Desktop applications       |
| **WebAssembly** (wasm)               | Browser, edge computing    |
| **FreeBSD/OpenBSD**                  | Networking, infrastructure |
| **Embedded** (GOOS=linux GOARCH=arm) | IoT, routers, ARM devices  |

## Common Pitfalls

1. **Not setting `GOPATH`/`GOBIN` on `$PATH`.** `go install` places binaries in `$GOPATH/bin` or
   `$GOBIN`. If this is not on your PATH, installed tools will not be found.

2. **Using `go run` in production.** `go run` compiles to a temp directory and does not produce an
   artifact. Use `go build` to produce a deployable binary.

3. **Ignoring `go vet`.** Run `go vet ./...` before every commit. It catches real bugs: unreachable
   code, incorrect format strings, lock copies, and more.

4. **Not committing `go.sum`.** The `go.sum` file is essential for reproducible builds. Always
   commit it alongside `go.mod`.

5. **Using `latest` in `go install` without pinning.** `go install tool@latest` always fetches the
   newest version. Pin versions in `go.mod` for reproducible builds.

6. **Circular imports.** Go does not allow circular imports between packages. If A imports B and B
   imports A, the compiler rejects it. Restructure by extracting the shared code into a third
   package.
