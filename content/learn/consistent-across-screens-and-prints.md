---
title: Holding up on other screens, and on paper
weight: 100
description: >-
  You cannot control the screen someone else uses. You can remove the
  faults that go wrong on every screen — and those are the measurable ones.
lede: >-
  The photograph that looked right on your monitor and wrong on a phone
  usually failed for a reason that was measurable before you exported it.
---

## Why it changes

An image leaves your machine and lands somewhere with different rules.

**A different gamut.** Your display may reach colours a phone cannot, and a
print reaches fewer still. Colour outside the destination's range has to be
brought inside it somehow, and something is always lost in the bringing —
usually the separation between two nearly-identical saturated tones, which
turns a graduated sunset into a flat orange shape.

**A different brightness, and a different room.** A monitor at 300 nits in
a dim room and a phone at 600 in sunlight are not the same instrument. A
print is not an instrument at all: it emits nothing and shows you only the
light in the room, which is why a print in a gallery and the same print on
a kitchen table are two different pictures.

**A different dynamic range.** This is the big one for print. A good screen
manages a contrast ratio in the thousands. A print on matte paper manages
somewhere around a hundred to one. Shadow separation that reads clearly on
your screen has nowhere to go on paper — it collapses into one dark mass.

**A different state of calibration.** Most screens in the world have never
been profiled and are set however they left the factory.

## What measurement can and cannot do about it

It cannot make an uncalibrated phone show your photograph correctly.
Nothing can, and any tool claiming otherwise is selling something.

What it can do is remove the faults that are wrong *everywhere* — the ones
that live in the file rather than in the display. Those are exactly the
faults a scope is good at finding, and there are four worth checking before
anything leaves your machine.

### Clipped channels

A clipped highlight has no detail to recover, on any device, ever. On a
bright screen the eye forgives it because the surrounding tones are bright
too. On paper, where the brightest thing available is unprinted white
paper, a clipped area becomes an obvious flat blank.

The waveform says whether — a trace lying flat against the top rather than
coming to a peak. The parade says which channel, which is what tells you
whether it is fixable by pulling one slider or by reshooting.

The same applies at the bottom. A trace crushed against zero is shadow
detail that no amount of lifting on someone else's screen will bring back.

### A colour cast

A cast is in the file. Every screen that shows the file shows the cast, and
then adds its own on top. It is the fault most likely to be invisible to
you specifically — because you adapted to it — and perfectly visible to
everyone else, who did not.

The vectorscope settles it in a glance: the body of the cloud sits off
centre, or it does not.

### Saturation pushed to the edge

Colour sitting far out on the vectorscope is the colour most at risk of
being compressed by a smaller-gamut destination. Deep cyans in a sky and
saturated reds in fabric or foliage are the usual offenders — both sit well
outside what most papers can hold.

This does not mean avoid saturation. It means know which parts of the
picture are living out at the edge, so that when a print comes back with a
flat sky you already know why, and which slider caused it.

### Shadows that carry the picture

If most of the tonal information in an image sits in the bottom quarter of
the waveform, it is a photograph that depends on a good display. On paper
it will be a dark shape. That is a compositional fact you can see in the
trace before you commit to it, and it is not otherwise obvious on a bright
screen in a dark room.

## A short pre-export check

1. **Waveform** — does the trace flatten against the top or the bottom? If
   yes, that detail is gone everywhere.
2. **Parade** — do the three channels reach the ceiling together, or does
   one arrive early? An early arrival is a cast in the highlights.
3. **Vectorscope** — is the body of the cloud centred? Are the arms
   reaching past the targets, and do you mean them to?
4. **Luma waveform** — is the exposure even across the frame, or is there a
   slope you did not intend?

None of this takes a minute once the habit is there, and it catches the
class of problem that only shows up after the file has left.

<div class="note">
<span class="note-title">Being straight about what SideScopes measures</span>
<p>SideScopes reads the pixels your editor has drawn on screen. It does not
yet apply an ICC transform, so it is <strong>not</strong> a soft-proofing
tool and it will not tell you what a specific paper and printer will do —
your editor's own soft proof is the instrument for that, and colour
management here is planned rather than shipped.</p>
<p>What the readings above rely on is structure rather than absolute
colorimetry: whether a trace is flat against a limit, whether a cloud is
centred, whether channels agree. Those hold regardless, which is why they
are the four worth checking.</p>
</div>

## The habit that actually helps

Calibrate the screen you edit on, if you have not. It is the one variable
you own, and everything above is easier from a known starting point.

Then measure the things that do not depend on it. A photograph with no
clipping, no cast, deliberate saturation and even exposure will not look
identical everywhere — nothing does — but it will look like the same
photograph everywhere, which is the achievable goal.

Back to [the guides](/learn/), or on to
[the documentation](/docs/).
