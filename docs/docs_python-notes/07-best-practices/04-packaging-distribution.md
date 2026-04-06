---
id: packaging-distribution
title: Packaging and Distribution
description:
  Python packaging — pyproject.toml, setuptools, pip, virtual environments, and publishing.
slug: packaging-distribution
---

## pyproject.toml

`pyproject.toml` is the modern standard for Python project configuration, defined by PEP 518 (build
system) and PEP 621 (project metadata).

### Minimal pyproject.toml

```toml
[build-system]
requires = ["setuptools>=68.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "myapp"
version = "1.0.0"
description = "A sample application"
readme = "README.md"
requires-python = ">=3.10"
license = {text = "MIT"}

authors = [
    {name = "Jane Doe", email = "jane@example.com"},
]

dependencies = [
    "requests>=2.28.0",
    "pydantic>=2.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0",
    "ruff>=0.1.0",
    "mypy>=1.0",
]
server = [
    "fastapi>=0.100",
    "uvicorn>=0.23",
]

[project.scripts]
myapp = "myapp.cli:main"
```

### PEP 621 Metadata Fields

```toml
[project]
name = "mylib"
version = "2.1.0"
description = "Short description"
readme = "README.md"
requires-python = ">=3.10"
license = {text = "MIT"}
license-files = ["LICENSE"]
keywords = ["http", "api", "client"]
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
    "Programming Language :: Python :: 3.12",
]

authors = [
    {name = "Jane Doe", email = "jane@example.com"},
]
maintainers = [
    {name = "John Smith", email = "john@example.com"},
]

dynamic = ["version"]  # Version computed dynamically

[project.urls]
Homepage = "https://github.com/org/mylib"
Documentation = "https://mylib.readthedocs.io"
Repository = "https://github.com/org/mylib"
Changelog = "https://github.com/org/mylib/blob/main/CHANGELOG.md"
```

### Tool Sections

```toml
[tool.setuptools]
package-dir = {"" = "src"}
packages = ["mylib", "mylib.submodule"]

[tool.setuptools.package-data]
mylib = ["py.typed", "data/*.json"]

[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v --tb=short"

[tool.ruff]
line-length = 100
target-version = "py310"

[tool.mypy]
python_version = "3.10"
strict = true

[tool.coverage.run]
source = ["src/mylib"]
branch = true
```

:::info PEP 621 standardizes project metadata in `pyproject.toml`. Before this, metadata was
scattered across `setup.py`, `setup.cfg`, and `setup.cfg`/`pyproject.toml`. The new standard
consolidates everything into one file.
:::

## setup.py Legacy vs pyproject.toml

### Legacy setup.py

```python
# setup.py — legacy approach, still supported but discouraged
from setuptools import setup, find_packages

setup(
    name="mylib",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "requests>=2.28.0",
    ],
    entry_points={
        "console_scripts": [
            "myapp=myapp.cli:main",
        ],
    },
)
```

### Migration Path

```toml
# pyproject.toml — modern replacement
[build-system]
requires = ["setuptools>=68.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "mylib"
version = "1.0.0"
dependencies = [
    "requests>=2.28.0",
]

[project.scripts]
myapp = "myapp.cli:main"

[tool.setuptools.packages.find]
where = ["src"]
```

:::warning `setup.py` is not deprecated, but `pyproject.toml` is preferred for new projects. The
`setup.py` file can still exist for complex build logic that cannot be expressed declaratively, but
most projects do not need it.
:::

## setuptools

### setup.cfg (Complementary)

```ini
# setup.cfg — used alongside pyproject.toml for setuptools-specific config
[metadata]
name = mylib
version = attr: mylib.__version__

[options]
packages = find:
python_requires = >=3.10
install_requires =
    requests>=2.28.0

[options.packages.find]
where = src

[options.entry_points]
console_scripts =
    myapp = mylib.cli:main

[options.extras_require]
dev =
    pytest>=7.0
    ruff>=0.1.0
```

### find_packages

