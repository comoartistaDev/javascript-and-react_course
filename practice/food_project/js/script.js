window.addEventListener('DOMContentLoaded', () => {
//************************ 
// Tabs
//************************* 

  const tabs = document.querySelectorAll('.tabheader__item'), //таби, на які клікаємо
        tabsContent = document.querySelectorAll('.tabcontent'),//контент табів
        tabsParent = document.querySelector('.tabheader__items'); //батьківський елемент, який містисть всі таби

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener(('click'), event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    };
  });

//************************ 
// Timer
//************************* 
/* Алгоритм створення таймера:
1. Ств. ф-цію, яка буде встановлювати таймер (отримувати елементи і щось з ними робити);
2. Ств. ф-цію, яка визначатиме різницю між часом (вичислити час, який встановилений у користувача і знайти різницю)
3. Ств. ф-цію, яка займатиметься обновленням таймеру 
*/

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

  //************************ 
  // Modal window
  //************************* 
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    // modal.classList.toggle('hide'); //use toggle, add class hide in HTML;
    // modal.style.display = 'block'; //use inline style;
    document.body.style.overflow = 'hidden'; //stop scroll 
    console.log('click');
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  }); 

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    // modal.style.display = 'none';
    // modal.classList.toggle('hide');
    document.body.style.overflow = '';

    clearInterval(modalTimerId); //if user click on modal window setTimout will not start
  } 

  modalCloseBtn.addEventListener('click', closeModal);
      
  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  // const modalTimerId = setTimeout(openModal, 3000); //open model window after 3s

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    };
  }
  
  window.addEventListener('scroll', showModalByScroll);

  //************************ 
  // Classes for Cards
  //************************* 
  class MenuCard { 
    constructor (src, alt, title, descr, price, parentSelector, ...classes) { //...classes = rest operator
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH(); //call function
    }

    changeToUAH() {
       this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML =  `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `; 
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    '111Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container',
    'menu__item'
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    15,
    '.menu .container',
    'menu__item'
  ).render();

//************************ 
// Forms
//************************* 
//Use formData
// const forms = document.querySelectorAll('form');

// const message = { //add message option
//   loading: 'Progress',
//   success: 'Thank you! We will be in touch soon',
//   failure: 'Something went wrong...'
// }

// forms.forEach(item => { //add script for all form our form
//   postData(item); //it's function with 2 our form
// });

// function postData(form) {
//   form.addEventListener('submit', (e) => { 
//       e.preventDefault();

//       //this part for add message on the Page
//       const statusMessage = document.createElement('div'); //create div
//       statusMessage.classList.add('status'); //add class status  to div
//       statusMessage.textContent = message.loading; //put value
//       form.append(statusMessage); //add div with class status to form

//       const request = new XMLHttpRequest(); //create object XMLHttpRequest
//       request.open('POST', 'server.php'); //сollect settings that will help make a request; 'server.php' - the path we refer to

//       //!!for XMLHttpRequest + formData you don't need to write the title, otherwise it's an error
//       //request.setRequestHeader('Content-type', 'multipart/form-data'); 
      
//       const formData = new FormData(form); //in input you must always specify the attribute: name = "name (or another name)";

//       request.send(formData); //sending a request formData

//       request.addEventListener('load', () => { //request tracking
//         if (request.status === 200) { //if success
//           console.log(request.response);
//           statusMessage.textContent = message.success; //show message about success

//           form.reset();
//           setTimeout(() => {
//             statusMessage.remove(); //cleaning form
//           }, 2000);
//         } else {
//           statusMessage.textContent = message.failure; ////show message about mistake
//         }
//       });
//   });
// }


//use JSON
const forms = document.querySelectorAll('form');

const message = { //add message option
  loading: 'Progress',
  success: 'Thank you! We will be in touch soon',
  failure: 'Something went wrong...'
}

forms.forEach(item => { //add script for all form our form
  postData(item); //it's function with 2 our form
});

function postData(form) {
  form.addEventListener('submit', (e) => { 
      e.preventDefault();

      //this part for add message on the Page
      const statusMessage = document.createElement('div'); //create div
      statusMessage.classList.add('status'); //add class status  to div
      statusMessage.textContent = message.loading; //put value
      form.append(statusMessage); //add div with class status to form

      const request = new XMLHttpRequest(); //create object XMLHttpRequest
      request.open('POST', 'server.php'); //сollect settings that will help make a request; 'server.php' - the path we refer to

      request.setRequestHeader('Content-type', 'application/json'); //for JSON we need to put Header: application/json
      
      const formData = new FormData(form); //in input you must always specify the attribute: name = "name (or another name)";

      //object FormData we need to transform in JSON
      //1) first create empty object, use forEach on formData
      const object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });

      //2) then we can use convertation in JSON
      const json = JSON.stringify(object); //method stringify() to transform object in JSON
 
      request.send(json); //sending a request JSON

      request.addEventListener('load', () => { //request tracking
        if (request.status === 200) { //if success
          console.log(request.response);
          statusMessage.textContent = message.success; //show message about success

          form.reset();
          setTimeout(() => {
            statusMessage.remove(); //cleaning form
          }, 2000);
        } else {
          statusMessage.textContent = message.failure; ////show message about mistake
        }
      });
  });
}












});