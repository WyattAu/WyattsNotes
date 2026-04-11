---
title: Modules and Packages
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: modules-and-packages
sidebar_position: 6
---

## The Import System

The import system is the mechanism by which Python locates, loads, and binds module objects into the
current namespace. It is one of the most critical subsystems in the interpreter because every piece
of code you write depends on it, yet most developers treat it as magic. Understanding the import
system is essential for debugging import errors, designing package layouts, and avoiding circular
dependency traps.

### The `import` Statement

Python provides three syntactic forms of the import statement:

```python
import os
import os.path
from os.path import join
from os.path import join as path_join
import json as json_module
```

Each form does something subtly different at the namespace level:

1. `import os` binds the module object to the name `os` in the current namespace. The module's
   attributes are accessed as `os.path`, `os.environ`, etc. No names from inside `os` are injected
   into the current scope.

2. `from os.path import join` first imports `os.path` (which necessarily imports `os` as a
   dependency), then binds the attribute `join` from `os.path` directly into the current namespace.
   The intermediate names `os` and `os.path` are **not** bound unless they already were.

3. `import json as json_module` imports the module and binds it to the alias `json_module`. The
   original name `json` is not added to the namespace.

### What Happens When Python Imports

When the interpreter encounters an `import` statement, it performs the following steps in order:

1. **Check `sys.modules`.** This is a dictionary mapping fully qualified module names to
   already-loaded module objects. If the module is present, the import returns immediately -- the
   existing object is bound to the target name. This means a module's top-level code executes **at
   most once** per interpreter session, regardless of how many times it is imported or from how many
   locations.

2. **Find the module.** Python searches `sys.meta_path` finders in order. The default finder
   (`importlib._bootstrap_external._frozen_importlib_external.PathFinder`) searches the directories
   and zip files listed in `sys.path`. If no finder can locate the module, `ModuleNotFoundError` is
   raised.

3. **Load the module.** The finder returns a loader (or in modern terms, a module spec), which is
   responsible for creating the module object, executing the module's code, and setting the module's
   attributes.

4. **Execute the module code.** The module's `.py` file is compiled to bytecode and executed in a
   new namespace. The resulting namespace becomes the module's `__dict__`. All top-level
   assignments, function definitions, and class definitions in the module execute during this step.

5. **Cache the result.** The module object is stored in `sys.modules` under its fully qualified
   name.

6. **Bind the name.** The module object (or specific attribute) is bound to the requested name in
   the importing scope.

```python
import sys

# sys.modules is a dict of all loaded modules
print(len(sys.modules))  # typically 100+ even in a minimal script
# The 'builtins' module is always present (contains print, len, etc.)
print('builtins' in sys.modules)  # True
print('os' in sys.modules)        # False (until imported)

import os
print('os' in sys.modules)        # True

# Importing again returns the SAME object
import os
print(os is sys.modules['os'])    # True
```

The critical implication of `sys.modules` caching: if module A imports module B, and module B
modifies a global variable at module level, module A will see that modification even if A imported B
before the modification, because both references point to the same module object. Conversely, if
module B is not yet in `sys.modules` when A imports it, B's top-level code runs as a side effect of
the import.

### `sys.path`

`sys.path` is a list of strings that determines where Python looks for modules. It is populated in
the following order (first match wins):

1. The directory containing the script being run (or the current directory if running interactively
   or with `-c`). This is **not** `os.getcwd()` in all cases -- it is the directory of the
   entry-point script as resolved by the OS. This is why running `python subdir/myscript.py` adds
   `subdir/` to `sys.path`, not the project root.

2. `PYTHONPATH` environment variable. If set, its value is split on `os.pathsep` (colon on Unix,
   semicolon on Windows) and each path is appended.

3. Installation-dependent default paths. These are the site-packages directories where `pip install`
   puts packages. The exact paths depend on the Python installation and can be queried with
   `python -m site`.

4. Site-specific additions from `.pth` files in the site-packages directory.

```python
import sys

# Examine the search path
for p in sys.path:
    print(p)

# You can modify sys.path at runtime (but be careful)
sys.path.insert(0, "/my/custom/modules")
```

Modifying `sys.path` at runtime is a common but fragile pattern. It makes imports depend on the
order of execution and can cause hard-to-debug shadowing issues where a local module masks a
standard library module or an installed package. The recommended approach is to use proper package
installation via `pip install -e .` or to set `PYTHONPATH` in the environment.

### `PYTHONPATH`

