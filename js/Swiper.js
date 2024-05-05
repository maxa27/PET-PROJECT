new Swiper(".mySwiper", {
    slidesPerView: 3,
    
    loop: true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      spaceBetween: 10,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".swiper"
    }
  });