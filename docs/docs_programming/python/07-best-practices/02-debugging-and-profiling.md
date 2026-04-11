---
title: Debugging and Profiling
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: debugging-and-profiling
---

# Debugging and Profiling

Debugging and profiling are not afterthoughts bolted onto a codebase after the fact. They are
first-class engineering disciplines. A systems engineer does not guess about correctness or
performance — they measure, instrument, and reason from evidence. This reference covers the full
debugging and profiling stack in CPython, from the interactive debugger down to kernel-level
sampling profilers, and explains the _why_ behind each tool's design.

## pdb and breakpoint()

The Python debugger (`pdb`) is a bytecode-level, line-oriented debugger implemented in pure Python.
It operates by manipulating the frame objects that CPython creates for each function call, setting
`sys.settrace` callbacks that fire on every call, line, return, and exception event. Understanding
this is critical: `pdb` is not a separate process observing your program. It is your program, with a
trace hook inserted.

### Basic Entry Points

The canonical debugger entry point:

```python
import pdb; pdb.set_trace()
```

This one-liner is idiomatic in every Python codebase written before Python 3.7. `pdb.set_trace()`
does three things:

1. Instantiates a `pdb.Pdb()` object (the debugger class).
2. Calls `self.set_trace()` on that instance, which invokes `sys.settrace(self.trace_dispatch)`.
3. Returns control to the Python interpreter, which now calls `trace_dispatch` on every bytecode
   event.

Once the trace hook is active, execution halts at the next line and you are dropped into the pdb
REPL.

Starting with Python 3.7, there is a cleaner built-in:

```python
def compute():
    x = 42
    breakpoint()
    return x * 2
```

`breakpoint()` is not syntax — it is a built-in function that calls `sys.breakpointhook()`. By
default, `sys.breakpointhook` is set to `pdb.set_trace()`, but the crucial difference is that it is
_configurable_. You can set `PYTHONBREAKPOINT=0` in the environment to make all `breakpoint()` calls
no-ops in production. You can set `PYTHONBREAKPOINT=ipdb.set_trace` to redirect all breakpoints to
`ipdb` without changing a single line of code. This is a systems-level concern: your instrumentation
should be deployable and removable through configuration, not code changes.

You can also start pdb from the command line, instrumenting the entire program from the start:

```bash
python -m pdb script.py
```

This runs the script under pdb control from module load, which means you can set breakpoints before
any user code runs. This is essential for debugging import-time side effects, which are invisible to
inline `breakpoint()` calls placed inside functions.

### Core pdb Commands

These commands form the irreducible set you need to operate effectively:

| Command   | Action       | What It Actually Does                                                                                                                          |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `n`       | Next         | Execute the current line, step over any function calls. Advances to the next line in the _current_ frame.                                      |
| `s`       | Step         | Step into the next function call. Creates a new frame and stops at the first executable line inside it.                                        |
| `c`       | Continue     | Resume execution until the next breakpoint or program termination.                                                                             |
| `b`       | Breakpoint   | Set a breakpoint. `b` lists all breakpoints. `b 42` sets a breakpoint at line 42 of the current file. `b file.py:42` sets one in another file. |
| `l`       | List         | Show source context around the current line. `l .` shows around the current line. `l 1,50` shows lines 1-50.                                   |
| `p expr`  | Print        | Evaluate `expr` in the current frame's namespace and print the result.                                                                         |
| `pp expr` | Pretty-print | Same as `p` but uses `pprint.pformat` for structured output. Essential for nested dicts, long lists, complex objects.                          |
| `w`       | Where        | Print a stack trace from the current frame to the outermost frame. Shows the full call chain that led to the current position.                 |
| `u`       | Up           | Move one frame up the call stack. You can now inspect local variables in the calling function.                                                 |
| `d`       | Down         | Move one frame down the call stack (reverse of `u`).                                                                                           |
| `q`       | Quit         | Terminate the program immediately. No cleanup, no finally blocks.                                                                              |
| `r`       | Return       | Continue execution until the current function returns. Stops at the return statement.                                                          |
| `args`    | Arguments    | Print the argument list and current values for the current function.                                                                           |

The distinction between `n` and `s` is the single most important concept in pdb. `n` advances the
line pointer in the current frame and runs the line to completion. If the line contains a function
call, that call executes in its entirety and you see the result. `s` descends into the called
function, creating a new frame. When debugging, the question is always: "Do I care about the
internals of this call?" If yes, `s`. If no, `n`.

The `u` and `d` commands let you walk the call stack without actually executing any code. This is
how you inspect the state of a calling function when you are deep inside a callee. You can `u` to
the caller, `p local_var` to inspect its state, then `d` to return to the callee.

### The Cost of pdb

pdb is not free. `sys.settrace` inserts a Python-level callback on every bytecode event (call, line,
return, exception). In CPython, this means:

- Every function call incurs the overhead of calling the trace function.
- Every line execution incurs the overhead of the trace function.
- The trace function itself must determine the event type and decide what to do.

This overhead is typically 10-100x slowdown for CPU-bound code. For I/O-bound code, the overhead is
often negligible because the interpreter is already spending most of its time waiting for the
kernel. Never leave `breakpoint()` or `pdb.set_trace()` in production code paths.

## Advanced pdb

### Conditional Breakpoints

Setting a breakpoint at a line that executes thousands of times inside a loop is useless without a
condition. pdb supports conditional breakpoints:

```
(Pdb) b 42, x > 100
```

This sets a breakpoint at line 42 that only triggers when the local variable `x` is greater
than 100. The condition is evaluated as a Python expression in the current frame's namespace every
time line 42 is reached. If the condition is false, execution continues without stopping.

