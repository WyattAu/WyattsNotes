---
title: CLI Tools
date: 2026-04-05T00:00:00.000Z
tags:
  - Python
categories:
  - Python
slug: cli-tools
---

# CLI Tools

Building command-line interfaces in Python is not a "pick one and go" decision. The standard library
gives you `sys.argv` (bare metal) and `argparse` (batteries-included), while third-party libraries
like `click` and `typer` offer increasingly ergonomic abstractions. Each layer trades control for
convenience. Understanding what happens beneath the abstractions—how arguments are parsed, how types
are coerced, how errors are surfaced—matters when your tool runs in production, in CI pipelines, on
Windows terminals with broken encodings, or under `set -e` where non-zero exits kill the entire
script.

This file covers the full spectrum: from raw `sys.argv` access through `argparse`, `click`, `typer`,
entry point configuration, layered config, and rich output. Every section explains not just _how_,
but _why_ the mechanism exists and where it breaks.

## sys.argv Basics

`sys.argv` is a list of strings passed to the Python interpreter. It is the lowest-level argument
interface available—no parsing, no validation, no help text. You get exactly what the shell gave
you, split on whitespace according to the shell's own rules.

```python
import sys

def main():
    if len(sys.argv) < 3:
        print(f"Usage: {sys.argv[0]} <input> <output>", file=sys.stderr)
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

if __name__ == "__main__":
    main()
```

**Index 0 is always the script name.** This is the path as the OS resolved it—not necessarily how
the user invoked it. If the user runs `python ./scripts/build.py`, `sys.argv[0]` is
`./scripts/build.py`. If they run `python -m mypackage`, `sys.argv[0]` is the path to the resolved
module file. If the interpreter is invoked with `-c`, `sys.argv[0]` is `'-c'`.

**Why `sys.argv` still matters even when you use argparse/click/typer:** Every higher-level parser
consumes `sys.argv[1:]` (or a slice you provide). Understanding the raw list is essential for
debugging cases where your parser sees unexpected arguments—typically caused by shell quoting, glob
expansion, or a wrapper script that injects extra positional arguments.

**Limitations:**

- No type coercion. Everything is a string. `sys.argv[1]` is `"42"`, not `42`.
- No help generation. You write it yourself or your users read source.
- No flag handling. `-v` and `--verbose` are just positional strings you must manually detect.
- No validation. Bounds checking, enum membership, file existence—all manual.
- No shell completion. You get none.

For throwaway scripts and one-liners, `sys.argv` is fine. For anything a human or CI pipeline will
use repeatedly, use a real parser.

## argparse

`argparse` is the standard library's argument parsing module. It is comprehensive, well-tested, and
has zero dependencies. It handles positional arguments, optional flags, type coercion, defaults,
mutually exclusive groups, subcommands, and help formatting. The API is verbose but explicit—every
behavior is opt-in.

### ArgumentParser

```python
import argparse

parser = argparse.ArgumentParser(
    prog="deploy",
    description="Deploy an application to the target environment.",
    epilog="Example: deploy staging --skip-tests\n"
           "  deploy production --rollout 25",
    formatter_class=argparse.RawDescriptionHelpFormatter,
)
```

Key constructor parameters:

- `prog`: overrides the program name in help output. Defaults to `sys.argv[0]`.
- `description`: text shown before the argument list in `--help`.
- `epilog`: text shown after the argument list. Use `RawDescriptionHelpFormatter` to preserve
  newlines (the default `HelpFormatter` reflows text).
- `formatter_class`: controls how help text is wrapped. `RawDescriptionHelpFormatter` prevents
  reflow; `ArgumentDefaultsHelpFormatter` appends default values to help strings.
- `parents`: accepts a list of `ArgumentParser` instances whose arguments are copied in—useful for
  shared argument sets across subcommands.
- `argument_default`: sets a global default for all arguments that don't specify their own.
- `exit_on_error`: (3.9+) if `False`, `parse_args()` raises `ArgumentError` instead of calling
  `sys.exit()`. Essential for library code that parses args without terminating the process.
- `fromfile_prefix_chars`: e.g. `@` allows `@args.txt` to read arguments from a file. Useful for
  circumventing shell argument length limits.

### Positional Arguments

```python
parser.add_argument("input", help="Path to the input file")
parser.add_argument("output", help="Path to the output file")
```

Positional arguments are required by default. The order matters—they are bound to their position in
the command line, not their name.

### Optional Arguments