`PYTHONPATH` is the standard mechanism for augmenting the module search path without modifying code.
It is analogous to `PATH` for executables or `CLASSPATH` for Java. Set it before invoking the
interpreter:

```bash
export PYTHONPATH=/my/project/src:$PYTHONPATH
python -m mypackage.main
```

In production, you should rarely rely on `PYTHONPATH`. Instead, install packages properly into a
virtual environment so that `sys.path` is populated by the installation mechanism, not by
environment variable hacks. `PYTHONPATH` is useful for development and testing where you want to
avoid repeated installs.

## Module Creation

### Every `.py` File Is a Module

In Python, there is no special declaration or registration step required to create a module. Any
file with a `.py` extension is a module. The file's stem (without extension) becomes the module's
name. When imported, the file is executed as a script, and the resulting namespace becomes the
module's `__dict__`.

### Module Dunder Attributes

Every module object has a set of special attributes that provide metadata about the module. These
are set by the import machinery and are critical for understanding how Python resolves names:

```python
# utils.py
"""Utility functions."""

import os

def get_cwd():
    return os.getcwd()

def show_metadata():
    print(__name__)      # 'utils' (or '__main__' if run directly)
    print(__file__)      # '/abs/path/to/utils.py'
    print(__package__)   # None (top-level module) or 'mypackage' (if in a package)
    print(__doc__)       # 'Utility functions.'
    print(__spec__)      # ModuleSpec(name='utils', loader=..., origin='...')
    print(__loader__)    # SourceFileLoader (deprecated in favor of __spec__)
    print(__cached__)    # '/abs/path/to/__pycache__/utils.cpython-312.pyc'
```

**`__name__`** is the most important module attribute. It contains the fully qualified name of the
module as known to the import system. When a file is run directly with `python utils.py`, `__name__`
is set to the string `'__main__'`. When imported as `from myproject import utils`, `__name__` is
`'myproject.utils'`.

This distinction is the basis for the idiomatic test guard:

```python
if __name__ == "__main__":
    print("Running as script")
    show_metadata()
```

This guard prevents the code block from executing when the module is imported. It is not optional
for modules that have side effects at import time (starting servers, opening files, spawning
processes) -- without it, importing the module for testing or type checking would trigger those side
effects.

**`__file__`** is the path to the file from which the module was loaded. For `.pyc` files, it still
points to the original `.py` source. For modules loaded from zip files or other non-filesystem
sources, `__file__` may be a synthetic path or `None`. For namespace packages, `__file__` is `None`.

**`__package__`** is the parent package name. For a top-level module (not inside any package), it is
`None`. For `mypackage.submodule`, `__package__` is `'mypackage'`. For `mypackage.subpkg.module`,
`__package__` is `'mypackage.subpkg'`. This attribute is critical for relative import resolution:
when a module uses `from . import sibling`, the import system resolves the dot by looking at
`__package__`.

**`__doc__`** is the module's docstring -- the first string literal in the module body, if any. It
is accessible as `module.__doc__` and is what `help()` displays.

**`__spec__`** is a `ModuleSpec` instance that encapsulates all the information the import system
needs to load the module. It includes the name, loader, origin (filesystem path), submodule search
locations, and other metadata. This was introduced in Python 3.4 as part of the importlib overhaul
(PEP 451) and supersedes the older `__loader__` and `__cached__` attributes.

**`__path__`** is only defined for packages (not for regular modules). It is a list of strings that
the import system uses to find submodules. For regular packages, it contains the single directory
where the package's `__init__.py` lives. For namespace packages, it can contain multiple
directories.

```python
import json
print(json.__path__)  # AttributeError -- json is not a package

import xml.etree.ElementTree as ET
print(xml.__path__)   # list of directories where xml submodules live
```

## Packages

### Regular Packages

A package is a module that contains other modules. In the filesystem, it is a directory containing
an `__init__.py` file. The presence of `__init__.py` is what tells the import system that a
directory should be treated as a package rather than an ordinary directory.

```
mypackage/
    __init__.py
    submodule.py
    subpkg/
        __init__.py
        utils.py
```

When you write `import mypackage.submodule`, the import system:

1. Finds `mypackage/` on `sys.path` (because it contains `__init__.py`).
2. Imports `mypackage` (executes `mypackage/__init__.py`).
3. Looks inside `mypackage/` for `submodule.py`.
4. Imports `mypackage.submodule` (executes `mypackage/submodule.py`).
5. Sets the attribute `submodule` on the `mypackage` module object.

