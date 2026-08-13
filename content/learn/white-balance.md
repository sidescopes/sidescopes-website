---
title: Neutral, without guessing
weight: 80
description: >-
  White balance is the one edit your eyes are actively working against you
  on. Here is how to settle it with a number instead.
lede: >-
  The eyedropper asks you to find something grey. The vectorscope tells you
  whether you found it.
---

## Why this one is hard by eye

Every other tonal judgement has a fixed reference somewhere. Exposure has
black and white. Contrast has the range of the medium. White balance has
nothing but your own adaptation, and your adaptation is the thing that
moves.

Worse, the two ends of the correction interact. Warming an image and
raising its tint both push towards a similar-looking place, and it is
genuinely difficult to tell "slightly too warm" from "slightly too magenta"
by looking. On a vectorscope they are two different directions, sixty
degrees apart, and confusing them is not possible.

## The reading

**Neutral is the centre.** Not "near the centre" — a grey pixel has no hue,
so it lands exactly on the origin. Everything else follows from that.

Point the region at part of the image that ought to be neutral: a grey
card if you shot one, but also concrete, asphalt, white paint in shade,
paper, the whites of eyes, a cloud that is not lit by anything coloured.
The cloud on the scope should sit on the centre. Where it sits instead
names the cast, and the direction is the correction, reversed.

## Working the correction

1. **Pick a region that should be neutral**, not the whole picture. Whole
   images are rarely neutral overall and are not supposed to be — a forest
   is genuinely green. The measurement is only as good as the assumption
   behind the area you chose.
2. **Read which way the cloud has gone.** Towards blue means the image is
   too cool; towards yellow, too warm. Towards magenta or green is the
   tint axis rather than the temperature one.
3. **Move the temperature and tint sliders** and watch the cloud walk back
   towards the centre. This is the part that is genuinely nicer than an
   eyedropper: it is a continuous reading rather than a single click, so
   you can see it converge.
4. **Check the whole frame afterwards.** Widen the region back out and make
   sure you have not simply moved the cast somewhere else.

## When there is nothing neutral in the frame

Sometimes there genuinely is not, and no instrument invents information.
Two things still help.

**Skin, if there is any.** Human skin sits along a known line whatever its
colour, which makes it the most useful reference in a photograph that
contains no grey — [its own page](/learn/skin-tones/).

**A cast is usually uniform.** Even without a known-neutral subject, a cast
tends to move *everything* together, whereas real colour in a scene points
in several directions at once. A cloud that is compact and displaced looks
different from a cloud that is spread and centred, and that difference is
readable even when you cannot name the correct answer.

## Matching one image to another

This is where measurement beats eyes by the largest margin, because the
error compounds.

Editing twenty frames from one shoot by comparing each to the last is a
random walk: every small drift is inherited by everything after it, and by
the twentieth image you are a long way from the first with no single step
having looked wrong. Comparing each to a *number* removes the drift
entirely.

The colour picker exists for exactly this. Pin a colour from the first
image — a patch of skin, a wall, a shirt — then open the next and hover the
tone that should match it. The difference comes back as ΔE, split into how
much lighter or darker, how much more or less colourful, and how far the
hue has drifted. Three numbers instead of an impression.

<div class="note">
<span class="note-title">Where dragging beats clicking</span>
<p>Pin the <em>average of a small rectangle</em> rather than a single
pixel. One pixel of skin, sky or fabric is almost never representative —
photographs are textured, and the pixel you happened to land on can be a
specular highlight or a pore. Dragging averages the area.</p>
</div>

Next: [skin tones](/learn/skin-tones/).
