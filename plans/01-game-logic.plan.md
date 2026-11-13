# Implementation Plan — Game Logic

Source spec: `specs/01-game-logic.md`

Covers game state, turns, outcomes, skip, and reset. Visuals and animation timing are handled in specs 02 and 03.

## Goal

Implement the turn-based revolver game rules.

## Approach

Plain JavaScript state machine plus DOM hooks. No frameworks, no external libraries.

## Steps

1. **State**

   - `phase`: `idle` | `spinning` | `lost`
   - `currentPlayer`: starts at `1`
   - `losingChamber`: random int `0`–`5`, picked at round start
   - `outcome`: random int `0`–`5`, only set while resolving
   - `skippedThisRound`: boolean, to enforce the once-per-round skip rule

2. **Round start** — run on game start and whenever a new round begins:

   - `phase = idle`
   - `currentPlayer = 1`
   - `losingChamber = random 0–5`
   - `skippedThisRound = false`

3. **Fire**

   - Only allowed in the `idle` phase.
   - Set `phase = spinning`.
   - After ~1000 ms: pick `outcome = random 0–5` and resolve.

4. **Resolve**

   - If `outcome === losingChamber` → set `phase = lost` (flag fires, see spec 03).
   - Otherwise → hand the turn to the next player.

5. **Skip**

   - Only allowed in the `idle` phase.
   - Only once per round (guard with `skippedThisRound`).
   - Hand the turn to the next player, same wrap-around as a safe fire.

6. **Turn hand-off / new round**

   - Advance `currentPlayer`, wrapping from `2` back to `1`.
   - After the last player, start a new round.

7. **Reset / replay**

   - Replay button → reset the current round (step 2).

## Acceptance Criteria Mapping

- [ ] Each fire has exactly a 1-in-6 chance of losing (random `0`–`5` vs `losingChamber`).
- [ ] A safe fire passes the turn to the next player.
- [ ] A player can skip at most once per round.
- [ ] Losing shows the flag result and offers a replay button.

## Out of Scope

- Animation timing and visuals (specs 02 and 03).
- Score keeping or persistence between rounds.
