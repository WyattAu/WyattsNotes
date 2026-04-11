---
id: bash-scripting
title: Bash Scripting
description:
  Bash scripting — control flow, functions, arrays, string manipulation, debugging, and best
  practices.
slug: bash-scripting
sidebar_position: 4
---

## Conditional Expressions

### if / elif / else / fi

```bash
if [[ condition ]]; then
    commands
elif [[ condition ]]; then
    commands
else
    commands
fi
```

### test / [ / [[

Three test constructs exist, with important differences:

| Feature             | `[ ]` (POSIX test) | `[[ ]]` (bash)      |
| ------------------- | ------------------ | ------------------- |
| Word splitting      | Yes (quote vars)   | No                  |
| Glob expansion      | Yes                | No                  |
| Pattern matching    | No                 | Yes (`==`, `!=`)    |
| Regex matching      | No                 | Yes (`=~`)          |
| Logical operators   | `-a`, `-o`         | `&&`, `\|\|`        |
| Empty string safety | Requires quoting   | Safe without quotes |

```bash
# POSIX test — requires quoting
[ -f "$file" ] && echo "exists"
[ "$var" = "value" ]
[ "$n" -eq 5 ]

# Bash test — no quoting required for most cases
[[ -f $file ]] && echo "exists"
[[ $var == "value" ]]
[[ $n -eq 5 ]]

# Pattern matching with [[ ]]
if [[ $filename == *.log ]]; then
    echo "Log file"
fi

# Regex matching with [[ ]]
if [[ $ip =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$ ]]; then
    echo "Valid IPv4 format"
fi
```

:::warning

The regex in `[[ =~ ]]` is unquoted on the right side. If you quote it, it becomes a literal string.
Always store regex in a variable if it contains spaces or special characters:

```bash
re='^user_[0-9]+$'
if [[ $input =~ $re ]]; then echo "match"; fi
```

:::

### File Test Operators

```bash
[ -e file ]       exists (any type)
[ -f file ]       regular file
[ -d dir ]        directory
[ -L link ]       symbolic link
[ -b file ]       block device
[ -c file ]       character device
[ -p file ]       named pipe
[ -S file ]       socket
[ -r file ]       readable by effective UID
[ -w file ]       writable by effective UID
[ -x file ]       executable by effective UID
[ -s file ]       file exists and has size greater than zero
[ -t fd ]         fd is open and refers to a terminal
[ file1 -nt file2 ]   file1 is newer than file2 (modification time)
[ file1 -ot file2 ]   file1 is older than file2
[ file1 -ef file2 ]   file1 and file2 have the same device and inode numbers
```

### String Tests

```bash
[[ -z $str ]]    string is empty (zero length)
[[ -n $str ]]    string is not empty
[[ $a == $b ]]   strings are equal
[[ $a != $b ]]   strings are not equal
[[ $a < $b ]]    lexicographic comparison (use &lt; in code context)
[[ $a > $b ]]    lexicographic comparison
```

### Arithmetic Comparison

```bash
# Inside (( )) — no dollar sign needed for variables
(( x == 5 ))
(( x != 5 ))
(( x > 5 ))
(( x >= 5 ))
(( x < 5 ))
(( x <= 5 ))

# Compound arithmetic
(( x > 0 && x < 100 ))
(( x == 5 || x == 10 ))

# Arithmetic context
if (( $# > 2 )); then
    echo "Usage: $0 arg1 arg2"
    exit 1
fi
```

### case / esac

```bash
case "$1" in
    start)
        echo "Starting service"
        ;;
    stop)
        echo "Stopping service"
        ;;
    restart)
        echo "Restarting service"
        ;;
    status)
        systemctl status myservice
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac

# Pattern matching in case
case "$filename" in
    *.tar.gz|*.tgz)  echo "gzip tarball" ;;
    *.tar.bz2|*.tbz2) echo "bzip2 tarball" ;;
    *.zip)            echo "zip archive" ;;
    *)                echo "unknown format" ;;
esac
```

## Loops

### for Loop

