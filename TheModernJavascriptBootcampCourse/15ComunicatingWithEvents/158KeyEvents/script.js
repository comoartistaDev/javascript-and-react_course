const input = document.querySelector('#username');
input.addEventListener('keydown', (e) => {
  console.log('keydown');
})

input.addEventListener('keyup', (e) => {
  console.log('keyup');
})

input.addEventListener('keypress', (e) => {
  console.log('keypress');
})

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    // if (!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUl.append(newItem);
    this.value = '';
  }

});