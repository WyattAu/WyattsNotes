---
id: cargo-and-ecosystem
title: Cargo and Ecosystem
description:
  Rust build system — Cargo, crates.io, workspace management, testing, documentation, profiling, and
  key crates.
slug: cargo-and-ecosystem
---

## Cargo.toml Structure

`Cargo.toml` is the manifest file that defines everything about your Rust project. It uses TOML
format:

```toml
[package]
name = "my_crate"
version = "0.1.0"
edition = "2024"
authors = ["Your Name <you@example.com>"]
description = "A short description"
license = "MIT"
repository = "https://github.com/user/my_crate"
keywords = ["example", "tool"]
categories = ["command-line-utilities"]
readme = "README.md"
rust-version = "1.75"

[dependencies]
serde = { version = "1", features = ["derive"] }
tokio = { version = "1", features = ["full"] }
clap = { version = "4", features = ["derive"] }

[dev-dependencies]
proptest = "1"
criterion = "0.5"

[build-dependencies]
cc = "1"

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
strip = true

[profile.dev]
opt-level = 0
debug = true
```

### Package Metadata Fields

| Field          | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| `name`         | Crate name (must match `^[a-zA-Z0-9_-]+$`)               |
| `version`      | SemVer version (e.g., `0.1.0`, `1.2.3-beta.1`)           |
| `edition`      | Rust edition (`2015`, `2018`, `2021`, `2024`)            |
| `rust-version` | Minimum supported Rust version (MSRV)                    |
| `license`      | SPDX license identifier (`MIT`, `Apache-2.0`, `GPL-3.0`) |
| `repository`   | Source code URL                                          |
| `readme`       | Path to README file                                      |
| `categories`   | crates.io categories (max 5)                             |

## Workspace Management

Workspaces allow you to manage multiple related crates in a single repository:

```
my-project/
├── Cargo.toml          # workspace root
├── crates/
│   ├── core/
│   │   ├── Cargo.toml
│   │   └── src/
│   ├── cli/
│   │   ├── Cargo.toml
│   │   └── src/
│   └── server/
│       ├── Cargo.toml
│       └── src/
└── target/
```

### Workspace Cargo.toml

```toml
[workspace]
resolver = "2"
members = [
    "crates/core",
    "crates/cli",
    "crates/server",
]

[workspace.package]
version = "0.1.0"
edition = "2024"
license = "MIT"
repository = "https://github.com/user/my-project"

[workspace.dependencies]
serde = { version = "1", features = ["derive"] }
tokio = { version = "1", features = ["full"] }
thiserror = "2"
anyhow = "1"

[workspace.lints.clippy]
unwrap_used = "warn"
expect_used = "warn"
```

### Inheriting Workspace Values

Each member crate inherits from the workspace:

```toml
# crates/core/Cargo.toml
[package]
name = "my-core"
version.workspace = true
edition.workspace = true
license.workspace = true

[dependencies]
serde.workspace = true
thiserror.workspace = true
```

### Workspace Commands

```bash
cargo build                        # build all workspace members
cargo build -p my-core             # build specific member
cargo test --workspace             # test all members
cargo test -p my-core              # test specific member
cargo run -p my-cli                # run specific binary
cargo tree -p my-server            # dependency tree for member
cargo metadata --format-version 1  # machine-readable workspace metadata
```

:::info

Workspaces share a single `target/` directory and a single `Cargo.lock`. This means all crates use
the same versions of shared dependencies, avoiding the diamond dependency problem.

:::

## Feature Flags

Features are optional dependencies or conditional compilation flags:

```toml
[features]
default = ["serde"]
full = ["serde", "tokio", "tracing"]
serde = ["dep:serde", "dep:serde_json"]
tokio = ["dep:tokio"]
tracing = ["dep:tracing", "dep:tracing-subscriber"]

[dependencies]
serde = { version = "1", optional = true }
serde_json = { version = "1", optional = true }
tokio = { version = "1", optional = true, features = ["full"] }
tracing = { version = "0.1", optional = true }
tracing-subscriber = { version = "0.3", optional = true }
```

