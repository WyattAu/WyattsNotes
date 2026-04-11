---
id: context-managers
title: Context Managers and the with Statement
description:
  Python context managers — contextlib, __enter__/__exit__, async context managers, and practical
  patterns.
slug: context-managers
---

## The with Statement

The `with` statement guarantees that setup and teardown code runs, even if an exception occurs in
the block body. It is the primary mechanism for resource management in Python.

```python
# Basic form
with open("data.txt") as f:
    content = f.read()

# Equivalent to:
f = open("data.txt")
try:
    content = f.read()
finally:
    f.close()
```

### Multiple Context Managers

```python
# Sequential — both opened, both closed
with open("input.txt") as infile, open("output.txt", "w") as outfile:
    outfile.write(infile.read())

# Nested — same as above, different syntax
with open("input.txt") as infile:
    with open("output.txt", "w") as outfile:
        outfile.write(infile.read())

# Parenthesized form (Python 3.10+)
with (
    open("input.txt") as infile,
    open("output.txt", "w") as outfile,
):
    outfile.write(infile.read())
```

:::warning
If the second `with` statement fails (e.g., `open("output.txt", "w")` raises
`PermissionError`), the first resource (`input.txt`) is still properly closed. This is a key
advantage over manual try/finally.
:::

## \_\_enter\_\_ and \_\_exit\_\_

The context manager protocol requires two methods:

### Protocol

```python
class Resource:
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        print(f"Acquiring {self.name}")
        self._resource = f"resource_{self.name}"
        return self._resource  # This is bound to the 'as' variable

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Releasing {self.name}")
        if exc_type is not None:
            print(f"Exception in block: {exc_type.__name__}: {exc_val}")
        return False  # Do not suppress exceptions
        # Return True to suppress the exception

with Resource("db_connection") as r:
    print(f"Using: {r}")
# Acquiring db_connection
# Using: resource_db_connection
# Releasing db_connection
```

### \_\_exit\_\_ Parameters

| Parameter  | Description                                |
| ---------- | ------------------------------------------ |
| `exc_type` | Exception class, or `None` if no exception |
| `exc_val`  | Exception instance, or `None`              |
| `exc_tb`   | Traceback object, or `None`                |

All three are `None` when the block exits normally. When an exception occurs, they contain the
exception details.

### Suppressing Exceptions

```python
class Suppressor:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None and issubclass(exc_type, ValueError):
            print(f"Suppressed: {exc_val}")
            return True  # Suppress ValueError
        return False  # Re-raise everything else

with Suppressor():
    raise ValueError("oops")  # Suppressed

with Suppressor():
    raise TypeError("oops")   # Re-raised
```

## contextlib Module

The `contextlib` module provides utilities for creating and working with context managers.

### @contextmanager

The `@contextmanager` decorator lets you create context managers using generator functions:

```python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Setting up {name}")
    resource = f"resource_{name}"
    try:
        yield resource  # Value bound to 'as' variable
    finally:
        print(f"Tearing down {name}")
        # Cleanup always runs, even on exception

with managed_resource("database") as r:
    print(f"Using {r}")
# Setting up database
# Using resource_database
# Tearing down database
```

The generator must yield exactly once. The code before `yield` is the setup, and the code in the
`finally` block (or after `yield`) is the teardown.

### Handling Exceptions in @contextmanager

```python
from contextlib import contextmanager

@contextmanager
def transaction(db):
    print("BEGIN")
    try:
        yield db
    except Exception as e:
        print(f"ROLLBACK: {e}")
        raise  # Re-raise unless you want to suppress
    else:
        print("COMMIT")

with transaction("mydb"):
    print("Executing queries")
    # If no exception: BEGIN -> queries -> COMMIT
    # If exception: BEGIN -> queries -> ROLLBACK -> re-raise
```

### closing

`closing()` creates a context manager from any object with a `close()` method:

```python
from contextlib import closing
import urllib.request

with closing(urllib.request.urlopen("https://httpbin.org/get")) as response:
    data = response.read()
    print(f"Status: {response.status}")
```

### suppress

```python
from contextlib import suppress
import os

# Cleanly ignore specific exceptions
with suppress(FileNotFoundError):
    os.remove("/tmp/stale.lock")

with suppress(PermissionError, FileNotFoundError):
    os.makedirs("/opt/app/logs", exist_ok=True)
```

### redirect_stdout

