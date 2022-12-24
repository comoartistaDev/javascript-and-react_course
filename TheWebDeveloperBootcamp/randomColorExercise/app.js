const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  console.log('ckick');
  const colorRed = Math.floor(Math.random() * 255);
  const colorGreen = Math.floor(Math.random() * 255);
  const colorBlue = Math.floor(Math.random() * 255);
  const newColor = `rgb(${colorRed},${colorGreen},${colorBlue})`;
  body.style.backgroundColor = newColor;
  h1.innerText = newColor;
})