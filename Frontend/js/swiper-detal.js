new Swiper(".mySwiper", {
    slidesPerView: 8,
    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".swiper"
    }
});

// new Swiper('.my-custom-swiper', {
//     slidesPerView: 3,
//     wrapper: 'swiper-container',
//     spaceBetween: 30,
//     mousewheel: {
//         sensitivity: 3,
//         eventsTarget: ".my-custom-swiper"
//     },
// });
new Swiper(".trailers-container", {
    containerModifierClass: 'trailers-container',
    wrapperClass: 'trailers-wrappers',
    slideClass: 'trailers-slide',
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".trailers-wrappers"
    }
});

new Swiper(".film-container", {
    containerModifierClass: 'film-container',
    wrapperClass: 'film-wrapper',
    slideClass: 'film-slide',
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 6,
    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".film-container"
    }
});

