---
id: shell-basics
title: Shell Basics
description:
  POSIX shell fundamentals — command structure, redirection, pipes, globbing, job control, and shell
  scripting.
slug: shell-basics
sidebar_position: 1
---

## Shell Invocation

A shell is both an **interactive command interpreter** and a **scripting language interpreter**.
When you open a terminal emulator, it spawns a shell process — typically `bash`, `zsh`, or `dash`.
When you run a script with `./script.sh`, the shebang line determines which interpreter processes
the file.

### Interactive vs Non-Interactive

| Aspect            | Interactive                               | Non-Interactive                        |
| ----------------- | ----------------------------------------- | -------------------------------------- |
| **Startup files** | `.bashrc`, `.profile`, `/etc/bash.bashrc` | Only `BASH_ENV` variable if set        |
| **Prompt**        | `PS1`, `PS2` displayed                    | No prompt                              |
| **Job control**   | Enabled (`set -m`)                        | Disabled by default                    |
| **Line editing**  | Readline active (`readline` library)      | Not active                             |
| **Aliases**       | Expanded                                  | Expanded (in bash) or not (POSIX mode) |
| **Exit on error** | Does not exit on error                    | Same unless `set -e`                   |

The shell's startup sequence differs depending on whether it is a **login shell** or a **non-login
shell**:

- **Login shell**: Sourced on first login (SSH, `su -`, `login`). Reads `/etc/profile`, then
  `~/.bash_profile` or `~/.bash_login` or `~/.profile` (first one found).
- **Non-login interactive shell**: Reads `~/.bashrc`.
- **Non-login non-interactive shell**: Inherits exported environment variables. Does not read
  startup files unless `BASH_ENV` points to one.

```mermaid
flowchart TD
    A[Shell Invoked] --> B{Login Shell?}
    B -->|Yes| C{Interactive?}
    B -->|No| D{Interactive?}
    C -->|Yes| E[/etc/profile]
    E --> F[~/.bash_profile]
    F --> G[~/.bashrc]
    C -->|No| H[BASH_ENV]
    D -->|Yes| I[~/.bashrc]
    D -->|No| J{BASH_ENV set?}
    J -->|Yes| K[Source BASH_ENV]
    J -->|No| L[No startup files]
```

:::info

In practice, most systems configure `~/.profile` to source `~/.bashrc`, so both login and non-login
interactive shells load the same configuration. However, scripts executed by cron or systemd do not
source `~/.bashrc` — this is a frequent source of bugs.

:::

### POSIX Shell vs Bash

POSIX specifies a shell standard (IEEE 1003.1, also known as the Single UNIX Specification). Bash is
largely POSIX-compliant but adds extensions. When writing portable scripts, target POSIX sh. When
writing for known-bash environments, use bash features deliberately.

| Feature                | POSIX sh | Bash                        |
| ---------------------- | -------- | --------------------------- |
| Arrays                 | No       | Yes (`arr=()`)              |
| `[[ ]]`                | No       | Yes (preferred over `[ ]`)  |
| `(( ))`                | No       | Yes (arithmetic evaluation) |
| Process substitution   | No       | Yes (`&lt;()`, `&gt;()`)    |
| Associative arrays     | No       | Yes (bash 4.0+)             |
| `[[ $a =~ $re ]]`      | No       | Yes (regex matching)        |
| `${var:offset:length}` | No       | Yes (substring expansion)   |
| `&\>\&2` redirection   | No       | Yes                         |

On Debian and Ubuntu, `/bin/sh` is `dash` — a minimal POSIX shell that is significantly faster than
bash but lacks bash extensions. Scripts that use bash features must use `#!/bin/bash`, not
`#!/bin/sh`.

## Command Structure

Every command executed by the shell follows this general pattern:

```text
command [options] [arguments] [--] [operands]
```

The shell performs the following steps before executing a command:

1. **Tokenization**: Split the input line into words based on `IFS` (Internal Field Separator,
   default: space, tab, newline).
2. **Alias expansion**: Replace aliases (only in interactive shells, and not for the first word in
   certain contexts).