Why does this matter? Consider a loop processing 10 million records. You know the bug manifests when
a record's `status` field is `'FAILED'` and its `retry_count` exceeds 3. Without a conditional
breakpoint, you would have to hit `c` thousands of times. With
`b 87, status == 'FAILED' and retry_count > 3`, you stop exactly where the bug manifests.

### Temporary Breakpoints

```
(Pdb) tbreak 42
```

`tbreak` sets a breakpoint that automatically removes itself after it is hit once. This is useful
when you want to inspect state at a single point during a long execution without having to remember
to delete the breakpoint afterward.

### Ignoring Library Code

When debugging, you often step into library functions that you cannot or do not want to modify. The
`ignore` command controls how many times a breakpoint is ignored before it triggers:

```
(Pdb) b mycode.py:42
(Pdb) ignore 1 999999
```

This tells pdb to ignore breakpoint 1 for the next 999,999 hits. Combined with conditional
breakpoints, you can effectively skip over noise.

### Commands on Breakpoint Hit

The `commands` keyword lets you attach a sequence of pdb commands to a breakpoint that execute
automatically every time the breakpoint is hit:

```
(Pdb) b 42
(Pdb) commands 1
> p request_data
> p response_status
> c
> end
```

This attaches three commands to breakpoint 1: print `request_data`, print `response_status`, then
continue. The `end` keyword terminates the command list. This is a crude but effective form of
watchpoint. You can automate data collection during long runs without manually interacting with the
debugger.

### .pdbrc for Startup Commands

Place a `.pdbrc` file in your home directory or the current working directory. pdb reads this file
on startup and executes each line as a pdb command. Common uses:

```
# ~/.pdbrc
alias ll l .
alias pp pp
set ignore_raise 1
```

This sets up aliases and configuration every time pdb starts. The `set ignore_raise 1` directive
tells pdb not to stop on exceptions, which is useful when you only want to stop at explicit
breakpoints.

### Post-Mortem Debugging

When your program crashes with an unhandled exception, the traceback is printed and the process
exits. But the traceback frame objects still exist in memory at the moment of the crash. `pdb.pm()`
(post-mortem) re-attaches pdb to the last exception's traceback, letting you inspect the state at
the point of failure:

```python
import pdb

try:
    risky_operation()
except Exception:
    pdb.post_mortem()
```

More commonly, you run your script and it crashes. Then you run:

```bash
python -i crashed_script.py
```

The `-i` flag drops you into an interactive interpreter after the script exits (whether by crash or
normal termination). You can then call `pdb.pm()` to inspect the failure state.

The critical insight about post-mortem debugging is that it requires no advance planning. You do not
need to have set breakpoints before the crash. The traceback is a first-class object in Python, and
pdb can re-enter it at any time. This makes it indispensable for debugging production crashes where
you cannot reproduce the failure interactively.

You can also use `pdb.Pdb().interaction(None, sys.exc_info()[2])` for more fine-grained control, but
`pdb.post_mortem()` is the standard entry point.

## IDE Debuggers

### VS Code Debugger

VS Code uses the Debug Adapter Protocol (DAP), a standardized protocol for communication between an
IDE and a language-specific debug server. For Python, the adapter is implemented by the `debugpy`
package, which is maintained by Microsoft as part of the VS Code Python extension.

Configuration lives in `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "debugpy",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "env": { "PYTHONPATH": "${workspaceFolder}/src" },
      "justMyCode": true
    }
  ]
}
```

Key fields and their semantics:

- `type`: Must be `"debugpy"`. This tells VS Code which debug adapter to use.
- `request`: `"launch"` starts a new process. `"attach"` connects to an existing one.
- `program`: The script to run. `${file}` expands to the currently active file.
- `console`: `"integratedTerminal"` runs in the VS Code terminal. `"internalConsole"` runs in the
  debug console (no stdin support).
- `justMyCode`: When `true`, the debugger skips library code. Under the hood, this sets
  `step_over_pylib` in the debug adapter, which filters frames based on whether they belong to
  site-packages or the standard library. When `false`, you step into everything.

Watch expressions in VS Code are evaluated in the current frame's context on every pause. They are
not free — each watch expression requires the debug adapter to serialize the result back to the IDE
over DAP. If you have complex watch expressions and notice the debugger feels sluggish, reduce the
number of watches.

The debug console in VS Code is a full Python REPL running in the context of the debugged process.
You can execute arbitrary Python code, modify variables, call functions, and even import modules.
This is not a simulation — it is the actual process.

### PyCharm Debugger

PyCharm's debugger is implemented using the Python Debug Server Protocol (a proprietary predecessor
to DAP). It works similarly to the VS Code debugger but is tightly integrated with PyCharm's code
analysis. PyCharm's debugger supports:

- Evaluate expression on pause (same as VS Code watch expressions).
- Force return from a function (construct an arbitrary return value and immediately return from the
  current frame).
- Exception breakpoints (break on any exception, or on specific exception types).
- Method breakpoints (break on entry to any method of a class).

The "force return" feature is particularly powerful. If you have reached a point in the code where
you understand the bug and want to skip the remaining computation with a known-good value, you can
force return that value without modifying the source.

### Remote Debugging with debugpy

Remote debugging lets you attach a debugger to a Python process running on another machine, in a
container, or in a different environment. The `debugpy` package is the standard tool for this.

On the remote/target machine:

```python
import debugpy

debugpy.listen(("0.0.0.0", 5678))
print("Waiting for debugger to attach...")
debugpy.wait_for_client()
```

On your local machine, configure VS Code to attach:

```json
{
  "name": "Python: Attach Remote",
  "type": "debugpy",
  "request": "attach",
  "connect": {
    "host": "remote-host",
    "port": 5678
  },
  "pathMappings": [
    {
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "/app"
    }
  ]
}
```