### Using Features in Code

```rust
#[cfg(feature = "serde")]
use serde::{Serialize, Deserialize};

#[cfg(feature = "serde")]
#[derive(Serialize, Deserialize)]
pub struct Data {
    pub value: i32,
}

#[cfg(not(feature = "serde"))]
pub struct Data {
    pub value: i32,
}
```

### Feature Unification

When two crates in the same dependency graph enable different features of a shared dependency, Cargo
unifies them — all enabled features are active for all dependents. This can cause unexpected
behavior:

```toml
# crate-a/Cargo.toml
[dependencies]
shared = { version = "1", features = ["feature-x"] }

# crate-b/Cargo.toml
[dependencies]
shared = { version = "1", features = ["feature-y"] }
```

In a workspace depending on both `crate-a` and `crate-b`, `shared` will have both `feature-x` and
`feature-y` enabled. If `feature-y` has heavy dependencies, `crate-a` users pay the cost even though
they only requested `feature-x`.

### Feature Best Practices

1. Keep features additive — never use features to remove functionality.
2. Use `default = []` for library crates — let users opt in to features.
3. Use `dep:serde` syntax to gate the dependency itself, not just code.
4. Document all features in the crate's README.

## Profiles

Profiles control compiler optimization settings:

```toml
[profile.dev]
opt-level = 0           # no optimization
debug = true            # full debug info
debug-assertions = true # enable debug assertions
overflow-checks = true  # integer overflow panics
lto = false             # no link-time optimization
codegen-units = 256     # fast compile, no cross-crate optimization
incremental = true      # incremental compilation

[profile.release]
opt-level = 3           # maximum optimization
debug = false           # no debug info
debug-assertions = false
overflow-checks = false  # wrapping arithmetic (no panics)
lto = true              # link-time optimization
codegen-units = 1       # single codegen unit (better optimization, slower compile)
strip = true            # strip symbols from binary
panic = "abort"         # smaller binary (no unwinding)

[profile.test]
opt-level = 0
debug = true
debug-assertions = true
overflow-checks = true

[profile.bench]
opt-level = 3
debug = false
```

### Custom Profiles

```toml
[profile.profiling]
inherits = "release"
debug = true
strip = false
```

```bash
cargo build --profile profiling
```

### LTO (Link-Time Optimization)

LTO performs optimizations across crate boundaries. It increases compile time significantly but can
reduce binary size by 10-20% and improve runtime performance by 5-10%.

- `lto = false`: No LTO (default for dev)
- `lto = "thin"`: Thin LTO — faster than full LTO, most of the benefit
- `lto = true` (or `lto = "fat"`): Full LTO — best optimization, slowest compile

For release builds in production, `lto = "thin"` is a good default. Use `lto = true` for maximum
performance-critical builds.

## Dependency Management

### SemVer in Cargo

Cargo uses Semantic Versioning. A version requirement like `"1.2"` is equivalent to
`">= 1.2.0, < 2.0.0"`:

```toml
[dependencies]
serde = "1"            # >= 1.0.0, < 2.0.0
tokio = "1.35"         # >= 1.35.0, < 2.0.0
clap = "^4.4"          # same as "4.4" (caret is default)
exact = "=1.0.0"       # exactly 1.0.0
range = ">=1.0, <2.0"  # explicit range
```

### Dependency Specifiers

```toml
[dependencies]
# From crates.io
serde = { version = "1", features = ["derive"] }

# From git repository
my-lib = { git = "https://github.com/user/my-lib", branch = "main" }

# From local path
local-lib = { path = "../local-lib" }

# With specific features
tokio = { version = "1", default-features = false, features = ["rt-multi-thread", "macros"] }

# Optional dependency (only compiled when the feature is enabled)
optional-dep = { version = "1", optional = true }
```