```python
parser.add_argument("--verbose", "-v", action="store_true", help="Enable verbose output")
parser.add_argument("--count", "-c", type=int, default=1, help="Number of retries")
parser.add_argument("--format", choices=["json", "text", "csv"], default="text")
```

`add_argument` determines whether an argument is optional based on whether it starts with `-` or
`--`. This is a naming convention, not a separate API.

**`action` parameter controls what happens when the flag is encountered:**

- `store_true` / `store_false`: sets a boolean. No value consumed from the command line.
- `store_const`: stores a constant value specified by `const=`. Used for `--flag` that should set a
  non-boolean value.
- `append`: each occurrence appends to a list. `--tag foo --tag bar` yields `["foo", "bar"]`.
- `append_const`: appends a constant to a list.
- `count`: `--verbose` → 1, `-vv` → 2, `-vvv` → 3 (use `action="count"`).
- `extend`: (3.10+) like `append` but accepts comma-separated values. `--tag foo,bar` yields
  `["foo", "bar"]`.
- `version`: prints version info and exits (requires `version=` string).

### type, default, choices

```python
parser.add_argument("port", type=int, help="Port number")
parser.add_argument("--timeout", type=float, default=30.0)
parser.add_argument("--log-level", choices=["DEBUG", "INFO", "WARNING", "ERROR"], default="INFO")
```

`type` accepts any callable that takes a string and returns a value. This means you can pass
`pathlib.Path`, `int`, a custom enum constructor, or a validation function:

```python
def positive_int(value: str) -> int:
    iv = int(value)
    if iv <= 0:
        raise argparse.ArgumentTypeError(f"{value} is not a positive integer")
    return iv

parser.add_argument("--workers", type=positive_int, default=4)
```

`choices` does a membership check after type coercion. If `type=int` and `choices=[1, 2, 4]`, the
string `"1"` is coerced to `1` and then checked against the list. If the value fails coercion, the
type error fires first.

### nargs

`nargs` controls how many command-line tokens an argument consumes:

| Value     | Meaning   | Example                    | Result                    |
| --------- | --------- | -------------------------- | ------------------------- |
| (default) | 1         | `--count 5`                | `5`                       |
| `N` (int) | exactly N | `--rgb 255 0 128`          | `[255, 0, 128]`           |
| `?`       | 0 or 1    | `--format json` or omitted | `json` or `default`       |
| `*`       | 0 or more | `--tag a b c` or omitted   | `["a", "b", "c"]` or `[]` |
| `+`       | 1 or more | `--file a.txt b.txt`       | `["a.txt", "b.txt"]`      |

`nargs="?"` has special behavior: when the flag is present without a value, `const` is stored
instead of `default`. When the flag is absent entirely, `default` is stored.

```python
parser.add_argument("--sort", nargs="?", const="asc", default="none",
                    choices=["asc", "desc"],
                    help="Sort order (omit for no sorting)")
# --sort      → "asc" (const)
# --sort desc → "desc" (explicit value)
# (omitted)   → "none" (default)
```

### Mutually Exclusive Groups

```python
group = parser.add_mutually_exclusive_group(required=True)
group.add_argument("--create", action="store_true", help="Create the resource")
group.add_argument("--delete", action="store_true", help="Delete the resource")
group.add_argument("--update", action="store_true", help="Update the resource")
```

Exactly one of `--create`, `--delete`, or `--update` must be provided. If none or more than one is
given, argparse exits with an error message.

### Subparsers

```python
parser = argparse.ArgumentParser(prog="git-like")
subparsers = parser.add_subparsers(dest="command", required=True)

# Subcommand: build
build_parser = subparsers.add_parser("build", help="Build the project")
build_parser.add_argument("--target", choices=["debug", "release"], default="debug")
build_parser.add_argument("--clean", action="store_true")

# Subcommand: test
test_parser = subparsers.add_parser("test", help="Run tests")
test_parser.add_argument("filter", nargs="*", help="Test filter pattern")
test_parser.add_argument("--parallel", type=int, default=1)

args = parser.parse_args()
if args.command == "build":
    print(f"Building target={args.target}, clean={args.clean}")
elif args.command == "test":
    print(f"Running tests: {args.filter}, parallel={args.parallel}")
```

`required=True` (3.7+) ensures a subcommand is always provided. Without it, omitting the subcommand
yields `args.command = None` and no error—the parser silently succeeds with all subcommand-specific
attributes unset. This is a common source of `AttributeError` bugs.

