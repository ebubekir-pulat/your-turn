# Implementation Plan — Visual Design

Source spec: `specs/02-visual-design.md`

Makes the game look like a playful retro arcade toy.

## Goal

Make the game look like a playful retro arcade toy.

## Steps

1. **`index.html`**

   - Layout: dark background, revolver centered, buttons below it.
   - Revolver: SVG file referenced from the page (e.g. `revolver.svg`), centered, pointing right.

2. **`style.css`**

   - Background: charcoal black `#171717`.
   - Center the revolver horizontally and vertically.
   - `#trigger`: large red button, label `PULL THE TRIGGER`.
   - `#skip`: small blue button, label `SKIP`.
   - `#replay`: small reset/replay button, label `REPLAY`.
   - Player indicator: visible in a top corner of the UI, e.g. `PLAYER 1`.

3. **`revolver.svg`**

   - Cartoon style revolver, centered, pointing right.
   - Six visible chambers with alternating black and white squares.
   - The losing chamber carries the red flag with white `YOU LOSE!` text.

## Acceptance Criteria Mapping

- [ ] Revolver renders from SVG, centered and pointing right.
- [ ] Chamber alternation between black and white is visible; losing chamber shows the red flag.
- [ ] All three buttons exist with the correct labels and colors.
- [ ] Player number is visible in a top corner.

## Out of Scope

- Exact hand-drawn artwork details (any cartoon look is acceptable).
- Sound effects.