### `Cargo.lock` and Reproducibility

`Cargo.lock` pins exact dependency versions. It should be committed to version control for:

- Binary crates (applications, CLIs)
- Libraries where exact reproducibility matters

It should NOT be committed for library crates that are published to crates.io (the library's
dependents should resolve their own compatible versions).

```bash
cargo update              # update all dependencies within SemVer bounds
cargo update -p serde     # update only serde
cargo update --precise 1.0.0 serde  # pin serde to exact version
```

## Cargo Commands

### Build Commands

```bash
cargo build                # debug build
cargo build --release      # release build (optimized)
cargo build --target x86_64-unknown-linux-musl  # cross-compile
cargo build -j 8           # parallel jobs (default: num_cpus)
cargo check                # type-check without producing binary (fast)
cargo clean                # remove target/
```

### Test Commands

```bash
cargo test                 # run all tests
cargo test --release       # run tests with release optimizations
cargo test -- --test-threads=1  # run tests sequentially (for debugging)
cargo test -- --nocapture  # show println! output
cargo test my_module       # run tests in specific module
cargo test -- test_name    # run specific test by name
```

### Documentation Commands

```bash
cargo doc                 # generate documentation
cargo doc --open          # generate and open in browser
cargo doc --no-deps       # only document this crate (not dependencies)
cargo doc --document-private-items  # include private items
```

### Quality Commands

```bash
cargo clippy               # run clippy lints
cargo clippy -- -W clippy::all -D warnings  # treat warnings as errors
cargo fmt                  # format code
cargo fmt -- --check       # check formatting without modifying files
cargo audit                # check for known security vulnerabilities
cargo outdated             # check for outdated dependencies
cargo tree                 # display dependency tree
cargo tree --duplicates    # show duplicate dependencies
cargo udeps                # find unused dependencies
cargo machete              # determine which dependencies are unused
```

### Publishing

```bash
cargo login                # authenticate with crates.io
cargo publish              # publish to crates.io
cargo publish --dry-run    # verify without publishing
cargo publish --allow-dirty # publish with uncommitted changes (not recommended)
```

## Testing

### Unit Tests

Unit tests live in the same file as the code they test, inside a `#[cfg(test)]` module:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_positive() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    fn test_add_negative() {
        assert_eq!(add(-1, 1), 0);
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn test_overflow() {
        let _ = i32::MAX + 1;
    }

    #[test]
    #[ignore]
    fn expensive_test() {
        // cargo test -- --ignored
    }
}
```

### Integration Tests

Integration tests live in the `tests/` directory and test the crate as an external consumer would:

```
my-crate/
├── src/
│   └── lib.rs
├── tests/
│   ├── common/
│   │   └── mod.rs        # shared test utilities
│   ├── integration_test.rs
│   └── another_test.rs
└── Cargo.toml
```

```rust
// tests/integration_test.rs
use my_crate::add;

#[test]
fn test_add_from_external() {
    assert_eq!(add(10, 20), 30);
}
```

Each file in `tests/` is compiled as a separate crate, so they cannot access `src/` internals (only
the public API). The `tests/common/mod.rs` pattern allows sharing test utilities.

### Doc Tests

Documentation tests are Rust code blocks in doc comments:

````rust
/// Adds two numbers together.
///
/// # Examples
///
/// ```
/// use my_crate::add;
/// assert_eq!(add(2, 3), 5);
/// ```
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
````

Doc tests are run by `cargo test` and serve as both documentation and tests. They verify that
examples in documentation actually compile and produce correct results.

### Property-Based Testing with `proptest`

```toml
[dev-dependencies]
proptest = "1"
```

