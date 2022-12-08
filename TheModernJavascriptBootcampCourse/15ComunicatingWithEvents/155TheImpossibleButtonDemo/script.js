const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
  console.log('MOUSED OVER ME!');

//calculate how many px we are use
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);

  btn.style.top = `${width}px`;
  btn.style.left = `${height}px`;
})

btn.addEventListener('click', () => {
  btn.innerText = 'You got me!';
  document.body.style.backgroundColor = 'green';
})