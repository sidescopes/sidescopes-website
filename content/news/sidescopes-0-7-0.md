---
title: "SideScopes 0.7.0"
date: 2026-08-17
postKind: release
version: "0.7.0"
description: >-
  Image adjustments and mobile layout in SideScopes Lab, a useful desktop
  first-run setup, clearer face-region binding, and region-interface fixes.
lede: >-
  Version 0.7.0 turns the browser build into a more complete learning tool and
  gives a fresh desktop installation an immediately usable region and scope
  layout.
---

## Added

- Temperature, tint, saturation, exposure, contrast, highlights, and shadows
  in SideScopes Lab. The displayed image and the scopes use the same adjusted
  pixels.
- A fresh desktop installation starts with Vectorscope and Waveform, a compact
  application window at the left of the primary display, and a moderate square
  global region in the open display area.
- An optional preference for hiding live pointer markers without hiding the
  RGB readout or pinned markers.

## Changed

- The browser experience is named SideScopes Lab throughout and changes from a
  side-by-side desktop workspace to a vertical workspace on narrow screens.
- Face-tracked regions use a face binding icon while retaining the window title
  as their label. The first click stops face tracking while keeping the region
  attached to its window; the next makes it global.
- The application documentation begins with the default global region,
  separates macOS and Windows application shortcuts, and presents default
  shortcuts separately from scope names.

## Fixed

- The Lab region border now matches the native filled ring, hazard band,
  handles, and device-pixel stroke geometry.
- The close control remains attached to the region while it is moved or resized
  on macOS, Windows, and in the Lab.
- Face detection on macOS now reads ten-bit screen captures correctly.
- The compact first-run placement is preserved when the macOS window becomes
  visible.
- The status-bar color swatch is aligned and spaced consistently with the RGB
  readout.

The Lab controls are designed for observing how scope traces respond. They do
not reproduce the processing of a particular image or video editor. SideScopes
continues to measure display-referred screen-capture pixels; this release does
not add source-file access, HDR measurement, or color-management metadata.
