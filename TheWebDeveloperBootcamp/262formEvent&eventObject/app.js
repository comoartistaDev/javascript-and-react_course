const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
const h1 = document.querySelector('h1');



// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const catName = input.value
//   const newLI = document.createElement('li');
//   newLI.innerText = catName;
//   list.append(newLI);
//   input.value="";
// });


// input.addEventListener('change', (e) => {
//   console.log("Ca")
// })

input.addEventListener('input', (e) => {
  h1.innerHTML = input.value;
})

//61CodingExercise: FormEvents
// const form = document.querySelector('form');
// const product = document.querySelector('#product');
// const quantity = document.querySelector('#qty');

// const groceryList = document.querySelector('#list');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const newList = document.createElement('li');
//   newList.innerText = `${quantity.value} ${product.value}`;
//   groceryList.appendChild(newList);
//   quantity.value="";
//   product.value="";
// })

const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(e) {
  h1.innerText = `Welcome, ${input.value}`;
  if (input.value === '') {
    h1.innerText = 'Enter Your Username';
  }
});