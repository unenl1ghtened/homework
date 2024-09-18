const openBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');
const body = document.body;

const openModal = () => {
    modal.classList.add('modal--open');
    body.classList.add('body--modal');
}

const closeModal = () => {
    modal.classList.remove('modal--open');
    body.classList.remove('body--modal');
}

openBtn.addEventListener('click', () => {
    openModal();
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeModal();
    }
});
