
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
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1.9,
    },
    600: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
 
    1200: {
      slidesPerView: 4.7,
      spaceBetween: 20,
    },
  },
});