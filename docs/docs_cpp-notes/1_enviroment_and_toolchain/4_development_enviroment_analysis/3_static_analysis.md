---
title: Static Analysis
date: 2025-12-11T06:39:06.995Z
tags:
  - cpp
categories:
  - cpp
slug: static-analysis
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Static Analysis involves examining source code without executing it. Unlike the compiler, which focuses on grammar and binary generation, static analyzers focus on correctness, readability.

In a robust architecture, static analysis is not a manual task performed occasionally; it is a **Continuous Pipeline** integrated directly into the build system. Following covers the two dominant tools in the ecosystem: **clang-tidy** and **Cppcheck**.

## 1. Clang-Tidy (The AST Linter)

**clang-tidy** is part of the LLVM project. Because it uses the Clang compiler frontend, it parses the code into a full Abstract Syntax Tree (AST). It understands templates, preprocessor macros, and type deductions with the exact same precision as the compiler.

### Capabilities

1. **Linter:** Checks for style violations and legacy patterns (e.g., `modernize-use-std-print`).
2. **Static Analyzer:** Performs path-sensitive analysis to find null pointer dereferences or use-after-free (via the `clang-analyzer-*` module).
3. **Refactoring Tool:** Can automatically apply fixes to the source code.

### Configuration Architecture (`.clang-tidy`)

Configuration is managed via a `.clang-tidy` file in the project root. This ensures every developer applies the same rules.

**Best Practice C++23 Configuration:**

```yaml
---
# Enable specific checks.
# syntax: +enable, -disable
Checks: >
  -*,
  bugprone-*,
  cert-*,
  clang-analyzer-*,
  concurrency-*,
  cppcoreguidelines-*,
  misc-*,
  modernize-*,
  performance-*,
  readability-*,
  -modernize-use-trailing-return-type,
  -cppcoreguidelines-avoid-magic-numbers

# Treat all warnings as errors in CI
WarningsAsErrors: "*"

# header-filter ensures we analyze headers in our project,
# but ignore headers in third_party/ or /usr/include
HeaderFilterRegex: "src/.*"
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

**Cppcheck** uses a custom parser, not Clang. While it may struggle with highly complex template metaprogramming, it excels at **Data Flow Analysis**. It is often faster than clang-tidy and finds different classes of bugs, particularly related to buffer overruns, uninitialized variables, and resource leaks in execution paths that the compiler optimization phase might mask.

### Suppression Mechanics

Cppcheck uses inline comments for suppression.

```cpp
// cppcheck-suppress uninitvar
int x;
```

## 3. CMake Pipeline Integration

The architectural standard is to run analysis **during compilation**. CMake provides native properties to inject these tools into the build graph.

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

**Behavior:**
CMake will execute `clang-tidy` and `cppcheck` on every source file _as it is compiled_. If the analyzer reports an error (and `WarningsAsErrors` is set), the build fails immediately.

### Performance Consideration

Static analysis is computationally expensive.

- **Debug Builds:** Disable analysis to keep iteration times fast.
- **CI/Release Builds:** Enable analysis to enforce quality gates.

## 4. Execution via Compilation Database

Sometimes running analysis as part of the build is too slow. You can run `clang-tidy` independently using the `compile_commands.json` database generated in Module 4.1.

This allows for parallel execution decoupled from the compiler.

```bash
# Analyze the entire project using parallel execution
# -p points to the build directory containing compile_commands.json
run-clang-tidy -p build/
```

This script (`run-clang-tidy`) wraps the binary and schedules analysis jobs across all available cores.

## 5. Architectural Strategy for CI/CD

In a Continuous Integration pipeline, the static analysis step serves as a **Quality Gate**.

### Pipeline Stages

1. **Fast Feedback:** Build & Test (No Analysis).
2. **Deep Analysis:** Static Analysis (Parallel Job).

### Caching Strategy

Since `clang-tidy` does not natively support caching, running it on the entire codebase for every commit is wasteful.

**Integration with CCache:**
Modern versions of `clang-tidy` effectively ignore `ccache`. However, specialized wrappers or advanced build systems (like Bazel) can cache analysis results.

In CMake/Ninja workflows, the standard mitigation is **Incremental Analysis**:

- On developer machines: CMake integration only analyzes files that are recompiled.
- On CI agents: Use `git diff` to identify changed files and run `clang-tidy` only on the changeset.

```bash
# CI Script Example: Analyze only changed files
git diff --name-only origin/main | grep '\.cpp$' | xargs clang-tidy -p build/
```
