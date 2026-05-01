---
id: text-processing
title: Text Processing
description:
  Text Processing — Regular Expressions; BRE vs ERE vs PCRE; Character Classes
  and Anchors; Quantifiers with worked examples and exam-style questions.
slug: text-processing
sidebar_position: 3
---

## Regular Expressions

Regular expressions are the backbone of text processing on Linux. Three major flavors exist, each
with different capabilities and syntax.

### BRE vs ERE vs PCRE

| Flavor | Engine          | Activator            | Metacharacters Require Escape | Lookaround  |
| ------ | --------------- | -------------------- | ----------------------------- | ----------- | --- |
| BRE    | POSIX `grep`    | Default              | `+`, `?`, `{`, `              | `, `(`, `)` | No  |
| ERE    | POSIX `grep -E` | `grep -E`, `egrep`   | None                          | No          |
| PCRE   | Perl-compatible | `grep -P`, `ripgrep` | None                          | Yes         |

```text
BRE:  \{1,3\}    \+    \?    \(group\)
ERE:  {1,3}      +     ?     (group)
PCRE: {1,3}      +     ?     (group) + lookaround + backreferences + named groups
```

### Character Classes and Anchors

```text
Character Classes:
  [abc]        any of a, b, c
  [a-z]        lowercase letters
  [^0-9]       NOT a digit
  [[:alpha:]]  POSIX class — any letter
  [[:digit:]]  POSIX class — any digit
  [[:alnum:]]  letters or digits
  [[:space:]]  whitespace
  [[:upper:]]  uppercase letters
  [[:lower:]]  lowercase letters

Anchors:
  ^            start of line (or start of string in multiline mode)
  $            end of line
  \b           word boundary
  \B           non-word boundary
  \<           start of word (GNU extension)
  \>           end of word (GNU extension)
```

### Quantifiers

```text
Greedy (match as much as possible):
  *            zero or more
  +            one or more
  ?            zero or one
  {n}          exactly n
  {n,}         n or more
  {n,m}        between n and m

Lazy (match as little as possible — PCRE only):
  *?           zero or more (lazy)
  +?           one or more (lazy)
  ??           zero or one (lazy)
```

### Lookahead and Lookbehind (PCRE)

```bash
# Positive lookahead — match "foo" only when followed by "bar"
grep -P 'foo(?=bar)' file.txt

# Negative lookahead — match "foo" only when NOT followed by "bar"
grep -P 'foo(?!bar)' file.txt

# Positive lookbehind — match "bar" only when preceded by "foo"
grep -P '(?<=foo)bar' file.txt

# Negative lookbehind — match "bar" only when NOT preceded by "foo"
grep -P '(?<!foo)bar' file.txt
```

### Practical Regex Patterns

```bash
# IPv4 address
grep -P '(\d{1,3}\.){3}\d{1,3}' file.txt

# Email address (basic)
grep -P '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' file.txt

# MAC address
grep -P '([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}' file.txt

# UUID
grep -P '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}' file.txt

# ISO 8601 date
grep -P '\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:?\d{2})?)?' file.txt

# Semantic version
grep -P '\bv[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9.]+)?(\+[a-zA-Z0-9.]+)?\b' file.txt
```

## sed — Stream Editor

`sed` reads input line by line, applies editing commands, and writes output. It operates on a
**pattern space** (a working buffer holding the current line) and a **hold space** (a secondary
buffer for multi-line operations).

### Basic Substitution

```bash
# Replace first occurrence per line
sed 's/old/new/' file.txt

# Replace all occurrences per line
sed 's/old/new/g' file.txt

# Replace on lines matching a pattern
sed '/error/s/warning/ERROR/g' file.txt

# Replace on specific line numbers
sed '3s/foo/bar/' file.txt

# Replace from line 3 to 5
sed '3,5s/foo/bar/' file.txt

# Replace from line 3 to end
sed '3,$s/foo/bar/' file.txt
```

### Address Ranges

