import createDivs from '../services/createDivs.js';
import renderStates from './renderStates.js';

export default function renderContainerStates() {
  const statesContiner = document.querySelector('.states-container');

  const moves = createDivs('moves');
  statesContiner.appendChild(moves);

  const score = createDivs('score');
  statesContiner.appendChild(score);

  const time = createDivs('time');
  statesContiner.appendChild(time);

  renderStates();
}
