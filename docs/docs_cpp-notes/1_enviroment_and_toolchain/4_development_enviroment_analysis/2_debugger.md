---
title: Debugger
date: 2025-12-11T06:24:14.105Z
tags:
  - cpp
categories:
  - cpp
slug: debugger
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

A compiled C++ binary consists of machine code instructions. To map an Instruction Pointer (IP)
address back to a specific line of C++ source code, variable name, or stack frame, the debugger
requires **Debug Symbols**.

This module analyzes the architecture of symbol formats, the mechanics of mapping source paths, and
the procedures for attaching debuggers to active processes.

## Debug Information Architecture

The format of debug information depends on the platform and toolchain.

### 1. DWARF (Linux / macOS / MinGW)

- **Format:** A standardized debugging data format.
- **Storage:**
  - **Embedded:** By default, GCC and Clang embed DWARF sections (`.debug_info`, `.debug_line`)
    directly into the final executable or shared library.
  - **Split (dwp/dSYM):** For release builds or to reduce binary size, symbols can be separated.
    - **Linux:** `.debug` files (via `objcopy --only-keep-debug`).
    - **macOS:** `.dSYM` bundles (via `dsymutil`).
- **Compiler Flag:** `-g` (default level) or `-g3` (includes macro information).

### 2. PDB (Windows MSVC)

- **Format:** Program Database (Proprietary Microsoft format).
- **Storage:** Always separate. The executable contains a GUID signature that matches a specific
  `.pdb` file.
- **Compiler Flag:** `/Zi` (separate PDB) or `/Z7` (embedded debug info, similar to DWARF, mostly
  for static libs).

## Debug Information Levels

The amount of debug information embedded in the binary is controlled by flags that determine the
granularity of source-level mapping.

### GCC/Clang Debug Levels

| Flag  | Description                                                                                              | Binary Size Impact |
| :---- | :------------------------------------------------------------------------------------------------------- | :----------------- |
| `-g0` | No debug information (default for release).                                                              | None               |
| `-g1` | Minimal: line numbers and source file names only. No local variable information.                         | Small              |
| `-g2` | Standard (same as `-g`): Full debug info including local variables, function signatures, types.          | Moderate           |
| `-g3` | Maximum: Includes macro definitions and expanded macro locations. Useful for debugging macro-heavy code. | Large              |

```bash
# Compile with maximum debug info including macros
clang++ -g3 -O0 main.cpp -o app

# Verify the DWARF sections present
readelf -S app | grep debug
```

### MSVC Debug Levels

| Flag  | Description                                                                      |
| :---- | :------------------------------------------------------------------------------- |
| `/Z7` | Old-style: Embeds debug info in each .obj file.                                  |
| `/Zi` | Program Database: Generates a separate .pdb file.                                |
| `/ZI` | Edit and Continue: PDB with additional metadata for hot-reload during debugging. |

`/Zi` is the standard for production builds. `/ZI` is useful during development in Visual Studio but
produces slightly larger PDBs and may inhibit some optimizations.

## 1. LLDB (The LLVM Debugger)

LLDB is the default debugger for macOS (Xcode) and the preferred modern debugger for Linux/Android
when using Clang. It uses a Clang frontend for expression evaluation, allowing it to understand
modern C++ syntax perfectly.

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

**Attach Mode:** Attaching to a running process requires root privileges (on Linux) or specific
code-signing entitlements (on macOS) to use the `ptrace` system call.

```bash
# 1. Find the Process ID (PID)
pgrep app
# 2. Attach
lldb -p <PID>
(lldb) continue
```

### Symbol Loading

When debugging optimized binaries or stripped executables, you must tell LLDB where to find the
symbols if they were split.

```bash
(lldb) target symbols add /path/to/symbols.dSYM
```

### Source Mapping

A common issue in CI/CD builds is that the binary was built in `/build/workspace/src`, but the
source code on your local machine is in `/Users/dev/src`. The debugger cannot find the source files.

