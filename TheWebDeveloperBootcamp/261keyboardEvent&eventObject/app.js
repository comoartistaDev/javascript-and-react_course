const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  console.log(e.key)
  console.log(e.code)
  console.log(e.keyCode)

})

// input.addEventListener('keyup', () => {
//   console.log('keyup')
// })


window.addEventListener('keydown', function(e) {
  switch (e.code) {
    case 'ArrowUp': 
      console.log("UP!");
      break;
    case 'ArrowDown': 
      console.log("DOWN!");
      break;
    case 'ArrowLeft': 
      console.log("LEFT");
      break;
    case 'ArrowRight': 
      console.log("RIGHT");
      break;
    default:
      console.log("IGNORED");
  }
})