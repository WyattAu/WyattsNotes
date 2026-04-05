---
title: File I/O
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: file-io
---

## The `open()` Built-in

`open()` is the primary interface for file I/O in Python. It returns a file object (an instance of
`io.TextIOWrapper` for text mode or `io.BufferedReader`/`io.BufferedWriter` for binary mode) that
provides methods for reading, writing, and seeking.

### Modes

The mode string controls what operations are permitted and whether the file is interpreted as text
or binary data. Modes are composed from the following characters:

| Character | Meaning                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------- |
| `r`       | Read (default). File must exist; raises `FileNotFoundError` otherwise.                              |
| `w`       | Write. Truncates the file to zero length if it exists; creates it otherwise. **Data loss on open.** |
| `x`       | Exclusive creation. Creates the file; raises `FileExistsError` if it already exists.                |
| `a`       | Append. Creates the file if it does not exist; writes always go to the end.                         |
| `b`       | Binary mode. Data is `bytes`, no encoding, no newline translation.                                  |
| `t`       | Text mode (default). Data is `str`, encoding applied, newline translation.                          |
| `+`       | Update. Allows both reading and writing (file is not truncated on open for `r+`).                   |

The mode defaults to `'rt'` (read, text) if no mode is specified.

Combination modes and their semantics:

```python
open("file.txt", "r")    # read-only, text, must exist
open("file.txt", "w")    # write-only, text, truncate or create
open("file.txt", "a")    # write-only, text, append (or create)
open("file.txt", "x")    # write-only, text, exclusive create
open("file.txt", "rb")   # read-only, binary
open("file.txt", "r+")   # read+write, text, must exist, no truncation
open("file.txt", "w+")   # read+write, text, truncate or create
open("file.txt", "a+")   # read+write, text, append (or create), reads start at beginning
open("file.txt", "rb+")  # read+write, binary, must exist, no truncation
```

The distinction between `w` and `a` is critical. `w` truncates the file to zero bytes **at the
moment `open()` is called**, before any data is written. If you open a file with `w` and then your
program crashes before writing anything, the original data is already gone. `a` does not truncate --
it positions the write pointer at the end of the file (or at the beginning if the file is empty or
newly created).

The `x` mode is the safest way to create a new file because it fails atomically if the file already
exists. This prevents race conditions in concurrent environments where another process might create
the file between your existence check and your open call.

The `+` mode allows simultaneous reading and writing, but the seek position is shared. After
writing, the file position is at the end of the written data. You must seek back to the beginning to
read what you just wrote. After reading, the file position is after the last byte read.

### The `encoding` Parameter

In Python 3, `open()` defaults to the platform's default encoding, which is typically UTF-8 on Linux
and macOS, and `cp1252` (Windows-1252) on Windows. This is a source of cross-platform bugs.

The correct practice is to **always specify the encoding explicitly**:

```python
open("file.txt", "r", encoding="utf-8")
open("file.txt", "w", encoding="utf-8")
```

UTF-8 is the de facto standard for text files in 2024+. If you need to handle legacy files, common
encodings include:

- `utf-8`: Variable-width encoding, 1-4 bytes per character. Covers all Unicode code points.
  Self-synchronizing (any byte position can be identified as a start, continuation, or invalid
  byte).
- `utf-16`: 2 or 4 bytes per character. May include a BOM (Byte Order Mark: `U+FEFF`) at the start.
  Files without a BOM are ambiguous in byte order. Rarely used for general text files.
- `utf-16-le`, `utf-16-be`: Explicit endianness variants of UTF-16 without BOM.
- `latin-1` / `iso-8859-1`: Single-byte encoding covering the first 256 Unicode code points. Every
  byte in `latin-1` is valid, so decoding never fails -- but the decoded text may be garbage if the
  file is not actually Latin-1.
- `ascii`: 7-bit encoding. Raises `UnicodeDecodeError` for any byte > 127.
- `cp1252`: Windows default. A superset of ISO 8859-1 with additional characters in the 0x80-0x9F
  range (smart quotes, em dash, euro sign).

### The `errors` Parameter

Controls how encoding/decoding errors are handled:

| Value                 | Behavior                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"strict"` (default)  | Raises `UnicodeDecodeError` or `UnicodeEncodeError`.                                                                                                              |
| `"ignore"`            | Silently skips invalid bytes or characters. **Data loss.**                                                                                                        |
| `"replace"`           | Replaces invalid bytes with `U+FFFD` (REPLACEMENT CHARACTER) on decode, or `?` on encode.                                                                         |
| `"surrogateescape"`   | Maps invalid bytes to private-use code points (U+DC80-U+DCFF). Allows round-tripping arbitrary bytes through `str` without data loss. Used for filenames on Unix. |
| `"backslashreplace"`  | Replaces invalid bytes with Python escape sequences (e.g., `\xff`). Useful for debugging.                                                                         |
| `"namereplace"`       | Replaces unsupported characters with `\N{...}` escape sequences. Encode-only.                                                                                     |
| `"xmlcharrefreplace"` | Replaces unsupported characters with XML numeric character references (e.g., `&#xff;`). Encode-only.                                                              |

The `surrogateescape` error handler is essential for handling filenames on Unix systems. Unix
filenames are arbitrary byte sequences (except `/` and `\0`), and they may not be valid UTF-8. When
Python lists directory entries using `os.listdir()`, it uses `surrogateescape` to decode the raw
bytes into `str` objects. The resulting strings may contain surrogate code points, which are not
valid Unicode but can be round-tripped back to the original bytes by encoding with
`surrogateescape`.

