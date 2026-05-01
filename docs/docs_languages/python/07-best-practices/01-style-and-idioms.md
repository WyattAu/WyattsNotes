---
title: Style and Idioms
description:
  Style and Idioms — Why Style Matters in Python; PEP 8 Essentials; Naming
  Conventions for thorough revision and examination preparation.
date: 2025-06-04T16:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: style-and-idioms
---

## Why Style Matters in Python

Python's design philosophy famously states that "there should be one-- and preferably only one
--obvious way to do it." This is not merely aesthetic guidance. In a language where indentation is
syntactically significant, where dynamic typing defers error detection, and where the same
abstraction can be expressed through functions, classes, generators, or metaclasses, consistent
style is what makes large codebases maintainable. A Python project without enforced style
conventions will inevitably fracture into incompatible dialects as different contributors make
different implicit choices about naming, structure, and error handling.

The practical consequences are severe: inconsistent code is harder to review, harder to refactor,
and harder to onboard new contributors into. The tools and conventions described in this document
exist to eliminate these problems at the mechanical level, freeing developers to focus on logic
rather than formatting.

## PEP 8 Essentials

[PEP 8](https://peps.python.org/pep-0008/) is the foundational style guide for Python code. It is a
community standard, not a language mandate -- the Python interpreter does not enforce any of these
rules. This means enforcement depends entirely on tooling and team discipline.

### Naming Conventions

Naming conventions exist so that a reader can determine the role of a name from its form alone,
without needing to look up its definition.

```python
# Module names: short, lowercase, no underscores for readability if single word
import collections
import json_parser

# Package names: same as modules
# mypackage/

# Class names: CapWords (CamelCase)
class UserRepository:
    pass

class HTTPConnectionError(Exception):
    pass

# Exception names: end with "Error" if they indicate an error
class ValidationError(ValueError):
    pass

# Function and variable names: snake_case
def calculate_total(order_items):
    subtotal = sum(item.price for item in order_items)
    return subtotal

# Constants: UPPER_SNAKE_CASE at module level
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30.0

# Private attributes: single leading underscore (convention, not enforced)
class Database:
    def __init__(self):
        self._connection = None
        self._pool = []

    def _ensure_connected(self):
        if self._connection is None:
            self._connect()

# Name mangling: double leading underscore (actually enforced by interpreter)
class Base:
    def __init__(self):
        self.__value = 42  # stored as _Base__value

class Derived(Base):
    def get_parent_value(self):
        # self.__value would be _Derived__value -- different attribute
        return self._Base__value
```

The distinction between `_private` and `__mangled` is worth understanding precisely. A single
leading underscore is a convention that signals "this is an implementation detail, don't use it from
outside the class." It is not enforced by the interpreter -- any code can access `_private`
attributes freely. A double leading underscore triggers name mangling: the interpreter rewrites
`__name` to `_ClassName__name`, which makes it harder (but not impossible) to accidentally access
from subclasses.

### Line Length and Formatting

PEP 8 recommends a maximum line length of 79 characters for code and 72 for docstrings. These limits
originate from the era of 80-column terminals and side-by-side diff reviews. Many modern teams use
88 or 100 characters instead (88 is the default in Black, chosen because it fits more code without
significantly reducing readability on modern displays).

The key insight is that the specific number matters less than having a consistent limit enforced by
tooling. Arguments over 79 vs 88 vs 120 are less productive than just picking one and running a
formatter.

```python
# Implicit line continuation inside brackets -- the preferred way
result = some_function(
    first_argument,
    second_argument,
    third_argument,
    fourth_argument,
)

# Dictionary display
config = {
    "database_url": "postgresql://localhost/mydb",
    "max_connections": 10,
    "timeout_seconds": 30,
}

# Long string -- use parentheses, not backslash continuation
query = (
    "SELECT users.id, users.name, orders.total "
    "FROM users "
    "JOIN orders ON users.id = orders.user_id "
    "WHERE orders.created_at > %s"
)

# Avoid backslash continuation except in rare cases
# Bad:
if a == 1 and \
   b == 2 and \
   c == 3:
    pass

# Good:
if (
    a == 1
    and b == 2
    and c == 3
):
    pass
```

### Imports

Imports should be grouped in three sections separated by blank lines, in this order: standard
library, third-party packages, local application modules. Within each group, imports should be
sorted alphabetically. `isort` and `ruff` enforce this automatically.

```python
# Standard library
import os
import sys
from pathlib import Path
from typing import Optional

# Third-party
import httpx
from pydantic import BaseModel, field_validator

# Local application
from myapp.models import User
from myapp.services import AuthService
from myapp.utils import format_date
```

Specific rules to follow:

```python
# Avoid wildcard imports -- they pollute the namespace and make it
# impossible to determine where a name came from
# Bad:
from os.path import *

# Good:
from os.path import join, exists, isfile

# Use absolute imports by default -- they are unambiguous
# Bad (relative):
from ..models import User

# Good (absolute):
from myapp.models import User

# Relative imports are acceptable only within a package when the
# package structure makes absolute paths unwieldy
```

## Type Annotations

Type annotations make contracts between code units explicit. In a dynamically-typed language, they
are the most cost-effective tool for preventing a large class of bugs: passing the wrong type to a
function, returning an inconsistent type from a method, or misinterpreting the shape of a data
structure.

### Basic Annotations

```python
from typing import Optional, Union

def greet(name: str) -> str:
    return f"Hello, {name}"

def divide(numerator: float, denominator: float) -> Optional[float]:
    if denominator == 0:
        return None
    return numerator / denominator

def process(value: Union[int, str]) -> str:
    return str(value)
```

### Modern Syntax (Python 3.10+)

```python
# Union via pipe operator (3.10+)
def process(value: int | str) -> str:
    return str(value)

# Optional is just a shorthand for X | None
def find_user(user_id: int) -> User | None:
    return db.query(User).filter_by(id=user_id).first()

# Type alias with the `type` statement (3.12+)
type JSONValue = dict[str, "JSONValue"] | list["JSONValue"] | str | int | float | bool | None

def parse(data: JSONValue) -> None:
    ...
```

### Generics, Protocols, and TypeVar

```python
from typing import TypeVar, Generic, Protocol, Any
from collections.abc import Sequence

T = TypeVar("T")

class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

    def __len__(self) -> int:
        return len(self._items)

# Use Sequence instead of list for function parameters -- it accepts
# any iterable sequence type (list, tuple, range, etc.)
def first_item(items: Sequence[T]) -> T | None:
    return items[0] if items else None

# Protocol for structural subtyping (duck typing with static checking)
class Drawable(Protocol):
    def draw(self, surface: Any) -> None: ...

class Circle:
    def draw(self, surface: Any) -> None:
        print(f"Drawing circle on {surface}")

class Rectangle:
    def draw(self, surface: Any) -> None:
        print(f"Drawing rectangle on {surface}")

def render_all(objects: list[Drawable], surface: Any) -> None:
    for obj in objects:
        obj.draw(surface)  # type checker verifies draw() exists
```

### When to Use `# type: ignore`

The `# type: ignore` comment should be a last resort, used only when the type checker is genuinely
wrong and the code is correct. Every `# type: ignore` should have a brief explanation:

```python
result = complex_third_party_function(data)  # type: ignore[return-value]  # bug in library stubs
```

If you find yourself writing `# type: ignore` frequently, the problem is likely with your type
annotations or the library's stubs, not the type checker. File issues upstream or contribute fixes
to `typeshed`.

## Virtual Environments

A virtual environment is an isolated Python installation directory that contains its own interpreter
executable and its own `site-packages` directory. Without virtual environments, every project on a
system shares the same global `site-packages`, which means installing a package for one project can
break another project that depends on a different version of the same package.

```bash
# Create a virtual environment
python -m venv .venv

# Activate it
# On macOS/Linux:
source .venv/bin/activate
# On Windows:
# .venv\Scripts\activate

# Install packages into the isolated environment
pip install requests

# Verify isolation
python -c "import sys; print(sys.prefix)"
# Outputs: /path/to/project/.venv

# Deactivate when done
deactivate
```

### Why Not Use the System Python

The system Python is managed by the OS package manager (apt, brew, etc.). Installing packages into
it with `pip` can overwrite files that the OS depends on. More importantly, the system Python's
package versions are pinned to whatever the OS distributor chose, which may conflict with your
project's requirements. Virtual environments eliminate both problems.

### venv vs conda vs pyenv

| Tool    | Purpose                                      | Isolation Scope                                         |
| ------- | -------------------------------------------- | ------------------------------------------------------- |
| `venv`  | Creates virtual environments                 | Python packages only                                    |
| `conda` | Manages environments with multiple languages | Python + non-Python dependencies (C libraries, R, Node) |
| `pyenv` | Installs multiple Python versions            | Python interpreters only (no package isolation)         |

For most Python projects, `venv` is sufficient. Use `conda` when your project depends on non-Python
scientific libraries (NumPy, SciPy) that need specific C/Fortran compilers. Use `pyenv` when you
need to test against multiple Python interpreter versions.

## Dependency Management

### requirements.txt

The simplest approach. Lists exact package versions with their hashes for reproducibility.

```txt
# requirements.txt
requests==2.32.3
httpx==0.27.2
pydantic==2.10.4
```

```bash
pip install -r requirements.txt
pip freeze > requirements-lock.txt  # pin all transitive deps
```

**Limitations:** `requirements.txt` does not distinguish between direct and transitive dependencies.
It cannot specify metadata like entry points, optional dependency groups, or build system
requirements. It provides no mechanism for managing development vs production dependency groups.

### pyproject.toml and Modern Tooling

PEP 517 and PEP 621 established `pyproject.toml` as the single source of truth for project metadata,
build configuration, dependency specification, and tool configuration. It replaces the fragmented
ecosystem of `setup.py`, `setup.cfg`, `requirements.txt`, `tox.ini`, `.flake8`, `.mypy.ini`, and
`.isort.cfg` with one file.

```toml
[project]
name = "myapp"
version = "2.1.0"
description = "A well-structured Python application"
requires-python = ">=3.11"
dependencies = [
    "httpx>=0.27",
    "pydantic>=2.0",
    "sqlalchemy>=2.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0",
    "pytest-cov>=5.0",
    "ruff>=0.4",
    "mypy>=1.10",
    "hypothesis>=6.100",
]
docs = [
    "mkdocs>=1.5",
    "mkdocs-material>=9.5",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.ruff]
target-version = "py311"
line-length = 88

[tool.ruff.lint]
select = ["E", "F", "I", "N", "UP", "B", "SIM", "RUF"]

[tool.mypy]
strict = true
python_version = "3.11"

[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v --tb=short"
```

### Poetry vs PDM vs uv

| Feature            | Poetry                        | PDM                           | uv                   |
| ------------------ | ----------------------------- | ----------------------------- | -------------------- |
| Lock file          | `poetry.lock`                 | `pdm.lock`                    | `uv.lock`            |
| Resolver speed     | Slow (Python implementation)  | Medium (Rust-based since 2.x) | Fast (Rust-based)    |
| PEP 621 compliance | Partial (own metadata format) | Full                          | Full                 |
| Package manager    | pip (via virtualenv)          | pip (via virtualenv)          | Own installer (Rust) |
| Workspace support  | Yes                           | Yes                           | Yes                  |
| Build backend      | poetry-core                   | pdm-backend                   | hatchling (default)  |

### WHY pyproject.toml Over setup.py

`setup.py` has several fundamental problems:

1. **Execution at import time.** `setup.py` is executed by running `python setup.py`, which means
   arbitrary code runs during package inspection. This makes it impossible to safely determine a
   package's metadata without executing potentially malicious code. PEP 517 solved this by defining
   a standard interface where the build frontend tells the build backend what to do via subprocess
   calls, rather than executing the project's code directly.

2. **Scattered configuration.** Before `pyproject.toml`, project metadata lived in `setup.py` or
   `setup.cfg`, tool configuration lived in `.flake8`, `.mypy.ini`, `.isort.cfg`, `tox.ini`,
   `pytest.ini`, `MANIFEST.in`, and `pyproject.toml` (for build system). A single project could have
   ten or more configuration files. `pyproject.toml` consolidates all tool configuration under
   `[tool.*]` sections.

3. **No standard dependency format.** `install_requires` in `setup.py` and `requirements.txt` used
   different formats. `pyproject.toml` provides `[project.dependencies]` and
   `[project.optional-dependencies]` as the standard format.

4. **Dynamic vs static metadata.** `setup.py` encourages dynamic metadata generation (computing the
   version from git tags, reading README files at build time), which makes it impossible to
   determine the package's metadata without executing code. PEP 621 defines static metadata fields
   in `pyproject.toml` that can be read without execution.

`setup.py` is still supported for backward compatibility, but new projects should use
`pyproject.toml` exclusively.

## Project Structure

### Flat Layout

```
myproject/
    pyproject.toml
    README.md
    myproject/
        __init__.py
        main.py
        models.py
        services.py
    tests/
        test_main.py
        test_models.py
```

### src Layout

```
myproject/
    pyproject.toml
    README.md
    src/
        myproject/
            __init__.py
            main.py
            models.py
            services.py
    tests/
        test_main.py
        test_models.py
```

### WHY src Layout Over Flat Layout

The `src` layout places the importable package inside a `src/` directory. This seems like
unnecessary nesting, but it solves a subtle and serious problem.

When you run `pip install -e .` (editable install) with a flat layout, Python adds the project root
to `sys.path`. This means `import myproject` resolves to the local directory **before** any
installed version. If you have `requests` installed globally and also have a file called
`requests.py` in your project root, your local file shadows the real package. This can cause
extremely confusing import errors, especially when the shadowing only happens during testing
(because test runners often add the project root to `sys.path`).

The `src` layout prevents this entirely. The project root is on `sys.path`, but there is no
`myproject/` directory at the root -- it is nested inside `src/`. The only way to import `myproject`
is through the installed package entry in `site-packages`, which points to `src/myproject/` via a
`.pth` file or symlink. This guarantees that imports are always resolved through the installed
package, exactly as they would be in production.

```python
# With flat layout, this can happen during testing:
# tests/test_models.py
import myproject.models  # resolves to ./myproject/models.py (local)
# But if you installed a different version of myproject globally,
# the import silently uses the local version instead of the installed one.

# With src layout, this cannot happen:
# tests/test_models.py
import myproject.models  # resolves to .venv/lib/.../myproject/models.py (installed)
# Always uses the installed version, matching production behavior.
```

A secondary benefit: the `src` layout makes it obvious which files are part of the package and which
are project configuration. Everything under `src/` is package code. Everything at the root is
project infrastructure.

### Recommended Directory Structure

```
myproject/
    pyproject.toml
    README.md
    .gitignore
    .github/
        workflows/
            ci.yml
    src/
        myproject/
            __init__.py
            __main__.py
            models.py
            services.py
            utils.py
    tests/
        __init__.py
        conftest.py
        test_models.py
        test_services.py
```

## Testing with pytest

### Why pytest Over unittest

The standard library `unittest` framework uses class-based test organization with verbose assertion
methods (`self.assertEqual`, `self.assertTrue`, `self.assertRaises`). `pytest` uses plain functions
with native `assert` statements and provides powerful features like parametrized tests, fixtures,
and plugin-based discovery -- all without requiring inheritance from a test base class.

```python
# unittest style -- verbose and rigid
import unittest

class TestCalculator(unittest.TestCase):
    def test_add(self):
        self.assertEqual(1 + 1, 2)

    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            1 / 0

# pytest style -- concise and Pythonic
def test_add():
    assert 1 + 1 == 2

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```

The `assert` statement in pytest is rewritten at import time to provide detailed failure messages.
When `assert x == y` fails, pytest displays the values of `x` and `y` automatically, without any
special assertion methods.

### Fixtures

Fixtures are pytest's dependency injection system. They provide a reusable way to set up and tear
down test resources.

```python
import pytest
from myproject.models import User, Session

@pytest.fixture
def db_session():
    """Creates a database session that rolls back after each test."""
    session = Session()
    session.begin_nested()
    yield session
    session.rollback()
    session.close()

@pytest.fixture
def sample_user(db_session):
    """Creates a user that exists in the database for the test."""
    user = User(name="Alice", email="alice@example.com")
    db_session.add(user)
    db_session.commit()
    return user

def test_user_retrieval(db_session, sample_user):
    found = db_session.query(User).filter_by(name="Alice").first()
    assert found is not None
    assert found.email == "alice@example.com"

def test_user_update(db_session, sample_user):
    sample_user.name = "Bob"
    db_session.commit()
    found = db_session.query(User).filter_by(name="Bob").first()
    assert found is not None
```

Fixtures have scopes that control when they are created and torn down:

| Scope      | Created once per... | Common use                              |
| ---------- | ------------------- | --------------------------------------- |
| `function` | test function       | Database sessions, mock objects         |
| `class`    | test class          | Shared class-level setup                |
| `module`   | test module         | Expensive resources (Docker containers) |
| `package`  | test package        | Package-level state                     |
| `session`  | test run            | Global services, process-level state    |

### Parametrize

Parametrized tests replace copy-pasted test functions with a data-driven approach. One test function
can cover dozens of input combinations.

```python
import pytest

@pytest.mark.parametrize(
    "input_value, expected",
    [
        ("hello", "HELLO"),
        ("World", "WORLD"),
        ("", ""),
        ("123", "123"),
        ("already UPPER", "ALREADY UPPER"),
    ],
)
def test_uppercase(input_value, expected):
    assert input_value.upper() == expected

@pytest.mark.parametrize("x", [0, 1, 2, 3, 10, 100])
@pytest.mark.parametrize("y", [0, 1, 5, 10])
def test_multiply(x, y):
    assert x * y == y * x  # commutativity property
```

### Mocking

```python
from unittest.mock import MagicMock, patch, PropertyMock

def test_external_api_call():
    with patch("myproject.services.httpx.Client") as MockClient:
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {"id": 1, "name": "Alice"}

        mock_instance = MockClient.return_value.__enter__.return_value
        mock_instance.get.return_value = mock_response

        from myproject.services import fetch_user
        result = fetch_user(1)

        assert result["name"] == "Alice"
        mock_instance.get.assert_called_once_with("https://api.example.com/users/1")
```

Mocking has a critical danger: if you mock the wrong path, your test can pass even when the real
code is broken. Always mock at the boundary where the dependency is used, not where it is defined.
If `services.py` imports `httpx`, mock `myproject.services.httpx` (where it is used), not `httpx`
directly (where it is defined).

### Coverage

```bash
# Run tests with coverage
pytest --cov=myproject --cov-report=term-missing --cov-report=html tests/

# Enforce a minimum coverage threshold in CI
pytest --cov=myproject --cov-fail-under=80 tests/
```

Coverage is a useful metric, but treat it as a minimum bar, not a quality target. 100% coverage does
not mean bug-free code -- it means every line was executed, not that every meaningful input
combination was tested. Conversely, 60% coverage on a well-tested critical path is more valuable
than 95% coverage achieved by testing trivial getters and setters.

### Configuration

```toml
# pyproject.toml
[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = [
    "-v",
    "--tb=short",
    "--strict-markers",
]
markers = [
    "slow: marks tests as slow (deselect with '-m \"not slow\"')",
    "integration: marks tests that require external services",
]
```

## Linting and Type Checking

### Comparison of Linting and Formatting Tools

| Tool             | Language          | Checks                                  | Formatter                   | Speed                      | Notes                                               |
| ---------------- | ----------------- | --------------------------------------- | --------------------------- | -------------------------- | --------------------------------------------------- |
| **ruff**         | Rust              | Flake8 + isort + pydocstyle + many more | Built-in (Black-compatible) | Very fast (10-100x flake8) | Replaces flake8, isort, Black, pydocstyle, and more |
| **flake8**       | Python            | PEP 8 + pycodestyle + pyflakes          | No                          | Slow                       | Requires plugins for isort, Black, etc.             |
| **pylint**       | Python            | Deep analysis, refactoring suggestions  | No                          | Very slow                  | Many false positives; highly configurable           |
| **Black**        | Python            | Formatting only                         | Yes                         | Medium                     | Uncompromising formatting; no linting               |
| **isort**        | Python            | Import sorting only                     | Yes                         | Medium                     | Replaced by ruff's import sorting                   |
| **mypy**         | Python            | Static type checking                    | No                          | Medium                     | Reference type checker                              |
| **pyright**      | TypeScript/Python | Static type checking                    | No                          | Fast                       | Microsoft's type checker; stricter by default       |
| **basedpyright** | TypeScript/Python | Static type checking                    | No                          | Fast                       | Fork of pyright with additional features            |

### WHY Ruff Over flake8/pylint

`ruff` replaces an entire pipeline of separate tools (flake8, isort, Black, pydocstyle, pyupgrade,
and dozens of flake8 plugins) with a single Rust binary. The practical advantages are:

1. **Speed.** `ruff` is 10-100x faster than flake8 because it is written in Rust. On a large
   codebase, `ruff` completes in milliseconds where flake8 takes seconds. This makes it practical to
   run on every file save in an editor, providing instant feedback.

2. **No plugin management.** With flake8, each additional check requires installing and configuring
   a separate plugin (flake8-bugbear, flake8-comprehensions, flake8-simplify, etc.). Each plugin has
   its own version constraints and configuration format. `ruff` includes equivalent rules for all of
   these out of the box, selectable via rule codes.

3. **Unified configuration.** `ruff` is configured entirely through `pyproject.toml`. There is no
   separate `.flake8`, `.isort.cfg`, or `pyproject.toml` `[tool.black]` section. One tool, one
   configuration block.

4. **Built-in formatting.** `ruff format` is compatible with Black's formatting style (and can be
   configured to diverge where desired). This eliminates the need to run Black as a separate step.