3. **Brace expansion**: Expand `{a,b,c}` patterns.
4. **Tilde expansion**: Replace `~` with `$HOME`, `~user` with user's home directory.
5. **Parameter expansion**: Expand `$VAR`, `${VAR}`, `${VAR:-default}`, etc.
6. **Command substitution**: Execute `$(cmd)` or `` `cmd` `` and replace with stdout.
7. **Arithmetic expansion**: Evaluate `$((expression))`.
8. **Word splitting**: Split results on `IFS` (except in contexts where it is suppressed).
9. **Pathname expansion (globbing)**: Expand `*`, `?`, `[...]` patterns.
10. **Quote removal**: Remove quoting characters that are not part of expansions.
11. **Redirection**: Set up I/O redirections.
12. **Command execution**: Execute the command using the resolved path.

:::warning

The order of these expansions matters enormously. Parameter expansion happens before globbing, which
means `VAR="*.txt"` followed by `ls $VAR` will expand to `ls *.txt` and then glob-expand. If there
are no matching files, the shell behavior depends on the `nullglob` option.

:::

## I/O Redirection

### File Descriptors

Every process in Linux has three standard file descriptors at startup:

| FD  | Name   | Default Destination | Description             |
| --- | ------ | ------------------- | ----------------------- |
| 0   | stdin  | Keyboard            | Input stream            |
| 1   | stdout | Terminal            | Normal output           |
| 2   | stderr | Terminal            | Error/diagnostic output |

The shell can redirect any file descriptor to a file, another descriptor, a pipe, or a
here-document.

### Basic Redirection Operators

```bash
# Redirect stdout to a file (truncate)
command > file

# Redirect stdout to a file (append)
command >> file

# Redirect stderr to a file
command 2> file

# Redirect both stdout and stderr to a file
command > file 2>&1

# Bash shorthand for redirecting both
command &> file

# Discard stdout
command > /dev/null

# Discard stderr
command 2> /dev/null

# Discard both
command &> /dev/null

# Redirect stdin from a file
command < file

# Here-document
command << EOF
line 1
line 2
$VARIABLE expanded
EOF

# Here-string (bash)
command <<< "single line string"
```

### Pipes

Pipes connect the stdout of one process to the stdin of another. The shell creates an anonymous pipe
using the `pipe(2)` system call, forks both processes, and wires their file descriptors.

```bash
# Simple pipe
ls -la | grep ".conf"

# Pipeline with multiple stages
dmesg | grep -i error | sort | uniq -c | sort -rn | head -20

# Pipe stdout and stderr to different commands
command 2>&1 1>&3 | process_stderr 3>&1 1>&2 | process_stdout
```

:::info

**Pipe buffer size**: Linux pipes have a default buffer of 64 KiB (since kernel 2.6.11, configurable
via `/proc/sys/fs/pipe-max-size`). When the buffer is full, the writing process blocks until the
reader consumes data. For high-throughput pipelines, this can be a bottleneck.

:::

### Process Substitution (Bash)

Process substitution creates a temporary named pipe (FIFO) or `/dev/fd/` entry:

```bash
# Compare output of two commands
diff <(command1) <(command2)

# Feed a command's output as a file argument
wc -l <(find /etc -name "*.conf")

# Tee output to multiple processes
command > >(process1) 2> >(process2)
```

### File Descriptor Manipulation

```bash
# Open file descriptor 3 for reading
exec 3< /path/to/file

# Read from fd 3
read -r line <&3

# Open fd 4 for writing
exec 4> /path/to/output

# Write to fd 4
echo "data" >&4

# Close file descriptors
exec 3<&-
exec 4>&-

# Duplicate stderr to stdout, keeping stderr on fd 2
exec 2>&1
```

This is particularly useful in scripts where you need to maintain open file handles across multiple
operations:

```bash
#!/bin/bash
exec 3>&1 4>&2
exec > >(tee /var/log/script.log) 2>&1

# All output now goes to both terminal and log file
echo "This goes everywhere"

# Restore original file descriptors
exec 1>&3 2>&4
exec 3>&- 4>&-
```

## Globbing Patterns

The shell expands glob patterns into matching filenames before passing them to the command. This is
fundamentally different from regex — globbing operates on filenames in the filesystem, not on
arbitrary text.

