import setRecord from './setRecord.js';

export default function getRecord() {
  const recordInitial = { moves: 1000, score: 0, time: 10 };
  const recordJson = localStorage.getItem('memory-game');
  const record = recordJson ? JSON.parse(recordJson) : recordInitial;
  console.log(record);
  return record;
}