5. **Autofix.** `ruff` can automatically fix many issues (`ruff check --fix`), including import
   sorting, unused imports, and simple refactoring suggestions. This reduces the cycle of "run
   linter, see errors, manually fix, re-run linter."

```toml
# pyproject.toml
[tool.ruff]
target-version = "py311"
line-length = 88

[tool.ruff.lint]
select = [
    "E",    # pycodestyle errors
    "W",    # pycodestyle warnings
    "F",    # pyflakes
    "I",    # isort
    "N",    # pep8-naming
    "UP",   # pyupgrade
    "B",    # flake8-bugbear
    "SIM",  # flake8-simplify
    "RUF",  # ruff-specific rules
]
ignore = ["E501"]  # line too long (handled by formatter)

[tool.ruff.lint.isort]
known-first-party = ["myproject"]
```

### Type Checking with mypy and pyright

```toml
# pyproject.toml
[tool.mypy]
strict = true
python_version = "3.11"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = true

[tool.pyright]
pythonVersion = "3.11"
typeCheckingMode = "strict"
```

Run both in CI. `mypy` and `pyright` catch different categories of errors. `mypy` is more permissive
by default (even in `strict` mode), while `pyright` is more aggressive about catching potential
`None` dereferences and type narrowing edge cases. When both pass, you have high confidence in your
type annotations.

