#!/bin/sh
# The mobile Lab has one scrollbar: the website's. The framed document reports
# its full height, and the iframe explicitly suppresses its own residual scroll
# indicator. Touch ownership inside the Lab is tested in the application repo.
set -eu

SITE=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LOADER=$SITE/assets/js/lab.js

require() {
    grep -F "$1" "$LOADER" >/dev/null || {
        echo "Lab embed contract missing: $1" >&2
        exit 1
    }
}

require "data.type !== 'sidescopes-lab-height'"
require "frame.style.height = Math.ceil(height) + 'px'"
require "frame.setAttribute('scrolling', 'no')"

echo "Lab embed contract: one outer scroll surface"
