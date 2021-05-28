import getRecord from './getRecord.js';
import setRecord from './setRecord.js';

export default function checkCardRecord(Game) {
  const timeCurrent = parseFloat(document.querySelector('.clock').innerHTML.replace(/:/g, '.'));
  const { moves, score, time } = getRecord();
  if (moves >= Game.moves && score <= Game.score && time >= timeCurrent) {
    setRecord({ moves: Game.moves, score: Game.score, time: timeCurrent });
  }
}