```bash
mypy src/
pyright src/
```

## Error Handling Patterns

### Exceptions Over Return Codes

Python uses exceptions for error handling, not return codes. This is a fundamental design choice:
exceptions propagate automatically through the call stack, while return codes require explicit
checking at every level. A function ten frames deep that encounters an error cannot communicate it
to the caller through a return value without every intermediate function explicitly checking and
re-raising.

```python
# Bad: return code pattern (Java/C style, un-Pythonic)
def read_config(path):
    if not os.path.exists(path):
        return None, "File not found"
    try:
        with open(path) as f:
            return json.load(f), None
    except json.JSONDecodeError as e:
        return None, str(e)

config, error = read_config("config.json")
if error:
    print(f"Error: {error}")
    sys.exit(1)

# Good: exception pattern (Pythonic)
def read_config(path: str) -> dict:
    """Reads configuration from a JSON file.

    Raises:
        FileNotFoundError: If the config file does not exist.
        json.JSONDecodeError: If the file contains invalid JSON.
    """
    with open(path) as f:
        return json.load(f)
```

### Catch Specific Exceptions

```python
# Bad: bare except -- catches KeyboardInterrupt, SystemExit, GeneratorExit
try:
    result = process(data)
except:
    result = None

# Bad: catching Exception is only slightly better
try:
    result = process(data)
except Exception:
    result = None

# Good: catch the specific exception you expect
try:
    result = process(data)
except ValueError:
    logger.warning("Invalid data format, using default")
    result = get_default()

# Good: catch multiple specific exceptions when they share a handler
try:
    result = process(data)
except (ValueError, TypeError) as e:
    logger.warning(f"Data error: {e}")
    result = get_default()
```