```python
from setuptools import find_packages

# Find all packages in src/
find_packages(where="src")

# Exclude test packages
find_packages(where="src", exclude=["tests*", "tests.*", "docs*"])

# Include specific packages
find_packages(where="src", include=["mylib*"])
```

### Entry Points

```toml
[project.entry-points."console_scripts"]
myapp = "myapp.cli:main"
myapp-admin = "myapp.admin:main"

[project.entry-points."gui_scripts"]
myapp-gui = "myapp.gui:main"

[project.entry-points."mylib.plugins"]
json_serializer = "mylib.serializers.json:Serializer"
yaml_serializer = "mylib.serializers.yaml:Serializer"
```

Entry points are discoverable at runtime via `importlib.metadata`:

```python
from importlib.metadata import entry_points

eps = entry_points(group="mylib.plugins")
for ep in eps:
    serializer_class = ep.load()
    print(f"Found plugin: {ep.name} -> {serializer_class}")
```

## pip

### requirements.txt

```
# requirements.txt
requests>=2.28.0,<3.0.0
pydantic>=2.0
click>=8.0
```

### pip-tools

`pip-tools` provides deterministic dependency management by separating requirements into source
(`requirements.in`) and locked (`requirements.txt`) files:

```bash
# Install
pip install pip-tools

# Create requirements.in (human-written)
# requirements.in
requests>=2.28.0
pydantic>=2.0

# Compile to requirements.txt (locked, with hashes)
pip-compile --generate-hashes requirements.in

# Upgrade specific packages
pip-compile --generate-hashes --upgrade-package pydantic requirements.in
```

### Dependency Specification

```text
# Exact version
package==1.2.3

# Compatible release (>=1.2.3, <2.0.0)
package>=1.2.3,<2.0.0

# Minimum version
package>=1.2.3

# Any version
package

# Git dependency
package @ git+https://github.com/org/package.git@v1.2.3

# Local path
package @ file:///path/to/package

# Extras
package[extra1,extra2]>=1.0
```

### Hashes for Security

```
# requirements.txt with hashes (generated by pip-compile --generate-hashes)
requests==2.31.0 \
    --hash=sha256:58cd2187c01e70e6e26505bca751777aa9f2ee0b7f4300988b709f44e013003f \
    --hash=sha256:942c5a758f98d790eaed1a29cb6eefc7cb0f27a2e5e71b6ed7d0e640c265d3a5
```

:::warning Always use `--generate-hashes` in production deployments. Hashes verify that the
installed package matches exactly what you tested. Without hashes, a compromised PyPI mirror could
serve malicious packages.
:::

## Virtual Environments

### venv

```bash
# Create
python -m venv .venv

# Activate (bash/zsh)
source .venv/bin/activate

# Activate (fish)
source .venv/bin/activate.fish

# Activate (PowerShell)
.venv\Scripts\Activate.ps1

# Deactivate
deactivate
```

### virtualenv

```bash
pip install virtualenv

# Faster than venv, supports more options
virtualenv .venv --python=3.12 --system-site-packages --clear
```

### conda

```bash
# Create with specific Python version
conda create -n myenv python=3.12

# Activate
conda activate myenv

# Export environment
conda env export > environment.yml

# Create from file
conda env create -f environment.yml
```

:::info `venv` is the standard and ships with Python. Use `virtualenv` when you need features like
`--system-site-packages` or faster creation. Use `conda` when you need non-Python dependencies
(e.g., CUDA, MKL).
:::

## Dependency Management

### pip

```bash
# Install
pip install package

# Install from requirements.txt
pip install -r requirements.txt

# Install in editable mode (development)
pip install -e .

# Install with extras
pip install ".[dev,server]"

# Freeze current environment
pip freeze > requirements.txt
```

### poetry

```toml
# pyproject.toml (poetry)
[tool.poetry]
name = "mylib"
version = "1.0.0"
description = "A sample library"

[tool.poetry.dependencies]
python = "^3.10"
requests = "^2.28.0"
pydantic = "^2.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.0"
ruff = "^0.1.0"

[tool.poetry.scripts]
myapp = "mylib.cli:main"
```

