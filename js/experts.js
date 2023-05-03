const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    navigation: {
    nextEl: '.experts--next',
    prevEl: '.experts--prev',
    },

    pagination: {
        el: '.swiper-pagination',
      },

    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

})  