---
title: "SideScopes 0.4.0"
date: 2026-07-22
postKind: release
version: "0.4.0"
description: >-
  Flexible pane layouts, nine presets, a dedicated status bar, persistent
  color pins, and CIEDE2000 comparison.
lede: >-
  Version 0.4.0 expands the workspace and moves live color information out of
  the plots.
---

## Added

- Automatic, vertically stacked, and horizontally arranged scope layouts.
- Draggable pane dividers and nine layout preset slots.
- A status bar for the live RGB readout, color-pin tool, and transient
  messages.
- Persistent pinned colors and a selectable comparison reference.
- Assumed-sRGB CIELAB conversion, CIEDE2000 ΔE00, and signed ΔL*, ΔC*, and ΔH*
  diagnostic terms.
- A performance diagnostics channel.

## Changed

- Pinning moved beside the live readout rather than occupying a region-tool
  position.
- Region terminology was made consistent across menus, tooltips, and the
  picker.
- Automatic layout uses each scope's preferred pane shape when choosing a
  division.

The color-difference components describe a comparison; they do not correspond
directly to individual editing controls, and no universal ΔE00 pass threshold
is implied. See [Color Picker and comparison](/learn/color-picker/).
