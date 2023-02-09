/*jshint esversion: 6, expr: true */
/*jslint       browser: true, continue: true,
 devel: true, indent: 2, maxerr: 50,
 newcap: true, nomen: true, plusplus: true,
 regexp: true, sloppy: true, vars: false,
 white: true
 */

/* https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
export const openModal = (e) => {
    const modal = document.querySelector(`#modal-${e.target.dataset.type}`);
    const modalOverlay = document.querySelector('.modal__overlay');
    const btnClose = modal.querySelector('.modal__button--close');

    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');

    if (btnClose) {
        btnClose.addEventListener('click', closeModal);
    }
};

const closeModal = (e) => {
    console.log(e.target.closest('.modal'));
    const modal = e.target.closest('.modal');
    const modalOverlay = document.querySelector('.modal__overlay');
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
};