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

### Formal Basis

The C++ Standard defines a header unit as a synthesized module unit whose module-name is the header
file's textual representation [N4950 S15.2]. When the compiler encounters `import "foo.h";`, it
constructs a module unit conceptually equivalent to:

```cpp
module;
#include "foo.h"
export module "foo.h";
export // all top-level declarations from foo.h
```

This formalization explains two critical behaviors: (1) macros defined by the header are visible to
the importer, because they are present before the `export module` boundary; and (2) all declarations
are exported, because the `export` keyword applies to the translation unit's interface.

### Proof: Header Units Eliminate Redundant Parsing

Consider a project with TUs $T_1, T_2, \ldots, T_n$, each including header $H$. Let $P(H)$ denote
the cost of parsing $H$ and $S(H)$ the cost of serializing its semantic interface.

**`#include` model:** Each TU independently preprocesses and parses $H$. Total cost:

$$C_{\text{include}} = n \cdot (P(H) + S(H))$$

**Header unit model:** $H$ is parsed once, producing a BMI. Each TU deserializes the BMI. Let $D(H)$
denote deserialization cost, where $D(H) \lt P(H)$ because deserialization reads a pre-structured
AST rather than re-parsing raw text. Total cost:

$$C_{\text{header\_unit}} = P(H) + S(H) + n \cdot D(H)$$

The savings are:

$$C_{\text{include}} - C_{\text{header\_unit}} = (n - 1)(P(H) + S(H) - D(H))$$

Since $P(H) \gt D(H)$ for any non-trivial header, the savings grow linearly with the number of TUs.
For a header like `&lt;vector&gt;` with $P(H) \approx 50\text{ms}$ and $D(H) \approx 5\text{ms}$
across 100 TUs, the savings are approximately $4.5$ seconds per incremental build.

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

### Formal Basis

Per [N4950 S15.1], the global module fragment is the region of a module unit that precedes the
module-declaration. The key semantic property is that names introduced by preprocessing directives
(including `#include`) in the global module fragment are attached to the global module and are
**not** owned by the named module being declared.

This means the declarations are **reachable** within the module implementation, but they are not
**exported** to importers of the named module [N4950 S15.5.2]. The standard distinguishes between
"exported" names (visible to importers) and "reachable" names (visible for name lookup within the
module but not part of its interface).

### Isolation Rules

1. **Leakage:** Declarations in the GMF (like `sockaddr_in`) are **reachable** by the module
   implementation, but they are not **exported** to consumers of `Network` unless explicitly
   re-exported.
2. **Macro Hygiene:** Macros defined in the GMF are visible inside the module. However, when a
   consumer writes `import Network;`, they **do not** inherit these macros. This prevents the "macro
   pollution" common in header-based development.

### Proof: GMF Prevents Macro Pollution

Consider a header `platform.h` that defines `#define MAX_CONNECTIONS 100`. Two scenarios:

**Scenario A -- `#include` in every TU:** Every TU that includes `platform.h` or any header that
transitively includes it acquires the `MAX_CONNECTIONS` macro. This macro can interfere with
unrelated code in any TU that happens to define a local variable named `MAX_CONNECTIONS`, causing
silent redefinition.

**Scenario B -- GMF in module `Network`:** The macro `MAX_CONNECTIONS` is visible inside
`network.cppm` but is **not** propagated to any TU that writes `import Network;`. The standard
guarantees this because the `export module` declaration terminates the preprocessing scope of the
GMF [N4950 S15.1 p5], and macros are not entities that participate in module export/import semantics
(except in header units, discussed in Section 7).

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
| **Re-export**      | Not applicable             | Possible via `export import`        |
| **Include order**  | Matters (textual)          | Matters (macro state dependent)     |

### The Synthesis Mechanism

When the build system encounters `import "header.h";`:

1. It scans `header.h`.
2. It compiles `header.h` into a BMI (`.pcm` / `.ifc`).
3. It replaces the text inclusion with a binary load of the interface.

This means the header is processed once by the preprocessor and once by the compiler's semantic
analysis. All subsequent importers load the pre-built BMI, skipping both steps.