```bash
# Over a list of words
for pkg in nginx postgresql redis; do
    apt-get install -y "$pkg"
done

# Over glob expansion
for file in /var/log/*.log; do
    gzip "$file"
done

# Over an array
servers=("web1" "web2" "db1")
for server in "${servers[@]}"; do
    ssh "$server" "uptime"
done

# C-style for loop
for ((i = 0; i < 10; i++)); do
    echo "Iteration $i"
done

# Over command output (use mapfile instead)
while IFS= read -r line; do
    echo "Processing: $line"
done < <(find /etc -name "*.conf" -type f)

# Over a range
for i in {1..100}; do
    echo "$i"
done

# Over a range with step
for i in {0..100..5}; do
    echo "$i"
done
```

### while Loop

```bash
# Standard while
count=0
while (( count < 10 )); do
    echo "$count"
    (( count++ ))
done

# Read lines from a file
while IFS= read -r line; do
    printf '%s\n' "$line"
done < input.txt

# Read lines handling files without trailing newline
while IFS= read -r line || [[ -n "$line" ]]; do
    printf '%s\n' "$line"
done < input.txt

# Read fields from a file (CSV-like)
while IFS=, read -r name age city; do
    printf 'Name: %s, Age: %s, City: %s\n' "$name" "$age" "$city"
done < data.csv

# Infinite loop with break condition
while true; do
    response=$(curl -s -o /dev/null -w '%{http_code}' "$URL")
    if (( response == 200 )); then
        echo "Service is up"
        break
    fi
    sleep 5
done
```

### until Loop

```bash
# Runs until condition is true (inverse of while)
until pgrep -x "mysqld" > /dev/null; do
    echo "Waiting for MySQL..."
    sleep 2
done
echo "MySQL is running"
```

### break and continue

```bash
for file in *.log; do
    size=$(stat -c%s "$file")
    if (( size > 104857600 )); then
        echo "Skipping large file: $file"
        continue
    fi
    if [[ "$file" == "critical.log" ]]; then
        echo "Found critical log, stopping"
        break
    fi
    echo "Processing $file ($size bytes)"
done
```

### select Loop

```bash
PS3="Select an option: "
select action in "Start" "Stop" "Restart" "Status" "Quit"; do
    case $action in
        Start)   systemctl start nginx ;;
        Stop)    systemctl stop nginx ;;
        Restart) systemctl restart nginx ;;
        Status)  systemctl status nginx ;;
        Quit)    break ;;
        *)       echo "Invalid option" ;;
    esac
done
```

## Functions

### Function Definition

```bash
# Preferred syntax
deploy() {
    local env="${1:-production}"
    local version="${2:-latest}"

    echo "Deploying $version to $env"
    return 0
}

# Alternative syntax (legacy)
function deploy {
    echo "Deploying"
}
```

### Local Variables

```bash
calculate() {
    local -i a="$1"
    local -i b="$2"
    local -i result

    result=$((a + b))
    echo "$result"
}
```

:::warning

Variables in bash functions are global by default. Always use `local` to avoid polluting the calling
scope. This is one of the most common sources of bash script bugs.

:::

### Return Codes

```bash
check_service() {
    if systemctl is-active --quiet "$1"; then
        return 0
    else
        return 1
    fi
}

if check_service nginx; then
    echo "nginx is running"
else
    echo "nginx is not running"
fi

# Capture return code explicitly
check_service postgresql
rc=$?
if (( rc != 0 )); then
    echo "PostgreSQL check failed with code $rc"
fi
```

### Positional Parameters in Functions

```bash
process_args() {
    echo "Function name: ${FUNCNAME[0]}"
    echo "Number of args: $#"
    echo "All args: $*"
    echo "All args (quoted): $@"
    echo "First: $1, Second: $2"
}

# Shift within functions
parse() {
    local flag=""
    local value=""

    while (( $# > 0 )); do
        case "$1" in
            -f|--flag)
                flag="$2"
                shift 2
                ;;
            -v|--value)
                value="$2"
                shift 2
                ;;
            --)
                shift
                break
                ;;
            *)
                echo "Unknown option: $1"
                return 1
                ;;
        esac
    done

    echo "flag=$flag, value=$value, remaining: $*"
}
```