Step 5 is crucial: after `import mypackage.submodule`, you can access the submodule as
`mypackage.submodule`. The `mypackage.__init__.py` does not need to explicitly import the submodule
for this to work -- the import machinery does it automatically.

### The Role of `__init__.py`

The `__init__.py` file serves several purposes:

1. **Marks the directory as a package.** Without it (prior to PEP 420), the directory is not
   recognized as a package.

2. **Executes package-level initialization code.** Any top-level code in `__init__.py` runs when the
   package is imported. This includes setting up package-level state, configuring logging, or
   importing submodules.

3. **Defines the package's public API.** By importing specific names in `__init__.py`, you control
   what users see when they `from mypackage import something`.

4. **Sets `__all__`** to control `from mypackage import *` behavior.

```python
# mypackage/__init__.py
from .submodule import public_func, AnotherClass
from .subpkg.utils import helper

__all__ = ["public_func", "helper"]
```

With this `__init__.py`, users can write `from mypackage import public_func` without knowing the
internal module structure. This is the re-export pattern and is how most well-designed packages
expose their API.

### Namespace Packages (PEP 420 / PEP 3.3)

Since Python 3.3, directories without `__init__.py` can also function as packages. These are called
**namespace packages**. They allow a single package name to be split across multiple directories on
`sys.path`.

Consider this scenario:

```
/opt/app/namespace_pkg/
    module_a.py
/usr/local/lib/namespace_pkg/
    module_b.py
```

If both `/opt/app` and `/usr/local/lib` are on `sys.path`, then `import namespace_pkg.module_a`
loads from the first directory, and `import namespace_pkg.module_b` loads from the second. Both are
recognized as part of the same package `namespace_pkg`.

The difference from regular packages:

| Property      | Regular Package         | Namespace Package             |
| ------------- | ----------------------- | ----------------------------- |
| `__init__.py` | Required                | Absent                        |
| `__path__`    | Single directory        | Multiple directories          |
| `__file__`    | Points to `__init__.py` | `None`                        |
| When created  | First import            | First import of any submodule |
| Use case      | Most applications       | Plugin systems, vendor splits |

Namespace packages are the mechanism behind the `vendor` directory pattern used by pip and
setuptools to bundle dependencies without conflict. They are also used by large projects that split
a single logical package across multiple repositories or deployment locations.

### `__all__`

`__all__` is a list of strings that defines the public API of a module or package. It controls what
`from module import *` imports:

```python
# mymodule.py
__all__ = ["public_func", "PublicClass"]

def public_func():
    pass

def _internal_helper():
    pass

class PublicClass:
    pass
```

When another module does `from mymodule import *`, only `public_func` and `PublicClass` are bound.
The `_internal_helper` function is excluded despite being a module-level name.

`__all__` also serves as documentation: it tells readers (and tools like linters and IDEs) which
names are part of the stable public API. Names not in `__all__` are considered internal.

For packages, `__all__` in `__init__.py` controls `from package import *`:

```python
# mypackage/__init__.py
__all__ = ["func_a", "func_b"]
from .module_a import func_a
from .module_b import func_b
```

If `__all__` is not defined, `from package import *` does not import any submodule names (it only
imports names defined directly in `__init__.py`). This is different from regular modules, where the
absence of `__all__` causes all names not starting with `_` to be imported.

## Absolute vs Relative Imports

### Absolute Imports

An absolute import specifies the full dotted path from the top-level package:

```python
from mypackage.subpkg.utils import helper
import mypackage.submodule
```

Absolute imports are unambiguous: the name resolution does not depend on where the importing file is
located. PEP 8 recommends absolute imports as the default style.

### Relative Imports

A relative import uses leading dots to specify the import relative to the current package:

```python
from . import sibling         # sibling module in the same package
from .sibling import func     # func from sibling module
from .. import parent_pkg     # parent package
from ..other_pkg import mod   # other_pkg is a sibling of the parent
```

The number of dots indicates how many levels up to go:

- `.` means the current package (same directory).
- `..` means the parent package (one directory up).
- `...` means the grandparent package (two directories up).

Relative imports are resolved using the `__package__` attribute of the importing module. When Python
encounters `from . import sibling` in `mypackage/subpkg/module.py`, it looks at `__package__`, which
is `'mypackage.subpkg'`, and resolves the import as `mypackage.subpkg.sibling`.

### Implicit Relative Imports (Removed in Python 3)