```bash
# Line numbers
sed -n '10,20p' file.txt        # print lines 10-20
sed '1d' file.txt               # delete first line
sed '$d' file.txt               # delete last line

# Pattern ranges
sed '/start/,/end/d' file.txt   # delete block between markers
sed '/ERROR/,+3d' file.txt      # delete ERROR line and 3 following lines

# Step ranges
sed '1~2d' file.txt             # delete every 2nd line (odd lines)
sed '0~3d' file.txt             # delete every 3rd line (lines 3, 6, 9...)

# Regex with flags
sed -n '/^#.*enabled/Ip' config  # case-insensitive, print matching
```

### Hold Space Operations

The hold space is a secondary buffer. It persists across lines, enabling multi-line transformations.

```bash
# Copy pattern space to hold space (h), append (H)
# Get hold space to pattern space (g), append (G)
# Exchange pattern and hold space (x)

# Reverse the order of lines in a file
sed '1!G;h;$!d' file.txt

# Join every two lines into one
sed 'N;s/\n/ /' file.txt

# Delete blank lines and join previous line with next
sed '/^$/N;/\n$/d' file.txt

# Double-space a file
sed G file.txt

# Print the line AFTER a pattern match
sed -n '/pattern/{n;p}' file.txt
```

### Branching and Flow Control

```bash
# Label and branch
sed '/start/b skip; s/foo/bar/; :skip' file.txt

# Conditional branch — skip substitution on comment lines
sed '/^#/b; s/enabled/disabled/' config

# Loop with t (branch if substitution was made)
# Remove all leading spaces (not tabs) — one at a time
sed ':loop; s/^ //; t loop' file.txt

# Infinite loop with break
sed ':top; s/  / /; t top' file.txt  # collapse multiple spaces to one
```

### sed Scripts

For complex operations, use a sed script file:

```bash
cat > edit.sed << 'EOF'
# Comment lines are ignored by sed
/^#/d
s/TODO/FIXME/g
1,10s/enabled/disabled/
/^Listen /s/80/8080/
$ a \
# End of processed file
EOF

sed -f edit.sed httpd.conf
```

### In-Place Editing

```bash
# Create backup with .bak extension
sed -i.bak 's/old/new/g' file.txt

# In-place without backup (dangerous — no recovery)
sed -i 's/old/new/g' file.txt

# Operate on multiple files
sed -i 's/192.168.1.100/10.0.0.1/g' /etc/hosts /etc/resolv.conf
```

:::warning

`sed -i` on symlinks will replace the symlink with a regular file containing the edited content. If
the original file was a symlink, the link is destroyed. Always use `sed -i.bak` in production
scripts to preserve recoverability.

:::

## awk — Pattern-Scanning Language

`awk` is a full programming language designed for processing columnar text data. The GNU
implementation (`gawk`) is standard on Linux.

### Program Structure

```bash
awk 'BEGIN { init } /pattern/ { action } END { cleanup }' file
```

- `BEGIN` block: runs before any input is read
- Pattern-action blocks: run for each matching line
- `END` block: runs after all input is processed

### Fields and Built-in Variables

```text
$0        entire line
$1, $2    first field, second field
$NF       last field
$(NF-1)   second-to-last field
NR        current record (line) number
FNR       current record number in current file
FS        field separator (default: whitespace)
OFS       output field separator (default: space)
RS        record separator (default: newline)
ORS       output record separator (default: newline)
FILENAME  name of current input file
NF        number of fields in current record
```

```bash
# Print specific fields
awk '{print $1, $3}' /etc/passwd

# Change field separator
awk -F: '{print $1, $7}' /etc/passwd
awk 'BEGIN{FS=":"; OFS="\t"} {print $1, $7}' /etc/passwd

# Print line number and last field
awk '{print NR, $NF}' data.txt

# Process multiple files, show which file each line comes from
awk '{print FILENAME, NR, $0}' file1.txt file2.txt
```

### awk Programming

