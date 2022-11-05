new Swiper('.swiper', {
  slidesPerView: 6,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  grabCursor: true,

  // breakpoints: {

  //     1028: {
  //         slidesPerView:3,
  //         spaceBetween: 30,
  //     },
  //     480: {
  //         slidesPerView:1,
  //         spaceBetween: 10,
  //     }
  // }
});

// Change navbar styles on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
})