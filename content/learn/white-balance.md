---
title: Evaluating color balance
sidebarTitle: Color balance
weight: 80
group: Applied readings
description: >-
  A reference-based workflow for evaluating channel balance without assuming
  that every image, highlight, or average should be neutral.
lede: >-
  Scopes can quantify balance in a known reference. They cannot decide which
  parts of an image were intended to be neutral.
---

## Start with a justified reference

White balance is meaningful relative to an illuminant, adaptation state, or
creative intent. Before interpreting channel separation as a cast, identify a
region that has a sound reason to be neutral: for example, a verified neutral
target captured under the relevant light, or a corresponding reference agreed
for a matching task.

Objects that merely look gray or white are not reliable standards. Paper can
contain optical brighteners; painted walls and fabric have color; clouds,
teeth, and the sclera of an eye are not defined neutrals. They can still be
useful contextual clues, but the assumption should remain explicit.

## A scope-based workflow

1. Select a representative area inside the reference, avoiding glare, deep
   shadow, edges, and mixed illumination.
2. Inspect Waveform or RGB Parade. Equal captured RGB levels indicate a
   neutral rendered sample under SideScopes' sRGB assumption.
3. Check Vectorscope. A compact reference displaced from center shows the
   direction of its chroma bias in the scope projection.
4. Adjust in the source application, then remeasure the same area through the
   same display path.
5. Evaluate the image visually. A technically neutral reference does not
   guarantee that the intended rendering of the scene is correct.

An area sample in [Color Picker](/learn/color-picker/) can make before-and-
after comparison more repeatable. For shot matching, a pinned sample is useful
only if the regions genuinely correspond and the capture/display conditions
have not changed.

## Mixed light and tonal separation

A single global balance cannot neutralize different illuminants independently.
If shadow, midtone, and highlight channel relationships disagree, consider
whether the cause is mixed lighting, channel-dependent processing, lens or
sensor behavior, a display transform, or a deliberate grade. Waveform
can show where a bias lies in the tonal range; restricting the region can show
where it lies in the image.

## What SideScopes cannot infer

Because SideScopes analyzes the final captured display pixels, it cannot read
camera metadata, identify the scene illuminant, estimate a definitive color
temperature, or distinguish a source cast from a later transform. It provides
evidence for a decision made in the application that owns the image.

See [What SideScopes measures](/learn/what-sidescopes-measures/) for the full
measurement boundary.
