const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

function randomList(size) {
  const randomArray = [];
  while (randomArray.length < size) {
    const randomNum = randomNumber(0, size - 1);
    if (!randomArray.includes(randomNum)) randomArray.push(randomNum);
  }
  return randomArray;
}

function createList() {
  const arrayList = [];
  let cont = 0;
  while (cont < 2) {
    for (let index = 1; index <= 10; index += 1) {
      arrayList.push(index);
    }
    cont += 1;
  }
  return arrayList;
}

export default function createPathList() {
  const list = createList();
  const randomOder = randomList(list.length);
  const arrayPath = [];

  for (let index = 0; index < randomOder.length; index += 1) {
    const path = `./public/images/card${list[randomOder[index]]}.jpg`;
    arrayPath.push(path);
  }

  return arrayPath;
}
