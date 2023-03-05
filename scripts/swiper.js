const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  loop: true,
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
});