The `pathMappings` field is critical. The remote process has its own filesystem paths. The local IDE
has different paths. `pathMappings` tells the debug adapter how to translate between them. If you
set a breakpoint in `/home/user/project/main.py` locally but the remote process loaded
`/app/main.py`, the path mapping ensures the breakpoint lands in the right place.

### Attaching to a Running Process

debugpy can also attach to a process that is already running, without any code changes on the
target:

```bash
python -m debugpy --listen 5678 --pid <PID>
```

This injects debugpy into the target process by writing to `/proc/<PID>/mem` on Linux. It works
because CPython's `importlib` machinery can be manipulated from outside the process. The debugpy
module is loaded into the running process, sets up the trace hook, and begins accepting DAP
connections.

This is the correct approach for debugging production services. You do not need to restart the
process with debug flags. You attach, inspect, detach, and the process continues running with
minimal disruption.

## logging vs print

### Why print() Is Fundamentally Wrong for Debugging

`print()` writes to `sys.stdout`. That is all it does. It provides:

- No timestamp. You have no idea when the message was emitted relative to other events.
- No log level. You cannot distinguish between a routine status message and a critical error.
- No source identification. The message does not include the module, function, or line number where
  it was emitted.
- No structured metadata. You cannot attach request IDs, user IDs, or any other context.
- No filtering. You cannot selectively enable or disable messages from specific modules.
- No persistence. Output goes to stdout, which may be piped to `/dev/null`, captured by a process
  manager, or lost entirely.
- No rotation. In a long-running process, print output grows without bound.
- No thread/process identification. In concurrent systems, you cannot tell which thread emitted the
  message.

In production systems, `print()` statements are not debugging — they are litter. They make
post-incident analysis harder because they produce unstructured, unfilterable noise.

### The logging Module

The `logging` module is the standard library's structured logging system. It is designed for
production use.

```python
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s:%(funcName)s:%(lineno)d - %(message)s",
    datefmt="%Y-%m-%dT%H:%M:%S%z"
)

logger = logging.getLogger(__name__)

def process_order(order_id):
    logger.info("Processing order started", extra={"order_id": order_id})
    try:
        result = validate_order(order_id)
        logger.debug("Validation result: %s", result)
    except ValueError as e:
        logger.error("Order validation failed: %s", e, exc_info=True)
        raise
```

Key design decisions in this code:

1. `logging.getLogger(__name__)` creates a logger named after the current module. `__name__`
   resolves to the fully qualified module name (e.g., `myapp.services.orders`). This gives you
   per-module log granularity. You can set `myapp.services` to WARNING and `myapp.services.orders`
   to DEBUG independently.

2. `logging.basicConfig()` configures the root logger. It creates a `StreamHandler` attached to
   `sys.stderr` with the specified format. `basicConfig` only works if the root logger has no
   handlers yet — calling it after any `logging.getLogger()` has been configured is a no-op. This is
   the single most common mistake with logging configuration.

3. The format string uses `%s` style formatting, not f-strings. This is intentional. The `logging`
   module uses lazy string formatting: the `%s` placeholder is only interpolated if the message
   actually gets emitted (i.e., if the log level is enabled). With f-strings, the string is always
   interpolated at the call site, even if the log level filters it out. In a hot loop with
   DEBUG-level messages and an INFO-level threshold, f-strings waste CPU on string formatting that
   is immediately discarded.

4. `exc_info=True` appends the full traceback to the log message. The `logger.exception()` method is
   a shortcut that does the same thing and sets the level to ERROR.

### Log Levels

| Level      | Numeric Value | When to Use                                                                                                                                                                                    |
| ---------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEBUG`    | 10            | Detailed diagnostic information. Variable values, control flow, internal state. Only enabled during active debugging or in development environments.                                           |
| `INFO`     | 20            | Confirmation that things are working as expected. Request received, processing started, connection established. The default level for most production systems.                                 |
| `WARNING`  | 30            | Something unexpected happened, or an indication of a problem in the near future. Deprecation warning, retry attempt, fallback to secondary path. The default level if no configuration is set. |
| `ERROR`    | 40            | A serious problem. The current operation failed. An HTTP request returned 500, a database query raised an exception, a file could not be parsed.                                               |
| `CRITICAL` | 50            | A fatal error. The process cannot continue. Out of memory, database connection permanently lost, unrecoverable corruption.                                                                     |

The numeric values are not arbitrary. They define a total ordering: DEBUG &lt; INFO &lt; WARNING
&lt; ERROR &lt; CRITICAL. A logger set to WARNING level will emit WARNING, ERROR, and CRITICAL
messages, but suppress DEBUG and INFO. This is the mechanism that makes logging filterable at
runtime.

### Handlers

Handlers determine where log messages go. The standard library provides:

- `StreamHandler`: Writes to a stream (defaults to `sys.stderr`).
- `FileHandler`: Writes to a file. Opens the file in append mode.
- `RotatingFileHandler`: Writes to a file with rotation. When the file reaches a specified size, it
  is rotated (renamed with a `.1`, `.2`, etc. suffix) and a new file is created.
- `TimedRotatingFileHandler`: Rotates based on time intervals (hourly, daily, weekly).

```python
from logging.handlers import RotatingFileHandler

handler = RotatingFileHandler(
    "/var/log/app.log",
    maxBytes=10 * 1024 * 1024,
    backupCount=5,
    encoding="utf-8"
)
handler.setFormatter(logging.Formatter(
    "%(asctime)s %(levelname)s %(name)s %(message)s"
))
logger.addHandler(handler)
```

`maxBytes=10 * 1024 * 1024` sets a 10 MB rotation threshold. `backupCount=5` keeps at most 5 rotated
files. The oldest file is deleted when a new rotation occurs. This is how you prevent log files from
consuming all available disk space in production.

### Structured Logging

Structured logging means emitting log messages as machine-parseable data (typically JSON) rather
than free-text strings. This is essential for production systems that aggregate logs into
observability platforms (ELK, Splunk, Datadog, Loki).

```python
import json
import logging