| Pattern  | Meaning                                         | Example     | Matches                     |
| -------- | ----------------------------------------------- | ----------- | --------------------------- |
| `*`      | Any sequence of characters (except leading dot) | `*.log`     | `app.log`, `error.log`      |
| `?`      | Exactly one character                           | `file?.txt` | `file1.txt`, `fileA.txt`    |
| `[abc]`  | One character from the set                      | `[abc].sh`  | `a.sh`, `b.sh`, `c.sh`      |
| `[a-z]`  | One character from the range                    | `[a-m]*`    | `apple`, `banana`, `middle` |
| `[!abc]` | One character NOT in the set                    | `[!0-9]*`   | `file`, `name`              |
| `**`     | Recursive glob (bash 4.0+, `globstar` option)   | `**/*.py`   | All `.py` files recursively |

```bash
# Enable recursive globbing
shopt -s globstar

# Delete all .tmp files recursively
rm -v **/*.tmp

# Match files starting with a dot
ls -la .*

# Case-insensitive matching (bash 4.0+)
shopt -s nocaseglob
ls *.TXT  # matches file.txt, FILE.TXT, etc.
```

:::warning

By default, `*` does not match files starting with a dot. This is a security feature inherited from
the original Unix glob behavior — you must explicitly use `.*` or enable `dotglob` with
`shopt -s dotglob`.

:::

### Extended Globbing (Bash)

Extended globbing provides pattern matching similar to regex quantifiers:

| Pattern                 | Meaning                           | Regex equivalent   |
| ----------------------- | --------------------------------- | ------------------ |
| `?(pattern)`            | Match zero or one occurrence      | `pattern?`         |
| `*(pattern)`            | Match zero or more occurrences    | `pattern*`         |
| `+(pattern)`            | Match one or more occurrences     | `pattern+`         |
| `@(pattern1\|pattern2)` | Match exactly one of the patterns | `(p1\|p2)`         |
| `!(pattern)`            | Match anything except the pattern | Negative lookahead |

```bash
shopt -s extglob

# Remove all files except .gitkeep
rm -v !(.gitkeep)

# Match files with exactly one digit in the name
ls +([0-9])*

# Match .c or .h files
ls *.@(c|h)
```

## Job Control

Job control allows you to manage multiple processes within a single shell session. The shell tracks
jobs (pipeline groups) and assigns them to the shell's session.

### Core Job Control Commands

```bash
# Suspend the current foreground job
# Ctrl+Z sends SIGTSTP

# List all jobs
jobs -l

# Resume job 1 in the background
bg %1

# Bring job 1 to the foreground
fg %1

# Kill job 1
kill %1

# Suspend a job after it starts
nohup command &  # immune to SIGHUP on shell exit

# Disown a job (removes from shell's job table)
disown %1

# Run a job in the background
command &
```

### Process Groups and Sessions

Every job is a **process group** with a unique PGID. The terminal assigns one process group as the
**foreground process group** — only this group receives terminal input (stdin) and signals (SIGINT,
SIGQUIT, SIGTSTP).

```bash
# View process group IDs
ps -eo pid,pgid,sid,comm | head

# The shell's own process group
echo "Shell PID: $$, PGID: $(ps -o pgid= -p $$)"
```

```mermaid
graph TD
    A[Session Leader - SSH/bash] --> B[Foreground Process Group]
    A --> C[Background Process Group 1]
    A --> D[Background Process Group 2]
    B --> E[Pipeline: cmd1 \| cmd2 \| cmd3]
    C --> F[daemon process]
    D --> G[watch command]
    A -->|SIGINT/SIGQUIT| B
    A -.->|Not delivered| C
    A -.->|Not delivered| D
```

### `nohup` and `disown`

When a shell session ends (SSH disconnect, terminal close), it sends `SIGHUP` to all jobs in the
session. Two mechanisms prevent this:

```bash
# Method 1: nohup — ignores SIGHUP, redirects output to nohup.out
nohup ./build.sh &

# Method 2: disown — removes job from shell's active table
./build.sh &
disown -h %1  # prevents SIGHUP on shell exit
```

The difference: `nohup` modifies the signal handling of the child process itself, while `disown`
simply tells the shell not to send `SIGHUP` when it exits. If the shell crashes (SIGKILL),
`nohup`-protected processes survive, but `disown`-ed processes may still receive `SIGHUP` depending
on the terminal driver behavior.

