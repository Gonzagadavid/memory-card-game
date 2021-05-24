import Game from '../index.js';

export default function checkCard(event) {
  const selectedCard = event.target;
  let url = selectedCard.parentElement.style.backgroundImage.replace(/url|[\(\)"]+/g, '');

  if (Game.checkLength()) {
    Game.deckClear();
    const cards = document.querySelectorAll('.select');
    cards.forEach((card) => card.classList.remove('select'));
  }

  Game.addDeck(url);
  selectedCard.classList.add('select');

  if (Game.checkLength()) Game.addMoves();

  if (Game.checkLength()) {
    if (Game.checkEqual()) {
    }
  }

  event.target.removeEventListener('click', (event) => checkCard(event));
}