### Recursive Functions

```bash
# Factorial
factorial() {
    local n="$1"
    if (( n <= 1 )); then
        echo 1
    else
        local prev
        prev=$(factorial $((n - 1)))
        echo $((n * prev))
    fi
}

# Walk directory tree
walk_dir() {
    local dir="$1"
    local indent="${2:-0}"

    for entry in "$dir"/*; do
        if [[ -d "$entry" ]]; then
            printf '%*s%s/\n' "$indent" "" "$(basename "$entry")"
            walk_dir "$entry" $((indent + 2))
        elif [[ -f "$entry" ]]; then
            printf '%*s%s\n' "$indent" "" "$(basename "$entry")"
        fi
    done
}
```

## Arrays

### Indexed Arrays

```bash
# Declaration
declare -a servers
servers=("web1.example.com" "web2.example.com" "db1.example.com")

# Append
servers+=("cache1.example.com")

# Access elements
echo "${servers[0]}"       # first element
echo "${servers[-1]}"      # last element (bash 4.3+)
echo "${servers[@]}"       # all elements as separate words
echo "${servers[*]}"       # all elements as single word
echo "${#servers[@]}"      # number of elements

# Slice
echo "${servers[@]:1:2}"   # elements 1 and 2

# Iterate
for server in "${servers[@]}"; do
    ping -c 1 -W 1 "$server" &> /dev/null && echo "$server: up"
done

# Iterate with index
for i in "${!servers[@]}"; do
    echo "[$i] = ${servers[$i]}"
done

# Remove element
unset 'servers[2]'
```

### Associative Arrays (bash 4.0+)

```bash
# Declaration (must use declare -A)
declare -A services

# Assignment
services=(
    [web]=nginx
    [db]=postgresql
    [cache]=redis
    [queue]=rabbitmq
)

# Access
echo "${services[web]}"         # nginx
echo "${!services[@]}"          # all keys
echo "${services[@]}"           # all values
echo "${#services[@]}"          # number of entries

# Check if key exists
if [[ -v services[web] ]]; then
    echo "web service defined"
fi

# Iterate
for key in "${!services[@]}"; do
    echo "$key: ${services[$key]}"
done

# Delete
unset 'services[queue]'
```

### Array Operations

```bash
arr=(apple banana cherry date elderberry fig)

# Sort array
IFS=$'\n' sorted=($(sort <<< "${arr[*]}")); unset IFS

# Remove duplicates
IFS=$'\n' unique=($(echo "${arr[@]}" | tr ' ' '\n' | sort -u)); unset IFS

# Find element
if [[ " ${arr[*]} " == *" cherry "* ]]; then
    echo "Found cherry"
fi

# Array from command output
mapfile -t files < <(find /etc -name "*.conf" -type f)

# Array from string (split on delimiter)
IFS=',' read -r -a parts <<< "one,two,three,four"

# Join array into string
IFS=','; joined="${parts[*]}"; unset IFS
```

## String Manipulation

### Parameter Expansion

```bash
str="Hello, World!"

# Length
echo "${#str}"                    # 13

# Substring
echo "${str:0:5}"                 # Hello (offset 0, length 5)
echo "${str:7}"                   # World! (from offset 7 to end)
echo "${str: -6}"                 # orld!  (last 6 characters, space before - is required)
echo "${str:(-6)}"                # orld!  (alternative syntax)

# Remove prefix
file="/path/to/file.txt"
echo "${file##*/}"               # file.txt (longest match — basename)
echo "${file#*/}"                # path/to/file.txt (shortest match)

# Remove suffix
echo "${file%/*}"                # /path/to (shortest — dirname)
echo "${file%%/*}"               # (empty — longest match)

# Replace
str="foo bar foo baz foo"
echo "${str/foo/QUX}"            # QUX bar foo baz foo (first)
echo "${str//foo/QUX}"           # QUX bar QUX baz QUX (all)
echo "${str/#foo/QUX}"           # QUX bar foo baz foo (start)
echo "${str/%foo/QUX}"           # foo bar foo baz QUX (end)
```

