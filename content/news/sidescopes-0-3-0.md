---
title: "SideScopes 0.3.0"
date: 2026-07-20
postKind: release
version: "0.3.0"
description: >-
  Regions attached to windows or detected faces, an editable labeled border,
  and diagnostic logging from the application menu.
lede: >-
  Regions can now follow visible content instead of remaining fixed to a
  desktop coordinate.
---

## Added

- Window-attached regions that follow the selected window and become active
  with it.
- Face selection and tracking where platform detection is available.
- A labeled desktop border with move, resize, attach or detach, and close
  controls.
- In-application diagnostic recording and access to the log folder.
- A Windows option to include SideScopes in external screen captures for
  troubleshooting.

## Changed

- Window-attached regions preserve their measured size when the window is
  resized. They are constrained to remain inside a smaller window and return to
  their stored geometry when space becomes available.
- Region chrome uses neutral gray so it is less likely to act as a distracting
  color reference beside the selected image.

Face selection is only a geometric tracking aid. The application does not
classify complexion or interpret the selected skin color.
