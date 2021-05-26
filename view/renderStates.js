import Game from '../index.js';

export default function renderStates() {
  const moves = document.querySelector('.moves');
  moves.innerHTML = `Moves: ${Game.moves}`;

  const score = document.querySelector('.score');
  score.innerHTML = `Score: ${Game.score}`;
}
