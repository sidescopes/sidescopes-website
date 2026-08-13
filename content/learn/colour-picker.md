---
title: The colour picker
weight: 70
description: >-
  Not a plot but a comparison: a live colour beside one you pinned earlier,
  with the difference given as ΔE and split three ways.
lede: >-
  The instrument for matching one image to another, which is the job where
  eyes drift furthest.
---

## What it does

The colour picker holds two colours side by side: the live one under your
pointer, and one you pinned earlier. Between them it gives the difference
as a number.

That number is **ΔE**, and it is not an arbitrary scale. It is a measure of
perceptual difference — how different two colours look, rather than how
different their RGB values are, which are not the same thing at all. Two
dark blues can be far apart numerically and nearly indistinguishable to the
eye; two pale yellows can be numerically close and obviously different.

The rough reading, and it is rough:

| ΔE | What it means |
| --- | --- |
| under 1 | Not distinguishable side by side by most people |
| 1 to 2 | Visible on close comparison |
| 2 to 5 | Clearly different |
| over 5 | Different colours |

The formula is CIEDE2000, which is the current standard and the one that
handles blues and near-neutrals sensibly.

## The three-way split

A single number tells you *how much* two colours differ, not *how*. The
picker splits the difference three ways, and this is the part that makes it
useful for editing rather than merely for testing:

- **Lightness** — how much lighter or darker the live colour is;
- **Chroma** — how much more colourful, or duller;
- **Hue** — how far the hue has drifted.

Those map onto three different corrections. A patch of skin that differs
only in lightness is an exposure difference between two frames. One that
differs in hue is a white-balance difference. One that differs in chroma is
usually a saturation or vibrance setting. Reading which of the three is
large tells you which slider to reach for, which is not something a single
ΔE can do.

Hue drift is weighted to count for less when the colour is dull, which is
what the eye does too: hue is hard to judge in a nearly-grey colour and
obvious in a saturated one.

## Using it to match a set

This is the workflow it exists for.

1. Edit the frame you are happiest with, and **pin a colour from it** — a
   patch of skin, a wall, a shirt, a piece of sky. Something that ought to
   be the same in every frame of the set.
2. Open the next frame and **hover the corresponding patch**. The picker
   holds your pinned colour beside the live one.
3. **Read which of the three numbers is large** and correct that.
4. Move on. Every frame is compared to the same reference rather than to
   the frame before it, so errors do not accumulate.

That last point is the whole benefit. Matching by eye down a sequence is a
random walk: each small drift is inherited by everything after it, and none
of the individual steps looks wrong.

<div class="note">
<span class="note-title">Pin an area, not a pixel</span>
<p>Dragging pins the average of a rectangle rather than a single pixel.
Photographs are textured, and one pixel of skin, fabric or sky is very
often unrepresentative — a specular highlight, a pore, a grain of noise.
For anything with texture in it, drag.</p>
</div>

## Where it also helps

**Checking a grey is grey.** Pin a known neutral and hover something that
ought to match it. A hue difference here is a cast, stated as a number.

**Comparing before and after.** Pin a colour, make an edit, hover the same
place. The split tells you exactly what the edit did — which is
occasionally surprising.

**Sampling with the scopes anywhere.** The colour under the pointer is
drawn as a marker on every visible scope at once — its position on the
vectorscope, its level on the waveform, its bin on the histogram — so a
single tone can be read against all of them together. This works with or
without a region selected.

Next, the task-based pages: [neutral white balance](/learn/white-balance/),
[skin tones](/learn/skin-tones/), and
[holding up elsewhere](/learn/consistent-across-screens-and-prints/).