```rust
#[cfg(test)]
mod tests {
    use proptest::prelude::*;

    proptest! {
        #[test]
        fn add_is_commutative(a in -1000i32..1000, b in -1000i32..1000) {
            assert_eq!(my_crate::add(a, b), my_crate::add(b, a));
        }

        #[test]
        fn add_associative(a in -1000i32..1000, b in -1000i32..1000, c in -1000i32..1000) {
            let left = my_crate::add(my_crate::add(a, b), c);
            let right = my_crate::add(a, my_crate::add(b, c));
            assert_eq!(left, right);
        }

        #[test]
        fn vec_sort_is_sorted(input in proptest::collection::vec(proptest::arbitrary::any::<i32>(), 0..100)) {
            let mut sorted = input.clone();
            sorted.sort();
            for window in sorted.windows(2) {
                prop_assert!(window[0] <= window[1]);
            }
        }
    }
}
```

Proptest generates random inputs, finds minimal failing cases (shrinking), and can run thousands of
test cases per second. It is particularly effective for finding edge cases that hand-written tests
miss.

### Benchmarking with Criterion

```toml
[dev-dependencies]
criterion = { version = "0.5", features = ["html_reports"] }

[[bench]]
name = "my_benchmark"
harness = false
```

```rust
// benches/my_benchmark.rs
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn bench_add(c: &mut Criterion) {
    c.bench_function("add", |b| {
        b.iter(|| black_box(my_crate::add(black_box(2), black_box(3))))
    });
}

criterion_group!(benches, bench_add);
criterion_main!(benches);
```

```bash
cargo bench
```

Criterion provides statistical analysis (mean, median, standard deviation), regression detection,
and HTML reports with plots. It is the standard benchmarking tool in the Rust ecosystem.

## Documentation with rustdoc

### Doc Comments

````rust
/// A 2D point in Euclidean space.
///
/// This struct represents a point with x and y coordinates.
///
/// # Examples
///
/// ```
/// use my_crate::Point;
/// let p = Point::new(1.0, 2.0);
/// assert_eq!(p.x(), 1.0);
/// ```
///
/// # Panics
///
/// This struct does not panic on construction.
///
/// # Errors
///
/// This struct does not return errors.
///
/// # Safety
///
/// This struct is safe to use from any thread.
pub struct Point {
    x: f64,
    y: f64,
}

impl Point {
    /// Creates a new point.
    ///
    /// # Arguments
    ///
    /// * `x` - The x coordinate
    /// * `y` - The y coordinate
    pub fn new(x: f64, y: f64) -> Self {
        Point { x, y }
    }

    /// Returns the x coordinate.
    pub fn x(&self) -> f64 {
        self.x
    }
}
````

### Doc Attributes

```rust
/// This item is documented.
#[doc(alias = "Point2D")]
#[doc(html_root_url = "https://docs.rs/my-crate/")]
pub struct Point { /* ... */ }

/// This module contains internal utilities.
#[doc(hidden)]  // hidden from documentation
pub mod internal { /* ... */ }
```

## Profiling

### `perf` (Linux)

```bash
# Record a profile
perf record -g target/release/my_binary

# View the profile
perf report

# Record with call graphs
perf record --call-graph dwarf target/release/my_binary
```

### `cargo-flamegraph`

```toml
[dependencies]
flamegraph = "0.6"  # install with: cargo install flamegraph
```

```bash
cargo flamegraph --bin my-binary
# Generates flamegraph.svg
```

### `tokio-console`

For async applications, `tokio-console` provides real-time task inspection:

```toml
[dependencies]
tokio = { version = "1", features = ["tracing"] }
console-subscriber = "0.4"
```

```bash
RUSTFLAGS="--cfg tokio_unstable" cargo run
tokio-console
```

### `tracing` for Production Observability

```toml
[dependencies]
tracing = "0.1"
tracing-subscriber = { version = "0.3", features = ["env-filter", "json"] }
```

```rust
use tracing::{info, warn, error, instrument};
use tracing_subscriber::EnvFilter;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| EnvFilter::new("info"))
        )
        .json()  // structured JSON logging
        .init();

    info!("application started");
}

#[instrument]
async fn process_request(id: u64) {
    info!("processing request");
    // Automatically logs function entry/exit with timing
}
```

