---
title: Language Server Protocol Configuration
description:
  C++: Language Server Protocol Configuration — 1. LSP Architecture; 1.1
  Initialization; 1.2 Document Synchronization; 1.3 Feature Requests.
date: 2025-12-11T06:09:37.943Z
tags:
  - cpp
categories:
  - cpp
slug: language-server-protocol-configuration
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

**Language Server Protocol (LSP)** decouples the specific IDE (VS Code, Neovim, Emacs) from the
language intelligence logic.

**clangd** is a LSP implementation for C++. Built on top of the Clang C++ frontend, it provides code
completion, compile errors, go-to-definition, and refactoring tools with the exact same precision as
the Clang compiler itself. Unlike heuristic-based engines (like legacy tag parsers), clangd parses
the Abstract Syntax Tree (AST), ensuring that if the code compiles, the editor understands it
correctly.

## 1. LSP Architecture

The Language Server Protocol defines a JSON-RPC communication protocol between the editor (the
client) and the language intelligence process (the server). The key lifecycle phases are:

### 1.1 Initialization

1. The editor launches the language server process.
2. The editor sends an `initialize` request with client capabilities (e.g., which features the
   editor supports: hover, completion, go-to-definition).
3. The server responds with its capabilities (e.g., which completion kinds it supports, whether it
   supports hierarchical document symbols).
4. The editor sends an `initialized` notification.

### 1.2 Document Synchronization

The server maintains an in-memory representation of all open files. When a file is opened, the
editor sends the full content. Subsequent edits are sent as incremental deltas (change ranges). The
server re-parses only the affected regions.

### 1.3 Feature Requests

Each feature (completion, hover, go-to-definition) is a separate request/response pair:

| Feature          | Request                                         | Response Content              |
| :--------------- | :---------------------------------------------- | :---------------------------- |
| Completion       | `textDocument/completion`                       | List of completion items      |
| Hover            | `textDocument/hover`                            | Markdown documentation        |
| Go to Definition | `textDocument/definition`                       | Location (file, line, column) |
| Find References  | `textDocument/references`                       | List of locations             |
| Diagnostics      | `textDocument/publishDiagnostics` (server push) | Errors/warnings               |
| Rename           | `textDocument/rename`                           | Workspace edits               |
| Code Action      | `textDocument/codeAction`                       | Quick fixes, refactorings     |

### 1.4 Why Clangd Requires `compile_commands.json`

clangd is not a heuristic engine. It is the Clang compiler frontend repurposed as a language server.
To parse a C++ file, Clang requires the same information it needs during compilation: include paths,
preprocessor definitions, language standard, and target triple. Without this information, Clang
cannot resolve `#include` directives, conditional compilation blocks, or template instantiations.

**Proof that `compile_commands.json` is necessary:**

Consider a project where `src/main.cpp` contains `#include "config.h"`, and `config.h` is generated
by CMake into `build/generated/config.h`. Without the compilation database:

1. clangd searches for `config.h` in the default include paths (`/usr/include`, etc.). It is not
   found.
2. clangd cannot parse any code that depends on definitions in `config.h`.
3. All subsequent symbols, completions, and diagnostics are incorrect.

With the compilation database, clangd reads the exact compiler invocation used for `main.cpp`,
including `-Ibuild/generated`, and resolves `config.h` correctly.

## Architectural Requirement: The Compilation Database

For clangd to understand a source file, it must know exactly how that file is compiled. It needs the
include paths, preprocessor definitions, and language standard flags.

This information is aggregated in **`compile_commands.json`**, also known as the Compilation
Database.

### Generating the Database via CMake

CMake can automatically generate this JSON file during the configuration phase.

**Best Practice:** Enable this globally in your `CMakePresets.json` to ensure every developer
generates it by default.

```json
{
  "configurePresets": [
    {
      "name": "base",
      "cacheVariables": {
        "CMAKE_EXPORT_COMPILE_COMMANDS": "ON"
      }
    }
  ]
}
```

