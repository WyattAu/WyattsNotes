---
id: error-handling-patterns
title: Error Handling Patterns
description:
  "Python: Error Handling Patterns — Exception Hierarchy; Catching by Hierarchy; Defining Custom Exceptions; Base Exception Class."
slug: error-handling-patterns
---

## Exception Hierarchy

Python exceptions form a class hierarchy rooted at `BaseException`. Understanding this hierarchy is
essential for writing correct exception handlers.

```
BaseException
├── SystemExit
├── KeyboardInterrupt
├── GeneratorExit
└── Exception
    ├── StopIteration
    ├── StopAsyncIteration
    ├── ArithmeticError
    │   ├── ZeroDivisionError
    │   ├── FloatingPointError
    │   └── OverflowError
    ├── LookupError
    │   ├── IndexError
    │   └── KeyError
    ├── OSError
    │   ├── FileNotFoundError
    │   ├── PermissionError
    │   ├── IsADirectoryError
    │   ├── NotADirectoryError
    │   ├── FileExistsError
    │   ├── ConnectionError
    │   │   ├── ConnectionRefusedError
    │   │   ├── ConnectionResetError
    │   │   ├── ConnectionAbortedError
    │   │   └── BrokenPipeError
    │   ├── TimeoutError
    │   └── ProcessLookupError
    ├── TypeError
    ├── ValueError
    ├── AttributeError
    ├── RuntimeError
    │   ├── NotImplementedError
    │   └── RecursionError
    ├── NameError
    │   └── UnboundLocalError
    ├── ImportError
    │   └── ModuleNotFoundError
    └── AssertionError
```

:::info
`SystemExit`, `KeyboardInterrupt`, and `GeneratorExit` inherit directly from
`BaseException`, not `Exception`. This means `except Exception:` does not catch them — which is
correct, since you generally do not want to catch system-level signals.
:::

### Catching by Hierarchy

```python
try:
    value = int("not a number")
except ValueError as e:
    print(f"ValueError: {e}")  # Catches ValueError specifically

try:
    d = {}
    _ = d["missing"]
except LookupError as e:
    print(f"LookupError: {e}")  # Catches both KeyError and IndexError

try:
    pass
except Exception as e:
    print(f"Caught: {e}")  # Catches all standard exceptions, not SystemExit/KeyboardInterrupt
```

## Defining Custom Exceptions

### Base Exception Class

Every library or application should define a custom base exception class:

```python
class AppError(Exception):
    """Base exception for all application errors."""

    def __init__(self, message, *, code=None, details=None):
        super().__init__(message)
        self.code = code
        self.details = details or {}

    def __str__(self):
        msg = super().__str__()
        if self.code:
            return f"[{self.code}] {msg}"
        return msg

class ConfigError(AppError):
    """Configuration-related errors."""

class NetworkError(AppError):
    """Network-related errors."""

class DatabaseError(AppError):
    """Database-related errors."""

class ValidationError(AppError):
    """Input validation errors."""
```

### Exception Chaining and Context

```python
class ConfigLoader:
    def load(self, path):
        try:
            with open(path) as f:
                return self._parse(f)
        except FileNotFoundError as e:
            raise ConfigError(f"Config file not found: {path}", code="CONFIG_NOT_FOUND") from e
        except ValueError as e:
            raise ConfigError(f"Invalid config syntax in {path}", code="CONFIG_PARSE_ERROR") from e

    def _parse(self, f):
        # Simulate parsing
        raise ValueError("Unexpected token at line 42")
```

### \_\_str\_\_ and \_\_repr\_\_

```python
class ServerError(Exception):
    def __init__(self, host, port, reason):
        self.host = host
        self.port = port
        self.reason = reason
        super().__init__(f"{host}:{port} — {reason}")

    def __repr__(self):
        return f"ServerError({self.host!r}, {self.port!r}, {self.reason!r})"

e = ServerError("db.example.com", 5432, "connection refused")
print(str(e))   # db.example.com:5432 — connection refused
print(repr(e))  # ServerError('db.example.com', 5432, 'connection refused')
```