## Environment Variables

### Shell Variables vs Environment Variables

```bash
# Shell variable — visible only to current shell
MY_VAR="hello"

# Export to environment — visible to child processes
export MY_VAR="hello"
# or equivalently:
declare -x MY_VAR="hello"

# Local variable (function-scoped in bash)
local MY_VAR="hello"

# Readonly variable
readonly MY_VAR="hello"

# List all environment variables
env
printenv

# List all shell variables (including unset ones)
set

# Check if a variable is set
if [[ -v MY_VAR ]]; then echo "set"; fi

# Remove a variable
unset MY_VAR
```

### Special Shell Variables

| Variable | Meaning                                                    |
| -------- | ---------------------------------------------------------- |
| `$?`     | Exit status of the last command (0 = success)              |
| `$$`     | PID of the current shell                                   |
| `$!`     | PID of the last background process                         |
| `$-`     | Current shell options                                      |
| `$_`     | Last argument of the previous command                      |
| `$@`     | All positional parameters as separate words                |
| `$*`     | All positional parameters as a single word                 |
| `$#`     | Number of positional parameters                            |
| `$0`     | Name of the shell or script                                |
| `$1..$9` | Positional parameters                                      |
| `${10}`  | Positional parameter 10+ (must use braces)                 |
| `IFS`    | Internal Field Separator (default: space, tab, newline)    |
| `PATH`   | Colon-separated list of directories to search for commands |

### Parameter Expansion

```bash
# Default value if unset or null
echo "${VAR:-default}"    # does not assign
echo "${VAR:=default}"    # assigns to VAR

# Alternative value if set and non-null
echo "${VAR:+alternative}"

# Error if unset or null
: "${VAR:?VAR must be set}"

# String length
echo "${#VAR}"

# Substring extraction
echo "${VAR:2:5}"       # 5 characters starting at offset 2

# Remove prefix (shortest match)
echo "${VAR#pattern}"

# Remove prefix (longest match)
echo "${VAR##pattern}"

# Remove suffix (shortest match)
echo "${VAR%pattern}"

# Remove suffix (longest match)
echo "${VAR%%pattern}"

# Replace first occurrence
echo "${VAR/pattern/replacement}"

# Replace all occurrences
echo "${VAR//pattern/replacement}"

# Replace from beginning
echo "${VAR/#pattern/replacement}"

# Replace at end
echo "${VAR/%pattern/replacement}"

# Convert to uppercase (bash 4.0+)
echo "${VAR^^}"

# Convert to lowercase (bash 4.0+)
echo "${VAR,,}"
```

### Common Environment Files

| File               | Sourced by                    | Purpose                             |
| ------------------ | ----------------------------- | ----------------------------------- |
| `/etc/environment` | PAM                           | System-wide environment variables   |
| `/etc/profile`     | Login shells                  | System-wide login configuration     |
| `/etc/bash.bashrc` | Interactive shells            | System-wide interactive config      |
| `~/.profile`       | Login shells                  | User login configuration            |
| `~/.bashrc`        | Interactive non-login shells  | User interactive configuration      |
| `~/.bash_profile`  | Login shells (bash)           | Alternative to `.profile`           |
| `~/.bash_login`    | Login shells (bash, fallback) | Fallback if `.bash_profile` missing |
| `/etc/profile.d/*` | `/etc/profile`                | Drop-in system scripts              |

## Shell Scripting

### Shebangs

The shebang (`#!`) line tells the kernel which interpreter to use when executing the script as a
direct command (`./script.sh`):

```bash
#!/bin/bash
#!/usr/bin/env bash       # portable — finds bash in PATH
#!/bin/sh
#!/usr/bin/env python3
#!/usr/bin/awk -f
```

The `env` form is preferred for languages that may be installed in different locations
(`/usr/bin/bash`, `/usr/local/bin/bash`, `/opt/homebrew/bin/bash`). The kernel only allows one
argument on the shebang line, so `#!/usr/bin/bash -e` works but `#!/usr/bin/env bash -e` does not —
`bash -e` is treated as a single argument to `env`.

