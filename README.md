# your-turn

A two-player turn-based revolver arcade game.  
Fire the revolver, or pass it — but the loaded chamber means **YOU LOSE**.

![Revolver](revolver.svg)

## How to play

1. Two players take turns.
2. On your turn, **PULL THE TRIGGER** or **SKIP** (pass).
3. Each player can skip only **once per round**.
4. A 1-in-6 chamber is loaded — firing it ends the game and that player loses.
5. After a loss, hit **REPLAY** to start a new round.

## Features

- Turn-based, two-player gameplay
- Single-use skip per player per round
- Spinning chamber animation
- Spring-loaded "YOU LOSE" flag on defeat
- One-click replay

## Tech stack

- HTML, CSS, JavaScript, SVG — no build step, no dependencies

## Run

Open `index.html` in any modern browser.

## Project structure

```
your-turn/
├── index.html
├── style.css
├── script.js
└── revolver.svg
```