const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  mousewheel: {
    forceToAxis: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    speed: 1500,
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
  speed: 100,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      autoplay: 100000000,
    },
    375: {
      autoplay: 100000000,
    },
    390: {
      autoplay: 100000000,
    },
    430: {
      autoplay: 100000000,
    },

    480: {
      autoplay: 100000000,
    },
  },
});

// const swiper2 = new Swiper(".swiper2", {
//   effect: "fade",
//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
// });