```python
import os

for name in os.listdir("/tmp"):
    # 'name' may contain surrogates if the filename is not valid UTF-8
    encoded = name.encode("utf-8", errors="surrogateescape")
    # 'encoded' is the original raw bytes
```

### The `buffering` Parameter

Controls the size of the I/O buffer. The default is system-dependent (typically 4096 or 8192 bytes
for text mode).

- `buffering=-1` (default): Uses the system default buffer size (`io.DEFAULT_BUFFER_SIZE`).
- `buffering=0`: Unbuffered. Only valid in binary mode. Every read/write hits the OS directly.
  Useful for interacting with devices or pipes where you need byte-level control.
- `buffering=1`: Line-buffered. Only valid in text mode. The buffer is flushed whenever a newline
  character is written. Useful for interactive output (logs, progress indicators) where you want
  each line to appear immediately.
- `buffering > 1`: Fixed-size buffer of the specified number of bytes.

Buffering has performance implications. Unbuffered I/O requires a system call for every read/write
operation, which is orders of magnitude slower than buffered I/O for small operations. Fully
buffered I/O accumulates data in memory and writes it to the OS in large chunks, amortizing the
system call overhead.

### The `newline` Parameter

Controls how newline characters are handled in text mode. This is one of the most misunderstood
parameters in Python's I/O system.

By default (`newline=None`), Python performs **universal newline translation** on input and
**platform-native newline writing** on output:

- On read: `\n`, `\r\n`, and `\r` are all translated to `\n`.
- On write: `\n` is translated to the platform's line separator (`\n` on Unix, `\r\n` on Windows).

| `newline` value     | Read behavior                          | Write behavior                              |
| ------------------- | -------------------------------------- | ------------------------------------------- |
| `None` (default)    | Universal newlines (all forms to `\n`) | Platform-native (`\n` to `\r\n` on Windows) |
| `""` (empty string) | Universal newlines (all forms to `\n`) | No translation (`\n` written as `\n`)       |
| `"\n"`              | Only `\n` recognized as newline        | No translation                              |
| `"\r"`              | Only `\r` recognized as newline        | No translation                              |
| `"\r\n"`            | Only `\r\n` recognized as newline      | No translation                              |

Setting `newline=""` (empty string) is the most common explicit choice. It enables universal newline
translation on read (so you always get `\n` regardless of the file's origin) while writing `\n`
as-is on output (no platform-specific translation). This is what you want for source code files,
configuration files, and any text format that defines `\n` as the line separator.

Setting `newline="\n"` disables all translation in both directions. The file is read and written
as-is. Use this when you need to preserve the exact byte content of newlines.

### The `closefd` Parameter

When `closefd=True` (the default), closing the file object also closes the underlying file
descriptor. When `closefd=False`, the file descriptor is not closed when the file object is closed.
This is only relevant when passing an existing file descriptor (integer) instead of a file path:

```python
import os

fd = os.open("file.txt", os.O_RDONLY)
f = open(fd, "r", closefd=False)
# Closing 'f' does not close the file descriptor
f.close()
os.close(fd)  # Must close the descriptor explicitly
```

If you open a file by path (the normal case), `closefd` must be `True` (the default). Setting it to
`False` when opening by path raises `ValueError`.

## Context Manager Pattern

### `with open(...) as f:`

The context manager protocol ensures that the file is closed even if an exception occurs during
processing:

```python
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
# f is guaranteed to be closed here, even if read() raised an exception
```

This is equivalent to:

```python
f = open("data.txt", "r", encoding="utf-8")
try:
    content = f.read()
finally:
    f.close()
```

The `__enter__` method returns the file object itself (which is why `as f` gives you the same
object). The `__exit__` method calls `f.close()`, which flushes the write buffer and releases the
file descriptor back to the OS.

### Why You Must Always Use Context Managers for Files

1. **Exception safety.** Without `with`, any exception between `open()` and `close()` leaks the file
   descriptor. In a long-running process, leaked file descriptors accumulate until the process hits
   the OS limit (typically 1024 or 65536 per process) and starts getting
   `OSError: [Errno 24] Too many open files`.

2. **Buffer flushing.** `close()` flushes the write buffer. Without `close()`, data in the buffer
   may never reach disk. The garbage collector will eventually call `close()`, but the timing is
   nondeterministic -- it could be seconds or minutes later, and data could be lost if the process
   crashes.

3. **Explicitness.** The `with` block makes the scope of the open file visually clear. Readers can
   see exactly where the file is open and where it is closed.

4. **Resource limits.** On Linux, each process has a file descriptor limit (`ulimit -n`). Leaking
   descriptors is a real production issue, not just a theoretical concern. Tools like `lsof` can
   reveal descriptor leaks in running processes.

### The `__enter__` and `__exit__` Protocol

The context manager protocol consists of two methods:

- `__enter__(self)`: Called when the `with` block is entered. The return value is bound to the
  variable after `as`.

- `__exit__(self, exc_type, exc_value, traceback)`: Called when the `with` block exits, whether
  normally or due to an exception. If an exception occurred, the three arguments are the exception
  type, value, and traceback. If no exception occurred, all three are `None`. If `__exit__` returns
  `True`, the exception is suppressed.

For file objects, `__exit__` always calls `self.close()` and returns `None` (exceptions propagate).
It does not suppress exceptions.

### Opening Multiple Files Simultaneously

Python supports multiple context managers in a single `with` statement:

```python
with open("input.txt", "r", encoding="utf-8") as fin, \
     open("output.txt", "w", encoding="utf-8") as fout:
    for line in fin:
        fout.write(line.upper())
```

Or with `ExitStack` for dynamic numbers of files:

```python
from contextlib import ExitStack

with ExitStack() as stack:
    files = [
        stack.enter_context(open(f, "r", encoding="utf-8"))
        for f in filenames
    ]
    # all files are closed when the with block exits
```

`ExitStack` is also useful when you need to conditionally open files:

```python
from contextlib import ExitStack

with ExitStack() as stack:
    sources = []
    for path in paths:
        if path.exists():
            sources.append(stack.enter_context(path.open("r", encoding="utf-8")))
        else:
            sources.append(io.StringIO(""))
    # process sources
```

## Text vs Binary I/O

### Text Mode (`t`)

Text mode is the default. In text mode:

- Reading returns `str` objects. The file's bytes are decoded using the specified encoding (default:
  platform encoding, which you should always override with `encoding="utf-8"`).
