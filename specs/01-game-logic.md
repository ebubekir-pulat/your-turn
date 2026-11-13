# Spec 01 — Game Logic

## Goal

Implement the turn-based revolver game rules.

## Scope

Covers game state, turns, outcomes, skip, and reset. Excludes visuals and animation timing (see specs 02 and 03).

## Requirements

1. **State**

   - `phase`: `idle` | `spinning` | `lost`
   - `currentPlayer`: number, either `1` or `2`
   - `losingChamber`: number, index `0`–`5`, chosen randomly at round start
   - `chamberNumber`: number, current chamber number, which is initialised to 0, and increments by 1 after each fire.

2. **Round start**

   - Phase becomes `idle`.
   - `currentPlayer` resets to `1`.
   - `losingChamber` is picked randomly among the six chambers.

3. **Fire**

   - Only allowed in the `idle` phase.
   - Phase becomes `spinning`.
   - After ~1 second, if `chamberNumber` equals `losingChamber` -> phase becomes `lost`, flag fires (see spec 03).
   - Otherwise → pass the turn to the next player, `chamberNumber` increments by 1.

4. **Skip**

   - Skip is available only in the `idle` phase.
   - A player may skip only once per round.
   - Skipping hands the turn to the next player, without changing `chamberNumber`.

6. **Reset / replay**

   - The replay button restarts the current round.

## Acceptance Criteria

- Each chamber has exactly a 1-in-6 chance of being the `losingChamber`.
- A safe fire or skip passes the turn to the next player.
- A player can skip at most once per round.
- Losing shows the flag result and offers a replay button.

## Out of Scope

- Animation timing and visuals (specs 02 and 03).
- Score keeping or persistence between rounds.