class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_entry = {
            "timestamp": self.formatTime(record, self.datefmt),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "module": record.module,
            "function": record.funcName,
            "line": record.lineno,
        }
        if record.exc_info:
            log_entry["exception"] = self.formatException(record.exc_info)
        if hasattr(record, "extra"):
            log_entry.update(record.extra)
        return json.dumps(log_entry)

handler = logging.StreamHandler()
handler.setFormatter(JSONFormatter())
logger = logging.getLogger("myapp")
logger.addHandler(handler)
logger.error("Request failed", extra={"request_id": "abc123", "status_code": 500})
```

The `extra` parameter on log calls is the mechanism for attaching structured metadata. These fields
are stored as attributes on the `LogRecord` object and can be accessed by custom formatters. This is
how you attach request IDs, trace IDs, user IDs, and other operational metadata to log messages.

## traceback Module

The `traceback` module provides programmatic access to traceback objects. This is essential for
building error handling infrastructure, logging unhandled exceptions, and constructing custom error
reports.

### Core Functions

```python
import traceback

try:
    result = 1 / 0
except Exception:
    traceback.print_exc()
```

`traceback.print_exc()` prints the full traceback to `sys.stderr`. It is equivalent to what Python
does automatically for unhandled exceptions, but you call it explicitly inside your `except` block.
This is useful when you catch an exception, log it, and then re-raise or handle it.

```python
try:
    result = 1 / 0
except Exception:
    tb_str = traceback.format_exc()
    logger.error("Unhandled error:\n%s", tb_str)
```

`traceback.format_exc()` returns the traceback as a string instead of printing it. This is the form
you use when you want to store the traceback in a log, a database, or an error reporting service.

```python
traceback.print_stack(file=sys.stdout)
```

`traceback.print_stack()` prints the current call stack without requiring an exception. This is
useful for answering "how did I get here?" when you are not in an exception handler. It shows the
full frame chain from the current position back to the module level.

### Custom Exception Hooks

When an unhandled exception propagates to the top of the call stack, Python calls
`sys.excepthook(exc_type, exc_value, exc_traceback)`. The default implementation prints the
traceback to stderr and exits. You can replace this to implement custom error reporting:

```python
import sys
import traceback

def custom_excepthook(exc_type, exc_value, exc_traceback):
    if issubclass(exc_type, KeyboardInterrupt):
        sys.__excepthook__(exc_type, exc_value, exc_traceback)
        return
    tb_str = "".join(traceback.format_exception(exc_type, exc_value, exc_traceback))
    error_report = {
        "type": exc_type.__name__,
        "message": str(exc_value),
        "traceback": tb_str,
    }
    send_to_error_service(error_report)
    sys.__excepthook__(exc_type, exc_value, exc_traceback)

sys.excepthook = custom_excepthook
```

Critical detail: always delegate to `sys.__excepthook__` at the end. If your custom hook raises an
exception, Python enters an infinite loop of exception handling. The `sys.__excepthook__` reference
is the original hook that Python saved at startup.

Also note the `KeyboardInterrupt` guard. `KeyboardInterrupt` is not an error — it is the user
pressing Ctrl+C. Your error reporting hook should not fire for it.

### Exception Chaining

Python 3 supports explicit and implicit exception chaining:

```python
try:
    int("not a number")
except ValueError as e:
    raise RuntimeError("Failed to parse input") from e
```

The `raise ... from e` syntax sets the `__cause__` attribute on the new exception. This creates an
explicit chain. The traceback shows both exceptions:

```
RuntimeError: Failed to parse input
  The above exception was the direct cause of the following exception:
  ...
ValueError: invalid literal for int() with base 10: 'not a number'
```

If you use bare `raise` inside an `except` block, Python sets `__context__` automatically (implicit
chaining). If you use `raise ... from None`, you suppress the chain entirely:

```python
try:
    int("not a number")
except ValueError:
    raise RuntimeError("Input invalid") from None
```

This produces a clean traceback with no mention of the original `ValueError`. Use `from None` when
the original exception is an implementation detail that would confuse the user or operator.

The `__cause__` and `__context__` attributes are set by the interpreter. `__suppress_context__` is
set to `True` when you use `from e` or `from None`, which tells the traceback formatter to prefer
`__cause__` over `__context__`. You almost never need to manipulate these attributes directly — the
`raise ... from` syntax handles everything.

## cProfile

`cProfile` is CPython's deterministic, function-level profiler. It is implemented in C as a C
extension (`_lsprof`), which makes it significantly faster than a pure-Python implementation but
still imposes measurable overhead.

### Command-Line Usage

```bash
python -m cProfile -s sort=time script.py
```

This runs `script.py` under cProfile and prints a sorted table of function calls at exit. The `-s`
flag controls the sort key:

| Sort Key     | What It Measures                                                                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cumulative` | Total time spent in a function including all functions it calls. This is the default. Use this to find the hot path — the function whose total cost (including callees) is highest. |
| `tottime`    | Time spent in a function itself, excluding callees. Use this to find the function where the CPU is actually doing work, not just dispatching to other functions.                    |
| `calls`      | Number of calls. Use this to find functions called surprisingly many times.                                                                                                         |
| `time`       | Alias for `cumulative`.                                                                                                                                                             |

### Programmatic API

