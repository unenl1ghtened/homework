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

    function toggleTab (e) {
        const tabControl = e.target.closest('.tab-control__link'); 
        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains('tab-control__link--active')) return;        if(tabControl.classList.contains('tab-control__link--active')) return;

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

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            };

        });

    });

})();
