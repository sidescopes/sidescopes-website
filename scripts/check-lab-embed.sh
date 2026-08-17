#!/bin/sh
# The mobile Lab has one scrollbar: the website's. The framed document reports
# its full height, and the iframe explicitly suppresses its own residual scroll
# indicator. The website also keeps boot frames hidden until the application
# reports ready. Touch ownership inside the Lab is tested in the application
# repo.
set -eu

SITE=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LOADER=$SITE/assets/js/lab.js
STYLES=$SITE/assets/css/components.css

require() {
    file=$1
    contract=$2
    grep -F "$contract" "$file" >/dev/null || {
        echo "Lab embed contract missing: $contract" >&2
        exit 1
    }
}

require "$LOADER" "data.type !== 'sidescopes-lab-height'"
require "$LOADER" "frame.style.height = Math.ceil(height) + 'px'"
require "$LOADER" "frame.setAttribute('scrolling', 'no')"
require "$LOADER" "frame.setAttribute('aria-hidden', 'true')"
require "$LOADER" "data.type === 'sidescopes-lab-ready'"
require "$LOADER" "pendingHeight = height"
require "$LOADER" "box.classList.add('lab-box--ready', 'lab-box--running')"
require "$STYLES" ".lab-box--ready .lab-frame"
require "$STYLES" "transition: opacity 0.18s ease"

echo "Lab embed contract: one outer scroll surface and a ready-state reveal"
