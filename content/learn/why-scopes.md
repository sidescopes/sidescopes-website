---
title: Why scopes
weight: 10
description: >-
  Your visual system is built to discount the light it is under. That is
  exactly the wrong instinct when the job is judging colour.
lede: >-
  The case for measuring colour rather than looking at it, and why a
  histogram stops short of the questions that matter most.
---

## Human vision is built to discount the light

Human vision is not a light meter. It is a system for recognising objects
under wildly varying illumination, and it is extremely good at that. Walk
from daylight into a room lit by tungsten and a sheet of paper goes on
looking white, even though the light bouncing off it has changed colour
dramatically. Your visual system discounts the illuminant. It happens
below conscious awareness and you cannot switch it off.

That ability is useful nearly everywhere and unhelpful here. Sit with a
photograph that has a warm cast and within about half a minute the warmth
stops registering as warmth: it becomes the new neutral, and the next image
you open looks oddly cold by comparison. The longer an edit runs, the
further the reference drifts.

The same thing happens at the level of a whole session. Editing at night in
a dim room, on a screen at a different brightness than yesterday's, after
an hour of looking at one photographer's warm-leaning work: every one of
those shifts what "neutral" looks like to you, and none of them shift what
is in the file.

## What a scope is

A scope is a plot of the pixels themselves, with the picture taken away.

That last part is the point. Once you cannot see the subject, you cannot be
reassured by it. A vectorscope showing a cloud sitting to the left of centre
is saying the same thing whether the photograph is a portrait, a landscape
or a colour chart, and it says it whether or not you are in the mood to
agree.

Three plots cover most of the work:

- a **vectorscope** throws brightness away and plots colour — angle is hue,
  distance from the centre is saturation;
- a **waveform** plots level against horizontal position, so you can see
  where in the frame something is bright or dark;
- a **histogram** counts how many pixels sit at each level.

Video editors have had all three built in since long before they were
digital. Photo editors, with a few exceptions, ship the histogram and stop.

## Why the histogram is not enough

A histogram is a genuinely useful instrument and it answers one question
well: how are the tones distributed? It cannot answer three others.

**Where in the frame?** A histogram has no geometry. A landscape with a
blown sky and a landscape with a blown reflection in the bottom corner can
produce identical histograms. A waveform separates them immediately,
because its horizontal axis is the picture's own horizontal axis.

**Which channel, and by how much?** Most histograms overlay the three
channels, which is exactly where the useful detail gets lost. Red running
two-thirds of a stop above green in the highlights is the difference
between a warm sunset and a sunset that will print with no detail in the
clouds — and in an overlaid histogram both look like a bump on the right.

**Is that colour, or is it a cast?** This is the one a histogram cannot
approach. A photograph of a red barn *should* have a lot of red in it. A
photograph with a red cast also has a lot of red in it. The histogram
reports the same thing for both. A vectorscope tells them apart in a
glance, because a cast moves the whole cloud and a red barn is an arm
reaching out of a cloud that is still centred.

## What measuring adds

**A reference that does not move.** The centre of a vectorscope is neutral
today, tomorrow, and at two in the morning. Your sense of neutral is none
of those things.

**Consistency across a set.** Matching twenty photographs from one shoot by
eye means comparing each to the one before it, and small errors compound in
one direction. Comparing each to a number does not.

**Faults that stay invisible until it is too late to fix them.** Clipping
is the usual example. A channel that has run out of headroom looks fine on screen — the
pixels are just bright — right up until a print or an export makes the
missing detail obvious. On a waveform it is unmistakable: the trace stops
climbing and lies flat against the top of the scale.

## What it does not get you

Measuring is not taste. A scope reports that the cloud is off centre; it
cannot say whether you meant it to be. Many good photographs are
deliberately warm, cold or clipped. The instrument has no opinion about the
picture; it only makes the state of the file explicit.

It also cannot tell you what someone else's screen will do with your file.
What it can do is catch the faults that survive every screen, which is
[a separate question worth its own page](/learn/consistent-across-screens-and-prints/).

## Where SideScopes fits

If your editor has good scopes, use them. This is not an argument for a
second tool.

Most photo editors do not. SideScopes exists to put the missing
instruments beside whichever one you already use, by measuring a rectangle
of the screen rather than asking your editor for anything. There is no
plugin to install and no file to export, which is why it works with
Lightroom, Capture One, darktable and everything else in the same way.

Next: [reading a vectorscope](/learn/vectorscope/).
