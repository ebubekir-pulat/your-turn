# Implementation Plan — Animation

Source spec: `specs/03-animation.md`

Adds the playful animations: the chamber spin and the flag result.

## Goal

Add the playful animations: the chamber spin and the flag result.

## Approach

CSS transforms/keyframes only. No animation libraries.

## Steps

1. **Chamber spin (~1 second)**

   - Add a `spinning` class while `phase === spinning` (game logic lives in spec 01).
   - Keyframes rotate the chamber group (e.g. `0deg → 1800deg`, linear) over ~1 s.
   - After the spin, resolve the outcome (the fire logic already waits ~1 s).

2. **Flag**

   - Start: flag hidden inside the barrel (offset/scale it out or fade it out).
   - Middle: flag extends out of the barrel (keyframe translates it outward).
   - End: flag bounces slightly (keyframe with a small vertical motion) and displays the result (`YOU LOST`).

## Acceptance Criteria Mapping

- [ ] Chamber spin lasts approximately one second.
- [ ] Flag animation runs hidden → extended → bounced and ends displaying `YOU LOST`.

## Out of Scope

- Realistic physics; a simple bouncy cartoon motion is enough.
- No animation libraries.