In Python 2, if you wrote `import sibling` inside `mypackage/subpkg/module.py`, Python would first
look for `mypackage.subpkg.sibling` (implicit relative import) before looking at the top-level
`sys.path` for a module named `sibling`. This led to shadowing bugs where a local module name would
silently override a standard library module.

Python 3 removed implicit relative imports entirely. `import sibling` always means a top-level
module. To import a sibling within the same package, you must use an explicit relative import:
`from . import sibling`.

### Why Absolute Imports Are Preferred

1. **Readability.** `from mypackage.auth.oauth2 import TokenValidator` tells you exactly where the
   symbol comes from. `from .oauth2 import TokenValidator` requires you to know which file you are
   reading and what the package structure looks like.

2. **Refactoring safety.** Moving a file from one subpackage to another does not break absolute
   imports (as long as the module's full path is updated). Relative imports break when files move
   because the dot-count changes.

3. **Tool support.** IDEs, linters, and static analysis tools can resolve absolute imports
   unambiguously. Relative imports require the tool to know the file's location in the package.

4. **No `__main__` breakage.** Relative imports fail when a module is run directly as a script
   (`python mypackage/subpkg/module.py`) because `__package__` is not set. Absolute imports do not
   have this limitation.

### Relative Imports in `__main__`

When you run a file directly with `python path/to/file.py`, the `__package__` attribute is set to
`None`, and `__name__` is set to `'__main__'`. This means any relative import in that file will
raise `ImportError: attempted relative import with no known parent package`. This is by design --
the file is being run as a standalone script, not as part of a package.

The workaround is to use the `-m` flag:

```bash
python -m mypackage.subpkg.module
```

This tells Python to run `module.py` as a module within the `mypackage.subpkg` package, which sets
`__package__` correctly and enables relative imports.

## Circular Imports

### Why They Happen

Circular imports occur when two or more modules depend on each other, either directly or through a
chain of dependencies:

```
module_a.py imports module_b.py
module_b.py imports module_a.py
```

This creates a chicken-and-egg problem. When Python starts importing `module_a`, it begins executing
`module_a`'s code. When it hits `import module_b`, it starts executing `module_b`. When `module_b`
hits `import module_a`, it looks in `sys.modules` and finds `module_a` -- but `module_a` is only
partially initialized. Its top-level code has not finished executing, so the names that `module_b`
expects to find in `module_a` may not exist yet. This typically manifests as
`AttributeError: partially initialized module 'module_a' has no attribute 'SomeClass'`.

The error message includes the phrase "partially initialized module," which is Python's way of
telling you that the module object exists in `sys.modules` but its namespace is incomplete.

### Common Patterns That Cause Circular Imports

1. **Mutual type dependencies.** Module A defines a function that takes an argument of type B, and
   module B defines a function that takes an argument of type A.

2. **Model-repo coupling.** A model module imports a repository module for database access, and the
   repository module imports the model module to use the ORM classes.

3. **Configuration coupling.** A config module imports a constants module, which imports the config
   module for defaults.

4. **Base class coupling.** A base class module imports a mixin module, which imports the base class
   module to inherit from it.

### Strategy 1: Restructure Code

The most robust solution is to eliminate the circular dependency by extracting the shared code into
a third module that both can import:

```
Before:
  auth.py       -> user.py
  user.py       -> auth.py

After:
  auth.py       -> models.py
  user.py       -> models.py
  models.py     -> (no imports from auth or user)
```

This is not always practical, but when it is, it produces the cleanest architecture. The shared
module becomes a dependency of both, breaking the cycle.

### Strategy 2: Import Inside Functions

Move the import from module level to inside the function that needs it. This defers the import until
the function is actually called, by which time both modules are fully initialized:

```python
# module_a.py
def process(data):
    from module_b import transform
    return transform(data)
```

This works because the import statement is not executed until `process()` is called. By that time,
`module_b` has already been fully imported (or will be imported on demand, and since `module_a` is
already in `sys.modules`, the cycle does not cause a partial initialization problem).

The trade-off is that every call to `process()` executes the import statement. In CPython, the
import machinery checks `sys.modules` first and returns the cached module object in O(1), so the
runtime cost is negligible. However, it does make the dependency less visible to readers and static
analysis tools.

### Strategy 3: `TYPE_CHECKING` Guard

When the circular import exists only for type annotations (not for runtime behavior), you can guard
the import with `typing.TYPE_CHECKING`:

```python
# module_a.py
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from module_b import SomeClass

def process(obj: SomeClass) -> None:
    ...
```

`typing.TYPE_CHECKING` is `False` at runtime but `True` when type checkers (mypy, pyright, pyright)
analyze the code. Combined with `from __future__ import annotations` (PEP 563, which makes all
annotations lazy strings), the import never executes at runtime, breaking the cycle while preserving
type information.

This pattern is the standard solution for circular type dependencies and should be your first choice
when the import is only needed for annotations.

### Strategy 4: Lazy Imports

Python 3.7+ provides `importlib.util.LazyLoader` (though it is technically available since 3.5). For
Python 3.12+, `importlib` gained improvements, and the `lazy_loader` third-party package provides a
clean API:

```python
import importlib
import sys
from importlib.util import find_spec, LazyLoader, module_from_spec

def lazy_import(name):
    spec = find_spec(name)
    if spec is None:
        raise ImportError(f"No module named {name}")
    loader = LazyLoader(spec.loader)
    spec.loader = loader
    module = module_from_spec(spec)
    sys.modules[name] = module
    return module
```

A lazy module is a proxy that delays actual loading until the first attribute access. This can break
circular imports because the actual loading happens after all module-level imports have completed.

### Choosing a Strategy

| Strategy              | When to Use                    | Trade-off                                     |
| --------------------- | ------------------------------ | --------------------------------------------- |
| Restructure           | Clean separation is possible   | Requires architectural changes                |
| Function-level import | Runtime dependency, simple fix | Hidden dependency, less discoverable          |
| `TYPE_CHECKING` guard | Only needed for annotations    | Requires `from __future__ import annotations` |
| Lazy imports          | Large codebase, many cycles    | Added complexity, debugging difficulty        |

## Re-exports and Aliases

### Re-exports in `__init__.py`

A common pattern is to use `__init__.py` to re-export symbols from submodules, creating a flat
public API that hides the internal package structure:

```python
# mypackage/__init__.py
from .core import Engine, Pipeline
from .utils import validate, sanitize
from .config import DEFAULT_TIMEOUT, MAX_RETRIES

__all__ = ["Engine", "Pipeline", "validate", "sanitize",
           "DEFAULT_TIMEOUT", "MAX_RETRIES"]
```

Users can then write `from mypackage import Engine` instead of `from mypackage.core import Engine`.
The internal structure (`core`, `utils`, `config`) becomes an implementation detail.

When using `from .module import func as func`, the `as func` is not redundant -- it ensures that the
name bound in `__init__.py` is exactly `func` regardless of what it was called in the source module.
This is defensive programming that protects against future renames in submodules.

### `__all__` for Public API

`__all__` serves a dual purpose in `__init__.py`:

1. It controls `from package import *` (though wildcard imports are generally discouraged).
2. It documents the public API. Tools like `pylint`, `pyright`, and IDEs use `__all__` to determine
   which names are public vs. internal.

Without `__all__`, the public API is implicitly "everything that does not start with `_`." With
`__all__`, it is explicitly "only these names." The explicit version is strictly better because it
prevents accidental public exposure of helper names.

### Hiding Imports with `del`

When you import a symbol in `__init__.py` only to re-export it from a submodule, the intermediate
module name may also end up in the package namespace:

```python
# mypackage/__init__.py
from .core import Engine   # also binds 'core' in mypackage's namespace
```

After this import, both `mypackage.Engine` and `mypackage.core` are accessible. To prevent the
intermediate name from leaking, use `del`:

```python
from .core import Engine
del core  # 'core' is not actually bound, but if it were:
from . import core
from .core import Engine
del core  # now only 'Engine' is accessible as mypackage.Engine
```

Wait -- `from .core import Engine` does not bind the name `core` in the namespace. Only `Engine` is
bound. But if you also need `import .core` for side effects (e.g., registering plugins), then `del`
removes the unwanted binding:

```python
from . import core  # execute core's side effects
from .core import Engine
del core  # remove 'core' from the public namespace
```

### Backward Compatibility Shims

When refactoring a package (renaming modules, moving functions between modules), you can maintain
backward compatibility by keeping the old import paths working:

```python
# mypackage/old_module.py (deprecated, kept for backward compatibility)
import warnings
from mypackage.new_module import new_function as old_function

warnings.warn(
    "old_module is deprecated, use mypackage.new_module instead",
    DeprecationWarning,
    stacklevel=2,
)

__all__ = ["old_function"]
```

This pattern lets existing code continue to work while emitting a warning that guides users to the
new location. The `stacklevel=2` ensures the warning points to the caller's code, not to the shim
itself.

## Package Layout

### Flat Layout

In the flat layout, the package directory sits at the repository root:

```
myproject/
    mypackage/
        __init__.py
        module.py
    tests/
        test_module.py
    pyproject.toml
    README.md
```

### Src Layout

In the src layout, the package is nested under a `src/` directory:

```
myproject/
    src/
        mypackage/
            __init__.py
            module.py
    tests/
        test_module.py
    pyproject.toml
    README.md
```

### Why Src Layout Matters

The src layout exists to solve a real problem: **implicit namespace packages caused by accidentally
importing the local copy instead of the installed copy.**

Consider the flat layout. When you run `python -m pytest` from the project root, the project root
directory is added to `sys.path`. This means `import mypackage` resolves to the local directory
`./mypackage/`, not to the installed copy in site-packages. This has two consequences:

1. **Missing installed dependencies.** If `mypackage` depends on other packages that are installed
   in site-packages, those are still on `sys.path` and will be found. But if `mypackage` has C
   extensions or entry points that need to be installed, those will not be available from the local
   copy.

2. **Shadowing installed packages.** If you have a package installed system-wide named `mypackage`
   and a local directory also named `mypackage`, the local one wins because the project root is
   earlier in `sys.path`. This means you are testing the local (uninstalled) code, which may not
   match what users actually get when they install your package.

The src layout prevents this by moving the package out of the project root. When `python -m pytest`
runs from the project root, `./src/` is on `sys.path`, but `import mypackage` will fail unless you
have done `pip install -e .` (which installs a `.egg-link` pointing to `src/mypackage/`). This
forces you to install the package properly, which catches configuration errors in `pyproject.toml`
and `setup.cfg`.

### `pyproject.toml` Package Discovery

Modern Python packaging uses `pyproject.toml` to declare package metadata. Package discovery is
configured to match the chosen layout:

For flat layout:

```toml
[build-system]
requires = ["setuptools>=68.0"]
build-backend = "setuptools.build_meta"

[project]
name = "mypackage"
version = "1.0.0"

[tool.setuptools.packages.find]
where = ["."]
```

For src layout:

```toml
[build-system]
requires = ["setuptools>=68.0"]
build-backend = "setuptools.build_meta"

[project]
name = "mypackage"
version = "1.0.0"

[tool.setuptools.packages.find]
where = ["src"]
```

Alternatively, explicit package listing (works for both layouts):

```toml
[tool.setuptools.packages.find]
include = ["mypackage*"]
```

PEP 621 (standardized in Python 3.10+ and supported by setuptools, hatch, flit, poetry) defines the
`[project]` table as the standard way to declare metadata. The build-backend-specific configuration
(`[tool.setuptools.packages.find]`, `[tool.hatch.build.targets.wheel]`, etc.) is still needed to
control which files are included in the distribution.

## Dynamic Imports

### `importlib.import_module()`

The standard way to import a module by name at runtime:

```python
import importlib

module = importlib.import_module("os.path")
print(module.join("a", "b"))  # a/b (or a\b on Windows)

relative_module = importlib.import_module(".submodule", package="mypackage")
# equivalent to: from mypackage import submodule
```

The first argument is the fully qualified module name (absolute) or a relative name starting with
dots. If relative, the `package` argument must specify the parent package name.

This is useful when the module name is determined at runtime (from configuration, command-line
arguments, or plugin discovery):

```python
def load_backend(backend_name):
    module = importlib.import_module(f"myapp.backends.{backend_name}")
    return module.Backend
```

### `importlib.reload()`

Reloads a previously imported module, re-executing its top-level code:

```python
import mymodule
import importlib

mymodule = importlib.reload(mymodule)
```

Key behaviors:

1. The module's `__dict__` is updated in place. Existing references to the module (including those
   held by other modules that imported it) will see the updated attributes because they all point to
   the same module object.

