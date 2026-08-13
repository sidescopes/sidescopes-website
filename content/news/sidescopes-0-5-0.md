---
title: "SideScopes 0.5.0"
date: 2026-07-30
postKind: release
version: "0.5.0"
description: >-
  The luma waveform becomes a scope of its own, ten-bit capture arrives on
  macOS, and a diagnostic recording now states what is already true rather
  than only what changes after it starts.
lede: >-
  Six scopes instead of five, ten bits a channel on macOS, and a quality
  choice that only claims the difference it actually makes.
---

## The luma waveform stands on its own

The waveform used to carry a style that switched it between plotting all
three channels and plotting brightness alone. That was the wrong shape for
the question, because the two answer different things: one reads **balance**
and the other reads **exposure**, and you frequently want both at once
rather than one instead of the other.

They are now two scopes. The RGB waveform is on `W` and the luma waveform on
`L`, and both can sit on screen together. Plain or Colored is the luma
waveform's own style choice.

The histogram went the other way and folded back into one scope with a
style, because Per Channel and Combined really are two drawings of one
measurement rather than two instruments.

## Ten bits a channel, on macOS

Where the compositor offers it, the screen is now read at ten bits a channel
instead of eight.

The interesting part is where this shows and where it does not, because it
divides cleanly. **A scope whose axis *is* the code is bounded by its bin
count; a scope that projects a code into a continuous position gains
immediately.** So the vectorscope gains: a smooth gradient's chroma resolves
into distinct positions instead of collapsing onto the eight-bit lattice,
which is exactly where banding was visible. The waveform and the histogram
plot into 256 levels and are unchanged, measurably so.

This carries no HDR range — highlights clip where they clipped before — and
a system that declines the deeper format degrades to whatever it does send.
Windows is unchanged.

## A quality choice that does not oversell itself

The right-click menu gained Quality, with Standard as the default and High
above it. High reads the screen twenty times a second rather than fifteen,
keeps full detail while a region is being dragged, and computes the
vectorscope image and the histogram plot at a finer step on a smaller pane.

What it does **not** do is claim anything on the axes where measurement
found no difference. Standard was already at the measured ceiling for
per-pass accuracy on a typical stack, so High is a responsiveness choice
rather than a precision one, and the documentation says so rather than
implying more.

A Low level was built and then dropped before release, for the same reason
in reverse: almost all of its saving came from a scope that has since been
removed, which left it a cadence switch wearing the name of a quality level.

## The rest

- **A scope selector** replaces the letter chips in the toolbar: a button
  whose popup lists every registered scope with a checkbox, and rows that
  can be dragged to set the pane order. The letter shortcuts are unchanged.
- **UI Scaling**, from 50% to 200%, multiplying the system scale rather than
  replacing it — so the operating system's own per-monitor scaling still
  leads and a window keeps the preference as it crosses displays.
- **A trace gamma slider** for the vectorscope, setting how hard the middle
  of the trace is lifted towards the densest chroma in the frame. It ships
  at the value that draws exactly what every earlier build drew, so an
  untouched install sees no change.
- **Documentation in the repository**: what each scope measures, the region
  tools, the complete keyboard and mouse reference, and troubleshooting.
  Those pages are the source of [the documentation here](/docs/).
- **A diagnostic recording opens by stating what is already true** — the
  capture format, its crop and its cadence, the scopes on offer and the
  letters they hold — rather than recording only what changes after it
  starts. A scope module that failed to load now reaches the log instead of
  a console nobody can be asked to look at.

## Before you update

Preferences may still change shape between releases without a migration, so
an update can return settings to their defaults. That will stop at 1.0.