```python
from contextlib import redirect_stdout
import io

buffer = io.StringIO()
with redirect_stdout(buffer):
    print("This goes to the buffer")
    import sys
    print(f"Python: {sys.version}")

output = buffer.getvalue()
print(f"Captured {len(output)} bytes")
```

### redirect_stderr

```python
from contextlib import redirect_stderr
import io
import logging

buffer = io.StringIO()
with redirect_stderr(buffer):
    logging.basicConfig(stream=sys.stderr, level=logging.WARNING)
    logging.warning("This goes to the buffer")

errors = buffer.getvalue()
```

## File Handling with Context Managers

`open()` is the most common context manager. It guarantees the file is closed even if an exception
occurs:

```python
# Reading
with open("config.yaml") as f:
    config = yaml.safe_load(f)

# Writing
with open("output.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "email"])
    writer.writeheader()
    writer.writerows(rows)

# Appending
with open("app.log", "a", encoding="utf-8") as f:
    f.write(f"[{datetime.now()}] Event occurred\n")

# Binary mode
with open("data.bin", "rb") as f:
    header = f.read(16)
    data = f.read()
```

### File Locking

```python
import fcntl

class FileLock:
    def __init__(self, path):
        self.path = path
        self._fd = None

    def __enter__(self):
        self._fd = open(self.path, "w")
        fcntl.flock(self._fd, fcntl.LOCK_EX)
        return self._fd

    def __exit__(self, *args):
        fcntl.flock(self._fd, fcntl.LOCK_UN)
        self._fd.close()

with FileLock("/tmp/app.lock"):
    # Only one process can be in this block at a time
    perform_critical_operation()
```

## threading.Lock as Context Manager

```python
import threading

lock = threading.Lock()

with lock:
    # Lock acquired
    shared_resource.modify()
    # Lock released when exiting the block

# Equivalent to:
lock.acquire()
try:
    shared_resource.modify()
finally:
    lock.release()
```

All synchronization primitives that have `acquire()`/`release()` methods work as context managers:

```python
import threading

rlock = threading.RLock()
semaphore = threading.Semaphore(3)
event = threading.Event()

with rlock:
    pass  # Reentrant lock

with semaphore:
    pass  # Limited to 3 concurrent

with event:  # Not useful for events — use event.wait() instead
    pass
```

## Database Connections

### sqlite3

```python
import sqlite3

def query_database(db_path):
    with sqlite3.connect(db_path) as conn:
        conn.row_factory = sqlite3.Row
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM users WHERE active = 1")
            rows = cursor.fetchall()
            return [dict(row) for row in rows]
        # conn commits automatically if no exception (via context manager)
        # conn rolls back if exception occurs
```

### Pattern: Connection Pool with Context Manager

```python
import threading
from contextlib import contextmanager

class ConnectionPool:
    def __init__(self, create_connection, pool_size=5):
        self._create = create_connection
        self._pool = []
        self._lock = threading.Lock()
        self._pool_size = pool_size

    def _get_connection(self):
        with self._lock:
            if self._pool:
                return self._pool.pop()
            return self._create()

    def _return_connection(self, conn):
        with self._lock:
            if len(self._pool) < self._pool_size:
                self._pool.append(conn)
            else:
                conn.close()

    @contextmanager
    def connection(self):
        conn = self._get_connection()
        try:
            yield conn
        finally:
            self._return_connection(conn)

pool = ConnectionPool(lambda: sqlite3.connect(":memory:"), pool_size=5)

with pool.connection() as conn:
    cursor = conn.execute("SELECT 1")
    print(cursor.fetchone())
# Connection returned to pool
```

## HTTP Sessions

```python
import requests

class APIClient:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        })

    def __enter__(self):
        return self

    def __exit__(self, *args):
        self.session.close()

    def get(self, path, **kwargs):
        return self.session.get(f"{self.base_url}{path}", **kwargs)

    def post(self, path, **kwargs):
        return self.session.post(f"{self.base_url}{path}", **kwargs)

with APIClient("https://api.example.com", "sk-123") as client:
    response = client.get("/users")
    response = client.post("/users", json={"name": "Alice"})
# Session closed automatically
```

## Temporary Directory Management

```python
import tempfile
import os

# tempfile.TemporaryDirectory is a built-in context manager
with tempfile.TemporaryDirectory() as tmpdir:
    print(f"Temp dir: {tmpdir}")
    filepath = os.path.join(tmpdir, "data.txt")
    with open(filepath, "w") as f:
        f.write("temporary data")
    print(os.path.exists(filepath))  # True
# Directory and all contents deleted

print(os.path.exists(tmpdir))  # False
```