- Writing accepts `str` objects. They are encoded using the specified encoding.
- Newline translation is performed (controlled by the `newline` parameter, as described above).
- `seek()` and `tell()` operate on character positions, not byte positions. Seeking is only allowed
  at positions that correspond to the start of a character encoding (for UTF-8, seeking to arbitrary
  byte positions within a multi-byte character raises `UnicodeDecodeError`).

Text mode adds an `io.TextIOWrapper` layer on top of a `io.BufferedReader`/`io.BufferedWriter`,
which itself sits on top of a raw `io.FileIO`. This is the I/O stack: raw I/O -> buffered I/O ->
text I/O.

### Binary Mode (`b`)

In binary mode:

- Reading returns `bytes` objects. No decoding is performed.
- Writing accepts `bytes` (or `bytearray`, or `memoryview`) objects. No encoding is performed.
- No newline translation occurs. You get the raw bytes exactly as stored on disk.
- `seek()` and `tell()` operate on byte positions. You can seek to any byte offset.
- The `encoding`, `errors`, and `newline` parameters are not accepted and will raise `ValueError`.

### When to Use Each

**Use text mode** for human-readable text files: source code, configuration files (JSON, YAML, TOML,
INI), log files, CSV files (with appropriate dialect handling), and any file where the content is
semantically text.

**Use binary mode** for everything else: images, audio, video, compiled binaries, network protocols,
serialized data (pickle, protobuf, msgpack), database files, compressed archives, and any file
format where the byte values matter independently of any text encoding.

**Use binary mode for text files when:**

- You need byte-level control (e.g., parsing a binary format that contains embedded text).
- You are dealing with files that may not be valid in any known encoding.
- Performance is critical and you want to avoid the overhead of encoding/decoding.
- You need to handle files with mixed encodings (some sections UTF-8, others Latin-1, etc.).

## Reading Files

### `f.read()`

Reads the entire file content as a single string (text mode) or bytes object (binary mode):

```python
with open("file.txt", "r", encoding="utf-8") as f:
    content = f.read()
```

This loads the entire file into memory. For large files (anything over available RAM minus the size
of other in-memory data), this will cause `MemoryError` or trigger aggressive swapping. Do not use
`f.read()` on files that may be large. Use iteration instead.

### `f.read(n)`

Reads up to `n` characters (text mode) or bytes (binary mode):

```python
with open("file.txt", "r", encoding="utf-8") as f:
    chunk = f.read(4096)
    while chunk:
        process(chunk)
        chunk = f.read(4096)
```

In text mode, `n` is the number of characters, not bytes. A single UTF-8 character can be 1-4 bytes,
so `f.read(4)` in text mode reads 4 characters (up to 16 bytes), not 4 bytes. This is a common
source of confusion when switching between text and binary mode.

### `f.readline()`

Reads a single line, including the trailing newline character (or `\r\n` which is translated to `\n`
in text mode with default `newline=None`). Returns an empty string at EOF:

```python
with open("file.txt", "r", encoding="utf-8") as f:
    while True:
        line = f.readline()
        if not line:
            break
        process(line)
```

`readline()` retains the newline character so you can distinguish between a blank line (`"\n"`) and
EOF (`""`). This is the only way to tell if the file ends with a trailing newline.

### `f.readlines()`

Reads all remaining lines into a list:

```python
with open("file.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
```

This is equivalent to `list(f)` but slightly less Pythonic. Both load all lines into memory. Each
line retains its trailing newline. Do not use this on large files.

### Iteration: `for line in f:`

The idiomatic way to read a file line by line without loading the entire file into memory:

```python
with open("file.txt", "r", encoding="utf-8") as f:
    for line in f:
        process(line)
```

This uses internal buffering to read the file in chunks (typically 8KB) and yields individual lines.
Memory usage is bounded by the buffer size plus the longest line in the file, regardless of the
total file size. This is the correct pattern for processing large files.

The internal implementation uses a read-ahead buffer in `io.TextIOWrapper`. It reads a large chunk
from the underlying `BufferedReader`, splits it into lines, and yields them one at a time. When the
buffer is exhausted, it reads another chunk. This amortizes the system call overhead while keeping
memory usage low.

### `f.seek()` and `f.tell()`

`f.tell()` returns the current position in the file (character offset in text mode, byte offset in
binary mode). `f.seek(offset, whence)` moves the position:

| `whence`      | Meaning                                       |
| ------------- | --------------------------------------------- |
| `0` (default) | Absolute position from the start of the file. |
| `1`           | Relative to the current position.             |
| `2`           | Relative to the end of the file.              |

