---
title: "SideScopes 0.3.0"
date: 2026-07-20
postKind: release
version: "0.3.0"
description: >-
  Regions that follow a window as it moves, regions that follow a face, and
  diagnostics you can turn on from the menu rather than from a shell.
lede: >-
  Until this release a region was a rectangle on the screen and stayed
  there. Now it can belong to something.
---

## A region can belong to a window

Pressing `A` and clicking a window makes the region that window, pulled in
from its edges far enough that the border's own chrome clears the title bar.
From then on the region travels with the window.

The behaviour when the window is *resized* is deliberate and worth stating,
because the obvious alternative is wrong. The region keeps its size and is
only pushed out of the way by an arriving edge, just enough to stay inside;
grow the window again and it springs back. A region that resized in
proportion with its window would change what is being measured every time a
side panel was dragged, which is precisely when you least want the
measurement to move.

Several windows can be attached at once. Only the focused one is measured,
so switching between two applications switches which region the scopes read.

## A region can belong to a face

Where the platform can detect faces, `F` offers the ones it found; clicking
one scopes the skin around it, and the region then follows that face as it
moves within the window.

If the scan finds nothing it says so rather than offering a guess. That is
the rule the whole picker follows: it suggests only exact information — real
window rectangles and detected faces — and leaves everything else to a
manual draw, because an unreliable suggestion is worse than an honest empty
hand.

## The border says what it is measuring

The region border grew a label band carrying the window title, or the
display name for a region that belongs to the screen rather than to any
window. A rectangle on the desktop with no label is ambiguous the moment you
have two of them.

Border colours also settled: neutral grey chrome beside the photograph, so
that the thing framing your image never becomes a colour reference of its
own.

## Diagnostics without a shell

A Diagnostics submenu in the context menu records a log, so a problem can be
captured by somebody who has no interest in environment variables. On
Windows, "Show in Screen Captures" makes the application visible to
screenshot tools, which is otherwise exactly the thing it tries not to be.

## Also

- One icon set on every platform, rasterized from embedded SVG sources.
- Small regions stay movable: the resize zones never take more than a sixth
  of an edge, so a region small enough to be fiddly can still be dragged.
