---
title: Header Units
date: 2025-12-12T04:19:09.448Z
tags:
  - cpp
categories:
  - cpp
slug: header-units
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

The transition from a text-based inclusion model (`#include`) to a semantic module model (`import`)
cannot happen instantaneously. The C++ ecosystem relies on millions of lines of headers (POSIX,
Windows SDK, OpenSSL, Boost) that may never be converted to native modules.

To bridge this gap, C++20/23 introduces two architectural mechanisms:

1. **The Global Module Fragment (GMF):** A reliable sandbox for `#include` directives within module
   files.
2. **Header Units:** A mechanism to compile legacy headers into Binary Module Interfaces (BMIs) on
   the fly, allowing them to be imported like modules.

## 1. What Header Units Solve

In the traditional `#include` model, every translation unit that includes a header re-parses the
entire header text. For large headers like `&lt;vector&gt;` or `&lt;windows.h&gt;`, this can mean
parsing tens of thousands of lines for every TU. The preprocessor performs textual inclusion, macro
expansion, and conditional compilation independently for each TU.

Header units address this redundancy by **compiling the header once** into a BMI, which is then
imported by all consumers. This is analogous to precompiled headers (PCH) but with semantic
guarantees:

- The header is parsed only once per build.
- The BMI captures the semantic interface (declarations, types, templates).
- Macro behavior is preserved (unlike native modules).

## 2. The Global Module Fragment (GMF)

The GMF is the primary mechanism for consuming legacy headers inside a module. It creates a
transitional environment where the preprocessor functions normally, but the resulting declarations
are seamlessly available to the module body.

### Architecture

The GMF is delimited by the `module;` statement at the very top of the file and ends at the
`export module [Name];` declaration.

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

1. **Leakage:** Declarations in the GMF (like `sockaddr_in`) are **reachable** by the module
   implementation, but they are not **exported** to consumers of `Network` unless explicitly
   re-exported.
2. **Macro Hygiene:** Macros defined in the GMF are visible inside the module. However, when a
   consumer writes `import Network;`, they **do not** inherit these macros. This prevents the "macro
   pollution" common in header-based development.

## 3. Importing a Header Unit vs Including It

### Syntax

Instead of `#include "header.h"`, the syntax is `import "header.h";` (or `import &lt;header&gt;;`).

```cpp
// src/main.cpp
import <vector>;  // Header Unit import
import "my_lib.h";

int main() {
    std::vector<int> v; // Works
}
```

### Key Differences from `#include`

| Feature            | `#include "h"`             | `import "h"` (Header Unit)          |
| :----------------- | :------------------------- | :---------------------------------- |
| **Parsing**        | Textual copy-paste.        | Semantic load (BMI).                |
| **Speed**          | Slow (re-parsed every TU). | Fast (parsed once per build graph). |
| **Macros**         | Leaks everywhere.          | **Leaks**. (Unique exception).      |
| **ODR**            | Fragile.                   | Strict.                             |
| **Include guards** | Required for safety        | Not needed (no textual inclusion).  |
| **Preprocessing**  | Full preprocessing applied | Single precompile pass.             |

### The Synthesis Mechanism

When the build system encounters `import "header.h";`:

1. It scans `header.h`.
2. It compiles `header.h` into a BMI (`.pcm` / `.ifc`).
3. It replaces the text inclusion with a binary load of the interface.

This means the header is processed once by the preprocessor and once by the compiler's semantic
analysis. All subsequent importers load the pre-built BMI, skipping both steps.

## 4. Header Unit Naming and File System Layout

Header units use the header's path as their identity:

- `import &lt;vector&gt;;` refers to the standard library header named `vector`.
- `import "utils/helpers.h";` refers to the file `utils/helpers.h` relative to the include paths.

The build system must locate the header using the same search rules as `#include` (system include
paths for `&lt;&gt;`, then user include paths for `""`).

### Naming in the BMI

The BMI for a header unit is typically named after the header path:

```bash
# Clang generates BMIs with a path-based naming scheme
clang++ -std=c++23 --precompile header_unit.hpp -o header_unit.hpp.pcm

# MSVC uses an .ifc file alongside the header
```

### Clang Command Line

```bash
# Compile a header unit
clang++ -std=c++23 -c --precompile utils/helpers.h -o utils/helpers.h.pcm

# Import the header unit
clang++ -std=c++23 -c main.cpp -fmodule-file=utils/helpers.h=utils/helpers.h.pcm
```

### GCC Command Line

```bash
# GCC uses -fmodule-header flag
g++ -std=c++23 -fmodules-ts -fmodule-header utils/helpers.h -o utils/helpers.h.gcm
```