**Solution:** Map the build-time path to the run-time path.

```bash
(lldb) settings set target.source-map /build/workspace/src /Users/dev/src
```

### LLDB Breakpoint and Watchpoint Commands

```bash
# Set breakpoint by function name
(lldb) breakpoint set --name main
(lldb) b main  # shorthand

# Set breakpoint by file and line
(lldb) breakpoint set --file main.cpp --line 42
(lldb) b main.cpp:42  # shorthand

# Conditional breakpoint: only stop when condition is true
(lldb) breakpoint set --name process --condition 'count > 100'

# Set breakpoint on a C++ method
(lldb) b MyClass::myMethod

# Watchpoint: stop when a variable's value changes
(lldb) frame variable my_var
(lldb) watchpoint set variable my_var
# Watchpoint created: addr = 0x..., size = 4, type = int

# Watchpoint on memory address
(lldb) watchpoint set expression -- &global_buffer[0]

# List all breakpoints
(lldb) breakpoint list

# Delete breakpoint by ID
(lldb) breakpoint delete 1
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

Modern Linux distributions (Fedora, Debian 12+, Ubuntu 22.04+) utilize **debuginfod**. When GDB
encounters a binary without symbols (like a system library `libstdc++.so`), it queries a centralized
server to download the matching debug info on demand.

**Configuration:**

```bash
export DEBUGINFOD_URLS="https://debuginfod.fedoraproject.org/"
```

_GDB will prompt to enable this feature upon startup._

### GDB Breakpoint and Watchpoint Commands

```bash
# Breakpoint by function
(gdb) break main
(gdb) b main.cpp:42

# Conditional breakpoint
(gdb) break process if count > 100

# Breakpoint on all overloads of a function name
(gdb) rbreak MyClass::  # Breaks on all MyClass methods

# Watchpoint
(gdb) watch my_var  # Write watchpoint
(gdb) rwatch my_var  # Read watchpoint
(gdb) awatch my_var  # Access (read/write) watchpoint

# Catchpoints: stop on system events
(gdb) catch throw    # Stop when any exception is thrown
(gdb) catch catch    # Stop when any exception is caught
(gdb) catch signal SIGSEGV  # Stop on segmentation fault
(gdb) catch exec     # Stop on exec() system call
(gdb) catch fork     # Stop on fork() system call

# Info commands
(gdb) info breakpoints  # List all breakpoints
(gdb) info locals       # Show all local variables
(gdb) info args         # Show function arguments
(gdb) info registers    # Show CPU register state
(gdb) info frame        # Show current frame info
```

### GDB Pretty Printers

GDB supports **pretty printers** that customize how C++ types are displayed. The `libstdc++` library
ships with pretty printers for standard containers:

```bash
# Without pretty printers:
(gdb) print vec
$1 = {<std::vector<int, std::allocator<int> >> = {_M_start = 0x55..., _M_finish = 0x55..., _M_end_of_storage = 0x55...}, <No data fields>}

# With pretty printers (enabled by default in modern GDB):
(gdb) print vec
$1 = std::vector of length 3, capacity 4 = {10, 20, 30}
```

To enable pretty printers for custom types, create a Python script and load it:

```python
# my_printers.py
import gdb

class MyStructPrinter:
    def __init__(self, val):
        self.val = val

    def to_string(self):
        return f"MyStruct(x={self.val['x_']}, y={self.val['y_']})"

def my_lookup(val):
    typename = str(val.type.strip_typedefs())
    if typename == 'MyStruct':
        return MyStructPrinter(val)
    return None

