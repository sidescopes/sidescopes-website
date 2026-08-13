---
title: The waveform
weight: 30
description: >-
  A histogram with geometry. The waveform keeps the picture's horizontal
  axis, so it can say where in the frame something is bright, dark or
  clipped — and which channel is doing it.
lede: >-
  If the vectorscope is the unfamiliar instrument, the waveform is the one
  that changes how you work, because it is the first one that tells you
  *where*.
---

## The plot

A waveform plots level against horizontal position.

- **Left to right is the frame, left to right.** Something on the right of
  the picture is on the right of the trace. This is the whole difference
  from a histogram.
- **Bottom to top is level**, black at the bottom and white at the top.
- **A column of the picture becomes a column of the trace**, spanning every
  level present in it. A column containing both a bright sky and a dark
  hedge draws two bands with a gap between them.

That gap is worth dwelling on, because it is what makes a waveform legible.
A landscape usually shows as two shapes: a bright band across the top for
the sky, a darker one along the bottom for the ground, and empty space
between them where the picture simply has no tones.

{{< figure name="waveform-rgb" caption="The RGB waveform: all three channels overlaid in their own colours, so where they separate is a cast and how far they separate is how strong it is." >}}

## Three channels, overlaid

This scope draws red, green and blue on top of one another, each in its own
colour. That is what makes a cast readable at a glance — and, crucially,
readable **by tonal range**, which is the one thing the vectorscope cannot
tell you because it threw brightness away.

- **The three traces sitting on top of each other** means neutral. Grey has
  equal amounts of all three, so they land in the same place.
- **Blue riding above red at the top** is a cool highlight. The gap between
  them is how cool.
- **Blue sitting above the others only at the bottom** is a cool shadow
  with neutral highlights — a completely different repair from a cast
  across the whole image, and one you would never separate on a
  vectorscope.

That last point is the reason to have this scope open rather than relying
on the vectorscope alone. A cast confined to the shadows and a cast across
the frame look identical on a vectorscope and obviously different here.

## What else to read it for

**The black point and the white point.** Where the bottom of the trace sits
tells you whether anything in the frame is actually black. A landscape
whose trace bottoms out at 15% has no true black in it, which usually reads
as flat and washed.

**Clipping.** A trace that stops climbing and lies *flat* against the top
of the scale is clipped: those pixels had more brightness than the file can
hold, and the detail is gone rather than compressed. The flatness is the
tell — a bright highlight that is not clipped comes to a peak.

{{< figure name="waveform-clipped" caption="Two stops brighter. The top of the trace has flattened against the ceiling instead of coming to a peak — the detail that was there is no longer in the file, and no amount of pulling the highlight slider will bring it back." >}}

The same applies at the bottom of the scale. A trace crushed against zero
is shadow detail that has already been thrown away.

## Reading the trace's brightness

A waveform is a density plot: where many pixels of the image share a level,
the trace is bright there, and where few do it is faint. That is
information, not decoration — a bright solid band is a large uniform area,
and a faint wash is a scattering of pixels.

Scrolling over the pane changes how much a single sample contributes before
the plot saturates. Turn it down and only the dense parts survive, which is
how you find the *body* of the image. Turn it up and the sparse edges
appear, which is how you find the few pixels that are actually clipping.
Double-clicking returns it to the default.

## Where to go next

The waveform reads **balance**. Its two siblings answer the neighbouring
questions:

- [the luma waveform](/learn/luma-waveform/) reads **exposure**, by
  plotting brightness alone;
- [the RGB parade](/learn/rgb-parade/) reads **which channel**, by
  separating the three instead of overlaying them.

All three are the same measurement drawn differently, and any combination
of them can be on screen at once.
