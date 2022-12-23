//Rainbow text exercise
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!
const word = document.querySelectorAll('span');

for(let i = 0; i < word.length; i++) {
  word[i].style.color = colors[i];
}


//ClassList Practice
const lists = document.querySelectorAll('li');

// lists.forEach((list) => {
//   list.classList.toggle('highlight');
// })

// for(let i = 0; i < lists.length; i++) {
//   lists[i].classList.toggle('highlight');
// }

for(let list of lists) {
  list.classList.toggle('highlight');
}


//100 Button Insanity Exercise
const container = document.querySelector('#container');

for(let i = 0; i < 100; i++) {
  const buttons = document.createElement('button');
  buttons.innerText = "Hey";
  buttons.classList.add('button');
  container.appendChild(buttons);

}