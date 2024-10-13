(function () {
    //burger menu
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link-opened');


        if (!burgerIcon && !burgerNavLink) return;
        if (document.documentElement.clientWidth > 1200) return;

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }

    //modal

    const modal = document.querySelector('.contact-form');
    const modalButton1 = document.querySelector('.awards__button');
    const modalButton2 = document.querySelector('.about__action-button');

    modalButton1.addEventListener('click', openModal);
    modalButton2.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-contact');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;

        if (target.classList.contains('contact-form')) {
            document.body.classList.remove('body--opened-contact');
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

    const avatarSlider = new Swiper('#avatar-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: true,
        on: {
            slideChange: function () {
                testimonialSlider.slideTo(this.activeIndex); // Синхронизация с нижним слайдером
                updateActiveAvatar();
            },
        },
    });

    const testimonialSlider = new Swiper('#testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
        },
        on: {
            slideChange: function () {
                avatarSlider.slideTo(this.activeIndex); // Синхронизация с аватаром
                updateActiveAvatar();
            },
        },
    });

    function updateActiveAvatar() {
        // Снимаем класс с увеличенными аватарами
        avatarSlider.slides.forEach(slide => {
            slide.classList.remove('testimonials__client-photos--large');
        });

        // Добавляем активный класс текущему слайду
        const activeSlide = avatarSlider.slides[avatarSlider.activeIndex];
        activeSlide.classList.add('testimonials__client-photos--large');
    }

    // Инициализируем первый активный аватар
    updateActiveAvatar();


    //accordion

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;

                const previousControlIcon = accordionOpenedItem.querySelector('.accordion-list__control-icon');
                previousControlIcon.classList.remove('accordion-list__control--active');
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionControl.querySelector('.accordion-list__control-icon').classList.add('accordion-list__control--active');
            } else {
                accordionContent.style.maxHeight = null;
                accordionControl.querySelector('.accordion-list__control-icon').classList.remove('accordion-list__control--active');
            }

        });
    });

})();
