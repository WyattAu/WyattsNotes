---
title: Static Analysis
date: 2025-12-11T06:39:06.995Z
tags:
  - cpp
categories:
  - cpp
slug: static-analysis
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Static Analysis involves examining source code without executing it. Unlike the compiler, which
focuses on grammar and binary generation, static analyzers focus on correctness, readability.

In a robust architecture, static analysis is not a manual task performed occasionally; it is a
**Continuous Pipeline** integrated directly into the build system. Following covers the two dominant
tools in the ecosystem: **clang-tidy** and **Cppcheck**.

## 1. Clang-Tidy (The AST Linter)

**clang-tidy** is part of the LLVM project. Because it uses the Clang compiler frontend, it parses
the code into a full Abstract Syntax Tree (AST). It understands templates, preprocessor macros, and
type deductions with the exact same precision as the compiler.

### Capabilities

1. **Linter:** Checks for style violations and legacy patterns (e.g., `modernize-use-std-print`).
2. **Static Analyzer:** Performs path-sensitive analysis to find null pointer dereferences or
   use-after-free (via the `clang-analyzer-*` module).
3. **Refactoring Tool:** Can automatically apply fixes to the source code.

### Configuration Architecture (`.clang-tidy`)

Configuration is managed via a `.clang-tidy` file in the project root. This ensures every developer
applies the same rules.

**Best Practice C++23 Configuration:**

```yaml
---
# Enable specific checks.
# syntax: +enable, -disable
Checks: >
  -*, bugprone-*, cert-*, clang-analyzer-*, concurrency-*, cppcoreguidelines-*, misc-*, modernize-*,
  performance-*, readability-*, -modernize-use-trailing-return-type,
  -cppcoreguidelines-avoid-magic-numbers

# Treat all warnings as errors in CI
WarningsAsErrors: '*'

# header-filter ensures we analyze headers in our project,
# but ignore headers in third_party/ or /usr/include
HeaderFilterRegex: 'src/.*'
FormatStyle: file
```

### Suppression Mechanics

False positives are inevitable. Suppressions must be explicit and granular.

```cpp
// NOLINTNEXTLINE(cppcoreguidelines-pro-type-reinterpret-cast)
auto* raw_data = reinterpret_cast<const byte*>(ptr);

void func() {
    int x = 0; // NOLINT(misc-const-correctness) - modified in legacy macro
}
```

## 2. Cppcheck (The Data Flow Analyzer)

**Cppcheck** uses a custom parser, not Clang. While it may struggle with highly complex template
metaprogramming, it excels at **Data Flow Analysis**. It is often faster than clang-tidy and finds
different classes of bugs, particularly related to buffer overruns, uninitialized variables, and
resource leaks in execution paths that the compiler optimization phase might mask.

### Suppression Mechanics

Cppcheck uses inline comments for suppression.

```cpp
// cppcheck-suppress uninitvar
int x;
```

## 3. CMake Pipeline Integration

The architectural standard is to run analysis **during compilation**. CMake provides native
properties to inject these tools into the build graph.

### Global Configuration Pattern

Add this logic to your root `CMakeLists.txt` or a `cmake/StaticAnalysis.cmake` module.

```cmake
option(ENABLE_STATIC_ANALYSIS "Enable Clang-Tidy and Cppcheck during build" OFF)

if(ENABLE_STATIC_ANALYSIS)
    # 1. Find the tools
    find_program(CLANG_TIDY_PATH clang-tidy)
    find_program(CPPCHECK_PATH cppcheck)

    # 2. Configure Clang-Tidy
    if(CLANG_TIDY_PATH)
        # set CXX_CLANG_TIDY property on all targets created after this line
        set(CMAKE_CXX_CLANG_TIDY "${CLANG_TIDY_PATH}")
    else()
        message(WARNING "clang-tidy not found")
    endif()

    # 3. Configure Cppcheck
    if(CPPCHECK_PATH)
        # --enable=all: Enable all checks
        # --suppress=missingIncludeSystem: Don't fail if system headers are missing
        set(CMAKE_CXX_CPPCHECK
            "${CPPCHECK_PATH};--enable=all;--suppress=missingIncludeSystem;--error-exitcode=1")
    else()
        message(WARNING "cppcheck not found")
    endif()
endif()
```

### Usage

1. **Configure:** `cmake -S . -B build -DENABLE_STATIC_ANALYSIS=ON`
2. **Build:** `cmake --build build`

**Behavior:** CMake will execute `clang-tidy` and `cppcheck` on every source file _as it is
compiled_. If the analyzer reports an error (and `WarningsAsErrors` is set), the build fails
immediately.

### Performance Consideration

Static analysis is computationally expensive.

- **Debug Builds:** Disable analysis to keep iteration times fast.
- **CI/Release Builds:** Enable analysis to enforce quality gates.