Subparsers do **not** inherit the parent's `ArgumentParser.exit_on_error` setting in Python < 3.9.
Each subparser has its own error handling behavior. Be explicit about error handling if you need it
consistent.

## click

`click` is a third-party library (`pip install click`) that replaces argparse's imperative API with
a declarative decorator-based one. The core idea: a CLI command is a function, arguments and options
are decorators on that function's parameters.

### Basic Command

```python
import click

@click.command()
@click.option("--count", default=1, help="Number of greetings.")
@click.option("--name", prompt="Your name", help="The person to greet.")
def hello(count, name):
    for _ in range(count):
        click.echo(f"Hello, {name}!")

if __name__ == "__main__":
    hello()
```

`click.echo()` vs `print()`: `click.echo` handles Unicode consistently across Python 2/3 (legacy
concern, but the behavior persists in how it handles binary output), respects the `click.unstyle()`
pipeline, and works correctly when stdout is redirected to a file with a different encoding than the
terminal.

### Options vs Arguments

```python
@click.command()
@click.argument("input_file", type=click.Path(exists=True))
@click.option("--output", "-o", default="out.txt", help="Output file path")
@click.option("--verbose", "-v", count=True, help="Increase verbosity")
def process(input_file, output, verbose):
    click.echo(f"Processing {input_file} → {output}, verbosity={verbose}")
```

- `@click.argument()`: positional, required by default.
- `@click.option()`: named, optional (has a default, even if that default is `None`).

**`type` parameter in click is more than a type hint.** It is a full-blown conversion and validation
layer:

```python
@click.option("--port", type=click.IntRange(1, 65535))
@click.option("--path", type=click.Path(exists=True, dir_okay=False, readable=True))
@click.option("--choice", type=click.Choice(["fast", "slow", "safe"]))
@click.option("--uuid", type=click.UUID)
@click.option("--file", type=click.File("r", encoding="utf-8"))
```

`click.Path()` validates file system properties _before_ your function runs. `exists=True` checks at
parse time, not when you open the file later. This fails fast with a clear error message.

`click.File()` opens the file and passes a file object to your function. The file is opened at parse
time and closed when the context exits. This means a typo in a required input file path prevents
your function from ever running.

### Groups and Subcommands

```python
@click.group()
def cli():
    """Database management tool."""
    pass

@cli.command()
@click.option("--migrate/--no-migrate", default=True)
def init(migrate):
    """Initialize the database."""
    click.echo(f"Initializing, migrate={migrate}")

@cli.command()
@click.argument("name")
@click.option("--force", is_flag=True)
def drop(name, force):
    """Drop a table."""
    if not force:
        click.confirm(f"Really drop table '{name}'?", abort=True)
    click.echo(f"Dropped table '{name}'")
```

Click groups support **chained commands** via `@click.group(chain=True)`:

```python
@click.group(chain=True)
def pipeline():
    """Data processing pipeline."""
    pass

@pipeline.command("extract")
def extract_step():
    click.echo("Extracting...")

@pipeline.command("transform")
def transform_step():
    click.echo("Transforming...")

@pipeline.command("load")
def load_step():
    click.echo("Loading...")
```

Running `pipeline extract transform load` executes all three in order. State is passed between
commands via `click.Context.obj`.

### Progress Bars

```python
import time

with click.progressbar(range(100), label="Processing") as bar:
    for item in bar:
        time.sleep(0.05)
```

Click's progress bar writes directly to stderr by default, so it does not interfere with piped
stdout. It handles terminal width detection and falls back to a simple linear output when stdout is
not a TTY (e.g., in CI).

### Colors

```python
click.echo(click.style("Success!", fg="green", bold=True))
click.echo(click.style("Warning", fg="yellow"))
click.echo(click.style("ERROR", fg="red", bold=True))
click.secho("Also works", fg="cyan")
```

Colors are automatically stripped when output is redirected to a non-TTY (file, pipe). This is
critical for CI pipelines where ANSI escape codes corrupt log files.

### Why click is more ergonomic than argparse

1. **No boilerplate.** The function signature IS the CLI spec. In argparse, you define the parser,
   add arguments, parse, then manually unpack `args.x`, `args.y`, `args.z` into local variables or
   pass the namespace object around.
2. **Composable.** Groups and commands are separate functions that can be defined in different
   modules and registered at import time. argparse subparsers require all definitions in one place
   (or manual registration).
3. **Built-in prompts.** `prompt=True` in `@click.option()` gives you an interactive prompt with no
   extra code. argparse has no prompt support.
