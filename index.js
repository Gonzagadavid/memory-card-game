import GameStates from './model/GameStates.js';
import renderGame from './view/renderGame.js';

const contentContainer = document.getElementById('content-container');
const Game = new GameStates(0, 0);

export default Game;

renderGame(contentContainer);
