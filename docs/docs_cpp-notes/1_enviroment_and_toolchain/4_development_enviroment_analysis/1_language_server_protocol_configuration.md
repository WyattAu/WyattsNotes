---
title: Language Server Protocol Configuration
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

## Installing clangd

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

## Configuration Architecture (`.clangd`)

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

## Editor Integration

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

## Architectural Deep Dive: IWYU and Header Mapping

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

## Remote Development

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

## Compilation Database Deep Dive

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

## Clangd Performance Tuning

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

## Cross-Compilation Configuration

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