Never catch `BaseException` or bare `except` in application code. These catch `KeyboardInterrupt`
(Ctrl+C) and `SystemExit` (sys.exit), which prevents the user from terminating the program. Catch
`Exception` only when you have a specific recovery strategy.

### Define Custom Exception Hierarchies

```python
class AppError(Exception):
    """Base exception for all application errors."""

class DatabaseError(AppError):
    """Errors related to database operations."""

class ConnectionError(DatabaseError):
    """Failed to connect to the database."""

class QueryError(DatabaseError):
    """A database query failed."""

class ValidationError(AppError):
    """Input data failed validation."""

def get_user(user_id: int) -> User:
    try:
        return db.query(User).filter_by(id=user_id).one()
    except NoResultFound:
        raise ValidationError(f"User {user_id} not found") from None
```

Use `raise ... from None` to suppress the original exception's traceback when it is not useful
(e.g., when translating a low-level exception into a domain exception). Use
`raise ... from original` when the chain of exceptions provides useful debugging context.

## Context Managers for Resource Management

### The Problem Context Managers Solve

When a function acquires a resource (file handle, database connection, network socket, lock), it
must release that resource regardless of whether the function completes normally or raises an
exception. Manual release requires a `try/finally` block, which is verbose and error-prone -- it is
easy to forget the `finally` clause.