### Temporary File

```python
import tempfile

with tempfile.NamedTemporaryFile(mode="w", suffix=".txt", delete=False) as f:
    f.write("content")
    tmppath = f.name

# delete=False keeps the file after closing
# Remember to clean up manually:
os.unlink(tmppath)
```

## Async Context Managers

### \_\_aenter\_\_ and \_\_aexit\_\_

```python
import asyncio

class AsyncResource:
    def __init__(self, name):
        self.name = name

    async def __aenter__(self):
        print(f"Async acquiring {self.name}")
        await asyncio.sleep(0.1)
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print(f"Async releasing {self.name}")
        await asyncio.sleep(0.1)
        return False

async def main():
    async with AsyncResource("database") as r:
        print(f"Using {r.name}")
    # Async acquiring database
    # Using database
    # Async releasing database

asyncio.run(main())
```

### Multiple Async Context Managers

```python
import asyncio

async def main():
    async with AsyncResource("db"), AsyncResource("cache"):
        print("Both acquired")
    # Both released in reverse order

asyncio.run(main())
```

### AsyncExitStack

`asyncio.AsyncExitStack` manages multiple async context managers dynamically:

```python
import asyncio
from contextlib import asynccontextmanager

@asynccontextmanager
async def async_db_connection(host):
    print(f"Connecting to {host}")
    await asyncio.sleep(0.1)
    conn = f"connection_{host}"
    try:
        yield conn
    finally:
        print(f"Disconnecting from {host}")
        await asyncio.sleep(0.1)

async def main():
    async with asyncio.AsyncExitStack() as stack:
        conn1 = await stack.enter_async_context(async_db_connection("db1"))
        conn2 = await stack.enter_async_context(async_db_connection("db2"))
        conn3 = await stack.enter_async_context(async_db_connection("db3"))
        print(f"Using: {conn1}, {conn2}, {conn3}")
        # All three connections close when the block exits

asyncio.run(main())
```

### contextlib.asynccontextmanager

```python
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app):
    print("Startup")
    await init_database()
    yield
    print("Shutdown")
    await close_database()

# Used with FastAPI/Starlette:
# app = FastAPI(lifespan=lifespan)
```

## Custom Context Manager Patterns

### Timing

```python
from contextlib import contextmanager
import time

@contextmanager
def timer(label=""):
    start = time.perf_counter()
    yield
    elapsed = time.perf_counter() - start
    print(f"[{label}] {elapsed:.4f}s")

with timer("database query"):
    time.sleep(0.5)
# [database query] 0.5002s

with timer("file processing"):
    process_large_file("data.csv")
```

### Retry

```python
from contextlib import contextmanager
import time
import random

@contextmanager
def retry(max_attempts=3, base_delay=1.0, exceptions=(Exception,)):
    last_exc = None
    for attempt in range(max_attempts):
        try:
            yield
            return  # Success — exit context manager
        except exceptions as e:
            last_exc = e
            if attempt < max_attempts - 1:
                delay = base_delay * (2 ** attempt) + random.uniform(0, 0.5)
                time.sleep(delay)
    raise last_exc

# Usage
with retry(max_attempts=3, exceptions=(ConnectionError,)):
    response = requests.get("https://api.example.com/data")
```

### Transaction

```python
from contextlib import contextmanager

@contextmanager
def database_transaction(connection):
    cursor = connection.cursor()
    try:
        cursor.execute("BEGIN")
        yield cursor
        connection.commit()
        print("Transaction committed")
    except Exception:
        connection.rollback()
        print("Transaction rolled back")
        raise
    finally:
        cursor.close()
```

### Logging

```python
from contextlib import contextmanager
import logging

logger = logging.getLogger(__name__)

@contextmanager
def log_duration(level=logging.INFO, message="Operation"):
    logger.log(level, f"{message}: starting")
    start = time.perf_counter()
    try:
        yield
    except Exception as e:
        elapsed = time.perf_counter() - start
        logger.log(level, f"{message}: failed after {elapsed:.3f}s — {e}")
        raise
    else:
        elapsed = time.perf_counter() - start
        logger.log(level, f"{message}: completed in {elapsed:.3f}s")

with log_duration(logging.INFO, "Data migration"):
    migrate_data()
```

### Permission Escalation

```python
from contextlib import contextmanager
import os

@contextmanager
def elevated_privileges(uid, gid):
    original_uid = os.getuid()
    original_gid = os.getgid()
    try:
        os.setegid(gid)
        os.seteuid(uid)
        yield
    finally:
        os.seteuid(original_uid)
        os.setegid(original_gid)

with elevated_privileges(0, 0):
    # Running as root for this block only
    bind_to_privileged_port(80)
# Back to original user
```

