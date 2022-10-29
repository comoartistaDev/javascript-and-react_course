// 'use strict';

// function showThis() {
//   console.log(this); //1) Usually this = window, but if we use 'use strict' this = underfined
// }

// showThis();


// function showThis(a, b) {
//   console.log(this); //Usually this = window, but if we use 'use strict' this = underfined

//   function sum() {
//     console.log(this); //Usually this = window, but if we use 'use strict' this = underfined
//     // return this.a + this.b; //not work
//     return a + b; //lock function, return 9 
//   }

//   console.log(sum()); 
// }
// showThis(4, 5);


// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this); // 2)context in object's method = object;
//   }
// };

// obj.sum(); //request method sum


// function User(name, id) {
//   this.name = name; //link on object
//   this.id = id; //link on object
//   this.humen = true;
//   this.hello = function() {
//     console.log("Hello!" + this.name); //link on object
//   };
// }

// let ivan = new User('Ivan', 23);

 
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// constr user = {
//   name: 'John';
// };


// // 4) manual assignment of the object
// //This is a similar method, the difference is in passing the argument: a string or an array
// sayName.call(user, 'Smith'); //(1 method)
// sayName.apply(user, ['Smith']); //(2 method)

// //(3 method) Create a new function and then assignment context
// function count(num) {
//   return this*num;
// }

// const double = count.bind(2); //put a new function 
// console.log(double(3));
// console.log(double(1v 3));



// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   console.log(this); //this (the context of the call) = button. the same like event.target (event object)
//   this.style.backgroundColor = 'red';
// });


// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this.num); //get 5
//     };

//     say();
//   } 
// };

// obj.sayNumber();


// //It's the same:
// const double = (a) => {
//   return a * 2;
// }

// //or
// const double = (a) => a * 2; //return will add automatically

// //or even
// const double = a => a * 2;