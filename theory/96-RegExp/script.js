// const ans = prompt('Введіть ваше імя');

// const reg = /n/;
// //flafs: i, g, n 

// console.log(ans.search(reg));
// console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace('/./g, "*"')) //. - означає, що ми берем всі елементи, які попадають в строку 
console.log(pass.replace('/\./g, "*"')) // щоб взяти крапку (.), ставимо зворотній слеш (екрануємо). екранувати потрібно: \,^, &, |