This generates `compile_commands.json` inside the build directory (e.g.,
`build/linux-debug/compile_commands.json`).

### Build Directory Discovery

By default, clangd looks for `compile_commands.json` in the project root or immediate subdirectories
named `build`. If using complex preset names (like `build/linux-clang-debug`), clangd may fail to
find the database.

**Solution:** Create a symbolic link at the project root pointing to the active build configuration.

```bash
# Linux/macOS
ln -s build/linux-clang-debug/compile_commands.json compile_commands.json

# Windows (PowerShell 5.0+)
New-Item -ItemType SymbolicLink -Path compile_commands.json -Target build\windows-clang-debug\compile_commands.json
```

## 2. Installing clangd

Do not rely on the default version installed by the OS package manager if it is outdated. C++23
features require **clangd 16+**.

<Tabs>
  <TabItem value="windows" label="Windows">

**Via MSYS2 (Recommended):** The `mingw-w64-ucrt-x86_64-clang-tools-extra` package contains clangd.

```bash
pacman -S mingw-w64-ucrt-x86_64-clang-tools-extra
```

**Via LLVM Installer:** Download the LLVM Windows installer. Ensure `clangd.exe` is in the system
PATH.

  </TabItem>
  <TabItem value="linux" label="Linux">

**Debian/Ubuntu:** Use the LLVM apt repositories to get the latest version, as the default
repository often lags years behind.

```bash
bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"
sudo apt install clangd-17
```

_Note: You may need to use `update-alternatives` to alias `clangd-17` to `clangd`._

**Arch Linux:**

```bash
sudo pacman -S clang
```

  </TabItem>
  <TabItem value="macos" label="macOS">

**Via Homebrew:** The default Apple Clang does not ship with `clangd`.

```bash
brew install llvm
```

Add the Homebrew LLVM bin directory to your PATH (e.g., `/opt/homebrew/opt/llvm/bin`).

  </TabItem>
</Tabs>

## 3. Configuration Architecture (`.clangd`)

clangd is configured via YAML files named `.clangd`. Configuration is hierarchical:

1. **User Config:** OS-specific location (e.g., `~/.config/clangd/config.yaml`). Applies globally.
2. **Project Config:** `.clangd` file in the project root. Applies to the project.

### Critical Configuration Options

Create a `.clangd` file in your project root to enforce consistent tooling behavior across the team.

```yaml
# .clangd

# 1. Compilation Flags
# Modify the flags from compile_commands.json before parsing.
CompileFlags:
  # Add the build directory to search path for generated headers
  Add: [-I${PROJECT_ROOT}/build/generated/include]
  # Remove flags that clangd might not understand (e.g., specific GCC/MSVC flags)
  Remove: [-Wforward-class-redefinition]
  # Force the compiler driver (useful if compile_commands uses g++)
  Compiler: clang++

# 2. Diagnostics (Clang-Tidy Integration)
# Clangd runs clang-tidy checks in real-time.
Diagnostics:
  ClangTidy:
    Add:
      - bugprone-*
      - modern-use-*
      - performance-*
      - misc-*
    Remove:
      - modern-use-trailing-return-type # Example of opinionated check removal

# 3. Indexing
# Controls the background indexer (Go-to-Definition performance)
Index:
  Background: Build

# 4. Inlay Hints (C++23 Modernization)
# Shows inferred types (auto) and parameter names in the editor.
InlayHints:
  Enabled: Yes
  ParameterNames: Yes
  DeducedTypes: Yes
  Designators: Yes # Shows member names in aggregate initialization
```

### Configuration Precedence

When multiple configuration files exist, clangd merges them with the following precedence (highest
to lowest):

1. Command-line arguments (`clangd --compile-commands-dir=...`)
2. `.clangd` in the project root (found via `.git` or parent directory)
3. User config (`~/.config/clangd/config.yaml` on Linux, `~/Library/Preferences/clangd/config.yaml`
   on macOS)
4. Built-in defaults

