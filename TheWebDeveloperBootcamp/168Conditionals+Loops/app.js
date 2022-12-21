// const password = prompt("please enter a new password");

// if (password.length >= 6) {
//   if(password.indexOf(' ') === -1) {
//     console.log("Vallid Password!");
//   } else {
//     console.log("Password cannot contain spaces!");
//   } 
// } else {
//   console.log("PASSWORD TOO SHORT! Must be 6+ characters");
// }



// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

// for(let i = 0; i <= people.length-1; i++) {
//     let peopleUp = people[i].toUpperCase();
//     console.log(peopleUp);
// }



// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);

//   for (let j = 1; j <= 3; j++) {
//     console.log(`    j is: ${j}`);
//   }
// }



//195 NESTED LOOPS
// const seatingChart = [
//   ['Kristen', 'Eric', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yumma', 'Sakura', 'Jack', 'Erica']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//   let row = seatingChart[i];
//   console.log(`ROW #${i + 1}`)
//   for (j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }



//199 LOOP FOR OF (Good for arrays and objects literals)
// for (let row of seatingChart) {
//   for (let name of row) {
//     console.log(name);
//   }
// }

// for (let char of "hello world") {
//   console.log(char);
// }


//200LOOP IN (for objects)
const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72
}

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

//Special Object Methods
// Object.keys(testScores)
// Object.values(testScores)
// Object.entries(testScores) 

let total = 0;
let scores =  Object.values(testScores)
for (let score of scores) {
  total += score;
}

console.log(total / scores.length)


//196 WHILE LOOP (loop for game)
// let num = 0;
// while(count < 10) {
//   console.log(count);
//   count++
// }



// const secret = "BabyHippo";
// let guess = prompt ("enter the secret code...");
// while(guess !== secret) {
//   guess = prompt ("enter the secret code...");
// }

// console.log("Congrats you got the secret!!")



//197 Break Keyword
// let input = prompt("Hey, say something")
// while(true) {
//   input = prompt(input);
//   if(input.toLowerCase() === "stop copying me") break;
// }

// console.log("OK YOU WIN!")


// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }