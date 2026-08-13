---
title: The histogram
weight: 60
description: >-
  The one scope photographers already know. What it is good for, what it
  cannot do, and why it is still worth having beside the others.
lede: >-
  Every photo editor has a histogram, so this page is less about learning
  to read one than about knowing where it stops.
---

## The plot

A histogram counts pixels. The horizontal axis is level, black at the left
and white at the right; the height at each point is how many pixels of the
region sit at that level.

That is the whole instrument. It has no geometry — no sense of where in the
frame anything is — which is both why it is compact and why it cannot
answer the questions the waveform can.

{{< figure name="histogram" caption="Three channels drawn at full height. Where they do not line up, the image is not neutral at that level — here the blue curve sits to the left of the others, which is a warm image." >}}

## Two ways to draw it

**Per channel** stacks red, green and blue in bands, one above another,
each shape complete and nothing occluding anything else. This is the honest
version: you can see the true shape of each channel, including where one of
them is piling up against an end.

**Combined** overlays all three at full height, which is how most photo
editors draw it. Here the *overlap itself* is the information. A neutral
grey subject shows the three curves lying exactly on top of one another; a
warm image shows blue displaced to the left of red. It is more compact and
the disagreement between channels is easier to spot, at the cost of the
shapes hiding each other where they cross.

Neither is more correct. Per channel is better for reading one channel's
shape; combined is better for reading whether the channels agree.

## What to read it for

**Clipping at either end.** A spike hard against the left or right edge is
pixels that ran out of range. This is the reading the histogram does best
and fastest, and it is why every editor shows one.

**The overall distribution.** Whether the picture is mostly dark, mostly
light, or spread across the range. Useful for a quick sense of a frame you
have not looked at yet.

**Gaps and combs.** A histogram with regular vertical gaps in it has been
stretched hard — usually a heavily pushed exposure or contrast curve on an
8-bit file. The gaps are levels that no pixel landed on, and they are a
warning that the file is being asked to do more than it holds.

## Where it stops

Three questions it cannot reach, all of which the other scopes can:

**Where in the frame.** A blown sky and a blown reflection in one corner
produce the same histogram. The waveform separates them instantly.

**Whether that is colour or a cast.** A photograph of a red barn and a
photograph with a red cast both have a lot of red. The vectorscope tells
them apart; the histogram cannot.

**How saturated.** The histogram knows nothing about saturation at all,
only about how much of each channel is present at each level.

This is not a criticism of the instrument — it is a count of pixels and it
counts them well. It is an argument for not stopping there, which is
[the argument the rest of these pages make](/learn/why-scopes/).

## Bar heights

Bar heights follow a square-root curve rather than being drawn in
proportion to the raw count, which is what photo editors do and for a good
reason: a photograph usually has one enormous peak — a sky, a backdrop, a
wall — and drawing it linearly flattens everything else into the baseline.
The square root brings the small counts up far enough to be read without
misrepresenting which peak is larger.

It does mean the vertical axis is not a quantity you should read numbers
off. It is a shape.

Next: [the colour picker](/learn/colour-picker/).