```bash
# Sum a column
awk '{sum += $1} END {print "Total:", sum}' numbers.txt

# Average a column
awk '{sum += $1; count++} END {print "Average:", sum/count}' numbers.txt

# Conditional processing
awk '$3 > 100 {print $1, "HIGH"} $3 <= 100 {print $1, "NORMAL"}' data.txt

# BEGIN block for initialization
awk 'BEGIN {print "User\tShell"} {print $1 "\t" $7}' /etc/passwd

# Pattern matching
awk '/ERROR/ {count++} END {print "Errors:", count}' /var/log/syslog
awk '/^$/ {blank++} END {print "Blank lines:", blank}' file.txt

# Associative arrays
awk '{count[$1]++} END {for (word in count) print word, count[word]}' access.log
```

### awk Functions

```bash
# Built-in string functions
awk '{print length($0)}' file.txt           # string length
awk '{print toupper($1)}' file.txt           # uppercase
awk '{print tolower($1)}' file.txt           # lowercase
awk '{print substr($0, 1, 10)}' file.txt     # substring
awk '{print index($0, "error")}' file.txt    # find substring position
awk '{print split($0, a, ":"); for(i in a) print a[i]}' file.txt  # split into array
awk '{gsub(/old/, "new"); print}' file.txt   # global substitution
awk '{sub(/old/, "new"); print}' file.txt    # first substitution
awk '{print match($0, /[0-9]+/)}' file.txt   # regex match, returns position

# User-defined functions
awk '
function abs(x) { return x < 0 ? -x : x }
function max(a, b) { return a > b ? a : b }
{
    diff = $2 - $1
    printf "Values: %d, %d | Diff: %d | Abs: %d\n", $1, $2, diff, abs(diff)
}
' data.txt
```

### awk One-Liners vs Scripts

```bash
# One-liner: print fields 1 and 3, tab-separated
awk '{print $1 "\t" $3}' file.txt

# Equivalent script file
cat > process.awk << 'AWKSCRIPT'
BEGIN {
    FS = "\t"
    OFS = "\t"
    print "Column1", "Column3"
}
{
    print $1, $3
}
END {
    print NR, "records processed"
}
AWKSCRIPT

awk -f process.awk data.tsv
```

### Multi-Record Processing

```bash
# Process paragraphs (blank-line separated records)
awk 'BEGIN{RS=""; FS="\n"} {print NR, NF, $1}' document.txt

# Process CSV with quoted fields containing commas
awk -v FPAT='[^,]*|"[^"]*"' '{
    for(i=1; i<=NF; i++) {
        gsub(/"/, "", $i)
        print i": "$i
    }
}' data.csv
```

## grep Variants

### grep Family

```bash
# Basic grep (BRE)
grep 'pattern' file.txt

# Extended grep (ERE)
grep -E 'error|warning|critical' /var/log/syslog
egrep 'error|warning|critical' /var/log/syslog   # deprecated

# Fixed-string grep (no regex interpretation)
grep -F 'literal.string' file.txt
fgrep 'literal.string' file.txt                   # deprecated

# Perl-compatible regex
grep -P '(?<=error: ).*' /var/log/syslog
grep -P '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}' access.log
```

### ripgrep (rg)

`ripgrep` is a modern, Rust-based alternative that is faster than GNU grep for most use cases and
respects `.gitignore` by default.

```bash
# Basic search (respects .gitignore)
rg 'pattern'

# Search specific file types
rg 'TODO' --type rust
rg 'error' --type-add 'logs:*.log' --type logs

# Search with context
rg 'function' -C 3        # 3 lines before and after
rg 'error' -A 5            # 5 lines after
rg 'import' -B 2           # 2 lines before

# Regex search
rg -e 'error|warning' --type-add 'config:*.{conf,ini,yaml}'

# Ignore .gitignore
rg 'pattern' --no-ignore

# JSON output (for piping to jq)
rg 'pattern' --json
```

### Common grep Options

