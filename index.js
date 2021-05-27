import GameStates from './model/GameStates.js';
import finishedContainer from './view/finishedContainer.js';
import renderGame from './view/renderGame.js';
import timer from './view/timer.js';

const contentContainer = document.getElementById('content-container');
const Game = new GameStates(0, 0);

export default Game;

renderGame(contentContainer);
timer();

// finishedContainer();