Project config settings override user config settings. This ensures project-specific requirements
(e.g., custom flags) are not overridden by personal preferences.

## 4. Editor Integration

### Visual Studio Code

1. **Install Extension:** Install the official **clangd** extension
   (llvm-vs-code-extensions.vscode-clangd).
2. **Disable IntelliSense:** The clangd extension will automatically detect the Microsoft C/C++
   extension and request to disable its IntelliSense engine to prevent conflicts. Allow this.
3. **Arguments:** Configure extension settings to point to specific binary or pass arguments.
   - Settings JSON: `"clangd.arguments": ["--log=info", "--header-insertion=iwyu"]`

### Neovim (Native LSP)

Modern Neovim (0.9+) includes a native LSP client. The standard configuration uses `nvim-lspconfig`.

```lua
-- init.lua
local lspconfig = require('lspconfig')

lspconfig.clangd.setup {
  -- Command to launch clangd
  cmd = {
    "clangd",
    "--background-index",
    "--clang-tidy",
    "--header-insertion=iwyu",
    "--completion-style=detailed",
    "--function-arg-placeholders",
    "--fallback-style=llvm",
  },
  -- Root detection (looks for .clangd, compile_commands.json, or .git)
  root_dir = lspconfig.util.root_pattern(
    '.clangd',
    'compile_commands.json',
    '.git'
  ),
}
```

## 5. Architectural Deep Dive: IWYU and Header Mapping

One of the most complex tasks in C++ tooling is determining the correct header to include. clangd
implements **Include What You Use (IWYU)** logic.

### The Problem

If you use `std::string`, should the editor insert `#include <string>`, `<string_view>`, or
`<iosfwd>`? If `std::string` is actually defined in `<bits/basic_string.h>`, inserting that path is
technically correct but architecturally wrong.

### The Mapping solution

clangd maintains an internal mapping of symbols to "Canonical Headers."

- **Behavior:** When you autocomplete a symbol, clangd automatically inserts the canonical header if
  it is missing.
- **Configuration:** You can influence this via the `.clangd` file if you have custom project
  layouts (e.g., mapping `impl/InternalWidget.h` to public `Widget.h`).

```yaml
# .clangd
Diagnostics:
  Includes:
    IgnoreHeader:
      - 'impl/.*' # Never suggest including headers from impl/ directory
```

### How IWYU Determines the Canonical Header

The IWYU mapping is built into Clang's header search logic:

1. When a symbol is resolved, Clang records which header file defined it.
2. Clang has a hardcoded list of "public" headers for standard library symbols (e.g., `std::string`
   is defined in `<string>`, not in the internal `<bits/basic_string.h>`).
3. For project-specific symbols, clangd uses the header that declares the symbol in the project's
   include paths.

This mapping ensures that `std::vector` always maps to `<vector>`, never to an internal
implementation header.

## 6. Code Completion Mechanics

clangd's code completion is AST-based, not text-based. When you type a partial identifier, clangd:

1. Parses the current file up to the cursor position.
2. Resolves the scope chain (namespaces, classes, function bodies).
3. Filters visible declarations that match the partial identifier.
4. Ranks results by relevance (scope proximity, type compatibility, usage frequency).

### Completion Kinds

clangd supports the following completion kinds (per the LSP specification):

| Kind            | Icon | Example                            |
| :-------------- | :--- | :--------------------------------- |
| Variable        | `v`  | `int x = 42;`                      |
| Function        | `f`  | `void foo();`                      |
| Class/Struct    | `c`  | `class Widget {};`                 |
| Enum            | `e`  | `enum Color { Red, Green, Blue };` |
| Enum Constant   | `E`  | `Color::Red`                       |
| Namespace       | `N`  | `namespace math {}`                |
| Macro           | `m`  | `#define MAX_SIZE 1024`            |
| Constructor     | `C`  | `Widget(int x);`                   |
| Member Function | `m`  | `void foo() const;`                |
| Type Parameter  | `t`  | `template&lt;typename T&gt;`       |