:::tip
Always call `super().__init__(message)` in custom exceptions. The message is stored in
`self.args` and used by the default `__str__` implementation. Omitting this breaks exception
chaining and logging.
:::

## EAFP vs LBYL

### EAFP: Easier to Ask Forgiveness than Permission

The Pythonic approach — try the operation and handle exceptions:

```python
# EAFP — try and handle
def get_value(data, key, default=None):
    try:
        return data[key]
    except (KeyError, TypeError, IndexError):
        return default

print(get_value({"a": 1}, "a"))     # 1
print(get_value({"a": 1}, "b"))     # None
print(get_value([1, 2, 3], 1))       # 2
print(get_value(42, "x"))           # None
```

### LBYL: Look Before You Leap

Check conditions before operating:

```python
# LBYL — check first
def get_value_lbyl(data, key, default=None):
    if isinstance(data, dict) and key in data:
        return data[key]
    if isinstance(data, (list, tuple)) and isinstance(key, int) and 0 <= key < len(data):
        return data[key]
    return default

print(get_value_lbyl({"a": 1}, "a"))   # 1
print(get_value_lbyl({"a": 1}, "b"))   # None
```

### When to Use Each

| Scenario                 | Prefer                       | Reason                            |
| ------------------------ | ---------------------------- | --------------------------------- |
| File existence           | EAFP (`open` + `except`)     | TOCTOU race condition with LBYL   |
| Dict key access          | EAFP (`try/except KeyError`) | Cleaner, idiomatic                |
| Type checking            | LBYL (`isinstance`)          | Wrong types are programmer errors |
| External API calls       | EAFP + retry                 | Network conditions change         |
| Configuration validation | LBYL at boundary             | Fail fast, clear error messages   |

:::warning
LBYL with file operations has a TOCTOU (Time of Check to Time of Use) race condition:

```python
import os

# WRONG — race condition
if os.path.exists("config.json"):
    with open("config.json") as f:
        data = f.read()
# File could be deleted between exists() and open()

# CORRECT — EAFP
try:
    with open("config.json") as f:
        data = f.read()
except FileNotFoundError:
    data = default_config()
```

:::

## try/except Patterns

### Bare except Anti-Pattern

```python
# NEVER do this:
try:
    risky_operation()
except:
    pass  # Swallows ALL exceptions including KeyboardInterrupt, SystemExit

# Bare except: also catches BaseException
# except Exception: only catches standard exceptions
# except (ValueError, TypeError): only catches specific exceptions
```

### Specific Exceptions

```python
def parse_config(path):
    try:
        with open(path) as f:
            data = json.load(f)
    except FileNotFoundError:
        raise ConfigError(f"File not found: {path}", code="FILE_NOT_FOUND")
    except json.JSONDecodeError as e:
        raise ConfigError(f"Invalid JSON in {path}: {e}", code="INVALID_JSON")
    except PermissionError:
        raise ConfigError(f"Permission denied: {path}", code="PERMISSION_DENIED")
    return data
```

### Exception Chaining with raise from

```python
def read_database_config(path):
    try:
        with open(path) as f:
            config = json.load(f)
        return config["database"]
    except FileNotFoundError as e:
        raise ConfigError(f"Config missing: {path}") from e
    except KeyError as e:
        raise ConfigError(f"Missing key 'database' in {path}") from e
    except json.JSONDecodeError as e:
        raise ConfigError(f"Invalid JSON in {path}: {e}") from e

# The full traceback includes both your error and the original cause
```

### Suppressing the Context

```python
try:
    value = int("not a number")
except ValueError:
    raise ValidationError("Input must be a number") from None
# from None suppresses the original exception context
```

### else and finally

```python
def process_file(path):
    f = None
    try:
        f = open(path)
        data = f.read()
    except FileNotFoundError:
        print("File not found")
    else:
        # Runs only if no exception was raised
        print(f"Processed {len(data)} bytes")
    finally:
        # Always runs — even if exception was raised or return was called
        if f is not None:
            f.close()
```

