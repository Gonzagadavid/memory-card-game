export default function createImages(path) {
  const img = document.createElement('img');
  img.id = Date.now() + Math.round(Math.random() * 1000);
  img.src = path;
  return img;
}
