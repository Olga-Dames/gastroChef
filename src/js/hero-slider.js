import Swiper, {
  Navigation,
  Keyboard,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';

import '../../node_modules/swiper/swiper.scss';

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Keyboard, Navigation, EffectFade, Autoplay],
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  //   mousewheel: {
  //     invert: true,
  //   },
  //   spaceBetween: 180,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  spaceBetween: 400,
  speed: 1000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  loop: true,
  autoHeight: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },

  pauseOnMouseEnter: true,
});