:::tip
Use `else` for code that should run only when no exception occurs. Use `finally` for cleanup
that must happen regardless. Avoid putting logic in `finally` that might raise exceptions, as it
masks the original exception.
:::

## Exception Handling in Generators

### Generator close() and throw()

```python
def data_pipeline(source):
    try:
        for item in source:
            processed = item * 2
            yield processed
    finally:
        print("Generator cleaned up")

gen = data_pipeline(range(5))
print(next(gen))  # 0
print(next(gen))  # 2
gen.close()       # Triggers finally block: "Generator cleaned up"
```

```python
def sensitive_operation():
    try:
        yield "step 1"
        yield "step 2"
        yield "step 3"
    except ValueError as e:
        print(f"Caught in generator: {e}")
        yield f"recovered from {e}"

gen = sensitive_operation()
print(next(gen))          # step 1
print(gen.throw(ValueError, "oops"))  # Caught in generator: oops / recovered from oops
```

### yield from Exception Propagation

```python
def inner():
    try:
        yield 1
        yield 2
        raise RuntimeError("inner error")
    except RuntimeError:
        yield "inner recovered"

def outer():
    yield "before"
    yield from inner()
    yield "after"

gen = outer()
print(list(gen))
# ['before', 1, 2, 'inner recovered', 'after']
```

## contextlib

### suppress

```python
from contextlib import suppress

# Cleanly ignore expected exceptions
with suppress(FileNotFoundError):
    os.remove("/tmp/stale_cache")

# Equivalent to:
# try:
#     os.remove("/tmp/stale_cache")
# except FileNotFoundError:
#     pass
```

### redirect_stdout

```python
from contextlib import redirect_stdout
import io

f = io.StringIO()
with redirect_stdout(f):
    print("This goes to the buffer")
    print("Not to stdout")

output = f.getvalue()
print(f"Captured: {output!r}")
```

### contextmanager Decorator

```python
from contextlib import contextmanager

@contextmanager
def database_connection(host, port):
    conn = f"Connecting to {host}:{port}..."
    print(conn)
    try:
        yield conn
    finally:
        print(f"Closing connection to {host}:{port}")

with database_connection("localhost", 5432) as conn:
    print(f"Using: {conn}")
# Output:
# Connecting to localhost:5432...
# Using: Connecting to localhost:5432...
# Closing connection to localhost:5432...
```

### Chaining Context Managers

```python
from contextlib import contextmanager

@contextmanager
def log_duration(label):
    import time
    start = time.time()
    print(f"[{label}] starting")
    try:
        yield
    finally:
        elapsed = time.time() - start
        print(f"[{label}] completed in {elapsed:.3f}s")

@contextmanager
def temporary_file(content):
    import tempfile
    import os
    fd, path = tempfile.mkstemp()
    try:
        with os.fdopen(fd, "w") as f:
            f.write(content)
        yield path
    finally:
        os.unlink(path)

with log_duration("data processing"):
    with temporary_file("test data"):
        time.sleep(0.1)
```

## contextvars

`contextvars` provides context-local state that works correctly with asyncio:

```python
import contextvars
import asyncio

request_id = contextvars.ContextVar("request_id", default="no-request")

async def handle_request(rid):
    token = request_id.set(rid)
    try:
        await process_request()
        await log_request()
    finally:
        request_id.reset(token)

async def process_request():
    print(f"Processing request: {request_id.get()}")

async def log_request():
    print(f"Logging request: {request_id.get()}")

async def main():
    await asyncio.gather(
        handle_request("req-001"),
        handle_request("req-002"),
    )

asyncio.run(main())
# Processing request: req-001
# Processing request: req-002
# Logging request: req-001
# Logging request: req-002
```

:::info
Unlike `threading.local()`, `contextvars.ContextVar` is designed for `asyncio` and correctly
propagates state through `asyncio.TaskGroup` and `Task` creation.
:::

## Assertions

### assert Statement