```python
# Manual resource management -- verbose and easy to forget
def process_file(path):
    f = open(path)
    try:
        data = f.read()
        return transform(data)
    finally:
        f.close()

# Context manager -- concise and correct by construction
def process_file(path):
    with open(path) as f:
        data = f.read()
        return transform(data)
```

### Writing Custom Context Managers

```python
from contextlib import contextmanager
import time

@contextmanager
def measure_time(label: str):
    """Measures and logs the time taken by a block of code."""
    start = time.perf_counter()
    yield
    elapsed = time.perf_counter() - start
    print(f"[{label}] {elapsed:.4f}s")

# Usage
with measure_time("database query"):
    results = db.execute("SELECT * FROM large_table")

@contextmanager
def database_transaction(session):
    """Provides a database transaction that commits on success, rolls back on failure."""
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise

# Usage
with database_transaction(session):
    session.add(new_record)
    session.add(another_record)
    # If anything raises here, the transaction is rolled back automatically
```

For more complex cases, implement the context manager protocol directly:

```python
class ManagedConnection:
    def __init__(self, host: str, port: int):
        self.host = host
        self.port = port
        self._socket = None

    def __enter__(self):
        self._socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self._socket.connect((self.host, self.port))
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._socket.close()
        self._socket = None
        return False  # do not suppress exceptions

    def send(self, data: bytes) -> None:
        self._socket.sendall(data)
```