4. **Context management.** Click's `Context` object carries state, configuration, and resource
   cleanup across subcommands. argparse has no equivalent—you manage state yourself.
5. **Testing.** `click.testing.CliRunner` invokes your command in-process and captures output, exit
   codes, and exceptions. Testing argparse requires mocking `sys.argv` and capturing
   `sys.stdout`/`sys.stderr`.

The tradeoff: click is a dependency. argparse ships with Python. For applications where adding a
dependency is acceptable (which is most applications), click is the better choice.

## typer

`typer` (`pip install typer[standard]`) builds on top of `click` and Python's type hint system. The
core insight: your function signature, with type annotations, is sufficient to define the entire CLI
surface. Typer reads the annotations and generates the argument parsing, type coercion, validation,
and help text automatically.

### Basic Command

```python
import typer

app = typer.Typer()

@app.command()
def main(name: str, count: int = 1, verbose: bool = False):
    """Greet someone."""
    for _ in range(count):
        if verbose:
            typer.echo(f"Hello, {name}! (greeting {_ + 1}/{count})")
        else:
            typer.echo(f"Hello, {name}!")

if __name__ == "__main__":
    app()
```

Running `python script.py --help` produces:

```
 Usage: script.py [OPTIONS] NAME

 Greet someone.

╭─ Arguments ─────────────────────────────────╮
│ * name      TEXT  [default: None] [required] │
╰──────────────────────────────────────────────╯
╭─ Options ────────────────────────────────────╮
│ --count      INTEGER  [default: 1]           │
│ --verbose              [default: False]      │
│ --help                Show this message      │
╰──────────────────────────────────────────────╯
```

### Type-Driven Argument Specification

```python
from typing import Optional, Annotated

@app.command()
def deploy(
    env: Annotated[str, typer.Argument(help="Target environment")],
    region: Annotated[str, typer.Option(help="Cloud region")] = "us-east-1",
    workers: Annotated[int, typer.Option(min=1, max=64)] = 4,
    timeout: Annotated[Optional[float], typer.Option()] = None,
    dry_run: bool = False,
):
    ...
```

Rules:

- A parameter **without a default** is a required positional argument.
- A parameter **with a default** is an optional argument (an `--option`).
- `Annotated[type, typer.Argument(...)]` forces a parameter to be a positional argument even if it
  has a default.
- `Annotated[type, typer.Option(...)]` forces a parameter to be an option even if it has no default
  (making it required but named).
- `bool` parameters with `False` default become `--flag` (store_true). `True` default becomes
  `--no-flag` (store_false).

### Automatic Type Conversion

Typer uses the type annotation to determine conversion:

- `int` → `click.INT`
- `float` → `click.FLOAT`
- `bool` → flag
- `str` → string
- `pathlib.Path` → `click.Path()`
- `List[int]` → multiple values (`nargs`)
- `Optional[str]` → optional with `None` default

```python
from pathlib import Path
from typing import List

@app.command()
def analyze(
    input_files: List[Path],
    threshold: float = 0.5,
    output: Path = Path("output.json"),
):
    for f in input_files:
        typer.echo(f"Analyzing {f} with threshold={threshold}")
```

### Subcommands

```python
app = typer.Typer()
user_app = typer.Typer()
app.add_typer(user_app, name="user")

@user_app.command("create")
def create_user(name: str, email: str):
    typer.echo(f"Creating user: {name} <{email}>")

@user_app.command("delete")
def delete_user(name: str, force: bool = False):
    if not force:
        typer.confirm(f"Delete user '{name}'?", abort=True)
    typer.echo(f"Deleted user '{name}'")
```

### Rich Integration

Typer integrates with `rich` out of the box when installed (`pip install typer[standard]`). Error
messages, help text, and prompts use rich formatting automatically. You can also use rich directly:

```python
from rich.console import Console
from rich.table import Table

console = Console()

@app.command()
def status():
    table = Table(title="Service Status")
    table.add_column("Service", style="cyan")
    table.add_column("Status", style="green")
    table.add_row("API", "Running")
    table.add_row("Database", "Running")
    table.add_row("Cache", "Stopped")
    console.print(table)
```

### Why typer over click

1. **Type safety.** Mypy and other static analyzers understand your CLI function's signature. With
   click, the decorator-based API obscures types—mypy sees `def hello(count, name)` and has no idea
   what types `count` and `name` are.