### Case Conversion (bash 4.0+)

```bash
str="Hello World"
echo "${str^^}"          # HELLO WORLD (all uppercase)
echo "${str,,}"          # hello world (all lowercase)
echo "${str^}"           # Hello world (first character uppercase)
echo "${str,}"           # hello World (first character lowercase)

# Convert specific characters
str="hello world"
echo "${str^^[el]}"      # hELLo worLd (uppercase e and l)
```

### Default Values and Error Handling

```bash
# Default value (does not assign)
echo "${name:-unknown}"       # prints "unknown" if name is unset or null

# Assign default value
echo "${name:=unknown}"       # sets name="unknown" if unset or null, then prints

# Alternative value (use if set)
echo "${name:+set}"           # prints "set" if name is set and non-null

# Error if unset
: "${config_file:?Error: config_file must be set}"   # exits with error if unset
```

### String Tests

```bash
str="hello"
[[ -z $str ]]     && echo "empty"
[[ -n $str ]]     && echo "not empty"
[[ $str == "hello" ]]  && echo "equal"
[[ $str != "world" ]]  && echo "not equal"
```

## Input and Output

### read

```bash
# Read a line
read -r line

# Read into multiple variables
read -r name age city <<< "Alice 30 NYC"

# Read with prompt
read -r -p "Enter hostname: " hostname

# Read password (no echo)
read -r -s -p "Enter password: " password
echo

# Read with timeout
read -r -t 10 -p "Continue? [y/N] " answer

# Read N characters
read -r -n 1 -p "Press any key..." key

# Read array
read -r -a fields <<< "one two three four"
echo "${fields[2]}"   # three

# Read from file descriptor
exec 3< input.txt
while IFS= read -r -u 3 line; do
    echo "$line"
done
exec 3<&-
```

### printf

```bash
# Format specifiers
printf '%s\n' "hello"            # string
printf '%d\n' 42                 # integer
printf '%f\n' 3.14               # float
printf '%x\n' 255                # hexadecimal
printf '%o\n' 8                  # octal
printf '%05d\n' 42               # zero-padded integer: 00042
printf '%-20s|\n' "left"         # left-aligned in 20-char field
printf '%20s|\n' "right"         # right-aligned in 20-char field
printf '%.2f\n' 3.14159          # 2 decimal places: 3.14

# Write to stderr
printf 'Error: %s\n' "$message" >&2

# Write to variable
printf -v result '%s-%s' "$part1" "$part2"
```

### Here-Documents and Here-Strings

```bash
# Here-document
cat << 'EOF'
ServerAdmin admin@example.com
DocumentRoot /var/www/html
ErrorLog ${APACHE_LOG_DIR}/error.log
EOF

# Here-document with variable expansion
cat << EOF
Deploying version ${VERSION:-latest} to ${ENV:-production}
Timestamp: $(date -Iseconds)
EOF

# Here-document with tab stripping (<<-)
if true; then
    cat <<- EOF
		Indented content (leading tabs stripped)
		Second line
	EOF
fi

# Here-string
grep "error" <<< "this has an error in it"
base64 <<< "hello world"
wc -w <<< "count these words"
```

### Process Substitution

```bash
# Compare output of two commands
diff <(sort file1.txt) <(sort file2.txt)

# Feed command output to a command expecting a file
wc -l <(find /etc -type f)

# Tee to multiple processes
command > >(grep error >> errors.log) 2> >(grep warning >> warnings.log)

# Process substitution with read
while IFS= read -r line; do
    echo "$line"
done < <(journalctl -u nginx --no-pager)
```

## Debugging

### set Options

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# -e: Exit immediately if a command exits with non-zero status
# -u: Treat unset variables as an error
# -o pipefail: Pipeline return code is the rightmost non-zero exit code
# IFS: Prevents word-splitting on spaces
```

### set -e Interactions

```bash
# set -e does NOT exit for:
# 1. Commands in if conditions
if false; then
    echo "never runs"
fi
echo "script continues"  # this runs despite false returning 1

# 2. Commands in && / || chains
false || echo "handled"   # script continues