2. However, `from module import name` bindings are **not** updated. If module A did
   `from mymodule import func`, reloading `mymodule` does not update A's `func` binding. A still
   holds a reference to the original function object. This is a common source of confusion.

3. New top-level names added during reload appear in the module's namespace. Deleted top-level names
   are removed. Modified names reflect the new values.

4. `reload()` is not recursive. It does not reload submodules.

`reload()` is primarily useful during interactive development (in the REPL or Jupyter notebooks)
where you want to pick up code changes without restarting the interpreter. It is not suitable for
production use because it is inherently racy (what if another thread is calling a function that gets
replaced mid-execution?) and because it cannot safely reload C extension modules.

### Plugin Systems

Dynamic imports are the foundation of plugin architectures:

```python
import importlib
from pathlib import Path

def load_plugins(plugin_dir: str):
    plugins = {}
    plugin_path = Path(plugin_dir)
    for py_file in plugin_path.glob("*.py"):
        if py_file.name.startswith("_"):
            continue
        module_name = py_file.stem
        spec = importlib.util.spec_from_file_location(module_name, py_file)
        if spec and spec.loader:
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            if hasattr(module, "register"):
                module.register(plugins)
    return plugins
```

This pattern loads Python files from a directory at runtime, executes each one, and calls a
convention-named function (`register`) to let the plugin register itself. The plugin author has full
freedom to define any functions and classes, as long as they implement the `register` protocol.

