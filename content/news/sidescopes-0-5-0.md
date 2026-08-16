---
title: "SideScopes 0.5.0"
date: 2026-07-30
postKind: release
version: "0.5.0"
description: >-
  A separate Luma Waveform, optional 10-bit macOS capture, quality and UI
  scaling controls, scope ordering, and application documentation.
lede: >-
  This release separates encoded-luma and RGB-channel views, reduces idle
  processing, and makes scope arrangements more explicit.
---

## Added

- A dedicated Luma Waveform on L, allowing it to remain visible beside
  Waveform on W.
- Plain and Colored styles for Luma Waveform.
- A reorderable scope selector.
- Standard and High quality settings. High targets 20 captures per second
  instead of 15 and increases detail where smaller vectorscope and histogram
  panes benefit from it.
- UI scaling from 50% to 200% in addition to platform display scaling.
- Vectorscope trace gamma control.
- Optional 10-bit-per-channel macOS capture where the compositor supplies it.
- Repository documentation for scopes, regions, controls, and troubleshooting.

## Changed

- No region is selected on first run. Continuous capture and analysis suspend
  when there is no region or when the application cannot present live output.
- Preset names, scope order, explicit saving, and unsaved working layouts now
  persist separately.
- Graticule visibility became a four-step strength control.
- The histogram's Per Channel and Combined presentations became styles of one
  instrument.

## Fixed

- Capture retries after startup or display interruptions.
- Waveform normalization is no longer dominated by a flat column outside the
  intended subject.
- One-shot pointer sampling no longer averages letterbox padding.
- Several macOS focus and Windows border, desktop-window, and virtual-desktop
  behaviors were corrected.

Luma Waveform plots encoded Y′. It is useful for evaluating the rendered
level distribution, but it is not a direct exposure meter or physical
luminance measurement. Ten-bit capture improves available code precision; it
does not add HDR range or bypass the desktop color pipeline.
