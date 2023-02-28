
 import Swiper, {Autoplay, EffectCoverflow } from 'swiper';
 import '../../node_modules/swiper/swiper.scss';

 new Swiper(".mySwiper", {
  modules: [Autoplay, EffectCoverflow],
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1.3,
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  speed: 800,

  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      centeredSlides: true,
    },
    480: {
      slidesPerView: 1.9,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2.7,
      spaceBetween: 30,
      centeredSlides: true,
    },
    1200: {
      slidesPerView: 4.8,
      loopedSlides: 6,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
});