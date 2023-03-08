const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // slidesPerView: 3,
  speed: 2500,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  spaceBwtween: 15,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      autoplay: false,
      speed: 1000,
    },
    375: {
      slidesPerView: 1.6,
      autoplay: false,
      speed: 1000,
    },
    390: {
      slidesPerView: 1.85,
      autoplay: false,
      speed: 1000,
    },

    430: {
      slidesPerView: 2,
      autoplay: false,
      speed: 1000,
    },

    480: {
      slidesPerView: 2.2,
      autoplay: false,
      speed: 1000,
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
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      autoplay: false,
      loop: true,
    },
  },
});