### Function Argument Placeholders

When `--function-arg-placeholders` is enabled, clangd inserts placeholder text for each parameter:

```cpp
// After selecting std::vector's constructor from completions:
std::vector<int> v(|/*count*/|, |/*value*/|);
// Cursor is at the first placeholder; Tab advances to the next
```

## 7. Go-to-Definition Implementation

Go-to-definition requires clangd to resolve a symbol reference to its declaration. The algorithm:

1. Locate the AST node under the cursor (a `DeclRefExpr`, `MemberExpr`, `TypeLoc`, etc.).
2. Walk the AST to find the referenced `NamedDecl`.
3. If the `NamedDecl` is a `UsingDecl` or `UsingShadowDecl`, resolve to the underlying declaration.
4. Return the source location of the declaration.

### Background Indexing

For cross-TU navigation, clangd maintains a background index of the entire project. This index is
built incrementally:

1. When a file is opened, clangd indexes it.
2. In the background, clangd indexes all other files in the project (based on the compilation
   database).
3. The index stores symbol locations, references, and relationships.
4. Go-to-definition and find-references queries use this index for instant results.

The index is stored in `.cache/clangd/index/` by default. For large projects, the initial indexing
can take several minutes and consume significant CPU and memory.

## 8. Hover Information

When you hover over a symbol, clangd provides:

1. **Type information:** The fully qualified type of the symbol.
2. **Declaration:** The source code of the declaration.
3. **Documentation:** Doxygen comments attached to the declaration.
4. **Availability:** Which header provides this symbol.

```yaml
# Enable detailed hover with type aliases resolved
Hover:
  ShowAKA: Yes
```

## 9. Remote Development

In systems programming, the code often compiles only on Linux, but the developer uses a
Windows/macOS laptop.

**Architecture:**

1. **Host (Laptop):** Runs the Editor UI (VS Code).
2. **Remote (Linux Server):** Runs the `clangd` process.
3. **Connection:** SSH.

**Setup:** VS Code's "Remote - SSH" extension handles this transparently. When connected to the
remote, the clangd extension installs the server binary **on the remote machine**. The local editor
sends text deltas to the remote; the remote clangd analyzes the AST and sends back diagnostics and
autocomplete lists. This ensures the analysis environment matches the build environment exactly
(same OS headers, same compiler).

## 10. Compilation Database Deep Dive

The `compile_commands.json` file is an array of JSON objects, each describing how a single source
file is compiled. Understanding its structure is essential for debugging LSP issues:

```json
[
  {
    "directory": "/home/user/project/build",
    "command": "/usr/bin/c++ -I/home/user/project/include -std=c++20 -Wall -c /home/user/project/src/main.cpp -o main.o",
    "file": "/home/user/project/src/main.cpp",
    "output": "/home/user/project/build/main.o"
  },
  {
    "directory": "/home/user/project/build",
    "command": "/usr/bin/c++ -I/home/user/project/include -std=c++20 -Wall -c /home/user/project/src/util.cpp -o util.o",
    "file": "/home/user/project/src/util.cpp",
    "output": "/home/user/project/build/util.o"
  }
]
```

### Key Fields

| Field       | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| `directory` | The working directory in which the compilation command was invoked  |
| `command`   | The full compilation command (compiler path, flags, source, output) |
| `file`      | The source file path (relative to `directory` or absolute)          |
| `output`    | The output file (object file) path                                  |

### Common Issues

**Generated Headers:** If your build generates headers (e.g., protobuf, CMake configure_file), they
may not exist when clangd parses the source. Use the `.clangd` `CompileFlags.Add` to add the
generated header directory, or ensure the build directory is created before opening the project in
your editor.

**Multiple Compilation Databases:** If you have preset-specific build directories (e.g.,
`build/debug`, `build/release`), clangd can only use one at a time. Use a symlink at the project
root to point to the active configuration:

```bash
ln -sf build/debug/compile_commands.json compile_commands.json
```