gdb.pretty_printers.append(my_lookup)
```

```bash
(gdb) source my_printers.py
```

## 3. WinDbg (Windows Debugging)

While Visual Studio has an excellent integrated debugger, **WinDbg** is the tool for systems
engineering, kernel debugging, and post-mortem crash dump analysis on Windows.

### The Symbol Path architecture

Windows debugging relies heavily on the **Symbol Path**. This tells the debugger where to find PDBs.
The syntax supports cascading locations and caching.

**Standard Symbol Path:**

```text
srv*C:\Symbols*https://msdl.microsoft.com/download/symbols
```

- `srv*`: Indicates a symbol server protocol.
- `C:\Symbols`: Local cache directory.
- `https://...`: Microsoft's public symbol server (downloads symbols for Windows DLLs like
  `kernel32.dll` or `ntdll.dll`).

### Loading Symbols

In WinDbg (Command window):

1. **Set Path:**
   `.sympath srv*C:\Symbols*https://msdl.microsoft.com/download/symbols;C:\MyProject\Build\Debug`
2. **Reload:** `.reload /f` (Force reload).

### Time Travel Debugging (TTD)

WinDbg Preview supports TTD, allowing you to record the execution of a process and then replay it
forwards and backwards. This is invaluable for non-deterministic concurrency bugs.

1. Launch WinDbg Preview as Administrator.
2. Select "Launch Executable (Advanced)".
3. Check "Record with Time Travel Debugging".

### Common WinDbg Commands

```text
# Break into the debugger
Ctrl+C

# Set breakpoint
bp myapp!MyClass::Method

# Step
g           - Go (continue)
p           - Step over
t           - Step into
gu          - Step out (go up)

# Memory inspection
dt myapp!MyClass       - Display type
db / dc / dd / dq addr - Display bytes / chars / dwords / qwords
da addr                - Display ASCII string
du addr                - Display Unicode string

# Call stack
k            - Stack trace (no arguments)
kv           - Stack trace with arguments and frame pointer omission info
kL           - Stack trace for all threads

# Registers
r            - Show all registers
r @rsp       - Show value at RSP
```

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

## Post-Mortem Debugging with Core Dumps

When a process crashes (e.g., segmentation fault), the OS can write the complete memory image of the
process to a file called a **core dump**. This file can be loaded into a debugger to inspect the
state at the moment of the crash, without needing to reproduce the crash.

### Enabling Core Dumps on Linux

```bash
# Check current limits
ulimit -c

# Enable unlimited core dump size (current shell)
ulimit -c unlimited

# Set core dump pattern (where files are written)
# %e = executable name, %p = PID, %t = timestamp
echo "/tmp/core.%e.%p.%t" | sudo tee /proc/sys/kernel/core_pattern

# Persistent configuration: add to /etc/security/limits.conf
# * soft core unlimited
# * hard core unlimited
```

### Analyzing Core Dumps

```bash
# Load core dump into GDB
gdb ./app core.app.12345.1699999999

# Common first commands inside GDB:
(gdb) bt full       # Full backtrace with all local variables
(gdb) info frame    # Current frame details
(gdb) info registers # CPU state at crash
(gdb) x/20i $pc     # Disassemble 20 instructions around the crash point
```

### Analyzing Core Dumps with LLDB

```bash
lldb -c core.app.12345.1699999999 -- ./app
(lldb) bt all       # Backtrace for all threads
(lldb) frame select 0
(lldb) register read  # CPU state
```

### Minidumps (Windows)

On Windows, the equivalent of a core dump is a **minidump** (`.dmp` file). These are typically
generated by Windows Error Reporting (WER) or explicitly via `MiniDumpWriteDump()`.

```text
# In WinDbg:
windbg -z crash.dmp

# After loading, use the same commands as live debugging
.symfix
.reload
!analyze -v
```

## Debugging Multithreaded Programs

### Thread Listing and Switching

```bash
# GDB
(gdb) info threads       # List all threads
(gdb) thread 3           # Switch to thread 3
(gdb) thread apply all bt  # Backtrace for ALL threads

# LLDB
(lldb) thread list
(lldb) thread select 3
(lldb) thread backtrace all
```

### Thread-Specific Breakpoints

