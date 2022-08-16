const swiper = new Swiper('.miniatures', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
   nextEl: ".miniatures__arrow-next",
 },
});

const swiper2 = new Swiper('.slider-product__container', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".miniatures__arrow-next",
  },
  thumbs: {
    swiper: swiper,
  },
});