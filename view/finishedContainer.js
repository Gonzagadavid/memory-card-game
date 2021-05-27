import createDivs from '../services/createDivs.js';

export default function finishedContainer() {
  const contentContainer = document.getElementById('content-container');
  const container = createDivs('finished-game');
  contentContainer.appendChild(container);
}
