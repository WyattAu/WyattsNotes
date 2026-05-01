---
title: Modules and Packages
description:
  Modules and Packages — Packages; Package Naming Conventions; Import Paths;
  Internal Package with worked examples and exam-style questions.
slug: modules-and-packages
date: 2026-04-18
tags:
  - Go
categories:
  - Go
---

## Packages

Every Go file belongs to a package, declared at the top of the file. A directory contains one
package. Executables use `package main`; libraries use any other name.

```
myproject/
  main.go            // package main
  internal/
    db/
      db.go          // package db
    auth/
      auth.go        // package auth
  pkg/
    utils/
      utils.go       // package utils
```

### Package Naming Conventions

- Lowercase, single word: `http`, `json`, `strings`
- No underscores or mixed case
- The directory name matches the package name
- Avoid repetition: `pkg/utils/utils.go` -> the package is `utils`, not `utilsutils`

### Import Paths

The import path is the module path plus the directory path:

```go
import (
    "github.com/you/myproject/internal/db"
    "github.com/you/myproject/pkg/utils"
)
```

### Internal Package

Packages under a directory named `internal` cannot be imported by code outside the module tree
rooted at the parent of `internal`:

```
myproject/
  internal/
    secret/     // importable by myproject/* only
  external/
    public.go   // importable by anyone
```

This is enforced by the Go toolchain, not just a convention.

## go.mod

The `go.mod` file declares the module path and dependency requirements:

```go
module github.com/you/myproject

go 1.22

require (
    github.com/go-chi/chi/v5 v5.0.12
    github.com/lib/pq v1.10.9
)

require (
    github.com/go-sql-driver/mysql v1.7.1 // indirect
)
```

Fields:

- `module`: the module path (used as the import prefix for all packages in the module)
- `go`: the minimum Go version required
- `require`: direct dependencies (with versions)
- `indirect`: transitive dependencies not directly imported by any package

## Semantic Versioning

Go modules use semantic versioning: `MAJOR.MINOR.PATCH`.

- `v1.2.3`: MAJOR=1, MINOR=2, PATCH=3
- `v0.x.y`: pre-release -- no compatibility guarantee
- `v1.x.y`: stable -- backward compatibility within v1
- `v2.0.0` and beyond: must use a different module path with `/v2` suffix

### Major Version Bumping

For v2+, the module path must include the major version:

```go
// v1
module github.com/you/myproject

// v2 (must update module path and all import paths)
module github.com/you/myproject/v2
```

Importing a v2+ module:

```go
import "github.com/you/myproject/v2"
```

The `/v2` suffix is part of the module path, not the package path. This allows v1 and v2 to coexist
in the same dependency graph.

## go.sum

The `go.sum` file records the cryptographic hashes (SHA-256) of every module version used. It
ensures reproducible builds:

```
github.com/go-chi/chi/v5 v5.0.12 h1:exqT1FsjFNFK...
github.com/go-chi/chi/v5 v5.0.12/go.mod h1:DslCQbL2OYiznF/...
```

Each module version has two entries: one for the `.zip` and one for `go.mod`. Always commit `go.sum`
alongside `go.mod`.

## Dependency Management Commands

```bash
go mod init github.com/you/myproject   # initialize a new module
go mod tidy                             # add missing deps, remove unused deps
go mod download                          # download modules to module cache
go mod verify                            # verify checksums against go.sum
go mod graph                             # print dependency graph
go mod why github.com/pkg/dep            # explain why a dependency is needed
go list -m all                           # list all dependencies (direct + indirect)
go list -m -versions github.com/go-chi/chi/v5  # list available versions
```

### Adding a Dependency

```bash
go get github.com/go-chi/chi/v5@v5.0.12   # add specific version
go get github.com/go-chi/chi/v5            # add latest version
go get github.com/go-chi/chi/v5@latest     # update to latest
```

### Updating Dependencies

```bash
go get -u ./...       # update all dependencies to latest minor/patch
go get -u=patch ./... # update all dependencies to latest patch only
```

### Removing a Dependency

```bash
go mod tidy  # removes unused dependencies automatically
```

## The Module Cache

Downloaded modules are stored in `$GOPATH/pkg/mod/`. The cache is read-only and content-addressed
(by version). Multiple projects share the same cache.

Clear the cache:

```bash
go clean -modcache
```

## Minimal Version Selection (MVS)

Go uses Minimal Version Selection, not SemVer resolution. For each dependency, Go selects the
maximum version required by any module in the graph. It does not upgrade transitive dependencies to
their latest version.

Example: if A requires C@v1.1.0 and B requires C@v1.2.0, Go uses C@v1.2.0 (the maximum required
version). It does not use C@v1.3.0 even if that exists, because no module requires it.

MVS ensures reproducible builds: the same `go.mod` always produces the same dependency set.

## go.work (Workspace Mode)

Go 1.18+ supports workspaces for multi-module development:

```go
// go.work
go 1.22

use (
    ./backend
    ./frontend
    ./shared
)
```

Workspace mode allows editing multiple modules simultaneously without publishing. `go build`,
`go test`, and `go run` use the local modules in the workspace instead of the module cache.

```bash
go work init ./backend ./frontend ./shared
go work use ./new-module   # add a module to the workspace
go work sync               # sync go.mod files with workspace
```

`go.work` should not be committed to the repository (add to `.gitignore`). It is a local development
convenience.

## Replacing Dependencies

The `replace` directive in `go.mod` substitutes a module with a local path or a different version:

```go
module github.com/you/myproject

go 1.22

require github.com/you/dependency v1.0.0

replace github.com/you/dependency => ../dependency
```

Use cases:

- Local development with an unreleased dependency
- Forking and patching a dependency
- Debugging with a local copy

`replace` can also point to a different version or a fork:

```go
replace github.com/orig/pkg => github.com/fork/pkg v1.2.3
```

## Vendor Directory

`go mod vendor` copies dependencies into a `vendor/` directory. The build then uses the vendored
copies instead of the module cache:

```bash
go mod vendor
go build -mod=vendor    # build using vendor directory
```

Vendoring is optional and primarily used in environments without network access (air-gapped builds,
CI with restricted internet).

## Common Pitfalls

1. **Not running `go mod tidy` after changes.** After adding or removing imports, always run
   `go mod tidy` to keep `go.mod` and `go.sum` synchronized.

2. **V2+ without `/v2` suffix.** If you release v2 of a module without updating the module path to
   include `/v2`, Go treats it as v1 and the version number is ignored.

3. **Committing `go.work`.** The workspace file is a local development tool. Commit it only for
   monorepo setups where it is part of the intended workflow.

4. **Overusing `replace`.** `replace` directives in committed `go.mod` files break builds for other
   developers. Use them only for local development or in `go.work`.

5. **Ignoring indirect dependencies.** `go mod tidy` manages indirect dependencies. Manually editing
   them risks build inconsistencies.

6. **Large `go.sum` files.** This is normal for projects with many dependencies. Do not try to
   minimize it manually.

7. **Forgetting `go.work sync`.** After adding modules to a workspace, run `go work sync` to update
   `go.mod` files with workspace-relevant information.
