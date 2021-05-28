import createDivs from '../services/createDivs.js';

export default function createFinishedSates(container, statesObj) {
  const finishedContent = createDivs('finished-content');
  container.appendChild(finishedContent);

  const moves = createDivs('finished-moves');
  moves.innerHTML = `Moves: ${statesObj.moves}`;
  finishedContent.appendChild(moves);

  const score = createDivs('finished-score');
  score.innerHTML = `Score: ${statesObj.score}`;
  finishedContent.appendChild(score);

  const time = createDivs('finished-time');
  time.innerHTML = `Time: ${statesObj.time}`;
  finishedContent.appendChild(time);
}