2. **Less code.** Typer infers option names, types, and defaults from annotations. Click requires
   explicit `@click.option("--name", type=str, default="...")` for each parameter.
3. **Editor support.** IDEs provide autocomplete and type checking on the annotated function. The
   click equivalent requires reading decorator documentation.
4. **Same runtime.** Typer compiles to click commands. The runtime behavior, error handling, and
   testing story are identical to click. You are not giving up click's maturity—you are getting a
   better interface to it.

The tradeoff: typer requires Python 3.7+ (practically 3.9+ for comfortable `Annotated` usage). For
codebases on older Python versions, use click directly.

## **main**.py

### The `python -m` Invocation

Placing a `__main__.py` file in a package allows the package to be run as a module:

```
mypackage/
├── __init__.py
├── __main__.py
├── cli.py
└── core.py
```

Running `python -m mypackage` executes `mypackage/__main__.py`. This is not magic—Python looks for
`__main__.py` inside the named package and runs it with `__name__` set to `"__main__"` and
`__package__` set to `"mypackage"`.

```python
from .cli import main

if __name__ == "__main__":
    main()
```

**Why `python -m` matters:** It ensures the package is on `sys.path` correctly. Running
`python path/to/mypackage/__main__.py` directly may fail because the parent directory is not on
`sys.path`, so sibling packages cannot be imported. `python -m` resolves this by adding the current
directory (or the appropriate search path) to `sys.path` and then locating the package.

### The `if __name__ == "__main__":` Pattern

This guard prevents code from running when the file is imported as a module. When Python runs a file
directly, it sets `__name__` to `"__main__"`. When imported, `__name__` is the module's fully
qualified name.

```python
def main():
    import sys
    sys.exit(process(sys.argv[1:]))

if __name__ == "__main__":
    main()
```

This pattern is not optional. Without it, importing the module (e.g., for testing) would execute the
CLI entry point.

### Entry Points in pyproject.toml

Console scripts let users invoke your tool by name without knowing its module path:

```toml
[project.scripts]
mytool = "mypackage.cli:main"
```

This generates a wrapper script (`mytool`) in the virtual environment's `bin/` (or `Scripts/` on
Windows) that calls `mypackage.cli:main`. The wrapper handles the Python interpreter path, so the
user does not need to know where Python is installed.

```toml
[project.gui-scripts]
mytool-gui = "mypackage.gui:main"
```

`gui-scripts` is identical to `scripts` except on Windows, where `console_scripts` generates `.exe`
wrappers that open a console window and `gui-scripts` generates `.exe` wrappers that do not. On
non-Windows platforms, there is no difference.

**Entry points vs `__main__.py`:** Use both. `__main__.py` supports `python -m mypackage` for
development and debugging. `[project.scripts]` supports `mytool` for installed usage. They can (and
should) call the same `main()` function.

## Configuration Files

Real CLI tools rarely rely on flags alone. Configuration files, environment variables, and defaults
form a layered system where each layer overrides the one below it.

### Layered Configuration

The standard precedence (lowest to highest priority):

1. **Hardcoded defaults** in the source code
2. **Config file** (TOML, YAML, JSON, INI)
3. **Environment variables**
4. **CLI arguments** (highest priority)

This means a CLI flag `--timeout 60` overrides `TIMEOUT=30` from the environment, which overrides
`timeout = 10` in the config file, which overrides `default=5` in the code.

### configparser (INI)

```python
import configparser

config = configparser.ConfigParser()
config.read("settings.ini")

timeout = config.getint("DEFAULT", "timeout", fallback=30)
host = config.get("server", "host", fallback="localhost")
debug = config.getboolean("server", "debug", fallback=False)
```

INI file format:

```ini
[server]
host = localhost
port = 8080
debug = true

[logging]
level = INFO
```

`configparser.ConfigParser` supports interpolation using `%(key)s` syntax and string interpolation:

```ini
[paths]
base = /var/data
cache = %(base)s/cache
logs = %(base)s/logs
```

Limitations: no nested sections, no native list/dict types (everything is a string), no comments on
the same line as a value in the default format.

### tomllib (Python 3.11+)

```python
import tomllib

with open("pyproject.toml", "rb") as f:
    config = tomllib.loads(f.read().decode())
```

TOML supports nested tables, arrays, inline tables, and has native types for strings, integers,
floats, booleans, and datetimes:

```toml
[tool.myapp]
timeout = 30
debug = false

[tool.myapp.server]
host = "localhost"
port = 8080

[tool.myapp.features]
experimental = ["graphql", "websockets"]
```