```python
with open("file.bin", "rb") as f:
    f.seek(0, 2)       # seek to end
    size = f.tell()     # get file size
    f.seek(0, 0)       # seek back to start
    data = f.read(size)
```

In text mode, seeking is restricted. You can only seek to positions returned by `f.tell()` (or to
position 0). Seeking to arbitrary positions is not allowed because the text wrapper cannot
efficiently determine character boundaries at arbitrary byte offsets. In binary mode, you can seek
to any byte offset.

### The Read Pointer

The file position (read pointer, write pointer, or seek pointer -- it is a single pointer shared
between read and write operations in `+` mode) determines where the next read or write operation
will occur. Reads advance the pointer by the number of bytes/characters read. Writes advance it by
the number of bytes/characters written. Seeks set it explicitly.

In `r+` mode, the initial position is at the start of the file. In `a` and `a+` mode, the initial
position for writing is at the end of the file, but the initial position for reading is at the
start. After a write in `a+` mode, a seek is required before reading (because the write position is
at the end, but you may want to read from the beginning).

## Writing Files

### `f.write()`

Writes a string (text mode) or bytes (binary mode) to the file. Returns the number of characters
(text) or bytes (binary) written:

```python
with open("output.txt", "w", encoding="utf-8") as f:
    n = f.write("Hello, world!\n")
    print(n)  # 14
```

The return value may be less than the length of the input if the write was interrupted (e.g., by a
signal) or if the underlying system call performed a partial write. However, in practice on modern
operating systems with buffered I/O, the return value is almost always equal to the input length. If
you need guaranteed complete writes, use `os.write()` on the raw file descriptor, or check the
return value and retry.

### `f.writelines()`

Writes a list of strings (text mode) or bytes-like objects (binary mode):

```python
lines = ["first line\n", "second line\n", "third line\n"]
with open("output.txt", "w", encoding="utf-8") as f:
    f.writelines(lines)
```

Despite the name, `writelines()` does **not** add newlines between items. Each item must include its
own newline if desired. The name is misleading -- it writes all items from the iterable, not
individual lines. The primary advantage over a loop calling `f.write()` is that `writelines()` can
be more efficient because it avoids the overhead of repeated Python-level method calls.

### Flush Behavior

When you write to a buffered file, the data goes into an in-memory buffer, not directly to disk. The
buffer is flushed to the OS (via a `write()` system call) when:

1. The buffer is full.
2. `f.flush()` is called explicitly.
3. The file is closed (`f.close()`).
4. The program exits normally (the interpreter flushes all open files during shutdown).
5. In line-buffered mode (`buffering=1`), when a newline is written.

Note the distinction between "flushed to the OS" and "written to disk." The OS maintains its own
page cache. Data flushed from Python's buffer goes into the OS page cache, which may not be written
to the physical disk for seconds or minutes. To ensure data is physically on disk (durability
guarantee), you must call `os.fsync(f.fileno())` **after** `f.flush()`:

```python
with open("critical.dat", "wb") as f:
    f.write(data)
    f.flush()                    # Python buffer -> OS page cache
    os.fsync(f.fileno())         # OS page cache -> physical disk
```

`os.fsync()` is expensive because it forces a physical disk write (or at least an acknowledgment
from the disk's write cache). Use it only when you need durability guarantees (database write-ahead
logs, financial transaction records, etc.).

### Write Buffering Layers

Python's I/O stack has two levels of buffering:

1. **Python-level buffering** (controlled by the `buffering` parameter to `open()`). This is the
   `io.BufferedWriter` or `io.BufferedReader` layer. It sits between your Python code and the OS.

2. **OS-level buffering** (the page cache). This is managed by the kernel and is transparent to
   Python. The OS aggregates small writes into larger disk operations for performance.

When you call `f.write("data")`:

1. The `io.TextIOWrapper` encodes the string to bytes.
2. The `io.BufferedWriter` appends the bytes to its internal buffer.
3. If the buffer exceeds its size limit, it calls `os.write(fd, buffer_data)` to flush to the OS.
4. The OS writes the data to its page cache (not necessarily to disk).
5. The OS may flush the page cache to disk at any time (periodically, under memory pressure, or when
   `fsync()` is called).

Understanding this two-level buffering is critical for:

- **Data loss scenarios.** If the process crashes after `f.write()` but before `f.flush()`, the data
  is in Python's buffer and is lost. If the process crashes after `f.flush()` but before the OS
  writes to disk, the data is in the OS page cache and is also lost (unless the disk has a
  battery-backed write cache).

- **Performance tuning.** Larger Python buffers reduce the number of system calls. But larger
  buffers also mean more data at risk of loss if the process crashes.

## `pathlib` Integration

`pathlib.Path` provides a higher-level, object-oriented interface for file I/O. Every `Path` method
that performs I/O has a corresponding `open()`-based implementation under the hood.

### `Path.open()`

Equivalent to the built-in `open()`, but the path is implicit:

```python
from pathlib import Path

p = Path("file.txt")
with p.open("r", encoding="utf-8") as f:
    content = f.read()
```

This is syntactic sugar. The underlying call is
`open(self, mode, buffering, encoding, errors, newline)`. All the same parameters and caveats apply.

### `Path.read_text()` and `Path.write_text()`

Convenience methods for reading and writing entire text files:

```python
from pathlib import Path

p = Path("file.txt")
content = p.read_text(encoding="utf-8")
p.write_text("new content", encoding="utf-8")
```

These are equivalent to:

```python
with p.open("r", encoding="utf-8") as f:
    content = f.read()

with p.open("w", encoding="utf-8") as f:
    f.write("new content")
```