### Formal Semantic Difference

Per [N4950 S15.2], a header-unit import is a module import, not a preprocessing directive. This
means:

- The header unit is processed as a separate translation unit [N4950 S5.2].
- It contributes declarations to the importing TU's scope as if the declarations were declared in
  the global module fragment.
- The `import` directive is a module-import-declaration [N4950 S7.6.5], which obeys module
  visibility rules (the imported names are **exported** to the importing TU).

The critical distinction: `#include` performs **textual substitution** (preprocessing), while
`import` performs **semantic import** (name binding). The latter can be type-checked, ordered, and
cached independently.

### Proof: Header Units Enforce Stricter ODR

Consider a header `widget.h` containing:

```cpp
struct Widget {
    int x;
    double y;
};
```

With `#include`, if TU-A includes `widget.h` with `#define EXTRA_FIELD` before the include, and TU-B
includes it without that define, the two TUs may see different definitions of `Widget`. This
violates the ODR [N4950 S6.3], but the violation is undetectable at compile time because each TU
compiles independently.

With header units, the header is compiled **once** with a specific preprocessor state. All importers
see the **same** definition (the one baked into the BMI). If a different TU needs a different
preprocessor configuration, it requires a different BMI, which the build system must track. This
makes ODR violations **detectable** at the build system level (mismatched BMIs) rather than
remaining latent until runtime.

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

### MSVC Command Line

```bash
# MSVC uses /exportHeader (or /headerUnit with /ifcOutput)
cl.exe /std:c++23 /exportHeader /headerUnit:angle utils\helpers.h /ifcOutput utils\helpers.h.ifc

# Consumer
cl.exe /std:c++23 /headerUnit:angle utils\helpers.h=utils\helpers.h.ifc main.cpp
```

## 5. GCC vs. Clang vs. MSVC Implementation Differences

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
for system headers) when precompiling header units. The `-fmodule-file` flag maps header paths to
BMI files for consumers.

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
  <TabItem value="msvc" label="MSVC">

MSVC uses `/exportHeader` to compile a header as a header unit, producing a `.ifc` file. The
`/headerUnit` flag specifies the mapping from header names to `.ifc` files for consumers.

```bash
# MSVC: header unit compilation
cl.exe /std:c++23 /exportHeader /headerUnit:angle utils\helpers.h /ifcOutput utils\helpers.h.ifc

# Consumer references the header unit
cl.exe /std:c++23 /headerUnit:angle utils\helpers.h=utils\helpers.h.ifc main.cpp
```

MSVC integrates header unit scanning into its built-in dependency scanner, which CMake consumes via
the P1689 protocol.

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

### The Preprocessor State Interaction Problem

When `#include` and `import` are mixed in the same TU, the preprocessor state established by
`#include` directives before an `import` directive can affect the header unit's behavior during BMI
generation but not during BMI consumption. Consider:

```cpp
#define CUSTOM_ALLOC 1
#include "alloc.h"      // alloc.h uses CUSTOM_ALLOC
import "data.h";         // data.h was compiled WITHOUT CUSTOM_ALLOC
```

The `import "data.h"` loads a pre-built BMI that was compiled without `CUSTOM_ALLOC` in scope. If
`data.h` conditionally includes `alloc.h` or depends on `CUSTOM_ALLOC`, the imported version may
differ from what a textual `#include` would produce. This discrepancy is silent and dangerous.

## 7. Macro Export in Header Units

Header units are the **only** modular construct that exports macros. This is a deliberate
compatibility decision mandated by the standard's treatment of header units as synthesized module
units [N4950 S15.2].

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

### Proof: Why Named Modules Cannot Export Macros

Macros are not part of the C++ type system. They are preprocessing tokens [N4950 S6.10] that are
expanded before the compiler performs semantic analysis. The module system operates at the semantic
level -- it exports **declarations** (entities with names, types, and linkage). Macros have no type,
no linkage, and no namespace qualification. Therefore, the module export mechanism [N4950 S15.5.2]
has no way to represent them.