```bash
# Install
poetry install

# Install with dev dependencies
poetry install --with dev

# Add dependency
poetry add requests
poetry add pytest --group dev

# Lock
poetry lock

# Build
poetry build
```

### Comparison

| Feature         | pip                   | poetry            | pipenv         | conda             |
| --------------- | --------------------- | ----------------- | -------------- | ----------------- |
| Lock file       | Manual (pip-tools)    | `poetry.lock`     | `Pipfile.lock` | `environment.yml` |
| Resolution      | Basic                 | Full (resolvelib) | Full (pip)     | Full              |
| Non-Python deps | No                    | No                | No             | Yes               |
| Build system    | setuptools/hatch/flit | Built-in          | pip            | Built-in          |
| Speed           | Fast                  | Medium            | Slow           | Slow              |
| Ecosystem       | Largest               | Growing           | Declining      | Scientific        |

## Package Structure

### src Layout (Recommended)

```
mylib/
├── pyproject.toml
├── README.md
├── LICENSE
├── src/
│   └── mylib/
│       ├── __init__.py
│       ├── core.py
│       ├── cli.py
│       └── submodule/
│           ├── __init__.py
│           └── utils.py
└── tests/
    ├── __init__.py
    ├── test_core.py
    └── conftest.py
```

```toml
# pyproject.toml
[tool.setuptools.packages.find]
where = ["src"]
```

### Flat Layout

```
mylib/
├── pyproject.toml
├── README.md
├── LICENSE
├── mylib/
│   ├── __init__.py
│   ├── core.py
│   └── cli.py
└── tests/
    ├── __init__.py
    └── test_core.py
```

:::warning The `src` layout is preferred because it prevents a subtle bug: when you run tests from
the project root, Python may import the local package instead of the installed one. The `src` layout
forces you to install the package before testing, catching missing dependencies and incorrect
packaging.
:::

## Entry Points

### console_scripts

```toml
[project.scripts]
myapp = "mylib.cli:main"
myapp-admin = "mylib.admin:main"
```

This generates a wrapper script that calls the specified function:

```python
# mylib/cli.py
import click

@click.command()
@click.option("--config", default="config.yaml", help="Config file path")
def main(config):
    """My application CLI."""
    from mylib.core import load_config, run
    cfg = load_config(config)
    run(cfg)

if __name__ == "__main__":
    main()
```

### Plugin Entry Points

```toml
[project.entry-points."mylib.plugins"]
json = "mylib.plugins.json:register"
yaml = "mylib.plugins.yaml:register"
```

```python
# Discovering plugins at runtime
from importlib.metadata import entry_points

def load_plugins():
    plugins = {}
    for ep in entry_points(group="mylib.plugins"):
        plugin_func = ep.load()
        plugins[ep.name] = plugin_func()
    return plugins
```

## Publishing to PyPI

### Setup

```bash
pip install twine build
```

### Build

```bash
python -m build
# Creates dist/mylib-1.0.0.tar.gz and dist/mylib-1.0.0-py3-none-any.whl
```

### Test with TestPyPI

```bash
twine upload --repository testpypi dist/*
```

### Publish to PyPI

```bash
twine upload dist/*
```

### MANIFEST.in

When using setuptools, files not tracked by VCS or included in `package_data` need `MANIFEST.in`:

```
# MANIFEST.in
include README.md
include LICENSE
include pyproject.toml
recursive-include src/mylib/data *.json
global-exclude *.pyc
global-exclude *.pyo
prune tests
```

:::tip With the `src` layout and `[tool.setuptools.package-data]`, most projects do not need
`MANIFEST.in`. Only use it when you need to include files that setuptools cannot auto-discover.
:::

## Versioning

### Semantic Versioning

- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

### \_\_version\_\_ Pattern

```python
# src/mylib/__init__.py
__version__ = "1.2.3"
```

```toml
[project]
dynamic = ["version"]

[tool.setuptools.dynamic]
version = {attr = "mylib.__version__"}
```

### importlib.metadata

```python
from importlib.metadata import version, PackageNotFoundError

try:
    v = version("mylib")
    print(f"mylib version: {v}")
except PackageNotFoundError:
    print("mylib is not installed")
```

