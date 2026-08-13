---
title: "SideScopes 0.2.0"
date: 2026-07-17
postKind: release
version: "0.2.0"
description: >-
  Every scope becomes a module behind one C interface, and analysis starts
  using more than one core.
lede: >-
  A structural release. Little of it is visible, and it is the reason the
  later ones were possible.
---

## Every scope is a module

The scopes — the built-in ones included — now sit behind a single C
interface, and the application knows them only through it. A scope declares
its own identity, its shortcut letter, the parameters it wants and the shape
of pane it prefers, and the interface, the menus and the preferences are all
driven by those declarations rather than by a list of scope names written
into the application.

The practical effect is that adding a scope stopped being surgery on the
application. Everything after this release that added or removed one — the
luma waveform becoming a scope of its own, a scope being deleted outright —
was possible because of this.

## Analysis across cores

The vectorscope and the waveform now compute in parallel across the machine's
cores instead of on one.

The important property is that the result is **bit-exact regardless of how
many cores do the work**. That is not a happy accident; it is checked against
fixed reference images on every push, on three machines with different core
counts, which is what makes the guarantee worth stating.

## Also

- Colour values on the picker swatches as code, percent and hex.
- Window picking respects stacking, so a window buried under the ones above
  it is no longer offered as though it were visible.
- Pinning a colour matches what the live readout shows.
- A corrupt scope-module file no longer hangs the dynamic configuration.
