export default function removeClass(classValue) {
  const arrayClass = document.querySelectorAll(`.${classValue}`);
  arrayClass.forEach((element) => element.classList.remove(`${classValue}`));
}
