---
title: The luma waveform
weight: 40
description: >-
  Brightness alone, plotted across the frame. The scope to read for
  exposure, and the fastest way to see an uneven one.
lede: >-
  The same plot as the waveform with the colour taken out — which turns out
  to be exactly what you want when the question is exposure.
---

## Why brightness alone

The RGB waveform draws three traces. That is right for judging balance and
wrong for judging exposure, because three overlapping shapes are harder to
read for slope and range than one.

The luma waveform plots a single value per pixel: its brightness, weighted
the way the eye weights it — green counts for most, red next, blue least.
One trace, and every judgement about exposure gets easier.

{{< figure name="waveform-luma" caption="A landscape as a luma waveform. The sky is the bright band across the top, the foreground the darker one below, and the horizon is visible as the gap between them." >}}

## What to read

**Range.** The top of the trace is the brightest pixel in each column and
the bottom the darkest. Where those two sit tells you how much of the
available scale the photograph is actually using.

**Slope.** A trace that runs downhill left to right is a frame that is
brighter on one side than the other. This is a lighting fall-off, a
vignette, an unevenly lit backdrop, or a sky that is much brighter at one
edge. It is genuinely hard to see in a photograph you have been looking at
for ten minutes, and completely obvious in the trace.

**Bands and gaps.** A flat subject — a wall, a studio backdrop, a
grey card — draws a band. The thickness of the band is the unevenness of
that surface, which is how you check a backdrop is lit evenly before
shooting against it.

**Where the mass is.** If most of the trace sits in the bottom quarter, the
photograph depends on a display that can show shadow detail, and it will be
a dark shape on paper. That is a compositional fact you can read before
committing to it.

## The coloured style

The luma waveform can tint each column with that column's own average
colour. It is the same measurement — the height of the trace is still
brightness alone — with a hint of the balance put back visually.

It is useful for orientation in a busy frame, because it lets you find
which part of the trace corresponds to which part of the picture. It is
not a substitute for the RGB waveform, which separates the channels
properly. Plain white is the honest default when the question is purely
exposure.

## Using it beside the RGB waveform

These are two scopes rather than two settings of one scope, deliberately,
so both can be on screen at the same time. That is the arrangement worth
having open while you work: **exposure on one pane, balance on the other,
both reading the same region**.

They are also the pair to check before an export. A luma waveform that
touches neither the ceiling nor the floor, plus three RGB traces that sit
on top of one another where the picture should be neutral, is a photograph
that will survive being looked at on somebody else's screen.

Next: [the RGB parade](/learn/rgb-parade/).