## 5. GCC vs. Clang Implementation Differences

<Tabs>
  <TabItem value="clang" label="Clang" default>

Clang treats header units as a distinct BMI type. The `--precompile` flag with a header file
generates a header-unit BMI. Clang tracks whether a BMI is a named module or a header unit
internally.

```bash
# Clang: explicit header unit compilation
clang++ -std=c++23 --precompile -x c++-system-header vector -o vector.pcm
clang++ -std=c++23 --precompile -x c++-header my_lib.h -o my_lib.h.pcm
```

Clang requires specifying the header type (`-x c++-header` for user headers, `-x c++-system-header`
for system headers) when precompiling header units.

  </TabItem>
  <TabItem value="gcc" label="GCC">

GCC uses the `-fmodule-header` flag to indicate that an input file should be compiled as a header
unit rather than a module interface. GCC's header unit support is less mature than Clang's.

```bash
# GCC: header unit compilation
g++ -std=c++23 -fmodules-ts -fmodule-header my_lib.h
# Generates a .gcm BMI that can be imported
```

GCC relies on the module mapper to resolve header unit imports at compile time. The mapper
associates header paths with their corresponding BMI files.

  </TabItem>
</Tabs>

## 6. Interaction with Traditional Headers

Header units can coexist with traditional `#include` directives in the same project, but mixing them
requires care:

```cpp
// Mixing is allowed but discouraged
#include <cstdio>       // Traditional include
import <vector>;        // Header unit import
#include "legacy.h";    // Traditional include
import "modern.h";      // Header unit import
```

**Problems with mixing:**

1. **Macro conflicts:** A macro defined by `#include &lt;cstdio&gt;` may affect the behavior of
   `import "modern.h";` if `modern.h` uses conditional compilation based on that macro.
2. **ODR violations:** If `legacy.h` and `modern.h` both define the same entity, the ODR is
   violated. The header unit model enforces ODR more strictly than textual inclusion.
3. **Build system complexity:** The build system must track both `#include` dependencies and
   `import` dependencies, using different scanning mechanisms for each.

**Best practice:** Pick one approach per header. Either `#include` it everywhere or `import` it
everywhere. Do not mix for the same header across different TUs.

## 7. Macro Export in Header Units

Header units are the **only** modular construct that exports macros. This is a deliberate
compatibility decision.

```cpp
// config.h
#define MAX_SIZE 100
#define DEBUG_MODE 1
```

```cpp
// main.cpp
import "config.h";  // Header unit import

int buf[MAX_SIZE];  // Works: MAX_SIZE is visible
#if DEBUG_MODE       // Works: DEBUG_MODE is visible
// ...
#endif
```

This means:

- **Named modules** (`export module Foo;`) do **not** export macros. Importers do not see macros
  defined in the module interface.
- **Header units** (`import "config.h";`) **do** export macros. Importers see all macros defined by
  the header.

This asymmetry exists because many headers (especially configuration headers) are designed to
communicate exclusively through macros. Making them invisible would break the entire ecosystem.

**Implications:**

- Header units that define macros still suffer from macro pollution in importers.
- You cannot use header units to achieve macro hygiene. Use the Global Module Fragment with named
  modules for that.
- If a header's sole purpose is to define macros, it is a poor candidate for header unit conversion.
  Keep using `#include` or move the macros to `constexpr` variables in a named module.

## 8. Current Limitations and Edge Cases

### Not All Headers Are Importable

A header must be **self-contained** and **idempotent** to be used as a header unit:

- **Self-contained:** It must not depend on macros defined by the includer before the include
  directive.
- **Idempotent:** It must have include guards or `#pragma once`.

Headers that violate these rules will compile differently as header units than as includes, causing
subtle bugs.

```cpp
// BAD: not self-contained
// User must define PLATFORM before including
#ifdef PLATFORM_LINUX
void linux_specific();
#elif defined(PLATFORM_WINDOWS)
void windows_specific();
#endif
```

### Order-Dependent Includes

Headers that must be included in a specific order (common in older C APIs) cannot be reliably
converted to header units:

```cpp
// BAD: order matters
#include <sys/types.h>  // Must be before sys/socket.h
#include <sys/socket.h>
```

With `#include`, the textual inclusion order is preserved. With `import`, each header unit is
compiled independently, and the order of `import` directives may not replicate the textual order
semantics.

### Conditional Compilation

Headers that rely heavily on preprocessor conditionals are problematic as header units. The BMI
captures one specific configuration. If different TUs need different configurations of the same
header, header units cannot accommodate this.