```python
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        assert 0 <= mid < len(arr), f"mid={mid} out of bounds"
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

:::warning
Assertions are disabled with `python -O` (optimized mode) because they are controlled by
the `__debug__` constant. **Never use assertions for data validation or runtime checks** — they are
for debugging and documenting invariants:

```python
# WRONG — assertion disabled in production
assert user.is_authenticated, "User must be authenticated"

# CORRECT — explicit check
if not user.is_authenticated:
    raise PermissionError("User must be authenticated")
```

:::

### pytest and Assertions

```python
def test_config_validation():
    config = load_config("tests/fixtures/valid_config.yaml")
    assert config.host == "localhost"
    assert config.port == 8080
    assert config.debug is False

def test_config_missing_host():
    with pytest.raises(ConfigError, match="missing.*host"):
        load_config("tests/fixtures/missing_host.yaml")

def test_config_defaults():
    config = load_config("tests/fixtures/minimal_config.yaml")
    assert config.timeout == 30  # Default value
    assert config.retries == 3   # Default value
```

## Input Validation at Boundaries

Validate input at the edges of your system — API endpoints, file readers, CLI parsers — and trust
the data internally:

```python
from dataclasses import dataclass
from typing import Optional

@dataclass
class ServerConfig:
    host: str
    port: int
    timeout: float = 30.0
    max_retries: int = 3

    def __post_init__(self):
        if not self.host or not isinstance(self.host, str):
            raise ValidationError(f"Invalid host: {self.host!r}")
        if not (1 <= self.port <= 65535):
            raise ValidationError(f"Port must be 1-65535, got {self.port}")
        if self.timeout <= 0:
            raise ValidationError(f"Timeout must be positive, got {self.timeout}")
        if self.max_retries < 0:
            raise ValidationError(f"max_retries must be non-negative, got {self.max_retries}")
```

## Error Codes vs Exceptions

| Approach     | Use When                                                                             |
| ------------ | ------------------------------------------------------------------------------------ |
| Exceptions   | Internal logic errors, programming mistakes, unexpected states                       |
| Error codes  | Expected failure modes (e.g., file not found), C interop, performance-critical paths |
| Result types | Functional style, explicit error handling, no exceptions                             |

```python
from dataclasses import dataclass
from typing import TypeVar, Generic, Optional

T = TypeVar("T")
E = TypeVar("E", bound=Exception)

@dataclass
class Result(Generic[T, E]):
    value: Optional[T] = None
    error: Optional[E] = None

    @property
    def is_ok(self):
        return self.error is None

    def unwrap(self):
        if self.error is not None:
            raise self.error
        return self.value

    @staticmethod
    def ok(value):
        return Result(value=value)

    @staticmethod
    def err(error):
        return Result(error=error)

def safe_divide(a, b):
    if b == 0:
        return Result.err(ValueError("Division by zero"))
    return Result.ok(a / b)

result = safe_divide(10, 0)
if result.is_ok:
    print(result.unwrap())
else:
    print(f"Error: {result.error}")
```

## Logging Errors vs Raising

```python
import logging

logger = logging.getLogger(__name__)

class UserService:
    def get_user(self, user_id):
        if not isinstance(user_id, int) or user_id <= 0:
            logger.error("Invalid user_id: %r", user_id)
            raise ValidationError(f"Invalid user_id: {user_id}")

    def delete_user(self, user_id):
        try:
            self._db.delete(user_id)
        except DatabaseError as e:
            logger.exception("Failed to delete user %d", user_id)
            raise  # Re-raise — let the caller decide what to do

    def sync_user(self, user_id):
        try:
            remote_data = self._api.fetch_user(user_id)
            self._db.update(user_id, remote_data)
        except NetworkError as e:
            logger.warning("Network error syncing user %d: %s", user_id, e)
            # Do NOT raise — this is a non-critical background sync
```

:::tip
**Log and raise** for unexpected errors the caller must handle. **Log and continue** for
non-critical background operations. **Raise without logging** when the caller is responsible for
handling (e.g., validation at API boundary). Never swallow exceptions silently.
:::

## Failure Domains

### Recoverable Errors

```python
class RecoverableError(AppError):
    """Errors that the caller can reasonably recover from."""
    pass

