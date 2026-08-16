//for_swiper
const swiper = new Swiper('.product-swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 800,
});
const brands_swiper =new Swiper('.brands-swiper' , {
    slidesPerView: 'auto',
    spaceBetween: 15,
    grabCursor: true,
})
const categorySwiper = new Swiper('.category-swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,

    breakpoints: {
        450: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        576: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },

        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});
//
let hambergery = document.querySelector('.menu_mobile');
let meno = document.querySelector('.meno');
let close_meno = document.querySelector('.btn_close_meno');
let bgc = document.querySelector('.help_menu');
hambergery.addEventListener('click', () => {
    meno.classList.add('open_meno');
    bgc.classList.add('help_menu_open');
    document.body.classList.add('for_meno_mobile');
})
close_meno.addEventListener('click', () => {
    meno.classList.remove('open_meno');
    bgc.classList.remove('help_menu_open');
    document.body.classList.remove('for_meno_mobile');
})
