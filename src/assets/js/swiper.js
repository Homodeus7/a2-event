const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  mousewheel: {
    forceToAxis: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1500,
  autoplay: {
    delay: 2000,
    speed: 2000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  spaceBwtween: 15,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      autoplay: false,
      speed: 100,
    },
    375: {
      slidesPerView: 1.6,
      autoplay: false,
      speed: 500,
    },
    390: {
      slidesPerView: 1.85,
      autoplay: false,
      speed: 500,
    },

    430: {
      slidesPerView: 2,
      autoplay: false,
      speed: 500,
    },

    480: {
      slidesPerView: 2.2,
      autoplay: false,
      speed: 500,
    },
    576: {
      slidesPerView: 2.7,
      autoplay: false,
      speed: 1000,
    },
    700: {
      slidesPerView: 3,
      autoplay: false,
      speed: 1000,
    },
    768: {
      slidesPerView: 3.5,
      autoplay: false,
      speed: 1000,
    },
    950: {
      slidesPerView: 4.5,
      autoplay: false,
      speed: 1000,
    },
    1025: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.6,
    },
    1400: {
      slidesPerView: 4.4,
    },
    1600: {
      slidesPerView: 5.7,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  mousewheel: {
    forceToAxis: true,
  },
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    stopOnLastSlide: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