`tomllib` is read-only (it parses TOML). For writing TOML, use `tomli_w` or similar third-party
libraries. For Python < 3.11, use `tomli` (API-compatible backport: `pip install tomli`, then
`import tomli as tomllib`).

### JSON

```python
import json

with open("config.json") as f:
    config = json.load(f)

timeout = config.get("timeout", 30)
```

JSON is universal and has first-class support in every language. Its limitations for config files:
no comments (you cannot annotate config values), no trailing commas (makes version-controlled diffs
harder), and no multi-line strings.

### YAML

```python
import yaml

with open("config.yaml") as f:
    config = yaml.safe_load(f)
```

YAML supports comments, multi-line strings, anchors/aliases, and has a flexible syntax. **Always use
`yaml.safe_load()`, never `yaml.load()`.** `yaml.load()` can execute arbitrary Python code via
`!!python/object/apply:` tags. This is a well-known remote code execution vector.

YAML's flexibility is also its danger. The spec is large and ambiguous. Different YAML parsers
handle edge cases differently. TOML is generally preferred for new projects because its spec is
small, deterministic, and unambiguous.

### Integrating Config with CLI Parsers

With argparse, you typically read the config file manually and set defaults:

```python
import argparse
import json

parser = argparse.ArgumentParser()
parser.add_argument("--host", default="localhost")
parser.add_argument("--port", type=int, default=8080)

config = {}
try:
    with open("config.json") as f:
        config = json.load(f)
except FileNotFoundError:
    pass

parser.set_defaults(**config)
args = parser.parse_args()
```

`parser.set_defaults()` updates defaults without overriding values that were already set on the
parser. This means CLI args (which take precedence over defaults) still win.

Click and typer have built-in support for config files:

```python
# click
@click.option("--host", default="localhost")
@click.option("--port", default=8080, type=int)
@click.config_file()
def main(host, port):
    ...
```

```python
# typer
@app.command()
def main(
    host: str = typer.Option("localhost"),
    port: int = typer.Option(8080),
    config: Path = typer.Option("config.json", exists=False),
):
    ...
```

## Rich Output

The `rich` library (`pip install rich`) provides terminal rendering with colors, tables, panels,
progress bars, tree views, markdown rendering, and syntax highlighting.

### Tables

```python
from rich.console import Console
from rich.table import Table

console = Console()

table = Table(title="Deployment Status")
table.add_column("Service", style="cyan", no_wrap=True)
table.add_column("Version", justify="right", style="green")
table.add_column("Status")
table.add_column("Uptime", justify="right")

table.add_row("api-gateway", "v2.14.3", "[green]Running[/green]", "14d 6h")
table.add_row("auth-service", "v1.8.0", "[green]Running[/green]", "14d 6h")
table.add_row("worker-pool", "v3.1.2", "[yellow]Degraded[/yellow]", "2h 13m")
table.add_row("scheduler", "v1.0.0", "[red]Stopped[/red]", "—")

console.print(table)
```

Rich automatically detects terminal width and wraps or truncates columns accordingly. When output is
piped to a file, ANSI codes are stripped and the table falls back to plain text layout.

### Panels

```python
from rich.panel import Panel

console.print(Panel("Build completed successfully.\n12 tests passed, 0 failed.",
                    title="Build Result", border_style="green"))
```

### Progress

```python
from rich.progress import Progress

with Progress() as progress:
    task = progress.add_task("Processing...", total=100)
    for i in range(100):
        progress.update(task, advance=1)
```

Rich's progress bar supports multiple concurrent tasks, spinners, download progress (bytes/sec,
ETA), and custom column layouts. It writes to stderr by default.

### Markdown Rendering

```python
from rich.markdown import Markdown

console.print(Markdown("# Title\n\nParagraph with **bold** and `code`."))
```

### Syntax Highlighting

```python
from rich.syntax import Syntax

syntax = Syntax.from_path("script.py", theme="monokai", line_numbers=True)
console.print(syntax)
```

### Tree Views

```python
from rich.tree import Tree

tree = Tree("[bold]Project Structure[/bold]")
tree.add("src/").add("main.py").add("utils.py")
tree.add("tests/").add("test_main.py")
console.print(tree)
```

### When to use rich vs click.echo