Header units are a special case because they are defined as a _synthesis_ of `#include` and module
semantics [N4950 S15.2]. The standard specifies that the preprocessor state (including macros) from
the header is made available to importers as a concession to compatibility.

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
  unit in another TU can violate the ODR if the preprocessor state differs. The build system may not
  detect this because the two compilation paths use different dependency tracking mechanisms.
- **Build system not configured for header units:** CMake requires explicit configuration
  (`CMAKE_CXX_SCAN_FOR_MODULES ON`) and compiler-specific flags for header unit support.
- **Assuming header units provide macro hygiene:** Unlike named modules, header units export macros.
  If macro isolation is the goal, use the GMF with a named module instead.
- **Forgetting that header unit BMI identity includes preprocessor state:** Two BMIs for the same
  header compiled with different `-D` flags are distinct. The build system must track this
  distinction or produce subtle link errors.

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

## 13. Header Units in the Standard Library Context

C++23 introduces the `import std;` named module as the preferred way to consume the standard library
[P2465R3]. This raises the question of how individual standard library header units relate to the
named module.

### `import &lt;header&gt;` vs `import std;`

| Aspect               | `import &lt;vector&gt;`     | `import std;`                           |
| :------------------- | :-------------------------- | :-------------------------------------- |
| **Scope**            | Single header               | All standard library headers            |
| **BMI count**        | One BMI per imported header | One BMI for the entire standard library |
| **Macro visibility** | Yes (header unit semantics) | No (named module semantics)             |
| **Implementation**   | Compiler-specific           | Compiler + stdlib collaboration         |
| **Performance**      | Good (per-header caching)   | Better (single large BMI, loaded once)  |

The `import std;` approach is strictly superior for new code because it provides macro hygiene (no
macro leakage) and a single BMI to cache. Individual header unit imports (`import &lt;vector&gt;`)
remain relevant during incremental migration or when a project needs to mix header-unit and
named-module imports.

## 14. `export import` for Header Units

A named module can re-export a header unit, making its declarations available to downstream
importers:

```cpp
// platform.cppm
module;
#include <pthread.h>
export module Platform;
export import <pthread.h>;  // Re-export the header unit
```

Consumers of `Platform` gain access to the pthread declarations without needing their own
`import &lt;pthread.h&gt;`. This is the standard's mechanism for wrapping legacy headers in a module
interface [N4950 S15.5.2].

Note that the `export import` propagates the header unit's macro definitions to the importer. If
macro hygiene is desired, the header must be included only in the GMF (without `export import`), and
the declarations must be re-exported manually.

## 15. Header Units and the P1689 Scanning Protocol

Build systems that support header units must discover header unit imports during the dependency
scanning phase. The P1689R5 protocol defines how scanners report header unit dependencies:

```json
{
  "version": 1,
  "rules": [
    {
      "primary-output": "CMakeFiles/App.dir/main.cpp.o",
      "depends": [
        { "type": "module", "name": "Engine" },
        { "type": "header-unit", "unique-on-source-path": true, "path": "utils/helpers.h" },
        { "type": "header-unit", "unique-on-source-path": true, "path": "<vector>" }
      ]
    }
  ]
}
```

The scanner distinguishes between named module imports (`type: "module"`) and header unit imports
(`type: "header-unit"`). For header units, the build system must:

1. Compile the header into a BMI before any TU that imports it.
2. Pass the BMI path to the consumer via compiler-specific flags (`-fmodule-file`, `/headerUnit`).
3. Track the header unit BMI as a build edge in the dependency graph.

This additional complexity is why header unit support requires build system integration (CMake
3.28+) and cannot be achieved with manual compiler invocations alone.

## 16. Header Units vs Precompiled Headers

Header units are often compared to Precompiled Headers (PCH), but they serve fundamentally different
purposes:

| Aspect                     | PCH                                       | Header Unit                           |
| :------------------------- | :---------------------------------------- | :------------------------------------ |
| **Scope**                  | Arbitrary set of headers, order matters   | Single header                         |
| **Macro state**            | Captures all macros at PCH creation point | Captures macros defined by the header |
| **Reusability**            | One PCH per TU (not shareable across TUs) | One BMI shared across all importers   |
| **Semantic guarantees**    | None (textual inclusion)                  | ODR enforcement via BMI               |
| **Build system awareness** | Manual (compiler flag)                    | Automatic (P1689 scanning)            |
| **Module integration**     | Cannot be imported via `import`           | Importable via `import "h"`           |
| **Macro leakage**          | Total (all macros leak)                   | Leaks header's macros only            |

The key architectural difference is that PCH is a **performance optimization** for the existing
`#include` model, while header units are a **semantic construct** that participates in the module
system. PCH does not change how the preprocessor works; header units do.

PCH remains useful for scenarios where you need to precompile a large set of headers that are always
included together (e.g., a "unity" PCH containing all STL headers). Header units are better when you
need modular semantics (ODR enforcement, explicit imports) for individual headers.

## 17. Transitioning from `#include` to `import` for a Single Header

When transitioning a single header from `#include` to a header unit import, follow this checklist:

1. **Verify self-containment:** The header must not depend on macros defined by the includer. Test
   by compiling the header as a standalone translation unit.
2. **Verify idempotency:** The header must have include guards or `#pragma once`.
3. **Update all TUs:** Replace `#include "header.h"` with `import "header.h";` in every TU. **Do not
   mix** `#include` and `import` for the same header across different TUs.
4. **Update the build system:** Ensure the build system is configured to scan for header unit
   imports and compile the BMI.
5. **Verify no macro dependencies:** If any TU previously relied on macros defined by the header
   being visible after the include, those macros are now visible only via the `import` (header unit
   semantics). This is usually fine but may break if macros were used in the includer's code after
   the include point.

## 18. Header Units and `import std;` Coexistence

In a project that uses both header unit imports and the `import std;` named module, the build system
must handle the interaction between the two. Key considerations:

1. **No double import:** If a header unit `import &lt;vector&gt;` and `import std;` are both used in
   the same TU, the build system must ensure that the declarations from `&lt;vector&gt;` are not
   defined twice (once from the header unit BMI, once from the `std` module BMI). Most compilers
   handle this deduplication internally, but some may report ambiguity errors.
2. **Different macro visibility:** `import std;` provides macro hygiene (no macros visible), while
   `import &lt;cstdio&gt;` exports macros. Mixing them in the same TU creates asymmetric behavior
   that can confuse developers.
3. **BMI ordering:** The `std` module BMI must be built before any header unit BMI that depends on
   standard library headers. The build system must enforce this ordering.

**Recommendation:** Do not mix individual standard library header unit imports with `import std;` in
the same project. Pick one approach and use it consistently.

## 19. Header Units and Tooling Support

As of 2025, the tooling ecosystem for header units is still maturing:

| Tool                  | Header Unit Support | Notes                                    |
| :-------------------- | :------------------ | :--------------------------------------- |
| **CMake**             | 3.28+               | P1689 scanning, BMI management           |
| **Clangd**            | 18+                 | Semantic analysis of header unit imports |
| **MSVC IntelliSense** | VS 2022 17.10+      | Good support for `.ifc` header units     |
| **GCC**               | 14+                 | Experimental, no P1689 support           |
| **Ninja**             | 1.11+               | `dyndep` support for module dependencies |
| **Make**              | None                | Cannot manage BMI dependencies           |

For projects that rely heavily on IDE features (go-to-definition, auto-complete), Clangd 18+ with
Clang 18+ provides the most reliable experience. MSVC's IntelliSense is also reliable. GCC's
experimental support means that header unit-based projects may encounter IDE issues.

## See Also

- [Binary Module Interfaces (BMI)](./2_bmi.md)
- [The C Runtime (CRT)](./4_c_runtime.md)
- [C++20/23 Modules Overview](./1_cpp_23.md)
- [Linker](../1_translation/3_linker.md)
- [Preprocessing and the AST](../1_translation/1_preprocessing_ast_object.md)
