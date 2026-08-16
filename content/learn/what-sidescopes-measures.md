---
title: What SideScopes measures
sidebarTitle: Measurement boundary
weight: 100
group: Measurement
description: >-
  The display-referred screen-capture boundary behind every SideScopes trace,
  including color-management, HDR, and source-signal limitations.
lede: >-
  SideScopes analyzes pixels captured from a selected region of your screen.
  It measures the rendered output available to screen capture—not the source
  document, timeline, or light emitted by the display.
---

## Where the measurement occurs

SideScopes sits after the source application has rendered its interface and
image for the desktop. The operating system supplies pixels for the selected
screen region, and SideScopes derives every trace and readout from those
pixels.

This application-independent position is useful: the same instruments can
observe a browser, image editor, video application, compositor, reference
viewer, or any other visible content. It also defines what the result can and
cannot mean.

```text
source media or document
        ↓
application processing and color management
        ↓
desktop composition / screen-capture result  ←  SideScopes measures here
        ↓
display pipeline and physical screen
```

SideScopes cannot look backward through that chain. It does not know the
source bit depth, RAW latitude, timeline working space, node graph, document
profile, mastering metadata, or whether a value was limited at an earlier
stage. It also does not measure the final display's emitted light.

## Color assumptions

The desktop capture is requested or labeled as sRGB where the operating-system
API permits. SideScopes then interprets the received RGB values as full-range,
sRGB-like display data:

- the vectorscope uses a fixed Rec.709-style R′G′B′-to-chroma matrix;
- the luma waveform uses Rec.709-style encoded Y′ coefficients;
- CIELAB and CIEDE2000 readouts assume sRGB primaries, the sRGB transfer
  function, and a D65 white point.

sRGB and Rec.709 share primary chromaticities and a D65 white point, but they
are not complete synonyms: their encoding conventions and intended viewing
systems differ. SideScopes' plots are practical display-referred instruments,
not a declaration that every captured application is operating in Rec.709.

## What is not color-managed

SideScopes does not inspect or apply:

- the source document or media profile;
- the source application's working or timeline color space;
- the display ICC profile or calibration state;
- an output, printer, or paper profile;
- HDR mastering metadata or an absolute-nit transfer function.

It is therefore not a soft-proofing system, gamut checker, signal-compliance
monitor, colorimeter, or spectrophotometer. Vectorscope target boxes are
color-bar references, not gamut boundaries. Values from two displays or two
different desktop pipelines are not automatically comparable even when the
same nominal RGB triplet appears.

## Reliable uses

SideScopes is strongest when the measurement path is held constant and the
question concerns the visible result. Examples include:

- observing how a source-application adjustment changes its rendered output;
- locating channel or level relationships within a selected region;
- comparing corresponding areas in two images on the same system;
- checking continuity while keeping display and application conditions fixed;
- studying how the scopes encode the same pixels in different ways.

When delivery compliance or upstream signal values matter, use scopes inside
the application that owns that signal, configured for the relevant color
space and range. When physical display or print accuracy matters, use a
calibrated measurement device and the appropriate color-managed workflow.

The limitation is not hidden uncertainty around an otherwise source-level
measurement; it is the explicit boundary of a screen-capture instrument.

## Technical references

- [ITU-R BT.709](https://www.itu.int/rec/R-REC-BT.709/) defines the Rec.709
  system used as the coefficient reference.
- The International Color Consortium's registry entries for
  [BT.709](https://registry.color.org/rgb-registry/bt709) and
  [sRGB](https://registry.color.org/rgb-registry/srgb) list their shared primary
  chromaticities and their distinct transfer and viewing specifications.
