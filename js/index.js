import GameStates from './model/GameStates.js';
import createDivs from './services/createDivs.js';
import createPathList from './services/createPathList.js';
import renderCards from './view/renderCards.js';

const contentContainer = document.getElementById('content-container');

const Game = new GameStates(0, 0);

const statesContainer = createDivs('states-container');
contentContainer.appendChild(statesContainer);

const gameContainer = createDivs('game-container');
contentContainer.appendChild(gameContainer);

const pathList = createPathList();

renderCards(pathList, gameContainer);

export default Game;
