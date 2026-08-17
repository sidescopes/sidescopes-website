#!/usr/bin/env bash
set -euo pipefail

# Lighthouse's performance timings vary with the runner and the public media
# origin. Those timings are reviewed separately. This gate covers the stable,
# actionable categories across every site template that has distinct markup.

ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
PUBLIC_DIR=${LIGHTHOUSE_PUBLIC_DIR:-"$ROOT/public"}
PORT=${LIGHTHOUSE_PORT:-4178}
LIGHTHOUSE_VERSION=13.4.0

if [[ ! -f "$PUBLIC_DIR/index.html" ]]; then
  echo "check-lighthouse: build the production site before running this check" >&2
  exit 1
fi

if [[ -n "${CHROME_PATH:-}" ]]; then
  CHROME_BIN=$CHROME_PATH
elif [[ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]]; then
  CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  CHROME_BIN=$(command -v google-chrome-stable || command -v google-chrome || command -v chromium || true)
fi

if [[ -z "$CHROME_BIN" ]]; then
  echo "check-lighthouse: Chrome or Chromium was not found" >&2
  exit 1
fi

REPORT_DIR=$(mktemp -d "${TMPDIR:-/tmp}/sidescopes-lighthouse.XXXXXX")
SERVER_LOG="$REPORT_DIR/server.log"
SERVER_PID=""

cleanup() {
  if [[ -n "$SERVER_PID" ]]; then
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
  rm -rf "$REPORT_DIR"
}
trap cleanup EXIT

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$PUBLIC_DIR" \
  >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!

BASE_URL="http://127.0.0.1:$PORT"
for _ in {1..50}; do
  if curl --fail --silent --output /dev/null "$BASE_URL/"; then
    break
  fi
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    cat "$SERVER_LOG" >&2
    exit 1
  fi
  sleep 0.1
done
curl --fail --silent --output /dev/null "$BASE_URL/"

routes=(
  "/"
  "/lab/"
  "/download/"
  "/learn/"
  "/learn/vectorscope/"
  "/docs/"
  "/docs/scopes/"
  "/news/"
)

for route in "${routes[@]}"; do
  name=${route#/}
  name=${name%/}
  name=${name//\//-}
  [[ -n "$name" ]] || name=home
  report="$REPORT_DIR/$name.json"

  npx --yes "lighthouse@$LIGHTHOUSE_VERSION" "$BASE_URL$route" \
    --output=json \
    --output-path="$report" \
    --only-categories=accessibility,best-practices,seo \
    --chrome-path="$CHROME_BIN" \
    --chrome-flags="--headless=new --no-sandbox" \
    --quiet

  node - "$report" "$route" <<'NODE'
const fs = require('fs');
const [reportPath, route] = process.argv.slice(2);
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const expected = ['accessibility', 'best-practices', 'seo'];
const failedCategories = expected.filter((name) => report.categories[name].score !== 1);

if (failedCategories.length === 0) {
  console.log(`${route} accessibility 100 · best practices 100 · SEO 100`);
  process.exit(0);
}

console.error(`${route} failed: ${failedCategories.map((name) =>
  `${name} ${Math.round(report.categories[name].score * 100)}`).join(', ')}`);

for (const categoryName of failedCategories) {
  const category = report.categories[categoryName];
  for (const reference of category.auditRefs) {
    const audit = report.audits[reference.id];
    if (audit.score !== null && audit.score < 1) {
      console.error(`  ${audit.id}: ${audit.title}`);
    }
  }
}
process.exit(1);
NODE
done
