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

var element = document.querySelector('.swiper');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };

  if (
    targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right
  ) {
    // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    swiper.autoplay.start();
  } else {
    // Если элемент не видно, то запускаем этот код
    swiper.autoplay.stop();
  }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
  Visible(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);
