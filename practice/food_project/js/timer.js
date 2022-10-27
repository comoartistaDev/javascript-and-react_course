/* Алгоритм створення таймера:
1. Ств. ф-цію, яка буде встановлювати таймер (отримувати елементи і щось з ними робити);
2. Ств. ф-цію, яка визначатиме різницю між часом (вичислити час, який встановилений у користувача і знайти різницю)
3. Ств. ф-цію, яка займатиметься обновленням таймеру 
*/

window.addEventListener('DOMContentLoaded', () => {

const deadline = '2022-10-27';

function getTimeRemaining (endtime) {
  let days, hours, minutes, seconds;
  const elem = document.querySelector('.timer');
  //get the difference between dates
  const t = Date.parse(endtime) - Date.parse(new Date()); //отриману різницю потрібно перетворити в к-сть днів, годин, хвилин, секунд
        //рахуємо к-сть днів: к-сть мс / к-сть мс які знаходяться в 1 дні
        if (t <= 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
          // elem.innerHTML = 'Hello';
        } else {
          days = Math.floor( (t / (1000 * 60 * 60 * 24)) ), // 1с = 1 000мс; 1000мс х 60с х 60хв х 24 год
          hours = Math.floor( (t / (1000 * 60 * 60) % 24) ), // оператор % повертає залишок від ділення 
          minutes = Math.floor( (t / 1000 / 60) % 60 ),
          seconds = Math.floor( (t / 1000) % 60);
        }

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getZero(num) { 
  if (num >= 0 && num < 10) { // 
    return `0${num}`;
  } else {
    return num;
  }
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

    days.innerHTML = getZero(t.days);//розміщуємо вираховані дані на сторінку
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) { //якщо час вийшов, таймер більше не обновляємо
      clearInterval(timeInterval);
    }
  }
}
setClock('.timer', deadline);

});