```bash
# GDB: break only when hit by a specific thread
(gdb) break myFunction thread 3

# LLDB
(lldb) breakpoint set --name myFunction --thread 3
```

### Race Condition Detection

For race conditions, debuggers alone are insufficient because the problem is timing-dependent. Use
Thread Sanitizer (TSan) instead:

```bash
clang++ -g -O1 -fsanitize=thread main.cpp -o app_tsan
./app_tsan
# TSan reports data races with full stack traces for both accessing threads
```

## Debug Info and Optimization Interaction

Debugging optimized binaries (`-O2`, `-O3`) is fundamentally harder than debugging unoptimized
binaries (`-O0`) because the compiler transforms the code in ways that break the 1:1 mapping between
source lines and machine instructions.

### What Breaks at `-O2`

1. **Variable Elimination:** Variables that are proven dead are eliminated. The debugger shows
   "optimized out" for their values.
2. **Instruction Reordering:** Instructions are reordered for pipeline efficiency. Stepping through
   source lines jumps non-sequentially.
3. **Inlining:** Inlined functions do not appear in the call stack. The debugger may show the
   caller's frame where you expect the callee.
4. **Loop Unrolling:** Loops are unrolled, making it appear as if the loop body executes only once
   when stepping.

### Best Practice: Release with Debug Info

```bash
# Compile with optimization AND debug symbols
clang++ -O2 -g main.cpp -o app

# Strip debug info into a separate file
objcopy --only-keep-debug app app.debug
strip --strip-debug --strip-unneeded app
```

This gives you an optimized binary for production with a separate symbol file for post-mortem
debugging. The `app.debug` file can be stored in a symbol server and matched to the production
binary via build ID.

## Architectural Considerations

1. **Release with Debug Info:** It is best practice to compile Release builds with debug info
   enabled (`-g -O3` or `/Zi /O2`). You can then strip the symbols into a separate file (`.dSYM` or
   `.pdb`) for deployment. This allows you to debug production crashes by matching the production
   binary with the saved symbol file.
2. **Ptrace Hardening (Linux):** By default, many Linux kernels (via YAMA security module) prevent
   non-root processes from attaching to other processes.
   - _Fix:_ `sudo sysctl -w kernel.yama.ptrace_scope=0` (Development only).
3. **Core Dumps:** When a process crashes (Segfault), the OS can write the memory state to a file.
   - _Enable:_ `ulimit -c unlimited`
   - _Analyze:_ `gdb ./app core.dump` or `lldb -c core.dump`.

## Common Pitfalls

### 1. Debugging a Stripped Binary

If the binary has been stripped (`strip app`), all symbol information is removed. You cannot set
breakpoints by function name, view variables, or get meaningful backtraces. Always keep the debug
file (`.debug` / `.dSYM` / `.pdb`) alongside the binary or on a symbol server.

### 2. Source Path Mismatch in CI Builds

CI builds produce binaries with source paths like `/__w/repo/repo/src/main.cpp`. Your local machine
has `/home/user/project/src/main.cpp`. The debugger cannot find the source. Always configure source
mapping (`target.source-map` in LLDB, `directory` command in GDB).

### 3. Mismatched PDB and Binary

On Windows, the PDB is matched to the binary via a GUID embedded in both. If you rebuild the binary
but the PDB is stale (from a previous build), the debugger will refuse to load the PDB or load
incorrect symbols. Always rebuild both together.

### 4. `-O0` Performance Artifacts

Debugging at `-O0` can mask bugs that only appear at higher optimization levels. Timing-dependent
bugs, undefined behavior exploitation, and certain concurrency issues may not reproduce at `-O0`.
Always verify that the bug reproduces at the target optimization level before spending hours
debugging.

### 5. Missing DWARF Call Frame Information

If you see `??` in backtraces instead of function names, the binary may be missing `.eh_frame` or
`.debug_frame` sections. This happens when linking with `-Wl,--strip-all` which removes unwind info.
Use `--strip-debug` instead, which preserves unwind tables.
