---
title: SideScopes
description: >-
  Free, open-source colour scopes for any region of your screen. A live
  vectorscope, waveform and histogram beside the photo editor you already
  use — no plugin, no export step, no account.
tagline: Colour scopes for any part of your screen.
lede: >-
  SideScopes shows a live vectorscope, waveform and histogram for a
  rectangle of your screen, beside whichever editor you are working in.
  It reads the screen rather than your files, so it needs no plugin and no
  export step.

questions:
  - q: Is this white balance actually neutral?
    a: >-
      A neutral frame sits on the centre of the vectorscope. A cast pushes
      the whole cloud off centre, and the direction it goes names the cast.
    scope: Vectorscope
    class: vectorscope
  - q: Are the highlights clipping, and which channel goes first?
    a: >-
      The top of the waveform says whether. The parade separates the
      channels to say which — red clipping in a sunset shows there well
      before the image looks wrong.
    scope: Parade
    class: parade
  - q: Does this skin tone sit where skin tones sit?
    a: >-
      The vectorscope's skin-tone line is the reference. Skin sits along it
      whatever its colour: lighter or darker is fine, off the line is not.
    scope: Vectorscope
    class: vectorscope
  - q: Is the exposure even across the frame?
    a: >-
      The luma waveform reads left to right across the region, so a bright
      corner or a fall-off is a slope in the trace rather than a suspicion.
    scope: Luma waveform
    class: luma
  - q: How far does this sky stretch toward cyan?
    a: >-
      Distance from the centre of the vectorscope is saturation, and the
      graticule targets say how far is far — which is also how you spot the
      colour a print will not be able to hold.
    scope: Vectorscope
    class: vectorscope
  - q: Do these two images match?
    a: >-
      Pin a colour from the first and hover the second. The picker holds
      them side by side and gives the difference as ΔE, split into
      lightness, chroma and hue.
    scope: Colour picker
    class: picker

scopes:
  - name: Vectorscope
    key: V
    class: vectorscope
    body: >-
      Colour with brightness thrown away. Angle is hue, distance from the
      centre is saturation. Carries the classic targets and the skin-tone
      line.
  - name: Waveform
    key: W
    class: waveform
    body: >-
      Levels across the width of the region, all three channels overlaid in
      their own colours. Blue riding above red at the top is a cool
      highlight, and the gap is how cool.
  - name: Luma waveform
    key: L
    class: luma
    body: >-
      The same plot of brightness alone, which is what to read for
      exposure. A slope is an uneven frame; a band is a flat subject.
  - name: RGB parade
    key: R
    class: parade
    body: >-
      The three channels side by side instead of overlaid, so their shapes
      can be compared exactly. The usual way to see which channel clips
      first.
  - name: Histogram
    key: H
    class: histogram
    body: >-
      How many pixels sit at each level, per channel or combined. Bar
      heights follow a square-root curve, the way photo editors draw one.
  - name: Colour picker
    key: C
    class: picker
    body: >-
      Not a plot but a comparison: the live colour under the pointer beside
      one you pinned earlier, with the difference as ΔE.

steps:
  - title: Point it at something
    body: >-
      Drag a rectangle anywhere on the screen, or click a window and let the
      region follow it as it moves. The scopes update as you go.
  - title: Read the trace
    body: >-
      Every scope measures that rectangle and nothing else. The colour under
      your pointer is marked on all of them at once, so one tone can be read
      against every scope together.
  - title: Go back to editing
    body: >-
      The window stays above the others, sized for the corner of a laptop
      screen. Nothing is installed into your editor and nothing is exported
      out of it.
---

SideScopes reads the screen rather than your files, so it asks nothing of
the application you are looking at — no plugin, no export step, no list of
supported programs. That is why it works with all of them: Lightroom,
Capture One, darktable, Affinity, a browser showing a page whose colours
you are checking.

If your editor already has a good vectorscope and waveform, you do not need
this. Video grading tools have had excellent ones built in for decades.
SideScopes is for everyone else — which is most photo editors, where a
histogram is where the measurement stops.