```bash
grep -r 'pattern' /etc/          # recursive search
grep -R 'pattern' /etc/          # recursive, follow symlinks
grep -l 'pattern' *.txt          # list matching files only
grep -L 'pattern' *.txt          # list non-matching files
grep -c 'pattern' *.txt          # count matches per file
grep -n 'pattern' file.txt       # show line numbers
grep -o 'pattern' file.txt       # show only matching text
grep -w 'error' file.txt         # match whole words
grep -x 'exact line' file.txt    # match entire lines
grep -f patterns.txt data.txt    # read patterns from file
grep -m 5 'pattern' file.txt     # stop after 5 matches
grep --color=auto 'pattern' file.txt  # colorize matches
```

## jq — JSON Processing

`jq` is a command-line JSON processor that uses a filter language inspired by awk and SQL.

### Basic Filters

```bash
# Pretty-print JSON
jq '.' file.json

# Extract a field
jq '.name' file.json

# Nested field access
jq '.address.city' file.json

# Array indexing
jq '.items[0]' file.json
jq '.items[-1]' file.json       # last element
jq '.items[2:5]' file.json      # slice

# Iterate over array
jq '.items[]' file.json

# Pipe output of one filter to another
jq '.items[] | .name' file.json

# Collect into array
jq '[.items[].name]' file.json

# Object construction
jq '{user: .name, email: .email}' file.json
```

### Functions and Expressions

```bash
# Length
jq 'length' file.json
jq '.items | length' file.json

# Keys
jq 'keys' file.json
jq '.items[0] | keys' file.json

# Has key
jq 'has("email")' file.json

# Select/filter
jq '.items[] | select(.price > 50)' file.json
jq '[.items[] | select(.active == true)]' file.json

# Map
jq '[.items | map(.price)]' file.json
jq '[.items | map(select(.active))]' file.json

# Sort
jq 'sort' file.json
jq 'sort_by(.price)' file.json
jq 'reverse' file.json

# Unique
jq 'unique' file.json
jq 'unique_by(.name)' file.json

# Group by
jq 'group_by(.type)' file.json

# Flatten
jq 'flatten' file.json

# Min/Max/Sum/Average
jq '[.[].price] | add' file.json
jq '[.[].price] | add / length' file.json
jq '[.[].price] | min' file.json
jq '[.[].price] | max' file.json

# Type checking
jq 'type' file.json
jq '[.[] | select(type == "string")]' file.json

# to_entries / from_entries
jq 'to_entries' file.json
jq 'to_entries[] | select(.value > 100)' file.json
```

### Advanced jq

```bash
# Join two arrays
jq -n --argjson a '[1,2,3]' --argjson b '[4,5,6]' '$a + $b'

# Input variables
jq -n --arg name "Alice" '{user: $name}'

# Reduce
jq 'reduce .[] as $item (0; . + $item.price)' file.json

# Defs — custom functions
jq 'def double: . * 2; [.[] | double]' file.json

# Walk/recursive update
jq 'walk(if type == "string" then ascii_downcase else . end)' file.json

# Path expression
jq '[paths(type == "number")]' file.json

# Get/set/delete
jq 'getpath(["a", "b"])' file.json
jq 'setpath(["a", "b"]; 42)' file.json
jq 'delpaths([["a", "b"]])' file.json
```

### jq with Shell Scripts

```bash
# Extract value into a shell variable
username=$(jq -r '.user.name' config.json)

# Update a JSON file in place
jq '.version = "2.0.0"' package.json > tmp.json && mv tmp.json package.json

# Merge two JSON files
jq -s '.[0] * .[1]' defaults.json overrides.json

# Convert JSON to CSV
jq -r '.[] | [.name, .email, .age] | @csv' data.json

# Convert JSON to TSV
jq -r '.[] | [.name, .email, .age] | @tsv' data.json

# Process JSON lines (ndjson)
jq -c '.items[]' large.json  # compact output, one object per line
```

## Columnar Data Processing

### column — Columnate Text

```bash
# Auto-detect delimiter
column -t data.txt

# Specify delimiter
column -t -s ',' data.csv

# Create a table from a single column
ls -1 | column -c 80

# Right-justify columns
column -t -R 2,3 numbers.txt
```

### pr — Page Formatting

