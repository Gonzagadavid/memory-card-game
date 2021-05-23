import createDivs from './functions/createDivs.js';

const contentContainer = document.getElementById('content-container');

const statesContainer = createDivs('states-container');
contentContainer.appendChild(statesContainer);

const gameContainer = createDivs('game-container');
contentContainer.appendChild(gameContainer);
