(function () {

    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return;
        if (document.documentElement.clientWidth > 900) return;

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }

    const modal = document.querySelector('.modal');
    const openMod = document.querySelector('.main__info-button');

    modal.addEventListener('click', closeModal);
    openMod.addEventListener('click', openModal);

    function openModal(e) {
        e.preventDefault();

        document.body.classList.toggle('body--opened-modal');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;

        if (target.closest('.modal__cancel') || target.classList.contains('.modal__window')) {
            document.body.classList.remove('body--opened-modal');
        }
    }

    //tabs

    const tabsControl = document.querySelector('.tab-control');

    tabsControl.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-control__link');
        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains('tab-control__link--active')) return; if (tabControl.classList.contains('tab-control__link--active')) return;

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-control__link--active');
        const activeContent = document.querySelector('.tab-content--show');

        if (activeControl) {
            activeControl.classList.remove('tab-control__link--active');
        }

        if (activeContent) {
            activeContent.classList.remove('tab-content--show');
        }

        tabControl.classList.add('tab-control__link--active');
        tabContent.classList.add('tab-content--show');
    }

    //accordion

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {
            e.preventDefault();

            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionContent !== accordionOpenedContent) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            };

        });

    });


    //swiper - gallery

    const swiper = new Swiper('.gallery__slider', {
        direction: 'horizontal',
        spaceBetween: 15,
        slidesPerView: 1.5,

        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
        pagination: {
            el: '.gallery__fraction',
            type: "fraction",
        },

        navigation: {
            nextEl: '.gallery__swiper-next',
            prevEl: '.gallery__swiper-prev',
        },

        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            800: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },
        },
    });

    new Swiper('.testimonials__slider', {
        direction: 'horizontal',
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        navigation: {
            nextEl: '.testimonials__swiper-next',
            prevEl: '.testimonials__swiper-prev',
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        }
    });

    //маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);
    
})();