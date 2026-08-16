---
title: Luma waveform
weight: 40
group: Instruments
description: >-
  A single positional trace of encoded luma, with the distinction between
  Y′, perceptual brightness, scene luminance, and exposure kept explicit.
lede: >-
  The luma waveform preserves horizontal image position and plots a weighted
  sum of the captured R′G′B′ values.
---

## What the trace represents

The horizontal axis follows the selected region from left to right. The
vertical axis runs from 0 to 100 and represents full-range display-code level.
Each sampled pixel contributes at the level calculated from its encoded red,
green, and blue values.

SideScopes uses a Rec.709-style Y′ calculation:

> Y′ ≈ 0.2126 R′ + 0.7152 G′ + 0.0722 B′

The prime marks matter. The calculation is performed on nonlinear,
display-encoded values; it is not a measurement of physical luminance. It is
also not a direct exposure meter. Exposure belongs to the capture and image
pipeline, while SideScopes receives the rendered output at the screen.

{{< figure name="waveform-luma" caption="The luma waveform condenses the three captured channels into one positional trace. Its vertical scale is normalized display-code level, not nits, stops, IRE, or scene luminance." >}}

## What it is useful for

A luma waveform makes the distribution of rendered levels easy to locate in
the image. It can show:

- where a bright or dark feature lies horizontally;
- whether rendered shadows or highlights approach an endpoint;
- how the tonal distribution changes across a frame;
- whether two outputs differ when measured through the same display path.

These are measurements of the output, not automatic judgments about it. A
high-key image can correctly concentrate near the top; a silhouette can
correctly reach the bottom. Delivery limits and intended contrast must come
from the relevant workflow, not from the trace alone.

## Endpoints and source latitude

Accumulation at 0 or 100 means captured pixels reached the corresponding
display-code endpoint. It may be evidence of limiting in the rendered output,
but it does not reveal which stage caused it or what the source still contains.
A RAW processor, grading timeline, compositor, or source clip can retain data
that is no longer distinguishable in the pixels presented to SideScopes.

Use the source application's own scopes or controls when you need to inspect a
pre-display signal, scene-referred values, HDR levels, or recoverable latitude.

## Plain and colored styles

The **Plain** style draws a neutral trace. The **Colored** style uses the
captured RGB contributions to tint the trace, providing spatial color context
without turning it into three separate channel plots. The vertical coordinate
remains the same luma calculation in both styles.

For channel relationships, use the [RGB waveform](/learn/waveform/) or
[RGB parade](/learn/rgb-parade/).

Reference: [ITU-R BT.709](https://www.itu.int/rec/R-REC-BT.709/) defines the
Rec.709 system and its encoded luma coefficients.
