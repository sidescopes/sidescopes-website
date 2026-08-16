---
title: SideScopes
description: >-
  Free, open-source color scopes for any region of your screen. Inspect the
  rendered output of any application with Vectorscope, Waveform, Luma
  Waveform, RGB Parade, Histogram, and Color Picker.
tagline: Color scopes for any region of your screen.
lede: >-
  SideScopes measures a selected area of the screen and updates live beside
  the application you are using. It is free and open source for macOS and
  Windows.

scopes:
  - name: Vectorscope
    key: V
    class: vectorscope
    body: >-
      Plots chroma independently of level. Angle indicates hue; distance from
      the center indicates chroma in a fixed Rec.709-style projection.
  - name: Waveform
    key: W
    class: waveform
    body: >-
      Overlays red, green, and blue levels while preserving horizontal image
      position. Channel separation can be examined by tonal range.
  - name: Luma Waveform
    key: L
    class: luma
    body: >-
      Plots a Rec.709-style Y′ estimate across the region. Use it to inspect
      rendered tonal placement and spatial variation.
  - name: RGB Parade
    key: R
    class: parade
    body: >-
      Places the three channel waveforms side by side, making channel-specific
      structure and endpoint accumulation easier to distinguish.
  - name: Histogram
    key: H
    class: histogram
    body: >-
      Counts pixels at each captured level, either per channel or overlaid.
      The horizontal axis is level; spatial position is discarded.
  - name: Color Picker
    key: C
    class: picker
    body: >-
      Compares a live sample with a pinned reference using RGB values and an
      sRGB-assumed CIEDE2000 color-difference estimate.

regions:
  - title: Draw a region
    body: >-
      Drag over any visible part of the screen. The region remains fixed on
      that display until you move, resize, or clear it.
  - title: Select a window
    body: >-
      Attach a region to a window so it follows the window and becomes active
      when that window is focused.
  - title: Select a face
    body: >-
      On supported systems, select a detected face and let the region follow
      it within the window.
---

SideScopes reads rendered screen pixels rather than opening the source file.
That makes it independent of the application producing the image, whether it
is a grading system, photo editor, browser, image viewer, or another visual
tool.