The advantage is conciseness. The disadvantage is that `read_text()` loads the entire file into
memory, which is unsafe for large files. Use `p.open()` with iteration for large files.

### `Path.read_bytes()` and `Path.write_bytes()`

Binary equivalents of the above:

```python
from pathlib import Path

data = Path("image.png").read_bytes()
Path("copy.png").write_bytes(data)
```

### `Path.mkdir()`

Creates directories:

```python
from pathlib import Path

Path("mydir").mkdir()
Path("mydir/subdir").mkdir(parents=True, exist_ok=True)
```

`parents=True` creates all intermediate directories (like `mkdir -p`). `exist_ok=True` suppresses
`FileExistsError` if the directory already exists (but raises if the path exists as a file, not a
directory). Without `exist_ok=True`, `mkdir()` raises `FileExistsError` if the directory exists.

### `Path.exists()`, `Path.is_file()`, `Path.is_dir()`

```python
from pathlib import Path

p = Path("file.txt")
print(p.exists())   # True if the path exists (file, directory, symlink)
print(p.is_file())  # True if it's a regular file (follows symlinks)
print(p.is_dir())   # True if it's a directory (follows symlinks)
```

Be aware of TOCTOU (Time Of Check, Time Of Use) races. Between calling `p.exists()` and opening the
file, another process may delete or rename it. In concurrent environments, open the file and handle
the `FileNotFoundError` rather than checking existence first.

### `Path.glob()` and `Path.rglob()`

Pattern matching for finding files:

```python
from pathlib import Path

# All .py files in the current directory (non-recursive)
for p in Path(".").glob("*.py"):
    print(p)

# All .py files recursively
for p in Path(".").rglob("*.py"):
    print(p)

# Multiple patterns
for p in Path(".").glob("*.py"):
    pass
for p in Path(".").glob("**/*.json"):
    pass
```

`glob()` uses Unix shell-style wildcards: `*` matches any sequence of characters (excluding `/`),
`?` matches any single character, `[]` matches any character in the set. `**` matches zero or more
directories (only in `rglob()` or when used explicitly as `**/pattern`).

`Path.glob()` returns a generator, not a list. This means it does not build the entire result set in
memory -- it yields matches one at a time as it traverses the directory tree. For directories with
millions of files, this is significantly more memory-efficient than `glob.glob()` (which returns a
list).

## `io` Module

The `io` module provides Python's I/O stack as a set of composable classes. Understanding this stack
is essential for advanced I/O operations, custom stream implementations, and debugging I/O issues.

### The I/O Stack

```
Application code (str/bytes)
        |
        v
   io.TextIOWrapper        (encoding/decoding, newline translation)
        |
        v
   io.BufferedReader       (read buffering)
   io.BufferedWriter       (write buffering)
   io.BufferedRandom       (read+write buffering)
        |
        v
   io.RawIOBase            (unbuffered, OS-level I/O)
   io.FileIO               (concrete implementation: file descriptor)
```

Each layer wraps the layer below it. The `open()` built-in assembles this stack automatically. You
can also construct it manually for fine-grained control.

### `io.StringIO`

An in-memory text stream. It implements the full `io.TextIOBase` interface but reads/writes to a
`str` buffer instead of a file:

```python
import io

buf = io.StringIO()
buf.write("hello\n")
buf.write("world\n")
buf.seek(0)
print(buf.read())  # "hello\nworld\n"
```

Use cases:

- Capturing output that would normally go to a file, for testing.
- Building strings incrementally when concatenation would be O(n^2) (though `io.StringIO` is not
  necessarily faster than list-join for all cases).
- Providing a file-like interface to string data.

`io.StringIO` only works with `str`. If you need to work with `bytes`, use `io.BytesIO`.

### `io.BytesIO`

An in-memory binary stream:

```python
import io

buf = io.BytesIO()
buf.write(b"\x00\x01\x02\x03")
buf.seek(0)
data = buf.read()
print(data)  # b'\x00\x01\x02\x03'
```

Use cases:

- Testing code that expects a file-like object without writing to disk.
- Building binary payloads for network protocols.
- Processing binary data in memory.

`io.BytesIO` supports the buffer protocol, so you can pass its buffer to functions expecting
`bytes-like` objects:

```python
buf = io.BytesIO(b"hello")
view = buf.getbuffer()  # memoryview
```

### `io.BufferedReader` and `io.BufferedWriter`

Buffered wrappers around raw I/O objects. You rarely construct these directly (the `open()` built-in
does it for you), but you may encounter them when working with sockets, pipes, or custom raw I/O:

```python
import io

raw = open("file.bin", "rb", buffering=0)
buffered = io.BufferedReader(raw, buffer_size=65536)
data = buffered.read(1024)
```

`BufferedReader` provides `read()`, `read1()` (unbuffered read of up to n bytes), `readinto()`,
`peek()` (read without advancing the position), and `readline()`.

`BufferedWriter` provides `write()`, `flush()`, and internal buffer management.

### `io.TextIOWrapper`

The text layer that sits on top of a buffered binary stream. It handles encoding, decoding, and
newline translation:

```python
import io

raw = open("file.txt", "rb", buffering=0)
buffered = io.BufferedReader(raw)
text = io.TextIOWrapper(buffered, encoding="utf-8", newline="\n")
content = text.read()
```

When you call `open("file.txt", "r", encoding="utf-8")`, the returned object is an instance of
`io.TextIOWrapper` that wraps a `io.BufferedReader` that wraps a `io.FileIO`.

