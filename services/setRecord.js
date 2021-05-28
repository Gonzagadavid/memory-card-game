export default function setRecord(game) {
  const gameJson = JSON.stringify(game);
  localStorage.setItem('memory-game', gameJson);
  console.log('game: ', game);
}