```python
import cProfile
import pstats

profiler = cProfile.Profile()
profiler.enable()

run_my_code()

profiler.disable()

stats = pstats.Stats(profiler)
stats.sort_stats("cumulative")
stats.print_stats(20)
stats.print_callers("process_record")
```

The programmatic API gives you fine-grained control:

- You profile only the section of code you care about, not the entire program startup.
- `stats.print_stats(20)` restricts output to the top 20 functions, reducing noise.
- `stats.print_callers("process_record")` shows who called `process_record` and how much time each
  caller spent in it. This is how you answer "where is this function being called from, and which
  call site is the bottleneck?"

### What cProfile Actually Measures

cProfile uses `sys.setprofile()`, not `sys.settrace()`. `setprofile` fires on function call and
return events only (not on every line). On each call, cProfile records a timestamp. On each return,
it computes the elapsed time. This means:

- cProfile measures _wall clock time_ by default, not CPU time. If your function blocks on I/O, that
  I/O wait time is included in the profile.
- cProfile does not measure time spent in C extension functions that do not call back into Python.
  The profile hook only fires when Python frames are entered and exited.
- The `tottime` column shows time spent in the function body excluding callees. The `cumtime` column
  shows total time including callees. The `percall` columns are the respective values divided by the
  number of calls.

### Restricting Output

```python
stats = pstats.Stats(profiler, stream=open("profile_output.txt", "w"))
stats.sort_stats("cumulative")
stats.print_stats("myapp/")
```

The argument to `print_stats()` can be a filename pattern. `print_stats("myapp/")` only shows
functions whose filename starts with `myapp/`, filtering out standard library and third-party code.
This is how you focus the profile on your code.

## timeit

`timeit` is the standard library's microbenchmarking tool. It is designed to measure the execution
time of small code snippets with high precision.

### Command-Line Usage

```bash
python -m timeit -s "import json; data = {'key': 'value'}" "json.dumps(data)"
```

The `-s` flag provides setup code that is not included in the timing. This is critical because you
want to measure the operation, not the import or data preparation.

### Programmatic API

```python
import timeit

time_taken = timeit.timeit(
    stmt="json.dumps(data)",
    setup="import json; data = {'key': 'value'}",
    number=100000
)
print(f"{time_taken:.6f} seconds for 100000 iterations")
print(f"{time_taken / 100000 * 1e6:.3f} microseconds per iteration")

times = timeit.repeat(
    stmt="json.dumps(data)",
    setup="import json; data = {'key': 'value'}",
    number=100000,
    repeat=5
)
print(f"Min: {min(times):.6f}s, Max: {max(times):.6f}s")
print(f"Median: {sorted(times)[len(times)//2]:.6f}s")
```

`timeit.timeit()` runs the statement `number` times and returns the total time. `timeit.repeat()`
runs `timeit()` multiple times (default 5) and returns a list of total times. Always use `repeat()`
and report the minimum or median — the minimum is the most accurate because it represents the run
with the least external interference from the OS scheduler, cache effects, and other noise.

### Common Gotchas

1. **Measuring list creation including allocation**: `[x for x in range(1000)]` measures both the
   iteration and the list allocation. If you want to benchmark the iteration, use a generator or
   pre-allocate the list.

2. **Measuring dict creation**: `{"a": 1, "b": 2}` includes the cost of hash computation for keys
   and the dict's internal resize operations. The first insertion into an empty dict triggers
   allocation of the hash table. If you are benchmarking dict lookup, create the dict in the setup
   phase.

3. **The first run is always slower**: CPython's bytecode compilation, import machinery, and memory
   allocator all have cold-start effects. `timeit` runs the setup once and then the statement
   multiple times. The first iteration of the statement may be slower due to cache coldness.

4. **Garbage collection**: By default, `timeit` disables garbage collection during timing with
   `gc.disable()`. If your benchmark creates and discards many objects, this can produce
   misleadingly fast results. Use `timeit.timeit(..., setup="import gc; gc.enable()")` if GC is
   relevant to your measurement.

5. **Timer precision**: `timeit` uses `time.perf_counter()` by default, which provides the highest
   resolution timer available on the platform. On Linux, this is `clock_gettime(CLOCK_MONOTONIC)`,
   which has nanosecond resolution.

## line_profiler

`line_profiler` is a line-by-line profiler that measures the time spent on each individual line of a
function, not just each function call. This is the tool you reach for when cProfile tells you that
`process_records()` is slow but you cannot tell which specific line is the bottleneck.

### Usage

Install it:

```bash
pip install line_profiler
```

Annotate the functions you want to profile with the `@profile` decorator:

```python
@profile
def process_records(records):
    results = []
    for record in records:
        validated = validate(record)
        if validated:
            transformed = transform(validated)
            results.append(transformed)
    return results
```

Run with:

```bash
kernprof -l -v script.py
```

`-l` enables line profiling. `-v` prints the results immediately. `kernprof` generates a file
`script.py.lprof` that can be loaded later with `python -m line_profiler script.py.lprof`.

### Output Interpretation

```
Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
     1                                           @profile
     2                                           def process_records(records):
     3         1          2.0      2.0      0.0      results = []
     4    100001     500000.0      5.0     12.5      for record in records:
     5    100000    1500000.0     15.0     37.5          validated = validate(record)
     6    100000     300000.0      3.0      7.5          if validated:
     7     50000    1200000.0     24.0     30.0              transformed = transform(validated)
     8     50000     500000.0     10.0     12.5              results.append(transformed)
     9         1          1.0      1.0      0.0      return results
```

- `Hits`: Number of times the line was executed.
- `Time`: Total time (in microseconds) spent on this line across all hits.
- `Per Hit`: Average time per hit.
- `% Time`: Percentage of total function time spent on this line.

