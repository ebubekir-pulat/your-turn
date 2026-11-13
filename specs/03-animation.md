# Spec 03 — Animation

## Goal

Add the playful animations: the chamber spin and the flag result.

## Scope

Covers CSS transforms/keyframes only. No animation libraries.

## Requirements

1. **Chamber spin** (~1 second): chambers visually spin, then resolve to the next chamber (see spec 01).
2. **Flag**:
   - Start: flag hidden inside the barrel.
   - Middle: flag extends out of the barrel.
   - End: flag bounces slightly and displays the result (`YOU LOST`).

## Acceptance Criteria

- Chamber spin lasts approximately one second.
- Flag animation runs hidden → extended → bounced and ends displaying `YOU LOST`.

## Out of Scope

- Realistic physics; a simple bouncy cartoon motion is enough.
