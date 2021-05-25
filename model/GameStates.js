export default class GameStates {
  constructor(moves, score) {
    this.moves = moves;
    this.score = score;
    this.deck = [];
    this.trying = 0;
  }

  addDeck(path) {
    this.deck.push(path);
    return true;
  }

  checkLength() {
    return this.deck.length === 2;
  }

  deckClear() {
    this.deck.pop();
    this.deck.pop();
  }

  addMoves() {
    this.moves += 1;
    this.addTrying();
  }

  checkEqual() {
    return new Set(this.deck).size === 1;
  }

  addTrying() {
    this.trying += 10;
  }

  addScore() {
    this.score += this.trying > 100 ? 10 : 110 - this.trying;
    this.trying = 0;
    this.moves = 0;
  }
}
