---
id: intro
title: Introduction to Rust
description:
  Systems programming with Rust — ownership, borrowing, lifetimes, traits, concurrency, and the
  Cargo ecosystem.
slug: intro
sidebar_position: 1
---

## Why Rust

Rust solves a problem that has plagued systems programming for decades: how to write fast,
memory-safe code without a garbage collector. C and C++ give you control and speed but let you shoot
yourself in the foot with use-after-free, buffer overflows, and data races. Java, Go, and C# give
you safety but impose GC pauses and runtime overhead. Rust occupies the intersection: compile-time
memory safety verification with zero runtime cost.

The language was originally developed at Mozilla (starting in 2006, sponsored by the Mozilla
Foundation from 2009) for Servo, an experimental browser engine. It has since been adopted by AWS,
Cloudflare, Microsoft (Windows kernel), Google (Android), Meta, the Linux kernel, and virtually
every large technology company that writes systems software.

## Design Philosophy

Three pillars define Rust:

1. **Memory safety without a garbage collector.** Ownership and borrowing are checked at compile
   time. There is no runtime GC, no reference counting overhead (unless you opt into it with
   `Rc`/`Arc`), and no stop-the-world pauses. The borrow checker enforces that every reference is
   valid for its entire lifetime, eliminating use-after-free, double-free, and dangling pointer bugs
   at compile time.

2. **Zero-cost abstractions.** High-level constructs (iterators, pattern matching, trait-based
   dispatch) compile down to the same machine code you would write by hand in C. There is no vtable
   indirection unless you explicitly use dynamic dispatch via `dyn Trait`. Monomorphization means
   generic code is instantiated for each concrete type, giving you the performance of hand-written
   specialized code.

3. **Fearless concurrency.** The type system prevents data races at compile time. `Send` and `Sync`
   are auto-implemented marker traits that the compiler uses to determine whether a type can be
   safely transferred to or shared between threads. If your code compiles, it is free of data races
   (modulo unsafe blocks).

## Compilation Model

Rust compiles to native machine code via LLVM. There is no VM, no interpreter, no JIT.

```
Source (.rs) → rustc → LLVM IR → LLVM → Native binary
```

The `rustc` compiler performs:

- **Lexing and parsing** → AST
- **HIR lowering** → High-level IR for macro expansion and early analysis
- **MIR lowering** → Mid-level IR for borrow checking, drop elaboration, and optimizations
- **LLVM IR generation** → Passed to LLVM for backend optimizations and code generation

MIR (Mid-level IR) is the key innovation. It is a control-flow-graph-based representation where the
borrow checker operates. MIR is also used for:

- Const evaluation
- Drop elaboration (determining when to call `Drop::drop`)
- MIR optimizations (inlining, constant propagation)
- Runtime type information for `Any` and downcasting

## Toolchain

Rust uses a unified toolchain managed by `rustup`:

| Component       | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| `rustup`        | Toolchain installer and version manager                    |
| `rustc`         | The compiler                                               |
| `cargo`         | Build system, package manager, test runner, doc generator  |
| `rustfmt`       | Code formatter                                             |
| `clippy`        | Lint checker (catches common mistakes beyond the compiler) |
| `rust-analyzer` | LSP implementation for IDE support                         |

Install the toolchain:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Manage versions:

```bash
rustup install stable
rustup install nightly
rustup default stable
rustup target add x86_64-unknown-linux-musl   # cross-compile target
```

## Cargo

Cargo is the single entry point for all development workflows:

```bash
cargo new my_project          # create new project
cargo build                   # compile (debug by default)
cargo build --release         # compile with optimizations
cargo test                    # run all tests
cargo doc                     # generate documentation
cargo clippy                  # run lints
cargo fmt                     # format code
cargo publish                 # publish to crates.io
```

A `Cargo.toml` file is the manifest that defines dependencies, features, profiles, and metadata. A
`Cargo.lock` locks exact dependency versions for reproducible builds.

## Rust 2024 Edition

Rust uses an edition system to make breaking language changes without breaking existing code. Each
crate specifies its edition in `Cargo.toml`. Editions are not version gates — a Rust 2024 crate can
depend on a Rust 2018 crate and vice versa. The compiler supports all editions simultaneously.

Key changes in Rust 2024:

- `gen` keyword reserved for generators (async generators, `gen {}` blocks)
- Safe `unsafe` attributes in extern blocks
- Tightened lifetime capture rules for closures
- Changes to `unsafe` block hygiene
- `unsafe_op_in_unsafe_fn` warning becomes a hard error by default

## Where Rust Runs

| Target                                          | Use Case                             |
| ----------------------------------------------- | ------------------------------------ |
| **Embedded** (`thumbv7m-none-eabi`, `cortex-m`) | Microcontrollers, real-time systems  |
| **Linux/Windows/macOS** (`x86_64`, `aarch64`)   | Desktop applications, CLIs, servers  |
| **WebAssembly** (`wasm32-unknown-unknown`)      | Browser, edge computing              |
| **Bare metal** (`x86_64-unknown-none`)          | OS kernels, bootloaders, hypervisors |
| **Android/iOS**                                 | Mobile via FFI or native modules     |

## Common Pitfalls

- **Fighting the borrow checker.** New Rustaceans often try to write C-style code with aliasing
  mutable references. The solution is almost always to restructure your data ownership, not to add
  `clone()`. Interior mutability types (`Cell`, `RefCell`, `Mutex`) exist precisely for cases where
  you need shared mutation.
- **Ignoring clippy warnings.** Clippy catches real bugs. Run `cargo clippy -- -W clippy::all` and
  fix every warning before shipping.
- **Overusing `unsafe`.** If you find yourself wrapping large blocks in `unsafe`, you are likely
  working against the language. Re-examine your data structure design.