class RetryableError(RecoverableError):
    """Errors that may succeed on retry."""
    pass

class RateLimitError(RetryableError):
    def __init__(self, retry_after):
        self.retry_after = retry_after
        super().__init__(f"Rate limited, retry after {retry_after}s")
```

### Unrecoverable Errors

```python
class UnrecoverableError(AppError):
    """Errors that cannot be recovered from."""
    pass

class CorruptionError(UnrecoverableError):
    """Data corruption detected."""
    pass

class AuthenticationError(UnrecoverableError):
    """Authentication failed permanently."""
    pass
```

### Retry Pattern for Recoverable Errors

```python
import time
import random

def retry(func, max_retries=3, base_delay=1.0, retryable_exceptions=(RetryableError,)):
    last_exception = None
    for attempt in range(max_retries):
        try:
            return func()
        except retryable_exceptions as e:
            last_exception = e
            if attempt == max_retries - 1:
                break
            delay = base_delay * (2 ** attempt) + random.uniform(0, 1)
            time.sleep(delay)
    if last_exception is not None:
        raise last_exception
```

## Common Pitfalls

### 1. Catching Too Broadly

```python
# BAD — catches everything including KeyboardInterrupt
try:
    process_data()
except:
    pass

# BAD — still too broad
try:
    process_data()
except Exception:
    pass

# GOOD — specific exceptions
try:
    process_data()
except (ValueError, FileNotFoundError, json.JSONDecodeError) as e:
    logger.error("Processing failed: %s", e)
    raise ConfigError("Invalid configuration") from e
```

### 2. Losing the Stack Trace

```python
# BAD — raises new exception without chaining
try:
    json.loads(data)
except json.JSONDecodeError:
    raise ValueError("Invalid data")  # Original traceback lost

# GOOD — use raise from
try:
    json.loads(data)
except json.JSONDecodeError as e:
    raise ValueError("Invalid data") from e  # Preserves original traceback
```

### 3. Using Exceptions for Control Flow

```python
# BAD — exceptions for normal flow
def get_first(items):
    try:
        return items[0]
    except IndexError:
        return None

# GOOD — use the appropriate method
def get_first(items):
    return items[0] if items else None
```

Exceptions are expensive compared to regular control flow. Reserve them for exceptional conditions.

### 4. Not Handling Generator Cleanup

```python
def process_file(path):
    with open(path) as f:
        for line in f:
            yield line.strip()

# If the consumer doesn't exhaust the generator, the file handle leaks
# until garbage collection
gen = process_file("data.txt")
print(next(gen))
# File not explicitly closed until gen is garbage collected

# Fix: use contextlib or ensure the consumer exhausts the generator
from contextlib import closing

def process_file_safe(path):
    with open(path) as f:
        for line in f:
            yield line.strip()
```

### 5. Overriding \_\_del\_\_ for Cleanup

```python
import os

class TempFile:
    def __init__(self, content):
        self.path = self._create(content)

    def __del__(self):
        # __del__ is NOT guaranteed to be called
        # It is called during garbage collection, which may never happen
        try:
            os.unlink(self.path)
        except FileNotFoundError:
            pass

# Fix: use a context manager instead
class TempFileManager:
    def __init__(self, content):
        self.path = self._create(content)

    def __enter__(self):
        return self

    def __exit__(self, *args):
        try:
            os.unlink(self.path)
        except FileNotFoundError:
            pass
```

### 6. Ignoring finally Exceptions

```python
try:
    result = risky_operation()
except ValueError:
    print("ValueError occurred")
finally:
    # If this raises, it masks the original exception
    cleanup_that_might_fail()

# Fix: protect the finally block
try:
    result = risky_operation()
except ValueError:
    print("ValueError occurred")
finally:
    try:
        cleanup_that_might_fail()
    except Exception as e:
        logger.error("Cleanup failed: %s", e)
```
