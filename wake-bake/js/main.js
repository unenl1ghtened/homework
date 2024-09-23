(function () {
    
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const target = e.target;
        const bodyClasses = document.body.classList;

        const burgerIcon = target.closest('.burger-icon');
        const burgerNavLink = target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return;
        if (document.documentElement.clientWidth > 900) return;

        if (!bodyClasses.contains('body--opened-menu')) {
            bodyClasses.add('body--opened-menu');
        } else {
            bodyClasses.remove('body--opened-menu');
        }
    }

})();