### Non-CMake Build Systems

For projects that do not use CMake, alternative tools can generate `compile_commands.json`:

**Bear (for Make-based projects):**

```bash
# Bear intercepts compiler calls during the build
bear -- make -j$(nproc)
# Generates compile_commands.json in the current directory
```

**compiledb (Python-based, for any build system):**

```bash
# Wraps the build command and records compiler invocations
compiledb -n make
```

**Bazel:** Use `bazel-compile-commands` or the built-in `--action_env=CC` approach. Bazel does not
natively generate compilation databases, so external tools are required.

**Ninja:** If your project uses Ninja directly, you can convert the `build.ninja` file using
`ninja -t compdb`:

```bash
ninja -t compdb cc cxx > compile_commands.json
```

## 11. Clangd Performance Tuning

### Background Indexing

clangd maintains an index of the entire codebase for fast go-to-definition and cross-reference
operations. The `Index.Background` setting controls how this index is built:

```yaml
# .clangd
Index:
  Background: Build # Build the index in a background thread
```

For large codebases (1M+ lines), background indexing can consume significant CPU and memory. To
limit resource usage:

```yaml
Index:
  Background: Build
Diagnostics:
  UnusedIncludes: Strict # also removes unused includes
  ClangTidy:
    Add:
      - modernize-*
      - performance-*
    Remove:
      - modernize-use-trailing-return-type
      - readability-magic-numbers
      - cppcoreguidelines-avoid-magic-numbers
InlayHints:
  Enabled: Yes
  ParameterNames: Yes
  DeducedTypes: Yes
  Designators: Yes
Hover:
  ShowAKA: Yes
```

### Completion Style

The `--completion-style` flag controls how clangd presents completions:

```yaml
# In .clangd arguments or Neovim config:
--completion-style=detailed  # Shows full signature, accessible documentation
--function-arg-placeholders  # Inserts placeholder for each function argument
--header-insertion=iwyu      # Auto-inserts canonical headers
--header-insertion-decorators=Yes  # Shows whether headers are needed
```

### Diagnostics Suppression

clangd respects `// NOLINT`, `// NOLINTNEXTLINE`, and `#pragma clang diagnostic` directives. For
project-wide suppression, use the `.clangd` configuration:

```yaml
Diagnostics:
  Suppress:
    - pp_file_not_found # Ignore missing generated headers during editing
    - unused_template # Ignore unused template warnings
  ClangTidy:
    CheckOptions:
      readability-identifier-naming.ClassCase: CamelCase
      readability-identifier-naming.FunctionCase: camelBack
      modernize-use-override.AllowOverrideAndFinal: true
```

## 12. Find References Implementation

Find-references (also called "find usages") requires clangd to locate all sites where a given symbol
is referenced. The algorithm:

1. Locate the declaration of the symbol under the cursor.
2. Query the background index for all locations that reference that declaration.
3. For template instantiations, find all concrete instantiations of the template.
4. Return a list of locations, grouped by file.

The `--background-index` flag is critical for cross-TU reference finding. Without it, clangd can
only find references within the currently open files.

```yaml
# Ensure background indexing is enabled for cross-TU references
Index:
  Background: Build
```

### Rename Refactoring

Rename is implemented as a combination of find-references and text replacement. clangd locates all
references and generates workspace edits. Limitations:

- Macros are not renamed (the preprocessor is not fully modeled in the index).
- String literals containing the symbol name are not renamed.
- Comments are not updated.

## 13. Cross-Compilation Configuration

When developing on one platform but building for another (e.g., macOS host, Linux target), clangd
needs to use the target's system headers. The `CompileFlags.Compiler` directive switches the
compiler driver:

```yaml
# .clangd
CompileFlags:
  Compiler: clang++ # or /usr/bin/aarch64-linux-gnu-g++
  Add:
    - --target=aarch64-linux-gnu
    - -isystem/usr/aarch64-linux-gnu/include/c++/12
    - -isystem/usr/aarch64-linux-gnu/include
```