```bash
# Format into columns
pr -3 -t file.txt          # 3-column output

# Add headers and page numbers
pr -h "Monthly Report" -f file.txt

# Double-space output
pr -d file.txt

# Show non-printable characters
pr -e file.txt
```

### fmt — Paragraph Formatting

```bash
# Reformat to 72-character lines (default width)
fmt file.txt

# Specify width
fmt -w 80 file.txt

# Reformat but preserve indentation of first line
fmt -p '  ' file.txt

# Collapse whitespace and reflow
fmt -u file.txt

# Only reflow lines longer than specified width
fmt -s -w 72 file.txt
```

### fold — Line Wrapping

```bash
# Wrap at 80 characters
fold -w 80 file.txt

# Break at spaces (word boundaries)
fold -w 80 -s file.txt
```

## CSV Processing

### csvkit

```bash
# Inspect CSV structure
csvlook data.csv                # table view
csvstat data.csv                # column statistics
csvcut -c 1,3 data.csv          # extract columns by number
csvcut -c name,age data.csv     # extract columns by name
csvgrep -c status -m active data.csv   # filter rows
csvsort -c 2 data.csv           # sort by column
csvjoin -c 1 keys.csv data.csv  # join on column

# Format conversion
csvjson data.csv                # CSV to JSON
csvlook -I data.csv             # JSON to table (input)

# SQL-like querying
sql2csv --query "SELECT * FROM data WHERE age > 30" --db sqlite:///data.db
```

### Miller (mlr)

`mlr` is designed for CSV, TSV, and JSON tabular data. It is faster than csvkit for large files.

```bash
# Pretty-print
mlr --icsv --opprint cat data.csv

# Filter rows
mlr --csv filter '$status == "active"' data.csv

# Sort
mlr --csv sort -f name data.csv

# Aggregate
mlr --csv stats1 -a sum,mean,count -f amount data.csv

# Add computed column
mlr --csv put '$total = $price * $quantity' data.csv

# Group by
mlr --csv then group-by category then stats1 -a sum -f amount data.csv

# Reshape
mlr --csv reshape -s item,value data.csv    # wide to long
mlr --csv reshape -r item,value data.csv    # long to wide

# Format conversion
mlr --csv --ojson cat data.csv              # CSV to JSON
mlr --json --ocsv cat data.json             # JSON to CSV
```

## YAML Processing

### yq

`yq` (mikefarah/yq) is a portable command-line YAML processor written in Go, with a jq-like syntax.

```bash
# Read a field
yq '.database.host' config.yaml
yq '.users[0].name' config.yaml

# Update a field (in-place)
yq -i '.database.port = 5433' config.yaml

# Delete a field
yq -i 'del(.debug)' config.yaml

# Add an element to an array
yq -i '.servers += "new-server-03"' config.yaml

# Filter array
yq '.users[] | select(.role == "admin")' config.yaml

# Merge two files
yq ea '. as $item ireduce ({}; . * $item)' defaults.yaml overrides.yaml

# Convert between formats
yq -o=json config.yaml          # YAML to JSON
yq -p=json -o=yaml data.json    # JSON to YAML

# Update nested value
yq -i '.services.web.ports[0] = 8080' docker-compose.yaml

# Multiple updates in one pass
yq -i '
  .logging.level = "info" |
  .logging.file = "/var/log/app.log" |
  .server.workers = 8
' config.yaml
```

## diff and patch

### Comparing Files

```bash
# Normal diff output
diff file1.txt file2.txt

# Unified diff (preferred for patches)
diff -u file1.txt file2.txt

# Side-by-side
diff --side-by-side file1.txt file2.txt

# Show only which files differ
diff -rq dir1/ dir2/

# Ignore whitespace
diff -w file1.txt file2.txt

# Ignore case
diff -i file1.txt file2.txt

# Show only if content differs (not just whitespace/blank lines)
diff -Bb file1.txt file2.txt

# Color output
diff --color file1.txt file2.txt
```

### Applying Patches