The `#[instrument]` attribute automatically creates a span that logs function entry, exit, and
elapsed time. It captures all function arguments by default (use `skip` and `fields` to control what
is captured).

## Key Crates

### `serde` — Serialization Framework

```toml
[dependencies]
serde = { version = "1", features = ["derive"] }
serde_json = "1"
```

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Config {
    debug: bool,
    port: u16,
    #[serde(default = "default_workers")]
    workers: usize,
}

fn default_workers() -> usize { 4 }

let config = Config {
    debug: true,
    port: 8080,
    workers: 8,
};

let json = serde_json::to_string(&config).unwrap();
let parsed: Config = serde_json::from_str(&json).unwrap();
```

Serde is the de facto serialization framework. It supports JSON, YAML, TOML, MessagePack, CBOR,
BSON, XML, and custom formats. The `#[serde]` attribute provides fine-grained control over field
names, defaults, serialization behavior, and conditional compilation.

### `tokio` — Async Runtime

```toml
[dependencies]
tokio = { version = "1", features = ["rt-multi-thread", "macros", "net", "io-util", "fs", "time", "sync"] }
```

Key features to enable:

- `rt-multi-thread`: Multi-threaded scheduler
- `macros`: `#[tokio::main]` and `#[tokio::test]`
- `net`: TCP/UDP networking
- `io-util`: Async I/O utilities
- `fs`: Async file system operations
- `time`: Timers and delays
- `sync`: Async mutex, channels, watch, notify

### `clap` — CLI Argument Parsing

```toml
[dependencies]
clap = { version = "4", features = ["derive"] }
```

```rust
use clap::Parser;

#[derive(Parser, Debug)]
#[command(name = "my-tool")]
#[command(about = "A useful tool", long_about = None)]
struct Args {
    /// Input file path
    #[arg(short, long)]
    input: String,

    /// Output file path
    #[arg(short, long)]
    output: Option<String>,

    /// Enable verbose mode
    #[arg(short, long, default_value_t = false)]
    verbose: bool,

    /// Number of threads (default: number of CPUs)
    #[arg(short = 'j', long, default_value_t = num_cpus::get())]
    jobs: usize,
}

fn main() {
    let args = Args::parse();
    println!("input: {}, output: {:?}", args.input, args.output);
}
```

### `rayon` — Data Parallelism

```toml
[dependencies]
rayon = "1.10"
```

```rust
use rayon::prelude::*;

// Parallel iterator
let sum: i64 = (1..=1_000_000).par_iter().sum();

// Parallel map + collect
let results: Vec<i32> = data.par_iter()
    .map(|x| expensive_transform(*x))
    .collect();

// Parallel sort
let mut data = vec![3, 1, 4, 1, 5, 9, 2, 6];
data.par_sort();
```

Rayon converts sequential iterators to parallel iterators by changing `.iter()` to `.par_iter()`.
The work-stealing scheduler automatically balances load across threads.

### `itertools` — Extra Iterator Adapters

```toml
[dependencies]
itertools = "0.13"
```

```rust
use itertools::Itertools;

let data = vec![1, 2, 3, 4, 5];

// Chunked
for chunk in &data.into_iter().chunks(2) {
    let chunk: Vec<_> = chunk.collect();
    println!("{:?}", chunk);  // [1, 2], [3, 4], [5]
}

// Combinations
for combo in (1..=4).combinations(2) {
    println!("{:?}", combo);
}

// Intersperse
let joined = vec!["a", "b", "c"].into_iter().intersperse(", ").collect::<String>();
// "a, b, c"

// Group by
let groups = vec![1, 1, 2, 3, 3, 3].into_iter().group_by(|&k| k);
```

### `tracing` — Structured Diagnostics

```toml
[dependencies]
tracing = "0.1"
tracing-subscriber = "0.3"
```

