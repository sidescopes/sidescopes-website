---
title: Color picker and comparison
sidebarTitle: Color picker
weight: 70
group: Instruments
description: >-
  Sampling, area averages, sRGB and CIELAB readouts, and the correct use of
  CIEDE2000 color difference.
lede: >-
  The color picker reports captured pixel values and compares a live sample
  with a pinned reference. It is most reliable when both samples share the
  same defined display path.
---

## Point and area samples

The live readout follows the pixel under the pointer. A click pins that color;
a drag pins the average of a rectangle. An area average is generally more
repeatable for textured material, sensor noise, antialiasing, or compressed
imagery because it does not depend on one pixel.

The appropriate sample size depends on the question. A point can inspect a
specific graphic value or edge pixel. A small, visually uniform area is better
for comparing surfaces, skin, sky, or another naturally varying subject. Avoid
averaging across boundaries unless the mixture itself is what you intend to
measure.

## Values and assumptions

SideScopes reports the captured RGB code values and derives perceptual
coordinates by treating those values as sRGB under a D65 white point. It does
not read the source document profile, timeline working space, display ICC
profile, mastering metadata, or printer profile.

The readout is therefore a measurement of the screen-captured result under a
stated assumption. It is not a probe into the source application's internal
pixel values, and it is not a spectrophotometer measurement of emitted or
reflected light.

## CIEDE2000 comparison

When a pinned color is selected as the reference, SideScopes converts both
samples from assumed sRGB to CIELAB and reports **ΔE00** using the CIEDE2000
formula. It also shows signed diagnostic components:

- **ΔL\***: change in CIELAB lightness;
- **ΔC\***: change in CIELAB chroma;
- **ΔH\***: a chroma-weighted hue-difference term.

These components describe the difference; they do not map one-to-one to
exposure, saturation, white-balance, or grading controls. CIEDE2000 also
weights and couples its lightness, chroma, and hue terms, so its total is not a
simple sum of the three displayed components.

## Interpreting ΔE00

A smaller ΔE00 means the two assumed-sRGB samples are closer under the
CIEDE2000 model; zero means their converted CIELAB values are identical. There
is no universal pass/fail threshold. Visibility and acceptability depend on
the colors involved, image structure, sample area, viewing conditions,
display, observer, and the requirements of the workflow.

Use ΔE00 to compare like with like: the same patch before and after a change,
corresponding regions in two outputs, or repeated measurements through a
controlled path. Do not treat it as proof that two physical objects, displays,
or prints match.

Reference: the CIE publishes the normative
[CIEDE2000 color-difference formula](https://www.cie.co.at/publications/colorimetry-part-6-ciede2000-colour-difference-formula-1).
