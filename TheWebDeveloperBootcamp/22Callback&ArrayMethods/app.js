//**********************************
//220 forEach
//So forEach these days, not actually used very often because we do have access to four of.
//But it's our first and simplest example of these array callback methods, these methods that expect a function to be passed in.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// numbers.forEach(function (elem) {
//   if (elem % 2 === 0) {
//     console.log(elem)
//   }
// })  


//альтернатива forEach
// for (let elem of numbers) {
//   console.log(elem)
// }


//**********************************
const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984
  }, 
  {
    title: 'Stand By Me',
    score: 85,
    year: 1995
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2020
  },
  {
    title: 'Alien',
    score: 90,
    year: 2004
  }
]

// movies.forEach(function(movie) {
//   console.log(`${movie.title} - ${movie.score}/100`)
// })





//**********************************
//Map createst a new array with the results of calling a callback on every elem in arr

// const doubles = numbers.map(function(num) {
//   return num * 2; 
// })


// const titles = movies.map(function(movie) {
//   return movie.title;
// })





//**********************************
//Arrow Function

// const add = (x,y) => {
//   return x + y;
// }

//Or We have one parameter
// const addOne = x => {
//   return x + x;
// }





//**********************************
//Implicit return works only with arrow functions 
// const addOneSecond = x => (x + x);





//**********************************
//setTimeout & setInterval
// console.log("Hello");

// setTimeout(() => {
//   console.log("...are you still there");
// }, 3000)



// const id = setInterval(() => {
//   console.log(Math.random())
// }, 2000);

// clearInterval(id);





//**********************************
//The filter method
//Creates a new array with all elements that pass the test implemented by the provided function

// const goodMovies = movies.filter(movie => movie.score > 90);

// const goodTitles = movies.filter(m => m.score > 90).map(m => m.title);






//**********************************
//Filter Exercise

// let validName;

// function validUserNames(usernames) {
//   validName = usernames.filter(username => {
//     return username.length < 10;
//   });
// }

function validUserNames(usernames) {
  return usernames.filter(username => {
    return username.length < 10;
  })
}


validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);





//**********************************
//Some return true if any of the array elements pass the test function
//Every tests whether all elements in the array pass the provided function true/false

const exams = [80, 98, 92, 78, 77, 60];

exams.every(score => score >= 75);
exams.some(score => score >= 75);




//**********************************
//Some/Every Exercise

function allEvens(arr) {
  return arr.every(num => num % 2 === 0);
}

allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,4,6,8]) //false





//**********************************
//Reduce

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices) {
//   total += price;
// }
// console.log(total); 


// const total = prices.reduce((total, price) => {
//   return total + price;
// })


const total = prices.reduce((total, price) => {
  return total + price;
})



const highestRated = movies.reduce((bestMovie, currMovie) => {
  if(currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
})




//**********************************
//Arrow function & this
const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullname: function() { //в методі arrow function doesn't work with this
    return `${this.firstName} ${this.lastName}`
  }, 
  schoutName: function() {
    setTimeout(() => {
      console.log(this.firstName)
    }, 2000)
  }
}

