'use strict';

//filter
// const names = ['Ivan', 'Ann', 'Ksenia', 'Volodymyr'];

// //get items that are less than 5 characters
// const shortNames = names.filter((name) => {
//   return name.length < 5;
// });

// console.log(shortNames);


//map
// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map(item => {
//   return item.toLowerCase();
// });

// console.log(result);


//every/some
// const some = [4, 'fgf', 'fregfergjeio'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));


//reduce
//with number
// const arr = [4, 5, 1, 3, 2, 6];

// // 0   4
// // 4   5
// // 9   1
// // 10  3
// // 13  2
// // 15  6
// // 21

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

//with string
// const arrString = ['apple', 'pear', 'plum'];
// const resString = arrString.reduce((sum, current) => `${sum}, ${current}`);
// console.log(resString);

// //Case
// //витягнути тільки імена людей

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// };

// const newArr = Object.entries(obj) //entries() - метод обєкта, перетворює в матрицю: отримуємо масив з масивами (масив іван, масив енн...)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]); //отр масив з двома масивами (тільки персон)
// console.log(newArr); 


//Tasks for working with array methods
const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

  console.log(films);

  function showGoodFilms(arr) {
    const filmsRait = arr.filter(item => item.rating >= 8);
    console.log(filmsRait);  
  }

  function showListOfFilms(arr) {
    const filmsList = arr.map(item => item.name)
    console.log(filmsList); 
  }

  function setFilmsIds(arr, i) {
    const filmsSetId = arr.map(item => item.id = [i])
    console.log(filmsSetId); 
  }
  
  showGoodFilms(films);
  showListOfFilms(films);
  setFilmsIds(films);
  
