---
title: Debugger
date: 2025-12-11T06:24:14.105Z
tags:
  - cpp
categories:
  - cpp
slug: debugger
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A compiled C++ binary consists of machine code instructions. To map an Instruction Pointer (IP) address back to a specific line of C++ source code, variable name, or stack frame, the debugger requires **Debug Symbols**.

This module analyzes the architecture of symbol formats, the mechanics of mapping source paths, and the procedures for attaching debuggers to active processes.

## Debug Information Architecture

The format of debug information depends on the platform and toolchain.

### 1. DWARF (Linux / macOS / MinGW)

- **Format:** A standardized debugging data format.
- **Storage:**
  - **Embedded:** By default, GCC and Clang embed DWARF sections (`.debug_info`, `.debug_line`) directly into the final executable or shared library.
  - **Split (dwp/dSYM):** For release builds or to reduce binary size, symbols can be separated.
    - **Linux:** `.debug` files (via `objcopy --only-keep-debug`).
    - **macOS:** `.dSYM` bundles (via `dsymutil`).
- **Compiler Flag:** `-g` (default level) or `-g3` (includes macro information).

### 2. PDB (Windows MSVC)

- **Format:** Program Database (Proprietary Microsoft format).
- **Storage:** Always separate. The executable contains a GUID signature that matches a specific `.pdb` file.
- **Compiler Flag:** `/Zi` (separate PDB) or `/Z7` (embedded debug info, similar to DWARF, mostly for static libs).

## 1. LLDB (The LLVM Debugger)

LLDB is the default debugger for macOS (Xcode) and the preferred modern debugger for Linux/Android when using Clang. It uses a Clang frontend for expression evaluation, allowing it to understand modern C++ syntax perfectly.

### Compilation Requirements

Ensure the binary is built with debug info.

```bash
clang++ -g -O0 main.cpp -o app
```

### Session Management

**Launch Mode:**

```bash
lldb ./app
(lldb) run
```

**Attach Mode:**
Attaching to a running process requires root privileges (on Linux) or specific code-signing entitlements (on macOS) to use the `ptrace` system call.

```bash
# 1. Find the Process ID (PID)
pgrep app
# 2. Attach
lldb -p <PID>
(lldb) continue
```

### Symbol Loading

When debugging optimized binaries or stripped executables, you must tell LLDB where to find the symbols if they were split.

```bash
(lldb) target symbols add /path/to/symbols.dSYM
```

### Source Mapping

A common issue in CI/CD builds is that the binary was built in `/build/workspace/src`, but the source code on your local machine is in `/Users/dev/src`. The debugger cannot find the source files.

**Solution:** Map the build-time path to the run-time path.

```bash
(lldb) settings set target.source-map /build/workspace/src /Users/dev/src
```

## 2. GDB (The GNU Debugger)

GDB remains the standard for the GCC ecosystem on Linux.

### Session Management

**Attach Mode:**

```bash
gdb -p <PID>
(gdb) continue
```

### Debuginfod (Automatic Symbol Loading)

Modern Linux distributions (Fedora, Debian 12+, Ubuntu 22.04+) utilize **debuginfod**. When GDB encounters a binary without symbols (like a system library `libstdc++.so`), it queries a centralized server to download the matching debug info on demand.

**Configuration:**

```bash
export DEBUGINFOD_URLS="https://debuginfod.fedoraproject.org/"
```

_GDB will prompt to enable this feature upon startup._

## 3. WinDbg (Windows Debugging)

While Visual Studio has an excellent integrated debugger, **WinDbg** is the tool for systems engineering, kernel debugging, and post-mortem crash dump analysis on Windows.

### The Symbol Path architecture

Windows debugging relies heavily on the **Symbol Path**. This tells the debugger where to find PDBs. The syntax supports cascading locations and caching.

**Standard Symbol Path:**

```text
srv*C:\Symbols*https://msdl.microsoft.com/download/symbols
```

- `srv*`: Indicates a symbol server protocol.
- `C:\Symbols`: Local cache directory.
- `https://...`: Microsoft's public symbol server (downloads symbols for Windows DLLs like `kernel32.dll` or `ntdll.dll`).

### Loading Symbols

In WinDbg (Command window):

1. **Set Path:** `.sympath srv*C:\Symbols*https://msdl.microsoft.com/download/symbols;C:\MyProject\Build\Debug`
2. **Reload:** `.reload /f` (Force reload).

### Time Travel Debugging (TTD)

WinDbg Preview supports TTD, allowing you to record the execution of a process and then replay it forwards and backwards. This is invaluable for non-deterministic concurrency bugs.

1. Launch WinDbg Preview as Administrator.
2. Select "Launch Executable (Advanced)".
3. Check "Record with Time Travel Debugging".

## IDE Integration (VS Code)

For daily development, we bridge these CLI tools into VS Code using the `launch.json` configuration.

### The `launch.json` Architecture

This file resides in `.vscode/launch.json`. It supports two request types:

1. **Launch:** VS Code spawns the process.
2. **Attach:** VS Code connects to an existing PID.

### Configuration: LLDB (via CodeLLDB Extension)

Recommended for Linux/macOS and MinGW-Clang.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch (LLDB)",
      "type": "lldb",
      "request": "launch",
      "program": "${workspaceFolder}/build/app",
      "args": [],
      "cwd": "${workspaceFolder}",
      "sourceMap": {
        "/build/agent/work": "${workspaceFolder}"
      }
    },
    {
      "name": "Attach (LLDB)",
      "type": "lldb",
      "request": "attach",
      "pid": "${command:pickProcess}"
    }
  ]
}
```

### Configuration: MSVC (via C/C++ Extension)

Recommended for Windows MSVC builds.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch (MSVC)",
      "type": "cppvsdbg",
      "request": "launch",
      "program": "${workspaceFolder}/build/Debug/app.exe",
      "symbolSearchPath": "C:\\Symbols;${workspaceFolder}\\build\\Debug"
    }
  ]
}
```

## Architectural Considerations

1. **Release with Debug Info:** It is best practice to compile Release builds with debug info enabled (`-g -O3` or `/Zi /O2`). You can then strip the symbols into a separate file (`.dSYM` or `.pdb`) for deployment. This allows you to debug production crashes by matching the production binary with the saved symbol file.
2. **Ptrace Hardening (Linux):** By default, many Linux kernels (via YAMA security module) prevent non-root processes from attaching to other processes.
   - _Fix:_ `sudo sysctl -w kernel.yama.ptrace_scope=0` (Development only).
3. **Core Dumps:** When a process crashes (Segfault), the OS can write the memory state to a file.
   - _Enable:_ `ulimit -c unlimited`
   - _Analyze:_ `gdb ./app core.dump` or `lldb -c core.dump`.
