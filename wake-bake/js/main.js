(function() {

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

})();