(function () {

    document.body.addEventListener('click', burgerInit);

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNav = e.target.closest('.nav__list');

        if (!burgerIcon && !burgerNav) return;
        if (document.documentElement.clientWidth > 900) return;

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }

    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('.about__play-button');

    modalBtn.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        // e.preventDefault() предотвращает выполнение 
        // стандартного действия элемента, на который кликнули. Например, для ссылки <a>, 
        // это предотвратит переход по ссылке при клике на неё.


        e.preventDefault();
        document.body.classList.toggle('body--modal-opened');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;

        // closest - эта часть проверяет, кликнул ли 
        // пользователь на элемент с классом modal__cancel или внутри него.
        if (target.closest('.modal__cancel') || target.classList.contains('modal__window')) {
            document.body.classList.remove('body--modal-opened');
        }
    }
})();