## contextlib.ExitStack

`ExitStack` manages a dynamic number of context managers, which is useful when the number of
resources is determined at runtime:

```python
from contextlib import ExitStack

def process_files(paths):
    with ExitStack() as stack:
        files = [stack.enter_context(open(p)) for p in paths]
        # All files are guaranteed to close when the block exits
        # Even if an exception occurs while opening a later file
        for f in files:
            content = f.read()
            print(f"{f.name}: {len(content)} bytes")
```

### Conditional Resource Acquisition

```python
from contextlib import ExitStack

def write_output(data, output_path=None):
    with ExitStack() as stack:
        if output_path:
            f = stack.enter_context(open(output_path, "w"))
            writer = f
        else:
            writer = sys.stdout

        for line in data:
            writer.write(f"{line}\n")
```

### Mixing Callbacks and Context Managers

```python
from contextlib import ExitStack

def setup_resources():
    with ExitStack() as stack:
        # Context managers
        db = stack.enter_context(DatabaseConnection("postgres://..."))
        cache = stack.enter_context(RedisConnection("redis://..."))

        # Callbacks
        stack.callback(os.chdir, original_dir)
        stack.callback(signal.signal, signal.SIGINT, original_handler)

        yield db, cache
```

## Common Pitfalls

### 1. Using Variables Outside the with Block

```python
with open("data.txt") as f:
    content = f.read()

# f is closed here — but content is still valid (it's a string)
# However, if you stored the file object:
with open("data.txt") as f:
    pass

f.read()  # ValueError: I/O operation on closed file
```

### 2. Exception in \_\_enter\_\_

```python
class BadManager:
    def __enter__(self):
        raise RuntimeError("Setup failed")
        return self  # Never reached

    def __exit__(self, *args):
        print("Cleanup")  # NOT called — __enter__ raised

with BadManager():
    pass  # RuntimeError: Setup failed, __exit__ NOT called
```

If `__enter__` raises, `__exit__` is never called. Handle this in the caller:

```python
try:
    with BadManager():
        pass
except RuntimeError:
    print("Setup failed — handle appropriately")
```

### 3. @contextmanager Yielding More Than Once

```python
from contextlib import contextmanager

@contextmanager
def bad():
    yield "first"
    yield "second"  # RuntimeError: generator didn't stop

@contextmanager
def bad2():
    yield  # OK
    yield  # RuntimeError: generator didn't stop after first yield
```

The generator must yield exactly once. Multiple yields are a `RuntimeError`.

### 4. Swallowing Exceptions in \_\_exit\_\_

```python
class Dangerous:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        return True  # Suppresses ALL exceptions — usually wrong

with Dangerous():
    raise ValueError("critical error")
# No exception raised — silently swallowed
```

Only suppress exceptions intentionally and for specific types. Always log suppressed exceptions:

```python
def __exit__(self, exc_type, exc_val, exc_tb):
    if exc_type is not None:
        if issubclass(exc_type, (FileNotFoundError, PermissionError)):
            logger.warning(f"Suppressed {exc_type.__name__}: {exc_val}")
            return True
    return False
```

### 5. Not Using contextlib for Simple Patterns

```python
# Verbose — manual implementation
class FileOpener:
    def __init__(self, path, mode):
        self.path = path
        self.mode = mode
    def __enter__(self):
        self.file = open(self.path, self.mode)
        return self.file
    def __exit__(self, *args):
        self.file.close()

# Clean — use @contextmanager
from contextlib import contextmanager

@contextmanager
def file_opener(path, mode):
    f = open(path, mode)
    try:
        yield f
    finally:
        f.close()

# Cleanest — open() is already a context manager
with open(path, mode) as f:
    pass
```

### 6. ExitStack Forgetting to Enter Context

```python
from contextlib import ExitStack

stack = ExitStack()
f = stack.enter_context(open("data.txt"))
# If an exception occurs before stack.__enter__(),
# the file is NOT closed

# Fix: always use 'with'
with ExitStack() as stack:
    f = stack.enter_context(open("data.txt"))
```

### 7. Async Context Manager in Sync Code

```python
# WRONG — async context manager in sync with
async def get_resource():
    yield "resource"

# with get_resource():  # TypeError: async_generator does not support the context manager protocol

# CORRECT
async with get_resource():
    pass
```