In this example, `validate(record)` on line 5 accounts for 37.5% of the time. That is where you
focus your optimization effort.

### line_profiler vs cProfile

cProfile operates at function granularity. It tells you that `process_records` took 4 seconds, but
not which line caused it. `line_profiler` operates at line granularity. It tells you exactly which
line inside `process_records` is slow.

The tradeoff: `line_profiler` is significantly slower than cProfile because it inserts a trace
callback on every _line_, not just every function call. Expect 100-1000x slowdown. Do not run
line_profiler on production workloads or on very large input datasets. Use a representative but
small subset.

`line_profiler` uses `sys.settrace()` (line-level tracing), while cProfile uses `sys.setprofile()`
(function-level tracing). This is the fundamental implementation difference that explains the
performance gap.

## memory_profiler

`memory_profiler` measures memory usage line by line, analogous to how `line_profiler` measures time
line by line. It works by sampling the process's memory usage (via
`psutil.Process().memory_info().rss`) at each line of the profiled function.

### Usage

Install it:

```bash
pip install memory_profiler psutil
```

Annotate functions with `@profile`:

```python
@profile
def load_and_process(filepath):
    with open(filepath) as f:
        data = f.read()
    parsed = json.loads(data)
    results = [transform(item) for item in parsed]
    return results
```

Run with:

```bash
python -m memory_profiler script.py
```

### Output Interpretation

```
Line #    Mem usage    Increment  Occurrences   Line Contents
=============================================================
     1     50.1 MiB     50.1 MiB           1   @profile
     2                                         def load_and_process(filepath):
     3     50.1 MiB      0.0 MiB           1       with open(filepath) as f:
     4    200.5 MiB    150.4 MiB           1           data = f.read()
     5    250.3 MiB     49.8 MiB           1       parsed = json.loads(data)
     6    300.7 MiB     50.4 MiB           1       results = [transform(item) for item in parsed]
     7    250.0 MiB    -50.7 MiB           1       return results
```

- `Mem usage`: Total RSS (Resident Set Size) of the process after executing the line.
- `Increment`: Change in RSS caused by this line. Positive means memory was allocated. Negative
  means memory was freed (garbage collector ran).

In this example, `f.read()` on line 4 allocates 150.4 MiB, which is the file contents loaded into
memory. `json.loads()` on line 5 adds another 49.8 MiB for the parsed data structure. The list
comprehension on line 6 adds 50.4 MiB. The negative increment on line 7 indicates that the garbage
collector freed memory when the function returned (local variables went out of scope).

### Tracking Memory Growth

For long-running processes, use the `memory_profiler` API to track memory growth over time:

```python
from memory_profiler import memory_usage

def long_running_task():
    cache = []
    for i in range(100000):
        cache.append({"data": "x" * 100})
        if i % 10000 == 0:
            current_mb = memory_usage(-1, interval=0.1, timeout=0.001)[0]
            print(f"Iteration {i}: {current_mb:.1f} MiB")

mem_history = memory_usage((long_running_task,), interval=0.5)
```

`memory_usage()` returns a list of RSS measurements sampled at the specified interval (in seconds).
This produces a time series of memory usage that you can plot or analyze.

### Important Caveats

