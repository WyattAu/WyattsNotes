#!/usr/bin/env bash
# Build benchmark script for Docusaurus sub-sites.
# Times pnpm build for each config and reports results.
# Usage: bash scripts/benchmark-builds.sh [config1 config2 ...]
#   If no args, benchmarks all 8 content configs.
#   Run with --warm to do a warmup build first.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

# ---------------------------------------------------------------------------
# All content configs in dependency order (main first since shared dep used by all)
# ---------------------------------------------------------------------------
ALL_CONFIGS=(
  "docusaurus.config.ts"
  "docusaurus.ib.config.ts"
  "docusaurus.dse.config.ts"
  "docusaurus.alevel-maths-physics.config.ts"
  "docusaurus.alevel-sciences.config.ts"
  "docusaurus.qualifications.config.ts"
  "docusaurus.programming.config.ts"
  "docusaurus.university.config.ts"
)

WARMUP=false
CONFIGS=()

for arg in "${@}"; do
  case "$arg" in
    --warm) WARMUP=true ;;
    -h|--help)
      echo "Usage: bash scripts/benchmark-builds.sh [--warm] [config1 ...]"
      echo "  --warm   Run a single warmup build before timing"
      echo ""
      echo "Available configs:"
      for c in "${ALL_CONFIGS[@]}"; do echo "  $c"; done
      exit 0
      ;;
    *) CONFIGS+=("$arg") ;;
  esac
done

if [ ${#CONFIGS[@]} -eq 0 ]; then
  CONFIGS=("${ALL_CONFIGS[@]}")
fi

echo "============================================================"
echo "  Build Benchmark — $(date '+%Y-%m-%d %H:%M:%S')"
echo "============================================================"
echo ""
echo "Configs to benchmark: ${#CONFIGS[@]}"
echo "Warmup: $WARMUP"
echo ""

if $WARMUP; then
  echo "--- Warmup build ---"
  time pnpm build --config "${CONFIGS[0]}" > /dev/null 2>&1 || true
  echo ""
fi

TIMINGS_FILE="/tmp/build_timings_$$.csv"
echo "config,real_seconds,user_seconds,sys_seconds" > "$TIMINGS_FILE"

for config in "${CONFIGS[@]}"; do
  echo -n "Building $config ... "
  START=$(date +%s.%N)

  if TIMEFORMAT='%R %U %S'; then
    TIMING=$( (time pnpm build --config "$config" > /dev/null 2>&1) 2>&1 )
    read -r REAL USER SYS <<< "$TIMING"
  else
    pnpm build --config "$config" > /dev/null 2>&1
    REAL=""
  fi

  END=$(date +%s.%N)
  ELAPSED=$(echo "$END - $START" | bc 2>/dev/null || echo "N/A")

  echo "${ELAPSED}s"
  echo "$config,${ELAPSED:-N/A},${USER:-N/A},${SYS:-N/A}" >> "$TIMINGS_FILE"
done

echo ""
echo "============================================================"
echo "  Results (wall-clock seconds)"
echo "============================================================"
echo ""

# Sort by time (slowest first for optimization targets)
tail -n +2 "$TIMINGS_FILE" | sort -t',' -k2 -rn | while IFS=',' read -r config real user sys; do
  printf "  %-50s %8s s\n" "$config" "$real"
done

echo ""
echo "Full CSV: $TIMINGS_FILE"
rm -f "$TIMINGS_FILE"
