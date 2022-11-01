'use strict';

// console.log('Запит даних');
// const reg = new Promise((resolve, reject) => { //create Promice and Calback function
//   //resolve - обіцянка виконалася правильно
//   //reject - обіцянка не виконалася, щось пішло не так
//   setTimeout(() => {
//     console.log('Підготовка даних');
  
//     const product = {
//       name: 'TV',
//       price: 2000
//     };
  
//     resolve(product);
//   }, 2000);
// }); 

// reg.then((product) => { //метод then виконуєтьс на промісі у випадку позитивного результату(resolve); catch - у випадку негативного (reject)
//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);
// });

//ok код для резолв
// reg.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => { //асинхронний код, передача даних по ланцюжку
//   data.modify = true;
//   return data;

// }).then((data) => { 
//   console.log(data);
// });
//ok код для резолв

//код для реджект
// reg.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       reject();
//     }, 2000);
//   });
// }).then(data => { //асинхронний код, передача даних по ланцюжку
//   data.modify = true;
//   return data;

// }).then((data) => { 
//   console.log(data);
// }).catch(() => {
//   console.error('Помилка');
// });

//код для файнелі = дія віжбудеться незалежно від ходу промісу, завжди відбудеться
// reg.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => { //асинхронний код, передача даних по ланцюжку
//   data.modify = true;
//   return data;

// }).then((data) => { 
//   console.log(data);
// }).catch(() => {
//   console.error('Помилка');
// }).finally(() => {
//   console.log('finally') //у фінедді можна поставити очищення форми
// });

// setTimeout(() => { 
//   console.log('Підготовка даних');

//   const product = {
//     name: 'TV',
//     price: 2000
//   };

      //ця частина виконується тільки при позитивному ісході вище, якщо десь помилка, то вона не виконається
      //цю част можна замінити функцією resolve
//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);

// }, 2000);


//all/raise
const test  = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time); 
  });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

Promise.all([test(1000), test(2000)]).then(() => {//all використ щоб переконатися, що проміс виконається. він чекає загрузки всіх промісів в масив, після чого зось виконує
  console.log("All");
});

Promise.race([test(1000), test(2000)]).then(() => {//race виконує дії, коли перший проміс відпрацював
  console.log("One");
});
