'use strict';

//Перший варіант AJAX який реалізується з допомогою обєкта XML HTTP Request, не дуже актуальний
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest(); //конструктор, який створює новий обєкт. тепер в нього є  свої методи, властивості, події

  request.open('GET', 'js/current5.json');//збирає налаштування, які допоможуть зробити запит request.open(method, url, asaync, login, pass)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //setRequestHeader - Http заголовки
  request.send(); //відправляє запит  

  //readystatechange
  // request.addEventListener('readystatechange', () => { 
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //toFixed() - results in 2 decimal places
  //   } else {
  //     inputUsd.value = "Smt wrong"
  //   }
  // })

  //load = fires once when the request is ready
  request.addEventListener('load', () => { 
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //toFixed() - results in 2 decimal places
    } else {
      inputUsd.value = "Something went wrong"
    }
  })
}); 