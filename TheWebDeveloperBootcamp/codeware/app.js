// function sum (numbers) {
//   "use strict";

//   numbers.reduce((total, price) => {
//     console.log(total + price)
//   })
  
// };


// sum([1, 5.2, 4, 0, -1])


function evenOrOdd(number) {
  if(number%2 === 0) {
    return 'even';
  } 
  return 'odd';
}

// evenOrOdd(2);


function min (list){
  return Math.min(...list);
}

// list([5, -5])