## 4. Execution via Compilation Database

Sometimes running analysis as part of the build is too slow. You can run `clang-tidy` independently
using the `compile_commands.json` database generated in Module 4.1.

This allows for parallel execution decoupled from the compiler.

```bash
# Analyze the entire project using parallel execution
# -p points to the build directory containing compile_commands.json
run-clang-tidy -p build/
```

This script (`run-clang-tidy`) wraps the binary and schedules analysis jobs across all available
cores.

## 5. Architectural Strategy for CI/CD

In a Continuous Integration pipeline, the static analysis step serves as a **Quality Gate**.

### Pipeline Stages

1. **Fast Feedback:** Build & Test (No Analysis).
2. **Deep Analysis:** Static Analysis (Parallel Job).

### Caching Strategy

Since `clang-tidy` does not natively support caching, running it on the entire codebase for every
commit is wasteful.

**Integration with CCache:** Modern versions of `clang-tidy` effectively ignore `ccache`. However,
specialized wrappers or advanced build systems (like Bazel) can cache analysis results.

In CMake/Ninja workflows, the standard mitigation is **Incremental Analysis**:

- On developer machines: CMake integration only analyzes files that are recompiled.
- On CI agents: Use `git diff` to identify changed files and run `clang-tidy` only on the changeset.

```bash
# CI Script Example: Analyze only changed files
git diff --name-only origin/main | grep '\.cpp$' | xargs clang-tidy -p build/
```

## 6. Clang-Tidy Check Categories

Clang-Tidy organizes its checks into named modules. Understanding these modules helps you adopt
checks incrementally without overwhelming the build with warnings.

### 6.1 modernize-\*

Modernizes code to use contemporary C++ idioms. These are the safest checks to enable first.

| Check                            | What it does                                         | Example                                        |
| :------------------------------- | :--------------------------------------------------- | :--------------------------------------------- |
| `modernize-use-std-print`        | Replaces `std::cout` / `printf` with `std::print`    | `std::cout &lt;&lt; x` → `std::print("{}", x)` |
| `modernize-use-override`         | Adds `override` to virtual function overrides        | `void f()` → `void f() override`               |
| `modernize-use-auto`             | Replaces explicit type with `auto` where appropriate | `int x = foo()` → `auto x = foo()`             |
| `modernize-use-nullptr`          | Replaces `NULL` / `0` with `nullptr`                 | `NULL` → `nullptr`                             |
| `modernize-use-using`            | Replaces `typedef` with `using`                      | `typedef int X` → `using X = int`              |
| `modernize-use-enum-class`       | Suggests `enum class` over unscoped `enum`           | `enum Color` → `enum class Color`              |
| `modernize-loop-convert`         | Converts `for` loops to range-for where applicable   | Index-based → range-based                      |
| `modernize-use-starts-ends-with` | Replaces hand-rolled prefix/suffix checks            | `s.find(x) == 0` → `s.starts_with(x)`          |

### 6.2 bugprone-\*

Catches common mistakes that compilers often miss. These are higher-priority checks.

| Check                                 | What it detects                                        |
| :------------------------------------ | :----------------------------------------------------- |
| `bugprone-use-after-move`             | Using an object after it has been moved from           |
| `bugprone-string-integer-assignment`  | Assigning integer to `std::string` (implicit `char`)   |
| `bugprone-narrowing-conversions`      | Implicit narrowing (e.g., `double` to `int`)           |
| `bugprone-redundant-branch-condition` | Same condition tested twice in an `if`/`else if` chain |
| `bugprone-assert-side-effect`         | `assert()` with side effects (removed in release)      |
| `bugprone-sizeof-expression`          | `sizeof(ptr)` instead of `sizeof(*ptr)`                |
| `bugprone-integer-division`           | Integer division where floating-point was intended     |

### 6.3 readability-\*

Enforces consistent style. Some are opinionated — disable the ones that conflict with your project's
conventions.

| Check                                  | What it does                                        |
| :------------------------------------- | :-------------------------------------------------- |
| `readability-identifier-naming`        | Enforces naming conventions (camelCase, snake_case) |
| `readability-const-return-type`        | Warns about unnecessary `const` on return types     |
| `readability-braces-around-statements` | Requires braces on single-line `if`/`else` bodies   |
| `readability-else-after-return`        | Flags `else` after `return` / `break` / `continue`  |
| `readability-implicit-bool-conversion` | Flags implicit conversions to/from `bool`           |
| `readability-simplify-boolean-expr`    | Simplifies redundant boolean expressions            |

### 6.4 performance-\*

Identifies patterns that prevent the compiler from generating optimal code.

