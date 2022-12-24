const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');

button.addEventListener('click', () => {  
  const newColor = makeRandomColor();
  body.style.backgroundColor = newColor;
  h1.innerText = newColor;
})

const makeRandomColor = () => {
  const colorRed = Math.floor(Math.random() * 255);
  const colorGreen = Math.floor(Math.random() * 255);
  const colorBlue = Math.floor(Math.random() * 255);
  return `rgb(${colorRed},${colorGreen},${colorBlue})`;
}