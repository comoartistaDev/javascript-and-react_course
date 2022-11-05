const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});


//Запис в localStorage обєкта
const persone = {
  name: 'Alex',
  age: 25
};

const serializedPersone = JSON.stringify(persone); //у формат JSON
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex'))); //у обєкт