| Check                                         | What it detects                                            |
| :-------------------------------------------- | :--------------------------------------------------------- |
| `performance-unnecessary-value-param`         | Function parameters passed by value but only read          |
| `performance-unnecessary-copy-initialization` | Unnecessary copies during initialization                   |
| `performance-for-range-copy`                  | Range-for loop copies elements instead of using references |
| `performance-no-int-to-ptr`                   | Integer-to-pointer conversion without `reinterpret_cast`   |
| `performance-move-const-arg`                  | Moving from a const value (copy, not move, occurs)         |

## 7. Incremental Adoption Strategy

Enabling all checks at once on a large codebase generates thousands of warnings. Use an incremental
strategy to adopt clang-tidy without blocking development.

### Phase 1: Warnings-Only Mode

Run clang-tidy in read-only mode to assess the current state. Do not fail the build.

```yaml
# .clang-tidy — Phase 1: Audit only
Checks: >
  -*, bugprone-*, modernize-use-override, modernize-use-nullptr, modernize-use-auto
WarningsAsErrors: '' # Empty = warnings are not errors
HeaderFilterRegex: 'src/.*'
```

### Phase 2: New Code Enforcement

Use `WarningsAsErrors` only on new or modified files. On CI, run clang-tidy only on the diff:

```bash
# Only analyze files that changed in this commit
git diff --name-only HEAD~1 -- '*.cpp' '*.h' '*.hpp' | \
  xargs clang-tidy -p build/ --warnings-as-errors='*'
```

### Phase 3: Full Enforcement

Once the codebase is clean, enable `WarningsAsErrors: "*"` for the full project.

## 8. Integrating with clangd (IDE Experience)

**clangd** is the language server that powers IDE features (autocomplete, go-to-definition,
diagnostics) for C++ in VS Code, Neovim, CLion, and other editors. clangd reads the `.clang-tidy`
file and surfaces clang-tidy warnings as in-editor diagnostics in real time.

### Configuration for clangd

clangd finds `.clang-tidy` automatically if it exists in a parent directory of the source file.
Ensure your `compile_commands.json` is generated and discoverable:

```bash
# CMake generates compile_commands.json
cmake -S . -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON

# clangd auto-discovers compile_commands.json in build/
# If not, create a symlink at the project root:
ln -sf build/compile_commands.json .
```

### clangd Configuration File

Create a `.clangd` file at the project root for clangd-specific settings:

```yaml
# .clangd
CompileFlags:
  CompilationDatabase: build
Diagnostics:
  UnusedIncludes: Strict
  Suppress:
    - modernize-use-trailing-return-type
  ClangTidy:
    Add: [bugprone-*, modernize-*]
    Remove: [modernize-use-trailing-return-type]
```

### Performance Considerations

- clangd runs clang-tidy checks on the fly as you type. Enabling too many checks can cause latency.
- For large projects, start with `bugprone-*` and `modernize-*` in clangd, and run the full check
  suite via `run-clang-tidy` in CI.
- The `--header-filter` option in `.clang-tidy` reduces analysis scope and speeds up clangd.

## 9. Cppcheck: Usage and Comparison

### Running Cppcheck

```bash
# Basic scan of the entire project
cppcheck --enable=all --suppress=missingIncludeSystem src/

# With project configuration (CMake auto-generated)
cmake -S . -B build -DCMAKE_CXX_CPPCHECK="cppcheck;--enable=all;--error-exitcode=1"

# HTML report output
cppcheck --enable=all --htmlstep=2 --report-minimum-severity=warning src/ --output-file=report.html
```

### Cppcheck vs Clang-Tidy

| Feature             | Clang-Tidy                        | Cppcheck                              |
| :------------------ | :-------------------------------- | :------------------------------------ |
| Parser              | Clang AST (full C++ support)      | Custom parser (limited templates)     |
| Data flow analysis  | Via `clang-analyzer-*` module     | Built-in, strong                      |
| Template support    | Full                              | Limited                               |
| Speed               | Slower (full AST parse)           | Faster                                |
| Autofix             | Yes (`--fix`)                     | No                                    |
| CI/CD integration   | Via CMake or `run-clang-tidy`     | Via CMake or direct invocation        |
| IDE integration     | clangd (real-time)                | Limited (plugin-based)                |
| False positive rate | Moderate (template edge cases)    | Moderate (data flow edge cases)       |
| Best at             | Style, modernization, refactoring | Buffer overruns, leaks, uninitialized |

### When to Use Both

In practice, using **both** tools catches the widest range of bugs. Clang-tidy excels at
modernization and style enforcement; cppcheck excels at data-flow bugs that require path-sensitive
analysis (e.g., using an uninitialized variable on a specific code path).

## Common Pitfalls

- **Enabling `-*` without understanding what it disables.** This turns off ALL checks, then you
  selectively re-enable. Forgetting to re-enable important checks means they are silently skipped.
