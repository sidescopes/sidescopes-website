---
title: SideScopes Lab
layout: lab
description: >-
  Explore the SideScopes instruments with sample images or one of your own.
  Adjust color and tone while the scopes update in your browser.
lede: >-
  An interactive environment for observing how image content and adjustments
  map to a vectorscope, waveforms, RGB parade, histogram, and color readout.
---

## Explore an image

Choose one of the supplied images or load an image from your computer. Move or
resize the selected region, choose the scopes you want to see, and use the
color and tone controls while the traces update.

The Lab uses the application’s C++ scope engines and pane renderer, compiled
to WebAssembly. Its adjustment controls are purpose-built for exploration:
they demonstrate common directional effects, but they are not intended to
match the processing curves or color pipeline of Resolve, Capture One, or any
other editor.

## Adjustment model

The controls form a small, defined processing pipeline rather than an
approximation of a named application:

1. The decoded image is treated as 8-bit sRGB.
2. Exposure multiplies linearized channel values by 2 to the selected number
   of stops. Temperature and tint apply relative RGB gains in that same space;
   they are directional controls, not correlated-color-temperature or
   chromatic-adaptation calculations.
3. Highlights, shadows, and contrast apply fixed curves to the encoded result,
   with contrast pivoting at code value 0.5.
4. Saturation scales each encoded RGB value around a Rec.709-weighted Y′
   estimate.
5. The result is clamped and quantized to 8-bit values before the scopes
   analyze it.

This makes every response reproducible and keeps the lesson focused on the
scope. The same slider position should not be expected to reproduce a control
with the same name in another processing pipeline.

## Lab and desktop application

The Lab analyzes still images inside the browser page. A browser cannot read
another application’s window, attach a region to a desktop window, or follow a
face outside the page. Those functions require the desktop application.

The scope engines, pane renderer, region editor, layout controls, and keyboard
behavior are shared with the application. The Lab adds the sample strip and
adjustment panel around them for observation and teaching.

## Local image processing

An image you load is decoded and processed locally in your browser. It is not
uploaded. The Lab stores its interface preferences in your browser so it can
restore your layout and remember whether you completed the guided tour.
