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
   - `currentPlayer`: starts at `1`, and is either `0` or `1` (2 Player Game)
   - `losingChamber`: random int `0`–`5`, picked at round start
   - `currentChamber`: number, current chamber number, which is initialised to 0, and increments by 1 after each fire.
   - `skippedThisRound`: boolean, to enforce the once-per-round skip rule

2. **Round start** — run on game start and whenever a new round begins:

   - `phase = idle`
   - `currentPlayer = 1`
   - `losingChamber = random 0–5`
   - `currentChamber = 0`
   - `skippedThisRound = false`

3. **Fire**

   - Only allowed in the `idle` phase.
   - Set `phase = spinning`.
   - After ~1000 ms: Go to Resolve.

4. **Resolve**

   - If `chamberNumber === losingChamber` → set `phase = lost` (flag fires, see spec 03).
   - Otherwise → hand the turn to the next player and `chamberNumber` increments by 1.

5. **Skip**

   - Only allowed in the `idle` phase.
   - Only once per round (guard with `skippedThisRound`).
   - Hand the turn to the next player, `chamberNumber` stays the same.

6. **Turn hand-off / new round**

   - Advance `currentPlayer`, wrapping from `2` back to `1`.
   - After flag fires, or all chambers have been fired, show pop-up saying 'Press Reset to Play Again'.

7. **Reset / replay**

   - Replay button → reset the current round.

## Acceptance Criteria Mapping

- [ ] Each chamber has exactly a 1-in-6 chance of being the `losingChamber` (random `0`–`5`).
- [ ] A safe fire or skip passes the turn to the next player.
- [ ] A player can skip at most once per round.
- [ ] Losing shows the flag result and offers a replay button.

## Out of Scope

- Animation timing and visuals (specs 02 and 03).
- Score keeping or persistence between rounds.