```bash
# Create a patch
diff -u original.txt modified.txt > changes.patch

# Apply a patch (dry run)
patch --dry-run -p1 < changes.patch

# Apply a patch
patch -p1 < changes.patch

# Reverse a patch
patch -R -p1 < changes.patch

# Create a patch for an entire directory
diff -ruN original_dir/ modified_dir/ > changes.patch
```

## sort — Advanced Sorting

### Multi-Key Sorting

```bash
# Sort by field 2 (tab-delimited)
sort -k2 data.tsv

# Sort by field 2, then by field 1 numerically
sort -k2,2 -k1,1n data.tsv

# Sort by character position
sort -k1.3,1.5 file.txt    # characters 3-5 of field 1

# Sort numerically (handles negative numbers and floats)
sort -n numbers.txt

# Sort by human-readable numbers (1K, 2M, 3G)
sort -h sizes.txt

# Sort by month name
sort -M dates.txt

# Sort by IP address
sort -t. -k1,1n -k2,2n -k3,3n -k4,4n ips.txt

# Reverse sort
sort -r file.txt

# Unique sorted output
sort -u file.txt

# Check if file is already sorted
sort -c file.txt
```

### sort Key Specification

```text
sort -k START,END [OPTIONS]

  START,END  — field range (1-indexed)
  n          — numeric sort
  h          — human-numeric (1K = 1000)
  g          — general numeric (handles scientific notation)
  M          — month sort
  r          — reverse this key
  b          — ignore leading blanks
  d          — dictionary order (ignore punctuation)
  f          — fold case (ignore case)
  i          — ignore non-printable characters
  t SEP      — field separator
```

```bash
# Sort /etc/passwd by UID (field 3, numeric)
sort -t: -k3,3n /etc/passwd

# Sort log by timestamp, then by severity
sort -k1,1 -k2,2r syslog.txt

# Sort CSV by column 3 ascending, column 1 descending
sort -t, -k3,3 -k1,1r data.csv
```

## cut vs awk for Field Extraction

```bash
# cut — fast for simple delimiter-based extraction
cut -d: -f1 /etc/passwd           # first field, colon-delimited
cut -d, -f2,5 data.csv            # fields 2 and 5
cut -c1-10 file.txt               # characters 1-10
cut -c1,5,10 file.txt             # specific characters
cut -d' ' -f2- file.txt           # field 2 to end

# awk — more flexible, handles variable-width fields
awk -F: '{print $1, $3, $7}' /etc/passwd
awk -F, '{print $1 "\t" $3}' data.csv
awk '{for(i=3;i<=NF;i++) printf "%s%s", $i, (i<NF?OFS:"\n")}' data.txt
```

:::info

Prefer `cut` when you only need simple field extraction — it is significantly faster than `awk` for
large files. Use `awk` when you need conditional logic, field manipulation, or aggregation.

:::

## paste and join

### paste — Merge Lines

```bash
# Merge two files side by side (tab-separated)
paste file1.txt file2.txt

# Merge with a different delimiter
paste -d',' file1.txt file2.txt

# Paste files sequentially (not side by side)
paste -s file.txt                # all lines on one line

# Paste multiple files
paste file1.txt file2.txt file3.txt
```

### join — Relational Join

```bash
# Inner join on first field (files must be sorted)
join file1.txt file2.txt

# Join on specific fields
join -1 2 -2 1 file1.txt file2.txt  # field 2 of file1, field 1 of file2

# Unpaired lines
join -a 1 file1.txt file2.txt      # show unpaired from file1 (left join)
join -a 2 file1.txt file2.txt      # show unpaired from file2 (right join)
join -a 1 -a 2 file1.txt file2.txt # full outer join

# Auto-fill empty fields
join -e 'N/A' file1.txt file2.txt

# Specify output format
join -o '1.1 2.2' file1.txt file2.txt
```

## tr — Character Translation

