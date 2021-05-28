export default class GameStates {
  constructor(moves, score) {
    this.moves = moves;
    this.score = score;
    this.deck = [];
    this.ids = [];
    this.trying = 0;
    this.finishedGame = false;
  }

  addDeck(path) {
    this.deck.push(path);
    return true;
  }

  addIds(id) {
    this.ids.push(id);
  }

  checkIds(id) {
    return this.ids.includes(id);
  }

  checkLength() {
    return this.deck.length === 2;
  }

  deckClear() {
    this.deck.pop();
    this.deck.pop();
  }

  idsClear() {
    this.ids.pop();
    this.ids.pop();
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
  }

  finishedGameRender() {
    this.finishedGame = true;
  }
}