### Automated Versioning with hatch-vcs

```toml
[build-system]
requires = ["hatchling", "hatch-vcs"]
build-backend = "hatchling.build"

[tool.hatch.version]
source = "vcs"

[tool.hatch.build.hooks.vcs]
version-file = "src/mylib/_version.py"
```

This generates a `_version.py` from git tags, so you never have to update version numbers manually.

## Common Pitfalls

### 1. Forgetting \_\_init\_\_.py

```bash
# Without __init__.py, the directory is not a package
# Python 3.3+ supports implicit namespace packages, but explicit is better
touch src/mylib/__init__.py
touch src/mylib/submodule/__init__.py
```

### 2. editable Install Not Reflecting Changes

```bash
# If changes aren't reflected after pip install -e .:
pip install -e ".[dev]" --force-reinstall --no-deps
```

### 3. Circular Dependencies

```python
# a.py
from b import func_b

# b.py
from a import func_a  # ImportError or AttributeError at runtime

# Fix: restructure to remove circular imports
# a.py
def func_a():
    from b import func_b  # Local import
    return func_b()
```

### 4. Pinning Every Dependency

```
# BAD — over-constraining
requests==2.31.0
urllib3==1.26.18
certifi==2023.7.22
charset-normalizer==3.2.0
idna==3.4

# GOOD — pin direct dependencies, let resolver handle transitive ones
requests>=2.28.0
# Use pip-compile for lock files with transitive pins
```

### 5. Not Using a Lock File in Production

```bash
# BAD — pip install without lock file
pip install -r requirements.in

# GOOD — use locked requirements
pip install -r requirements.txt  # Generated by pip-compile

# Or with poetry:
poetry install  # Uses poetry.lock
```

### 6. Publishing with Credentials in pyproject.toml

```toml
# NEVER put credentials in pyproject.toml
# It is committed to version control

# Use environment variables or .env files (not committed)
# [tool.mytool]
# api_key = "sk-..."  # NEVER DO THIS
```

### 7. Missing py.typed Marker for Type Checking

```bash
# For libraries that ship type hints, include a py.typed marker:
touch src/mylib/py.typed

# In pyproject.toml:
[tool.setuptools.package-data]
mylib = ["py.typed"]
```

Without `py.typed`, downstream users cannot get type hints from your library even if you include
`.pyi` stub files or inline annotations.

### 8. Not Testing the sdist

```bash
# Always test both wheel and sdist
python -m build
pip install dist/mylib-1.0.0.tar.gz
python -c "import mylib; print(mylib.__version__)"

# The sdist must include all necessary files
# Common missing files: package_data, non-Python files, py.typed
```

## Alternative Build Backends

### hatch

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "mylib"
version = "1.0.0"

[tool.hatch.build.targets.wheel]
packages = ["src/mylib"]
```

Hatch is a modern build backend and project manager. It supports environment management, versioning,
and publishing in a single tool.

### flit

```toml
[build-system]
requires = ["flit_core >=3.2,<4"]
build-backend = "flit_core.buildapi"

[project]
name = "mylib"
version = "1.0.0"
dependencies = ["requests>=2.28.0"]

[tool.flit.module]
name = "mylib"
```

Flit is minimal — it does not support `setup.py` or complex build logic. Best for simple pure-Python
packages.

### Comparison

| Feature        | setuptools  | hatch    | flit       |
| -------------- | ----------- | -------- | ---------- |
| Maturity       | Most mature | Modern   | Minimal    |
| Legacy compat  | Full        | Partial  | None       |
| Plugins        | Many        | Growing  | None       |
| Speed          | Medium      | Fast     | Fast       |
| Complexity     | High        | Medium   | Low        |
| VCS versioning | Via plugin  | Built-in | Via plugin |

:::tip For new projects, `hatch` or `flit` are excellent choices. Use `setuptools` only when you
need compatibility with existing tooling or complex build requirements (e.g., C extensions).
:::

## Wheel vs sdist

### Wheel (.whl)

A wheel is a pre-built binary distribution format. It contains the package already compiled and
ready to install:

```
mylib-1.0.0-py3-none-any.whl
#       ^    ^  ^  ^
#       |    |  |  └── platform tag (any = pure Python)
#       |    |  └───── ABI tag (none = pure Python)
#       |    └──────── Python version (py3 = any Python 3)
#       └───────────── version
```

### sdist (.tar.gz)

A source distribution contains the source code and must be built at install time:

```bash
# Install from wheel (fast — no compilation)
pip install mylib-1.0.0-py3-none-any.whl

