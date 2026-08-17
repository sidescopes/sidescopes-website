#!/bin/sh
# Hugo's development server does not apply Cloudflare Pages' static/_headers.
# An inline style can therefore work locally while production's
# `style-src 'self'` silently rejects it. Check the generated site—the actual
# deployment input—so templates, shortcodes, and rendered Markdown are all
# covered by one contract.
set -eu

SITE=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
OUTPUT=${1:-$SITE/public}

if [ ! -d "$OUTPUT" ]; then
    echo "CSP style contract: generated site not found at $OUTPUT" >&2
    echo "Run Hugo before this check." >&2
    exit 2
fi

MATCHES=$(rg -n -i --glob '*.html' '<style(?:[[:space:]>])|<[a-z][^>]*[[:space:]]style[[:space:]]*=' "$OUTPUT" || true)
if [ -n "$MATCHES" ]; then
    echo "CSP style contract: inline styles found in generated HTML." >&2
    echo "Production sets style-src 'self'; move these rules into a stylesheet:" >&2
    printf '%s\n' "$MATCHES" >&2
    exit 1
fi

echo "CSP style contract: generated HTML uses external styles only"
