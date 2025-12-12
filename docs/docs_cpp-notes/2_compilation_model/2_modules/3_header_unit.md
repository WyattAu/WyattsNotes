---
title: Header Units
date: 2025-12-12T04:19:09.448Z
tags:
  - cpp
categories:
  - cpp
slug: header-units
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The transition from a text-based inclusion model (`#include`) to a semantic module model (`import`) cannot happen instantaneously. The C++ ecosystem relies on millions of lines of headers (POSIX, Windows SDK, OpenSSL, Boost) that may never be converted to native modules.

To bridge this gap, C++20/23 introduces two architectural mechanisms:

1. **The Global Module Fragment (GMF):** A reliable sandbox for `#include` directives within module files.
2. **Header Units:** A mechanism to compile legacy headers into Binary Module Interfaces (BMIs) on the fly, allowing them to be imported like modules.

## 1. The Global Module Fragment (GMF)

The GMF is the primary mechanism for consuming legacy headers inside a module. It creates a transitional environment where the preprocessor functions normally, but the resulting declarations are seamlessly available to the module body.

### Architecture

The GMF is delimited by the `module;` statement at the very top of the file and ends at the `export module [Name];` declaration.

```cpp
// src/network.cppm
module; // START GMF

// Legacy inclusions happen here.
// The preprocessor runs typically, handling macros and text substitution.
#include <sys/socket.h>
#include <openssl/ssl.h>

export module Network; // END GMF

// From this point forward, the preprocessor state is isolated.
// Macros defined in the headers above ARE visible here.
// Macros defined below ARE NOT visible to importers of 'Network'.

import std;

export namespace Network {
    void init_socket() {
        // We can use sockaddr_in from sys/socket.h
        sockaddr_in addr{};
    }
}
```

### Isolation Rules

1. **Leakage:** Declarations in the GMF (like `sockaddr_in`) are **reachable** by the module implementation, but they are not **exported** to consumers of `Network` unless explicitly re-exported.
2. **Macro Hygiene:** Macros defined in the GMF are visible inside the module. However, when a consumer writes `import Network;`, they **do not** inherit these macros. This prevents the "macro pollution" common in header-based development.

## 2. Header Units

**Header Units** represent a more aggressive modernization strategy. They allow the compiler to treat a legacy header (`vector`, `windows.h`) as if it were a module.

### Syntax

Instead of `#include "header.h"`, the syntax is `import "header.h";` (or `import <header>;`).

```cpp
// src/main.cpp
import <vector>;  // Header Unit import
import "my_lib.h";

int main() {
    std::vector<int> v; // Works
}
```

### The Synthesis Mechanism

When the build system encounters `import "header.h";`:

1. It scans `header.h`.
2. It compiles `header.h` into a BMI (`.pcm` / `.ifc`).
3. It replaces the text inclusion with a binary load of the interface.

### Benefits vs. Risks

| Feature     | `#include "h"`             | `import "h"` (Header Unit)          |
| :---------- | :------------------------- | :---------------------------------- |
| **Parsing** | Textual copy-paste.        | Semantic load (BMI).                |
| **Speed**   | Slow (re-parsed every TU). | Fast (parsed once per build graph). |
| **Macros**  | Leaks everywhere.          | **Leaks**. (Unique exception).      |
| **ODR**     | Fragile.                   | Strict.                             |

:::warning Macro Behavior
Header Units are the **only** modular construct that exports macros. If `import "config.h";` is used, and `config.h` defines `#define MAX_SIZE 10`, the importer sees `MAX_SIZE`. This preserves compatibility but negates the hygienic benefits of native modules.
:::

### Constraints: "Importable Headers"

Not all headers can be Header Units. To be importable, a header must be:

1. **Self-Contained:** It does not rely on macros defined by the importer (e.g., `#define _WIN32_WINNT ...` before include).
2. **Idempotent:** It contains Include Guards.

## 3. The `import std;` Named Module (C++23)

In C++23, the Standard Library itself is modularized. This renders Header Units for the STL (`import <vector>;`) obsolete.

### `import std;`

- Exports the entire Standard Library (`std::vector`, `std::print`, etc.).
- **Does not** export global macros (like `assert` or `errno` in some implementations).
- **Compilation Speed:** Massive improvement. Instead of parsing megabytes of headers for every file, the compiler loads one pre-compiled BMI.

### `import std.compat;`

- Exports everything in `import std;`.
- Additionally exports the C Standard Library symbols into the **Global Namespace** (e.g., `::printf` vs `std::printf`).
- Use this for migrating legacy C++ codebases.

## 4. Build System Implementation

Handling Header Units and GMF requires coordination between the compiler and build system to locate headers and determine build order.

### CMake Configuration

As of CMake 3.28, support for `import std;` is becoming standard, but Header Units require specific compiler handling.

**Standard C++23 Configuration:**

```cmake
cmake_minimum_required(VERSION 3.28)
project(ModernApp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_SCAN_FOR_MODULES ON)

# Required for 'import std;' in Clang/GCC currently
# MSVC handles it automatically in recent VS updates
if(CMAKE_CXX_COMPILER_ID MATCHES "Clang")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fprebuilt-module-path=${CMAKE_BINARY_DIR}")
endif()

add_executable(App src/main.cpp)
```

### Handling External Libraries (OpenSSL, Qt)

For external dependencies that are not modularized, the **Global Module Fragment** is the architecturally correct integration point. Do not attempt to compile complex third-party headers (like `windows.h` or `openssl/ssl.h`) as Header Units unless you can guarantee they are "Importable."

**Correct Pattern:**

```cpp
module;
#include <QApplication> // Legacy include in GMF
export module Gui;

import std;

export namespace Gui {
    void run(int argc, char** argv) {
        QApplication app(argc, argv);
        app.exec();
    }
}
```

## Architectural Migration Strategy

When modernizing a codebase to C++23 modules:

1. **Step 1: GMF Adoption.** Move all `#include` directives in `.cpp` files to the Global Module Fragment of a new module. This validates that your headers are self-contained.
2. **Step 2: Modularize Internals.** Convert your own project's components to Modules.
3. **Step 3: `import std;`.** Replace standard library includes with the named module.
4. **Avoid Header Units.** Use Header Units (`import "foo.h"`) only for headers you control that cannot be refactored into modules yet. For system headers, stick to the GMF mechanism.
