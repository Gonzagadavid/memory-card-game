import Game from '../index.js';

export default function timer() {
  const time = document.querySelector('.time');
  const text = document.createElement('p');
  text.innerHTML = 'Time:';
  time.appendChild(text);
  const clock = document.createElement('p');
  clock.className = 'clock';
  time.appendChild(clock);
  let seconds = 0;
  let minutes = 0;

  const interval = setInterval(() => {
    if (Game.finishedGame) clearInterval(interval);
    seconds += 1;
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }

    const secondsText = seconds < 10 ? `0${seconds}` : seconds;
    const minutesText = minutes < 10 ? `0${minutes}` : minutes;
    clock.innerHTML = `${minutesText}:${secondsText}`;
  }, 1000);
}
