//1. Функція, яка буде встановлювати таймер (отримувати елементи і щось з ними робити)
//2. Функція, яка визначатиме різницю між часом ( вичислити час, який встановилений у користувача і знайти різницю)
//3. Функція яка займатиметься обновленням таймеру 
window.addEventListener('DOMContentLoaded', () => {

const deadline = '2022-10-28';

function getTimeRemaining (endtime) {
  //get the difference between dates
  const t = Date.parse(endtime) - Date.parse(new Date()), //отриману різницю потрібно перетворити в к-сть днів, годин, хвилин, секунд
        //рахуємо к-сть днів: к-сть мс / к-сть мс які знаходяться в 1 дні
        days = Math.floor( (t / (1000 * 60 * 60 * 24)) ), // 1с = 1 000мс; 1000мс х 60с х 60хв х 24 год
        hours = Math.floor( (t / (1000 * 60 * 60) % 24) ), // оператор % повертає залишок від ділення 
        minutes = Math.floor( (t / 1000 / 60) % 60 ),
        seconds = Math.floor( (t / 1000) % 60) ;

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}


//функція, яка встановлює наш таймер на сторінку
function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'), 
        timeInterval = setInterval(updateClock, 1000); //запускати ф-цію кожну секунду ( 1 сек = 10000мс)
        
  updateClock();

  function updateClock() { //функція обновлятиме таймер кожну секунду
    const t = getTimeRemaining(endtime);

    days.innerHTML = t.days//розміщуємо вираховані дані на сторінку
    hours.innerHTML = t.hours
    minutes.innerHTML = t.minutes
    seconds.innerHTML = t.seconds

    if (t.total <= 0) { //якщо час вийшов, таймер більше не обновляємо
      clearInterval(timeInterval);
    }
  }
}
setClock('.timer', deadline);

});