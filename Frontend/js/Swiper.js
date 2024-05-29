setTimeout(() => {
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
      slideShadows: false
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
}, 250)

setTimeout(() => {
  new Swiper(".film-containerr", {
    containerModifierClass: 'film-containerr',
    wrapperClass: 'film-wrapperr',
    slideClass: 'film-slidee',
    direction: 'horizontal',
    spaceBetween: 25,
    slidesPerView: 5,
    mousewheel: {
      sensitivity: 3,
      eventsTarget: ".film-containerr"
    }
  });
}, 500)

setTimeout(() => {
  new Swiper(".film-container", {
    containerModifierClass: 'film-container',
    wrapperClass: 'film-wrapper',
    slideClass: 'film-slide',
    direction: 'horizontal',
    spaceBetween: 25,
    slidesPerView: 5,
    mousewheel: {
      sensitivity: 3,
      eventsTarget: ".film-container"
    }
  });
}, 500)

