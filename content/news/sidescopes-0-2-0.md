---
title: "SideScopes 0.2.0"
date: 2026-07-17
postKind: release
version: "0.2.0"
description: >-
  A common scope-module interface, parallel analysis, improved window
  selection, and more consistent color sampling.
lede: >-
  This release reorganized the scope engine so later instruments and controls
  could be added without hard-coding each one into the application.
---

## Added

- A common C interface for built-in and dynamically loaded scope modules.
- Module declarations for identity, shortcut, parameters, and preferred pane
  shape.
- Parallel vectorscope and waveform analysis with deterministic results across
  thread counts.
- RGB code, percentage, and hexadecimal color readouts.

## Fixed

- Window suggestions now respect visible stacking rather than offering windows
  fully covered by others.
- Pinned colors use the same sample as the live readout.
- An invalid scope-module file no longer stalls dynamic configuration.

The module boundary introduced here remains internal infrastructure; it does
not change the display-referred measurement boundary of the scopes.