### `contextlib` Utilities

```python
from contextlib import suppress, redirect_stdout, closing

# suppress replaces try/except pass for expected exceptions
with suppress(FileNotFoundError):
    os.remove("temp_file.txt")

# redirect_stdout captures print output
import io
buffer = io.StringIO()
with redirect_stdout(buffer):
    print("This goes to the buffer, not stdout")
output = buffer.getvalue()

# closing works with objects that have a close() method but no context manager
import urllib.request
with closing(urllib.request.urlopen("https://example.com")) as response:
    data = response.read()
```

## Property-Based Testing with Hypothesis

Unit tests verify that a function produces the correct output for specific, hand-picked inputs.
Property-based testing verifies that a function satisfies a property for **arbitrary** inputs
generated automatically. This finds edge cases that a human tester would never think to write.

```python
from hypothesis import given, strategies as st, assume

# Strategy: generate arbitrary lists of integers
int_lists = st.lists(st.integers(min_value=-1000, max_value=1000))

@given(int_lists)
def test_sort_preserves_length(items):
    """Sorting should not change the number of elements."""
    assert len(sorted(items)) == len(items)

@given(int_lists)
def test_sort_preserves_elements(items):
    """Sorting should not add or remove elements."""
    assert sorted(sorted(items)) == sorted(items)

@given(st.lists(st.integers()))
def test_sort_is_idempotent(items):
    """Sorting an already-sorted list returns the same list."""
    assert sorted(sorted(items)) == sorted(items)

@given(st.lists(st.integers()))
def test_reverse_reverses_sort(items):
    """Reversing a sorted list gives descending order."""
    assert sorted(items, reverse=True) == list(reversed(sorted(items)))

# Use assume to filter generated inputs
@given(st.integers(), st.integers())
def test_division_properties(numerator, denominator):
    assume(denominator != 0)
    result = numerator / denominator
    assert result * denominator == pytest.approx(numerator)

# Custom strategies
from myproject.models import User

user_strategy = st.builds(
    User,
    name=st.text(min_size=1, max_size=100, alphabet=st.characters(whitelist_categories=('L', 'N', 's'))),
    email=st.emails(),
    age=st.integers(min_value=0, max_value=150),
)

@given(user_strategy)
def test_user_name_not_empty(user):
    assert len(user.name) > 0

@given(st.text())
def test_encode_decode_roundtrip(text):
    """Encoding then decoding should return the original text."""
    assert text.encode("utf-8").decode("utf-8") == text
```