Use `click.echo()` for simple status messages, prompts, and output that should remain
plain-text-compatible (piped to files, processed by other tools). Use `rich` for display output
where formatting enhances readability (tables, progress, structured data). They coexist well—rich
writes to stderr for progress, click.echo writes to stdout for data output.

## Common Patterns

### Verbose/Quiet Flags

```python
@click.option("-v", "--verbose", count=True, help="Increase verbosity (-v, -vv, -vvv)")
@click.option("-q", "--quiet", is_flag=True, help="Suppress all output except errors")
```

Map verbosity levels to Python's `logging` module:

```python
import logging

VERBOSITY_TO_LOG_LEVEL = {
    0: logging.WARNING,
    1: logging.INFO,
    2: logging.DEBUG,
    3: logging.DEBUG,  # TRACE-equivalent; set custom level if needed
}

log_level = VERBOSITY_TO_LOG_LEVEL.get(verbose, logging.DEBUG)
logging.basicConfig(level=log_level, format="%(levelname)s: %(message)s")
```

### Dry-Run

```python
@click.option("--dry-run", is_flag=True, help="Show what would be done without making changes")
def deploy(env, dry_run):
    if dry_run:
        click.echo(f"[DRY RUN] Would deploy to {env}")
        return
    actual_deploy(env)
```

Dry-run is critical for infrastructure tools. The principle: the tool should print exactly what it
would do, using the same code path as the real operation, but skip the side effects. If your dry-run
and real execution follow different code paths, the dry-run output is a lie.

### Output Format Selection

```python
@click.option("--format", "output_format", type=click.Choice(["json", "text", "table"]), default="text")
def status(output_format):
    data = fetch_status()

    if output_format == "json":
        click.echo(json.dumps(data, indent=2))
    elif output_format == "table":
        table = format_as_table(data)
        click.echo(table)
    else:
        for key, value in data.items():
            click.echo(f"{key}: {value}")
```

JSON output is essential for machine consumption (CI pipelines, scripting). Always ensure JSON
output goes to stdout and logs/diagnostics go to stderr, so they can be separated with redirection:
`tool status --format=json 2>errors.log`.

### Logging Setup in CLI Tools

```python
import logging
import sys

def setup_logging(verbose: int, quiet: bool):
    if quiet:
        level = logging.ERROR
    elif verbose >= 2:
        level = logging.DEBUG
    elif verbose == 1:
        level = logging.INFO
    else:
        level = logging.WARNING

    logging.basicConfig(
        level=level,
        format="%(message)s",
        stream=sys.stderr,
    )
```

Key points:

- Log to **stderr**, not stdout. Stdout is for data output. Mixing logs and data on stdout makes
  programmatic consumption impossible.
- Use `stream=sys.stderr` explicitly. `basicConfig` defaults to stderr, but being explicit prevents
  surprises if the default ever changes.
- Suppress the library name and level prefix for clean output. Use `format="%(message)s"` for
  user-facing tools. Include `%(levelname)s` and `%(name)s` only for developer-facing tools.

### Exit Codes

```python
import sys

EXIT_OK = 0
EXIT_ERROR = 1
EXIT_USAGE = 2       # argparse uses this for bad arguments
EXIT_NO_INPUT = 66   # like /usr/include/sysexits.h
EXIT_SOFTWARE = 70

try:
    main()
except KeyboardInterrupt:
    click.echo("\nAborted.", err=True)
    sys.exit(130)  # 128 + SIGINT(2)
except click.ClickException as e:
    e.show()
    sys.exit(1)
except Exception as e:
    logging.error(f"Unexpected error: {e}", exc_info=True)
    sys.exit(1)
```

`sys.exit(130)` is the Unix convention for a process killed by SIGINT (signal 2, 128 + 2 = 130).
This tells shells and calling processes that the user intentionally interrupted, not that the
program crashed.

### Version Flag

```python
# argparse
parser.add_argument("--version", action="version", version="%(prog)s 1.2.3")

# click
@click.version_option(version="1.2.3")

# typer
def version():
    typer.echo("mytool 1.2.3")
app.command(name="version")(version)
```

Store the version string in a single location—typically `__version__ = "1.2.3"` in your package's
`__init__.py`—and import it everywhere. Having the version in multiple places guarantees they will
diverge.

## Common Pitfalls

### Not Handling Ctrl+C Gracefully

A bare `KeyboardInterrupt` traceback is ugly and unhelpful. The user pressed Ctrl+C. They know they
interrupted the program. Show a clean exit:

