import checkCard from '../controller/checkCards.js';
import createDivs from '../services/createDivs.js';
import createImages from '../services/createImages.js ';

export default function renderCards(pathList, gameContainer) {
  for (let index = 0; index < pathList.length; index += 1) {
    const div = createDivs('cards');
    div.style.backgroundImage = `url(${pathList[index]})`;
    const img = createImages('./public/images/back.jpg');
    img.addEventListener('click', (event) => checkCard(event));
    div.appendChild(img);
    gameContainer.appendChild(div);
  }
}
