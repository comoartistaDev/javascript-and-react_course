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
        
    modal.addEventListener('click', (e) => {
      if(e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if(e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
      }
    });
  
    const modalTimerId = setTimeout(openModal, 50000); //open model window after 50s
  
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

    const getResource = async (url) => { //роблю запит, чекаю завершення запиту
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json(); //трансформую дані в JS обєкт
    };
  
    // getResource('http://localhost:3000/menu') //запит пішов, тепер його необхідно опрацювати
    //   .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => { //деструктиризація обєкта
    //       new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //ств. конструктора, він буде створ стільки раз, стільки є обєктів в базі
    //     });
    //   });
      
    //axios
    axios.get('http://localhost:3000/menu')
      .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => { //де структиризація обєкта
          new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //ств. конструктора, він буде створ стільки раз, стільки є обєктів в базі
        });
      });
    //Форування верстки на льоту
    // getResource('http://localhost:3000/menu')
    // .then(data => createCard(data));

    // function createCard(data) {
    //   data.forEach(({img, altimg, title, descr, price}) => {
    //     const element = document.createElement('div');

    //     element.classList.add('menu__item');

    //     element.innerHTML =  `
    //       <img src=${img} alt=${altimg}>
    //       <h3 class="menu__item-subtitle">${title}</h3>
    //       <div class="menu__item-descr">${descr}</div>
    //       <div class="menu__item-divider"></div>
    //       <div class="menu__item-price">
    //           <div class="menu__item-cost">Цена:</div>
    //           <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //       </div>
    //   `; 

    //     document.querySelector('.menu .container').append(element);
    //   });
    // }
  
    //************************ 
    // Forms
    //************************* 
    // //Use formData format
    // const forms = document.querySelectorAll('form');

    // const message = { //add message option
    //   loading: 'img/form/spinner.svg',
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
    //       const statusMessage = document.createElement('img'); //create div
    //       statusMessage.src = message.loading; //src or set.Attribute
    //       statusMessage.style.cssText =`
    //         display: block;
    //         margin: 0 auto;
    //       `;
    //       // form.append(statusMessage); //add div with class status to form
    //       form.insertAdjacentElement('afterend', statusMessage);

    //       // request.setRequestHeader('Content-type', 'application/json'); //for JSON we need to put Header: application/json
          
    //       const formData = new FormData(form); //in input you must always specify the attribute: name = "name (or another name)";

    //       //object FormData we need to transform in JSON
    //       //1) first create empty object, use forEach on formData
    //       // const object = {};
    //       // formData.forEach(function(value, key) {
    //       //   object[key] = value;
    //       // });

    //       // //2) then we can use convertation in JSON
    //       // const json = JSON.stringify(object); //method stringify() to transform object in JSON
    
    //       fetch('server.php', {
    //         method: "POST",
    //         // headers: {
    //         //   'Content-type': 'application/json'
    //         // },
    //         body: formData
    //       }).then(data => data.text())
    //       .then(data => {
    //         console.log(data);
    //           showThankModal(message.success); //show message about success
    //           statusMessage.remove(); //cleaning form
    //       }).catch(() => {
    //         showThankModal(message.failure); ////show message about mistake

    //       }).finally(() => {
    //         form.reset();
    //       });
    //   });
    // }

    // function showThankModal(message) {
    //   const prevModalDialog = document.querySelector('.modal__dialog');

    //   prevModalDialog.classList.add('hide');
    //   openModal();

    //   const thanksModal = document.createElement('div');
    //   thanksModal.classList.add('modal__dialog');
    //   thanksModal.innerHTML = `
    //     <div class="modal__content">
    //       <div class="modal__close" data-close></div>
    //       <div class="modal__title">${message}</div>

    //     </div>  
    //   `;

    //   document.querySelector('.modal').append(thanksModal);
    //   setTimeout(() => {
    //     thanksModal.remove();
    //     prevModalDialog.classList.add('show');
    //     prevModalDialog.classList.remove('hide');
    //     closeModal();
    //   }, 4000);
    // }
      


  //Use JSON format
  const forms = document.querySelectorAll('form');

  const message = { //add message option
    loading: 'img/form/spinner.svg',
    success: 'Thank you! We will be in touch soon',
    failure: 'Something went wrong...'
  }

  forms.forEach(item => { //add script for all form our form
    bindPostData(item); //it's function with 2 our form
  });

    const postData = async (url, data) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: data
      });

      return await res.json();
    };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => { 
        e.preventDefault();

        //this part for add message on the Page
        const statusMessage = document.createElement('img'); //create div
        statusMessage.src = message.loading; //src or set.Attribute
        statusMessage.style.cssText =`
          display: block;
          margin: 0 auto;
        `;
        // form.append(statusMessage); //add div with class status to form
        form.insertAdjacentElement('afterend', statusMessage);

        // request.setRequestHeader('Content-type', 'application/json'); //for JSON we need to put Header: application/json
        
        const formData = new FormData(form); //in input you must always specify the attribute: name = "name (or another name)";

        //object FormData we need to transform in JSON
        //1) трансформуємо дані в матрицю масивів, потім формуємо з них обєкт, потім перетворюємо в формат JSON
      const json = JSON.stringify(Object.fromEntries(formData.entries())); 
   

        //2) then we can use convertation in JSON 
        postData('http://localhost:3000/requests', json) //method stringify() to transform object in JSON
        .then(data => { 
          console.log(data);
            showThankModal(message.success); //show message about success
            statusMessage.remove(); //cleaning form
        }).catch(() => {
          showThankModal(message.failure); ////show message about mistake

        }).finally(() => {
          form.reset();
        });
    });
  }

  function showThankModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close></div>
        <div class="modal__title">${message}</div>

      </div>  
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }
    
  // fetch('http://localhost:3000/menu')
  //   .then(data => data.json())
  //   .then(res => console.log(res));