You can detach the underlying binary stream from a `TextIOWrapper` using `f.detach()`. This removes
the text wrapper and returns the raw buffered stream. After detaching, the `TextIOWrapper` is
unusable. This is useful when you need to switch between text and binary mode on the same underlying
stream (which is not otherwise possible with a single `open()` call).

## Temporary Files

### `tempfile.NamedTemporaryFile`

Creates a temporary file with a visible name in the filesystem:

```python
import tempfile

with tempfile.NamedTemporaryFile(
    mode="w",
    encoding="utf-8",
    suffix=".txt",
    prefix="myapp_",
    dir="/tmp",
    delete=True,
) as tmp:
    tmp.write("temporary data")
    print(tmp.name)  # e.g., /tmp/myapp_abc123.txt

# File is deleted when the context manager exits (if delete=True)
```

Key parameters:

- `suffix`: File extension. Useful for tools that inspect the extension.
- `prefix`: Filename prefix for identification.
- `dir`: Directory where the file is created. Defaults to the platform's temp directory.
- `delete`: If `True` (default), the file is deleted when closed. If `False`, the file persists.

**Critical limitation on Windows:** By default, `NamedTemporaryFile` opens the file with an
exclusive lock that prevents other processes from opening it. This means you cannot pass the
filename to another process for reading while the file is still open. The workaround is to close the
file first (setting `delete=False`), pass the name, then delete manually:

```python
import tempfile
import os

fd, path = tempfile.mkstemp(suffix=".txt")
try:
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        f.write("data")
    # File is now closed and can be read by other processes
    other_process(path)
finally:
    os.unlink(path)
```

### `tempfile.TemporaryDirectory`

Creates a temporary directory that is cleaned up when the context manager exits:

```python
import tempfile

with tempfile.TemporaryDirectory(prefix="myapp_") as tmpdir:
    print(tmpdir)  # e.g., /tmp/myapp_abc123
    Path(tmpdir, "file.txt").write_text("data")
# Directory and all contents are deleted here
```

On Unix, the directory is deleted with `shutil.rmtree()`. On Windows, this can fail if another
process has files open within the directory (the `onerror` callback can be used for retry logic).

### `tempfile.mkdtemp()`

Creates a temporary directory without automatic cleanup. You are responsible for deleting it:

```python
import tempfile
import shutil

tmpdir = tempfile.mkdtemp()
try:
    # use tmpdir
    pass
finally:
    shutil.rmtree(tmpdir, ignore_errors=True)
```

### Security Considerations

`tempfile` uses `os.urandom()` to generate unpredictable filenames, preventing race conditions where
an attacker pre-creates a file with a predictable name (symlink attacks). The default permissions
are `0o600` (owner read/write only). Never construct temporary filenames manually (e.g.,
`f"/tmp/myapp_{os.getpid()}.dat"`) -- the predictability makes symlink attacks trivial.

On shared systems (web servers, CI runners), the temp directory (`/tmp` on Unix) may be
world-readable. Use `tempfile.mkstemp()` or `NamedTemporaryFile` with `dir` pointing to a directory
with restricted permissions.

## Directory Traversal

### `os.walk()`

Recursively walks a directory tree, yielding `(dirpath, dirnames, filenames)` tuples for each
directory:

```python
import os

for dirpath, dirnames, filenames in os.walk("/my/project"):
    for filename in filenames:
        if filename.endswith(".py"):
            filepath = os.path.join(dirpath, filename)
            print(filepath)
```

Key behaviors:

1. `os.walk()` is **top-down by default**. The `dirnames` list can be modified in-place to control
   which subdirectories are visited:

```python
for dirpath, dirnames, filenames in os.walk("/my/project"):
    dirnames[:] = [d for d in dirnames if not d.startswith(".")]
    dirnames[:] = [d for d in dirnames if d != "__pycache__"]
    # This prunes .git, __pycache__, node_modules, etc.
```

2. Setting `topdown=False` changes to bottom-up traversal. In bottom-up mode, you cannot prune
   directories (because they have already been visited), but you can safely delete directories after
   processing their contents:

```python
for dirpath, dirnames, filenames in os.walk("/my/cleanup", topdown=False):
    for filename in filenames:
        os.unlink(os.path.join(dirpath, filename))
    if not os.listdir(dirpath):
        os.rmdir(dirpath)
```

3. `os.walk()` uses `os.scandir()` internally (since Python 3.5), which is significantly faster than
   the older `os.listdir()` approach because `scandir()` returns entries with cached `stat`
   information, avoiding extra system calls.

### `pathlib.rglob()`

Recursive globbing with `Path` objects:

```python
from pathlib import Path

for p in Path("/my/project").rglob("*.py"):
    if p.is_file():
        print(p)
```

`rglob("**/*.py")` and `rglob("*.py")` are equivalent -- `rglob()` automatically adds `**/` if the
pattern does not start with `**`. The difference from `os.walk()` is that `rglob()` returns matching
paths only (not directories without matches), and it is lazy (returns a generator).

### `os.scandir()` for Performance

`os.scandir()` is a lower-level directory iteration that returns `os.DirEntry` objects. Each
`DirEntry` caches the `stat` result from the `readdir` system call, avoiding an extra `stat()` call
when you check `entry.is_file()` or `entry.is_dir()`:

```python
import os

with os.scandir("/my/project") as entries:
    for entry in entries:
        if entry.is_file() and entry.name.endswith(".py"):
            print(entry.path, entry.stat().st_size)
```

