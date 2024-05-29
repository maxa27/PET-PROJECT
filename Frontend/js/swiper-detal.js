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

setTimeout(() => {
    new Swiper(".trailers-container", {
    containerModifierClass: 'trailers-container',
    wrapperClass: 'trailers-wrappers',
    slideClass: 'trailers-slide',
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,
    mousewheel: {
        sensitivity: 3,
        eventsTarget: ".trailers-wrappers"
    }
});
}, 1000)


setTimeout(() => {
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
}, 500)


