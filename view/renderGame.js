import createDivs from '../services/createDivs.js';
import createPathList from '../services/createPathList.js';
import renderContainerStates from './reanderContainerStates.js';
import renderCards from './renderCards.js';

export default function renderGame(contentContainer) {
  const statesContainer = createDivs('states-container');
  contentContainer.appendChild(statesContainer);

  const gameContainer = createDivs('game-container');
  contentContainer.appendChild(gameContainer);

  const pathList = createPathList();

  renderContainerStates();
  renderCards(pathList, gameContainer);
}
