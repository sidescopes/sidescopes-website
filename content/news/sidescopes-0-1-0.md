---
title: "SideScopes 0.1.0"
date: 2026-07-13
postKind: release
version: "0.1.0"
description: >-
  The initial release: live vectorscope and RGB waveform analysis for a
  selected screen region.
lede: >-
  The first public build established SideScopes as an application-independent,
  display-referred scope window.
---

## Added

- Screenshot-style selection of a rectangular screen region.
- Live vectorscope and RGB waveform panes for the captured pixels.
- A color readout that follows the pointer.
- Toolbar and keyboard access to region and scope controls.

SideScopes analyzes the composited screen output rather than opening the source
file. This allows it to work beside different applications without plugins,
while also limiting its measurements to the rendered desktop result.

Version 0.1.0 was an early functional release. Later versions expanded the
instrument set, region behavior, layouts, diagnostics, and documentation.