### When to Use Dynamic Imports

Use dynamic imports when:

- The module name is not known at authoring time (plugins, backends, drivers).
- You want to reduce startup time by deferring heavy imports until they are actually needed.
- You are implementing a lazy-loading strategy for optional dependencies.

Do not use dynamic imports as a substitute for proper dependency management. If you need a module,
import it at the top of the file. Dynamic imports that reference constant module names are a code
smell -- they make the dependency invisible to static analysis tools and increase cognitive load for
readers.

## Entry Points

### What Entry Points Are

Entry points are a packaging standard (defined in setuptools and later standardized in
`importlib.metadata` per PEP 621) that allows a package to register named objects (functions,
classes) that other packages or the system can discover at runtime. They are the mechanism behind
`pip install` creating command-line scripts, pytest discovering plugins, and many other
framework-specific plugin systems.

### `console_scripts`

The most common entry point type. It creates executable command-line scripts when a package is
installed:

```toml
[project.scripts]
myapp = "mypackage.cli:main"
myapp-admin = "mypackage.admin:main"
```

When a user runs `pip install mypackage`, pip creates a script named `myapp` (on Unix: a Python
script with a shebang line; on Windows: a `.exe` wrapper) that effectively does:

```python
from mypackage.cli import main
main()
```

The entry point name (`myapp`) becomes the command name. The value is `module:function`, where
`module` is the fully qualified module name and `function` is the callable to invoke.