This ensures clangd resolves `#include <vector>` and other standard headers using the target
platform's include paths, not the host's.

## 13. Diagnostics and Error Recovery

clangd processes files incrementally. When you type a character, clangd:

1. Applies the edit to its in-memory file representation.
2. Re-parses the affected region (typically a single function or block).
3. Re-runs diagnostics on the affected region.
4. Publishes updated diagnostics to the editor.

This incremental approach limits re-parsing to the minimum necessary scope. For very large files
(10k+ lines), clangd may skip diagnostics on regions far from the cursor to maintain responsiveness.

## 14. Diagnostics and Error Recovery

clangd processes files incrementally. When you type a character, clangd:

1. Applies the edit to its in-memory file representation.
2. Re-parses the affected region (typically a single function or block).
3. Re-runs diagnostics on the affected region.
4. Publishes updated diagnostics to the editor.

This incremental approach limits re-parsing to the minimum necessary scope. For very large files
(10k+ lines), clangd may skip diagnostics on regions far from the cursor to maintain responsiveness.

### Diagnostic Severity Levels

clangd classifies diagnostics into four severity levels:

| Severity | Meaning                            | Editor Display    |
| :------- | :--------------------------------- | :---------------- |
| Error    | Compilation would fail             | Red squiggle      |
| Warning  | Code compiles but is suspicious    | Yellow squiggle   |
| Note     | Additional context for a warning   | Gray text         |
| Remark   | Informational (optimization hints) | Hidden by default |

### Tuning Diagnostic Latency

For very large projects where diagnostics are slow, you can limit the number of diagnostics
published per file:

```yaml
Diagnostics:
  UnusedIncludes: None # Disable unused include checking (slow)
  Suppress:
    - bugprone-easily-swappable-parameters # Can be very noisy
    - misc-include-cleaner # Slow on large files
```

## 15. Clang-Tidy Integration in Detail

clangd runs clang-tidy checks in parallel with its own diagnostics. The configuration is shared via
the `.clang-tidy` file. Key integration points:

### Real-Time Clang-Tidy Diagnostics

When you type, clangd re-runs the configured clang-tidy checks on the affected region. This means:

- Enabling expensive checks (`clang-analyzer-*`) in clangd will cause noticeable typing lag.
- Fast checks (`modernize-*`, `bugprone-*`) add negligible latency.
- The `.clangd` `Diagnostics.ClangTidy` section allows enabling a subset of checks for IDE use while
  running the full suite in CI.

```yaml
# .clangd — IDE-optimized clang-tidy configuration
Diagnostics:
  ClangTidy:
    Add:
      - bugprone-* # Fast AST checks
      - modernize-* # Fast modernization checks
    Remove:
      - clang-analyzer-* # Too slow for real-time
      - cppcoreguidelines-pro-bounds-* # Often noisy
```

### Clang-Tidy Fixes in the Editor

clangd can apply clang-tidy fixes on save or on demand. In VS Code, this is configured via the
extension settings:

```json
{
  "clangd.fallbackFlags": ["--header-insertion=iwyu"],
  "clangd.onChangesActivated": true,
  "clangd.checkUpdates": false
}
```

In Neovim, use the `code_action` LSP method to apply fixes:

```lua
vim.keymap.set('n', '<leader>ca', function()
  vim.lsp.buf.code_action({
    filter = function(action)
      return action.kind == 'quickfix'
    end,
    apply = true
  })
end)
```

## 16. Symbol Search and Workspace Symbols

clangd indexes all symbols in the project (classes, functions, variables, macros) and provides a
workspace-wide symbol search. This is triggered by the `workspace/symbol` LSP request.

### Usage

In VS Code: `Ctrl+T` (Go to Symbol in Workspace). In Neovim: `Telescope lsp_workspace_symbols`.

### Search Syntax

The search supports substring matching and qualified names:

