---
title: RGB Parade
weight: 50
group: Instruments
description: >-
  How separate red, green, and blue waveforms expose channel relationships
  without losing horizontal image position.
lede: >-
  RGB Parade places three channel waveforms side by side: red, green,
  then blue. Each panel maps the full width of the selected region.
---

## Reading the panels

Each panel has the same axes as Waveform: horizontal position in the
selected region and channel level from 0 to 100. The panels do **not** divide
the image into thirds. A feature halfway across the region appears halfway
across each of the red, green, and blue panels.

Separating the channels prevents one trace from obscuring another. This makes
differences in shape, level, and endpoint behavior easier to compare than in
an overlay waveform.

{{< figure name="parade-clipping" caption="Red, green, and blue are plotted in separate panels. The same horizontal feature appears at the corresponding position in all three; endpoint contact describes the captured output." >}}

## Channel balance in context

For a subject known to be neutral, equal captured RGB values align at the same
level in all three panels. A raised blue channel in that reference indicates a
blue bias in the rendered result; separation confined to one tonal range can
identify where that bias occurs.

Channel alignment is not a goal for arbitrary image content. A saturated red
object should not produce matching panels, and a warm grade may intentionally
separate them. Restricting the region to a verified neutral or comparing it
with a known reference makes the observation meaningful.

## Endpoints and channel limiting

The parade can show that one captured channel reaches an endpoint before the
others. That may explain a hue or texture change in the rendered highlight or
shadow. It does not establish whether the source channel is clipped upstream:
SideScopes sees the composited display output, after the source application's
transforms.

Use RGB Parade when separate panels improve comparison. Use
[Waveform](/learn/waveform/) when the overlap itself is useful, or
[Luma Waveform](/learn/luma-waveform/) for a single weighted level trace.

Adobe's official [Lumetri scopes guide](https://helpx.adobe.com/premiere/desktop/correct-color/add-color-effects/available-lumetri-scopes.html)
and Apple's [Final Cut Pro scopes guide](https://support.apple.com/guide/final-cut-pro/view-video-scopes-ver761cad58/mac)
document the same three-panel positional convention in established grading
tools.