### `gui_scripts`

Identical to `console_scripts` but without a console window on Windows. Useful for GUI applications:

```toml
[project.gui-scripts]
myapp-gui = "mypackage.gui:main"
```

### Discovering Entry Points at Runtime

Other packages can discover and load entry points using `importlib.metadata`:

```python
from importlib.metadata import entry_points, version

eps = entry_points()

# Get all console_scripts
for ep in eps.select(group="console_scripts"):
    print(f"{ep.name} -> {ep.value}")

# Discover plugins registered by other packages
for ep in eps.select(group="myapp.plugins"):
    plugin_class = ep.load()
    print(f"Loaded plugin: {ep.name} from {ep.dist.name} v{version(ep.dist.name)}")
```

The `entry_points()` function returns all registered entry points. The `select(group=...)` method
filters by group name. The `load()` method dynamically imports the module and returns the callable.

### `pkg_resources` vs `importlib.metadata`

`pkg_resources` is part of `setuptools` and has been the traditional way to access entry points:

```python
from pkg_resources import iter_entry_points

for ep in iter_entry_points("myapp.plugins"):
    plugin = ep.load()
```

`importlib.metadata` (stdlib since Python 3.8, backported as `importlib_metadata` for 3.7) is the
modern replacement. It is faster because it does not scan the entire `sys.path` at import time (the
way `pkg_resources` does). Prefer `importlib.metadata` in all new code.

Key differences:

| Feature      | `pkg_resources`       | `importlib.metadata` |
| ------------ | --------------------- | -------------------- |
| Stdlib       | No (setuptools)       | Yes (3.8+)           |
| Startup cost | High (scans sys.path) | Low (lazy)           |
| Maintenance  | Legacy                | Active               |
| API style    | OOP-heavy             | Functional           |

### How Entry Points Work Under the Hood

When pip installs a package, it writes metadata to the `.dist-info` directory in site-packages. The
`entry_points.txt` file lists all entry points:

```
[console_scripts]
myapp = mypackage.cli:main

[myapp.plugins]
csv_export = myapp.plugins.csv:register
```

When `importlib.metadata.entry_points()` is called, it reads these files from all `.dist-info`
directories on `sys.path` and builds the registry. This is why entry points are discovered
automatically without any registration code in the application -- the metadata is already on disk.

