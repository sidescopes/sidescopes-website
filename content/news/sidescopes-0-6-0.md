---
title: "SideScopes 0.6.0"
date: 2026-08-14
postKind: release
version: "0.6.0"
description: >-
  A WebAssembly browser build with local image input and a guided interface
  tour, based on the application's shared scope and pane code.
lede: >-
  Version 0.6.0 introduces the browser foundation now presented as SideScopes
  Lab, while keeping the desktop instrument behavior stable.
---

## Added

- A browser build compiled from the application's C++ scope engines and pane
  renderer.
- Analysis of supplied still images or an image selected from the local
  computer.
- Browser versions of scope selection, region editing, color pins, presets,
  keyboard shortcuts, and the right-click menu.
- A guided tour that uses the active shortcut bindings and can be reopened.
- A self-contained browser build that can run from a local file.

Images selected in the browser are decoded and analyzed locally; SideScopes
does not upload them. The browser build analyzes pixels within its page. It
cannot capture another application's window, attach to a desktop window, or
track a face outside the page, so those desktop controls are not presented.

## Changed

- The analysis worker can run on the calling thread for hosts without a worker
  thread. Desktop builds continue to use the threaded path.
- Region-border interaction uses the shared geometry implementation, preserving
  a movable area on small selections.

## Fixed

- A shortcut action missing from a host implementation now fails at compile
  time instead of remaining silently inactive.

The current [SideScopes Lab](/lab/) continues to develop beyond the tagged
0.6.0 browser foundation. The release tag remains available for an exact view
of version 0.6.0.