# 3. Commands in subshells on the left of && or ||
false && echo "never runs"
echo "script continues"

# 4. Commands whose return code is negated
! false
echo "script continues"
```

### Verbose Mode

```bash
#!/usr/bin/env bash
set -x   # print every command before execution (including expansions)
set +x   # turn off verbose mode

# Debug only a specific section
set -x
complex_command --with --many --args
set +x
```

### trap

```bash
cleanup() {
    local exit_code=$?
    echo "Cleaning up temporary files..."
    rm -rf "${TMPDIR:-/tmp/script_work}"
    exit "$exit_code"
}

trap cleanup EXIT
trap 'echo "Interrupted by SIGINT"; exit 130' INT
trap 'echo "Terminated by SIGTERM"; exit 143' TERM
trap 'echo "Error on line $LINENO"; exit 1' ERR
```

### ERR Trap

```bash
#!/usr/bin/env bash
set -e

trap 'echo "ERROR: line $LINENO, command: $BASH_COMMAND, exit: $?"' ERR

# This will trigger the ERR trap
false
```

:::warning

The `ERR` trap fires on every non-zero exit status when `set -e` is active. In pipelines with
`pipefail`, the trap fires for the failing command, not the pipeline as a whole. Avoid relying on
`ERR` trap in complex pipelines — explicit error checking is more reliable.

:::

## Signal Handling

### Trapping Signals

```bash
#!/usr/bin/env bash

pid_file="/var/run/myscript.pid"
temp_dir=""

cleanup() {
    local exit_code=$?
    echo "Caught signal, cleaning up..."
    [[ -n "$temp_dir" ]] && rm -rf "$temp_dir"
    [[ -f "$pid_file" ]] && rm -f "$pid_file"
    exit "$exit_code"
}

trap cleanup EXIT INT TERM HUP QUIT

# Write PID file
echo $$ > "$pid_file"

# Create temp directory
temp_dir=$(mktemp -d)

# Main work
while true; do
    echo "Working..."
    sleep 1
done
```

### Signal Reference

| Signal  | Number | Description             | Default Action |
| ------- | ------ | ----------------------- | -------------- |
| SIGHUP  | 1      | Terminal hangup         | Terminate      |
| SIGINT  | 2      | Interrupt (Ctrl+C)      | Terminate      |
| SIGQUIT | 3      | Quit (Ctrl+\)           | Core dump      |
| SIGKILL | 9      | Kill (cannot be caught) | Terminate      |
| SIGTERM | 15     | Termination signal      | Terminate      |
| SIGUSR1 | 10     | User-defined signal 1   | Terminate      |
| SIGUSR2 | 12     | User-defined signal 2   | Terminate      |
| SIGPIPE | 13     | Broken pipe             | Terminate      |
| SIGSTOP | 19     | Stop (cannot be caught) | Stop           |
| SIGTSTP | 20     | Stop (Ctrl+Z)           | Stop           |

```bash
# List all signals
kill -l

# Send a signal
kill -TERM 12345
kill -s SIGTERM 12345
kill -9 12345    # SIGKILL — cannot be caught, blocked, or ignored
```

## Best Practices

### Shellcheck

```bash
# Install
apt-get install shellcheck   # Debian/Ubuntu
dnf install ShellCheck       # Fedora/RHEL
brew install shellcheck      # macOS

# Run
shellcheck script.sh
shellcheck -x script.sh      # follow sourced files

# Ignore specific warnings
# shellcheck disable=SC2086
echo "$VAR"
```

Common shellcheck warnings and fixes:

| Code   | Issue                                    | Fix                               |
| ------ | ---------------------------------------- | --------------------------------- |
| SC2086 | Double-quote to prevent globbing         | `"$VAR"` instead of `$VAR`        |
| SC2004 | `$/${} is unnecessary on arithmetic vars | `((count++))` instead of `$count` |
| SC2181 | Check exit code directly                 | `if mycmd;` instead of `if $?`    |
| SC2034 | Variable appears unused                  | Remove or use the variable        |
| SC2155 | Declare and assign separately            | Split `local a=$(cmd)` into two   |
| SC1091 | Not following sourced file               | Add `# shellcheck source=...`     |