```cpp
// config.h defines different things based on BUILD_VARIANT
// If TUs A and B need different BUILD_VARIANT values, they cannot
// share the same header unit BMI.
```

### System Headers

Standard library header units (`import &lt;vector&gt;;`) are supported by Clang and MSVC but the
experience varies. GCC's support is experimental. In C++23, `import std;` is the preferred approach
for the standard library, making individual STL header units obsolete.

### Third-Party Headers

Complex third-party headers (Qt, OpenSSL, Boost) are generally **not** suitable for header unit
conversion unless the library explicitly supports it. Use the Global Module Fragment instead.

## 9. Architectural Migration Strategy

When modernizing a codebase to C++23 modules:

1. **Step 1: GMF Adoption.** Move all `#include` directives in `.cpp` files to the Global Module
   Fragment of a new module. This validates that your headers are self-contained.
2. **Step 2: Modularize Internals.** Convert your own project's components to Modules.
3. **Step 3: `import std;`.** Replace standard library includes with the named module.
4. **Avoid Header Units.** Use Header Units (`import "foo.h"`) only for headers you control that
   cannot be refactored into modules yet. For system headers, stick to the GMF mechanism.

## Common Pitfalls

- **Attempting to header-unit non-self-contained headers:** If a header expects the user to
  `#define` something before including it, it cannot be a header unit. Use `#include` in the GMF
  instead.
- **Macro-only headers:** Headers that define only macros (no declarations) are poor candidates for
  header units. The BMI provides no semantic benefit over `#include`.
- **ODR violations with mixed usage:** Including a header in one TU and importing it as a header
  unit in another TU can violate the ODR if the preprocessor state differs.
- **Build system not configured for header units:** CMake requires explicit configuration
  (`CMAKE_CXX_SCAN_FOR_MODULES ON`) and compiler-specific flags for header unit support.

## 10. BMI Caching and Reproducibility

Header unit BMIs are subject to the same caching and invalidation rules as named module BMIs. The
cache key includes the compiler version, flags (`-std=c++23`, `-D...`), and the full transitive
include chain. However, header unit BMIs have an additional complication: **preprocessor state
matters**.

Unlike named modules, which are macro-free (macros from the GMF are not exported), header units must
preserve macro definitions. This means two header unit BMIs compiled with different `-D` flags are
**not interchangeable**, even if the source file is identical. This is a fundamental difference from
named module BMIs and a primary reason why header units are harder to cache reliably.

The build system must associate each header unit BMI with the exact set of preprocessor defines used
during its compilation. If a TU compiled with `-DDEBUG=1` imports a header unit that was compiled
without that flag, the resulting BMI will not contain the debug-guarded code paths, leading to
missing symbols at link time. Consider:

```bash
# These produce DIFFERENT BMIs for config.h
clang++ -std=c++23 --precompile -DDEBUG=1 -x c++-header config.h -o config_debug.h.pcm
clang++ -std=c++23 --precompile -x c++-header config.h -o config_release.h.pcm
```

If a TU compiled with `-DDEBUG=1` imports `config.h`, the build system must locate and load the
`config_debug.h.pcm` BMI, not the release variant. Build systems like CMake track this through the
P1689 scanning protocol, but the **dependency scanner must be aware of the compile flags** to select
the correct BMI. This is why header units increase build system complexity significantly compared to
named modules.

## 11. Header Units and `#pragma once` Interaction

`#pragma once` is a compiler extension that prevents multiple inclusion of the same header. When a
header is compiled as a header unit, the compiler processes it exactly once to produce the BMI, so
include guards and `#pragma once` are technically unnecessary for the header unit itself.

However, a header may be **both** `#include`d and `import`ed across different TUs in the same
project. If the header lacks include guards and is `#include`d transitively by another header that
is imported as a header unit, the preprocessor may process the text multiple times during BMI
generation. Therefore, include guards remain a best practice even for headers intended to be used as
header units.

## 12. Diagnostic Experience

Error messages originating from header unit code are notoriously difficult to interpret. Because the
compiler operates on the serialized BMI rather than the original source text, error locations may
reference internal BMI offsets rather than source file line numbers. Clang has improved this
significantly in recent versions by embedding source location metadata in `.pcm` files, but GCC and
MSVC still produce cryptic diagnostics for errors in imported header units.

**Mitigation:** Keep header unit headers small and well-tested. If a header is complex enough that
diagnostics matter, prefer converting it to a named module where the compiler can provide full
source-level error reporting.

## See Also

- [Binary Module Interfaces (BMI)](./2_bmi.md)
- [The C Runtime (CRT)](./4_c_runtime.md)