```python
import signal
import sys

def main():
    try:
        do_work()
    except KeyboardInterrupt:
        print("\nInterrupted.", file=sys.stderr)
        sys.exit(130)
```

Also ensure that file handles, network connections, and locks are cleaned up. Use `try/finally` or
context managers (`with` statements) within `do_work()`. The `KeyboardInterrupt` exception
propagates through `finally` blocks, so cleanup code will still run.

### Encoding Issues on Windows

Windows uses a different default encoding than Unix. `sys.stdout.encoding` may be `cp1252` on
Windows, which cannot represent all Unicode characters. When your tool outputs UTF-8 text (JSON with
non-ASCII, user names with accents, etc.), this causes `UnicodeEncodeError`.

```python
import sys

if sys.stdout.encoding != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if sys.stderr.encoding != "utf-8":
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
```

`PYTHONUTF8=1` environment variable (Python 3.7+, default in 3.15+) forces UTF-8 mode globally. For
library code, use `PYTHONUTF8=1` in your CI configuration and document it in your README.

### Path Arguments with Spaces

The shell splits arguments on whitespace _before_ Python sees them. This is the shell's job, not
Python's. If a user writes:

```bash
mytool --input my file.txt
```

The shell passes `["mytool", "--input", "my", "file.txt"]` to Python. argparse/click/typer will
interpret `"my"` as the input file and `"file.txt"` as an unknown argument. The fix is quoting:

```bash
mytool --input "my file.txt"
```

This is not a Python bug. It is a shell behavior. However, your tool should produce a clear error
message in this case, not a confusing traceback. argparse does this reasonably well; click and typer
do too. Test your tool with paths containing spaces to verify.

### Boolean Flags: store_true vs flag_value

In argparse, `action="store_true"` creates a flag that is `False` by default and `True` when
present. This is straightforward. But consider:

```python
parser.add_argument("--verbose", action="store_true")
parser.add_argument("--verbose", action="store_false")  # CONFLICT: same dest, different action
```

This does not work as expected. Both flags write to `args.verbose`, but one sets it `True` and the
other `False`. The last one to appear on the command line wins, which is confusing.

The fix in argparse 3.9+:

```python
parser.add_argument("--verbose", "--no-verbose", default=False, action=argparse.BooleanOptionalAction)
# --verbose   → True
# --no-verbose → False
```

In click:

```python
@click.option("--verbose/--no-verbose", default=False)
```

In typer:

```python
verbose: bool = False
# generates --verbose / --no-verbose
```

### Argument Parsing in Subcommands

A common mistake is defining a global option on the parent parser and expecting it to be available
in subcommands without explicit propagation. In argparse, parent arguments are available in
subcommands only if you use `parents=[parent_parser]` or parse the entire argv once. In click and
typer, options defined on the group function are available to all subcommands via
`click.pass_context`.

```python
# click: pass global state via context
@click.group()
@click.option("--config", type=click.Path(), default="config.yaml")
@click.pass_context
def cli(ctx, config):
    ctx.ensure_object(dict)
    ctx.obj["config"] = config

@cli.command()
@click.pass_context
def build(ctx):
    config = ctx.obj["config"]
    click.echo(f"Building with config: {config}")
```

### Not Validating Early Enough

If your tool reads a config file, connects to a database, and then discovers that a required
argument is invalid, the user has already waited for the config load and connection. Validate all
inputs at parse time, before any side effects occur. This is where `type=` in argparse/click and
type annotations in typer earn their value—they reject bad input before your function runs.

### Assuming stdout Is a Terminal

In CI pipelines, `docker run`, `cron` jobs, and IDE terminals, stdout may not be a TTY. Progress
bars that write ANSI escape codes to a non-TTY produce garbled output in log files. Both click and
rich detect `isatty()` and degrade gracefully, but custom escape code output must check explicitly:

```python
import sys

if sys.stdout.isatty():
    click.echo("\033[1;32mDone!\033[0m")
else:
    click.echo("Done!")
```

Or better: let rich/click handle it. Do not write raw ANSI codes yourself.

### Forgetting required=True on argparse Subparsers

Before Python 3.7, `add_subparsers()` defaulted to `required=False`. Running your tool with no
subcommand silently succeeded with `args.command = None`. If your code accesses `args.command`
without a None check, you get an `AttributeError` with a confusing traceback. Always set
`required=True` (available since 3.7):

```python
subparsers = parser.add_subparsers(dest="command", required=True)
```

This fails fast with a clear "required: expected at least one argument" message instead of a
traceback inside your own code.
