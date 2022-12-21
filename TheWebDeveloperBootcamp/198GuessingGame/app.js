//parseInt приймає строку, повертає число
//якщо парсити щось що не є числом - повернеться NaN

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("enter your first guess!"));
 let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  attempts++;
  if (guess >= targetNum) {
    guess = prompt("Too high! Enter a new guess!");
  } else {
    guess = prompt("Too small! Enter a new guess!"); 
  } 
}

if(guess === 'g') {
  alert("OK, YOU QUIT!")
} else {
  alert(`You got it! It took you ${attempts} guesses`);
}