- `memory_profiler` measures RSS, which includes memory shared with other processes (shared
  libraries, mmap'd files). A process that maps a 1 GiB file via `mmap` will show a 1 GiB RSS spike
  even though it did not allocate any private memory.
- The CPython garbage collector does not immediately return freed memory to the OS. Memory freed by
  the GC remains in the process's heap and is available for reuse. RSS may not decrease even after
  objects are freed. This is not a memory leak — it is the allocator's strategy.
- Memory profiling is inherently noisy. The OS may swap pages in and out, other processes may
  compete for memory, and the measurement itself has overhead. Always run memory profiles multiple
  times and look for trends, not individual measurements.

## py-spy

`py-spy` is a sampling profiler that does not require any instrumentation of the target process. It
works by reading the process's memory via `/proc/<pid>/mem` and walking the CPython interpreter's
internal data structures to reconstruct the call stack.

### Why py-spy Exists

`cProfile`, `line_profiler`, and `memory_profiler` all require you to modify your code (adding
decorators, importing modules) or run your program under a wrapper (`python -m cProfile`). This is
unacceptable for profiling production services because:

- You must restart the process with profiling enabled, losing all in-flight requests.
- The profiling overhead (10-1000x) makes the results unrepresentative of actual production
  behavior.
- You cannot profile a specific time window — you profile the entire run or nothing.

`py-spy` solves all of these problems. It attaches to a running Python process with zero code
changes and negligible overhead.

### Usage

```bash
# Install
pip install py-spy

# Top: live view of what the process is doing right now
py-spy top --pid 12345

# Record: collect a profile over a duration and save as flame graph
py-spy record -o profile.svg --pid 12345 --duration 60

# Dump: print the current call stack (single snapshot)
py-spy dump --pid 12345
```

`py-spy top` works like `top` but for Python function calls. It samples the process at 100 Hz by
default and displays the functions that appear most frequently on the call stack. This is a
real-time view of where the process is spending its CPU time.

`py-spy record` collects samples over a time window and generates a flame graph in SVG format. Flame
graphs are the standard visualization for sampled profiling data. The x-axis is the proportion of
samples (not time — the sampling rate is uniform). The y-axis is the call stack depth. Wider bars
represent functions that consume more CPU time. You can read a flame graph by finding the widest
bars at the bottom — those are the functions where most CPU time is spent.

### How py-spy Works

`py-spy` reads the target process's memory and parses CPython's internal structures:

1. It reads `/proc/<pid>/maps` to find the process's memory layout.
2. It reads `/proc/<pid>/mem` to access the process's memory.
3. It finds the main interpreter thread's `PyThreadState` object.
4. It walks the frame chain (`PyFrameObject.f_back`) to reconstruct the call stack.
5. It maps frame code objects to filenames and line numbers using the process's loaded Python
   bytecode.

This is why py-spy requires no instrumentation. It is an external observer reading internal data
structures. The overhead is limited to the cost of reading `/proc/<pid>/mem`, which is a kernel
operation that does not disturb the target process.

### Limitations

- py-spy only profiles CPU time. It cannot measure wall-clock time or I/O wait.
- py-spy requires the same Python version and build as the target process (the internal structures
  must match).
- py-spy does not work on processes running under PyPy, Stackless Python, or other non-CPython
  implementations.
- py-spy requires root privileges to attach to processes owned by other users (or `CAP_SYS_PTRACE`).
- Functions that execute too quickly to be caught by the sampler may be invisible in the profile. A
  function that takes 1 microsecond will be missed by a 100 Hz sampler (which samples every 10
  milliseconds). This is a fundamental limitation of sampling — it provides statistical accuracy,
  not deterministic accuracy.

## Common Performance Anti-Patterns

### String Concatenation in Loops

```python
# Bad: O(n^2) string concatenation
result = ""
for item in items:
    result += str(item)
```

Python strings are immutable. Each `+=` creates a new string object, copies the old contents, and
appends the new content. For `n` items, this is O(1 + 2 + 3 + ... + n) = O(n^2) total character
copies.

```python
# Good: O(n) via join
result = "".join(str(item) for item in items)

# Good: O(n) via io.StringIO
import io
buf = io.StringIO()
for item in items:
    buf.write(str(item))
result = buf.getvalue()
```

`str.join()` pre-computes the total length, allocates once, and copies each piece into the correct
position. This is O(n). `io.StringIO` uses an internal buffer that amortizes allocations.

For formatting, prefer f-strings:

```python
# Clear, fast, and readable
result = f"Processing {count} items in {duration:.2f}s"
```

F-strings are evaluated at runtime, compiled to efficient bytecode, and are faster than `%`
formatting or `.format()` for most cases.

### Unnecessary List Creation

```python
# Bad: materializes entire list in memory
total = sum([x * 2 for x in range(10000000)])

# Good: generator expression, no intermediate list
total = sum(x * 2 for x in range(10000000))
```

The list comprehension `[x * 2 for x in range(10000000)]` allocates a list with 10 million elements
(approximately 80 MiB on 64-bit CPython). The generator expression
`(x * 2 for x in range(10000000))` produces one value at a time, using O(1) memory.

This applies to any function that accepts an iterable: `any()`, `all()`, `max()`, `min()`,
`sorted()`, `list()`, `tuple()`, `set()`, `dict()`. All of these can consume generators. Only pass a
list when you need random access or multiple iterations over the same data.

### Global Variable Lookups

```python
# Slow: global lookup on every iteration
import math

def compute(values):
    result = 0
    for v in values:
        result += math.sqrt(v)
    return result

# Fast: local lookup via binding
def compute(values):
    sqrt = math.sqrt
    result = 0
    for v in values:
        result += sqrt(v)
    return result
```

In CPython, local variable access uses the `LOAD_FAST` bytecode instruction, which indexes directly
into the frame's `fastlocals` array. This is an array lookup — O(1) with very low constant factor.
Global variable access uses `LOAD_GLOBAL`, which performs a dictionary lookup in the module's
`__dict__`. Dictionary lookup involves hash computation, comparison, and potential collision
resolution. For a hot loop, the difference is measurable.

The `sqrt = math.sqrt` binding pattern is a well-known optimization in CPython. It transforms a
global dictionary lookup into a local array lookup on every iteration. In tight loops, this can
yield a 20-40% speedup.

### Using `in` on List vs Set

```python
# Bad: O(n) membership test
if item in my_list:
    ...

# Good: O(1) membership test
if item in my_set:
    ...
```

List membership test (`x in my_list`) performs a linear scan: O(n) average case, O(1) best case
(first element). Set membership test (`x in my_set`) performs a hash lookup: O(1) average case.

If you are doing membership tests in a loop, converting the list to a set first is almost always
faster:

```python
# Bad: O(n*m)
for item in items:
    if item in allowed_items_list:
        ...

# Good: O(n + m) — O(m) to build the set, O(1) per lookup
allowed_set = set(allowed_items_list)
for item in items:
    if item in allowed_set:
        ...
```

### Premature Optimization

The full quote from Donald Knuth: "Premature optimization is the root of all evil." The less-quoted
second half: "Yet we should not pass up our opportunities in that critical 3%."

The engineering discipline is:

1. **Write correct, clear code first.** Correctness is non-negotiable. Clarity is a force multiplier
   — clear code is easier to debug, test, and maintain.
2. **Measure before optimizing.** Use cProfile or py-spy to identify the actual bottleneck. Your
   intuition about what is slow is almost certainly wrong.
3. **Optimize the measured bottleneck.** Make one change, measure again, confirm the improvement. If
   the change did not help, revert it.
4. **Stop when the bottleneck is elsewhere.** When the profile shows that function A is no longer
   the hot path, stop optimizing it. Move to the new bottleneck.

The cost of premature optimization is not just wasted time. Over-optimized code is harder to read,
harder to maintain, and more likely to contain bugs. A hand-rolled bit-manipulation trick that saves
5% on a non-hot path is a net negative for the codebase.

### `__slots__` for Memory-Critical Objects

```python
# Default: every instance has a __dict__ (approximately 200+ bytes overhead)
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# With __slots__: no __dict__, fixed attribute storage
class Point:
    __slots__ = ("x", "y")
    def __init__(self, x, y):
        self.x = x
        self.y = y
```

Without `__slots__`, each instance has a `__dict__` (a Python dictionary) that stores its
attributes. A `__dict__` has significant overhead: the dict object itself, the hash table, the hash
array. For objects with a small, fixed set of attributes, this overhead can exceed the data stored.

With `__slots__`, Python allocates a fixed-size descriptor array for the declared attributes. There
is no `__dict__`, no hash table, no dynamic attribute creation. Each instance is smaller and
attribute access is faster (descriptor lookup vs dictionary lookup).

The memory savings are significant at scale. An instance with `__slots__` uses approximately 48
bytes on 64-bit CPython. Without `__slots__`, the same instance uses approximately 200+ bytes
(depending on the number of attributes). If you are creating millions of instances, the difference
is hundreds of megabytes.

Tradeoffs:

- You cannot add attributes not declared in `__slots__`. `obj.z = 42` raises `AttributeError`.
- Instances with `__slots__` cannot be pickled by default unless you define `__getstate__` and
  `__setstate__`.
- `__slots__` does not work well with multiple inheritance (both parent classes must have
  `__slots__`, and they must not overlap).

## Common Pitfalls

### 1. Leaving Breakpoints in Production

`breakpoint()` and `pdb.set_trace()` halt the process and wait for stdin. In a production service,
this means the process hangs indefinitely, requests time out, and health checks fail. The fix is
simple: set `PYTHONBREAKPOINT=0` in your production environment. This makes all `breakpoint()` calls
no-ops without requiring code changes. Better yet, use a linter rule that forbids `pdb` imports and
`breakpoint()` calls in production code paths.

### 2. Trusting cProfile for I/O-Bound Code

cProfile measures wall-clock time by default. If your function spends 90% of its time waiting for a
database query, cProfile reports that the function is slow, but the bottleneck is the database, not
your Python code. For I/O-bound profiling, you need to separate I/O time from CPU time. Use
`cProfile` with `timer=time.process_time` (measures CPU time only) or use async profiling tools that
distinguish between waiting and computing.

### 3. Measuring with timeit Without Adequate Warmup

CPython's bytecode compiler, JIT (in PyPy), memory allocator, and CPU caches all have warmup
effects. The first few iterations of a benchmark are always slower than steady state. If you run
`timeit` with `number=10`, your results are dominated by warmup noise. Always use `number=10000` or
higher, and use `timeit.repeat()` to verify consistency across runs.

### 4. Ignoring the GIL in Threaded Profiling

The Global Interpreter Lock (GIL) means that only one thread executes Python bytecode at a time.
cProfile profiles the thread that calls it, not all threads. If your program uses threading for
concurrency, you may be profiling the wrong thread. For multi-threaded profiling, attach cProfile to
each thread individually, or use py-spy which profiles all threads simultaneously.

### 5. Using print() for Debugging and Forgetting to Remove It

This is the most common debugging pitfall. `print()` statements in code are technical debt. They
clutter logs, they have no metadata, and they cannot be controlled at runtime. The solution is to
use `logging` from the start. If you must use print during development, establish a convention (grep
for `print(` before committing) or use a pre-commit hook that rejects print statements outside of
`__main__` blocks.

### 6. Profiling Debug Builds

Always profile release builds. Debug builds of C extensions (NumPy, pandas, etc.) may be compiled
without optimizations (`-O0`), which produces dramatically different performance characteristics.
Verify that your profiling environment matches your production environment: same Python version,
same C extension versions, same compiler flags.

### 7. Not Accounting for Sampling Bias in py-spy

py-spy is a statistical profiler. It samples at a fixed rate (default 100 Hz, one sample every 10
milliseconds). Functions that execute in less than 10 milliseconds may never appear in the profile.
If your bottleneck is a function that is called millions of times but takes 1 microsecond each,
py-spy will not detect it. Use deterministic profilers (cProfile, line_profiler) for short-running
functions and sampling profilers (py-spy) for long-running, CPU-intensive functions.

### 8. Memory Profiler Reporting Leaks That Are Not Leaks

Python's memory allocator (pymalloc) manages its own memory pool. When objects are freed, the memory
is returned to pymalloc's pool, not to the OS. This means that RSS may not decrease after objects
are freed. This is not a memory leak — it is the allocator retaining memory for future allocations.
To detect true memory leaks, use `tracemalloc` from the standard library, which tracks Python-level
allocations at the object level:

```python
import tracemalloc

tracemalloc.start()

# ... run code ...

snapshot = tracemalloc.take_snapshot()
top_stats = snapshot.statistics("lineno")
for stat in top_stats[:10]:
    print(stat)
```

`tracemalloc` tracks every object allocation and can show you exactly where memory is being
allocated, by file and line number. This is the correct tool for diagnosing memory leaks in Python.

### 9. Debugger Interference with Timing

Never measure performance with the debugger attached. The debugger's trace hook (`sys.settrace`)
adds overhead to every line execution. A function that takes 1 second without the debugger may take
10 seconds with it. Always detach the debugger before running performance benchmarks.

### 10. Logging in Tight Loops

```python
# Bad: creates a string on every iteration, even if DEBUG is disabled
for item in items:
    logger.debug(f"Processing item: {item}")  # f-string always evaluated

# Good: lazy formatting, string only created if DEBUG is enabled
for item in items:
    logger.debug("Processing item: %s", item)  # %s only interpolated if needed
```

In a loop processing 10 million items, the f-string version creates 10 million formatted strings
that are immediately discarded (because the log level is likely INFO or above in production). The
`%s` version defers formatting to the logging framework, which only interpolates the string if the
message passes the log level filter. This is not a micro-optimization — it is the difference between
a function that runs in 1 second and one that runs in 10 seconds.