Benchmark: `os.scandir()` is typically 2-3x faster than `os.listdir()` + `os.path.isfile()` on Linux
with ext4, because it avoids one `stat()` system call per entry. On network filesystems (NFS, SMB),
the speedup can be 10x or more because each `stat()` is a round-trip to the server.

### Filtering by Extension

```python
import os

target_extensions = {".py", ".pyx", ".pyi"}

with os.scandir("/my/project") as entries:
    for entry in entries:
        if entry.is_file():
            ext = os.path.splitext(entry.name)[1]
            if ext in target_extensions:
                process(entry.path)
```

Using a set for `target_extensions` gives O(1) membership testing, which matters when scanning
directories with thousands of files.

### Recursive Operations

For complex recursive operations (copy, move, delete), use `shutil` rather than manual traversal:

```python
import shutil

shutil.copytree("src/", "dst/")          # recursive copy
shutil.rmtree("old_dir/")                # recursive delete
shutil.move("old_location/", "new_location/")  # recursive move
```

`shutil.rmtree()` is the standard way to delete a directory tree. It handles read-only files on
Windows (via the `onerror`/`onexc` callback) and symbolic links correctly. Manual implementations
using `os.walk()` and `os.unlink()` are error-prone and unnecessary.

## Memory-Mapped Files

### `mmap.mmap()`

Memory-mapped files map a file's contents directly into the process's virtual address space. Reads
and writes to the mapped region operate on the file data without explicit `read()` or `write()`
calls. The OS handles paging -- portions of the file are loaded into physical memory on demand and
written back when the OS decides to flush.

```python
import mmap

with open("large_file.bin", "r+b") as f:
    with mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as mm:
        # 'mm' behaves like a mutable bytes object (read-only in this case)
        print(mm[:100])         # first 100 bytes
        print(mm.find(b"pattern"))  # search for byte sequence
        print(len(mm))          # file size

# Alternative: read-write
with open("large_file.bin", "r+b") as f:
    with mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_WRITE) as mm:
        mm[100:104] = b"\xde\xad\xbe\xef"  # write bytes directly to file
```

### Use Cases

1. **Large file processing.** When working with files larger than available RAM, `mmap` allows you
   to access any part of the file without loading it entirely into memory. The OS pages in only the
   portions you access. This is the standard approach for processing multi-gigabyte files (log
   analysis, genome data, satellite imagery).

2. **Random access.** `mmap` provides O(1) access to any byte offset, regardless of the file's
   position pointer. You can read from offset 0, then offset 1000000, then offset 500, without any
   seek operations. Each access is a direct memory load.

3. **Inter-process communication.** Multiple processes can map the same file and communicate by
   reading/writing the shared memory region. This is faster than pipes or sockets for large data
   transfers because no data is copied between kernel and user space.

4. **Binary format parsing.** Structured binary formats (ELF executables, database pages, bitmap
   headers) benefit from random access to specific offsets. `mmap` combined with
   `struct.unpack_from()` allows zero-copy parsing.

### Limitations

1. **File size limit.** On 32-bit systems, `mmap` is limited to the virtual address space size
   (typically 2-3GB). On 64-bit systems, the limit is effectively the file system's maximum file
   size.

2. **No resizing.** The mapped region has a fixed size determined at creation time. If the file
   grows after mapping, the new data is not visible in the mapped region (unless you remap).

3. **Platform differences.** Windows `mmap` behavior differs from Unix in several ways:
   - Windows requires `mmap.ACCESS_COPY` for writable mappings of files opened in read-only mode.
   - Unix supports `MAP_SHARED` (writes visible to other processes) and `MAP_PRIVATE` (writes are
     copy-on-write, not visible to others). Windows has `ACCESS_WRITE` (shared) and `ACCESS_COPY`
     (private).

4. **Concurrency.** For read-write shared mappings, you need external synchronization (mutexes,
   semaphores, file locks) to prevent data races between processes. `mmap` itself provides no
   synchronization.

5. **Cannot use with text mode.** `mmap` operates on raw bytes. If you need text processing, you
   must decode the bytes yourself. `io.TextIOWrapper` cannot wrap an `mmap` object.

## Common Pitfalls

### Not Specifying Encoding

This is the most common file I/O bug in Python 3. The default encoding is platform-dependent, which
means code that works on Linux (UTF-8 default) may produce `UnicodeEncodeError` or
`UnicodeDecodeError` on Windows (cp1252 default), or silently produce mojibake (garbled text) if the
file is encoded in a different encoding than the platform default.

```python
# WRONG -- platform-dependent encoding
with open("file.txt", "w") as f:
    f.write("café")

# CORRECT -- explicit UTF-8
with open("file.txt", "w", encoding="utf-8") as f:
    f.write("café")
```

On Windows, the default encoding is `cp1252`, which cannot encode characters outside the Latin-1
range (e.g., CJK characters, emoji, many mathematical symbols). Writing such characters with the
default encoding raises `UnicodeEncodeError`. Always specify `encoding="utf-8"`.

### Windows Newline Issues

On Windows, writing `\n` in text mode (default `newline=None`) produces `\r\n` in the file. Reading
a file with `\r\n` line endings in text mode translates them to `\n`. This is usually transparent,
but it causes problems when:

1. **File size mismatch.** `f.write("hello\n")` writes 6 characters but 7 bytes on Windows. The
   return value of `f.write()` is the number of characters (6), not bytes. If you are tracking byte
   positions for binary protocols embedded in text, the count is wrong.

2. **Binary format corruption.** If you open a file that contains binary data (even if it is mostly
   text) in text mode, the newline translation will corrupt the data. Always use binary mode for
   files that contain any non-text content.