### Quoting

```bash
# Always quote variable expansions
"$var"          # correct
"$@"            # correct — preserves argument boundaries
"${arr[@]}"     # correct for arrays
"${!arr[@]}"    # correct for array keys

# Quote everything unless you explicitly want word splitting or globbing
cp "$src" "$dst"
rm -f -- "${files[@]}"
mkdir -p "$dir"
```

### Error Handling Pattern

```bash
#!/usr/bin/env bash
set -euo pipefail

log()  { printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >&2; }
die()  { log "FATAL: $*"; exit 1; }

main() {
    log "Starting deployment"
    validate_config || die "Invalid configuration"
    run_tests       || die "Tests failed"
    deploy          || die "Deployment failed"
    log "Deployment complete"
}

validate_config() {
    [[ -f config.yaml ]] || return 1
    return 0
}

run_tests() {
    pytest -q || return 1
}

deploy() {
    kubectl apply -f manifests/ || return 1
}

main "$@"
```

### Portable sh vs Bash

```bash
# POSIX sh compatible — maximum portability
#!/bin/sh
# Use [ ] not [[ ]]
# No arrays, no associative arrays
# No process substitution
# No =~ regex
# No ${var^^} case conversion
# Use printf not echo -e
# Use $(cmd) not `cmd`

# Bash — when you know the target has bash
#!/usr/bin/env bash
# Can use [[ ]], (( )), arrays, process substitution
# Use bash 4.0+ features only when target is guaranteed
# Alpine Linux has bash 5.x by default
# Ubuntu ships bash 5.x
# macOS ships bash 3.2 (old license) — avoid bash 4+ features for macOS
```

## Common Patterns

### Argument Parsing

```bash
#!/usr/bin/env bash
set -euo pipefail

usage() {
    cat << 'USAGE'
Usage: deploy.sh [OPTIONS]

Options:
    -e, --env ENV       Deployment environment (default: staging)
    -v, --version VER   Version to deploy (default: latest)
    -d, --dry-run       Show what would be deployed
    -h, --help          Show this help message
USAGE
}

env="staging"
version="latest"
dry_run=false

while (( $# > 0 )); do
    case "$1" in
        -e|--env)      env="$2"; shift 2 ;;
        -v|--version)  version="$2"; shift 2 ;;
        -d|--dry-run)  dry_run=true; shift ;;
        -h|--help)     usage; exit 0 ;;
        --)            shift; break ;;
        *)             echo "Unknown option: $1"; usage; exit 1 ;;
    esac
done

echo "Environment: $env"
echo "Version: $version"
echo "Dry run: $dry_run"
echo "Remaining args: $*"
```

### Configuration Files

```bash
#!/usr/bin/env bash
set -euo pipefail

CONFIG_FILE="${XDG_CONFIG_HOME:-$HOME/.config}/myscript/config"

# Load config with defaults
declare -A CONFIG
CONFIG=(
    [log_level]="info"
    [max_retries]="3"
    [timeout]="30"
    [output_dir]="/var/log/myscript"
)

if [[ -f "$CONFIG_FILE" ]]; then
    while IFS='=' read -r key value; do
        [[ "$key" =~ ^[[:space:]]*# ]] && continue   # skip comments
        [[ -z "$key" ]] && continue                    # skip blank lines
        key="${key%%#*}"                               # strip inline comments
        key="${key%"${key##*[![:space:]]}"}"           # trim trailing whitespace
        value="${value#"${value%%[![:space:]]*}"}"     # trim leading whitespace
        CONFIG["$key"]="$value"
    done < "$CONFIG_FILE"
fi

for key in "${!CONFIG[@]}"; do
    printf 'CONFIG[%s] = %s\n' "$key" "${CONFIG[$key]}"
done
```

### Logging