- `Widget` finds all symbols containing "Widget".
- `lib::Widget` finds `Widget` in namespace `lib`.
- `Widget::create` finds `create` as a member of `Widget`.

## 17. Document Symbols and Outline View

clangd provides the document symbol tree (`textDocument/documentSymbol`), which the editor uses for
the outline/file explorer. This includes:

- Namespaces and their nesting.
- Classes, structs, and their members.
- Functions and their parameters.
- Enums and their values.
- Macros and typedefs.

The outline view is updated incrementally as you type, providing real-time navigation.

## 18. Clangd Logging and Debugging

When clangd behaves unexpectedly, enable detailed logging:

```bash
clangd --log=verbose --background-index
```

The log file is written to a temporary directory. On Linux, it is typically at
`/tmp/clangd-<pid>.log`. On macOS, it is in `/var/folders/...`. The log includes:

- Every LSP request and response.
- AST parsing errors.
- Index build progress.
- Compilation database discovery.

Common debugging scenarios:

1. **clangd cannot find a header:** Check the log for include path resolution. The log shows exactly
   which directories are searched and why each candidate was rejected.
2. **Diagnostics are wrong:** Check if the compilation database entry for the file matches the
   actual compilation flags. The log shows the exact flags used for each file.
3. **Slow indexing:** The log shows the indexing progress and per-file timing.

## Common Pitfalls

### 1. Stale Compilation Database

If you modify `CMakeLists.txt` (add new includes, change target properties) but do not re-run CMake,
the compilation database becomes stale. clangd will show incorrect diagnostics. Always re-run CMake
after modifying build configuration.

### 2. clangd Cannot Find `compile_commands.json`

clangd searches for `compile_commands.json` in the project root and immediate subdirectories named
`build`. If your build directory has a non-standard name (e.g., `out/linux-debug`), clangd will not
find it. Solutions:

1. Create a symlink: `ln -sf out/linux-debug/compile_commands.json compile_commands.json`
2. Use the `--compile-commands-dir` flag: pass the directory containing the database to clangd

### 3. clangd and Precompiled Modules (C++20)

C++20 modules require a module compilation database (`module-info.json`) that describes module
dependencies. clangd has partial support for modules but the experience varies. For projects using
modules, ensure the module files are compiled before opening the project, and consider using the
`--query-driver` flag:

```yaml
CompileFlags:
  Add:
    - --query-driver=/usr/bin/c++ # allows clangd to find system compiler
```

### 4. Missing IWYU Pragmas

When clangd auto-inserts headers via IWYU, it may suggest headers that are technically correct but
not desired by your project's conventions. Use IWYU pragmas to control this:

```cpp
// Force clangd to use a specific header for this symbol
// IWYU pragma: keep

// Tell clangd this header is intentionally not included
// IWYU pragma: no_include "internal/detail.h"
```

### 5. clangd Crashes on Large Files

If clangd crashes or becomes unresponsive on very large generated files (e.g., protobuf outputs,
generated parser tables), exclude them from indexing:

```yaml
Diagnostics:
  Suppress:
    - '*' # suppress all diagnostics
  UnusedIncludes: None
# Alternative: use .clangd-ignore file (one pattern per line)
# build/generated/parser.cpp
# build/generated/lexer.cpp
```

### 6. Multiple clangd Instances

If you have multiple editor windows open on the same project, each may launch a separate clangd
process. These processes compete for the same index files, causing corruption and slowdowns. Ensure
only one clangd instance is running per project (most editors handle this automatically).

### 7. Header Cycles Detected

clangd may report "header guard not found" or "included multiple times" warnings for headers without
proper include guards. Use `#pragma once` or traditional include guards consistently:

```cpp
#pragma once  // Supported by all major compilers (GCC, Clang, MSVC)
// Or:
#ifndef MY_HEADER_H
#define MY_HEADER_H
// ...
#endif
```

## See Also

- [Debugger Configuration](2_debugger.md)
- [Static Analysis](3_static_analysis.md)
- [Sanitizers](4_sanitizer.md)