The key insight of property-based testing is that you identify **properties** of your code
(invariants, round-trip behaviors, idempotency) rather than specific input/output pairs. The testing
framework then generates thousands of random inputs and verifies that the property holds for all of
them. When a failure is found, Hypothesis automatically minimizes the failing input to the smallest
counterexample, making it easy to understand and fix the bug.

## Docstrings

### Google Style

```python
def fetch_user(user_id: int, include_orders: bool = False) -> dict:
    """Fetches a user from the database by ID.

    Args:
        user_id: The unique identifier of the user. Must be a positive integer.
        include_orders: Whether to include the user's order history
            in the response. Defaults to False.

    Returns:
        A dictionary containing user data with keys 'id', 'name', 'email'.
        If include_orders is True, also includes 'orders' with a list of
        order dictionaries.

    Raises:
        ValueError: If user_id is not a positive integer.
        NotFoundError: If no user exists with the given ID.

    Examples:
        >>> fetch_user(42)
        {'id': 42, 'name': 'Alice', 'email': 'alice@example.com'}

        >>> fetch_user(42, include_orders=True)
        {'id': 42, 'name': 'Alice', 'email': 'alice@example.com', 'orders': [...]}
    """
    if user_id <= 0:
        raise ValueError("user_id must be a positive integer")
    ...
```

### NumPy Style

```python
def calculate_moving_average(data, window_size):
    """Calculate the moving average of a data series.

    Parameters
    ----------
    data : array_like
        Input data series. Must be a 1-dimensional sequence of numeric values.
    window_size : int
        The number of data points to include in each average.
        Must be positive and less than or equal to the length of data.

    Returns
    -------
    numpy.ndarray
        An array containing the moving averages. The output has
        length ``len(data) - window_size + 1``.

    Raises
    ------
    ValueError
        If window_size is not positive or exceeds the data length.

    See Also
    --------
    exponential_moving_average : Weighted moving average with exponential decay.

    Notes
    -----
    Uses a convolution-based implementation for numerical stability.
    """
    ...
```

