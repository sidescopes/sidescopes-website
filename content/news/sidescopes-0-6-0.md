---
title: "SideScopes 0.6.0"
date: 2026-08-14
postKind: release
version: "0.6.0"
description: >-
  The application runs in a browser — the same engines and the same panes,
  compiled to WebAssembly, over a photograph that stands in for the screen —
  and a guided tour introduces it one control at a time.
lede: >-
  A way to try the scopes before installing anything, and, for anyone already
  running the application, a release that deliberately changes almost nothing.
---

## The scopes run in a browser

[There is a demo now](/demo/), and the thing worth saying about it first is
what it is not: it is not a smaller set of scopes written again in
JavaScript. It is the application's own C++ engines compiled to WebAssembly,
drawn by the same pane code the desktop build draws with. The graticule, the
target boxes, the skin-tone line and the trace response are the shipped ones,
so a trace you learn to read there is the trace you get after downloading.

The region, the colour picker, the presets, the keyboard shortcuts and the
right-click menu all work as they do on a desktop.

What is missing is the part a browser cannot do, and it is missing honestly.
**No page can read another program's window**, so there is nothing to point
the scopes at except a picture you hand them — which is why the region there
sits on a photograph rather than on your screen. Attaching to a window and
following a face belong to the installed application, and those controls are
absent rather than present and broken.

Nothing you open is uploaded. The photograph is decoded by your browser and
handed straight to the analysis; there is no code on the page that could send
it anywhere.

The browser build also emits a single self-contained file that opens straight
from disk with no server at all, which is the smallest way to try the scopes
on a machine you are not allowed to install software on.

## A tour that introduces the instrument

Scopes are not self-explanatory, and a page of instructions above them is
read by nobody. The demo now opens with a walk-through instead: one control
at a time, with a way on and a way out, which remembers having been seen
through or waved away and can be reopened from a button.

Its stops name **the keyboard bindings actually in force**, not the shipped
defaults — a tour that insisted on `D` after somebody rebound it would be
teaching a control that no longer exists.

## What changed in the application itself

Very little, and that is deliberate. If you are already running SideScopes
beside an editor, this release is close to a no-op:

- The analysis worker can run its passes on the caller's thread rather than
  its own, for a host with no threads to give. The passes are identical
  either way, and every desktop build still gives it a thread.
- The region border's grab zones now come from the shared geometry both
  desktop borders already use, so a **small** region keeps a band that moves
  it rather than only zones that resize it.
- A shortcut action that no host handles is now a compile error rather than a
  silence — an internal change, but the kind that stops a control going quiet
  on one platform while working on another.

## Before you update

Preferences may still change shape between releases without a migration, so
an update can return settings to their defaults. That will stop at 1.0.
