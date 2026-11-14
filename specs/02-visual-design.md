# Spec 02 — Visual Design

## Goal

Make the game look like a playful retro arcade toy.

## Scope

Covers layout, colors, revolver artwork, buttons, and player indicator.

## Requirements

1. **Background**: white.
2. **Revolver**: cartoon style, centered, pointing right. Hand-drawn and saved as an SVG file, referenced from the page. Six visible chambers with alternating black and white squares; the losing chamber carries the red flag with white `YOU LOSE!` text.
3. **Buttons**:
   - Large red button labelled `PULL THE TRIGGER`.
   - Small blue skip button.
   - Small reset/replay button.
4. **Player indicator**: player number shown in the top right corner of the UI (e.g. `PLAYER 1`).
5. **Feel**: retro arcade cabinet meets cartoon animation; playful, not realistic.

## Acceptance Criteria

- Revolver renders from SVG, centered and pointing right.
- Chamber alternation between black and white is visible; losing chamber shows the red flag.
- All three buttons exist with the correct labels and colors.
- Player number is visible in the top right corner.

## Out of Scope

- Exact hand-drawn artwork details (any cartoon look is acceptable).
- Sound effects.