3. **Line ending consistency.** If files are edited on both Windows and Unix, the line endings may
   be inconsistent. Git's `core.autocrlf` setting can convert line endings, but this causes other
   problems (diff noise, patch failures). The safest approach is to standardize on LF (`\n`) in the
   repository and configure editors to use LF.

```python
# Force LF on all platforms
with open("file.txt", "w", encoding="utf-8", newline="") as f:
    f.write("line1\nline2\n")
```

### Not Closing Files

Every open file consumes a file descriptor. The OS limits the number of file descriptors per process
(typically 1024 soft limit, 65536 hard limit on Linux; configurable with `ulimit -n`). When the
limit is reached, new `open()` calls raise `OSError: [Errno 24] Too many open files`.

The garbage collector will eventually close files, but the timing is nondeterministic. In CPython,
reference counting closes files immediately when the last reference is dropped (in most cases), but
in other implementations (PyPy, with its garbage collector), the delay can be significant. In all
implementations, circular references prevent immediate collection.

```python
# WRONG -- file is not closed if an exception occurs
f = open("file.txt", "r", encoding="utf-8")
data = f.read()
# If an exception occurs here, f.close() is never called
f.close()

# CORRECT -- context manager guarantees cleanup
with open("file.txt", "r", encoding="utf-8") as f:
    data = f.read()
```

### Reading Large Files into Memory

`f.read()` and `f.readlines()` load the entire file into memory. For a 10GB file, this requires 10GB
of RAM (plus Python object overhead, which roughly doubles the memory usage for text mode due to the
str object structure). This triggers `MemoryError` or aggressive swapping.

```python
# WRONG -- loads entire file into memory
with open("large.csv", "r", encoding="utf-8") as f:
    lines = f.readlines()
    for line in lines:
        process(line)

# CORRECT -- iterates line by line, bounded memory
with open("large.csv", "r", encoding="utf-8") as f:
    for line in f:
        process(line)
```

The iteration pattern processes one line at a time. Memory usage is bounded by the size of the
internal read buffer (typically 8KB) plus the length of the longest line. Even for files with very
long lines (e.g., single-line JSON files), you can use `f.read(chunk_size)` to read in fixed-size
chunks.

### Binary Mode Gotchas

1. **Writing strings to binary files.** `f.write("hello")` raises
   `TypeError: a bytes-like object is required, not 'str'` in binary mode. Encode first:
   `f.write("hello".encode("utf-8"))`.

2. **Comparing bytes with strings.** `b"hello" == "hello"` is `False` in Python 3. This is a common
   source of bugs when mixing text and binary mode in the same codebase.

3. **Indexing bytes.** `b"hello"[0]` returns `104` (the integer value of `'h'`), not `b'h'`. To get
   a single-byte bytes object, use slicing: `b"hello"[0:1]` returns `b'h'`.

4. **Line splitting on bytes.** `b"hello\nworld".split(b"\n")` returns `[b"hello", b"world"]`. But
   `b"hello\r\nworld".split(b"\n")` returns `[b"hello\r", b"world"]` -- the `\r` is not stripped.
   Binary mode does not perform newline translation.

5. **Seeking in text mode.** `f.seek(n)` where `n` is not a position returned by `f.tell()` raises
   `OSError` or produces undefined behavior in text mode. This is because the `TextIOWrapper` cannot
   determine character boundaries at arbitrary byte offsets. Use binary mode if you need arbitrary
   seeking.

### Forgetting That `write()` Returns a Count

`f.write()` returns the number of characters or bytes written, not the string itself. This is not a
bug, but it trips up beginners who expect the return value to be the written data (as in some other
languages):

```python
n = f.write("hello")
print(n)  # 5, not "hello"
```

### Mixing Read and Write in `+` Mode

In `r+`, `w+`, and `a+` modes, the file supports both reading and writing. However, the read and
write pointers are shared. After writing, you must seek or flush before reading. After reading, you
must seek before writing (because the read position may be in the middle of the file, and writing at
that position would overwrite data without moving the write pointer to the end).

```python
with open("file.txt", "r+", encoding="utf-8") as f:
    content = f.read()
    f.seek(0)
    f.write(content.upper())
```

Without the `f.seek(0)`, the write would occur at the end of the file (where the read pointer
stopped), not at the beginning.

### Using `pathlib` Methods Without Error Handling

`Path.read_text()` raises `FileNotFoundError` if the file does not exist, `PermissionError` if
access is denied, and `UnicodeDecodeError` if the file content is not valid in the specified
encoding. These are the same errors as `open()`, but the one-liner syntax makes it tempting to skip
error handling:

```python
# This will crash if the file doesn't exist or has wrong encoding
content = Path("config.json").read_text(encoding="utf-8")

# Better: handle errors explicitly
try:
    content = Path("config.json").read_text(encoding="utf-8")
except FileNotFoundError:
    content = '{"default": true}'
except UnicodeDecodeError as e:
    raise RuntimeError(f"Invalid encoding in config.json: {e}")
```

### Assuming `Path.glob()` Returns All Files

`Path.glob()` returns files and directories that match the pattern. If you only want files, you must
filter with `.is_file()`. Symlinks are followed by default (a symlink to a directory matches
`is_dir()` and `is_file()` based on the target, not the link itself):

```python
for p in Path(".").glob("*.py"):
    if p.is_file():  # excludes directories named *.py (unlikely but possible)
        process(p)
```

Use `p.is_file(follow_symlinks=False)` if you want to exclude symlinks to files.
