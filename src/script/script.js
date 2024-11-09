 var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      445: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },

      545: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },

      686: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      740: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },

      830: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },

      966: {
        slidesPerView: 3,
        spaceBetween: 20
      },

      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1130: {
        slidesPerView: 3.6,
        spaceBetween: 20
      },
      // when window width is >= 640px
      1277: {
        slidesPerView: 4.1,
        spaceBetween: 20
      },

    }
   
});