```bash
#!/usr/bin/env bash

LOG_LEVEL="${LOG_LEVEL:-INFO}"
declare -A LEVELS=([DEBUG]=0 [INFO]=1 [WARN]=2 [ERROR]=3 [FATAL]=4)

log() {
    local level="$1"
    shift
    (( LEVELS[$level] >= LEVELS[$LOG_LEVEL] )) || return 0
    printf '[%s] [%-5s] %s\n' "$(date '+%Y-%m-%dT%H:%M:%S%z')" "$level" "$*" >&2
}

log_debug() { log DEBUG "$@"; }
log_info()  { log INFO "$@"; }
log_warn()  { log WARN "$@"; }
log_error() { log ERROR "$@"; }
log_fatal() { log FATAL "$@"; exit 1; }

log_info "Starting process"
log_debug "Variable value: $variable"
log_warn "Retrying operation (attempt $attempt/$max_retries)"
log_error "Failed to connect to $host:$port"
log_fatal "Configuration file not found: $config_path"
```

### Temporary Files

```bash
#!/usr/bin/env bash
set -euo pipefail

tmp_dir=""
tmp_files=()

cleanup() {
    for f in "${tmp_files[@]:-}"; do
        rm -f "$f" 2>/dev/null
    done
    if [[ -n "$tmp_dir" ]]; then
        rm -rf "$tmp_dir"
    fi
}
trap cleanup EXIT

# Create a single temp file
tmp_file=$(mktemp /tmp/script.XXXXXX)
tmp_files+=("$tmp_file")

# Create a temp directory
tmp_dir=$(mktemp -d /tmp/script.XXXXXX)

# Use temp directory safely
echo "data" > "$tmp_dir/input.txt"
process < "$tmp_dir/input.txt" > "$tmp_dir/output.txt"
result=$(cat "$tmp_dir/output.txt")
```

## Common Pitfalls

### Pitfall: Forgetting Quotes in Array Expansion

```bash
arr=("file with spaces.txt" "another file.txt")

# WRONG — word splitting on spaces
for f in ${arr[@]}; do
    echo "$f"
done

# CORRECT — preserves array element boundaries
for f in "${arr[@]}"; do
    echo "$f"
done
```

### Pitfall: set -e with Functions That Return Non-Zero

```bash
#!/usr/bin/env bash
set -e

# This function returns non-zero as part of normal logic
is_installed() {
    dpkg -l "$1" &>/dev/null
}

# WRONG — script exits if package is not installed
is_installed nginx

# CORRECT — handle the return code explicitly
if is_installed nginx; then
    echo "nginx is installed"
else
    echo "nginx is not installed"
fi

# CORRECT — or use || true
is_installed nginx || echo "nginx not installed"
```

### Pitfall: Local Variable Scope with command substitution

```bash
# WRONG — SC2155: declare and assign separately
function bad() {
    local result=$(some_command)
}

# CORRECT
function good() {
    local result
    result=$(some_command)
}
```

### Pitfall: Bash 3.2 on macOS

```bash
# These do NOT work on macOS bash 3.2:
declare -A assoc_array    # associative arrays need bash 4.0+
${var^^}                 # case conversion needs bash 4.0+
${var:offset:length}     # works in bash 3.2
read -a arr              # works in bash 3.2
mapfile -t arr < <(cmd)  # mapfile needs bash 4.0+

# For macOS portability, use POSIX constructs or install bash via Homebrew
brew install bash
/usr/local/bin/bash --version   # bash 5.x
```

### Pitfall: Subshell Variable Scope

```bash
result=""

# WRONG — pipe creates a subshell, variables don't propagate
echo "hello" | read result
echo "$result"    # empty!

# CORRECT — use process substitution
read result < <(echo "hello")
echo "$result"    # hello

# CORRECT — use here-string
read result <<< "hello"
echo "$result"    # hello

# CORRECT — use lastpipe (requires job control disabled)
shopt -s lastpipe
echo "hello" | read result
echo "$result"    # hello (only works in non-interactive shell or with set +m)
```

### Pitfall: Globbing in Variable Assignment

```bash
files="*.txt"

# WRONG — variable expands, then glob matches files
ls $files    # expands to ls *.txt, then globs

# CORRECT — quote to prevent globbing
ls "$files"  # passes literal "*.txt" to ls

# CORRECT — use an array to store globs
files=(*.txt)
ls "${files[@]}"
```