### Quoting Rules

Quoting controls word splitting and globbing. The rules are:

| Quote Type  | Expansions Performed                                  |
| ----------- | ----------------------------------------------------- |
| No quotes   | All expansions, word splitting, globbing              |
| Double `""` | Parameter expansion, command substitution, arithmetic |
| Single `''` | None — literal string                                 |

```bash
VAR="hello world"

# Without quotes — word splitting on IFS
echo $VAR      # outputs: hello world (but splits into two args)

# With double quotes — no word splitting
echo "$VAR"    # outputs: hello world (single arg)

# Single quotes — no expansion at all
echo '$VAR'    # outputs: $VAR

# Escaping within double quotes
echo "cost: \"\$5\""   # outputs: cost: "$5"

# Nesting quotes
echo 'it'\''s'          # outputs: it's (end single, escaped single, start single)
```

### Conditionals

```bash
# POSIX test (portable)
if [ -f /etc/passwd ]; then
    echo "File exists"
fi

# Bash test (recommended in bash scripts)
if [[ -f /etc/passwd ]]; then
    echo "File exists"
fi

# Pattern matching in [[ ]]
if [[ "$FILE" == *.conf ]]; then
    echo "Configuration file"
fi

# Regex matching in [[ ]]
if [[ "$STRING" =~ ^[0-9]+$ ]]; then
    echo "All digits"
fi

# Arithmetic comparison
if (( $# > 2 )); then
    echo "Too many arguments"
fi

# File test operators
[ -e file ]    # exists
[ -f file ]    # exists and is regular file
[ -d dir ]     # exists and is directory
[ -r file ]    # readable
[ -w file ]    # writable
[ -x file ]    # executable
[ -s file ]    # exists and has size > 0
[ -L link ]    # symbolic link
[ file1 -nt file2 ]  # file1 is newer than file2
[ file1 -ot file2 ]  # file1 is older than file2
```

### Loops

```bash
# For loop over words
for file in *.log; do
    echo "Processing: $file"
done

# C-style for loop (bash)
for ((i = 0; i < 10; i++)); do
    echo "Iteration $i"
done

# While loop
while read -r line; do
    echo "Line: $line"
done < /etc/hosts

# Until loop
until ping -c 1 -W 1 host.example.com &> /dev/null; do
    echo "Waiting for host..."
    sleep 1
done

# Select loop (interactive menu)
select option in "Start" "Stop" "Restart" "Quit"; do
    case $option in
        Start)   systemctl start service ;;
        Stop)    systemctl stop service ;;
        Restart) systemctl restart service ;;
        Quit)    break ;;
    esac
done
```

### Functions

```bash
# Basic function
deploy() {
    local env="${1:-production}"
    local version="${2:-latest}"

    echo "Deploying version $version to $env"

    if [[ "$env" == "production" ]]; then
        echo "Running pre-deploy checks..."
    fi

    return 0
}

# Function with local variables (bash)
calculate() {
    local -i a="$1"
    local -i b="$2"
    echo $((a + b))
}

result=$(calculate 3 7)
echo "Result: $result"
```

### `set` Options for Script Safety

```bash
#!/usr/bin/env bash
set -euo pipefail

# -e: Exit immediately if any command fails (ERR trap)
# -u: Treat unset variables as errors
# -o pipefail: Pipeline fails if ANY command in it fails
#     (without this, only the last command's exit status matters)
```

:::warning

`set -e` has subtle interactions with commands in `if` conditions, `&&`/`||` chains, and subshells.
It does not fire for commands whose exit status is tested (e.g., `if ! command; then`). If you need
fine-grained error handling, use explicit error checking with `$?` or `trap`.

:::

### Trap — Signal Handling in Scripts

```bash
#!/usr/bin/env bash
set -euo pipefail

cleanup() {
    local exit_code=$?
    echo "Cleaning up... (exit code: $exit_code)"
    rm -rf "$TMPDIR"
    exit $exit_code
}

trap cleanup EXIT
trap 'echo "Received SIGINT"; exit 130' INT
trap 'echo "Received SIGTERM"; exit 143' TERM

TMPDIR=$(mktemp -d)
echo "Working in $TMPDIR"

# Script body...
```