# Install from sdist (slower — must build first)
pip install mylib-1.0.0.tar.gz
```

### Platform-Specific Wheels

```text
# Pure Python — works anywhere
mylib-1.0.0-py3-none-any.whl

# C extension on Linux x86_64
mylib-1.0.0-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl

# C extension on macOS ARM64 (Apple Silicon)
mylib-1.0.0-cp312-cp312-macosx_11_0_arm64.whl
```

## pip Configuration

### pip.conf

```ini
# ~/.pip/pip.conf (Linux/macOS) or %APPDATA%\pip\pip.ini (Windows)

[global]
# Use mirrors or caches for faster installs
index-url = https://pypi.org/simple
# extra-index-url = https://pypi.company.com/simple

# Cache directory
cache-dir = ~/.cache/pip

# Timeout for downloads (seconds)
timeout = 60

# Retry on failure
retries = 3

# Disable warnings (not recommended)
# disable-pip-version-check = true

[install]
# Do not install dependencies (for containers)
# no-deps = true

# Respect requirements.txt exactly
# ignore-installed = true
```

### Offline Installation

```bash
# Download packages without installing
pip download -r requirements.txt -d ./wheels

# Install from local wheels (air-gapped / offline)
pip install --no-index --find-links=./wheels -r requirements.txt
```

This is essential for air-gapped environments, Docker builds, and CI/CD pipelines with restricted
network access.

## Monorepo and Workspace Patterns

### Monorepo with Multiple Packages

```
monorepo/
├── pyproject.toml          # Workspace root
├── packages/
│   ├── core/
│   │   ├── pyproject.toml
│   │   └── src/core/
│   ├── api/
│   │   ├── pyproject.toml
│   │   └── src/api/
│   └── cli/
│       ├── pyproject.toml
│       └── src/cli/
```

```bash
# Install all packages in editable mode
pip install -e packages/core -e packages/api -e packages/cli

# With pip-tools
pip-compile packages/cli/pyproject.toml --output-file requirements.txt
```

### Using Hatch for Monorepos

```toml
# Root pyproject.toml
[tool.hatch.envs.default]
dependencies = [
    "packages/core",
    "packages/api",
    "packages/cli",
]
```

## Common Pitfalls (Continued)

### 9. Forgetting to Build Before Publishing

```bash
# twine upload does NOT build for you
# Always build first:
python -m build
twine upload dist/*
```

### 10. Version Conflicts in Docker

```dockerfile
# BAD — pip installs latest, may break later
COPY requirements.txt .
RUN pip install -r requirements.txt

# GOOD — pin hashes for reproducibility
COPY requirements.txt .
RUN pip install --require-hashes -r requirements.txt

# BETTER — use a lock file
COPY poetry.lock pyproject.toml ./
RUN pip install --no-dev .
```

### 11. Not Specifying python_requires

```toml
[project]
requires-python = ">=3.10"
```

Without `requires-python`, pip will try to install your package on any Python version, which fails
at runtime with cryptic errors.

### 12.Editable Install Not Working with src Layout

```bash
# Ensure pyproject.toml has the correct configuration:
# [tool.setuptools.packages.find]
# where = ["src"]

pip install -e ".[dev]"
python -c "import mylib; print(mylib.__file__)"
# Should point to src/mylib/__init__.py, not site-packages
```

### 13. Naming Conflicts with PyPI

Before publishing, check if the package name exists:

```bash
pip install twine
twine check dist/*
# Also verify the name is available on https://pypi.org
```
