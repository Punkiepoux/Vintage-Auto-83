const swiper = new Swiper('.swiper-container', {
    effect: 'slide',
    loop: true,
    grabCursor: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: false,
    allowTouchMove: true,
    breakpoints: {
        1400: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 2,
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true, 
    },
    speed: 2000,
});

const photosSwiper = new Swiper('.swiper-photos-container', {
    effect: 'slide',
    loop: true,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: false,
    allowTouchMove: true,
    autoplay: {
        delay: 2500, 
        disableOnInteraction: true, 
    },
    speed: 2000,
});

const evenementSwiper = new Swiper('.swiper-event-container', {
    effect: 'slide',
    loop: true,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true,
    allowTouchMove: true,
    autoplay: {
        delay: 5000, 
        disableOnInteraction: true, 
    },
    speed: 2000,
});