### Sphinx/reStructuredText Style

```python
def parse_config(path):
    """Parse a configuration file and return a validated config object.

    :param path: Path to the configuration file.
    :type path: str
    :returns: A validated configuration object.
    :rtype: Config
    :raises ConfigError: If the configuration file is malformed.
    :raises FileNotFoundError: If the file does not exist.
    """
    ...
```

### Which Style to Choose

Pick one style and apply it consistently across the entire project. Google style is the most
readable for documentation generated by tools like Sphinx (with the Napoleon extension) or MkDocs
(with the mkdocstrings plugin). NumPy style is standard in scientific computing. Sphinx style is the
oldest and most verbose. All three convey the same information; the differences are purely
formatting.

## Packaging

### pyproject.toml Build Configuration

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "myapp"
version = "2.1.0"
description = "A well-structured Python application"
readme = "README.md"
license = "MIT"
requires-python = ">=3.11"
authors = [
    {name = "Jane Doe", email = "jane@example.com"},
]
classifiers = [
    "Development Status :: 4 - Beta",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.11",
    "Programming Language :: Python :: 3.12",
    "License :: OSI Approved :: MIT License",
]
dependencies = [
    "httpx>=0.27",
    "pydantic>=2.0",
]

[project.scripts]
myapp = "myapp.__main__:main"

[project.entry-points."myapp.plugins"]
csv_export = "myapp.plugins.csv:CSVExporter"

[project.urls]
Homepage = "https://github.com/janedoe/myapp"
Documentation = "https://myapp.readthedocs.io"
Repository = "https://github.com/janedoe/myapp"
```

### Build Backends

| Backend       | Maintainer | Notes                                                         |
| ------------- | ---------- | ------------------------------------------------------------- |
| `hatchling`   | Hatch      | Simple, fast, good default choice                             |
| `setuptools`  | pypa       | Legacy; still widely used, supports setup.py fallback         |
| `flit-core`   | flit       | Minimal; for pure-Python packages with no complex build needs |
| `pdm-backend` | PDM        | PEP 621 compliant; good for complex packages                  |

### Build and Publish

```bash
# Build the package
pip install build
python -m build

# The build command produces dist/myapp-2.1.0.tar.gz (sdist)
# and dist/myapp-2.1.0-py3-none-any.whl (wheel)

# Publish to PyPI (requires twine)
pip install twine
twine upload dist/*

# Or use the newer build-based upload
python -m build --upload
```

### setup.py Legacy

`setup.py` still exists in many projects and is required by some older tools. If you encounter it,
you should understand what it does, but you should not create new projects with it.

```python
# Legacy setup.py -- do not use for new projects
from setuptools import setup, find_packages

setup(
    name="myapp",
    version="2.1.0",
    packages=find_packages(),
    install_requires=[
        "httpx>=0.27",
        "pydantic>=2.0",
    ],
)
```

This file has three problems that `pyproject.toml` solves: it requires execution to read metadata
(security risk), it mixes logic with declaration (the `setup()` call can contain arbitrary Python
code), and it cannot store tool configuration. Migrate to `pyproject.toml` when you encounter
`setup.py` in existing projects.

## Putting It All Together

A well-configured Python project uses these tools in concert. The development workflow looks like
this:

1. **Editor integration.** Your editor runs `ruff` on save for instant linting and formatting
   feedback. It runs `pyright` or `mypy` in the background for type checking.

2. **Pre-commit hooks.** `pre-commit` runs `ruff check --fix`, `ruff format`, `mypy`, and `pytest`
   before every commit, preventing violations from entering the repository.

3. **CI pipeline.** GitHub Actions runs the full suite: `ruff check`, `ruff format --check`, `mypy`,
   `pytest --cov`, and any integration tests. The pipeline fails if any step fails.

4. **Dependency management.** Dependencies are declared in `pyproject.toml` and locked in `uv.lock`
   (or `poetry.lock`). The lock file ensures reproducible installs across all environments.

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install uv
      - run: uv sync --all-extras
      - run: uv run ruff check
      - run: uv run ruff format --check
      - run: uv run mypy src/
      - run: uv run pytest --cov=myproject --cov-fail-under=80
```

This layered approach catches problems at the earliest possible stage: the editor catches them as
you type, pre-commit catches them before they are committed, and CI catches anything that slips
through both. The result is a codebase where style violations, type errors, and failing tests are
fixed immediately, not discovered weeks later during code review.
