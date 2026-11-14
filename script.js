// Game state
let phase = 'idle';
let currentPlayer = 1;
let losingChamber = 0;
let chamberNumber = 0;
let player1Skipped = false;
let player2Skipped = false;

function startRound() {
  phase = 'idle';
  currentPlayer = 1;
  losingChamber = Math.floor(Math.random() * 6);
  chamberNumber = 0;
  player1Skipped = false;
  player2Skipped = false;
  const chambers = document.getElementById('chambers');
  if (chambers) chambers.classList.remove('spinning');
  const flag = document.getElementById('flag');
  if (flag) flag.classList.remove('fired');
  updateUI();
}

function nextPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function fire() {
  if (phase !== 'idle') return;
  phase = 'spinning';
  updateUI();
  setTimeout(() => {
    if (chamberNumber === losingChamber) {
      phase = 'lost';
      showFlag();
    } else {
      chamberNumber++;
      nextPlayer();
      phase = 'idle';
    }
    updateUI();
  }, 1000);
}

function skip() {
  if (phase !== 'idle') return;
  if (currentPlayer === 1 && player1Skipped) return;
  if (currentPlayer === 2 && player2Skipped) return;
  if (currentPlayer === 1) player1Skipped = true;
  else player2Skipped = true;
  nextPlayer();
  updateUI();
}

function reset() {
  startRound();
}

function showFlag() {
  const flag = document.getElementById('flag');
  if (flag) {
    const span = flag.querySelector('span');
    if (span) span.textContent = 'YOU LOSE';
    flag.classList.add('fired');
  }
}

function updateUI() {
  const playerEl = document.getElementById('player');
  if (playerEl) playerEl.textContent = 'Player ' + currentPlayer;
  const replay = document.getElementById('replay');
  if (replay) replay.style.display = phase === 'lost' ? 'block' : 'none';
  const chambers = document.getElementById('chambers');
  if (chambers) chambers.classList.toggle('spinning', phase === 'spinning');
}

startRound();

// DOM hooks
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('trigger');
  if (trigger) trigger.addEventListener('click', fire);
  const skipBtn = document.getElementById('skip');
  if (skipBtn) skipBtn.addEventListener('click', skip);
  const replayBtn = document.getElementById('replay');
  if (replayBtn) replayBtn.addEventListener('click', reset);
});
