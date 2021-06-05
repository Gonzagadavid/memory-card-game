import Game from '../index.js';
import createDivs from '../services/createDivs.js';
import getRecord from '../services/getRecord.js';
import createFinishedSates from './createFinishedStates.js';

export default function finishedContainer() {
  const contentContainer = document.getElementById('content-container');
  const finished = createDivs('finished');
  contentContainer.appendChild(finished);
  const container = createDivs('finished-game');
  finished.appendChild(container);

  const title = document.createElement('h2');
  title.innerHTML = 'Finished';
  container.appendChild(title);

  const recordText = document.createElement('p');
  recordText.innerHTML = 'Record:';
  container.appendChild(recordText);

  const record = getRecord();

  record.time = record.time.toString().replace(/\./g, ':');

  createFinishedSates(container, record);

  const yourScore = document.createElement('p');
  yourScore.innerHTML = 'Your score:';
  container.appendChild(yourScore);

  const time = document.querySelector('.clock').innerHTML;
  const currentStates = { moves: Game.moves, score: Game.score, time };
  createFinishedSates(container, currentStates);

  const gif = document.createElement('img');
  gif.src =
    'https://media2.giphy.com/media/35nU79vBbeOm4/giphy.gif?cid=790b76111d7b976bbe744ccc09bb733514349bef33a8c007&rid=giphy.gif&ct=s';

  finished.appendChild(gif);

  const btnAgain = document.createElement('button');
  btnAgain.innerHTML = '<i class="fas fa-redo"></i> Try Again';
  btnAgain.className = 'btn-again';
  btnAgain.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
    window.location.reload();
  });
  container.appendChild(btnAgain);
}