## Common Pitfalls

### Shadowing Standard Library Modules

If you name a local file `random.py`, `logging.py`, or any other stdlib module name, your file will
shadow the standard library module in `sys.path`. This causes bizarre errors where importing the
stdlib module loads your file instead:

```python
# random.py (your file, not the stdlib)
print("hello")

# some_other_file.py
import random
random.randint(1, 10)  # AttributeError: module 'random' has no attribute 'randint'
```

Never name files after stdlib modules. This includes common names like `collections.py`, `json.py`,
`email.py`, `types.py`, `builtins.py`, and `test.py`.

### `__name__` vs `__package__` Confusion

`__name__` is the module's full dotted name. `__package__` is the parent package. They are often
confused but serve different purposes:

```python
# In mypackage/subpkg/module.py:
print(__name__)    # 'mypackage.subpkg.module'
print(__package__) # 'mypackage.subpkg'
```

Relative imports use `__package__`, not `__name__`. If `__package__` is `None` (which happens when a
file is run directly), relative imports fail.

### Mutable Module-Level State

Module-level mutable objects (lists, dicts, sets) are shared across all importers. If one module
appends to a list defined at module level in another module, all other modules see the change:

```python
# config.py
CACHE = []

# module_a.py
from config import CACHE
CACHE.append("a")

# module_b.py
from config import CACHE
print(CACHE)  # ['a'] -- sees module_a's modification
```

This is not a bug -- it is a consequence of the fact that `import` returns a reference to the same
module object every time. But it is a common source of surprise. If you need independent copies,
import the module name and copy: `list(config.CACHE)`.

### `from x import *` Contamination

Wildcard imports dump all non-private names from the source module into the importing namespace.
This pollutes the namespace, makes it impossible to determine where a name came from (use
`Ctrl+Shift+F` in your editor), and can silently override existing names. PEP 8 explicitly
discourages it:

> Wildcard imports (from `<module>` import `*`) should be avoided, as they make it unclear which
> names are present in the namespace, confusing both readers and many automated tools.

The only acceptable use case is in `__init__.py` for explicitly controlled re-exports (combined with
`__all__`).

### Running a Package with `-m`

If you try to run a file inside a package directly (`python mypackage/submodule.py`), it runs with
`__name__ == '__main__'` and `__package__ == None`. Any relative imports in that file (or in files
it imports) will fail. Always use `python -m mypackage.submodule` to run modules within a package.

### Editing `sys.path` Correctly

If you must modify `sys.path`, insert at the beginning (index 0) and be specific:

```python
import sys
from pathlib import Path

project_root = str(Path(__file__).resolve().parent.parent)
if project_root not in sys.path:
    sys.path.insert(0, project_root)
```

Appending to `sys.path` with `sys.path.append(...)` may not work if an earlier entry already
contains a module with the same name (the first match wins). Inserting at position 0 ensures your
path is searched first, but be aware that this can shadow installed packages.

### Namespace Package `__init__.py` Conflicts

If a directory contains `__init__.py`, it is a regular package, not a namespace package. If you
later add another directory with the same package name to `sys.path` expecting namespace package
semantics, it will not work -- the first directory's `__init__.py` takes precedence. To convert a
regular package to a namespace package, you must remove the `__init__.py` from all directories that
should participate in the namespace.

### `__pycache__` and Bytecode Staleness

Python caches compiled bytecode in `__pycache__/*.pyc` files. The filename includes the Python
version (e.g., `module.cpython-312.pyc`) to avoid conflicts between versions. If you edit a `.py`
file but the `.pyc` timestamp check fails (due to filesystem issues, clock skew, or manual editing),
Python may load stale bytecode. Symptoms include code changes not taking effect despite saving the
file. The fix is to delete the `__pycache__` directory and re-import.

### Installing Packages in Editable Mode

During development, use `pip install -e .` (or `pip install -e ".[dev]"` for extras) to install the
package in editable mode. This creates a link to the source directory so that changes are
immediately reflected without reinstallation. Without editable mode, you must run `pip install .`
every time you change the package structure (adding or removing modules, changing `__init__.py`,
etc.).

### `__spec__` and Missing Module Attributes

If a module is loaded by a custom loader (e.g., from a zip file, from a network, or from a frozen
executable), some standard attributes like `__file__` and `__cached__` may be `None` or missing
entirely. Code that assumes `module.__file__` is always a valid path will break. Check for `None`
before using `__file__`, or use `getattr(module, '__file__', None)` for defensive access.
