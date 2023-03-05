const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 1.75,
    },
    768: {
      slidesPerView: 2.35,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.6,
    },
    1400: {
      slidesPerView: 4.5,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    stopOnLastSlide: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});
