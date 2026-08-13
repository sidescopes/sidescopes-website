---
title: "SideScopes 0.4.0"
date: 2026-07-22
postKind: release
version: "0.4.0"
description: >-
  Panes you can arrange and save, a status bar that carries the live colour
  without painting over a trace, and ΔE explained in plain words.
lede: >-
  This release is mostly about the window: how the scopes divide it, how you
  save an arrangement, and where the colour readout lives.
---

## Layouts, and nine slots to keep them in

Scopes split the window, and until now they split it one way. This release
adds an orientation — Automatic, Vertical or Horizontal — with weighted
panes and draggable dividers between them. Double-clicking a divider
equalises the two panes it separates.

Automatic is the interesting one: rather than following the window's longer
axis, it picks the split whose panes best match each scope's own natural
shape. A vectorscope wants to be square; a waveform wants to be wide.

Nine preset slots hold an arrangement, on the digit keys — a digit loads a
slot and Shift and a digit saves to it. A preset carries each scope's style
choices along with the geometry, so a slot is a whole way of looking rather
than just a set of rectangles.

A chip at the head of the toolbar shows which slot you are on, and stars
itself when what is on screen has drifted from what the slot holds.

## The status bar

The live colour moved out of the panes and into a row of its own under them:
the pin tool at the left, the colour under the cursor at the right, and that
colour's channels named and read between them. Nothing paints over a trace
any more.

The row degrades in a considered order rather than by overflowing. A
transient message clears it and takes the whole width; the channel readings
are the first thing dropped when a narrow window leaves no room for
everything.

## ΔE, said in words

The colour picker now states its distance from the pinned colour as a ΔE
figure, with the signed lightness, colorfulness and hue differences beside
it.

Every column carries a tooltip saying what it means in plain words rather
than in colour-science terms — because the number is only useful if you know
which slider it points at. That reasoning is now
[a page of its own](/learn/colour-picker/).

Pinned colours also survive a restart, along with the one chosen as the
comparison reference.

## Underneath

- **Module ABI 0.2**: a scope descriptor may declare a preferred pane aspect
  for the automatic layout, and flag its image as a pin target. The pin tool
  follows the declarations instead of hard-coded scope ids.
- **A `perf` diagnostics channel**: frame body and present wait, analysis
  pass duration, and capture inter-arrival cadence. Off costs one branch.
- **Region is the one word** for the rectangle the scopes read, everywhere:
  in the menu, the toolbar tooltips and the picker banner.
- Several fixes to where the border goes and when it hides, including
  taking it down on the focus event itself rather than at the next tick, so
  it no longer lingers over the window that replaced it.
