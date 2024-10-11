(function () {
    //burger menu
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link-oppened');

        if (burgerIcon) {
            console.log('да');
        }

        if (!burgerIcon && !burgerNavLink) return;
        if (document.documentElement.clientWidth > 1200) return;

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }

    //photos
    const nextBtn = document.querySelector('.testimonials-next');
    const prevBtn = document.querySelector('.testimonials-prev');
    const photos = document.querySelectorAll('.testimonials__client-photos img');
    let currentIndex = 0;

    function updateImageClass(index) {
        photos.forEach((photo, i) => {
            if (i === index) {
                photo.classList.add('testimonials__client-photos--large');
            } else {
                photo.classList.remove('testimonials__client-photos--large');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % photos.length; // Переключаем по кругу
        updateImageClass(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Переключаем по кругу назад
        updateImageClass(currentIndex);
    });


    //swiper

    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
        },
        on: {
            slideChange: function () {
                currentIndex = this.realIndex; 
                updateImageClass(currentIndex);
            }
        },
    });

    updateImageClass(currentIndex);

})();
