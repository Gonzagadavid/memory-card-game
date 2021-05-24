export default class GameStates {
  constructor(moves, score) {
    this.moves = moves;
    this.score = score;
    this.deck = [];
    this.trying;
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
  }

  checkEqual() {
    return new Set(this.deck).size === 1;
  }
}