```bash
# Translate characters
echo 'hello' | tr 'a-z' 'A-Z'           # HELLO
echo 'Hello World' | tr '[:lower:]' '[:upper:]'

# Delete characters
echo 'hello 123' | tr -d '0-9'           # hello
echo 'hello' | tr -d 'l'                 # heo

# Complement and delete
echo 'hello123' | tr -d -c 'a-z'         # hello (delete everything except a-z)

# Squeeze repeats
echo 'heeello' | tr -s 'l'               # heelo

# Translate to single character (all spaces to newlines)
echo 'one two three' | tr ' ' '\n'

# Convert DOS line endings to Unix
tr -d '\r' < file.txt > file_unix.txt

# Remove non-printable characters
tr -cd '[:print:]\n' < file.txt

# ROT13
echo 'secret' | tr 'a-zA-Z' 'n-za-mN-ZA-M'
```

## Common Pitfalls

### Pitfall: BRE Escaping in sed

```bash
# WRONG — BRE requires escaping quantifiers
sed 's/[0-9]+/NUMBER/g' file.txt    # matches "[0-9]" followed by literal "+"

# CORRECT — escape the quantifier in BRE
sed 's/[0-9]\+/NUMBER/g' file.txt   # matches one or more digits

# ALTERNATIVE — use ERE with -E flag
sed -E 's/[0-9]+/NUMBER/g' file.txt # matches one or more digits
```

### Pitfall: awk Floating-Point Precision

```bash
# awk uses double-precision floating point — expect rounding errors
awk 'BEGIN {print 0.1 + 0.2}'        # outputs 0.3 (display rounding)
awk 'BEGIN {printf "%.20f\n", 0.1 + 0.2}'  # outputs 0.30000000000000004441

# For financial data, use integer arithmetic (cents)
awk '{printf "%d.%02d\n", $1/100, $1%100}' transactions.txt
```

### Pitfall: grep Returning Non-Zero on No Match

```bash
# grep exits with 1 when no lines match — this breaks set -e scripts
set -e
grep "pattern" file.txt  # script exits if no match!

# Fix: use || true
grep "pattern" file.txt || true

# Fix: use --quiet with a test
if grep -q "pattern" file.txt; then
    echo "found"
fi
```

### Pitfall: jq on Huge Files

```bash
# jq loads the entire JSON into memory
jq '.' huge.json    # may OOM on multi-gigabyte files

# For large files, use streaming mode
jq -c '.[]' huge.json | while read -r obj; do
    echo "$obj" | jq '.id'
done

# Or use jq's --stream flag for very large files
jq --stream 'fromstream(1|truncate_stream(inputs))' huge.json
```

### Pitfall: sed with Paths Containing Delimiters

```bash
# WRONG — slashes in the path break the sed command
sed 's|/old/path|/new/path|g' file.txt   # works if using | as delimiter

# CORRECT — use a different delimiter
sed 's|/old/path|/new/path|g' file.txt

# CORRECT — escape the delimiter
sed 's/\/old\/path/\/new\/path/g' file.txt

# Use | or # or @ as delimiter when paths contain /
sed 's#/var/log#/opt/log#g' config
```

### Pitfall: sort Locale Sensitivity

```bash
# Default sort uses locale — order may be unexpected
sort file.txt  # 'A' may sort after 'z' depending on locale

# Fix: use C locale for byte-order sorting
LC_ALL=C sort file.txt

# Fix: set LC_ALL=C for the duration of a pipeline
export LC_ALL=C; sort file.txt | uniq
```

### Pitfall: cut Does Not Handle Multi-Character Delimiters

```bash
# cut only accepts single-character delimiters
cut -d'|' file.txt          # works — single character
cut -d'||' file.txt         # WRONG — uses only the first '|'

# Fix: use awk instead
awk -F'\\|\\|' '{print $1, $2}' file.txt
```

### Pitfall: In-Place sed on Files with No Write Permission

```bash
# sed -i creates a temporary file, then renames it
# If the target directory is read-only, this fails silently or partially
sed -i 's/old/new/g' /readonly/file.txt  # may fail

# Fix: write to a temp directory
sed "s/old/new/g" /readonly/file.txt > /tmp/file.txt && sudo cp /tmp/file.txt /readonly/file.txt
```
