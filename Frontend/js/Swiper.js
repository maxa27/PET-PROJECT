new Swiper(".mySwiper", {
    slidesPerView: 3,
    effect: "coverflow",
    // grabCursor: true,
    // centredSlides: true,
    
    loop: true, 
    coverflowEffect: {
      rotate: 20,
      stretch: 10,
      depth: 100,
      modifier: 2,
      slideShadows:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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