// //************************ 
// // Simple Slider
// //************************* 
//   let slideIndex = 1;
//   const slides = document.querySelectorAll('.offer__slide'),
//         prev = document.querySelector('.offer__slider-prev'),
//         next = document.querySelector('.offer__slider-next'),
//         total = document.querySelector('#total'),
//         current = document.querySelector('#current');

//   showSlides(slideIndex);

//   if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//   } else {
//     total.textContent = slides.length;
//   }

//   function showSlides(n) {
//     if (n > slides.length) {
//       slideIndex = 1;
//     }

//     if (n < 1) {
//       slideIndex = slides.length;
//     }

//     slides.forEach ((item) => item.style.display = 'none');

//     slides[slideIndex - 1].style.display = 'block';

//     if (slides.length < 10) {
//       current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }
//   }

//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

//   prev.addEventListener('click', () => {
//     plusSlides(-1);
//   });

//   next.addEventListener('click', () => {
//     plusSlides(1);
//   });

//************************ 
// Slider carousel
//************************* 
  let offset = 0;
  let slideIndex = 1;

  const slides = document.querySelectorAll('.offer__slide'),
      slider = document.querySelector('.offer__slider'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),
      width = window.getComputedStyle(slidesWrapper).width,
      slidesField = document.querySelector('.offer__slider-inner');

  if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent =  `0${slideIndex}`;
  } else {
      total.textContent = slides.length;
      current.textContent =  slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
      slide.style.width = width;
  });

  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
  `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 6px;
          margin-right: 3px;
          margin-left: 3px;
          cursor: pointer;
          background-color: #fff;
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          opacity: .5;
          transition: opacity .6s ease;
      `;
      if (i == 0) {
          dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);
  }

  next.addEventListener('click', () => {
      if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
          offset = 0;
      } else {
          offset += deleteNotDigits(width); 
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
          slideIndex = 1;
      } else {
          slideIndex++;
      }

      if (slides.length < 10) {
          current.textContent =  `0${slideIndex}`;
      } else {
          current.textContent =  slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
  });

  prev.addEventListener('click', () => {
      if (offset == 0) {
          offset = deleteNotDigits(width) * (slides.length - 1);
      } else {
          offset -= deleteNotDigits(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
          slideIndex = slides.length;
      } else {
          slideIndex--;
      }

      if (slides.length < 10) {
          current.textContent =  `0${slideIndex}`;
      } else {
          current.textContent =  slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
  });

  dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
          const slideTo = e.target.getAttribute('data-slide-to');

          slideIndex = slideTo;
          offset = deleteNotDigits(width) * (slideTo - 1);

          slidesField.style.transform = `translateX(-${offset}px)`;

          if (slides.length < 10) {
              current.textContent =  `0${slideIndex}`;
          } else {
              current.textContent =  slideIndex;
          }

          dots.forEach(dot => dot.style.opacity = ".5");
          dots[slideIndex-1].style.opacity = 1;
      });
  });

  function deleteNotDigits(str) {
      return +str.replace(/\D/g, '');
  }



//************************ 
// Calc
//************************* 

  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;

  function calcTotal() {  
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '_____';
      return;
    }

    if (sex === 'female') {
      result.textContent = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio;
    } else {
      result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio;
    }

  }

  calcTotal();

  function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    document.querySelector(parentSelector).addEventListener('click', (e) => {
      if (e.target.getAttribute('data-ratio')) {
        ratio = +e.target.getAttribute('data-ratio');
      } else {
        sex = e.target.getAttribute('id');
      }

      console.log(ratio, sex);

      elements.forEach(elem => {
        elem.classList.remove(activeClass);
      });

      e.target.classList.add(activeClass);
    });
  }

  getStaticInformation('#gender', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');



});
