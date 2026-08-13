---
title: "SideScopes 0.1.0"
date: 2026-07-13
postKind: release
version: "0.1.0"
description: >-
  The first build: a vectorscope and a waveform reading a rectangle of the
  screen, beside whatever drew it.
lede: >-
  The first release, and the idea it was built to test — that scopes are
  more useful when they do not care which application drew the pixels.
---

Photo editors have histograms. Grading suites have vectorscopes and
waveforms. The gap between those two facts is what this application exists
to close, and the way it closes it is by reading the screen rather than the
file.

That choice is the whole design. Reading the screen means no plugin to
install, no export step, and no list of supported applications — the scopes
do not know or care what drew the pixels, so they work with Lightroom,
Capture One, darktable, a browser, or an image viewer, all in the same way
and without any of them being asked for anything.

This first build carries a screenshot-style region selection — toolbar icons
and keys open a picker that dims the screen and lets you drag a rectangle —
a vectorscope and a waveform reading whatever that rectangle contains, and a
colour readout following the pointer.

It is a long way from finished, and the things it is missing are mostly
known. What it does establish is that the approach works: the scopes update
live, they cost little enough to leave running beside an editor, and
nothing has to be told about them.