```rust
use tracing::{info, warn, error, span, Level};
use tracing_subscriber::fmt;

fn main() {
    fmt::init();

    let span = span!(Level::INFO, "request", id = 42);
    let _guard = span.enter();

    info!("processing started");
    warn!("rate limit approaching");
    error!("database connection failed");
}
```

### `axum` / `actix-web` — Web Frameworks

```toml
[dependencies]
axum = "0.8"
tokio = { version = "1", features = ["full"] }
serde = { version = "1", features = ["derive"] }
```

```rust
use axum::{Router, routing::get, Json};
use serde::Serialize;

#[derive(Serialize)]
struct Hello {
    message: String,
}

async fn hello() -> Json<Hello> {
    Json(Hello { message: "world".into() })
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(hello));
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
```

## Crate Quality Evaluation

Before adding a dependency, evaluate it:

| Criterion                 | How to Check                                                |
| ------------------------- | ----------------------------------------------------------- |
| **Downloads**             | crates.io page — monthly downloads                          |
| **Last update**           | crates.io — last publish date                               |
| **Maintenance**           | GitHub — open issues, PRs, commit frequency                 |
| **Dependencies**          | `cargo tree -p crate-name` — dependency count               |
| **Binary size impact**    | `cargo bloat --release` — size contribution                 |
| **Build time**            | `cargo build --timings` — incremental and clean build times |
| **License compatibility** | crates.io — license field                                   |
| **MSRV**                  | README or `Cargo.toml` `rust-version` field                 |
| **Audit**                 | `cargo audit` — known CVEs                                  |

:::warning

Every dependency is a liability. Dependencies can introduce bugs, security vulnerabilities, supply
chain attacks, and licensing issues. Minimize your dependency tree. Audit regularly with
`cargo audit`. For security-critical projects, consider `cargo-vet` (supply chain verification).

:::

## Common Pitfalls

1. **Not committing `Cargo.lock` for binaries.** Without `Cargo.lock`, different builds may resolve
   different dependency versions, leading to non-reproducible builds. Always commit `Cargo.lock` for
   applications and CLIs.

2. **Feature flags causing unexpected compilation.** A dependency might enable a feature that pulls
   in heavy transitive dependencies. Use `cargo tree --features feature-name` to inspect what
   features enable. Use `default-features = false` and select only the features you need.

3. **Ignoring clippy warnings.** Clippy catches real bugs (unused results, redundant clones,
   incorrect mutex usage). Set up CI to fail on clippy warnings: `cargo clippy -- -D warnings`.

4. **Not writing integration tests.** Unit tests verify internal logic but do not test the public
   API. Integration tests exercise the crate as a consumer would, catching issues with module
   visibility, feature gating, and API ergonomics.

5. **Unoptimized release builds.** The default `Cargo.toml` has minimal release profile settings.
   Add `lto = "thin"` and `codegen-units = 1` for significant performance improvements in
   production.

6. **Dependency bloat.** Adding `tokio` with `features = ["full"]` enables everything including the
   full I/O driver, process spawning, signal handling, and more. Only enable the features you
   actually use: `features = ["rt-multi-thread", "macros", "net"]`.

7. **Not using workspace inheritance.** Without workspace-level dependency management, different
   crates in the workspace may use different versions of the same dependency, increasing compile
   time and binary size.

8. **Ignoring MSRV (Minimum Supported Rust Version).** If your crate is published, specify
   `rust-version` in `Cargo.toml`. Users on older Rust compilers will get a clear error instead of
   cryptic compilation failures.

9. **Running benchmarks without `--release`.** Benchmarks compiled in debug mode are meaningless —
   the optimizer has not run, and timings reflect debug assertion overhead, not actual performance.
   Always run `cargo bench` (which uses the `bench` profile with `opt-level = 3`).

10. **Not auditing dependencies.** Run `cargo audit` regularly to check for known security
    vulnerabilities. Use `cargo-deny` to enforce license and advisory policies in CI. Consider
    `cargo-vet` for supply chain integrity in critical projects.
