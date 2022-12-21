// function isSnakeEyes(player1, player2) {
//   if(player1 === 1 && player2 ===1) {
//     console.log("Snake Eyes!");
//   } else {
//     console.log("Not Snake Eyes!")
//   }
// }

// isSnakeEyes(1,1) 
// isSnakeEyes(1,5) 
// isSnakeEyes(4,5)


// function add(x,y) {
//   if(typeof x !== 'number' || typeof y !== 'number') {
//     return false;
//   }

//   let sum = x + y;
//   return sum;
// }

// return
// 1) get values out of a function, so we can save them and capture them 
// 2) stop function
// 3) we can only return a single value 



// 40 Last Element Exercise
// function lastElement(arr) {
//   if (arr.length === 0) {
//     return null;
// }
//   return arr[arr.length - 1];
// }

// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null


//41 Capitalize Exercise
// function capitalize(str) {
//  let firstLetter = str.slice(0, 1).toUpperCase();
//  let nextLetters = str.slice(1);
//  return firstLetter + nextLetters;
// }

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"


// 42 Sum Array Exercise
// function sumArray (arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i ++) {
//     total += arr[i];
//   }
//   console.log(total);

// }
// sumArray([2,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101


// function returnDay(num) {
//   days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   if (num < 1 || num > 7) {
//     return null;
//   } else {
//     return days[num - 1];
//   }
// }

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null


//44 Function Expression Exercise
// const square = function (num) {
//   return +parseInt(`${num * num}`);
// }

// square(4) //16
// square(3) //9


// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   }
// }

// makeBetweenFunc(0,60);


//45 Methods Exercise
// const square = {
//   area(side) {
//       return parseint(`${side * side}`);
//   },
//   perimeter(side) {
//       return side * 4
//   }
// }
// square.area(10) //100
// square.perimeter(10) //40


// 216. This
const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish told',
  meow() {
    console.log("This is:", this)
    console.log(`${this.name} says "Meow"`) //Blue Steele says "Meow"

  }
}

const meow2 = cat.meow; //console.log(`${this.name} says "Meow"`)
//The value of THIS depends of the invocation context of the function it is used in- контекст виклику


//46 Egg Laying Exercise
const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
      this.eggCount++;
      return "EGG";
  }
}

// 217 Try/Catch very using for Fetch
// AFTER! запуститься якщо ми використаємо конструкцію try/catch для сумнівної ділянки коду

try {
  hello.toUpperCase();
} catch {
  console.log("ERROR")
}

console.log("AFTER!")


function yell(msg) {
  console.log(msg.toUpperCase().repeat(3));
}