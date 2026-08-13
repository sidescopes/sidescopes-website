---
title: Download
layout: download
description: >-
  Download SideScopes for macOS or Windows. Free and open source, built by
  GitHub Actions from a public tagged commit, with checksums to verify.
lede: >-
  Free, open source, and served from GitHub rather than from here — so the
  file you get is the one the build published.
---

## What it needs

**macOS 12 or later**, Apple silicon or Intel. On first run macOS asks for
the **Screen Recording** permission. SideScopes cannot do anything at all
without it — reading the screen is the entire job — and it asks for nothing
else. The permission is granted in System Settings under Privacy &
Security, and the application needs restarting afterwards.

**Windows 10 or later**, 64-bit. A single executable in a zip, with nothing
to install and no runtime to fetch first. Extract it anywhere and run it.

**Linux** is in progress and not released yet. The port runs the full
application on X11 and Wayland desktops; it is waiting on packaging rather
than on features. Watch [the news](/news/) or the repository.

## What it does on your machine

It reads the screen. That is all it does.

There is no network access of any kind, no account, no telemetry, no
auto-updater and no background process. It writes one preferences file and
nothing else. When you quit it, nothing is left running.

The pixels it measures never leave your machine, because there is no code
in it that could send them anywhere.
