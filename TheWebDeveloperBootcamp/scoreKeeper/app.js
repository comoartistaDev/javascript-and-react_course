const p1 = {
  score: 0,
  button: document.querySelector('#pl1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#pl2Button'),
  display: document.querySelector('#p2Display')
}

const playToSelect = document.querySelector('#playToSelect');
const resetButton = document.querySelector('#resetButton');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if(player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('text-green-500');
      opponent.display.classList.add('text-rose-500');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function() {
  updateScores(p1, p2);
})

p2.button.addEventListener('click', function() {
  updateScores(p2, p1);
})

playToSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset ();
})

function reset () {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0; 
    p.display.textContent = 0;
    p.display.classList.remove('text-green-500', 'text-rose-500');
    p.button.disabled = false;
  }
}

resetButton.addEventListener('click', reset);

//********************************************************** */
//lang version
// const p1Button = document.querySelector('#pl1Button');
// const p2Button = document.querySelector('#pl2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const playToSelect = document.querySelector('#playToSelect');
// const resetButton = document.querySelector('#resetButton');



// let p1Score = 0; 
// let p2Score = 0; 

// let winningScore = 3;
// let isGameOver = false;

// p1Button.addEventListener('click', function() {
//   if (!isGameOver) {
//     p1Score += 1;
//     if(p1Score === winningScore) {
//       isGameOver = true;
//       p1Display.classList.add('text-green-500');
//       p2Display.classList.add('text-rose-500');
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//     p1Display.textContent = p1Score;
//   }
// })

// p2Button.addEventListener('click', function() {
//   if (!isGameOver) {
//     p2Score += 1;
//     if(p2Score === winningScore) {
//       isGameOver = true;
//       p2Display.classList.add('text-green-500');
//       p1Display.classList.add('text-rose-500');
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//     p2Display.textContent = p2Score;
//   }
// })

// playToSelect.addEventListener('change', function() {
//   winningScore = parseInt(this.value);
//   reset ();
// })

// resetButton.addEventListener('click', reset);

// function reset () {
//   isGameOver = false;
//   p1Score = 0; 
//   p2Score = 0; 
//   p1Display.textContent = 0;
//   p2Display.textContent = 0;
//   p1Display.classList.remove('text-green-500', 'text-rose-500');
//   p2Display.classList.remove('text-green-500', 'text-rose-500');
//   p1Button.disabled = false;
//   p2Button.disabled = false;
// }