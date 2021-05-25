import createDivs from '../services/createDivs.js';
import createPathList from '../services/createPathList.js';
import renderCards from './renderCards.js';

export default function renderGame(contentContainer) {
  const title = document.createElement('h1');
  title.innerHTML = 'Memory Game';
  contentContainer.appendChild(title);

  const statesContainer = createDivs('states-container');
  contentContainer.appendChild(statesContainer);

  const gameContainer = createDivs('game-container');
  contentContainer.appendChild(gameContainer);

  const pathList = createPathList();

  renderCards(pathList, gameContainer);
}
