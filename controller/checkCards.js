import Game from '../index.js';
import removeClass from '../services/removeClass.js';
import renderStates from '../view/renderStates.js';

export default function checkCard(event) {
  const selectedCard = event.target;
  let url = selectedCard.parentElement.style.backgroundImage.replace(/url|[\(\)"]+/g, '');

  if (Game.checkLength()) {
    Game.deckClear();
    Game.idsClear();
    removeClass('select');
  }

  if (Game.checkIds(selectedCard.id)) return;

  Game.addDeck(url);
  Game.addIds(selectedCard.id);
  selectedCard.classList.add('select');

  if (Game.checkLength()) Game.addMoves();

  if (Game.checkLength() && Game.checkEqual()) {
    const selectedCards = document.querySelectorAll('.select');
    selectedCards.forEach((card) => card.parentElement.classList.add('completed'));
    Game.addScore();
  }

  console.log(Game);
  event.target.removeEventListener('click', (event) => checkCard(event));
  renderStates();
}