### Command Substitution

```bash
# POSIX form (preferred)
files=$(find /etc -name "*.conf" -type f)
count=$(wc -l < /etc/passwd)

# Legacy form (avoid — nesting is painful)
files=`find /etc -name "*.conf" -type f`

# Nested substitution
base_dir=$(basename $(dirname $(realpath $0)))

# Mapfile — read command output into an array (bash 4.0+)
mapfile -t lines < <(ps aux)
echo "First line: ${lines[0]}"
echo "Total lines: ${#lines[@]}"
```

## Common Pitfalls

### Pitfall: Word Splitting on Filenames with Spaces

```bash
# WRONG — word splitting breaks on spaces
for file in $(ls *.txt); do
    rm "$file"
done

# CORRECT — glob expansion preserves spaces within each match
for file in *.txt; do
    rm "$file"
done
```

### Pitfall: Quoting `$@` vs `$*`

```bash
# $* expands to a single word: "a b c"
# $@ expands to separate words: "a" "b" "c"

# Always quote $@ when forwarding arguments
run_all() {
    for arg in "$@"; do
        process "$arg"
    done
}
```

### Pitfall: `set -e` and Pipelines

```bash
#!/bin/bash
set -e

# This will NOT cause the script to exit:
false | true

# Because only the last command's exit status matters.
# Fix: set -o pipefail
set -o pipefail
false | true  # NOW the script exits
```

### Pitfall: Forgetting `--` in Argument Parsing

```bash
# If $1 starts with a dash, it gets interpreted as an option
rm $1            # DANGEROUS if $1 is "-rf /"

# Always use -- to signal end of options
rm -- "$1"
```

### Pitfall: `cd` Without Error Checking

```bash
#!/bin/bash
cd /some/path
# If the directory does not exist, the script continues in the wrong directory!

# Fix:
cd /some/path || exit 1

# Or with set -e:
set -e
cd /some/path  # exits immediately on failure
```

### Pitfall: Reading Lines with `for`

```bash
# WRONG — for reads words, not lines
for line in $(cat file.txt); do
    echo "$line"
done

# CORRECT — while read processes line by line
while IFS= read -r line; do
    echo "$line"
done < file.txt

# Also handle the last line without trailing newline
while IFS= read -r line || [[ -n "$line" ]]; do
    echo "$line"
done < file.txt
```

### Pitfall: `#!/bin/sh` with Bash Features

Scripts using `[[`, arrays, `(( ))`, or `local` must use `#!/bin/bash`. On Debian/Ubuntu, `/bin/sh`
is `dash`, which does not support these. The script will fail with syntax errors that are hard to
diagnose because the error messages come from dash, not bash.

### Pitfall: Unquoted Variable Expansion in `[ ]`

```bash
# WRONG — if $VAR is empty, this becomes [ -f  ], which is true
[ -f $VAR ]

# CORRECT — handles empty variables correctly
[ -f "$VAR" ]

# BEST — use [[ ]] which has no word splitting
[[ -f $VAR ]]
```

### Pitfall: Here-Documents with Leading Whitespace

```bash
# WRONG — leading tabs are preserved in the output
cat << EOF
    indented text
EOF

# CORRECT — <<- strips leading tabs (only tabs, not spaces)
cat <<- EOF
    indented text (tabs stripped)
EOF

# CORRECT — use IFS to strip whitespace
while IFS=$'\t' read -r line; do
    echo "${line#"${line%%[![:space:]]*}"}"
done <<- EOF
$(command_with_indented_output)
EOF
```

### Pitfall: `echo` Portability

`echo` behavior varies between implementations. The `-e` flag (interpret escape sequences) is
supported by bash's built-in `echo` but not by the POSIX `echo` from `/bin/echo` on some systems.
The `-n` flag (suppress trailing newline) is also non-portable.

```bash
# Use printf instead — it is POSIX and consistent
printf '%s\n' "hello world"
printf '%-20s %5d\n' "filename" 42
printf 'Error: %s (code %d)\n' "$msg" "$code"
```

`printf` interprets C-style format specifiers (`%s`, `%d`, `%f`, `%x`, `%o`) and is the recommended
way to produce formatted output in shell scripts.
