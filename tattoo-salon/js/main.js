(function () {
    //burger menu
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link-opened');

        e.preventDefault();


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
    const modalButton3 = document.querySelector('.book-a-visit__button');

    modalButton1.addEventListener('click', openModal);
    modalButton2.addEventListener('click', openModal);
    modalButton3.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-contact');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;

        if (target.classList.contains('contact-form') || target.closest('.contact-form__close')) {
            document.body.classList.remove('body--opened-contact');
        }
    }


    //photos-testimomnials

    const avatarSliders = document.querySelectorAll('.testimonials__client-photos');
    const testimonialSlider = new Swiper('#testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
        },
        on: {
            slideChange: updateAvatarSlider,
        },
    });

    function updateAvatarSlider() {
        const activeIndex = testimonialSlider.realIndex;

        avatarSliders.forEach((slider, index) => {
            if (index === activeIndex) {
                slider.classList.add('active');
                slider.style.transitionDelay = '0.3s'; // Delay before scaling
            } else {
                slider.classList.remove('active');
                slider.style.transitionDelay = '0s'; // No delay for non-active slides
            }
        });

        if (window.innerWidth < 700) {
            avatarSliders.forEach((slider, index) => {
                if (index === activeIndex) {
                    slider.style.order = '0';
                } else {
                    slider.style.order = index < activeIndex ? '1' : '2'; // Shift left or right
                }
            });
        } else {
            avatarSliders.forEach((slider) => {
                slider.style.order = 'initial';
            });
        }
    }

    // Call the function initially to set the correct active state
    updateAvatarSlider();


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

    //tel

    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+1 (999) 999-9999');
    im.mask(telInputs);

})();