- **Suppressing warnings instead of fixing them.** Every `NOLINT` comment should have a
  justification. Use `// NOLINT(check-name): reason` to document why the suppression exists.
- **Not pinning clang-tidy version.** Different clang-tidy versions have different check sets. Pin
  the version in CI to avoid surprising new warnings.
- **Ignoring header files.** If `HeaderFilterRegex` is too restrictive, bugs in headers go
  undetected.
- **Running analysis without a compilation database.** Without `compile_commands.json`, clang-tidy
  cannot resolve includes, macros, or platform-specific code correctly.

## 10. Static Analysis for Security (CERT C++ Coding Standards)

Beyond correctness and style, static analysis tools can enforce security rules from the **CERT C++
Coding Standard**. clang-tidy includes the `cert-*` check group, which maps directly to CERT
recommendations:

| CERT Rule | clang-tidy Check | Vulnerability            |
| :-------- | :--------------- | :----------------------- |
| EXP50-CPP | `cert-err52-cpp` | Throwing in destructor   |
| EXP63-CPP | `cert-dcl03-c`   | Implicit conversions     |
| DCL50-CPP | `cert-dcl58-cpp` | Uninitialized const      |
| INT30-C   | `cert-int30-c`   | Unsigned integer wrap    |
| OOP57-CPP | `cert-oop57-cpp` | Copy constructor missing |
| OOP58-CPP | `cert-oop58-cpp` | Move constructor missing |

Enabling `cert-*` in CI is a low-cost way to catch common vulnerability patterns. Many of these
checks are also covered by `bugprone-*` and `cppcoreguidelines-*`, so the overlap is intentional —
CERT rules provide a formal security justification for checks you might already have enabled.

## 11. False Positive Management at Scale

In large codebases (100k+ lines), false positives are inevitable. A disciplined approach to managing
them prevents the suppression mechanism from becoming a liability:

### Tiered Suppression Strategy

1. **Fix immediately:** Warnings with a clear, safe fix. No suppression needed.
2. **Suppress with justification:** Warnings that are false positives but require a documented
   reason: `// NOLINT(bugprone-narrowing-conversion): intentional truncation for wire format`.
3. **Disable at project level:** Warnings that are overwhelmingly false positives for the entire
   codebase (e.g., `cppcoreguidelines-avoid-magic-numbers` in a numerical library). Disable in
   `.clang-tidy`, not per-line.
4. **File-level suppression:** For legacy files that cannot be fixed without a major refactor, use
   `// NOLINTBEGIN` / `// NOLINTEND` blocks.

```cpp
// NOLINTBEGIN(cert-err58-cpp): legacy C API, exceptions not propagated across boundary
extern "C" int legacy_callback(void* ctx, int status) {
    // ...
    return status;
}
// NOLINTEND(cert-err58-cpp)
```

### Tracking Suppressions

Maintain a suppression inventory. In CI, count the number of `NOLINT` comments and fail the build if
the count increases:

```bash
# CI gate: ensure NOLINT count does not grow
NOLINT_COUNT=$(grep -r "NOLINT" src/ | wc -l)
echo "NOLINT suppressions: $NOLINT_COUNT"
if [ "$NOLINT_COUNT" -gt "$ALLOWED_SUPPRESSIONS" ]; then
    echo "ERROR: NOLINT count exceeds threshold"
    exit 1
fi
```

## 12. clang-tidy Performance Profiling

For large projects, clang-tidy can become the bottleneck in the CI pipeline. Understanding where
time is spent helps optimize the analysis configuration:

- **Per-file overhead:** Each file requires a full AST parse (~0.5-2 seconds for a typical source
  file). This is unavoidable.
- **Check overhead:** Data flow analysis checks (`clang-analyzer-*`) are 3-10x slower than simple
  AST pattern matching checks (`modernize-*`). Enable `clang-analyzer-*` only in a dedicated CI job.
- **Header traversal:** If `HeaderFilterRegex` allows analysis of deeply included system headers,
  analysis time can explode. Restrict the filter to project headers.

```bash
# Profile clang-tidy on a single file
time clang-tidy -p build/ src/main.cpp --checks='bugprone-*,modernize-*' 2>&1

# Compare with data flow analysis enabled
time clang-tidy -p build/ src/main.cpp --checks='bugprone-*,modernize-*,clang-analyzer-*' 2>&1
```

In practice, splitting analysis into a fast path (`bugprone-*`, `modernize-*`, `readability-*`) that
runs on every commit and a slow path (`clang-analyzer-*`, `cppcoreguidelines-pro-bounds-*`) that
runs nightly provides the best developer experience.

## See Also

- [Debugger Configuration](1_language_server_protocol_configuration.md)
- [Sanitizers](4_sanitizer.md)
