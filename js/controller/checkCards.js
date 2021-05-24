import Game from '../index.js';

export default function checkCard(event) {
  const selectedCard = event.target;
  const url = selectedCard.parentElement.style.backgroundImage.replace(/url|[\(\)]+/g, '');

  if (Game.checkLength()) {
    Game.deckClear();
    const cards = document.querySelectorAll('.select');
    cards.forEach((card) => card.classList.remove('select'));
  }

  Game.addDeck(url);
  selectedCard.classList.add('select');
}
