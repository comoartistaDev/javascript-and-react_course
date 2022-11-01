'use strict';

//Preserving order in asynchronous code: use Callback tree (1)
// console.log('Request data');

// setTimeout(() => {
//   console.log('Data preparation');

//   const product = {
//     name: 'TV',
//     price: 2000
//   };

//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);
// }, 2000);

//Preserving order in asynchronous code: use Promise (2)
console.log('Request data');
const reg = new Promise((resolve, reject) => { //create Promise; resolve = if the server responded, everything is ok; reject = the opposite;
  setTimeout(() => {
    console.log('Data preparation');
  
    const product = {
      name: 'TV',
      price: 2000
    };
  
    //If the previous steps are completed, the next part of the code is executed
    resolve(product);
  }, 2000);
}); 

//the code for resolve
reg.then((product) => { //method then = performed on the Promise in the case of a positive result(resolve); or method catch - in case of negative (reject)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
    }, 2000);
  });
}).then(data => { 
  data.modify = true;
  return data;

}).then((data) => { 
  console.log(data);
}).catch(() => {
  console.error('Mistake');
}).finally(() => { //displays actions regardless of resolve/reject; for example: set the form cleaning
  console.log('finally') 
});

//the code for reject
// reg.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       reject();
//     }, 2000);
//   });
// }).then(data => { 
//   data.modify = true;
//   return data;
// }).then((data) => { 
//   console.log(data);
// }).catch(() => {
//   console.error('Mistake');
// });




//+ 2 Method: all/raise
const test  = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time); 
  });
};

// test(1000).then(() => console.log('get 1000ms'));
// test(2000).then(() => console.log('get 2000ms'));

Promise.all([test(1000), test(2000)]).then(() => {//all = used to make sure that the promise will be fulfilled. it waits for all promises to be loaded into the array, after which it executes something
  console.log("All");
});

Promise.race([test(1000), test(2000)]).then(() => {//race = executes when the first promise has run
  console.log("One");
});
